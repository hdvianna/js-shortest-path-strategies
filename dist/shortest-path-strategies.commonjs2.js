module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){function r(){let t={},e=[];return{edge(e,r,o){return n(e,r),n(r,e),t[e][r]=o,this},build:()=>(e.forEach((function(n){let o=t[n];e.forEach((function(t){t in o||(o[t]=r.INFINITY)}))})),t)};function n(n,o){n in t||(t[n]={},t[n][n]=0,t[n][o]=r.INFINITY,e.push(n))}}r.INFINITY=Number.MAX_SAFE_INTEGER,t.exports=r},function(t,e,r){"use strict";r.r(e),e.default={GraphBuilder:r(0),GreedStrategy:r(2),DijkstraStrategy:r(3)}},function(t,e,r){const n=r(0).INFINITY;function o(t){return{paths:(t,r)=>e(t,r),shortest:(t,r)=>e(t,r).reduce((t,e)=>!t||e.cost<t.cost?e:t,null)};function e(e,r){let o={};return function e(u,s,i){let c=u.split(",");c.push(s);let f=c.join(",");if(s===r)o[f]=i;else{const r=t[s];for(let t in r){!(f.split(",").slice(1).indexOf(t)>-1)&&r[t]<n&&t!=s&&e(f,t,i+r[t])}}}("",e,0),Object.keys(o).map(t=>({path:t.split(",").slice(1),cost:o[t]}))}}o.INFINITY=Number.MAX_SAFE_INTEGER,t.exports=o},function(t,e,r){const n=r(0).INFINITY;function o(t){return{paths(t,e){throw new Error("I'm not supposed to do this!")},shortest:(e,r)=>function(e,r){let o=Object.keys(t),u=function(t){return t.reduce((t,e)=>(t[e]={shortestDistance:n,previous:""},t),{})}(o),s=[],i=o;return c(),{path:f(r),cost:u[r].shortestDistance};function c(){for(u[e].shortestDistance=0;i.length>0;){let e=i.reduce((t,e)=>!t||u[e].shortestDistance<u[t].shortestDistance?e:t,""),r=Object.keys(t[e]).filter(r=>r!=e&&t[e][r]<n),o=u[e].shortestDistance;for(let n of r){let r=o+t[e][n];r<u[n].shortestDistance&&(u[n].shortestDistance=r,u[n].previous=e)}s.push(e),i=i.filter(t=>t!==e)}}function f(t){if(t===e)return[t];{let e=f(u[t].previous);return e.push(t),e}}}(e,r)}}o.INFINITY=Number.MAX_SAFE_INTEGER,t.exports=o}]).default;