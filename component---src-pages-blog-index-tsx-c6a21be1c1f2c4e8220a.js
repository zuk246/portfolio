(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[643],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",l="quarter",f="year",d="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:o,D:d,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=p;var v="$isDayjsObject",D=function(t){return t instanceof O||!(!t||!t[v])},M=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();b[s]&&(i=s),n&&(b[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,i=o}return!r&&i&&(y=i),i||!r&&y},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},x=w;x.l=M,x.i=D,x.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!x.u(e)||e,l=x.p(t),h=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,p=this.$M,g=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case f:return r?h(1,0):h(31,11);case c:return r?h(1,p):h(0,p+1);case u:var y=this.$locale().weekStart||0,b=($<y?$+7:$)-y;return h(r?g-b:g+(6-b),p);case o:case d:return m(w+"Hours",0);case a:return m(w+"Minutes",1);case s:return m(w+"Seconds",2);case i:return m(w+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=x.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[o]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===f){var $=this.clone().set(d,1);$.$d[h](m),$.init(),this.$d=$.set(d,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[x.p(t)]()},g.add=function(r,l){var d,h=this;r=Number(r);var m=x.p(l),$=function(t){var e=S(h);return x.w(e.date(e.date()+Math.round(t*r)),h)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===o)return $(1);if(m===u)return $(7);var p=(d={},d[s]=e,d[a]=n,d[i]=t,d)[m]||1,g=this.$d.getTime()+r*p;return x.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return x.s(s%12||12,t,"0")},m=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return o+1;case"MM":return x.s(o+1,2,"0");case"MMM":return f(n.monthsShort,o,c,3);case"MMMM":return f(c,o);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,u,2);case"ddd":return f(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,d,h){var m,$=this,p=x.p(d),g=S(r),w=(g.utcOffset()-this.utcOffset())*e,y=this-g,b=function(){return x.m($,g)};switch(p){case f:m=b()/12;break;case c:m=b();break;case l:m=b()/3;break;case u:m=(y-w)/6048e5;break;case o:m=(y-w)/864e5;break;case a:m=y/n;break;case s:m=y/e;break;case i:m=y/t;break;default:m=y}return h?m:x.a(m)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return b[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),k=O.prototype;return S.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",f],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=M,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=b[y],S.Ls=b,S.p={},S}()},8133:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return d},default:function(){return f}});var r=n(7294),i=n(6298),s=n(7607),a=n(5896),o=n(1883),u=n(7484),c=n.n(u),l=n(8032);function f(){const t=(0,o.useStaticQuery)("4051212714"),e=t.allFeedZennBlog.edges.concat(t.allFeedNoteBlog.edges).sort(((t,e)=>t.node.isoDate>e.node.isoDate?-1:1));return r.createElement(i.Z,null,r.createElement("div",{className:"max-w-3xl mx-auto px-4 py-24"},r.createElement(a.E.h1,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeOut",duration:1},className:"text-6xl font-semibold text-black/80"},"Blog"),r.createElement(a.E.p,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeOut",duration:1},className:"text-xl font-semibold text-black/80"},"最近の投稿"),r.createElement("div",{className:"grid md:grid-cols-2 grid-cols-1 mt-8 gap-y-8"},e.map(((t,e)=>r.createElement(a.E.a,{href:t.node.guid,target:"_blank",rel:"noopener noreferrer",className:"block",key:e,initial:{y:25,opacity:0},animate:{y:0,opacity:1},transition:{ease:"easeOut",duration:.3,delay:.1*e}},r.createElement("div",{className:"w-72 h-38 rounded-lg shadow-lg overflow-hidden mx-auto"},t.node.enclosure?r.createElement("img",{src:t.node.enclosure.url,alt:"",className:"w-full h-38 object-cover",width:288,height:152}):r.createElement(l.S,{src:"../../assets/img/white-bg.jpg",alt:"",className:"w-full h-38 object-cover",width:288,height:152,__imageData:n(8224)})),r.createElement("div",{className:"mt-4"},r.createElement("p",{className:"text-lg font-semibold text-center line-clamp-1 w-full"},t.node.title),r.createElement("p",{className:"text-sm text-gray-500 text-center"},c()(new Date(t.node.isoDate)).format("YYYY / MM / DD")))))))))}function d(){return r.createElement(s.Z,{title:"BLOG",description:"iizuka0000のブログ",keywords:""})}},8224:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8d8b8","images":{"fallback":{"src":"/portfolio/static/210451e7624d007810c40e025b888c9e/80c01/white-bg.jpg","srcSet":"/portfolio/static/210451e7624d007810c40e025b888c9e/74a77/white-bg.jpg 72w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/db312/white-bg.jpg 144w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/80c01/white-bg.jpg 288w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/26f46/white-bg.jpg 576w","sizes":"(min-width: 288px) 288px, 100vw"},"sources":[{"srcSet":"/portfolio/static/210451e7624d007810c40e025b888c9e/be833/white-bg.webp 72w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/69742/white-bg.webp 144w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/f0f25/white-bg.webp 288w,\\n/portfolio/static/210451e7624d007810c40e025b888c9e/e890f/white-bg.webp 576w","type":"image/webp","sizes":"(min-width: 288px) 288px, 100vw"}]},"width":288,"height":152}')}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-c6a21be1c1f2c4e8220a.js.map