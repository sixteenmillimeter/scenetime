/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/**
 *  JQuery Idle.
 *  A dead simple jQuery plugin that executes a callback function if the user is idle.
 *  About: Author
 *  Henrique Boaventura (hboaventura@gmail.com).
 *  About: Version
 *  1.2.6
 **/
!function(n){"use strict";n.fn.idle=function(e){var t,i,o={idle:6e4,events:"mousemove keydown mousedown touchstart",onIdle:function(){},onActive:function(){},onHide:function(){},onShow:function(){},keepTracking:!0,startAtIdle:!1,recurIdleCall:!1},c=e.startAtIdle||!1,d=!e.startAtIdle||!0,l=n.extend({},o,e),u=null;return n(this).on("idle:stop",{},function(){n(this).off(l.events),l.keepTracking=!1,t(u,l)}),t=function(n,e){return c&&(e.onActive.call(),c=!1),clearTimeout(n),e.keepTracking?i(e):void 0},i=function(n){var e,t=n.recurIdleCall?setInterval:setTimeout;return e=t(function(){c=!0,n.onIdle.call()},n.idle)},this.each(function(){u=i(l),n(this).on(l.events,function(){u=t(u,l)}),(l.onShow||l.onHide)&&n(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange",function(){document.hidden||document.webkitHidden||document.mozHidden||document.msHidden?d&&(d=!1,l.onHide.call()):d||(d=!0,l.onShow.call())})})}}(jQuery);
/*

jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser, jQuery
Copyright (c) 2012 2012 Willow Systems Corporation, willow-systems.com
 jsPDF 0.9.0rc1 ( 2013-04-07T16:52 commit ID d95d8f69915bb999f6704e8021108e2e755bd868 )
Copyright (c) 2010-2012 James Hall, james@snapshotmedia.co.uk, https://github.com/MrRio/jsPDF
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.

            -----------------------------------------------------------------------------------------------
            JavaScript PubSub library
            2012 (c) ddotsenko@willowsystems.com
            based on Peter Higgins (dante@dojotoolkit.org)
            Loosely based on Dojo publish/subscribe API, limited in scope. Rewritten blindly.
            Original is (c) Dojo Foundation 2004-2010. Released under either AFL or new BSD, see:
            http://dojofoundation.org/license for more information.
            -----------------------------------------------------------------------------------------------

jsPDF addImage plugin (JPEG only at this time)
Copyright (c) 2012 https://github.com/siefkenj/

jsPDF Silly SVG plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com

jsPDF split_text_to_size plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.

jsPDF standard_fonts_metrics plugin
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
MIT license.
*/
var jsPDF = function() {
    function f(g, d, e, h) {
        g = "undefined" === typeof g ? "p" : g.toString().toLowerCase();
        "undefined" === typeof d && (d = "mm");
        "undefined" === typeof e && (e = "a4");
        "undefined" === typeof h && "undefined" === typeof zpipe && (h = !1);
        var a = e.toString().toLowerCase(),
            p = [],
            j = 0,
            m = h;
        h = {
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [420.94, 595.28],
            letter: [612, 792],
            legal: [612, 1008]
        };
        var u = "0 g",
            c = 0,
            q = [],
            C = 2,
            F = !1,
            H = [],
            n = {}, x = {}, z = 16,
            A, y, s, r, I = {
                title: "",
                subject: "",
                author: "",
                keywords: "",
                creator: ""
            }, w = 0,
            aa = 0,
            D = {}, G = new k(D),
            B, v = function(c) {
                return c.toFixed(2)
            }, V = function(c) {
                var e = c.toFixed(0);
                return 10 > c ? "0" + e : e
            }, l = function(e) {
                F ? q[c].push(e) : (p.push(e), j += e.length + 1)
            }, N = function() {
                C++;
                H[C] = j;
                l(C + " 0 obj");
                return C
            }, Q = function(c) {
                l("stream");
                l(c);
                l("endstream")
            }, J, ca, R, t = function(c, e) {
                var d;
                d = c;
                var j = e,
                    a, h, b, p, g, m;
                void 0 === j && (j = {});
                a = j.sourceEncoding ? a : "Unicode";
                b = j.outputEncoding;
                if ((j.autoencode || b) && n[A].metadata && n[A].metadata[a] && n[A].metadata[a].encoding)
                    if (a = n[A].metadata[a].encoding, !b && n[A].encoding && (b = n[A].encoding), !b && a.codePages && (b = a.codePages[0]), "string" === typeof b && (b = a[b]), b) {
                        g = !1;
                        p = [];
                        a = 0;
                        for (h = d.length; a < h; a++)(m = b[d.charCodeAt(a)]) ? p.push(String.fromCharCode(m)) : p.push(d[a]), p[a].charCodeAt(0) >> 8 && (g = !0);
                        d = p.join("")
                    }
                for (a = d.length; void 0 === g && 0 !== a;) d.charCodeAt(a - 1) >> 8 && (g = !0), a--;
                if (g) {
                    p = j.noBOM ? [] : [254, 255];
                    a = 0;
                    for (h = d.length; a < h; a++) {
                        m = d.charCodeAt(a);
                        j = m >> 8;
                        if (j >> 8) throw Error("Character at position " + a.toString(10) + " of string '" + d + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                        p.push(j);
                        p.push(m - (j << 8))
                    }
                    d = String.fromCharCode.apply(void 0, p)
                }
                return d.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            }, W = function() {
                c++;
                F = !0;
                q[c] = [];
                l(v(0.200025 * r) + " w");
                l("0 G");
                0 !== w && l(w.toString(10) + " J");
                0 !== aa && l(aa.toString(10) + " j");
                G.publish("addPage", {
                    pageNumber: c
                })
            }, E = function(c, a) {
                var d;
                void 0 === c && (c = n[A].fontName);
                void 0 === a && (a = n[A].fontStyle);
                try {
                    d = x[c][a]
                } catch (e) {
                    d = void 0
                }
                if (!d) throw Error("Unable to look up font label for font '" + c + "', '" + a + "'. Refer to getFontList() for available fonts.");
                return d
            }, K = function() {
                F = !1;
                p = [];
                H = [];
                l("%PDF-1.3");
                J = s * r;
                ca = y * r;
                var a, d, e, b, h;
                for (a = 1; a <= c; a++) {
                    N();
                    l("<</Type /Page");
                    l("/Parent 1 0 R");
                    l("/Resources 2 0 R");
                    l("/Contents " + (C + 1) + " 0 R>>");
                    l("endobj");
                    d = q[a].join("\n");
                    N();
                    if (m) {
                        e = [];
                        for (b = 0; b < d.length; ++b) e[b] = d.charCodeAt(b);
                        h = adler32cs.from(d);
                        d = new Deflater(6);
                        d.append(new Uint8Array(e));
                        d = d.flush();
                        e = [new Uint8Array([120, 156]), new Uint8Array(d), new Uint8Array([h & 255, h >> 8 & 255, h >> 16 & 255, h >> 24 & 255])];
                        d = "";
                        for (b in e) e.hasOwnProperty(b) && (d +=
                            String.fromCharCode.apply(null, e[b]));
                        l("<</Length " + d.length + " /Filter [/FlateDecode]>>")
                    } else l("<</Length " + d.length + ">>");
                    Q(d);
                    l("endobj")
                }
                H[1] = j;
                l("1 0 obj");
                l("<</Type /Pages");
                R = "/Kids [";
                for (b = 0; b < c; b++) R += 3 + 2 * b + " 0 R ";
                l(R + "]");
                l("/Count " + c);
                l("/MediaBox [0 0 " + v(J) + " " + v(ca) + "]");
                l(">>");
                l("endobj");
                for (var g in n) n.hasOwnProperty(g) && (a = n[g], a.objectNumber = N(), l("<</BaseFont/" + a.PostScriptName + "/Type/Font"), "string" === typeof a.encoding && l("/Encoding/" + a.encoding), l("/Subtype/Type1>>"),
                    l("endobj"));
                G.publish("putResources");
                H[2] = j;
                l("2 0 obj");
                l("<<");
                l("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");
                l("/Font <<");
                for (var f in n) n.hasOwnProperty(f) && l("/" + f + " " + n[f].objectNumber + " 0 R");
                l(">>");
                l("/XObject <<");
                G.publish("putXobjectDict");
                l(">>");
                l(">>");
                l("endobj");
                G.publish("postPutResources");
                N();
                l("<<");
                l("/Producer (jsPDF 20120619)");
                I.title && l("/Title (" + t(I.title) + ")");
                I.subject && l("/Subject (" + t(I.subject) + ")");
                I.author && l("/Author (" + t(I.author) + ")");
                I.keywords && l("/Keywords (" +
                    t(I.keywords) + ")");
                I.creator && l("/Creator (" + t(I.creator) + ")");
                g = new Date;
                l("/CreationDate (D:" + [g.getFullYear(), V(g.getMonth() + 1), V(g.getDate()), V(g.getHours()), V(g.getMinutes()), V(g.getSeconds())].join("") + ")");
                l(">>");
                l("endobj");
                N();
                l("<<");
                l("/Type /Catalog");
                l("/Pages 1 0 R");
                l("/OpenAction [3 0 R /FitH null]");
                l("/PageLayout /OneColumn");
                G.publish("putCatalog");
                l(">>");
                l("endobj");
                g = j;
                l("xref");
                l("0 " + (C + 1));
                l("0000000000 65535 f ");
                for (f = 1; f <= C; f++) a = H[f].toFixed(0), a = 10 > a.length ? Array(11 -
                    a.length).join("0") + a : a, l(a + " 00000 n ");
                l("trailer");
                l("<<");
                l("/Size " + (C + 1));
                l("/Root " + C + " 0 R");
                l("/Info " + (C - 1) + " 0 R");
                l(">>");
                l("startxref");
                l(g);
                l("%%EOF");
                F = !0;
                return p.join("\n")
            }, Y = function(c) {
                var a = "S";
                if ("F" === c) a = "f";
                else if ("FD" === c || "DF" === c) a = "B";
                return a
            }, Z = function(c, a) {
                var d, e, b, j;
                switch (c) {
                    case void 0:
                        return K();
                    case "save":
                        if (navigator.getUserMedia && (void 0 === window.URL || void 0 === window.URL.createObjectURL)) return D.output("dataurlnewwindow");
                        d = K();
                        e = d.length;
                        b = new Uint8Array(new ArrayBuffer(e));
                        for (j = 0; j < e; j++) b[j] = d.charCodeAt(j);
                        d = new Blob([b], {
                            type: "application/pdf"
                        });
                        saveAs(d, a);
                        break;
                    case "datauristring":
                    case "dataurlstring":
                        return "data:application/pdf;base64," + btoa(K());
                    case "datauri":
                    case "dataurl":
                        document.location.href = "data:application/pdf;base64," + btoa(K());
                        break;
                    case "dataurlnewwindow":
                        window.open("data:application/pdf;base64," + btoa(K()));
                        break;
                    default:
                        throw Error('Output type "' + c + '" is not supported.');
                }
            };
        if ("pt" === d) r = 1;
        else if ("mm" === d) r = 72 / 25.4;
        else if ("cm" === d) r = 72 / 2.54;
        else if ("in" === d) r = 72;
        else throw "Invalid unit: " + d; if (h.hasOwnProperty(a)) y = h[a][1] / r, s = h[a][0] / r;
        else try {
            y = e[1], s = e[0]
        } catch (M) {
            throw "Invalid format: " + e;
        }
        if ("p" === g || "portrait" === g) g = "p", s > y && (g = s, s = y, y = g);
        else if ("l" === g || "landscape" === g) g = "l", y > s && (g = s, s = y, y = g);
        else throw "Invalid orientation: " + g;
        D.internal = {
            pdfEscape: t,
            getStyle: Y,
            getFont: function() {
                return n[E.apply(D, arguments)]
            },
            getFontSize: function() {
                return z
            },
            btoa: btoa,
            write: function(c, a, d, e) {
                l(1 === arguments.length ? c : Array.prototype.join.call(arguments,
                    " "))
            },
            getCoordinateString: function(c) {
                return v(c * r)
            },
            getVerticalCoordinateString: function(c) {
                return v((y - c) * r)
            },
            collections: {},
            newObject: N,
            putStream: Q,
            events: G,
            scaleFactor: r,
            pageSize: {
                width: s,
                height: y
            },
            output: function(c, a) {
                return Z(c, a)
            }
        };
        D.addPage = function() {
            W();
            return this
        };
        D.text = function(c, a, d, e) {
            var b, j;
            "number" === typeof c && (b = c, j = a, c = d, a = b, d = j);
            "string" === typeof c && c.match(/[\n\r]/) && (c = c.split(/\r\n|\r|\n/g));
            "undefined" === typeof e ? e = {
                noBOM: !0,
                autoencode: !0
            } : (void 0 === e.noBOM && (e.noBOM = !0),
                void 0 === e.autoencode && (e.autoencode = !0));
            if ("string" === typeof c) e = t(c, e);
            else if (c instanceof Array) {
                c = c.concat();
                for (b = c.length - 1; - 1 !== b; b--) c[b] = t(c[b], e);
                e = c.join(") Tj\nT* (")
            } else throw Error('Type of text must be string or Array. "' + c + '" is not recognized.');
            l("BT\n/" + A + " " + z + " Tf\n" + z + " TL\n" + u + "\n" + v(a * r) + " " + v((y - d) * r) + " Td\n(" + e + ") Tj\nET");
            return this
        };
        D.line = function(c, a, d, e) {
            l(v(c * r) + " " + v((y - a) * r) + " m " + v(d * r) + " " + v((y - e) * r) + " l S");
            return this
        };
        D.lines = function(c, a, d, e, b) {
            var j, g,
                h, p, m, f, q, u;
            "number" === typeof c && (j = c, g = a, c = d, a = j, d = g);
            b = Y(b);
            e = void 0 === e ? [1, 1] : e;
            l((a * r).toFixed(3) + " " + ((y - d) * r).toFixed(3) + " m ");
            j = e[0];
            e = e[1];
            g = c.length;
            u = d;
            for (d = 0; d < g; d++) h = c[d], 2 === h.length ? (a = h[0] * j + a, u = h[1] * e + u, l((a * r).toFixed(3) + " " + ((y - u) * r).toFixed(3) + " l")) : (p = h[0] * j + a, m = h[1] * e + u, f = h[2] * j + a, q = h[3] * e + u, a = h[4] * j + a, u = h[5] * e + u, l((p * r).toFixed(3) + " " + ((y - m) * r).toFixed(3) + " " + (f * r).toFixed(3) + " " + ((y - q) * r).toFixed(3) + " " + (a * r).toFixed(3) + " " + ((y - u) * r).toFixed(3) + " c"));
            l(b);
            return this
        };
        D.rect = function(c, a, d, e, b) {
            b = Y(b);
            l([v(c * r), v((y - a) * r), v(d * r), v(-e * r), "re", b].join(" "));
            return this
        };
        D.triangle = function(c, a, d, e, b, j, h) {
            this.lines([
                [d - c, e - a],
                [b - d, j - e],
                [c - b, a - j]
            ], c, a, [1, 1], h);
            return this
        };
        D.roundedRect = function(c, a, d, e, b, j, h) {
            var g = 4 / 3 * (Math.SQRT2 - 1);
            this.lines([
                [d - 2 * b, 0],
                [b * g, 0, b, j - j * g, b, j],
                [0, e - 2 * j],
                [0, j * g, -(b * g), j, -b, j],
                [-d + 2 * b, 0],
                [-(b * g), 0, -b, -(j * g), -b, -j],
                [0, -e + 2 * j],
                [0, -(j * g), b * g, -j, b, -j]
            ], c + b, a, [1, 1], h);
            return this
        };
        D.ellipse = function(c, a, d, e, b) {
            b = Y(b);
            var j = 4 / 3 * (Math.SQRT2 -
                1) * d,
                g = 4 / 3 * (Math.SQRT2 - 1) * e;
            l([v((c + d) * r), v((y - a) * r), "m", v((c + d) * r), v((y - (a - g)) * r), v((c + j) * r), v((y - (a - e)) * r), v(c * r), v((y - (a - e)) * r), "c"].join(" "));
            l([v((c - j) * r), v((y - (a - e)) * r), v((c - d) * r), v((y - (a - g)) * r), v((c - d) * r), v((y - a) * r), "c"].join(" "));
            l([v((c - d) * r), v((y - (a + g)) * r), v((c - j) * r), v((y - (a + e)) * r), v(c * r), v((y - (a + e)) * r), "c"].join(" "));
            l([v((c + j) * r), v((y - (a + e)) * r), v((c + d) * r), v((y - (a + g)) * r), v((c + d) * r), v((y - a) * r), "c", b].join(" "));
            return this
        };
        D.circle = function(c, a, d, e) {
            return this.ellipse(c, a, d, d, e)
        };
        D.setProperties =
            function(c) {
                for (var a in I) I.hasOwnProperty(a) && c[a] && (I[a] = c[a]);
                return this
        };
        D.setFontSize = function(c) {
            z = c;
            return this
        };
        D.setFont = function(c, a) {
            A = E(c, a);
            return this
        };
        D.setFontStyle = D.setFontType = function(c) {
            A = E(void 0, c);
            return this
        };
        D.getFontList = function() {
            var c = {}, a, d, e;
            for (a in x)
                if (x.hasOwnProperty(a))
                    for (d in c[a] = e = [], x[a]) x[a].hasOwnProperty(d) && e.push(d);
            return c
        };
        D.setLineWidth = function(c) {
            l((c * r).toFixed(2) + " w");
            return this
        };
        D.setDrawColor = function(c, a, d, e) {
            c = void 0 === a || void 0 === e &&
                c === a === d ? "string" === typeof c ? c + " G" : v(c / 255) + " G" : void 0 === e ? "string" === typeof c ? [c, a, d, "RG"].join(" ") : [v(c / 255), v(a / 255), v(d / 255), "RG"].join(" ") : "string" === typeof c ? [c, a, d, e, "K"].join(" ") : [v(c), v(a), v(d), v(e), "K"].join(" ");
            l(c);
            return this
        };
        D.setFillColor = function(c, a, d, e) {
            c = void 0 === a || void 0 === e && c === a === d ? "string" === typeof c ? c + " g" : v(c / 255) + " g" : void 0 === e ? "string" === typeof c ? [c, a, d, "rg"].join(" ") : [v(c / 255), v(a / 255), v(d / 255), "rg"].join(" ") : "string" === typeof c ? [c, a, d, e, "k"].join(" ") : [v(c),
                v(a), v(d), v(e), "k"
            ].join(" ");
            l(c);
            return this
        };
        D.setTextColor = function(c, a, d) {
            u = 0 === c && 0 === a && 0 === d || "undefined" === typeof a ? (c / 255).toFixed(3) + " g" : [(c / 255).toFixed(3), (a / 255).toFixed(3), (d / 255).toFixed(3), "rg"].join(" ");
            return this
        };
        D.CapJoinStyles = {
            "0": 0,
            butt: 0,
            but: 0,
            bevel: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            milter: 2
        };
        D.setLineCap = function(c) {
            var a = this.CapJoinStyles[c];
            if (void 0 === a) throw Error("Line cap style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            w = a;
            l(a.toString(10) + " J");
            return this
        };
        D.setLineJoin = function(c) {
            var a = this.CapJoinStyles[c];
            if (void 0 === a) throw Error("Line join style of '" + c + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
            aa = a;
            l(a.toString(10) + " j");
            return this
        };
        D.output = Z;
        D.save = function(c) {
            D.output("save", c)
        };
        for (B in f.API)
            if (f.API.hasOwnProperty(B))
                if ("events" === B && f.API.events.length) {
                    g = G;
                    d = f.API.events;
                    h = a = e = void 0;
                    for (h = d.length - 1; - 1 !== h; h--) e = d[h][0], a = d[h][1], g.subscribe.apply(g, [e].concat("function" ===
                        typeof a ? [a] : a))
                } else D[B] = f.API[B];
        B = [
            ["Helvetica", "helvetica", "normal"],
            ["Helvetica-Bold", "helvetica", "bold"],
            ["Helvetica-Oblique", "helvetica", "italic"],
            ["Helvetica-BoldOblique", "helvetica", "bolditalic"],
            ["Courier", "courier", "normal"],
            ["Courier-Bold", "courier", "bold"],
            ["Courier-Oblique", "courier", "italic"],
            ["Courier-BoldOblique", "courier", "bolditalic"],
            ["Times-Roman", "times", "normal"],
            ["Times-Bold", "times", "bold"],
            ["Times-Italic", "times", "italic"],
            ["Times-BoldItalic", "times", "bolditalic"]
        ];
        g = 0;
        for (d = B.length; g < d; g++) {
            h = B[g][0];
            var T = B[g][1],
                a = B[g][2];
            e = "F" + (b(n) + 1).toString(10);
            h = n[e] = {
                id: e,
                PostScriptName: h,
                fontName: T,
                fontStyle: a,
                encoding: "StandardEncoding",
                metadata: {}
            };
            var ha = e;
            void 0 === x[T] && (x[T] = {});
            x[T][a] = ha;
            G.publish("addFont", h);
            a = e;
            e = B[g][0].split("-");
            h = e[0];
            e = e[1] || "";
            void 0 === x[h] && (x[h] = {});
            x[h][e] = a
        }
        G.publish("addFonts", {
            fonts: n,
            dictionary: x
        });
        A = "F1";
        W();
        G.publish("initialized");
        return D
    }
    "undefined" === typeof btoa && (window.btoa = function(b) {
        var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(""),
            e, h, a, p, j = 0,
            m = 0,
            f = "",
            f = [];
        do e = b.charCodeAt(j++), h = b.charCodeAt(j++), a = b.charCodeAt(j++), p = e << 16 | h << 8 | a, e = p >> 18 & 63, h = p >> 12 & 63, a = p >> 6 & 63, p &= 63, f[m++] = d[e] + d[h] + d[a] + d[p]; while (j < b.length);
        f = f.join("");
        b = b.length % 3;
        return (b ? f.slice(0, b - 3) : f) + "===".slice(b || 3)
    });
    "undefined" === typeof atob && (window.atob = function(b) {
        var d, e, h, a, p, j = 0,
            m = 0;
        a = "";
        var f = [];
        if (!b) return b;
        b += "";
        do d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)),
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(j++)), h = d << 18 | e << 12 | a << 6 | p, d = h >> 16 & 255, e = h >> 8 & 255, h &= 255, 64 === a ? f[m++] = String.fromCharCode(d) : 64 === p ? f[m++] = String.fromCharCode(d, e) : f[m++] = String.fromCharCode(d, e, h);
        while (j < b.length);
        return a = f.join("")
    });
    var b = "function" === typeof Object.keys ? function(b) {
            return Object.keys(b).length
        } : function(b) {
            var d = 0,
                e;
            for (e in b) b.hasOwnProperty(e) &&
                d++;
            return d
        }, k = function(b) {
            this.topics = {};
            this.context = b;
            this.publish = function(d, b) {
                if (this.topics[d]) {
                    var h = this.topics[d],
                        a = [],
                        p, j, g, f, c = function() {};
                    b = Array.prototype.slice.call(arguments, 1);
                    j = 0;
                    for (g = h.length; j < g; j++) f = h[j], p = f[0], f[1] && (f[0] = c, a.push(j)), p.apply(this.context, b);
                    j = 0;
                    for (g = a.length; j < g; j++) h.splice(a[j], 1)
                }
            };
            this.subscribe = function(d, b, h) {
                this.topics[d] ? this.topics[d].push([b, h]) : this.topics[d] = [
                    [b, h]
                ];
                return {
                    topic: d,
                    callback: b
                }
            };
            this.unsubscribe = function(d) {
                if (this.topics[d.topic]) {
                    var b =
                        this.topics[d.topic],
                        h, a;
                    h = 0;
                    for (a = b.length; h < a; h++) b[h][0] === d.callback && b.splice(h, 1)
                }
            }
        };
    f.API = {
        events: []
    };
    return f
}();
(function(f) {
    var b = function() {
        var b = this.internal.collections.addImage_images,
            d;
        for (d in b) {
            var e = b[d],
                h = this.internal.newObject(),
                a = this.internal.write,
                p = this.internal.putStream;
            e.n = h;
            a("<</Type /XObject");
            a("/Subtype /Image");
            a("/Width " + e.w);
            a("/Height " + e.h);
            "Indexed" === e.cs ? a("/ColorSpace [/Indexed /DeviceRGB " + (e.pal.length / 3 - 1) + " " + (h + 1) + " 0 R]") : (a("/ColorSpace /" + e.cs), "DeviceCMYK" === e.cs && a("/Decode [1 0 1 0 1 0 1 0]"));
            a("/BitsPerComponent " + e.bpc);
            "f" in e && a("/Filter /" + e.f);
            "dp" in e &&
                a("/DecodeParms <<" + e.dp + ">>");
            if ("trns" in e && e.trns.constructor == Array)
                for (var j = "", f = 0; f < e.trns.length; f++) j += e[j][f] + " " + e.trns[f] + " ", a("/Mask [" + j + "]");
            "smask" in e && a("/SMask " + (h + 1) + " 0 R");
            a("/Length " + e.data.length + ">>");
            p(e.data);
            a("endobj")
        }
    }, k = function() {
            var b = this.internal.collections.addImage_images,
                d = this.internal.write,
                e, h;
            for (h in b) e = b[h], d("/I" + e.i, e.n, "0", "R")
        };
    f.addImage = function(g, d, e, h, a, p) {
        if ("object" === typeof g && 1 === g.nodeType) {
            d = document.createElement("canvas");
            d.width = g.clientWidth;
            d.height = g.clientHeight;
            var j = d.getContext("2d");
            if (!j) throw "addImage requires canvas to be supported by browser.";
            j.drawImage(g, 0, 0, d.width, d.height);
            g = d.toDataURL("image/jpeg");
            d = "JPEG"
        }
        if ("JPEG" !== d.toUpperCase()) throw Error("addImage currently only supports format 'JPEG', not '" + d + "'");
        var f;
        d = this.internal.collections.addImage_images;
        var j = this.internal.getCoordinateString,
            u = this.internal.getVerticalCoordinateString;
        "data:image/jpeg;base64," === g.substring(0, 23) && (g = atob(g.replace("data:image/jpeg;base64,",
            "")));
        if (d)
            if (Object.keys) f = Object.keys(d).length;
            else {
                var c = d,
                    q = 0;
                for (f in c) c.hasOwnProperty(f) && q++;
                f = q
            } else f = 0, this.internal.collections.addImage_images = d = {}, this.internal.events.subscribe("putResources", b), this.internal.events.subscribe("putXobjectDict", k);
        a: {
            var c = g,
                C;
            if (255 === !c.charCodeAt(0) || 216 === !c.charCodeAt(1) || 255 === !c.charCodeAt(2) || 224 === !c.charCodeAt(3) || 74 === !c.charCodeAt(6) || 70 === !c.charCodeAt(7) || 73 === !c.charCodeAt(8) || 70 === !c.charCodeAt(9) || 0 === !c.charCodeAt(10)) throw Error("getJpegSize requires a binary jpeg file");
            C = 256 * c.charCodeAt(4) + c.charCodeAt(5);
            for (var q = 4, F = c.length; q < F;) {
                q += C;
                if (255 !== c.charCodeAt(q)) throw Error("getJpegSize could not find the size of the image");
                if (192 === c.charCodeAt(q + 1)) {
                    C = 256 * c.charCodeAt(q + 5) + c.charCodeAt(q + 6);
                    c = 256 * c.charCodeAt(q + 7) + c.charCodeAt(q + 8);
                    c = [c, C];
                    break a
                } else q += 2, C = 256 * c.charCodeAt(q) + c.charCodeAt(q + 1)
            }
            c = void 0
        }
        g = {
            w: c[0],
            h: c[1],
            cs: "DeviceRGB",
            bpc: 8,
            f: "DCTDecode",
            i: f,
            data: g
        };
        d[f] = g;
        !a && !p && (p = a = -96);
        0 > a && (a = -72 * g.w / a / this.internal.scaleFactor);
        0 > p && (p = -72 * g.h / p / this.internal.scaleFactor);
        0 === a && (a = p * g.w / g.h);
        0 === p && (p = a * g.h / g.w);
        this.internal.write("q", j(a), "0 0", j(p), j(e), u(h + p), "cm /I" + g.i, "Do Q");
        return this
    }
})(jsPDF.API);
(function(f) {
    function b(a, b, d, e) {
        this.pdf = a;
        this.x = b;
        this.y = d;
        this.settings = e;
        this.init();
        return this
    }

    function k(b) {
        var d = a[b];
        if (d) return d;
        d = {
            "xx-small": 9,
            "x-small": 11,
            small: 13,
            medium: 16,
            large: 19,
            "x-large": 23,
            "xx-large": 28,
            auto: 0
        }[b];
        if (void 0 !== d || (d = parseFloat(b))) return a[b] = d / 16;
        d = b.match(/([\d\.]+)(px)/);
        return 3 === d.length ? a[b] = parseFloat(d[1]) / 16 : a[b] = 1
    }

    function g(a, b, f) {
        var u = a.childNodes,
            c;
        c = $(a);
        a = {};
        for (var q, C = c.css("font-family").split(","), F = C.shift(); !q && F;) q = d[F.trim().toLowerCase()],
        F = C.shift();
        a["font-family"] = q || "times";
        a["font-style"] = h[c.css("font-style")] || "normal";
        q = e[c.css("font-weight")] || "normal";
        "bold" === q && (a["font-style"] = "normal" === a["font-style"] ? q : q + a["font-style"]);
        a["font-size"] = k(c.css("font-size")) || 1;
        a["line-height"] = k(c.css("line-height")) || 1;
        a.display = "inline" === c.css("display") ? "inline" : "block";
        "block" === a.display && (a["margin-top"] = k(c.css("margin-top")) || 0, a["margin-bottom"] = k(c.css("margin-bottom")) || 0, a["padding-top"] = k(c.css("padding-top")) || 0, a["padding-bottom"] =
            k(c.css("padding-bottom")) || 0);
        if (q = "block" === a.display) b.setBlockBoundary(), b.setBlockStyle(a);
        C = 0;
        for (F = u.length; C < F; C++)
            if (c = u[C], "object" === typeof c)
                if (1 === c.nodeType && "SCRIPT" != c.nodeName) {
                    var H = c,
                        n = b,
                        x = f,
                        z = !1,
                        A = void 0,
                        y = void 0,
                        s = x["#" + H.id];
                    if (s)
                        if ("function" === typeof s) z = s(H, n);
                        else {
                            A = 0;
                            for (y = s.length; !z && A !== y;) z = s[A](H, n), A++
                        }
                    s = x[H.nodeName];
                    if (!z && s)
                        if ("function" === typeof s) z = s(H, n);
                        else {
                            A = 0;
                            for (y = s.length; !z && A !== y;) z = s[A](H, n), A++
                        }
                    z || g(c, b, f)
                } else 3 === c.nodeType && b.addText(c.nodeValue,
                    a);
                else "string" === typeof c && b.addText(c, a);
        q && b.setBlockBoundary()
    }
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    });
    String.prototype.trimLeft || (String.prototype.trimLeft = function() {
        return this.replace(/^\s+/g, "")
    });
    String.prototype.trimRight || (String.prototype.trimRight = function() {
        return this.replace(/\s+$/g, "")
    });
    b.prototype.init = function() {
        this.paragraph = {
            text: [],
            style: []
        };
        this.pdf.internal.write("q")
    };
    b.prototype.dispose = function() {
        this.pdf.internal.write("Q");
        return {
            x: this.x,
            y: this.y
        }
    };
    b.prototype.splitFragmentsIntoLines = function(a, b) {
        for (var d = this.pdf.internal.scaleFactor, e = {}, c, h, g, f, k, n = [], x = [n], z = 0, A = this.settings.width; a.length;)
            if (f = a.shift(), k = b.shift(), f)
                if (c = k["font-family"], h = k["font-style"], g = e[c + h], g || (g = this.pdf.internal.getFont(c, h).metadata.Unicode, e[c + h] = g), c = {
                    widths: g.widths,
                    kerning: g.kerning,
                    fontSize: 12 * k["font-size"],
                    textIndent: z
                }, h = this.pdf.getStringUnitWidth(f, c) * c.fontSize / d, z + h > A) {
                    f = this.pdf.splitTextToSize(f, A, c);
                    for (n.push([f.shift(),
                        k
                    ]); f.length;) n = [
                        [f.shift(), k]
                    ], x.push(n);
                    z = this.pdf.getStringUnitWidth(n[0][0], c) * c.fontSize / d
                } else n.push([f, k]), z += h;
        return x
    };
    b.prototype.RenderTextFragment = function(a, b) {
        var d = this.pdf.internal.getFont(b["font-family"], b["font-style"]);
        this.pdf.internal.write("/" + d.id, (12 * b["font-size"]).toFixed(2), "Tf", "(" + this.pdf.internal.pdfEscape(a) + ") Tj")
    };
    b.prototype.renderParagraph = function() {
        for (var a = this.paragraph.text, b = 0, d = a.length, e, c = !1, h = !1; !c && b !== d;)(e = a[b] = a[b].trimLeft()) && (c = !0), b++;
        for (b =
            d - 1; d && !h && -1 !== b;)(e = a[b] = a[b].trimRight()) && (h = !0), b--;
        c = /\s+$/g;
        h = !0;
        for (b = 0; b !== d; b++) e = a[b].replace(/\s+/g, " "), h && (e = e.trimLeft()), e && (h = c.test(e)), a[b] = e;
        b = this.paragraph.style;
        e = (d = this.paragraph.blockstyle) || {};
        this.paragraph = {
            text: [],
            style: [],
            blockstyle: {},
            priorblockstyle: d
        };
        if (a.join("").trim()) {
            a = this.splitFragmentsIntoLines(a, b);
            b = 12 / this.pdf.internal.scaleFactor;
            c = (Math.max((d["margin-top"] || 0) - (e["margin-bottom"] || 0), 0) + (d["padding-top"] || 0)) * b;
            d = ((d["margin-bottom"] || 0) + (d["padding-bottom"] ||
                0)) * b;
            e = this.pdf.internal.write;
            var g, f;
            this.y += c;
            for (e("q", "BT", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"); a.length;) {
                c = a.shift();
                g = h = 0;
                for (f = c.length; g !== f; g++) c[g][0].trim() && (h = Math.max(h, c[g][1]["line-height"], c[g][1]["font-size"]));
                e(0, (-12 * h).toFixed(2), "Td");
                g = 0;
                for (f = c.length; g !== f; g++) c[g][0] && this.RenderTextFragment(c[g][0], c[g][1]);
                this.y += h * b
            }
            e("ET", "Q");
            this.y += d
        }
    };
    b.prototype.setBlockBoundary = function() {
        this.renderParagraph()
    };
    b.prototype.setBlockStyle = function(a) {
        this.paragraph.blockstyle = a
    };
    b.prototype.addText = function(a, b) {
        this.paragraph.text.push(a);
        this.paragraph.style.push(b)
    };
    var d = {
        helvetica: "helvetica",
        "sans-serif": "helvetica",
        serif: "times",
        times: "times",
        "times new roman": "times",
        monospace: "courier",
        courier: "courier"
    }, e = {
            100: "normal",
            200: "normal",
            300: "normal",
            400: "normal",
            500: "bold",
            600: "bold",
            700: "bold",
            800: "bold",
            900: "bold",
            normal: "normal",
            bold: "bold",
            bolder: "bold",
            lighter: "normal"
        }, h = {
            normal: "normal",
            italic: "italic",
            oblique: "italic"
        }, a = {
            normal: 1
        };
    f.fromHTML = function(a, d, e, h) {
        if ("string" === typeof a) {
            var c = "jsPDFhtmlText" + Date.now().toString() + (1E3 * Math.random()).toFixed(0);
            $('<div style="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;"><iframe style="height:1px;width:1px" name="' + c + '" /></div>').appendTo(document.body);
            a = $(window.frames[c].document.body).html(a)[0]
        }
        d =
            new b(this, d, e, h);
        g(a, d, h.elementHandlers);
        return d.dispose()
    }
})(jsPDF.API);
(function(f) {
    f.addSVG = function(b, f, g, d, e) {
        if (void 0 === f || void 0 === f) throw Error("addSVG needs values for 'x' and 'y'");
        var h = document.createElement("iframe"),
            a = document.createElement("style");
        a.type = "text/css";
        a.styleSheet ? a.styleSheet.cssText = ".jsPDF_sillysvg_iframe {display:none;position:absolute;}" : a.appendChild(document.createTextNode(".jsPDF_sillysvg_iframe {display:none;position:absolute;}"));
        document.getElementsByTagName("head")[0].appendChild(a);
        h.name = "childframe";
        h.setAttribute("width",
            0);
        h.setAttribute("height", 0);
        h.setAttribute("frameborder", "0");
        h.setAttribute("scrolling", "no");
        h.setAttribute("seamless", "seamless");
        h.setAttribute("class", "jsPDF_sillysvg_iframe");
        document.body.appendChild(h);
        h = (h.contentWindow || h.contentDocument).document;
        h.write(b);
        h.close();
        h = h.getElementsByTagName("svg")[0];
        b = [1, 1];
        var a = parseFloat(h.getAttribute("width")),
            p = parseFloat(h.getAttribute("height"));
        a && p && (d && e ? b = [d / a, e / p] : d ? b = [d / a, d / a] : e && (b = [e / p, e / p]));
        h = h.childNodes;
        d = 0;
        for (e = h.length; d < e; d++)
            if (a =
                h[d], a.tagName && "PATH" === a.tagName.toUpperCase()) {
                for (var a = a.getAttribute("d").split(" "), p = parseFloat(a[1]), j = parseFloat(a[2]), m = [], u = 3, c = a.length; u < c;) "c" === a[u] ? (m.push([parseFloat(a[u + 1]), parseFloat(a[u + 2]), parseFloat(a[u + 3]), parseFloat(a[u + 4]), parseFloat(a[u + 5]), parseFloat(a[u + 6])]), u += 7) : "l" === a[u] ? (m.push([parseFloat(a[u + 1]), parseFloat(a[u + 2])]), u += 3) : u += 1;
                a = [p, j, m];
                a[0] = a[0] * b[0] + f;
                a[1] = a[1] * b[1] + g;
                this.lines.call(this, a[2], a[0], a[1], b)
            }
        return this
    }
})(jsPDF.API);
(function(f) {
    var b = f.getCharWidthsArray = function(b, e) {
        e || (e = {});
        var h = e.widths ? e.widths : this.internal.getFont().metadata.Unicode.widths,
            a = h.fof ? h.fof : 1,
            g = e.kerning ? e.kerning : this.internal.getFont().metadata.Unicode.kerning,
            f = g.fof ? g.fof : 1,
            m, k, c, q = 0,
            C = h[0] || a,
            F = [];
        m = 0;
        for (k = b.length; m < k; m++) c = b.charCodeAt(m), F.push((h[c] || C) / a + (g[c] && g[c][q] || 0) / f), q = c;
        return F
    }, k = function(b) {
            for (var e = b.length, h = 0; e;) e--, h += b[e];
            return h
        };
    f.getStringUnitWidth = function(d, e) {
        return k(b.call(this, d, e))
    };
    var g = function(d,
        e, h) {
        h || (h = {});
        var a = b(" ", h)[0],
            g = d.split(" "),
            f = [];
        d = [f];
        var m = h.textIndent || 0,
            u = 0,
            c = 0,
            q, C, F, H;
        F = 0;
        for (H = g.length; F < H; F++) {
            q = g[F];
            C = b(q, h);
            c = k(C);
            if (m + u + c > e) {
                if (c > e) {
                    for (var c = q, n = C, x = e, z = [], A = 0, y = c.length, s = 0; A !== y && s + n[A] < e - (m + u);) s += n[A], A++;
                    z.push(c.slice(0, A));
                    m = A;
                    for (s = 0; A !== y;) s + n[A] > x && (z.push(c.slice(m, A)), s = 0, m = A), s += n[A], A++;
                    m !== A && z.push(c.slice(m, A));
                    m = z;
                    f.push(m.shift());
                    for (f = [m.pop()]; m.length;) d.push([m.shift()]);
                    c = k(C.slice(q.length - f[0].length))
                } else f = [q];
                d.push(f);
                m = c
            } else f.push(q),
            m += u + c;
            u = a
        }
        e = [];
        F = 0;
        for (H = d.length; F < H; F++) e.push(d[F].join(" "));
        return e
    };
    f.splitTextToSize = function(b, e, h) {
        h || (h = {});
        var a = h.fontSize || this.internal.getFontSize(),
            f;
        var j = h;
        f = {
            "0": 1
        };
        var m = {};
        !j.widths || !j.kerning ? (j = this.internal.getFont(j.fontName, j.fontStyle), f = j.metadata.Unicode ? {
            widths: j.metadata.Unicode.widths || f,
            kerning: j.metadata.Unicode.kerning || m
        } : {
            widths: f,
            kerning: m
        }) : f = {
            widths: j.widths,
            kerning: j.kerning
        };
        b = b.match(/[\n\r]/) ? b.split(/\r\n|\r|\n/g) : [b];
        e = 1 * this.internal.scaleFactor * e /
            a;
        f.textIndent = h.textIndent ? 1 * h.textIndent * this.internal.scaleFactor / a : 0;
        m = [];
        h = 0;
        for (a = b.length; h < a; h++) m = m.concat(g(b[h], e, f));
        return m
    }
})(jsPDF.API);
(function(f) {
    var b = function(b) {
        for (var d = {}, a = 0; 16 > a; a++) d["klmnopqrstuvwxyz" [a]] = "0123456789abcdef" [a];
        for (var g = {}, f = 1, m, k = g, c = [], q, C = "", F = "", H, n = b.length - 1, a = 1; a != n;) q = b[a], a += 1, "'" == q ? m ? (H = m.join(""), m = void 0) : m = [] : m ? m.push(q) : "{" == q ? (c.push([k, H]), k = {}, H = void 0) : "}" == q ? (q = c.pop(), q[0][q[1]] = k, H = void 0, k = q[0]) : "-" == q ? f = -1 : void 0 === H ? d.hasOwnProperty(q) ? (C += d[q], H = parseInt(C, 16) * f, f = 1, C = "") : C += q : d.hasOwnProperty(q) ? (F += d[q], k[H] = parseInt(F, 16) * f, f = 1, H = void 0, F = "") : F += q;
        return g
    }, k = {
            codePages: ["WinAnsiEncoding"],
            WinAnsiEncoding: b("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
        }, g = {
            Unicode: {
                Courier: k,
                "Courier-Bold": k,
                "Courier-BoldOblique": k,
                "Courier-Oblique": k,
                Helvetica: k,
                "Helvetica-Bold": k,
                "Helvetica-BoldOblique": k,
                "Helvetica-Oblique": k,
                "Times-Roman": k,
                "Times-Bold": k,
                "Times-BoldItalic": k,
                "Times-Italic": k
            }
        }, d = {
            Unicode: {
                "Courier-Oblique": b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-BoldItalic": b("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                "Helvetica-Bold": b("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                Courier: b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-BoldOblique": b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Bold": b("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                Helvetica: b("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                "Helvetica-BoldOblique": b("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                "Courier-Bold": b("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Italic": b("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                "Times-Roman": b("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                "Helvetica-Oblique": b("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
            }
        };
    f.events.push(["addFonts",
        function(b) {
            var h, a, f, j;
            for (a in b.fonts)
                if (b.fonts.hasOwnProperty(a)) {
                    h = b.fonts[a];
                    if (f = d.Unicode[h.PostScriptName]) j = h.metadata.Unicode ? h.metadata.Unicode : h.metadata.Unicode = {}, j.widths = f.widths, j.kerning = f.kerning;
                    if (f = g.Unicode[h.PostScriptName]) j = h.metadata.Unicode ? h.metadata.Unicode : h.metadata.Unicode = {}, j.encoding = f, f.codePages && f.codePages.length && (h.encoding = f.codePages[0])
                }
        }
    ])
})(jsPDF.API);
var BlobBuilder = BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder || function(f) {
        var b = function(a) {
            return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
        }, k = function() {
                this.data = []
            }, g = function(a, b, c) {
                this.data = a;
                this.size = a.length;
                this.type = b;
                this.encoding = c
            }, d = k.prototype,
            e = g.prototype,
            h = f.FileReaderSync,
            a = function(a) {
                this.code = this[this.name = a]
            }, p = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
            j = p.length,
            m = f.URL || f.webkitURL || f,
            u = m.createObjectURL,
            c = m.revokeObjectURL,
            q = m,
            C = f.btoa,
            F = f.atob,
            H = !1,
            n = function(a) {
                H = !a
            }, x = f.ArrayBuffer,
            z = f.Uint8Array;
        for (k.fake = e.fake = !0; j--;) a.prototype[p[j]] = j + 1;
        try {
            z && n.apply(0, new z(1))
        } catch (A) {}
        m.createObjectURL || (q = f.URL = {});
        q.createObjectURL = function(a) {
            var b = a.type;
            null === b && (b = "application/octet-stream");
            if (a instanceof g) return b = "data:" + b, "base64" === a.encoding ? b + ";base64," + a.data : "URI" === a.encoding ? b + "," + decodeURIComponent(a.data) : C ? b + ";base64," + C(a.data) :
                b + "," + encodeURIComponent(a.data);
            if (u) return u.call(m, a)
        };
        q.revokeObjectURL = function(a) {
            "data:" !== a.substring(0, 5) && c && c.call(m, a)
        };
        d.append = function(c) {
            var d = this.data;
            if (z && c instanceof x)
                if (H) d.push(String.fromCharCode.apply(String, new z(c)));
                else {
                    d = "";
                    c = new z(c);
                    for (var e = 0, f = c.length; e < f; e++) d += String.fromCharCode(c[e])
                } else if ("Blob" === b(c) || "File" === b(c))
                if (h) e = new h, d.push(e.readAsBinaryString(c));
                else throw new a("NOT_READABLE_ERR");
                else c instanceof g ? "base64" === c.encoding && F ? d.push(F(c.data)) :
                    "URI" === c.encoding ? d.push(decodeURIComponent(c.data)) : "raw" === c.encoding && d.push(c.data) : ("string" !== typeof c && (c += ""), d.push(unescape(encodeURIComponent(c))))
        };
        d.getBlob = function(a) {
            arguments.length || (a = null);
            return new g(this.data.join(""), a, "raw")
        };
        d.toString = function() {
            return "[object BlobBuilder]"
        };
        e.slice = function(a, c, b) {
            var d = arguments.length;
            3 > d && (b = null);
            return new g(this.data.slice(a, 1 < d ? c : this.data.length), b, this.encoding)
        };
        e.toString = function() {
            return "[object Blob]"
        };
        return k
    }(self),
    saveAs =
        saveAs || navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator) || function(f) {
            var b = f.document,
                k = f.URL || f.webkitURL || f,
                g = b.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                d = "download" in g,
                e = f.webkitRequestFileSystem,
                h = f.requestFileSystem || e || f.mozRequestFileSystem,
                a = function(a) {
                    (f.setImmediate || f.setTimeout)(function() {
                        throw a;
                    }, 0)
                }, p = 0,
                j = [],
                m = function(c, b, d) {
                    b = [].concat(b);
                    for (var e = b.length; e--;) {
                        var f = c["on" + b[e]];
                        if ("function" === typeof f) try {
                            f.call(c, d || c)
                        } catch (h) {
                            a(h)
                        }
                    }
                }, u = function(a,
                    c) {
                    var k = this,
                        u = a.type,
                        n = !1,
                        x, z, A = function() {
                            var c = (f.URL || f.webkitURL || f).createObjectURL(a);
                            j.push(c);
                            return c
                        }, y = function() {
                            m(k, ["writestart", "progress", "write", "writeend"])
                        }, s = function() {
                            if (n || !x) x = A(a);
                            z && (z.location.href = x);
                            k.readyState = k.DONE;
                            y()
                        }, r = function(a) {
                            return function() {
                                if (k.readyState !== k.DONE) return a.apply(this, arguments)
                            }
                        }, I = {
                            create: !0,
                            exclusive: !1
                        }, w;
                    k.readyState = k.INIT;
                    c || (c = "download");
                    if (d && (x = A(a), g.href = x, g.download = c, w = b.createEvent("MouseEvents"), w.initMouseEvent("click", !0, !1, f, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g.dispatchEvent(w))) {
                        k.readyState = k.DONE;
                        y();
                        return
                    }
                    f.chrome && (u && "application/octet-stream" !== u) && (w = a.slice || a.webkitSlice, a = w.call(a, 0, a.size, "application/octet-stream"), n = !0);
                    e && "download" !== c && (c += ".download");
                    z = "application/octet-stream" === u || e ? f : f.open();
                    h ? (p += a.size, h(f.TEMPORARY, p, r(function(b) {
                        b.root.getDirectory("saved", I, r(function(b) {
                            var d = function() {
                                b.getFile(c, I, r(function(c) {
                                    c.createWriter(r(function(b) {
                                        b.onwriteend = function(a) {
                                            z.location.href =
                                                c.toURL();
                                            j.push(c);
                                            k.readyState = k.DONE;
                                            m(k, "writeend", a)
                                        };
                                        b.onerror = function() {
                                            var a = b.error;
                                            a.code !== a.ABORT_ERR && s()
                                        };
                                        ["writestart", "progress", "write", "abort"].forEach(function(a) {
                                            b["on" + a] = k["on" + a]
                                        });
                                        b.write(a);
                                        k.abort = function() {
                                            b.abort();
                                            k.readyState = k.DONE
                                        };
                                        k.readyState = k.WRITING
                                    }), s)
                                }), s)
                            };
                            b.getFile(c, {
                                create: !1
                            }, r(function(a) {
                                a.remove();
                                d()
                            }), r(function(a) {
                                a.code === a.NOT_FOUND_ERR ? d() : s()
                            }))
                        }), s)
                    }), s)) : s()
                }, c = u.prototype;
            c.abort = function() {
                this.readyState = this.DONE;
                m(this, "abort")
            };
            c.readyState =
                c.INIT = 0;
            c.WRITING = 1;
            c.DONE = 2;
            c.error = c.onwritestart = c.onprogress = c.onwrite = c.onabort = c.onerror = c.onwriteend = null;
            f.addEventListener("unload", function() {
                for (var a = j.length; a--;) {
                    var c = j[a];
                    "string" === typeof c ? k.revokeObjectURL(c) : c.remove()
                }
                j.length = 0
            }, !1);
            return function(a, c) {
                return new u(a, c)
            }
    }(self),
    MAX_BITS = 15,
    D_CODES = 30,
    BL_CODES = 19,
    LENGTH_CODES = 29,
    LITERALS = 256,
    L_CODES = LITERALS + 1 + LENGTH_CODES,
    HEAP_SIZE = 2 * L_CODES + 1,
    END_BLOCK = 256,
    MAX_BL_BITS = 7,
    REP_3_6 = 16,
    REPZ_3_10 = 17,
    REPZ_11_138 = 18,
    Buf_size = 16,
    Z_DEFAULT_COMPRESSION = -1,
    Z_FILTERED = 1,
    Z_HUFFMAN_ONLY = 2,
    Z_DEFAULT_STRATEGY = 0,
    Z_NO_FLUSH = 0,
    Z_PARTIAL_FLUSH = 1,
    Z_FULL_FLUSH = 3,
    Z_FINISH = 4,
    Z_OK = 0,
    Z_STREAM_END = 1,
    Z_NEED_DICT = 2,
    Z_STREAM_ERROR = -2,
    Z_DATA_ERROR = -3,
    Z_BUF_ERROR = -5,
    _dist_code = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13,
        13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21,
        21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29
    ];

function Tree() {
    var f = this;
    f.build_tree = function(b) {
        var k = f.dyn_tree,
            g = f.stat_desc.static_tree,
            d = f.stat_desc.elems,
            e, h = -1,
            a;
        b.heap_len = 0;
        b.heap_max = HEAP_SIZE;
        for (e = 0; e < d; e++) 0 !== k[2 * e] ? (b.heap[++b.heap_len] = h = e, b.depth[e] = 0) : k[2 * e + 1] = 0;
        for (; 2 > b.heap_len;) a = b.heap[++b.heap_len] = 2 > h ? ++h : 0, k[2 * a] = 1, b.depth[a] = 0, b.opt_len--, g && (b.static_len -= g[2 * a + 1]);
        f.max_code = h;
        for (e = Math.floor(b.heap_len / 2); 1 <= e; e--) b.pqdownheap(k, e);
        a = d;
        do e = b.heap[1], b.heap[1] = b.heap[b.heap_len--], b.pqdownheap(k, 1), g = b.heap[1],
        b.heap[--b.heap_max] = e, b.heap[--b.heap_max] = g, k[2 * a] = k[2 * e] + k[2 * g], b.depth[a] = Math.max(b.depth[e], b.depth[g]) + 1, k[2 * e + 1] = k[2 * g + 1] = a, b.heap[1] = a++, b.pqdownheap(k, 1);
        while (2 <= b.heap_len);
        b.heap[--b.heap_max] = b.heap[1];
        e = f.dyn_tree;
        for (var h = f.stat_desc.static_tree, p = f.stat_desc.extra_bits, j = f.stat_desc.extra_base, m = f.stat_desc.max_length, u, c, q = 0, d = 0; d <= MAX_BITS; d++) b.bl_count[d] = 0;
        e[2 * b.heap[b.heap_max] + 1] = 0;
        for (a = b.heap_max + 1; a < HEAP_SIZE; a++) g = b.heap[a], d = e[2 * e[2 * g + 1] + 1] + 1, d > m && (d = m, q++), e[2 * g + 1] =
            d, g > f.max_code || (b.bl_count[d]++, u = 0, g >= j && (u = p[g - j]), c = e[2 * g], b.opt_len += c * (d + u), h && (b.static_len += c * (h[2 * g + 1] + u)));
        if (0 !== q) {
            do {
                for (d = m - 1; 0 === b.bl_count[d];) d--;
                b.bl_count[d]--;
                b.bl_count[d + 1] += 2;
                b.bl_count[m]--;
                q -= 2
            } while (0 < q);
            for (d = m; 0 !== d; d--)
                for (g = b.bl_count[d]; 0 !== g;) h = b.heap[--a], h > f.max_code || (e[2 * h + 1] != d && (b.opt_len += (d - e[2 * h + 1]) * e[2 * h], e[2 * h + 1] = d), g--)
        }
        e = f.max_code;
        a = b.bl_count;
        b = [];
        g = 0;
        for (d = 1; d <= MAX_BITS; d++) b[d] = g = g + a[d - 1] << 1;
        for (a = 0; a <= e; a++)
            if (p = k[2 * a + 1], 0 !== p) {
                g = k;
                d = 2 * a;
                h = b[p]++;
                j = 0;
                do j |= h & 1, h >>>= 1, j <<= 1; while (0 < --p);
                g[d] = j >>> 1
            }
    }
}
Tree._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25,
    25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28
];
Tree.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
Tree.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576];
Tree.d_code = function(f) {
    return 256 > f ? _dist_code[f] : _dist_code[256 + (f >>> 7)]
};
Tree.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
Tree.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
Tree.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
Tree.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

function StaticTree(f, b, k, g, d) {
    this.static_tree = f;
    this.extra_bits = b;
    this.extra_base = k;
    this.elems = g;
    this.max_length = d
}
StaticTree.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161,
    8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235,
    9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7,
    48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8
];
StaticTree.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5];
StaticTree.static_l_desc = new StaticTree(StaticTree.static_ltree, Tree.extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
StaticTree.static_d_desc = new StaticTree(StaticTree.static_dtree, Tree.extra_dbits, 0, D_CODES, MAX_BITS);
StaticTree.static_bl_desc = new StaticTree(null, Tree.extra_blbits, 0, BL_CODES, MAX_BL_BITS);
var MAX_MEM_LEVEL = 9,
    DEF_MEM_LEVEL = 8;

function Config(f, b, k, g, d) {
    this.good_length = f;
    this.max_lazy = b;
    this.nice_length = k;
    this.max_chain = g;
    this.func = d
}
var STORED = 0,
    FAST = 1,
    SLOW = 2,
    config_table = [new Config(0, 0, 0, 0, STORED), new Config(4, 4, 8, 4, FAST), new Config(4, 5, 16, 8, FAST), new Config(4, 6, 32, 32, FAST), new Config(4, 4, 16, 16, SLOW), new Config(8, 16, 32, 32, SLOW), new Config(8, 16, 128, 128, SLOW), new Config(8, 32, 128, 256, SLOW), new Config(32, 128, 258, 1024, SLOW), new Config(32, 258, 258, 4096, SLOW)],
    z_errmsg = "need dictionary;stream end;;;stream error;data error;;buffer error;;".split(";"),
    NeedMore = 0,
    BlockDone = 1,
    FinishStarted = 2,
    FinishDone = 3,
    PRESET_DICT = 32,
    INIT_STATE = 42,
    BUSY_STATE =
        113,
    FINISH_STATE = 666,
    Z_DEFLATED = 8,
    STORED_BLOCK = 0,
    STATIC_TREES = 1,
    DYN_TREES = 2,
    MIN_MATCH = 3,
    MAX_MATCH = 258,
    MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;

function smaller(f, b, k, g) {
    var d = f[2 * b];
    f = f[2 * k];
    return d < f || d == f && g[b] <= g[k]
}

function Deflate() {
    function f() {
        var a;
        for (a = 0; a < L_CODES; a++) U[2 * a] = 0;
        for (a = 0; a < D_CODES; a++) X[2 * a] = 0;
        for (a = 0; a < BL_CODES; a++) O[2 * a] = 0;
        U[2 * END_BLOCK] = 1;
        S = la = n.opt_len = n.static_len = 0
    }

    function b(a, c) {
        var b, d = -1,
            e, f = a[1],
            h = 0,
            g = 7,
            j = 4;
        0 === f && (g = 138, j = 3);
        a[2 * (c + 1) + 1] = 65535;
        for (b = 0; b <= c; b++) e = f, f = a[2 * (b + 1) + 1], ++h < g && e == f || (h < j ? O[2 * e] += h : 0 !== e ? (e != d && O[2 * e]++, O[2 * REP_3_6]++) : 10 >= h ? O[2 * REPZ_3_10]++ : O[2 * REPZ_11_138]++, h = 0, d = e, 0 === f ? (g = 138, j = 3) : e == f ? (g = 6, j = 3) : (g = 7, j = 4))
    }

    function k(a) {
        n.pending_buf[n.pending++] =
            a
    }

    function g(a) {
        k(a & 255);
        k(a >>> 8 & 255)
    }

    function d(a, c) {
        L > Buf_size - c ? (P |= a << L & 65535, g(P), P = a >>> Buf_size - L, L += c - Buf_size) : (P |= a << L & 65535, L += c)
    }

    function e(a, c) {
        var b = 2 * a;
        d(c[b] & 65535, c[b + 1] & 65535)
    }

    function h(a, c) {
        var b, f = -1,
            h, g = a[1],
            j = 0,
            k = 7,
            l = 4;
        0 === g && (k = 138, l = 3);
        for (b = 0; b <= c; b++)
            if (h = g, g = a[2 * (b + 1) + 1], !(++j < k && h == g)) {
                if (j < l) {
                    do e(h, O); while (0 !== --j)
                } else 0 !== h ? (h != f && (e(h, O), j--), e(REP_3_6, O), d(j - 3, 2)) : 10 >= j ? (e(REPZ_3_10, O), d(j - 3, 3)) : (e(REPZ_11_138, O), d(j - 11, 7));
                j = 0;
                f = h;
                0 === g ? (k = 138, l = 3) : h == g ? (k = 6, l =
                    3) : (k = 7, l = 4)
            }
    }

    function a() {
        16 == L ? (g(P), L = P = 0) : 8 <= L && (k(P & 255), P >>>= 8, L -= 8)
    }

    function p(a, c) {
        var b, d, e;
        n.pending_buf[fa + 2 * S] = a >>> 8 & 255;
        n.pending_buf[fa + 2 * S + 1] = a & 255;
        n.pending_buf[ka + S] = c & 255;
        S++;
        0 === a ? U[2 * c]++ : (la++, a--, U[2 * (Tree._length_code[c] + LITERALS + 1)]++, X[2 * Tree.d_code(a)]++);
        if (0 === (S & 8191) && 2 < M) {
            b = 8 * S;
            d = t - Q;
            for (e = 0; e < D_CODES; e++) b += X[2 * e] * (5 + Tree.extra_dbits[e]);
            if (la < Math.floor(S / 2) && b >>> 3 < Math.floor(d / 2)) return !0
        }
        return S == ba - 1
    }

    function j(a, c) {
        var b, f, h = 0,
            g, j;
        if (0 !== S) {
            do b = n.pending_buf[fa +
                2 * h] << 8 & 65280 | n.pending_buf[fa + 2 * h + 1] & 255, f = n.pending_buf[ka + h] & 255, h++, 0 === b ? e(f, a) : (g = Tree._length_code[f], e(g + LITERALS + 1, a), j = Tree.extra_lbits[g], 0 !== j && (f -= Tree.base_length[g], d(f, j)), b--, g = Tree.d_code(b), e(g, c), j = Tree.extra_dbits[g], 0 !== j && (b -= Tree.base_dist[g], d(b, j))); while (h < S)
        }
        e(END_BLOCK, a);
        ga = a[2 * END_BLOCK + 1]
    }

    function m() {
        8 < L ? g(P) : 0 < L && k(P & 255);
        L = P = 0
    }

    function u(a, c, b) {
        d((STORED_BLOCK << 1) + (b ? 1 : 0), 3);
        m();
        ga = 8;
        g(c);
        g(~c);
        n.pending_buf.set(w.subarray(a, a + c), n.pending);
        n.pending += c
    }

    function c(a) {
        var c =
            0 <= Q ? Q : -1,
            e = t - Q,
            g, k, l = 0;
        if (0 < M) {
            da.build_tree(n);
            ea.build_tree(n);
            b(U, da.max_code);
            b(X, ea.max_code);
            ja.build_tree(n);
            for (l = BL_CODES - 1; 3 <= l && 0 === O[2 * Tree.bl_order[l] + 1]; l--);
            n.opt_len += 3 * (l + 1) + 14;
            g = n.opt_len + 3 + 7 >>> 3;
            k = n.static_len + 3 + 7 >>> 3;
            k <= g && (g = k)
        } else g = k = e + 5; if (e + 4 <= g && -1 != c) u(c, e, a);
        else if (k == g) d((STATIC_TREES << 1) + (a ? 1 : 0), 3), j(StaticTree.static_ltree, StaticTree.static_dtree);
        else {
            d((DYN_TREES << 1) + (a ? 1 : 0), 3);
            c = da.max_code + 1;
            e = ea.max_code + 1;
            l += 1;
            d(c - 257, 5);
            d(e - 1, 5);
            d(l - 4, 4);
            for (g = 0; g < l; g++) d(O[2 *
                Tree.bl_order[g] + 1], 3);
            h(U, c - 1);
            h(X, e - 1);
            j(U, X)
        }
        f();
        a && m();
        Q = t;
        x.flush_pending()
    }

    function q() {
        var a, c, b, d;
        do {
            d = aa - E - t;
            if (0 === d && 0 === t && 0 === E) d = s;
            else if (-1 == d) d--;
            else if (t >= s + s - MIN_LOOKAHEAD) {
                w.set(w.subarray(s, s + s), 0);
                W -= s;
                t -= s;
                Q -= s;
                b = a = v;
                do c = G[--b] & 65535, G[b] = c >= s ? c - s : 0; while (0 !== --a);
                b = a = s;
                do c = D[--b] & 65535, D[b] = c >= s ? c - s : 0; while (0 !== --a);
                d += s
            }
            if (0 === x.avail_in) break;
            a = x.read_buf(w, t + E, d);
            E += a;
            E >= MIN_MATCH && (B = w[t] & 255, B = (B << N ^ w[t + 1] & 255) & l)
        } while (E < MIN_LOOKAHEAD && 0 !== x.avail_in)
    }

    function C(a) {
        var b =
            65535,
            d;
        for (b > A - 5 && (b = A - 5);;) {
            if (1 >= E) {
                q();
                if (0 === E && a == Z_NO_FLUSH) return NeedMore;
                if (0 === E) break
            }
            t += E;
            E = 0;
            d = Q + b;
            if (0 === t || t >= d)
                if (E = t - d, t = d, c(!1), 0 === x.avail_out) return NeedMore;
            if (t - Q >= s - MIN_LOOKAHEAD && (c(!1), 0 === x.avail_out)) return NeedMore
        }
        c(a == Z_FINISH);
        return 0 === x.avail_out ? a == Z_FINISH ? FinishStarted : NeedMore : a == Z_FINISH ? FinishDone : BlockDone
    }

    function F(a) {
        var c = Y,
            b = t,
            d, e = K,
            g = t > s - MIN_LOOKAHEAD ? t - (s - MIN_LOOKAHEAD) : 0,
            f = ia,
            h = I,
            j = t + MAX_MATCH,
            k = w[b + e - 1],
            l = w[b + e];
        K >= ha && (c >>= 2);
        f > E && (f = E);
        do
            if (d =
                a, !(w[d + e] != l || w[d + e - 1] != k || w[d] != w[b] || w[++d] != w[b + 1])) {
                b += 2;
                d++;
                do; while (w[++b] == w[++d] && w[++b] == w[++d] && w[++b] == w[++d] && w[++b] == w[++d] && w[++b] == w[++d] && w[++b] == w[++d] && w[++b] == w[++d] && w[++b] == w[++d] && b < j);
                d = MAX_MATCH - (j - b);
                b = j - MAX_MATCH;
                if (d > e) {
                    W = a;
                    e = d;
                    if (d >= f) break;
                    k = w[b + e - 1];
                    l = w[b + e]
                }
            } while ((a = D[a & h] & 65535) > g && 0 !== --c);
        return e <= E ? e : E
    }

    function H(a) {
        for (var b = 0, d, e;;) {
            if (E < MIN_LOOKAHEAD) {
                q();
                if (E < MIN_LOOKAHEAD && a == Z_NO_FLUSH) return NeedMore;
                if (0 === E) break
            }
            E >= MIN_MATCH && (B = (B << N ^ w[t + (MIN_MATCH -
                1)] & 255) & l, b = G[B] & 65535, D[t & I] = G[B], G[B] = t);
            K = J;
            ca = W;
            J = MIN_MATCH - 1;
            if (0 !== b && (K < Z && (t - b & 65535) <= s - MIN_LOOKAHEAD) && (T != Z_HUFFMAN_ONLY && (J = F(b)), 5 >= J && (T == Z_FILTERED || J == MIN_MATCH && 4096 < t - W))) J = MIN_MATCH - 1;
            if (K >= MIN_MATCH && J <= K) {
                e = t + E - MIN_MATCH;
                d = p(t - 1 - ca, K - MIN_MATCH);
                E -= K - 1;
                K -= 2;
                do ++
                t <= e && (B = (B << N ^ w[t + (MIN_MATCH - 1)] & 255) & l, b = G[B] & 65535, D[t & I] = G[B], G[B] = t);
                while (0 !== --K);
                R = 0;
                J = MIN_MATCH - 1;
                t++;
                if (d && (c(!1), 0 === x.avail_out)) return NeedMore
            } else if (0 !== R) {
                if ((d = p(0, w[t - 1] & 255)) && c(!1), t++, E--, 0 === x.avail_out) return NeedMore
            } else R =
                1, t++, E--
        }
        0 !== R && (p(0, w[t - 1] & 255), R = 0);
        c(a == Z_FINISH);
        return 0 === x.avail_out ? a == Z_FINISH ? FinishStarted : NeedMore : a == Z_FINISH ? FinishDone : BlockDone
    }
    var n = this,
        x, z, A, y, s, r, I, w, aa, D, G, B, v, V, l, N, Q, J, ca, R, t, W, E, K, Y, Z, M, T, ha, ia, U, X, O, da = new Tree,
        ea = new Tree,
        ja = new Tree;
    n.depth = [];
    var ka, ba, S, fa, la, ga, P, L;
    n.bl_count = [];
    n.heap = [];
    U = [];
    X = [];
    O = [];
    n.pqdownheap = function(a, b) {
        for (var c = n.heap, d = c[b], e = b << 1; e <= n.heap_len;) {
            e < n.heap_len && smaller(a, c[e + 1], c[e], n.depth) && e++;
            if (smaller(a, d, c[e], n.depth)) break;
            c[b] =
                c[e];
            b = e;
            e <<= 1
        }
        c[b] = d
    };
    n.deflateInit = function(a, b, c, d, e, g) {
        d || (d = Z_DEFLATED);
        e || (e = DEF_MEM_LEVEL);
        g || (g = Z_DEFAULT_STRATEGY);
        a.msg = null;
        b == Z_DEFAULT_COMPRESSION && (b = 6);
        if (1 > e || e > MAX_MEM_LEVEL || d != Z_DEFLATED || 9 > c || 15 < c || 0 > b || 9 < b || 0 > g || g > Z_HUFFMAN_ONLY) return Z_STREAM_ERROR;
        a.dstate = n;
        r = c;
        s = 1 << r;
        I = s - 1;
        V = e + 7;
        v = 1 << V;
        l = v - 1;
        N = Math.floor((V + MIN_MATCH - 1) / MIN_MATCH);
        w = new Uint8Array(2 * s);
        D = [];
        G = [];
        ba = 1 << e + 6;
        n.pending_buf = new Uint8Array(4 * ba);
        A = 4 * ba;
        fa = Math.floor(ba / 2);
        ka = 3 * ba;
        M = b;
        T = g;
        a.total_in = a.total_out =
            0;
        a.msg = null;
        n.pending = 0;
        n.pending_out = 0;
        z = BUSY_STATE;
        y = Z_NO_FLUSH;
        da.dyn_tree = U;
        da.stat_desc = StaticTree.static_l_desc;
        ea.dyn_tree = X;
        ea.stat_desc = StaticTree.static_d_desc;
        ja.dyn_tree = O;
        ja.stat_desc = StaticTree.static_bl_desc;
        L = P = 0;
        ga = 8;
        f();
        aa = 2 * s;
        for (a = G[v - 1] = 0; a < v - 1; a++) G[a] = 0;
        Z = config_table[M].max_lazy;
        ha = config_table[M].good_length;
        ia = config_table[M].nice_length;
        Y = config_table[M].max_chain;
        E = Q = t = 0;
        J = K = MIN_MATCH - 1;
        B = R = 0;
        return Z_OK
    };
    n.deflateEnd = function() {
        if (z != INIT_STATE && z != BUSY_STATE && z != FINISH_STATE) return Z_STREAM_ERROR;
        w = D = G = n.pending_buf = null;
        n.dstate = null;
        return z == BUSY_STATE ? Z_DATA_ERROR : Z_OK
    };
    n.deflateParams = function(a, b, c) {
        var d = Z_OK;
        b == Z_DEFAULT_COMPRESSION && (b = 6);
        if (0 > b || 9 < b || 0 > c || c > Z_HUFFMAN_ONLY) return Z_STREAM_ERROR;
        config_table[M].func != config_table[b].func && 0 !== a.total_in && (d = a.deflate(Z_PARTIAL_FLUSH));
        M != b && (M = b, Z = config_table[M].max_lazy, ha = config_table[M].good_length, ia = config_table[M].nice_length, Y = config_table[M].max_chain);
        T = c;
        return d
    };
    n.deflateSetDictionary = function(a, b, c) {
        a = c;
        var d = 0;
        if (!b ||
            z != INIT_STATE) return Z_STREAM_ERROR;
        if (a < MIN_MATCH) return Z_OK;
        a > s - MIN_LOOKAHEAD && (a = s - MIN_LOOKAHEAD, d = c - a);
        w.set(b.subarray(d, d + a), 0);
        Q = t = a;
        B = w[0] & 255;
        B = (B << N ^ w[1] & 255) & l;
        for (b = 0; b <= a - MIN_MATCH; b++) B = (B << N ^ w[b + (MIN_MATCH - 1)] & 255) & l, D[b & I] = G[B], G[B] = b;
        return Z_OK
    };
    n.deflate = function(b, g) {
        var f, h, j;
        if (g > Z_FINISH || 0 > g) return Z_STREAM_ERROR;
        if (!b.next_out || !b.next_in && 0 !== b.avail_in || z == FINISH_STATE && g != Z_FINISH) return b.msg = z_errmsg[Z_NEED_DICT - Z_STREAM_ERROR], Z_STREAM_ERROR;
        if (0 === b.avail_out) return b.msg =
            z_errmsg[Z_NEED_DICT - Z_BUF_ERROR], Z_BUF_ERROR;
        x = b;
        f = y;
        y = g;
        z == INIT_STATE && (h = Z_DEFLATED + (r - 8 << 4) << 8, j = (M - 1 & 255) >> 1, 3 < j && (j = 3), h |= j << 6, 0 !== t && (h |= PRESET_DICT), z = BUSY_STATE, h += 31 - h % 31, k(h >> 8 & 255), k(h & 255));
        if (0 !== n.pending) {
            if (x.flush_pending(), 0 === x.avail_out) return y = -1, Z_OK
        } else if (0 === x.avail_in && g <= f && g != Z_FINISH) return x.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR], Z_BUF_ERROR;
        if (z == FINISH_STATE && 0 !== x.avail_in) return b.msg = z_errmsg[Z_NEED_DICT - Z_BUF_ERROR], Z_BUF_ERROR;
        if (0 !== x.avail_in || 0 !== E || g != Z_NO_FLUSH &&
            z != FINISH_STATE) {
            f = -1;
            switch (config_table[M].func) {
                case STORED:
                    f = C(g);
                    break;
                case FAST:
                    a: {
                        for (f = 0;;) {
                            if (E < MIN_LOOKAHEAD) {
                                q();
                                if (E < MIN_LOOKAHEAD && g == Z_NO_FLUSH) {
                                    f = NeedMore;
                                    break a
                                }
                                if (0 === E) break
                            }
                            E >= MIN_MATCH && (B = (B << N ^ w[t + (MIN_MATCH - 1)] & 255) & l, f = G[B] & 65535, D[t & I] = G[B], G[B] = t);
                            0 !== f && (t - f & 65535) <= s - MIN_LOOKAHEAD && T != Z_HUFFMAN_ONLY && (J = F(f));
                            if (J >= MIN_MATCH)
                                if (h = p(t - W, J - MIN_MATCH), E -= J, J <= Z && E >= MIN_MATCH) {
                                    J--;
                                    do t++, B = (B << N ^ w[t + (MIN_MATCH - 1)] & 255) & l, f = G[B] & 65535, D[t & I] = G[B], G[B] = t; while (0 !== --J);
                                    t++
                                } else t +=
                                    J, J = 0, B = w[t] & 255, B = (B << N ^ w[t + 1] & 255) & l;
                                else h = p(0, w[t] & 255), E--, t++;
                            if (h && (c(!1), 0 === x.avail_out)) {
                                f = NeedMore;
                                break a
                            }
                        }
                        c(g == Z_FINISH);
                        f = 0 === x.avail_out ? g == Z_FINISH ? FinishStarted : NeedMore : g == Z_FINISH ? FinishDone : BlockDone
                    }
                    break;
                case SLOW:
                    f = H(g)
            }
            if (f == FinishStarted || f == FinishDone) z = FINISH_STATE;
            if (f == NeedMore || f == FinishStarted) return 0 === x.avail_out && (y = -1), Z_OK;
            if (f == BlockDone) {
                if (g == Z_PARTIAL_FLUSH) d(STATIC_TREES << 1, 3), e(END_BLOCK, StaticTree.static_ltree), a(), 9 > 1 + ga + 10 - L && (d(STATIC_TREES << 1, 3), e(END_BLOCK,
                    StaticTree.static_ltree), a()), ga = 7;
                else if (u(0, 0, !1), g == Z_FULL_FLUSH)
                    for (f = 0; f < v; f++) G[f] = 0;
                x.flush_pending();
                if (0 === x.avail_out) return y = -1, Z_OK
            }
        }
        return g != Z_FINISH ? Z_OK : Z_STREAM_END
    }
}

function ZStream() {
    this.total_out = this.avail_out = this.total_in = this.avail_in = this.next_out_index = this.next_in_index = 0
}
ZStream.prototype = {
    deflateInit: function(f, b) {
        this.dstate = new Deflate;
        b || (b = MAX_BITS);
        return this.dstate.deflateInit(this, f, b)
    },
    deflate: function(f) {
        return !this.dstate ? Z_STREAM_ERROR : this.dstate.deflate(this, f)
    },
    deflateEnd: function() {
        if (!this.dstate) return Z_STREAM_ERROR;
        var f = this.dstate.deflateEnd();
        this.dstate = null;
        return f
    },
    deflateParams: function(f, b) {
        return !this.dstate ? Z_STREAM_ERROR : this.dstate.deflateParams(this, f, b)
    },
    deflateSetDictionary: function(f, b) {
        return !this.dstate ? Z_STREAM_ERROR : this.dstate.deflateSetDictionary(this,
            f, b)
    },
    read_buf: function(f, b, k) {
        var g = this.avail_in;
        g > k && (g = k);
        if (0 === g) return 0;
        this.avail_in -= g;
        f.set(this.next_in.subarray(this.next_in_index, this.next_in_index + g), b);
        this.next_in_index += g;
        this.total_in += g;
        return g
    },
    flush_pending: function() {
        var f = this.dstate.pending;
        f > this.avail_out && (f = this.avail_out);
        0 !== f && (this.next_out.set(this.dstate.pending_buf.subarray(this.dstate.pending_out, this.dstate.pending_out + f), this.next_out_index), this.next_out_index += f, this.dstate.pending_out += f, this.total_out +=
            f, this.avail_out -= f, this.dstate.pending -= f, 0 === this.dstate.pending && (this.dstate.pending_out = 0))
    }
};

function Deflater(f) {
    var b = new ZStream,
        k = Z_NO_FLUSH,
        g = new Uint8Array(512);
    "undefined" == typeof f && (f = Z_DEFAULT_COMPRESSION);
    b.deflateInit(f);
    b.next_out = g;
    this.append = function(d, e) {
        var f, a = [],
            p = 0,
            j = 0,
            m = 0,
            u;
        if (d.length) {
            b.next_in_index = 0;
            b.next_in = d;
            b.avail_in = d.length;
            do {
                b.next_out_index = 0;
                b.avail_out = 512;
                f = b.deflate(k);
                if (f != Z_OK) throw "deflating: " + b.msg;
                b.next_out_index && (512 == b.next_out_index ? a.push(new Uint8Array(g)) : a.push(new Uint8Array(g.subarray(0, b.next_out_index))));
                m += b.next_out_index;
                e &&
                    (0 < b.next_in_index && b.next_in_index != p) && (e(b.next_in_index), p = b.next_in_index)
            } while (0 < b.avail_in || 0 === b.avail_out);
            u = new Uint8Array(m);
            a.forEach(function(a) {
                u.set(a, j);
                j += a.length
            });
            return u
        }
    };
    this.flush = function() {
        var d, e = [],
            f = 0,
            a = 0,
            k;
        do {
            b.next_out_index = 0;
            b.avail_out = 512;
            d = b.deflate(Z_FINISH);
            if (d != Z_STREAM_END && d != Z_OK) throw "deflating: " + b.msg;
            0 < 512 - b.avail_out && e.push(new Uint8Array(g.subarray(0, b.next_out_index)));
            a += b.next_out_index
        } while (0 < b.avail_in || 0 === b.avail_out);
        b.deflateEnd();
        k = new Uint8Array(a);
        e.forEach(function(a) {
            k.set(a, f);
            f += a.length
        });
        return k
    }
}
void
function(f, b) {
    "object" === typeof module ? module.exports = b() : "function" === typeof define ? define(b) : f.adler32cs = b()
}(this, function() {
    var f = "function" === typeof ArrayBuffer && "function" === typeof Uint8Array,
        b = null,
        k;
    if (f) {
        try {
            var g = require("buffer");
            "function" === typeof g.Buffer && (b = g.Buffer)
        } catch (d) {}
        k = function(a) {
            return a instanceof ArrayBuffer || null !== b && a instanceof b
        }
    } else k = function() {
        return !1
    };
    var e;
    e = null !== b ? function(a) {
        return (new b(a, "utf8")).toString("binary")
    } : function(a) {
        return unescape(encodeURIComponent(a))
    };
    var h = function(a, b) {
        for (var d = a & 65535, e = a >>> 16, f = 0, g = b.length; f < g; f++) d = (d + (b.charCodeAt(f) & 255)) % 65521, e = (e + d) % 65521;
        return (e << 16 | d) >>> 0
    }, a = function(a, b) {
            for (var d = a & 65535, e = a >>> 16, f = 0, g = b.length; f < g; f++) d = (d + b[f]) % 65521, e = (e + d) % 65521;
            return (e << 16 | d) >>> 0
        }, g = {}, p = function(a) {
            if (!(this instanceof p)) throw new TypeError("Constructor cannot called be as a function.");
            if (!isFinite(a = null == a ? 1 : +a)) throw Error("First arguments needs to be a finite number.");
            this.checksum = a >>> 0
        }, j = p.prototype = {};
    j.constructor =
        p;
    var m = function(a) {
        if (!(this instanceof p)) throw new TypeError("Constructor cannot called be as a function.");
        if (null == a) throw Error("First argument needs to be a string.");
        this.checksum = h(1, a.toString())
    };
    m.prototype = j;
    p.from = m;
    m = function(a) {
        if (!(this instanceof p)) throw new TypeError("Constructor cannot called be as a function.");
        if (null == a) throw Error("First argument needs to be a string.");
        a = e(a.toString());
        this.checksum = h(1, a)
    };
    m.prototype = j;
    p.fromUtf8 = m;
    f && (m = function(b) {
        if (!(this instanceof p)) throw new TypeError("Constructor cannot called be as a function.");
        if (!k(b)) throw Error("First argument needs to be ArrayBuffer.");
        b = new Uint8Array(b);
        return this.checksum = a(1, b)
    }, m.prototype = j, p.fromBuffer = m);
    j.update = function(a) {
        if (null == a) throw Error("First argument needs to be a string.");
        a = a.toString();
        return this.checksum = h(this.checksum, a)
    };
    j.updateUtf8 = function(a) {
        if (null == a) throw Error("First argument needs to be a string.");
        a = e(a.toString());
        return this.checksum = h(this.checksum, a)
    };
    f &&
        (j.updateBuffer = function(b) {
        if (!k(b)) throw Error("First argument needs to be ArrayBuffer.");
        b = new Uint8Array(b);
        return this.checksum = a(this.checksum, b)
    });
    j.clone = function() {
        return new u(this.checksum)
    };
    var u = g.Adler32 = p;
    g.from = function(a) {
        if (null == a) throw Error("First argument needs to be a string.");
        return h(1, a.toString())
    };
    g.fromUtf8 = function(a) {
        if (null == a) throw Error("First argument needs to be a string.");
        a = e(a.toString());
        return h(1, a)
    };
    f && (g.fromBuffer = function(b) {
        if (!k(b)) throw Error("First argument need to be ArrayBuffer.");
        b = new Uint8Array(b);
        return a(1, b)
    });
    return g
});

// fountain-js 0.1.10
// http://www.opensource.org/licenses/mit-license.php
// Copyright (c) 2012 Matt Daly

;(function() {
  'use strict';

  var regex = {
    title_page: /^((?:title|credit|author[s]?|source|notes|draft date|date|contact|copyright)\:)/gim,

    scene_heading: /^((?:\*{0,3}_?)?(?:(?:int|ext|est|i\/e)[. ]).+)|^(?:\.(?!\.+))(.+)/i,
    scene_number: /( *#(.+)# *)/,

    transition: /^((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)|^(?:> *)(.+)/,
    
    dialogue: /^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/,
    parenthetical: /^(\(.+\))$/,

    action: /^(.+)/g,
    centered: /^(?:> *)(.+)(?: *<)(\n.+)*/g,
        
    section: /^(#+)(?: *)(.*)/,
    synopsis: /^(?:\=(?!\=+) *)(.*)/,

    note: /^(?:\[{2}(?!\[+))(.+)(?:\]{2}(?!\[+))$/,
    note_inline: /(?:\[{2}(?!\[+))([\s\S]+?)(?:\]{2}(?!\[+))/g,
    boneyard: /(^\/\*|^\*\/)$/g,

    page_break: /^\={3,}$/,
    line_break: /^ {2}$/,

    emphasis: /(_|\*{1,3}|_\*{1,3}|\*{1,3}_)(.+)(_|\*{1,3}|_\*{1,3}|\*{1,3}_)/g,
    bold_italic_underline: /(_{1}\*{3}(?=.+\*{3}_{1})|\*{3}_{1}(?=.+_{1}\*{3}))(.+?)(\*{3}_{1}|_{1}\*{3})/g,
    bold_underline: /(_{1}\*{2}(?=.+\*{2}_{1})|\*{2}_{1}(?=.+_{1}\*{2}))(.+?)(\*{2}_{1}|_{1}\*{2})/g,
    italic_underline: /(?:_{1}\*{1}(?=.+\*{1}_{1})|\*{1}_{1}(?=.+_{1}\*{1}))(.+?)(\*{1}_{1}|_{1}\*{1})/g,
    bold_italic: /(\*{3}(?=.+\*{3}))(.+?)(\*{3})/g,
    bold: /(\*{2}(?=.+\*{2}))(.+?)(\*{2})/g,
    italic: /(\*{1}(?=.+\*{1}))(.+?)(\*{1})/g,
    underline: /(_{1}(?=.+_{1}))(.+?)(_{1})/g,

    splitter: /\n{2,}/g,
    cleaner: /^\n+|\n+$/,
    standardizer: /\r\n|\r/g,
    whitespacer: /^\t+|^ {3,}/gm
  };

  var lexer = function (script) {
    return script.replace(regex.boneyard, '\n$1\n')
                 .replace(regex.standardizer, '\n')
                 .replace(regex.cleaner, '')
                 .replace(regex.whitespacer, '');
  };
     
  var tokenize = function (script) {
    var src    = lexer(script).split(regex.splitter)
      , i      = src.length, line, match, parts, text, meta, x, xlen, dual
      , tokens = [];

    while (i--) {
      line = src[i];
      
      // title page
      if (regex.title_page.test(line)) {
        match = line.replace(regex.title_page, '\n$1').split(regex.splitter).reverse();
        for (x = 0, xlen = match.length; x < xlen; x++) {
          parts = match[x].replace(regex.cleaner, '').split(/\:\n*/);
          tokens.push({ type: parts[0].trim().toLowerCase().replace(' ', '_'), text: parts[1].trim() });
        }
        continue;
      }

      // scene headings
      if (match = line.match(regex.scene_heading)) {
        text = match[1] || match[2];

        if (text.indexOf('  ') !== text.length - 2) {
          if (meta = text.match(regex.scene_number)) {
            meta = meta[2];
            text = text.replace(regex.scene_number, '');
          }
          tokens.push({ type: 'scene_heading', text: text, scene_number: meta || undefined });
        }
        continue;
      }

      // centered
      if (match = line.match(regex.centered)) {
        tokens.push({ type: 'centered', text: match[0].replace(/>|</g, '') });
        continue;
      }

      // transitions
      if (match = line.match(regex.transition)) {
        tokens.push({ type: 'transition', text: match[1] || match[2] });
        continue;
      }
    
      // dialogue blocks - characters, parentheticals and dialogue
      if (match = line.match(regex.dialogue)) {
        if (match[1].indexOf('  ') !== match[1].length - 2) {
          // we're iterating from the bottom up, so we need to push these backwards
          if (match[2]) {
            tokens.push({ type: 'dual_dialogue_end' });
          }

          tokens.push({ type: 'dialogue_end' });

          parts = match[3].split(/(\(.+\))(?:\n+)/).reverse();

          for (x = 0, xlen = parts.length; x < xlen; x++) {	
            text = parts[x];

            if (text.length > 0) {
              tokens.push({ type: regex.parenthetical.test(text) ? 'parenthetical' : 'dialogue', text: text });
            }
          }

          tokens.push({ type: 'character', text: match[1].trim() });
          tokens.push({ type: 'dialogue_begin', dual: match[2] ? 'right' : dual ? 'left' : undefined });

          if (dual) {
            tokens.push({ type: 'dual_dialogue_begin' });
          }

          dual = match[2] ? true : false;
          continue;
        }
      }
      
      // section
      if (match = line.match(regex.section)) {
        tokens.push({ type: 'section', text: match[2], depth: match[1].length });
        continue;
      }
      
      // synopsis
      if (match = line.match(regex.synopsis)) {
        tokens.push({ type: 'synopsis', text: match[1] });
        continue;
      }

      // notes
      if (match = line.match(regex.note)) {
        tokens.push({ type: 'note', text: match[1]});
        continue;
      }      

      // boneyard
      if (match = line.match(regex.boneyard)) {
        tokens.push({ type: match[0][0] === '/' ? 'boneyard_begin' : 'boneyard_end' });
        continue;
      }      

      // page breaks
      if (regex.page_break.test(line)) {
        tokens.push({ type: 'page_break' });
        continue;
      }
      
      // line breaks
      if (regex.line_break.test(line)) {
        tokens.push({ type: 'line_break' });
        continue;
      }

      tokens.push({ type: 'action', text: line });
    }
    return tokens;
  };

  var inline = {
    note: '<!-- $1 -->',

    line_break: '<br />',

    bold_italic_underline: '<span class=\"bold italic underline\">$2</span>',
    bold_underline: '<span class=\"bold underline\">$2</span>',
    italic_underline: '<span class=\"italic underline\">$2</span>',
    bold_italic: '<span class=\"bold italic\">$2</span>',
    bold: '<span class=\"bold\">$2</span>',
    italic: '<span class=\"italic\">$2</span>',
    underline: '<span class=\"underline\">$2</span>'
  };

  inline.lexer = function (s) {
    if (!s) {
      return;
    }  

    var styles = [ 'underline', 'italic', 'bold', 'bold_italic', 'italic_underline', 'bold_underline', 'bold_italic_underline' ]
           , i = styles.length, style, match;

    s = s.replace(regex.note_inline, inline.note).replace(/\\\*/g, '[star]').replace(/\\_/g, '[underline]').replace(/\n/g, inline.line_break);

   // if (regex.emphasis.test(s)) {                         // this was causing only every other occurence of an emphasis syntax to be parsed
      while (i--) {
        style = styles[i];
        match = regex[style];
   
        if (match.test(s)) {
          s = s.replace(match, inline[style]);
        }
      }
   // }

    return s.replace(/\[star\]/g, '*').replace(/\[underline\]/g, '_').trim();
  };

  var parse = function (script, toks, callback) {
    if (callback === undefined && typeof toks === 'function') {
      callback = toks;
      toks = undefined;
    }
      
    var tokens = tokenize(script)
      , i      = tokens.length, token
      , title, title_page = [], html = [], output;

    while (i--) {
      token = tokens[i];
      token.text = inline.lexer(token.text);

      switch (token.type) {
        case 'title': title_page.push('<h1>' + token.text + '</h1>'); title = token.text.replace('<br />', ' ').replace(/<(?:.|\n)*?>/g, ''); break;
        case 'credit': title_page.push('<p class=\"credit\">' + token.text + '</p>'); break;
        case 'author': title_page.push('<p class=\"authors\">' + token.text + '</p>'); break;
        case 'authors': title_page.push('<p class=\"authors\">' + token.text + '</p>'); break;
        case 'source': title_page.push('<p class=\"source\">' + token.text + '</p>'); break;
        case 'notes': title_page.push('<p class=\"notes\">' + token.text + '</p>'); break;
        case 'draft_date': title_page.push('<p class=\"draft-date\">' + token.text + '</p>'); break;
        case 'date': title_page.push('<p class=\"date\">' + token.text + '</p>'); break;
        case 'contact': title_page.push('<p class=\"contact\">' + token.text + '</p>'); break;
        case 'copyright': title_page.push('<p class=\"copyright\">' + token.text + '</p>'); break;

        case 'scene_heading': html.push('<h3' + (token.scene_number ? ' id=\"' + token.scene_number + '\">' : '>') + token.text + '</h3>'); break;
        case 'transition': html.push('<h2>' + token.text + '</h2>'); break;

        case 'dual_dialogue_begin': html.push('<div class=\"dual-dialogue\">'); break;
        case 'dialogue_begin': html.push('<div class=\"dialogue' + (token.dual ? ' ' + token.dual : '') + '\">'); break;
        case 'character': html.push('<h4>' + token.text + '</h4>'); break;
        case 'parenthetical': html.push('<p class=\"parenthetical\">' + token.text + '</p>'); break;
        case 'dialogue': html.push('<p>' + token.text + '</p>'); break;
        case 'dialogue_end': html.push('</div> '); break;
        case 'dual_dialogue_end': html.push('</div> '); break;

        case 'section': html.push('<p class=\"section\" data-depth=\"' + token.depth + '\">' + token.text + '</p>'); break;
        case 'synopsis': html.push('<p class=\"synopsis\">' + token.text + '</p>'); break;

        case 'note': html.push('<!-- ' + token.text + '-->'); break;
        case 'boneyard_begin': html.push('<!-- '); break;
        case 'boneyard_end': html.push(' -->'); break;

        case 'action': html.push('<p>' + token.text + '</p>'); break;
        case 'centered': html.push('<p class=\"centered\">' + token.text + '</p>'); break;
        
        case 'page_break': html.push('<hr />'); break;
        case 'line_break': html.push('<br />'); break;
      }
    }

    output = { title: title, html: { title_page: title_page.join(''), script: html.join('') }, tokens: tokens };

    if (typeof callback === 'function') {
      return callback(output);
    }

    return output;
  };

  var fountain = function (script, callback) {
    return fountain.parse(script, callback);
  };
    
  fountain.parse = function (script, tokens, callback) {
    return parse(script, tokens, callback);
  };

  if (typeof module !== 'undefined') {
    module.exports = fountain;
  } else {
    this.fountain = fountain;
  }  
}).call(this);

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