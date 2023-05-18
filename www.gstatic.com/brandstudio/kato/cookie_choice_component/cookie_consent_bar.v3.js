(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},ca=ba(this),q=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}};
q("Symbol",function(a){if(a)return a;var b=function(f,l){this.ya=f;p(this,"description",{configurable:!0,writable:!0,value:l})};b.prototype.toString=function(){return this.ya};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(f){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(f||"")+"_"+d++,f)};return e});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});
var da=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},r=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},t=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)t(d,e)&&(a[e]=d[e])}return a};q("Object.assign",function(a){return a||ea});
var fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=ha,ma=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.R=b.prototype};
q("WeakMap",function(a){function b(){}function c(h){var k=typeof h;return"object"===k&&null!==h||"function"===k}function d(h){if(!t(h,f)){var k=new b;p(h,f,{value:k})}}function e(h){var k=Object[h];k&&(Object[h]=function(m){if(m instanceof b)return m;Object.isExtensible(m)&&d(m);return k(m)})}if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),k=Object.seal({}),m=new a([[h,2],[k,3]]);if(2!=m.get(h)||3!=m.get(k))return!1;m.delete(h);m.set(k,4);return!m.has(h)&&4==m.get(k)}catch(M){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var l=0,g=function(h){this.D=(l+=Math.random()+1).toString();if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}};g.prototype.set=function(h,k){if(!c(h))throw Error("Invalid WeakMap key");d(h);if(!t(h,f))throw Error("WeakMap key fail: "+h);h[f][this.D]=k;return this};g.prototype.get=function(h){return c(h)&&t(h,f)?h[f][this.D]:void 0};g.prototype.has=function(h){return c(h)&&t(h,f)&&t(h[f],this.D)};
g.prototype.delete=function(h){return c(h)&&t(h,f)&&t(h[f],this.D)?delete h[f][this.D]:!1};return g});
q("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),h=new a(r([[g,"s"]]));if("s"!=h.get(g)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var k=h.entries(),m=k.next();if(m.done||m.value[0]!=g||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(M){return!1}}())return a;var b=new WeakMap,c=function(g){this.B={};this.s=f();
this.size=0;if(g){g=r(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}};c.prototype.set=function(g,h){g=0===g?0:g;var k=d(this,g);k.list||(k.list=this.B[k.id]=[]);k.h?k.h.value=h:(k.h={next:this.s,u:this.s.u,head:this.s,key:g,value:h},k.list.push(k.h),this.s.u.next=k.h,this.s.u=k.h,this.size++);return this};c.prototype.delete=function(g){g=d(this,g);return g.h&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.B[g.id],g.h.u.next=g.h.next,g.h.next.u=g.h.u,g.h.head=null,this.size--,
!0):!1};c.prototype.clear=function(){this.B={};this.s=this.s.u=f();this.size=0};c.prototype.has=function(g){return!!d(this,g).h};c.prototype.get=function(g){return(g=d(this,g).h)&&g.value};c.prototype.entries=function(){return e(this,function(g){return[g.key,g.value]})};c.prototype.keys=function(){return e(this,function(g){return g.key})};c.prototype.values=function(){return e(this,function(g){return g.value})};c.prototype.forEach=function(g,h){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,
g.call(h,m[1],m[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(g,h){var k=h&&typeof h;"object"==k||"function"==k?b.has(h)?k=b.get(h):(k=""+ ++l,b.set(h,k)):k="p_"+h;var m=g.B[k];if(m&&t(g.B,k))for(g=0;g<m.length;g++){var M=m[g];if(h!==h&&M.key!==M.key||h===M.key)return{id:k,list:m,index:g,h:M}}return{id:k,list:m,index:-1,h:void 0}},e=function(g,h){var k=g.s;return da(function(){if(k){for(;k.head!=g.s;)k=k.u;for(;k.next!=k.head;)return k=k.next,{done:!1,value:h(k)};k=null}return{done:!0,
value:void 0}})},f=function(){var g={};return g.u=g.next=g.head=g},l=0;return c});q("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var l=d[f];if(b.call(c,l,f,d)){b=l;break a}}b=void 0}return b}});
var na=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};q("Array.prototype.keys",function(a){return a?a:function(){return na(this,function(b){return b})}});q("Array.prototype.entries",function(a){return a?a:function(){return na(this,function(b,c){return[b,c]})}});
q("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(g){return g};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var l=0;!(f=b.next()).done;)e.push(c.call(d,f.value,l++))}else for(f=b.length,l=0;l<f;l++)e.push(c.call(d,b[l],l));return e}});q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
var oa=oa||{},u=this||self,pa=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},v=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},qa=function(a,b,c){return a.call.apply(a.bind,arguments)},ra=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,
arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?qa:ra;return w.apply(null,arguments)},x=function(a,b){function c(){}c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ha=function(d,e,f){for(var l=Array(arguments.length-2),g=2;g<arguments.length;g++)l[g-2]=arguments[g];return b.prototype[e].apply(d,l)}};var sa="ar bg ca cs da de el en en-GB es et eu fi fr gl hr hu is it iw lt lv mt nl no pl pt-BR pt-PT ro ru sk sl sr sv tr uk".split(" ");function y(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}x(y,Error);y.prototype.name="CustomError";function z(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");y.call(this,c+a[d])}x(z,y);z.prototype.name="AssertionError";function ta(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new z(""+e,f||[]);}
var A=function(a,b,c){a||ta("",null,b,Array.prototype.slice.call(arguments,2));return a},B=function(a,b){throw new z("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},ua=function(a,b,c){"string"!==typeof a&&ta("Expected string but got %s: %s.",[pa(a),a],b,Array.prototype.slice.call(arguments,2));return a};var va=Array.prototype.indexOf?function(a,b){A(null!=a.length);return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var wa=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""},C=function(a,b){if(a.classList)a.classList.add(b);else{if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:wa(a).match(/\S+/g)||[],c=0<=va(c,b);c||(c=wa(a),b=c+(0<c.length?" "+b:b),"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b))}};function xa(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return-1!=xa().indexOf(a)};function ya(){return D("Safari")&&!(za()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||D("Firefox")||D("FxiOS")||D("Silk")||D("Android"))}function za(){return(D("Chrome")||D("CriOS"))&&!D("Edge")||D("Silk")}function Aa(){return D("Android")&&!(za()||D("Firefox")||D("FxiOS")||D("Opera")||D("Silk"))};function Ba(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ga=function(a,b){this.ua=a===Ea&&b||"";this.za=Fa};Ga.prototype.toString=function(){return"Const{"+this.ua+"}"};var Fa={},Ea={};var Ia=function(a,b){this.sa=b===Ha?a:""};Ia.prototype.toString=function(){return this.sa.toString()};var Ha={};var Ja={},E=function(a,b){this.ra=b===Ja?a:""};E.prototype.toString=function(){return this.ra.toString()};var Ka=new E("",Ja);var La=function(a){La[" "](a);return a};La[" "]=function(){};var Ma=D("Trident")||D("MSIE"),Na=D("Gecko")&&!(-1!=xa().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Oa=-1!=xa().toLowerCase().indexOf("webkit")&&!D("Edge");Aa();za();ya();var Pa=!Ma&&!ya(),Ra=function(a){var b=Qa;if(/-[a-z]/.test(a))return null;if(Pa&&b.dataset){if(Aa()&&!(a in b.dataset))return null;a=b.dataset[a];return void 0===a?null:a}return b.getAttribute("data-"+String(a).replace(/([A-Z])/g,"-$1").toLowerCase())};var F=function(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)},G=function(a,b){A(null!=a&&null!=b,"goog.dom.appendChild expects non-null arguments");a.appendChild(b)},Sa=function(a,b){A(null!=a,"goog.dom.setTextContent expects a non-null value for node");if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(A(a.lastChild));
a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);A(a,"Node cannot be null or undefined.");a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))}};var Ta=Object.freeze||function(a){return a};var Ua=function(){this.Y=this.Y};Ua.prototype.Y=!1;var H=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.I=!1};H.prototype.stopPropagation=function(){this.I=!0};H.prototype.preventDefault=function(){this.defaultPrevented=!0};var Va=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{u.addEventListener("test",function(){},b),u.removeEventListener("test",function(){},b)}catch(c){}return a}();var I=function(a,b){H.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.C=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=
b;if(b=a.relatedTarget){if(Na){a:{try{La(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=Oa||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=Oa||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Wa[a.pointerType]||"";this.state=a.state;this.C=a;a.defaultPrevented&&I.R.preventDefault.call(this)}};
x(I,H);var Wa=Ta({2:"touch",3:"pen",4:"mouse"});I.prototype.stopPropagation=function(){I.R.stopPropagation.call(this);this.C.stopPropagation?this.C.stopPropagation():this.C.cancelBubble=!0};I.prototype.preventDefault=function(){I.R.preventDefault.call(this);var a=this.C;a.preventDefault?a.preventDefault():a.returnValue=!1};var J="closure_listenable_"+(1E6*Math.random()|0);var Xa=0;var Ya=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.N=e;this.key=++Xa;this.J=this.L=!1},Za=function(a){a.J=!0;a.listener=null;a.proxy=null;a.src=null;a.N=null};var K=function(a){this.src=a;this.j={};this.T=0};K.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.j[f];a||(a=this.j[f]=[],this.T++);var l=$a(a,b,d,e);-1<l?(b=a[l],c||(b.L=!1)):(b=new Ya(b,this.src,f,!!d,e),b.L=c,a.push(b));return b};K.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.j))return!1;var e=this.j[a];b=$a(e,b,c,d);return-1<b?(Za(e[b]),A(null!=e.length),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.j[a],this.T--),!0):!1};
var ab=function(a,b){var c=b.type;if(c in a.j){var d=a.j[c],e=va(d,b),f;if(f=0<=e)A(null!=d.length),Array.prototype.splice.call(d,e,1);f&&(Za(b),0==a.j[c].length&&(delete a.j[c],a.T--))}};K.prototype.ba=function(a,b,c,d){a=this.j[a.toString()];var e=-1;a&&(e=$a(a,b,c,d));return-1<e?a[e]:null};K.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return Ba(this.j,function(f){for(var l=0;l<f.length;++l)if(!(c&&f[l].type!=d||e&&f[l].capture!=b))return!0;return!1})};
var $a=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.J&&f.listener==b&&f.capture==!!c&&f.N==d)return e}return-1};var bb="closure_lm_"+(1E6*Math.random()|0),cb={},db=0,fb=function(a,b,c,d,e){if(d&&d.once)eb(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)fb(a,b[f],c,d,e);else c=gb(c),a&&a[J]?(d=v(d)?!!d.capture:!!d,hb(a),a.o.add(String(b),c,!1,d,e)):ib(a,b,c,!1,d,e)},ib=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var l=v(e)?!!e.capture:!!e,g=jb(a);g||(a[bb]=g=new K(a));c=g.add(b,c,d,l,f);if(!c.proxy){d=kb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Va||(e=l),void 0===
e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(lb(b.toString()),d);else if(a.addListener&&a.removeListener)A("change"===b,"MediaQueryList only has a change event"),a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");db++}},kb=function(){var a=mb,b=function(c){return a.call(b.src,b.listener,c)};return b},eb=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)eb(a,b[f],c,d,e);else c=gb(c),a&&a[J]?a.o.add(String(b),
c,!0,v(d)?!!d.capture:!!d,e):ib(a,b,c,!0,d,e)},nb=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nb(a,b[f],c,d,e);else d=v(d)?!!d.capture:!!d,c=gb(c),a&&a[J]?a.o.remove(String(b),c,d,e):a&&(a=jb(a))&&(b=a.ba(b,c,d,e))&&ob(b)},ob=function(a){if("number"!==typeof a&&a&&!a.J){var b=a.src;if(b&&b[J])ab(b.o,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(lb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);
db--;(c=jb(b))?(ab(c,a),0==c.T&&(c.src=null,b[bb]=null)):Za(a)}}},lb=function(a){return a in cb?cb[a]:cb[a]="on"+a},mb=function(a,b){if(a.J)a=!0;else{b=new I(b,this);var c=a.listener,d=a.N||a.src;a.L&&ob(a);a=c.call(d,b)}return a},jb=function(a){a=a[bb];return a instanceof K?a:null},pb="__closure_events_fn_"+(1E9*Math.random()>>>0),gb=function(a){A(a,"Listener can not be null.");if("function"===typeof a)return a;A(a.handleEvent,"An object listener must have handleEvent method.");a[pb]||(a[pb]=function(b){return a.handleEvent(b)});
return a[pb]};var qb=function(){};qb.prototype.ga=null;var rb=function(a){return a.ga||(a.ga=a.ka())};var sb,tb=function(){};x(tb,qb);tb.prototype.X=function(){var a=ub(this);return a?new ActiveXObject(a):new XMLHttpRequest};tb.prototype.ka=function(){var a={};ub(this)&&(a[0]=!0,a[1]=!0);return a};
var ub=function(a){if(!a.ja&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ja=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ja};sb=new tb;var vb=function(){};x(vb,qb);vb.prototype.X=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new wb;throw Error("Unsupported browser");};vb.prototype.ka=function(){return{}};
var wb=function(){this.m=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.responseXML=null;this.statusText="";this.m.onload=w(this.Ba,this);this.m.onerror=w(this.ia,this);this.m.onprogress=w(this.Ca,this);this.m.ontimeout=w(this.Da,this)};n=wb.prototype;n.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.m.open(a,b)};
n.send=function(a){if(a)if("string"==typeof a)this.m.send(a);else throw Error("Only string data is supported");else this.m.send()};n.abort=function(){this.m.abort()};n.setRequestHeader=function(){};n.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.m.contentType:""};n.Ba=function(){this.status=200;this.response=this.responseText=this.m.responseText;xb(this,4)};n.ia=function(){this.status=500;this.response=this.responseText="";xb(this,4)};n.Da=function(){this.ia()};
n.Ca=function(){this.status=200;xb(this,1)};var xb=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};wb.prototype.getAllResponseHeaders=function(){return"content-type: "+this.m.contentType};var L=function(){Ua.call(this);this.o=new K(this);this.Aa=this;this.qa=null};x(L,Ua);L.prototype[J]=!0;L.prototype.addEventListener=function(a,b,c,d){fb(this,a,b,c,d)};L.prototype.removeEventListener=function(a,b,c,d){nb(this,a,b,c,d)};
L.prototype.dispatchEvent=function(a){hb(this);var b=this.qa;if(b){var c=[];for(var d=1;b;b=b.qa)c.push(b),A(1E3>++d,"infinite loop")}b=this.Aa;d=a.type||a;if("string"===typeof a)a=new H(a,b);else if(a instanceof H)a.target=a.target||b;else{var e=a;a=new H(d,b);Da(a,e)}e=!0;if(c)for(var f=c.length-1;!a.I&&0<=f;f--){var l=a.currentTarget=c[f];e=yb(l,d,!0,a)&&e}a.I||(l=a.currentTarget=b,e=yb(l,d,!0,a)&&e,a.I||(e=yb(l,d,!1,a)&&e));if(c)for(f=0;!a.I&&f<c.length;f++)l=a.currentTarget=c[f],e=yb(l,d,!1,
a)&&e;return e};var yb=function(a,b,c,d){b=a.o.j[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var l=b[f];if(l&&!l.J&&l.capture==c){var g=l.listener,h=l.N||l.src;l.L&&ab(a.o,l);e=!1!==g.call(h,d)&&e}}return e&&!d.defaultPrevented};L.prototype.ba=function(a,b,c,d){return this.o.ba(String(a),b,c,d)};L.prototype.hasListener=function(a,b){return this.o.hasListener(void 0!==a?String(a):void 0,b)};var hb=function(a){A(a.o,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var N=function(a,b){this.name=a;this.value=b};N.prototype.toString=function(){return this.name};var zb=new N("OFF",Infinity),Ab=new N("SEVERE",1E3),Bb=new N("WARNING",900),Cb=new N("CONFIG",700),Db=new N("FINE",500),Eb=function(){this.M=0;this.clear()},Fb;Eb.prototype.clear=function(){this.fa=Array(this.M);this.ha=-1;this.la=!1};var Gb=function(a,b,c){this.reset(a||zb,b,c,void 0,void 0)};Gb.prototype.reset=function(){};
var Hb=function(a,b){this.level=null;this.Ea=[];this.parent=(void 0===b?null:b)||null;this.children=[];this.na={ca:function(){return a}}},Ib=function(a){if(a.level)return a.level;if(a.parent)return Ib(a.parent);B("Root logger has no level set.");return zb},Jb=function(a,b){for(;a;)a.Ea.forEach(function(c){c(b)}),a=a.parent},Kb=function(){this.entries={};var a=new Hb("");a.level=Cb;this.entries[""]=a},Lb,O=function(a,b){var c=a.entries[b];if(c)return c;c=O(a,b.slice(0,Math.max(b.lastIndexOf("."),0)));
var d=new Hb(b,c);a.entries[b]=d;c.children.push(d);return d},Mb=function(){Lb||(Lb=new Kb);return Lb},Nb=function(a,b,c){var d;if(d=a)if(d=a&&b){d=b.value;var e=a?Ib(O(Mb(),a.ca())):zb;d=d>=e.value}if(d){b=b||zb;d=O(Mb(),a.ca());"function"===typeof c&&(c=c());Fb||(Fb=new Eb);e=Fb;a=a.ca();if(0<e.M){var f=(e.ha+1)%e.M;e.ha=f;e.la?(e=e.fa[f],e.reset(b,c,a),a=e):(e.la=f==e.M-1,a=e.fa[f]=new Gb(b,c,a))}else a=new Gb(b,c,a);Jb(d,a)}},Ob=function(a,b){a&&Nb(a,Ab,b)},P=function(a,b){a&&Nb(a,Db,b)};var Pb=function(a,b,c){if("function"===typeof a)c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:u.setTimeout(a,b||0)};var Qb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");var Q=function(a){L.call(this);this.headers=new Map;this.W=a||null;this.v=!1;this.V=this.g=null;this.H=this.ma=this.P="";this.F=this.da=this.O=this.Z=!1;this.K=0;this.S=null;this.ta="";this.U=this.Ga=this.xa=!1;this.ea=null};x(Q,L);Q.prototype.i=O(Mb(),"goog.net.XhrIo").na;var Rb=/^https?$/i,Sb=["POST","PUT"];Q.prototype.setTrustToken=function(a){this.ea=a};
Q.prototype.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.P+"; newUri="+a);b=b?b.toUpperCase():"GET";this.P=a;this.H="";this.ma=b;this.Z=!1;this.v=!0;this.g=this.W?this.W.X():sb.X();this.V=this.W?rb(this.W):rb(sb);this.g.onreadystatechange=w(this.pa,this);this.Ga&&"onprogress"in this.g&&(this.g.onprogress=w(function(l){this.oa(l,!0)},this),this.g.upload&&(this.g.upload.onprogress=w(this.oa,this)));try{P(this.i,R(this,"Opening Xhr")),this.da=
!0,this.g.open(b,String(a),!0),this.da=!1}catch(l){P(this.i,R(this,"Error opening Xhr: "+l.message));Tb(this,l);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(l){return"content-type"==
l.toLowerCase()});e=u.FormData&&a instanceof u.FormData;!(0<=va(Sb,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.g.setRequestHeader(d,c);this.ta&&(this.g.responseType=this.ta);"withCredentials"in this.g&&this.g.withCredentials!==this.xa&&(this.g.withCredentials=this.xa);if("setTrustToken"in this.g&&this.ea)try{this.g.setTrustToken(this.ea)}catch(l){P(this.i,R(this,"Error SetTrustToken: "+
l.message))}try{Ub(this),0<this.K&&(this.U=Vb(this.g),P(this.i,R(this,"Will abort after "+this.K+"ms if incomplete, xhr2 "+this.U)),this.U?(this.g.timeout=this.K,this.g.ontimeout=w(this.va,this)):this.S=Pb(this.va,this.K,this)),P(this.i,R(this,"Sending request")),this.O=!0,this.g.send(a),this.O=!1}catch(l){P(this.i,R(this,"Send error: "+l.message)),Tb(this,l)}};var Vb=function(a){return Ma&&"number"===typeof a.timeout&&void 0!==a.ontimeout};
Q.prototype.va=function(){"undefined"!=typeof oa&&this.g&&(this.H="Timed out after "+this.K+"ms, aborting",P(this.i,R(this,this.H)),this.dispatchEvent("timeout"),this.abort(8))};var Tb=function(a,b){a.v=!1;a.g&&(a.F=!0,a.g.abort(),a.F=!1);a.H=b;Wb(a);Xb(a)},Wb=function(a){a.Z||(a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
Q.prototype.abort=function(){this.g&&this.v&&(P(this.i,R(this,"Aborting")),this.v=!1,this.F=!0,this.g.abort(),this.F=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Xb(this))};Q.prototype.pa=function(){this.Y||(this.da||this.O||this.F?Yb(this):this.Fa())};Q.prototype.Fa=function(){Yb(this)};
var Yb=function(a){if(a.v&&"undefined"!=typeof oa)if(a.V[1]&&4==S(a)&&2==Zb(a))P(a.i,R(a,"Local request error detected and ignored"));else if(a.O&&4==S(a))Pb(a.pa,0,a);else if(a.dispatchEvent("readystatechange"),4==S(a)){P(a.i,R(a,"Request complete"));a.v=!1;try{if($b(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var b=2<S(a)?a.g.statusText:""}catch(c){P(a.i,"Can not get status: "+c.message),b=""}a.H=b+" ["+Zb(a)+"]";Wb(a)}}finally{Xb(a)}}};
Q.prototype.oa=function(a,b){A("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(ac(a,"progress"));this.dispatchEvent(ac(a,b?"downloadprogress":"uploadprogress"))};
var ac=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Xb=function(a){if(a.g){Ub(a);var b=a.g,c=a.V[0]?function(){}:null;a.g=null;a.V=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){Ob(a.i,"Problem encountered resetting onreadystatechange: "+d.message)}}},Ub=function(a){a.g&&a.U&&(a.g.ontimeout=null);a.S&&(u.clearTimeout(a.S),a.S=null)};Q.prototype.isActive=function(){return!!this.g};
var $b=function(a){var b=Zb(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.P).match(Qb)[1]||null,!a&&u.self&&u.self.location&&(a=u.self.location.protocol.slice(0,-1)),b=!Rb.test(a?a.toLowerCase():"");c=b}return c},S=function(a){return a.g?a.g.readyState:0},Zb=function(a){try{return 2<S(a)?a.g.status:-1}catch(b){return-1}},bc=function(a){try{return a.g?a.g.responseText:""}catch(b){return P(a.i,"Can not get responseText: "+
b.message),""}};Q.prototype.getResponseHeader=function(a){if(this.g&&4==S(this))return a=this.g.getResponseHeader(a),null===a?void 0:a};Q.prototype.getAllResponseHeaders=function(){return this.g&&2<=S(this)?this.g.getAllResponseHeaders()||"":""};var R=function(a,b){return b+" ["+a.ma+" "+a.P+" "+Zb(a)+"]"};var cc=function(){};cc.prototype.next=function(){return dc};var dc=Ta({done:!0,value:void 0});cc.prototype.A=function(){return this};var ec=function(a){if(a instanceof T||a instanceof U||a instanceof V)return a;if("function"==typeof a.next)return new T(function(){return a});if("function"==typeof a[Symbol.iterator])return new T(function(){return a[Symbol.iterator]()});if("function"==typeof a.A)return new T(function(){return a.A()});throw Error("Not an iterator or iterable.");},T=function(a){this.aa=a};T.prototype.A=function(){return new U(this.aa())};T.prototype[Symbol.iterator]=function(){return new V(this.aa())};
T.prototype.wa=function(){return new V(this.aa())};var U=function(a){this.G=a};ma(U,cc);U.prototype.next=function(){return this.G.next()};U.prototype[Symbol.iterator]=function(){return new V(this.G)};U.prototype.wa=function(){return new V(this.G)};var V=function(a){T.call(this,function(){return a});this.G=a};ma(V,T);V.prototype.next=function(){return this.G.next()};var fc=function(){};var gc=function(){};x(gc,fc);gc.prototype[Symbol.iterator]=function(){return ec(this.A(!0)).wa()};gc.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};var hc=function(a){this.l=a};x(hc,gc);n=hc.prototype;n.set=function(a,b){try{this.l.setItem(a,b)}catch(c){if(0==this.l.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};n.get=function(a){a=this.l.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};n.remove=function(a){this.l.removeItem(a)};
n.A=function(a){var b=0,c=this.l,d=new cc;d.next=function(){if(b>=c.length)return dc;var e=ua(c.key(b++));if(a)return{value:e,done:!1};e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};return d};n.clear=function(){this.l.clear()};n.key=function(a){return this.l.key(a)};var ic=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.l=a};x(ic,hc);/*

 SPDX-License-Identifier: Apache-2.0
*/
var jc;try{new URL("s://g"),jc=!0}catch(a){jc=!1}var kc=jc,lc=[],mc=function(){};nc(function(a){var b=O(Mb(),"safevalues").na;b&&Nb(b,Bb,"A URL with content '"+a+"' was sanitized away.")});function nc(a){-1===lc.indexOf(a)&&lc.push(a);mc=function(b){lc.forEach(function(c){c(b)})}};function oc(a,b){if(b instanceof Ia)b instanceof Ia&&b.constructor===Ia?b=b.sa:(B("expected object of type SafeUrl, got '"+b+"' of type "+pa(b)),b="type_error:SafeUrl");else{b:if(kc){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}"javascript:"===c&&(mc(b),b=void 0)}void 0!==b&&(a.href=b)};var pc={mainText:"Google serves cookies to analyse traffic to this site. Information about your use of our site is shared with Google for that purpose.",moreText:"See details",moreUrl:"https://policies.google.com/technologies/cookies",consentText:"OK, got it"},W=new Ga(Ea,'\n   #cookieBar {\n     background-color: #5a5a5a;\n     border: none;\n     border-radius: 0;\n     -moz-border-radius: 0;\n     -webkit-border-radius: 0;\n     bottom: 0;\n     color: #fff;\n     left: 0;\n     margin: 0;\n     position: fixed;\n     right: 0;\n     width: 100%;\n     z-index: 999;\n   }\n \n   #cookieBar .cookieBarInner {\n     padding: 10px 15px;\n   }\n \n   #cookieBar .cookieBarText, #cookieBar .cookieBarButtons {\n     font-family: arial,sans-serif;\n     font-size: 13px;\n     font-weight: 600;\n     line-height: 1.8;\n   }\n \n   #cookieBar .cookieBarText {\n     margin-right: 5px;\n   }\n \n   [dir="rtl"] #cookieBar .cookieBarText {\n     margin-left: 5px;\n     margin-right: 0;\n   }\n \n   @media (max-width: 720px) #cookieBar .cookieBarText {\n     display: block;\n     margin-bottom: 5px;\n   }\n \n   #cookieBar .cookieBarButton {\n     background-color: #303030;\n     border: 1px solid rgba(0,0,0,.1);\n     border-radius: 2px;\n     -moz-border-radius: 2px;\n     -webkit-border-radius: 2px;\n     color: #fff;\n     cursor: pointer;\n     line-height: 19px;\n     margin-left: 5px;\n     padding: 4px 8px;\n     text-decoration: none;\n     white-space: nowrap;\n   }\n \n   [dir="rtl"] #cookieBar .cookieBarButton {\n     margin-left: 0;\n     margin-right: 5px;\n   }\n '),
uc=function(a,b){a=void 0===a?null:a;this.parent=b=void 0===b?document.body:b;this.storage=new ic;if(!qc(this.storage)||!rc(this.storage.get("cookieConsent")))if(!a||null!=a&&a.intlCode){var c;sc(this,null==(c=a)?void 0:c.intlCode)}else tc(this,a)},sc=function(a,b){b=void 0===b?document.documentElement.lang:b;var c=new Q(new vb);fb(c,"complete",function(){if($b(c))try{var e=JSON.parse(bc(c));tc(a,e)}catch(f){throw Error("XHR failed with stack trace:\n"+bc(c));}else b&&sc(a,"")});var d=vc(b);c.send(d)},
tc=function(a,b){if(!1!==b.display){var c=document.head;var d=F("STYLE");d.setAttribute("type","text/css");if(W instanceof Ga&&W.constructor===Ga&&W.za===Fa)var e=W.ua;else B("expected object of type Const, got '"+W+"'"),e="type_error:Const";0===e.length?e=Ka:(A(-1==e.indexOf("<"),"Forbidden '<' character in style sheet string: "+e),e=new E(e,Ja));e instanceof E&&e.constructor===E?e=e.ra:(B("expected object of type SafeStyleSheet, got '"+e+"' of type "+pa(e)),e="type_error:SafeStyleSheet");Ma&&void 0!==
d.cssText?d.cssText=e:u.trustedTypes?Sa(d,e):d.innerHTML=e;G(c,d);c=Object.assign({},pc,b);b=a.parent;a=wc(a,c);A(null!=b,"goog.dom.insertChildAt expects a non-null parent");b.insertBefore(a,b.childNodes[0]||null)}},wc=function(a,b){var c=F("DIV");c.id="cookieBar";c.setAttribute("aria-labelledby","cookieBarText");c.setAttribute("role","region");var d=F("DIV");C(d,"cookieBarInner");G(c,d);var e=F("SPAN");e.id="cookieBarText";C(e,"cookieBarText");Sa(e,b.mainText);G(d,e);e=F("SPAN");C(e,"cookieBarButtons");
G(d,e);d=F("A");d.setAttribute("rel","noopener");d.setAttribute("target","_blank");oc(d,b.moreUrl);C(d,"cookieBarButton");C(d,"cookieBarMoreButton");Sa(d,b.moreText);G(e,d);d=F("A");d.setAttribute("href","#");d.setAttribute("role","button");C(d,"cookieBarButton");C(d,"cookieBarConsentButton");Sa(d,b.consentText);G(e,d);fb(d,"click",function(f){f.preventDefault();c&&c.parentNode&&c.parentNode.removeChild(c);qc(this.storage)&&(f=JSON.stringify({consentGiven:(new Date).toUTCString()}),this.storage.set("cookieConsent",
f))},!1,a);return c},qc=function(a){a=void 0===a?new ic:a;if(a.l)try{a.l.setItem("__sak","1");a.l.removeItem("__sak");var b=!0}catch(c){b=!1}else b=!1;return b};function vc(a){var b;if(a){var c=a.split(/[-_]/);a=c[0].toLowerCase();var d;if(c=null==(d=c[1])?void 0:d.toUpperCase())d=a+"-"+c,sa.includes(d)&&(b=d);!b&&sa.includes(a)&&(b=a)}return"https://www.gstatic.com"+(b?"/intl/"+b:"")+"/brandstudio/kato/cookie_choice_component/config.json"}
function rc(a){var b=null;try{b=JSON.parse(void 0===a?"":a)}catch(c){return!1}if(!b||!b.consentGiven)return!1;a=new Date(b.consentGiven);if(isNaN(Number(a)))return!1;b=new Date;return 13>b.getMonth()-a.getMonth()+12*(b.getFullYear()-a.getFullYear())}var Qa=void 0,xc;if(void 0===Qa){var yc;if(!(yc=document.currentScript)){var zc=document.getElementsByTagName("script");yc=zc[zc.length-1]}xc=yc}else xc=Qa;Qa=xc;
if(Ra("autoloadCookieConsentBar")){var Ac=Ra("autoloadCookieConsentBarIntlCode");new uc(Ac?{intlCode:Ac}:null)}var X=["google","CookieConsentBar"],Y=u;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===uc?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=uc;}).call(this);