// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDigamma=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function N(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=N(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(a)?String(e.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function F(r){return"string"==typeof r}function I(r){var t,n,e;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=T(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&($.call(r,t)||C.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),a&&L&&L.call(r,t,n.set),r};var H=k;function W(r,t,n){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"";var J=Z()?function(r){var t,n,e;if(null==r)return X.call(r);n=r[q],t=z(r,q);try{r[q]=void 0}catch(t){return X.call(r)}return e=X.call(r),t?r[q]=n:delete r[q],e}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return R(r)||tr(r)}function er(){return new Function("return this;")()}W(nr,"isPrimitive",R),W(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!R(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;W(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function gr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pr.exec(e.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}W(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vr));var dr="function"==typeof B||"object"==typeof lr||"function"==typeof fr?function(r){return gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?gr(r).toLowerCase():t};function br(r){return"function"===dr(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=Z();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}W(Er,"isPrimitive",wr),W(Er,"isObject",_r);var Or="function"==typeof D&&"symbol"==typeof D("foo")&&z(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Nr,Sr=Object,xr=Object.getPrototypeOf;Nr=br(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Nr;var Tr=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=Sr(r),Ur(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,n){var e,o,i,a;if(!hr(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(i=Ir(e,n)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&br(r[Or])&&W(o,Or,f),o;function u(){var n;return a?{done:!0}:(n=r.next()).done?(a=!0,n):{value:wr(n.value)?t(n.value):e.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Or](),t,e)}}function Vr(r){return r!=r}var Pr=Math.floor,Gr="function"==typeof Uint32Array;var Lr="function"==typeof Uint32Array?Uint32Array:null;var $r,Cr="function"==typeof Uint32Array?Uint32Array:void 0;$r=function(){var r,t,n;if("function"!=typeof Lr)return!1;try{t=new Lr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Gr&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Hr=$r,Wr="function"==typeof Float64Array;var Br="function"==typeof Float64Array?Float64Array:null;var Rr,Mr="function"==typeof Float64Array?Float64Array:void 0;Rr=function(){var r,t,n;if("function"!=typeof Br)return!1;try{t=new Br([1,3.14,-3.14,NaN]),n=t,r=(Wr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Zr=Rr,Xr="function"==typeof Uint8Array;var Yr="function"==typeof Uint8Array?Uint8Array:null;var zr,Dr="function"==typeof Uint8Array?Uint8Array:void 0;zr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr(t=[1,3.14,-3.14,256,257]),n=t,r=(Xr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var qr=zr,Jr="function"==typeof Uint16Array;var Kr="function"==typeof Uint16Array?Uint16Array:null;var Qr,rt="function"==typeof Uint16Array?Uint16Array:void 0;Qr=function(){var r,t,n;if("function"!=typeof Kr)return!1;try{t=new Kr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Jr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var tt,nt={uint16:Qr,uint8:qr};(tt=new nt.uint16(1))[0]=4660;var et=52===new nt.uint8(tt.buffer)[0],ot=!0===et?1:0,it=new Zr(1),at=new Hr(it.buffer);function ut(r){return it[0]=r,at[ot]}var ct=!0===et?0:1,ft=new Zr(1),lt=new Hr(ft.buffer);function st(r,t){return ft[0]=r,lt[ct]=t>>>0,ft[0]}function pt(r,t,n){var e,o,i,a,u,c,f,l,s;return(o=2147483647&(e=ut(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(s=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),f=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=t+s*((u=s*r)*(a+f)+t),l=r+(a+=.3333333333333341*u),o>=1072010280?(1-(e>>30&2))*((f=n)-2*(r-(l*l/(l+f)-a))):1===n?l:(f=a-((s=st(l,0))-r),(c=st(i=-1/l,0))+i*((u=1+c*s)+c*f))}var yt,vt,gt=2147483647,dt=2146435072,bt=!0===et?0:1,ht=new Zr(1),wt=new Hr(ht.buffer);!0===et?(yt=1,vt=0):(yt=0,vt=1);var mt={HIGH:yt,LOW:vt},jt=new Zr(1),At=new Hr(jt.buffer),_t=mt.HIGH,Et=mt.LOW;function Ot(r,t){return At[_t]=r,At[Et]=t,jt[0]}var Nt=Number.POSITIVE_INFINITY,St=mr.NEGATIVE_INFINITY,xt=1023;function Ut(r){return r===Nt||r===St}var Tt,Ft;!0===et?(Tt=1,Ft=0):(Tt=0,Ft=1);var It={HIGH:Tt,LOW:Ft},kt=new Zr(1),Vt=new Hr(kt.buffer),Pt=It.HIGH,Gt=It.LOW;function Lt(r,t,n,e){return kt[0]=r,t[e]=Vt[Pt],t[e+n]=Vt[Gt],t}function $t(r){return Lt(r,[0,0],1,0)}W($t,"assign",Lt);var Ct=[0,0];function Ht(r,t,n,e){return Vr(r)||Ut(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}W((function(r){return Ht(r,[0,0],1,0)}),"assign",Ht);var Wt=[0,0],Bt=[0,0];function Rt(r,t){var n,e,o,i,a,u;return 0===t||0===r||Vr(r)||Ut(r)?r:(Ht(r,Wt,1,0),t+=Wt[1],t+=function(r){var t=ut(r);return(t=(t&dt)>>>20)-xt|0}(r=Wt[0]),t<-1074?(o=0,i=r,$t.assign(o,Ct,1,0),a=Ct[0],a&=gt,u=ut(i),Ot(a|=u&=2147483648,Ct[1])):t>1023?r<0?St:Nt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$t.assign(r,Bt,1,0),n=Bt[0],n&=2148532223,e*Ot(n|=t+xt<<20,Bt[1])))}function Mt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Zt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Xt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Yt=16777216,zt=5.960464477539063e-8,Dt=Mt(20),qt=Mt(20),Jt=Mt(20),Kt=Mt(20);function Qt(r,t,n,e,o,i,a,u,c){var f,l,s,p,y,v,g,d,b;for(p=i,b=e[n],d=n,y=0;d>0;y++)l=zt*b|0,Kt[y]=b-Yt*l|0,b=e[d-1]+l,d-=1;if(b=Rt(b,o),b-=8*Pr(.125*b),b-=g=0|b,s=0,o>0?(g+=y=Kt[n-1]>>24-o,Kt[n-1]-=y<<24-o,s=Kt[n-1]>>23-o):0===o?s=Kt[n-1]>>23:b>=.5&&(s=2),s>0){for(g+=1,f=0,y=0;y<n;y++)d=Kt[y],0===f?0!==d&&(f=1,Kt[y]=16777216-d):Kt[y]=16777215-d;if(o>0)switch(o){case 1:Kt[n-1]&=8388607;break;case 2:Kt[n-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Rt(1,o)))}if(0===b){for(d=0,y=n-1;y>=i;y--)d|=Kt[y];if(0===d){for(v=1;0===Kt[i-v];v++);for(y=n+1;y<=n+v;y++){for(c[u+y]=Zt[a+y],l=0,d=0;d<=u;d++)l+=r[d]*c[u+(y-d)];e[y]=l}return Qt(r,t,n+=v,e,o,i,a,u,c)}}if(0===b)for(n-=1,o-=24;0===Kt[n];)n-=1,o-=24;else(b=Rt(b,-o))>=Yt?(l=zt*b|0,Kt[n]=b-Yt*l|0,o+=24,Kt[n+=1]=l):Kt[n]=0|b;for(l=Rt(1,o),y=n;y>=0;y--)e[y]=l*Kt[y],l*=zt;for(y=n;y>=0;y--){for(l=0,v=0;v<=p&&v<=n-y;v++)l+=Xt[v]*e[y+v];Jt[n-y]=l}for(l=0,y=n;y>=0;y--)l+=Jt[y];for(t[0]=0===s?l:-l,l=Jt[0]-l,y=1;y<=n;y++)l+=Jt[y];return t[1]=0===s?l:-l,7&g}function rn(r,t,n,e){var o,i,a,u,c,f,l;for(4,(i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),f=i-(a=e-1),l=a+4,c=0;c<=l;c++)Dt[c]=f<0?0:Zt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Dt[a+(c-f)];qt[c]=o}return 4,Qt(r,t,4,qt,u,4,i,a,Dt)}var tn=Math.round;function nn(r,t,n){var e,o,i,a,u;return i=r-1.5707963267341256*(e=tn(.6366197723675814*r)),a=6077100506506192e-26*e,u=t>>20|0,n[0]=i-a,u-(ut(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),n[0]=i-a,u-(ut(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),n[0]=i-a)),n[1]=i-n[0]-a,e}var en=1.5707963267341256,on=6077100506506192e-26,an=2*on,un=3*on,cn=4*on,fn=[0,0,0],ln=[0,0];function sn(r,t){var n,e,o,i,a,u,c;if((o=ut(r)&gt|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?nn(r,o,t):o<=1073928572?r>0?(c=r-en,t[0]=c-on,t[1]=c-t[0]-on,1):(c=r+en,t[0]=c+on,t[1]=c-t[0]+on,-1):r>0?(c=r-2*en,t[0]=c-an,t[1]=c-t[0]-an,2):(c=r+2*en,t[0]=c+an,t[1]=c-t[0]+an,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?nn(r,o,t):r>0?(c=r-3*en,t[0]=c-un,t[1]=c-t[0]-un,3):(c=r+3*en,t[0]=c+un,t[1]=c-t[0]+un,-3):1075388923===o?nn(r,o,t):r>0?(c=r-4*en,t[0]=c-cn,t[1]=c-t[0]-cn,4):(c=r+4*en,t[0]=c+cn,t[1]=c-t[0]+cn,-4);if(o<1094263291)return nn(r,o,t);if(o>=dt)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return ht[0]=r,wt[bt]}(r),c=Ot(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)fn[a]=0|c,c=16777216*(c-fn[a]);for(fn[2]=c,i=3;0===fn[i-1];)i-=1;return u=rn(fn,ln,e,i),r<0?(t[0]=-ln[0],t[1]=-ln[1],-u):(t[0]=ln[0],t[1]=ln[1],u)}var pn=[0,0];var yn=3.141592653589793,vn=!0===et?1:0,gn=new Zr(1),dn=new Hr(gn.buffer);var bn=.6931471803691238,hn=1.9082149292705877e-10,wn=1048575;function mn(r){var t,n,e,o,i,a,u,c,f,l,s,p;return 0===r?St:Vr(r)||r<0?NaN:(i=0,(n=ut(r))<1048576&&(i-=54,n=ut(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-xt|0,i+=(c=(n&=wn)+614244&1048576|0)>>20|0,u=(r=function(r,t){return gn[0]=r,dn[vn]=t>>>0,gn[0]}(r,n|1072693248^c))-1,(wn&2+n)<3?0===u?0===i?0:i*bn+i*hn:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*bn-(a-i*hn-u)):(c=n-398458|0,f=440401-n|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=e+o,(c|=f)>0?(t=.5*u*u,0===i?u-(t-l*(t+a)):i*bn-(t-(l*(t+a)+i*hn)-u)):0===i?u-l*(u-a):i*bn-(l*(u-a)-i*hn-u))))}function jn(r){var t,n;if(Vr(r)||0===r)return NaN;if(r<=-1){if((t=(r=1-r)-Pr(r))>.5&&(t-=1),0===t)return NaN;n=yn/function(r){var t,n;return t=ut(r),(t&=2147483647)<=1072243195?t<1044381696?r:pt(r,0,1):t>=2146435072?NaN:(n=sn(r,pn),pt(pn[0],pn[1],1-((1&n)<<1)))}(yn*t)}else n=0;if(r>=10)return n+=function(r){var t;return mn(r-=1)+1/(2*r)-(t=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(t)}(r),n;for(;r>2;)n+=1/(r-=1);for(;r<1;)n-=1/r,r+=1;return n+=function(r){var t,n;return t=r-1.4616321446374059,t-=3.309564688275257e-10,t-=9.016312093258695e-20,n=function(r){var t,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(t=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(t=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),t/n)}(r-1),.9955816268920898*t+t*n}(r),n}return function(r){return kr(r,jn)}}));
//# sourceMappingURL=index.js.map