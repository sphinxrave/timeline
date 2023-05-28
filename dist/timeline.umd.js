var vt=Object.defineProperty;var xt=(r,o,u)=>o in r?vt(r,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[o]=u;var p=(r,o,u)=>(xt(r,typeof o!="symbol"?o+"":o,u),u),H=(r,o,u)=>{if(!o.has(r))throw TypeError("Cannot "+u)};var v=(r,o,u)=>(H(r,o,"read from private field"),u?u.call(r):o.get(r)),P=(r,o,u)=>{if(o.has(r))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(r):o.set(r,u)},y=(r,o,u,_)=>(H(r,o,"write to private field"),_?_.call(r,u):o.set(r,u),u);(function(r,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(r=typeof globalThis<"u"?globalThis:r||self,r.$timeline=o())})(this,function(){var E,k,T,j,W;"use strict";const r=[1,1.5,2,2.5,3,5,8,12];function o(i){return{all:i=i||new Map,on:function(t,e){var n=i.get(t);n?n.push(e):i.set(t,[e])},off:function(t,e){var n=i.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):i.set(t,[]))},emit:function(t,e){var n=i.get(t);n&&n.slice().map(function(s){s(e)}),(n=i.get("*"))&&n.slice().map(function(s){s(t,e)})}}}var u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_="Expected a function",A=0/0,U="[object Symbol]",Y=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt,V=typeof u=="object"&&u&&u.Object===Object&&u,tt=typeof self=="object"&&self&&self.Object===Object&&self,et=V||tt||Function("return this")(),it=Object.prototype,nt=it.toString,st=Math.max,at=Math.min,L=function(){return et.Date.now()};function rt(i,t,e){var n,s,l,f,a,x,h=0,d=!1,w=!1,S=!0;if(typeof i!="function")throw new TypeError(_);t=R(t)||0,B(e)&&(d=!!e.leading,w="maxWait"in e,l=w?st(R(e.maxWait)||0,t):l,S="trailing"in e?!!e.trailing:S);function C(g){var O=n,Z=s;return n=s=void 0,h=g,f=i.apply(Z,O),f}function b(g){return h=g,a=setTimeout($,t),d?C(g):f}function c(g){var O=g-x,Z=g-h,G=t-O;return w?at(G,l-Z):G}function m(g){var O=g-x,Z=g-h;return x===void 0||O>=t||O<0||w&&Z>=l}function $(){var g=L();if(m(g))return I(g);a=setTimeout($,c(g))}function I(g){return a=void 0,S&&n?C(g):(n=s=void 0,f)}function M(){a!==void 0&&clearTimeout(a),h=0,n=x=s=a=void 0}function X(){return a===void 0?f:I(L())}function z(){var g=L(),O=m(g);if(n=arguments,s=this,x=g,O){if(a===void 0)return b(x);if(w)return a=setTimeout($,t),C(x)}return a===void 0&&(a=setTimeout($,t)),f}return z.cancel=M,z.flush=X,z}function ot(i,t,e){var n=!0,s=!0;if(typeof i!="function")throw new TypeError(_);return B(e)&&(n="leading"in e?!!e.leading:n,s="trailing"in e?!!e.trailing:s),rt(i,t,{leading:n,maxWait:t,trailing:s})}function B(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function ht(i){return!!i&&typeof i=="object"}function ct(i){return typeof i=="symbol"||ht(i)&&nt.call(i)==U}function R(i){if(typeof i=="number")return i;if(ct(i))return A;if(B(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=B(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(Y,"");var e=J.test(i);return e||K.test(i)?Q(i.slice(2),e?2:8):q.test(i)?A:+i}var F=ot;function lt({pointWidth:i,timeSpacing:t,scaleSpacing:e,scaleHeight:n,startTime:s,endTime:l,drawLine:f,drawText:a}){const x=t/e;let h,d;switch(t){case 1:h=.5,d=5;break;case 1.5:h=1,d=10;break;case 2:h=1,d=10;break;case 2.5:h=1,d=10;break;case 3:h=1,d=10;break;case 5:h=2,d=20;break;case 8:h=3,d=30;break;case 12:h=4,d=40;break;default:throw new Error(`Unsupported zoom level: ${t}`)}let w=Math.floor(s/h)*h,S=Math.floor(l/h)*h;for(let C=w;C<=S;C+=h){const b=C%d===0?n.height5:C%(d/2)===0?n.height3:n.height1,c=(C-s)/x-i;if(f(c,b),b===n.height5){const m=N(C);a(c,b+13,m)}}}function N(i){const t=Math.floor(i/60/60),e=Math.floor(i/60),n=Math.floor(i%60);return`${t?t.toString().padStart(2,"0")+":":""}${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}var ft=ut;function D(i,t){return i===t?0:i<t?-1:1}function ut(i,t,e){e||(e=D);var n=dt(i,t,e);if(n===-1)return-1;for(;n<i.length;n++){var s=e(i[n],t);if(s>=0)return n}return-1}function dt(i,t,e){e||(e=D);for(var n=i.length,s=n-1,l=0,f=-1;s>=l&&l>=0&&s<n;){f=Math.floor((s+l)/2);var a=e(i[f],t);if(a===0)return f;a>=0?s=f-1:l=f+1}return f}const mt={fill:!1,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",scaleColor:"#ffffff",areaBgColor:"#ffffff55",pointColor:"#00aeec",pointWidth:3,scaleSpacing:7,fps:120,zoom:2,maxZoom:7,minZoom:1};class gt{constructor(t,e){p(this,"$canvas");p(this,"canvasContext");P(this,E,void 0);p(this,"currentTime");p(this,"areas");p(this,"waveform");P(this,k,void 0);P(this,T,void 0);p(this,"scaleSpacing");p(this,"bgColor");P(this,j,void 0);p(this,"pointWidth");p(this,"pointColor");p(this,"textColor");p(this,"scaleColor");p(this,"areaBgColor");P(this,W,void 0);p(this,"fps");p(this,"startTime");p(this,"endTime");if(!t)throw new Error("canvas id is required!");typeof t=="string"?this.$canvas=document.getElementById(t):this.$canvas=t,this.canvasContext=this.$canvas.getContext("2d");const{fill:n,width:s,height:l,bgColor:f,textColor:a,scaleColor:x,areaBgColor:h,pointColor:d,pointWidth:w,scaleSpacing:S,fps:C,zoom:b,maxZoom:c,minZoom:m}={...mt,...e};if(b<m||b>c||b%1!==0)throw new Error(`zoom must be minZoom ~ maxZoom(${m} ~1 ${c}), and must be an integer`);if(c<1||c>9||c%1!==0)throw new Error("maxZoom must be 1 ~ 9, and must be an integer");if(m<1||m>9||m%1!==0)throw new Error("minZoom must be 1 ~ 9, and must be an integer");if(c<m)throw new Error("maxZoom must be greater than minZoom");if(n){const M=this.$canvas.parentElement;this.$canvas.width=M.clientWidth,this.$canvas.height=M.clientHeight,new ResizeObserver(F(this._onParentResize.bind(this),200)).observe(M)}else s&&(this.$canvas.width=s),l&&(this.$canvas.height=l);y(this,W,!1),y(this,E,o()),this.currentTime=0,y(this,k,[]);for(let M=m-1;M<c;M++)v(this,k).push(r[M]);y(this,T,r[b-1]),this.scaleSpacing=S,y(this,j,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8+1,height1:this.$canvas.height/10+1}),this.bgColor=f,this.pointWidth=w,this.pointColor=d,this.textColor=a,this.scaleColor=x,this.areaBgColor=h,this.fps=C;const I=Math.ceil(this.$canvas.width/this.scaleSpacing)*v(this,T);this.startTime=this.currentTime-I/2,this.endTime=this.currentTime+I/2}draw({currentTime:t,areas:e,waveform:n,_privateFlag:s}){if(v(this,W)&&!s){console.log("dragging so failing");return}this.currentTime=t,this.areas=e||[],this.waveform=n||[];const l=Math.ceil(this.$canvas.width/this.scaleSpacing),f=l*v(this,T),a=this.currentTime-f/2,x=this.currentTime+f/2,h=this.$canvas.width/2,d=f/this.$canvas.width;s&&this.emit("drag",a,x),this.clear(),this.drawArea(0,0,this.$canvas.width,this.$canvas.height,this.bgColor),this.areas.forEach(c=>{const m=c.startTime<a?0:Math.floor((c.startTime-a)/d),$=c.endTime>x?this.$canvas.width:Math.floor((c.endTime-a)/d);this.drawArea(m,0,$,this.$canvas.height,c.bgColor||this.areaBgColor)}),this.canvasContext.beginPath();let w=0,S=0,C=Math.max(1,Math.min(Math.floor(v(this,T)),10)),b=ft(this.waveform,[a-1,0],(c,m)=>{const $=c[0]-m[0];return $<0?-1:$>0?1:0});b===-1&&(b=this.waveform.length);for(let c=b;c<this.waveform.length;c++){const m=this.waveform[c];if(m[0]>x+1)break;if(S+=1,w+=m[1],S==C){const $=(m[0]-a+.025)/d,I=(this.$canvas.height-(this.$canvas.height-10)*(w/S/100))/2;this.canvasContext.moveTo($,I),this.canvasContext.lineTo($,this.$canvas.height-I),w=0,S=0}}return this.canvasContext.strokeStyle=this.areaBgColor,this.canvasContext.lineWidth=Math.min(1,.05/d*C),this.canvasContext.stroke(),lt.bind(this)({pointWidth:this.pointWidth,timePerPixel:d,scaleHeight:v(this,j),scaleSpacing:this.scaleSpacing,timeSpacing:v(this,T),screenScaleCount:l,startTime:a,endTime:x,drawLine:this.drawLine.bind(this),drawText:this.drawText.bind(this)}),this.drawTimelineScale(v(this,T)),this.drawLine(h-this.pointWidth/2,this.$canvas.height,this.pointWidth,this.pointColor),this.drawArea(h-54,4,h+54,18,this.pointColor),this.drawText(h,6,N(this.currentTime),this.textColor,"center","top"),this.$canvas.onwheel=this._onZoom.bind(this),this.$canvas.onmousedown=this._onDrag.bind(this),{startTime:a,endTime:x}}_onDrag({clientX:t}){y(this,W,!0);let e=0;document.onmousemove=F(n=>{const s=n.clientX-t,l=Math.max(.01,this.currentTime-v(this,T)/this.scaleSpacing*(s-e));e=s,this.draw({currentTime:l,areas:this.areas,waveform:this.waveform,_privateFlag:!0})},v(this,T)===1?100:1e3/this.fps),document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null,y(this,W,!1),this.emit("timeUpdate",this.currentTime,this.startTime,this.endTime)}}_onZoom(t){t.preventDefault();const e=v(this,k).findIndex(n=>n===v(this,T));t.deltaY<0&&e>0?(y(this,T,v(this,k)[e-1]),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform,_privateFlag:!0})):t.deltaY>0&&e<v(this,k).length-1&&(y(this,T,v(this,k)[e+1]),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform,_privateFlag:!0}))}_onParentResize(){const t=this.$canvas.parentNode;!t||(this.$canvas.width=t.clientWidth,this.$canvas.height=t.clientHeight,y(this,j,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8,height1:this.$canvas.height/10}),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform}))}clear(){this.canvasContext&&this.canvasContext.clearRect(0,0,this.$canvas.width,this.$canvas.height),this.$canvas&&(this.$canvas.onwheel=null,this.$canvas.onmousedown=null)}drawTimelineScale(t){let e=t<60?`${t}s`:`${t/60}min`;this.drawText(this.scaleSpacing+12,9,`${e}`,this.textColor,"left","middle"),this.canvasContext.beginPath(),this.canvasContext.moveTo(5,6),this.canvasContext.lineTo(5,10),this.canvasContext.lineTo(this.scaleSpacing+7,10),this.canvasContext.lineTo(this.scaleSpacing+7,6),this.canvasContext.strokeStyle=this.scaleColor,this.canvasContext.lineWidth=1.5,this.canvasContext.stroke()}drawLine(t,e,n=1,s=this.scaleColor){this.canvasContext.beginPath(),this.canvasContext.moveTo(t,this.$canvas.height),this.canvasContext.lineTo(t,this.$canvas.height-e),this.canvasContext.strokeStyle=s,this.canvasContext.lineWidth=n,this.canvasContext.stroke()}drawText(t,e,n,s=this.textColor,l="center",f="alphabetic"){this.canvasContext.beginPath(),this.canvasContext.font="11px Franklin gothic medium",this.canvasContext.fillStyle=s,this.canvasContext.textAlign=l,this.canvasContext.textBaseline=f,this.canvasContext.fillText(n,t,e)}drawArea(t,e,n,s,l){this.canvasContext.beginPath(),this.canvasContext.rect(t,e,n-t,s-e),this.canvasContext.fillStyle=l,this.canvasContext.fill()}on(t,e){v(this,E).on(t,e)}off(t,e){v(this,E).off(t,e)}emit(...t){v(this,E).emit(...t)}}return E=new WeakMap,k=new WeakMap,T=new WeakMap,j=new WeakMap,W=new WeakMap,gt});
