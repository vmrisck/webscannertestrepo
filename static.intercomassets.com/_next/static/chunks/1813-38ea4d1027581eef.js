(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1813],{2977:function(t){t.exports=function(){"use strict";var t,r,e=(t=r={exports:{}},r.exports,function(r){var e,n,i,a=/^\s+/,o=/\s+$/,s=0,c=r.round,l=r.min,f=r.max,h=r.random;function u(t,e){if(e=e||{},(t=t||"")instanceof u)return t;if(!(this instanceof u))return new u(t,e);var n,i,h,g,d,b,_,p,v,y,m,k,x,A,S,w,R,F,H,C,j=(i={r:0,g:0,b:0},h=1,g=null,d=null,b=null,_=!1,p=!1,"string"==typeof(n=t)&&(n=function(t){t=t.replace(a,"").replace(o,"").toLowerCase();var r,e=!1;if(M[t])t=M[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(r=D.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=D.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=D.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=D.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=D.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=D.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=D.hex8.exec(t))?{r:T(r[1]),g:T(r[2]),b:T(r[3]),a:T(r[4])/255,format:e?"name":"hex8"}:(r=D.hex6.exec(t))?{r:T(r[1]),g:T(r[2]),b:T(r[3]),format:e?"name":"hex"}:(r=D.hex4.exec(t))?{r:T(r[1]+""+r[1]),g:T(r[2]+""+r[2]),b:T(r[3]+""+r[3]),a:T(r[4]+""+r[4])/255,format:e?"name":"hex8"}:!!(r=D.hex3.exec(t))&&{r:T(r[1]+""+r[1]),g:T(r[2]+""+r[2]),b:T(r[3]+""+r[3]),format:e?"name":"hex"}}(n)),"object"==typeof n&&(I(n.r)&&I(n.g)&&I(n.b)?(v=n.r,y=n.g,m=n.b,i={r:255*L(v,255),g:255*L(y,255),b:255*L(m,255)},_=!0,p="%"===String(n.r).substr(-1)?"prgb":"rgb"):I(n.h)&&I(n.s)&&I(n.v)?(g=q(n.s),d=q(n.v),k=n.h,x=g,A=d,k=6*L(k,360),x=L(x,100),A=L(A,100),S=r.floor(k),w=k-S,R=A*(1-x),F=A*(1-w*x),H=A*(1-(1-w)*x),i={r:255*[A,F,R,R,H,A][C=S%6],g:255*[H,A,A,F,R,R][C],b:255*[R,R,H,A,A,F][C]},_=!0,p="hsv"):I(n.h)&&I(n.s)&&I(n.l)&&(g=q(n.s),b=q(n.l),i=function(t,r,e){var n,i,a;function o(t,r,e){return(e<0&&(e+=1),e>1&&(e-=1),e<1/6)?t+(r-t)*6*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=L(t,360),r=L(r,100),e=L(e,100),0===r)n=i=a=e;else{var s=e<.5?e*(1+r):e+r-e*r,c=2*e-s;n=o(c,s,t+1/3),i=o(c,s,t),a=o(c,s,t-1/3)}return{r:255*n,g:255*i,b:255*a}}(n.h,g,b),_=!0,p="hsl"),n.hasOwnProperty("a")&&(h=n.a)),h=O(h),{ok:_,format:n.format||p,r:l(255,f(i.r,0)),g:l(255,f(i.g,0)),b:l(255,f(i.b,0)),a:h});this._originalInput=t,this._r=j.r,this._g=j.g,this._b=j.b,this._a=j.a,this._roundA=c(100*this._a)/100,this._format=e.format||j.format,this._gradientType=e.gradientType,this._r<1&&(this._r=c(this._r)),this._g<1&&(this._g=c(this._g)),this._b<1&&(this._b=c(this._b)),this._ok=j.ok,this._tc_id=s++}function g(t,r,e){var n,i,a=f(t=L(t,255),r=L(r,255),e=L(e,255)),o=l(t,r,e),s=(a+o)/2;if(a==o)n=i=0;else{var c=a-o;switch(i=s>.5?c/(2-a-o):c/(a+o),a){case t:n=(r-e)/c+(r<e?6:0);break;case r:n=(e-t)/c+2;break;case e:n=(t-r)/c+4}n/=6}return{h:n,s:i,l:s}}function d(t,r,e){var n,i=f(t=L(t,255),r=L(r,255),e=L(e,255)),a=l(t,r,e),o=i-a;if(i==a)n=0;else{switch(i){case t:n=(r-e)/o+(r<e?6:0);break;case r:n=(e-t)/o+2;break;case e:n=(t-r)/o+4}n/=6}return{h:n,s:0===i?0:o/i,v:i}}function b(t,r,e,n){var i=[E(c(t).toString(16)),E(c(r).toString(16)),E(c(e).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function _(t,r,e,n){return[E(N(n)),E(c(t).toString(16)),E(c(r).toString(16)),E(c(e).toString(16))].join("")}function p(t,r){r=0===r?0:r||10;var e=u(t).toHsl();return e.s-=r/100,e.s=P(e.s),u(e)}function v(t,r){r=0===r?0:r||10;var e=u(t).toHsl();return e.s+=r/100,e.s=P(e.s),u(e)}function y(t){return u(t).desaturate(100)}function m(t,r){r=0===r?0:r||10;var e=u(t).toHsl();return e.l+=r/100,e.l=P(e.l),u(e)}function k(t,r){r=0===r?0:r||10;var e=u(t).toRgb();return e.r=f(0,l(255,e.r-c(-(255*(r/100))))),e.g=f(0,l(255,e.g-c(-(255*(r/100))))),e.b=f(0,l(255,e.b-c(-(255*(r/100))))),u(e)}function x(t,r){r=0===r?0:r||10;var e=u(t).toHsl();return e.l-=r/100,e.l=P(e.l),u(e)}function A(t,r){var e=u(t).toHsl(),n=(e.h+r)%360;return e.h=n<0?360+n:n,u(e)}function S(t){var r=u(t).toHsl();return r.h=(r.h+180)%360,u(r)}function w(t){var r=u(t).toHsl(),e=r.h;return[u(t),u({h:(e+120)%360,s:r.s,l:r.l}),u({h:(e+240)%360,s:r.s,l:r.l})]}function R(t){var r=u(t).toHsl(),e=r.h;return[u(t),u({h:(e+90)%360,s:r.s,l:r.l}),u({h:(e+180)%360,s:r.s,l:r.l}),u({h:(e+270)%360,s:r.s,l:r.l})]}function F(t){var r=u(t).toHsl(),e=r.h;return[u(t),u({h:(e+72)%360,s:r.s,l:r.l}),u({h:(e+216)%360,s:r.s,l:r.l})]}function H(t,r,e){r=r||6,e=e||30;var n=u(t).toHsl(),i=360/e,a=[u(t)];for(n.h=(n.h-(i*r>>1)+720)%360;--r;)n.h=(n.h+i)%360,a.push(u(n));return a}function C(t,r){r=r||6;for(var e=u(t).toHsv(),n=e.h,i=e.s,a=e.v,o=[],s=1/r;r--;)o.push(u({h:n,s:i,v:a})),a=(a+s)%1;return o}u.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,i=this.toRgb();return t=i.r/255,e=i.g/255,n=i.b/255,.2126*(t<=.03928?t/12.92:r.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:r.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:r.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=O(t),this._roundA=c(100*this._a)/100,this},toHsv:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=d(this._r,this._g,this._b),r=c(360*t.h),e=c(100*t.s),n=c(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+n+"%)":"hsva("+r+", "+e+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=g(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=g(this._r,this._g,this._b),r=c(360*t.h),e=c(100*t.s),n=c(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+n+"%)":"hsla("+r+", "+e+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return b(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){var r,e,n,i,a;return r=this._r,e=this._g,n=this._b,i=this._a,a=[E(c(r).toString(16)),E(c(e).toString(16)),E(c(n).toString(16)),E(N(i))],t&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:c(this._r),g:c(this._g),b:c(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+c(this._r)+", "+c(this._g)+", "+c(this._b)+")":"rgba("+c(this._r)+", "+c(this._g)+", "+c(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:c(100*L(this._r,255))+"%",g:c(100*L(this._g,255))+"%",b:c(100*L(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+c(100*L(this._r,255))+"%, "+c(100*L(this._g,255))+"%, "+c(100*L(this._b,255))+"%)":"rgba("+c(100*L(this._r,255))+"%, "+c(100*L(this._g,255))+"%, "+c(100*L(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(j[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+_(this._r,this._g,this._b,this._a),e=r,n=this._gradientType?"GradientType = 1, ":"";if(t){var i=u(t);e="#"+_(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,n=this._a<1&&this._a>=0;return!r&&n&&("hex"===t||"hex6"===t||"hex3"===t||"hex4"===t||"hex8"===t||"name"===t)?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString())},clone:function(){return u(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(k,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(A,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(H,arguments)},complement:function(){return this._applyCombination(S,arguments)},monochromatic:function(){return this._applyCombination(C,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(w,arguments)},tetrad:function(){return this._applyCombination(R,arguments)}},u.fromRatio=function(t,r){if("object"==typeof t){var e={};for(var n in t)t.hasOwnProperty(n)&&("a"===n?e[n]=t[n]:e[n]=q(t[n]));t=e}return u(t,r)},u.equals=function(t,r){return!!t&&!!r&&u(t).toRgbString()==u(r).toRgbString()},u.random=function(){return u.fromRatio({r:h(),g:h(),b:h()})},u.mix=function(t,r,e){e=0===e?0:e||50;var n=u(t).toRgb(),i=u(r).toRgb(),a=e/100;return u({r:(i.r-n.r)*a+n.r,g:(i.g-n.g)*a+n.g,b:(i.b-n.b)*a+n.b,a:(i.a-n.a)*a+n.a})},u.readability=function(t,e){var n=u(t),i=u(e);return(r.max(n.getLuminance(),i.getLuminance())+.05)/(r.min(n.getLuminance(),i.getLuminance())+.05)},u.isReadable=function(t,r,e){var n,i,a,o,s,c=u.readability(t,r);switch(s=!1,(i=((n=(n=e)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),a=(n.size||"small").toLowerCase(),"AA"!==i&&"AAA"!==i&&(i="AA"),"small"!==a&&"large"!==a&&(a="small"),o={level:i,size:a}).level+o.size){case"AAsmall":case"AAAlarge":s=c>=4.5;break;case"AAlarge":s=c>=3;break;case"AAAsmall":s=c>=7}return s},u.mostReadable=function(t,r,e){var n,i,a,o,s=null,c=0;i=(e=e||{}).includeFallbackColors,a=e.level,o=e.size;for(var l=0;l<r.length;l++)(n=u.readability(t,r[l]))>c&&(c=n,s=u(r[l]));return u.isReadable(t,s,{level:a,size:o})||!i?s:(e.includeFallbackColors=!1,u.mostReadable(t,["#fff","#000"],e))};var M=u.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},j=u.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(M);function O(t){return(isNaN(t=parseFloat(t))||t<0||t>1)&&(t=1),t}function L(t,e){"string"==typeof(n=t)&&-1!=n.indexOf(".")&&1===parseFloat(n)&&(t="100%");var n,i,a="string"==typeof(i=t)&&-1!=i.indexOf("%");return(t=l(e,f(0,parseFloat(t))),a&&(t=parseInt(t*e,10)/100),1e-6>r.abs(t-e))?1:t%e/parseFloat(e)}function P(t){return l(1,f(0,t))}function T(t){return parseInt(t,16)}function E(t){return 1==t.length?"0"+t:""+t}function q(t){return t<=1&&(t=100*t+"%"),t}function N(t){return r.round(255*parseFloat(t)).toString(16)}var D=(n="[\\s|\\(]+("+(e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",i="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",{CSS_UNIT:new RegExp(e),rgb:RegExp("rgb"+n),rgba:RegExp("rgba"+i),hsl:RegExp("hsl"+n),hsla:RegExp("hsla"+i),hsv:RegExp("hsv"+n),hsva:RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function I(t){return!!D.CSS_UNIT.exec(t)}t.exports?t.exports=u:window.tinycolor=u}(Math),r.exports),n=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t},i=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},a=e("#000000").toRgbString(),o=e("#1a1a1a").toRgbString(),s=e("#333333").toRgbString(),c=e("#000000").setAlpha(.7).toRgbString(),l=e("#FFFFFF").setAlpha(.7).toRgbString(),f=e("#000000").setAlpha(.5).toRgbString(),h=e("#ffffff").toRgbString();function u(t,r,n){return e.readability(t,r)>=4.5?r:n}function g(t){var r=e(t).toHsl(),n=e({h:r.h,s:r.s,l:85}).toRgbString();return b(n,t,3)||(n=h),{greeting_text_color:n,introduction_text_color:h}}function d(t){var r=e(t).toHsl(),n=e({h:r.h,s:5,l:50}).toRgbString();return b(n,t,3)||(n=a),{greeting_text_color:n,introduction_text_color:a}}function b(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;return e.readability(r,t)>=n}function _(t){var r=e(t).toHsl().l,n=e(t).lighten((.95-r)*100).toRgbString(),i=e(t).darken((r-.85)*100).toRgbString(),a=e(t).darken((r-.3)*100).toRgbString(),o=e(t).darken((r-.25)*100).toRgbString();if(r<.35)return{light:n,dark:t};if(r>.9){var s=u(i,a,o);return{light:i,dark:s}}var c=u(n,a,o);return{light:n,dark:c}}function p(t,r,u,b,p){var v=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.primary=t.toRgbString(),this.secondary=r.toRgbString(),this.primaryVariant=u.toRgbString(),this.secondaryVariant=b.toRgbString(),this.gradientEnd=p.toRgbString();var y=.2>t.getLuminance()?"lighten":"darken",m=t.clone(),k=t.clone();this.primaryHover=m[y](10).toRgbString(),this.primaryActive=k[y](20).toRgbString();var x={gradient_start_color:this.secondary,gradient_end_color:this.gradientEnd,card_border_top_color:this.primaryVariant,button_background_color:this.primary,button_background_color_hover:this.primaryHover,button_background_color_active:this.primaryActive,primary_on_white_contrast:Math.round(1e3*e.readability("#FFFFFF",this.primary))/1e3,secondary_on_white_contrast:Math.round(1e3*e.readability("#FFFFFF",this.secondary))/1e3,quick_reply_text_color:_(this.primary).dark,quick_reply_background_color:_(this.primary).light,avatar_background_color:e(this.primary).darken(21.5).toRgbString()};this.generateLightPrimaryLightSecondary=function(){return i({},x,d(this.secondary),{header_title_color:a,header_text_color:c,launcher_icon_color:v?a:f,button_text_color:v?a:f,link_color:a,link_color_hover:o,link_color_active:s,primary_type:"light",secondary_type:"light"})},this.generateLightPrimaryDarkSecondary=function(){return i({},x,g(this.secondary),{header_title_color:h,header_text_color:l,launcher_icon_color:v?a:f,button_text_color:v?a:f,link_color:a,link_color_hover:o,link_color_active:s,primary_type:"light",secondary_type:"dark"})},this.generateDarkPrimaryLightSecondary=function(){var t;return i({},x,d(this.secondary),(n(t={header_title_color:h},"header_title_color",a),n(t,"header_text_color",c),n(t,"launcher_icon_color",h),n(t,"button_text_color",h),n(t,"link_color",this.primary),n(t,"link_color_hover",this.primaryHover),n(t,"link_color_active",this.primaryActive),n(t,"primary_type","dark"),n(t,"secondary_type","light"),t))},this.generateDarkPrimaryDarkSecondary=function(){return i({},x,g(this.secondary),{header_title_color:h,header_text_color:l,launcher_icon_color:h,button_text_color:h,link_color:this.primary,link_color_hover:this.primaryHover,link_color_active:this.primaryActive,primary_type:"dark",secondary_type:"dark"})}}var v=function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.6;switch(r){case"contrast-ratio-4.5":return!b(h,t,4.5);case"contrast-ratio-3.0":return!b(h,t,3);default:return t.getLuminance()>e}};function y(t){if(!t.primaryColor)throw"A primary color was not provided to the color calculation";var r=e(t.primaryColor);r.toHsv();var n=r.clone().setAlpha(.5),i=e(t.secondaryColor||t.primaryColor),a=i.toHsv(),o=e({h:a.h,s:Math.min(a.s,.12),v:1}),s=i.clone();s.darken(t.darkenAmount||10);var c=v(r,t.contrastCheckMethod,t.brightnessCutoff),l=v(i,t.contrastCheckMethod,t.brightnessCutoff),f=!c,h=!l,u="contrast-ratio-4.5"===t.contrastCheckMethod||"contrast-ratio-3.0"===t.contrastCheckMethod,g="pureBlackActionColors"in t?t.pureBlackActionColors:u,d=new p(r,i,n,o,s,g);return c&&l?d.generateLightPrimaryLightSecondary():c&&h?d.generateLightPrimaryDarkSecondary():f&&l?d.generateDarkPrimaryLightSecondary():f&&h?d.generateDarkPrimaryDarkSecondary():void 0}return y.tinycolor=e,y}()},4184:function(t,r){var e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var a=typeof e;if("string"===a||"number"===a)t.push(e);else if(Array.isArray(e)){if(e.length){var o=i.apply(null,e);o&&t.push(o)}}else if("object"===a){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var s in e)n.call(e,s)&&e[s]&&t.push(s)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0!==(e=(function(){return i}).apply(r,[]))&&(t.exports=e)}()},1296:function(t,r,e){var n=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,f="object"==typeof self&&self&&self.Object===Object&&self,h=l||f||Function("return this")(),u=Object.prototype.toString,g=Math.max,d=Math.min,b=function(){return h.Date.now()};function _(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function p(t){if("number"==typeof t)return t;if("symbol"==typeof(r=t)||r&&"object"==typeof r&&"[object Symbol]"==u.call(r))return n;if(_(t)){var r,e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=o.test(t);return l||s.test(t)?c(t.slice(2),l?2:8):a.test(t)?n:+t}t.exports=function(t,r,e){var n,i,a,o,s,c,l=0,f=!1,h=!1,u=!0;if("function"!=typeof t)throw TypeError("Expected a function");function v(r){var e=n,a=i;return n=i=void 0,l=r,o=t.apply(a,e)}function y(t){var e=t-c,n=t-l;return void 0===c||e>=r||e<0||h&&n>=a}function m(){var t,e,n,i=b();if(y(i))return k(i);s=setTimeout(m,(t=i-c,e=i-l,n=r-t,h?d(n,a-e):n))}function k(t){return(s=void 0,u&&n)?v(t):(n=i=void 0,o)}function x(){var t,e=b(),a=y(e);if(n=arguments,i=this,c=e,a){if(void 0===s)return l=t=c,s=setTimeout(m,r),f?v(t):o;if(h)return s=setTimeout(m,r),v(c)}return void 0===s&&(s=setTimeout(m,r)),o}return r=p(r)||0,_(e)&&(f=!!e.leading,a=(h="maxWait"in e)?g(p(e.maxWait)||0,r):a,u="trailing"in e?!!e.trailing:u),x.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=c=i=s=void 0},x.flush=function(){return void 0===s?o:k(b())},x}},9008:function(t,r,e){t.exports=e(2636)},4298:function(t,r,e){t.exports=e(5442)},4012:function(t,r,e){"use strict";var n=e(655),i=e(7294),a=e(6896),o=e(680);function s(t){var r=(0,a.Z)(),e=r.formatMessage,n=r.textComponent,o=void 0===n?i.Fragment:n,s=t.id,c=t.description,l=t.defaultMessage,f=t.values,h=t.children,u=t.tagName,g=void 0===u?o:u,d=e({id:s,description:c,defaultMessage:l},f,{ignoreTag:t.ignoreTag});return"function"==typeof h?h(Array.isArray(d)?d:[d]):g?i.createElement(g,null,i.Children.toArray(d)):i.createElement(i.Fragment,null,d)}s.displayName="FormattedMessage";var c=i.memo(s,function(t,r){var e=t.values,i=(0,n._T)(t,["values"]),a=r.values,s=(0,n._T)(r,["values"]);return(0,o.wU)(a,e)&&(0,o.wU)(i,s)});c.displayName="MemoizedFormattedMessage",r.Z=c},6896:function(t,r,e){"use strict";e.d(r,{Z:function(){return o}});var n=e(7294),i=e(4806),a=e(680);function o(){var t=n.useContext(i._y);return(0,a.lq)(t),t}}}]);