!function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){var n=e[a][1][t];return o(n?n:t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t["default"]:t},o=r(t("./analytics")),i=r(t("./supports"));if(!i.flexbox()){var a=document.createElement("div");a.className="Error",a.innerHTML="Your browser does not support Flexbox.\n                   Parts of this site may not appear as expected.",document.body.insertBefore(a,document.body.firstChild)}o.track()},{"./analytics":3,"./supports":6}],2:[function(t,e,n){"use strict";e.exports=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}},{}],3:[function(t,e,n){"use strict";function r(){if(window.matchMedia){var t=void 0;Object.keys(f).forEach(function(e){var n=window.matchMedia(f[e]);n.matches&&ga("set","dimension1",e),n.addListener(function(n){n.matches&&(clearTimeout(t),t=setTimeout(function(){ga("set","dimension1",e),ga("send","event","Breakpoint","change",e)},1e3))})})}}function o(){s(function(){this.getAttribute("data-social-network")||a(this)&&(this.target="_blank",ga("send","event","Outbound Link","click",this.href))})}function i(){s(function(){var t=this.getAttribute("data-social-network");if(t){var e=this.getAttribute("data-social-action"),n=location.href;this.target="_blank",ga("send","social",t,e,n)}})}function a(t){var e=u(t.href),n=u(location.href);return e.origin!=n.origin}var c=function(t){return t&&t.__esModule?t["default"]:t},s=c(t("./link-clicked")),u=c(t("./parse-url")),f={xs:"(max-width: 383px)",sm:"(min-width: 384px) and (max-width: 575px)",md:"(min-width: 576px) and (max-width: 767px)",lg:"(min-width: 768px)"};e.exports={track:function(){r(),o(),i(),ga("send","pageview")}}},{"./link-clicked":4,"./parse-url":5}],4:[function(t,e,n){"use strict";function r(t){return t.nodeName&&"a"==t.nodeName.toLowerCase()&&t.href}function o(t){if(r(t))return t;for(;t.parentNode&&1==t.parentNode.nodeType;){if(r(t))return t;t=t.parentNode}}var i=function(t){return t&&t.__esModule?t["default"]:t},a=i(t("./add-listener"));e.exports=function(t){a(document,"click",function(e){var n=e||window.event,r=n.target||n.srcElement,i=o(r);i&&t.call(i,n)})}},{"./add-listener":2}],5:[function(t,e,n){"use strict";var r=document.createElement("a"),o={};e.exports=function(t){if(o[t])return o[t];var e=/:80$/,n=/:443$/;r.href=t;var i=r.protocol&&":"!=r.protocol?r.protocol:location.protocol,a="80"==r.port||"443"==r.port?"":r.port,c=r.host.replace("http:"==i?e:n,""),s=r.origin?r.origin:i+"//"+c,u="/"==r.pathname.charAt(0)?r.pathname:"/"+r.pathname;return o[t]={hash:r.hash,host:c,hostname:r.hostname,href:r.href,origin:s,path:u+r.search,pathname:u,port:a,protocol:i,search:r.search}}},{}],6:[function(t,e,n){"use strict";var r={},o=document.body.style;e.exports={flexbox:function(){return r.flexbox||(r.flexbox="flexBasis"in o||"msFlexAlign"in o||"webkitBoxDirection"in o)}}},{}]},{},[1]);
//# sourceMappingURL=main.js.map