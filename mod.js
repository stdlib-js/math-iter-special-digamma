// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;function d(r,n){return null!=r&&w.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var n,t,e;if(null==r)return s.call(r);t=r[m],n=d(r,m);try{r[m]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[m]=t:delete r[m],e}:function(r){return s.call(r)},g=Boolean.prototype.toString;var A=b();function _(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function h(r){return v(r)||_(r)}function O(){return new Function("return this;")()}l(h,"isPrimitive",v),l(h,"isObject",_);var N="object"==typeof self?self:null,U="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(N)return N;if(U)return U;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=V.exec(e.toString()))return n[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!x(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=b();function R(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function X(r){return k(r)||R(r)}l(X,"isPrimitive",k),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!d(r,"constructor")&&d(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&d(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!d(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(d(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),q&&L(r[q])&&l(o,q,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:k(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[q](),n,e)}}function rr(r){return r!=r}var nr=Math.floor,tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var or,ur="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ir=or,fr="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var cr,lr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar([1,3.14,-3.14,NaN]),t=n,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var yr=cr,vr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var br,sr="function"==typeof Uint8Array?Uint8Array:void 0;br=function(){var r,n,t;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,256,257]),t=n,r=(vr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var wr=br,dr="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var jr,gr="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var Ar,_r={uint16:jr,uint8:wr};(Ar=new _r.uint16(1))[0]=4660;var hr=52===new _r.uint8(Ar.buffer)[0],Or=!0===hr?1:0,Nr=new yr(1),Ur=new ir(Nr.buffer);function Sr(r){return Nr[0]=r,Ur[Or]}var Er=!0===hr?0:1,Fr=new yr(1),Ir=new ir(Fr.buffer);function Pr(r,n){return Fr[0]=r,Ir[Er]=n>>>0,Fr[0]}function Tr(r,n,t){var e,o,u,i,f,a,c,l,y;return(o=2147483647&(e=Sr(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(y=r*r)*y),c=y*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=n+y*((f=y*r)*(i+c)+n),l=r+(i+=.3333333333333341*f),o>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-i))):1===t?l:(Pr(y=l,0),c=i-(y-r),Pr(a=u=-1/l,0),a+u*((f=1+a*y)+a*c))}var Vr,xr,Gr=!0===hr?0:1,Hr=new yr(1),Br=new ir(Hr.buffer);!0===hr?(Vr=1,xr=0):(Vr=0,xr=1);var Lr={HIGH:Vr,LOW:xr},Mr=new yr(1),kr=new ir(Mr.buffer),Wr=Lr.HIGH,Cr=Lr.LOW;function Yr(r,n){return kr[Wr]=r,kr[Cr]=n,Mr[0]}var Rr=Number.POSITIVE_INFINITY,Xr=W.NEGATIVE_INFINITY;function qr(r){return r===Rr||r===Xr}var zr,Dr;!0===hr?(zr=1,Dr=0):(zr=0,Dr=1);var Jr={HIGH:zr,LOW:Dr},Kr=new yr(1),Qr=new ir(Kr.buffer),Zr=Jr.HIGH,$r=Jr.LOW;function rn(r,n,t,e){return Kr[0]=r,n[e]=Qr[Zr],n[e+t]=Qr[$r],n}function nn(r){return rn(r,[0,0],1,0)}l(nn,"assign",rn);var tn=[0,0];function en(r,n,t,e){return rr(r)||qr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return en(r,[0,0],1,0)}),"assign",en);var on=[0,0],un=[0,0];function fn(r,n){var t,e,o,u,i,f;return 0===n||0===r||rr(r)||qr(r)?r:(en(r,on,1,0),n+=on[1],n+=function(r){var n=Sr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=on[0]),n<-1074?(o=0,u=r,nn.assign(o,tn,1,0),i=tn[0],i&=2147483647,f=Sr(u),Yr(i|=f&=2147483648,tn[1])):n>1023?r<0?Xr:Rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nn.assign(r,un,1,0),t=un[0],t&=2148532223,e*Yr(t|=n+1023<<20,un[1])))}function an(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var cn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ln=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yn=5.960464477539063e-8,vn=an(20),pn=an(20),bn=an(20),sn=an(20);function wn(r,n,t,e,o,u,i,f,a){var c,l,y,v,p,b,s,w,d;for(v=u,d=e[t],w=t,p=0;w>0;p++)l=yn*d|0,sn[p]=d-16777216*l|0,d=e[w-1]+l,w-=1;if(d=fn(d,o),d-=8*nr(.125*d),d-=s=0|d,y=0,o>0?(s+=p=sn[t-1]>>24-o,sn[t-1]-=p<<24-o,y=sn[t-1]>>23-o):0===o?y=sn[t-1]>>23:d>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)w=sn[p],0===c?0!==w&&(c=1,sn[p]=16777216-w):sn[p]=16777215-w;if(o>0)switch(o){case 1:sn[t-1]&=8388607;break;case 2:sn[t-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=fn(1,o)))}if(0===d){for(w=0,p=t-1;p>=u;p--)w|=sn[p];if(0===w){for(b=1;0===sn[u-b];b++);for(p=t+1;p<=t+b;p++){for(a[f+p]=cn[i+p],l=0,w=0;w<=f;w++)l+=r[w]*a[f+(p-w)];e[p]=l}return wn(r,n,t+=b,e,o,u,i,f,a)}}if(0===d)for(t-=1,o-=24;0===sn[t];)t-=1,o-=24;else(d=fn(d,-o))>=16777216?(l=yn*d|0,sn[t]=d-16777216*l|0,o+=24,sn[t+=1]=l):sn[t]=0|d;for(l=fn(1,o),p=t;p>=0;p--)e[p]=l*sn[p],l*=yn;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=ln[b]*e[p+b];bn[t-p]=l}for(l=0,p=t;p>=0;p--)l+=bn[p];for(n[0]=0===y?l:-l,l=bn[0]-l,p=1;p<=t;p++)l+=bn[p];return n[1]=0===y?l:-l,7&s}function dn(r,n,t,e){var o,u,i,f,a,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)vn[a]=c<0?0:cn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*vn[i+(a-c)];pn[a]=o}return 4,wn(r,n,4,pn,f,4,u,i,vn)}var mn=Math.round;function jn(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=mn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(Sr(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(Sr(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var gn=1.5707963267341256,An=6077100506506192e-26,_n=2*An,hn=4*An,On=[0,0,0],Nn=[0,0];function Un(r,n){var t,e,o,u,i,f,a;if((o=2147483647&Sr(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?jn(r,o,n):o<=1073928572?r>0?(a=r-gn,n[0]=a-An,n[1]=a-n[0]-An,1):(a=r+gn,n[0]=a+An,n[1]=a-n[0]+An,-1):r>0?(a=r-2*gn,n[0]=a-_n,n[1]=a-n[0]-_n,2):(a=r+2*gn,n[0]=a+_n,n[1]=a-n[0]+_n,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?jn(r,o,n):r>0?(a=r-3*gn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*gn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===o?jn(r,o,n):r>0?(a=r-4*gn,n[0]=a-hn,n[1]=a-n[0]-hn,4):(a=r+4*gn,n[0]=a+hn,n[1]=a-n[0]+hn,-4);if(o<1094263291)return jn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Hr[0]=r,Br[Gr]}(r),a=Yr(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)On[i]=0|a,a=16777216*(a-On[i]);for(On[2]=a,u=3;0===On[u-1];)u-=1;return f=dn(On,Nn,e,u),r<0?(n[0]=-Nn[0],n[1]=-Nn[1],-f):(n[0]=Nn[0],n[1]=Nn[1],f)}var Sn=[0,0];var En=3.141592653589793,Fn=!0===hr?1:0,In=new yr(1),Pn=new ir(In.buffer);var Tn=.6931471803691238,Vn=1.9082149292705877e-10;function xn(r){var n,t,e,o,u,i,f,a,c,l,y,v;return 0===r?Xr:rr(r)||r<0?NaN:(u=0,(t=Sr(r))<1048576&&(u-=54,t=Sr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=function(r,n){return In[0]=r,Pn[Fn]=n>>>0,In[0]}(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===u?0:u*Tn+u*Vn:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Tn-(i-u*Vn-f)):(a=t-398458|0,c=440401-t|0,o=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Tn-(n-(l*(n+i)+u*Vn)-f)):0===u?f-l*(f-i):u*Tn-(l*(f-i)-u*Vn-f))))}function Gn(r){var n,t;if(rr(r)||0===r)return NaN;if(r<=-1){if((n=(r=1-r)-nr(r))>.5&&(n-=1),0===n)return NaN;t=En/function(r){var n,t;return n=Sr(r),(n&=2147483647)<=1072243195?n<1044381696?r:Tr(r,0,1):n>=2146435072?NaN:(t=Un(r,Sn),Tr(Sn[0],Sn[1],1-((1&t)<<1)))}(En*n)}else t=0;if(r>=10)return t+=function(r){var n;return xn(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(r),t;for(;r>2;)t+=1/(r-=1);for(;r<1;)t-=1/r,r+=1;return t+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(r),t}function Hn(r){return $(r,Gn)}export{Hn as default};
//# sourceMappingURL=mod.js.map
