!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[TextInput]",["react"],r):"object"==typeof exports?exports["rb_wixui.thunderbolt[TextInput]"]=r(require("react")):e["rb_wixui.thunderbolt[TextInput]"]=r(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(e){function r(r){for(var n,i,u=r[0],s=r[1],l=r[2],c=0,f=[];c<u.length;c++)i=u[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(p&&p(r);f.length;)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={634:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="https://static.parastorage.com/services/editor-elements/dist/";var u=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library||[],s=u.push.bind(u);u.push=r,u=u.slice();for(var l=0;l<u.length;l++)r(u[l]);var p=s;return a.push([4391,4]),t()}({0:function(r,t){r.exports=e},2198:function(e,r,t){"use strict";r.a=({updateProps:e})=>({onValueChange:r=>{e({value:r})},setValidityIndication:r=>{e({shouldShowValidityIndication:r})}})},3:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)t.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(r,[]))||(e.exports=n)}()},4391:function(e,r,t){"use strict";t.r(r),t.d(r,"components",(function(){return a})),t.d(r,"version",(function(){return i}));var n=t(818),o=t(2198);const a={TextInput:{component:n.a,controller:o.a}},i="1.0.0"},6:function(e,r,t){"use strict";t.d(r,"g",(function(){return o})),t.d(r,"h",(function(){return a})),t.d(r,"d",(function(){return u})),t.d(r,"b",(function(){return s})),t.d(r,"e",(function(){return l})),t.d(r,"c",(function(){return p})),t.d(r,"a",(function(){return c})),t.d(r,"f",(function(){return f}));var n=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};const o={enter:13,space:32,end:35,home:36,escape:27,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,tab:9,delete:46,a:65,z:90,pageUp:33,pageDown:34},a={space:["Spacebar"," "],enter:["Enter"]};function i(e){return r=>{r.keyCode===e&&(r.preventDefault(),r.stopPropagation(),r.currentTarget.click())}}const u=i(o.space),s=i(o.enter),l=e=>{s(e),u(e)},p=i(o.escape),c="has-custom-focus",f=(e={})=>{var r,{pressed:t,expanded:o,haspopup:a,label:i,live:u,relevant:s,current:l,owns:p,controls:c,roleDescription:f,hidden:d,disabled:b,describedBy:y,labelledBy:h,errorMessage:v,atomic:g,role:x,busy:m}=e,w=n(e,["pressed","expanded","haspopup","label","live","relevant","current","owns","controls","roleDescription","hidden","disabled","describedBy","labelledBy","errorMessage","atomic","role","busy"]);const O=null!==(r=w.tabIndex)&&void 0!==r?r:w.tabindex,j={};return i&&(j["aria-label"]=i),u&&(j["aria-live"]=u),l&&(j["aria-current"]=l),"boolean"==typeof t&&(j["aria-pressed"]=t),"boolean"==typeof d&&(j["aria-hidden"]=d),"boolean"==typeof o&&(j["aria-expanded"]=o),"boolean"==typeof b&&(j["aria-disabled"]=b),"boolean"==typeof g&&(j["aria-atomic"]=g),"boolean"==typeof m&&(j["aria-busy"]=m),"string"==typeof s&&(j["aria-relevant"]=s),"string"==typeof p&&(j["aria-owns"]=p),"string"==typeof c&&(j["aria-controls"]=c),"string"==typeof f&&(j["aria-roledescription"]=f),a&&(j["aria-haspopup"]=a),"number"==typeof O&&(j.tabIndex=O),x&&(j.role=x),y&&(j["aria-describedby"]=y),h&&(j["aria-labelledby"]=h),v&&(j["aria-errormessage"]=v),j}}})}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/rb_wixui.thunderbolt[TextInput].d3488e53.bundle.min.js.map