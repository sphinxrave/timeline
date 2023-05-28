var vt=Object.defineProperty;var xt=(s,r,u)=>r in s?vt(s,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[r]=u;var w=(s,r,u)=>(xt(s,typeof r!="symbol"?r+"":r,u),u),X=(s,r,u)=>{if(!r.has(s))throw TypeError("Cannot "+u)};var x=(s,r,u)=>(X(s,r,"read from private field"),u?u.call(s):r.get(s)),j=(s,r,u)=>{if(r.has(s))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(s):r.set(s,u)},y=(s,r,u,P)=>(X(s,r,"write to private field"),P?P.call(s,u):r.set(s,u),u);(function(s,r){typeof exports=="object"&&typeof module<"u"?module.exports=r():typeof define=="function"&&define.amd?define(r):(s=typeof globalThis<"u"?globalThis:s||self,s.$timeline=r())})(this,function(){var I,k,T,E,O;"use strict";const s=[1,1.5,2,2.5,3,5,8,12];function r(i){return{all:i=i||new Map,on:function(t,e){var n=i.get(t);n?n.push(e):i.set(t,[e])},off:function(t,e){var n=i.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):i.set(t,[]))},emit:function(t,e){var n=i.get(t);n&&n.slice().map(function(a){a(e)}),(n=i.get("*"))&&n.slice().map(function(a){a(t,e)})}}}var u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="Expected a function",z=0/0,G="[object Symbol]",H=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,q=/^0o[0-7]+$/i,J=parseInt,K=typeof u=="object"&&u&&u.Object===Object&&u,Q=typeof self=="object"&&self&&self.Object===Object&&self,V=K||Q||Function("return this")(),tt=Object.prototype,et=tt.toString,it=Math.max,nt=Math.min,B=function(){return V.Date.now()};function at(i,t,e){var n,a,l,f,o,p,h=0,d=!1,$=!1,S=!0;if(typeof i!="function")throw new TypeError(P);t=A(t)||0,Z(e)&&(d=!!e.leading,$="maxWait"in e,l=$?it(A(e.maxWait)||0,t):l,S="trailing"in e?!!e.trailing:S);function C(v){var M=n,_=a;return n=a=void 0,h=v,f=i.apply(_,M),f}function b(v){return h=v,o=setTimeout(g,t),d?C(v):f}function c(v){var M=v-p,_=v-h,D=t-M;return $?nt(D,l-_):D}function m(v){var M=v-p,_=v-h;return p===void 0||M>=t||M<0||$&&_>=l}function g(){var v=B();if(m(v))return W(v);o=setTimeout(g,c(v))}function W(v){return o=void 0,S&&n?C(v):(n=a=void 0,f)}function mt(){o!==void 0&&clearTimeout(o),h=0,n=p=a=o=void 0}function gt(){return o===void 0?f:W(B())}function L(){var v=B(),M=m(v);if(n=arguments,a=this,p=v,M){if(o===void 0)return b(p);if($)return o=setTimeout(g,t),C(p)}return o===void 0&&(o=setTimeout(g,t)),f}return L.cancel=mt,L.flush=gt,L}function st(i,t,e){var n=!0,a=!0;if(typeof i!="function")throw new TypeError(P);return Z(e)&&(n="leading"in e?!!e.leading:n,a="trailing"in e?!!e.trailing:a),at(i,t,{leading:n,maxWait:t,trailing:a})}function Z(i){var t=typeof i;return!!i&&(t=="object"||t=="function")}function rt(i){return!!i&&typeof i=="object"}function ot(i){return typeof i=="symbol"||rt(i)&&et.call(i)==G}function A(i){if(typeof i=="number")return i;if(ot(i))return z;if(Z(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Z(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=i.replace(H,"");var e=Y.test(i);return e||q.test(i)?J(i.slice(2),e?2:8):U.test(i)?z:+i}var R=st;function ht({pointWidth:i,timeSpacing:t,scaleSpacing:e,scaleHeight:n,startTime:a,endTime:l,drawLine:f,drawText:o}){const p=t/e;let h,d;switch(t){case 1:h=.5,d=5;break;case 1.5:h=1,d=10;break;case 2:h=1,d=10;break;case 2.5:h=1,d=10;break;case 3:h=1,d=10;break;case 5:h=2,d=20;break;case 8:h=3,d=30;break;case 12:h=4,d=40;break;default:throw new Error(`Unsupported zoom level: ${t}`)}let $=Math.floor(a/h)*h,S=Math.floor(l/h)*h;for(let C=$;C<=S;C+=h){const b=C%d===0?n.height5:C%(d/2)===0?n.height3:n.height1,c=(C-a)/p-i;if(f(c,b),b===n.height5){const m=F(C);o(c,b+13,m)}}}function F(i){const t=Math.floor(i/60/60),e=Math.floor(i/60),n=Math.floor(i%60);return`${t?t.toString().padStart(2,"0")+":":""}${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}var ct=lt;function N(i,t){return i===t?0:i<t?-1:1}function lt(i,t,e){e||(e=N);var n=ft(i,t,e);if(n===-1)return-1;for(;n<i.length;n++){var a=e(i[n],t);if(a>=0)return n}return-1}function ft(i,t,e){e||(e=N);for(var n=i.length,a=n-1,l=0,f=-1;a>=l&&l>=0&&a<n;){f=Math.floor((a+l)/2);var o=e(i[f],t);if(o===0)return f;o>=0?a=f-1:l=f+1}return f}const ut={fill:!1,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",scaleColor:"#ffffff",areaBgColor:"#ffffff55",pointColor:"#00aeec",pointWidth:3,scaleSpacing:7,fps:120,zoom:2,maxZoom:7,minZoom:1};class dt{constructor(t,e){w(this,"$canvas");w(this,"canvasContext");j(this,I,void 0);w(this,"currentTime");w(this,"areas");w(this,"waveform");j(this,k,void 0);j(this,T,void 0);w(this,"scaleSpacing");w(this,"bgColor");j(this,E,void 0);w(this,"pointWidth");w(this,"pointColor");w(this,"textColor");w(this,"scaleColor");w(this,"areaBgColor");j(this,O,void 0);w(this,"fps");if(!t)throw new Error("canvas id is required!");this.$canvas=document.getElementById(t),this.canvasContext=this.$canvas.getContext("2d");const{fill:n,width:a,height:l,bgColor:f,textColor:o,scaleColor:p,areaBgColor:h,pointColor:d,pointWidth:$,scaleSpacing:S,fps:C,zoom:b,maxZoom:c,minZoom:m}={...ut,...e};if(b<m||b>c||b%1!==0)throw new Error(`zoom must be minZoom ~ maxZoom(${m} ~1 ${c}), and must be an integer`);if(c<1||c>9||c%1!==0)throw new Error("maxZoom must be 1 ~ 9, and must be an integer");if(m<1||m>9||m%1!==0)throw new Error("minZoom must be 1 ~ 9, and must be an integer");if(c<m)throw new Error("maxZoom must be greater than minZoom");if(n){const g=this.$canvas.parentElement;this.$canvas.width=g.clientWidth,this.$canvas.height=g.clientHeight,new ResizeObserver(R(this._onParentResize.bind(this),200)).observe(g)}else a&&(this.$canvas.width=a),l&&(this.$canvas.height=l);y(this,O,!1),y(this,I,r()),this.currentTime=0,y(this,k,[]);for(let g=m-1;g<c;g++)x(this,k).push(s[g]);y(this,T,s[b-1]),this.scaleSpacing=S,y(this,E,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8+1,height1:this.$canvas.height/10+1}),this.bgColor=f,this.pointWidth=$,this.pointColor=d,this.textColor=o,this.scaleColor=p,this.areaBgColor=h,this.fps=C}draw({currentTime:t,areas:e,waveform:n,_privateFlag:a}){if(x(this,O)&&!a){console.log("dragging so failing");return}this.currentTime=t,this.areas=e||[],this.waveform=n||[];const l=Math.ceil(this.$canvas.width/this.scaleSpacing),f=l*x(this,T),o=this.currentTime-f/2,p=this.currentTime+f/2,h=this.$canvas.width/2,d=f/this.$canvas.width;this.clear(),this.drawArea(0,0,this.$canvas.width,this.$canvas.height,this.bgColor),this.areas.forEach(c=>{const m=c.startTime<o?0:Math.floor((c.startTime-o)/d),g=c.endTime>p?this.$canvas.width:Math.floor((c.endTime-o)/d);this.drawArea(m,0,g,this.$canvas.height,c.bgColor||this.areaBgColor)}),this.canvasContext.beginPath();let $=0,S=0,C=Math.max(1,Math.min(Math.floor(x(this,T)),10)),b=ct(this.waveform,[o-1,0],(c,m)=>{const g=c[0]-m[0];return g<0?-1:g>0?1:0});b===-1&&(b=this.waveform.length);for(let c=b;c<this.waveform.length;c++){const m=this.waveform[c];if(m[0]>p+1)break;if(S+=1,$+=m[1],S==C){const g=(m[0]-o+.025)/d,W=(this.$canvas.height-(this.$canvas.height-10)*($/S/100))/2;this.canvasContext.moveTo(g,W),this.canvasContext.lineTo(g,this.$canvas.height-W),$=0,S=0}}return this.canvasContext.strokeStyle=this.areaBgColor,this.canvasContext.lineWidth=Math.min(1,.05/d*C),this.canvasContext.stroke(),ht.bind(this)({pointWidth:this.pointWidth,timePerPixel:d,scaleHeight:x(this,E),scaleSpacing:this.scaleSpacing,timeSpacing:x(this,T),screenScaleCount:l,startTime:o,endTime:p,drawLine:this.drawLine.bind(this),drawText:this.drawText.bind(this)}),this.drawTimelineScale(x(this,T)),this.drawLine(h-this.pointWidth/2,this.$canvas.height,this.pointWidth,this.pointColor),this.drawArea(h-54,4,h+54,18,this.pointColor),this.drawText(h,6,F(this.currentTime),this.textColor,"center","top"),this.$canvas.onwheel=this._onZoom.bind(this),this.$canvas.onmousedown=this._onDrag.bind(this),{startTime:o,endTime:p}}_onDrag({clientX:t}){y(this,O,!0);let e=0;document.onmousemove=R(n=>{const a=n.clientX-t,l=Math.max(.01,this.currentTime-x(this,T)/this.scaleSpacing*(a-e));e=a,this.draw({currentTime:l,areas:this.areas,waveform:this.waveform,_privateFlag:!0})},x(this,T)===1?100:1e3/this.fps),document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null,y(this,O,!1),this.emit("timeUpdate",this.currentTime)}}_onZoom(t){t.preventDefault();const e=x(this,k).findIndex(n=>n===x(this,T));t.deltaY<0&&e>0?(y(this,T,x(this,k)[e-1]),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform,_privateFlag:!0})):t.deltaY>0&&e<x(this,k).length-1&&(y(this,T,x(this,k)[e+1]),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform,_privateFlag:!0}))}_onParentResize(){const t=this.$canvas.parentNode;!t||(this.$canvas.width=t.clientWidth,this.$canvas.height=t.clientHeight,y(this,E,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8,height1:this.$canvas.height/10}),this.draw({currentTime:this.currentTime,areas:this.areas,waveform:this.waveform}))}clear(){this.canvasContext&&this.canvasContext.clearRect(0,0,this.$canvas.width,this.$canvas.height),this.$canvas&&(this.$canvas.onwheel=null,this.$canvas.onmousedown=null)}drawTimelineScale(t){let e=t<60?`${t}s`:`${t/60}min`;this.drawText(this.scaleSpacing+12,9,`${e}`,this.textColor,"left","middle"),this.canvasContext.beginPath(),this.canvasContext.moveTo(5,6),this.canvasContext.lineTo(5,10),this.canvasContext.lineTo(this.scaleSpacing+7,10),this.canvasContext.lineTo(this.scaleSpacing+7,6),this.canvasContext.strokeStyle=this.scaleColor,this.canvasContext.lineWidth=1.5,this.canvasContext.stroke()}drawLine(t,e,n=1,a=this.scaleColor){this.canvasContext.beginPath(),this.canvasContext.moveTo(t,this.$canvas.height),this.canvasContext.lineTo(t,this.$canvas.height-e),this.canvasContext.strokeStyle=a,this.canvasContext.lineWidth=n,this.canvasContext.stroke()}drawText(t,e,n,a=this.textColor,l="center",f="alphabetic"){this.canvasContext.beginPath(),this.canvasContext.font="11px Franklin gothic medium",this.canvasContext.fillStyle=a,this.canvasContext.textAlign=l,this.canvasContext.textBaseline=f,this.canvasContext.fillText(n,t,e)}drawArea(t,e,n,a,l){this.canvasContext.beginPath(),this.canvasContext.rect(t,e,n-t,a-e),this.canvasContext.fillStyle=l,this.canvasContext.fill()}on(t,e){x(this,I).on(t,e)}off(t,e){x(this,I).off(t,e)}emit(...t){x(this,I).emit(...t)}}return I=new WeakMap,k=new WeakMap,T=new WeakMap,E=new WeakMap,O=new WeakMap,dt});
