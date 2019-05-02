/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=522)})({0:function(e,t){e.exports=function(e,t,n,r,o,u){var a,i,s,l,f,c=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(a=e,c=e.default),i="function"==typeof c?c.options:c,t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns,i._compiled=!0),n&&(i.functional=!0),o&&(i._scopeId=o),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},i._ssrRegister=s):r&&(s=r),s&&(l=i.functional,f=l?i.render:i.beforeCreate,l?(i._injectStyles=s,i.render=function(e,t){return s.call(t),f(e,t)}):i.beforeCreate=f?[].concat(f,s):[s]),{esModule:a,exports:c,options:i}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,n=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,i.default)(t,e)},o=n(4),u=r(o),a=n(6),i=r(a)},2:function(t,n){t.exports=e},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,i,s;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),u=r(o),a=n(4),i=r(a),s=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return i.default.metaColors},set:function(e){i.default.metaColors=e}},theme:{get:function(){return i.default.theme},set:function(e){i.default.theme=e}},enabled:{get:function(){return i.default.enabled},set:function(e){i.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},310:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,a,i;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),u=r(o),a=n(99),i=r(a),t.default=function(e){(0,u.default)(e),e.component(i.default.name,i.default)}},4:function(e,t,n){"use strict";var r,o,u,a,i;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),u=null,a=null,i=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,u=r.$parent;return o&&o!==t?o:e(u)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){i&&i.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),i=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},522:function(e,t,n){e.exports=n(310)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function a(e){return Array.isArray(e)?[]:{}}function i(e,t){return t&&!1===t.clone||!c(e)?e:f(a(e),e,t)}function s(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function l(e,t,n){var r={};return c(e)&&Object.keys(e).forEach((function(t){r[t]=i(e[t],n)})),Object.keys(t).forEach((function(o){c(t[o])&&e[o]?r[o]=f(e[o],t[o],n):r[o]=i(t[o],n)})),r}function f(e,t,n){var r=Array.isArray(t),o=Array.isArray(e),u=n||{arrayMerge:s};return r===o?r?(u.arrayMerge||s)(e,t,n):l(e,t,n):i(t,n)}var c,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),c=function(e){return r(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,f.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return f(e,n,t)}),{})},h=f,t.default=h},64:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdContent",props:{mdTag:{type:String,default:"div"}},render:function(e){return e(this.mdTag,{staticClass:"md-content",class:[this.$mdActiveTheme],attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},7:function(e,t){},99:function(e,t,n){"use strict";var r,o,u,a,i,s,l,f,c,d;Object.defineProperty(t,"__esModule",{value:!0}),r=n(64),o=n.n(r);for(u in r)"default"!==u&&(function(e){n.d(t,e,(function(){return r[e]}))})(u);a=n(0),i=null,s=!1,l=null,f=null,c=null,d=a(o.a,i,s,l,f,c),t.default=d.exports}})}));