var editor = {}, //editor functions
	render = {}, //render and display functions
	app = {}; //setup, events

/*
 * editor
 */

editor.padding = 65;

editor.init = function () {
	'use strict';
	var current = localStorage.getItem('current');
	if (current !== null) {
		$('#editor').val(current);
	}
	CodeMirror.registerHelper('hint', 'scenetime', function (cm, options){
		var cur = cm.getCursor(),
			token = cm.getTokenAt(cur),
			start = token.start,
			end = token.end;
		if (token.string.trim() === '') {
			return false;
		}
		return {
			list : render.closeTerms(token),
			from : CodeMirror.Pos(cur.line, start),
			to : CodeMirror.Pos(cur.line, end)
		}
	});
	CodeMirror.commands.autocomplete = function (cm) {
		var cur = cm.getCursor(),
			token = cm.getTokenAt(cur),
			re = new RegExp('\t', 'g');

		if (token.string.trim().replace(re, '') === '') {
			return CodeMirror.Pass;
		}
	    CodeMirror.showHint(cm, CodeMirror.hint.scenetime);
	};
	editor.elem = $('#editor')[0];
	editor.cm = CodeMirror.fromTextArea(editor.elem, {
		lineNumbers : true,
		extraKeys : {
        	'Tab' : 'autocomplete'
    	},
    	onKeyEvent: function (e, s) {
    		console.log(e);
    		console.log(s);
		    if (s.type == 'keyup') {
		    	
		        CodeMirror.showHint(e, CodeMirror.hint.scenetime);
		    }
		}
	});
	$('.CodeMirror').addClass('editor_page');
	if (current !== null) {
		render.script();
	}
};

editor.resize = function () {
	'use strict';
	editor.cm.setSize('100%', $(window).height() - editor.padding);
};

editor.save = function () {
	'use strict';   
	// grab the content of the form field and place it into a variable
	var textToWrite = editor.cm.getValue();
	//  create a new Blob (html5 magic) that conatins the data from your form feild
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	// Specify the name of the file to be saved
	var fileNameToSaveAs;
	
	if (typeof render.current.title !== 'undefined') {
		fileNameToSaveAs = render.current.title.replace(/ /g, '_');
	} else {
		fileNameToSaveAs = 'untitled';
	}

	fileNameToSaveAs += '.fountain';

	var destroyClickedElement = function (event) {
		// remove the link from the DOM
	    document.body.removeChild(event.target);
	};  
	// Optionally allow the user to choose a file name by providing 
	// an imput field in the HTML and using the collected data here
	// var fileNameToSaveAs = txtFileName.text;

	// create a link for our script to 'click'
	var downloadLink = document.createElement('a');
	//  supply the name of the file (from the var above).
	// you could create the name here but using a var
	// allows more flexability later.
	downloadLink.download = fileNameToSaveAs;
	// provide text for the link. This will be hidden so you
	// can actually use anything you want.
	downloadLink.innerHTML = 'My hidden link';
	    
	// allow our code to work in webkit & Gecko based browsers
	// without the need for a if / else block.
	window.URL = window.URL || window.webkitURL;
	          
	// Create the link Object.
	downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	// when link is clicked call a function to remove it from
	// the DOM in case user wants to save a second file.
	downloadLink.onclick = destroyClickedElement;
	// make sure the link is hidden.
	downloadLink.style.display = 'none';
	// add the link to the DOM
	document.body.appendChild(downloadLink);
	    
	// click the new link
	downloadLink.click();
	// EOF
};

/*
 * editor
 */

render.current = {};

render.init = function () {
	'use strict';
 	render.js = {};
};

