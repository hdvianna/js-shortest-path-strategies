!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){function n(){let t={},e=[];return{edge(e,n,o){return r(e,n),r(n,e),t[e][n]=o,this},build:()=>(e.forEach((function(r){let o=t[r];e.forEach((function(t){t in o||(o[t]=n.INFINITY)}))})),t)};function r(r,o){r in t||(t[r]={},t[r][r]=0,t[r][o]=n.INFINITY,e.push(r))}}n.INFINITY=Number.MAX_SAFE_INTEGER,t.exports=n},function(t,e,n){t.exports={GraphBuilder:n(0),GreedStrategy:n(2),DijkstraStrategy:n(3)}},function(t,e,n){const r=n(0).INFINITY;function o(t){return{paths:(t,n)=>e(t,n),shortest:(t,n)=>e(t,n).reduce((t,e)=>!t||e.cost<t.cost?e:t,null)};function e(e,n){let o={};return function e(u,s,i){let c=u.split(",");c.push(s);let f=c.join(",");if(s===n)o[f]=i;else{const n=t[s];for(let t in n){!(f.split(",").slice(1).indexOf(t)>-1)&&n[t]<r&&t!=s&&e(f,t,i+n[t])}}}("",e,0),Object.keys(o).map(t=>({path:t.split(",").slice(1),cost:o[t]}))}}o.INFINITY=Number.MAX_SAFE_INTEGER,t.exports=o},function(t,e,n){const r=n(0).INFINITY;function o(t){return{paths(t,e){throw new Error("I'm not supposed to do this!")},shortest:(e,n)=>function(e,n){let o=Object.keys(t),u=function(t){return t.reduce((t,e)=>(t[e]={shortestDistance:r,previous:""},t),{})}(o),s=[],i=o;return c(),{path:f(n),cost:u[n].shortestDistance};function c(){for(u[e].shortestDistance=0;i.length>0;){let e=i.reduce((t,e)=>!t||u[e].shortestDistance<u[t].shortestDistance?e:t,""),n=Object.keys(t[e]).filter(n=>n!=e&&t[e][n]<r),o=u[e].shortestDistance;for(let r of n){let n=o+t[e][r];n<u[r].shortestDistance&&(u[r].shortestDistance=n,u[r].previous=e)}s.push(e),i=i.filter(t=>t!==e)}}function f(t){if(t===e)return[t];{let e=f(u[t].previous);return e.push(t),e}}}(e,n)}}o.INFINITY=Number.MAX_SAFE_INTEGER,t.exports=o}]);