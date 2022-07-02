// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDigamma=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&f&&f.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,h=g;var _=function(r){return h.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,U=N,S=g;var P=_,T=function(r){var t,n,e;if(null==r)return S.call(r);n=r[U],t=E(r,U);try{r[U]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[U]=n:delete r[U],e},F=j()?T:P,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var D=function(){return new Function("return this;")()},R="object"==typeof self?self:null,X="object"==typeof window?window:null,Y="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof Y?Y:null;module.exports=z;var q=C.isPrimitive,J=D,K=R,Q=X,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var fr=function(){return/^\s*function\s*([^(]*)/i},ar=fr;s(ar,"REGEXP",fr());var cr=ar,lr=F;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=F,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var gr=wr;var hr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},_r=function(r){return gr(r).toLowerCase()},Ar=ir()?_r:hr;var Or=function(r){return"function"===Ar(r)},Nr=Or;var Er=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Nr(r.next)};var Ur=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Tr=F,Fr=Sr,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Vr=Ur,Hr=Gr;var Br=s,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Ur),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Dr=vr;var Rr=function(r){return"object"==typeof r&&null!==r&&!Dr(r)},Xr=Object.getPrototypeOf;var Yr=function(r){return r.__proto__},zr=F,qr=Yr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Xr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Rr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,ft=O;var at=s,ct=Or,lt=Er,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(ft(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,f;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return at(u={},"next",a),at(u,"return",c),yt&&ct(t[yt])&&at(u,yt,l),u;function a(){var r;return f?{done:!0}:(r=t.next()).done?(f=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},st=bt;var dt=function(r){return r!=r},mt=Math.floor,wt=F,jt="function"==typeof Uint32Array;var gt="function"==typeof Uint32Array?Uint32Array:null,ht=function(r){return jt&&r instanceof Uint32Array||"[object Uint32Array]"===wt(r)},_t=gt;var At=function(){var r,t;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),r=ht(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ot="function"==typeof Uint32Array?Uint32Array:void 0,Nt=function(){throw new Error("not implemented")},Et=At()?Ot:Nt,Ut=F,St="function"==typeof Float64Array;var Pt="function"==typeof Float64Array?Float64Array:null,Tt=function(r){return St&&r instanceof Float64Array||"[object Float64Array]"===Ut(r)},Ft=Pt;var It=function(){var r,t;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),r=Tt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var xt="function"==typeof Float64Array?Float64Array:void 0,Gt=function(){throw new Error("not implemented")},Vt=It()?xt:Gt,Ht=F,Bt="function"==typeof Uint8Array;var Lt="function"==typeof Uint8Array?Uint8Array:null,Mt=function(r){return Bt&&r instanceof Uint8Array||"[object Uint8Array]"===Ht(r)},kt=Lt;var Wt=function(){var r,t;if("function"!=typeof kt)return!1;try{t=new kt(t=[1,3.14,-3.14,256,257]),r=Mt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ct="function"==typeof Uint8Array?Uint8Array:void 0,Dt=function(){throw new Error("not implemented")},Rt=Wt()?Ct:Dt,Xt=F,Yt="function"==typeof Uint16Array;var zt="function"==typeof Uint16Array?Uint16Array:null,qt=function(r){return Yt&&r instanceof Uint16Array||"[object Uint16Array]"===Xt(r)},Jt=zt;var Kt=function(){var r,t;if("function"!=typeof Jt)return!1;try{t=new Jt(t=[1,3.14,-3.14,65536,65537]),r=qt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Qt,Zt="function"==typeof Uint16Array?Uint16Array:void 0,$t=function(){throw new Error("not implemented")},rn={uint16:Kt()?Zt:$t,uint8:Rt};(Qt=new rn.uint16(1))[0]=4660;var tn=52===new rn.uint8(Qt.buffer)[0],nn=Et,en=!0===tn?1:0,on=new Vt(1),un=new nn(on.buffer);var fn=function(r){return on[0]=r,un[en]},an=Et,cn=!0===tn?0:1,ln=new Vt(1),vn=new an(ln.buffer);var yn=function(r,t){return ln[0]=r,vn[cn]=t>>>0,ln[0]};var pn=fn,bn=yn,sn=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))},dn=function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))};var mn=function(r,t,n){var e,o,u,i,f,a,c,l,v;return(o=2147483647&(e=pn(r))|0)>=1072010280&&(r<0&&(r=-r,t=-t),r=(v=.7853981633974483-r)+(l=3061616997868383e-32-t),t=0),i=t+(v=r*r)*((f=v*r)*((i=sn(l=v*v))+(c=v*dn(l)))+t),l=r+(i+=.3333333333333341*f),o>=1072010280?(1-(e>>30&2))*((c=n)-2*(r-(l*l/(l+c)-i))):1===n?l:(bn(v=l,0),c=i-(v-r),bn(a=u=-1/l,0),a+u*((f=1+a*v)+a*c))},wn=Et,jn=!0===tn?0:1,gn=new Vt(1),hn=new wn(gn.buffer);var _n,An,On=function(r){return gn[0]=r,hn[jn]};!0===tn?(_n=1,An=0):(_n=0,An=1);var Nn=Et,En={HIGH:_n,LOW:An},Un=new Vt(1),Sn=new Nn(Un.buffer),Pn=En.HIGH,Tn=En.LOW;var Fn=function(r,t){return Sn[Pn]=r,Sn[Tn]=t,Un[0]},In=Fn,xn=Number.POSITIVE_INFINITY,Gn=Sr.NEGATIVE_INFINITY,Vn=xn,Hn=Gn;var Bn,Ln,Mn=function(r){return r===Vn||r===Hn};!0===tn?(Bn=1,Ln=0):(Bn=0,Ln=1);var kn=Et,Wn={HIGH:Bn,LOW:Ln},Cn=new Vt(1),Dn=new kn(Cn.buffer),Rn=Wn.HIGH,Xn=Wn.LOW;var Yn=function(r,t){return Cn[0]=t,r[0]=Dn[Rn],r[1]=Dn[Xn],r};var zn=function(r,t){return 1===arguments.length?Yn([0,0],r):Yn(r,t)},qn=zn,Jn=fn,Kn=In,Qn=[0,0];var Zn=Mn,$n=dt,re=function(r){return Math.abs(r)};var te=function(r,t){return $n(t)||Zn(t)?(r[0]=t,r[1]=0,r):0!==t&&re(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var ne=function(r,t){return 1===arguments.length?te([0,0],r):te(r,t)},ee=fn;var oe=function(r){var t=ee(r);return(t=(2146435072&t)>>>20)-1023|0},ue=xn,ie=Gn,fe=dt,ae=Mn,ce=function(r,t){var n,e;return qn(Qn,r),n=Qn[0],n&=2147483647,e=Jn(t),Kn(n|=e&=2147483648,Qn[1])},le=ne,ve=oe,ye=zn,pe=In,be=[0,0],se=[0,0];var de=function(r,t){var n,e;return 0===t||0===r||fe(r)||ae(r)?r:(le(be,r),t+=be[1],(t+=ve(r=be[0]))<-1074?ce(0,r):t>1023?r<0?ie:ue:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ye(se,r),n=se[0],n&=2148532223,e*pe(n|=t+1023<<20,se[1])))};var me=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var we=mt,je=de,ge=function(r){return me(0,r)},he=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_e=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ae=16777216,Oe=5.960464477539063e-8,Ne=ge(20),Ee=ge(20),Ue=ge(20),Se=ge(20);function Pe(r,t,n,e,o,u,i,f,a){var c,l,v,y,p,b,s,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=Oe*m|0,Se[p]=m-Ae*l|0,m=e[d-1]+l,d-=1;if(m=je(m,o),m-=8*we(.125*m),m-=s=0|m,v=0,o>0?(s+=p=Se[n-1]>>24-o,Se[n-1]-=p<<24-o,v=Se[n-1]>>23-o):0===o?v=Se[n-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)d=Se[p],0===c?0!==d&&(c=1,Se[p]=16777216-d):Se[p]=16777215-d;if(o>0)switch(o){case 1:Se[n-1]&=8388607;break;case 2:Se[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=je(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=Se[p];if(0===d){for(b=1;0===Se[u-b];b++);for(p=n+1;p<=n+b;p++){for(a[f+p]=he[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return Pe(r,t,n+=b,e,o,u,i,f,a)}}if(0===m)for(n-=1,o-=24;0===Se[n];)n-=1,o-=24;else(m=je(m,-o))>=Ae?(l=Oe*m|0,Se[n]=m-Ae*l|0,o+=24,Se[n+=1]=l):Se[n]=0|m;for(l=je(1,o),p=n;p>=0;p--)e[p]=l*Se[p],l*=Oe;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=_e[b]*e[p+b];Ue[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Ue[p];for(t[0]=0===v?l:-l,l=Ue[0]-l,p=1;p<=n;p++)l+=Ue[p];return t[1]=0===v?l:-l,7&s}var Te=function(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Ne[a]=c<0?0:he[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ne[i+(a-c)];Ee[a]=o}return 4,Pe(r,t,4,Ee,f,4,u,i,Ne)},Fe=Math.round,Ie=fn;var xe=fn,Ge=On,Ve=In,He=Te,Be=function(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Fe(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Ie(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Ie(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Le=1.5707963267341256,Me=6077100506506192e-26,ke=2*Me,We=3*Me,Ce=4*Me,De=[0,0,0],Re=[0,0];var Xe=function(r,t){var n,e,o,u,i,f,a;if((o=2147483647&xe(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Be(r,o,t):o<=1073928572?r>0?(a=r-Le,t[0]=a-Me,t[1]=a-t[0]-Me,1):(a=r+Le,t[0]=a+Me,t[1]=a-t[0]+Me,-1):r>0?(a=r-2*Le,t[0]=a-ke,t[1]=a-t[0]-ke,2):(a=r+2*Le,t[0]=a+ke,t[1]=a-t[0]+ke,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Be(r,o,t):r>0?(a=r-3*Le,t[0]=a-We,t[1]=a-t[0]-We,3):(a=r+3*Le,t[0]=a+We,t[1]=a-t[0]+We,-3):1075388923===o?Be(r,o,t):r>0?(a=r-4*Le,t[0]=a-Ce,t[1]=a-t[0]-Ce,4):(a=r+4*Le,t[0]=a+Ce,t[1]=a-t[0]+Ce,-4);if(o<1094263291)return Be(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Ge(r),a=Ve(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)De[i]=0|a,a=16777216*(a-De[i]);for(De[2]=a,u=3;0===De[u-1];)u-=1;return f=He(De,Re,e,u),r<0?(t[0]=-Re[0],t[1]=-Re[1],-f):(t[0]=Re[0],t[1]=Re[1],f)},Ye=fn,ze=mn,qe=Xe,Je=[0,0];var Ke=function(r){var t,n;return t=Ye(r),(t&=2147483647)<=1072243195?t<1044381696?r:ze(r,0,1):t>=2146435072?NaN:(n=qe(r,Je),ze(Je[0],Je[1],1-((1&n)<<1)))},Qe=Et,Ze=!0===tn?1:0,$e=new Vt(1),ro=new Qe($e.buffer);var to=function(r,t){return $e[0]=r,ro[Ze]=t>>>0,$e[0]};var no=fn,eo=to,oo=dt,uo=Gn,io=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},fo=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ao=.6931471803691238,co=1.9082149292705877e-10,lo=1048575;var vo=function(r){var t,n,e,o,u,i,f,a,c,l,v;return 0===r?uo:oo(r)||r<0?NaN:(o=0,(n=no(r))<1048576&&(o-=54,n=no(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(f=(n&=lo)+614244&1048576|0)>>20|0,i=(r=eo(r,n|1072693248^f))-1,(lo&2+n)<3?0===i?0===o?0:o*ao+o*co:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*ao-(u-o*co-i)):(f=n-398458|0,a=440401-n|0,e=(l=(v=(c=i/(2+i))*c)*v)*io(l),u=v*fo(l)+e,(f|=a)>0?(t=.5*i*i,0===o?i-(t-c*(t+u)):o*ao-(t-(c*(t+u)+o*co)-i)):0===o?i-c*(i-u):o*ao-(c*(i-u)-o*co-i))))};var yo=vo,po=function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)};var bo=function(r){var t,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(t=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(t=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),t/n)};var so=dt,mo=mt,wo=Ke,jo=3.141592653589793,go=function(r){var t;return yo(r-=1)+1/(2*r)-(t=1/(r*r))*po(t)},ho=function(r){var t;return t=r-1.4616321446374059,t-=3.309564688275257e-10,.9955816268920898*(t-=9.016312093258695e-20)+t*bo(r-1)};var _o=function(r){var t,n;if(so(r)||0===r)return NaN;if(r<=-1){if((t=(r=1-r)-mo(r))>.5&&(t-=1),0===t)return NaN;n=jo/wo(jo*t)}else n=0;if(r>=10)return n+=go(r);for(;r>2;)n+=1/(r-=1);for(;r<1;)n-=1/r,r+=1;return n+=ho(r)};return function(r){return st(r,_o)}}));
//# sourceMappingURL=browser.js.map