render.script = function () {
	'use strict';
 	var text = editor.cm.getValue();
 	app.saveCurrent(text);
	fountain.parse(text, function (result) {
		if (result) {
			render.current = result;
			app.parseTokens(result.tokens);
			$('#view').empty();
			if (result.title && result.html.title_page) {
				$('#view').append($('<div>').addClass('page title-page').html(result.html.title_page));
				$('title').text('scenetime - ' + (result.title || 'Untitled'));
				$('header .text').text(result.title);
			} else {
				$('header .text').text('"Untitled"');
			}
			if (result.html.script !== '<p>undefined</p>') {
				$('#view').append($('<div>').addClass('page').html(result.html.script));
			}
			render.terms = result.tokens.filter(function (obj) {
				if (obj.type 
					&& (obj.type === 'character'
					|| obj.type === 'scene_heading')) {
					return obj;
				}
			}).map(function (obj) {
				if (obj.type === 'character') {
					return obj.text;
				} else if (obj.type === 'scene_heading') {
					return obj.text.split('-')[0].trim();
				}
			});
			render.terms = render.terms.filter(function(item, pos) {
				return render.terms.indexOf(item) == pos;
			})
		}  
		//console.dir(render.current);        
	});
	render.explicitStyles();
};

render.terms = [];

render.closeTerms = function (token) {
	'use strict';
	var re = new RegExp('\t', 'g'),
		filterFunc = function (elem) {
			if (elem.substring(0, token.string.length).trim().replace(re, '') === token.string) {
				return elem;
			}
		};
	return render.terms.filter(filterFunc);
};

render.explicitStyles = function () {
	'use strict';
	var view = $('#view');
	view.find('.title-page h1').css({
		'margin-top': '50%',
	    'margin-bottom': '34px',
	    'text-align': 'center',
	    'width': '90.5%'
	});
};

render.pdf = function () {
	'use strict';
	var doc = new jsPDF();
	// We'll make our own renderer to skip this editor
	var specialElementHandlers = {
		'#view_scale': function (element, renderer) {
			return true;
		}
	};
	// All units are in the set measurement for the document
	// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
	doc.fromHTML($('#view_scale').get(0), 15, 15, {
		'width': 150, 
		'elementHandlers': specialElementHandlers
	});
	console.dir(doc);
	doc.save();
};

render.scale = function () {
	var scale = 0.5,
		w = $(window).width(),
		defaultSize = 1300,
		half,
		scale;

	if (w > app.mobileCutoff) {
		half = w / 2;
		scale = half / (defaultSize / 2);
		console.log(scale);
		$('#view_scale').css('transform', 'scale(' + scale + ')')
	} else {
		scale = w / defaultSize;
		$('#view_scale').css({
			'-webkit-transform' : 'scale(' +  scale + ')',
			'transform' : 'scale(' + scale + ')',
			'-webkit-transform-origin' : 'top left',
	    	'transform-origin' : 'top left'
		});
	}
};

/*
 * app
 */

app.mobileCutoff = 736;

app.state = {
	mode : 'edit',
	tokens : {}
};

app.parseTokens = function (tokens) {
	'use strict';
	var i;
	for (i = 0; i < tokens.length; i++) {
		if (typeof app.state.tokens[tokens[i].type] === 'undefined'){
			app.state.tokens[tokens[i].type] = [];
		}
		if (app.state.tokens[tokens[i].type].indexOf(tokens[i].text) === -1) {
			app.state.tokens[tokens[i].type].push(tokens[i].text);
		}
	}
}

app.toggle = function () {
	'use strict';
	if (app.state.mode === 'edit') {
		render.script();
		$('.editor_page').hide();
		$('.render_page').show();
		app.state.mode = 'view';
	} else if (app.state.mode === 'view') {
		$('.render_page').hide();
		$('.editor_page').show();
		if (render.current.title) {
			$('header .text').text(render.current.title);
		} else {
			$('header .text').text('Editor');
		}
		app.state.mode = 'edit';
	}
};

app.header = function () {
	'use strict';
	$('header').width($(window).width());
};

app.saveCurrent = function (text) {
	'use strict';
	localStorage.setItem('current', text);
};

app.init = function () {
	'use strict';
	editor.init();
	render.init();

	app.resize();
	$(window).resize(app.resize);
};

app.resize = function () {
	'use strict';
	app.header();
	render.scale();
	editor.resize();

	if ($(window).width() > app.mobileCutoff) {
		$('#view_wrapper').show().addClass('desktop');
		$('.CodeMirror').css('width', '50%');
	} else {
		$('#view_wrapper').removeClass('desktop');
		$('.CodeMirror').css('width', '100%');
		app.toggle();
	}
};

$(document).ready(app.init);


$(document).idle({
	onIdle: function () {
		render.script();
	},
	idle: 2000
});