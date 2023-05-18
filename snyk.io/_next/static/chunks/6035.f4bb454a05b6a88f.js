"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6035],{71425:function(l,i,e){e.d(i,{Z:function(){return d}});var n=e(85893),a=e(45697),o=e.n(a);function r(l){let{children:i,className:e}=l;return(0,n.jsx)("figure",{className:e,"data-component":"Media Asset Container",children:i})}r.propTypes={children:o().element},r.defaultProps={};var d=r},87721:function(l,i,e){e.d(i,{Z:function(){return t}});var n=e(85893),a=e(45697),o=e.n(a),r=e(53459),d=e(10285);function s(l){let{as:i,pose:e,reversePose:a,className:o}=l;return(0,n.jsx)(i,{className:(0,r.Z)("w-full patch pose-".concat(e),"span"===i&&"d-inline-block",a&&"flip-h",o),"data-component":"Patch"})}s.propTypes={as:o().oneOf(["span","div"]),pose:o().oneOf(d.Z),reversePose:o().bool,className:o().string},s.defaultProps={as:"div",pose:"alert"};var t=s},76035:function(l,i,e){e.r(i),e.d(i,{default:function(){return N}});var n=e(85893),a=e(45697),o=e.n(a),r=e(71425),d=e(20832),s=e(15693),t=e(17481),c=e(20797),u=e(87721),v=e(50811),m=e(52535),p=e(53459),h=e(35100),g=e(1904),f=e(83832),b=e(10285),x=e(46722);function k(l){var i,e,a,o,g,f,b,x;let{colorScheme:k,actions:Z,miniHeader:j,headline:w,description:N,authLinks:y,disclaimer:P,image:O,patchVariant:T}=l;return(0,n.jsx)("section",{className:(0,p.Z)("wide-wrapper marg-t-huge -marg-b-huge mobile:-marg-b-large pad-b-extra-large translate-y-extra-large radius-large radius-b-none overflow-hidden",k?h.k[k].bg:"bg-base-dark-purple"),"data-component":"Footer CTA",children:(0,n.jsxs)("div",{className:"content-block -marg-b-medium flex-center mobile:flex-wrap gap-huge mobile:gap-large mobile:txt-center links underline",children:[(0,n.jsxs)("div",{className:"cols-12 marg-b-large pad-v-huge mobile:marg-b-none mobile:pad-t-extra-large mobile:pad-b-none",children:[j&&(0,n.jsx)(t.Z,{text:j,as:"p",color:k?h.k[k].miniHeader:"accent-1",className:"marg-b-small"}),w&&(0,n.jsx)(d.Z,{as:"h2",name:"headline-large",text:w,color:(null===(i=h.k[k])||void 0===i?void 0:i.isDark)?"white":"",className:"marg-b-small"}),N&&(0,n.jsx)(s.Z,{as:"string"==typeof N?"p":"div",color:(null===(e=h.k[k])||void 0===e?void 0:e.isDark)?"snow":"",className:(0,p.Z)("marg-b-extra-large","string"!=typeof N&&"txt-rich"),children:N}),(null==Z?void 0:Z.length)>0&&(0,n.jsx)("div",{className:"d-flex mobile:flex-col gap-small",children:null==Z?void 0:Z.map(l=>{var i;return(0,n.jsx)(c.Z,{href:null==l?void 0:l.url,variant:null==l?void 0:l.variant,iconName:null==l?void 0:l.icon,iconPosition:null==l?void 0:l.iconPosition,className:(0,p.Z)((null===(i=h.k[k])||void 0===i?void 0:i.isDark)&&"dark"),children:null==l?void 0:l.label},null==l?void 0:l.id)})}),y&&(0,n.jsxs)("div",{className:(0,p.Z)("flex-start mobile:flex-center mobile:flex-wrap marg-v-small links",(null===(a=h.k[k])||void 0===a?void 0:a.isDark)?"link-white dark":"link-action"),children:[(0,n.jsx)("div",{className:"d-inline-block max-content marg-r-extra-small",children:(0,n.jsx)(s.Z,{name:"body-small-medium",color:(null===(o=h.k[k])||void 0===o?void 0:o.isDark)?"snow":"",children:y.title})}),(0,n.jsx)("div",{className:"d-inline-block max-content",children:(0,n.jsx)(s.Z,{name:"body-bold",children:(0,n.jsx)(n.Fragment,{children:null==y?void 0:null===(g=y.links)||void 0===g?void 0:g.map((l,i)=>{let{url:e,label:a}=l;return(0,n.jsx)(m.Z,{href:e,className:"pad-h-extra-small",children:a},"".concat(e,"-").concat(i))})})})})]}),P&&(0,n.jsx)(s.Z,{as:"string"==typeof P?"p":"div",color:(null===(f=h.k[k])||void 0===f?void 0:f.isDark)?"snow":"",name:"body-small",className:(0,p.Z)("marg-v-large mobile:marg-h-auto max-w-4",(null===(b=h.k[k])||void 0===b?void 0:b.isDark)?"link-snow":"link-color-body"),children:P})]}),(0,n.jsx)("div",{className:(0,p.Z)("cols-12 max-w-6 marg-t-extra-large -marg-b-extra-large"),children:O?(0,n.jsx)(r.Z,{className:"max-size-media-asset",children:(0,n.jsx)(v.Z,{publicId:null==O?void 0:O.publicId,format:null==O?void 0:O.format,resourceType:null==O?void 0:O.resourceType,src:O.src,alt:null!==(x=null==O?void 0:O.alt)&&void 0!==x?x:"",width:null==O?void 0:O.width,height:null==O?void 0:O.height,sizes:"(max-width: 960px) 100vw, 50vw",unoptimized:(null==O?void 0:O.format)==="svg",className:"d-block max-h-full w-auto"})}):(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{pose:"alert"})})})]})})}k.propTypes={colorScheme:o().oneOf(g.z7),actions:o().arrayOf(o().shape(x.Z)),headline:o().string,miniHeader:o().string,description:o().oneOfType([o().string,o().node]),authLinks:o().shape({title:o().string,links:o().arrayOf(o().shape({url:o().string,label:o().string}))}),disclaimer:o().oneOfType([o().string,o().node]),image:o().shape(f.Z),patchVariant:o().oneOf(b.Z)},k.defaultProps={};var Z=e(45754),j=e(74129),w=e(81307),N=function(l){var i,e,a;let{fields:o,sys:r}=l,{footerCtaColorScheme:d,pageColorScheme:s}=(0,Z.tv)();return(0,n.jsx)(k,{miniHeader:null==o?void 0:o.miniHeader,headline:null==o?void 0:o.headline,description:(0,j.h)(null==o?void 0:o.description,w.Z),actions:null==o?void 0:null===(i=o.actions)||void 0===i?void 0:i.map(l=>{var i,e,n,a,o,r,d,s,t,c,u,v;return{id:null==l?void 0:null===(i=l.sys)||void 0===i?void 0:i.id,label:null==l?void 0:null===(e=l.fields)||void 0===e?void 0:e.label,url:null==l?void 0:null===(n=l.fields)||void 0===n?void 0:n.url,variant:null==l?void 0:null===(a=l.fields)||void 0===a?void 0:null===(o=a.appearance)||void 0===o?void 0:null===(r=o.button)||void 0===r?void 0:r.variant,icon:null==l?void 0:null===(d=l.fields)||void 0===d?void 0:null===(s=d.appearance)||void 0===s?void 0:null===(t=s.button)||void 0===t?void 0:t.icon,iconPosition:null==l?void 0:null===(c=l.fields)||void 0===c?void 0:null===(u=c.appearance)||void 0===u?void 0:null===(v=u.button)||void 0===v?void 0:v.iconPosition}}),authLinks:null==o?void 0:o.authLinks,disclaimer:(0,j.h)(null==o?void 0:o.disclaimer,w.Z),colorScheme:d||s||"",patchVariant:(null==o?void 0:null===(e=o.appearance)||void 0===e?void 0:null===(a=e.footerCta)||void 0===a?void 0:a.patchPose)||"coffee"})}},83832:function(l,i,e){var n=e(45697),a=e.n(n);i.Z={src:a().string,alt:a().string,width:a().number,height:a().number,priority:a().bool}},10285:function(l,i){i.Z=["","alert","coffee","digging","sniffing","standing-upright","standing"]}}]);