// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function U(r){var e,t;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[N(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=T;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},D=Boolean,q=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var vr=Number,dr=vr.prototype.toString,gr=B();function br(r){return"object"==typeof r&&(r instanceof vr||(gr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&pr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),e,n)})),o}function xr(r){return r!=r}var Nr,Ur=Math.floor,Tr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,Ir="function"==typeof Uint32Array?Uint32Array:void 0;Nr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Tr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var kr,Vr=Nr,Pr="function"==typeof Float64Array,Gr="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,e,t;if("function"!=typeof Gr)return!1;try{e=new Gr([1,3.14,-3.14,NaN]),t=e,r=(Pr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r,Cr=kr,Hr="function"==typeof Uint8Array,Wr="function"==typeof Uint8Array?Uint8Array:null,Br="function"==typeof Uint8Array?Uint8Array:void 0;$r=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,256,257]),t=e,r=(Hr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr,Mr=$r,Zr="function"==typeof Uint16Array,Xr="function"==typeof Uint16Array?Uint16Array:null,Yr="function"==typeof Uint16Array?Uint16Array:void 0;Rr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Zr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,Dr={uint16:Rr,uint8:Mr};(zr=new Dr.uint16(1))[0]=4660;var qr=52===new Dr.uint8(zr.buffer)[0],Jr=!0===qr?1:0,Kr=new Cr(1),Qr=new Vr(Kr.buffer);function re(r){return Kr[0]=r,Qr[Jr]}var ee=!0===qr?0:1,te=new Cr(1),ne=new Vr(te.buffer);function oe(r,e){return te[0]=r,ne[ee]=e>>>0,te[0]}var ie=.7853981633974483,ae=3061616997868383e-32,ue=.3333333333333341,ce=2147483647;function fe(r,e,t){var n,o,i,a,u,c,f,l,s;return(o=(n=re(r))&ce|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(s=ie-r)+(l=ae-e),e=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(s=r*r)*s),f=s*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),a=e+s*((u=s*r)*(a+f)+e),l=r+(a+=ue*u),o>=1072010280?(1-(n>>30&2))*((f=t)-2*(r-(l*l/(l+f)-a))):1===t?l:(f=a-((s=oe(l,0))-r),(c=oe(i=-1/l,0))+i*((u=1+c*s)+c*f))}var le,se,pe=2147483647,ye=2146435072,ve=1048575,de=!0===qr?0:1,ge=new Cr(1),be=new Vr(ge.buffer);!0===qr?(le=1,se=0):(le=0,se=1);var he={HIGH:le,LOW:se},we=new Cr(1),me=new Vr(we.buffer),je=he.HIGH,Ae=he.LOW;function _e(r,e){return me[je]=r,me[Ae]=e,we[0]}var Ee=Number.POSITIVE_INFINITY,Oe=vr.NEGATIVE_INFINITY,Se=1023,xe=1023,Ne=-1023,Ue=-1074;function Te(r){return r===Ee||r===Oe}var Fe,Ie,ke=2147483648;!0===qr?(Fe=1,Ie=0):(Fe=0,Ie=1);var Ve={HIGH:Fe,LOW:Ie},Pe=new Cr(1),Ge=new Vr(Pe.buffer),Le=Ve.HIGH,$e=Ve.LOW;function Ce(r,e,t,n){return Pe[0]=r,e[n]=Ge[Le],e[n+t]=Ge[$e],e}function He(r){return Ce(r,[0,0],1,0)}$(He,"assign",Ce);var We=[0,0],Be=22250738585072014e-324,Re=4503599627370496;function Me(r,e,t,n){return xr(r)||Te(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Be?(e[n]=r*Re,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Me(r,[0,0],1,0)}),"assign",Me);var Ze=2220446049250313e-31,Xe=2148532223,Ye=[0,0],ze=[0,0];function De(r,e){var t,n,o,i,a,u;return 0===e||0===r||xr(r)||Te(r)?r:(Me(r,Ye,1,0),r=Ye[0],e+=Ye[1],e+=function(r){var e=re(r);return(e=(e&ye)>>>20)-Se|0}(r),e<Ue?(o=0,i=r,He.assign(o,We,1,0),a=We[0],a&=pe,u=re(i),_e(a|=u&=ke,We[1])):e>xe?r<0?Oe:Ee:(e<=Ne?(e+=52,n=Ze):n=1,He.assign(r,ze,1,0),t=ze[0],t&=Xe,n*_e(t|=e+Se<<20,ze[1])))}function qe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Je=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ke=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Qe=16777216,rt=5.960464477539063e-8,et=qe(20),tt=qe(20),nt=qe(20),ot=qe(20);function it(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=rt*b|0,ot[y]=b-Qe*l|0,b=n[g-1]+l,g-=1;if(b=De(b,o),b-=8*Ur(.125*b),b-=d=0|b,s=0,o>0?(d+=y=ot[t-1]>>24-o,ot[t-1]-=y<<24-o,s=ot[t-1]>>23-o):0===o?s=ot[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=ot[y],0===f?0!==g&&(f=1,ot[y]=16777216-g):ot[y]=16777215-g;if(o>0)switch(o){case 1:ot[t-1]&=8388607;break;case 2:ot[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=De(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=ot[y];if(0===g){for(v=1;0===ot[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Je[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return it(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===ot[t];)t-=1,o-=24;else(b=De(b,-o))>=Qe?(l=rt*b|0,ot[t]=b-Qe*l|0,o+=24,ot[t+=1]=l):ot[t]=0|b;for(l=De(1,o),y=t;y>=0;y--)n[y]=l*ot[y],l*=rt;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Ke[v]*n[y+v];nt[t-y]=l}for(l=0,y=t;y>=0;y--)l+=nt[y];for(e[0]=0===s?l:-l,l=nt[0]-l,y=1;y<=t;y++)l+=nt[y];return e[1]=0===s?l:-l,7&d}function at(r,e,t,n){var o,i,a,u,c,f,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)et[c]=f<0?0:Je[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*et[a+(c-f)];tt[c]=o}return it(r,e,4,tt,u,4,i,a,et)}var ut=Math.round,ct=.6366197723675814,ft=1.5707963267341256,lt=6077100506506192e-26,st=6077100506303966e-26,pt=20222662487959506e-37,yt=20222662487111665e-37,vt=84784276603689e-45,dt=2047;function gt(r,e,t){var n,o,i,a,u;return i=r-(n=ut(r*ct))*ft,a=n*lt,u=e>>20|0,t[0]=i-a,u-(re(t[0])>>20&dt)>16&&(a=n*pt-((o=i)-(i=o-(a=n*st))-a),t[0]=i-a,u-(re(t[0])>>20&dt)>49&&(a=n*vt-((o=i)-(i=o-(a=n*yt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var bt=0,ht=16777216,wt=1.5707963267341256,mt=6077100506506192e-26,jt=2*mt,At=3*mt,_t=4*mt,Et=598523,Ot=1072243195,St=1073928572,xt=1074752122,Nt=1074977148,Ut=1075183036,Tt=1075388923,Ft=1075594811,It=1094263291,kt=[0,0,0],Vt=[0,0];function Pt(r,e){var t,n,o,i,a,u,c;if((o=re(r)&pe|0)<=Ot)return e[0]=r,e[1]=0,0;if(o<=xt)return(o&ve)===Et?gt(r,o,e):o<=St?r>0?(c=r-wt,e[0]=c-mt,e[1]=c-e[0]-mt,1):(c=r+wt,e[0]=c+mt,e[1]=c-e[0]+mt,-1):r>0?(c=r-2*wt,e[0]=c-jt,e[1]=c-e[0]-jt,2):(c=r+2*wt,e[0]=c+jt,e[1]=c-e[0]+jt,-2);if(o<=Ft)return o<=Ut?o===Nt?gt(r,o,e):r>0?(c=r-3*wt,e[0]=c-At,e[1]=c-e[0]-At,3):(c=r+3*wt,e[0]=c+At,e[1]=c-e[0]+At,-3):o===Tt?gt(r,o,e):r>0?(c=r-4*wt,e[0]=c-_t,e[1]=c-e[0]-_t,4):(c=r+4*wt,e[0]=c+_t,e[1]=c-e[0]+_t,-4);if(o<It)return gt(r,o,e);if(o>=ye)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ge[0]=r,be[de]}(r),c=_e(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)kt[a]=0|c,c=(c-kt[a])*ht;for(kt[2]=c,i=3;kt[i-1]===bt;)i-=1;return u=at(kt,Vt,n,i),r<0?(e[0]=-Vt[0],e[1]=-Vt[1],-u):(e[0]=Vt[0],e[1]=Vt[1],u)}var Gt=[0,0],Lt=2147483647,$t=1072243195,Ct=2146435072,Ht=1044381696,Wt=3.141592653589793,Bt=!0===qr?1:0,Rt=new Cr(1),Mt=new Vr(Rt.buffer),Zt=.6931471803691238,Xt=1.9082149292705877e-10,Yt=0x40000000000000,zt=.3333333333333333,Dt=1048575,qt=2146435072,Jt=1048576,Kt=1072693248;function Qt(r){var e,t,n,o,i,a,u,c,f,l,s,p;return 0===r?Oe:xr(r)||r<0?NaN:(i=0,(t=re(r))<Jt&&(i-=54,t=re(r*=Yt)),t>=qt?r+r:(i+=(t>>20)-Se|0,i+=(c=614244+(t&=Dt)&1048576|0)>>20|0,u=(r=function(r,e){return Rt[0]=r,Mt[Bt]=e>>>0,Rt[0]}(r,t|c^Kt))-1,(Dt&2+t)<3?0===u?0===i?0:i*Zt+i*Xt:(a=u*u*(.5-zt*u),0===i?u-a:i*Zt-(a-i*Xt-u)):(c=t-398458|0,f=440401-t|0,o=(s=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(c|=f)>0?(e=.5*u*u,0===i?u-(e-l*(e+a)):i*Zt-(e-(l*(e+a)+i*Xt)-u)):0===i?u-l*(u-a):i*Zt-(l*(u-a)-i*Xt-u))))}var rn=1.4616321446374059,en=3.309564688275257e-10,tn=9.016312093258695e-20,nn=.9955816268920898,on=10;function an(r){var e,t;if(xr(r)||0===r)return NaN;if(r<=-1){if((e=(r=1-r)-Ur(r))>.5&&(e-=1),0===e)return NaN;t=Wt/function(r){var e,t;return e=re(r),(e&=Lt)<=$t?e<Ht?r:fe(r,0,1):e>=Ct?NaN:(t=Pt(r,Gt),fe(Gt[0],Gt[1],1-((1&t)<<1)))}(Wt*e)}else t=0;if(r>=on)return t+=function(r){var e;return Qt(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(r),t;for(;r>2;)t+=1/(r-=1);for(;r<1;)t-=1/r,r+=1;return t+=function(r){var e,t;return e=r-rn,e-=en,e-=tn,t=function(r){var e,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/t)}(r-1),e*nn+e*t}(r),t}return function(r){return Sr(r,an)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDigamma=e();
//# sourceMappingURL=browser.js.map
