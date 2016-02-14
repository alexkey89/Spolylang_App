/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});
/*
 Highcharts JS v4.1.5 (2015-04-13)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(){function z(){var a,b=arguments,c,d={},e=function(a,b){var c,d;typeof a!=="object"&&(a={});for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[d]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&d!=="renderTo"&&typeof c.nodeType!=="number"?e(a[d]||{},c):b[d]);return a};b[0]===!0&&(d=b[1],b=Array.prototype.slice.call(b,2));c=b.length;for(a=0;a<c;a++)d=e(d,b[a]);return d}function B(a,b){return parseInt(a,b||10)}function Da(a){return typeof a==="string"}function ca(a){return a&&
typeof a==="object"}function Ha(a){return Object.prototype.toString.call(a)==="[object Array]"}function qa(a){return typeof a==="number"}function Ea(a){return V.log(a)/V.LN10}function ha(a){return V.pow(10,a)}function ia(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function s(a){return a!==u&&a!==null}function L(a,b,c){var d,e;if(Da(b))s(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(s(b)&&ca(b))for(d in b)a.setAttribute(d,b[d]);return e}function ra(a){return Ha(a)?
a:[a]}function F(a,b){if(ya&&!ba&&b&&b.opacity!==u)b.filter="alpha(opacity="+b.opacity*100+")";r(a.style,b)}function Z(a,b,c,d,e){a=A.createElement(a);b&&r(a,b);e&&F(a,{padding:0,border:R,margin:0});c&&F(a,c);d&&d.appendChild(a);return a}function ja(a,b){var c=function(){return u};c.prototype=new a;r(c.prototype,b);return c}function Ia(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function Wa(a){return(eb&&eb(a)||nb||0)*6E4}function Ja(a,b){for(var c="{",d=!1,e,f,g,h,i,j=[];(c=a.indexOf(c))!==
-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=P.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e!==null&&(e=w.numberFormat(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:""))):e=Oa(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function ob(a){return V.pow(10,U(V.log(a)/V.LN10))}function pb(a,b,c,d,e){var f,g=a,c=p(c,1);f=a/c;b||(b=[1,2,2.5,5,10],d===!1&&(c===
1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(g=b[d],e&&g*c>=a||!e&&f<=(b[d]+(b[d+1]||b[d]))/2)break;g*=c;return g}function qb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:d});for(e=0;e<c;e++)delete a[e].ss_i}function Pa(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function Fa(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Qa(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),
delete a[c]}function Ra(a){fb||(fb=Z(Ka));a&&fb.appendChild(a);fb.innerHTML=""}function ka(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;H.console&&console.log(c)}function da(a){return parseFloat(a.toPrecision(14))}function Sa(a,b){za=p(a,b.animation)}function Cb(){var a=P.global,b=a.useUTC,c=b?"getUTC":"get",d=b?"setUTC":"set";Aa=a.Date||window.Date;nb=b&&a.timezoneOffset;eb=b&&a.getTimezoneOffset;gb=function(a,c,d,h,i,j){var k;b?(k=Aa.UTC.apply(0,arguments),k+=
Wa(k)):k=(new Aa(a,c,p(d,1),p(h,0),p(i,0),p(j,0))).getTime();return k};rb=c+"Minutes";sb=c+"Hours";tb=c+"Day";Xa=c+"Date";Ya=c+"Month";Za=c+"FullYear";Db=d+"Milliseconds";Eb=d+"Seconds";Fb=d+"Minutes";Gb=d+"Hours";ub=d+"Date";vb=d+"Month";wb=d+"FullYear"}function K(){}function Ta(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function Hb(a,b,c,d,e){var f=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=
e;this.alignOptions={align:b.align||(f?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(f?"middle":c?"bottom":"top"),y:p(b.y,f?4:c?14:-6),x:p(b.x,f?c?-6:6:0)};this.textAlign=b.textAlign||(f?c?"right":"left":"center")}var u,A=document,H=window,V=Math,x=V.round,U=V.floor,sa=V.ceil,t=V.max,I=V.min,O=V.abs,W=V.cos,$=V.sin,la=V.PI,ga=la*2/360,Ba=navigator.userAgent,Ib=H.opera,ya=/(msie|trident)/i.test(Ba)&&!Ib,hb=A.documentMode===8,xb=/AppleWebKit/.test(Ba),La=/Firefox/.test(Ba),Jb=/(Mobile|Android|Windows Phone)/.test(Ba),
Ca="http://www.w3.org/2000/svg",ba=!!A.createElementNS&&!!A.createElementNS(Ca,"svg").createSVGRect,Nb=La&&parseInt(Ba.split("Firefox/")[1],10)<4,ea=!ba&&!ya&&!!A.createElement("canvas").getContext,$a,ab,Kb={},yb=0,fb,P,Oa,za,zb,G,ma=function(){return u},X=[],bb=0,Ka="div",R="none",Ob=/^[0-9]+$/,ib=["plotTop","marginRight","marginBottom","plotLeft"],Pb="stroke-width",Aa,gb,nb,eb,rb,sb,tb,Xa,Ya,Za,Db,Eb,Fb,Gb,ub,vb,wb,J={},w;w=H.Highcharts=H.Highcharts?ka(16,!0):{};w.seriesTypes=J;var r=w.extend=function(a,
b){var c;a||(a={});for(c in b)a[c]=b[c];return a},p=w.pick=function(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],c!==u&&c!==null)return c},cb=w.wrap=function(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}};Oa=function(a,b,c){if(!s(b)||isNaN(b))return"Invalid date";var a=p(a,"%Y-%m-%d %H:%M:%S"),d=new Aa(b-Wa(b)),e,f=d[sb](),g=d[tb](),h=d[Xa](),i=d[Ya](),j=d[Za](),k=P.lang,l=k.weekdays,d=r({a:l[g].substr(0,3),A:l[g],
d:Ia(h),e:h,w:g,b:k.shortMonths[i],B:k.months[i],m:Ia(i+1),y:j.toString().substr(2,2),Y:j,H:Ia(f),I:Ia(f%12||12),l:f%12||12,M:Ia(d[rb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ia(d.getSeconds()),L:Ia(x(b%1E3),3)},w.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+a.substr(1):a};G={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};w.numberFormat=function(a,b,
c,d){var e=P.lang,a=+a||0,f=b===-1?I((a.toString().split(".")[1]||"").length,20):isNaN(b=O(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(B(a=O(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+O(a-c).toFixed(f).slice(2):"")};zb={init:function(a,b,c){var b=b||"",d=a.shift,e=b.indexOf("C")>-1,f=e?7:3,g,b=b.split(" "),c=[].concat(c),h,i,j=function(a){for(g=a.length;g--;)a[g]==="M"&&a.splice(g+
1,0,a[g+1],a[g+2],a[g+1],a[g+2])};e&&(j(b),j(c));a.isArea&&(h=b.splice(b.length-6,6),i=c.splice(c.length-6,6));if(d<=c.length/f&&b.length===c.length)for(;d--;)c=[].concat(c).splice(0,f).concat(c);a.shift=0;if(b.length)for(a=c.length;b.length<a;)d=[].concat(b).splice(b.length-f,f),e&&(d[f-6]=d[f-2],d[f-5]=d[f-1]),b=b.concat(d);h&&(b=b.concat(h),c=c.concat(i));return[b,c]},step:function(a,b,c,d){var e=[],f=a.length;if(c===1)e=d;else if(f===b.length&&c<1)for(;f--;)d=parseFloat(a[f]),e[f]=isNaN(d)?a[f]:
c*parseFloat(b[f]-d)+d;else e=b;return e}};(function(a){H.HighchartsAdapter=H.HighchartsAdapter||a&&{init:function(b){var c=a.fx;a.extend(a.easing,{easeOutQuad:function(a,b,c,g,h){return-g*(b/=h)*(b-2)+c}});a.each(["cur","_default","width","height","opacity"],function(b,e){var f=c.step,g;e==="cur"?f=c.prototype:e==="_default"&&a.Tween&&(f=a.Tween.propHooks[e],e="set");(g=f[e])&&(f[e]=function(a){var c,a=b?a:this;if(a.prop!=="align")return c=a.elem,c.attr?c.attr(a.prop,e==="cur"?u:a.now):g.apply(this,
arguments)})});cb(a.cssHooks.opacity,"get",function(a,b,c){return b.attr?b.opacity||0:a.call(this,b,c)});this.addAnimSetter("d",function(a){var c=a.elem,f;if(!a.started)f=b.init(c,c.d,c.toD),a.start=f[0],a.end=f[1],a.started=!0;c.attr("d",b.step(a.start,a.end,a.pos,c.toD))});this.each=Array.prototype.forEach?function(a,b){return Array.prototype.forEach.call(a,b)}:function(a,b){var c,g=a.length;for(c=0;c<g;c++)if(b.call(a[c],a[c],c,a)===!1)return c};a.fn.highcharts=function(){var a="Chart",b=arguments,
c,g;if(this[0]){Da(b[0])&&(a=b[0],b=Array.prototype.slice.call(b,1));c=b[0];if(c!==u)c.chart=c.chart||{},c.chart.renderTo=this[0],new w[a](c,b[1]),g=this;c===u&&(g=X[L(this[0],"data-highcharts-chart")])}return g}},addAnimSetter:function(b,c){a.Tween?a.Tween.propHooks[b]={set:c}:a.fx.step[b]=c},getScript:a.getScript,inArray:a.inArray,adapterRun:function(b,c){return a(b)[c]()},grep:a.grep,map:function(a,c){for(var d=[],e=0,f=a.length;e<f;e++)d[e]=c.call(a[e],a[e],e,a);return d},offset:function(b){return a(b).offset()},
addEvent:function(b,c,d){a(b).bind(c,d)},removeEvent:function(b,c,d){var e=A.removeEventListener?"removeEventListener":"detachEvent";A[e]&&b&&!b[e]&&(b[e]=function(){});a(b).unbind(c,d)},fireEvent:function(b,c,d,e){var f=a.Event(c),g="detached"+c,h;!ya&&d&&(delete d.layerX,delete d.layerY,delete d.returnValue);r(f,d);b[c]&&(b[g]=b[c],b[c]=null);a.each(["preventDefault","stopPropagation"],function(a,b){var c=f[b];f[b]=function(){try{c.call(f)}catch(a){b==="preventDefault"&&(h=!0)}}});a(b).trigger(f);
b[g]&&(b[c]=b[g],b[g]=null);e&&!f.isDefaultPrevented()&&!h&&e(f)},washMouseEvent:function(a){var c=a.originalEvent||a;if(c.pageX===u)c.pageX=a.pageX,c.pageY=a.pageY;return c},animate:function(b,c,d){var e=a(b);if(!b.style)b.style={};if(c.d)b.toD=c.d,c.d=1;e.stop();c.opacity!==u&&b.attr&&(c.opacity+="px");b.hasAnim=1;e.animate(c,d)},stop:function(b){b.hasAnim&&a(b).stop()}}})(H.jQuery);var T=H.HighchartsAdapter,D=T||{};T&&T.init.call(T,zb);var jb=D.adapterRun,Qb=D.getScript,Ma=D.inArray,m=w.each=D.each,
kb=D.grep,Rb=D.offset,Ua=D.map,N=D.addEvent,Y=D.removeEvent,M=D.fireEvent,Sb=D.washMouseEvent,lb=D.animate,db=D.stop;P={colors:"#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),weekdays:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
decimalPoint:".",numericSymbols:"k,M,G,T,P,E".split(","),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,canvasToolsURL:"http://code.highcharts.com/4.1.5/modules/canvas-tools.js",VMLRadialGradientURL:"http://code.highcharts.com/4.1.5/gfx/vml-radial-gradient.png"},chart:{borderColor:"#4572A7",borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0",resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}}},title:{text:"Chart title",align:"center",margin:15,style:{color:"#333333",fontSize:"18px"}},subtitle:{text:"",align:"center",style:{color:"#555555"}},plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,marker:{lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{enabled:!0,lineWidthPlus:1,radiusPlus:2},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",
formatter:function(){return this.y===null?"":w.numberFormat(this.y,-1)},style:{color:"contrast",fontSize:"11px",fontWeight:"bold",textShadow:"0 0 6px contrast, 0 0 3px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:0.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3}},labels:{style:{position:"absolute",color:"#3E576F"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#909090",borderRadius:0,navigation:{activeColor:"#274b6d",inactiveColor:"#CCC"},shadow:!1,itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000"},itemHiddenStyle:{color:"#CCC"},itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"white",opacity:0.5,
textAlign:"center"}},tooltip:{enabled:!0,animation:ba,backgroundColor:"rgba(249, 249, 249, .85)",borderWidth:1,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
shadow:!0,snap:Jb?25:10,style:{color:"#333333",cursor:"default",fontSize:"12px",padding:"8px",whiteSpace:"nowrap"}},credits:{enabled:!0,

	//text:"Highcharts.com",href:"http://www.highcharts.com",

position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"9px"}}};var aa=P.plotOptions,T=aa.line;Cb();var Tb=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,Ub=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
Vb=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,na=function(a){var b=[],c,d;(function(a){a&&a.stops?d=Ua(a.stops,function(a){return na(a[1])}):(c=Tb.exec(a))?b=[B(c[1]),B(c[2]),B(c[3]),parseFloat(c[4],10)]:(c=Ub.exec(a))?b=[B(c[1],16),B(c[2],16),B(c[3],16),1]:(c=Vb.exec(a))&&(b=[B(c[1]),B(c[2]),B(c[3]),1])})(a);return{get:function(c){var f;d?(f=z(a),f.stops=[].concat(f.stops),m(d,function(a,b){f.stops[b]=[f.stops[b][0],a.get(c)]})):f=b&&!isNaN(b[0])?c==="rgb"?"rgb("+b[0]+","+
b[1]+","+b[2]+")":c==="a"?b[3]:"rgba("+b.join(",")+")":a;return f},brighten:function(a){if(d)m(d,function(b){b.brighten(a)});else if(qa(a)&&a!==0){var c;for(c=0;c<3;c++)b[c]+=B(a*255),b[c]<0&&(b[c]=0),b[c]>255&&(b[c]=255)}return this},rgba:b,setOpacity:function(a){b[3]=a;return this},raw:a}};K.prototype={opacity:1,textProps:"fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textShadow".split(","),init:function(a,b){this.element=b==="span"?Z(b):A.createElementNS(Ca,b);
this.renderer=a},animate:function(a,b,c){b=p(b,za,!0);db(this);if(b){b=z(b,{});if(c)b.complete=c;lb(this,a,b)}else this.attr(a),c&&c();return this},colorGradient:function(a,b,c){var d=this.renderer,e,f,g,h,i,j,k,l,n,o,q=[];a.linearGradient?f="linearGradient":a.radialGradient&&(f="radialGradient");if(f){g=a[f];h=d.gradients;j=a.stops;n=c.radialReference;Ha(g)&&(a[f]=g={x1:g[0],y1:g[1],x2:g[2],y2:g[3],gradientUnits:"userSpaceOnUse"});f==="radialGradient"&&n&&!s(g.gradientUnits)&&(g=z(g,{cx:n[0]-n[2]/
2+g.cx*n[2],cy:n[1]-n[2]/2+g.cy*n[2],r:g.r*n[2],gradientUnits:"userSpaceOnUse"}));for(o in g)o!=="id"&&q.push(o,g[o]);for(o in j)q.push(j[o]);q=q.join(",");h[q]?a=h[q].attr("id"):(g.id=a="highcharts-"+yb++,h[q]=i=d.createElement(f).attr(g).add(d.defs),i.stops=[],m(j,function(a){a[1].indexOf("rgba")===0?(e=na(a[1]),k=e.get("rgb"),l=e.get("a")):(k=a[1],l=1);a=d.createElement("stop").attr({offset:a[0],"stop-color":k,"stop-opacity":l}).add(i);i.stops.push(a)}));c.setAttribute(b,"url("+d.url+"#"+a+")")}},
applyTextShadow:function(a){var b=this.element,c,d=a.indexOf("contrast")!==-1,e=this.renderer.forExport||b.style.textShadow!==u&&!ya;d&&(a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill)));e?d&&F(b,{textShadow:a}):(this.fakeTS=!0,this.ySetter=this.xSetter,c=[].slice.call(b.getElementsByTagName("tspan")),m(a.split(/\s?,\s?/g),function(a){var d=b.firstChild,e,i,a=a.split(" ");e=a[a.length-1];(i=a[a.length-2])&&m(c,function(a,c){var f;c===0&&(a.setAttribute("x",b.getAttribute("x")),c=b.getAttribute("y"),
a.setAttribute("y",c||0),c===null&&b.setAttribute("y",0));f=a.cloneNode(1);L(f,{"class":"highcharts-text-shadow",fill:e,stroke:e,"stroke-opacity":1/t(B(i),3),"stroke-width":i,"stroke-linejoin":"round"});b.insertBefore(f,d)})}))},attr:function(a,b){var c,d,e=this.element,f,g=this,h;typeof a==="string"&&b!==u&&(c=a,a={},a[c]=b);if(typeof a==="string")g=(this[a+"Getter"]||this._defaultGetter).call(this,a,e);else{for(c in a){d=a[c];h=!1;this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c)&&
(f||(this.symbolAttr(a),f=!0),h=!0);if(this.rotation&&(c==="x"||c==="y"))this.doTransform=!0;h||(this[c+"Setter"]||this._defaultSetter).call(this,d,c,e);this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c)&&this.updateShadows(c,d)}if(this.doTransform)this.updateTransform(),this.doTransform=!1}return g},updateShadows:function(a,b){for(var c=this.shadows,d=c.length;d--;)c[d].setAttribute(a,a==="height"?t(b-(c[d].cutHeight||0),0):a==="d"?this.d:b)},addClass:function(a){var b=this.element,
c=L(b,"class")||"";c.indexOf(a)===-1&&L(b,"class",c+" "+a);return this},symbolAttr:function(a){var b=this;m("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","),function(c){b[c]=p(a[c],b[c])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":R)},crisp:function(a){var b,c={},d,e=a.strokeWidth||this.strokeWidth||0;d=x(e)%2/2;a.x=U(a.x||this.x||0)+d;a.y=U(a.y||this.y||0)+d;a.width=
U((a.width||this.width||0)-2*d);a.height=U((a.height||this.height||0)-2*d);a.strokeWidth=e;for(b in a)this[b]!==a[b]&&(this[b]=c[b]=a[b]);return c},css:function(a){var b=this.styles,c={},d=this.element,e,f,g="";e=!b;if(a&&a.color)a.fill=a.color;if(b)for(f in a)a[f]!==b[f]&&(c[f]=a[f],e=!0);if(e){e=this.textWidth=a&&a.width&&d.nodeName.toLowerCase()==="text"&&B(a.width)||this.textWidth;b&&(a=r(b,c));this.styles=a;e&&(ea||!ba&&this.renderer.forExport)&&delete a.width;if(ya&&!ba)F(this.element,a);else{b=
function(a,b){return"-"+b.toLowerCase()};for(f in a)g+=f.replace(/([A-Z])/g,b)+":"+a[f]+";";L(d,"style",g)}e&&this.added&&this.renderer.buildText(this)}return this},on:function(a,b){var c=this,d=c.element;ab&&a==="click"?(d.ontouchstart=function(a){c.touchEventFired=Aa.now();a.preventDefault();b.call(d,a)},d.onclick=function(a){(Ba.indexOf("Android")===-1||Aa.now()-(c.touchEventFired||0)>1100)&&b.call(d,a)}):d["on"+a]=b;return this},setRadialReference:function(a){this.element.radialReference=a;return this},
translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(){this.inverted=!0;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,b=this.translateY||0,c=this.scaleX,d=this.scaleY,e=this.inverted,f=this.rotation,g=this.element;e&&(a+=this.attr("width"),b+=this.attr("height"));a=["translate("+a+","+b+")"];e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+(g.getAttribute("x")||0)+" "+(g.getAttribute("y")||0)+")");(s(c)||s(d))&&
a.push("scale("+p(c,1)+" "+p(d,1)+")");a.length&&g.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,b,c){var d,e,f,g,h={};e=this.renderer;f=e.alignedObjects;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!c||Da(c))this.alignTo=d=c||"renderer",ia(f,this),f.push(this),c=null}else a=this.alignOptions,b=this.alignByTranslate,d=this.alignTo;c=p(c,e[d],e);d=a.align;e=a.verticalAlign;f=(c.x||0)+(a.x||0);g=(c.y||0)+
(a.y||0);if(d==="right"||d==="center")f+=(c.width-(a.width||0))/{right:1,center:2}[d];h[b?"translateX":"x"]=x(f);if(e==="bottom"||e==="middle")g+=(c.height-(a.height||0))/({bottom:1,middle:2}[e]||1);h[b?"translateY":"y"]=x(g);this[this.placed?"animate":"attr"](h);this.placed=!0;this.alignAttr=h;return this},getBBox:function(a){var b,c=this.renderer,d,e=this.rotation,f=this.element,g=this.styles,h=e*ga;d=this.textStr;var i,j=f.style,k,l;d!==u&&(l=["",e||0,g&&g.fontSize,f.style.width].join(","),l=d===
""||Ob.test(d)?"num:"+d.toString().length+l:d+l);l&&!a&&(b=c.cache[l]);if(!b){if(f.namespaceURI===Ca||c.forExport){try{k=this.fakeTS&&function(a){m(f.querySelectorAll(".highcharts-text-shadow"),function(b){b.style.display=a})},La&&j.textShadow?(i=j.textShadow,j.textShadow=""):k&&k(R),b=f.getBBox?r({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},i?j.textShadow=i:k&&k("")}catch(n){}if(!b||b.width<0)b={width:0,height:0}}else b=this.htmlGetBBox();if(c.isSVG){a=b.width;d=b.height;if(ya&&g&&
g.fontSize==="11px"&&d.toPrecision(3)==="16.9")b.height=d=14;if(e)b.width=O(d*$(h))+O(a*W(h)),b.height=O(d*W(h))+O(a*$(h))}c.cache[l]=b}return b},show:function(a){a&&this.element.namespaceURI===Ca?this.element.removeAttribute("visibility"):this.attr({visibility:a?"inherit":"visible"});return this},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=this.renderer,
c=this.element,d;if(a)this.parentGroup=a;this.parentInverted=a&&a.inverted;this.textStr!==void 0&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:b.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},c=a.shadows,d=a.renderer.isSVG&&b.nodeName==="SPAN"&&a.parentGroup,e,f;b.onclick=b.onmouseout=b.onmouseover=b.onmousemove=b.point=
null;db(a);if(a.clipPath)a.clipPath=a.clipPath.destroy();if(a.stops){for(f=0;f<a.stops.length;f++)a.stops[f]=a.stops[f].destroy();a.stops=null}a.safeRemoveChild(b);for(c&&m(c,function(b){a.safeRemoveChild(b)});d&&d.div&&d.div.childNodes.length===0;)b=d.parentGroup,a.safeRemoveChild(d.div),delete d.div,d=b;a.alignTo&&ia(a.renderer.alignedObjects,a);for(e in a)delete a[e];return null},shadow:function(a,b,c){var d=[],e,f,g=this.element,h,i,j,k;if(a){i=p(a.width,3);j=(a.opacity||0.15)/i;k=this.parentInverted?
"(-1,-1)":"("+p(a.offsetX,1)+", "+p(a.offsetY,1)+")";for(e=1;e<=i;e++){f=g.cloneNode(0);h=i*2+1-2*e;L(f,{isShadow:"true",stroke:a.color||"black","stroke-opacity":j*e,"stroke-width":h,transform:"translate"+k,fill:R});if(c)L(f,"height",t(L(f,"height")-h,0)),f.cutHeight=h;b?b.element.appendChild(f):g.parentNode.insertBefore(f,g);d.push(f)}this.shadows=d}return this},xGetter:function(a){this.element.nodeName==="circle"&&(a={x:"cx",y:"cy"}[a]||a);return this._defaultGetter(a)},_defaultGetter:function(a){a=
p(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(b,a);this[b]=a},dashstyleSetter:function(a){var b;if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(b=a.length;b--;)a[b]=B(a[b])*this["stroke-width"];a=a.join(",").replace("NaN","none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,b,c){this[b]=a;c.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=A.createElementNS(Ca,"title"),this.element.appendChild(b));b.textContent=String(p(a),"").replace(/<[^>]*>/g,
"")},textSetter:function(a){if(a!==this.textStr)delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this)},fillSetter:function(a,b,c){typeof a==="string"?c.setAttribute(b,a):a&&this.colorGradient(a,b,c)},zIndexSetter:function(a,b){var c=this.renderer,d=this.parentGroup,c=(d||c).element||c.box,e,f,g=this.element,h;e=this.added;var i;s(a)&&(g.setAttribute(b,a),a=+a,this[b]===a&&(e=!1),this[b]=a);if(e){if((a=this.zIndex)&&d)d.handleZ=!0;d=c.childNodes;for(i=0;i<d.length&&!h;i++)if(e=
d[i],f=L(e,"zIndex"),e!==g&&(B(f)>a||!s(a)&&s(f)))c.insertBefore(g,e),h=!0;h||c.appendChild(g)}return h},_defaultSetter:function(a,b,c){c.setAttribute(b,a)}};K.prototype.yGetter=K.prototype.xGetter;K.prototype.translateXSetter=K.prototype.translateYSetter=K.prototype.rotationSetter=K.prototype.verticalAlignSetter=K.prototype.scaleXSetter=K.prototype.scaleYSetter=function(a,b){this[b]=a;this.doTransform=!0};K.prototype["stroke-widthSetter"]=K.prototype.strokeSetter=function(a,b,c){this[b]=a;if(this.stroke&&
this["stroke-width"])this.strokeWidth=this["stroke-width"],K.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0;else if(b==="stroke-width"&&a===0&&this.hasStroke)c.removeAttribute("stroke"),this.hasStroke=!1};var ta=function(){this.init.apply(this,arguments)};ta.prototype={Element:K,init:function(a,b,c,d,e){var f=location,g,d=this.createElement("svg").attr({version:"1.1"}).css(this.getStyle(d));g=d.element;a.appendChild(g);
a.innerHTML.indexOf("xmlns")===-1&&L(g,"xmlns",Ca);this.isSVG=!0;this.box=g;this.boxWrapper=d;this.alignedObjects=[];this.url=(La||xb)&&A.getElementsByTagName("base").length?f.href.replace(/#.*?$/,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(A.createTextNode("Created with Highcharts 4.1.5"));this.defs=this.createElement("defs").add();this.forExport=e;this.gradients={};this.cache={};this.setSize(b,c,!1);var h;if(La&&a.getBoundingClientRect)this.subPixelFix=
b=function(){F(a,{left:0,top:0});h=a.getBoundingClientRect();F(a,{left:sa(h.left)-h.left+"px",top:sa(h.top)-h.top+"px"})},b(),N(H,"resize",b)},getStyle:function(a){return this.style=r({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();Qa(this.gradients||{});this.gradients=null;if(a)this.defs=a.destroy();
this.subPixelFix&&Y(H,"resize",this.subPixelFix);return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:function(){},buildText:function(a){for(var b=a.element,c=this,d=c.forExport,e=p(a.textStr,"").toString(),f=e.indexOf("<")!==-1,g=b.childNodes,h,i,j=L(b,"x"),k=a.styles,l=a.textWidth,n=k&&k.lineHeight,o=k&&k.textShadow,q=k&&k.textOverflow==="ellipsis",y=g.length,S=l&&!a.added&&this.box,C=function(a){return n?B(n):c.fontMetrics(/(px|em)$/.test(a&&
a.style.fontSize)?a.style.fontSize:k&&k.fontSize||c.style.fontSize||12,a).h},v=function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,">")};y--;)b.removeChild(g[y]);!f&&!o&&!q&&e.indexOf(" ")===-1?b.appendChild(A.createTextNode(v(e))):(h=/<.*style="([^"]+)".*>/,i=/<.*href="(http[^"]+)".*>/,S&&S.appendChild(b),e=f?e.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g):
[e],e[e.length-1]===""&&e.pop(),m(e,function(e,f){var g,n=0,e=e.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");g=e.split("|||");m(g,function(e){if(e!==""||g.length===1){var o={},y=A.createElementNS(Ca,"tspan"),p;h.test(e)&&(p=e.match(h)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),L(y,"style",p));i.test(e)&&!d&&(L(y,"onclick",'location.href="'+e.match(i)[1]+'"'),F(y,{cursor:"pointer"}));e=v(e.replace(/<(.|\n)*?>/g,"")||" ");if(e!==" "){y.appendChild(A.createTextNode(e));if(n)o.dx=0;
else if(f&&j!==null)o.x=j;L(y,o);b.appendChild(y);!n&&f&&(!ba&&d&&F(y,{display:"block"}),L(y,"dy",C(y)));if(l){for(var o=e.replace(/([^\^])-/g,"$1- ").split(" "),m=g.length>1||f||o.length>1&&k.whiteSpace!=="nowrap",S,s,ua,u=[],t=C(y),x=1,r=a.rotation,z=e,w=z.length;(m||q)&&(o.length||u.length);)a.rotation=0,S=a.getBBox(!0),ua=S.width,!ba&&c.forExport&&(ua=c.measureSpanWidth(y.firstChild.data,a.styles)),S=ua>l,s===void 0&&(s=S),q&&s?(w/=2,z===""||!S&&w<0.5?o=[]:(S&&(s=!0),z=e.substring(0,z.length+
(S?-1:1)*sa(w)),o=[z+"…"],y.removeChild(y.firstChild))):!S||o.length===1?(o=u,u=[],o.length&&(x++,y=A.createElementNS(Ca,"tspan"),L(y,{dy:t,x:j}),p&&L(y,"style",p),b.appendChild(y)),ua>l&&(l=ua)):(y.removeChild(y.firstChild),u.unshift(o.pop())),o.length&&y.appendChild(A.createTextNode(o.join(" ").replace(/- /g,"-")));s&&a.attr("title",a.textStr);a.rotation=r}n++}}})}),S&&S.removeChild(b),o&&a.applyTextShadow&&a.applyTextShadow(o))},getContrast:function(a){a=na(a).rgba;return a[0]+a[1]+a[2]>384?"#000":
"#FFF"},button:function(a,b,c,d,e,f,g,h,i){var j=this.label(a,b,c,i,null,null,null,null,"button"),k=0,l,n,o,q,y,p,a={x1:0,y1:0,x2:0,y2:1},e=z({"stroke-width":1,stroke:"#CCCCCC",fill:{linearGradient:a,stops:[[0,"#FEFEFE"],[1,"#F6F6F6"]]},r:2,padding:5,style:{color:"black"}},e);o=e.style;delete e.style;f=z(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#FFF"],[1,"#ACF"]]}},f);q=f.style;delete f.style;g=z(e,{stroke:"#68A",fill:{linearGradient:a,stops:[[0,"#9BD"],[1,"#CDF"]]}},g);y=g.style;delete g.style;
h=z(e,{style:{color:"#CCC"}},h);p=h.style;delete h.style;N(j.element,ya?"mouseover":"mouseenter",function(){k!==3&&j.attr(f).css(q)});N(j.element,ya?"mouseout":"mouseleave",function(){k!==3&&(l=[e,f,g][k],n=[o,q,y][k],j.attr(l).css(n))});j.setState=function(a){(j.state=k=a)?a===2?j.attr(g).css(y):a===3&&j.attr(h).css(p):j.attr(e).css(o)};return j.on("click",function(){k!==3&&d.call(j)}).attr(e).css(r({cursor:"default"},o))},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=x(a[1])-b%2/2);a[2]===a[5]&&
(a[2]=a[5]=x(a[2])+b%2/2);return a},path:function(a){var b={fill:R};Ha(a)?b.d=a:ca(a)&&r(b,a);return this.createElement("path").attr(b)},circle:function(a,b,c){a=ca(a)?a:{x:a,y:b,r:c};b=this.createElement("circle");b.xSetter=function(a){this.element.setAttribute("cx",a)};b.ySetter=function(a){this.element.setAttribute("cy",a)};return b.attr(a)},arc:function(a,b,c,d,e,f){if(ca(a))b=a.y,c=a.r,d=a.innerR,e=a.start,f=a.end,a=a.x;a=this.symbol("arc",a||0,b||0,c||0,c||0,{innerR:d||0,start:e||0,end:f||0});
a.r=c;return a},rect:function(a,b,c,d,e,f){var e=ca(a)?a.r:e,g=this.createElement("rect"),a=ca(a)?a:a===u?{}:{x:a,y:b,width:t(c,0),height:t(d,0)};if(f!==u)a.strokeWidth=f,a=g.crisp(a);if(e)a.r=e;g.rSetter=function(a){L(this.element,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,b,c){var d=this.alignedObjects,e=d.length;this.width=a;this.height=b;for(this.boxWrapper[p(c,!0)?"animate":"attr"]({width:a,height:b});e--;)d[e].align()},g:function(a){var b=this.createElement("g");return s(a)?b.attr({"class":"highcharts-"+
a}):b},image:function(a,b,c,d,e){var f={preserveAspectRatio:R};arguments.length>1&&r(f,{x:b,y:c,width:d,height:e});f=this.createElement("image").attr(f);f.element.setAttributeNS?f.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):f.element.setAttribute("hc-svg-href",a);return f},symbol:function(a,b,c,d,e,f){var g,h=this.symbols[a],h=h&&h(x(b),x(c),d,e,f),i=/^url\((.*?)\)$/,j,k;if(h)g=this.path(h),r(g,{symbolName:a,x:b,y:c,width:d,height:e}),f&&r(g,f);else if(i.test(a))k=function(a,b){a.element&&
(a.attr({width:b[0],height:b[1]}),a.alignByTranslate||a.translate(x((d-b[0])/2),x((e-b[1])/2)))},j=a.match(i)[1],a=Kb[j]||f&&f.width&&f.height&&[f.width,f.height],g=this.image(j).attr({x:b,y:c}),g.isImg=!0,a?k(g,a):(g.attr({width:0,height:0}),Z("img",{onload:function(){k(g,Kb[j]=[this.width,this.height])},src:j}));return g},symbols:{circle:function(a,b,c,d){var e=0.166*c;return["M",a+c/2,b,"C",a+c+e,b,a+c+e,b+d,a+c/2,b+d,"C",a-e,b+d,a-e,b,a+c/2,b,"Z"]},square:function(a,b,c,d){return["M",a,b,"L",
a+c,b,a+c,b+d,a,b+d,"Z"]},triangle:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d,a,b+d,"Z"]},"triangle-down":function(a,b,c,d){return["M",a,b,"L",a+c,b,a+c/2,b+d,"Z"]},diamond:function(a,b,c,d){return["M",a+c/2,b,"L",a+c,b+d/2,a+c/2,b+d,a,b+d/2,"Z"]},arc:function(a,b,c,d,e){var f=e.start,c=e.r||c||d,g=e.end-0.001,d=e.innerR,h=e.open,i=W(f),j=$(f),k=W(g),g=$(g),e=e.end-f<la?0:1;return["M",a+c*i,b+c*j,"A",c,c,0,e,1,a+c*k,b+c*g,h?"M":"L",a+d*k,b+d*g,"A",d,d,0,e,0,a+d*i,b+d*j,h?"":"Z"]},callout:function(a,
b,c,d,e){var f=I(e&&e.r||0,c,d),g=f+6,h=e&&e.anchorX,i=e&&e.anchorY,e=x(e.strokeWidth||0)%2/2;a+=e;b+=e;e=["M",a+f,b,"L",a+c-f,b,"C",a+c,b,a+c,b,a+c,b+f,"L",a+c,b+d-f,"C",a+c,b+d,a+c,b+d,a+c-f,b+d,"L",a+f,b+d,"C",a,b+d,a,b+d,a,b+d-f,"L",a,b+f,"C",a,b,a,b,a+f,b];h&&h>c&&i>b+g&&i<b+d-g?e.splice(13,3,"L",a+c,i-6,a+c+6,i,a+c,i+6,a+c,b+d-f):h&&h<0&&i>b+g&&i<b+d-g?e.splice(33,3,"L",a,i+6,a-6,i,a,i-6,a,b+f):i&&i>d&&h>a+g&&h<a+c-g?e.splice(23,3,"L",h+6,b+d,h,b+d+6,h-6,b+d,a+f,b+d):i&&i<0&&h>a+g&&h<a+c-g&&
e.splice(3,3,"L",h-6,b,h,b-6,h+6,b,c-f,b);return e}},clipRect:function(a,b,c,d){var e="highcharts-"+yb++,f=this.createElement("clipPath").attr({id:e}).add(this.defs),a=this.rect(a,b,c,d,0).add(f);a.id=e;a.clipPath=f;a.count=0;return a},text:function(a,b,c,d){var e=ea||!ba&&this.forExport,f={};if(d&&!this.forExport)return this.html(a,b,c);f.x=Math.round(b||0);if(c)f.y=Math.round(c);if(a||a===0)f.text=a;a=this.createElement("text").attr(f);e&&a.css({position:"absolute"});if(!d)a.xSetter=function(a,
b,c){var d=c.getElementsByTagName("tspan"),e,f=c.getAttribute(b),n;for(n=0;n<d.length;n++)e=d[n],e.getAttribute(b)===f&&e.setAttribute(b,a);c.setAttribute(b,a)};return a},fontMetrics:function(a,b){a=a||this.style.fontSize;if(b&&H.getComputedStyle)b=b.element||b,a=H.getComputedStyle(b,"").fontSize;var a=/px/.test(a)?B(a):/em/.test(a)?parseFloat(a)*12:12,c=a<24?a+3:x(a*1.2),d=x(c*0.8);return{h:c,b:d,f:a}},rotCorr:function(a,b,c){var d=a;b&&c&&(d=t(d*W(b*ga),4));return{x:-a/3*$(b*ga),y:d}},label:function(a,
b,c,d,e,f,g,h,i){function j(){var a,b;a=q.element.style;p=(fa===void 0||t===void 0||o.styles.textAlign)&&s(q.textStr)&&q.getBBox();o.width=(fa||p.width||0)+2*v+ua;o.height=(t||p.height||0)+2*v;I=v+n.fontMetrics(a&&a.fontSize,q).b;if(D){if(!y)a=x(-C*v),b=h?-I:0,o.box=y=d?n.symbol(d,a,b,o.width,o.height,E):n.rect(a,b,o.width,o.height,0,E[Pb]),y.attr("fill",R).add(o);y.isImg||y.attr(r({width:x(o.width),height:x(o.height)},E));E=null}}function k(){var a=o.styles,a=a&&a.textAlign,b=ua+v*(1-C),c;c=h?0:
I;if(s(fa)&&p&&(a==="center"||a==="right"))b+={center:0.5,right:1}[a]*(fa-p.width);if(b!==q.x||c!==q.y)q.attr("x",b),c!==u&&q.attr(q.element.nodeName==="SPAN"?"y":"translateY",c);q.x=b;q.y=c}function l(a,b){y?y.attr(a,b):E[a]=b}var n=this,o=n.g(i),q=n.text("",0,0,g).attr({zIndex:1}),y,p,C=0,v=3,ua=0,fa,t,w,A,B=0,E={},I,D;o.onAdd=function(){q.add(o);o.attr({text:a||a===0?a:"",x:b,y:c});y&&s(e)&&o.attr({anchorX:e,anchorY:f})};o.widthSetter=function(a){fa=a};o.heightSetter=function(a){t=a};o.paddingSetter=
function(a){if(s(a)&&a!==v)v=o.padding=a,k()};o.paddingLeftSetter=function(a){s(a)&&a!==ua&&(ua=a,k())};o.alignSetter=function(a){C={left:0,center:0.5,right:1}[a]};o.textSetter=function(a){a!==u&&q.textSetter(a);j();k()};o["stroke-widthSetter"]=function(a,b){a&&(D=!0);B=a%2/2;l(b,a)};o.strokeSetter=o.fillSetter=o.rSetter=function(a,b){b==="fill"&&a&&(D=!0);l(b,a)};o.anchorXSetter=function(a,b){e=a;l(b,a+B-w)};o.anchorYSetter=function(a,b){f=a;l(b,a-A)};o.xSetter=function(a){o.x=a;C&&(a-=C*((fa||p.width)+
v));w=x(a);o.attr("translateX",w)};o.ySetter=function(a){A=o.y=x(a);o.attr("translateY",A)};var G=o.css;return r(o,{css:function(a){if(a){var b={},a=z(a);m(o.textProps,function(c){a[c]!==u&&(b[c]=a[c],delete a[c])});q.css(b)}return G.call(o,a)},getBBox:function(){return{width:p.width+2*v,height:p.height+2*v,x:p.x-v,y:p.y-v}},shadow:function(a){y&&y.shadow(a);return o},destroy:function(){Y(o.element,"mouseenter");Y(o.element,"mouseleave");q&&(q=q.destroy());y&&(y=y.destroy());K.prototype.destroy.call(o);
o=n=j=k=l=null}})}};$a=ta;r(K.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&b.tagName==="SPAN"&&a.width)delete a.width,this.textWidth=b,this.updateTransform();if(a&&a.textOverflow==="ellipsis")a.whiteSpace="nowrap",a.overflow="hidden";this.styles=r(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;if(a.nodeName==="text")a.style.position="absolute";return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=
this.renderer,b=this.element,c=this.translateX||0,d=this.translateY||0,e=this.x||0,f=this.y||0,g=this.textAlign||"left",h={left:0,center:0.5,right:1}[g],i=this.shadows,j=this.styles;F(b,{marginLeft:c,marginTop:d});i&&m(i,function(a){F(a,{marginLeft:c+1,marginTop:d+1})});this.inverted&&m(b.childNodes,function(c){a.invertChild(c,b)});if(b.tagName==="SPAN"){var k=this.rotation,l,n=B(this.textWidth),o=[k,g,b.innerHTML,this.textWidth].join(",");if(o!==this.cTT){l=a.fontMetrics(b.style.fontSize).b;s(k)&&
this.setSpanRotation(k,h,l);i=p(this.elemWidth,b.offsetWidth);if(i>n&&/[ \-]/.test(b.textContent||b.innerText))F(b,{width:n+"px",display:"block",whiteSpace:j&&j.whiteSpace||"normal"}),i=n;this.getSpanCorrection(i,l,h,k,g)}F(b,{left:e+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});if(xb)l=b.offsetHeight;this.cTT=o}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,c){var d={},e=ya?"-ms-transform":xb?"-webkit-transform":La?"MozTransform":Ib?"-o-transform":"";d[e]=d.transform="rotate("+a+"deg)";
d[e+(La?"Origin":"-origin")]=d.transformOrigin=b*100+"% "+c+"px";F(this.element,d)},getSpanCorrection:function(a,b,c){this.xCorr=-a*c;this.yCorr=-b}});r(ta.prototype,{html:function(a,b,c){var d=this.createElement("span"),e=d.element,f=d.renderer;d.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a};d.xSetter=d.ySetter=d.alignSetter=d.rotationSetter=function(a,b){b==="align"&&(b="textAlign");d[b]=a;d.htmlUpdateTransform()};d.attr({text:a,x:x(b),y:x(c)}).css({position:"absolute",
fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});e.style.whiteSpace="nowrap";d.css=d.htmlCss;if(f.isSVG)d.add=function(a){var b,c=f.box.parentNode,j=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)j.push(a),a=a.parentGroup;m(j.reverse(),function(a){var d;b=a.div=a.div||Z(Ka,{className:L(a.element,"class")},{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px"},b||c);d=b.style;r(a,{translateXSetter:function(b,c){d.left=b+"px";a[c]=b;a.doTransform=!0},translateYSetter:function(b,
c){d.top=b+"px";a[c]=b;a.doTransform=!0},visibilitySetter:function(a,b){d[b]=a}})})}}else b=c;b.appendChild(e);d.added=!0;d.alignOnAdd&&d.htmlUpdateTransform();return d};return d}});if(!ba&&!ea){D={init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],d=["position: ","absolute",";"],e=b===Ka;(b==="shape"||e)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",e?"hidden":"visible");c.push(' style="',d.join(""),'"/>');if(b)c=e||b==="span"||b==="img"?c.join(""):a.prepVML(c),this.element=
Z(c);this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,d=a?a.element||a:d;a&&a.inverted&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();return this},updateTransform:K.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=W(a*ga),c=$(a*ga);F(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):
R})},getSpanCorrection:function(a,b,c,d,e){var f=d?W(d*ga):1,g=d?$(d*ga):0,h=p(this.elemHeight,this.element.offsetHeight),i;this.xCorr=f<0&&-a;this.yCorr=g<0&&-h;i=f*g<0;this.xCorr+=g*b*(i?1-c:c);this.yCorr-=f*b*(d?i?c:1-c:1);e&&e!=="left"&&(this.xCorr-=a*c*(f<0?-1:1),d&&(this.yCorr-=h*c*(g<0?-1:1)),F(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)if(qa(a[b]))c[b]=x(a[b]*10)-5;else if(a[b]==="Z")c[b]="x";else if(c[b]=a[b],a.isArc&&(a[b]==="wa"||a[b]==="at"))c[b+5]===
c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1);return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,ia(c,b),c.push(b),b.destroyClip=function(){ia(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),a={clip:hb?"inherit":"rect(auto)"});return b.css(a)},css:K.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&Ra(a)},destroy:function(){this.destroyClip&&this.destroyClip();return K.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+
a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var c,a=a.split(/[ ,]/);c=a.length;if(c===9||c===11)a[c-4]=a[c-2]=B(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var d=[],e,f=this.element,g=this.renderer,h,i=f.style,j,k=f.path,l,n,o,q;k&&typeof k.value!=="string"&&(k="x");n=k;if(a){o=p(a.width,3);q=(a.opacity||0.15)/o;for(e=1;e<=3;e++){l=o*2+1-2*e;c&&(n=this.cutOffPath(k.value,l+0.5));j=['<shape isShadow="true" strokeweight="',l,'" filled="false" path="',
n,'" coordsize="10 10" style="',f.style.cssText,'" />'];h=Z(g.prepVML(j),null,{left:B(i.left)+p(a.offsetX,1),top:B(i.top)+p(a.offsetY,1)});if(c)h.cutOff=l+1;j=['<stroke color="',a.color||"black",'" opacity="',q*e,'"/>'];Z(g.prepVML(j),null,null,h);b?b.element.appendChild(h):f.parentNode.insertBefore(h,f);d.push(h)}this.shadows=d}return this},updateShadows:ma,setAttr:function(a,b){hb?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){this.element.className=a},dashstyleSetter:function(a,
b,c){(c.getElementsByTagName("stroke")[0]||Z(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows,a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;if(d==="SPAN")c.style.color=a;else if(d!=="IMG")c.filled=a!==R,this.setAttr("fillcolor",this.renderer.color(a,c,b,this))},opacitySetter:ma,
rotationSetter:function(a,b,c){c=c.style;this[b]=c[b]=a;c.left=-x($(a*ga)+1)+"px";c.top=x(W(a*ga))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;qa(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){a==="inherit"&&(a="visible");this.shadows&&m(this.shadows,function(c){c.style[b]=a});c.nodeName==="DIV"&&(a=a==="hidden"?"-999em":
0,hb||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;b==="x"?b="left":b==="y"&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}};w.VMLElement=D=ja(K,D);D.prototype.ySetter=D.prototype.widthSetter=D.prototype.heightSetter=D.prototype.xSetter;var Na={Element:D,isIE8:Ba.indexOf("MSIE 8.0")>-1,init:function(a,b,c,d){var e;this.alignedObjects=[];d=this.createElement(Ka).css(r(this.getStyle(d),
{position:"relative"}));e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.cache={};this.setSize(b,c,!1);if(!A.namespaces.hcv){A.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{A.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(f){A.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var e=this.createElement(),f=ca(a);return r(e,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:c)-1,height:(f?a.height:d)-1,getCSS:function(a){var b=a.element,c=b.nodeName,a=a.inverted,d=this.top-(c==="shape"?b.offsetTop:0),e=this.left,b=e+this.width,f=d+this.height,d={clip:"rect("+x(a?e:d)+"px,"+x(a?f:b)+"px,"+x(a?b:f)+"px,"+x(a?d:e)+"px)"};!a&&hb&&c==="DIV"&&r(d,{width:b+"px",height:f+"px"});return d},
updateClipping:function(){m(e.members,function(a){a.element&&a.css(e.getCSS(a))})}})},color:function(a,b,c,d){var e=this,f,g=/^rgba/,h,i,j=R;a&&a.linearGradient?i="gradient":a&&a.radialGradient&&(i="pattern");if(i){var k,l,n=a.linearGradient||a.radialGradient,o,q,y,p,C,v="",a=a.stops,s,fa=[],t=function(){h=['<fill colors="'+fa.join(",")+'" opacity="',y,'" o:opacity2="',q,'" type="',i,'" ',v,'focus="100%" method="any" />'];Z(e.prepVML(h),null,null,b)};o=a[0];s=a[a.length-1];o[0]>0&&a.unshift([0,o[1]]);
s[0]<1&&a.push([1,s[1]]);m(a,function(a,b){g.test(a[1])?(f=na(a[1]),k=f.get("rgb"),l=f.get("a")):(k=a[1],l=1);fa.push(a[0]*100+"% "+k);b?(y=l,p=k):(q=l,C=k)});if(c==="fill")if(i==="gradient")c=n.x1||n[0]||0,a=n.y1||n[1]||0,o=n.x2||n[2]||0,n=n.y2||n[3]||0,v='angle="'+(90-V.atan((n-a)/(o-c))*180/la)+'"',t();else{var j=n.r,u=j*2,x=j*2,r=n.cx,E=n.cy,z=b.radialReference,w,j=function(){z&&(w=d.getBBox(),r+=(z[0]-w.x)/w.width-0.5,E+=(z[1]-w.y)/w.height-0.5,u*=z[2]/w.width,x*=z[2]/w.height);v='src="'+P.global.VMLRadialGradientURL+
'" size="'+u+","+x+'" origin="0.5,0.5" position="'+r+","+E+'" color2="'+C+'" ';t()};d.added?j():d.onAdd=j;j=p}else j=k}else if(g.test(a)&&b.tagName!=="IMG")f=na(a),h=["<",c,' opacity="',f.get("a"),'"/>'],Z(this.prepVML(h),null,null,b),j=f.get("rgb");else{j=b.getElementsByTagName(c);if(j.length)j[0].opacity=1,j[0].type="solid";j=a}return j},prepVML:function(a){var b=this.isIE8,a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=a.indexOf('style="')===-1?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):a=a.replace("<","<hcv:");return a},text:ta.prototype.html,path:function(a){var b={coordsize:"10 10"};Ha(a)?b.d=a:ca(a)&&r(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");if(ca(a))c=a.r,b=a.y,a=a.x;d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement(Ka).attr(b)},image:function(a,
b,c,d,e){var f=this.createElement("img").attr({src:a});arguments.length>1&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return a==="rect"?this.symbol(a):ta.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this,d=b.style,e=a.tagName==="IMG"&&a.style;F(a,{flip:"x",left:B(d.width)-(e?B(e.top):1),top:B(d.height)-(e?B(e.left):1),rotation:-90});m(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,g=e.end,h=e.r||c||
d,c=e.innerR,d=W(f),i=$(f),j=W(g),k=$(g);if(g-f===0)return["x"];f=["wa",a-h,b-h,a+h,b+h,a+h*d,b+h*i,a+h*j,b+h*k];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*j,b+c*k,a+c*d,b+c*i,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return ta.prototype.symbols[!s(e)||!e.r?"square":"callout"].call(0,a,b,c,d,e)}}};w.VMLRenderer=D=function(){this.init.apply(this,
arguments)};D.prototype=z(ta.prototype,Na);$a=D}ta.prototype.measureSpanWidth=function(a,b){var c=A.createElement("span"),d;d=A.createTextNode(a);c.appendChild(d);F(c,b);this.box.appendChild(c);d=c.offsetWidth;Ra(c);return d};var Lb;if(ea)w.CanVGRenderer=D=function(){Ca="http://www.w3.org/1999/xhtml"},D.prototype.symbols={},Lb=function(){function a(){var a=b.length,d;for(d=0;d<a;d++)b[d]();b=[]}var b=[];return{push:function(c,d){b.length===0&&Qb(d,a);b.push(c)}}}(),$a=D;Ta.prototype={addLabel:function(){var a=
this.axis,b=a.options,c=a.chart,d=a.categories,e=a.names,f=this.pos,g=b.labels,h=a.tickPositions,i=f===h[0],j=f===h[h.length-1],e=d?p(d[f],e[f],f):f,d=this.label,h=h.info,k;a.isDatetimeAxis&&h&&(k=b.dateTimeLabelFormats[h.higherRanks[f]||h.unitName]);this.isFirst=i;this.isLast=j;b=a.labelFormatter.call({axis:a,chart:c,isFirst:i,isLast:j,dateTimeLabelFormat:k,value:a.isLog?da(ha(e)):e});s(d)?d&&d.attr({text:b}):(this.labelLength=(this.label=d=s(b)&&g.enabled?c.renderer.text(b,0,0,g.useHTML).css(z(g.style)).add(a.labelGroup):
null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var b=this.axis,c=a.x,d=b.chart.chartWidth,e=b.chart.spacing,f=p(b.labelLeft,e[3]),e=p(b.labelRight,d-e[1]),g=this.label,h=this.rotation,i={left:0,center:0.5,right:1}[b.labelAlign],j=g.getBBox().width,k=b.slotWidth,l;if(h)h<0&&c-i*j<f?l=x(c/W(h*ga)-f):h>0&&c+i*j>e&&(l=x((d-c)/W(h*ga)));else{d=c-i*j;c+=i*j;if(d<f)k-=f-d,a.x=f,g.attr({align:"left"});
else if(c>e)k-=c-e,a.x=e,g.attr({align:"right"});if(j>k||b.autoRotation&&g.styles.width)l=k}l&&g.css({width:l,textOverflow:"ellipsis"})},getPosition:function(a,b,c,d){var e=this.axis,f=e.chart,g=d&&f.oldChartHeight||f.chartHeight;return{x:a?e.translate(b+c,null,null,d)+e.transB:e.left+e.offset+(e.opposite?(d&&f.oldChartWidth||f.chartWidth)-e.right-e.left:0),y:a?g-e.bottom+e.offset-(e.opposite?e.height:0):g-e.translate(b+c,null,null,d)-e.transB}},getLabelPosition:function(a,b,c,d,e,f,g,h){var i=this.axis,
j=i.transA,k=i.reversed,l=i.staggerLines,n=i.tickRotCorr||{x:0,y:0},c=p(e.y,n.y+(i.side===2?8:-(c.getBBox().height/2))),a=a+e.x+n.x-(f&&d?f*j*(k?-1:1):0),b=b+c-(f&&!d?f*j*(k?1:-1):0);l&&(b+=g/(h||1)%l*(i.labelOffset/l));return{x:a,y:x(b)}},getMarkPath:function(a,b,c,d,e,f){return f.crispLine(["M",a,b,"L",a+(e?0:-c),b+(e?c:0)],d)},render:function(a,b,c){var d=this.axis,e=d.options,f=d.chart.renderer,g=d.horiz,h=this.type,i=this.label,j=this.pos,k=e.labels,l=this.gridLine,n=h?h+"Grid":"grid",o=h?h+
"Tick":"tick",q=e[n+"LineWidth"],y=e[n+"LineColor"],m=e[n+"LineDashStyle"],C=e[o+"Length"],n=e[o+"Width"]||0,v=e[o+"Color"],s=e[o+"Position"],o=this.mark,fa=k.step,t=!0,x=d.tickmarkOffset,r=this.getPosition(g,j,x,b),w=r.x,r=r.y,z=g&&w===d.pos+d.len||!g&&r===d.pos?-1:1,c=p(c,1);this.isActive=!0;if(q){j=d.getPlotLinePath(j+x,q*z,b,!0);if(l===u){l={stroke:y,"stroke-width":q};if(m)l.dashstyle=m;if(!h)l.zIndex=1;if(b)l.opacity=0;this.gridLine=l=q?f.path(j).attr(l).add(d.gridGroup):null}if(!b&&l&&j)l[this.isNew?
"attr":"animate"]({d:j,opacity:c})}if(n&&C)s==="inside"&&(C=-C),d.opposite&&(C=-C),h=this.getMarkPath(w,r,C,n*z,g,f),o?o.animate({d:h,opacity:c}):this.mark=f.path(h).attr({stroke:v,"stroke-width":n,opacity:c}).add(d.axisGroup);if(i&&!isNaN(w))i.xy=r=this.getLabelPosition(w,r,i,g,k,x,a,fa),this.isFirst&&!this.isLast&&!p(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!p(e.showLastLabel,1)?t=!1:g&&!d.isRadial&&!k.step&&!k.rotation&&!b&&c!==0&&this.handleOverflow(r),fa&&a%fa&&(t=!1),t&&!isNaN(r.y)?
(r.opacity=c,i[this.isNew?"attr":"animate"](r),this.isNew=!1):i.attr("y",-9999)},destroy:function(){Qa(this,this.axis)}};w.PlotLineOrBand=function(a,b){this.axis=a;if(b)this.options=b,this.id=b.id};w.PlotLineOrBand.prototype={render:function(){var a=this,b=a.axis,c=b.horiz,d=a.options,e=d.label,f=a.label,g=d.width,h=d.to,i=d.from,j=s(i)&&s(h),k=d.value,l=d.dashStyle,n=a.svgElem,o=[],q,y=d.color,p=d.zIndex,m=d.events,v={},t=b.chart.renderer;b.isLog&&(i=Ea(i),h=Ea(h),k=Ea(k));if(g){if(o=b.getPlotLinePath(k,
g),v={stroke:y,"stroke-width":g},l)v.dashstyle=l}else if(j){o=b.getPlotBandPath(i,h,d);if(y)v.fill=y;if(d.borderWidth)v.stroke=d.borderColor,v["stroke-width"]=d.borderWidth}else return;if(s(p))v.zIndex=p;if(n)if(o)n.animate({d:o},null,n.onGetPath);else{if(n.hide(),n.onGetPath=function(){n.show()},f)a.label=f=f.destroy()}else if(o&&o.length&&(a.svgElem=n=t.path(o).attr(v).add(),m))for(q in d=function(b){n.on(b,function(c){m[b].apply(a,[c])})},m)d(q);if(e&&s(e.text)&&o&&o.length&&b.width>0&&b.height>
0){e=z({align:c&&j&&"center",x:c?!j&&4:10,verticalAlign:!c&&j&&"middle",y:c?j?16:10:j?6:-4,rotation:c&&!j&&90},e);if(!f){v={align:e.textAlign||e.align,rotation:e.rotation};if(s(p))v.zIndex=p;a.label=f=t.text(e.text,0,0,e.useHTML).attr(v).css(e.style).add()}b=[o[1],o[4],j?o[6]:o[1]];j=[o[2],o[5],j?o[7]:o[2]];o=Pa(b);c=Pa(j);f.align(e,!1,{x:o,y:c,width:Fa(b)-o,height:Fa(j)-c});f.show()}else f&&f.hide();return a},destroy:function(){ia(this.axis.plotLinesAndBands,this);delete this.axis;Qa(this)}};var va=
w.Axis=function(){this.init.apply(this,arguments)};va.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#D8D8D8",labels:{enabled:!0,style:{color:"#606060",cursor:"default",fontSize:"11px"},x:0,y:15},lineColor:"#C0D0E0",lineWidth:1,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,
minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",tickWidth:1,title:{align:"middle",style:{color:"#707070"}},type:"linear"},defaultYAxisOptions:{endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return w.numberFormat(this.total,
-1)},style:z(aa.line.dataLabels.style,{color:"#000000"})}},defaultLeftAxisOptions:{labels:{x:-15,y:null},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15,y:null},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0,y:null},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0,y:-15},title:{rotation:0}},init:function(a,b){var c=b.isX;this.horiz=a.inverted?!c:c;this.coll=(this.isXAxis=c)?"xAxis":"yAxis";this.opposite=b.opposite;this.side=b.side||
(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,e=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.chart=a;this.reversed=d.reversed;this.zoomEnabled=d.zoomEnabled!==!1;this.categories=d.categories||e==="category";this.names=this.names||[];this.isLog=e==="logarithmic";this.isDatetimeAxis=e==="datetime";this.isLinked=s(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=
[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.min=this.max=null;this.crosshair=p(d.crosshair,ra(a.options.tooltip.crosshairs)[c?0:1],!1);var f,d=this.options.events;Ma(this,a.axes)===-1&&(c&&!this.isColorAxis?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];if(a.inverted&&c&&this.reversed===u)this.reversed=!0;this.removePlotLine=
this.removePlotBand=this.removePlotBandOrLine;for(f in d)N(this,f,d[f]);if(this.isLog)this.val2lin=Ea,this.lin2val=ha},setOptions:function(a){this.options=z(this.defaultOptions,this.isXAxis?{}:this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],z(P[this.coll],a))},defaultLabelFormatter:function(){var a=this.axis,b=this.value,c=a.categories,d=this.dateTimeLabelFormat,e=P.lang.numericSymbols,f=e&&e.length,
g,h=a.options.labels.format,a=a.isLog?b:a.tickInterval;if(h)g=Ja(h,this);else if(c)g=b;else if(d)g=Oa(d,b);else if(f&&a>=1E3)for(;f--&&g===u;)c=Math.pow(1E3,f+1),a>=c&&e[f]!==null&&(g=w.numberFormat(b/c,-1)+e[f]);g===u&&(g=O(b)>=1E4?w.numberFormat(b,0):w.numberFormat(b,-1,u,""));return g},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.ignoreMinPadding=a.ignoreMaxPadding=null;a.buildStacks&&a.buildStacks();m(a.series,function(c){if(c.visible||!b.options.chart.ignoreHiddenSeries){var d;
d=c.options.threshold;var e;a.hasVisibleSeries=!0;a.isLog&&d<=0&&(d=null);if(a.isXAxis){if(d=c.xData,d.length)a.dataMin=I(p(a.dataMin,d[0]),Pa(d)),a.dataMax=t(p(a.dataMax,d[0]),Fa(d))}else{c.getExtremes();e=c.dataMax;c=c.dataMin;if(s(c)&&s(e))a.dataMin=I(p(a.dataMin,c),c),a.dataMax=t(p(a.dataMax,e),e);if(s(d))if(a.dataMin>=d)a.dataMin=d,a.ignoreMinPadding=!0;else if(a.dataMax<d)a.dataMax=d,a.ignoreMaxPadding=!0}}})},translate:function(a,b,c,d,e,f){var g=1,h=0,i=d?this.oldTransA:this.transA,d=d?this.oldMin:
this.min,j=this.minPixelPadding,e=(this.doPostTranslate||this.isLog&&e)&&this.lin2val;if(!i)i=this.transA;if(c)g*=-1,h=this.len;this.reversed&&(g*=-1,h-=g*(this.sector||this.len));b?(a=a*g+h,a-=j,a=a/i+d,e&&(a=this.lin2val(a))):(e&&(a=this.val2lin(a)),f==="between"&&(f=0.5),a=g*(a-d)*i+h+g*j+(qa(f)?i*f*this.pointRange:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,
!0)},getPlotLinePath:function(a,b,c,d,e){var f=this.chart,g=this.left,h=this.top,i,j,k=c&&f.oldChartHeight||f.chartHeight,l=c&&f.oldChartWidth||f.chartWidth,n;i=this.transB;var o=function(a,b,c){if(a<b||a>c)d?a=I(t(b,a),c):n=!0;return a},e=p(e,this.translate(a,null,null,c)),a=c=x(e+i);i=j=x(k-e-i);isNaN(e)?n=!0:this.horiz?(i=h,j=k-this.bottom,a=c=o(a,g,g+this.width)):(a=g,c=l-this.right,i=j=o(i,h,h+this.height));return n&&!d?null:f.renderer.crispLine(["M",a,i,"L",c,j],b||1)},getLinearTickPositions:function(a,
b,c){var d,e=da(U(b/a)*a),f=da(sa(c/a)*a),g=[];if(b===c&&qa(b))return[b];for(b=e;b<=f;){g.push(b);b=da(b+a);if(b===d)break;d=b}return g},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,c=this.minorTickInterval,d=[],e,f=this.min;e=this.max;var g=e-f;if(g&&g/c<this.len/3)if(this.isLog){a=b.length;for(e=1;e<a;e++)d=d.concat(this.getLogTickPositions(c,b[e-1],b[e],!0))}else if(this.isDatetimeAxis&&a.minorTickInterval==="auto")d=d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c),
f,e,a.startOfWeek));else for(b=f+(b[0]-f)%c;b<=e;b+=c)d.push(b);this.trimTicks(d);return d},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,d,e=this.dataMax-this.dataMin>=this.minRange,f,g,h,i,j;if(this.isXAxis&&this.minRange===u&&!this.isLog)s(a.min)||s(a.max)?this.minRange=null:(m(this.series,function(a){i=a.xData;for(g=j=a.xIncrement?1:i.length-1;g>0;g--)if(h=i[g]-i[g-1],f===u||h<f)f=h}),this.minRange=I(f*5,this.dataMax-this.dataMin));if(c-b<this.minRange){var k=this.minRange;
d=(k-c+b)/2;d=[b-d,p(a.min,b-d)];if(e)d[2]=this.dataMin;b=Fa(d);c=[b+k,p(a.max,b+k)];if(e)c[2]=this.dataMax;c=Pa(c);c-b<k&&(d[0]=c-k,d[1]=p(a.min,c-k),b=Fa(d))}this.min=b;this.max=c},setAxisTranslation:function(a){var b=this,c=b.max-b.min,d=b.axisPointRange||0,e,f=0,g=0,h=b.linkedParent,i=!!b.categories,j=b.transA,k=b.isXAxis;if(k||i||d)if(h?(f=h.minPointOffset,g=h.pointRangePadding):m(b.series,function(a){var h=i?1:k?a.pointRange:b.axisPointRange||0,j=a.options.pointPlacement,q=a.closestPointRange;
h>c&&(h=0);d=t(d,h);b.single||(f=t(f,Da(j)?0:h/2),g=t(g,j==="on"?0:h));!a.noSharedTooltip&&s(q)&&(e=s(e)?I(e,q):q)}),h=b.ordinalSlope&&e?b.ordinalSlope/e:1,b.minPointOffset=f*=h,b.pointRangePadding=g*=h,b.pointRange=I(d,c),k)b.closestPointRange=e;if(a)b.oldTransA=j;b.translationSlope=b.transA=j=b.len/(c+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=j*f},setTickInterval:function(a){var b=this,c=b.chart,d=b.options,e=b.isLog,f=b.isDatetimeAxis,g=b.isXAxis,h=b.isLinked,i=d.maxPadding,j=d.minPadding,
k=d.tickInterval,l=d.tickPixelInterval,n=b.categories;!f&&!n&&!h&&this.getTickAmount();h?(b.linkedParent=c[b.coll][d.linkedTo],c=b.linkedParent.getExtremes(),b.min=p(c.min,c.dataMin),b.max=p(c.max,c.dataMax),d.type!==b.linkedParent.options.type&&ka(11,1)):(b.min=p(b.userMin,d.min,b.dataMin),b.max=p(b.userMax,d.max,b.dataMax));if(e)!a&&I(b.min,p(b.dataMin,b.min))<=0&&ka(10,1),b.min=da(Ea(b.min)),b.max=da(Ea(b.max));if(b.range&&s(b.max))b.userMin=b.min=t(b.min,b.max-b.range),b.userMax=b.max,b.range=
null;b.beforePadding&&b.beforePadding();b.adjustForMinRange();if(!n&&!b.axisPointRange&&!b.usePercentage&&!h&&s(b.min)&&s(b.max)&&(c=b.max-b.min)){if(!s(d.min)&&!s(b.userMin)&&j&&(b.dataMin<0||!b.ignoreMinPadding))b.min-=c*j;if(!s(d.max)&&!s(b.userMax)&&i&&(b.dataMax>0||!b.ignoreMaxPadding))b.max+=c*i}if(qa(d.floor))b.min=t(b.min,d.floor);if(qa(d.ceiling))b.max=I(b.max,d.ceiling);b.tickInterval=b.min===b.max||b.min===void 0||b.max===void 0?1:h&&!k&&l===b.linkedParent.options.tickPixelInterval?b.linkedParent.tickInterval:
p(k,this.tickAmount?(b.max-b.min)/t(this.tickAmount-1,1):void 0,n?1:(b.max-b.min)*l/t(b.len,l));g&&!a&&m(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();if(b.postProcessTickInterval)b.tickInterval=b.postProcessTickInterval(b.tickInterval);if(b.pointRange)b.tickInterval=t(b.pointRange,b.tickInterval);a=p(d.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);if(!k&&b.tickInterval<a)b.tickInterval=
a;if(!f&&!e&&!k)b.tickInterval=pb(b.tickInterval,null,ob(b.tickInterval),p(d.allowDecimals,!(b.tickInterval>0.5&&b.tickInterval<5&&b.max>1E3&&b.max<9999)),!!this.tickAmount);if(!this.tickAmount&&this.len)b.tickInterval=b.unsquish();this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,e=a.startOnTick,f=a.endOnTick,g;this.tickmarkOffset=this.categories&&a.tickmarkPlacement==="between"&&this.tickInterval===1?0.5:0;this.minorTickInterval=a.minorTickInterval===
"auto"&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=b=a.tickPositions&&a.tickPositions.slice();if(!b&&(this.tickPositions=b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),d&&(d=d.apply(this,[this.min,
this.max]))))this.tickPositions=b=d;if(!this.isLinked)this.trimTicks(b,e,f),this.min===this.max&&s(this.min)&&!this.tickAmount&&(g=!0,this.min-=0.5,this.max+=0.5),this.single=g,!c&&!d&&this.adjustTickAmount()},trimTicks:function(a,b,c){var d=a[0],e=a[a.length-1],f=this.minPointOffset||0;b?this.min=d:this.min-f>d&&a.shift();c?this.max=e:this.max+f<e&&a.pop();a.length===0&&s(d)&&a.push((e+d)/2)},getTickAmount:function(){var a={},b,c=this.options,d=c.tickAmount,e=c.tickPixelInterval;!s(c.tickInterval)&&
this.len<e&&!this.isRadial&&!this.isLog&&c.startOnTick&&c.endOnTick&&(d=2);!d&&this.chart.options.chart.alignTicks!==!1&&c.alignTicks!==!1&&(m(this.chart[this.coll],function(c){var d=c.options,c=c.horiz,d=[c?d.left:d.top,c?d.width:d.height,d.pane].join(",");a[d]?b=!0:a[d]=1}),b&&(d=sa(this.len/e)+1));if(d<4)this.finalTickAmt=d,d=5;this.tickAmount=d},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length;if(e<c){for(;b.length<c;)b.push(da(b[b.length-
1]+a));this.transA*=(e-1)/(c-1);this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(s(d)){for(a=c=b.length;a--;)(d===3&&a%2===1||d<=2&&a>0&&a<c-1)&&b.splice(a,1);this.finalTickAmt=u}},setScale:function(){var a=this.stacks,b,c,d,e;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();e=this.len!==this.oldAxisLength;m(this.series,function(a){if(a.isDirtyData||a.isDirty||a.xAxis.isDirty)d=!0});if(e||d||this.isLinked||this.forceRedraw||
this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax){if(!this.isXAxis)for(b in a)for(c in a[b])a[b][c].total=null,a[b][c].cum=0;this.forceRedraw=!1;this.getSeriesExtremes();this.setTickInterval();this.oldUserMin=this.userMin;this.oldUserMax=this.userMax;if(!this.isDirty)this.isDirty=e||this.min!==this.oldMin||this.max!==this.oldMax}else if(!this.isXAxis){if(this.oldStacks)a=this.stacks=this.oldStacks;for(b in a)for(c in a[b])a[b][c].cum=a[b][c].total}},setExtremes:function(a,b,c,d,e){var f=
this,g=f.chart,c=p(c,!0);m(f.series,function(a){delete a.kdTree});e=r(e,{min:a,max:b});M(f,"setExtremes",e,function(){f.userMin=a;f.userMax=b;f.eventArgs=e;f.isDirtyExtremes=!0;c&&g.redraw(d)})},zoom:function(a,b){var c=this.dataMin,d=this.dataMax,e=this.options;this.allowZoomOutside||(s(c)&&a<=I(c,p(e.min,c))&&(a=u),s(d)&&b>=t(d,p(e.max,d))&&(b=u));this.displayBtn=a!==u||b!==u;this.setExtremes(a,b,!1,u,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsetLeft||
0,d=this.horiz,e=p(b.width,a.plotWidth-c+(b.offsetRight||0)),f=p(b.height,a.plotHeight),g=p(b.top,a.plotTop),b=p(b.left,a.plotLeft+c),c=/%$/;c.test(f)&&(f=parseFloat(f)/100*a.plotHeight);c.test(g)&&(g=parseFloat(g)/100*a.plotHeight+a.plotTop);this.left=b;this.top=g;this.width=e;this.height=f;this.bottom=a.chartHeight-f-g;this.right=a.chartWidth-e-b;this.len=t(d?e:f,0);this.pos=d?b:g},getExtremes:function(){var a=this.isLog;return{min:a?da(ha(this.min)):this.min,max:a?da(ha(this.max)):this.max,dataMin:this.dataMin,
dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=b?ha(this.min):this.min,b=b?ha(this.max):this.max;c>a||a===null?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(p(a,0)-this.side*90+720)%360;return a>15&&a<165?"right":a>195&&a<345?"left":"center"},unsquish:function(){var a=this.ticks,b=this.options.labels,c=this.horiz,d=this.tickInterval,e=d,f=this.len/(((this.categories?1:0)+this.max-this.min)/d),g,h=b.rotation,
i=this.chart.renderer.fontMetrics(b.style.fontSize,a[0]&&a[0].label),j,k=Number.MAX_VALUE,l,n=function(a){a/=f||1;a=a>1?sa(a):1;return a*d};c?(l=s(h)?[h]:f<p(b.autoRotationLimit,80)&&!b.staggerLines&&!b.step&&b.autoRotation)&&m(l,function(a){var b;if(a===h||a&&a>=-90&&a<=90)j=n(O(i.h/$(ga*a))),b=j+O(a/360),b<k&&(k=b,g=a,e=j)}):e=n(i.h);this.autoRotation=l;this.labelRotation=g;return e},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,e=this.options.labels,
f=this.horiz,g=a.margin,h=this.slotWidth=f&&!e.step&&!e.rotation&&(this.staggerLines||1)*a.plotWidth/c.length||!f&&(g[3]&&g[3]-a.spacing[3]||a.chartWidth*0.33),i=t(1,x(h-2*(e.padding||5))),j={},g=b.fontMetrics(e.style.fontSize,d[0]&&d[0].label),k,l=0;if(!Da(e.rotation))j.rotation=e.rotation;if(this.autoRotation)m(c,function(a){if((a=d[a])&&a.labelLength>l)l=a.labelLength}),l>i&&l>g.h?j.rotation=this.labelRotation:this.labelRotation=0;else if(h){k={width:i+"px",textOverflow:"clip"};for(h=c.length;!f&&
h--;)if(i=c[h],i=d[i].label)if(i.styles.textOverflow==="ellipsis"&&i.css({textOverflow:"clip"}),i.getBBox().height>this.len/c.length-(g.h-g.f))i.specCss={textOverflow:"ellipsis"}}j.rotation&&(k={width:(l>a.chartHeight*0.5?a.chartHeight*0.33:a.chartHeight)+"px",textOverflow:"ellipsis"});this.labelAlign=j.align=e.align||this.autoLabelAlign(this.labelRotation);m(c,function(a){var b=(a=d[a])&&a.label;if(b)k&&b.css(z(k,b.specCss)),delete b.specCss,b.attr(j),a.rotation=j.rotation});this.tickRotCorr=b.rotCorr(g.b,
this.labelRotation||0,this.side===2)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,g=a.horiz,h=a.side,i=b.inverted?[1,0,3,2][h]:h,j,k,l=0,n,o=0,q=d.title,y=d.labels,S=0,C=b.axisOffset,b=b.clipOffset,v=[-1,1,1,-1][h],r;a.hasData=j=a.hasVisibleSeries||s(a.min)&&s(a.max)&&!!e;a.showAxis=k=j||p(d.showEmpty,!0);a.staggerLines=a.horiz&&y.staggerLines;if(!a.axisGroup)a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).add(),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||
2}).add(),a.labelGroup=c.g("axis-labels").attr({zIndex:y.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels").add();if(j||a.isLinked){if(m(e,function(b){f[b]?f[b].addLabel():f[b]=new Ta(a,b)}),a.renderUnsquish(),m(e,function(b){if(h===0||h===2||{1:"left",3:"right"}[h]===a.labelAlign)S=t(f[b].getLabelSize(),S)}),a.staggerLines)S*=a.staggerLines,a.labelOffset=S}else for(r in f)f[r].destroy(),delete f[r];if(q&&q.text&&q.enabled!==!1){if(!a.axisTitle)a.axisTitle=c.text(q.text,0,0,q.useHTML).attr({zIndex:7,
rotation:q.rotation||0,align:q.textAlign||{low:"left",middle:"center",high:"right"}[q.align]}).addClass("highcharts-"+this.coll.toLowerCase()+"-title").css(q.style).add(a.axisGroup),a.axisTitle.isNew=!0;if(k)l=a.axisTitle.getBBox()[g?"height":"width"],n=q.offset,o=s(n)?0:p(q.margin,g?5:10);a.axisTitle[k?"show":"hide"]()}a.offset=v*p(d.offset,C[h]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=h===2?a.tickRotCorr.y:0;g=S+o+(S&&v*(g?p(y.y,a.tickRotCorr.y+8):y.x)-c);a.axisTitleMargin=p(n,g);C[h]=t(C[h],a.axisTitleMargin+
l+v*a.offset,g);b[i]=t(b[i],U(d.lineWidth/2)*2)},getLinePath:function(a){var b=this.chart,c=this.opposite,d=this.offset,e=this.horiz,f=this.left+(c?this.width:0)+d,d=b.chartHeight-this.bottom-(c?this.height:0)+d;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:f,e?d:this.top,"L",e?b.chartWidth-this.right:f,e?d:b.chartHeight-this.bottom],a)},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,f=a?b:c,g=this.opposite,h=this.offset,i=B(e.style.fontSize||
12),d={low:f+(a?0:d),middle:f+d/2,high:f+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(g?-1:1)*this.axisTitleMargin+(this.side===2?i:0);return{x:a?d:b+(g?this.width:0)+h+(e.x||0),y:a?b-(g?this.height:0)+h:d+(e.y||0)}},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,e=a.isLog,f=a.isLinked,g=a.tickPositions,h=a.axisTitle,i=a.ticks,j=a.minorTicks,k=a.alternateBands,l=d.stackLabels,n=d.alternateGridColor,o=a.tickmarkOffset,q=d.lineWidth,y,p=b.hasRendered&&s(a.oldMin)&&!isNaN(a.oldMin);
y=a.hasData;var C=a.showAxis,v,r;a.labelEdge.length=0;a.overlap=!1;m([i,j,k],function(a){for(var b in a)a[b].isActive=!1});if(y||f){a.minorTickInterval&&!a.categories&&m(a.getMinorTickPositions(),function(b){j[b]||(j[b]=new Ta(a,b,"minor"));p&&j[b].isNew&&j[b].render(null,!0);j[b].render(null,!1,1)});if(g.length&&(m(g,function(b,c){if(!f||b>=a.min&&b<=a.max)i[b]||(i[b]=new Ta(a,b)),p&&i[b].isNew&&i[b].render(c,!0,0.1),i[b].render(c)}),o&&(a.min===0||a.single)))i[-1]||(i[-1]=new Ta(a,-1,null,!0)),
i[-1].render(-1);n&&m(g,function(b,c){if(c%2===0&&b<a.max)k[b]||(k[b]=new w.PlotLineOrBand(a)),v=b+o,r=g[c+1]!==u?g[c+1]+o:a.max,k[b].options={from:e?ha(v):v,to:e?ha(r):r,color:n},k[b].render(),k[b].isActive=!0});if(!a._addedPlotLB)m((d.plotLines||[]).concat(d.plotBands||[]),function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=!0}m([i,j,k],function(a){var c,d,e=[],f=za?za.duration||500:0,g=function(){for(d=e.length;d--;)a[e[d]]&&!a[e[d]].isActive&&(a[e[d]].destroy(),delete a[e[d]])};for(c in a)if(!a[c].isActive)a[c].render(c,
!1,0),a[c].isActive=!1,e.push(c);a===k||!b.hasRendered||!f?g():f&&setTimeout(g,f)});if(q)y=a.getLinePath(q),a.axisLine?a.axisLine.animate({d:y}):a.axisLine=c.path(y).attr({stroke:d.lineColor,"stroke-width":q,zIndex:7}).add(a.axisGroup),a.axisLine[C?"show":"hide"]();if(h&&C)h[h.isNew?"attr":"animate"](a.getTitlePosition()),h.isNew=!1;l&&l.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.render();m(this.plotLinesAndBands,function(a){a.render()});m(this.series,function(a){a.isDirty=
!0})},destroy:function(a){var b=this,c=b.stacks,d,e=b.plotLinesAndBands;a||Y(b);for(d in c)Qa(c[d]),c[d]=null;m([b.ticks,b.minorTicks,b.alternateBands],function(a){Qa(a)});for(a=e.length;a--;)e[a].destroy();m("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","),function(a){b[a]&&(b[a]=b[a].destroy())});this.cross&&this.cross.destroy()},drawCrosshair:function(a,b){var c,d=this.crosshair,e=d.animation;if(!this.crosshair||(s(b)||!p(this.crosshair.snap,!0))===!1)this.hideCrosshair();
else if(p(d.snap,!0)?s(b)&&(c=this.isXAxis?b.plotX:this.len-b.plotY):c=this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos,c=this.isRadial?this.getPlotLinePath(this.isXAxis?b.x:p(b.stackY,b.y))||null:this.getPlotLinePath(null,null,null,null,c)||null,c===null)this.hideCrosshair();else if(this.cross)this.cross.attr({visibility:"visible"})[e?"animate":"attr"]({d:c},e);else{e=this.categories&&!this.isRadial;e={"stroke-width":d.width||(e?this.transA:1),stroke:d.color||(e?"rgba(155,200,255,0.2)":"#C0C0C0"),
zIndex:d.zIndex||2};if(d.dashStyle)e.dashstyle=d.dashStyle;this.cross=this.chart.renderer.path(c).attr(e).add()}},hideCrosshair:function(){this.cross&&this.cross.hide()}};r(va.prototype,{getPlotBandPath:function(a,b){var c=this.getPlotLinePath(b,null,null,!0),d=this.getPlotLinePath(a,null,null,!0);d&&c&&d.toString()!==c.toString()?d.push(c[4],c[5],c[1],c[2]):d=null;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,
"plotLines")},addPlotBandOrLine:function(a,b){var c=(new w.PlotLineOrBand(this,a)).render(),d=this.userOptions;c&&(b&&(d[b]=d[b]||[],d[b].push(a)),this.plotLinesAndBands.push(c));return c},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,c=this.options,d=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();m([c.plotLines||[],d.plotLines||[],c.plotBands||[],d.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===a&&ia(b,b[e])})}});va.prototype.getTimeTicks=function(a,b,
c,d){var e=[],f={},g=P.global.useUTC,h,i=new Aa(b-Wa(b)),j=a.unitRange,k=a.count;if(s(b)){i[Db](j>=G.second?0:k*U(i.getMilliseconds()/k));if(j>=G.second)i[Eb](j>=G.minute?0:k*U(i.getSeconds()/k));if(j>=G.minute)i[Fb](j>=G.hour?0:k*U(i[rb]()/k));if(j>=G.hour)i[Gb](j>=G.day?0:k*U(i[sb]()/k));if(j>=G.day)i[ub](j>=G.month?1:k*U(i[Xa]()/k));j>=G.month&&(i[vb](j>=G.year?0:k*U(i[Ya]()/k)),h=i[Za]());j>=G.year&&(h-=h%k,i[wb](h));if(j===G.week)i[ub](i[Xa]()-i[tb]()+p(d,1));b=1;if(nb||eb)i=i.getTime(),i=new Aa(i+
Wa(i));h=i[Za]();for(var d=i.getTime(),l=i[Ya](),n=i[Xa](),o=(G.day+(g?Wa(i):i.getTimezoneOffset()*6E4))%G.day;d<c;)e.push(d),j===G.year?d=gb(h+b*k,0):j===G.month?d=gb(h,l+b*k):!g&&(j===G.day||j===G.week)?d=gb(h,l,n+b*k*(j===G.day?1:7)):d+=j*k,b++;e.push(d);m(kb(e,function(a){return j<=G.hour&&a%G.day===o}),function(a){f[a]="day"})}e.info=r(a,{higherRanks:f,totalRange:j*k});return e};va.prototype.normalizeTimeTickInterval=function(a,b){var c=b||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",
[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],d=c[c.length-1],e=G[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=G[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+G[c[g+1][0]])/2)break;e===G.year&&a<5*e&&(f=[1,2,5]);c=pb(a/e,f,d[0]==="year"?t(ob(a/e),1):1);return{unitRange:e,count:c,unitName:d[0]}};va.prototype.getLogTickPositions=function(a,b,c,d){var e=this.options,f=this.len,g=[];if(!d)this._minorAutoInterval=
null;if(a>=0.5)a=x(a),g=this.getLinearTickPositions(a,b,c);else if(a>=0.08)for(var f=U(b),h,i,j,k,l,e=a>0.3?[1,2,4]:a>0.15?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];f<c+1&&!l;f++){i=e.length;for(h=0;h<i&&!l;h++)j=Ea(ha(f)*e[h]),j>b&&(!d||k<=c)&&k!==u&&g.push(k),k>c&&(l=!0),k=j}else if(b=ha(b),c=ha(c),a=e[d?"minorTickInterval":"tickInterval"],a=p(a==="auto"?null:a,this._minorAutoInterval,(c-b)*(e.tickPixelInterval/(d?5:1))/((d?f/this.tickPositions.length:f)||1)),a=pb(a,null,ob(a)),g=Ua(this.getLinearTickPositions(a,
b,c),Ea),!d)this._minorAutoInterval=a/5;if(!d)this.tickInterval=a;return g};var Mb=w.Tooltip=function(){this.init.apply(this,arguments)};Mb.prototype={init:function(a,b){var c=b.borderWidth,d=b.style,e=B(d.padding);this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.label=a.renderer.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:e,fill:b.backgroundColor,"stroke-width":c,r:b.borderRadius,zIndex:8}).css(d).css({padding:0}).add().attr({y:-9999});
ea||this.label.shadow(b.shadow);this.shared=b.shared},destroy:function(){if(this.label)this.label=this.label.destroy();clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,c,d){var e=this,f=e.now,g=e.options.animation!==!1&&!e.isHidden&&(O(a-f.x)>1||O(b-f.y)>1),h=e.followPointer||e.len>1;r(f,{x:g?(2*f.x+a)/3:a,y:g?(f.y+b)/2:b,anchorX:h?u:g?(2*f.anchorX+c)/3:c,anchorY:h?u:g?(f.anchorY+d)/2:d});e.label.attr(f);if(g)clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&
e.move(a,b,c,d)},32)},hide:function(a){var b=this,c;clearTimeout(this.hideTimer);if(!this.isHidden)c=this.chart.hoverPoints,this.hideTimer=setTimeout(function(){b.label.fadeOut();b.isHidden=!0},p(a,this.options.hideDelay,500)),c&&m(c,function(a){a.setState()}),this.chart.hoverPoints=null,this.chart.hoverSeries=null},getAnchor:function(a,b){var c,d=this.chart,e=d.inverted,f=d.plotTop,g=d.plotLeft,h=0,i=0,j,k,a=ra(a);c=a[0].tooltipPos;this.followPointer&&b&&(b.chartX===u&&(b=d.pointer.normalize(b)),
c=[b.chartX-d.plotLeft,b.chartY-f]);c||(m(a,function(a){j=a.series.yAxis;k=a.series.xAxis;h+=a.plotX+(!e&&k?k.left-g:0);i+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&j?j.top-f:0)}),h/=a.length,i/=a.length,c=[e?d.plotWidth-i:h,this.shared&&!e&&a.length>1&&b?b.chartY-f:e?d.plotHeight-h:i]);return Ua(c,x)},getPosition:function(a,b,c){var d=this.chart,e=this.distance,f={},g=c.h,h,i=["y",d.chartHeight,b,c.plotY+d.plotTop],j=["x",d.chartWidth,a,c.plotX+d.plotLeft],k=p(c.ttBelow,d.inverted&&!c.negative||
!d.inverted&&c.negative),l=function(a,b,c,d){var h=c<d-e,i=d+e+c<b,j=d-e-c;d+=e;if(k&&i)f[a]=d;else if(!k&&h)f[a]=j;else if(h)f[a]=j-g<0?j:j-g;else if(i)f[a]=d+g+c>b?d:d+g;else return!1},n=function(a,b,c,d){if(d<e||d>b-e)return!1;else f[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2},o=function(a){var b=i;i=j;j=b;h=a},q=function(){l.apply(0,i)!==!1?n.apply(0,j)===!1&&!h&&(o(!0),q()):h?f.x=f.y=0:(o(!0),q())};(d.inverted||this.len>1)&&o();q();return f},defaultFormatter:function(a){var b=this.points||ra(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];
c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c.join("")},refresh:function(a,b){var c=this.chart,d=this.label,e=this.options,f,g,h={},i,j=[];i=e.formatter||this.defaultFormatter;var h=c.hoverPoints,k,l=this.shared;clearTimeout(this.hideTimer);this.followPointer=ra(a)[0].series.tooltipOptions.followPointer;g=this.getAnchor(a,b);f=g[0];g=g[1];l&&(!a.series||!a.series.noSharedTooltip)?(c.hoverPoints=a,h&&m(h,function(a){a.setState()}),m(a,function(a){a.setState("hover");
j.push(a.getLabelConfig())}),h={x:a[0].category,y:a[0].y},h.points=j,this.len=j.length,a=a[0]):h=a.getLabelConfig();i=i.call(h,this);h=a.series;this.distance=p(h.tooltipOptions.distance,16);i===!1?this.hide():(this.isHidden&&(db(d),d.attr("opacity",1).show()),d.attr({text:i}),k=e.borderColor||a.color||h.color||"#606060",d.attr({stroke:k}),this.updatePosition({plotX:f,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:a.shapeArgs&&a.shapeArgs.height||0}),this.isHidden=!1);M(c,"tooltipRefresh",{text:i,
x:f+c.plotLeft,y:g+c.plotTop,borderColor:k})},updatePosition:function(a){var b=this.chart,c=this.label,c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(x(c.x),x(c.y),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getXDateFormat:function(a,b,c){var d,b=b.dateTimeLabelFormats,e=c&&c.closestPointRange,f,g={millisecond:15,second:12,minute:9,hour:6,day:3},h,i;if(e){h=Oa("%m-%d %H:%M:%S.%L",a.x);for(f in G){if(e===G.week&&+Oa("%w",a.x)===c.options.startOfWeek&&h.substr(6)===
"00:00:00.000"){f="week";break}else if(G[f]>e){f=i;break}else if(g[f]&&h.substr(g[f])!=="01-01 00:00:00.000".substr(g[f]))break;f!=="week"&&(i=f)}f&&(d=b[f])}else d=b.day;return d||b.year},tooltipFooterHeaderFormatter:function(a,b){var c=b?"footer":"header",d=a.series,e=d.tooltipOptions,f=e.xDateFormat,g=d.xAxis,h=g&&g.options.type==="datetime"&&qa(a.key),c=e[c+"Format"];h&&!f&&(f=this.getXDateFormat(a,e,g));h&&f&&(c=c.replace("{point.key}","{point.key:"+f+"}"));return Ja(c,{point:a,series:d})},bodyFormatter:function(a){return Ua(a,
function(a){var c=a.series.tooltipOptions;return(c.pointFormatter||a.point.tooltipFormatter).call(a.point,c.pointFormat)})}};var oa;ab=A.documentElement.ontouchstart!==u;var Va=w.Pointer=function(a,b){this.init(a,b)};Va.prototype={init:function(a,b){var c=b.chart,d=c.events,e=ea?"":c.zoomType,c=a.inverted,f;this.options=b;this.chart=a;this.zoomX=f=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=f&&!c||e&&c;this.zoomVert=e&&!c||f&&c;this.hasZoom=f||e;this.runChartClick=d&&!!d.click;this.pinchDown=
[];this.lastValidTouch={};if(w.Tooltip&&b.tooltip.enabled)a.tooltip=new Mb(a,b.tooltip),this.followTouchMove=p(b.tooltip.followTouchMove,!0);this.setDOMEvents()},normalize:function(a,b){var c,d,a=a||window.event,a=Sb(a);if(!a.target)a.target=a.srcElement;d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;if(!b)this.chartPosition=b=Rb(this.chart.container);d.pageX===u?(c=t(a.x,a.clientX-b.left),d=a.y):(c=d.pageX-b.left,d=d.pageY-b.top);return r(a,{chartX:x(c),chartY:x(d)})},getCoordinates:function(a){var b=
{xAxis:[],yAxis:[]};m(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},runPointActions:function(a){var b=this.chart,c=b.series,d=b.tooltip,e=d?d.shared:!1,f=b.hoverPoint,g=b.hoverSeries,h,i=b.chartWidth,j=b.chartWidth,k,l=[],n,o;if(!e&&!g)for(h=0;h<c.length;h++)if(c[h].directTouch||!c[h].options.stickyTracking)c=[];!e&&g&&g.directTouch&&f?n=f:(m(c,function(b){k=b.noSharedTooltip&&e;b.visible&&!k&&p(b.options.enableMouseTracking,
!0)&&(o=b.searchPoint(a))&&l.push(o)}),m(l,function(a){if(a&&s(a.plotX)&&s(a.plotY)&&(a.dist.distX<i||(a.dist.distX===i||a.series.kdDimensions>1)&&a.dist.distR<j))i=a.dist.distX,j=a.dist.distR,n=a}));if(n&&(n!==f||d&&d.isHidden))if(e&&!n.series.noSharedTooltip){for(h=l.length;h--;)(l[h].clientX!==n.clientX||l[h].series.noSharedTooltip)&&l.splice(h,1);l.length&&d&&d.refresh(l,a);m(l,function(b){if(b!==n)b.onMouseOver(a)});(g&&g.directTouch&&f||n).onMouseOver(a)}else d&&d.refresh(n,a),n.onMouseOver(a);
else c=g&&g.tooltipOptions.followPointer,d&&c&&!d.isHidden&&(c=d.getAnchor([{}],a),d.updatePosition({plotX:c[0],plotY:c[1]}));if(d&&!this._onDocumentMouseMove)this._onDocumentMouseMove=function(a){if(X[oa])X[oa].pointer.onDocumentMouseMove(a)},N(A,"mousemove",this._onDocumentMouseMove);m(b.axes,function(b){b.drawCrosshair(a,p(n,f))})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,f=c.tooltip,g=f&&f.shared?c.hoverPoints:e;(a=a&&f&&g)&&ra(g)[0].plotX===u&&(a=!1);if(a)f.refresh(g),
e&&(e.setState(e.state,!0),m(c.axes,function(b){p(b.options.crosshair&&b.options.crosshair.snap,!0)?b.drawCrosshair(null,a):b.hideCrosshair()}));else{if(e)e.onMouseOut();if(d)d.onMouseOut();f&&f.hide(b);if(this._onDocumentMouseMove)Y(A,"mousemove",this._onDocumentMouseMove),this._onDocumentMouseMove=null;m(c.axes,function(a){a.hideCrosshair()});this.hoverX=null}},scaleGroups:function(a,b){var c=this.chart,d;m(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&(e.group.attr(d),
e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,f=this.zoomHor,g=this.zoomVert,h=b.plotLeft,i=b.plotTop,j=b.plotWidth,k=b.plotHeight,l,n=this.mouseDownX,o=this.mouseDownY,
q=c.panKey&&a[c.panKey+"Key"];d<h?d=h:d>h+j&&(d=h+j);e<i?e=i:e>i+k&&(e=i+k);this.hasDragged=Math.sqrt(Math.pow(n-d,2)+Math.pow(o-e,2));if(this.hasDragged>10){l=b.isInsidePlot(n-h,o-i);if(b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!q&&!this.selectionMarker)this.selectionMarker=b.renderer.rect(h,i,f?1:j,g?1:k,0).attr({fill:c.selectionMarkerFill||"rgba(69,114,167,0.25)",zIndex:7}).add();this.selectionMarker&&f&&(d-=n,this.selectionMarker.attr({width:O(d),x:(d>0?0:d)+n}));this.selectionMarker&&
g&&(d=e-o,this.selectionMarker.attr({height:O(d),y:(d>0?0:d)+o}));l&&!this.selectionMarker&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={xAxis:[],yAxis:[],originalEvent:a.originalEvent||a},f=this.selectionMarker,g=f.attr?f.attr("x"):f.x,h=f.attr?f.attr("y"):f.y,i=f.attr?f.attr("width"):f.width,j=f.attr?f.attr("height"):f.height,k;if(this.hasDragged||d)m(c.axes,function(c){if(c.zoomEnabled&&s(c.min)&&(d||b[{xAxis:"zoomX",
yAxis:"zoomY"}[c.coll]])){var f=c.horiz,o=a.type==="touchend"?c.minPixelPadding:0,q=c.toValue((f?g:h)+o),f=c.toValue((f?g+i:h+j)-o);e[c.coll].push({axis:c,min:I(q,f),max:t(q,f)});k=!0}}),k&&M(c,"selection",e,function(a){c.zoom(r(a,d?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}if(c)F(c.container,{cursor:c._cursor}),c.cancelClick=this.hasDragged>10,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[]},onContainerMouseDown:function(a){a=
this.normalize(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(a){X[oa]&&X[oa].pointer.drop(a)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition,a=this.normalize(a,c);c&&!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)&&this.reset()},onContainerMouseLeave:function(){var a=X[oa];if(a)a.pointer.reset(),a.pointer.chartPosition=null},onContainerMouseMove:function(a){var b=this.chart;oa=b.index;
a=this.normalize(a);a.returnValue=!1;b.mouseIsDown==="mousedown"&&this.drag(a);(this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop))&&!b.openMenu&&this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=L(a,"class"))if(c.indexOf(b)!==-1)return!0;else if(c.indexOf("highcharts-container")!==-1)return!1;a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries,c=(a=a.relatedTarget||a.toElement)&&a.point&&a.point.series;if(b&&
!b.options.stickyTracking&&!this.inClass(a,"highcharts-tooltip")&&c!==b)b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop,a=this.normalize(a);a.originalEvent=a;a.cancelBubble=!0;b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(M(c.series,"click",r(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(r(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&M(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container;
b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};N(b,"mouseleave",a.onContainerMouseLeave);bb===1&&N(A,"mouseup",a.onDocumentMouseUp);if(ab)b.ontouchstart=function(b){a.onContainerTouchStart(b)},b.ontouchmove=function(b){a.onContainerTouchMove(b)},bb===1&&N(A,"touchend",a.onDocumentTouchEnd)},destroy:function(){var a;Y(this.chart.container,"mouseleave",this.onContainerMouseLeave);bb||(Y(A,"mouseup",
this.onDocumentMouseUp),Y(A,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(a in this)this[a]=null}};r(w.Pointer.prototype,{pinchTranslate:function(a,b,c,d,e,f){(this.zoomHor||this.pinchHor)&&this.pinchTranslateDirection(!0,a,b,c,d,e,f);(this.zoomVert||this.pinchVert)&&this.pinchTranslateDirection(!1,a,b,c,d,e,f)},pinchTranslateDirection:function(a,b,c,d,e,f,g,h){var i=this.chart,j=a?"x":"y",k=a?"X":"Y",l="chart"+k,n=a?"width":"height",o=i["plot"+(a?"Left":"Top")],q,p,
m=h||1,C=i.inverted,v=i.bounds[a?"h":"v"],s=b.length===1,r=b[0][l],t=c[0][l],u=!s&&b[1][l],x=!s&&c[1][l],w,c=function(){!s&&O(r-u)>20&&(m=h||O(t-x)/O(r-u));p=(o-t)/m+r;q=i["plot"+(a?"Width":"Height")]/m};c();b=p;b<v.min?(b=v.min,w=!0):b+q>v.max&&(b=v.max-q,w=!0);w?(t-=0.8*(t-g[j][0]),s||(x-=0.8*(x-g[j][1])),c()):g[j]=[t,x];C||(f[j]=p-o,f[n]=q);f=C?1/m:m;e[n]=q;e[j]=b;d[C?a?"scaleY":"scaleX":"scale"+k]=m;d["translate"+k]=f*o+(t-f*r)},pinch:function(a){var b=this,c=b.chart,d=b.pinchDown,e=a.touches,
f=e.length,g=b.lastValidTouch,h=b.hasZoom,i=b.selectionMarker,j={},k=f===1&&(b.inClass(a.target,"highcharts-tracker")&&c.runTrackerClick||b.runChartClick),l={};h&&!k&&a.preventDefault();Ua(e,function(a){return b.normalize(a)});if(a.type==="touchstart")m(e,function(a,b){d[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[d[0].chartX,d[1]&&d[1].chartX],g.y=[d[0].chartY,d[1]&&d[1].chartY],m(c.axes,function(a){if(a.zoomEnabled){var b=c.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(p(a.options.min,
a.dataMin)),f=a.toPixels(p(a.options.max,a.dataMax)),g=I(e,f),e=t(e,f);b.min=I(a.pos,g-d);b.max=t(a.pos+a.len,e+d)}}),b.res=!0;else if(d.length){if(!i)b.selectionMarker=i=r({destroy:ma},c.plotBox);b.pinchTranslate(d,e,j,i,l,g);b.hasPinched=h;b.scaleGroups(j,l);if(!h&&b.followTouchMove&&f===1)this.runPointActions(b.normalize(a));else if(b.res)b.res=!1,this.reset(!1,0)}},onContainerTouchStart:function(a){var b=this.chart;oa=b.index;a.touches.length===1?(a=this.normalize(a),b.isInsidePlot(a.chartX-b.plotLeft,
a.chartY-b.plotTop)&&!b.openMenu?(this.runPointActions(a),this.pinch(a)):this.reset()):a.touches.length===2&&this.pinch(a)},onContainerTouchMove:function(a){(a.touches.length===1||a.touches.length===2)&&this.pinch(a)},onDocumentTouchEnd:function(a){X[oa]&&X[oa].pointer.drop(a)}});if(H.PointerEvent||H.MSPointerEvent){var wa={},Ab=!!H.PointerEvent,Wb=function(){var a,b=[];b.item=function(a){return this[a]};for(a in wa)wa.hasOwnProperty(a)&&b.push({pageX:wa[a].pageX,pageY:wa[a].pageY,target:wa[a].target});
return b},Bb=function(a,b,c,d){a=a.originalEvent||a;if((a.pointerType==="touch"||a.pointerType===a.MSPOINTER_TYPE_TOUCH)&&X[oa])d(a),d=X[oa].pointer,d[b]({type:c,target:a.currentTarget,preventDefault:ma,touches:Wb()})};r(Va.prototype,{onContainerPointerDown:function(a){Bb(a,"onContainerTouchStart","touchstart",function(a){wa[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){Bb(a,"onContainerTouchMove","touchmove",function(a){wa[a.pointerId]={pageX:a.pageX,
pageY:a.pageY};if(!wa[a.pointerId].target)wa[a.pointerId].target=a.currentTarget})},onDocumentPointerUp:function(a){Bb(a,"onDocumentTouchEnd","touchend",function(a){delete wa[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,Ab?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,Ab?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(A,Ab?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});cb(Va.prototype,"init",function(a,b,c){a.call(this,b,
c);this.hasZoom&&F(b.container,{"-ms-touch-action":R,"touch-action":R})});cb(Va.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(N)});cb(Va.prototype,"destroy",function(a){this.batchMSEvents(Y);a.call(this)})}var mb=w.Legend=function(a,b){this.init(a,b)};mb.prototype={init:function(a,b){var c=this,d=b.itemStyle,e=b.itemMarginTop||0;this.options=b;if(b.enabled)c.itemStyle=d,c.itemHiddenStyle=z(d,b.itemHiddenStyle),c.itemMarginTop=e,c.padding=
d=p(b.padding,8),c.initialItemX=d,c.initialItemY=d-5,c.maxItemWidth=0,c.chart=a,c.itemHeight=0,c.symbolWidth=p(b.symbolWidth,16),c.pages=[],c.render(),N(c.chart,"endResize",function(){c.positionCheckboxes()})},colorizeItem:function(a,b){var c=this.options,d=a.legendItem,e=a.legendLine,f=a.legendSymbol,g=this.itemHiddenStyle.color,c=b?c.itemStyle.color:g,h=b?a.legendColor||a.color||"#CCC":g,g=a.options&&a.options.marker,i={fill:h},j;d&&d.css({fill:c,color:c});e&&e.attr({stroke:h});if(f){if(g&&f.isMarker)for(j in i.stroke=
h,g=a.convertAttribs(g),g)d=g[j],d!==u&&(i[j]=d);f.attr(i)}},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,e=d[0],d=d[1],f=a.checkbox;a.legendGroup&&a.legendGroup.translate(b?e:this.legendWidth-e-2*c-4,d);if(f)f.x=e,f.y=d},destroyItem:function(a){var b=a.checkbox;m(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&Ra(a.checkbox)},clearItems:function(){var a=this;m(a.getAllItems(),function(b){a.destroyItem(b)})},
destroy:function(){var a=this.group,b=this.box;if(b)this.box=b.destroy();if(a)this.group=a.destroy()},positionCheckboxes:function(a){var b=this.group.alignAttr,c,d=this.clipHeight||this.legendHeight;if(b)c=b.translateY,m(this.allItems,function(e){var f=e.checkbox,g;f&&(g=c+f.y+(a||0)+3,F(f,{left:b.translateX+e.checkboxOffset+f.x-20+"px",top:g+"px",display:g>c-6&&g<c+d-6?"":R}))})},renderTitle:function(){var a=this.padding,b=this.options.title,c=0;if(b.text){if(!this.title)this.title=this.chart.renderer.label(b.text,
a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group);a=this.title.getBBox();c=a.height;this.offsetWidth=a.width;this.contentGroup.attr({translateY:c})}this.titleHeight=c},renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,e=d.layout==="horizontal",f=this.symbolWidth,g=d.symbolPadding,h=this.itemStyle,i=this.itemHiddenStyle,j=this.padding,k=e?p(d.itemDistance,20):0,l=!d.rtl,n=d.width,o=d.itemMarginBottom||0,q=this.itemMarginTop,y=this.initialItemX,
m=a.legendItem,s=a.series&&a.series.drawLegendSymbol?a.series:a,v=s.options,v=this.createCheckboxForItem&&v&&v.showCheckbox,r=d.useHTML;if(!m){a.legendGroup=c.g("legend-item").attr({zIndex:1}).add(this.scrollGroup);a.legendItem=m=c.text(d.labelFormat?Ja(d.labelFormat,a):d.labelFormatter.call(a),l?f+g:-g,this.baseline||0,r).css(z(a.visible?h:i)).attr({align:l?"left":"right",zIndex:2}).add(a.legendGroup);if(!this.baseline)this.fontMetrics=c.fontMetrics(h.fontSize,m),this.baseline=this.fontMetrics.f+
3+q,m.attr("y",this.baseline);s.drawLegendSymbol(this,a);this.setItemEvents&&this.setItemEvents(a,m,r,h,i);this.colorizeItem(a,a.visible);v&&this.createCheckboxForItem(a)}c=m.getBBox();f=a.checkboxOffset=d.itemWidth||a.legendItemWidth||f+g+c.width+k+(v?20:0);this.itemHeight=g=x(a.legendItemHeight||c.height);if(e&&this.itemX-y+f>(n||b.chartWidth-2*j-y-d.x))this.itemX=y,this.itemY+=q+this.lastLineHeight+o,this.lastLineHeight=0;this.maxItemWidth=t(this.maxItemWidth,f);this.lastItemY=q+this.itemY+o;this.lastLineHeight=
t(g,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=f:(this.itemY+=q+g+o,this.lastLineHeight=g);this.offsetWidth=n||t((e?this.itemX-y-k:f)+j,this.offsetWidth)},getAllItems:function(){var a=[];m(this.chart.series,function(b){var c=b.options;if(p(c.showInLegend,!s(c.linkedTo)?u:!1,!0))a=a.concat(b.legendItems||(c.legendType==="point"?b.data:b))});return a},adjustMargins:function(a,b){var c=this.chart,d=this.options,e=d.align[0]+d.verticalAlign[0]+d.layout[0];this.display&&
!d.floating&&m([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(f,g){f.test(e)&&!s(a[g])&&(c[ib[g]]=t(c[ib[g]],c.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*d[g%2?"x":"y"]+p(d.margin,12)+b[g]))})},render:function(){var a=this,b=a.chart,c=b.renderer,d=a.group,e,f,g,h,i=a.box,j=a.options,k=a.padding,l=j.borderWidth,n=j.backgroundColor;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;if(!d)a.group=d=c.g("legend").attr({zIndex:7}).add(),
a.contentGroup=c.g().attr({zIndex:1}).add(d),a.scrollGroup=c.g().add(a.contentGroup);a.renderTitle();e=a.getAllItems();qb(e,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});j.reversed&&e.reverse();a.allItems=e;a.display=f=!!e.length;a.lastLineHeight=0;m(e,function(b){a.renderItem(b)});g=(j.width||a.offsetWidth)+k;h=a.lastItemY+a.lastLineHeight+a.titleHeight;h=a.handleOverflow(h);h+=k;if(l||n){if(i){if(g>0&&h>0)i[i.isNew?"attr":"animate"](i.crisp({width:g,
height:h})),i.isNew=!1}else a.box=i=c.rect(0,0,g,h,j.borderRadius,l||0).attr({stroke:j.borderColor,"stroke-width":l||0,fill:n||R}).add(d).shadow(j.shadow),i.isNew=!0;i[f?"show":"hide"]()}a.legendWidth=g;a.legendHeight=h;m(e,function(b){a.positionItem(b)});f&&d.align(r({width:g,height:h},j),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,e=this.options,f=e.y,f=c.spacingBox.height+(e.verticalAlign==="top"?-f:f)-this.padding,g=
e.maxHeight,h,i=this.clipRect,j=e.navigation,k=p(j.animation,!0),l=j.arrowSize||12,n=this.nav,o=this.pages,q,y=this.allItems;e.layout==="horizontal"&&(f/=2);g&&(f=I(f,g));o.length=0;if(a>f&&!e.useHTML){this.clipHeight=h=t(f-20-this.titleHeight-this.padding,0);this.currentPage=p(this.currentPage,1);this.fullHeight=a;m(y,function(a,b){var c=a._legendItemPos[1],d=x(a.legendItem.getBBox().height),e=o.length;if(!e||c-o[e-1]>h&&(q||c)!==o[e-1])o.push(q||c),e++;b===y.length-1&&c+d-o[e-1]>h&&o.push(c);c!==
q&&(q=c)});if(!i)i=b.clipRect=d.clipRect(0,this.padding,9999,0),b.contentGroup.clip(i);i.attr({height:h});if(!n)this.nav=n=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).on("click",function(){b.scroll(-1,k)}).add(n),this.pager=d.text("",15,10).css(j.style).add(n),this.down=d.symbol("triangle-down",0,0,l,l).on("click",function(){b.scroll(1,k)}).add(n);b.scroll(0);a=f}else if(n)i.attr({height:c.chartHeight}),n.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=
0;return a},scroll:function(a,b){var c=this.pages,d=c.length,e=this.currentPage+a,f=this.clipHeight,g=this.options.navigation,h=g.activeColor,g=g.inactiveColor,i=this.pager,j=this.padding;e>d&&(e=d);if(e>0)b!==u&&Sa(b,this.chart),this.nav.attr({translateX:j,translateY:f+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({fill:e===1?g:h}).css({cursor:e===1?"default":"pointer"}),i.attr({text:e+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,fill:e===d?g:h}).css({cursor:e===
d?"default":"pointer"}),c=-c[e-1]+this.initialItemY,this.scrollGroup.animate({translateY:c}),this.currentPage=e,this.positionCheckboxes(c)}};Na=w.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.options.symbolHeight||a.fontMetrics.f;b.legendSymbol=this.chart.renderer.rect(0,a.baseline-c+1,a.symbolWidth,c,a.options.symbolRadius||0).attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d;d=a.symbolWidth;var e=this.chart.renderer,f=this.legendGroup,a=a.baseline-
x(a.fontMetrics.b*0.3),g;if(b.lineWidth){g={"stroke-width":b.lineWidth};if(b.dashStyle)g.dashstyle=b.dashStyle;this.legendLine=e.path(["M",0,a,"L",d,a]).attr(g).add(f)}if(c&&c.enabled!==!1)b=c.radius,this.legendSymbol=d=e.symbol(this.symbol,d/2-b,a-b,2*b,2*b).add(f),d.isMarker=!0}};(/Trident\/7\.0/.test(Ba)||La)&&cb(mb.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)});D=w.Chart=function(){this.init.apply(this,arguments)};D.prototype=
{callbacks:[],init:function(a,b){var c,d=a.series;a.series=null;c=z(P,a);c.series=a.series=d;this.userOptions=a;d=c.chart;this.margin=this.splashArray("margin",d);this.spacing=this.splashArray("spacing",d);var e=d.events;this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=c;this.axes=[];this.series=[];this.hasCartesianSeries=d.showAxes;var f=this,g;f.index=X.length;X.push(f);bb++;d.reflow!==!1&&N(f,"load",function(){f.initReflow()});if(e)for(g in e)N(f,g,e[g]);f.xAxis=[];f.yAxis=
[];f.animation=ea?!1:p(d.animation,!0);f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(a){var b=this.options.chart;(b=J[a.type||b.type||b.defaultSeriesType])||ka(17,!0);b=new b;b.init(this,a);return b},isInsidePlot:function(a,b,c){var d=c?b:a,a=c?a:b;return d>=0&&d<=this.plotWidth&&a>=0&&a<=this.plotHeight},redraw:function(a){var b=this.axes,c=this.series,d=this.pointer,e=this.legend,f=this.isDirtyLegend,g,h,i=this.hasCartesianSeries,j=this.isDirtyBox,k=c.length,
l=k,n=this.renderer,o=n.isHidden(),q=[];Sa(a,this);o&&this.cloneRenderTo();for(this.layOutTitles();l--;)if(a=c[l],a.options.stacking&&(g=!0,a.isDirty)){h=!0;break}if(h)for(l=k;l--;)if(a=c[l],a.options.stacking)a.isDirty=!0;m(c,function(a){a.isDirty&&a.options.legendType==="point"&&(f=!0)});if(f&&e.options.enabled)e.render(),this.isDirtyLegend=!1;g&&this.getStacks();if(i&&!this.isResizing)this.maxTicks=null,m(b,function(a){a.setScale()});this.getMargins();i&&(m(b,function(a){a.isDirty&&(j=!0)}),m(b,
function(a){if(a.isDirtyExtremes)a.isDirtyExtremes=!1,q.push(function(){M(a,"afterSetExtremes",r(a.eventArgs,a.getExtremes()));delete a.eventArgs});(j||g)&&a.redraw()}));j&&this.drawChartBox();m(c,function(a){a.isDirty&&a.visible&&(!a.isCartesian||a.xAxis)&&a.redraw()});d&&d.reset(!0);n.draw();M(this,"redraw");o&&this.cloneRenderTo(!0);m(q,function(a){a.call()})},get:function(a){var b=this.axes,c=this.series,d,e;for(d=0;d<b.length;d++)if(b[d].options.id===a)return b[d];for(d=0;d<c.length;d++)if(c[d].options.id===
a)return c[d];for(d=0;d<c.length;d++){e=c[d].points||[];for(b=0;b<e.length;b++)if(e[b].id===a)return e[b]}return null},getAxes:function(){var a=this,b=this.options,c=b.xAxis=ra(b.xAxis||{}),b=b.yAxis=ra(b.yAxis||{});m(c,function(a,b){a.index=b;a.isX=!0});m(b,function(a,b){a.index=b});c=c.concat(b);m(c,function(b){new va(a,b)})},getSelectedPoints:function(){var a=[];m(this.series,function(b){a=a.concat(kb(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return kb(this.series,
function(a){return a.selected})},getStacks:function(){var a=this;m(a.yAxis,function(a){if(a.stacks&&a.hasVisibleSeries)a.oldStacks=a.stacks});m(a.series,function(b){if(b.options.stacking&&(b.visible===!0||a.options.chart.ignoreHiddenSeries===!1))b.stackKey=b.type+p(b.options.stack,"")})},setTitle:function(a,b,c){var g;var d=this,e=d.options,f;f=e.title=z(e.title,a);g=e.subtitle=z(e.subtitle,b),e=g;m([["title",a,f],["subtitle",b,e]],function(a){var b=a[0],c=d[b],e=a[1],a=a[2];c&&e&&(d[b]=c=c.destroy());
a&&a.text&&!c&&(d[b]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).css(a.style).add())});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c=this.title,d=this.subtitle,e=this.options,f=e.title,e=e.subtitle,g=this.renderer,h=this.spacingBox.width-44;if(c&&(c.css({width:(f.width||h)+"px"}).align(r({y:g.fontMetrics(f.style.fontSize,c).b-3},f),!1,"spacingBox"),!f.floating&&!f.verticalAlign))b=c.getBBox().height;d&&(d.css({width:(e.width||h)+"px"}).align(r({y:b+
(f.margin-13)+g.fontMetrics(f.style.fontSize,d).b},e),!1,"spacingBox"),!e.floating&&!e.verticalAlign&&(b=sa(b+d.getBBox().height)));c=this.titleOffset!==b;this.titleOffset=b;if(!this.isDirtyBox&&c)this.isDirtyBox=c,this.hasRendered&&p(a,!0)&&this.isDirtyBox&&this.redraw()},getChartSize:function(){var a=this.options.chart,b=a.width,a=a.height,c=this.renderToClone||this.renderTo;if(!s(b))this.containerWidth=jb(c,"width");if(!s(a))this.containerHeight=jb(c,"height");this.chartWidth=t(0,b||this.containerWidth||
600);this.chartHeight=t(0,p(a,this.containerHeight>19?this.containerHeight:400))},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;a?b&&(this.renderTo.appendChild(c),Ra(b),delete this.renderToClone):(c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),F(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&b.style.setProperty("display","block","important"),A.body.appendChild(b),c&&b.appendChild(c))},
getContainer:function(){var a,b=this.options.chart,c,d,e;this.renderTo=a=b.renderTo;e="highcharts-"+yb++;if(Da(a))this.renderTo=a=A.getElementById(a);a||ka(13,!0);c=B(L(a,"data-highcharts-chart"));!isNaN(c)&&X[c]&&X[c].hasRendered&&X[c].destroy();L(a,"data-highcharts-chart",this.index);a.innerHTML="";!b.skipClone&&!a.offsetWidth&&this.cloneRenderTo();this.getChartSize();c=this.chartWidth;d=this.chartHeight;this.container=a=Z(Ka,{className:"highcharts-container"+(b.className?" "+b.className:""),id:e},
r({position:"relative",overflow:"hidden",width:c+"px",height:d+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},b.style),this.renderToClone||a);this._cursor=a.style.cursor;this.renderer=b.forExport?new ta(a,c,d,b.style,!0):new $a(a,c,d,b.style);ea&&this.renderer.create(this,a,c,d);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();if(d&&!s(c[0]))this.plotTop=t(this.plotTop,
d+this.options.title.margin+b[0]);this.legend.adjustMargins(c,b);this.extraBottomMargin&&(this.marginBottom+=this.extraBottomMargin);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&m(a.axes,function(a){a.getOffset()});m(ib,function(d,e){s(c[e])||(a[d]+=b[e])});a.setChartSize()},reflow:function(a){var b=this,c=b.options.chart,d=b.renderTo,e=c.width||jb(d,"width"),f=c.height||
jb(d,"height"),c=a?a.target:H,d=function(){if(b.container)b.setSize(e,f,!1),b.hasUserSize=null};if(!b.hasUserSize&&!b.isPrinting&&e&&f&&(c===H||c===A)){if(e!==b.containerWidth||f!==b.containerHeight)clearTimeout(b.reflowTimeout),a?b.reflowTimeout=setTimeout(d,100):d();b.containerWidth=e;b.containerHeight=f}},initReflow:function(){var a=this,b=function(b){a.reflow(b)};N(H,"resize",b);N(a,"destroy",function(){Y(H,"resize",b)})},setSize:function(a,b,c){var d=this,e,f,g;d.isResizing+=1;g=function(){d&&
M(d,"endResize",null,function(){d.isResizing-=1})};Sa(c,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;if(s(a))d.chartWidth=e=t(0,x(a)),d.hasUserSize=!!e;if(s(b))d.chartHeight=f=t(0,x(b));(za?lb:F)(d.container,{width:e+"px",height:f+"px"},za);d.setChartSize(!0);d.renderer.setSize(e,f,c);d.maxTicks=null;m(d.axes,function(a){a.isDirty=!0;a.setScale()});m(d.series,function(a){a.isDirty=!0});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=
null;M(d,"resize");za===!1?g():setTimeout(g,za&&za.duration||500)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,e=this.chartHeight,f=this.options.chart,g=this.spacing,h=this.clipOffset,i,j,k,l;this.plotLeft=i=x(this.plotLeft);this.plotTop=j=x(this.plotTop);this.plotWidth=k=t(0,x(d-i-this.marginRight));this.plotHeight=l=t(0,x(e-j-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],
y:g[0],width:d-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=c.plotBox={x:i,y:j,width:k,height:l};d=2*U(this.plotBorderWidth/2);b=sa(t(d,h[3])/2);c=sa(t(d,h[0])/2);this.clipBox={x:b,y:c,width:U(this.plotSizeX-t(d,h[1])/2-b),height:t(0,U(this.plotSizeY-t(d,h[2])/2-c))};a||m(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this;m(ib,function(b,c){a[b]=p(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=
this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,e=this.chartBackground,f=this.plotBackground,g=this.plotBorder,h=this.plotBGImage,i=a.borderWidth||0,j=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,n=a.plotBorderWidth||0,o,q=this.plotLeft,p=this.plotTop,m=this.plotWidth,s=this.plotHeight,v=this.plotBox,r=this.clipRect,t=this.clipBox;o=i+(a.shadow?8:0);if(i||j)if(e)e.animate(e.crisp({width:c-o,height:d-o}));else{e={fill:j||R};if(i)e.stroke=a.borderColor,e["stroke-width"]=
i;this.chartBackground=b.rect(o/2,o/2,c-o,d-o,a.borderRadius,i).attr(e).addClass("highcharts-background").add().shadow(a.shadow)}if(k)f?f.animate(v):this.plotBackground=b.rect(q,p,m,s,0).attr({fill:k}).add().shadow(a.plotShadow);if(l)h?h.animate(v):this.plotBGImage=b.image(l,q,p,m,s).add();r?r.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);if(n)g?g.animate(g.crisp({x:q,y:p,width:m,height:s,strokeWidth:-n})):this.plotBorder=b.rect(q,p,m,s,0,-n).attr({stroke:a.plotBorderColor,
"stroke-width":n,fill:R,zIndex:1}).add();this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,f;m(["inverted","angular","polar"],function(g){c=J[b.type||b.defaultSeriesType];f=a[g]||b[g]||c&&c.prototype[g];for(e=d&&d.length;!f&&e--;)(c=J[d[e].type])&&c.prototype[g]&&(f=!0);a[g]=f})},linkSeries:function(){var a=this,b=a.series;m(b,function(a){a.linkedSeries.length=0});m(b,function(b){var d=b.options.linkedTo;if(Da(d)&&(d=d===":previous"?a.series[b.index-
1]:a.get(d)))d.linkedSeries.push(b),b.linkedParent=d})},renderSeries:function(){m(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&m(b.items,function(c){var d=r(b.style,c.style),e=B(d.left)+a.plotLeft,f=B(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,e,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,e,f,g;this.setTitle();this.legend=new mb(this,c.legend);
this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;e=this.plotHeight-=13;m(a,function(a){a.setScale()});this.getAxisMargins();f=d/this.plotWidth>1.1;g=e/this.plotHeight>1.1;if(f||g)this.maxTicks=null,m(a,function(a){(a.horiz&&f||!a.horiz&&g)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&m(a,function(a){a.render()});if(!this.seriesGroup)this.seriesGroup=b.g("series-group").attr({zIndex:3}).add();this.renderSeries();this.renderLabels();
this.showCredits(c.credits);this.hasRendered=!0},showCredits:function(a){if(a.enabled&&!this.credits)this.credits=this.renderer.text(a.text,0,0).on("click",function(){if(a.href)location.href=a.href}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position)},destroy:function(){var a=this,b=a.axes,c=a.series,d=a.container,e,f=d&&d.parentNode;M(a,"destroy");X[a.index]=u;bb--;a.renderTo.removeAttribute("data-highcharts-chart");Y(a);for(e=b.length;e--;)b[e]=b[e].destroy();for(e=c.length;e--;)c[e]=
c[e].destroy();m("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),function(b){var c=a[b];c&&c.destroy&&(a[b]=c.destroy())});if(d)d.innerHTML="",Y(d),f&&Ra(d);for(e in a)delete a[e]},isReadyToRender:function(){var a=this;return!ba&&H==H.top&&A.readyState!=="complete"||ea&&!H.canvg?(ea?Lb.push(function(){a.firstRender()},a.options.global.canvasToolsURL):A.attachEvent("onreadystatechange",
function(){A.detachEvent("onreadystatechange",a.firstRender);A.readyState==="complete"&&a.firstRender()}),!1):!0},firstRender:function(){var a=this,b=a.options,c=a.callback;if(a.isReadyToRender()){a.getContainer();M(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();m(b.series||[],function(b){a.initSeries(b)});a.linkSeries();M(a,"beforeRender");if(w.Pointer)a.pointer=new Va(a,b);a.render();a.renderer.draw();c&&c.apply(a,[a]);m(a.callbacks,function(b){a.index!==u&&b.apply(a,
[a])});M(a,"load");a.cloneRenderTo(!0)}},splashArray:function(a,b){var c=b[a],c=ca(c)?c:[c,c,c,c];return[p(b[a+"Top"],c[0]),p(b[a+"Right"],c[1]),p(b[a+"Bottom"],c[2]),p(b[a+"Left"],c[3])]}};var Xb=w.CenteredSeriesMixin={getCenter:function(){var a=this.options,b=this.chart,c=2*(a.slicedOffset||0),d=b.plotWidth-2*c,b=b.plotHeight-2*c,e=a.center,e=[p(e[0],"50%"),p(e[1],"50%"),a.size||"100%",a.innerSize||0],f=I(d,b),g,h,i;for(h=0;h<4;++h)i=e[h],g=/%$/.test(i),a=h<2||h===2&&g,e[h]=(g?[d,b,f,e[2]][h]*B(i)/
100:B(i))+(a?c:0);return e}},Ga=function(){};Ga.prototype={init:function(a,b,c){this.series=a;this.color=a.color;this.applyOptions(b,c);this.pointAttr={};if(a.options.colorByPoint&&(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter++],a.colorCounter===b.length))a.colorCounter=0;a.chart.pointCount++;return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey,a=Ga.prototype.optionsToObject.call(this,a);r(this,a);this.options=this.options?
r(this.options,a):a;if(d)this.y=this[d];if(this.x===u&&c)this.x=b===u?c.autoIncrement():b;return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,e=d||c.pointArrayMap||["y"],f=e.length,g=0,h=0;if(typeof a==="number"||a===null)b[e[0]]=a;else if(Ha(a)){if(!d&&a.length>f){c=typeof a[0];if(c==="string")b.name=a[0];else if(c==="number")b.x=a[0];g++}for(;h<f;)b[e[h++]]=a[g++]}else if(typeof a==="object"){b=a;if(a.dataLabels)c._hasPointLabels=!0;if(a.marker)c._hasPointMarkers=!0}return b},
destroy:function(){var a=this.series.chart,b=a.hoverPoints,c;a.pointCount--;if(b&&(this.setState(),ia(b,this),!b.length))a.hoverPoints=null;if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)Y(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(c in this)this[c]=null},destroyElements:function(){for(var a="graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","),b,c=6;c--;)b=a[c],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,
y:this.y,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=p(c.valueDecimals,""),e=c.valuePrefix||"",f=c.valueSuffix||"";m(b.pointArrayMap||["y"],function(b){b="{point."+b;if(e||f)a=a.replace(b+"}",e+b+"}"+f);a=a.replace(b+"}",b+":,."+d+"f}")});return Ja(a,{point:this,series:this.series})},firePointEvent:function(a,b,c){var d=this,e=this.series.options;(e.point.events[a]||
d.options&&d.options.events&&d.options.events[a])&&this.importEvents();a==="click"&&e.allowPointSelect&&(c=function(a){d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});M(this,a,b,c)}};var Q=w.Series=function(){};Q.prototype={isCartesian:!0,type:"line",pointClass:Ga,sorted:!0,requireSorting:!0,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],init:function(a,b){var c=this,d,e,f=a.series,
g=function(a,b){return p(a.options.index,a._i)-p(b.options.index,b._i)};c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();r(c,{name:b.name,state:"",pointAttr:{},visible:b.visible!==!1,selected:b.selected===!0});if(ea)b.animation=!1;e=b.events;for(d in e)N(c,d,e[d]);if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();m(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);if(c.isCartesian)a.hasCartesianSeries=
!0;f.push(c);c._i=f.length-1;qb(f,g);this.yAxis&&qb(this.yAxis.series,g);m(f,function(a,b){a.index=b;a.name=a.name||"Series "+(b+1)})},bindAxes:function(){var a=this,b=a.options,c=a.chart,d;m(a.axisTypes||[],function(e){m(c[e],function(c){d=c.options;if(b[e]===d.index||b[e]!==u&&b[e]===d.id||b[e]===u&&d.index===0)c.series.push(a),a[e]=c,c.isDirty=!0});!a[e]&&a.optionalAxis!==e&&ka(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments;m(c.parallelArrays,typeof b==="number"?function(d){var f=
d==="y"&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=f}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))})},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=p(b,a.pointStart,0);this.pointInterval=c=p(this.pointInterval,a.pointInterval,1);if(d==="month"||d==="year")a=new Aa(b),a=d==="month"?+a[vb](a[Ya]()+c):+a[wb](a[Za]()+c),c=a-b;this.xIncrement=b+c;return b},getSegments:function(){var a=-1,b=[],c,d=this.points,e=d.length;if(e)if(this.options.connectNulls){for(c=
e;c--;)d[c].y===null&&d.splice(c,1);d.length&&(b=[d])}else m(d,function(c,g){c.y===null?(g>a+1&&b.push(d.slice(a+1,g)),a=g):g===e-1&&b.push(d.slice(a+1,g+1))});this.segments=b},setOptions:function(a){var b=this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},e=c[this.type];this.userOptions=a;c=z(e,c.series,a);this.tooltipOptions=z(P.tooltip,P.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);e.marker===null&&delete c.marker;
this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();if((c.negativeColor||c.negativeFillColor)&&!c.zones)a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&s(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,c){var d=this.userOptions,e="_"+a+"Index",f=a+"Counter";b||(s(d[e])?b=d[e]:(d[e]=b=this.chart[f]%c.length,this.chart[f]+=1),b=c[b]);this[a]=b},getColor:function(){this.options.colorByPoint||
this.getCyclic("color",this.options.color||aa[this.type].color,this.chart.options.colors)},getSymbol:function(){var a=this.options.marker;this.getCyclic("symbol",a.symbol,this.chart.options.symbols);if(/^url/.test(this.symbol))a.radius=0},drawLegendSymbol:Na.drawLineMarker,setData:function(a,b,c,d){var e=this,f=e.points,g=f&&f.length||0,h,i=e.options,j=e.chart,k=null,l=e.xAxis,n=l&&!!l.categories,o=i.turboThreshold,q=this.xData,y=this.yData,s=(h=e.pointArrayMap)&&h.length,a=a||[];h=a.length;b=p(b,
!0);if(d!==!1&&h&&g===h&&!e.cropped&&!e.hasGroupedData&&e.visible)m(a,function(a,b){f[b].update(a,!1,null,!1)});else{e.xIncrement=null;e.pointRange=n?1:i.pointRange;e.colorCounter=0;m(this.parallelArrays,function(a){e[a+"Data"].length=0});if(o&&h>o){for(c=0;k===null&&c<h;)k=a[c],c++;if(qa(k)){n=p(i.pointStart,0);i=p(i.pointInterval,1);for(c=0;c<h;c++)q[c]=n,y[c]=a[c],n+=i;e.xIncrement=n}else if(Ha(k))if(s)for(c=0;c<h;c++)i=a[c],q[c]=i[0],y[c]=i.slice(1,s+1);else for(c=0;c<h;c++)i=a[c],q[c]=i[0],y[c]=
i[1];else ka(12)}else for(c=0;c<h;c++)if(a[c]!==u&&(i={series:e},e.pointClass.prototype.applyOptions.apply(i,[a[c]]),e.updateParallelArrays(i,c),n&&i.name))l.names[i.x]=i.name;Da(y[0])&&ka(14,!0);e.data=[];e.options.data=a;for(c=g;c--;)f[c]&&f[c].destroy&&f[c].destroy();if(l)l.minRange=l.userMinRange;e.isDirty=e.isDirtyData=j.isDirtyBox=!0;c=!1}b&&j.redraw(c)},processData:function(a){var b=this.xData,c=this.yData,d=b.length,e;e=0;var f,g,h=this.xAxis,i,j=this.options;i=j.cropThreshold;var k=this.isCartesian,
l,n;if(k&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h)a=h.getExtremes(),l=a.min,n=a.max;if(k&&this.sorted&&(!i||d>i||this.forceCrop))if(b[d-1]<l||b[0]>n)b=[],c=[];else if(b[0]<l||b[d-1]>n)e=this.cropData(this.xData,this.yData,l,n),b=e.xData,c=e.yData,e=e.start,f=!0;for(i=b.length-1;i>=0;i--)d=b[i]-b[i-1],d>0&&(g===u||d<g)?g=d:d<0&&this.requireSorting&&ka(15);this.cropped=f;this.cropStart=e;this.processedXData=b;this.processedYData=c;if(j.pointRange===null)this.pointRange=g||1;
this.closestPointRange=g},cropData:function(a,b,c,d){var e=a.length,f=0,g=e,h=p(this.cropShoulder,1),i;for(i=0;i<e;i++)if(a[i]>=c){f=t(0,i-h);break}for(;i<e;i++)if(a[i]>d){g=i+h;break}return{xData:a.slice(f,g),yData:b.slice(f,g),start:f,end:g}},generatePoints:function(){var a=this.options.data,b=this.data,c,d=this.processedXData,e=this.processedYData,f=this.pointClass,g=d.length,h=this.cropStart||0,i,j=this.hasGroupedData,k,l=[],n;if(!b&&!j)b=[],b.length=a.length,b=this.data=b;for(n=0;n<g;n++)i=h+
n,j?l[n]=(new f).init(this,[d[n]].concat(ra(e[n]))):(b[i]?k=b[i]:a[i]!==u&&(b[i]=k=(new f).init(this,a[i],d[n])),l[n]=k),l[n].index=i;if(b&&(g!==(c=b.length)||j))for(n=0;n<c;n++)if(n===h&&!j&&(n+=g),b[n])b[n].destroyElements(),b[n].plotX=u;this.data=b;this.points=l},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,e=[],f=0;d=this.xAxis.getExtremes();var g=d.min,h=d.max,i,j,k,l,a=a||this.stackedYData||this.processedYData;d=a.length;for(l=0;l<d;l++)if(j=c[l],k=a[l],i=k!==null&&k!==u&&
(!b.isLog||k.length||k>0),j=this.getExtremesFromAll||this.cropped||(c[l+1]||j)>=g&&(c[l-1]||j)<=h,i&&j)if(i=k.length)for(;i--;)k[i]!==null&&(e[f++]=k[i]);else e[f++]=k;this.dataMin=Pa(e);this.dataMax=Fa(e)},translate:function(){this.processedXData||this.processData();this.generatePoints();for(var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,e=this.yAxis,f=this.points,g=f.length,h=!!this.modifyValue,i=a.pointPlacement,j=i==="between"||qa(i),k=a.threshold,l,n,o,q=Number.MAX_VALUE,a=0;a<g;a++){var m=
f[a],r=m.x,C=m.y;n=m.low;var v=b&&e.stacks[(this.negStacks&&C<k?"-":"")+this.stackKey];if(e.isLog&&C!==null&&C<=0)m.y=C=null,ka(10);m.plotX=l=c.translate(r,0,0,0,1,i,this.type==="flags");if(b&&this.visible&&v&&v[r])v=v[r],C=v.points[this.index+","+a],n=C[0],C=C[1],n===0&&(n=p(k,e.min)),e.isLog&&n<=0&&(n=null),m.total=m.stackTotal=v.total,m.percentage=v.total&&m.y/v.total*100,m.stackY=C,v.setOffset(this.pointXOffset||0,this.barW||0);m.yBottom=s(n)?e.translate(n,0,1,0,1):null;h&&(C=this.modifyValue(C,
m));m.plotY=n=typeof C==="number"&&C!==Infinity?I(t(-1E5,e.translate(C,0,1,0,1)),1E5):u;m.isInside=n!==u&&n>=0&&n<=e.len&&l>=0&&l<=c.len;m.clientX=j?c.translate(r,0,0,0,1):l;m.negative=m.y<(k||0);m.category=d&&d[m.x]!==u?d[m.x]:m.x;a&&(q=I(q,O(l-o)));o=l}this.closestPointRangePx=q;this.getSegments()},setClip:function(a){var b=this.chart,c=b.renderer,d=b.inverted,e=this.clipBox,f=e||b.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height].join(","),h=b[g],i=b[g+"m"];if(!h){if(a)f.width=
0,b[g+"m"]=i=c.clipRect(-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight);b[g]=h=c.clipRect(f)}a&&(h.count+=1);if(this.options.clip!==!1)this.group.clip(a||e?h:b.clipRect),this.markerGroup.clip(i),this.sharedClipKey=g;a||(h.count-=1,h.count<=0&&g&&b[g]&&(e||(b[g]=b[g].destroy()),b[g+"m"]&&(b[g+"m"]=b[g+"m"].destroy())))},animate:function(a){var b=this.chart,c=this.options.animation,d;if(c&&!ca(c))c=aa[this.type].animation;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},
c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();M(this,"afterAnimate")},drawPoints:function(){var a,b=this.points,c=this.chart,d,e,f,g,h,i,j,k,l=this.options.marker,n=this.pointAttr[""],o,q,m,s=this.markerGroup,t=p(l.enabled,this.xAxis.isRadial,this.closestPointRangePx>2*l.radius);if(l.enabled!==!1||this._hasPointMarkers)for(f=b.length;f--;)if(g=b[f],d=U(g.plotX),e=g.plotY,k=g.graphic,o=g.marker||{},q=!!g.marker,a=t&&o.enabled===u||
o.enabled,m=g.isInside,a&&e!==u&&!isNaN(e)&&g.y!==null)if(a=g.pointAttr[g.selected?"select":""]||n,h=a.r,i=p(o.symbol,this.symbol),j=i.indexOf("url")===0,k)k[m?"show":"hide"](!0).animate(r({x:d-h,y:e-h},k.symbolName?{width:2*h,height:2*h}:{}));else{if(m&&(h>0||j))g.graphic=c.renderer.symbol(i,d-h,e-h,2*h,2*h,q?o:l).attr(a).add(s)}else if(k)g.graphic=k.destroy()},convertAttribs:function(a,b,c,d){var e=this.pointAttrToOptions,f,g,h={},a=a||{},b=b||{},c=c||{},d=d||{};for(f in e)g=e[f],h[f]=p(a[g],b[f],
c[f],d[f]);return h},getAttribs:function(){var a=this,b=a.options,c=aa[a.type].marker?b.marker:b,d=c.states,e=d.hover,f,g=a.color,h=a.options.negativeColor;f={stroke:g,fill:g};var i=a.points||[],j,k=[],l,n=a.pointAttrToOptions;l=a.hasPointSpecificOptions;var o=c.lineColor,q=c.fillColor;j=b.turboThreshold;var p=a.zones,t=a.zoneAxis||"y",C;b.marker?(e.radius=e.radius||c.radius+e.radiusPlus,e.lineWidth=e.lineWidth||c.lineWidth+e.lineWidthPlus):(e.color=e.color||na(e.color||g).brighten(e.brightness).get(),
e.negativeColor=e.negativeColor||na(e.negativeColor||h).brighten(e.brightness).get());k[""]=a.convertAttribs(c,f);m(["hover","select"],function(b){k[b]=a.convertAttribs(d[b],k[""])});a.pointAttr=k;g=i.length;if(!j||g<j||l)for(;g--;){j=i[g];if((c=j.options&&j.options.marker||j.options)&&c.enabled===!1)c.radius=0;if(p.length){l=0;for(f=p[l];j[t]>=f.value;)f=p[++l];j.color=j.fillColor=f.color}l=b.colorByPoint||j.color;if(j.options)for(C in n)s(c[n[C]])&&(l=!0);if(l){c=c||{};l=[];d=c.states||{};f=d.hover=
d.hover||{};if(!b.marker)f.color=f.color||!j.options.color&&e[j.negative&&h?"negativeColor":"color"]||na(j.color).brighten(f.brightness||e.brightness).get();f={color:j.color};if(!q)f.fillColor=j.color;if(!o)f.lineColor=j.color;c.hasOwnProperty("color")&&!c.color&&delete c.color;l[""]=a.convertAttribs(r(f,c),k[""]);l.hover=a.convertAttribs(d.hover,k.hover,l[""]);l.select=a.convertAttribs(d.select,k.select,l[""])}else l=k;j.pointAttr=l}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(Ba),
d,e=a.data||[],f,g,h;M(a,"destroy");Y(a);m(a.axisTypes||[],function(b){if(h=a[b])ia(h.series,a),h.isDirty=h.forceRedraw=!0});a.legendItem&&a.chart.legend.destroyItem(a);for(d=e.length;d--;)(f=e[d])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);for(g in a)a[g]instanceof K&&!a[g].survive&&(d=c&&g==="group"?"hide":"destroy",a[g][d]());if(b.hoverSeries===a)b.hoverSeries=null;ia(b.series,a);for(g in a)delete a[g]},getSegmentPath:function(a){var b=this,c=[],d=b.options.step;m(a,
function(e,f){var g=e.plotX,h=e.plotY,i;b.getPointSpline?c.push.apply(c,b.getPointSpline(a,e,f)):(c.push(f?"L":"M"),d&&f&&(i=a[f-1],d==="right"?c.push(i.plotX,h):d==="center"?c.push((i.plotX+g)/2,i.plotY,(i.plotX+g)/2,h):c.push(g,i.plotY)),c.push(e.plotX,e.plotY))});return c},getGraphPath:function(){var a=this,b=[],c,d=[];m(a.segments,function(e){c=a.getSegmentPath(e);e.length>1?b=b.concat(c):d.push(e[0])});a.singlePoints=d;return a.graphPath=b},drawGraph:function(){var a=this,b=this.options,c=[["graph",
b.lineColor||this.color,b.dashStyle]],d=b.lineWidth,e=b.linecap!=="square",f=this.getGraphPath(),g=this.fillGraph&&this.color||R;m(this.zones,function(d,e){c.push(["zoneGraph"+e,d.color||a.color,d.dashStyle||b.dashStyle])});m(c,function(c,i){var j=c[0],k=a[j];if(k)db(k),k.animate({d:f});else if((d||g)&&f.length)k={stroke:c[1],"stroke-width":d,fill:g,zIndex:1},c[2]?k.dashstyle=c[2]:e&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),a[j]=a.chart.renderer.path(f).attr(k).add(a.group).shadow(i<2&&
b.shadow)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,f,g=this.clips||[],h,i=this.graph,j=this.area,k=t(b.chartWidth,b.chartHeight),l=this[(this.zoneAxis||"y")+"Axis"],n=l.reversed,o=l.horiz,q=!1;if(d.length&&(i||j))i&&i.hide(),j&&j.hide(),m(d,function(d,m){e=p(f,n?o?b.plotWidth:0:o?0:l.toPixels(l.min));f=x(l.toPixels(p(d.value,l.max),!0));e=l.isXAxis?e>f?f:e:e<f?f:e;q&&(e=f=l.toPixels(l.max));if(l.isXAxis){if(h={x:n?f:e,y:0,width:Math.abs(e-f),height:k},!o)h.x=b.plotHeight-
h.x}else if(h={x:0,y:n?e:f,width:k,height:Math.abs(e-f)},o)h.y=b.plotWidth-h.y;b.inverted&&c.isVML&&(h=l.isXAxis?{x:0,y:n?e:f,height:h.width,width:b.chartWidth}:{x:h.y-b.plotLeft-b.spacingBox.x,y:0,width:h.height,height:b.chartHeight});g[m]?g[m].animate(h):(g[m]=c.clipRect(h),i&&a["zoneGraph"+m].clip(g[m]),j&&a["zoneArea"+m].clip(g[m]));q=d.value>l.max}),this.clips=g},invertGroups:function(){function a(){var a={width:b.yAxis.len,height:b.xAxis.len};m(["group","markerGroup"],function(c){b[c]&&b[c].attr(a).invert()})}
var b=this,c=b.chart;if(b.xAxis)N(c,"resize",a),N(b,"destroy",function(){Y(c,"resize",a)}),a(),b.invertGroups=a},plotGroup:function(a,b,c,d,e){var f=this[a],g=!f;g&&(this[a]=f=this.chart.renderer.g(b).attr({visibility:c,zIndex:d||0.1}).add(e));f[g?"attr":"animate"](this.getPlotBox());return f},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;if(a.inverted)b=c,c=this.xAxis;return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
this,b=a.chart,c,d=a.options,e=(c=d.animation)&&!!a.animate&&b.renderer.isSVG&&p(c.duration,500)||0,f=a.visible?"visible":"hidden",g=d.zIndex,h=a.hasRendered,i=b.seriesGroup;c=a.plotGroup("group","series",f,g,i);a.markerGroup=a.plotGroup("markerGroup","markers",f,g,i);e&&a.animate(!0);a.getAttribs();c.inverted=a.isCartesian?b.inverted:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());m(a.points,function(a){a.redraw&&a.redraw()});a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&
a.options.enableMouseTracking!==!1&&a.drawTracker();b.inverted&&a.invertGroups();d.clip!==!1&&!a.sharedClipKey&&!h&&c.clip(b.clipRect);e&&a.animate();if(!h)e?a.animationTimeout=setTimeout(function(){a.afterAnimate()},e):a.afterAnimate();a.isDirty=a.isDirtyData=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirtyData,c=this.isDirty,d=this.group,e=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:p(e&&e.left,a.plotLeft),translateY:p(f&&
f.top,a.plotTop)}));this.translate();this.render();b&&M(this,"updatedData");(c||b)&&delete this.kdTree},kdDimensions:1,kdTree:null,kdAxisArray:["clientX","plotY"],kdComparer:"distX",searchPoint:function(a){var b=this.xAxis,c=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?b.len-a.chartY+b.pos:a.chartX-b.pos,plotY:d?c.len-a.chartX+c.pos:a.chartY-c.pos})},buildKDTree:function(){function a(b,d,g){var h,i;if(i=b&&b.length)return h=c.kdAxisArray[d%g],b.sort(function(a,b){return a[h]-
b[h]}),i=Math.floor(i/2),{point:b[i],left:a(b.slice(0,i),d+1,g),right:a(b.slice(i+1),d+1,g)}}function b(){var b=kb(c.points,function(a){return a.y!==null});c.kdTree=a(b,d,d)}var c=this,d=c.kdDimensions;delete c.kdTree;c.options.kdSync?b():setTimeout(b)},searchKDTree:function(a){function b(a,h,i,j){var k=h.point,l=c.kdAxisArray[i%j],n,o=k;n=s(a[e])&&s(k[e])?Math.pow(a[e]-k[e],2):null;var m=s(a[f])&&s(k[f])?Math.pow(a[f]-k[f],2):null,p=(n||0)+(m||0);n={distX:s(n)?Math.sqrt(n):Number.MAX_VALUE,distY:s(m)?
Math.sqrt(m):Number.MAX_VALUE,distR:s(p)?Math.sqrt(p):Number.MAX_VALUE};k.dist=n;l=a[l]-k[l];n=l<0?"left":"right";h[n]&&(n=b(a,h[n],i+1,j),o=n.dist[d]<o.dist[d]?n:k,k=l<0?"right":"left",h[k]&&Math.sqrt(l*l)<o.dist[d]&&(a=b(a,h[k],i+1,j),o=a.dist[d]<o.dist[d]?a:o));return o}var c=this,d=this.kdComparer,e=this.kdAxisArray[0],f=this.kdAxisArray[1];this.kdTree||this.buildKDTree();if(this.kdTree)return b(a,this.kdTree,this.kdDimensions,this.kdDimensions)}};Hb.prototype={destroy:function(){Qa(this,this.axis)},
render:function(a){var b=this.options,c=b.format,c=c?Ja(c,this):b.formatter.call(this);this.label?this.label.attr({text:c,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(c,null,null,b.useHTML).css(b.style).attr({align:this.textAlign,rotation:b.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,e=d.inverted,f=c.reversed,f=this.isNegative&&!f||!this.isNegative&&f,g=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=O(g-c),h=d.xAxis[0].translate(this.x)+
a,i=d.plotHeight,f={x:e?f?g:g-c:h,y:e?i-h-b:f?i-g-c:i-g,width:e?c:b,height:e?b:c};if(e=this.label)e.align(this.alignOptions,null,f),f=e.alignAttr,e[this.options.crop===!1||d.isInsidePlot(f.x,f.y)?"show":"hide"](!0)}};va.prototype.buildStacks=function(){var a=this.series,b=p(this.options.reversedStacks,!0),c=a.length;if(!this.isXAxis){for(this.usePercentage=!1;c--;)a[b?c:a.length-c-1].setStackedPoints();if(this.usePercentage)for(c=0;c<a.length;c++)a[c].setPercentStacks()}};va.prototype.renderStackTotals=
function(){var a=this.chart,b=a.renderer,c=this.stacks,d,e,f=this.stackTotalGroup;if(!f)this.stackTotalGroup=f=b.g("stack-labels").attr({visibility:"visible",zIndex:6}).add();f.translate(a.plotLeft,a.plotTop);for(d in c)for(e in a=c[d],a)a[e].render(f)};Q.prototype.setStackedPoints=function(){if(this.options.stacking&&!(this.visible!==!0&&this.chart.options.chart.ignoreHiddenSeries!==!1)){var a=this.processedXData,b=this.processedYData,c=[],d=b.length,e=this.options,f=e.threshold,g=e.stack,e=e.stacking,
h=this.stackKey,i="-"+h,j=this.negStacks,k=this.yAxis,l=k.stacks,n=k.oldStacks,o,m,p,s,r,v;for(s=0;s<d;s++){r=a[s];v=b[s];p=this.index+","+s;m=(o=j&&v<f)?i:h;l[m]||(l[m]={});if(!l[m][r])n[m]&&n[m][r]?(l[m][r]=n[m][r],l[m][r].total=null):l[m][r]=new Hb(k,k.options.stackLabels,o,r,g);m=l[m][r];m.points[p]=[m.cum||0];e==="percent"?(o=o?h:i,j&&l[o]&&l[o][r]?(o=l[o][r],m.total=o.total=t(o.total,m.total)+O(v)||0):m.total=da(m.total+(O(v)||0))):m.total=da(m.total+(v||0));m.cum=(m.cum||0)+(v||0);m.points[p].push(m.cum);
c[s]=m.cum}if(e==="percent")k.usePercentage=!0;this.stackedYData=c;k.oldStacks={}}};Q.prototype.setPercentStacks=function(){var a=this,b=a.stackKey,c=a.yAxis.stacks,d=a.processedXData;m([b,"-"+b],function(b){var e;for(var f=d.length,g,h;f--;)if(g=d[f],e=(h=c[b]&&c[b][g])&&h.points[a.index+","+f],g=e)h=h.total?100/h.total:0,g[0]=da(g[0]*h),g[1]=da(g[1]*h),a.stackedYData[f]=g[1]})};r(D.prototype,{addSeries:function(a,b,c){var d,e=this;a&&(b=p(b,!0),M(e,"addSeries",{options:a},function(){d=e.initSeries(a);
e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,c,d){var e=b?"xAxis":"yAxis",f=this.options;new va(this,z(a,{index:this[e].length,isX:b}));f[e]=ra(f[e]||{});f[e].push(a);p(c,!0)&&this.redraw(d)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,f=function(){d&&F(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};if(!d)b.loadingDiv=d=Z(Ka,{className:"highcharts-loading"},r(e.style,{zIndex:10,display:R}),
b.container),b.loadingSpan=Z("span",null,e.labelStyle,d),N(b,"redraw",f);b.loadingSpan.innerHTML=a||c.lang.loading;if(!b.loadingShown)F(d,{opacity:0,display:""}),lb(d,{opacity:e.style.opacity},{duration:e.showDuration||0}),b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&lb(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){F(b,{display:R})}});this.loadingShown=!1}});r(Ga.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);if(ca(a)&&
!Ha(a))f.redraw=function(){if(h)a&&a.marker&&a.marker.symbol?f.graphic=h.destroy():h.attr(f.pointAttr[f.state||""]);if(a&&a.dataLabels&&f.dataLabel)f.dataLabel=f.dataLabel.destroy();f.redraw=null};i=f.index;g.updateParallelArrays(f,i);if(l&&f.name)l[f.x]=f.name;k.data[i]=f.options;g.isDirty=g.isDirtyData=!0;if(!g.fixedBox&&g.hasCartesianSeries)j.isDirtyBox=!0;j.legend.display&&k.legendType==="point"&&(g.updateTotals(),j.legend.clearItems());b&&j.redraw(c)}var f=this,g=f.series,h=f.graphic,i,j=g.chart,
k=g.options,l=g.xAxis&&g.xAxis.names,b=p(b,!0);d===!1?e():f.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(Ma(this,this.series.data),a,b)}});r(Q.prototype,{addPoint:function(a,b,c,d){var e=this,f=e.options,g=e.data,h=e.graph,i=e.area,j=e.chart,k=e.xAxis&&e.xAxis.names,l=h&&h.shift||0,n=["graph","area"],h=f.data,o,q=e.xData;Sa(d,j);if(c){for(d=e.zones.length;d--;)n.push("zoneGraph"+d,"zoneArea"+d);m(n,function(a){if(e[a])e[a].shift=l+1})}if(i)i.isArea=!0;b=p(b,
!0);i={series:e};e.pointClass.prototype.applyOptions.apply(i,[a]);n=i.x;d=q.length;if(e.requireSorting&&n<q[d-1])for(o=!0;d&&q[d-1]>n;)d--;e.updateParallelArrays(i,"splice",d,0,0);e.updateParallelArrays(i,d);if(k&&i.name)k[n]=i.name;h.splice(d,0,a);o&&(e.data.splice(d,0,null),e.processData());f.legendType==="point"&&e.generatePoints();c&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),e.updateParallelArrays(i,"shift"),h.shift()));e.isDirty=!0;e.isDirtyData=!0;b&&(e.getAttribs(),j.redraw())},removePoint:function(a,
b,c){var d=this,e=d.data,f=e[a],g=d.points,h=d.chart,i=function(){e.length===g.length&&g.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};Sa(c,h);b=p(b,!0);f?f.firePointEvent("remove",null,i):i()},remove:function(a,b){var c=this,d=c.chart,a=p(a,!0);if(!c.isRemoving)c.isRemoving=!0,M(c,"remove",null,function(){c.destroy();d.isDirtyLegend=d.isDirtyBox=!0;d.linkSeries();a&&d.redraw(b)});
c.isRemoving=!1},update:function(a,b){var c=this,d=this.chart,e=this.userOptions,f=this.type,g=J[f].prototype,h=["group","markerGroup","dataLabelsGroup"],i;if(a.type&&a.type!==f||a.zIndex!==void 0)h.length=0;m(h,function(a){h[a]=c[a];delete c[a]});a=z(e,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1);for(i in g)this[i]=u;r(this,J[a.type||f].prototype);m(h,function(a){c[a]=h[a]});this.init(d,a);d.linkSeries();p(b,!0)&&d.redraw(!1)}});r(va.prototype,
{update:function(a,b){var c=this.chart,a=c.options[this.coll][this.options.index]=z(this.userOptions,a);this.destroy(!0);this._addedPlotLB=u;this.init(c,r(a,{events:u}));c.isDirtyBox=!0;p(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,e=d.length;e--;)d[e]&&d[e].remove(!1);ia(b.axes,this);ia(b[c],this);b.options[c].splice(this.options.index,1);m(b[c],function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;p(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},
b)},setCategories:function(a,b){this.update({categories:a},b)}});var xa=ja(Q);J.line=xa;aa.area=z(T,{threshold:0});var pa=ja(Q,{type:"area",getSegments:function(){var a=this,b=[],c=[],d=[],e=this.xAxis,f=this.yAxis,g=f.stacks[this.stackKey],h={},i,j,k=this.points,l=this.options.connectNulls,n,o;if(this.options.stacking&&!this.cropped){for(n=0;n<k.length;n++)h[k[n].x]=k[n];for(o in g)g[o].total!==null&&d.push(+o);d.sort(function(a,b){return a-b});m(d,function(b){var d=0,k;if(!l||h[b]&&h[b].y!==null)if(h[b])c.push(h[b]);
else{for(n=a.index;n<=f.series.length;n++)if(k=g[b].points[n+","+b]){d=k[1];break}i=e.translate(b);j=f.toPixels(d,!0);c.push({y:null,plotX:i,clientX:i,plotY:j,yBottom:j,onMouseOver:ma})}});c.length&&b.push(c)}else Q.prototype.getSegments.call(this),b=this.segments;this.segments=b},getSegmentPath:function(a){var b=Q.prototype.getSegmentPath.call(this,a),c=[].concat(b),d,e=this.options;d=b.length;var f=this.yAxis.getThreshold(e.threshold),g;d===3&&c.push("L",b[1],b[2]);if(e.stacking&&!this.closedStacks)for(d=
a.length-1;d>=0;d--)g=p(a[d].yBottom,f),d<a.length-1&&e.step&&c.push(a[d+1].plotX,g),c.push(a[d].plotX,g);else this.closeSegment(c,a,f);this.areaPath=this.areaPath.concat(c);return b},closeSegment:function(a,b,c){a.push("L",b[b.length-1].plotX,c,"L",b[0].plotX,c)},drawGraph:function(){this.areaPath=[];Q.prototype.drawGraph.apply(this);var a=this,b=this.areaPath,c=this.options,d=[["area",this.color,c.fillColor]];m(this.zones,function(b,f){d.push(["zoneArea"+f,b.color||a.color,b.fillColor||c.fillColor])});
m(d,function(d){var f=d[0],g=a[f];g?g.animate({d:b}):a[f]=a.chart.renderer.path(b).attr({fill:p(d[2],na(d[1]).setOpacity(p(c.fillOpacity,0.75)).get()),zIndex:0}).add(a.group)})},drawLegendSymbol:Na.drawRectangle});J.area=pa;aa.spline=z(T);xa=ja(Q,{type:"spline",getPointSpline:function(a,b,c){var d=b.plotX,e=b.plotY,f=a[c-1],g=a[c+1],h,i,j,k;if(f&&g){a=f.plotY;j=g.plotX;var g=g.plotY,l;h=(1.5*d+f.plotX)/2.5;i=(1.5*e+a)/2.5;j=(1.5*d+j)/2.5;k=(1.5*e+g)/2.5;l=(k-i)*(j-d)/(j-h)+e-k;i+=l;k+=l;i>a&&i>e?
(i=t(a,e),k=2*e-i):i<a&&i<e&&(i=I(a,e),k=2*e-i);k>g&&k>e?(k=t(g,e),i=2*e-k):k<g&&k<e&&(k=I(g,e),i=2*e-k);b.rightContX=j;b.rightContY=k}c?(b=["C",f.rightContX||f.plotX,f.rightContY||f.plotY,h||d,i||e,d,e],f.rightContX=f.rightContY=null):b=["M",d,e];return b}});J.spline=xa;aa.areaspline=z(aa.area);pa=pa.prototype;xa=ja(xa,{type:"areaspline",closedStacks:!0,getSegmentPath:pa.getSegmentPath,closeSegment:pa.closeSegment,drawGraph:pa.drawGraph,drawLegendSymbol:Na.drawRectangle});J.areaspline=xa;aa.column=
z(T,{borderColor:"#FFFFFF",borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{brightness:0.1,shadow:!1,halo:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},stickyTracking:!1,tooltip:{distance:6},threshold:0});xa=ja(Q,{type:"column",pointAttrToOptions:{stroke:"borderColor",fill:"color",r:"borderRadius"},cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],
negStacks:!0,init:function(){Q.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&m(b.series,function(b){if(b.type===a.type)b.isDirty=!0})},getColumnMetrics:function(){var a=this,b=a.options,c=a.xAxis,d=a.yAxis,e=c.reversed,f,g={},h,i=0;b.grouping===!1?i=1:m(a.chart.series,function(b){var c=b.options,e=b.yAxis;if(b.type===a.type&&b.visible&&d.len===e.len&&d.pos===e.pos)c.stacking?(f=b.stackKey,g[f]===u&&(g[f]=i++),h=g[f]):c.grouping!==!1&&(h=i++),b.columnIndex=h});var c=I(O(c.transA)*
(c.ordinalSlope||b.pointRange||c.closestPointRange||c.tickInterval||1),c.len),j=c*b.groupPadding,k=(c-2*j)/i,l=b.pointWidth,b=s(l)?(k-l)/2:k*b.pointPadding,l=p(l,k-2*b);return a.columnMetrics={width:l,offset:b+(j+((e?i-(a.columnIndex||0):a.columnIndex)||0)*k-c/2)*(e?-1:1)}},translate:function(){var a=this,b=a.chart,c=a.options,d=a.borderWidth=p(c.borderWidth,a.closestPointRange*a.xAxis.transA<2?0:1),e=a.yAxis,f=a.translatedThreshold=e.getThreshold(c.threshold),g=p(c.minPointLength,5),h=a.getColumnMetrics(),
i=h.width,j=a.barW=t(i,1+2*d),k=a.pointXOffset=h.offset,l=-(d%2?0.5:0),n=d%2?0.5:1;b.inverted&&(f-=0.5,b.renderer.isVML&&(n+=1));c.pointPadding&&(j=sa(j));Q.prototype.translate.apply(a);m(a.points,function(c){var d=p(c.yBottom,f),h=I(t(-999-d,c.plotY),e.len+999+d),m=c.plotX+k,s=j,r=I(h,d),u,w;u=t(h,d)-r;O(u)<g&&g&&(u=g,w=!e.reversed&&!c.negative||e.reversed&&c.negative,r=x(O(r-f)>g?d-g:f-(w?g:0)));c.barX=m;c.pointWidth=i;c.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-h,a.xAxis.len-m-s/2]:[m+s/2,
h+e.pos-b.plotTop];s=x(m+s)+l;m=x(m)+l;s-=m;d=O(r)<0.5;u=I(x(r+u)+n,9E4);r=x(r)+n;u-=r;d&&(r-=1,u+=1);c.shapeType="rect";c.shapeArgs={x:m,y:r,width:s,height:u}})},getSymbol:ma,drawLegendSymbol:Na.drawRectangle,drawGraph:ma,drawPoints:function(){var a=this,b=this.chart,c=a.options,d=b.renderer,e=c.animationLimit||250,f,g;m(a.points,function(h){var i=h.plotY,j=h.graphic;if(i!==u&&!isNaN(i)&&h.y!==null)f=h.shapeArgs,i=s(a.borderWidth)?{"stroke-width":a.borderWidth}:{},g=h.pointAttr[h.selected?"select":
""]||a.pointAttr[""],j?(db(j),j.attr(i)[b.pointCount<e?"animate":"attr"](z(f))):h.graphic=d[h.shapeType](f).attr(i).attr(g).add(a.group).shadow(c.shadow,null,c.stacking&&!c.borderRadius);else if(j)h.graphic=j.destroy()})},animate:function(a){var b=this.yAxis,c=this.options,d=this.chart.inverted,e={};if(ba)a?(e.scaleY=0.001,a=I(b.pos+b.len,t(b.pos,b.toPixels(c.threshold))),d?e.translateX=a-b.len:e.translateY=a,this.group.attr(e)):(e.scaleY=1,e[d?"translateX":"translateY"]=b.pos,this.group.animate(e,
this.options.animation),this.animate=null)},remove:function(){var a=this,b=a.chart;b.hasRendered&&m(b.series,function(b){if(b.type===a.type)b.isDirty=!0});Q.prototype.remove.apply(a,arguments)}});J.column=xa;aa.bar=z(aa.column);pa=ja(xa,{type:"bar",inverted:!0});J.bar=pa;aa.scatter=z(T,{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{series.color}">\u25CF</span> <span style="font-size: 10px;"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
pa=ja(Q,{type:"scatter",sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,kdComparer:"distR",drawGraph:function(){this.options.lineWidth&&Q.prototype.drawGraph.call(this)}});J.scatter=pa;aa.pie=z(T,{borderColor:"#FFFFFF",borderWidth:1,center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,
size:null,showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}},stickyTracking:!1,tooltip:{followPointer:!0}});T={type:"pie",isCartesian:!1,pointClass:ja(Ga,{init:function(){Ga.prototype.init.apply(this,arguments);var a=this,b;r(a,{visible:a.visible!==!1,name:p(a.name,"Slice")});b=function(b){a.slice(b.type==="select")};N(a,"select",b);N(a,"unselect",b);return a},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=!d.isDirty&&d.options.ignoreHiddenPoint;if(a!==c.visible||
b)if(c.visible=c.options.visible=a=a===u?!c.visible:a,d.options.data[Ma(c,d.data)]=c.options,m(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&(e.hasRendered&&(d.updateTotals(),e.legend.clearItems(),f||e.legend.render()),e.legend.colorizeItem(c,a)),f)d.isDirty=!0,e.redraw()},slice:function(a,b,c){var d=this.series;Sa(c,d.chart);p(b,!0);this.sliced=this.options.sliced=a=s(a)?a:!this.sliced;d.options.data[Ma(this,d.data)]=this.options;
a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs,c=this.series.chart;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.plotLeft+b.x,c.plotTop+b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}}),requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",
fill:"color"},getColor:ma,animate:function(a){var b=this,c=b.points,d=b.startAngleRad;if(!a)m(c,function(a){var c=a.graphic,g=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:g.r,start:g.start,end:g.end},b.options.animation))}),b.animate=null},setData:function(a,b,c,d){Q.prototype.setData.call(this,a,!1,c,d);this.processData();this.generatePoints();p(b,!0)&&this.chart.redraw(c)},updateTotals:function(){var a,b=0,c,d,e,f=this.options.ignoreHiddenPoint;c=this.points;d=
c.length;for(a=0;a<d;a++){e=c[a];if(e.y<0)e.y=null;b+=f&&!e.visible?0:e.y}this.total=b;for(a=0;a<d;a++)e=c[a],e.percentage=b>0&&(e.visible||!f)?e.y/b*100:0,e.total=b},generatePoints:function(){Q.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,d=c.slicedOffset,e=d+c.borderWidth,f,g,h,i=c.startAngle||0,j=this.startAngleRad=la/180*(i-90),i=(this.endAngleRad=la/180*(p(c.endAngle,i+360)-90))-j,k=this.points,l=c.dataLabels.distance,
c=c.ignoreHiddenPoint,n,m=k.length,q;if(!a)this.center=a=this.getCenter();this.getX=function(b,c){h=V.asin(I((b-a[1])/(a[2]/2+l),1));return a[0]+(c?-1:1)*W(h)*(a[2]/2+l)};for(n=0;n<m;n++){q=k[n];f=j+b*i;if(!c||q.visible)b+=q.percentage/100;g=j+b*i;q.shapeType="arc";q.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:x(f*1E3)/1E3,end:x(g*1E3)/1E3};h=(g+f)/2;h>1.5*la?h-=2*la:h<-la/2&&(h+=2*la);q.slicedTranslation={translateX:x(W(h)*d),translateY:x($(h)*d)};f=W(h)*a[2]/2;g=$(h)*a[2]/2;q.tooltipPos=
[a[0]+f*0.7,a[1]+g*0.7];q.half=h<-la/2||h>la/2?1:0;q.angle=h;e=I(e,l/2);q.labelPos=[a[0]+f+W(h)*l,a[1]+g+$(h)*l,a[0]+f+W(h)*e,a[1]+g+$(h)*e,a[0]+f,a[1]+g,l<0?"center":q.half?"right":"left",h]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,d,e=a.options.shadow,f,g;if(e&&!a.shadowGroup)a.shadowGroup=b.g("shadow").add(a.group);m(a.points,function(h){var i=h.options.visible;d=h.graphic;g=h.shapeArgs;f=h.shadowGroup;if(e&&!f)f=h.shadowGroup=b.g("shadow").add(a.shadowGroup);c=h.sliced?
h.slicedTranslation:{translateX:0,translateY:0};f&&f.attr(c);d?d.animate(r(g,c)):h.graphic=d=b[h.shapeType](g).setRadialReference(a.center).attr(h.pointAttr[h.selected?"select":""]).attr({"stroke-linejoin":"round"}).attr(c).add(a.group).shadow(e,f);i!==void 0&&h.setVisible(i,!0)})},searchPoint:ma,sortByAngle:function(a,b){a.sort(function(a,d){return a.angle!==void 0&&(d.angle-a.angle)*b})},drawLegendSymbol:Na.drawRectangle,getCenter:Xb.getCenter,getSymbol:ma};T=ja(Q,T);J.pie=T;Q.prototype.drawDataLabels=
function(){var a=this,b=a.options,c=b.cursor,d=b.dataLabels,e=a.points,f,g,h=a.hasRendered||0,i,j,k=a.chart.renderer;if(d.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(d),j=a.plotGroup("dataLabelsGroup","data-labels",d.defer?"hidden":"visible",d.zIndex||6),p(d.defer,!0)&&(j.attr({opacity:+h}),h||N(a,"afterAnimate",function(){a.visible&&j.show();j[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),g=d,m(e,function(e){var h,m=e.dataLabel,q,t,x=e.connector,w=!0,v,A={};f=
e.dlOptions||e.options&&e.options.dataLabels;h=p(f&&f.enabled,g.enabled);if(m&&!h)e.dataLabel=m.destroy();else if(h){d=z(g,f);v=d.style;h=d.rotation;q=e.getLabelConfig();i=d.format?Ja(d.format,q):d.formatter.call(q,d);v.color=p(d.color,v.color,a.color,"black");if(m)if(s(i))m.attr({text:i}),w=!1;else{if(e.dataLabel=m=m.destroy(),x)e.connector=x.destroy()}else if(s(i)){m={fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":d.borderWidth,r:d.borderRadius||0,rotation:h,padding:d.padding,zIndex:1};
if(v.color==="contrast")A.color=d.inside||d.distance<0||b.stacking?k.getContrast(e.color||a.color):"#000000";if(c)A.cursor=c;for(t in m)m[t]===u&&delete m[t];m=e.dataLabel=k[h?"text":"label"](i,0,-999,d.shape,null,null,d.useHTML).attr(m).css(r(v,A)).add(j).shadow(d.shadow)}m&&a.alignDataLabel(e,m,d,null,w)}})};Q.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart,g=f.inverted,h=p(a.plotX,-999),i=p(a.plotY,-999),j=b.getBBox(),k=f.renderer.fontMetrics(c.style.fontSize).b,l=this.visible&&(a.series.forceDL||
f.isInsidePlot(h,x(i),g)||d&&f.isInsidePlot(h,g?d.x+1:d.y+d.height-1,g));if(l)d=r({x:g?f.plotWidth-i:h,y:x(g?f.plotHeight-h:i),width:0,height:0},d),r(c,{width:j.width,height:j.height}),c.rotation?(a=f.renderer.rotCorr(k,c.rotation),b[e?"attr":"animate"]({x:d.x+c.x+d.width/2+a.x,y:d.y+c.y+d.height/2}).attr({align:c.align})):(b.align(c,null,d),g=b.alignAttr,p(c.overflow,"justify")==="justify"?this.justifyDataLabel(b,c,g,j,d,e):p(c.crop,!0)&&(l=f.isInsidePlot(g.x,g.y)&&f.isInsidePlot(g.x+j.width,g.y+
j.height)),c.shape&&b.attr({anchorX:a.plotX,anchorY:a.plotY}));if(!l)b.attr({y:-999}),b.placed=!1};Q.prototype.justifyDataLabel=function(a,b,c,d,e,f){var g=this.chart,h=b.align,i=b.verticalAlign,j,k,l=a.box?0:a.padding||0;j=c.x+l;if(j<0)h==="right"?b.align="left":b.x=-j,k=!0;j=c.x+d.width-l;if(j>g.plotWidth)h==="left"?b.align="right":b.x=g.plotWidth-j,k=!0;j=c.y+l;if(j<0)i==="bottom"?b.verticalAlign="top":b.y=-j,k=!0;j=c.y+d.height-l;if(j>g.plotHeight)i==="top"?b.verticalAlign="bottom":b.y=g.plotHeight-
j,k=!0;if(k)a.placed=!f,a.align(b,null,e)};if(J.pie)J.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,d=a.chart,e=a.options.dataLabels,f=p(e.connectorPadding,10),g=p(e.connectorWidth,1),h=d.plotWidth,i=d.plotHeight,j,k,l=p(e.softConnector,!0),n=e.distance,o=a.center,q=o[2]/2,r=o[1],s=n>0,u,v,w,z=[[],[]],A,B,D,G,E,F=[0,0,0,0],M=function(a,b){return b.y-a.y};if(a.visible&&(e.enabled||a._hasPointLabels)){Q.prototype.drawDataLabels.apply(a);m(b,function(a){a.dataLabel&&a.visible&&z[a.half].push(a)});
for(G=2;G--;){var J=[],N=[],H=z[G],L=H.length,K;if(L){a.sortByAngle(H,G-0.5);for(E=b=0;!b&&H[E];)b=H[E]&&H[E].dataLabel&&(H[E].dataLabel.getBBox().height||21),E++;if(n>0){v=I(r+q+n,d.plotHeight);for(E=t(0,r-q-n);E<=v;E+=b)J.push(E);v=J.length;if(L>v){c=[].concat(H);c.sort(M);for(E=L;E--;)c[E].rank=E;for(E=L;E--;)H[E].rank>=v&&H.splice(E,1);L=H.length}for(E=0;E<L;E++){c=H[E];w=c.labelPos;c=9999;var R,P;for(P=0;P<v;P++)R=O(J[P]-w[1]),R<c&&(c=R,K=P);if(K<E&&J[E]!==null)K=E;else for(v<L-E+K&&J[E]!==null&&
(K=v-L+E);J[K]===null;)K++;N.push({i:K,y:J[K]});J[K]=null}N.sort(M)}for(E=0;E<L;E++){c=H[E];w=c.labelPos;u=c.dataLabel;D=c.visible===!1?"hidden":"inherit";c=w[1];if(n>0){if(v=N.pop(),K=v.i,B=v.y,c>B&&J[K+1]!==null||c<B&&J[K-1]!==null)B=I(t(0,c),d.plotHeight)}else B=c;A=e.justify?o[0]+(G?-1:1)*(q+n):a.getX(B===r-q-n||B===r+q+n?c:B,G);u._attr={visibility:D,align:w[6]};u._pos={x:A+e.x+({left:f,right:-f}[w[6]]||0),y:B+e.y-10};u.connX=A;u.connY=B;if(this.options.size===null)v=u.width,A-v<f?F[3]=t(x(v-
A+f),F[3]):A+v>h-f&&(F[1]=t(x(A+v-h+f),F[1])),B-b/2<0?F[0]=t(x(-B+b/2),F[0]):B+b/2>i&&(F[2]=t(x(B+b/2-i),F[2]))}}}if(Fa(F)===0||this.verifyDataLabelOverflow(F))this.placeDataLabels(),s&&g&&m(this.points,function(b){j=b.connector;w=b.labelPos;if((u=b.dataLabel)&&u._pos)D=u._attr.visibility,A=u.connX,B=u.connY,k=l?["M",A+(w[6]==="left"?5:-5),B,"C",A,B,2*w[2]-w[4],2*w[3]-w[5],w[2],w[3],"L",w[4],w[5]]:["M",A+(w[6]==="left"?5:-5),B,"L",w[2],w[3],"L",w[4],w[5]],j?(j.animate({d:k}),j.attr("visibility",D)):
b.connector=j=a.chart.renderer.path(k).attr({"stroke-width":g,stroke:e.connectorColor||b.color||"#606060",visibility:D}).add(a.dataLabelsGroup);else if(j)b.connector=j.destroy()})}},J.pie.prototype.placeDataLabels=function(){m(this.points,function(a){var a=a.dataLabel,b;if(a)(b=a._pos)?(a.attr(a._attr),a[a.moved?"animate":"attr"](b),a.moved=!0):a&&a.attr({y:-999})})},J.pie.prototype.alignDataLabel=ma,J.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,c=this.options,d=c.center,e=
c=c.minSize||80,f;d[0]!==null?e=t(b[2]-t(a[1],a[3]),c):(e=t(b[2]-a[1]-a[3],c),b[0]+=(a[3]-a[1])/2);d[1]!==null?e=t(I(e,b[2]-t(a[0],a[2])),c):(e=t(I(e,b[2]-a[0]-a[2]),c),b[1]+=(a[0]-a[2])/2);e<b[2]?(b[2]=e,this.translate(b),m(this.points,function(a){if(a.dataLabel)a.dataLabel._pos=null}),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f};if(J.column)J.column.prototype.alignDataLabel=function(a,b,c,d,e){var f=this.chart.inverted,g=a.series,h=a.dlBox||a.shapeArgs,i=a.below||a.plotY>p(this.translatedThreshold,
g.yAxis.len),j=p(c.inside,!!this.options.stacking);if(h&&(d=z(h),f&&(d={x:g.yAxis.len-d.y-d.height,y:g.xAxis.len-d.x-d.width,width:d.height,height:d.width}),!j))f?(d.x+=i?0:d.width,d.width=0):(d.y+=i?d.height:0,d.height=0);c.align=p(c.align,!f||j?"center":i?"right":"left");c.verticalAlign=p(c.verticalAlign,f||j?"middle":i?"top":"bottom");Q.prototype.alignDataLabel.call(this,a,b,c,d,e)};(function(a){var b=a.Chart,c=a.each,d=HighchartsAdapter.addEvent;b.prototype.callbacks.push(function(a){function b(){var d=
[];c(a.series,function(a){var b=a.options.dataLabels;(b.enabled||a._hasPointLabels)&&!b.allowOverlap&&a.visible&&c(a.points,function(a){if(a.dataLabel)a.dataLabel.labelrank=a.labelrank,d.push(a.dataLabel)})});a.hideOverlappingLabels(d)}b();d(a,"redraw",b)});b.prototype.hideOverlappingLabels=function(a){var b=a.length,c,d,i,j;for(d=0;d<b;d++)if(c=a[d])c.oldOpacity=c.opacity,c.newOpacity=1;for(d=0;d<b;d++){i=a[d];for(c=d+1;c<b;++c)if(j=a[c],i&&j&&i.placed&&j.placed&&i.newOpacity!==0&&j.newOpacity!==
0&&!(j.alignAttr.x>i.alignAttr.x+i.width||j.alignAttr.x+j.width<i.alignAttr.x||j.alignAttr.y>i.alignAttr.y+i.height||j.alignAttr.y+j.height<i.alignAttr.y))(i.labelrank<j.labelrank?i:j).newOpacity=0}for(d=0;d<b;d++)if(c=a[d]){if(c.oldOpacity!==c.newOpacity&&c.placed)c.alignAttr.opacity=c.newOpacity,c[c.isOld&&c.newOpacity?"animate":"attr"](c.alignAttr);c.isOld=!0}}})(w);T=w.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,d=a.options.cursor,e=d&&{cursor:d},f=function(a){for(var c=
a.target,d;c&&!d;)d=c.point,c=c.parentNode;if(d!==u&&d!==b.hoverPoint)d.onMouseOver(a)};m(a.points,function(a){if(a.graphic)a.graphic.element.point=a;if(a.dataLabel)a.dataLabel.element.point=a});if(!a._hasTracking)m(a.trackerGroups,function(b){if(a[b]&&(a[b].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){c.onTrackerMouseOut(a)}).css(e),ab))a[b].on("touchstart",f)}),a._hasTracking=!0},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:
a.graphPath),e=d.length,f=a.chart,g=f.pointer,h=f.renderer,i=f.options.tooltip.snap,j=a.tracker,k=b.cursor,l=k&&{cursor:k},k=a.singlePoints,n,o=function(){if(f.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(ba?1.0E-4:0.002)+")";if(e&&!c)for(n=e+1;n--;)d[n]==="M"&&d.splice(n+1,0,d[n+1]-i,d[n+2],"L"),(n&&d[n]==="M"||n===e)&&d.splice(n,0,"L",d[n-2]+i,d[n-1]);for(n=0;n<k.length;n++)e=k[n],d.push("M",e.plotX-i,e.plotY,"L",e.plotX+i,e.plotY);j?j.attr({d:d}):(a.tracker=h.path(d).attr({"stroke-linejoin":"round",
visibility:a.visible?"visible":"hidden",stroke:p,fill:c?p:R,"stroke-width":b.lineWidth+(c?0:2*i),zIndex:2}).add(a.group),m([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",o).on("mouseout",function(a){g.onTrackerMouseOut(a)}).css(l);if(ab)a.on("touchstart",o)}))}};if(J.column)xa.prototype.drawTracker=T.drawTrackerPoint;if(J.pie)J.pie.prototype.drawTracker=T.drawTrackerPoint;if(J.scatter)pa.prototype.drawTracker=T.drawTrackerPoint;r(mb.prototype,{setItemEvents:function(a,
b,c,d,e){var f=this;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");b.css(f.options.itemHoverStyle)}).on("mouseout",function(){b.css(a.visible?d:e);a.setState()}).on("click",function(b){var c=function(){a.setVisible()},b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):M(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=Z("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);
N(a.checkbox,"click",function(b){M(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});P.legend.itemStyle.cursor="pointer";r(D.prototype,{showResetZoom:function(){var a=this,b=P.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f=c.relativeTo==="chart"?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).add().align(c.position,!1,f)},zoomOut:function(){var a=
this;M(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?m(this.axes,function(a){b=a.zoom()}):m(a.xAxis.concat(a.yAxis),function(a){var e=a.axis,h=e.isXAxis;if(c[h?"zoomX":"zoomY"]||c[h?"pinchX":"pinchY"])b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0)});e=this.resetZoomButton;if(d&&!e)this.showResetZoom();else if(!d&&ca(e))this.resetZoomButton=e.destroy();b&&this.redraw(p(this.options.chart.animation,a&&a.animation,this.pointCount<
100))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&m(d,function(a){a.setState()});m(b==="xy"?[1,0]:[1],function(b){var d=a[b?"chartX":"chartY"],h=c[b?"xAxis":"yAxis"][0],i=c[b?"mouseDownX":"mouseDownY"],j=(h.pointRange||0)/2,k=h.getExtremes(),l=h.toValue(i-d,!0)+j,j=h.toValue(i+c[b?"plotWidth":"plotHeight"]-d,!0)-j,i=i>d;if(h.series.length&&(i||l>I(k.dataMin,k.min))&&(!i||j<t(k.dataMax,k.max)))h.setExtremes(l,j,!1,!1,{trigger:"pan"}),e=!0;c[b?"mouseDownX":"mouseDownY"]=d});e&&c.redraw(!1);F(c.container,
{cursor:"move"})}});r(Ga.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart,a=p(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[Ma(c,d.data)]=c.options;c.setState(a&&"select");b||m(e.getSelectedPoints(),function(a){if(a.selected&&a!==c)a.selected=a.options.selected=!1,d.options.data[Ma(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect")})})},onMouseOver:function(a){var b=this.series,c=b.chart,
d=c.tooltip,e=c.hoverPoint;if(c.hoverSeries!==b)b.onMouseOver();if(e&&e!==this)e.onMouseOut();this.firePointEvent("mouseOver");d&&(!d.shared||b.noSharedTooltip)&&d.refresh(this,a);this.setState("hover");c.hoverPoint=this},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");if(!b||Ma(this,b)===-1)this.setState(),a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var a=z(this.series.options.point,this.options).events,b;this.events=a;for(b in a)N(this,
b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var c=this.plotX,d=this.plotY,e=this.series,f=e.options.states,g=aa[e.type].marker&&e.options.marker,h=g&&!g.enabled,i=g&&g.states[a],j=i&&i.enabled===!1,k=e.stateMarkerGraphic,l=this.marker||{},n=e.chart,m=e.halo,p,a=a||"";p=this.pointAttr[a]||e.pointAttr[a];if(!(a===this.state&&!b||this.selected&&a!=="select"||f[a]&&f[a].enabled===!1||a&&(j||h&&i.enabled===!1)||a&&l.states&&l.states[a]&&l.states[a].enabled===!1)){if(this.graphic)g=g&&this.graphic.symbolName&&
p.r,this.graphic.attr(z(p,g?{x:c-g,y:d-g,width:2*g,height:2*g}:{})),k&&k.hide();else{if(a&&i)if(g=i.radius,l=l.symbol||e.symbol,k&&k.currentSymbol!==l&&(k=k.destroy()),k)k[b?"animate":"attr"]({x:c-g,y:d-g});else if(l)e.stateMarkerGraphic=k=n.renderer.symbol(l,c-g,d-g,2*g,2*g).attr(p).add(e.markerGroup),k.currentSymbol=l;if(k)k[a&&n.isInsidePlot(c,d,n.inverted)?"show":"hide"]()}if((c=f[a]&&f[a].halo)&&c.size){if(!m)e.halo=m=n.renderer.path().add(n.seriesGroup);m.attr(r({fill:na(this.color||e.color).setOpacity(c.opacity).get()},
c.attributes))[b?"animate":"attr"]({d:this.haloPath(c.size)})}else m&&m.attr({d:[]});this.state=a}},haloPath:function(a){var b=this.series,c=b.chart,d=b.getPlotBox(),e=c.inverted;return c.renderer.symbols.circle(d.translateX+(e?b.yAxis.len-this.plotY:this.plotX)-a,d.translateY+(e?b.xAxis.len-this.plotX:this.plotY)-a,a*2,a*2)}});r(Q.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&M(this,"mouseOver");this.setState("hover");
a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;if(d)d.onMouseOut();this&&a.events.mouseOut&&M(this,"mouseOut");c&&!a.stickyTracking&&(!c.shared||this.noSharedTooltip)&&c.hide();this.setState();b.hoverSeries=null},setState:function(a){var b=this.options,c=this.graph,d=b.states,e=b.lineWidth,b=0,a=a||"";if(this.state!==a&&(this.state=a,!(d[a]&&d[a].enabled===!1)&&(a&&(e=d[a].lineWidth||e+(d[a].lineWidthPlus||0)),c&&!c.dashstyle))){a={"stroke-width":e};
for(c.attr(a);this["zoneGraph"+b];)this["zoneGraph"+b].attr(a),b+=1}},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,h=c.visible;f=(c.visible=a=c.userOptions.visible=a===u?!h:a)?"show":"hide";m(["group","dataLabelsGroup","markerGroup","tracker"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&m(d.series,function(a){if(a.options.stacking&&
a.visible)a.isDirty=!0});m(c.linkedSeries,function(b){b.setVisible(a,!1)});if(g)d.isDirtyBox=!0;b!==!1&&d.redraw();M(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=a===u?!this.selected:a;if(this.checkbox)this.checkbox.checked=a;M(this,a?"select":"unselect")},drawTracker:T.drawTrackerGraph});r(w,{Color:na,Point:Ga,Tick:Ta,Renderer:$a,SVGElement:K,SVGRenderer:ta,arrayMin:Pa,arrayMax:Fa,charts:X,dateFormat:Oa,error:ka,format:Ja,pathAnim:zb,
getOptions:function(){return P},hasBidiBug:Nb,isTouchDevice:Jb,setOptions:function(a){P=z(!0,P,a);Cb();return P},addEvent:N,removeEvent:Y,createElement:Z,discardElement:Ra,css:F,each:m,map:Ua,merge:z,splat:ra,extendClass:ja,pInt:B,svg:ba,canvas:ea,vml:!ba&&!ea,product:"Highcharts",version:"4.1.5"})})();

! function(a) {
    return generateParticles = function(b, c) {
        "use strict";

        function d(a, b) {
            this.positionX = a, this.positionY = b, this.initialPositionX = a, this.initialPositionY = b
        }

        function e(a, b, c, d, e, f, g) {
            this.positionX = p, this.positionY = q, this.size = c, this.red = d, this.green = e, this.blue = f, this.opacity = g, this.color = "rgba(" + this.red + "," + this.green + "," + this.blue + ",+" + this.opacity + ")"
        }

        function f() {
            if (!B) return B = Date.now(), void(C = 0);
            var a = ((new Date).getTime() - B) / 1e3;
            if (B = Date.now(), C = Math.floor(1 / a), O += C, P++, 5 === P && (D = Math.floor(O / 5), P = 0, O = 0), D) {
                var b = v.length;
                t.fillStyle = "#fff", t.font = "11px Verdana", t.fillText("FPS: " + C + " lines: " + u + " Active particles: " + b + " Average FPS: " + D, 10, l.height - 20), u = 0
            }
        }
        var g = {
                particleType: "square",
                particleText: "☆",
                emitterShape: ":)",
                emitterFontSize: 150,
                emitterType: "random",
                emitterPositionX: 50,
                emitterPositionY: 50,
                particlesNumber: 250,
                initialSize: 3,
                randomSize: !0,
                minimumSize: 2,
                maximumSize: 4,
                moveLimit: 50,
                durationMin: 50,
                durationMax: 200,
                lifeTime: !1,
                lifeTimeMin: 100,
                lifeTimeMax: 100,
                red: 255,
                green: 0,
                blue: 255,
                opacity: 1,
                randomOpacity: !0,
                particleMinimumOpacity: 0.1,
                particleMaximumOpacity: 0.9,
                drawConnections: !1,
                connectionRed: 255,
                connectionGreen: 255,
                connectionBlue: 255,
                connectionOpacity: 0.1,
                mouseInteraction: !0,
                mouseInteractionType: "gravity",
                drawMouseConnections: !1,
                mouseInteractionDistance: 300,
                mouseConnectionRed: 255,
                mouseConnectionGreen: 255,
                mouseConnectionBlue: 255,
                mouseConnectionOpacity: 0.1,
                showStatistics: !1,
                backgroundMode: "gradient",
                backgroundImage: "img/wallpaper.jpg",
                backgroundMainColor: "255,255,255",
                backgroundColors: {
                    color1: {
                        positionX: 50,
                        positionY: 50,
                        color: "0000ff"
                    },
                    color2: {
                        positionX: 97,
                        positionY: 70,
                        color: "00ff00"
                    }
                }
            },
            h = function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                return a
            };
        h(g, c);
        var i = a.cancelAnimationFrame || a.clearTimeout,
            j = a.requestAnimationFrame || function(a) {
                return setTimeout(a, 1e3 / 60)
            },
            k = document.getElementById(b);
        if (null === k) return console.error("ParticlesEngine Error - Container is Null");
        var l = document.createElement("canvas");
        l.id = "particles_" + b, l.style.display = "block", l.style.position = "absolute", k.innerHTML = "", k.style.overflow = "hidden", k.appendChild(l);
        var m, n, o, p, q, r, s, t = l.getContext("2d"),
            u = 0,
            v = [],
            w = [],
            x = function() {
                "undefined" == typeof a.particleEngine ? (a.particleEngine = {}, a.particleEngine.resizeHandler = {}) : "undefined" != typeof a.particleEngine["animation" + b] && (i(a.particleEngine["animation" + b]), a.removeEventListener("resize", a.particleEngine.resizeHandler["animation" + b], !1)), a.particleEngine.resizeHandler["animation" + b] = function() {
                    x()
                }, a.addEventListener("resize", a.particleEngine.resizeHandler["animation" + b], !1), l.width = k.clientWidth, l.height = k.clientHeight, L(g.backgroundMode), m = Math.round(Math.sqrt(l.width * l.width + l.height * l.height)), n = Math.floor(l.width / 2), o = Math.floor(l.height / 2), v.length = 0, w.length = 0, J(), R()
            },
            y = function(a, b) {
                return Math.floor(Math.random() * (b - a + 1)) + a
            },
            z = function(a, b) {
                var b = 100 * b,
                    a = 100 * a,
                    c = y(a, b),
                    d = c / 100;
                return d
            },
            A = function(a, b) {
                var c = Math.round(Math.abs(a.positionX - b.positionX)),
                    d = Math.round(Math.abs(a.positionY - b.positionY));
                return Math.round(Math.sqrt(c * c + d * d))
            };
        d.prototype.fadeTo = function(a) {
            this.opacity < a ? (this.opacity = this.opacity + 0.02, this.opacity > 1 && (this.opacity = 1)) : this.opacity > a && (this.opacity = this.opacity - 0.02)
        }, d.prototype.fadeIn = function() {
            this.active = !0, -1 == this.actions.indexOf("fadeIn") && this.actions.push("fadeIn"), this.fadeTo(this.initialOpacity), this.initialOpacity - this.opacity <= 0 && this.actions.splice(this.actions.indexOf("fadeIn"), 1)
        }, d.prototype.fadeOut = function() {
            this.isFading = !0, -1 == this.actions.indexOf("fadeOut") && this.actions.push("fadeOut"), this.opacity < 0.05 && (this.opacity = 0, this.isFading = !1, this.active = !1, this.actions.splice(this.actions.indexOf("fadeOut"), 1)), this.fadeTo(0)
        }, d.prototype.doActions = function() {
            for (var a = 0; a < this.actions.length; a++) {
                var b = this.actions[a];
                this[b]()
            }
        }, d.prototype.animateTo = function(a, b) {
            var c, d = this.duration,
                e = function(a, b) {
                    return a > b ? (c = (a - b) / d, a = b + c) : (c = (b - a) / d, a = b - c), a
                };
            this.positionX = e(a, this.positionX), this.positionY = e(b, this.positionY), this.timer == this.duration ? (this.calculateVector(), this.timer = 0) : this.timer++
        }, d.prototype.updateColor = function() {
            this.color = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.opacity + ")"
        }, d.prototype.init = function() {
            this.initOpacity(), this.initSize(), this.red = g.red, this.green = g.green, this.blue = g.blue, this.color = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.opacity + ")", this.duration = y(g.durationMin, g.durationMax), this.limit = g.moveLimit, this.timer = 0, this.lifeTime = y(g.lifeTimeMin, g.lifeTimeMax), this.actions = [], this.calculateVector(), this.active = !0, this.closestDistance = m, v.push(this), this.index = v.indexOf(this)
        }, d.prototype.initOpacity = function() {
            this.opacity = g.randomOpacity ? z(g.particleMinimumOpacity, g.particleMaximumOpacity) : g.opacity, this.initialOpacity = this.opacity
        }, d.prototype.initSize = function() {
            this.size = g.randomSize ? y(g.minimumSize, g.maximumSize) : g.initialSize
        }, d.prototype.calculateVector = function() {
            for (var a, b = {}, c = this, d = function() {
                    var d = c.positionX - c.limit,
                        e = c.positionX + c.limit;
                    e > l.width && (e = l.width), 0 > d && (d = 0);
                    var f = c.positionY - c.limit,
                        g = c.positionY + c.limit;
                    g > l.height && (g = l.height), 0 > f && (f = 0), b.positionX = y(d, e), b.positionY = y(f, g), a = A(c, b)
                };
                "undefined" == typeof a || a > this.limit;) d();
            this.vectorX = b.positionX, this.vectorY = b.positionY
        }, d.prototype.testInteraction = function() {
            for (var a = this.index + 1; a < v.length; a++) {
                var b = v[a],
                    c = A(this, b);
                c < this.closestDistance && (this.closestDistance = c, this.closestElement = b), c < b.closestDistance && (b.closestDistance = c, b.closestElement = this)
            }
            this.closestElement && (t.beginPath(), t.moveTo(this.positionX + this.size / 2, this.positionY + this.size / 2), t.lineTo(this.closestElement.positionX + 0.5 * this.closestElement.size, this.closestElement.positionY + 0.5 * this.closestElement.size), t.strokeStyle = "rgba(" + g.connectionRed + "," + g.connectionGreen + "," + g.connectionBlue + "," + g.connectionOpacity + ")", t.stroke(), u++)
        }, e.prototype.testInteraction = function() {
            if (0 !== g.mouseInteractionDistance) {
                for (var a = [], b = 0; b < v.length; b++) {
                    var c = v[b],
                        d = A(this, c);
                    d < g.mouseInteractionDistance && c !== this && a.push(v[b])
                }
                for (var b = 0; b < a.length; b++) {
                    if (g.drawMouseConnections) {
                        var e = a[b];
                        t.beginPath(), t.moveTo(this.positionX, this.positionY), t.lineTo(e.positionX + 0.5 * e.size, e.positionY + 0.5 * e.size), t.strokeStyle = "rgba(" + g.mouseConnectionRed + "," + g.mouseConnectionGreen + "," + g.mouseConnectionBlue + "," + g.mouseConnectionOpacity + ")", t.stroke(), u++
                    }
                    g.mouseInteraction && ("gravity" == g.mouseInteractionType ? (a[b].vectorX = this.positionX, a[b].vectorY = this.positionY) : "initial" == g.mouseInteractionType && (a[b].vectorX = a[b].initialPositionX, a[b].vectorY = a[b].initialPositionY))
                }
            }
        }, d.prototype.updateLifeTime = function() {
            this.lifeTime--, this.lifeTime < 0 && this.fadeOut()
        }, d.prototype.updateAnimation = function() {
            this.animateTo(this.vectorX, this.vectorY), this.updateColor(), t.fillStyle = this.color, "square" == g.particleType ? t.fillRect(this.positionX, this.positionY, this.size, this.size) : "text" == g.particleType && (t.font = this.size + "px Verdana", t.fillText(g.particleText, this.positionX, this.positionY))
        }, e.prototype.updateAnimation = function() {
            this.positionX = p, this.positionY = q, this.testInteraction()
        };
        var B, C, D, E = function(a) {
                var b = l.width / 100 * a.positionX,
                    c = l.height / 100 * a.positionY;
                t.fillStyle = "#fff", t.font = a.emitterFontSize + "px Verdana", t.fillText(a.text, b, c);
                for (var d = t.getImageData(0, 0, l.width, l.height), e = d.data, f = 0, g = 0, h = 0; h < e.length; h += 4) f++, f == l.width && (f = 0, g++), 255 === e[h] && w.push([f, g])
            },
            F = function(a) {
                for (var b = 0; b < a.particlesNumber; b++) {
                    if (w.length < 2) return;
                    var c = y(1, w.length - 1),
                        e = w[c],
                        f = new d(e[0], e[1]);
                    f.init(), w.splice(c, 1)
                }
            },
            G = function(a) {
                for (var b = 0; b < a.particlesNumber; b++) {
                    var c = Math.floor(Math.random() * l.width + 1),
                        e = Math.floor(Math.random() * l.height + 1),
                        f = new d(c, e);
                    f.init()
                }
            },
            H = function(a) {
                for (var b = 0; b < a.particlesNumber; b++) {
                    var c = l.width / 100 * a.positionX,
                        e = l.height / 100 * a.positionY,
                        f = new d(c, e);
                    f.init()
                }
            },
            I = function(a, b) {
                "text" === a ? (E(b), F(b)) : "point" === a ? H(b) : "random" === a && G(b)
            },
            J = function() {
                r = new e(0, 0, g.initialSize, 255, 255, 255), "text" === g.emitterType ? I("text", {
                    positionX: g.emitterPositionX,
                    positionY: g.emitterPositionY,
                    particlesNumber: g.particlesNumber,
                    text: g.emitterShape,
                    emitterFontSize: g.emitterFontSize
                }) : "point" === g.emitterType ? I("point", {
                    positionX: g.emitterPositionX,
                    positionY: g.emitterPositionY,
                    particlesNumber: g.particlesNumber
                }) : "random" === g.emitterType && I("random", {
                    particlesNumber: g.particlesNumber
                })
            },
            K = function() {
                for (var a = 0; a < v.length; a++) v[a].closestDistance = m;
                for (var a = 0; a < v.length; a++) {
                    var b = v[a];
                    b.doActions(), b.active ? (b.updateAnimation(), g.drawConnections && b.testInteraction(), g.lifeTime && b.updateLifeTime()) : b.active === !1 && b.isFading === !1 && (b.lifeTime = 100, b.positionX = b.initialPositionX, b.positionY = b.initialPositionY, b.calculateVector(), b.timer = 0, b.fadeIn())
                }
                r.updateAnimation()
            },
            L = function(a) {
                "gradient" === a ? M() : "image" === a && N()
            },
            M = function() {
                var a, b = "";
                for (var c in g.backgroundColors) "undefined" == typeof a && (a = g.backgroundColors[c].color), g.backgroundColors.hasOwnProperty(c) && (b += "radial-gradient(circle at " + g.backgroundColors[c].positionX + "% " + g.backgroundColors[c].positionY + "%, #" + g.backgroundColors[c].color + ", transparent 100%),");
                b = b.slice(0, -1), k.style.background = "#" + a, k.style.backgroundImage = b
            },
            N = function() {
                k.style.backgroundImage = "url(img/wallpaper.jpg)", k.style.backgroundPosition = "center center", k.style.backgroundSize = "cover"
            },
            N = function() {},
            O = 0,
            P = 0;
        l.onmousemove = function(b) {
            p = b.clientX - k.offsetLeft + a.pageXOffset, q = b.clientY - k.offsetTop + a.pageYOffset
        };
        var Q = function() {
                t.clearRect(0, 0, l.width, l.height)
            },
            R = function() {
                Q(), K(), a.particleEngine["animation" + b] = j(R), s = !0, g.showStatistics && f()
            };
        x()
    }, a.generateParticles = generateParticles, generateParticles
}(window);
!(function(){
	"use strict";
	
var autotranslate = {}

autotranslate.init = function (){

	//helpers
	function q(name){
		return document.querySelector(name)
	}

	//to make this work - put it above view and position absolute it - adjust it etc
	var langselect = q('.language_selection_first select')



	langselect.addEventListener('change', langchange, false);

	function langchange(e){
		e.preventDefault()

		var langs = []

		//this.value === 'el' ? greek() : null;

		if (this.value == 'el') { greek() }
		if (this.value == 'pl') { polish() }
		if (this.value == 'en') { english() }
		if (this.value == 'fr') { french() }
		if (this.value == 'de') { german() }
		if (this.value == 'es') { spanish() }
		if (this.value == 'it') { italian() }

	}



	var allcontent = document.getElementsByClassName("translate"),
		description1 = document.getElementsByClassName('description')[0],
		description2 = document.getElementsByClassName('description')[1]
	
		

	//greek		
	var greek = function(){

			var allwords = ['Επιλέξτε γλώσσα',
					'Εκκίνηση',
					'Προσπάθησε ξανά', 
					'Συλλογές', 
					'Στατιστικά',
					'Επιλογές', 
					'Σχετικά με αυτό το app',
					'Επιλογές',
					'Αποθήκευση και επιστροφή',
					'Στατιστικά',
					'Η απόδοσή σας / 10 τελευταίες προσπάθειες',
					'Συλλογές',
					'Τα τρόπαια σας',
					'Υψηλότερη βαθμολογία: ',
					'Ο ευκολότερος τρόπος για να ενισχύσετε το λεξιλόγιό σας είναι εδώ!',
					'Έχουμε εισαγάγει 7 διαφορετικές γλώσσες που είναι εύκολα προσαρμόσιμες.',
					'Απλά επιλέξτε μια γλώσσα που ξέρετε και μια γλώσσα που θέλετε να μάθετε'
					]

	for( var i=0 ;i<allcontent.length;){
		
	    allcontent[i].textContent = allwords[i++];
		
	}

		//options section
		description1.textContent = 'Ξέρω'
		description2.textContent = 'Θα ήθελα να μάθω'

		//main modal
		gameScore.firstChild.textContent = 'Σκορ'
    	
    	q('tspan').textContent = 'Διαδοχική απόδοση'
    	q('.highcharts-yaxis-title').textContent = 'Βαθμοί'

    	return false;
	}



//english
		var english = function(){

			var allwords = ['Choose your language',
					'Start',
					'Try again', 
					'Collections', 
					'Statistics',
					'Options', 
					'About',
					'Options',
					'Save and go back',
					'Statistics',
					'Your performance / Last 10 attempts',
					'Collections',
					'Trophies collected',
					'High Score: ',
					'The easiest way to boost your vocabulary is here!',
					'We have introduced 7 different languages that are easily updatable',
					'Simply choose your native language and navigate to the languaeg which you would like to learn'
					]

	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'I know'
		description2.textContent = 'I want to learn'

		//main modal
		gameScore.firstChild.textContent = 'Score:'

		//stats view
		q('tspan').textContent = 'Sequential performance'
    	q('.highcharts-yaxis-title').textContent = 'Points'

    	return false;


	}

	//polish
		var polish = function(){

			var allwords = ['Wybierz język',
					'Rozpocznij',
					'Spróbuj ponownie', 
					'Kolekcje', 
					'Statystyki',
					'Opcje', 
					'O aplikacji',
					'Opcje',
					'Zapisz i wróć',
					'Statystyki',
					'Twoje wykonanie / Ostatnie 10 prób',
					'Kolekcje',
					'Trofea',
					'Twój rekord: ',
					'Najprostszy sposób, aby wzbogacić swoje słownictwo jest tutaj!',
					'Wprowadziliśmy 7 różnych języków, które są łatwe w aktualizacji.',
					'Po prostu wybierz swój język ojczysty i przejdź do języka, którego chcesz się uczyć.'
					]

	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Znam'
		description2.textContent = 'Chciałbym się uczyć'

		//main modal
		gameScore.firstChild.textContent = 'Puknty:'

		//stats view
		q('tspan').textContent = 'Ilość wykonań';
    	q('.highcharts-yaxis-title').textContent = 'Puknty'

    	return false;


	}

		//french
		var french = function(){

			var allwords = ['Choisissez votre langue',
					'Démarrer',
					'Reéssayer', 
					'Collection', 
					'Statistiques',
					'Options', 
					'A propos',
					'Options',
					'Sauvegarder et retourner',
					'Statistiques',
					'Votre performance/ derniers 10 essais',
					'Collection',
					'Trophées',
					'Meilleur score: ',
					"La meilleure façon d'améliorer votre vocabulaire est arrivée!",
					'Nous avons introduit 7 langues différentes faciles à mettre à jour.',
					'Choisissez simplement votre langue maternelle et naviguez et naviquez pour sélectionner la langue que vous souhaitez apprendre'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Je connais', 

		description2.textContent = " J'aimerais apprendre "

		//main modal
		gameScore.firstChild.textContent = 'Points:'

		//stats view
		q('tspan').textContent = 'Performances séquentielles';
    	q('.highcharts-yaxis-title').textContent = 'Points'

    	return false;


	}

	//german
		var german = function(){

			var allwords = ['Sprache auswählen',
					'Das Spiel beginnen ',
					'Es noch mal probieren', 
					'Sammlungen', 
					'Statistiken',
					'Möglichkeiten', 
					'Über uns',
					'Möglichkeiten',
					'Speichern und zurückgehen',
					'Statistiken',
					'Deine Leistung / Die zehn letzten Versuche',
					'Sammlungen',
					'Gesammelte Trophäen',
					'Höchste Punktzahl: ',
					"Hier ist die einfachste Weise deine Vokabel zu verstärken!",
					'Wir haben sieben verschiedene Sprachen eingeleitet, die einfach zu austauschen sind.',
					'Einfach deine Muttersprache wählen und die Sprache, die du lernen möchtest, drücken.'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Ich kenne', 

		description2.textContent = " Ich möchte lernen "

		//main modal
		gameScore.firstChild.textContent = 'Punkte:'

		//stats view
		q('tspan').textContent = 'Sequentielle Leistung';
    	q('.highcharts-yaxis-title').textContent = 'Punkte'

    	return false;


	}

//spanish
		var spanish = function(){

			var allwords = ['Escoge un idioma',
					'Comenzar',
					'Prueba otra vez', 
					'Colecciones', 
					'Estadísticas',
					'Opciones', 
					'Sobre Nosotros',
					'Opciones',
					'Guardar y volver',
					'Estadísticas',
					'Rendimiento / últimos 10 intentos',
					'Colecciones',
					'Trofeos ganados',
					'Puntuación: ',
					"¡La mejor manera de impulsar tu vocabulario está aquí!",
					'Hemos introducido 7 idiomas diferentes intercambiables.',
					'Simplemente elige tu lengua materna y el idioma que quieres aprender.'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Yo sé', 

		description2.textContent = " Me gustaría aprender "

		//main modal
		gameScore.firstChild.textContent = 'Puntos:'

		//stats view
		q('tspan').textContent = 'Rendimiento secuencial';
    	q('.highcharts-yaxis-title').textContent = 'Puntos'

    	return false;


	}

//italian
		var italian = function(){

			var allwords = ['Scegli la tua lingua',
					'Inizio',
					'Prova ancora', 
					'Collezioni', 
					'Statistiche',
					'Opzioni', 
					'A proposito di questa app',
					'Opzioni',
					'Salvare e tornare indietro',
					'Statistiche',
					'La tua performance / Ultimi 10 tentativi',
					'Collezioni',
					'Trofei raccolti',
					'Punteggio alto: ',
					'Il modo più semplice per aumentare il vostro vocabolario è questo!',
					'Abbiamo introdotto 7 lingue differenti che sono facilmente aggiornabili.',
					'Basta scegliere la vostra lingua madre e passare alla lingua che si desidera imparare.'
					]


	for( var i=0 ;i<allcontent.length;)
	    allcontent[i].textContent = allwords[i++];

		//options section
		description1.textContent = 'Lo so', 

		description2.textContent = "Vorrei imparare "

		//main modal
		gameScore.firstChild.textContent = 'Punti:'

		//stats view
		q('tspan').textContent = 'Prestazioni sequenziali';
    	q('.highcharts-yaxis-title').textContent = 'Punti'

    	return false;


	}





	
}

return window.autotranslate = autotranslate;

	
})()
!(function() {
    "use strict";
    
// ----------------------------------------------------
// Basic helper functions //
//-----------------------------------------------------
        
var basic = {}
basic.init = function(){

// ----------------------------------------------------
// Get random number between A and B //
//-----------------------------------------------------

basic.getRandomNumber = function(a, b) {
   
    return Math.floor(Math.random() * ( b - a + 1)) + a;

};



// ----------------------------------------------------
// randomize function Fisher–Yates algorithm //
//-----------------------------------------------------


basic.shuffle = function(array) {
    
    var m = array.length, t, i;
    
    // While there remain elements to shuffle…
    while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
      
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    
    }
    
    return array;
};



}

return window.basic = basic;		
		
		
})();





!(function() {
	"use strict";
// ----------------------------------------------------
// Bonus module //
//-----------------------------------------------------

var bonus = {}
bonus.init = function(){
bonus.name = "bonus"	

// store number of correct answers
var correctAnswers = 0;
bonus.answersToActivateBonus = null;

bonus.value = 0;
bonus.active = false;

// ----------------------------------------------------
// Add event listeners //
//-----------------------------------------------------

core.eventBus.on("correctAnswer",function(){
	
	correctAnswers++
	
	if (correctAnswers >= bonus.answersToActivateBonus) {
		
		if (bonus.active == false) {
			
			
  			 message.show("<img class='glow' src='img/magical_script.png'/>")
  			 document.querySelector('.magical_script').style.opacity = 1;

			bonus.active = true;

		
		}
		
		bonus.value = bonus.value + 50;

	}

});

core.eventBus.on("wrongAnswer",function(){
	
	correctAnswers = 0;
	bonus.value = 0;
	bonus.active = false;

});



// ----------------------------------------------------
// Push score modificator to core //
//-----------------------------------------------------

var scoreModificator = { 
	
	name:"bonus", 
	calc: function(){
		
		return Math.floor(bonus.value)

	}
}

core.scoreModificators.push(scoreModificator);


// ----------------------------------------------------
// Register module levels //
//-----------------------------------------------------


var levelsConfig = [
	
	{answersToActivateBonus:3},
	{answersToActivateBonus:5},
	{answersToActivateBonus:8},
	{answersToActivateBonus:10}
	
]

levels.registerModule(bonus,levelsConfig)


}

return window.bonus = bonus


})();
!(function(){
	"use strict";
	
var collections = {}

collections.init = function(){

//show high score
// var userscores = localStorage.getItem('usersLastScores')

//  if (userscores){
	
// 	var numArray = userscores.match(/\d+/g); 

// 	numArray.sort(function(a,b){return a-b});

// 	var largest = numArray[numArray.length - 1];

// 	$('.highScore span').text(largest)

// }
	
	// var crowns = ['<img src="img/crown.png"/>']

	// if (score.value > 10){
	// 	crowns.push('<img src="img/crown.png"/>')
	// }


	// for(var i=0; i<crowns.length; i++){

	// 	var allcrowns = crowns[i]
	// 	$('#trophies').append(allcrowns)
	// }


}


return window.collections = collections;

})();
!(function() {
	"use strict";
// ----------------------------------------------------
// Core is connector between modules //
//-----------------------------------------------------

var core = {}
core.init = function(){

core.game = {}


// ----------------------------------------------------
// Game status, Did player start the game? 
//-----------------------------------------------------

var isPlaying = false;

core.game.isPlaying = function(){

	return isPlaying;
}

core.game.start = function(){

	isPlaying = true;

}

core.game.end = function(){

	isPlaying = false;

}




core.eventBus = $(window)

// ----------------------------------------------------
// Score modificators  //
//-----------------------------------------------------

core.scoreModificators = []

core.getScoreModificators = function(){
	
	var value = 0
	
	for (var x=0; x<core.scoreModificators.length; x++) {
		
		 	value += core.scoreModificators[x].calc()
	
	}
	
	return value
	
}

}

return window.core = core


})();
!(function(){
    "use strict";
var db = {}

db.init = function (){

    //for version 2
    function genre(level){
        this.level = level;
    }


db.words = 

[{
        "pl": "numer kierunkowy",
        "en": "code",
        "gr": "κωδικός",
        "es": "código",
        "fr": "code",
        "it": "codice",
        "de": "der Code"
    },
    {
        "pl": "telekonferencja",
        "en": "conference call",
        "gr": "κλήση συνδιάσκεψης",
        "es": "conferencia",
        "fr": "conférence téléphonique",
        "it": "teleconferenza",
        "de": "das Konferenzgespräch"
    },
    {
        "pl": "połączenie",
        "en": "connection",
        "gr": "σύνδεση",
        "es": "conexión",
        "fr": "connection",
        "it": "connessione",
        "de": "die Verbindung"
    },
    {
        "pl": "poczta głosowa",
        "en": "voice mail",
        "gr": "φωνοκιβώτιο",
        "es": "correo de voz",
        "fr": "messagerie vocale",
        "it": "segreteria telefonica",
        "de": "die Sprachnachricht"
    },
    {
        "pl": "biuro",
        "en": "office",
        "gr": "γραφείο",
        "es": "oficina",
        "fr": "bureau",
        "it": "ufficio",
        "de": "das Büro"
    },
    {
        "pl": "korupcja",
        "en": "corruption",
        "gr": "διαφθορά",
        "es": "corrupción",
        "fr": "corruption",
        "it": "corruzione",
        "de": "die Korruption"
    },
    {
        "pl": "faktura",
        "en": "invoice",
        "gr": "τιμολόγιο",
        "es": "factura",
        "fr": "facture",
        "it": "fattura",
        "de": "die Rechnung"
    },
    {
        "pl": "podatek",
        "en": "tax",
        "gr": "φόρος",
        "es": "impuesto",
        "fr": "taxe",
        "it": "tassa",
        "de": "die Steuer"
    },
    {
        "pl": "firma",
        "en": "company",
        "gr": "εταιρεία",
        "es": "empresa",
        "fr": "entreprise",
        "it": "impresa",
        "de": "die Firma"
    },
    {
        "pl": "pracownik",
        "en": "employee",
        "gr": "υπάλληλος",
        "es": "empleado",
        "fr": "employé",
        "it": "impiegato",
        "de": "der Angestellter"
    },
    {
        "pl": "handel",
        "en": "trade",
        "gr": "εμπόριο",
        "es": "comercio",
        "fr": "commerce",
        "it": "scambio",
        "de": "der Handel"
    },
    {
        "pl": "klient",
        "en": "customer",
        "gr": "πελάτης",
        "es": "cliente",
        "fr": "client",
        "it": "cliente",
        "de": "der Kunde"
    },
    {
        "pl": "zakup",
        "en": "purchase",
        "gr": "αγορά",
        "es": "compra",
        "fr": "achat",
        "it": "acquisto",
        "de": "der Einkauf"
    },
    {
        "pl": "prowizja",
        "en": "commission",
        "gr": "επιτροπή",
        "es": "comisión",
        "fr": "commission",
        "it": "commissione",
        "de": "die Provision"
    },
    {
        "pl": "dyrektor",
        "en": "director",
        "gr": "διευθυντής",
        "es": "director",
        "fr": "directeur",
        "it": "direttore",
        "de": "der Regisseur"
    },
    {
        "pl": "oferta",
        "en": "offer",
        "gr": "πρόταση συμφωνίας",
        "es": "oferta",
        "fr": "offre",
        "it": "offerta",
        "de": "das Angebot"
    },
    {
        "pl": "wynagrodzenie",
        "en": "salary",
        "gr": "μισθός",
        "es": "salario",
        "fr": "salaire",
        "it": "salario",
        "de": "das Gehalt"
    },
    {
        "pl": "cel",
        "en": "goal",
        "gr": "στόχος",
        "es": "meta",
        "fr": "but",
        "it": "obiettivo",
        "de": "das Ziel"
    },
    {
        "pl": "wzrost",
        "en": "increase",
        "gr": "αύξηση",
        "es": "aumento",
        "fr": "augmentation",
        "it": "aumento",
        "de": "der Anstieg"
    },
    {
        "pl": "ryzyko",
        "en": "risk",
        "gr": "ρίσκο",
        "es": "riesgo",
        "fr": "risque",
        "it": "rischio",
        "de": "das Risiko"
    },
    {
        "pl": "podpis",
        "en": "signature",
        "gr": "υπογραφή",
        "es": "firma",
        "fr": "signature",
        "it": "firma",
        "de": "die Unterschrift"
    },
    {
        "pl": "koszty",
        "en": "costs",
        "gr": "κόστος",
        "es": "costos",
        "fr": "frais",
        "it": "costi",
        "de": "die Kosten"
    },
    {
        "pl": "cena",
        "en": "price",
        "gr": "τιμή",
        "es": "precio",
        "fr": "prix",
        "it": "prezzo",
        "de": "der Preis"
    },
    {
        "pl": "sukces",
        "en": "success",
        "gr": "επιτυχία",
        "es": "éxito",
        "fr": "succès",
        "it": "successo",
        "de": "der Erfolg"
    },
    {
        "pl": "wsparcie",
        "en": "support",
        "gr": "υποστήριξη",
        "es": "apoyo",
        "fr": "soutien",
        "it": "supporto",
        "de": "die Unterstützung"
    },
    {
        "pl": "strata",
        "en": "loss",
        "gr": "απώλεια",
        "es": "pérdida",
        "fr": "perte",
        "it": "perdita",
        "de": "der Verlust"
    },
    {
        "pl": "marka",
        "en": "brand",
        "gr": "μάρκα",
        "es": "marca",
        "fr": "marque",
        "it": "marchio",
        "de": "die Marke"
    },
    {
        "pl": "harmonogram",
        "en": "schedule",
        "gr": "πρόγραμμα",
        "es": "horario",
        "fr": "horaire",
        "it": "programma",
        "de": "der Zeitplan"
    },
    {
        "pl": "doradztwo finansowe",
        "en": "financial advising",
        "gr": "χρηματοοικονομικές συμβουλές",
        "es": "asesoramiento financiero",
        "fr": "conseil financier",
        "it": "consulenza finanziaria",
        "de": "die Finanzberatung"
    },
    {
        "pl": "premiera",
        "en": "launch",
        "gr": "πρεμιέρα",
        "es": "lanzamiento",
        "fr": "lancement",
        "it": "lancio",
        "de": "die Einführung"
    },
    {
        "pl": "konto",
        "en": "account",
        "gr": "λογαριασμός",
        "es": "cuenta",
        "fr": "compte",
        "it": "conto",
        "de": "das Konto"
    },
    {
        "pl": "nabywca",
        "en": "buyer",
        "gr": "αγοραστής",
        "es": "comprador",
        "fr": "acheteur",
        "it": "acquirente",
        "de": "der Käufer"
    },
    {
        "pl": "katalog",
        "en": "catalogue",
        "gr": "κατάλογος",
        "es": "catálogo",
        "fr": "catalogue",
        "it": "catalogo",
        "de": "der Katalog"
    },
    {
        "pl": "certyfikat",
        "en": "certificate",
        "gr": "πιστοποιητικό",
        "es": "certificado",
        "fr": "certificat",
        "it": "certificate",
        "de": "das Zertifikat"
    },
    {
        "pl": "konkurent",
        "en": "competitor",
        "gr": "ανταγωνιστής",
        "es": "competidor",
        "fr": "concurrent",
        "it": "concorrenza",
        "de": "der Konkurent"
    },
    {
        "pl": "kooperacja",
        "en": "co-operation",
        "gr": "συνεργασία",
        "es": "co-operación",
        "fr": "coopération",
        "it": "collaborazione",
        "de": "die Zusammenarbeit"
    },
    {
        "pl": "handel",
        "en": "commerce",
        "gr": "εμπόριο",
        "es": "comercio",
        "fr": "commerce",
        "it": "commercio",
        "de": "der Handel"
    },
    {
        "pl": "konferencja",
        "en": "conference",
        "gr": "διάσκεψη",
        "es": "conferencia",
        "fr": "conférence",
        "it": "conferenza",
        "de": "die Konferenz"
    },
    {
        "pl": "kontrakt",
        "en": "contract",
        "gr": "contract",
        "es": "contracto",
        "fr": "contrat",
        "it": "contratto",
        "de": "der Vertrag"
    },
    {
        "pl": "ekonomiczny",
        "en": "economical",
        "gr": "οικονομικός",
        "es": "económico",
        "fr": "économique",
        "it": "economico",
        "de": "wirtschaftlich"
    },
    {
        "pl": "wymiana",
        "en": "exchange",
        "gr": "συνάλλαγμα",
        "es": "intercambio",
        "fr": "échange",
        "it": "scambio",
        "de": "der Austausch"
    },
    {
        "pl": "wspaniałe",
        "en": "gorgeous",
        "gr": "υπέροχο",
        "es": "maravilloso",
        "fr": "merveilleux",
        "it": "favoloso",
        "de": "wunderschön"
    },
    {
        "pl": "głośny",
        "en": "noisy",
        "gr": "θορυβώδης",
        "es": "ruidoso",
        "fr": "bruyant",
        "it": "rumoroso",
        "de": "laut"
    },
    {
        "pl": "wprowadzać",
        "en": "introduce",
        "gr": "παρουσιάζω",
        "es": "introducir",
        "fr": "introduire",
        "it": "introduce",
        "de": "einleiten"
    },
    {
        "pl": "obskurny",
        "en": "sordid",
        "gr": "ρυπαρός",
        "es": "sórdido",
        "fr": "sordide",
        "it": "squallido",
        "de": "schäbig"
    },
    {
        "pl": "jadalnia",
        "en": "lunchroom",
        "gr": "εστιατόριο ελαφρών φαγητών",
        "es": "comedor",
        "fr": "salle à manger",
        "it": "mensa",
        "de": "die Kantine"
    },
    {
        "pl": "fiolet",
        "en": "purple",
        "gr": "μωβ",
        "es": "púrpura",
        "fr": "violet",
        "it": "viola",
        "de": "violett"
    },
    {
        "pl": "jaskinia",
        "en": "cave",
        "gr": "σπηλιά",
        "es": "cueva",
        "fr": "grotte",
        "it": "caverna",
        "de": "die Höhle"
    },
    {
        "pl": "ciasne",
        "en": "tight",
        "gr": "σφιχτός",
        "es": "apretado",
        "fr": "serré",
        "it": "stretto",
        "de": "eng"
    },
    {
        "pl": "sługa",
        "en": "servant",
        "gr": "υπηρέτης",
        "es": "sirviente",
        "fr": "serviteur",
        "it": "servo",
        "de": "der Diener"
    },
    {
        "pl": "waga",
        "en": "weight",
        "gr": "βάρος",
        "es": "peso",
        "fr": "poids",
        "it": "peso",
        "de": "das Gewicht"
    },
    {
        "pl": "północ",
        "en": "north",
        "gr": "βόρειος",
        "es": "norte",
        "fr": "nord",
        "it": "nord",
        "de": "der Norden"
    },
    {
        "pl": "oswajać",
        "en": "tame",
        "gr": "εξημερώνω",
        "es": "domesticar",
        "fr": "apprivoiser",
        "it": "addomesticato",
        "de": "zahm"
    },
    {
        "pl": "zazdrosny",
        "en": "jealous",
        "gr": "ζηλιάρης",
        "es": "celoso",
        "fr": "jaloux",
        "it": "geloso",
        "de": "eifersüchtig"
    },
    {
        "pl": "odkrycie",
        "en": "discovery",
        "gr": "ανακάλυψη",
        "es": "descubrimiento",
        "fr": "découverte",
        "it": "scoperta",
        "de": "die Entdeckung"
    },
    {
        "pl": "garnitur",
        "en": "suit",
        "gr": "κοστούμι",
        "es": "traje",
        "fr": "costume",
        "it": "abito",
        "de": "der Anzug"
    },
    {
        "pl": "pompować",
        "en": "pump",
        "gr": "αντλία",
        "es": "surtidor",
        "fr": "pompe",
        "it": "pompa",
        "de": "die Pumpe"
    },
    {
        "pl": "zaczepny",
        "en": "truculent",
        "gr": "θηριώδης",
        "es": "agresivo",
        "fr": "agressif",
        "it": "battagliero",
        "de": "totzig"
    },
    {
        "pl": "wspominający",
        "en": "reminiscent",
        "gr": "αναπολών",
        "es": "recuerda",
        "fr": "évocateur",
        "it": "rievocativo",
        "de": "errinernend"
    },
    {
        "pl": "słony",
        "en": "salty",
        "gr": "αλμυρό",
        "es": "salgado",
        "fr": "salé",
        "it": "salato",
        "de": "salzig"
    },
    {
        "pl": "czujny",
        "en": "alert",
        "gr": "συναγερμός",
        "es": "alerta",
        "fr": "alerte",
        "it": "allerta",
        "de": "wachsam"
    },
    {
        "pl": "graniczny",
        "en": "boundary",
        "gr": "όριο",
        "es": "límite",
        "fr": "limite",
        "it": "limite",
        "de": "die Abgrenzung"
    },
    {
        "pl": "temperamnet",
        "en": "temper",
        "gr": "ιδιοσυγκρασία",
        "es": "genio",
        "fr": "huneur",
        "it": "temperamento",
        "de": "das Temperament"
    },
    {
        "pl": "ochrypły",
        "en": "husky",
        "gr": "βραχνός",
        "es": "ronco",
        "fr": "rauque",
        "it": "rauco",
        "de": "rauchig"
    },
    {
        "pl": "imię",
        "en": "name",
        "gr": "όνομα",
        "es": "nombre",
        "fr": "nom",
        "it": "nome",
        "de": "die Name"
    },
    {
        "pl": "ospały",
        "en": "languid",
        "gr": "νωθρός",
        "es": "lánguido",
        "fr": "léthargique",
        "it": "languido",
        "de": "träge"
    },
    {
        "pl": "uwaga, notatka",
        "en": "note",
        "gr": "σημείωση",
        "es": "nota",
        "fr": "note",
        "it": "nota",
        "de": "die Notiz"
    },
    {
        "pl": "wykształcony, hodowanych",
        "en": "cultured",
        "gr": "καλλιεργημένος",
        "es": "culto",
        "fr": "cultivé",
        "it": "colto",
        "de": "gebildet"
    },
    {
        "pl": "uchwycenie",
        "en": "grip",
        "gr": "πιάσιμο",
        "es": "apretón",
        "fr": "prise",
        "it": "presa",
        "de": "der Griff"
    },
    {
        "pl": "cichy",
        "en": "silent",
        "gr": "σιωπηλό",
        "es": "silencioso",
        "fr": "silencieux",
        "it": "silenzioso",
        "de": "still"
    },
    {
        "pl": "powtarzać",
        "en": "repeat",
        "gr": "επανάληψη",
        "es": "repetición",
        "fr": "répétition",
        "it": "ripetere",
        "de": "wiederholen"
    },
    {
        "pl": "wykryć",
        "en": "detect",
        "gr": "ανίχνευση",
        "es": "detectar",
        "fr": "détecter",
        "it": "rilevare",
        "de": "aufspüren"
    },
    {
        "pl": "ekspansja",
        "en": "expansion",
        "gr": "επέκταση",
        "es": "expansión",
        "fr": "expansion",
        "it": "espansione",
        "de": "die Erweiterung"
    },
    {
        "pl": "brzydki",
        "en": "ugly",
        "gr": "άσχημος",
        "es": "feo",
        "fr": "laid",
        "it": "orribile",
        "de": "hässlich"
    },
    {
        "pl": "wyspa",
        "en": "island",
        "gr": "νησί",
        "es": "isla",
        "fr": "île",
        "it": "isola",
        "de": "die Insel"
    },
    {
        "pl": "dziwaczny",
        "en": "bizarre",
        "gr": "παράξενο",
        "es": "extraño",
        "fr": "bizarre",
        "it": "bizzarro",
        "de": "seltsam"
    },
    {
        "pl": "przyjemny",
        "en": "pleasant",
        "gr": "ευχάριστο",
        "es": "agradable",
        "fr": "agréable",
        "it": "piacevole",
        "de": "freundlich"
    },
    {
        "pl": "sztuczka",
        "en": "trick",
        "gr": "τέχνασμα",
        "es": "truco",
        "fr": "astuce",
        "it": "trucco",
        "de": "der Trick"
    },
    {
        "pl": "zapach",
        "en": "smell",
        "gr": "μυρωδιά",
        "es": "olor",
        "fr": "odeur",
        "it": "odore",
        "de": "die Geruch"
    },
    {
        "pl": "uzdrowić",
        "en": "heal",
        "gr": "επούλωση",
        "es": "sanar",
        "fr": "soigner",
        "it": "collaborazione",
        "de": "heilen"
    },
    {
        "pl": "siniak",
        "en": "bruise",
        "gr": "μώλωπας",
        "es": "contusión",
        "fr": "contusion",
        "it": "ematoma",
        "de": "der Bluterguss"
    },
    {
        "pl": "dostawa",
        "en": "supply",
        "gr": "προμήθεια",
        "es": "suministro",
        "fr": "approvisionnement",
        "it": "scorta",
        "de": "die Lieferung"
    },
    {
        "pl": "brakujace",
        "en": "lacking",
        "gr": "ελλιπής ",
        "es": "carente",
        "fr": "déficient",
        "it": "carente",
        "de": "fehlend"
    },
    {
        "pl": "grzmot",
        "en": "thunder",
        "gr": "βροντή",
        "es": "trueno",
        "fr": "tonnerre",
        "it": "tuono",
        "de": "der Donner"
    },
    {
        "pl": "strój",
        "en": "apparel",
        "gr": "ενδύματα",
        "es": "vestido",
        "fr": "vêtement",
        "it": "abbigliamento",
        "de": "die Kleidung"
    },
    {
        "pl": "jowialny",
        "en": "debonair",
        "gr": "ευγενής",
        "es": "elegante",
        "fr": "élégant",
        "it": "disinvolto",
        "de": "charmant"
    },
    {
        "pl": "niezdrowy",
        "en": "unhealthy",
        "gr": "ανθυγιεινό",
        "es": "insalubre",
        "fr": "maladif",
        "it": "malsano",
        "de": "ungesund"
    },
    {
        "pl": "ponury",
        "en": "dreary",
        "gr": "θλιβερό",
        "es": "triste",
        "fr": "triste",
        "it": "tetro",
        "de": "trostlos"
    },
    {
        "pl": "deska",
        "en": "board",
        "gr": "χαρτόνι",
        "es": "tablero",
        "fr": "tableau",
        "it": "tavola",
        "de": "der Rat"
    },
    {
        "pl": "ubawinie",
        "en": "amusement",
        "gr": "διασκέδαση",
        "es": "diversión",
        "fr": "amusement",
        "it": "divertimento",
        "de": "die Unterhaltung"
    },
    {
        "pl": "ciekawski",
        "en": "inquisitive",
        "gr": "περίεργος",
        "es": "inquisitivo",
        "fr": "curieux",
        "it": "inquisitorio",
        "de": "neurgierig"
    },
    {
        "pl": "polityczny",
        "en": "political",
        "gr": "πολιτικό",
        "es": "político",
        "fr": "politique",
        "it": "politico",
        "de": "politisch"
    },
    {
        "pl": "soczystty",
        "en": "juicy",
        "gr": "χυμώδης",
        "es": "jugoso",
        "fr": "juteux",
        "it": "succoso",
        "de": "saftig"
    },
    {
        "pl": "wzruszać ramionami",
        "en": "shrug",
        "gr": "ύψωση των ώμων",
        "es": "bolero",
        "fr": "boléro",
        "it": "coprispalle",
        "de": "zucken"
    },
    {
        "pl": "próba",
        "en": "attempt",
        "gr": "απόπειρα",
        "es": "intento",
        "fr": "tentative",
        "it": "tentativo",
        "de": "der Versuch"
    },
    {
        "pl": "pójść na emeryturę",
        "en": "retire",
        "gr": "σύνταξη",
        "es": "retirarse",
        "fr": "prendre sa retraite",
        "it": "andare in pensione",
        "de": "ausscheiden"
    },
    {
        "pl": "ambitny",
        "en": "ambitious",
        "gr": "φιλόδοξος",
        "es": "ambicioso",
        "fr": "ambitieux",
        "it": "ambizioso",
        "de": "ehrgeizigg"
    },
    {
        "pl": "kolczasty",
        "en": "spiky",
        "gr": "αιχμηρό",
        "es": "puntiagudo",
        "fr": "en épis",
        "it": "scontroso",
        "de": "stachelig"
    },
    {
        "pl": "zwierzę domowe",
        "en": "pet",
        "gr": "κατοικίδιο ζώο",
        "es": "mascota",
        "fr": "animal de compagnie",
        "it": "animale domestico",
        "de": "das Haustier"
    },
    {
        "pl": "krok, schodek",
        "en": "step",
        "gr": "βήμα",
        "es": "paso",
        "fr": "pas",
        "it": "passo",
        "de": "der Schritt"
    },
    {
        "pl": "mały",
        "en": "small",
        "gr": "μικρό",
        "es": "pequeño",
        "fr": "petit",
        "it": "piccolo",
        "de": "klein"
    },
    {
        "pl": "brzęczenie",
        "en": "buzz",
        "gr": "τρίξιμο ",
        "es": "zumbido",
        "fr": "bourdonnement",
        "it": "ronzio",
        "de": "die Aufregung"
    },
    {
        "pl": "normalny",
        "en": "normal",
        "gr": "κανονικό",
        "es": "normal",
        "fr": "normal",
        "it": "normale",
        "de": "normal"
    },
    {
        "pl": "zabawiać",
        "en": "amuse",
        "gr": "διασκεδάζω",
        "es": "divertir",
        "fr": "se divertir",
        "it": "intrattenere",
        "de": "amüsieren"
    },
    {
        "pl": "roślina",
        "en": "plant",
        "gr": "φυτό",
        "es": "planta",
        "fr": "plante",
        "it": "pianta",
        "de": "die Pflanze"
    },
    {
        "pl": "bezcelowy",
        "en": "pointless",
        "gr": "δεν έχει νόημα",
        "es": "inútil",
        "fr": "inutil",
        "it": "senza scopo",
        "de": "sinnlos"
    },
    {
        "pl": "szept",
        "en": "whisper",
        "gr": "ψίθυρος",
        "es": "susurro",
        "fr": "murmure",
        "it": "sussurro",
        "de": "flüstern"
    },
    {
        "pl": "cieniutki",
        "en": "tenuous",
        "gr": " κομψός",
        "es": "tenue",
        "fr": "ténu",
        "it": "tenue",
        "de": "dürftig"
    },
    {
        "pl": "szorować",
        "en": "scrub",
        "gr": "ακύρωση",
        "es": "fregar",
        "fr": "astiquer",
        "it": "strofinare",
        "de": "scheuern"
    },
    {
        "pl": "zniesmaczony, oburzony",
        "en": "disgusted",
        "gr": "αηδιάζων",
        "es": "disgustado",
        "fr": "dégoûter",
        "it": "disgustato",
        "de": "angeekelt"
    },
    {
        "pl": "sprośny",
        "en": "lewd",
        "gr": "έκφυλος",
        "es": "lascivo",
        "fr": "lascif",
        "it": "lascivo",
        "de": "anzüglich"
    },
    {
        "pl": "pogmatwany",
        "en": "jumbled",
        "gr": "μπερδεμένες",
        "es": "embarullado",
        "fr": "désordonné",
        "it": "mescolato",
        "de": "ungeordnet"
    },
    {
        "pl": "nędzny",
        "en": "ratty",
        "gr": "τσαντισμένος",
        "es": "andrajoso",
        "fr": "miteux",
        "it": "fatiscente",
        "de": "schäbig"
    },
    {
        "pl": "niebo",
        "en": "sky",
        "gr": "ουρανός",
        "es": "cielo",
        "fr": "ciel",
        "it": "cielo",
        "de": "der Himmel"
    },
    {
        "pl": "wojowniczy",
        "en": "combative",
        "gr": "μαχητικός",
        "es": "combativo",
        "fr": "combattif",
        "it": "combattivo",
        "de": "aggressiv"
    },
    {
        "pl": "dziura",
        "en": "hole",
        "gr": "τρύπα",
        "es": "agujero",
        "fr": "trou",
        "it": "buco",
        "de": "das Loch"
    },
    {
        "pl": "taniec",
        "en": "dance",
        "gr": "χορός",
        "es": "danza",
        "fr": "dance",
        "it": "danza",
        "de": "der Tanz"
    },
    {
        "pl": "gorący",
        "en": "hot",
        "gr": "καυτό",
        "es": "caliente",
        "fr": "chaud",
        "it": "caldo",
        "de": "heiß"
    },
    {
        "pl": "opłakiwać",
        "en": "mourn",
        "gr": "θρηνώ",
        "es": "llorar",
        "fr": "pleurer",
        "it": "compiangere",
        "de": "trauern"
    },
    {
        "pl": "brama",
        "en": "gate",
        "gr": "πύλη",
        "es": "puerta",
        "fr": "porte",
        "it": "cancello",
        "de": "das Tor"
    },
    {
        "pl": "zatrudniać",
        "en": "employ",
        "gr": "προσλαμβάνω",
        "es": "emplear",
        "fr": "employer",
        "it": "impiegare",
        "de": "die Beschäftigung"
    },
    {
        "pl": "tchórzliwy",
        "en": "cowardly",
        "gr": "ανανδρία ",
        "es": "cobarde",
        "fr": "lâche",
        "it": "codardo",
        "de": "in feiger Weise"
    },
    {
        "pl": "guzkowaty",
        "en": "lumpy",
        "gr": "άμορφο",
        "es": "grumoso",
        "fr": "grumeux",
        "it": "grumoso",
        "de": "klumpig"
    },
    {
        "pl": "sygnał",
        "en": "signal",
        "gr": "σήμα",
        "es": "señal",
        "fr": "signal",
        "it": "segnale",
        "de": "das Signal"
    },
    {
        "pl": "szczery",
        "en": "sincere",
        "gr": "ειλικρινής",
        "es": "sincero",
        "fr": "sincère",
        "it": "sincero",
        "de": "aufrichtig"
    },
    {
        "pl": "potulny",
        "en": "meek",
        "gr": "ήμερος",
        "es": "manso",
        "fr": "docile",
        "it": "mite",
        "de": "demütig"
    },
    {
        "pl": "płaczliwy",
        "en": "tearful",
        "gr": "δακρυσμένος",
        "es": "lloroso",
        "fr": "éploré",
        "it": "in lacrime",
        "de": "weinerlich"
    },
    {
        "pl": "sól",
        "en": "salt",
        "gr": "αλάτι",
        "es": "sal",
        "fr": "sel",
        "it": "sale",
        "de": "das Salz"
    },
    {
        "pl": "unikatowy",
        "en": "unique",
        "gr": "μοναδικό",
        "es": "único",
        "fr": "unique",
        "it": "unico",
        "de": "einzigartig"
    },
    {
        "pl": "lato",
        "en": "summer",
        "gr": "καλοκαίρι",
        "es": "verano",
        "fr": "été",
        "it": "estate",
        "de": "der Sommer"
    },
    {
        "pl": "bezgłośny",
        "en": "noiseless",
        "gr": "αθόρυβος",
        "es": "silencioso",
        "fr": "silencieux",
        "it": "silenzioso",
        "de": "lautlos"
    },
    {
        "pl": "popołudnie",
        "en": "afternoon",
        "gr": "απόγευμα",
        "es": "tarde",
        "fr": "après-midi",
        "it": "pomeriggio",
        "de": "der Nachmittag"
    },
    {
        "pl": "zjednoczyć",
        "en": "unite",
        "gr": "ενώνουν",
        "es": "unir",
        "fr": "unir",
        "it": "unire",
        "de": "vereinigen"
    },
    {
        "pl": "moc",
        "en": "power",
        "gr": "ισχύς",
        "es": "poder",
        "fr": "pouvoir",
        "it": "potenza",
        "de": "die Macht"
    },
    {
        "pl": "uchwyt",
        "en": "handle",
        "gr": "λαβή",
        "es": "manejar",
        "fr": "manipuler",
        "it": "gestire",
        "de": "erledigen"
    },
    {
        "pl": "regularny",
        "en": "regular",
        "gr": "τακτικός",
        "es": "regular",
        "fr": "régulier",
        "it": "regolare",
        "de": "regelmäßig"
    },
    {
        "pl": "okrutny",
        "en": "cruel",
        "gr": "σκληρός",
        "es": "cruel",
        "fr": "cruel",
        "it": "crudele",
        "de": "grausam"
    },
    {
        "pl": "kuchenka",
        "en": "stove",
        "gr": "στόφα",
        "es": "estufa",
        "fr": "four",
        "it": "fornello",
        "de": "der Ofen"
    },
    {
        "pl": "samochód",
        "en": "car",
        "gr": "αυτοκίνητο",
        "es": "coche",
        "fr": "voiture",
        "it": "automobile",
        "de": "das Auto"
    },
    {
        "pl": "kłamliwy",
        "en": "lying",
        "gr": "ψεύδη",
        "es": "acostado",
        "fr": "allongé",
        "it": "mentendo",
        "de": "lügend"
    },
    {
        "pl": "długoterminowy",
        "en": "long-term",
        "gr": "μακροπρόθεσμα",
        "es": "a largo plazo",
        "fr": "à long terme",
        "it": "a lungo termine",
        "de": "langfristig"
    },
    {
        "pl": "niegrzeczny",
        "en": "naughty",
        "gr": "άτακτος",
        "es": "travieso",
        "fr": "vilain",
        "it": "dispettoso",
        "de": "unartig"
    },
    {
        "pl": "szok",
        "en": "shock",
        "gr": "σοκ",
        "es": "choque",
        "fr": "choc",
        "it": "shock",
        "de": "der Schock"
    },
    {
        "pl": "żeński",
        "en": "female",
        "gr": "θηλυκός",
        "es": "mujer",
        "fr": "femme",
        "it": "femminile",
        "de": "weiblich"
    },
    {
        "pl": "chłopiec",
        "en": "boy",
        "gr": "αγόρι",
        "es": "niño",
        "fr": "garçon",
        "it": "ragazzo",
        "de": "der Jung"
    },
    {
        "pl": "produkować",
        "en": "produce",
        "gr": "παραγωγή ",
        "es": "producir",
        "fr": "produire",
        "it": "produrre",
        "de": "herstellen"
    },
    {
        "pl": "palce u stóp",
        "en": "toes",
        "gr": "δάχτυλα των ποδιών",
        "es": "dedos de los pies",
        "fr": "orteils",
        "it": "dita dei piedi",
        "de": "die Zehen"
    },
    {
        "pl": "nieść",
        "en": "carry",
        "gr": "μεταφορά",
        "es": "llevar",
        "fr": "porter",
        "it": "portare",
        "de": "tragen"
    },
    {
        "pl": "zasmarkany",
        "en": "snotty",
        "gr": "μυξιάρης",
        "es": "mocoso",
        "fr": "morveux",
        "it": "moccioso",
        "de": "rotzig"
    },
    {
        "pl": "spokojny",
        "en": "tranquil",
        "gr": "γαλήνιος",
        "es": "tranquilo",
        "fr": "tranquille",
        "it": "tranquil",
        "de": "ruhig"
    },
    {
        "pl": "urojony",
        "en": "imaginary",
        "gr": "φανταστικό",
        "es": "imaginario",
        "fr": "imaginaire",
        "it": "immaginario",
        "de": "imaginär"
    },
    {
        "pl": "niewyraźny",
        "en": "fuzzy",
        "gr": "ασαφής",
        "es": "borroso",
        "fr": "crépus",
        "it": "peloso",
        "de": "verschwommen"
    },
    {
        "pl": "aktualny, prąd",
        "en": "current",
        "gr": "τωρινός",
        "es": "corriente",
        "fr": "courant",
        "it": "corrente",
        "de": "aktuell"
    },
    {
        "pl": "jak na przykład",
        "en": "such as",
        "gr": "όπως",
        "es": "como",
        "fr": "comme",
        "it": "come",
        "de": "wie zum Beispiel"
    },
    {
        "pl": "podobnie",
        "en": "alike",
        "gr": "ομοίως",
        "es": "igual",
        "fr": "similaire",
        "it": "simile",
        "de": "ähnlich"
    },
    {
        "pl": "wlec",
        "en": "drag",
        "gr": "σέρνω",
        "es": "arrastrar",
        "fr": "traîner",
        "it": "trascinare",
        "de": "schleppen"
    },
    {
        "pl": "historyczny",
        "en": "historical",
        "gr": "ιστορικό",
        "es": "histórico",
        "fr": "historique",
        "it": "storico",
        "de": "historisch"
    },
    {
        "pl": "robak",
        "en": "worm",
        "gr": "σκουλήκι",
        "es": "gusano",
        "fr": "ver",
        "it": "verme",
        "de": "der Wurm"
    },
    {
        "pl": "śmiechu warte",
        "en": "laughable",
        "gr": "γελοίο",
        "es": "cómico",
        "fr": "comique",
        "it": "ridicolo",
        "de": "lächerlich"
    },
    {
        "pl": "kształt",
        "en": "shape",
        "gr": "σχήμα",
        "es": "forma",
        "fr": "forme",
        "it": "forma",
        "de": "die Form"
    },
    {
        "pl": "sznur",
        "en": "string",
        "gr": "χορδή",
        "es": "cuerda",
        "fr": "corde",
        "it": "filo",
        "de": "die Schnur"
    },
    {
        "pl": "sklep",
        "en": "store",
        "gr": "κατάστημα",
        "es": "tienda",
        "fr": "boutique",
        "it": "negozio",
        "de": "der Laden"
    },
    {
        "pl": "koteczek",
        "en": "kitty",
        "gr": "γατούλα",
        "es": "gatito",
        "fr": "châton",
        "it": "gattino",
        "de": "das Kätzchen"
    },
    {
        "pl": "dzicz, pustkowie",
        "en": "wilderness",
        "gr": "ερημιά",
        "es": "naturaleza",
        "fr": "nature",
        "it": "landa selvaggia",
        "de": "die Wildnis"
    },
    {
        "pl": "dokładny",
        "en": "accurate",
        "gr": "ακριβής",
        "es": "exacto",
        "fr": "exact",
        "it": "accurato",
        "de": "genau"
    },
    {
        "pl": "drogi",
        "en": "expensive",
        "gr": "ακριβό",
        "es": "caro",
        "fr": "cher",
        "it": "costoso",
        "de": "teuer"
    },
    {
        "pl": "litery, listy",
        "en": "letters",
        "gr": "γράμματα",
        "es": "letras",
        "fr": "lettres",
        "it": "lettere",
        "de": "die Buschstaben"
    },
    {
        "pl": "obecny",
        "en": "present",
        "gr": "παρόν",
        "es": "presente",
        "fr": "cadeau",
        "it": "regalo",
        "de": "die Gegenwart"
    },
    {
        "pl": "elektryczny",
        "en": "electric",
        "gr": "ηλεκτρικό",
        "es": "eléctrico",
        "fr": "électrique",
        "it": "elettrico",
        "de": "elektrisch"
    },
    {
        "pl": "dostępny",
        "en": "available",
        "gr": "διαθέσιμος",
        "es": "disponible",
        "fr": "disponible",
        "it": "disponibile",
        "de": "verfügbar"
    },
    {
        "pl": "łyżka",
        "en": "spoon",
        "gr": "κουτάλι",
        "es": "cuchara",
        "fr": "cuiller",
        "it": "cucchiaio",
        "de": "der Löffel"
    },
    {
        "pl": "wahający się",
        "en": "hesitant",
        "gr": "διστακτικός",
        "es": "vacilante",
        "fr": "hésitant",
        "it": "esitante",
        "de": "zögerlich"
    },
    {
        "pl": "zapis",
        "en": "record",
        "gr": "ρεκόρ",
        "es": "registro",
        "fr": "registre",
        "it": "registro",
        "de": "der Rekord"
    },
    {
        "pl": "trzy",
        "en": "three",
        "gr": "τρία",
        "es": "tres",
        "fr": "trois",
        "it": "tre",
        "de": "drei"
    },
    {
        "pl": "następstwa",
        "en": "aftermath",
        "gr": "επακόλουθο",
        "es": "secuelas",
        "fr": "séquelle",
        "it": "indomani",
        "de": "die Nachwirkung"
    },
    {
        "pl": "zapalony",
        "en": "keen",
        "gr": "έντονος",
        "es": "aplicado",
        "fr": "assidu",
        "it": "tendente",
        "de": "begeistert"
    },
    {
        "pl": "powierzchowny",
        "en": "superficial",
        "gr": "επιφανειακό",
        "es": "superficial",
        "fr": "superficiel",
        "it": "superficiale",
        "de": "oberflächlich"
    },
    {
        "pl": "żylasty",
        "en": "wiry",
        "gr": "νευρώδης",
        "es": "nervudo",
        "fr": "nerveux",
        "it": "atletico",
        "de": "drahtig"
    },
    {
        "pl": "zgięty",
        "en": "bent",
        "gr": "κλίση",
        "es": "torcido",
        "fr": "courbé",
        "it": "piegato",
        "de": "gebeugt"
    },
    {
        "pl": "najszybszy",
        "en": "the quickest",
        "gr": "ο γρηγορότερος",
        "es": "más rápido",
        "fr": "plus rapide",
        "it": "il più rapido",
        "de": "der schnellste"
    },
    {
        "pl": "nieistotny",
        "en": "picayune",
        "gr": "μικρή αξία",
        "es": "insignificante",
        "fr": "insignifiant",
        "it": "insignificante",
        "de": "gering"
    },
    {
        "pl": "wygląd",
        "en": "look",
        "gr": "ματιά",
        "es": "mirar",
        "fr": "regarder",
        "it": "guardare",
        "de": "das Aussehen"
    },
    {
        "pl": "spleśniały",
        "en": "moldy",
        "gr": "μουχλιασμένο",
        "es": "mohoso",
        "fr": "moisi",
        "it": "ammuffito",
        "de": "schimmelig"
    },
    {
        "pl": "przepełniony",
        "en": "overflow",
        "gr": "υπερχείλιση",
        "es": "desbordamiento",
        "fr": "débordement",
        "it": "inondazione",
        "de": "die überschwemmung"
    },
    {
        "pl": "instynktowny",
        "en": "instinctive",
        "gr": "ενστικτώδης",
        "es": "instintivo",
        "fr": "instinctif",
        "it": "istintivo",
        "de": "instinktiv"
    },
    {
        "pl": "krzepki",
        "en": "burly",
        "gr": "εύσωμος",
        "es": "fuerte",
        "fr": "barraqué",
        "it": "massiccio",
        "de": "korpulent"
    },
    {
        "pl": "zabiegany",
        "en": "bustling",
        "gr": "πολυσύχναστο",
        "es": "bullicioso",
        "fr": "animé",
        "it": "movimentato",
        "de": "geschäftig"
    },
    {
        "pl": "impuls",
        "en": "impulse",
        "gr": "ώθηση",
        "es": "impulso",
        "fr": "impulsion",
        "it": "impulso",
        "de": "der Antrieb"
    },
    {
        "pl": "dziewięć",
        "en": "nine",
        "gr": "εννέα",
        "es": "nueve",
        "fr": "neuf",
        "it": "nove",
        "de": "neun"
    },
    {
        "pl": "uprzykrzony",
        "en": "tiresome",
        "gr": "κουραστικός",
        "es": "fatigante",
        "fr": "fatiguant",
        "it": "fastidioso",
        "de": "ermüdend"
    },
    {
        "pl": "makabryczny",
        "en": "macabre",
        "gr": "μακάβριος",
        "es": "macabro",
        "fr": "macabre",
        "it": "macabro",
        "de": "makaber"
    },
    {
        "pl": "abstrakcyjny",
        "en": "abstracted",
        "gr": "αφηρημένος",
        "es": "abstraído",
        "fr": "abstrait",
        "it": "astratto",
        "de": "abstrahiert"
    },
    {
        "pl": "słuchać",
        "en": "listen",
        "gr": "ακούω",
        "es": "escuchar",
        "fr": "écouter",
        "it": "ascoltare",
        "de": "zuhören"
    },
    {
        "pl": "obietnica",
        "en": "promise",
        "gr": "υπόσχεση",
        "es": "promesa",
        "fr": "promesse",
        "it": "promettere",
        "de": "die Versprechung"
    },
    {
        "pl": "kraj",
        "en": "country",
        "gr": "χώρα",
        "es": "país",
        "fr": "pays",
        "it": "paese",
        "de": "das Land"
    },
    {
        "pl": "wydanie, uwolnienie",
        "en": "release",
        "gr": "ελευθέρωση",
        "es": "liberación",
        "fr": "libération",
        "it": "rilasciare",
        "de": "die Freigabe"
    },
    {
        "pl": "kaczki",
        "en": "ducks",
        "gr": "πάπιες",
        "es": "patos",
        "fr": "canards",
        "it": "duck",
        "de": "die Enten"
    },
    {
        "pl": "żaba",
        "en": "frog",
        "gr": "βάτραχος",
        "es": "rana",
        "fr": "grenouille",
        "it": "rana",
        "de": "der Frosch"
    },
    {
        "pl": "zasada",
        "en": "rule",
        "gr": "κανόνας",
        "es": "regla",
        "fr": "règle",
        "it": "regola",
        "de": "die Regel"
    },
    {
        "pl": "dżinsy",
        "en": "jeans",
        "gr": "τζην",
        "es": "jeans",
        "fr": "jeans",
        "it": "jeans",
        "de": "die Jeans"
    },
    {
        "pl": "solidny",
        "en": "solid",
        "gr": "συμπαγής",
        "es": "sólido",
        "fr": "solide",
        "it": "solido",
        "de": "fest"
    },
    {
        "pl": "zysk",
        "en": "profit",
        "gr": "κέρδος",
        "es": "lucro",
        "fr": "profit",
        "it": "profitto",
        "de": "der Gewinn"
    },
    {
        "pl": "powiesić",
        "en": "hang",
        "gr": "κρέμασμα",
        "es": "colgar",
        "fr": "pendre",
        "it": "appendere",
        "de": "hängen"
    },
    {
        "pl": "mięsień",
        "en": "muscle",
        "gr": "μυς",
        "es": "músculo",
        "fr": "muscle",
        "it": "muscolo",
        "de": "der Muskel"
    },
    {
        "pl": "kierunek",
        "en": "direction",
        "gr": "κατεύθυνση",
        "es": "dirección",
        "fr": "direction",
        "it": "direzione",
        "de": "die Richtung"
    },
    {
        "pl": "pościg",
        "en": "chase",
        "gr": "κυνηγητό",
        "es": "persecución",
        "fr": "poursuite",
        "it": "rincorrere",
        "de": "die Jagd"
    },
    {
        "pl": "zlew",
        "en": "sink",
        "gr": "νεροχύτης",
        "es": "fregadero",
        "fr": "évier",
        "it": "affondare",
        "de": "senken"
    },
    {
        "pl": "kość",
        "en": "bone",
        "gr": "οστό",
        "es": "hueso",
        "fr": "os",
        "it": "osso",
        "de": "der Knochen"
    },
    {
        "pl": "zaaranżować",
        "en": "arrange",
        "gr": "διευθετώ",
        "es": "arreglar",
        "fr": "régler",
        "it": "organizzare",
        "de": "vereinbaren"
    },
    {
        "pl": "śledzić",
        "en": "follow",
        "gr": "ακολουθώ",
        "es": "seguir",
        "fr": "suivre",
        "it": "seguire",
        "de": "folgen"
    },
    {
        "pl": "urodziny",
        "en": "birthday",
        "gr": "γενέθλια",
        "es": "cumpleaños",
        "fr": "anniversaire",
        "it": "compleanno",
        "de": "der Geburtstag"
    },
    {
        "pl": "apatyczny",
        "en": "apathetic",
        "gr": "απαθής",
        "es": "apático",
        "fr": "apathique",
        "it": "apatico",
        "de": "teilnahmlos"
    },
    {
        "pl": "niebezpieczny",
        "en": "dangerous",
        "gr": "επικίνδυνος",
        "es": "peligroso",
        "fr": "dangereux",
        "it": "pericoloso",
        "de": "gefährlich"
    },
    {
        "pl": "winogrono",
        "en": "grape",
        "gr": "σταφύλι",
        "es": "uva",
        "fr": "raisin",
        "it": "uva",
        "de": "die Traube"
    },
    {
        "pl": "pociąg",
        "en": "train",
        "gr": "τρένο",
        "es": "tren",
        "fr": "train",
        "it": "treno",
        "de": "der Zug"
    },
    {
        "pl": "rozjaśnić",
        "en": "lighten",
        "gr": "ελάφρυνση ",
        "es": "iluminar",
        "fr": "illuminer",
        "it": "alleggerire",
        "de": "erhellen"
    },
    {
        "pl": "pończocha",
        "en": "stocking",
        "gr": "καλσόν",
        "es": "media",
        "fr": "bas",
        "it": "calza",
        "de": "der Strumpf"
    },
    {
        "pl": "owoc",
        "en": "fruit",
        "gr": "φρούτο",
        "es": "fruta",
        "fr": "fruit",
        "it": "frutta",
        "de": "das Obst"
    },
    {
        "pl": "granica",
        "en": "border",
        "gr": "σύνορο",
        "es": "frontera",
        "fr": "frontière",
        "it": "confine",
        "de": "die Grenze"
    },
    {
        "pl": "kąpiel",
        "en": "bath",
        "gr": "λουτρό",
        "es": "baño",
        "fr": "bain",
        "it": "bagno",
        "de": "das Bad"
    },
    {
        "pl": "dystrybucja",
        "en": "distribution",
        "gr": "διανομή",
        "es": "distribución",
        "fr": "distribution",
        "it": "distribuzione",
        "de": "die Verteilung"
    },
    {
        "pl": "kiczowaty",
        "en": "trashy",
        "gr": "άχρηστος",
        "es": "basura",
        "fr": "affligeant",
        "it": "scadente",
        "de": "kitschig"
    },
    {
        "pl": "być posłusznym",
        "en": "obey",
        "gr": "υπακούω",
        "es": "obedecer",
        "fr": "obéir",
        "it": "obbedire",
        "de": "gehorchen"
    },
    {
        "pl": "telefon",
        "en": "phone",
        "gr": "τηλέφωνο",
        "es": "teléfono",
        "fr": "téléphone",
        "it": "telefono",
        "de": "anrufen"
    },
    {
        "pl": "plecy",
        "en": "back",
        "gr": "πίσω",
        "es": "espalda",
        "fr": "dos",
        "it": "schiena",
        "de": "der Rücken"
    },
    {
        "pl": "ćwiczenie",
        "en": "exercise",
        "gr": "άσκηση",
        "es": "ejercicio",
        "fr": "exercice",
        "it": "esercizio",
        "de": "die Übung"
    },
    {
        "pl": "dźgać",
        "en": "poke",
        "gr": "άγγιγμα",
        "es": "hincar",
        "fr": "piquer",
        "it": "picchiettare con le dita",
        "de": "der Stoß"
    },
    {
        "pl": "paka",
        "en": "crate",
        "gr": "σακαράκα",
        "es": "caja",
        "fr": "caisse",
        "it": "cassa",
        "de": "die Kiste"
    },
    {
        "pl": "zajmujący",
        "en": "entertaining",
        "gr": "διασκεδαστικό",
        "es": "entretenido",
        "fr": "amusant",
        "it": "divertente",
        "de": "unterhaltsam"
    },
    {
        "pl": "przyciągać czyjąś uwagę",
        "en": "attract",
        "gr": "προσέλκυση",
        "es": "atraer",
        "fr": "attirer",
        "it": "attrarre",
        "de": "anziehen"
    },
    {
        "pl": "wędrujący",
        "en": "wandering",
        "gr": "περιπλάνηση",
        "es": "errante",
        "fr": "errant",
        "it": "errante",
        "de": "wandernd"
    },
    {
        "pl": "nieznany",
        "en": "unknown",
        "gr": "άγνωστο",
        "es": "desconocido",
        "fr": "inconnu",
        "it": "sconosciuto",
        "de": "unbekannt"
    },
    {
        "pl": "opalenizna",
        "en": "tan",
        "gr": "μαύρισμα",
        "es": "bronceado",
        "fr": "bronzé",
        "it": "abbronzatura",
        "de": "die Bräune"
    },
    {
        "pl": "szykowne",
        "en": "ritzy",
        "gr": "σικ",
        "es": "lujoso",
        "fr": "luxueux",
        "it": "elegante",
        "de": "nobel"
    },
    {
        "pl": "interesować",
        "en": "interest",
        "gr": "interest ",
        "es": "interés",
        "fr": "intérêt",
        "it": "interesse",
        "de": "das Interesse"
    },
    {
        "pl": "pamięć",
        "en": "memory",
        "gr": "μνήμη",
        "es": "memoria",
        "fr": "mémoire",
        "it": "memoria",
        "de": "das Gedächtnis"
    },
    {
        "pl": "dramatyczny",
        "en": "dramatic",
        "gr": "δραματικό",
        "es": "dramático",
        "fr": "dramatique",
        "it": "drammatico",
        "de": "dramatisch"
    },
    {
        "pl": "mieszać",
        "en": "mix",
        "gr": "μείγμα",
        "es": "mezclar",
        "fr": "mélanger",
        "it": "mescolare",
        "de": "die Mischung"
    },
    {
        "pl": "kurtyna, zasłona",
        "en": "curtain",
        "gr": "κουρτίνα",
        "es": "cortina",
        "fr": "rideau",
        "it": "tenda",
        "de": "der Vorhang"
    },
    {
        "pl": "kulfoniasty",
        "en": "hulking",
        "gr": "ογκώδης",
        "es": "pesado",
        "fr": "lourd",
        "it": "mastodontico",
        "de": "schwerfällig"
    },
    {
        "pl": "delikatny",
        "en": "delicate",
        "gr": "λεπτό",
        "es": "delicado",
        "fr": "délicat",
        "it": "delicato",
        "de": "zart"
    },
    {
        "pl": "z szeroko otwartymi oczami",
        "en": "wide-eyed",
        "gr": "ανοικτομάτης",
        "es": "con ojos grandes",
        "fr": "aux grands yeux",
        "it": "con gli occhi spalancati",
        "de": "staunend"
    },
    {
        "pl": "część",
        "en": "part",
        "gr": "τμήμα",
        "es": "parte",
        "fr": "part",
        "it": "parte",
        "de": "der Teil"
    },
    {
        "pl": "wolno",
        "en": "slow",
        "gr": "αργό",
        "es": "lento",
        "fr": "lent",
        "it": "lento",
        "de": "langsam"
    },
    {
        "pl": "opowiadając",
        "en": "telling",
        "gr": "λέγοντάς",
        "es": "diciendo",
        "fr": "disant",
        "it": "rivelatore",
        "de": "aufschlussreich"
    },
    {
        "pl": "język",
        "en": "tongue",
        "gr": "γλώσσα",
        "es": "lengua",
        "fr": "langue",
        "it": "lingua",
        "de": "die Zunge"
    },
    {
        "pl": "bogosławić",
        "en": "bless",
        "gr": "ευλογώ",
        "es": "bendecir",
        "fr": "bénir",
        "it": "benedire",
        "de": "segnen"
    },
    {
        "pl": "ponętny",
        "en": "alluring",
        "gr": "δελεαστικός",
        "es": "seductor",
        "fr": "séducteur",
        "it": "allettante",
        "de": "verlockend"
    },
    {
        "pl": "znalezione",
        "en": "found",
        "gr": "βρέθηκαν",
        "es": "encontrado",
        "fr": "trouvé",
        "it": "trovato",
        "de": "gründen"
    },
    {
        "pl": "przycisk",
        "en": "button",
        "gr": "κουμπί",
        "es": "botón",
        "fr": "bouton",
        "it": "bottone",
        "de": "der Knopf"
    },
    {
        "pl": "przypominać",
        "en": "remind",
        "gr": "υπενθυμίζω",
        "es": "recordar",
        "fr": "se rappeler",
        "it": "ricordare",
        "de": "ermahnen"
    },
    {
        "pl": "mgiełka",
        "en": "mist",
        "gr": "ομίχλη",
        "es": "niebla",
        "fr": "brume",
        "it": "nebbia",
        "de": "der Nebel"
    },
    {
        "pl": "dokuczać",
        "en": "tease",
        "gr": "πειράζω",
        "es": "embromar",
        "fr": "allumer",
        "it": "deridere",
        "de": "der Scherzbold"
    },
    {
        "pl": "pełzający",
        "en": "creepy",
        "gr": "ανατριχιαστικό",
        "es": "escalofriante",
        "fr": "effrayant",
        "it": "inquietante",
        "de": "gruselig"
    },
    {
        "pl": "nie przystoi, niewlaściwy",
        "en": "unbecoming",
        "gr": "ακατάλληλος",
        "es": "impropio",
        "fr": "inapproprié",
        "it": "inadatto",
        "de": "ungebührlich"
    },
    {
        "pl": "alarm",
        "en": "alarm",
        "gr": "συναγερμός",
        "es": "alarma",
        "fr": "alarme",
        "it": "allarme",
        "de": "der Wecker"
    },
    {
        "pl": "gęsi",
        "en": "geese",
        "gr": "χήνες",
        "es": "gansos",
        "fr": "oies",
        "it": "oche",
        "de": "die Gänse"
    },
    {
        "pl": "cichy",
        "en": "silent",
        "gr": "σιωπηλό",
        "es": "silencioso",
        "fr": "silencieux",
        "it": "silenzioso",
        "de": "still"
    },
    {
        "pl": "zawierać",
        "en": "contain",
        "gr": "περιέχουν",
        "es": "contener",
        "fr": "contenir",
        "it": "contenere",
        "de": "beinhalten"
    },
    {
        "pl": "podrażniać",
        "en": "irritate",
        "gr": "ερεθίζω",
        "es": "irritar",
        "fr": "irriter",
        "it": "irritare",
        "de": "ärgern"
    },
    {
        "pl": "ogromny",
        "en": "huge",
        "gr": "τεράστιο",
        "es": "enorme",
        "fr": "énorme",
        "it": "enorme",
        "de": "riesig"
    },
    {
        "pl": "paniczny",
        "en": "panicky",
        "gr": "πανικόβλητος",
        "es": "lleno de pánico",
        "fr": "paniqué",
        "it": "terrorizzato",
        "de": "überängstlich"
    },
    {
        "pl": "odpoczynek, reszta",
        "en": "rest",
        "gr": "υπόλοιπο",
        "es": "resto",
        "fr": "reste",
        "it": "riposare",
        "de": "der Rest"
    },
    {
        "pl": "towarzysz, kolega",
        "en": "mate",
        "gr": "σύντροφος",
        "es": "compañero",
        "fr": "copain",
        "it": "amico",
        "de": "der Kumpel"
    },
    {
        "pl": "magia",
        "en": "magic",
        "gr": "μαγεία",
        "es": "magia",
        "fr": "magie",
        "it": "magico",
        "de": "die Magie"
    },
    {
        "pl": "udekorowć",
        "en": "decorate",
        "gr": "διακοσμώ",
        "es": "decorar",
        "fr": "décorer",
        "it": "decorare",
        "de": "schmüken"
    },
    {
        "pl": "sześć",
        "en": "six",
        "gr": "έξι",
        "es": "seis",
        "fr": "six",
        "it": "sei",
        "de": "sechs"
    },
    {
        "pl": "piosenka",
        "en": "song",
        "gr": "τραγούδι",
        "es": "canción",
        "fr": "chanson",
        "it": "canzone",
        "de": "das Lied"
    },
    {
        "pl": "buczenie",
        "en": "hum",
        "gr": "βουητό",
        "es": "zumbido",
        "fr": "bourdonnement",
        "it": "canticchiare",
        "de": "summen"
    },
    {
        "pl": "zrelaksować się",
        "en": "relax",
        "gr": "χαλαρώστε",
        "es": "relajarse",
        "fr": "se détendre",
        "it": "rilassarsi",
        "de": "ausruhen"
    },
    {
        "pl": "śpiewać",
        "en": "sign",
        "gr": "πινακίδα",
        "es": "signo",
        "fr": "signe",
        "it": "segno",
        "de": "das Zeichen"
    },
    {
        "pl": "nudny",
        "en": "drab",
        "gr": "ανιαρός",
        "es": "monótono",
        "fr": "morne",
        "it": "scialbo",
        "de": "grau"
    },
    {
        "pl": "bielizna",
        "en": "underwear",
        "gr": "εσώρουχα",
        "es": "ropa interior",
        "fr": "sous-vêtement",
        "it": "biancheria intima",
        "de": "die Unterkleidung"
    },
    {
        "pl": "miniaturowy",
        "en": "miniature",
        "gr": "μινιατούρα",
        "es": "miniatura",
        "fr": "miniature",
        "it": "miniatura",
        "de": "die Miniatur"
    },
    {
        "pl": "przyczyna",
        "en": "cause",
        "gr": "αιτία",
        "es": "causa",
        "fr": "cause",
        "it": "causa",
        "de": "die Ursache"
    },
    {
        "pl": "korzystny",
        "en": "beneficial",
        "gr": "οφέλη",
        "es": "beneficioso",
        "fr": "bénéfique",
        "it": "favorevole",
        "de": "vorteilhaft"
    },
    {
        "pl": "język",
        "en": "language",
        "gr": "γλώσσα",
        "es": "idioma",
        "fr": "langue",
        "it": "lingua",
        "de": "die Sprache"
    },
    {
        "pl": "przerażający",
        "en": "terrific",
        "gr": "καταπληκτικό",
        "es": "estupendo",
        "fr": "formidable",
        "it": "magnifico",
        "de": "toll"
    },
    {
        "pl": "szkodliwe",
        "en": "damaging",
        "gr": "επιβλαβής",
        "es": "perjudicial",
        "fr": "préjudiciable",
        "it": "dannoso",
        "de": "schädlich"
    },
    {
        "pl": "siedzenie",
        "en": "seat",
        "gr": "θέση",
        "es": "asiento",
        "fr": "siège",
        "it": "sedile",
        "de": "der Sitz"
    },
    {
        "pl": "skąpy",
        "en": "parsimonious",
        "gr": "τσιγκούνης",
        "es": "parsimonioso",
        "fr": "parcimonieux",
        "it": "parsimonioso",
        "de": "sparsam"
    },
    {
        "pl": "dziwaczny",
        "en": "quirky",
        "gr": "ιδιότροπος",
        "es": "peculiar",
        "fr": "excentrique",
        "it": "particolare",
        "de": "skurril"
    },
    {
        "pl": "czarno-biały",
        "en": "black-and-white",
        "gr": "Ασπρόμαυρο",
        "es": "blanco y negro",
        "fr": "noir et blanc",
        "it": "in bianco e nero",
        "de": "schwarz und weiß"
    },
    {
        "pl": "tęsknić",
        "en": "miss",
        "gr": "κυρία",
        "es": "señorita",
        "fr": "mademoiselle",
        "it": "mancare",
        "de": "vermissen"
    },
    {
        "pl": "stopiony",
        "en": "melted",
        "gr": "λειωμένο",
        "es": "derretido",
        "fr": "fondu",
        "it": "sciolto",
        "de": "geschmolzen"
    },
    {
        "pl": "najwyższy",
        "en": "supreme",
        "gr": "υπέρτατος",
        "es": "supremo",
        "fr": "suprême",
        "it": "supremo",
        "de": "höchst"
    },
    {
        "pl": "ewentualny",
        "en": "thinkable",
        "gr": "νοητός",
        "es": "pensable",
        "fr": "pensable",
        "it": "pensabile",
        "de": "denkbar"
    },
    {
        "pl": "uroczy",
        "en": "cute",
        "gr": "συμπαθητικό ",
        "es": "precioso",
        "fr": "mignon",
        "it": "carino",
        "de": "süß"
    },
    {
        "pl": "poślubić",
        "en": "marry",
        "gr": "πανδρεύομαι",
        "es": "casarse",
        "fr": "se marier",
        "it": "sposare",
        "de": "heiraten"
    },
    {
        "pl": "młot, młotek",
        "en": "hammer",
        "gr": "σφυρί",
        "es": "martillo",
        "fr": "marteau",
        "it": "martello",
        "de": "der Hammer"
    },
    {
        "pl": "premia",
        "en": "premium",
        "gr": "υπέρ το άρτιον",
        "es": "prima",
        "fr": "prémium",
        "it": "extra",
        "de": "erstklassig"
    },
    {
        "pl": "późniejszy, kolejny",
        "en": "subsequent",
        "gr": "μετέπειτα",
        "es": "posterior",
        "fr": "ultérieur",
        "it": "successivo",
        "de": "nachfolgend"
    },
    {
        "pl": "szalik",
        "en": "scarf",
        "gr": "κασκόλ",
        "es": "bufanda",
        "fr": "écharpe",
        "it": "sciarpa",
        "de": "der Schal"
    },
    {
        "pl": "twarz",
        "en": "face",
        "gr": "πρόσωπο",
        "es": "cara",
        "fr": "visage",
        "it": "faccia",
        "de": "das Gesicht"
    },
    {
        "pl": "uprzejmy",
        "en": "kind",
        "gr": "είδος",
        "es": "amable",
        "fr": "aimable",
        "it": "gentile",
        "de": "nett"
    },
    {
        "pl": "tęsknota",
        "en": "longing",
        "gr": "λαχτάρα",
        "es": "anhelante",
        "fr": "languissant",
        "it": "bramoso",
        "de": "sehnsüchtig"
    },
    {
        "pl": "zerknięcie, pisk myszy",
        "en": "peep",
        "gr": "τιτίβισμα",
        "es": "vistazo",
        "fr": "coup d'œil",
        "it": "pigolio",
        "de": "linsen"
    },
    {
        "pl": "obiad",
        "en": "launch",
        "gr": "εκτόξευση",
        "es": "lanzamiento",
        "fr": "lancement",
        "it": "lancio",
        "de": "die Einführung"
    },
    {
        "pl": "inteligentny",
        "en": "intelligent",
        "gr": "έξυπνος",
        "es": "inteligente",
        "fr": "intelligent",
        "it": "intelligente",
        "de": "intelligent"
    },
    {
        "pl": "wąż gumowy",
        "en": "hose",
        "gr": "μάνικα",
        "es": "manguera",
        "fr": "tuyau",
        "it": "canna",
        "de": "der Schlauch"
    },
    {
        "pl": "wspaniały",
        "en": "wonderful",
        "gr": "θαυμάσιος",
        "es": "maravilloso",
        "fr": "merveilleux",
        "it": "meraviglioso",
        "de": "wunderbar"
    },
    {
        "pl": "owad",
        "en": "insect",
        "gr": "έντομο",
        "es": "insecto",
        "fr": "insecte",
        "it": "insetto",
        "de": "das Insekt"
    },
    {
        "pl": "aromatyczny",
        "en": "aromatic",
        "gr": "αρωματικό",
        "es": "aromático",
        "fr": "aromatique",
        "it": "aromatico",
        "de": "aromatisch"
    },
    {
        "pl": "szczyt",
        "en": "top",
        "gr": "κορυφαίο",
        "es": "superior",
        "fr": "supérieur",
        "it": "cima",
        "de": "die Spitze"
    },
    {
        "pl": "skandaliczny",
        "en": "scandalous",
        "gr": "σκανδαλώδης",
        "es": "escandaloso",
        "fr": "scandaleux",
        "it": "scandaloso",
        "de": "skandalös"
    },
    {
        "pl": "prowizoryczny",
        "en": "makeshift",
        "gr": "πρόχειρο",
        "es": "improvisado",
        "fr": "improvisé",
        "it": "improvvisato",
        "de": "provisorisch"
    },
    {
        "pl": "węzłowaty",
        "en": "knotty",
        "gr": "οζώδης",
        "es": "nudoso",
        "fr": "noueux",
        "it": "nodoso",
        "de": "knotig"
    },
    {
        "pl": "nękać",
        "en": "harass",
        "gr": "παρενοχλούν",
        "es": "hostigar",
        "fr": "harceler",
        "it": "molestare",
        "de": "belästigen"
    },
    {
        "pl": "odmawiać",
        "en": "refuse",
        "gr": "αρνούμαι",
        "es": "rechazar",
        "fr": "décliner",
        "it": "rifiutare",
        "de": "ablehnen"
    },
    {
        "pl": "gadatliwy",
        "en": "garrulous",
        "gr": "φλύαρος",
        "es": "gárrulo",
        "fr": "volubile",
        "it": "loquace",
        "de": "geschwätzig"
    },
    {
        "pl": "pracowity",
        "en": "painstaking",
        "gr": "επιμελής",
        "es": "meticuloso",
        "fr": "méticuleux",
        "it": "coscienzioso",
        "de": "mühevoll"
    },
    {
        "pl": "oklaskiwać",
        "en": "applaud",
        "gr": "χειροκροτώ",
        "es": "aplaudir",
        "fr": "applaudir",
        "it": "applaudire",
        "de": "loben"
    },
    {
        "pl": "dzicz, pustkowie",
        "en": "wilderness",
        "gr": "ερημιά",
        "es": "jungla",
        "fr": "jungle",
        "it": "landa selvaggia",
        "de": "die Wildnis"
    },
    {
        "pl": "histeryczny",
        "en": "hysterical",
        "gr": "υστερικό",
        "es": "histérico",
        "fr": "hystérique",
        "it": "isterico",
        "de": "hysterisch"
    },
    {
        "pl": "handel",
        "en": "trade",
        "gr": "εμπόριο",
        "es": "comercio",
        "fr": "commerce",
        "it": "scambio",
        "de": "der Handel"
    },
    {
        "pl": "cień",
        "en": "shade",
        "gr": "σκιά",
        "es": "sombra",
        "fr": "ombre",
        "it": "sfumatura",
        "de": "der Schatten"
    },
    {
        "pl": "łagodny",
        "en": "gentle",
        "gr": "απαλό",
        "es": "suave",
        "fr": "doux",
        "it": "gentile",
        "de": "zart"
    },
    {
        "pl": "potężny",
        "en": "powerful",
        "gr": "ισχυρό",
        "es": "potente",
        "fr": "puissant",
        "it": "potente",
        "de": "mächtig"
    },
    {
        "pl": "kręcone",
        "en": "curly",
        "gr": "κατσαρό",
        "es": "rizado",
        "fr": "bouclé",
        "it": "riccio",
        "de": "lockig"
    },
    {
        "pl": "unosić",
        "en": "hover",
        "gr": "φτερουγίζω",
        "es": "cernerse",
        "fr": "planer",
        "it": "volteggiare",
        "de": "schweben"
    },
    {
        "pl": "fantazyjny, polubić",
        "en": "fancy",
        "gr": "σκέφτομαι να ",
        "es": "sofisticado",
        "fr": "fantaisie",
        "it": "decorato",
        "de": "raffiniert"
    },
    {
        "pl": "płomień",
        "en": "flame",
        "gr": "φλόγα",
        "es": "llama",
        "fr": "flamme",
        "it": "fiamma",
        "de": "die Flamme"
    },
    {
        "pl": "zero",
        "en": "null",
        "gr": "άκυρο",
        "es": "nulo",
        "fr": "nul",
        "it": "annullato",
        "de": "null"
    },
    {
        "pl": "hałaśliwy",
        "en": "rambunctious",
        "gr": "θορυβώδης",
        "es": "revoltoso",
        "fr": "turbulent",
        "it": "turbolento",
        "de": "ungestüm"
    },
    {
        "pl": "bolesny",
        "en": "painful",
        "gr": "επώδυνο",
        "es": "doloroso",
        "fr": "douloureux",
        "it": "doloroso",
        "de": "schmerzhaft"
    },
    {
        "pl": "dziesięć",
        "en": "ten",
        "gr": "δέκα",
        "es": "diez",
        "fr": "dix",
        "it": "dieci",
        "de": "zehn"
    },
    {
        "pl": "zbędne",
        "en": "dispensable",
        "gr": "περιττό",
        "es": "prescindible",
        "fr": "superflu",
        "it": "superfluo",
        "de": "überflüssig"
    },
    {
        "pl": "bejsbol",
        "en": "baseball",
        "gr": "μπέιζμπολ",
        "es": "béisbol",
        "fr": "baseball",
        "it": "baseball",
        "de": "der Baseball"
    },
    {
        "pl": "góra",
        "en": "mountain",
        "gr": "βουνό",
        "es": "montaña",
        "fr": "montagne",
        "it": "montagna",
        "de": "der Berg"
    },
    {
        "pl": "straszny",
        "en": "scary",
        "gr": "τρομακτικό",
        "es": "siniestro",
        "fr": "sinistre",
        "it": "spaventoso",
        "de": "erschreckend"
    },
    {
        "pl": "mięta",
        "en": "mint",
        "gr": "μέντα",
        "es": "menta",
        "fr": "menthe",
        "it": "menta",
        "de": "die Minze"
    },
    {
        "pl": "torba",
        "en": "bag",
        "gr": "τσάντα",
        "es": "bolsa",
        "fr": "sac",
        "it": "borsa",
        "de": "die Tasche"
    },
    {
        "pl": "nakrzyczeć, skarcić",
        "en": "scold",
        "gr": "μαλώνω",
        "es": "regañar",
        "fr": "gronder",
        "it": "rimproverare",
        "de": "ausschimpfen"
    },
    {
        "pl": "burzliwy",
        "en": "stormy",
        "gr": "θυελλώδης",
        "es": "tempestuoso",
        "fr": "orageux",
        "it": "tempestoso",
        "de": "stürmisch"
    },
    {
        "pl": "proza",
        "en": "prose",
        "gr": "πεζογραφία",
        "es": "prosa",
        "fr": "prose",
        "it": "prosa",
        "de": "prosaisch"
    },
    {
        "pl": "nauczanie",
        "en": "teaching",
        "gr": "διδασκαλία",
        "es": "enseñanza",
        "fr": "enseignement",
        "it": "insegnando",
        "de": "die Lehre"
    },
    {
        "pl": "otyły",
        "en": "obese",
        "gr": "παχύσαρκος",
        "es": "obeso",
        "fr": "obèse",
        "it": "obeso",
        "de": "fettleibig"
    },
    {
        "pl": "oferta",
        "en": "offer",
        "gr": "προσφορά",
        "es": "oferta",
        "fr": "offre",
        "it": "offrire",
        "de": "das Angebot"
    },
    {
        "pl": "podatek",
        "en": "tax",
        "gr": "φόρος",
        "es": "impuesto",
        "fr": "impôt",
        "it": "tassa",
        "de": "die Steuer"
    },
    {
        "pl": "ciemny",
        "en": "dark",
        "gr": "σκοτάδι",
        "es": "oscuro",
        "fr": "obscur",
        "it": "buio",
        "de": "die Dunkelheit"
    },
    {
        "pl": "wycieczka podróż",
        "en": "trip",
        "gr": "ταξίδι",
        "es": "viaje",
        "fr": "voyage",
        "it": "viaggio",
        "de": "die Reise"
    },
    {
        "pl": "gratis",
        "en": "gratis",
        "gr": "δωρεάν",
        "es": "gratis",
        "fr": "gratis",
        "it": "gratuito",
        "de": "frei"
    },
    {
        "pl": "film",
        "en": "film",
        "gr": "ταινία",
        "es": "película",
        "fr": "film",
        "it": "film",
        "de": "der Film"
    },
    {
        "pl": "noga",
        "en": "leg",
        "gr": "πόδι",
        "es": "pierna",
        "fr": "jambe",
        "it": "gamba",
        "de": "das Bein"
    },
    {
        "pl": "pocałunek",
        "en": "kiss",
        "gr": "φιλί",
        "es": "beso",
        "fr": "baiser",
        "it": "bacio",
        "de": "der Kuss"
    },
    {
        "pl": "piasek",
        "en": "sand",
        "gr": "άμμος",
        "es": "arena",
        "fr": "sable",
        "it": "sabbia",
        "de": "der Sand"
    },
    {
        "pl": "nieperfekciny / niedokładny",
        "en": "imperfect",
        "gr": "ατελής",
        "es": "imperfecto",
        "fr": "imparfait",
        "it": "imperfetto",
        "de": "mangelhaft"
    },
    {
        "pl": "szok",
        "en": "shock",
        "gr": "σοκ",
        "es": "choque",
        "fr": "choc",
        "it": "shock",
        "de": "der Schock"
    },
    {
        "pl": "sprawiedliwy",
        "en": "righteous",
        "gr": "ενάρετος",
        "es": "justo",
        "fr": "droit",
        "it": "virtuoso",
        "de": "gerecht"
    },
    {
        "pl": "przegrany",
        "en": "loser",
        "gr": "ηττημένος",
        "es": "perdedor",
        "fr": "perdant",
        "it": "perdente",
        "de": "der Verlierer"
    },
    {
        "pl": "ciepły",
        "en": "warm",
        "gr": "ζεστό",
        "es": "caliente",
        "fr": "chaud",
        "it": "tiepido",
        "de": "warm"
    },
    {
        "pl": "zmysł, poczucie",
        "en": "sense",
        "gr": "αίσθηση",
        "es": "sentido",
        "fr": "sens",
        "it": "senso",
        "de": "der Sinn"
    },
    {
        "pl": "sędzia",
        "en": "judge",
        "gr": "δικαστής",
        "es": "juez",
        "fr": "juge",
        "it": "giudicare",
        "de": "der Richter"
    },
    {
        "pl": "skrobać",
        "en": "scrape",
        "gr": "ξύνω",
        "es": "raspar",
        "fr": "gratter",
        "it": "graffio",
        "de": "der Kratzer"
    },
    {
        "pl": "przyjacielski",
        "en": "friendly",
        "gr": "φιλικό",
        "es": "amistoso",
        "fr": "amical",
        "it": "amichevole",
        "de": "freundlich"
    },
    {
        "pl": "daleko",
        "en": "far",
        "gr": "μακριά",
        "es": "lejos",
        "fr": "loin",
        "it": "lontano",
        "de": "weit"
    },
    {
        "pl": "diabelski",
        "en": "devilish",
        "gr": "διαβολικό",
        "es": "diabólico",
        "fr": "diabolique",
        "it": "diabolico",
        "de": "teuflisch"
    },
    {
        "pl": "przystępny",
        "en": "accessible",
        "gr": "προσιτός",
        "es": "accesible",
        "fr": "accessible",
        "it": "accessibile",
        "de": "zugänglich"
    },
    {
        "pl": "trwały",
        "en": "abiding",
        "gr": "τηρών",
        "es": "duradero",
        "fr": "durable",
        "it": "persistente",
        "de": "beständig"
    },
    {
        "pl": "wyblakłe",
        "en": "faded",
        "gr": "ξεθωριασμένο",
        "es": "descolorido",
        "fr": "délavé",
        "it": "sbiadito",
        "de": "ausgebleichet"
    },
    {
        "pl": "ciekawy",
        "en": "interesting",
        "gr": "ενδιαφέρων",
        "es": "interesante",
        "fr": "interéssant",
        "it": "interessante",
        "de": "interessant"
    },
    {
        "pl": "brzydki",
        "en": "ugly",
        "gr": "άσχημος",
        "es": "feo",
        "fr": "laid",
        "it": "orribile",
        "de": "hässlich"
    },
    {
        "pl": "pies",
        "en": "dog",
        "gr": "σκύλος",
        "es": "perro",
        "fr": "chien",
        "it": "cane",
        "de": "der Hund"
    },
    {
        "pl": "metal",
        "en": "metal",
        "gr": "μέταλλο",
        "es": "metal",
        "fr": "métal",
        "it": "metallo",
        "de": "das Metal"
    },
    {
        "pl": "sprawa",
        "en": "matter",
        "gr": "ύλη",
        "es": "materia",
        "fr": "matière",
        "it": "materia",
        "de": "zählen"
    },
    {
        "pl": "mieszany",
        "en": "mixed",
        "gr": "μικτό",
        "es": "mixto",
        "fr": "mixte",
        "it": "mescolato",
        "de": "gemischt"
    },
    {
        "pl": "niecodzienny",
        "en": "offbeat",
        "gr": "εκκεντρικών",
        "es": "original",
        "fr": "original",
        "it": "anticonformistico",
        "de": "ausgefallen"
    },
    {
        "pl": "kochający",
        "en": "loving",
        "gr": "τρυφερό",
        "es": "amoroso",
        "fr": "amoureux",
        "it": "amorevole",
        "de": "liebevoll"
    },
    {
        "pl": "biznes",
        "en": "business",
        "gr": "επιχείρηση",
        "es": "negocios",
        "fr": "affaires",
        "it": "affari",
        "de": "das Geschäft"
    },
    {
        "pl": "prawdomówny",
        "en": "truthful",
        "gr": "αληθής",
        "es": "veraz",
        "fr": "honnête",
        "it": "veritiero",
        "de": "wahrhaftig"
    },
    {
        "pl": "brudny",
        "en": "filthy",
        "gr": "βρώμικο",
        "es": "inmundo",
        "fr": "immonde",
        "it": "lercio",
        "de": "dreckig"
    },
    {
        "pl": "biegły w czymś",
        "en": "versed",
        "gr": "εντριβής",
        "es": "versado",
        "fr": "versé",
        "it": "versato",
        "de": "versiert"
    },
    {
        "pl": "zarozumiały",
        "en": "uppity",
        "gr": "αλαζών",
        "es": "engreído",
        "fr": "arrogant",
        "it": "altezzoso",
        "de": "hochnäsig"
    },
    {
        "pl": "gruby",
        "en": "thick",
        "gr": "παχύ",
        "es": "grueso",
        "fr": "épais",
        "it": "spesso",
        "de": "dicht"
    },
    {
        "pl": "węzeł",
        "en": "knot",
        "gr": "κόμπος",
        "es": "nudo",
        "fr": "nœud",
        "it": "nodoso",
        "de": "der Knoten"
    },
    {
        "pl": "pływać",
        "en": "swim",
        "gr": "κολύμπι",
        "es": "nadar",
        "fr": "nager",
        "it": "nuotare",
        "de": "schwimmen"
    },
    {
        "pl": "czerwony",
        "en": "red",
        "gr": "κόκκινος",
        "es": "rojo",
        "fr": "rouge",
        "it": "rosso",
        "de": "rot"
    },
    {
        "pl": "statek",
        "en": "ship",
        "gr": "πλοίο",
        "es": "barco",
        "fr": "navire",
        "it": "nave",
        "de": "das Schiff"
    },
    {
        "pl": "impertynencki",
        "en": "sassy",
        "gr": "αυθάδης",
        "es": "descarado",
        "fr": "fougueux",
        "it": "insolente",
        "de": "frech"
    },
    {
        "pl": "przykład",
        "en": "example",
        "gr": "παράδειγμα",
        "es": "ejemplo",
        "fr": "exemple",
        "it": "esempio",
        "de": "das Beispiel"
    },
    {
        "pl": "prawdziwy",
        "en": "real",
        "gr": "αληθής",
        "es": "real",
        "fr": "réel",
        "it": "reale",
        "de": "wirklich"
    },
    {
        "pl": "literować",
        "en": "spell",
        "gr": "συλλαβίζω",
        "es": "deletrear",
        "fr": "épeler",
        "it": "incantesimo",
        "de": "buchstabieren"
    },
    {
        "pl": "odblokować",
        "en": "unlock",
        "gr": "ξεκλειδώνω",
        "es": "abrir",
        "fr": "ouvrir",
        "it": "sbloccare",
        "de": "freischalten"
    },
    {
        "pl": "piekarnik",
        "en": "oven",
        "gr": "φούρνος",
        "es": "horno",
        "fr": "four",
        "it": "forno",
        "de": "der Ofen"
    },
    {
        "pl": "tłuszcz, otyły",
        "en": "fat",
        "gr": "παχύ",
        "es": "grasa",
        "fr": "graisse",
        "it": "grasso",
        "de": "dick"
    },
    {
        "pl": "niefortunny",
        "en": "ill-fated",
        "gr": "κακότυχος",
        "es": "malogrado",
        "fr": "infortuné",
        "it": "sventurato",
        "de": "unglückselig"
    },
    {
        "pl": "strach na wróble",
        "en": "scarecrow",
        "gr": "σκιάχτρο",
        "es": "espantapájaros",
        "fr": "épouvantail",
        "it": "spaventapasseri",
        "de": "die Vogelscheuhe"
    },
    {
        "pl": "paskudny",
        "en": "nasty",
        "gr": "αηδιαστικός",
        "es": "repugnante",
        "fr": "répugnant",
        "it": "disgustoso",
        "de": "gemein"
    },
    {
        "pl": "zagraniczny",
        "en": "boundless",
        "gr": "απεριόριστο",
        "es": "ilimitado",
        "fr": "illimité",
        "it": "illimitato",
        "de": "grenzenlos"
    },
    {
        "pl": "wykonalny",
        "en": "workable",
        "gr": "εφαρμόσιμο",
        "es": "factible",
        "fr": "faisable",
        "it": "lavorabile",
        "de": "funktionsfähig"
    },
    {
        "pl": "zakres",
        "en": "range",
        "gr": "σειρά",
        "es": "alcance",
        "fr": "portée",
        "it": "gamma",
        "de": "die Reichweite"
    },
    {
        "pl": "zawierać",
        "en": "include",
        "gr": "συμπεριλαμβάνω",
        "es": "incluir",
        "fr": "inclure",
        "it": "includere",
        "de": "einschließen"
    },
    {
        "pl": "z drugiej ręki",
        "en": "second-hand",
        "gr": "δεύτερο χέρι",
        "es": "segunda mano",
        "fr": "d'occasion",
        "it": "usato",
        "de": "aus zweiter Hand"
    },
    {
        "pl": "pyzaty",
        "en": "chubby",
        "gr": "παχουλός",
        "es": "regordete",
        "fr": "grassouillet",
        "it": "paffuto",
        "de": "mollig"
    },
    {
        "pl": "łatwowierny",
        "en": "gullible",
        "gr": "εύπιστος",
        "es": "crédulo",
        "fr": "crédule",
        "it": "credulone",
        "de": "leichtgläubig"
    },
    {
        "pl": "wojujący",
        "en": "belligerent",
        "gr": "εμπόλεμος",
        "es": "beligerante",
        "fr": "belligérent",
        "it": "bellicoso",
        "de": "angriffslustig"
    },
    {
        "pl": "szyja",
        "en": "neck",
        "gr": "λαιμός",
        "es": "cuello",
        "fr": "cou",
        "it": "collo",
        "de": "der Hals"
    },
    {
        "pl": "niezdarny",
        "en": "clumsy",
        "gr": "αδέξιος",
        "es": "torpe",
        "fr": "maladroit",
        "it": "goffo",
        "de": "ungeschikt"
    },
    {
        "pl": "donkiszotowski",
        "en": "quixotic",
        "gr": "δονκιχωτικός",
        "es": "quijotesco",
        "fr": "idéaliste",
        "it": "romantico",
        "de": "abenteuerlich"
    },
    {
        "pl": "krzepki",
        "en": "robust",
        "gr": "εύρωστος",
        "es": "robusto",
        "fr": "robuste",
        "it": "robusto",
        "de": "robust"
    },
    {
        "pl": "kwarc",
        "en": "quartz",
        "gr": "χαλαζίας",
        "es": "cuarzo",
        "fr": "quartz",
        "it": "quarzo",
        "de": "der Quarz"
    },
    {
        "pl": "drapać",
        "en": "scratch",
        "gr": "γρατσουνιά",
        "es": "rasguño",
        "fr": "égratignure",
        "it": "graffio",
        "de": "der Kratzer"
    },
    {
        "pl": "kurz",
        "en": "dust",
        "gr": "σκόνη",
        "es": "polvo",
        "fr": "poussière",
        "it": "polvere",
        "de": "der Staub"
    },
    {
        "pl": "zwyczajny",
        "en": "ordinary",
        "gr": "απλό",
        "es": "ordinario",
        "fr": "ordinaire",
        "it": "ordinario",
        "de": "gewöhnlich"
    },
    {
        "pl": "zamawiać",
        "en": "order",
        "gr": "παραγγελία",
        "es": "orden",
        "fr": "ordre",
        "it": "ordine",
        "de": "die Ordnung"
    },
    {
        "pl": "strażak",
        "en": "fireman",
        "gr": "πυροσβέστης",
        "es": "bombero",
        "fr": "pompier",
        "it": "pompiere",
        "de": "der Feuerwehrmann"
    },
    {
        "pl": "środkowy",
        "en": "middle",
        "gr": "μέση",
        "es": "medio",
        "fr": "moyen",
        "it": "metà",
        "de": "die Mitte"
    },
    {
        "pl": "chwycić",
        "en": "grab",
        "gr": "αρπάζω",
        "es": "agarrar",
        "fr": "saisir",
        "it": "afferrare",
        "de": "fassen"
    },
    {
        "pl": "kochany",
        "en": "dear",
        "gr": "αγαπητός",
        "es": "querido",
        "fr": "cher",
        "it": "caro",
        "de": "lieb"
    },
    {
        "pl": "przystojny",
        "en": "seemly",
        "gr": "ευπρεπής",
        "es": "decente",
        "fr": "bienséant",
        "it": "appropriato",
        "de": "anständig"
    },
    {
        "pl": "nagroda",
        "en": "reward",
        "gr": "ανταμοιβή",
        "es": "recompensa",
        "fr": "récompense",
        "it": "ricompensa",
        "de": "die Belohnung"
    },
    {
        "pl": "mleko",
        "en": "milk",
        "gr": "γάλα",
        "es": "leche",
        "fr": "lait",
        "it": "latte",
        "de": "die Milch"
    },
    {
        "pl": "zmieniać, przerobić",
        "en": "alert",
        "gr": "συναγερμός",
        "es": "alerta",
        "fr": "alerte",
        "it": "allerta",
        "de": "der Alarm"
    },
    {
        "pl": "guz, gula",
        "en": "bump",
        "gr": "χτύπημα",
        "es": "bulto",
        "fr": "bosse",
        "it": "bozzo",
        "de": "die Beule"
    },
    {
        "pl": "aksjomatyczny",
        "en": "axiomatic",
        "gr": "αξιωματικό",
        "es": "axiomático",
        "fr": "axiomatique",
        "it": "assiomatico",
        "de": "grundsätzlich"
    },
    {
        "pl": "prasa, naciskać, naciśnięcie",
        "en": "press",
        "gr": "τύπος",
        "es": "prensa",
        "fr": "presse",
        "it": "premere",
        "de": "die Presse"
    },
    {
        "pl": "duży",
        "en": "large",
        "gr": "μεγάλο",
        "es": "grande",
        "fr": "gran",
        "it": "largo",
        "de": "groß"
    },
    {
        "pl": "duchowy",
        "en": "spiritual",
        "gr": "πνευματικός",
        "es": "espiritual",
        "fr": "spirituel",
        "it": "spirituale",
        "de": "spirituell"
    },
    {
        "pl": "stacja",
        "en": "station",
        "gr": "σταθμός",
        "es": "estación",
        "fr": "station",
        "it": "stazione",
        "de": "der Bahnhof"
    },
    {
        "pl": "nogi",
        "en": "legs",
        "gr": "πόδια",
        "es": "piernas",
        "fr": "jambes",
        "it": "gambe",
        "de": "die Beine"
    },
    {
        "pl": "nadwodny",
        "en": "aquatic",
        "gr": "υδρόβιο",
        "es": "acuático",
        "fr": "aquatique",
        "it": "acquatico",
        "de": "wasserbewohnend"
    },
    {
        "pl": "akcja",
        "en": "action",
        "gr": "δράση",
        "es": "acción",
        "fr": "action",
        "it": "azione",
        "de": "die Handlung"
    },
    {
        "pl": "parasol",
        "en": "umbrella",
        "gr": "ομπρέλα",
        "es": "paraguas",
        "fr": "parapluie",
        "it": "ombrello",
        "de": "der Regenschirm"
    },
    {
        "pl": "umysł",
        "en": "mind",
        "gr": "μυαλό",
        "es": "mente",
        "fr": "esprit",
        "it": "mente",
        "de": "der Verstand"
    },
    {
        "pl": "żyrafa",
        "en": "giraffe",
        "gr": "καμηλοπάρδαλη",
        "es": "jirafa",
        "fr": "girafe",
        "it": "giraffa",
        "de": "die Giraffe"
    },
    {
        "pl": "żywiołowy",
        "en": "exuberant",
        "gr": "πληθωρικός",
        "es": "exuberante",
        "fr": "exubérant",
        "it": "esuberante",
        "de": "ausgelassen"
    },
    {
        "pl": "lichy",
        "en": "flimsy",
        "gr": "εύθραυστο",
        "es": "endeble",
        "fr": "fragile",
        "it": "sottile",
        "de": "leicht"
    },
    {
        "pl": "suchy",
        "en": "dry",
        "gr": "ξηρό",
        "es": "seco",
        "fr": "sec",
        "it": "asciutto",
        "de": "trocken"
    },
    {
        "pl": "miłosierny",
        "en": "merciful",
        "gr": "εύσπλαχνος",
        "es": "misericordioso",
        "fr": "miséricordieux",
        "it": "pietoso",
        "de": "gnädig"
    },
    {
        "pl": "cenny",
        "en": "precious",
        "gr": "πολύτιμο",
        "es": "precioso",
        "fr": "précieux",
        "it": "prezioso",
        "de": "kostbar"
    },
    {
        "pl": "radosny",
        "en": "joyous",
        "gr": "περιχαρής",
        "es": "jubiloso",
        "fr": "joyeux",
        "it": "gioioso",
        "de": "freudig"
    },
    {
        "pl": "nieprzekonywujący",
        "en": "inconclusive",
        "gr": "ασαφή",
        "es": "no concluyente",
        "fr": "peu concluent",
        "it": "inconcludente",
        "de": "ergebnislos"
    },
    {
        "pl": "ruszt",
        "en": "grate",
        "gr": "σχάρα",
        "es": "rechinar",
        "fr": "grincer",
        "it": "digrignare",
        "de": "reiben"
    },
    {
        "pl": "garnek",
        "en": "pot",
        "gr": "κατσαρόλα",
        "es": "maceta",
        "fr": "pot",
        "it": "pentola",
        "de": "der Topf"
    },
    {
        "pl": "zwięzły",
        "en": "succinct",
        "gr": "περιληπτικός",
        "es": "succint",
        "fr": "succint",
        "it": "succinto",
        "de": "prägnant"
    },
    {
        "pl": "wąski",
        "en": "narrow",
        "gr": "στενό",
        "es": "estrecho",
        "fr": "étroit",
        "it": "angusto",
        "de": "eng"
    },
    {
        "pl": "młodzieńczy",
        "en": "youthful",
        "gr": "νεανικό",
        "es": "juvenil",
        "fr": "jeube",
        "it": "giovanile",
        "de": "jungendlich"
    },
    {
        "pl": "jajka",
        "en": "eggs",
        "gr": "αυγά",
        "es": "huevos",
        "fr": "œufs",
        "it": "uova",
        "de": "die Eier"
    },
    {
        "pl": "zimno",
        "en": "cold",
        "gr": "κρύο",
        "es": "frio",
        "fr": "froid",
        "it": "freddo",
        "de": "kalt"
    },
    {
        "pl": "zgodny",
        "en": "agreeable",
        "gr": "δεκτός",
        "es": "agradable",
        "fr": "agréable",
        "it": "gradevole",
        "de": "angenehm"
    },
    {
        "pl": "tron",
        "en": "throne",
        "gr": "θρόνος",
        "es": "trono",
        "fr": "trône",
        "it": "trono",
        "de": "der Thron"
    },
    {
        "pl": "kara",
        "en": "punishment",
        "gr": "τιμωρία",
        "es": "castigo",
        "fr": "punition",
        "it": "punizione",
        "de": "die Strafe"
    },
    {
        "pl": "makabryczny",
        "en": "gruesome",
        "gr": "φρικτός",
        "es": "horrible",
        "fr": "repoussant",
        "it": "raccapricciante",
        "de": "grauenhaft"
    },
    {
        "pl": "szczypać",
        "en": "pinch",
        "gr": "τσίμπημα",
        "es": "pellizcar",
        "fr": "pincer",
        "it": "pizzicotto",
        "de": "kneifen"
    },
    {
        "pl": "polowanie",
        "en": "hunt",
        "gr": "κυνήγι",
        "es": "cazar",
        "fr": "chasser",
        "it": "cacciare",
        "de": "die Jagd"
    },
    {
        "pl": "relacja",
        "en": "relation",
        "gr": "σχέση",
        "es": "relación",
        "fr": "relation",
        "it": "relazione",
        "de": "die Beziehung"
    },
    {
        "pl": "skóra",
        "en": "skin",
        "gr": "δέρμα",
        "es": "piel",
        "fr": "peau",
        "it": "pelle",
        "de": "die Haut"
    },
    {
        "pl": "głupkowaty",
        "en": "goofy",
        "gr": "ανόητος",
        "es": "bobo",
        "fr": "bizarre",
        "it": "goffo",
        "de": "albern"
    },
    {
        "pl": "drogie",
        "en": "pricey",
        "gr": "ακριβό",
        "es": "caro",
        "fr": "cher",
        "it": "caro",
        "de": "kostspielig"
    },
    {
        "pl": "podwójny",
        "en": "double",
        "gr": "διπλό",
        "es": "doble",
        "fr": "double",
        "it": "doppio",
        "de": "doppelt"
    },
    {
        "pl": "ucho",
        "en": "ear",
        "gr": "αυτί",
        "es": "oreja",
        "fr": "oreille",
        "it": "orecchio",
        "de": "das Ohr"
    },
    {
        "pl": "anioł",
        "en": "angle",
        "gr": "γωνία",
        "es": "ángulo",
        "fr": "angle",
        "it": "angolo",
        "de": "der Winkel"
    },
    {
        "pl": "grzebień",
        "en": "comb",
        "gr": "χτένα",
        "es": "peine",
        "fr": "peigne",
        "it": "pettine",
        "de": "kämmen"
    },
    {
        "pl": "korzeń",
        "en": "root",
        "gr": "ρίζα",
        "es": "raíz",
        "fr": "racine",
        "it": "radice",
        "de": "die Wurzel"
    },
    {
        "pl": "ziemniak",
        "en": "potato",
        "gr": "πατάτα",
        "es": "patata",
        "fr": "pomme de terre",
        "it": "patata",
        "de": "die Kartoffel"
    },
    {
        "pl": "zdolny",
        "en": "able",
        "gr": "ικανός",
        "es": "capaz",
        "fr": "capable",
        "it": "capace",
        "de": "fähig"
    },
    {
        "pl": "soda",
        "en": "soda",
        "gr": "σόδα",
        "es": "soda",
        "fr": "soda",
        "it": "soda",
        "de": "das Soda"
    },
    {
        "pl": "używać",
        "en": "use",
        "gr": "χρήση",
        "es": "uso",
        "fr": "utilisation",
        "it": "uso",
        "de": "benutzen"
    },
    {
        "pl": "ostatni",
        "en": "last",
        "gr": "τελευταία",
        "es": "último",
        "fr": "dernier",
        "it": "ultimo",
        "de": "letzte"
    },
    {
        "pl": "dodanie",
        "en": "addition",
        "gr": "πρόσθεση",
        "es": "adición",
        "fr": "addition",
        "it": "aggiunta",
        "de": "die Ergänzung"
    },
    {
        "pl": "błyszczący",
        "en": "shiny",
        "gr": "λαμπερό",
        "es": "brillante",
        "fr": "brillant",
        "it": "brillante",
        "de": "glänzend"
    },
    {
        "pl": "kołnierz",
        "en": "collar",
        "gr": "περιλαίμιο",
        "es": "collar",
        "fr": "collier",
        "it": "collare",
        "de": "der Kragen"
    },
    {
        "pl": "doraźnie",
        "en": "ad hoc",
        "gr": "ad hoc",
        "es": "ad hoc",
        "fr": "ad hoc",
        "it": "ad hoc",
        "de": "ad hoc"
    },
    {
        "pl": "schronienie",
        "en": "shelter",
        "gr": "καταφύγιο",
        "es": "abrigo",
        "fr": "abri",
        "it": "rifugio",
        "de": "der Unterschlupf"
    },
    {
        "pl": "ja, jaźń",
        "en": "self",
        "gr": "εαυτός",
        "es": "mismo",
        "fr": "soi-même",
        "it": "sé",
        "de": "selbst"
    },
    {
        "pl": "przerwa",
        "en": "brake",
        "gr": "φρένο",
        "es": "freno",
        "fr": "frein",
        "it": "freno",
        "de": "die Bremse"
    },
    {
        "pl": "żywy",
        "en": "lively",
        "gr": "ζωηρός",
        "es": "animado",
        "fr": "animé",
        "it": "vivace",
        "de": "lebhaft"
    },
    {
        "pl": "szczęśliwy",
        "en": "happy",
        "gr": "ευτυχισμένος",
        "es": "feliz",
        "fr": "heureux",
        "it": "felice",
        "de": "froh"
    },
    {
        "pl": "zapominalski",
        "en": "forgetful",
        "gr": "ξεχασιάρης",
        "es": "olvidadizo",
        "fr": "distrait",
        "it": "smemorato",
        "de": "vergesslich"
    },
    {
        "pl": "pojawić się",
        "en": "appear",
        "gr": "εμφανίζονται",
        "es": "aparecer",
        "fr": "apparaitre",
        "it": "apparire",
        "de": "erscheinen"
    },
    {
        "pl": "autorytet",
        "en": "authority",
        "gr": "εξουσία",
        "es": "autoridad",
        "fr": "autorité",
        "it": "autorità",
        "de": "die Behörde"
    },
    {
        "pl": "kapusta",
        "en": "cabbage",
        "gr": "λάχανο",
        "es": "repollo",
        "fr": "chou",
        "it": "cavolo",
        "de": "das Kraut"
    },
    {
        "pl": "niegodziwiec",
        "en": "miscreant",
        "gr": "αχρείος",
        "es": "malhechor",
        "fr": "vaurien",
        "it": "criminale",
        "de": "der Missetäter"
    },
    {
        "pl": "dżem",
        "en": "jam",
        "gr": "μαρμελάδα",
        "es": "mermelada",
        "fr": "confiture",
        "it": "marmellata",
        "de": "die Marmelade"
    },
    {
        "pl": "bić",
        "en": "bead",
        "gr": "χάντρα",
        "es": "perla",
        "fr": "perle",
        "it": "perlina",
        "de": "die Perle"
    },
    {
        "pl": "pożywny",
        "en": "nutritious",
        "gr": "θρεπτικό",
        "es": "nutritivo",
        "fr": "nutritif",
        "it": "nutrizionale",
        "de": "nahrhaft"
    },
    {
        "pl": "bezwzględny",
        "en": "ruthless",
        "gr": "αδίστακτος",
        "es": "despiadado",
        "fr": "impitoyable",
        "it": "spietato",
        "de": "mitleidlos"
    },
    {
        "pl": "początkujący",
        "en": "beginner",
        "gr": "αρχάριος",
        "es": "principiante",
        "fr": "débutant",
        "it": "principiante",
        "de": "der Anfänger"
    },
    {
        "pl": "promieniować",
        "en": "radiate",
        "gr": "ακτινοβολώ",
        "es": "irradiar",
        "fr": "irradier",
        "it": "irradiare",
        "de": "verspühen"
    },
    {
        "pl": "chmiel",
        "en": "hop",
        "gr": "πήδημα",
        "es": "saltar",
        "fr": "sauter",
        "it": "saltellare",
        "de": "hüpfen"
    },
    {
        "pl": "aparat fotograficzny, kamera",
        "en": "camera",
        "gr": "κάμερα",
        "es": "cámara",
        "fr": "caméra",
        "it": "fotocamera",
        "de": "die Kamera"
    },
    {
        "pl": "śnieg",
        "en": "snow",
        "gr": "χιόνι",
        "es": "nieve",
        "fr": "neige",
        "it": "neve",
        "de": "der Schnee"
    },
    {
        "pl": "ogromny",
        "en": "enormous",
        "gr": "τεράστιο",
        "es": "enorme",
        "fr": "énorme",
        "it": "enorme",
        "de": "riesig"
    },
    {
        "pl": "mroczny",
        "en": "murky",
        "gr": "σκοτεινό",
        "es": "turbio",
        "fr": "glauque",
        "it": "torbido",
        "de": "trüb"
    },
    {
        "pl": "wiadro",
        "en": "bucket",
        "gr": "κάδος / κουβάς",
        "es": "balde",
        "fr": "seau",
        "it": "secchio",
        "de": "der Eimer"
    },
    {
        "pl": "wsparcie",
        "en": "support",
        "gr": "υποστήριξη",
        "es": "apoyo",
        "fr": "soutien",
        "it": "supporto",
        "de": "die Unterstützung"
    },
    {
        "pl": "klasztorny",
        "en": "cloistered",
        "gr": "εγκλωβισμένα",
        "es": "conventual",
        "fr": "monastique",
        "it": "monastico",
        "de": "abgeschieden"
    },
    {
        "pl": "półgłówek",
        "en": "zany",
        "gr": "γελωτοποιός",
        "es": "chiflado",
        "fr": "zinzin",
        "it": "folle",
        "de": "verrückt"
    },
    {
        "pl": "obserwować",
        "en": "observe",
        "gr": "παρατηρώ",
        "es": "observar",
        "fr": "observer",
        "it": "osservare",
        "de": "beobachten"
    },
    {
        "pl": "kwadrat, plac",
        "en": "square",
        "gr": "πλατεία",
        "es": "cuadrado",
        "fr": "carré",
        "it": "quadrato",
        "de": "das Quadrat"
    },
    {
        "pl": "elastyczny",
        "en": "elastic",
        "gr": "ελαστικό",
        "es": "elástico",
        "fr": "élastique",
        "it": "elastico",
        "de": "das Gummiband"
    },
    {
        "pl": "kwaśny",
        "en": "acidic",
        "gr": "όξινο",
        "es": "ácido",
        "fr": "acide",
        "it": "acido",
        "de": "sauer"
    },
    {
        "pl": "drżeć",
        "en": "tremble",
        "gr": "τρέμω",
        "es": "temblar",
        "fr": "trembler",
        "it": "tremolare",
        "de": "zittern"
    },
    {
        "pl": "agonalny",
        "en": "agonizing",
        "gr": "αγωνιώδης",
        "es": "agonizante",
        "fr": "agonisant",
        "it": "agonizzante",
        "de": "qualvoll"
    },
    {
        "pl": "melodyczny",
        "en": "melodic",
        "gr": "μελωδικό",
        "es": "melódico",
        "fr": "mélodique",
        "it": "melodico",
        "de": "melodisch"
    },
    {
        "pl": "zidentyfikować",
        "en": "identify",
        "gr": "αναγνωρίζω",
        "es": "identifiar",
        "fr": "identifier",
        "it": "identificare",
        "de": "identifizieren"
    },
    {
        "pl": "obserwacja",
        "en": "observation",
        "gr": "παρατήρηση",
        "es": "observación",
        "fr": "observation",
        "it": "osservazione",
        "de": "die Beobachtung"
    },
    {
        "pl": "spacer",
        "en": "walk",
        "gr": "περπατώ",
        "es": "caminar",
        "fr": "marcher",
        "it": "camminare",
        "de": "spazierengehen"
    },
    {
        "pl": "gospodarstwo",
        "en": "farm",
        "gr": "φάρμα",
        "es": "granja",
        "fr": "ferme",
        "it": "fattoria",
        "de": "der Bauerhof"
    },
    {
        "pl": "masywny",
        "en": "chunky",
        "gr": "πεπλατυσμένο",
        "es": "fornido",
        "fr": "trapu",
        "it": "massiccio",
        "de": "stämmig"
    },
    {
        "pl": "długi",
        "en": "long",
        "gr": "μακρύς",
        "es": "largo",
        "fr": "long",
        "it": "lungo",
        "de": "lang"
    },
    {
        "pl": "samolubny",
        "en": "selfish",
        "gr": "εγωιστής",
        "es": "egoísta",
        "fr": "égoïste",
        "it": "egoista",
        "de": "egoistisch"
    },
    {
        "pl": "odblaskowy",
        "en": "reflective",
        "gr": "αντανακλαστική",
        "es": "reflectante",
        "fr": "réfléchissant",
        "it": "riflettente",
        "de": "nachdenklich"
    },
    {
        "pl": "kompleks",
        "en": "complex",
        "gr": "σύμπλεγμα",
        "es": "complejo",
        "fr": "complexe",
        "it": "complesso",
        "de": "kompliziert"
    },
    {
        "pl": "fajnie",
        "en": "fine",
        "gr": "πρόστιμο",
        "es": "multa",
        "fr": "amende",
        "it": "distinto",
        "de": "die Geldstrafe"
    },
    {
        "pl": "jasny",
        "en": "bright",
        "gr": "φωτεινό",
        "es": "brillante",
        "fr": "brillant",
        "it": "luminoso",
        "de": "hell"
    },
    {
        "pl": "srebro",
        "en": "silver",
        "gr": "ασήμι",
        "es": "plata",
        "fr": "argent",
        "it": "argento",
        "de": "das Silber"
    },
    {
        "pl": "posłuszny",
        "en": "obeisant",
        "gr": "υπακούοντας",
        "es": "reverente",
        "fr": "docile",
        "it": "riverente",
        "de": "gehorsam"
    },
    {
        "pl": "strzyżyk",
        "en": "wren",
        "gr": "τρυποφράκτης",
        "es": "chochín",
        "fr": "roitelet",
        "it": "scricciolo",
        "de": "Zaunkönig"
    },
    {
        "pl": "młot, młotek",
        "en": "hammer",
        "gr": "σφυρί",
        "es": "martillo",
        "fr": "marteau",
        "it": "martello",
        "de": "der Hammer"
    },
    {
        "pl": "beczenie",
        "en": "moaning",
        "gr": "γκρίνια",
        "es": "gimiendo",
        "fr": "gémissant",
        "it": "gemere",
        "de": "ächzend"
    },
    {
        "pl": "zdumiewający",
        "en": "amazing",
        "gr": "καταπληκτικό",
        "es": "asombroso",
        "fr": "superbe",
        "it": "fantastico",
        "de": "erstaunlich"
    },
    {
        "pl": "przerażający",
        "en": "frightening",
        "gr": "τρομακτικό",
        "es": "aterrador",
        "fr": "terrifiant",
        "it": "spaventoso",
        "de": "beänstigend"
    },
    {
        "pl": "smażyć",
        "en": "fry",
        "gr": "τηγανίζω",
        "es": "freír",
        "fr": "frire",
        "it": "friggere",
        "de": "braten"
    },
    {
        "pl": "minuta",
        "en": "minute",
        "gr": "λεπτό",
        "es": "minuto",
        "fr": "minute",
        "it": "minuto",
        "de": "die Minute"
    },
    {
        "pl": "mający zawroty głowy",
        "en": "woozy",
        "gr": "ζαλισμένος",
        "es": "mareado",
        "fr": "vaseux",
        "it": "confuso",
        "de": "benommen"
    },
    {
        "pl": "kukurydza",
        "en": "corn",
        "gr": "καλαμπόκι",
        "es": "maíz",
        "fr": "maïs",
        "it": "mais",
        "de": "der Mais"
    },
    {
        "pl": "przystosowawczy",
        "en": "adaptable",
        "gr": "προσαρμόσιμο",
        "es": "adaptable",
        "fr": "adaptable",
        "it": "adattabile",
        "de": "anpassungsfähig"
    },
    {
        "pl": "ulica",
        "en": "street",
        "gr": "δρόμος",
        "es": "calle",
        "fr": "rue",
        "it": "strada",
        "de": "die Straße"
    },
    {
        "pl": "wiedza",
        "en": "knowledge",
        "gr": "γνώση",
        "es": "conocimiento",
        "fr": "connaissance",
        "it": "conoscenza",
        "de": "das Wissen"
    },
    {
        "pl": "słoma",
        "en": "straw",
        "gr": "καλαμάκι",
        "es": "paja",
        "fr": "paille",
        "it": "cannuccia",
        "de": "das Stroh"
    },
    {
        "pl": "groteskowy",
        "en": "ludicrous",
        "gr": "γελοίος",
        "es": "ridículo",
        "fr": "riicule",
        "it": "comico",
        "de": "lächerlich"
    },
    {
        "pl": "rozumieć",
        "en": "understood",
        "gr": "εννοείται",
        "es": "entendido",
        "fr": "compris",
        "it": "compreso",
        "de": "verstanden"
    },
    {
        "pl": "porywisty",
        "en": "gusty",
        "gr": "βροντερό",
        "es": "borrascoso",
        "fr": "soufflant en rafales",
        "it": "burrascoso",
        "de": "stürmisch"
    },
    {
        "pl": "majestatyczny",
        "en": "majestic",
        "gr": "μεγαλοπρεπή",
        "es": "majestuoso",
        "fr": "majestueux",
        "it": "maestoso",
        "de": "majestätisch"
    },
    {
        "pl": "muzyka pop",
        "en": "pop",
        "gr": "κρότος",
        "es": "música pop",
        "fr": "pop",
        "it": "scoppio",
        "de": "aufplatzen"
    },
    {
        "pl": "spięty",
        "en": "uptight",
        "gr": "νευρικός",
        "es": "tenso",
        "fr": "tendu",
        "it": "teso",
        "de": "verklemmt"
    },
    {
        "pl": "pajęczyna",
        "en": "cobweb",
        "gr": "ιστός αράχνης",
        "es": "telaraña",
        "fr": "toile d'araignée",
        "it": "ragnatela",
        "de": "das Spinnennetz"
    },
    {
        "pl": "szorstki",
        "en": "harsh",
        "gr": "σκληρό",
        "es": "áspero",
        "fr": "strict",
        "it": "rigido",
        "de": "brutal"
    },
    {
        "pl": "bezinteresowny",
        "en": "unbiased",
        "gr": "αμερόληπτος",
        "es": "imparcial",
        "fr": "impartial",
        "it": "imparziale",
        "de": "unparteiisch"
    },
    {
        "pl": "posiekać",
        "en": "chop",
        "gr": "κόψιμο",
        "es": "picar",
        "fr": "hacher",
        "it": "spaccare",
        "de": "hacken"
    },
    {
        "pl": "ramię",
        "en": "arm",
        "gr": "μπράτσο",
        "es": "brazo",
        "fr": "bras",
        "it": "braccio",
        "de": "der Arm"
    },
    {
        "pl": "łyk",
        "en": "sip",
        "gr": "γουλιά",
        "es": "sorbo",
        "fr": "gorgée",
        "it": "sorso",
        "de": "der Schluck"
    },
    {
        "pl": "futurystyczny",
        "en": "futuristic",
        "gr": "φουτουριστικό",
        "es": "futurista",
        "fr": "futuriste",
        "it": "futuristico",
        "de": "futuristisch"
    },
    {
        "pl": "pogoda",
        "en": "weather",
        "gr": "καιρός",
        "es": "tiempo",
        "fr": "temps",
        "it": "tempo",
        "de": "das Wetter"
    },
    {
        "pl": "proszę",
        "en": "please",
        "gr": "παρακαλώ",
        "es": "por favor",
        "fr": "s'il te plait",
        "it": "accontentare",
        "de": "bitte"
    },
    {
        "pl": "kontynuować",
        "en": "continue",
        "gr": "συνέχεια",
        "es": "continuar",
        "fr": "continuer",
        "it": "continuare",
        "de": "folgen"
    },
    {
        "pl": "nietoperz",
        "en": "bat",
        "gr": "νυχτερίδα",
        "es": "murciélago",
        "fr": "chauve souris",
        "it": "pipistrello",
        "de": "die Fledermaus"
    },
    {
        "pl": "żart",
        "en": "joke",
        "gr": "αστείο",
        "es": "broma",
        "fr": "blague",
        "it": "scherzo",
        "de": "der Witz"
    },
    {
        "pl": "rozpryskiwać",
        "en": "scatter",
        "gr": "σκορπίζω",
        "es": "dispersión",
        "fr": "dispersion",
        "it": "sparpagliarsi",
        "de": "verstreuen"
    },
    {
        "pl": "mówić",
        "en": "talk",
        "gr": "μιλώ",
        "es": "hablar",
        "fr": "parler",
        "it": "parlare",
        "de": "sprechen"
    },
    {
        "pl": "psychotyczny",
        "en": "psychotic",
        "gr": "ψυχωτικό",
        "es": "psicópata",
        "fr": "psychopate",
        "it": "psicotico",
        "de": "psychotisch"
    },
    {
        "pl": "niebieskooki",
        "en": "blue-eyed",
        "gr": "γαλανομάτης / γαλανομάτα",
        "es": "de ojos azules",
        "fr": "yeux bleus",
        "it": "con gli occhi blu",
        "de": "blauäugig"
    },
    {
        "pl": "w ogniu",
        "en": "ablaze",
        "gr": "φλεγόμενο",
        "es": "en llamas",
        "fr": "enflammé",
        "it": "infiammato",
        "de": "in Flammen"
    },
    {
        "pl": "wtyczka",
        "en": "plug",
        "gr": "πρίζα",
        "es": "enchufe",
        "fr": "bouchon",
        "it": "spina",
        "de": "der Stecker"
    },
    {
        "pl": "skok",
        "en": "jump",
        "gr": "πήδημα",
        "es": "saltar",
        "fr": "sauter",
        "it": "saltare",
        "de": "springen"
    },
    {
        "pl": "śpiący",
        "en": "sleepy",
        "gr": "νυσταγμένος",
        "es": "soñoliento",
        "fr": "ensommeillé",
        "it": "assonnato",
        "de": "schläfrig"
    },
    {
        "pl": "rozmamłany",
        "en": "unkempt",
        "gr": "απεριποίητος",
        "es": "desaliñado",
        "fr": "négligé",
        "it": "trasandato",
        "de": "ungepflegt"
    },
    {
        "pl": "zbłądzić",
        "en": "wander",
        "gr": "περιπλανιέμαι",
        "es": "vagar",
        "fr": "flâner",
        "it": "errare",
        "de": "wandern"
    },
    {
        "pl": "religia",
        "en": "religion",
        "gr": "θρησκεία",
        "es": "religión",
        "fr": "religion",
        "it": "religione",
        "de": "die Religion"
    },
    {
        "pl": "terapeutyczny",
        "en": "therapeutic",
        "gr": "θεραπευτικό",
        "es": "terapéutico",
        "fr": "thérapeutique",
        "it": "terapeutico",
        "de": "therapeutisch"
    },
    {
        "pl": "kolosalny",
        "en": "colossal",
        "gr": "κολοσσιαίο",
        "es": "colosal",
        "fr": "colossal",
        "it": "colossale",
        "de": "rieig"
    },
    {
        "pl": "wierzyć",
        "en": "believe",
        "gr": "πιστεύω",
        "es": "creer",
        "fr": "croire",
        "it": "credere",
        "de": "glauben"
    },
    {
        "pl": "oczyścić",
        "en": "clear",
        "gr": "καθαρό",
        "es": "claro",
        "fr": "clair",
        "it": "trasparente",
        "de": "klar"
    },
    {
        "pl": "skręcenie",
        "en": "twist",
        "gr": "διάστρεμμα",
        "es": "torcedura",
        "fr": "tordu",
        "it": "attorcigliare",
        "de": "die Wendung"
    },
    {
        "pl": "dotknąć",
        "en": "touch",
        "gr": "άγγιγμα",
        "es": "tocar",
        "fr": "toucher",
        "it": "toccare",
        "de": "berühren"
    },
    {
        "pl": "puszysty",
        "en": "fluffy",
        "gr": "χνουδωτό",
        "es": "mullido",
        "fr": "moelleux",
        "it": "soffice",
        "de": "flauschig"
    },
    {
        "pl": "krąg",
        "en": "circle",
        "gr": "κύκλος",
        "es": "círculo",
        "fr": "cercle",
        "it": "cerchio",
        "de": "der Kreis"
    },
    {
        "pl": "przerazić",
        "en": "terrify",
        "gr": "τρομάζω",
        "es": "aterrorizar",
        "fr": "terrifier",
        "it": "terrificare",
        "de": "schreken"
    },
    {
        "pl": "schludny",
        "en": "neat",
        "gr": "νοικοκυρεμένος",
        "es": "ordenado",
        "fr": "ordonner",
        "it": "pulito",
        "de": "ordentlich"
    },
    {
        "pl": "marudny",
        "en": "fretful",
        "gr": "ευέξαπτος",
        "es": "irritable",
        "fr": "rechigné",
        "it": "irritabile",
        "de": "genervt"
    },
    {
        "pl": "róża",
        "en": "rose",
        "gr": "τριαντάφυλλο",
        "es": "rosa",
        "fr": "rose",
        "it": "rosa",
        "de": "die Rose"
    },
    {
        "pl": "zwycięzca",
        "en": "achiever",
        "gr": "κατορθωτής",
        "es": "cumplidor",
        "fr": "doué",
        "it": "persona di successo",
        "de": "der Erfolgstyp"
    },
    {
        "pl": "uleczyć",
        "en": "cure",
        "gr": "θεραπεία",
        "es": "cura",
        "fr": "soin",
        "it": "cura",
        "de": "das Heilmittel"
    },
    {
        "pl": "zwycięski",
        "en": "victorious",
        "gr": "νικηφόρο",
        "es": "victorioso",
        "fr": "victorieux",
        "it": "vittorioso",
        "de": "siegreich"
    },
    {
        "pl": "pas",
        "en": "strip",
        "gr": "λωρίδα",
        "es": "tira",
        "fr": "banda",
        "it": "striscia",
        "de": "abschneiden"
    },
    {
        "pl": "pasta",
        "en": "paste",
        "gr": "πάστα",
        "es": "pasta",
        "fr": "pâte",
        "it": "incolla",
        "de": "kleben"
    },
    {
        "pl": "pokonany",
        "en": "defeated",
        "gr": "νικημένος",
        "es": "derrotado",
        "fr": "vaincu",
        "it": "sconfitto",
        "de": "abgeschlagen"
    },
    {
        "pl": "usunąć",
        "en": "remove",
        "gr": "αφαιρώ",
        "es": "quitar",
        "fr": "retirer",
        "it": "rimuovere",
        "de": "entfernen"
    },
    {
        "pl": "czapka",
        "en": "cap",
        "gr": "καπάκι",
        "es": "tapa",
        "fr": "capsule",
        "it": "tappo",
        "de": "die Mütze"
    },
    {
        "pl": "rowery",
        "en": "bikes",
        "gr": "ποδήλατα",
        "es": "bicicletas",
        "fr": "bicyclettes",
        "it": "bici",
        "de": "die Fahrräder"
    },
    {
        "pl": "obiad",
        "en": "lunch",
        "gr": "μεσημεριανό",
        "es": "almuerzo",
        "fr": "déjeuner",
        "it": "pranzo",
        "de": "das Mittagessen"
    },
    {
        "pl": "przygotować",
        "en": "prepare",
        "gr": "προετοιμάζω",
        "es": "preparar",
        "fr": "préparer",
        "it": "preparare",
        "de": "vorbereiten"
    },
    {
        "pl": "stopień",
        "en": "degree",
        "gr": "βαθμός",
        "es": "grado",
        "fr": "mesure",
        "it": "laurea",
        "de": "der Grad"
    },
    {
        "pl": "śruba",
        "en": "screw",
        "gr": "βίδα",
        "es": "tornillo",
        "fr": "vis",
        "it": "avvitare",
        "de": "die Schraube"
    },
    {
        "pl": "dobrze sytuowany",
        "en": "well-to-do",
        "gr": "εύπορος",
        "es": "adinerado",
        "fr": "aisé",
        "it": "benestante",
        "de": "wohlhabend"
    },
    {
        "pl": "koń",
        "en": "horse",
        "gr": "άλογο",
        "es": "caballo",
        "fr": "cheval",
        "it": "cavallo",
        "de": "das Pferd"
    },
    {
        "pl": "but",
        "en": "boot",
        "gr": "μπότα",
        "es": "bota",
        "fr": "botte",
        "it": "stivale",
        "de": "der Kofferraum"
    },
    {
        "pl": "dywan",
        "en": "carpet",
        "gr": "χαλί",
        "es": "alfombra",
        "fr": "tapis",
        "it": "tappeto",
        "de": "der Teppich"
    },
    {
        "pl": "pociągi",
        "en": "trains",
        "gr": "τρένα",
        "es": "trenes",
        "fr": "trains",
        "it": "treni",
        "de": "die Züge"
    },
    {
        "pl": "przypuszczać",
        "en": "suppose",
        "gr": "υποθέτω",
        "es": "suponer",
        "fr": "supposer",
        "it": "supporre",
        "de": "vermuten"
    },
    {
        "pl": "stolarz",
        "en": "carpenter",
        "gr": "ξυλουργός",
        "es": "carpintero",
        "fr": "charpentier",
        "it": "falegname",
        "de": "der Zimmermann"
    },
    {
        "pl": "kawałek",
        "en": "bit",
        "gr": "κομμάτι",
        "es": "poco",
        "fr": "peu",
        "it": "pezzetto",
        "de": "ein bisschen"
    },
    {
        "pl": "zgniły",
        "en": "rotten",
        "gr": "σάπιο",
        "es": "podrido",
        "fr": "pourri",
        "it": "marcio",
        "de": "morsch"
    },
    {
        "pl": "drobna",
        "en": "petite",
        "gr": "μικροκαμωμένο",
        "es": "chiquita",
        "fr": "petite",
        "it": "minuto",
        "de": "kleine"
    },
    {
        "pl": "droga",
        "en": "road",
        "gr": "δρόμος",
        "es": "carretera",
        "fr": "route",
        "it": "strada",
        "de": "die Straße"
    },
    {
        "pl": "bomba",
        "en": "bomb",
        "gr": "βόμβα",
        "es": "bomba",
        "fr": "bombe",
        "it": "bomba",
        "de": "die Bombe"
    },
    {
        "pl": "wstyd",
        "en": "shame",
        "gr": "ντροπή",
        "es": "vergüenza",
        "fr": "honte",
        "it": "vergogna",
        "de": "die Scham"
    },
    {
        "pl": "klaps, policzkować",
        "en": "slap",
        "gr": "σφαλιάρα",
        "es": "bofetada",
        "fr": "gifle",
        "it": "schiaffo",
        "de": "schlagen"
    },
    {
        "pl": "przestępstwo",
        "en": "crime",
        "gr": "έγκλημα",
        "es": "crimen",
        "fr": "crime",
        "it": "crimine",
        "de": "die Kriminalität"
    },
    {
        "pl": "lizać",
        "en": "lick",
        "gr": "γλείψιμο",
        "es": "lamer",
        "fr": "lécher",
        "it": "leccare",
        "de": "lecken"
    },
    {
        "pl": "dwuznaczny",
        "en": "ambiguous",
        "gr": "διφορούμενος",
        "es": "ambiguo",
        "fr": "ambigu",
        "it": "ambiguo",
        "de": "mehrdeutig"
    },
    {
        "pl": "ryzyko",
        "en": "risk",
        "gr": "ρίσκο",
        "es": "riesgo",
        "fr": "risque",
        "it": "rischio",
        "de": "das Risiko"
    },
    {
        "pl": "powódź",
        "en": "flood",
        "gr": "πλημμύρα",
        "es": "inundación",
        "fr": "innondation",
        "it": "allagamento",
        "de": "die Flut"
    },
    {
        "pl": "łuskowaty",
        "en": "flaky",
        "gr": "εύθρυπτο",
        "es": "escamoso",
        "fr": "friable",
        "it": "friabile",
        "de": "flockig"
    },
    {
        "pl": "skąpy",
        "en": "stingy",
        "gr": "τσιγκούνης",
        "es": "tacaño",
        "fr": "avare",
        "it": "avaro",
        "de": "geizig"
    },
    {
        "pl": "wdzięczny",
        "en": "graceful",
        "gr": "ευχάριστος",
        "es": "agraciado",
        "fr": "élégant",
        "it": "aggraziato",
        "de": "graziös"
    },
    {
        "pl": "żonglować",
        "en": "juggle",
        "gr": "ταχυδακτυλουργία",
        "es": "hacer juegos malabares",
        "fr": "jongler",
        "it": "fare il giocoliere",
        "de": "jonglieren"
    },
    {
        "pl": "oddzielny",
        "en": "separate",
        "gr": "ξεχωριστό",
        "es": "separar",
        "fr": "séparer",
        "it": "separare",
        "de": "trennen"
    },
    {
        "pl": "miejsce",
        "en": "spot",
        "gr": "σημείο",
        "es": "lugar",
        "fr": "endroit",
        "it": "punto",
        "de": "der Fleck"
    },
    {
        "pl": "wymiana",
        "en": "exchange",
        "gr": "ανταλλαγή",
        "es": "intercambio",
        "fr": "échanger",
        "it": "scambio",
        "de": "der Austauch"
    },
    {
        "pl": "mecz",
        "en": "match",
        "gr": "αγώνας",
        "es": "cerilla",
        "fr": "allumette",
        "it": "partita",
        "de": "das Spiel"
    },
    {
        "pl": "rejestr",
        "en": "record",
        "gr": "ρεκόρ",
        "es": "registro",
        "fr": "registre",
        "it": "primato",
        "de": "der Rekord"
    },
    {
        "pl": "przeszłość",
        "en": "past",
        "gr": "παρελθόν",
        "es": "pasado",
        "fr": "passé",
        "it": "passato",
        "de": "die Vergangenheit"
    },
    {
        "pl": "piosenki",
        "en": "songs",
        "gr": "τραγούδια",
        "es": "canciones",
        "fr": "chansons",
        "it": "canzoni",
        "de": "die Lieder"
    },
    {
        "pl": "śmiech",
        "en": "laugh",
        "gr": "γέλιο",
        "es": "risa",
        "fr": "rire",
        "it": "ridere",
        "de": "lachen"
    },
    {
        "pl": "kwiat",
        "en": "flower",
        "gr": "λουλούδι",
        "es": "flor",
        "fr": "fleur",
        "it": "fiore",
        "de": "die Blume"
    },
    {
        "pl": "psychodeliczny",
        "en": "psychedelic",
        "gr": "ψυχεδελικό",
        "es": "psicodélico",
        "fr": "psychédélique",
        "it": "psichedelico",
        "de": "psychedelisch"
    },
    {
        "pl": "piękny",
        "en": "beautiful",
        "gr": "όμορφο",
        "es": "hermoso",
        "fr": "beau",
        "it": "bellissimo",
        "de": "wunderschön"
    },
    {
        "pl": "biec truchtem",
        "en": "jog",
        "gr": "τζόκινγκ",
        "es": "sacudir",
        "fr": "donner un coup",
        "it": "correre",
        "de": "joggen"
    },
    {
        "pl": "prawdopodobny",
        "en": "probable",
        "gr": "πιθανός",
        "es": "probable",
        "fr": "probable",
        "it": "probabile",
        "de": "wahrscheinlich"
    },
    {
        "pl": "deszcz",
        "en": "rain",
        "gr": "βροχή",
        "es": "lluvia",
        "fr": "pluie",
        "it": "pioggia",
        "de": "regnen"
    },
    {
        "pl": "domy",
        "en": "houses",
        "gr": "σπίτια",
        "es": "casas",
        "fr": "maisons",
        "it": "case",
        "de": "die Häuser"
    },
    {
        "pl": "ból, owrzodzenie",
        "en": "sore",
        "gr": "πληγή",
        "es": "doloroso",
        "fr": "enfdolori",
        "it": "indolenzito",
        "de": "schmerzhaft"
    },
    {
        "pl": "grzmiący",
        "en": "thundering",
        "gr": "βροντή",
        "es": "tremendo",
        "fr": "tonitruant",
        "it": "fragoroso",
        "de": "donnernd"
    },
    {
        "pl": "prześwietny",
        "en": "splendid",
        "gr": "υπέροχο",
        "es": "espléndido",
        "fr": "splendide",
        "it": "splendido",
        "de": "großartig"
    },
    {
        "pl": "orzechowy",
        "en": "nutty",
        "gr": "σκληρό καρύδι",
        "es": "loco",
        "fr": "fou",
        "it": "eccentrico",
        "de": "nussartig"
    },
    {
        "pl": "drakońskie",
        "en": "draconian",
        "gr": "δρακόντεια",
        "es": "draconiano",
        "fr": "draconien",
        "it": "draconiano",
        "de": "drakonisch"
    },
    {
        "pl": "automatyczny",
        "en": "automatic",
        "gr": "αυτόματο",
        "es": "automático",
        "fr": "automatique",
        "it": "automatico",
        "de": "automatisch"
    },
    {
        "pl": "chwiejny",
        "en": "shaky",
        "gr": "τρεμώδες",
        "es": "tambaleante",
        "fr": "tremblant",
        "it": "tremulo",
        "de": "zitternd"
    },
    {
        "pl": "zrzędliwy",
        "en": "grouchy",
        "gr": "γκρινιάρης",
        "es": "malhumorado",
        "fr": "grognon",
        "it": "burbero",
        "de": "grantig"
    },
    {
        "pl": "mieć na celu",
        "en": "purpose",
        "gr": "σκοπός",
        "es": "propósito",
        "fr": "objectif",
        "it": "scopo",
        "de": "der Zweck"
    }]

}
return window.db = db;

})();
!(function() {
    "use strict";
// ----------------------------------------------------
// Engine //
//-----------------------------------------------------

var engine = {}

engine.init = function(){

// block iOS vertical scroll and bounce effect
document.addEventListener('touchmove',function(e){
      
      e.preventDefault();
  
});


var modal = $('#modal')

// pass delay time as attribute so you can use diferent feedback time for wrong and correct answer
var nextStep = function(delayTime){
    
    var question_placeholder = $('#question_placeholder'),
        scoreValue = $('#scoreValue')

    question_placeholder.velocity("fadeOut", {  queue: false, duration:300, delay:delayTime, complete:function(){
     
		if (core.game.isPlaying() == true) {
		
			question.generate()
			core.eventBus.triggerHandler("showQuestion")
			question_placeholder.velocity("fadeIn", {duration:300})
		
		
		} else {
			

            document.querySelector("#modalContent p:nth-child(1)").style.display = 'none'
            document.querySelector("#modalContent p:nth-child(2)").style.display = 'block'


			modal.velocity("fadeIn",{ display:"block", duration:300})
			scoreValue.velocity({fontSize:"50px"}, {duration:150, easing:"easeInOutQuint"})
                
               
		}
     
    }
    
    });
   

};


core.eventBus.on("wrongAnswer",function(){

    nextStep(1500);

});
 
 
core.eventBus.on("correctAnswer",function(){
 
    nextStep(400)
    

});

$('#submit').on('click touchend', function(e){

    e.preventDefault()
    validateLang()

    if($('#modal').is(':visible')){
    
      return;
    
    }else{
    
        nextStep(400)    
    
    }   
    

    //return false;

});



var validateLang = function(){
    var select1 = $('.selectedOption')[0].innerHTML;
    var select2 = $('.selectedOption')[1].innerHTML;
    var isMainViewTrue = true;

    //console.log(select1 == select2 ? "Equal" : "Not equal");
    if (select1 == select2){
            select1 != select2
    }else{

        isMainViewTrue ? null : nextStep(400);  
        views.close();

    }

        
}

 
modal.on("click touchend",function(e){

    e.preventDefault()
    
    var language_selection_first = document.querySelector('.language_selection_first')

    $(this).velocity("fadeOut",{duration:300, display:"none"})
    //language_selection_first.velocity("fadeOut",{duration:10, display:"none"})
    language_selection_first.style.display = 'none';
    
	core.eventBus.triggerHandler("startGame")

	//remove all incorrect answers if they exceed 500 words
	incorrectAnswers = JSON.parse(window.localStorage['allincorrectanswers'])
	if (incorrectAnswers.length > 500){
		localStorage.removeItem("allincorrectanswers");	
	}


});


core.eventBus.on("startGame", function(){

   	core.game.start()
	nextStep(0)
	message.show("<p><img src='img/punch_icon.png' /> <span class='go_msg'> GO! </span></p>")

 

});

core.eventBus.on("gameOver", function(){

	core.game.end()
 	message.show("Game Over!")

    
    //$('.language_selection_first').velocity("fadeIn", { delay: 2500, duration: 500 })

    //console.log(trophies)
    
 	scoreSet()
 	highScore()
 	setStats()

 	

});

var scoreSet = function(){
	
	//latest score	
	var usersLastScore = score.value - 150;
		if (usersLastScore < 0){
			usersLastScore = 0;
		}
 		
 		//localStorage.setItem('usersLastScore', usersLastScore)
 		//save incorrect answers during the game to local storage
        var usersLastScores = [];

        if (window.localStorage['usersLastScores'] != null){
            usersLastScores = JSON.parse(window.localStorage['usersLastScores'])
        }
        usersLastScores.push(usersLastScore);
        window.localStorage['usersLastScores'] = JSON.stringify(usersLastScores);
        

}

var highScore = function(){

	var userscores = localStorage.getItem('usersLastScores')

		 if (userscores){
			
			var numArray = userscores.match(/\d+/g); 

			numArray.sort(function(a,b){return a-b});

			var largest = numArray[numArray.length - 1];

			$('.h_s').text(largest)

            //checktrophies()

		}


        //add trophies
        // function checktrophies(){
        //     if (largest > 600){
        //         $('#trophies p').hide();
        //         $('#trophies').append('<img class="glow" src="img/magical_script.png"/>')
        //     }
        // }

};

var setStats = function(){

    var stats_screen = $('.stats_screen');
    var now = new Date;
    var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

	var scoreS = JSON.parse(localStorage.getItem('usersLastScores'))
        var currentYear = new Date();    
        currentYear.getFullYear() + "/" + (currentYear.getMonth() + 1) + "/" + currentYear.getDate();
    if (scoreS != null){
    
    stats_screen.highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: currentYear.toJSON(currentYear).slice(0, 10),
            style: {
                color: '#ffffff'
            }
        },
        xAxis: {
		    title:{
		        text: 'Sequencial Performance',
		        style: {
		           color: '#ffffff',
		           fontSize: '12px',
		           fontWeight: 'normal'
		        }
		    },
            labels: {
                style: {
                    color: '#ffffff'
                }
            },
		    type: 'datetime',
		    dateTimeLabelFormats: {
		        //day: '%e.%b'   
		    },
		    showFirstLabel: false
		},
        yAxis: {
            title: {
                text: 'Points',
                style: {
                    color: '#ffffff'
                }
            },
            labels: {
                style: {
                    color: '#ffffff'
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Performance',
            //pointInterval: 24 * 3600 * 1000,
            //pointStart: Date.UTC(2015, 8, 21),
            pointStart: utc_timestamp,
            data: scoreS.slice(Math.max(scoreS.length - 10, 0))
        }]

    });
 }

}


$(function(){

	core.eventBus.triggerHandler("startApp");
	highScore();
	setStats();

});



}


return window.engine = engine

})();


!(function() {
	"use strict";
// ----------------------------------------------------
// Levels module //
//-----------------------------------------------------

var levels = {}
levels.init = function(){



// ----------------------------------------------------
// Local variables //
//-----------------------------------------------------
	
var level = 0;
var answers = 0;
var modules = [];


// ----------------------------------------------------
// Reset levels //
//-----------------------------------------------------
	
var reset = function(){

	level = 0;
	answers = 0;
    
    for (var x = 0; x < modules.length ; x++) {
	
		updateModuleSettings(modules[x])
	
	}

};


// ----------------------------------------------------
// Helper function to get current level settings  //
//-----------------------------------------------------

// type in the console levels.getCurrent() to see active level configuration

levels.getCurrent = function(){
	
	for (var x = 0; x < modules.length ; x++) {
	
		console.log(modules[x].module.name, modules[x].config[level])
	
	}
	
};

// ----------------------------------------------------
// Register module  //
//-----------------------------------------------------

// We are pushing module settings here when initialize module

levels.registerModule = function(module,config){

	var obj = {module:module,config:config}
	modules.push(obj)
	updateModuleSettings(obj)

};


// ----------------------------------------------------
// Update module settings due to level settings  //
//-----------------------------------------------------

// Loop through all registered modules and update their settings

var levelUp = function(){

	level++
	
	for (var x = 0; x < modules.length ; x++) {
	
		updateModuleSettings(modules[x])
	
	}

};


var updateModuleSettings = function(obj){
	
	for (var key in obj.config[level] ) {
	
		if (obj.module.hasOwnProperty(key)) {
				
			obj.module[key] = obj.config[level][key] 
	
		}
	
	}

};


// ----------------------------------------------------
// Check game status - is it time to levelup?  //
//-----------------------------------------------------


	
 
var checkStatus = function(){

	answers++
	
	//change to 5,8,16,25,100,200,300,350,400 for production
	var numOfLevels = [];

        if (window.localStorage['numOfLevels'] != null){
            numOfLevels = JSON.parse(window.localStorage['numOfLevels'])
        }

	if (answers == 5) {
		levelUp()
		message.show("Level 2")
		numOfLevels.push(2);
		
	
	} else if (answers == 8) {
	
		levelUp()
		message.show("Level 3")
		message.show('<img class="glow" src="img/medalx50.png"/>')
		document.querySelector('.medal50').style.opacity = 1;
		numOfLevels.push(3);

		
	}
	else if (answers == 16){
		levelUp()
		message.show("Level 4")
		message.show('<img class="glow" src="img/medalx100.png"/>')
		document.querySelector('.medal100').style.opacity = 1;
		numOfLevels.push(4);


	}
	else if (answers == 25){
		levelUp()
		message.show("Level 5")
		message.show('<img class="glow" src="img/feather1.png"/>')
		document.querySelector('.feather').style.opacity = 1;
		numOfLevels.push(5);
	}
	else if (answers == 100){
		levelUp()
		message.show("Level 6")
		message.show('<img class="glow" src="img/diamond.png"/>')	
		document.querySelector('.diamond').style.opacity = 1;
		numOfLevels.push(6);
	}
	else if (answers == 200){
		levelUp()
		message.show("Level 7")	
		message.show('<img class="glow" src="img/diamond.png"/>')
		numOfLevels.push(7);
	}
	else if (answers == 300){
		levelUp()
		message.show("Level 8")
		message.show('<img class="glow" src="img/feather1.png"/>')
		numOfLevels.push(8);

	}
	else if (answers == 350){
		levelUp()
		message.show("Level 9")	
		message.show('<img class="glow" src="img/medalx100.png"/>')
		numOfLevels.push(9);

	}
	else if (answers == 400){
		levelUp()
		message.show("Level 10")
		message.show('<img class="glow" src="img/crown.png"/>')
		document.querySelector('.crown').style.opacity = 1;
		numOfLevels.push(10);

	}
        window.localStorage['numOfLevels'] = JSON.stringify(numOfLevels);

	return false;

}





	var checkCollections = function(){

		var numOfLevels = JSON.parse(localStorage.getItem('numOfLevels'))

		Array.prototype.contains = function(k) {
		  for(var i=0; i < this.length; i++){
		    if(this[i] === k){
		      return true;
		    }
		  }
		  return false;
		}

		if (numOfLevels){
			if (numOfLevels.contains(3)){ document.querySelector('.medal50').style.opacity = 1; }
			if (numOfLevels.contains(4)){ document.querySelector('.medal100').style.opacity = 1; }
			if (numOfLevels.contains(5)){ document.querySelector('.feather').style.opacity = 1; }
			if (numOfLevels.contains(6)){ document.querySelector('.diamond').style.opacity = 1; }
			if (numOfLevels.contains(10)){ document.querySelector('.crown').style.opacity = 1; }
		}

	}


	checkCollections()

// ----------------------------------------------------
// Add event listeners //
//-----------------------------------------------------

core.eventBus.on("correctAnswer",function(){
	
	checkStatus()

});

core.eventBus.on("wrongAnswer",function(){
	
	checkStatus()

});

core.eventBus.on("startGame",function(){
	
	reset()

});




}

return window.levels = levels


})();
!(function() {
  "use strict";
var lifes = {}
lifes.init = function(){

lifes.total = 3


// ----------------------------------------------------
// Local variables //
//-----------------------------------------------------

var container = $("#stars")



// ----------------------------------------------------
// generate img //
//-----------------------------------------------------

var generateImages = function(){

	// prepare to animation and clean content
	container.css("bottom", "130px")
    container.empty()
    
    for (var x=0; x<lifes.active; x++) {
    
        var star = '<img src="img/star@2x.png" width="30px" height="30px" class="star">';
       	container.append(star);
    

    }
    
	container.velocity({opacity:1, bottom:"100px"}, 300)

};

// ----------------------------------------------------
// Reset //
//-----------------------------------------------------


var reset = function(){

	lifes.active = lifes.total;
	generateImages();

};


// ----------------------------------------------------
// Remove life //
//-----------------------------------------------------


var removeOne = function(){

   $($("#stars > .star")[lifes.active-1]).velocity({opacity:0.3}, {duration:300})
   lifes.active--;

};

// ----------------------------------------------------
// Add events listeners //
//-----------------------------------------------------

core.eventBus.on("wrongAnswer",function(){
 
    removeOne();
	if (lifes.active == 0) core.eventBus.triggerHandler("gameOver")

});


core.eventBus.on("startGame",function(){
    
    reset()
	

}); 
 
}

return window.lifes = lifes


})();
!(function() {
// ----------------------------------------------------
// Messages module //
//-----------------------------------------------------

var message = {}

message.init = function(){

// ----------------------------------------------------
// Local variables //
//-----------------------------------------------------
	
var el = $("#messages");
var topPosition = parseInt(el.css("top"),10);
var topPositionBeforeShow = topPosition - 25;

var isShowingMessage = false;
var fastTrack = false;
var messages = [];

// ----------------------------------------------------
// Create new message //
//-----------------------------------------------------

var createMessage = function(text){

    messages.push(text);
    
    
    // if this is first message - show it
    if ((!isShowingMessage) && (messages.length === 1) ) {  
    
        isShowingMessage = true;
        showMessage();

    // if there are other messages - activate fastTrack
    } else if ((isShowingMessage) && (messages.length > 1) && (!fastTrack)){
    
        activateFastTrack()
    
    } 

};


// ----------------------------------------------------
// Takes message from the queue and activates animation //
//-----------------------------------------------------

var showMessage = function(){

    var messageText = messages.shift()
  
    el.html(messageText)
    el.css("top",topPositionBeforeShow)

    animateMessage()
    
};


// ----------------------------------------------------
// Fast track - change speed to faster when other messages are in the queue //
//-----------------------------------------------------

var activateFastTrack = function(){
 
    fastTrack = true;

    el.velocity("stop");
    
    animateMessage();
    

};


// ----------------------------------------------------
// Animation  //
//-----------------------------------------------------

var animateMessage = function(){

    if (fastTrack) {
        
        showTime = 200; 
    
    } else {
    
        showTime = 2200;
    
    } 
    
    
    el.velocity({opacity:1, top:topPosition}, {delay: 50, display:"block", duration:350, easing:"easeOutQuart", complete:function(){
        
    
            el.velocity({opacity:0},{display:"none", duration:400, easing:"easeOutQuart", delay:showTime, complete:function(){
            
                
                checkQueue();
            
            
            } })
       
    }})


};

// ----------------------------------------------------
// Queue //
//-----------------------------------------------------


var checkQueue = function(){
        
    if (messages.length == 1) {  
        
        fastTrack = false;
        showMessage(); 

    } else if (messages.length > 0) {
        
        showMessage();
    
    } else {
    
        isShowingMessage = false;

    }

};



// ----------------------------------------------------
// Exposed methods //
//-----------------------------------------------------

message.show = function(text){
    
   
    createMessage(text);
    

};

}

return window.message = message

})();
!(function(){
    "use strict";
var particles = {}

particles.init = function (){

	var options = {

    particleType:"square", // square, text
    particleText:"☆",
   
	emitterShape:":)",
    emitterFontSize:150,
	emitterType:"random", // random, point, text
    emitterPositionX:50,
    emitterPositionY:50,
    particlesNumber: 50,
    initialSize: 2,
    randomSize: true,
    minimumSize:2,
    maximumSize:3,
    moveLimit: 50,
    durationMin: 150,
    durationMax: 250,
    
    lifeTime:false,
    lifeTimeMin:100,
    lifeTimeMax:100,
    
    // particles color
    red:255,
    green:0,
    blue:255,
    opacity:1,
    randomOpacity: true,
    particleMinimumOpacity:0.1,
    particleMaximumOpacity:0.3,
    
    // connections between particles
    // drawConnections: true,
    drawConnections: false,
    connectionRed:150,
    connectionGreen:30,
    connectionBlue:200,
    connectionOpacity:0.1,
    
    // mouse connections
    mouseInteraction:false,
    mouseInteractionType:"gravity", // initial, gravity
	
	
    drawMouseConnections:false,
    mouseInteractionDistance:300,
    mouseConnectionRed:255,
    mouseConnectionGreen:255,
    mouseConnectionBlue:255,
    mouseConnectionOpacity:0.1,
    
    showStatistics: false,
	backgroundMode:"gradient", // gradient,image
    backgroundImage:"img/wallpaper.jpg",
	
    
    // Use object with property names, to easy identify values in color picker

	backgroundColors: {

		"color1": {positionX:20,positionY:60,color:"9c1f8f"},
		"color2": {positionX:97,positionY:70,color:"000c91"},
		"color3": {positionX:50,positionY:50,color:"ed68ed"}

	}
    
}


generateParticles("bg", options)


}

return window.particles = particles;


})();
!(function() {
    "use strict";
var question = {}
question.init = function(){
// ----------------------------------------------------
// Import database //
//-----------------------------------------------------

db = db.words;

console.log(db.length + " words in the database")


// ----------------------------------------------------
// Local variables //
//-----------------------------------------------------

var word;
var interactionsActive =  false
var container = $("#question_placeholder")
// ----------------------------------------------------
// Generate questiongameScore//
//-----------------------------------------------------


question.generate = function(){
    
    var lastWord = db.length-1;
    
    // select random word to show
    // later change random to statistical choice
    var randomNumber = basic.getRandomNumber(0, lastWord)
    word = db[randomNumber]
    
    // grab correct answer
    var answers = []
    answers.push(word[settings.languageB])
    
    // grab random incorrect answers
    var x = 2;
    
    while ( x > 0 ) {
   
        var incorrectWord = db[basic.getRandomNumber(0, lastWord)][settings.languageB]

        if (answers.indexOf(incorrectWord) == -1) {
        
            answers.push(incorrectWord)
            x--
        
        }
    
    }
    
    
    answers = basic.shuffle(answers)
  

    var template =  '<div id="word"><p>' + word[settings.languageA] + '</p></div>'+
                    '<ul id="answers">'+
                    '<li>' + answers[0] + '</li>'+
                    '<li>' + answers[1] + '</li>'+
                    '<li>' + answers[2] + '</li>'+
                    '</ul>'
    
    container.html(template)
	question.activateInteractions()
    

};


question.blockInteractions = function(){

    interactionsActive = false;

};


question.activateInteractions = function(){

    interactionsActive = true;

};


question.showAnswer = function() {
    
   core.eventBus.triggerHandler("showAnswer")

    
    $("ul li").each(function(index,element){

        
       if ($(element).text() === word[settings.languageB]) {

            //show correct on console
            var correct = word[settings.languageB];

                //console.log('correct is ' + correct)
    
             //$(element).css("background","rgba(0,255,0,0.6")
                $(element).css({'background':'#008000'})


             return false;
       }
        


    });

};

container.on("click touchend","li", function(e){

    e.preventDefault()
    
    
    // we have to block interactions to avoid doubleclicks etc.
    if (interactionsActive === false) return;
    
    question.blockInteractions()
    
    //$(this).css("background","rgba(0,0,0,0.3)")
    $(this).css("background","rgba(255,0,0,0.5)")
    

    if (word[settings.languageB] === $(this).text()) {
        
        
        core.eventBus.triggerHandler("correctAnswer")
       
        
    } else {
    

       core.eventBus.triggerHandler("wrongAnswer")

       //save incorrect answers during the game to local storage
        var incorrectAnswers = [];

        if (window.localStorage['allincorrectanswers'] != null){
            incorrectAnswers = JSON.parse(window.localStorage['allincorrectanswers'])
        }
        incorrectAnswers.push($(this).html());
        window.localStorage['allincorrectanswers'] = JSON.stringify(incorrectAnswers);
     
         
    }
	
	question.showAnswer()
    

});




}

return window.question = question

})();
!(function() {
 	"use strict";
// ----------------------------------------------------
// Score module //
//-----------------------------------------------------

        
var score = {}
score.init = function(){

// ----------------------------------------------------
// Local variables //
//-----------------------------------------------------

var el = $("#scoreValue"),
	gameScore = $('#gameScore'),
	value = 0

var update = function(value){

    // create temp copy to compare value
	var currentScore = score.value;
	
	score.value = score.value + value;
    
	// prevent score below 0
	if ( score.value < 0 ) score.value = 0;
	
	// animate score only if there is any change
	if ( currentScore != score.value ) {
    
		animateScore();
	
	}
 

};




var reset = function(){

	score.value = 0;
	gameScore.velocity({ opacity: 1 }, { display: "block" });


	animateScore();
	el.velocity({fontSize:"26px"}, {duration:150, easing:"easeInOutQuint"})

};



var animateScore = function(){
	
	el.velocity({opacity:0, top:"-20px"},{duration:150, easing:"easeInOutQuint", complete:function(){
			
		el.text(score.value);
		el.css("top", 20);
		el.velocity({opacity:1, top:0}, {duration:150, easing:"easeInOutQuint"})
		
		
	}})

};



core.eventBus.on("wrongAnswer",function(){
    
   update(-150);
   

});
 
 
core.eventBus.on("correctAnswer",function(){


    // faster answer = more score
    var scoreUp = 100 + core.getScoreModificators()
    

    update(scoreUp);


});
 
core.eventBus.on("startGame",function(){
	

	reset()	

});


var congrats = function (){

//show msg if user collects more than 1000 points
	if (localStorage.getItem('usersLastScore') >= 200 ){ 
		
		//alert('Congrats you reached ' + localStorage.getItem('usersLastScore') + ' ' + 'Simply WOW')  

	}

}





}

return window.score = score;		
		
	
		
})();





!(function() {
    "use strict";
// ----------------------------------------------------
// Selector component for options //
//-----------------------------------------------------

        
var selector = {}
selector.init = function(){

// ----------------------------------------------------
// Take data and render DOM //
//-----------------------------------------------------

selector.create = function(element){
 
    // create reference to object
    var el = $(element)
    
    // take setting name and value
    var basket = el.attr("basket")
    var option = el.attr("option")
    
    var optionValue = settings[option]
    var optionName 
    
    // calculate index
    
    var selectedOptionIndex;
    for (var x=0; x< settings[basket].length; x++ ) {
    
        
        if (settings[basket][x].value == optionValue) {
            
            selectedOptionIndex = x;
            optionName = settings[basket][x].name
            
            
    
        }
    
    
    }
    
    
    el.attr("selected-index", selectedOptionIndex)
    
   
    var buttonLeft = '<span class="btn btnLeft fa fa-arrow-left"></span>'
    var buttonRight = '<span class="btn btnRight fa fa-arrow-right"></span>'
    var selectedOption = '<p class="selectedOption">' + optionName + '</p>'

    var description =  el.attr("description")
    description = '<p class="description">' + description + '</p>'
    
    var DOM = buttonLeft + buttonRight + selectedOption + description;
    

    el.html(DOM)


}

// ----------------------------------------------------
// Attach navigation events //
//-----------------------------------------------------

var selector_btn = $(".selector")

selector_btn.on("click touchend", ".btnLeft", function(e){

    
    e.preventDefault()
    
    var el = $(this).parent()
    
    var optionContainer = el.find(".selectedOption")
    var optionName = el.attr("option")
    var basket = el.attr("basket")
    
    
    var optionIndex = parseInt(el.attr("selected-index"))
    
    var nextIndex = optionIndex + 1
    
    if (nextIndex > settings[basket].length -1) nextIndex = 0;
    
    var newOption = settings[basket][nextIndex]
    
    el.attr("selected-index", nextIndex)
    
    optionContainer.velocity("stop").velocity({left: 100, opacity:0},{duration:400, easing:"easeOutQuart", complete:function(){
      
        optionContainer.text(newOption.name)
        optionContainer.css("left", -100)
        optionContainer.velocity({left: 0, opacity:100},{duration:400, easing:"easeOutQuart", delay:30})
        
        
        }})
        
     
     settings.update(optionName, newOption.value)
    


});


selector_btn.on("click touchend", ".btnRight", function(e){

    
    e.preventDefault()
    
    var el = $(this).parent()

    var optionContainer = el.find(".selectedOption")
  
    var optionName = el.attr("option")

    var basket = el.attr("basket")

    var optionIndex = parseInt(el.attr("selected-index"))
    
    var nextIndex = optionIndex - 1
    
    if (nextIndex < 0 ) nextIndex = settings[basket].length -1;
    
    var newOption = settings[basket][nextIndex]
    
    el.attr("selected-index", nextIndex)

    
    optionContainer.velocity("stop").velocity({left: -100, opacity:0},{duration:400, easing:"easeOutQuart", complete:function(){
      
        optionContainer.text(newOption.name)
        optionContainer.css("left", 100)
        optionContainer.velocity({left: 0, opacity:100},{duration:400, easing:"easeOutQuart", delay:30})
        
        
        }})
        
         
         settings.update(optionName, newOption.value)




});







// ----------------------------------------------------
// Take all components and render //
//-----------------------------------------------------


    selector_btn.each(function(index, element){

      
        selector.create(element)



    })




}


return window.selector = selector;		
		
	
		
})();





!(function() {
    "use strict";
// ----------------------------------------------------
// Settings module //
//-----------------------------------------------------

        
var settings = {}
settings.init = function(){


settings.languageA = "en"
settings.languageB = "es"
settings.languageC = "fr"
settings.languageD = "gr"
settings.languageE = "pl"
settings.languageF = "de"
settings.languageG = "it"


settings.languages = [

    {
        name: "English",
        value: "en"
    },
    {
        name: "Español",
        value: "es"
    },
    {
        name: "Français",
        value: "fr"
    },
    {
        name: "Ελληνικά",
        value: "gr"
    },
    {
        name: "Polski",
        value: "pl"
    },
    {
        name: "Deutsch",
        value: "de"
    },{
        name: "Italiano",
        value: "it"
    }];



settings.update = function(setting, value){

    settings[setting] = value

};


}

return window.settings = settings;		
		
	
		
})();





!(function(){
	"use strict";
var sound = {}
sound.init = function(){

sound.settings = {}


	//stop audio	

	$('audio').each(function(){
	  	this.pause(); // Stop playing
		this.currentTime = 0; // Reset time
	}); 



// ----------------------------------------------------
// Sound status, Did player start the sound? 
//-----------------------------------------------------

var isPlaying = false;

sound.settings.isPlaying = function(){

	return isPlaying;
}

sound.settings.start = function(){

	isPlaying = true;

}

sound.settings.end = function(){

	isPlaying = false;

}




}


return window.sound = sound;

})();
!(function(){
    "use strict";
    
var stats = {}

stats.init = function (){

    var scoreS = JSON.parse(localStorage.getItem('usersLastScores'))
        var currentYear = new Date();    
        currentYear.getFullYear() + "/" + (currentYear.getMonth() + 1) + "/" + currentYear.getDate();

    $('.stats_screen').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: currentYear.toJSON(currentYear).slice(0, 10)
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 4 * 24 * 3600000 // fourteen days
        },
        yAxis: {
            title: {
                text: 'Your Performance'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Performance',
            pointInterval: 24 * 3600 * 1000,
            pointStart: 0,
            data: scoreS
        }]
    });
};

return window.stats = stats;

})();


!(function() {
	"use strict";
// ----------------------------------------------------
// Timer module //
//-----------------------------------------------------

var timer = {}
timer.init = function(){

timer.name = "timer";	
timer.timeToAnswer = null;

var time;
var timerScale = $("#timerScale");


// ----------------------------------------------------
// Basic functions //
//-----------------------------------------------------

var start = function(){
    	
	time = timer.timeToAnswer;
    
    resetAnimation(time);
    
    createNewInterval();

};


var play = function(){
 
    continueAnimation(time);
    
    createNewInterval();

};

var stop = function(){

    clearInterval(timer.interval);
    timerScale.velocity("stop");

};


// ----------------------------------------------------
// Controll animation //
//-----------------------------------------------------

var resetAnimation = function(animationTime){

    var windowWidth = $(window).width();
    
    timerScale.velocity("stop").css("width", windowWidth).velocity({ width:0 },  animationTime);
	
};


var continueAnimation = function(animationTime){


    timerScale.velocity("stop").velocity({ width:0 },  animationTime);
	
};

// ----------------------------------------------------
// Interval function //
//-----------------------------------------------------

var createNewInterval = function(){

   
    if (typeof timer.interval !== "undefined") clearInterval(timer.interval);
    
    timer.interval = setInterval(function(){
      
     
        time -= 100;

        // timeout - trigger wrong answer event
		if (time < 0) {
        
            clearInterval(timer.interval);
            
            core.eventBus.triggerHandler("wrongAnswer");
                
        }
        
        //console.log(time)
        
        
    },100)


};

// ----------------------------------------------------
// Add event listeners //
//-----------------------------------------------------

core.eventBus.on("showAnswer",function(){
	
	stop();

});


core.eventBus.on("showQuestion",function(){
	
	
	start();

});


core.eventBus.on("pauseGame",function(){
	
	stop();

});


core.eventBus.on("continueGame",function(){
	
	
	// create timer only when game started and user have still have some time
	if ( (core.game.isPlaying() === true) && (time > 0) ) play();

});

 

// ----------------------------------------------------
// Push score modificator to core //
//-----------------------------------------------------

var scoreModificator = {
	
	name:"timer", 
	calc: function(){
		
		return Math.floor(time / 100)

	}
}

core.scoreModificators.push(scoreModificator);


// ----------------------------------------------------
// Register module levels //
//-----------------------------------------------------


var levelsConfig = [
	
	{timeToAnswer:8000},
	{timeToAnswer:5000},
	{timeToAnswer:3000}
	
]

levels.registerModule(timer,levelsConfig)


}

return window.timer = timer


})();
!(function() {
    "use strict";
// ----------------------------------------------------
// Views //
//-----------------------------------------------------

var views = {} 
views.init = function(){

// move all views to right side
var view = $(".view")
view.css("left",$(window).width())
view.css("display","block")

// views tree stores user jurney through views (main >> menu >> options etc.) 
var viewsTree = ["main"],
    navigationIcon = $('.navigationIcon'),
    submit = $('#submit')

views.open = function(requestedView){

    var currentView = viewsTree[viewsTree.length - 1];
    
    // do not continue if requested view is already open
    if (currentView == requestedView) return;
    
    // store requested view in the viewsTree array to keep views tracking
    viewsTree.push(requestedView)
    
    // convert names to jQuery selectors
    var currentViewId = "#" + currentView;
    currentViewId = $(currentViewId)
  
    
    var requestedViewId = "#" + requestedView;
    requestedViewId = $(requestedViewId)
    
    // animate views out-in
    currentViewId.velocity("stop").velocity({left: $(window).width()*-1, opacity:0},{duration:400, easing:"easeOutQuart"})
    requestedViewId.velocity("stop").velocity({left:0, opacity:1},{delay:200, duration:400, easing:"easeOutQuart"})
    
    // trigger pause
    core.eventBus.triggerHandler("pauseGame")
    
    

}


views.close = function(){
    
    var currentView = viewsTree.pop()
    var requestedView = viewsTree[viewsTree.length - 1];
       
    // convert names to jQuery selectors
    var currentViewId = "#" + currentView;
    currentViewId = $(currentViewId);
    
    var requestedViewId = "#" + requestedView;
    requestedViewId = $(requestedViewId);
    
      
    // animate views out-in
    currentViewId.velocity("stop").velocity({left: $(window).width(), opacity:0},{ duration:400, easing:"easeOutQuart"})
    requestedViewId.velocity("stop").velocity({left:0, opacity:1},{delay:200, duration:400, easing:"easeOutQuart"})
    
    // continue game when user comes back to game view and game is started
    if ((requestedView === "main") && (core.game.isPlaying() == true)) core.eventBus.triggerHandler("continueGame");
    

};


navigationIcon.on("click touchend", function(e){
   
    e.preventDefault()

    
    // if this is main view - open menu, otherwise go back one level
    if (viewsTree.length === 1) {
        
        views.open("menuView");

    
    } else {
       
        //validateLang(1, function(){

        views.close();    
        
        //});
        

    }
    

});

// submit.on('click touchend', function(e){

//     e.preventDefault()

//     validateLang()
    

// });


// var validateLang = function(){
//     var select1 = $('.selectedOption')[0].innerHTML;
//     var select2 = $('.selectedOption')[1].innerHTML;

//     //console.log(select1 == select2 ? "Equal" : "Not equal");
//     if (select1 == select2){
//             select1 != select2
//     }else{
//         views.close();
//     }

        
// }



// ----------------------------------------------------
// Attach events //
//-----------------------------------------------------

$("[link]").on("click touchend", function(e){

    e.preventDefault();
    views.open($(this).attr("link"));

});



        

// ----------------------------------------------------
// Setup start screen//
//-----------------------------------------------------

core.eventBus.on("startApp", function(e){
    e.preventDefault();


    var main = document.getElementById('main');
        main.style.display = 'block';
        main.style.left = 0;
    

    // main.css("left",0);
    // main.velocity({opacity:1},{display:"block"});

    return false;

});


};


return window.views = views;


})();


// ----------------------------------------------------
// Init //
//-----------------------------------------------------
basic.init()
settings.init()
selector.init()
db.init()
core.init()
message.init()
levels.init()
lifes.init()
question.init()
score.init()
bonus.init()
timer.init()
views.init()
engine.init()

autotranslate.init()
particles.init()


