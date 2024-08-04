// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDigamma=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function N(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function U(r){var t,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[N(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=F,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var L=T;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},D=Boolean,q=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString;var br=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Or=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&yr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(t))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Sr(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:vr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&$(o,mr,(function(){return xr(r[mr](),t,n)})),o}function Nr(r){return r!=r}var Ur=Math.floor,Tr="function"==typeof Uint32Array;var Fr="function"==typeof Uint32Array?Uint32Array:null;var Ir,kr="function"==typeof Uint32Array?Uint32Array:void 0;Ir=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Tr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Vr=Ir,Pr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Lr,$r="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),e=t,r=(Pr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Hr="function"==typeof Uint8Array;var Wr="function"==typeof Uint8Array?Uint8Array:null;var Br,Rr="function"==typeof Uint8Array?Uint8Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Wr)return!1;try{t=new Wr(t=[1,3.14,-3.14,256,257]),e=t,r=(Hr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr=Br,Zr="function"==typeof Uint16Array;var Xr="function"==typeof Uint16Array?Uint16Array:null;var Yr,zr="function"==typeof Uint16Array?Uint16Array:void 0;Yr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Zr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var Dr,qr={uint16:Yr,uint8:Mr};(Dr=new qr.uint16(1))[0]=4660;var Jr=52===new qr.uint8(Dr.buffer)[0],Kr=!0===Jr?1:0,Qr=new Cr(1),rt=new Vr(Qr.buffer);function tt(r){return Qr[0]=r,rt[Kr]}var et=!0===Jr?0:1,nt=new Cr(1),ot=new Vr(nt.buffer);function it(r,t){return nt[0]=r,ot[et]=t>>>0,nt[0]}var at=.7853981633974483,ut=3061616997868383e-32,ct=.3333333333333341,ft=2147483647;function lt(r,t,e){var n,o,i,a,u,c,f,l,s;return(o=(n=tt(r))&ft|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(s=at-r)+(l=ut-t),t=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),f=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=t+s*((u=s*r)*(a+f)+t),l=r+(a+=ct*u),o>=1072010280?(1-(n>>30&2))*((f=e)-2*(r-(l*l/(l+f)-a))):1===e?l:(f=a-((s=it(l,0))-r),(c=it(i=-1/l,0))+i*((u=1+c*s)+c*f))}var st,pt,yt=2147483647,vt=2146435072,gt=1048575,dt=!0===Jr?0:1,bt=new Cr(1),ht=new Vr(bt.buffer);!0===Jr?(st=1,pt=0):(st=0,pt=1);var wt={HIGH:st,LOW:pt},mt=new Cr(1),jt=new Vr(mt.buffer),At=wt.HIGH,_t=wt.LOW;function Et(r,t){return jt[At]=r,jt[_t]=t,mt[0]}var Ot=Number.POSITIVE_INFINITY,St=gr.NEGATIVE_INFINITY,xt=1023,Nt=1023,Ut=-1023,Tt=-1074;function Ft(r){return r===Ot||r===St}var It,kt,Vt=2147483648;!0===Jr?(It=1,kt=0):(It=0,kt=1);var Pt={HIGH:It,LOW:kt},Gt=new Cr(1),Lt=new Vr(Gt.buffer),$t=Pt.HIGH,Ct=Pt.LOW;function Ht(r,t,e,n){return Gt[0]=r,t[n]=Lt[$t],t[n+e]=Lt[Ct],t}function Wt(r){return Ht(r,[0,0],1,0)}$(Wt,"assign",Ht);var Bt=[0,0];var Rt=22250738585072014e-324;var Mt=4503599627370496;function Zt(r,t,e,n){return Nr(r)||Ft(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Rt?(t[n]=r*Mt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Zt(r,[0,0],1,0)}),"assign",Zt);var Xt=2220446049250313e-31,Yt=2148532223,zt=[0,0],Dt=[0,0];function qt(r,t){var e,n,o,i,a,u;return 0===t||0===r||Nr(r)||Ft(r)?r:(Zt(r,zt,1,0),r=zt[0],t+=zt[1],t+=function(r){var t=tt(r);return(t=(t&vt)>>>20)-xt|0}(r),t<Tt?(o=0,i=r,Wt.assign(o,Bt,1,0),a=Bt[0],a&=yt,u=tt(i),Et(a|=u&=Vt,Bt[1])):t>Nt?r<0?St:Ot:(t<=Ut?(t+=52,n=Xt):n=1,Wt.assign(r,Dt,1,0),e=Dt[0],e&=Yt,n*Et(e|=t+xt<<20,Dt[1])))}function Jt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Kt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],re=16777216,te=5.960464477539063e-8,ee=Jt(20),ne=Jt(20),oe=Jt(20),ie=Jt(20);function ae(r,t,e,n,o,i,a,u,c){var f,l,s,p,y,v,g,d,b;for(p=i,b=n[e],d=e,y=0;d>0;y++)l=te*b|0,ie[y]=b-re*l|0,b=n[d-1]+l,d-=1;if(b=qt(b,o),b-=8*Ur(.125*b),b-=g=0|b,s=0,o>0?(g+=y=ie[e-1]>>24-o,ie[e-1]-=y<<24-o,s=ie[e-1]>>23-o):0===o?s=ie[e-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,f=0,y=0;y<e;y++)d=ie[y],0===f?0!==d&&(f=1,ie[y]=16777216-d):ie[y]=16777215-d;if(o>0)switch(o){case 1:ie[e-1]&=8388607;break;case 2:ie[e-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=qt(1,o)))}if(0===b){for(d=0,y=e-1;y>=i;y--)d|=ie[y];if(0===d){for(v=1;0===ie[i-v];v++);for(y=e+1;y<=e+v;y++){for(c[u+y]=Kt[a+y],l=0,d=0;d<=u;d++)l+=r[d]*c[u+(y-d)];n[y]=l}return ae(r,t,e+=v,n,o,i,a,u,c)}}if(0===b)for(e-=1,o-=24;0===ie[e];)e-=1,o-=24;else(b=qt(b,-o))>=re?(l=te*b|0,ie[e]=b-re*l|0,o+=24,ie[e+=1]=l):ie[e]=0|b;for(l=qt(1,o),y=e;y>=0;y--)n[y]=l*ie[y],l*=te;for(y=e;y>=0;y--){for(l=0,v=0;v<=p&&v<=e-y;v++)l+=Qt[v]*n[y+v];oe[e-y]=l}for(l=0,y=e;y>=0;y--)l+=oe[y];for(t[0]=0===s?l:-l,l=oe[0]-l,y=1;y<=e;y++)l+=oe[y];return t[1]=0===s?l:-l,7&g}function ue(r,t,e,n){var o,i,a,u,c,f,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)ee[c]=f<0?0:Kt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*ee[a+(c-f)];ne[c]=o}return 4,ae(r,t,4,ne,u,4,i,a,ee)}var ce=Math.round,fe=.6366197723675814,le=1.5707963267341256,se=6077100506506192e-26,pe=6077100506303966e-26,ye=20222662487959506e-37,ve=20222662487111665e-37,ge=84784276603689e-45,de=2047;function be(r,t,e){var n,o,i,a,u;return i=r-(n=ce(r*fe))*le,a=n*se,u=t>>20|0,e[0]=i-a,u-(tt(e[0])>>20&de)>16&&(a=n*ye-((o=i)-(i=o-(a=n*pe))-a),e[0]=i-a,u-(tt(e[0])>>20&de)>49&&(a=n*ge-((o=i)-(i=o-(a=n*ve))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var he=0,we=16777216,me=1.5707963267341256,je=6077100506506192e-26,Ae=2*je,_e=3*je,Ee=4*je,Oe=598523,Se=1072243195,xe=1073928572,Ne=1074752122,Ue=1074977148,Te=1075183036,Fe=1075388923,Ie=1075594811,ke=1094263291,Ve=[0,0,0],Pe=[0,0];function Ge(r,t){var e,n,o,i,a,u,c;if((o=tt(r)&yt|0)<=Se)return t[0]=r,t[1]=0,0;if(o<=Ne)return(o&gt)===Oe?be(r,o,t):o<=xe?r>0?(c=r-me,t[0]=c-je,t[1]=c-t[0]-je,1):(c=r+me,t[0]=c+je,t[1]=c-t[0]+je,-1):r>0?(c=r-2*me,t[0]=c-Ae,t[1]=c-t[0]-Ae,2):(c=r+2*me,t[0]=c+Ae,t[1]=c-t[0]+Ae,-2);if(o<=Ie)return o<=Te?o===Ue?be(r,o,t):r>0?(c=r-3*me,t[0]=c-_e,t[1]=c-t[0]-_e,3):(c=r+3*me,t[0]=c+_e,t[1]=c-t[0]+_e,-3):o===Fe?be(r,o,t):r>0?(c=r-4*me,t[0]=c-Ee,t[1]=c-t[0]-Ee,4):(c=r+4*me,t[0]=c+Ee,t[1]=c-t[0]+Ee,-4);if(o<ke)return be(r,o,t);if(o>=vt)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return bt[0]=r,ht[dt]}(r),c=Et(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Ve[a]=0|c,c=(c-Ve[a])*we;for(Ve[2]=c,i=3;Ve[i-1]===he;)i-=1;return u=ue(Ve,Pe,n,i),r<0?(t[0]=-Pe[0],t[1]=-Pe[1],-u):(t[0]=Pe[0],t[1]=Pe[1],u)}var Le=[0,0],$e=2147483647,Ce=1072243195,He=2146435072,We=1044381696;var Be=3.141592653589793,Re=!0===Jr?1:0,Me=new Cr(1),Ze=new Vr(Me.buffer);var Xe=.6931471803691238,Ye=1.9082149292705877e-10,ze=0x40000000000000,De=.3333333333333333,qe=1048575,Je=2146435072,Ke=1048576,Qe=1072693248;function rn(r){var t,e,n,o,i,a,u,c,f,l,s,p;return 0===r?St:Nr(r)||r<0?NaN:(i=0,(e=tt(r))<Ke&&(i-=54,e=tt(r*=ze)),e>=Je?r+r:(i+=(e>>20)-xt|0,i+=(c=(e&=qe)+614244&1048576|0)>>20|0,u=(r=function(r,t){return Me[0]=r,Ze[Re]=t>>>0,Me[0]}(r,e|c^Qe))-1,(qe&2+e)<3?0===u?0===i?0:i*Xe+i*Ye:(a=u*u*(.5-De*u),0===i?u-a:i*Xe-(a-i*Ye-u)):(c=e-398458|0,f=440401-e|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*Xe-(t-(l*(t+a)+i*Ye)-u)):0===i?u-l*(u-a):i*Xe-(l*(u-a)-i*Ye-u))))}var tn=1.4616321446374059,en=3.309564688275257e-10,nn=9.016312093258695e-20,on=.9955816268920898;var an=10;function un(r){var t,e;if(Nr(r)||0===r)return NaN;if(r<=-1){if((t=(r=1-r)-Ur(r))>.5&&(t-=1),0===t)return NaN;e=Be/function(r){var t,e;return t=tt(r),(t&=$e)<=Ce?t<We?r:lt(r,0,1):t>=He?NaN:(e=Ge(r,Le),lt(Le[0],Le[1],1-((1&e)<<1)))}(Be*t)}else e=0;if(r>=an)return e+=function(r){var t;return rn(r-=1)+1/(2*r)-(t=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(t)}(r),e;for(;r>2;)e+=1/(r-=1);for(;r<1;)e-=1/r,r+=1;return e+=function(r){var t,e;return t=r-tn,t-=en,t-=nn,e=function(r){var t,e;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(t=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),e=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(t=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),e=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),t/e)}(r-1),t*on+t*e}(r),e}return function(r){return xr(r,un)}}));
//# sourceMappingURL=index.js.map