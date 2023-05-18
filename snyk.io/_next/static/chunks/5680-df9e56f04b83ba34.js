"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5680],{74129:function(e,t,E){var n,r,L=E(67294),S=L&&"object"==typeof L&&"default"in L?L.default:L,O=function(){return(O=Object.assign||function(e){for(var t,E=1,n=arguments.length;E<n;E++)for(var r in t=arguments[E])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==E.g?E.g:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e,t){return e(t={exports:{}},t.exports),t.exports}var o=l(function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(E=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",E.PARAGRAPH="paragraph",E.HEADING_1="heading-1",E.HEADING_2="heading-2",E.HEADING_3="heading-3",E.HEADING_4="heading-4",E.HEADING_5="heading-5",E.HEADING_6="heading-6",E.OL_LIST="ordered-list",E.UL_LIST="unordered-list",E.LIST_ITEM="list-item",E.HR="hr",E.QUOTE="blockquote",E.EMBEDDED_ENTRY="embedded-entry-block",E.EMBEDDED_ASSET="embedded-asset-block",E.EMBEDDED_RESOURCE="embedded-resource-block",E.TABLE="table",E.TABLE_ROW="table-row",E.TABLE_CELL="table-cell",E.TABLE_HEADER_CELL="table-header-cell"});u(o),o.BLOCKS;var B=l(function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(E=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",E.ENTRY_HYPERLINK="entry-hyperlink",E.ASSET_HYPERLINK="asset-hyperlink",E.EMBEDDED_ENTRY="embedded-entry-inline"});u(B),B.INLINES;var i=l(function(e,t){var E,n;Object.defineProperty(t,"__esModule",{value:!0}),(n=E||(E={})).BOLD="bold",n.ITALIC="italic",n.UNDERLINE="underline",n.CODE="code",n.SUPERSCRIPT="superscript",n.SUBSCRIPT="subscript",t.default=E});u(i);var a=l(function(e,t){var E,n=_&&_.__spreadArray||function(e,t,E){if(E||2==arguments.length)for(var n,r=0,L=t.length;r<L;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},r=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var L=r(i);t.TOP_LEVEL_BLOCKS=[o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.EMBEDDED_RESOURCE,o.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[o.BLOCKS.TABLE,o.BLOCKS.TABLE_ROW,o.BLOCKS.TABLE_CELL,o.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[o.BLOCKS.HR,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,o.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((E={})[o.BLOCKS.OL_LIST]=[o.BLOCKS.LIST_ITEM],E[o.BLOCKS.UL_LIST]=[o.BLOCKS.LIST_ITEM],E[o.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,E[o.BLOCKS.QUOTE]=[o.BLOCKS.PARAGRAPH],E[o.BLOCKS.TABLE]=[o.BLOCKS.TABLE_ROW],E[o.BLOCKS.TABLE_ROW]=[o.BLOCKS.TABLE_CELL,o.BLOCKS.TABLE_HEADER_CELL],E[o.BLOCKS.TABLE_CELL]=[o.BLOCKS.PARAGRAPH],E[o.BLOCKS.TABLE_HEADER_CELL]=[o.BLOCKS.PARAGRAPH],E),t.HEADINGS=[o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([o.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[o.BLOCKS.DOCUMENT,o.BLOCKS.PARAGRAPH,o.BLOCKS.HEADING_1,o.BLOCKS.HEADING_2,o.BLOCKS.HEADING_3,o.BLOCKS.HEADING_4,o.BLOCKS.HEADING_5,o.BLOCKS.HEADING_6,o.BLOCKS.OL_LIST,o.BLOCKS.UL_LIST,o.BLOCKS.LIST_ITEM,o.BLOCKS.HR,o.BLOCKS.QUOTE,o.BLOCKS.EMBEDDED_ENTRY,o.BLOCKS.EMBEDDED_ASSET,B.INLINES.HYPERLINK,B.INLINES.ENTRY_HYPERLINK,B.INLINES.ASSET_HYPERLINK,B.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[L.default.BOLD,L.default.CODE,L.default.ITALIC,L.default.UNDERLINE]});u(a),a.V1_MARKS,a.V1_NODE_TYPES,a.TEXT_CONTAINERS,a.HEADINGS,a.CONTAINERS,a.VOID_BLOCKS,a.TABLE_BLOCKS,a.LIST_ITEM_BLOCKS,a.TOP_LEVEL_BLOCKS;var C=l(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});u(C);var I=l(function(e,t){Object.defineProperty(t,"__esModule",{value:!0})});u(I);var c=l(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var E={nodeType:o.BLOCKS.DOCUMENT,data:{},content:[{nodeType:o.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=E});u(c);var T=l(function(e,t){function E(e,t){for(var E=0,n=Object.keys(e);E<n.length;E++)if(t===e[n[E]])return!0;return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return E(B.INLINES,e.nodeType)},t.isBlock=function(e){return E(o.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}});u(T),T.isText,T.isBlock,T.isInline;var D=l(function(e,t){var E=_&&_.__createBinding||(Object.create?function(e,t,E,n){void 0===n&&(n=E);var r=Object.getOwnPropertyDescriptor(t,E);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[E]}}),Object.defineProperty(e,n,r)}:function(e,t,E,n){void 0===n&&(n=E),e[n]=t[E]}),n=_&&_.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=_&&_.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||E(t,e,n)},L=_&&_.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&E(t,e,r);return n(t,e),t},S=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return o.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return B.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return S(i).default}}),r(a,t),r(C,t),r(I,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return S(c).default}});var O=L(T);t.helpers=O});u(D);var A=D.helpers;D.EMPTY_DOCUMENT;var d=D.MARKS,K=D.INLINES,N=D.BLOCKS,f=((n={})[N.DOCUMENT]=function(e,t){return t},n[N.PARAGRAPH]=function(e,t){return S.createElement("p",null,t)},n[N.HEADING_1]=function(e,t){return S.createElement("h1",null,t)},n[N.HEADING_2]=function(e,t){return S.createElement("h2",null,t)},n[N.HEADING_3]=function(e,t){return S.createElement("h3",null,t)},n[N.HEADING_4]=function(e,t){return S.createElement("h4",null,t)},n[N.HEADING_5]=function(e,t){return S.createElement("h5",null,t)},n[N.HEADING_6]=function(e,t){return S.createElement("h6",null,t)},n[N.EMBEDDED_ENTRY]=function(e,t){return S.createElement("div",null,t)},n[N.UL_LIST]=function(e,t){return S.createElement("ul",null,t)},n[N.OL_LIST]=function(e,t){return S.createElement("ol",null,t)},n[N.LIST_ITEM]=function(e,t){return S.createElement("li",null,t)},n[N.QUOTE]=function(e,t){return S.createElement("blockquote",null,t)},n[N.HR]=function(){return S.createElement("hr",null)},n[N.TABLE]=function(e,t){return S.createElement("table",null,S.createElement("tbody",null,t))},n[N.TABLE_ROW]=function(e,t){return S.createElement("tr",null,t)},n[N.TABLE_HEADER_CELL]=function(e,t){return S.createElement("th",null,t)},n[N.TABLE_CELL]=function(e,t){return S.createElement("td",null,t)},n[K.ASSET_HYPERLINK]=function(e){return s(K.ASSET_HYPERLINK,e)},n[K.ENTRY_HYPERLINK]=function(e){return s(K.ENTRY_HYPERLINK,e)},n[K.EMBEDDED_ENTRY]=function(e){return s(K.EMBEDDED_ENTRY,e)},n[K.HYPERLINK]=function(e,t){return S.createElement("a",{href:e.data.uri},t)},n),R=((r={})[d.BOLD]=function(e){return S.createElement("b",null,e)},r[d.ITALIC]=function(e){return S.createElement("i",null,e)},r[d.UNDERLINE]=function(e){return S.createElement("u",null,e)},r[d.CODE]=function(e){return S.createElement("code",null,e)},r[d.SUPERSCRIPT]=function(e){return S.createElement("sup",null,e)},r[d.SUBSCRIPT]=function(e){return S.createElement("sub",null,e)},r);function s(e,t){return S.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return(void 0===t&&(t={}),e)?function e(t,E){var n=E.renderNode,r=E.renderMark,O=E.renderText;if(A.isText(t))return t.marks.reduce(function(e,t){return r[t.type]?r[t.type](e):e},O?O(t.value):t.value);var _=t.content.map(function(t,n){var r;return r=e(t,E),L.isValidElement(r)&&null===r.key?L.cloneElement(r,{key:n}):r});return t.nodeType&&n[t.nodeType]?n[t.nodeType](t,_):S.createElement(S.Fragment,null,_)}(e,{renderNode:O(O({},f),t.renderNode),renderMark:O(O({},R),t.renderMark),renderText:t.renderText}):null}},20549:function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,(E=t.BLOCKS||(t.BLOCKS={})).DOCUMENT="document",E.PARAGRAPH="paragraph",E.HEADING_1="heading-1",E.HEADING_2="heading-2",E.HEADING_3="heading-3",E.HEADING_4="heading-4",E.HEADING_5="heading-5",E.HEADING_6="heading-6",E.OL_LIST="ordered-list",E.UL_LIST="unordered-list",E.LIST_ITEM="list-item",E.HR="hr",E.QUOTE="blockquote",E.EMBEDDED_ENTRY="embedded-entry-block",E.EMBEDDED_ASSET="embedded-asset-block",E.EMBEDDED_RESOURCE="embedded-resource-block",E.TABLE="table",E.TABLE_ROW="table-row",E.TABLE_CELL="table-cell",E.TABLE_HEADER_CELL="table-header-cell"},51928:function(e,t,E){Object.defineProperty(t,"__esModule",{value:!0});var n=E(20549),r={nodeType:n.BLOCKS.DOCUMENT,data:{},content:[{nodeType:n.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=r},86061:function(e,t,E){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var n=E(20549),r=E(7845);function L(e,t){for(var E=0,n=Object.keys(e);E<n.length;E++)if(t===e[n[E]])return!0;return!1}t.isInline=function(e){return L(r.INLINES,e.nodeType)},t.isBlock=function(e){return L(n.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},86437:function(e,t,E){var n=this&&this.__createBinding||(Object.create?function(e,t,E,n){void 0===n&&(n=E);var r=Object.getOwnPropertyDescriptor(t,E);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[E]}}),Object.defineProperty(e,n,r)}:function(e,t,E,n){void 0===n&&(n=E),e[n]=t[E]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),L=this&&this.__exportStar||function(e,t){for(var E in e)"default"===E||Object.prototype.hasOwnProperty.call(t,E)||n(t,e,E)},S=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var E in e)"default"!==E&&Object.prototype.hasOwnProperty.call(e,E)&&n(t,e,E);return r(t,e),t},O=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var _=E(20549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return _.BLOCKS}});var u=E(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return u.INLINES}});var l=E(31376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return O(l).default}}),L(E(97951),t),L(E(80167),t),L(E(11911),t);var o=E(51928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return O(o).default}});var B=S(E(86061));t.helpers=B},7845:function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,(E=t.INLINES||(t.INLINES={})).HYPERLINK="hyperlink",E.ENTRY_HYPERLINK="entry-hyperlink",E.ASSET_HYPERLINK="asset-hyperlink",E.EMBEDDED_ENTRY="embedded-entry-inline"},31376:function(e,t){var E,n;Object.defineProperty(t,"__esModule",{value:!0}),(n=E||(E={})).BOLD="bold",n.ITALIC="italic",n.UNDERLINE="underline",n.CODE="code",n.SUPERSCRIPT="superscript",n.SUBSCRIPT="subscript",t.default=E},11911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},97951:function(e,t,E){var n,r=this&&this.__spreadArray||function(e,t,E){if(E||2==arguments.length)for(var n,r=0,L=t.length;r<L;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},L=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=E(20549),O=E(7845),_=L(E(31376));t.TOP_LEVEL_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,S.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[S.BLOCKS.TABLE,S.BLOCKS.TABLE_ROW,S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[S.BLOCKS.HR,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[S.BLOCKS.OL_LIST]=[S.BLOCKS.LIST_ITEM],n[S.BLOCKS.UL_LIST]=[S.BLOCKS.LIST_ITEM],n[S.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[S.BLOCKS.QUOTE]=[S.BLOCKS.PARAGRAPH],n[S.BLOCKS.TABLE]=[S.BLOCKS.TABLE_ROW],n[S.BLOCKS.TABLE_ROW]=[S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],n[S.BLOCKS.TABLE_CELL]=[S.BLOCKS.PARAGRAPH],n[S.BLOCKS.TABLE_HEADER_CELL]=[S.BLOCKS.PARAGRAPH],n),t.HEADINGS=[S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([S.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[S.BLOCKS.DOCUMENT,S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.LIST_ITEM,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,O.INLINES.HYPERLINK,O.INLINES.ENTRY_HYPERLINK,O.INLINES.ASSET_HYPERLINK,O.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[_.default.BOLD,_.default.CODE,_.default.ITALIC,_.default.UNDERLINE]},80167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}}]);