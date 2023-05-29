var gt=Object.defineProperty;var xt=(r,o,d)=>o in r?gt(r,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[o]=d;var p=(r,o,d)=>(xt(r,typeof o!="symbol"?o+"":o,d),d),X=(r,o,d)=>{if(!o.has(r))throw TypeError("Cannot "+d)};var g=(r,o,d)=>(X(r,o,"read from private field"),d?d.call(r):o.get(r)),P=(r,o,d)=>{if(o.has(r))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(r):o.set(r,d)},y=(r,o,d,L)=>(X(r,o,"write to private field"),L?L.call(r,d):o.set(r,d),d);(function(r,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(r=typeof globalThis<"u"?globalThis:r||self,r.$timeline=o())})(this,function(){var O,k,T,j,W;"use strict";const r=[1,1.5,2,2.5,3,5,8,12];function o(i){return{all:i=i||new Map,on:function(t,e){var n=i.get(t);n?n.push(e):i.set(t,[e])},off:function(t,e){var n=i.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):i.set(t,[]))},emit:function(t,e){var n=i.get(t);n&&n.slice().map(function(s){s(e)}),(n=i.get("*"))&&n.slice().map(function(s){s(t,e)})}}}var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="Expected a function",A=0/0,G="[object Symbol]",Y=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt,V=typeof d=="object"&&d&&d.Object===Object&&d,tt=typeof self=="object"&&self&&self.Object===Object&&self,et=V||tt||Function("return this")(),it=Object.prototype,nt=it.toString,st=Math.max,at=Math.min,B=function(){return et.Date.now()};function rt(i,t,e){var n,s,f,h,a,x,c=0,m=!1,b=!1,S=!0;if(typeof i!="function")throw new TypeError(L);t=R(t)||0,Z(e)&&(m=!!e.leading,b="maxWait"in e,f=b?st(R(e.maxWait)||0,t):f,S="trailing"in e?!!e.trailing:S);function C(v){var I=n,_=s;return n=s=void 0,c=v,h=i.apply(_,I),h}function w(v){return c=v,a=setTimeout($,t),m?C(v):h}function l(v){var I=v-x,_=v-c,U=t-I;return b?at(U,f-_):U}function u(v){var I=v-x,_=v-c;return x===void 0||I>=t||I<0||b&&_>=f}function $(){var v=B();if(u(v))return E(v);a=setTimeout($,l(v))}function E(v){return a=void 0,S&&n?C(v):(n=s=void 0,h)}function M(){a!==void 0&&clearTimeout(a),c=0,n=x=s=a=void 0}function H(){return a===void 0?h:E(B())}function z(){var v=B(),I=u(v);if(n=arguments,s=this,x=v,I){if(a===void 0)return w(x);if(b)return a=setTimeout($,t),C(x)}return a===void 0&&(a=setTimeout($,t)),h}return z.cancel=M,z.flush=H,z}function ot(i,t,e){var n=!0,s=!0;if(typeof i!="function")throw new TypeError(L);return Z(e)&&(n="leading"in e?!!e.leading:n,s="trailing"in e?!!e.trailing:s),rt(i,t,{leading:n,maxWait:t,trailing:s})}function Z(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function ht(i){return!!i&&typeof i=="object"}function ct(i){return typeof i=="symbol"||ht(i)&&nt.call(i)==G}function R(i){if(typeof i=="number")return i;if(ct(i))return A;if(Z(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Z(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(Y,"");var e=J.test(i);return e||K.test(i)?Q(i.slice(2),e?2:8):q.test(i)?A:+i}var F=ot;function lt({pointWidth:i,timeSpacing:t,scaleSpacing:e,scaleHeight:n,startTime:s,endTime:f,drawLine:h,drawText:a}){const x=t/e;let c,m;switch(t){case 1:c=.5,m=5;break;case 1.5:c=1,m=10;break;case 2:c=1,m=10;break;case 2.5:c=1,m=10;break;case 3:c=1,m=10;break;case 5:c=2,m=20;break;case 8:c=3,m=30;break;case 12:c=4,m=40;break;default:throw new Error(`Unsupported zoom level: ${t}`)}let b=Math.floor(s/c)*c,S=Math.floor(f/c)*c;for(let C=b;C<=S;C+=c){const w=C%m===0?n.height5:C%(m/2)===0?n.height3:n.height1,l=(C-s)/x-i;if(h(l,w),w===n.height5){const u=N(C);a(l,n.height6,u)}}}function N(i){const t=Math.floor(i/60/60),e=Math.floor(Math.abs(i)/60),n=Math.floor(Math.abs(i)%60);return`${t?t.toString().padStart(2,"0")+":":""}${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}var ft=dt;function D(i,t){return i===t?0:i<t?-1:1}function dt(i,t,e){e||(e=D);var n=mt(i,t,e);if(n===-1)return-1;for(;n<i.length;n++){var s=e(i[n],t);if(s>=0)return n}return-1}function mt(i,t,e){e||(e=D);for(var n=i.length,s=n-1,f=0,h=-1;s>=f&&f>=0&&s<n;){h=Math.floor((s+f)/2);var a=e(i[h],t);if(a===0)return h;a>=0?s=h-1:f=h+1}return h}const ut={fill:!1,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",scaleColor:"#ffffff",areaBgColor:"#ffffff55",pointColor:"#00aeec",pointWidth:3,scaleSpacing:7,fps:120,zoom:2,maxZoom:7,minZoom:1};class vt{constructor(t,e){p(this,"$canvas");p(this,"canvasContext");P(this,O,void 0);p(this,"currentTime");p(this,"areas");p(this,"waveform");P(this,k,void 0);P(this,T,void 0);p(this,"scaleSpacing");p(this,"bgColor");P(this,j,void 0);p(this,"pointWidth");p(this,"pointColor");p(this,"textColor");p(this,"scaleColor");p(this,"areaBgColor");P(this,W,void 0);p(this,"fps");p(this,"startTime");p(this,"endTime");if(!t)throw new Error("canvas id is required!");typeof t=="string"?this.$canvas=document.getElementById(t):this.$canvas=t,this.canvasContext=this.$canvas.getContext("2d");const{fill:n,width:s,height:f,bgColor:h,textColor:a,scaleColor:x,areaBgColor:c,pointColor:m,pointWidth:b,scaleSpacing:S,fps:C,zoom:w,maxZoom:l,minZoom:u}={...ut,...e};if(w<u||w>l||w%1!==0)throw new Error(`zoom must be minZoom ~ maxZoom(${u} ~1 ${l}), and must be an integer`);if(l<1||l>9||l%1!==0)throw new Error("maxZoom must be 1 ~ 9, and must be an integer");if(u<1||u>9||u%1!==0)throw new Error("minZoom must be 1 ~ 9, and must be an integer");if(l<u)throw new Error("maxZoom must be greater than minZoom");if(n){const M=this.$canvas.parentElement;this.$canvas.width=M.clientWidth,this.$canvas.height=M.clientHeight,new ResizeObserver(F(this._onParentResize.bind(this),200)).observe(M)}else s&&(this.$canvas.width=s),f&&(this.$canvas.height=f);y(this,W,!1),y(this,O,o()),this.currentTime=0,y(this,k,[]);for(let M=u-1;M<l;M++)g(this,k).push(r[M]);y(this,T,r[w-1]),this.scaleSpacing=S,y(this,j,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8+1,height1:this.$canvas.height/10+1}),this.bgColor=h,this.pointWidth=b,this.pointColor=m,this.textColor=a,this.scaleColor=x,this.areaBgColor=c,this.fps=C;const E=Math.ceil(this.$canvas.width/this.scaleSpacing)*g(this,T);this.startTime=this.currentTime-E/2,this.endTime=this.currentTime+E/2}draw({currentTime:t,areas:e,waveform:n,_privateFlag:s}){if(g(this,W)&&!s){console.log("dragging so failing");return}this.currentTime=t,this.areas=e||[],this.waveform=n||[];const f=Math.ceil(this.$canvas.width/this.scaleSpacing),h=f*g(this,T),a=this.currentTime-h/2,x=this.currentTime+h/2,c=this.$canvas.width/2,m=h/this.$canvas.width;s&&this.emit("drag",[a,x]),this.clear(),this.drawArea(0,0,this.$canvas.width,this.$canvas.height,this.bgColor),this.areas.forEach(l=>{const u=l.startTime<a?0:Math.floor((l.startTime-a)/m),$=l.endTime>x?this.$canvas.width:Math.floor((l.endTime-a)/m);this.drawArea(u,0,$,this.$canvas.height,l.bgColor||this.areaBgColor)}),this.canvasContext.beginPath();let b=0,S=0,C=Math.max(1,Math.min(Math.floor(g(this,T)),10)),w=ft(this.waveform,[a-1,0],(l,u)=>{const $=l[0]-u[0];return $<0?-1:$>0?1:0});w===-1&&(w=this.waveform.length);for(let l=w;l<this.waveform.length;l++){const u=this.waveform[l];if(u[0]>x+1)break;if(S+=1,b+=u[1],S==C){const $=(u[0]-a+.025)/m,E=(this.$canvas.height-(this.$canvas.height-10)*(b/S/100))/2;this.canvasContext.moveTo($,E),this.canvasContext.lineTo($,this.$canvas.height-E),b=0,S=0}}return this.canvasContext.strokeStyle=this.areaBgColor,this.canvasContext.lineWidth=Math.min(1,.05/m*C),this.canvasContext.stroke(),lt.bind(this)({pointWidth:this.pointWidth,timePerPixel:m,scaleHeight:g(this,j),scaleSpacing:this.scaleSpacing,timeSpacing:g(this,T),screenScaleCount:f,startTime:a,endTime:x,drawLine:this.drawLine.bind(this),drawText:this.drawText.bind(this)}),this.drawTimelineScale(g(this,T)),this.drawLine(c-this.pointWidth/2,this.$canvas.height,this.pointWidth,this.pointColor),this.drawArea(c-54,4,c+54,18,this.pointColor),this.drawText(c,6,N(this.currentTime),this.textColor,"center","top"),this.$canvas.onwheel=this._onZoom.bind(this),this.$canvas.onmousedown=this._onDrag.bind(this),{startTime:a,endTime:x}}_onDrag({clientX:t}){y(this,W,!0);let e=0;const n=F(f=>{const h=f.clientX-t,a=Math.max(.01,this.currentTime-g(this,T)/this.scaleSpacing*(h-e));e=h,this.draw({currentTime:a,areas:this.areas,waveform:this.waveform,_privateFlag:!0})},g(this,T)===1?100:1e3/this.fps),s=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",s),y(this,W,!1),this.emit("timeUpdate",[this.currentTime,this.startTime,this.endTime])};document.addEventListener("mousemove",n),document.addEventListener("mouseup",s)}_onZoom(t){t.preventDefault();const e=g(this,k).findIndex(n=>n===g(this,T));t.deltaY<0&&e>0?(y(this,T,g(this,k)[e-1]),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform,_privateFlag:!0})):t.deltaY>0&&e<g(this,k).length-1&&(y(this,T,g(this,k)[e+1]),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform,_privateFlag:!0}))}_onParentResize(){const t=this.$canvas.parentNode;!t||(this.$canvas.width=t.clientWidth,this.$canvas.height=t.clientHeight,y(this,j,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8,height1:this.$canvas.height/10}),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform}))}clear(){this.canvasContext&&this.canvasContext.clearRect(0,0,this.$canvas.width,this.$canvas.height),this.$canvas&&(this.$canvas.onwheel=null,this.$canvas.onmousedown=null)}drawTimelineScale(t){let e=t<60?`${t}s`:`${t/60}min`;this.drawText(this.scaleSpacing+12,9,`${e}`,this.textColor,"left","middle"),this.canvasContext.beginPath(),this.canvasContext.moveTo(5,6),this.canvasContext.lineTo(5,10),this.canvasContext.lineTo(this.scaleSpacing+7,10),this.canvasContext.lineTo(this.scaleSpacing+7,6),this.canvasContext.strokeStyle=this.scaleColor,this.canvasContext.lineWidth=1.5,this.canvasContext.stroke()}drawLine(t,e,n=1,s=this.scaleColor){this.canvasContext.beginPath(),this.canvasContext.moveTo(t,this.$canvas.height),this.canvasContext.lineTo(t,this.$canvas.height-e),this.canvasContext.strokeStyle=s,this.canvasContext.lineWidth=n,this.canvasContext.stroke()}drawText(t,e,n,s=this.textColor,f="center",h="alphabetic"){this.canvasContext.beginPath(),this.canvasContext.font="11px Franklin gothic medium",this.canvasContext.fillStyle=s,this.canvasContext.textAlign=f,this.canvasContext.textBaseline=h,this.canvasContext.fillText(n,t,e)}drawArea(t,e,n,s,f){this.canvasContext.beginPath(),this.canvasContext.rect(t,e,n-t,s-e),this.canvasContext.fillStyle=f,this.canvasContext.fill()}on(t,e){g(this,O).on(t,e)}off(t,e){g(this,O).off(t,e)}emit(...t){g(this,O).emit(...t)}}return O=new WeakMap,k=new WeakMap,T=new WeakMap,j=new WeakMap,W=new WeakMap,vt});
