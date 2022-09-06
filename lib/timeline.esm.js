/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(t):n?n.value:e.get(t)}function e(t,e,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(t,i):s?s.value=i:e.set(t,i),i}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,o=parseInt,h="object"==typeof i&&i&&i.Object===Object&&i,c="object"==typeof self&&self&&self.Object===Object&&self,u=h||c||Function("return this")(),f=Object.prototype.toString,l=Math.max,d=Math.min,g=function(){return u.Date.now()};function m(t,e,i){var n,s,a,r,o,h,c=0,u=!1,f=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var i=n,a=s;return n=s=void 0,c=e,r=t.apply(a,i)}function w(t){return c=t,o=setTimeout(y,e),u?p(t):r}function M(t){var i=t-h;return void 0===h||i>=e||i<0||f&&t-c>=a}function y(){var t=g();if(M(t))return x(t);o=setTimeout(y,function(t){var i=e-(t-h);return f?d(i,a-(t-c)):i}(t))}function x(t){return o=void 0,m&&n?p(t):(n=s=void 0,r)}function b(){var t=g(),i=M(t);if(n=arguments,s=this,h=t,i){if(void 0===o)return w(h);if(f)return o=setTimeout(y,e),p(h)}return void 0===o&&(o=setTimeout(y,e)),r}return e=$(e)||0,v(i)&&(u=!!i.leading,a=(f="maxWait"in i)?l($(i.maxWait)||0,e):a,m="trailing"in i?!!i.trailing:m),b.cancel=function(){void 0!==o&&clearTimeout(o),c=0,n=h=s=o=void 0},b.flush=function(){return void 0===o?r:x(g())},b}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function $(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var i=a.test(t);return i||r.test(t)?o(t.slice(2),i?2:8):s.test(t)?NaN:+t}var p=function(t,e,i){var n=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),m(t,e,{leading:n,maxWait:e,trailing:s})},w={exports:{}},M=w.exports=function(){var t=1e3,e=6e4,i=36e5,n="millisecond",s="second",a="minute",r="hour",o="day",h="week",c="month",u="quarter",f="year",l="date",d="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},p={s:$,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+$(n,2,"0")+":"+$(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,c),a=i-s<0,r=e.clone().add(n+(a?-1:1),c);return+(-(n+(i-s)/(a?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:h,d:o,D:l,h:r,m:a,s:s,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",M={};M[w]=v;var y=function(t){return t instanceof T},x=function t(e,i,n){var s;if(!e)return w;if("string"==typeof e){var a=e.toLowerCase();M[a]&&(s=a),i&&(M[a]=i,s=a);var r=e.split("-");if(!s&&r.length>1)return t(r[0])}else{var o=e.name;M[o]=e,s=o}return!n&&s&&(w=s),s||!n&&w},b=function(t,e){if(y(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new T(i)},C=p;C.l=x,C.i=y,C.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var T=function(){function v(t){this.$L=x(t.locale,null,!0),this.parse(t)}var $=v.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(C.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(g);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return C},$.isValid=function(){return!(this.$d.toString()===d)},$.isSame=function(t,e){var i=b(t);return this.startOf(e)<=i&&i<=this.endOf(e)},$.isAfter=function(t,e){return b(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<b(t)},$.$g=function(t,e,i){return C.u(t)?this[e]:this.set(i,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var i=this,n=!!C.u(e)||e,u=C.p(t),d=function(t,e){var s=C.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return n?s:s.endOf(o)},g=function(t,e){return C.w(i.toDate()[t].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,v=this.$M,$=this.$D,p="set"+(this.$u?"UTC":"");switch(u){case f:return n?d(1,0):d(31,11);case c:return n?d(1,v):d(0,v+1);case h:var w=this.$locale().weekStart||0,M=(m<w?m+7:m)-w;return d(n?$-M:$+(6-M),v);case o:case l:return g(p+"Hours",0);case r:return g(p+"Minutes",1);case a:return g(p+"Seconds",2);case s:return g(p+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var i,h=C.p(t),u="set"+(this.$u?"UTC":""),d=(i={},i[o]=u+"Date",i[l]=u+"Date",i[c]=u+"Month",i[f]=u+"FullYear",i[r]=u+"Hours",i[a]=u+"Minutes",i[s]=u+"Seconds",i[n]=u+"Milliseconds",i)[h],g=h===o?this.$D+(e-this.$W):e;if(h===c||h===f){var m=this.clone().set(l,1);m.$d[d](g),m.init(),this.$d=m.set(l,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](g);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[C.p(t)]()},$.add=function(n,u){var l,d=this;n=Number(n);var g=C.p(u),m=function(t){var e=b(d);return C.w(e.date(e.date()+Math.round(t*n)),d)};if(g===c)return this.set(c,this.$M+n);if(g===f)return this.set(f,this.$y+n);if(g===o)return m(1);if(g===h)return m(7);var v=(l={},l[a]=e,l[r]=i,l[s]=t,l)[g]||1,$=this.$d.getTime()+n*v;return C.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=C.z(this),a=this.$H,r=this.$m,o=this.$M,h=i.weekdays,c=i.months,u=function(t,i,s,a){return t&&(t[i]||t(e,n))||s[i].slice(0,a)},f=function(t){return C.s(a%12||12,t,"0")},l=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:C.s(o+1,2,"0"),MMM:u(i.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,h,2),ddd:u(i.weekdaysShort,this.$W,h,3),dddd:h[this.$W],H:String(a),HH:C.s(a,2,"0"),h:f(1),hh:f(2),a:l(a,r,!0),A:l(a,r,!1),m:String(r),mm:C.s(r,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:s};return n.replace(m,(function(t,e){return e||g[t]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,l,d){var g,m=C.p(l),v=b(n),$=(v.utcOffset()-this.utcOffset())*e,p=this-v,w=C.m(this,v);return w=(g={},g[f]=w/12,g[c]=w,g[u]=w/3,g[h]=(p-$)/6048e5,g[o]=(p-$)/864e5,g[r]=p/i,g[a]=p/e,g[s]=p/t,g)[m]||p,d?w:C.a(w)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=x(t,e,!0);return n&&(i.$L=n),i},$.clone=function(){return C.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},v}(),S=T.prototype;return b.prototype=S,[["$ms",n],["$s",s],["$m",a],["$H",r],["$W",o],["$M",c],["$y",f],["$D",l]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,T,b),t.$i=!0),b},b.locale=x,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=M[w],b.Ls=M,b.p={},b}();const y=(t,e="MM/DD HH:mm")=>M(1e3*t).format(e);function x({pointWidth:t,timePerPixel:e,timeSpacing:i,screenScaleCount:n,scaleSpacing:s,scaleHeight:a,startTime:r,drawLine:o,drawText:h}){if(1!==i)if(10!==i)if(30!==i)if(60!==i)if(120!==i)if(300!==i)if(7200!==i)if(86400!==i)if(604800!==i);else{const t=r-((t=Math.floor(Date.now()/1e3))=>{const e=1e3*t,i=M(e).year(),n=M(e).month(),s=M(e).date(),a=M(e).day(),r=new Date(i,n,s-a).getTime();return Math.floor(r/1e3)})(r),c=t/e,u=new Array(n).fill(!1),f=t=>{for(let e=t;e>t-7;e--)if(u[e])return!1;return!0};for(let e=0;e<n;e++){const n=e*s-c,l=Math.ceil(r+e*i-t);0===M(1e3*l).month()&&(M(1e3*l).date()>0||M(1e3*l).date()<=31)&&f(e)?(u[e]=!0,o(n,a.height5),h(n,a.height5+13,`${y(l,"YYYY/MM/DD")}`)):0!==M(1e3*l).day()||o(n,a.height1)}}else{const c=y(r,"H:m:s").split(":"),u=(3600*+c[0]+60*+c[1]+ +c[2])%86400,f=u/e;for(let e=0;e<n;e++){const n=e*s-f-t/2,c=Math.ceil(r+e*i-u);"1"!==y(c,"D")?c%86400!=57600||o(n,a.height1):(o(n,a.height5),h(n,a.height5+13,`${y(c,"YYYY/MM/DD")}`))}}else{const c=y(r,"H:m:s").split(":"),u=(3600*+c[0]+60*+c[1]+ +c[2])%7200,f=u/e;for(let e=0;e<n;e++){const n=e*s-f-t/2,c=Math.ceil(r+e*i-u);c%86400!=0?c%43200!=0?c%7200!=0||o(n,a.height1):o(n,a.height3):(o(n,a.height5),h(n,a.height5+13,`${y(c,"MM/DD HH:mm")}`))}}else{const c=y(r,"m:s").split(":"),u=(60*+c[0]+ +c[1])%300,f=u/e;for(let e=0;e<n;e++){const n=e*s-f-t/2,c=Math.ceil(r+e*i-u);c%3600!=0?c%1800!=0?c%300!=0||o(n,a.height1):o(n,a.height3):(o(n,a.height5),h(n,a.height5+13,`${y(c)}`))}}else{const c=y(r,"m:s").split(":"),u=(60*+c[0]+ +c[1])%120,f=u/e;for(let e=0;e<n;e++){const n=e*s-f-t/2,c=Math.ceil(r+e*i-u);c%1800!=0?c%600!=0?c%120!=0||o(n,a.height1):o(n,a.height3):(o(n,a.height5),h(n,a.height5+13,`${y(c)}`))}}else{const c=+y(r,"s")%60,u=c/e;for(let e=0;e<n;e++){const n=e*s-u-t/2,f=Math.ceil(r+e*i-c);f%3600!=0?f%300!=0?f%60!=0||o(n,a.height1):(o(n,a.height3),f%600==0&&h(n,a.height5+13,`${y(f,"HH:mm")}`)):(o(n,a.height5),h(n,a.height5+13,`${y(f)}`))}}else{const c=+y(r,"s")%30,u=c/e;for(let e=0;e<n;e++){const n=e*s-u-t/2,f=Math.ceil(r+e*i-c);f%300!=0?f%30!=0||o(n,a.height1):(o(n,a.height4),h(n,a.height5+13,`${y(f,"HH:mm")}`))}}else{const c=+y(r,"s")%10,u=c/e;for(let e=0;e<n;e++){const n=e*s-u-t/2,f=Math.ceil(r+e*i-c);f%60!=0?f%10!=0||o(n,a.height1):(o(n,a.height4),h(n,a.height5+13,`${y(f,"HH:mm")}`))}}else for(let e=0;e<n;e++){const n=e*s+t/2,c=Math.ceil(r+e*i);c%10!=0?c%5!=0?c%1!=0||o(n,a.height1):o(n,a.height3):(o(n,a.height5),h(n,a.height5+13,`${y(c,"HH:mm:ss")}`))}}var b,C,T,S,D;const O={fill:!1,bgColor:"rgba(0,0,0,0.5)",textColor:"#ffffff",scaleColor:"#ffffff",areaBgColor:"#ffffff55",pointColor:"#00aeec",pointWidth:3,scaleSpacing:7,fps:60,zoom:2,maxZoom:9,minZoom:1};class H{constructor(i,n){if(b.set(this,void 0),C.set(this,void 0),T.set(this,void 0),S.set(this,void 0),D.set(this,void 0),!i)throw new Error("canvas id is required!");this.$canvas=document.getElementById(i),this.canvasContext=this.$canvas.getContext("2d");const{fill:s,width:a,height:r,bgColor:o,textColor:h,scaleColor:c,areaBgColor:u,pointColor:f,pointWidth:l,scaleSpacing:d,fps:g,zoom:m,maxZoom:v,minZoom:$}=Object.assign(Object.assign({},O),n);if(m<$||m>v||m%1!=0)throw new Error(`zoom must be minZoom ~ maxZoom(${$} ~1 ${v}), and must be an integer`);if(v<1||v>9||v%1!=0)throw new Error("maxZoom must be 1 ~ 9, and must be an integer");if($<1||$>9||$%1!=0)throw new Error("minZoom must be 1 ~ 9, and must be an integer");if(v<$)throw new Error("maxZoom must be greater than minZoom");if(s){const t=this.$canvas.parentElement;this.$canvas.width=t.clientWidth,this.$canvas.height=t.clientHeight;new ResizeObserver(p(this._onParentResize.bind(this),200)).observe(t)}else a&&(this.$canvas.width=a),r&&(this.$canvas.height=r);var w;e(this,D,!1,"f"),e(this,b,{all:w=w||new Map,on:function(t,e){var i=w.get(t);i?i.push(e):w.set(t,[e])},off:function(t,e){var i=w.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):w.set(t,[]))},emit:function(t,e){var i=w.get(t);i&&i.slice().map((function(t){t(e)})),(i=w.get("*"))&&i.slice().map((function(i){i(t,e)}))}},"f"),this.currentTime=0;const M=[1,10,30,60,120,300,7200,86400,604800];e(this,C,[],"f");for(let e=$-1;e<v;e++)t(this,C,"f").push(M[e]);e(this,T,M[m-1],"f"),this.scaleSpacing=d,e(this,S,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8,height1:this.$canvas.height/10},"f"),this.bgColor=o,this.pointWidth=l,this.pointColor=f,this.textColor=h,this.scaleColor=c,this.areaBgColor=u,this.fps=g}draw({currentTime:e,areas:i,_privateFlag:n}={}){if(t(this,D,"f")&&!n)return;this.currentTime=e||Math.floor(Date.now()/1e3),this.areas=i||[];const s=Math.ceil(this.$canvas.width/this.scaleSpacing),a=s*t(this,T,"f"),r=this.currentTime-a/2,o=this.currentTime+a/2,h=this.$canvas.width/2,c=a/this.$canvas.width;this.clear(),this.drawArea(0,0,this.$canvas.width,this.$canvas.height,this.bgColor),this.areas.forEach((t=>{const e=t.startTime<r?0:Math.floor((t.startTime-r)/c),i=t.endTime>o?this.$canvas.width:Math.floor((t.endTime-r)/c);this.drawArea(e,0,i,this.$canvas.height,t.bgColor||this.areaBgColor)})),x.bind(this)({pointWidth:this.pointWidth,timePerPixel:c,scaleHeight:t(this,S,"f"),scaleSpacing:this.scaleSpacing,timeSpacing:t(this,T,"f"),screenScaleCount:s,startTime:r,drawLine:this.drawLine.bind(this),drawText:this.drawText.bind(this)}),this.drawTimelineScale(t(this,T,"f")),this.drawLine(h-this.pointWidth/2,this.$canvas.height,this.pointWidth,this.pointColor),this.drawArea(h-54,4,h+54,18,this.pointColor),this.drawText(h,6,`${y(this.currentTime,"YYYY/MM/DD HH:mm:ss")}`,this.textColor,"center","top"),this.$canvas.onwheel=this._onZoom.bind(this),this.$canvas.onmousedown=this._onDrag.bind(this)}_onDrag({clientX:i}){e(this,D,!0,"f");let n=0;document.onmousemove=p((e=>{const s=e.clientX-i,a=this.currentTime-t(this,T,"f")/this.scaleSpacing*(s-n);n=s,this.draw({currentTime:Math.round(a),areas:this.areas,_privateFlag:!0})}),1===t(this,T,"f")?100:1e3/this.fps),document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null,e(this,D,!1,"f"),this.emit("timeUpdate",this.currentTime)}}_onZoom(i){i.preventDefault();const n=t(this,C,"f").findIndex((e=>e===t(this,T,"f")));i.deltaY<0&&n>0?(e(this,T,t(this,C,"f")[n-1],"f"),this.draw({currentTime:this.currentTime,areas:this.areas,_privateFlag:!0})):i.deltaY>0&&n<t(this,C,"f").length-1&&(e(this,T,t(this,C,"f")[n+1],"f"),this.draw({currentTime:this.currentTime,areas:this.areas,_privateFlag:!0}))}_onParentResize(){const t=this.$canvas.parentNode;t&&(this.$canvas.width=t.clientWidth,this.$canvas.height=t.clientHeight,e(this,S,{height6:this.$canvas.height/2,height5:this.$canvas.height/3,height4:this.$canvas.height/4,height3:this.$canvas.height/5,height2:this.$canvas.height/8,height1:this.$canvas.height/10},"f"),this.draw({currentTime:this.currentTime,areas:this.areas}))}clear(){this.canvasContext&&this.canvasContext.clearRect(0,0,this.$canvas.width,this.$canvas.height),this.$canvas&&(this.$canvas.onwheel=null,this.$canvas.onmousedown=null)}drawTimelineScale(t){let e="";switch(t){case 1:e="1s";break;case 10:e="10s";break;case 30:e="30s";break;case 60:e="1min";break;case 120:e="2min";break;case 300:e="5min";break;case 7200:e="2hour";break;case 86400:e="1day";break;case 604800:e="1week"}this.drawText(this.scaleSpacing+12,9,`${e}`,this.textColor,"left","middle"),this.canvasContext.beginPath(),this.canvasContext.moveTo(5,6),this.canvasContext.lineTo(5,10),this.canvasContext.lineTo(this.scaleSpacing+7,10),this.canvasContext.lineTo(this.scaleSpacing+7,6),this.canvasContext.strokeStyle=this.scaleColor,this.canvasContext.lineWidth=1.5,this.canvasContext.stroke()}drawLine(t,e,i=1,n=this.scaleColor){this.canvasContext.beginPath(),this.canvasContext.moveTo(t,this.$canvas.height),this.canvasContext.lineTo(t,this.$canvas.height-e),this.canvasContext.closePath(),this.canvasContext.strokeStyle=n,this.canvasContext.lineWidth=i,this.canvasContext.stroke()}drawText(t,e,i,n=this.textColor,s="center",a="alphabetic"){this.canvasContext.beginPath(),this.canvasContext.font="11px Arial",this.canvasContext.fillStyle=n,this.canvasContext.textAlign=s,this.canvasContext.textBaseline=a,this.canvasContext.fillText(i,t,e)}drawArea(t,e,i,n,s){this.canvasContext.beginPath(),this.canvasContext.rect(t,e,i-t,n-e),this.canvasContext.fillStyle=s,this.canvasContext.fill()}on(e,i){t(this,b,"f").on(e,i)}off(e,i){t(this,b,"f").off(e,i)}emit(...e){t(this,b,"f").emit(...e)}}b=new WeakMap,C=new WeakMap,T=new WeakMap,S=new WeakMap,D=new WeakMap;export{H as default};
//# sourceMappingURL=timeline.esm.js.map