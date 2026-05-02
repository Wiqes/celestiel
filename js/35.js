import{a as or,b as lr,c as ca,d as _h,e as xh,f as Hi,g as hi,h as vh,i as Xt,j as af,k as of,l as Ct,m as Do}from"./46.js";import{f as sf}from"./7.js";import{e as Po,f as Io}from"./14.js";import"./36.js";import"./51.js";import{c as Co,d as Ro}from"./12.js";import{c as rf}from"./30.js";import{a as Qd,m as ef,s as tf,t as nf,v as Xn}from"./15.js";import{$a as ph,Cb as At,Da as So,Db as Ft,Eb as bi,Ib as rr,Mb as xn,Nb as vn,P as tr,Rb as To,Sb as Eo,T as tn,Ta as Ot,Tb as wo,Vb as mh,Wb as Kd,Yb as ar,Z as dt,Zb as Ao,_b as gh,a as la,b as Yd,dc as Jd,e as xo,fa as ir,fb as nn,ga as nr,ha as yo,k as vo,kb as Hn,kc as yn,lc as Mn,oa as Mo,pa as bo,rc as $d,s as qd,sb as Gn,ua as sr,ub as Zd,yb as Wn,yc as jd}from"./25.js";var Lo=class s{winner;terminateBattle=new Mo;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=nn({type:s,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:7,vars:4,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(t,i){t&1&&(At(0,"div",0)(1,"div",1)(2,"div",2),ar(3),Ft(),bi(4,"div",3),At(5,"p-button",4),yn(6,"translate"),xn("onClick",function(){return i.onTerminateBattle()}),Ft()()()),t&2&&(Ot(3),Ao(i.winner),Ot(2),Gn("label",Mn(6,2,"Terminate")))},dependencies:[Xn,Io,Po,Ro,Co],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden;pointer-events:none}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;pointer-events:auto;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin-bottom:20px;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#c0c6d0;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 24px rgba(123,140,173,.4),0 0 48px rgba(123,140,173,.15),0 2px 12px rgba(0,0,0,.9);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:1px solid rgba(168,178,193,.18)}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin-bottom:15px}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin-bottom:10px;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function bg(s,e){if(s&1){let t=rr();At(0,"div",2)(1,"p-button",3),yn(2,"translate"),xn("onClick",function(){ir(t);let n=vn();return nr(n.onStartBattle())}),Ft()()}s&2&&(Ot(),Gn("label",Mn(2,1,"Release the Spiders!")))}var Fo=class s{isBattleActive=!1;startBattle=new Mo;onStartBattle(){this.startBattle.emit()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=nn({type:s,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive"},outputs:{startBattle:"startBattle"},decls:2,vars:1,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"]],template:function(t,i){t&1&&(At(0,"div",0),Hn(1,bg,3,3,"div",1),Ft()),t&2&&(Ot(),Gn("ngIf",!i.isBattleActive))},dependencies:[Xn,ef,Io,Po,Ro,Co],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000;padding-top:120px}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 720px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{font-size:12px!important;padding:8px!important}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};var Nl="182",as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uf=0,eu=1,Bf=2;var Ga=1,zf=2,Vr=3,Dn=0,ni=1,on=2,ln=0,Cs=1,tu=2,iu=3,nu=4,kf=5,jn=100,Vf=101,Hf=102,Gf=103,Wf=104,Xf=200,Yf=201,qf=202,Zf=203,ll=204,cl=205,Kf=206,Jf=207,$f=208,jf=209,Qf=210,ep=211,tp=212,ip=213,np=214,Ul=0,Bl=1,zl=2,Rs=3,kl=4,Vl=5,Hl=6,Gl=7,Wl=0,sp=1,rp=2,Ji=0,su=1,ru=2,au=3,Wa=4,ou=5,lu=6,cu=7;var Wh=300,ls=301,Ns=302,Xl=303,Yl=304,Xa=306,Ps=1e3,sn=1001,hl=1002,Ut=1003,ap=1004;var Ya=1005;var Vt=1006,ql=1007;var cs=1008;var di=1009,hu=1010,uu=1011,Hr=1012,Zl=1013,$i=1014,ji=1015,cn=1016,Kl=1017,Jl=1018,Gr=1020,du=35902,fu=35899,pu=1021,mu=1022,Ui=1023,rn=1026,hs=1027,gu=1028,$l=1029,Us=1030,jl=1031;var Ql=1033,qa=33776,Za=33777,Ka=33778,Ja=33779,ec=35840,tc=35841,ic=35842,nc=35843,sc=36196,rc=37492,ac=37496,oc=37488,lc=37489,cc=37490,hc=37491,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,_c=37814,xc=37815,vc=37816,yc=37817,Mc=37818,bc=37819,Sc=37820,Tc=37821,Ec=36492,wc=36494,Ac=36495,Cc=36283,Rc=36284,Pc=36285,Ic=36286;var ya=2300,ul=2301,ol=2302,Xh=2400,Yh=2401,qh=2402;var op=3200;var Dc=0,lp=1,Fn="",zt="srgb",Is="srgb-linear",Ma="linear",Je="srgb";var As=7680;var Zh=519,cp=512,hp=513,up=514,Lc=515,dp=516,fp=517,Oc=518,pp=519,dl=35044,_u=35048;var xu="300 es",qi=2e3,ba=2001;function vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){let s=Cr("canvas");return s.style.display="block",s}var cf={},Rr=null;function Sa(...s){let e="THREE."+s.shift();Rr?Rr("log",e,...s):console.log(e,...s)}function we(...s){let e="THREE."+s.shift();Rr?Rr("warn",e,...s):console.warn(e,...s)}function Ce(...s){let e="THREE."+s.shift();Rr?Rr("error",e,...s):console.error(e,...s)}function Pr(...s){let e=s.join(" ");e in cf||(cf[e]=!0,we(...s))}function gp(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var an=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hf=1234567,xa=Math.PI/180,Ir=180/Math.PI;function Pn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function yu(s,e){return(s%e+e)%e}function Tg(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Eg(s,e,t){return s!==e?(t-s)/(e-s):0}function va(s,e,t){return(1-t)*s+t*e}function wg(s,e,t,i){return va(s,e,1-Math.exp(-t*i))}function Ag(s,e=1){return e-Math.abs(yu(s,e*2)-e)}function Cg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Rg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Pg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ig(s,e){return s+Math.random()*(e-s)}function Dg(s){return s*(.5-Math.random())}function Lg(s){s!==void 0&&(hf=s);let e=hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Og(s){return s*xa}function Fg(s){return s*Ir}function Ng(s){return(s&s-1)===0&&s!==0}function Ug(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zg(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),_=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*f,o*h,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var si={DEG2RAD:xa,RAD2DEG:Ir,generateUUID:Pn,clamp:ke,euclideanModulo:yu,mapLinear:Tg,inverseLerp:Eg,lerp:va,damp:wg,pingpong:Ag,smoothstep:Cg,smootherstep:Rg,randInt:Pg,randFloat:Ig,randFloatSpread:Dg,seededRandom:Lg,degToRad:Og,radToDeg:Fg,isPowerOfTwo:Ng,ceilPowerOfTwo:Ug,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:zg,normalize:et,denormalize:Yi},Se=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yh=new D,uf=new Ni,Oe=class s{constructor(e,t,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],y=n[1],S=n[4],M=n[7],b=n[2],w=n[5],A=n[8];return r[0]=a*g+o*y+l*b,r[3]=a*m+o*S+l*w,r[6]=a*p+o*M+l*A,r[1]=c*g+h*y+u*b,r[4]=c*m+h*S+u*w,r[7]=c*p+h*M+u*A,r[2]=d*g+f*y+_*b,r[5]=d*m+f*S+_*w,r[8]=d*p+f*M+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mh=new Oe,df=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ff=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){let s={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(n.r=In(n.r),n.g=In(n.g),n.b=In(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(n.r=wr(n.r),n.g=wr(n.g),n.b=wr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Fn?Ma:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Is]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:df,fromXYZ:ff,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),s}var He=kg();function In(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cr,fl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{cr===void 0&&(cr=Cr("canvas")),cr.width=e.width,cr.height=e.height;let n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=cr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(bh(n[a].image)):r.push(bh(n[a]))}else r=bh(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function bh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var Hg=0,Sh=new D,fi=(()=>{class s extends an{constructor(t=s.DEFAULT_IMAGE,i=s.DEFAULT_MAPPING,n=sn,r=sn,a=Vt,o=cs,l=Ui,c=di,h=s.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Pn(),this.name="",this.source=new Dr(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let n=t[i];if(n===void 0){we(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){we(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=Wh,s.DEFAULT_ANISOTROPY=1,s})(),pt=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,b=(p+1)/2,w=(h+d)/4,A=(u+g)/4,R=(_+m)/4;return S>M&&S>b?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=w/i,r=A/i):M>b?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=w/n,r=R/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=A/r,n=R/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends an{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let n={width:e,height:t,depth:i.depth},r=new fi(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends pl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ta=class extends fi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends fi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gi):Gi.fromBufferAttribute(r,a),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),No.copy(i.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Uo.subVectors(this.max,ha),hr.subVectors(e.a,ha),ur.subVectors(e.b,ha),dr.subVectors(e.c,ha),Yn.subVectors(ur,hr),qn.subVectors(dr,ur),Ss.subVectors(hr,dr);let t=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-Ss.z,Ss.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,Ss.z,0,-Ss.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-Ss.y,Ss.x,0];return!Th(t,hr,ur,dr,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,hr,ur,dr,Uo))?!1:(Bo.crossVectors(Yn,qn),t=[Bo.x,Bo.y,Bo.z],Th(t,hr,ur,dr,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sn=[new D,new D,new D,new D,new D,new D,new D,new D],Gi=new D,No=new Ei,hr=new D,ur=new D,dr=new D,Yn=new D,qn=new D,Ss=new D,ha=new D,Uo=new D,Bo=new D,Ts=new D;function Th(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ts.fromArray(s,r);let o=n.x*Math.abs(Ts.x)+n.y*Math.abs(Ts.y)+n.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gg=new Ei,ua=new D,Eh=new D,Qn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gg.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);let t=ua.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ua,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Eh)),this.expandByPoint(ua.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tn=new D,wh=new D,zo=new D,Zn=new D,Ah=new D,ko=new D,Ch=new D,es=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){wh.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(wh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(zo),o=Zn.dot(this.direction),l=-Zn.dot(zo),c=Zn.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(wh).addScaledVector(zo,d),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);let i=Tn.dot(this.direction),n=Tn.dot(Tn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,n,r){Ah.subVectors(t,e),ko.subVectors(i,e),Ch.crossVectors(Ah,ko);let a=this.direction.dot(Ch),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);let l=o*this.direction.dot(ko.crossVectors(Zn,ko));if(l<0)return null;let c=o*this.direction.dot(Ah.cross(Zn));if(c<0||l+c>a)return null;let h=-o*Zn.dot(Ch);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class s{constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,_,g,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,Xg)}lookAt(e,t,i){let n=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Kn.crossVectors(i,Si),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Kn.crossVectors(i,Si)),Kn.normalize(),Vo.crossVectors(Si,Kn),n[0]=Kn.x,n[4]=Vo.x,n[8]=Si.x,n[1]=Kn.y,n[5]=Vo.y,n[9]=Si.y,n[2]=Kn.z,n[6]=Vo.z,n[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],S=i[7],M=i[11],b=i[15],w=n[0],A=n[4],R=n[8],x=n[12],T=n[1],P=n[5],F=n[9],N=n[13],G=n[2],V=n[6],k=n[10],B=n[14],q=n[3],oe=n[7],te=n[11],re=n[15];return r[0]=a*w+o*T+l*G+c*q,r[4]=a*A+o*P+l*V+c*oe,r[8]=a*R+o*F+l*k+c*te,r[12]=a*x+o*N+l*B+c*re,r[1]=h*w+u*T+d*G+f*q,r[5]=h*A+u*P+d*V+f*oe,r[9]=h*R+u*F+d*k+f*te,r[13]=h*x+u*N+d*B+f*re,r[2]=_*w+g*T+m*G+p*q,r[6]=_*A+g*P+m*V+p*oe,r[10]=_*R+g*F+m*k+p*te,r[14]=_*x+g*N+m*B+p*re,r[3]=y*w+S*T+M*G+b*q,r[7]=y*A+S*P+M*V+b*oe,r[11]=y*R+S*F+M*k+b*te,r[15]=y*x+S*N+M*B+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],y=l*f-c*d,S=o*f-c*u,M=o*d-l*u,b=a*f-c*h,w=a*d-l*h,A=a*u-o*h;return t*(g*y-m*S+p*M)-i*(_*y-m*b+p*w)+n*(_*S-g*b+p*A)-r*(_*M-g*w+m*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,S=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,M=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=t*y+i*S+n*M+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=y*A,e[1]=(g*d*r-u*m*r-g*n*f+i*m*f+u*n*p-i*d*p)*A,e[2]=(o*m*r-g*l*r+g*n*c-i*m*c-o*n*p+i*l*p)*A,e[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*f-i*l*f)*A,e[4]=S*A,e[5]=(h*m*r-_*d*r+_*n*f-t*m*f-h*n*p+t*d*p)*A,e[6]=(_*l*r-a*m*r-_*n*c+t*m*c+a*n*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*n*c-t*d*c-a*n*f+t*l*f)*A,e[8]=M*A,e[9]=(_*u*r-h*g*r-_*i*f+t*g*f+h*i*p-t*u*p)*A,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*A,e[12]=b*A,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*A,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*m-t*o*m)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,m=a*u,p=o*u,y=l*c,S=l*h,M=l*u,b=i.x,w=i.y,A=i.z;return n[0]=(1-(g+p))*b,n[1]=(f+M)*b,n[2]=(_-S)*b,n[3]=0,n[4]=(f-M)*w,n[5]=(1-(d+p))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(_+S)*A,n[9]=(m-y)*A,n[10]=(1-(d+g))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=fr.set(n[0],n[1],n[2]).length(),a=fr.set(n[4],n[5],n[6]).length(),o=fr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),Wi.copy(this);let c=1/r,h=1/a,u=1/o;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=u,Wi.elements[9]*=u,Wi.elements[10]*=u,t.setFromRotationMatrix(Wi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=qi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===qi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ba)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=qi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===qi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===ba)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},fr=new D,Wi=new ut,Wg=new D(0,0,0),Xg=new D(1,1,1),Kn=new D,Vo=new D,Si=new D,pf=new ut,mf=new Ni,Zi=(()=>{class s{constructor(t=0,i=0,n=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){let r=t.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],_=r[10];switch(i){case"XYZ":this._y=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return pf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pf,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return mf.setFromEuler(this),this.setFromQuaternion(mf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),Ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yg=0,gf=new D,pr=new Ni,En=new ut,Ho=new D,da=new D,qg=new D,Zg=new Ni,_f=new D(1,0,0),xf=new D(0,1,0),vf=new D(0,0,1),yf={type:"added"},Kg={type:"removed"},mr={type:"childadded",child:null},Rh={type:"childremoved",child:null},ti=(()=>{class s extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,i=new Zi,n=new Ni,r=new D(1,1,1);function a(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Oe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(_f,t)}rotateY(t){return this.rotateOnAxis(xf,t)}rotateZ(t){return this.rotateOnAxis(vf,t)}translateOnAxis(t,i){return gf.copy(t).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(_f,t)}translateY(t){return this.translateOnAxis(xf,t)}translateZ(t){return this.translateOnAxis(vf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Ho.copy(t):Ho.set(t,i,n);let r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(da,Ho,this.up):En.lookAt(Ho,da,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(En),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yf),mr.child=t,this.dispatchEvent(mr),mr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Kg),Rh.child=t,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yf),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,i);if(o!==void 0)return o}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,Zg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>Yd(la({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>la({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));r.material=l}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(t.animations,c))}}if(i){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),_=o(t.animations),g=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}}return s.DEFAULT_UP=new D(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),Xi=new D,wn=new D,Ph=new D,An=new D,gr=new D,_r=new D,Mf=new D,Ih=new D,Dh=new D,Lh=new D,Oh=new pt,Fh=new pt,Nh=new pt,Rn=class s{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Xi.subVectors(e,t),n.cross(Xi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Xi.subVectors(n,t),wn.subVectors(i,t),Ph.subVectors(e,t);let a=Xi.dot(Xi),o=Xi.dot(wn),l=Xi.dot(Ph),c=wn.dot(wn),h=wn.dot(Ph),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Oh.setScalar(0),Fh.setScalar(0),Nh.setScalar(0),Oh.fromBufferAttribute(e,t),Fh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Oh,r.x),a.addScaledVector(Fh,r.y),a.addScaledVector(Nh,r.z),a}static isFrontFacing(e,t,i,n){return Xi.subVectors(i,t),wn.subVectors(e,t),Xi.cross(wn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Xi.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;gr.subVectors(n,i),_r.subVectors(r,i),Ih.subVectors(e,i);let l=gr.dot(Ih),c=_r.dot(Ih);if(l<=0&&c<=0)return t.copy(i);Dh.subVectors(e,n);let h=gr.dot(Dh),u=_r.dot(Dh);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gr,a);Lh.subVectors(e,r);let f=gr.dot(Lh),_=_r.dot(Lh);if(_>=0&&f<=_)return t.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(_r,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Mf.subVectors(r,n),o=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(Mf,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(gr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Uh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=yu(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Uh(a,r,e+1/3),this.g=Uh(a,r,e),this.b=Uh(a,r,e-1/3)}return He.colorSpaceToWorking(this,n),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=_p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return He.workingToColorSpace(qt.copy(this),e),Math.round(ke(qt.r*255,0,255))*65536+Math.round(ke(qt.g*255,0,255))*256+Math.round(ke(qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(qt.copy(this),t);let i=qt.r,n=qt.g,r=qt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=zt){He.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,n=qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Go);let i=va(Jn.h,Go.h,t),n=va(Jn.s,Go.s,t),r=va(Jn.l,Go.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Le;Le.NAMES=_p;var Jg=0,ii=class extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Cs,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wa=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new D,Wo=new Se,$g=0,ui=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dl,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}};var Aa=class extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ca=class extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}},jg=0,Oi=new ut,Bh=new ti,xr=new D,Ti=new Ei,fa=new Ei,Nt=new D,Bt=class s extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?Ca:Aa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Ti.min,fa.min),Ti.expandByPoint(Nt),Nt.addVectors(Ti.max,fa.max),Ti.expandByPoint(Nt)):(Ti.expandByPoint(fa.min),Ti.expandByPoint(fa.max))}Ti.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),Nt.add(xr)),n=Math.max(n,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;let c=new D,h=new D,u=new D,d=new Se,f=new Se,_=new Se,g=new D,m=new D;function p(R,x,T){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,x),_.fromBufferAttribute(r,T),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[x].add(g),o[T].add(g),l[R].add(m),l[x].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,x=y.length;R<x;++R){let T=y[R],P=T.start,F=T.count;for(let N=P,G=P+F;N<G;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let S=new D,M=new D,b=new D,w=new D;function A(R){b.fromBufferAttribute(n,R),w.copy(b);let x=o[R];S.copy(x),S.sub(b.multiplyScalar(b.dot(x))).normalize(),M.crossVectors(w,x);let P=M.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,x=y.length;R<x;++R){let T=y[R],P=T.start,F=T.count;for(let N=P,G=P+F;N<G;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new ui(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bf=new ut,Es=new es,Xo=new Qn,Sf=new D,Yo=new D,qo=new D,Zo=new D,zh=new D,Ko=new D,Tf=new D,Jo=new D,Ye=class extends ti{constructor(e=new Bt,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(zh.fromBufferAttribute(u,e),a?Ko.addScaledVector(zh,h):Ko.addScaledVector(zh.sub(t),h))}t.add(Ko)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Xo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Xo,Sf)===null||Es.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(bf.copy(r).invert(),Es.copy(e.ray).applyMatrix4(bf),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=S;M<b;M+=3){let w=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);n=$o(this,p,e,i,c,h,u,w,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);n=$o(this,a,e,i,c,h,u,y,S,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=S;M<b;M+=3){let w=M,A=M+1,R=M+2;n=$o(this,p,e,i,c,h,u,w,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=m,S=m+1,M=m+2;n=$o(this,a,e,i,c,h,u,y,S,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function Qg(s,e,t,i,n,r,a,o){let l;if(e.side===ni?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Dn,o),l===null)return null;Jo.copy(o),Jo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:s}}function $o(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Yo),s.getVertexPosition(l,qo),s.getVertexPosition(c,Zo);let h=Qg(s,e,t,i,Yo,qo,Zo,Tf);if(h){let u=new D;Rn.getBarycoord(Tf,Yo,qo,Zo,u),n&&(h.uv=Rn.getInterpolatedAttribute(n,o,l,c,u,new Se)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,l,c,u,new Se)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Rn.getNormal(Yo,qo,Zo,d.normal),h.face=d,h.barycoord=u}return h}var Lr=class s extends Bt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function _(g,m,p,y,S,M,b,w,A,R,x){let T=M/A,P=b/R,F=M/2,N=b/2,G=w/2,V=A+1,k=R+1,B=0,q=0,oe=new D;for(let te=0;te<k;te++){let re=te*P-N;for(let Ae=0;Ae<V;Ae++){let Ie=Ae*T-F;oe[g]=Ie*y,oe[m]=re*S,oe[p]=G,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=w>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ae/A),u.push(1-te/R),B+=1}}for(let te=0;te<R;te++)for(let re=0;re<A;re++){let Ae=d+re+V*te,Ie=d+re+V*(te+1),Ge=d+(re+1)+V*(te+1),We=d+(re+1)+V*te;l.push(Ae,Ie,We),l.push(Ie,Ge,We),q+=6}o.addGroup(f,q,x),f+=q,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Kt(s){let e={};for(let t=0;t<s.length;t++){let i=Bs(s[t]);for(let n in i)e[n]=i[n]}return e}function e_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var xp={clone:Bs,merge:Kt},t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ra=class extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new D,Ef=new Se,wf=new Se,Zt=class extends Ra{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Ef,wf),t.subVectors(wf,Ef)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vr=-90,yr=1,gl=class extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Zt(vr,yr,e,t);n.layers=this.layers,this.add(n);let r=new Zt(vr,yr,e,t);r.layers=this.layers,this.add(r);let a=new Zt(vr,yr,e,t);a.layers=this.layers,this.add(a);let o=new Zt(vr,yr,e,t);o.layers=this.layers,this.add(o);let l=new Zt(vr,yr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(vr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Pa=class extends fi{constructor(e=[],t=ls,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ia=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Pa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Lr(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:ln});r.uniforms.tEquirect.value=t;let a=new Ye(n,r),o=t.minFilter;return t.minFilter===cs&&(t.minFilter=Vt),new gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},kt=class extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}},n_={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Da=class extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_l=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new D,La=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,pa=new D,br=new D,Sr=new D,Tr=new Se,ma=new Se,vp=new ut,jo=new D,ga=new D,Qo=new D,Af=new Se,kh=new Se,Cf=new Se,Oa=class extends ti{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _l(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new La(i,3,0,!1)),Mr.setAttribute("uv",new La(i,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Sr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;el(jo.set(-.5,-.5,0),Sr,a,br,n,r),el(ga.set(.5,-.5,0),Sr,a,br,n,r),el(Qo.set(.5,.5,0),Sr,a,br,n,r),Af.set(0,0),kh.set(1,0),Cf.set(1,1);let o=e.ray.intersectTriangle(jo,ga,Qo,!1,pa);if(o===null&&(el(ga.set(-.5,.5,0),Sr,a,br,n,r),kh.set(0,1),o=e.ray.intersectTriangle(jo,Qo,ga,!1,pa),o===null))return;let l=e.ray.origin.distanceTo(pa);l<e.near||l>e.far||t.push({distance:l,point:pa.clone(),uv:Rn.getInterpolation(pa,jo,ga,Qo,Af,kh,Cf,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function el(s,e,t,i,n,r){Tr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(ma.x=r*Tr.x-n*Tr.y,ma.y=n*Tr.x+r*Tr.y):ma.copy(Tr),s.copy(e),s.x+=ma.x,s.y+=ma.y,s.applyMatrix4(vp)}var xl=class extends fi{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Ut,h=Ut,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vh=new D,s_=new D,r_=new Oe,Fi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Vh.subVectors(i,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||r_.getNormalMatrix(e),n=this.coplanarPoint(Vh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ws=new Qn,a_=new Se(.5,.5),tl=new D,Nr=class{constructor(e=new Fi,t=new Fi,i=new Fi,n=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],g=r[9],m=r[10],p=r[11],y=r[12],S=r[13],M=r[14],b=r[15];if(n[0].setComponents(c-a,f-h,p-_,b-y).normalize(),n[1].setComponents(c+a,f+h,p+_,b+y).normalize(),n[2].setComponents(c+o,f+u,p+g,b+S).normalize(),n[3].setComponents(c-o,f-u,p-g,b-S).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,p-m,b-M).normalize();else if(n[4].setComponents(c-l,f-d,p-m,b-M).normalize(),t===qi)n[5].setComponents(c+l,f+d,p+m,b+M).normalize();else if(t===ba)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=a_.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(tl.x=n.normal.x>0?e.max.x:e.min.x,tl.y=n.normal.y>0?e.max.y:e.min.y,tl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vl=new D,yl=new D,Rf=new ut,_a=new es,il=new Qn,Hh=new D,Pf=new D,Ml=class extends ti{constructor(e=new Bt,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)vl.fromBufferAttribute(t,n-1),yl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=vl.distanceTo(yl);e.setAttribute("lineDistance",new rt(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(n),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;Rf.copy(n).invert(),_a.copy(e.ray).applyMatrix4(Rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),y=h.getX(g+1),S=nl(this,e,_a,l,p,y,g);S&&t.push(S)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=nl(this,e,_a,l,g,m,_-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=nl(this,e,_a,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=nl(this,e,_a,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nl(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(vl.fromBufferAttribute(o,n),yl.fromBufferAttribute(o,r),t.distanceSqToSegment(vl,yl,Hh,Pf)>i)return;Hh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Hh);if(!(c<e.near||c>e.far))return{distance:c,point:Pf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var If=new D,Df=new D,Ur=class extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)If.fromBufferAttribute(t,n),Df.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+If.distanceTo(Df);e.setAttribute("lineDistance",new rt(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ln=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lf=new ut,Kh=new es,sl=new Qn,rl=new D,Ds=class extends ti{constructor(e=new Bt,t=new Ln){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(n),sl.radius+=r,e.ray.intersectsSphere(sl)===!1)return;Lf.copy(n).invert(),Kh.copy(e.ray).applyMatrix4(Lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);rl.fromBufferAttribute(u,m),Of(rl,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)rl.fromBufferAttribute(u,_),Of(rl,_,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Of(s,e,t,i,n,r,a){let o=Kh.distanceSqToPoint(s);if(o<t){let l=new D;Kh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ls=class extends fi{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},is=class extends fi{constructor(e,t,i=$i,n,r,a,o=Ut,l=Ut,c,h=rn,u=1){if(h!==rn&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bl=class extends is{constructor(e,t=$i,i=ls,n,r,a=Ut,o=Ut,l,c=rn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fa=class extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Os=class s extends Bt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],m=i/2,p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function y(){let M=new D,b=new D,w=0,A=(t-e)/i;for(let R=0;R<=r;R++){let x=[],T=R/r,P=T*(t-e)+e;for(let F=0;F<=n;F++){let N=F/n,G=N*l+o,V=Math.sin(G),k=Math.cos(G);b.x=P*V,b.y=-T*i+m,b.z=P*k,u.push(b.x,b.y,b.z),M.set(V,A,k).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-T),x.push(_++)}g.push(x)}for(let R=0;R<n;R++)for(let x=0;x<r;x++){let T=g[x][R],P=g[x+1][R],F=g[x+1][R+1],N=g[x][R+1];(e>0||x!==0)&&(h.push(T,P,N),w+=3),(t>0||x!==r-1)&&(h.push(P,F,N),w+=3)}c.addGroup(p,w,0),p+=w}function S(M){let b=_,w=new Se,A=new D,R=0,x=M===!0?e:t,T=M===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),_++;let P=_;for(let F=0;F<=n;F++){let G=F/n*l+o,V=Math.cos(G),k=Math.sin(G);A.x=x*k,A.y=m*T,A.z=x*V,u.push(A.x,A.y,A.z),d.push(0,T,0),w.x=V*.5+.5,w.y=k*.5*T+.5,f.push(w.x,w.y),_++}for(let F=0;F<n;F++){let N=b+F,G=P+F;M===!0?h.push(G,G+1,N):h.push(G+1,G,N),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ns=class s extends Bt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let S=0;S<c;S++){let M=S*u-r;_.push(M,-y,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),w=y+1+c*p;f.push(S,M,w),f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Na=class s extends Bt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){let y=[],S=p/i,M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let w=b/t;u.x=-e*Math.cos(n+w*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(n+w*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+M,1-S),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let S=h[p][y+1],M=h[p][y],b=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(S,M,w),(p!==i-1||l<Math.PI)&&f.push(M,b,w)}this.setIndex(f),this.setAttribute("position",new rt(_,3)),this.setAttribute("normal",new rt(g,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Sl=class extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ki=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ua=class extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Tl=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function al(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var Fs=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wl=class extends Fs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xh,endingEnd:Xh}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yh:r=e,o=2*t-i;break;case qh:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:a=e,l=2*i-t;break;case qh:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-f)*m+(1.5+f)*g+.5*_,M=f*m-f*g;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+y*a[c+b]+S*a[l+b]+M*a[u+b];return r}},Al=class extends Fs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Cl=class extends Fs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ai=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Sg(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ol,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=ul;var ss=class extends Ai{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ya;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends Ai{constructor(e,t,i,n){super(e,t,i,n)}};Rl.prototype.ValueTypeName="color";var Pl=class extends Ai{constructor(e,t,i,n){super(e,t,i,n)}};Pl.prototype.ValueTypeName="number";var Il=class extends Fs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ba=class extends Ai{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Ai{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=ya;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Ai{constructor(e,t,i,n){super(e,t,i,n)}};Dl.prototype.ValueTypeName="vector";var Ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ll=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yp=new Ll,Wr=(()=>{class s{constructor(t){this.manager=t!==void 0?t:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let n=this;return new Promise(function(r,a){n.load(t,r,i,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return s.DEFAULT_MATERIAL_NAME="__DEFAULT",s})(),Cn={},Jh=class extends Error{constructor(e,t){super(e),this.response=t}},za=class extends Wr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ar.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:i,onError:n});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Cn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,g=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:M})=>{if(S)p.close();else{g+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,A=h.length;w<A;w++){let R=h[w];R.onProgress&&R.onProgress(b)}p.enqueue(M),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Jh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ar.add(`file:${e}`,c);let h=Cn[e];delete Cn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Cn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Er=new WeakMap,Ol=class extends Wr{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ar.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Er.get(a);u===void 0&&(u=[],Er.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=Cr("img");function l(){h(),t&&t(this);let u=Er.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Er.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),Ar.remove(`image:${e}`);let d=Er.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}Er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ar.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var On=class extends Wr{constructor(e){super(e)}load(e,t,i,n){let r=new fi,a=new Ol(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},ka=class extends ti{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Gh=new ut,Ff=new D,Nf=new D,$h=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Br=class extends Ra{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jh=class extends $h{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zr=class extends ka{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Va=class extends ka{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fl=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bu="\\[\\]\\.:\\/",o_=new RegExp("["+bu+"]","g"),Su="[^"+bu+"]",l_="[^"+bu.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",Su),h_=/(WCOD+)?/.source.replace("WCOD",l_),u_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),f_=new RegExp("^"+c_+h_+u_+d_+"$"),p_=["material","materials","bones","map"],Qh=class{constructor(e,t,i){let n=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=(()=>{class s{constructor(t,i,n){this.path=i,this.parsedPath=n||s.parseTrackName(i),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,i,n):new s(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o_,"")}static parseTrackName(t){let i=f_.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);p_.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===i||l.uuid===i)return l;let c=n(l.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,n=i.objectName,r=i.propertyName,a=i.propertyIndex;if(t||(t=s.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=i.objectIndex;switch(n){case"materials":if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[r];if(o===void 0){let h=i.nodeName;Ce("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=Qh,s})();yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JS=new Float32Array(1);var kr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ha=class extends an{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Tu(s,e,t,i){let n=m_(i);switch(t){case pu:return s*e;case gu:return s*e/n.components*n.byteLength;case $l:return s*e/n.components*n.byteLength;case Us:return s*e*2/n.components*n.byteLength;case jl:return s*e*2/n.components*n.byteLength;case mu:return s*e*3/n.components*n.byteLength;case Ui:return s*e*4/n.components*n.byteLength;case Ql:return s*e*4/n.components*n.byteLength;case qa:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tc:case nc:return Math.max(s,16)*Math.max(e,8)/4;case ec:case ic:return Math.max(s,8)*Math.max(e,8)/2;case sc:case rc:case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:case cc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ec:case wc:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cc:case Rc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pc:case Ic:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(s){switch(s){case di:case hu:return{byteLength:1,components:1};case Hr:case uu:case cn:return{byteLength:2,components:1};case Kl:case Jl:return{byteLength:2,components:4};case $i:case Zl:case ji:return{byteLength:4,components:1};case du:case fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function Gp(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function g_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var __=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:__,alphahash_pars_fragment:x_,alphamap_fragment:v_,alphamap_pars_fragment:y_,alphatest_fragment:M_,alphatest_pars_fragment:b_,aomap_fragment:S_,aomap_pars_fragment:T_,batching_pars_vertex:E_,batching_vertex:w_,begin_vertex:A_,beginnormal_vertex:C_,bsdfs:R_,iridescence_fragment:P_,bumpmap_pars_fragment:I_,clipping_planes_fragment:D_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:O_,clipping_planes_vertex:F_,color_fragment:N_,color_pars_fragment:U_,color_pars_vertex:B_,color_vertex:z_,common:k_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:H_,displacementmap_pars_vertex:G_,displacementmap_vertex:W_,emissivemap_fragment:X_,emissivemap_pars_fragment:Y_,colorspace_fragment:q_,colorspace_pars_fragment:Z_,envmap_fragment:K_,envmap_common_pars_fragment:J_,envmap_pars_fragment:$_,envmap_pars_vertex:j_,envmap_physical_pars_fragment:c0,envmap_vertex:Q_,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:i0,fog_pars_fragment:n0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:d0,lights_phong_pars_fragment:f0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:_0,lights_fragment_end:x0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:b0,map_fragment:S0,map_pars_fragment:T0,map_particle_fragment:E0,map_particle_pars_fragment:w0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:P0,morphnormal_vertex:I0,morphtarget_pars_vertex:D0,morphtarget_vertex:L0,normal_fragment_begin:O0,normal_fragment_maps:F0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:H0,iridescence_pars_fragment:G0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:Y0,project_vertex:q0,dithering_fragment:Z0,dithering_pars_fragment:K0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:ix,skinning_pars_vertex:nx,skinning_vertex:sx,skinnormal_vertex:rx,specularmap_fragment:ax,specularmap_pars_fragment:ox,tonemapping_fragment:lx,tonemapping_pars_fragment:cx,transmission_fragment:hx,transmission_pars_fragment:ux,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:_x,backgroundCube_vert:xx,backgroundCube_frag:vx,cube_vert:yx,cube_frag:Mx,depth_vert:bx,depth_frag:Sx,distance_vert:Tx,distance_frag:Ex,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Cx,linedashed_frag:Rx,meshbasic_vert:Px,meshbasic_frag:Ix,meshlambert_vert:Dx,meshlambert_frag:Lx,meshmatcap_vert:Ox,meshmatcap_frag:Fx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Bx,meshphong_frag:zx,meshphysical_vert:kx,meshphysical_frag:Vx,meshtoon_vert:Hx,meshtoon_frag:Gx,points_vert:Wx,points_frag:Xx,shadow_vert:Yx,shadow_frag:qx,sprite_vert:Zx,sprite_frag:Kx},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},un={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};un.physical={uniforms:Kt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var Fc={r:0,b:0,g:0},zs=new Zi,Jx=new ut;function $x(s,e,t,i,n,r,a){let o=new Le(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function g(S){let M=!1,b=_(S);b===null?p(o,l):b&&b.isColor&&(p(b,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,M){let b=_(M);b&&(b.isCubeTexture||b.mapping===Xa)?(h===void 0&&(h=new Ye(new Lr(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Bs(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),zs.copy(M.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(zs)),h.material.toneMapped=He.getTransfer(b.colorSpace)!==Je,(u!==b||d!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ye(new ns(2,2),new wi({name:"BackgroundMaterial",uniforms:Bs(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=He.getTransfer(b.colorSpace)!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Fc,Mu(s)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,M,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m,dispose:y}}function jx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(T,P,F,N,G){let V=!1,k=u(N,F,P);r!==k&&(r=k,c(r.object)),V=f(T,N,F,G),V&&_(T,N,F,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(T,P,F,N),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function h(T){return s.deleteVertexArray(T)}function u(T,P,F){let N=F.wireframe===!0,G=i[T.id];G===void 0&&(G={},i[T.id]=G);let V=G[P.id];V===void 0&&(V={},G[P.id]=V);let k=V[N];return k===void 0&&(k=d(l()),V[N]=k),k}function d(T){let P=[],F=[],N=[];for(let G=0;G<t;G++)P[G]=0,F[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:N,object:T,attributes:{},index:null}}function f(T,P,F,N){let G=r.attributes,V=P.attributes,k=0,B=F.getAttributes();for(let q in B)if(B[q].location>=0){let te=G[q],re=V[q];if(re===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function _(T,P,F,N){let G={},V=P.attributes,k=0,B=F.getAttributes();for(let q in B)if(B[q].location>=0){let te=V[q];te===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(te=T.instanceColor));let re={};re.attribute=te,te&&te.data&&(re.data=te.data),G[q]=re,k++}r.attributes=G,r.attributesNum=k,r.index=N}function g(){let T=r.newAttributes;for(let P=0,F=T.length;P<F;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){let F=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;F[T]=1,N[T]===0&&(s.enableVertexAttribArray(T),N[T]=1),G[T]!==P&&(s.vertexAttribDivisor(T,P),G[T]=P)}function y(){let T=r.newAttributes,P=r.enabledAttributes;for(let F=0,N=P.length;F<N;F++)P[F]!==T[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function S(T,P,F,N,G,V,k){k===!0?s.vertexAttribIPointer(T,P,F,G,V):s.vertexAttribPointer(T,P,F,N,G,V)}function M(T,P,F,N){g();let G=N.attributes,V=F.getAttributes(),k=P.defaultAttributeValues;for(let B in V){let q=V[B];if(q.location>=0){let oe=G[B];if(oe===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor)),oe!==void 0){let te=oe.normalized,re=oe.itemSize,Ae=e.get(oe);if(Ae===void 0)continue;let Ie=Ae.buffer,Ge=Ae.type,We=Ae.bytesPerElement,Z=Ge===s.INT||Ge===s.UNSIGNED_INT||oe.gpuType===Zl;if(oe.isInterleavedBufferAttribute){let $=oe.data,pe=$.stride,Fe=oe.offset;if($.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)p(q.location+_e,$.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let _e=0;_e<q.locationSize;_e++)S(q.location+_e,re/q.locationSize,Ge,te,pe*We,(Fe+re/q.locationSize*_e)*We,Z)}else{if(oe.isInstancedBufferAttribute){for(let $=0;$<q.locationSize;$++)p(q.location+$,oe.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<q.locationSize;$++)m(q.location+$);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let $=0;$<q.locationSize;$++)S(q.location+$,re/q.locationSize,Ge,te,re*We,re/q.locationSize*$*We,Z)}}else if(k!==void 0){let te=k[B];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(q.location,te);break;case 3:s.vertexAttrib3fv(q.location,te);break;case 4:s.vertexAttrib4fv(q.location,te);break;default:s.vertexAttrib1fv(q.location,te)}}}}y()}function b(){R();for(let T in i){let P=i[T];for(let F in P){let N=P[F];for(let G in N)h(N[G].object),delete N[G];delete P[F]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;let P=i[T.id];for(let F in P){let N=P[F];for(let G in N)h(N[G].object),delete N[G];delete P[F]}delete i[T.id]}function A(T){for(let P in i){let F=i[P];if(F[T.id]===void 0)continue;let N=F[T.id];for(let G in N)h(N[G].object),delete N[G];delete F[T.id]}}function R(){x(),a=!0,r!==n&&(r=n,c(r.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Qx(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ev(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Ui&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ji&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:w}}function tv(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Fi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,M=p.clippingState||null;l.value=M,M=h(_,d,S,f);for(let b=0;b!==S;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==g;++S,M+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function iv(s){let e=new WeakMap;function t(a,o){return o===Xl?a.mapping=ls:o===Yl&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xl||o===Yl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ia(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var us=4,Mp=[.125,.215,.35,.446,.526,.582],Vs=20,nv=256,$a=new Br,bp=new Le,Eu=null,wu=0,Au=0,Cu=!1,sv=new D,Uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=sv}=r;Eu=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu,wu,Au),this._renderer.xr.enabled=Cu,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget(),wu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:cn,format:Ui,colorSpace:Is,depthBuffer:!1},n=Sp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rv(r)),this._blurMaterial=ov(r,e,t),this._ggxMaterial=av(r,e,t)}return n}_compileMaterial(e){let t=new Ye(new Bt,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,i,n,r){let l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(bp),u.toneMapping=Ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new Lr,new wa({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(bp),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;Xr(n,M*b,S>2?b:0,b,b),u.setRenderTarget(n),p&&u.render(g,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===ls||e.mapping===Ns;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,$a)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-us?i-_+us:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,Xr(r,m,p,3*g,2*g),n.setRenderTarget(r),n.render(o,$a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Xr(e,m,p,3*g,2*g),n.setRenderTarget(e),n.render(o,$a)}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[n];u.material=c;let d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Vs;m>Vs&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);let p=[],y=0;for(let A=0;A<Vs;++A){let R=A/g,x=Math.exp(-R*R/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;let M=this._sizeLods[n],b=3*M*(n>S-us?n-S+us:0),w=4*(this._cubeSize-M);Xr(t,b,w,3*M,2*M),l.setRenderTarget(t),l.render(u,$a)}};function rv(s){let e=[],t=[],i=[],n=s,r=s-us+1+Mp.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-us?l=Mp[a-s+us-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),S=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,R=w>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,g*_*w),S.set(d,m*_*w);let T=[w,w,w,w,w,w];M.set(T,p*_*w)}let b=new Bt;b.setAttribute("position",new ui(y,g)),b.setAttribute("uv",new ui(S,m)),b.setAttribute("faceIndex",new ui(M,p)),i.push(new Ye(b,null)),n>us&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Sp(s,e,t){let i=new ei(s,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function av(s,e,t){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ov(s,e,t){let i=new Float32Array(Vs),n=new D(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Tp(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ep(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lv(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xl||l===Yl,h=l===ls||l===Ns;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Uc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Uc(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function cv(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Pr("WebGLRenderer: "+i+" extension not supported."),n}}}function hv(s,e,t,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let S=0,M=y.length;S<M;S+=3){let b=y[S+0],w=y[S+1],A=y[S+2];d.push(b,w,w,A,A,b)}}else if(_!==void 0){let y=_.array;g=_.version;for(let S=0,M=y.length/3-1;S<M;S+=3){let b=S+0,w=S+1,A=S+2;d.push(b,w,w,A,A,b)}}else return;let m=new(vu(d)?Ca:Aa)(d,1);m.version=g;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function uv(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(i,f,r,d*a,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function fv(s,e,t){let i=new WeakMap,n=new pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*w*4*u),R=new Ta(A,b,w,u);R.type=ji,R.needsUpdate=!0;let x=M*4;for(let P=0;P<u;P++){let F=p[P],N=y[P],G=S[P],V=b*w*4*P;for(let k=0;k<F.count;k++){let B=k*x;_===!0&&(n.fromBufferAttribute(F,k),A[V+B+0]=n.x,A[V+B+1]=n.y,A[V+B+2]=n.z,A[V+B+3]=0),g===!0&&(n.fromBufferAttribute(N,k),A[V+B+4]=n.x,A[V+B+5]=n.y,A[V+B+6]=n.z,A[V+B+7]=0),m===!0&&(n.fromBufferAttribute(G,k),A[V+B+8]=n.x,A[V+B+9]=n.y,A[V+B+10]=n.z,A[V+B+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new Se(b,w)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function pv(s,e,t,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var mv={[su]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[Wa]:"ACES_FILMIC_TONE_MAPPING",[lu]:"AGX_TONE_MAPPING",[cu]:"NEUTRAL_TONE_MAPPING",[ou]:"CUSTOM_TONE_MAPPING"};function gv(s,e,t,i,n){let r=new ei(e,t,{type:s,depthBuffer:i,stencilBuffer:n}),a=new ei(e,t,{type:cn,depthBuffer:!1,stencilBuffer:!1}),o=new Bt;o.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new rt([0,2,0,0,2,0],2));let l=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ye(o,l),h=new Br(-1,1,1,-1,0,1),u=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(y,S){r.setSize(y,S),a.setSize(y,S);for(let M=0;M<m.length;M++){let b=m[M];b.setSize&&b.setSize(y,S)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let S=r.width,M=r.height;for(let b=0;b<m.length;b++){let w=m[b];w.setSize&&w.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===Ji&&m.length===0)return!1;if(g=S,S!==null){let M=S.width,b=S.height;(r.width!==M||r.height!==b)&&this.setSize(M,b)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Ji,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=_,f=!0;let M=r,b=a;for(let w=0;w<m.length;w++){let A=m[w];if(A.enabled!==!1&&(A.render(y,b,M,S),A.needsSwap!==!1)){let R=M;M=b,b=R}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},He.getTransfer(u)===Je&&(l.defines.SRGB_TRANSFER="");let w=mv[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Wp=new fi,Iu=new is(1,1),Xp=new Ta,Yp=new ml,qp=new Pa,wp=[],Ap=[],Cp=new Float32Array(16),Rp=new Float32Array(9),Pp=new Float32Array(4);function qr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=wp[n];if(r===void 0&&(r=new Float32Array(n),wp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function kc(s,e){let t=Ap[e];t===void 0&&(t=new Int32Array(e),Ap[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function _v(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function vv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function yv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Mv(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Pp.set(i),s.uniformMatrix2fv(this.addr,!1,Pp),Pt(t,i)}}function bv(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Rp.set(i),s.uniformMatrix3fv(this.addr,!1,Rp),Pt(t,i)}}function Sv(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Cp.set(i),s.uniformMatrix4fv(this.addr,!1,Cp),Pt(t,i)}}function Tv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ev(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function wv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function Cv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Rv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function Pv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Dv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Iu.compareFunction=t.isReversedDepthBuffer()?Oc:Lc,r=Iu):r=Wp,t.setTexture2D(e||r,n)}function Lv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Yp,n)}function Ov(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||qp,n)}function Fv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Xp,n)}function Nv(s){switch(s){case 5126:return _v;case 35664:return xv;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return bv;case 35676:return Sv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Cv;case 36294:return Rv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Fv}}function Uv(s,e){s.uniform1fv(this.addr,e)}function Bv(s,e){let t=qr(e,this.size,2);s.uniform2fv(this.addr,t)}function zv(s,e){let t=qr(e,this.size,3);s.uniform3fv(this.addr,t)}function kv(s,e){let t=qr(e,this.size,4);s.uniform4fv(this.addr,t)}function Vv(s,e){let t=qr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hv(s,e){let t=qr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gv(s,e){let t=qr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wv(s,e){s.uniform1iv(this.addr,e)}function Xv(s,e){s.uniform2iv(this.addr,e)}function Yv(s,e){s.uniform3iv(this.addr,e)}function qv(s,e){s.uniform4iv(this.addr,e)}function Zv(s,e){s.uniform1uiv(this.addr,e)}function Kv(s,e){s.uniform2uiv(this.addr,e)}function Jv(s,e){s.uniform3uiv(this.addr,e)}function $v(s,e){s.uniform4uiv(this.addr,e)}function jv(s,e,t){let i=this.cache,n=e.length,r=kc(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Iu:a=Wp;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function Qv(s,e,t){let i=this.cache,n=e.length,r=kc(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Yp,r[a])}function ey(s,e,t){let i=this.cache,n=e.length,r=kc(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||qp,r[a])}function ty(s,e,t){let i=this.cache,n=e.length,r=kc(t,n);Rt(i,r)||(s.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Xp,r[a])}function iy(s){switch(s){case 5126:return Uv;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Vv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return qv;case 5125:return Zv;case 36294:return Kv;case 36295:return Jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}var Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nv(t.type)}},Lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iy(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Ru=/(\w+)(\])?(\[|\.)?/g;function Ip(s,e){s.seq.push(e),s.map[e.id]=e}function ny(s,e,t){let i=s.name,n=i.length;for(Ru.lastIndex=0;;){let r=Ru.exec(i),a=Ru.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ip(t,c===void 0?new Du(o,s,e):new Lu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Ou(o),Ip(t,u)),t=u}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ny(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Dp(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var sy=37297,ry=0;function ay(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Lp=new Oe;function oy(s){He._getMatrix(Lp,He.workingColorSpace,s);let e=`mat3( ${Lp.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(s)){case Ma:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Op(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ay(s.getShaderSource(e),o)}else return r}function ly(s,e){let t=oy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cy={[su]:"Linear",[ru]:"Reinhard",[au]:"Cineon",[Wa]:"ACESFilmic",[lu]:"AgX",[cu]:"Neutral",[ou]:"Custom"};function hy(s,e){let t=cy[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nc=new D;function uy(){He.getLuminanceCoefficients(Nc);let s=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function fy(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function py(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Qa(s){return s!==""}function Fp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var my=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(s){return s.replace(my,_y)}var gy=new Map;function _y(s,e){let t=Ne[e];if(t===void 0){let i=gy.get(e);if(i!==void 0)t=Ne[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fu(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Up(s){return s.replace(xy,vy)}function vy(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Bp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var yy={[Ga]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function My(s){return yy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var by={[ls]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function Sy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":by[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ty={[Ns]:"ENVMAP_MODE_REFRACTION"};function Ey(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ty[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wy={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function Ay(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wy[s.combine]||"ENVMAP_BLENDING_NONE"}function Cy(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ry(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=My(t),c=Sy(t),h=Ey(t),u=Ay(t),d=Cy(t),f=dy(t),_=fy(r),g=n.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qa).join(`
`),p.length>0&&(p+=`
`)):(m=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),p=[Bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Ji?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ly("linearToOutputTexel",t.outputColorSpace),uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),a=Fu(a),a=Fp(a,t),a=Np(a,t),o=Fu(o),o=Fp(o,t),o=Np(o,t),a=Up(a),o=Up(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+a,M=y+p+o,b=Dp(n,n.VERTEX_SHADER,S),w=Dp(n,n.FRAGMENT_SHADER,M);n.attachShader(g,b),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let F=n.getProgramInfoLog(g)||"",N=n.getShaderInfoLog(b)||"",G=n.getShaderInfoLog(w)||"",V=F.trim(),k=N.trim(),B=G.trim(),q=!0,oe=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,b,w);else{let te=Op(n,b,"vertex"),re=Op(n,w,"fragment");Ce("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+te+`
`+re)}else V!==""?we("WebGLProgram: Program Info Log:",V):(k===""||B==="")&&(oe=!1);oe&&(P.diagnostics={runnable:q,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}n.deleteShader(b),n.deleteShader(w),R=new Yr(n,g),x=py(n,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(g,sy)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}var Py=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Uu(e),t.set(e,i)),i}},Uu=class{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}};function Iy(s,e,t,i,n,r,a){let o=new Ea,l=new Nu,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,P,F,N){let G=F.fog,V=N.geometry,k=x.isMeshStandardMaterial?F.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),q=B&&B.mapping===Xa?B.image.height:null,oe=_[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=te!==void 0?te.length:0,Ae=0;V.morphAttributes.position!==void 0&&(Ae=1),V.morphAttributes.normal!==void 0&&(Ae=2),V.morphAttributes.color!==void 0&&(Ae=3);let Ie,Ge,We,Z;if(oe){let je=un[oe];Ie=je.vertexShader,Ge=je.fragmentShader}else Ie=x.vertexShader,Ge=x.fragmentShader,l.update(x),We=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);let $=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,qe=!!x.map,Lt=!!x.matcap,Xe=!!B,$e=!!x.aoMap,nt=!!x.lightMap,Ue=!!x.bumpMap,Tt=!!x.normalMap,I=!!x.displacementMap,Et=!!x.emissiveMap,Ke=!!x.metalnessMap,lt=!!x.roughnessMap,ve=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,Y=x.sheen>0,J=x.transmission>0,X=ve&&!!x.anisotropyMap,Me=C&&!!x.clearcoatMap,ne=C&&!!x.clearcoatNormalMap,xe=C&&!!x.clearcoatRoughnessMap,Pe=O&&!!x.iridescenceMap,Q=O&&!!x.iridescenceThicknessMap,ae=Y&&!!x.sheenColorMap,ge=Y&&!!x.sheenRoughnessMap,ye=!!x.specularMap,se=!!x.specularColorMap,Be=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,ue=J&&!!x.thicknessMap,ee=!!x.gradientMap,de=!!x.alphaMap,j=x.alphaTest>0,K=!!x.alphaHash,ie=!!x.extensions,De=Ji;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(De=s.toneMapping);let ct={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Ge,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Is,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:Lt,envMap:Xe,envMapMode:Xe&&B.mapping,envMapCubeUVHeight:q,aoMap:$e,lightMap:nt,bumpMap:Ue,normalMap:Tt,displacementMap:I,emissiveMap:Et,normalMapObjectSpace:Tt&&x.normalMapType===lp,normalMapTangentSpace:Tt&&x.normalMapType===Dc,metalnessMap:Ke,roughnessMap:lt,anisotropy:ve,anisotropyMap:X,clearcoat:C,clearcoatMap:Me,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:v,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ae,sheenRoughnessMap:ge,specularMap:ye,specularColorMap:se,specularIntensityMap:Be,transmission:J,transmissionMap:L,thicknessMap:ue,gradientMap:ee,opaque:x.transparent===!1&&x.blending===Cs&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:K,combine:x.combine,mapUv:qe&&g(x.map.channel),aoMapUv:$e&&g(x.aoMap.channel),lightMapUv:nt&&g(x.lightMap.channel),bumpMapUv:Ue&&g(x.bumpMap.channel),normalMapUv:Tt&&g(x.normalMap.channel),displacementMapUv:I&&g(x.displacementMap.channel),emissiveMapUv:Et&&g(x.emissiveMap.channel),metalnessMapUv:Ke&&g(x.metalnessMap.channel),roughnessMapUv:lt&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(x.sheenRoughnessMap.channel),specularMapUv:ye&&g(x.specularMap.channel),specularColorMapUv:se&&g(x.specularColorMap.channel),specularIntensityMapUv:Be&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:ue&&g(x.thicknessMap.channel),alphaMapUv:de&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Tt||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(qe||de),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&He.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&He.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===ni,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(T,x),S(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){let T=_[x.type],P;if(T){let F=un[T];P=xp.clone(F.uniforms)}else P=x.uniforms;return P}function b(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Ry(s,T,x,r),h.push(P),u.set(T,P)),P}function w(x){if(--x.usedTimes===0){let T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function Dy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Ly(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kp(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Ly),i.length>1&&i.sort(d||zp),n.length>1&&n.sort(d||zp)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Oy(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new kp,s.set(i,[a])):n>=r.length?(a=new kp,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Ny(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Uy=0;function By(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zy(s){let e=new Fy,t=Ny(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,r=new ut,a=new ut;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,S=0,M=0,b=0,w=0,A=0;c.sort(By);for(let x=0,T=c.length;x<T;x++){let P=c[x],F=P.color,N=P.intensity,G=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Us?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*N,u+=F.g*N,d+=F.b*N;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],N);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=k,f++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(F).multiplyScalar(N),k.distance=G,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[g]=k;let B=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,B.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[g]=B.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=V,M++}g++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(F).multiplyScalar(N),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let B=P.shadow,q=t.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=k,_++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(N),k.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==M||R.numSpotMaps!==b||R.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=M,R.numSpotMaps=b,R.numLightProbes=A,i.version=Uy++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let S=c[p];if(S.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Vp(s){let e=new zy(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ky(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new Vp(s),e.set(n,[o])):r>=a.length?(o=new Vp(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Wy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Hp=new ut,ja=new D,Pu=new D;function Xy(s,e,t){let i=new Nr,n=new Se,r=new Se,a=new pt,o=new Tl,l=new El,c={},h=t.maxTextureSize,u={[Dn]:ni,[ni]:Dn,[on]:on},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Vy,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Bt;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ye(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let p=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===zf&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ga);let x=s.getRenderTarget(),T=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=p!==this.type;N&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(V=>V.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,V=w.length;G<V;G++){let k=w[G],B=k.shadow;if(B===void 0){we("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let q=B.getFrameExtents();if(n.multiply(q),r.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/q.x),n.x=r.x*q.x,B.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/q.y),n.y=r.y*q.y,B.mapSize.y=r.y)),B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Vr){if(k.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ei(n.x,n.y,{format:Us,type:cn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new is(n.x,n.y,ji),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=rn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut}else{k.isPointLight?(B.map=new Ia(n.x),B.map.depthTexture=new bl(n.x,$i)):(B.map=new ei(n.x,n.y),B.map.depthTexture=new is(n.x,n.y,$i)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=rn;let te=s.state.buffers.depth.getReversed();this.type===Ga?(B.map.depthTexture.compareFunction=te?Oc:Lc,B.map.depthTexture.minFilter=Vt,B.map.depthTexture.magFilter=Vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut)}B.camera.updateProjectionMatrix()}let oe=B.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<oe;te++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,te),s.clear();else{te===0&&(s.setRenderTarget(B.map),s.clear());let re=B.getViewport(te);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),F.viewport(a)}if(k.isPointLight){let re=B.camera,Ae=B.matrix,Ie=k.distance||re.far;Ie!==re.far&&(re.far=Ie,re.updateProjectionMatrix()),ja.setFromMatrixPosition(k.matrixWorld),re.position.copy(ja),Pu.copy(re.position),Pu.add(Gy[te]),re.up.copy(Wy[te]),re.lookAt(Pu),re.updateMatrixWorld(),Ae.makeTranslation(-ja.x,-ja.y,-ja.z),Hp.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hp,re.coordinateSystem,re.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),M(A,R,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Vr&&y(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,T,P)};function y(w,A){let R=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(n.x,n.y,{format:Us,type:cn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,R,f,g,null)}function S(w,A,R,x){let T=null,P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=T.uuid,N=A.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let V=G[N];V===void 0&&(V=T.clone(),G[N]=V,A.addEventListener("dispose",b)),T=V}if(T.visible=A.visible,T.wireframe=A.wireframe,x===Vr?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let F=s.properties.get(T);F.light=R}return T}function M(w,A,R,x,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Vr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let N=e.update(w),G=w.material;if(Array.isArray(G)){let V=N.groups;for(let k=0,B=V.length;k<B;k++){let q=V[k],oe=G[q.materialIndex];if(oe&&oe.visible){let te=S(w,oe,x,T);w.onBeforeShadow(s,w,A,R,N,te,q),s.renderBufferDirect(R,null,N,te,w,q),w.onAfterShadow(s,w,A,R,N,te,q)}}}else if(G.visible){let V=S(w,G,x,T);w.onBeforeShadow(s,w,A,R,N,V,null),s.renderBufferDirect(R,null,N,V,w,null),w.onAfterShadow(s,w,A,R,N,V,null)}}let F=w.children;for(let N=0,G=F.length;N<G;N++)M(F[N],A,R,x,T)}function b(w){w.target.removeEventListener("dispose",b);for(let R in c){let x=c[R],T=w.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}var Yy={[Ul]:Bl,[zl]:Hl,[kl]:Gl,[Rs]:Vl,[Bl]:Ul,[Hl]:zl,[Gl]:kl,[Vl]:Rs};function qy(s,e){function t(){let L=!1,ue=new pt,ee=null,de=new pt(0,0,0,0);return{setMask:function(j){ee!==j&&!L&&(s.colorMask(j,j,j,j),ee=j)},setLocked:function(j){L=j},setClear:function(j,K,ie,De,ct){ct===!0&&(j*=De,K*=De,ie*=De),ue.set(j,K,ie,De),de.equals(ue)===!1&&(s.clearColor(j,K,ie,De),de.copy(ue))},reset:function(){L=!1,ee=null,de.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,ee=null,de=null,j=null;return{setReversed:function(K){if(ue!==K){let ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),ue=K;let De=j;j=null,this.setClear(De)}},getReversed:function(){return ue},setTest:function(K){K?$(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(K){ee!==K&&!L&&(s.depthMask(K),ee=K)},setFunc:function(K){if(ue&&(K=Yy[K]),de!==K){switch(K){case Ul:s.depthFunc(s.NEVER);break;case Bl:s.depthFunc(s.ALWAYS);break;case zl:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case kl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Hl:s.depthFunc(s.GREATER);break;case Gl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=K}},setLocked:function(K){L=K},setClear:function(K){j!==K&&(ue&&(K=1-K),s.clearDepth(K),j=K)},reset:function(){L=!1,ee=null,de=null,j=null,ue=!1}}}function n(){let L=!1,ue=null,ee=null,de=null,j=null,K=null,ie=null,De=null,ct=null;return{setTest:function(je){L||(je?$(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(je){ue!==je&&!L&&(s.stencilMask(je),ue=je)},setFunc:function(je,en,_n){(ee!==je||de!==en||j!==_n)&&(s.stencilFunc(je,en,_n),ee=je,de=en,j=_n)},setOp:function(je,en,_n){(K!==je||ie!==en||De!==_n)&&(s.stencilOp(je,en,_n),K=je,ie=en,De=_n)},setLocked:function(je){L=je},setClear:function(je){ct!==je&&(s.clearStencil(je),ct=je)},reset:function(){L=!1,ue=null,ee=null,de=null,j=null,K=null,ie=null,De=null,ct=null}}}let r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,S=null,M=null,b=null,w=null,A=new Le(0,0,0),R=0,x=!1,T=null,P=null,F=null,N=null,G=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,B=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=B>=2);let oe=null,te={},re=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),Ie=new pt().fromArray(re),Ge=new pt().fromArray(Ae);function We(L,ue,ee,de){let j=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ee;ie++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,j):s.texImage2D(ue+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,j);return K}let Z={};Z[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(s.DEPTH_TEST),a.setFunc(Rs),Ue(!1),Tt(eu),$(s.CULL_FACE),$e(ln);function $(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function pe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Fe(L,ue){return u[L]!==ue?(s.bindFramebuffer(L,ue),u[L]=ue,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ue),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(L,ue){let ee=f,de=!1;if(L){ee=d.get(ue),ee===void 0&&(ee=[],d.set(ue,ee));let j=L.textures;if(ee.length!==j.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ie=j.length;K<ie;K++)ee[K]=s.COLOR_ATTACHMENT0+K;ee.length=j.length,de=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,de=!0);de&&s.drawBuffers(ee)}function qe(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Lt={[jn]:s.FUNC_ADD,[Vf]:s.FUNC_SUBTRACT,[Hf]:s.FUNC_REVERSE_SUBTRACT};Lt[Gf]=s.MIN,Lt[Wf]=s.MAX;let Xe={[Xf]:s.ZERO,[Yf]:s.ONE,[qf]:s.SRC_COLOR,[ll]:s.SRC_ALPHA,[Qf]:s.SRC_ALPHA_SATURATE,[$f]:s.DST_COLOR,[Kf]:s.DST_ALPHA,[Zf]:s.ONE_MINUS_SRC_COLOR,[cl]:s.ONE_MINUS_SRC_ALPHA,[jf]:s.ONE_MINUS_DST_COLOR,[Jf]:s.ONE_MINUS_DST_ALPHA,[ep]:s.CONSTANT_COLOR,[tp]:s.ONE_MINUS_CONSTANT_COLOR,[ip]:s.CONSTANT_ALPHA,[np]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(L,ue,ee,de,j,K,ie,De,ct,je){if(L===ln){g===!0&&(pe(s.BLEND),g=!1);return}if(g===!1&&($(s.BLEND),g=!0),L!==kf){if(L!==m||je!==x){if((p!==jn||M!==jn)&&(s.blendEquation(s.FUNC_ADD),p=jn,M=jn),je)switch(L){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFunc(s.ONE,s.ONE);break;case iu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ce("WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case iu:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",L);break}y=null,S=null,b=null,w=null,A.set(0,0,0),R=0,m=L,x=je}return}j=j||ue,K=K||ee,ie=ie||de,(ue!==p||j!==M)&&(s.blendEquationSeparate(Lt[ue],Lt[j]),p=ue,M=j),(ee!==y||de!==S||K!==b||ie!==w)&&(s.blendFuncSeparate(Xe[ee],Xe[de],Xe[K],Xe[ie]),y=ee,S=de,b=K,w=ie),(De.equals(A)===!1||ct!==R)&&(s.blendColor(De.r,De.g,De.b,ct),A.copy(De),R=ct),m=L,x=!1}function nt(L,ue){L.side===on?pe(s.CULL_FACE):$(s.CULL_FACE);let ee=L.side===ni;ue&&(ee=!ee),Ue(ee),L.blending===Cs&&L.transparent===!1?$e(ln):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){T!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),T=L)}function Tt(L){L!==Uf?($(s.CULL_FACE),L!==P&&(L===eu?s.cullFace(s.BACK):L===Bf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),P=L}function I(L){L!==F&&(k&&s.lineWidth(L),F=L)}function Et(L,ue,ee){L?($(s.POLYGON_OFFSET_FILL),(N!==ue||G!==ee)&&(s.polygonOffset(ue,ee),N=ue,G=ee)):pe(s.POLYGON_OFFSET_FILL)}function Ke(L){L?$(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function lt(L){L===void 0&&(L=s.TEXTURE0+V-1),oe!==L&&(s.activeTexture(L),oe=L)}function ve(L,ue,ee){ee===void 0&&(oe===null?ee=s.TEXTURE0+V-1:ee=oe);let de=te[ee];de===void 0&&(de={type:void 0,texture:void 0},te[ee]=de),(de.type!==L||de.texture!==ue)&&(oe!==ee&&(s.activeTexture(ee),oe=ee),s.bindTexture(L,ue||Z[L]),de.type=L,de.texture=ue)}function C(){let L=te[oe];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Y(){try{s.texSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function J(){try{s.texSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function ne(){try{s.texStorage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function xe(){try{s.texStorage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Pe(){try{s.texImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function ae(L){Ie.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ie.copy(L))}function ge(L){Ge.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function ye(L,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let de=ee.get(L);de===void 0&&(de=s.getUniformBlockIndex(ue,L.name),ee.set(L,de))}function se(L,ue){let de=c.get(ue).get(L);l.get(ue)!==de&&(s.uniformBlockBinding(ue,de,L.__bindingPointIndex),l.set(ue,de))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},oe=null,te={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,S=null,M=null,b=null,w=null,A=new Le(0,0,0),R=0,x=!1,T=null,P=null,F=null,N=null,G=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:pe,bindFramebuffer:Fe,drawBuffers:_e,useProgram:qe,setBlending:$e,setMaterial:nt,setFlipSided:Ue,setCullFace:Tt,setLineWidth:I,setPolygonOffset:Et,setScissorTest:Ke,activeTexture:lt,bindTexture:ve,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Pe,texImage3D:Q,updateUBOMapping:ye,uniformBlockBinding:se,texStorage2D:ne,texStorage3D:xe,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:ae,viewport:ge,reset:Be}}function Zy(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return f?new OffscreenCanvas(C,v):Cr("canvas")}function g(C,v,O){let Y=1,J=ve(C);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let X=Math.floor(Y*J.width),Me=Math.floor(Y*J.height);u===void 0&&(u=_(X,Me));let ne=v?_(X,Me):u;return ne.width=X,ne.height=Me,ne.getContext("2d").drawImage(C,0,0,X,Me),we("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Me+")."),ne}else return"data"in C&&we("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,v,O,Y,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),v===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){let Me=J?Ma:He.getTransfer(Y);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=Me===Je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(C,v){let O;return C?v===null||v===$i||v===Gr?O=s.DEPTH24_STENCIL8:v===ji?O=s.DEPTH32F_STENCIL8:v===Hr&&(O=s.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===Gr?O=s.DEPTH_COMPONENT24:v===ji?O=s.DEPTH_COMPONENT32F:v===Hr&&(O=s.DEPTH_COMPONENT16),O}function b(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&h.delete(v)}function A(C){let v=C.target;v.removeEventListener("dispose",A),T(v)}function R(C){let v=i.get(C);if(v.__webglInit===void 0)return;let O=C.source,Y=d.get(O);if(Y){let J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(C),Object.keys(Y).length===0&&d.delete(O)}i.remove(C)}function x(C){let v=i.get(C);s.deleteTexture(v.__webglTexture);let O=C.source,Y=d.get(O);delete Y[v.__cacheKey],a.memory.textures--}function T(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let Y=0,J=O.length;Y<J;Y++){let X=i.get(O[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(C)}let P=0;function F(){P=0}function N(){let C=P;return C>=n.maxTextures&&we("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function G(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){let O=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let Y=C.image;if(Y===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,C,v);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function k(C,v){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,v);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function B(C,v){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function q(C,v){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){$(O,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let oe={[Ps]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[hl]:s.MIRRORED_REPEAT},te={[Ut]:s.NEAREST,[ap]:s.NEAREST_MIPMAP_NEAREST,[Ya]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[ql]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},re={[cp]:s.NEVER,[pp]:s.ALWAYS,[hp]:s.LESS,[Lc]:s.LEQUAL,[up]:s.EQUAL,[Oc]:s.GEQUAL,[dp]:s.GREATER,[fp]:s.NOTEQUAL};function Ae(C,v){if(v.type===ji&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===ql||v.magFilter===Ya||v.magFilter===cs||v.minFilter===Vt||v.minFilter===ql||v.minFilter===Ya||v.minFilter===cs)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,oe[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,oe[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,oe[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,te[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==Ya&&v.minFilter!==cs||v.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let Y=v.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let X=G(v);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[X].usedTimes++;let Me=J[C.__cacheKey];Me!==void 0&&(J[C.__cacheKey].usedTimes--,Me.usedTimes===0&&x(v)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return O}function Ge(C,v,O){return Math.floor(Math.floor(C/O)/v)}function We(C,v,O,Y){let X=C.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,Y,v.data);else{X.sort((Q,ae)=>Q.start-ae.start);let Me=0;for(let Q=1;Q<X.length;Q++){let ae=X[Me],ge=X[Q],ye=ae.start+ae.count,se=Ge(ge.start,v.width,4),Be=Ge(ae.start,v.width,4);ge.start<=ye+1&&se===Be&&Ge(ge.start+ge.count-1,v.width,4)===se?ae.count=Math.max(ae.count,ge.start+ge.count-ae.start):(++Me,X[Me]=ge)}X.length=Me+1;let ne=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Q=0,ae=X.length;Q<ae;Q++){let ge=X[Q],ye=Math.floor(ge.start/4),se=Math.ceil(ge.count/4),Be=ye%v.width,L=Math.floor(ye/v.width),ue=se,ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Be,L,ue,ee,O,Y,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Z(C,v,O){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let J=Ie(C,v),X=v.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+O);let Me=i.get(X);if(X.version!==Me.__version||J===!0){t.activeTexture(s.TEXTURE0+O);let ne=He.getPrimaries(He.workingColorSpace),xe=v.colorSpace===Fn?null:He.getPrimaries(v.colorSpace),Pe=v.colorSpace===Fn||ne===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Q=g(v.image,!1,n.maxTextureSize);Q=lt(v,Q);let ae=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),ye=S(v.internalFormat,ae,ge,v.colorSpace,v.isVideoTexture);Ae(Y,v);let se,Be=v.mipmaps,L=v.isVideoTexture!==!0,ue=Me.__version===void 0||J===!0,ee=X.dataReady,de=b(v,Q);if(v.isDepthTexture)ye=M(v.format===hs,v.type),ue&&(L?t.texStorage2D(s.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,ae,ge,null));else if(v.isDataTexture)if(Be.length>0){L&&ue&&t.texStorage2D(s.TEXTURE_2D,de,ye,Be[0].width,Be[0].height);for(let j=0,K=Be.length;j<K;j++)se=Be[j],L?ee&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,se.width,se.height,ae,ge,se.data):t.texImage2D(s.TEXTURE_2D,j,ye,se.width,se.height,0,ae,ge,se.data);v.generateMipmaps=!1}else L?(ue&&t.texStorage2D(s.TEXTURE_2D,de,ye,Q.width,Q.height),ee&&We(v,Q,ae,ge)):t.texImage2D(s.TEXTURE_2D,0,ye,Q.width,Q.height,0,ae,ge,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,ye,Be[0].width,Be[0].height,Q.depth);for(let j=0,K=Be.length;j<K;j++)if(se=Be[j],v.format!==Ui)if(ae!==null)if(L){if(ee)if(v.layerUpdates.size>0){let ie=Tu(se.width,se.height,v.format,v.type);for(let De of v.layerUpdates){let ct=se.data.subarray(De*ie/se.data.BYTES_PER_ELEMENT,(De+1)*ie/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,De,se.width,se.height,1,ae,ct)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,se.width,se.height,Q.depth,ae,se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,ye,se.width,se.height,Q.depth,0,se.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,se.width,se.height,Q.depth,ae,ge,se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,ye,se.width,se.height,Q.depth,0,ae,ge,se.data)}else{L&&ue&&t.texStorage2D(s.TEXTURE_2D,de,ye,Be[0].width,Be[0].height);for(let j=0,K=Be.length;j<K;j++)se=Be[j],v.format!==Ui?ae!==null?L?ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,se.width,se.height,ae,se.data):t.compressedTexImage2D(s.TEXTURE_2D,j,ye,se.width,se.height,0,se.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ee&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,se.width,se.height,ae,ge,se.data):t.texImage2D(s.TEXTURE_2D,j,ye,se.width,se.height,0,ae,ge,se.data)}else if(v.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,ye,Q.width,Q.height,Q.depth),ee)if(v.layerUpdates.size>0){let j=Tu(Q.width,Q.height,v.format,v.type);for(let K of v.layerUpdates){let ie=Q.data.subarray(K*j/Q.data.BYTES_PER_ELEMENT,(K+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ae,ge,ie)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,ge,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,ae,ge,Q.data);else if(v.isData3DTexture)L?(ue&&t.texStorage3D(s.TEXTURE_3D,de,ye,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,ge,Q.data)):t.texImage3D(s.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,ae,ge,Q.data);else if(v.isFramebufferTexture){if(ue)if(L)t.texStorage2D(s.TEXTURE_2D,de,ye,Q.width,Q.height);else{let j=Q.width,K=Q.height;for(let ie=0;ie<de;ie++)t.texImage2D(s.TEXTURE_2D,ie,ye,j,K,0,ae,ge,null),j>>=1,K>>=1}}else if(Be.length>0){if(L&&ue){let j=ve(Be[0]);t.texStorage2D(s.TEXTURE_2D,de,ye,j.width,j.height)}for(let j=0,K=Be.length;j<K;j++)se=Be[j],L?ee&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,ae,ge,se):t.texImage2D(s.TEXTURE_2D,j,ye,ae,ge,se);v.generateMipmaps=!1}else if(L){if(ue){let j=ve(Q);t.texStorage2D(s.TEXTURE_2D,de,ye,j.width,j.height)}ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,ge,Q)}else t.texImage2D(s.TEXTURE_2D,0,ye,ae,ge,Q);m(v)&&p(Y),Me.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function $(C,v,O){if(v.image.length!==6)return;let Y=Ie(C,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);let X=i.get(J);if(J.version!==X.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);let Me=He.getPrimaries(He.workingColorSpace),ne=v.colorSpace===Fn?null:He.getPrimaries(v.colorSpace),xe=v.colorSpace===Fn||Me===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let K=0;K<6;K++)!Pe&&!Q?ae[K]=g(v.image[K],!0,n.maxCubemapSize):ae[K]=Q?v.image[K].image:v.image[K],ae[K]=lt(v,ae[K]);let ge=ae[0],ye=r.convert(v.format,v.colorSpace),se=r.convert(v.type),Be=S(v.internalFormat,ye,se,v.colorSpace),L=v.isVideoTexture!==!0,ue=X.__version===void 0||Y===!0,ee=J.dataReady,de=b(v,ge);Ae(s.TEXTURE_CUBE_MAP,v);let j;if(Pe){L&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Be,ge.width,ge.height);for(let K=0;K<6;K++){j=ae[K].mipmaps;for(let ie=0;ie<j.length;ie++){let De=j[ie];v.format!==Ui?ye!==null?L?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,De.width,De.height,ye,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Be,De.width,De.height,0,De.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,De.width,De.height,ye,se,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Be,De.width,De.height,0,ye,se,De.data)}}}else{if(j=v.mipmaps,L&&ue){j.length>0&&de++;let K=ve(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Be,K.width,K.height)}for(let K=0;K<6;K++)if(Q){L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ae[K].width,ae[K].height,ye,se,ae[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ae[K].width,ae[K].height,0,ye,se,ae[K].data);for(let ie=0;ie<j.length;ie++){let ct=j[ie].image[K].image;L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ct.width,ct.height,ye,se,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Be,ct.width,ct.height,0,ye,se,ct.data)}}else{L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,se,ae[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,ye,se,ae[K]);for(let ie=0;ie<j.length;ie++){let De=j[ie];L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ye,se,De.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Be,ye,se,De.image[K])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function pe(C,v,O,Y,J,X){let Me=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),xe=S(O.internalFormat,Me,ne,O.colorSpace),Pe=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!Pe.__hasExternalTextures){let ae=Math.max(1,v.width>>X),ge=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,X,xe,ae,ge,v.depth,0,Me,ne,null):t.texImage2D(J,X,xe,ae,ge,0,Me,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Et(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,Q.__webglTexture,0,I(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,Q.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(C,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){let Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,J),Me=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Et(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),X,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,C)}else{let Y=v.textures;for(let J=0;J<Y.length;J++){let X=Y[J],Me=r.convert(X.format,X.colorSpace),ne=r.convert(X.type),xe=S(X.internalFormat,Me,ne,X.colorSpace);Et(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),xe,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),xe,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,xe,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(C,v,O){let Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,v.depthTexture);let Pe=r.convert(v.depthTexture.format),Q=r.convert(v.depthTexture.type),ae;v.depthTexture.format===rn?ae=s.DEPTH_COMPONENT24:v.depthTexture.format===hs&&(ae=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,v.width,v.height,0,Pe,Q,null)}}else V(v.depthTexture,0);let X=J.__webglTexture,Me=I(v),ne=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,xe=v.depthTexture.format===hs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===rn)Et(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ne,X,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ne,X,0);else if(v.depthTexture.format===hs)Et(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ne,X,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,xe,ne,X,0);else throw new Error("Unknown depthTexture format")}function qe(C){let v=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)_e(v.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?_e(v.__webglFramebuffer[0],C,0):_e(v.__webglFramebuffer,C,0)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),Fe(v.__webglDepthbuffer[Y],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Fe(v.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(C,v,O){let Y=i.get(C);v!==void 0&&pe(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&qe(C)}function Xe(C){let v=C.texture,O=i.get(C),Y=i.get(v);C.addEventListener("dispose",A);let J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[ne][xe]=s.createFramebuffer()}else O.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)O.__webglFramebuffer[ne]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ne=0,xe=J.length;ne<xe;ne++){let Pe=i.get(J[ne]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Et(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<J.length;ne++){let xe=J[ne];O.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);let Pe=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),ae=S(xe.internalFormat,Pe,Q,xe.colorSpace,C.isXRRenderTarget===!0),ge=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ae,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(O.__webglFramebuffer[ne][xe],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else pe(O.__webglFramebuffer[ne],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ne=0,xe=J.length;ne<xe;ne++){let Pe=J[ne],Q=i.get(Pe),ae=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ae(ae,Pe),pe(O.__webglFramebuffer,C,Pe,s.COLOR_ATTACHMENT0+ne,ae,0),m(Pe)&&p(ae)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,Y.__webglTexture),Ae(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)pe(O.__webglFramebuffer[xe],C,v,s.COLOR_ATTACHMENT0,ne,xe);else pe(O.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,ne,0);m(v)&&p(ne),t.unbindTexture()}C.depthBuffer&&qe(C)}function $e(C){let v=C.textures;for(let O=0,Y=v.length;O<Y;O++){let J=v[O];if(m(J)){let X=y(C),Me=i.get(J).__webglTexture;t.bindTexture(X,Me),p(X),t.unbindTexture()}}}let nt=[],Ue=[];function Tt(C){if(C.samples>0){if(Et(C)===!1){let v=C.textures,O=C.width,Y=C.height,J=s.COLOR_BUFFER_BIT,X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=i.get(C),ne=v.length>1;if(ne)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let xe=C.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);let Q=i.get(v[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,s.NEAREST),l===!0&&(nt.length=0,Ue.length=0,nt.push(s.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(nt.push(X),Ue.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ue)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Me.__webglColorRenderbuffer[Pe]);let Q=i.get(v[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(n.maxSamples,C.samples)}function Et(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function lt(C,v){let O=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Is&&O!==Fn&&(He.getTransfer(O)===Je?(Y!==Ui||J!==di)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",O)),v}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Lt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ky(s,e){function t(i,n=Fn){let r,a=He.getTransfer(n);if(i===di)return s.UNSIGNED_BYTE;if(i===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===du)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===hu)return s.BYTE;if(i===uu)return s.SHORT;if(i===Hr)return s.UNSIGNED_SHORT;if(i===Zl)return s.INT;if(i===$i)return s.UNSIGNED_INT;if(i===ji)return s.FLOAT;if(i===cn)return s.HALF_FLOAT;if(i===pu)return s.ALPHA;if(i===mu)return s.RGB;if(i===Ui)return s.RGBA;if(i===rn)return s.DEPTH_COMPONENT;if(i===hs)return s.DEPTH_STENCIL;if(i===gu)return s.RED;if(i===$l)return s.RED_INTEGER;if(i===Us)return s.RG;if(i===jl)return s.RG_INTEGER;if(i===Ql)return s.RGBA_INTEGER;if(i===qa||i===Za||i===Ka||i===Ja)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===tc||i===ic||i===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===oc)return r.COMPRESSED_R11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return r.COMPRESSED_RG11_EAC;if(i===hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===yc||i===Mc||i===bc||i===Sc||i===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===wc||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ec)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wi({vertexShader:Jy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new ns(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends an{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new Bu,p={},y=t.getContextAttributes(),S=null,M=null,b=[],w=[],A=new Se,R=null,x=new Zt;x.viewport=new pt;let T=new Zt;T.viewport=new pt;let P=[x,T],F=new Fl,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let $=b[Z];return $===void 0&&($=new Or,b[Z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Z){let $=b[Z];return $===void 0&&($=new Or,b[Z]=$),$.getGripSpace()},this.getHand=function(Z){let $=b[Z];return $===void 0&&($=new Or,b[Z]=$),$.getHandSpace()};function V(Z){let $=w.indexOf(Z.inputSource);if($===-1)return;let pe=b[$];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,c||a),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",B);for(let Z=0;Z<b.length;Z++){let $=w[Z];$!==null&&(w[Z]=null,b[Z].disconnect($))}N=null,G=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(S),f=null,d=null,u=null,n=null,M=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=function(Z){return xo(this,null,function*(){if(n=Z,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",k),n.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=y.stencil?hs:rn,Fe=y.stencil?Gr:$i);let qe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ei(d.textureWidth,d.textureHeight,{format:Ui,type:di,depthTexture:new is(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,pe),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ei(f.framebufferWidth,f.framebufferHeight,{format:Ui,type:di,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),We.setContext(n),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let $=0;$<Z.removed.length;$++){let pe=Z.removed[$],Fe=w.indexOf(pe);Fe>=0&&(w[Fe]=null,b[Fe].disconnect(pe))}for(let $=0;$<Z.added.length;$++){let pe=Z.added[$],Fe=w.indexOf(pe);if(Fe===-1){for(let qe=0;qe<b.length;qe++)if(qe>=w.length){w.push(pe),Fe=qe;break}else if(w[qe]===null){w[qe]=pe,Fe=qe;break}if(Fe===-1)break}let _e=b[Fe];_e&&_e.connect(pe)}}let q=new D,oe=new D;function te(Z,$,pe){q.setFromMatrixPosition($.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);let Fe=q.distanceTo(oe),_e=$.projectionMatrix.elements,qe=pe.projectionMatrix.elements,Lt=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),$e=(_e[9]+1)/_e[5],nt=(_e[9]-1)/_e[5],Ue=(_e[8]-1)/_e[0],Tt=(qe[8]+1)/qe[0],I=Lt*Ue,Et=Lt*Tt,Ke=Fe/(-Ue+Tt),lt=Ke*-Ue;if($.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(Ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_e[10]===-1)Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ve=Lt+Ke,C=Xe+Ke,v=I-lt,O=Et+(Fe-lt),Y=$e*Xe/C*ve,J=nt*Xe/C*ve;Z.projectionMatrix.makePerspective(v,O,Y,J,ve,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,$){$===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices($.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let $=Z.near,pe=Z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=T.near=x.near=$,F.far=T.far=x.far=pe,(N!==F.near||G!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,G=F.far),F.layers.mask=Z.layers.mask|6,x.layers.mask=F.layers.mask&3,T.layers.mask=F.layers.mask&5;let Fe=Z.parent,_e=F.cameras;re(F,Fe);for(let qe=0;qe<_e.length;qe++)re(_e[qe],Fe);_e.length===2?te(F,x,T):F.projectionMatrix.copy(x.projectionMatrix),Ae(Z,F,Fe)};function Ae(Z,$,pe){pe===null?Z.matrix.copy($.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply($.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ir*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return p[Z]};let Ie=null;function Ge(Z,$){if(h=$.getViewerPose(c||a),_=$,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Fe=!0);for(let Xe=0;Xe<pe.length;Xe++){let $e=pe[Xe],nt=null;if(f!==null)nt=f.getViewport($e);else{let Tt=u.getViewSubImage(d,$e);nt=Tt.viewport,Xe===0&&(e.setRenderTargetTextures(M,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(M))}let Ue=P[Xe];Ue===void 0&&(Ue=new Zt,Ue.layers.enable(Xe),Ue.viewport=new pt,P[Xe]=Ue),Ue.matrix.fromArray($e.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray($e.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(nt.x,nt.y,nt.width,nt.height),Xe===0&&(F.matrix.copy(Ue.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Fe===!0&&F.cameras.push(Ue)}let _e=n.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let Xe=u.getDepthInformation(pe[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,n.renderState)}if(_e&&_e.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let Xe=0;Xe<pe.length;Xe++){let $e=pe[Xe].camera;if($e){let nt=p[$e];nt||(nt=new Fa,p[$e]=nt);let Ue=u.getCameraImage($e);nt.sourceTexture=Ue}}}}for(let pe=0;pe<b.length;pe++){let Fe=w[pe],_e=b[pe];Fe!==null&&_e!==void 0&&_e.update(Fe,$,c||a)}Ie&&Ie(Z,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}let We=new Gp;We.setAnimationLoop(Ge),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}},ks=new Zi,jy=new ut;function Qy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ni&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ni&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,ks.copy(M),ks.x*=-1,ks.y*=-1,ks.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),m.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(ks)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function eM(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=n[y.id];M===void 0&&(_(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",m));let b=S.program;i.updateUBOMapping(y,b);let w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let S=u();y.__bindingPointIndex=S;let M=s.createBuffer(),b=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=n[y.id],M=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,A=M.length;w<A;w++){let R=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,T=R.length;x<T;x++){let P=R[x];if(f(P,w,x,b)===!0){let F=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],G=0;for(let V=0;V<N.length;V++){let k=N[V],B=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,F+G,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,G),G+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,M,b){let w=y.value,A=S+"_"+M;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{let R=b[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(y){let S=y.uniforms,M=0,b=16;for(let A=0,R=S.length;A<R;A++){let x=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,P=x.length;T<P;T++){let F=x[T],N=Array.isArray(F.value)?F.value:[F.value];for(let G=0,V=N.length;G<V;G++){let k=N[G],B=g(k),q=M%b,oe=q%B.boundary,te=q+oe;M+=oe,te!==0&&b-te<B.storage&&(M+=b-te),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=B.storage}}}let w=M%b;return w>0&&(M+=b-w),y.__size=M,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hn=null;function iM(){return hn===null&&(hn=new xl(tM,16,16,Us,cn),hn.name="DFG_LUT",hn.minFilter=Vt,hn.magFilter=Vt,hn.wrapS=sn,hn.wrapT=sn,hn.generateMipmaps=!1,hn.needsUpdate=!0),hn}var Bc=class{constructor(e={}){let{canvas:t=mp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=di}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let g=f,m=new Set([Ql,jl,$l]),p=new Set([di,$i,Hr,Gr,Kl,Jl]),y=new Uint32Array(4),S=new Int32Array(4),M=null,b=null,w=[],A=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=zt;let P=0,F=0,N=null,G=-1,V=null,k=new pt,B=new pt,q=null,oe=new Le(0),te=0,re=t.width,Ae=t.height,Ie=1,Ge=null,We=null,Z=new pt(0,0,re,Ae),$=new pt(0,0,re,Ae),pe=!1,Fe=new Nr,_e=!1,qe=!1,Lt=new ut,Xe=new D,$e=new pt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function Tt(){return N===null?Ie:1}let I=i;function Et(E,U){return t.getContext(E,U)}try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",je,!1),I===null){let U="webgl2";if(I=Et(U,E),I===null)throw Et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ce("WebGLRenderer: "+E.message),E}let Ke,lt,ve,C,v,O,Y,J,X,Me,ne,xe,Pe,Q,ae,ge,ye,se,Be,L,ue,ee,de,j;function K(){Ke=new cv(I),Ke.init(),ee=new Ky(I,Ke),lt=new ev(I,Ke,e,ee),ve=new qy(I,Ke),lt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),C=new dv(I),v=new Dy,O=new Zy(I,Ke,ve,v,lt,ee,C),Y=new iv(x),J=new lv(x),X=new g_(I),de=new jx(I,X),Me=new hv(I,X,C,de),ne=new pv(I,Me,X,C),Be=new fv(I,lt,O),ge=new tv(v),xe=new Iy(x,Y,J,Ke,lt,de,ge),Pe=new Qy(x,v),Q=new Oy,ae=new ky(Ke),se=new $x(x,Y,J,ve,ne,_,l),ye=new Xy(x,ne,lt),j=new eM(I,C,lt,ve),L=new Qx(I,Ke,C),ue=new uv(I,Ke,C),C.programs=xe.programs,x.capabilities=lt,x.extensions=Ke,x.properties=v,x.renderLists=Q,x.shadowMap=ye,x.state=ve,x.info=C}K(),g!==di&&(R=new gv(g,t.width,t.height,n,r));let ie=new zu(x,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(E){E!==void 0&&(Ie=E,this.setSize(re,Ae,!1))},this.getSize=function(E){return E.set(re,Ae)},this.setSize=function(E,U,W=!0){if(ie.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,Ae=U,t.width=Math.floor(E*Ie),t.height=Math.floor(U*Ie),W===!0&&(t.style.width=E+"px",t.style.height=U+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(re*Ie,Ae*Ie).floor()},this.setDrawingBufferSize=function(E,U,W){re=E,Ae=U,Ie=W,t.width=Math.floor(E*W),t.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(g===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,W,H){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,W,H),ve.viewport(k.copy(Z).multiplyScalar(Ie).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,U,W,H){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,U,W,H),ve.scissor(B.copy($).multiplyScalar(Ie).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){ve.setScissorTest(pe=E)},this.setOpaqueSort=function(E){Ge=E},this.setTransparentSort=function(E){We=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let H=0;if(E){let z=!1;if(N!==null){let le=N.texture.format;z=m.has(le)}if(z){let le=N.texture.type,fe=p.has(le),he=se.getClearColor(),me=se.getClearAlpha(),be=he.r,Re=he.g,Te=he.b;fe?(y[0]=be,y[1]=Re,y[2]=Te,y[3]=me,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=be,S[1]=Re,S[2]=Te,S[3]=me,I.clearBufferiv(I.COLOR,0,S))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",je,!1),se.dispose(),Q.dispose(),ae.dispose(),v.dispose(),Y.dispose(),J.dispose(),ne.dispose(),de.dispose(),j.dispose(),xe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",zd),ie.removeEventListener("sessionend",kd),Ms.stop()};function De(E){E.preventDefault(),Sa("WebGLRenderer: Context Lost."),T=!0}function ct(){Sa("WebGLRenderer: Context Restored."),T=!1;let E=C.autoReset,U=ye.enabled,W=ye.autoUpdate,H=ye.needsUpdate,z=ye.type;K(),C.autoReset=E,ye.enabled=U,ye.autoUpdate=W,ye.needsUpdate=H,ye.type=z}function je(E){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function en(E){let U=E.target;U.removeEventListener("dispose",en),_n(U)}function _n(E){dg(E),v.remove(E)}function dg(E){let U=v.get(E).programs;U!==void 0&&(U.forEach(function(W){xe.releaseProgram(W)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,H,z,le){U===null&&(U=nt);let fe=z.isMesh&&z.matrixWorld.determinant()<0,he=pg(E,U,W,H,z);ve.setMaterial(H,fe);let me=W.index,be=1;if(H.wireframe===!0){if(me=Me.getWireframeAttribute(W),me===void 0)return;be=2}let Re=W.drawRange,Te=W.attributes.position,ze=Re.start*be,tt=(Re.start+Re.count)*be;le!==null&&(ze=Math.max(ze,le.start*be),tt=Math.min(tt,(le.start+le.count)*be)),me!==null?(ze=Math.max(ze,0),tt=Math.min(tt,me.count)):Te!=null&&(ze=Math.max(ze,0),tt=Math.min(tt,Te.count));let xt=tt-ze;if(xt<0||xt===1/0)return;de.setup(z,H,he,W,me);let vt,st=L;if(me!==null&&(vt=X.get(me),st=ue,st.setIndex(vt)),z.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*Tt()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(z.isLine){let Ee=H.linewidth;Ee===void 0&&(Ee=1),ve.setLineWidth(Ee*Tt()),z.isLineSegments?st.setMode(I.LINES):z.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else z.isPoints?st.setMode(I.POINTS):z.isSprite&&st.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ee=z._multiDrawStarts,Qe=z._multiDrawCounts,Ze=z._multiDrawCount,yi=me?X.get(me).bytesPerElement:1,er=v.get(H).currentProgram.getUniforms();for(let Mi=0;Mi<Ze;Mi++)er.setValue(I,"_gl_DrawID",Mi),st.render(Ee[Mi]/yi,Qe[Mi])}else if(z.isInstancedMesh)st.renderInstances(ze,xt,z.count);else if(W.isInstancedBufferGeometry){let Ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qe=Math.min(W.instanceCount,Ee);st.renderInstances(ze,xt,Qe)}else st.render(ze,xt)};function Bd(E,U,W){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=ni,E.needsUpdate=!0,_o(E,U,W),E.side=Dn,E.needsUpdate=!0,_o(E,U,W),E.side=on):_o(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),b=ae.get(W),b.init(U),A.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();let H=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let le=z.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){let he=le[fe];Bd(he,W,z),H.add(he)}else Bd(le,W,z),H.add(le)}),b=A.pop(),H},this.compileAsync=function(E,U,W=null){let H=this.compile(E,U,W);return new Promise(z=>{function le(){if(H.forEach(function(fe){v.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){z(E);return}setTimeout(le,10)}Ke.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let uh=null;function fg(E){uh&&uh(E)}function zd(){Ms.stop()}function kd(){Ms.start()}let Ms=new Gp;Ms.setAnimationLoop(fg),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(E){uh=E,ie.setAnimationLoop(E),E===null?Ms.stop():Ms.start()},ie.addEventListener("sessionstart",zd),ie.addEventListener("sessionend",kd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let W=ie.enabled===!0&&ie.isPresenting===!0,H=R!==null&&(N===null||W)&&R.begin(x,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,N),b=ae.get(E,A.length),b.init(U),A.push(b),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(Lt,qi,U.reversedDepth),qe=this.localClippingEnabled,_e=ge.init(this.clippingPlanes,qe),M=Q.get(E,w.length),M.init(),w.push(M),ie.enabled===!0&&ie.isPresenting===!0){let fe=x.xr.getDepthSensingMesh();fe!==null&&dh(fe,U,-1/0,x.sortObjects)}dh(E,U,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(Ge,We),Ue=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ue&&se.addToRenderList(M,E),this.info.render.frame++,_e===!0&&ge.beginShadows();let z=b.state.shadowsArray;if(ye.render(z,E,U),_e===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){let fe=M.opaque,he=M.transmissive;if(b.setupLights(),U.isArrayCamera){let me=U.cameras;if(he.length>0)for(let be=0,Re=me.length;be<Re;be++){let Te=me[be];Hd(fe,he,E,Te)}Ue&&se.render(E);for(let be=0,Re=me.length;be<Re;be++){let Te=me[be];Vd(M,E,Te,Te.viewport)}}else he.length>0&&Hd(fe,he,E,U),Ue&&se.render(E),Vd(M,E,U)}N!==null&&F===0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),H&&R.end(x),E.isScene===!0&&E.onAfterRender(x,E,U),de.resetDefaultState(),G=-1,V=null,A.pop(),A.length>0?(b=A[A.length-1],_e===!0&&ge.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function dh(E,U,W,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){H&&$e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);let fe=ne.update(E),he=E.material;he.visible&&M.push(E,fe,he,W,$e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){let fe=ne.update(E),he=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$e.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),$e.copy(fe.boundingSphere.center)),$e.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(he)){let me=fe.groups;for(let be=0,Re=me.length;be<Re;be++){let Te=me[be],ze=he[Te.materialIndex];ze&&ze.visible&&M.push(E,fe,ze,W,$e.z,Te)}}else he.visible&&M.push(E,fe,he,W,$e.z,null)}}let le=E.children;for(let fe=0,he=le.length;fe<he;fe++)dh(le[fe],U,W,H)}function Vd(E,U,W,H){let{opaque:z,transmissive:le,transparent:fe}=E;b.setupLightsView(W),_e===!0&&ge.setGlobalState(x.clippingPlanes,W),H&&ve.viewport(k.copy(H)),z.length>0&&go(z,U,W),le.length>0&&go(le,U,W),fe.length>0&&go(fe,U,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Hd(E,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let ze=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:ze?cn:di,minFilter:cs,samples:lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let le=b.state.transmissionRenderTarget[H.id],fe=H.viewport||k;le.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);let he=x.getRenderTarget(),me=x.getActiveCubeFace(),be=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(oe),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&se.render(W);let Re=x.toneMapping;x.toneMapping=Ji;let Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),_e===!0&&ge.setGlobalState(x.clippingPlanes,H),go(E,W,H),O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let tt=0,xt=U.length;tt<xt;tt++){let vt=U[tt],{object:st,geometry:Ee,material:Qe,group:Ze}=vt;if(Qe.side===on&&st.layers.test(H.layers)){let yi=Qe.side;Qe.side=ni,Qe.needsUpdate=!0,Gd(st,W,H,Ee,Qe,Ze),Qe.side=yi,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le))}x.setRenderTarget(he,me,be),x.setClearColor(oe,te),Te!==void 0&&(H.viewport=Te),x.toneMapping=Re}function go(E,U,W){let H=U.isScene===!0?U.overrideMaterial:null;for(let z=0,le=E.length;z<le;z++){let fe=E[z],{object:he,geometry:me,group:be}=fe,Re=fe.material;Re.allowOverride===!0&&H!==null&&(Re=H),he.layers.test(W.layers)&&Gd(he,U,W,me,Re,be)}}function Gd(E,U,W,H,z,le){E.onBeforeRender(x,U,W,H,z,le),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,W,H,E,le),z.transparent===!0&&z.side===on&&z.forceSinglePass===!1?(z.side=ni,z.needsUpdate=!0,x.renderBufferDirect(W,U,H,z,E,le),z.side=Dn,z.needsUpdate=!0,x.renderBufferDirect(W,U,H,z,E,le),z.side=on):x.renderBufferDirect(W,U,H,z,E,le),E.onAfterRender(x,U,W,H,z,le)}function _o(E,U,W){U.isScene!==!0&&(U=nt);let H=v.get(E),z=b.state.lights,le=b.state.shadowsArray,fe=z.state.version,he=xe.getParameters(E,z.state,le,U,W),me=xe.getProgramCacheKey(he),be=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?J:Y).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,be===void 0&&(E.addEventListener("dispose",en),be=new Map,H.programs=be);let Re=be.get(me);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===fe)return Xd(E,he),Re}else he.uniforms=xe.getUniforms(E),E.onBeforeCompile(he,x),Re=xe.acquireProgram(he,me),be.set(me,Re),H.uniforms=he.uniforms;let Te=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=ge.uniform),Xd(E,he),H.needsLights=gg(E),H.lightsStateVersion=fe,H.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMap.value=z.state.directionalShadowMap,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotShadowMap.value=z.state.spotShadowMap,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMap.value=z.state.pointShadowMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function Wd(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Yr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Xd(E,U){let W=v.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function pg(E,U,W,H,z){U.isScene!==!0&&(U=nt),O.resetTextureUnits();let le=U.fog,fe=H.isMeshStandardMaterial?U.environment:null,he=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Is,me=(H.isMeshStandardMaterial?J:Y).get(H.envMap||fe),be=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!W.morphAttributes.position,ze=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color,xt=Ji;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xt=x.toneMapping);let vt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=vt!==void 0?vt.length:0,Ee=v.get(H),Qe=b.state.lights;if(_e===!0&&(qe===!0||E!==V)){let jt=E===V&&H.id===G;ge.setState(H,E,jt)}let Ze=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Qe.state.version||Ee.outputColorSpace!==he||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==me||H.fog===!0&&Ee.fog!==le||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ge.numPlanes||Ee.numIntersection!==ge.numIntersection)||Ee.vertexAlphas!==be||Ee.vertexTangents!==Re||Ee.morphTargets!==Te||Ee.morphNormals!==ze||Ee.morphColors!==tt||Ee.toneMapping!==xt||Ee.morphTargetsCount!==st)&&(Ze=!0):(Ze=!0,Ee.__version=H.version);let yi=Ee.currentProgram;Ze===!0&&(yi=_o(H,U,z));let er=!1,Mi=!1,oa=!1,ht=yi.getUniforms(),li=Ee.uniforms;if(ve.useProgram(yi.program)&&(er=!0,Mi=!0,oa=!0),H.id!==G&&(G=H.id,Mi=!0),er||V!==E){ve.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(I,"projectionMatrix",E.projectionMatrix),ht.setValue(I,"viewMatrix",E.matrixWorldInverse);let ci=ht.map.cameraPosition;ci!==void 0&&ci.setValue(I,Xe.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Mi=!0,oa=!0)}if(Ee.needsLights&&(Qe.state.directionalShadowMap.length>0&&ht.setValue(I,"directionalShadowMap",Qe.state.directionalShadowMap,O),Qe.state.spotShadowMap.length>0&&ht.setValue(I,"spotShadowMap",Qe.state.spotShadowMap,O),Qe.state.pointShadowMap.length>0&&ht.setValue(I,"pointShadowMap",Qe.state.pointShadowMap,O)),z.isSkinnedMesh){ht.setOptional(I,z,"bindMatrix"),ht.setOptional(I,z,"bindMatrixInverse");let jt=z.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),ht.setValue(I,"boneTexture",jt.boneTexture,O))}z.isBatchedMesh&&(ht.setOptional(I,z,"batchingTexture"),ht.setValue(I,"batchingTexture",z._matricesTexture,O),ht.setOptional(I,z,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",z._indirectTexture,O),ht.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",z._colorsTexture,O));let Li=W.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Be.update(z,W,yi),(Mi||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,ht.setValue(I,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(li.envMap.value=me,li.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(li.envMapIntensity.value=U.environmentIntensity),li.dfgLUT!==void 0&&(li.dfgLUT.value=iM()),Mi&&(ht.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&mg(li,oa),le&&H.fog===!0&&Pe.refreshFogUniforms(li,le),Pe.refreshMaterialUniforms(li,H,Ie,Ae,b.state.transmissionRenderTarget[E.id]),Yr.upload(I,Wd(Ee),li,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yr.upload(I,Wd(Ee),li,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(I,"center",z.center),ht.setValue(I,"modelViewMatrix",z.modelViewMatrix),ht.setValue(I,"normalMatrix",z.normalMatrix),ht.setValue(I,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let jt=H.uniformsGroups;for(let ci=0,fh=jt.length;ci<fh;ci++){let bs=jt[ci];j.update(bs,yi),j.bind(bs,yi)}}return yi}function mg(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function gg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,U,W){let H=v.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(E.texture).__webglTexture=U,v.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let W=v.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let _g=I.createFramebuffer();this.setRenderTarget=function(E,U=0,W=0){N=E,P=U,F=W;let H=null,z=!1,le=!1;if(E){let he=v.get(E);if(he.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(I.FRAMEBUFFER,he.__webglFramebuffer),k.copy(E.viewport),B.copy(E.scissor),q=E.scissorTest,ve.viewport(k),ve.scissor(B),ve.setScissorTest(q),G=-1;return}else if(he.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(he.__hasExternalTextures)O.rebindTextures(E,v.get(E.texture).__webglTexture,v.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Re=E.depthTexture;if(he.__boundDepthTexture!==Re){if(Re!==null&&v.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}let me=E.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(le=!0);let be=v.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[U])?H=be[U][W]:H=be[U],z=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?H=v.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,k.copy(E.viewport),B.copy(E.scissor),q=E.scissorTest}else k.copy(Z).multiplyScalar(Ie).floor(),B.copy($).multiplyScalar(Ie).floor(),q=pe;if(W!==0&&(H=_g),ve.bindFramebuffer(I.FRAMEBUFFER,H)&&ve.drawBuffers(E,H),ve.viewport(k),ve.scissor(B),ve.setScissorTest(q),z){let he=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,W)}else if(le){let he=U;for(let me=0;me<E.textures.length;me++){let be=v.get(E.textures[me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+me,be.__webglTexture,W,he)}}else if(E!==null&&W!==0){let he=v.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(E,U,W,H,z,le,fe,he=0){if(!(E&&E.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(I.FRAMEBUFFER,me);try{let be=E.textures[he],Re=be.format,Te=be.type;if(!lt.textureFormatReadable(Re)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Te)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&W>=0&&W<=E.height-z&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),I.readPixels(U,W,H,z,ee.convert(Re),ee.convert(Te),le))}finally{let be=N!==null?v.get(N).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=function(E,U,W,H,z,le,fe,he=0){return xo(this,null,function*(){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=v.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(U>=0&&U<=E.width-H&&W>=0&&W<=E.height-z){ve.bindFramebuffer(I.FRAMEBUFFER,me);let be=E.textures[he],Re=be.format,Te=be.type;if(!lt.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),I.readPixels(U,W,H,z,ee.convert(Re),ee.convert(Te),0);let tt=N!==null?v.get(N).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,tt);let xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield gp(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(ze),I.deleteSync(xt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(E,U=null,W=0){let H=Math.pow(2,-W),z=Math.floor(E.image.width*H),le=Math.floor(E.image.height*H),fe=U!==null?U.x:0,he=U!==null?U.y:0;O.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,he,z,le),ve.unbindTexture()};let xg=I.createFramebuffer(),vg=I.createFramebuffer();this.copyTextureToTexture=function(E,U,W=null,H=null,z=0,le=null){le===null&&(z!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=z,z=0):le=0);let fe,he,me,be,Re,Te,ze,tt,xt,vt=E.isCompressedTexture?E.mipmaps[le]:E.image;if(W!==null)fe=W.max.x-W.min.x,he=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Re=W.min.y,Te=W.isBox3?W.min.z:0;else{let Li=Math.pow(2,-z);fe=Math.floor(vt.width*Li),he=Math.floor(vt.height*Li),E.isDataArrayTexture?me=vt.depth:E.isData3DTexture?me=Math.floor(vt.depth*Li):me=1,be=0,Re=0,Te=0}H!==null?(ze=H.x,tt=H.y,xt=H.z):(ze=0,tt=0,xt=0);let st=ee.convert(U.format),Ee=ee.convert(U.type),Qe;U.isData3DTexture?(O.setTexture3D(U,0),Qe=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(O.setTexture2DArray(U,0),Qe=I.TEXTURE_2D_ARRAY):(O.setTexture2D(U,0),Qe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Ze=I.getParameter(I.UNPACK_ROW_LENGTH),yi=I.getParameter(I.UNPACK_IMAGE_HEIGHT),er=I.getParameter(I.UNPACK_SKIP_PIXELS),Mi=I.getParameter(I.UNPACK_SKIP_ROWS),oa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,be),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);let ht=E.isDataArrayTexture||E.isData3DTexture,li=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Li=v.get(E),jt=v.get(U),ci=v.get(Li.__renderTarget),fh=v.get(jt.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,ci.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,fh.__webglFramebuffer);for(let bs=0;bs<me;bs++)ht&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(E).__webglTexture,z,Te+bs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,le,xt+bs)),I.blitFramebuffer(be,Re,fe,he,ze,tt,fe,he,I.DEPTH_BUFFER_BIT,I.NEAREST);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||v.has(E)){let Li=v.get(E),jt=v.get(U);ve.bindFramebuffer(I.READ_FRAMEBUFFER,xg),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,vg);for(let ci=0;ci<me;ci++)ht?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Li.__webglTexture,z,Te+ci):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Li.__webglTexture,z),li?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.__webglTexture,le,xt+ci):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,jt.__webglTexture,le),z!==0?I.blitFramebuffer(be,Re,fe,he,ze,tt,fe,he,I.COLOR_BUFFER_BIT,I.NEAREST):li?I.copyTexSubImage3D(Qe,le,ze,tt,xt+ci,be,Re,fe,he):I.copyTexSubImage2D(Qe,le,ze,tt,be,Re,fe,he);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else li?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Qe,le,ze,tt,xt,fe,he,me,st,Ee,vt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Qe,le,ze,tt,xt,fe,he,me,st,vt.data):I.texSubImage3D(Qe,le,ze,tt,xt,fe,he,me,st,Ee,vt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,le,ze,tt,fe,he,st,Ee,vt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,le,ze,tt,vt.width,vt.height,st,vt.data):I.texSubImage2D(I.TEXTURE_2D,le,ze,tt,fe,he,st,Ee,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yi),I.pixelStorei(I.UNPACK_SKIP_PIXELS,er),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,oa),le===0&&U.generateMipmaps&&I.generateMipmap(Qe),ve.unbindTexture()},this.initRenderTarget=function(E){v.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),ve.unbindTexture()},this.resetState=function(){P=0,F=0,N=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};function Nn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function im(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var _i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jr={duration:.5,overwrite:!1,delay:0},nd,Gt,ft,zi=1e8,ot=1/zi,qu=Math.PI*2,nM=qu/4,sM=0,nm=Math.sqrt,rM=Math.cos,aM=Math.sin,It=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Bn=function(e){return typeof e=="number"},Jc=function(e){return typeof e>"u"},pn=function(e){return typeof e=="object"},gi=function(e){return e!==!1},sd=function(){return typeof window<"u"},Vc=function(e){return Mt(e)||It(e)},sm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,oM=/random\([^)]+\)/g,lM=/,\s*/g,Zp=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ku=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,cM=/[^,'"\[\]\s]+/gi,hM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,dn,Zu,od,Ri={},Xc={},rm,am=function(e){return(Xc=$r(e,Ri))&&$t},$c=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ro=function(e,t){return!t&&console.warn(e)},om=function(e,t){return e&&(Ri[e]=t)&&Xc&&(Xc[e]=t)||Ri},ao=function(){return 0},uM={suppressEvents:!0,isStart:!0,kill:!1},Hc={suppressEvents:!0,kill:!1},dM={suppressEvents:!0},ld={},fs=[],Ku={},lm,pi={},Vu={},Kp=30,Gc=[],cd="",hd=function(e){var t=e[0],i,n;if(pn(t)||Mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Gc.length;n--&&!Gc[n].targetTest(t););i=Gc[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new pd(e[n],i)))||e.splice(n,1);return e},ps=function(e){return e._gsap||hd(ki(e))[0]._gsap},ud=function(e,t,i){return(i=e[t])&&Mt(i)?e[t]():Jc(i)&&e.getAttribute&&e.getAttribute(t)||i},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},mt=function(e){return Math.round(e*1e7)/1e7||0},Ys=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},fM=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Yc=function(){var e=fs.length,t=fs.slice(0),i,n;for(Ku={},fs.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},dd=function(e){return!!(e._initted||e._startAt||e.add)},cm=function(e,t,i,n){fs.length&&!Gt&&Yc(),e.render(t,i,n||!!(Gt&&t<0&&dd(e))),fs.length&&!Gt&&Yc()},hm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cM).length<2?t:It(e)?e.trim():e},um=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pM=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},$r=function(e,t){for(var i in t)e[i]=t[i];return e},Jp=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=pn(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},qc=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},io=function(e){var t=e.parent||gt,i=e.keyframes?pM(Jt(e.keyframes)):Pi;if(gi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},mM=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},dm=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},jc=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ju=function(e,t,i,n){return e._startAt&&(Gt?e._startAt.revert(Hc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},_M=function s(e){return!e||e._ts&&s(e.parent)},$p=function(e){return e._repeat?jr(e._tTime,e=e.duration()+e._rDelay)*e:0},jr=function(e,t){var i=Math.floor(e=mt(e/t));return e&&i===e?i-1:i},Zc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qc=function(e){return e._end=mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},eh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=mt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qc(e),i._dirty||Hs(i,e)),e},fm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zc(e.rawTime(),t),(!t._dur||co(0,t.totalDuration(),i)-t._tTime>ot)&&t.render(i,!0)),Hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ot}},fn=function(e,t,i,n){return t.parent&&ms(t),t._start=mt((Bn(i)?i:i||e!==gt?Bi(e,i,t):e._time)+t._delay),t._end=mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dm(e,t,"_first","_last",e._sort?"_start":0),$u(t)||(e._recent=t),n||fm(e,t),e._ts<0&&eh(e,e._tTime),e},pm=function(e,t){return(Ri.ScrollTrigger||$c("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},mm=function(e,t,i,n,r){if(_d(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lm!==mi.frame)return fs.push(e),e._lazy=[r,n],1},xM=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},$u=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vM=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&xM(e)&&!(!e._initted&&$u(e))||(e._ts<0||e._dp._ts<0)&&!$u(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=co(0,e._tDur,t),h=jr(l,o),e._yoyo&&h&1&&(a=1-a),h!==jr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Gt||n||e._zTime===ot||!t&&e._zTime){if(!e._initted&&mm(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?ot:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ju(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ms(e,1),!i&&!Gt&&(Ci(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yM=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Qr=function(e,t,i,n){var r=e._repeat,a=mt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:mt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&eh(e,e._tTime=e._tDur*o),e.parent&&Qc(e),i||Hs(e.parent,e),e},jp=function(e){return e instanceof Ht?Hs(e):Qr(e,e._dur)},MM={_start:0,endTime:ao,totalDuration:ao},Bi=function s(e,t,i){var n=e.labels,r=e._recent||MM,a=e.duration()>=zi?r.endTime(!1):e._dur,o,l,c;return It(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},no=function(e,t,i){var n=Bn(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=gi(l.vars.inherit)&&l.parent;a.immediateRender=gi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new St(t[0],a,t[r+1])},gs=function(e,t){return e||e===0?t(e):t},co=function(e,t,i){return i<e?e:i>t?t:i},Wt=function(e,t){return!It(e)||!(t=hM.exec(e))?"":t[1]},bM=function(e,t,i){return gs(i,function(n){return co(e,t,n)})},ju=[].slice,gm=function(e,t){return e&&pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pn(e[0]))&&!e.nodeType&&e!==dn},SM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return It(n)&&!t||gm(n,1)?(r=i).push.apply(r,ki(n)):i.push(n)})||i},ki=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):It(e)&&!i&&(Zu||!ea())?ju.call((t||od).querySelectorAll(e),0):Jt(e)?SM(e,i):gm(e)?ju.call(e,0):e?[e]:[]},Qu=function(e){return e=ki(e)[0]||ro("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ki(t,i.querySelectorAll?i:i===e?ro("Invalid scope")||od.createElement("div"):e)}},_m=function(e){return e.sort(function(){return .5-Math.random()})},xm=function(e){if(Mt(e))return e;var t=pn(e)?e:{each:e},i=Gs(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,u=n;return It(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,y,S,M,b,w,A,R,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,zi])[1],!x){for(A=-zi;A<(A=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*h-.5:n%x,y=x===zi?0:l?g*u/x-.5:n/x|0,A=0,R=zi,w=0;w<g;w++)S=w%x-p,M=y-(w/x|0),m[w]=b=c?Math.abs(c==="y"?M:S):nm(S*S+M*M),b>A&&(A=b),b<R&&(R=b);n==="random"&&_m(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(n==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Wt(t.amount||t.each)||0,i=i&&g<0?Am(i):i}return g=(m[d]-m.min)/m.max||0,mt(m.b+(i?i(g):g)*m.v)+m.u}},ed=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=mt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Bn(i)?0:Wt(i))}},vm=function(e,t){var i=Jt(e),n,r;return!i&&pn(e)&&(n=i=e.radius||zi,e.values?(e=ki(e.values),(r=!Bn(e[0]))&&(n*=n)):e=ed(e.increment)),gs(t,i?Mt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=zi,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:a,r||h===a||Bn(a)?h:h+Wt(a)}:ed(e))},ym=function(e,t,i,n){return gs(Jt(e)?!t:i===!0?!!(i=0):!n,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},TM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},EM=function(e,t){return function(i){return e(parseFloat(i))+(t||Wt(i))}},wM=function(e,t,i){return bm(e,t,0,1,i)},Mm=function(e,t,i){return gs(i,function(n){return e[~~t(n)]})},AM=function s(e,t,i){var n=t-e;return Jt(e)?Mm(e,s(0,e.length),t):gs(i,function(r){return(n+(r-e)%n)%n+e})},CM=function s(e,t,i){var n=t-e,r=n*2;return Jt(e)?Mm(e,s(0,e.length-1),t):gs(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},ta=function(e){return e.replace(oM,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(lM);return ym(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},bm=function(e,t,i,n,r){var a=t-e,o=n-i;return gs(r,function(l){return i+((l-e)/a*o||0)})},RM=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=It(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=$r(Jt(e)?[]:{},e));if(!h){for(l in t)md.call(o,e,l,"get",t[l]);r=function(_){return yd(_,o)||(a?e.p:e)}}}return gs(i,r)},Qp=function(e,t,i){var n=e.labels,r=zi,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Ci=function(e,t,i){var n=e.vars,r=n[t],a=ft,o=e._ctx,l,c,h;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&fs.length&&Yc(),o&&(ft=o),h=l?r.apply(c,l):r.call(c),ft=a,h},eo=function(e){return ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Ci(e,"onInterrupt"),e},Kr,Sm=[],Tm=function(e){if(e)if(e=!e.name&&e.default||e,sd()||e.headless){var t=e.name,i=Mt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:ao,render:yd,add:md,kill:XM,modifier:WM,rawVars:0},a={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(ea(),e!==n){if(pi[t])return;Pi(n,Pi(qc(e,r),a)),$r(n.prototype,$r(r,qc(e,a))),pi[n.prop=t]=n,e.targetTest&&(Gc.push(n),ld[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}om(t,n),e.register&&e.register($t,n,ai)}else Sm.push(e)},at=255,to={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},Hu=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*at+.5|0},Em=function(e,t,i){var n=e?Bn(e)?[e>>16,e>>8&at,e&at]:0:to.black,r,a,o,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),to[e])n=to[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&at,n&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Zp),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,n.length>3&&(n[3]*=1),n[0]=Hu(l+1/3,r,a),n[1]=Hu(l,r,a),n[2]=Hu(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(rd),i&&n.length<4&&(n[3]=1),n}else n=e.match(Zp)||to.transparent;n=n.map(Number)}return t&&!_&&(r=n[0]/at,a=n[1]/at,o=n[2]/at,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},wm=function(e){var t=[],i=[],n=-1;return e.split(Un).forEach(function(r){var a=r.match(Xs)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},em=function(e,t,i){var n="",r=(e+n).match(Un),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=Em(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=wm(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(Un,"1").split(Xs),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=e.split(Un),u=c.length-1;o<u;o++)n+=c[o]+r[o];return n+c[u]},Un=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in to)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),PM=/hsl[a]?\(/,fd=function(e){var t=e.join(" "),i;if(Un.lastIndex=0,Un.test(t))return i=PM.test(t),e[1]=em(e[1],i),e[0]=em(e[0],i,wm(e[1])),!0},oo,mi=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,h,u,d,f,_=function g(m){var p=s()-n,y=m===!0,S,M,b,w;if((p>e||p<0)&&(i+=p-t),n+=p,b=n-i,S=b-a,(S>0||y)&&(w=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=S+(S>=r?4:r-S),M=1),y||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](b,d,w,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){rm&&(!Zu&&sd()&&(dn=Zu=window,od=dn.document||{},Ri.gsap=$t,(dn.gsapVersions||(dn.gsapVersions=[])).push($t.version),am(Xc||dn.GreenSockGlobals||!dn.gsap&&dn||{}),Sm.forEach(Tm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},oo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),oo=0,c=ao},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,y){var S=p?function(M,b,w,A){m(M,b,w,A),u.remove(S)}:m;return u.remove(m),o[y?"unshift":"push"](S),ea(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),ea=function(){return!oo&&mi.wake()},Ve={},IM=/^[\d.\-M][\d.\-,\s]/,DM=/["']/g,LM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(DM,"").trim():+c,n=l.substr(o+1).trim();return t},OM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},FM=function(e){var t=(e+"").split("("),i=Ve[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[LM(t[1])]:OM(e).split(",").map(hm)):Ve._CE&&IM.test(e)?Ve._CE("",e):i},Am=function(e){return function(t){return 1-e(1-t)}},Cm=function s(e,t){for(var i=e._first,n;i;)i instanceof Ht?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Gs=function(e,t){return e&&(Mt(e)?e:Ve[e]||FM(e))||t},qs=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return ri(e,function(o){Ve[o]=Ri[o]=r,Ve[a=o.toLowerCase()]=i;for(var l in r)Ve[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[o+"."+l]=r[l]}),r},Rm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Gu=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/qu*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*aM((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Rm(o);return r=qu/r,l.config=function(c,h){return s(e,c,h)},l},Wu=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Rm(i);return n.config=function(r){return s(e,r)},n};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;qs(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;qs("Elastic",Gu("in"),Gu("out"),Gu());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};qs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);qs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});qs("Circ",function(s){return-(nm(1-s*s)-1)});qs("Sine",function(s){return s===1?1:-rM(s*nM)+1});qs("Back",Wu("in"),Wu("out"),Wu());Ve.SteppedEase=Ve.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-ot;return function(o){return((n*co(0,a,o)|0)+r)*i}}};Jr.ease=Ve["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return cd+=s+","+s+"Params,"});var pd=function(e,t){this.id=sM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ud,this.set=t?t.getSetter:th},lo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),oo||mi.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ea(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(eh(this,i),!r._dp||r.parent||fm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cm(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$p(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$p(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?jr(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Zc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ot?0:this._rts,this.totalTime(co(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Qc(this),gM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=mt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&fn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(gi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zc(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dM);var n=Gt;return Gt=i,dd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,jp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,jp(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Bi(this,i),gi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,gi(n)),this._dur||(this._zTime=-ot),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-ot)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var o=Mt(i)?i:um,l=function(){var h=n.then;n.then=null,r&&r(),Mt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){eo(this)},s}();Pi(lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var Ht=function(s){im(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=gi(i.sortChildren),gt&&fn(i.parent||gt,Nn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&pm(Nn(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return no(0,arguments,this),this},t.from=function(n,r,a){return no(1,arguments,this),this},t.fromTo=function(n,r,a,o){return no(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,io(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new St(n,r,Bi(this,a),1),this},t.call=function(n,r,a){return fn(this,St.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new St(n,a,Bi(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,h){return a.runBackwards=1,io(a).immediateRender=gi(a.immediateRender),this.staggerTo(n,r,a,o,l,c,h)},t.staggerFromTo=function(n,r,a,o,l,c,h,u){return o.startAt=a,io(o).immediateRender=gi(o.immediateRender),this.staggerTo(n,r,o,l,c,h,u)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:mt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,y,S,M,b,w,A;if(this!==gt&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,M=this._start,S=this._ts,p=!S,u&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,a);if(d=mt(h%m),h===l?(g=this._repeat,d=c):(b=mt(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=jr(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var R=w&&b&1,x=R===(w&&g&1);if(g<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:mt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Cm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=yM(this,mt(o),mt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!r&&!b&&(Ci(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-ot);break}}f=_}else{f=this._last;for(var T=n<0?n:d;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,r,a||Gt&&dd(f)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=T?-ot:ot);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-ot)._zTime=d>=o?1:-1,this._ts))return this._start=M,Qc(this),this.render(n,r,a);this._onUpdate&&!r&&Ci(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ms(this,1),!r&&!(n<0&&!o)&&(h||o||!l)&&(Ci(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Bn(r)||(r=Bi(this,r,n)),!(n instanceof lo)){if(Jt(n))return n.forEach(function(o){return a.add(o,r)}),this;if(It(n))return this.addLabel(n,r);if(Mt(n))n=St.delayedCall(0,n);else return this}return this!==n?fn(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-zi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof St?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return It(n)?this.removeLabel(n):Mt(n)?this.killTweensOf(n):(n.parent===this&&jc(this,n),n===this._recent&&(this._recent=this._last),Hs(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mt(mi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Bi(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=St.delayedCall(0,r||ao,a);return o.data="isPause",this._hasPause=1,fn(this,o,Bi(this,n))},t.removePause=function(n){var r=this._first;for(n=Bi(this,n);r;)r._start===n&&r.data==="isPause"&&ms(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)ds!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=ki(n),l=this._first,c=Bn(r),h;l;)l instanceof St?fM(l._targets,o)&&(c?(!ds||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Bi(a,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=St.to(a,Pi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Qr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Pi({startAt:{time:Bi(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Qp(this,Bi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Qp(this,Bi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=mt(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return Hs(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Hs(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=zi,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,fn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=mt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Qr(a,a===gt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(gt._ts&&(cm(gt,Zc(n,gt)),lm=mi.frame),mi.frame>=Kp){Kp+=_i.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&_i.autoSleep&&mi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||mi.sleep()}}},e}(lo);Pi(Ht.prototype,{_lock:0,_hasPause:0,_forcing:0});var NM=function(e,t,i,n,r,a,o){var l=new ai(this._pt,e,t,0,1,vd,null,r),c=0,h=0,u,d,f,_,g,m,p,y;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=ta(n)),a&&(y=[i,n],a(y,e,t),i=y[0],n=y[1]),d=i.match(ku)||[];u=ku.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ys(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=ku.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(ad.test(n)||p)&&(l.e=0),this._pt=l,l},md=function(e,t,i,n,r,a,o,l,c,h){Mt(n)&&(n=n(r||0,e,a));var u=e[t],d=i!=="get"?i:Mt(u)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Mt(u)?c?VM:Dm:xd,_;if(It(n)&&(~n.indexOf("random(")&&(n=ta(n)),n.charAt(1)==="="&&(_=Ys(d,n)+(Wt(d)||0),(_||_===0)&&(n=_))),!h||d!==n||td)return!isNaN(d*n)&&n!==""?(_=new ai(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?GM:Lm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&$c(t,n),NM.call(this,e,t,d,n,f,l||_i.stringFilter,c))},UM=function(e,t,i,n,r){if(Mt(e)&&(e=so(e,r,t,i,n)),!pn(e)||e.style&&e.nodeType||Jt(e)||sm(e))return It(e)?so(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=so(e[o],r,t,i,n);return a},gd=function(e,t,i,n,r,a){var o,l,c,h;if(pi[e]&&(o=new pi[e]).init(r,o.rawVars?t[e]:UM(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new ai(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Kr))for(c=i._ptLookup[i._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ds,td,_d=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!nd,M=e.timeline,b,w,A,R,x,T,P,F,N,G,V,k,B;if(M&&(!d||!r)&&(r="none"),e._ease=Gs(r,Jr.ease),e._yEase=u?Am(Gs(u===!0?r:u,Jr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!M&&!!n.runBackwards,!M||d&&!n.stagger){if(F=m[0]?ps(m[0]).harness:0,k=F&&n[F.prop],b=qc(n,ld),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Hc:uM),g._lazy=0),a){if(ms(e._startAt=St.set(m,Pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&gi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!f)&&e._startAt.revert(Hc),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),A=Pi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&gi(l),immediateRender:o,stagger:0,parent:p},b),k&&(A[F.prop]=k),ms(e._startAt=St.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(Hc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&gi(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||hd(m)[w]._gsap,e._ptLookup[w]=G={},Ku[P.id]&&fs.length&&Yc(),V=y===m?w:y.indexOf(x),F&&(N=new F).init(x,k||b,e,V,y)!==!1&&(e._pt=R=new ai(e._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(q){G[q]=R}),N.priority&&(T=1)),!F||k)for(A in b)pi[A]&&(N=gd(A,b,e,V,x,y))?N.priority&&(T=1):G[A]=R=md.call(e,x,A,"get",b[A],V,y,0,n.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),S&&e._pt&&(ds=e,gt.killTweensOf(x,G,e.globalTime(t)),B=!e.parent,ds=0),e._pt&&l&&(Ku[P.id]=1)}T&&Md(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,d&&t<=0&&M.render(zi,!0,!0)},BM=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return td=1,e.vars[t]="+=0",_d(e,o),td=0,l?ro(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!r?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=bt(i)+Wt(u.e)),u.b&&(u.b=h.s+Wt(u.b))},zM=function(e,t){var i=e[0]?ps(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=$r({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},kM=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(Jt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},so=function(e,t,i,n,r){return Mt(e)?e.call(t,i,n,r):It(e)&&~e.indexOf("random(")?ta(e):e},Pm=cd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Im={};ri(Pm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Im[s]=1});var St=function(s){im(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:io(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=n.parent||gt,S=(Jt(i)||sm(i)?Bn(i[0]):"length"in n)?[i]:ki(i),M,b,w,A,R,x,T,P;if(o._targets=S.length?hd(S):ro("GSAP target "+i+" not found. https://gsap.com",!_i.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Vc(c)||Vc(h)){if(n=o.vars,M=o.timeline=new Ht({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:S}),M.kill(),M.parent=M._dp=Nn(o),M._start=0,d||Vc(c)||Vc(h)){if(A=S.length,T=d&&xm(d),pn(d))for(R in d)~Pm.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(b=0;b<A;b++)w=qc(n,Im),w.stagger=0,p&&(w.yoyoEase=p),P&&$r(w,P),x=S[b],w.duration=+so(c,Nn(o),b,x,S),w.delay=(+so(h,Nn(o),b,x,S)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),M.to(x,w,T?T(b,x,S):0),M._ease=Ve.none;M.duration()?c=h=0:o.timeline=0}else if(_){io(Pi(M.vars.defaults,{ease:"none"})),M._ease=Gs(_.ease||n.ease||"none");var F=0,N,G,V;if(Jt(_))_.forEach(function(k){return M.to(S,k,">")}),M.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||kM(R,_[R],w,_.easeEach);for(R in w)for(N=w[R].sort(function(k,B){return k.t-B.t}),F=0,b=0;b<N.length;b++)G=N[b],V={ease:G.e,duration:(G.t-(b?N[b-1].t:0))/100*c},V[R]=G.v,M.to(S,V,F),F+=V.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!nd&&(ds=Nn(o),gt.killTweensOf(S),ds=0),fn(y,Nn(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===mt(y._time)&&gi(u)&&_M(Nn(o))&&y.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-h)||0)),m&&pm(Nn(o),m),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-ot&&!h?l:n<ot?0:n,d,f,_,g,m,p,y,S,M;if(!c)vM(this,n,r,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,r,a);if(d=mt(u%g),u===l?(_=this._repeat,d=c):(m=mt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(M=this._yEase,d=c-d),m=jr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(S&&this._yEase&&Cm(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(mt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(mm(this,h?n:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&u&&!r&&!m&&(Ci(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;S&&S.render(n<0?n:S._dur*S._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Ju(this,n,r,a),Ci(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Ci(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ju(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!r&&!(h&&!o)&&(u||o||p)&&(Ci(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){oo||mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||_d(this,c),h=this._ease(c/this._dur),BM(this,n,r,a,o,h,c,l)?this.resetTo(n,r,a,o,1):(eh(this,0),this.parent||dm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,ds&&ds.vars.overwrite!==!0)._first||eo(this),this.parent&&a!==this.timeline.totalDuration()&&Qr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?ki(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&mM(o,l))return r==="all"&&(this._pt=0),eo(this);for(u=this._op=this._op||[],r!=="all"&&(It(r)&&(g={},ri(r,function(y){return g[y]=1}),r=g),r=zM(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&jc(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&eo(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return no(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return no(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return gt.killTweensOf(n,r,a)},e}(lo);Pi(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(s){St[s]=function(){var e=new Ht,t=ju.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var xd=function(e,t,i){return e[t]=i},Dm=function(e,t,i){return e[t](i)},VM=function(e,t,i,n){return e[t](n.fp,i)},HM=function(e,t,i){return e.setAttribute(t,i)},th=function(e,t){return Mt(e[t])?Dm:Jc(e[t])&&e.setAttribute?HM:xd},Lm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vd=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},yd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},WM=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},XM=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?jc(this,t,"_pt"):t.dep||(i=1),t=n;return!i},YM=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Md=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},ai=function(){function s(t,i,n,r,a,o,l,c,h){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||Lm,this.d=l||this,this.set=c||xd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=YM,this.m=i,this.mt=r,this.tween=n},s}();ri(cd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ld[s]=1});Ri.TweenMax=Ri.TweenLite=St;Ri.TimelineLite=Ri.TimelineMax=Ht;gt=new Ht({sortChildren:!1,defaults:Jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=fd;var Ws=[],Wc={},qM=[],tm=0,ZM=0,Xu=function(e){return(Wc[e]||qM).map(function(t){return t()})},id=function(){var e=Date.now(),t=[];e-tm>2&&(Xu("matchMediaInit"),Ws.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=dn.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Xu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),tm=e,Xu("matchMedia"))},Om=function(){function s(t,i){this.selector=i&&Qu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ZM++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){Mt(i)&&(r=n,n=i,i=Mt);var a=this,o=function(){var c=ft,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Qu(r)),ft=a,u=n.apply(a,arguments),Mt(u)&&a._r.push(u),ft=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===Mt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=ft;ft=null,i(this),ft=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof St&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ht?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof St)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Ws.length;a--;)Ws[a].id===this.id&&Ws.splice(a,1)},e.revert=function(i){this.kill(i||{})},s}(),KM=function(){function s(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){pn(i)||(i={matches:i});var a=new Om(0,r||this.scope),o=a.conditions={},l,c,h;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=dn.matchMedia(i[c]),l&&(Ws.indexOf(a)<0&&Ws.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(id):l.addEventListener("change",id)));return h&&n(a,function(u){return a.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Tm(n)})},timeline:function(e){return new Ht(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){It(e)&&(e=ki(e)[0]);var r=ps(e||{}).get,a=i?um:hm;return i==="native"&&(i=""),e&&(t?a((pi[t]&&pi[t].get||r)(e,t,i,n)):function(o,l,c){return a((pi[o]&&pi[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=ki(e),e.length>1){var n=e.map(function(h){return $t.quickSetter(h,t,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}e=e[0]||{};var a=pi[t],o=ps(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Kr._pt=0,u.init(e,i?h+i:h,Kr,0,[e]),u.render(1,u),Kr._pt&&yd(1,Kr)}:o.set(e,l);return a?c:function(h){return c(e,l,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,r=$t.to(e,Pi((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gs(e.ease,Jr.ease)),Jp(Jr,e||{})},config:function(e){return Jp(_i,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!pi[o]&&!Ri[o]&&ro(t+" effect requires "+o+" plugin.")}),Vu[t]=function(o,l,c){return i(ki(o),Pi(l||{},r),c)},a&&(Ht.prototype[t]=function(o,l,c){return this.add(Vu[t](o,pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ve[e]=Gs(t)},parseEase:function(e,t){return arguments.length?Gs(e,t):Ve},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ht(e),n,r;for(i.smoothChildTiming=gi(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof St&&n.vars.onComplete===n._targets[0]))&&fn(i,n,n._start-n._delay),n=r;return fn(gt,i,0),i},context:function(e,t){return e?new Om(e,t):ft},matchMedia:function(e){return new KM(e)},matchMediaRefresh:function(){return Ws.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||id()},addEventListener:function(e,t){var i=Wc[e]||(Wc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Wc[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:AM,wrapYoyo:CM,distribute:xm,random:ym,snap:vm,normalize:wM,getUnit:Wt,clamp:bM,splitColor:Em,toArray:ki,selector:Qu,mapRange:bm,pipe:TM,unitize:EM,interpolate:RM,shuffle:_m},install:am,effects:Vu,ticker:mi,updateRoot:Ht.updateRoot,plugins:pi,globalTimeline:gt,core:{PropTween:ai,globals:om,Tween:St,Timeline:Ht,Animation:lo,getCache:ps,_removeLinkedListItem:jc,reverting:function(){return Gt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return nd=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Kc[s]=St[s]});mi.add(Ht.updateRoot);Kr=Kc.to({},{duration:0});var JM=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},$M=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=JM(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Yu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(It(r)&&(l={},ri(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}$M(o,r)}}}},$t=Kc.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Yu("roundProps",ed),Yu("modifiers"),Yu("snap",vm))||Kc;St.version=Ht.version=$t.version="3.14.2";rm=1;sd()&&ea();var jM=Ve.Power0,QM=Ve.Power1,eb=Ve.Power2,tb=Ve.Power3,ib=Ve.Power4,nb=Ve.Linear,sb=Ve.Quad,rb=Ve.Cubic,ab=Ve.Quart,ob=Ve.Quint,lb=Ve.Strong,cb=Ve.Elastic,hb=Ve.Back,ub=Ve.SteppedEase,db=Ve.Bounce,fb=Ve.Sine,pb=Ve.Expo,mb=Ve.Circ;var Fm,_s,na,Ad,$s,gb,Nm,Cd,_b=function(){return typeof window<"u"},kn={},Js=180/Math.PI,sa=Math.PI/180,ia=Math.atan2,Um=1e8,Rd=/([A-Z])/g,xb=/(left|right|width|margin|padding|x)/i,vb=/[\s,\(]\S/,mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Mb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Xm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ym=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Tb=function(e,t,i){return e.style[t]=i},Eb=function(e,t,i){return e.style.setProperty(t,i)},wb=function(e,t,i){return e._gsap[t]=i},Ab=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Cb=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},Rb=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},_t="transform",xi=_t+"Origin",Pb=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in kn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=mn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=zn(n,o)}):this.tfm[e]=a.x?a[e]:zn(n,e),e===xi&&(this.tfm.zOrigin=a.zOrigin);else return mn.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(_t)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(xi,t,"")),e=_t}(r||t)&&this.props.push(e,t,r[e])},qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ib=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Rd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Cd(),(!r||!r.isStart)&&!i[_t]&&(qm(i),n.zOrigin&&i[xi]&&(i[xi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Zm=function(e,t){var i={target:e,props:[],revert:Ib,save:Pb};return e._gsap||$t.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Km,Td=function(e,t){var i=_s.createElementNS?_s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_s.createElement(e);return i&&i.style?i:_s.createElement(e)},Ii=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Rd,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,ra(t)||t,1)||""},Bm="O,Moz,ms,Ms,Webkit".split(","),ra=function(e,t,i){var n=t||$s,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bm[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Bm[a]:"")+e},Ed=function(){_b()&&window.document&&(Fm=window,_s=Fm.document,na=_s.documentElement,$s=Td("div")||{style:{}},gb=Td("div"),_t=ra(_t),xi=_t+"Origin",$s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Km=!!ra("perspective"),Cd=$t.core.reverting,Ad=1)},zm=function(e){var t=e.ownerSVGElement,i=Td("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),na.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),na.removeChild(i),r},km=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Jm=function(e){var t,i;try{t=e.getBBox()}catch{t=zm(e),i=1}return t&&(t.width||t.height)||i||(t=zm(e)),t&&!t.width&&!t.x&&!t.y?{x:+km(e,["x","cx","x1"])||0,y:+km(e,["y","cy","y1"])||0,width:0,height:0}:t},$m=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jm(e))},vs=function(e,t){if(t){var i=e.style,n;t in kn&&t!==xi&&(t=_t),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Rd,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,n,r,a){var o=new ai(e._pt,t,i,0,1,a?Ym:Xm);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Vm={deg:1,rad:1,turn:1},Db={grid:1,flex:1},ys=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=$s.style,l=xb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===a||!r||Vm[n]||Vm[a])return r;if(a!=="px"&&!d&&(r=s(e,t,i,"px")),p=e.getCTM&&$m(e),(f||a==="%")&&(kn[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],bt(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===_s||!g.appendChild)&&(g=_s.body),m=g._gsap,m&&f&&m.width&&l&&m.time===mi.time&&!m.uncache)return bt(r/m.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+n,_=e[h],y?e.style[t]=y:vs(e,t)}else(f||a==="%")&&!Db[Ii(g,"display")]&&(o.position=Ii(e,"position")),g===e&&(o.position="static"),g.appendChild($s),_=$s[h],g.removeChild($s),o.position="absolute";return l&&f&&(m=ps(g),m.time=mi.time,m.width=g[h]),bt(d?_*r/u:_&&r?u/_*r:0)},zn=function(e,t,i,n){var r;return Ad||Ed(),t in mn&&t!=="transform"&&(t=mn[t],~t.indexOf(",")&&(t=t.split(",")[0])),kn[t]&&t!=="transform"?(r=fo(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:nh(Ii(e,xi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=ih[t]&&ih[t](e,t,i)||Ii(e,t)||ud(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?ys(e,t,r,i)+i:r},Lb=function(e,t,i,n){if(!i||i==="none"){var r=ra(t,e,1),a=r&&Ii(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=Ii(e,"borderTopColor"))}var o=new ai(this._pt,e.style,t,0,1,vd),l=0,c=0,h,u,d,f,_,g,m,p,y,S,M,b;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Ii(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=Ii(e,t)||n,g?e.style[t]=g:vs(e,t)),h=[i,n],fd(h),i=h[0],n=h[1],d=i.match(Xs)||[],b=n.match(Xs)||[],b.length){for(;u=Xs.exec(n);)m=u[0],y=n.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ys(f,m)+M),p=parseFloat(m),S=m.substr((p+"").length),l=Xs.lastIndex-S.length,S||(S=S||_i.units[t]||M,l===n.length&&(n+=S,o.e+=S)),M!==S&&(f=ys(e,t,g,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Ym:Xm;return ad.test(n)&&(o.e=0),this._pt=o,o},Hm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ob=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Hm[i]||i,t[1]=Hm[n]||n,t.join(" ")},Fb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],kn[o]&&(l=1,o=o==="transformOrigin"?xi:_t),vs(i,o);l&&(vs(i,_t),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",fo(i,1),a.uncache=1,qm(n)))}},ih={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new ai(e._pt,t,i,0,0,Fb);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},uo=[1,0,0,1,0,0],jm={},Qm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gm=function(e){var t=Ii(e,_t);return Qm(t)?uo:t.substr(7).match(rd).map(bt)},Pd=function(e,t){var i=e._gsap||ps(e),n=e.style,r=Gm(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?uo:r):(r===uo&&!e.offsetParent&&e!==na&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,na.appendChild(e)),r=Gm(e),l?n.display=l:vs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):na.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},wd=function(e,t,i,n,r,a){var o=e._gsap,l=r||Pd(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],S=t.split(" "),M=parseFloat(S[0])||0,b=parseFloat(S[1])||0,w,A,R,x;i?l!==uo&&(A=f*m-_*g)&&(R=M*(m/A)+b*(-g/A)+(g*y-m*p)/A,x=M*(-_/A)+b*(f/A)-(f*y-_*p)/A,M=R,b=x):(w=Jm(e),M=w.x+(~S[0].indexOf("%")?M/100*w.width:M),b=w.y+(~(S[1]||S[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&o.smooth?(p=M-c,y=b-h,o.xOffset=u+(p*f+y*g)-p,o.yOffset=d+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[xi]="0px 0px",a&&(xs(a,o,"xOrigin",c,M),xs(a,o,"yOrigin",h,b),xs(a,o,"xOffset",u,o.xOffset),xs(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},fo=function(e,t){var i=e._gsap||new pd(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ii(e,xi)||"0",h,u,d,f,_,g,m,p,y,S,M,b,w,A,R,x,T,P,F,N,G,V,k,B,q,oe,te,re,Ae,Ie,Ge,We;return h=u=d=g=m=p=y=S=M=0,f=_=1,i.svg=!!(e.getCTM&&$m(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),n.scale=n.rotate=n.translate="none"),A=Pd(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),wd(e,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,A)),b=i.xOrigin||0,w=i.yOrigin||0,A!==uo&&(P=A[0],F=A[1],N=A[2],G=A[3],h=V=A[4],u=k=A[5],A.length===6?(f=Math.sqrt(P*P+F*F),_=Math.sqrt(G*G+N*N),g=P||F?ia(F,P)*Js:0,y=N||G?ia(N,G)*Js+g:0,y&&(_*=Math.abs(Math.cos(y*sa))),i.svg&&(h-=b-(b*P+w*N),u-=w-(b*F+w*G))):(We=A[6],Ie=A[7],te=A[8],re=A[9],Ae=A[10],Ge=A[11],h=A[12],u=A[13],d=A[14],R=ia(We,Ae),m=R*Js,R&&(x=Math.cos(-R),T=Math.sin(-R),B=V*x+te*T,q=k*x+re*T,oe=We*x+Ae*T,te=V*-T+te*x,re=k*-T+re*x,Ae=We*-T+Ae*x,Ge=Ie*-T+Ge*x,V=B,k=q,We=oe),R=ia(-N,Ae),p=R*Js,R&&(x=Math.cos(-R),T=Math.sin(-R),B=P*x-te*T,q=F*x-re*T,oe=N*x-Ae*T,Ge=G*T+Ge*x,P=B,F=q,N=oe),R=ia(F,P),g=R*Js,R&&(x=Math.cos(R),T=Math.sin(R),B=P*x+F*T,q=V*x+k*T,F=F*x-P*T,k=k*x-V*T,P=B,V=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=bt(Math.sqrt(P*P+F*F+N*N)),_=bt(Math.sqrt(k*k+We*We)),R=ia(V,k),y=Math.abs(R)>2e-4?R*Js:0,M=Ge?1/(Ge<0?-Ge:Ge):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Qm(Ii(e,_t)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=bt(f),i.scaleY=bt(_),i.rotation=bt(g)+o,i.rotationX=bt(m)+o,i.rotationY=bt(p)+o,i.skewX=y+o,i.skewY=S+o,i.transformPerspective=M+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[xi]=nh(c)),i.xOffset=i.yOffset=0,i.force3D=_i.force3D,i.renderTransform=i.svg?Ub:Km?eg:Nb,i.uncache=0,i},nh=function(e){return(e=e.split(" "))[0]+" "+e[1]},bd=function(e,t,i){var n=Wt(t);return bt(parseFloat(t)+parseFloat(ys(e,"x",i+"px",n)))+n},Nb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,eg(e,t)},Zs="0deg",ho="0px",Ks=") ",eg=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,S=i.zOrigin,M="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(u!==Zs||h!==Zs)){var w=parseFloat(h)*sa,A=Math.sin(w),R=Math.cos(w),x;w=parseFloat(u)*sa,x=Math.cos(w),a=bd(y,a,A*x*-S),o=bd(y,o,-Math.sin(w)*-S),l=bd(y,l,R*x*-S+S)}m!==ho&&(M+="perspective("+m+Ks),(n||r)&&(M+="translate("+n+"%, "+r+"%) "),(b||a!==ho||o!==ho||l!==ho)&&(M+=l!==ho||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ks),c!==Zs&&(M+="rotate("+c+Ks),h!==Zs&&(M+="rotateY("+h+Ks),u!==Zs&&(M+="rotateX("+u+Ks),(d!==Zs||f!==Zs)&&(M+="skew("+d+", "+f+Ks),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ks),y.style[_t]=M||"translate(0, 0)"},Ub=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,S=parseFloat(a),M=parseFloat(o),b,w,A,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=sa,c*=sa,b=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=sa,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=bt(b),w=bt(w),A=bt(A),R=bt(R)):(b=u,R=d,w=A=0),(S&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(S=ys(f,"x",a,"px"),M=ys(f,"y",o,"px")),(_||g||m||p)&&(S=bt(S+_-(_*b+g*A)+m),M=bt(M+g-(_*w+g*R)+p)),(n||r)&&(x=f.getBBox(),S=bt(S+n/100*x.width),M=bt(M+r/100*x.height)),x="matrix("+b+","+w+","+A+","+R+","+S+","+M+")",f.setAttribute("transform",x),y&&(f.style[_t]=x)},Bb=function(e,t,i,n,r){var a=360,o=It(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Js:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Um)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Um)%a-~~(c/a)*a)),e._pt=d=new ai(e._pt,t,i,n,c,yb),d.e=h,d.u="deg",e._props.push(i),d},Wm=function(e,t){for(var i in t)e[i]=t[i];return e},zb=function(e,t,i){var n=Wm({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[_t]=t,o=fo(i,1),vs(i,_t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_t],a[_t]=t,o=fo(i,1),a[_t]=c);for(l in kn)c=n[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Wt(c),_=Wt(h),u=f!==_?ys(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new ai(e._pt,o,l,u,d-u,Sd),e._pt.u=_||0,e._props.push(l));Wm(o,n)};ri("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});ih[e>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return zn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Id={name:"css",register:Ed,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,y,S,M,b,w,A,R,x;Ad||Ed(),this.styles=this.styles||Zm(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(pi[g]&&gd(g,t,i,n,e,r)))){if(f=typeof h,_=ih[g],f==="function"&&(h=h.call(i,n,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ta(h)),_)_(this,e,g,h,i)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Un.lastIndex=0,Un.test(c)||(m=Wt(c),p=Wt(h),p?m!==p&&(c=ys(e,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,r):l[g],It(c)&&~c.indexOf("random(")&&(c=ta(c)),Wt(c+"")||c==="auto"||(c+=_i.units[g]||Wt(zn(e,g))||""),(c+"").charAt(1)==="="&&(c=zn(e,g))):c=zn(e,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in mn&&(g==="autoAlpha"&&(d===1&&zn(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),xs(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=mn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in kn,S){if(this.styles.save(g),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Ii(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=h,h=Ii(e,"perspective"),T?e.style.perspective=T:vs(e,"perspective")}u=parseFloat(h)}if(M||(b=e._gsap,b.renderTransform&&!t.parseTransform||fo(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new ai(this._pt,o,_t,0,1,b.renderTransform,b,0,-1),M.dep=1),g==="scale")this._pt=new ai(this._pt,b,"scaleY",b.scaleY,(y?Ys(b.scaleY,y+u):u)-b.scaleY||0,Sd),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(xi,0,o[xi]),h=Ob(h),b.svg?wd(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&xs(this,b,"zOrigin",b.zOrigin,p),xs(this,o,g,nh(c),nh(h)));continue}else if(g==="svgOrigin"){wd(e,h,1,w,0,this);continue}else if(g in jm){Bb(this,b,g,d,y?Ys(d,y+h):h);continue}else if(g==="smoothOrigin"){xs(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){zb(this,h,e);continue}}else g in o||(g=ra(g)||g);if(S||(u||u===0)&&(d||d===0)&&!vb.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Wt(h)||(g in _i.units?_i.units[g]:m),m!==p&&(d=ys(e,g,c,p)),this._pt=new ai(this._pt,S?b:o,g,d,(y?Ys(d,y+u):u)-d,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Sb:Sd),this._pt.u=p||0,S&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=bb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Mb);else if(g in o)Lb.call(this,e,g,c,y?y+h:h);else if(g in e)this.add(e,g,c||e[g],y?y+h:h,n,r);else if(g!=="parseTransform"){$c(g,h);continue}S||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}A&&Md(this)},render:function(e,t){if(t.tween._time||!Cd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zn,aliases:mn,getSetter:function(e,t,i){var n=mn[t];return n&&n.indexOf(",")<0&&(t=n),t in kn&&t!==xi&&(e._gsap.x||zn(e,"x"))?i&&Nm===i?t==="scale"?Ab:wb:(Nm=i||{})&&(t==="scale"?Cb:Rb):e.style&&!Jc(e.style[t])?Tb:~t.indexOf("-")?Eb:th(e,t)},core:{_removeProperty:vs,_getMatrix:Pd}};$t.utils.checkPrefix=ra;$t.core.getStyleSaver=Zm;(function(s,e,t,i){var n=ri(s+","+e+","+t,function(r){kn[r]=1});ri(e,function(r){_i.units[r]="deg",jm[r]=1}),mn[n[13]]=s+","+e,ri(i,function(r){var a=r.split(":");mn[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){_i.units[s]="px"});$t.registerPlugin(Id);var oi=$t.registerPlugin(Id)||$t,xw=oi.core.Tween;var tg={type:"change"},Ld={type:"start"},ng={type:"end"},sh=new es,ig=new Fi,kb=Math.cos(70*si.DEG2RAD),Dt=new D,vi=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dd=1e-6,rh=class extends Ha{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ni,this._lastTargetPosition=new D,this._quat=new Ni().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kr,this._sphericalDelta=new kr,this._scale=1,this._panOffset=new D,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new D,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hb.bind(this),this._onPointerDown=Vb.bind(this),this._onPointerUp=Gb.bind(this),this._onContextMenu=Jb.bind(this),this._onMouseWheel=Yb.bind(this),this._onKeyDown=qb.bind(this),this._onTouchStart=Zb.bind(this),this._onTouchMove=Kb.bind(this),this._onMouseDown=Wb.bind(this),this._onMouseMove=Xb.bind(this),this._interceptControlDown=$b.bind(this),this._interceptControlUp=jb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tg),this.update(),this.state=it.NONE}update(e=null){let t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=vi:i>Math.PI&&(i-=vi),n<-Math.PI?n+=vi:n>Math.PI&&(n-=vi),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Dt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sh.origin.copy(this.object.position),sh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sh.direction))<kb?this.object.lookAt(this.target):(ig.setFromNormalAndCoplanarPoint(this.object.up,this.target),sh.intersectPlane(ig,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Dd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dd||this._lastTargetPosition.distanceToSquared(this.target)>Dd?(this.dispatchEvent(tg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vi/60*this.autoRotateSpeed*e:vi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Dt.copy(n).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Vb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Hb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Gb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ng),this.state=it.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=it.DOLLY;break;case as.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}break;case as.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ld)}function Xb(s){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Yb(s){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(s.preventDefault(),this.dispatchEvent(Ld),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ng))}function qb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Zb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=it.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=it.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ld)}function Kb(s){switch(this._trackPointer(s),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=it.NONE}}function Jb(s){this.enabled!==!1&&s.preventDefault()}function $b(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qb=500,eS=50,tS=57,iS=2500,nS=8e3,Od={high:{pixelRatioCap:1.5,ambientParticlesVisible:!0,starfieldOpacity:.85,groundAnimationScale:1},medium:{pixelRatioCap:1.25,ambientParticlesVisible:!0,starfieldOpacity:.72,groundAnimationScale:.85},low:{pixelRatioCap:1,ambientParticlesVisible:!1,starfieldOpacity:.6,groundAnimationScale:.65}},Qi=class s{scene;camera;renderer;controls;circleTexture;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;joystickActive=!1;canvas;animationFrameId=null;lastFrameTime=0;isPaused=!1;groundWaterTexture=null;groundWaterNormalMap=null;groundMaterial=null;arenaBoundaryGroup=null;starField=null;resizeTimeout=null;cameraTarget=new D(0,1,0);frameListeners=new Set;performanceListeners=new Set;particleAnimations=new Map;visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);animateBound=e=>this.animate(e);nextParticleAnimationId=0;currentQualityLevel="high";currentPixelRatioCap=Od.high.pixelRatioCap;performanceSampleElapsedMs=0;performanceSampleFrameTimeTotalMs=0;performanceSampleFrames=0;smoothedFps=60;lastPublishedFrameTimeMs=1e3/60;lowPerformanceMs=0;stablePerformanceMs=0;groundAnimationScale=Od.high.groundAnimationScale;mainLight=null;isPortraitRotated=!1;disposeMediaQuery=null;disposePointerInterceptor=null;transformedPointerEvents=new WeakSet;characterDistanceScale=1;arenaBounds=or;groundMesh=null;init(e){this.canvas=e,this.createCircleTexture(),this.initPortraitDetection(),this.initScene(),this.installPointerInterceptor(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.disposeMediaQuery?.(),this.disposePointerInterceptor?.(),this.particleAnimations.clear(),this.controls?.dispose(),this.disposeObject(this.arenaBoundaryGroup),this.arenaBoundaryGroup=null,this.starField?.geometry.dispose(),this.starField?.material?.dispose(),this.starField=null,this.groundMaterial?.dispose(),this.groundMaterial=null,this.groundWaterTexture?.dispose(),this.groundWaterTexture=null,this.groundWaterNormalMap?.dispose(),this.groundWaterNormalMap=null,this.frameListeners.clear(),this.performanceListeners.clear(),this.scene?.clear(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.circleTexture?.dispose()}compileScene(){this.renderer.compile(this.scene,this.camera);let e=new ei(1,1);this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),e.dispose()}setCameraDistanceScale(e){if(this.characterDistanceScale=Math.max(e,1),this.updateCameraFarPlane(),this.controls&&this.canvas){let t=this.getViewportSettings(this.canvas.clientWidth,this.canvas.clientHeight);this.controls.minDistance=t.minDistance,this.controls.maxDistance=t.maxDistance,this.controls.update()}}updateCameraFarPlane(){let e=Math.max(3e3,3e3*this.characterDistanceScale*1.5);this.camera.far=e,this.camera.updateProjectionMatrix()}setArenaBounds(){this.arenaBounds=or,this.updateGroundSize()}setCameraFocus(e){this.cameraTarget.set(e.x,e.y,e.z),this.controls&&this.controls.target.copy(this.cameraTarget)}getFacingRotationY(e,t){return Math.atan2(t.x-e.x,t.z-e.z)}addFrameListener(e){return this.frameListeners.add(e),()=>{this.frameListeners.delete(e)}}addPerformanceListener(e){return this.performanceListeners.add(e),e(this.getPerformanceStats()),()=>{this.performanceListeners.delete(e)}}getQualityLevel(){return this.currentQualityLevel}registerParticleAnimation(e){e.attribute.setUsage(_u);let t=this.nextParticleAnimationId++;return this.particleAnimations.set(t,e),t}removeParticleAnimation(e){this.particleAnimations.delete(e)}createCircleTexture(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64),this.circleTexture=new Ls(e)}initPortraitDetection(){let e=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=e.matches;let t=i=>{this.isPortraitRotated=i.matches};e.addEventListener("change",t),this.disposeMediaQuery=()=>e.removeEventListener("change",t)}installPointerInterceptor(){let e=this.canvas,t=n=>{if(!this.isPortraitRotated||this.transformedPointerEvents.has(n))return;n.stopImmediatePropagation();let r=new PointerEvent(n.type,{bubbles:n.bubbles,cancelable:n.cancelable,composed:n.composed,clientX:n.clientY,clientY:window.innerWidth-n.clientX,screenX:n.screenY,screenY:window.innerWidth-n.screenX,pointerId:n.pointerId,pointerType:n.pointerType,isPrimary:n.isPrimary,button:n.button,buttons:n.buttons,width:n.width,height:n.height,pressure:n.pressure});this.transformedPointerEvents.add(r),e.dispatchEvent(r)},i=new AbortController;for(let n of["pointerdown","pointermove","pointerup","pointercancel"])e.addEventListener(n,t,{capture:!0,signal:i.signal});this.disposePointerInterceptor=()=>i.abort()}initScene(){let e=this.canvas,t=e.clientWidth,i=e.clientHeight,n=this.getViewportSettings(t,i);this.scene=new Da,this.scene.background=new Le(657931),this.baseCameraFov=n.fov,this.camera=new Zt(this.baseCameraFov,t/i,.1,1e3),this.camera.position.set(0,n.cameraY,n.cameraZ),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new Bc({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=Wa,this.renderer.toneMappingExposure=1.2,this.controls=new rh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=n.minDistance,this.controls.maxDistance=n.maxDistance,this.controls.minPolarAngle=n.minPolarAngle,this.controls.maxPolarAngle=n.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update();let r=new Va(16777215,40);this.scene.add(r);let a=new zr(16777215,8);a.position.set(5,10,5),this.scene.add(a),this.mainLight=a;let o=new zr(16777215,8);o.position.set(-5,8,-3),this.scene.add(o);let l=this.arenaBounds.maxX-this.arenaBounds.minX,c=this.arenaBounds.maxZ-this.arenaBounds.minZ,h=new On().load("assets/texture1.png");h.wrapS=Ps,h.wrapT=Ps;let u=new Ki({map:h,color:8912896,roughness:.4,metalness:.8,emissive:736064,emissiveIntensity:.25});this.groundMaterial=u;let d=new ns(l,c),f=new Ye(d,u);f.rotation.x=-Math.PI/2,f.position.set(0,0,0),this.scene.add(f),this.groundMesh=f,this.createArenaBoundaryObstacles(),this.applyQualityLevel(this.currentQualityLevel),this.compileScene()}createArenaBoundaryObstacles(){let e=new kt;this.arenaBoundaryGroup=e,this.scene.add(e)}updateGroundSize(){if(!this.groundMesh)return;let e=this.arenaBounds.maxX-this.arenaBounds.minX,t=this.arenaBounds.maxZ-this.arenaBounds.minZ,i=this.groundMesh.geometry;this.groundMesh.geometry=new ns(e,t),i.dispose()}animate(e=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(this.animateBound);let t=this.lastFrameTime===0?1e3/60:e-this.lastFrameTime;this.lastFrameTime=e;let i=Math.min(t/1e3,1/20),n=i*30;this.groundWaterNormalMap&&(this.groundWaterNormalMap.offset.x-=i*.0174*this.groundAnimationScale,this.groundWaterNormalMap.offset.y+=i*.0096*this.groundAnimationScale),this.particleAnimations.forEach(r=>{let a=r.attribute.array;for(let o=0;o<r.particleCount;o++)r.angles[o]+=r.angularVelocities[o]*n,a[o*3]=Math.cos(r.angles[o])*r.radii[o],a[o*3+2]=Math.sin(r.angles[o])*r.radii[o];r.attribute.needsUpdate=!0}),this.starField&&(this.starField.rotation.y+=i*.0024),this.frameListeners.forEach(r=>{r(i,e)}),this.controls.enabled=!this.timeSlowActive&&!this.joystickActive,this.controls.target.copy(this.cameraTarget),this.controls.update(i),this.renderer.render(this.scene,this.camera),this.updatePerformanceStats(t)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this.renderer)return;let e=this.canvas.clientWidth,t=this.canvas.clientHeight,i=this.getViewportSettings(e,t);this.camera.aspect=e/t,this.camera.fov=i.fov,this.camera.updateProjectionMatrix(),this.camera.position.set(0,i.cameraY,i.cameraZ),this.cameraOriginalPosition=new D(0,i.cameraY,i.cameraZ),this.baseCameraFov=i.fov,this.controls.minDistance=i.minDistance,this.controls.maxDistance=i.maxDistance,this.controls.minPolarAngle=i.minPolarAngle,this.controls.maxPolarAngle=i.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update(),this.updateCameraFarPlane(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.publishPerformanceStats()}applyQualityLevel(e){let t=Od[e];this.currentQualityLevel=e,this.currentPixelRatioCap=t.pixelRatioCap,this.groundAnimationScale=t.groundAnimationScale,this.renderer&&this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.starField&&(this.starField.material.opacity=t.starfieldOpacity),this.lowPerformanceMs=0,this.stablePerformanceMs=0,this.publishPerformanceStats()}updatePerformanceStats(e){let t=e>0?1e3/e:60;if(this.smoothedFps=si.lerp(this.smoothedFps,t,.12),this.performanceSampleElapsedMs+=e,this.performanceSampleFrameTimeTotalMs+=e,this.performanceSampleFrames+=1,this.smoothedFps<eS?(this.lowPerformanceMs+=e,this.stablePerformanceMs=0):this.smoothedFps>tS?(this.stablePerformanceMs+=e,this.lowPerformanceMs=0):(this.lowPerformanceMs=0,this.stablePerformanceMs=0),this.lowPerformanceMs>=iS){let i=this.getAdjacentQualityLevel("down");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}else if(this.stablePerformanceMs>=nS){let i=this.getAdjacentQualityLevel("up");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}this.performanceSampleElapsedMs>=Qb&&(this.lastPublishedFrameTimeMs=this.performanceSampleFrameTimeTotalMs/Math.max(this.performanceSampleFrames,1),this.performanceSampleElapsedMs=0,this.performanceSampleFrameTimeTotalMs=0,this.performanceSampleFrames=0,this.publishPerformanceStats())}getAdjacentQualityLevel(e){let t=["low","medium","high"],i=t.indexOf(this.currentQualityLevel);return e==="up"?t[Math.min(i+1,t.length-1)]:t[Math.max(i-1,0)]}publishPerformanceStats(){let e=this.getPerformanceStats();this.performanceListeners.forEach(t=>{t(e)})}getPerformanceStats(){return{fps:Number((1e3/this.lastPublishedFrameTimeMs).toFixed(1)),frameTimeMs:Number(this.lastPublishedFrameTimeMs.toFixed(2)),qualityLevel:this.currentQualityLevel,pixelRatio:Number(this.getEffectivePixelRatio().toFixed(2))}}getEffectivePixelRatio(){return Math.min(window.devicePixelRatio,this.currentPixelRatioCap)}getViewportSettings(e,t){let i=e/t,n=e<520,r=i<.9,a=n||r||t<520,o=60,l=10,c=4,h=3,u=10,d=Math.PI/4.8,f=Math.PI/2.45;return a&&(l=12,h=4,u=12,f=Math.PI/2.1),h*=this.characterDistanceScale,u*=this.characterDistanceScale,{fov:o,cameraZ:l,cameraY:c,minDistance:h,maxDistance:u,minPolarAngle:d,maxPolarAngle:f}}disposeObject(e){e&&e.traverse(t=>{if(t instanceof Ye)if(t.geometry.dispose(),Array.isArray(t.material))t.material.forEach(i=>{for(let n of Object.values(i))n instanceof fi&&n.dispose();i.dispose()});else{for(let i of Object.values(t.material))i instanceof fi&&i.dispose();t.material.dispose()}})}static \u0275fac=function(t){return new(t||s)};static \u0275prov=tn({token:s,factory:s.\u0275fac})};var sS=/^[og]\s*(.+)?/,rS=/^mtllib /,aS=/^usemtl /,oS=/^usemap /,sg=/\s+/,rg=new D,Fd=new D,ag=new D,og=new D,Vi=new D,ah=new Le;function lS(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let n=this.vertices,r=this.object.geometry.vertices;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let n=this.normals,r=this.object.geometry.normals;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){let n=this.vertices,r=this.object.geometry.normals;rg.fromArray(n,e),Fd.fromArray(n,t),ag.fromArray(n,i),Vi.subVectors(ag,Fd),og.subVectors(rg,Fd),Vi.cross(og),Vi.normalize(),r.push(Vi.x,Vi.y,Vi.z),r.push(Vi.x,Vi.y,Vi.z),r.push(Vi.x,Vi.y,Vi.z)},addColor:function(e,t,i){let n=this.colors,r=this.object.geometry.colors;n[e]!==void 0&&r.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&r.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&r.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){let n=this.uvs,r=this.object.geometry.uvs;r.push(n[e+0],n[e+1]),r.push(n[t+0],n[t+1]),r.push(n[i+0],n[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,r,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let _=this.normals.length;u=this.parseNormalIndex(o,_),d=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let _=this.uvs.length;u=this.parseUVIndex(n,_),d=this.parseUVIndex(r,_),f=this.parseUVIndex(a,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){let r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],n))}};return s.startObject("",!1),s}var oh=class extends Wr{constructor(e){super(e),this.materials=null}load(e,t,i,n){let r=this,a=new za(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){let t=new lS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(sg);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ah.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),zt),t.colors.push(ah.r,ah.g,ah.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(sg),f=[];for(let g=0,m=d.length;g<m;g++){let p=d[g];if(p.length>0){let y=p.split("/");f.push(y)}}let _=f[0];for(let g=1,m=f.length-1;g<m;g++){let p=f[g],y=f[g+1];t.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let _=0,g=u.length;_<g;_++){let m=u[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((n=sS.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);t.startObject(u)}else if(aS.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(rS.test(c))t.materialLibraries.push(c.substring(7).trim());else if(oS.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new kt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",_=!1;if(h.vertices.length===0)continue;let g=new Bt;g.setAttribute("position",new rt(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new rt(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new rt(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new rt(h.uvs,2));let m=[];for(let y=0,S=u.length;y<S;y++){let M=u[y],b=M.name+"_"+M.smooth+"_"+_,w=t.materials[b];if(this.materials!==null){if(w=this.materials.create(M.name),d&&w&&!(w instanceof ts)){let A=new ts;ii.prototype.copy.call(A,w),A.color.copy(w.color),w=A}else if(f&&w&&!(w instanceof Ln)){let A=new Ln({size:10,sizeAttenuation:!1});ii.prototype.copy.call(A,w),A.color.copy(w.color),A.map=w.map,w=A}}w===void 0&&(d?w=new ts:f?w=new Ln({size:1,sizeAttenuation:!1}):w=new Ua,w.name=M.name,w.flatShading=!M.smooth,w.vertexColors=_,t.materials[b]=w),m.push(w)}let p;if(m.length>1){for(let y=0,S=u.length;y<S;y++){let M=u[y];g.addGroup(M.groupStart,M.groupCount,y)}d?p=new Ur(g,m):f?p=new Ds(g,m):p=new Ye(g,m)}else d?p=new Ur(g,m[0]):f?p=new Ds(g,m[0]):p=new Ye(g,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){let o=new Ln({size:1,sizeAttenuation:!1}),l=new Bt;l.setAttribute("position",new rt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new rt(t.colors,3)),o.vertexColors=!0);let c=new Ds(l,o);r.add(c)}return r}};var cS="assets/models/hominid_skull.obj3e95cd92-63a9-48ec-a41f-461a344caf62.obj",hS="assets/texture.jpg",uS=1.6,dS=new D(0,.2,.4),fS=new Zi(Math.PI,-Math.PI,-Math.PI),aa=class s{skullTemplatePromise=null;skullTexture=null;attachSkullModel(e,t){return this.loadSkullTexture().then(i=>(t.map=i,t.needsUpdate=!0,this.loadSkullTemplate())).then(i=>{let n=this.createSkullAnchor(i,t);if(e.userData.disposed){this.disposeSkullAnchor(n,t);return}e.add(n)}).catch(()=>{if(e.userData.disposed){t.dispose();return}})}loadSkullTexture(){return this.skullTexture?Promise.resolve(this.skullTexture):new On().loadAsync(hS).then(t=>(t.colorSpace=zt,this.skullTexture=t,t))}loadSkullTemplate(){if(!this.skullTemplatePromise){let e=new oh;this.skullTemplatePromise=e.loadAsync(cS).then(t=>{let i=this.normalizeSkullTemplate(t),r=new Ei().setFromObject(i).getSize(new D),a=Math.max(r.x,r.y,r.z);return a>0&&i.scale.setScalar(uS/a),i})}return this.skullTemplatePromise}normalizeSkullTemplate(e){e.updateMatrixWorld(!0);let t=new kt,i=[];e.traverse(a=>{if(!(a instanceof Ye))return;let o=a.geometry.clone();o.applyMatrix4(a.matrixWorld);let l=new Ye(o);t.add(l),i.push(l)});let r=new Ei().setFromObject(t).getCenter(new D);return i.forEach(a=>{a.geometry.translate(-r.x,-r.y,-r.z)}),t}createSkullAnchor(e,t){let i=new kt;i.position.copy(dS),i.rotation.copy(fS);let n=e.clone(!0);return n.traverse(r=>{r instanceof Ye&&(r.geometry=r.geometry.clone(),r.material=t,r.castShadow=!0,r.receiveShadow=!0)}),i.add(n),i}disposeSkullAnchor(e,t){e.traverse(i=>{i instanceof Ye&&i.geometry.dispose()}),t.dispose()}static \u0275fac=function(t){return new(t||s)};static \u0275prov=tn({token:s,factory:s.\u0275fac})};var gn=.8,lg=1.5,pS="#00ff88",mS=2.6,cg=1.6,gS=128,_S=22,js=class s{battleCharacterSkullService=dt(aa);persistentShields=new Map;threatIndicators=new Map;sharedThreatTexture=null;createCharacterMesh(e,t){let i=new kt,r=new On().load("assets/texture.jpg"),a=new Ki({color:21845,roughness:0,metalness:0,map:r}),l=new Ki({color:e,roughness:0,metalness:0}).clone(),c=this.battleCharacterSkullService.attachSkullModel(i,l),h=l,u=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],d=.8,f=.55,_=.7,g=(M,b,w,...A)=>{A.forEach(R=>{let x=new Ye(w,h),T=new ti;T.position.copy(b.position),T.rotation.copy(b.rotation),x.position.set(0,R,0),T.add(x),M.add(T)})},m=new Os(.12,.08,d,5),p=new Os(.1,.06,f,5),y=new Os(.07,.03,_,5),S=new Na(.07,5,4);for(let M=0;M<2;M++){let b=M===0?-1:1;for(let w=0;w<4;w++){let A=new kt,R=u[w]*(M===0?1:-1),x=(Math.PI/2.8+w*.05)*b,T=x*1.2,P=x*.75,F=Math.PI/5.3*b,N=new D(.2*b,-.1,0),G=new Ye(m,h);G.position.copy(N),G.rotation.z=T,A.add(G);let V=this.getConnectedSegmentPosition(N,T,d,-1,P,f,1),k=new Ye(p,h);k.position.copy(V),k.rotation.z=P,A.add(k),g(A,k,S,f/2,-f/2);let B=this.getConnectedSegmentPosition(V,P,f,-1,F,_,1),q=new Ye(y,h);q.position.copy(B),q.rotation.z=F,A.add(q);let te=[.5,.25,0,-.2][w];A.rotation.y=R,A.position.set(.4*b,.3,te),i.add(A);let re=R,Ae=-.02+(Math.random()-.5)*.04,Ie=Math.PI/120*b+(Math.random()-.5)*.02;A.rotation.set(Ae,re,Ie),i.userData.legs||(i.userData.legs=[]),i.userData.legs.push({group:A,baseRotation:{x:Ae,y:re,z:Ie},side:b,index:w})}}return i.userData.legMaterial=h,i.userData.secondMaterial=a,i.position.set(t.x,t.y+gn,t.z),{mesh:i,ready:c}}getConnectedSegmentPosition(e,t,i,n,r,a,o){return e.clone().add(this.getSegmentEndpointOffset(i,t,n)).sub(this.getSegmentEndpointOffset(a,r,o))}getSegmentEndpointOffset(e,t,i){return new D(0,e/2*i,0).applyAxisAngle(new D(0,0,1),t)}swapLegMaterial(e,t){let i=t?e.userData.secondMaterial:e.userData.legMaterial;i&&e.traverse(n=>{n instanceof Ye&&(n.material=i)})}doShieldsOverlap(e,t,i){let n=e.position.x-t.position.x,r=e.position.z-t.position.z,a=n*n+r*r,o=lg*(i??hi(e))+lg*hi(t);return a<o*o}disposeAllShields(){this.persistentShields.forEach((e,t)=>this.disposePersistentShield(t)),this.persistentShields.clear()}disposePersistentShield(e){let t=this.persistentShields.get(e);if(!t)return;let{shieldGroup:i,materials:n,geometries:r,idleTweens:a}=t;a.forEach(o=>o.kill()),e.remove(i),r.forEach(o=>o.dispose()),n.forEach(o=>o.dispose()),this.persistentShields.delete(e)}showThreatIndicator(e){if(this.threatIndicators.has(e))return;this.sharedThreatTexture||(this.sharedThreatTexture=this.createThreatTexture());let t=new Fr({map:this.sharedThreatTexture,transparent:!0,depthWrite:!1}),i=hi(e),n=Hi(_S),r=i<n?n/i:1,a=new Oa(t);a.scale.set(cg*r,cg*r,1),a.position.y=mS*r,a.renderOrder=1,e.add(a),this.threatIndicators.set(e,{sprite:a,material:t,texture:this.sharedThreatTexture})}createThreatTexture(){let e=gS,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),n=e/2,r=e/2,a=i.createRadialGradient(n,r,e*.28,n,r,e*.48);a.addColorStop(0,"rgba(0, 255, 136, 0)"),a.addColorStop(.5,"rgba(0, 255, 136, 0.3)"),a.addColorStop(.7,"rgba(0, 255, 136, 0.7)"),a.addColorStop(.85,"rgba(0, 255, 136, 0.3)"),a.addColorStop(1,"rgba(0, 255, 136, 0)"),i.fillStyle=a,i.fillRect(0,0,e,e),i.beginPath(),i.arc(n,r,e*.35,0,Math.PI*2),i.lineWidth=e*.06,i.strokeStyle=pS,i.globalAlpha=.9,i.stroke(),i.globalAlpha=1;let o=new Ls(t);return o.needsUpdate=!0,o}removeThreatIndicator(e){let t=this.threatIndicators.get(e);t&&(e.remove(t.sprite),t.material.dispose(),this.threatIndicators.delete(e))}disposeAllThreatIndicators(){this.threatIndicators.forEach((e,t)=>this.removeThreatIndicator(t)),this.sharedThreatTexture&&(this.sharedThreatTexture.dispose(),this.sharedThreatTexture=null)}disposeCharacterMesh(e,t){e&&(e.userData.disposed=!0,t.remove(e),e.traverse(i=>{i instanceof Ye&&(i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(n=>{n.map?.dispose(),n.emissiveMap?.dispose(),n.roughnessMap?.dispose(),n.metalnessMap?.dispose(),n.normalMap?.dispose(),n.dispose()}):(i.material.map?.dispose(),i.material.emissiveMap?.dispose(),i.material.roughnessMap?.dispose(),i.material.metalnessMap?.dispose(),i.material.normalMap?.dispose(),i.material.dispose()))}))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=tn({token:s,factory:s.\u0275fac})};var Nd="battleMovementState",Vn="battleMovementLocked",lh=.75,hg=Math.PI*2,xS=132,vS=36,yS=540;function Di(s){return s?s.userData[Nd]??null:null}function ch(s,e){let t=Di(s);return t?{x:t.basePosition.x+t.offset.x,y:t.basePosition.y+t.offset.y,z:t.basePosition.z+t.offset.z}:e}var Qs=class s{document=dt(Qd);sceneService=dt(Qi);pressedKeys=new Set;upAxis=new D(0,1,0);forwardVector=new D;rightVector=new D;moveVector=new D;meshBounds=new Ei;arenaBounds=or;movementSpeed=3.4;walkCycleSpeed=6;keyboardMoveCodes=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);keyDownHandler=this.handleKeyDown.bind(this);keyUpHandler=this.handleKeyUp.bind(this);blurHandler=this.handleBlur.bind(this);canvas=null;controlledMesh=null;controlledMeshBoundaryPadding=lh;idleWanderStates=[];removeFrameListener=null;joystickInput=null;characterColliders=new Map;collisionSeparation=new D;smoothedAnimationDelta=1/60;threatIndicatorsEnabled=!1;init(e){this.canvas!==e&&(this.disposeInputListeners(),this.canvas=e,window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("blur",this.blurHandler),this.removeFrameListener||(this.removeFrameListener=this.sceneService.addFrameListener(t=>{this.smoothedAnimationDelta+=(t-this.smoothedAnimationDelta)*.2,this.updateControlledMesh(t),this.updateIdleWanderMeshes(t)})))}dispose(){this.disposeInputListeners(),this.pressedKeys.clear(),this.joystickInput=null,this.controlledMesh=null,this.controlledMeshBoundaryPadding=lh,this.clearIdleWanderCharacter(),this.characterColliders.clear(),this.smoothedAnimationDelta=1/60,this.threatIndicatorsEnabled=!1,this.removeFrameListener&&(this.removeFrameListener(),this.removeFrameListener=null)}setThreatIndicatorsEnabled(e){this.threatIndicatorsEnabled=e}setArenaBounds(){this.arenaBounds=or}isMobileDevice(){return window.matchMedia("(pointer: coarse)").matches}registerCharacterMesh(e){this.characterColliders.set(e,this.measureBoundaryPadding(e)*.4)}unregisterCharacterMesh(e){this.characterColliders.delete(e)}setJoystickDirection(e,t){this.joystickInput={right:e,forward:t}}clearJoystickDirection(){this.joystickInput=null}setControlledCharacter(e,t,i){if(this.controlledMesh=e,!e||!t){this.controlledMeshBoundaryPadding=lh;return}this.controlledMeshBoundaryPadding=this.measureBoundaryPadding(e)*hi(e);let n=gn*hi(e)*lr;e.userData[Nd]={basePosition:{x:t.x,y:t.y+n,z:t.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i},e.userData[Vn]=!1,this.sceneService.setCameraFocus({x:t.x,y:t.y+n,z:t.z})}addIdleWanderCharacter(e,t,i){!e||!t||(this.removeIdleWanderCharacter(e),Di(e)||(e.userData[Nd]={basePosition:{x:t.x,y:t.y+gn*hi(e)*lr,z:t.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}),e.userData[Vn]=!1,this.idleWanderStates.push({mesh:e,boundaryPadding:this.measureBoundaryPadding(e)*hi(e),nextRetargetInSeconds:si.randFloat(.3,2),targetOffset:null}))}removeIdleWanderCharacter(e){let t=this.idleWanderStates.findIndex(r=>r.mesh===e);if(t===-1)return;let i=this.idleWanderStates[t],n=Di(i.mesh);n?.isWalking&&this.stopWalking(i.mesh,n,!1),this.idleWanderStates.splice(t,1)}hasIdleWanderCharacter(e){return this.idleWanderStates.some(t=>t.mesh===e)}clearIdleWanderCharacter(){for(let e of this.idleWanderStates){let t=Di(e.mesh);t?.isWalking&&this.stopWalking(e.mesh,t,!1)}this.idleWanderStates=[]}disposeInputListeners(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("keyup",this.keyUpHandler),window.removeEventListener("blur",this.blurHandler),this.canvas=null}handleKeyDown(e){!this.controlledMesh||this.isEditableTarget(e.target)||this.keyboardMoveCodes.has(e.code)&&this.pressedKeys.add(e.code)}handleKeyUp(e){this.pressedKeys.delete(e.code)}handleBlur(){this.pressedKeys.clear()}updateControlledMesh(e){if(!this.controlledMesh)return;let t=Di(this.controlledMesh);if(!t)return;if(this.controlledMesh.userData[Vn]){t.isWalking&&this.stopWalking(this.controlledMesh,t);return}let i=this.getMoveDirection();if(!i){t.isWalking&&this.stopWalking(this.controlledMesh,t);return}t.isWalking=!0;let n=this.getWalkAnimationMultiplier(this.controlledMesh);t.walkCycle=(t.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed*n)%hg;let r=ch(this.controlledMesh,t.basePosition),a=this.movementSpeed*vh(this.controlledMesh)*e,o=this.clampToArenaBounds({x:r.x+i.x*a,y:t.basePosition.y,z:r.z+i.z*a}),l=this.resolveCharacterCollision(this.controlledMesh,o);t.offset.x=l.x-t.basePosition.x,t.offset.z=l.z-t.basePosition.z;let c=this.isMobileDevice(),h=c?0:.05*Math.min(n,2.5),u=.035*Math.min(n,2);this.controlledMesh.position.x=l.x,this.controlledMesh.position.y=t.basePosition.y+Math.sin(t.walkCycle*2)*h,this.controlledMesh.position.z=l.z;let f=c&&this.threatIndicatorsEnabled?t.basePosition.y:this.controlledMesh.position.y;this.sceneService.setCameraFocus({x:this.controlledMesh.position.x,y:f,z:this.controlledMesh.position.z});let _={x:l.x+i.x,z:l.z+i.z};this.controlledMesh.rotation.y=this.sceneService.getFacingRotationY(l,_),this.controlledMesh.rotation.x=Math.sin(t.walkCycle*2)*u,this.controlledMesh.rotation.z=i.x*.05;let g=Xt(this.controlledMesh);this.controlledMesh.scale.set((t.side==="left"?1:-1)*g,g,g),this.applyWalkPose(this.controlledMesh,t.walkCycle,n)}updateIdleWanderMeshes(e){for(let t of this.idleWanderStates)this.updateSingleIdleWanderMesh(t,e)}updateSingleIdleWanderMesh(e,t){let{mesh:i}=e,n=Di(i);if(!n)return;if(i.userData[Vn]){n.isWalking&&this.stopWalking(i,n,!1);return}e.nextRetargetInSeconds-=t;let r=ch(i,n.basePosition);this.shouldRetargetIdleWander(e,r)&&this.retargetIdleWander(e,r,n.basePosition.y);let a=e.targetOffset;if(!a){n.isWalking&&this.stopWalking(i,n,!1);return}let o={x:n.basePosition.x+a.x,y:n.basePosition.y,z:n.basePosition.z+a.z},l=this.moveVector.set(o.x-r.x,0,o.z-r.z),c=l.length();if(c<.12){e.targetOffset=null,e.nextRetargetInSeconds=si.randFloat(.45,1.35),n.isWalking&&this.stopWalking(i,n,!1);return}l.divideScalar(c),n.isWalking=!0,n.walkCycle=(n.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%hg;let h=Math.min(.9*hi(i)*t,c),u=this.clampToArenaBounds({x:r.x+l.x*h,y:n.basePosition.y,z:r.z+l.z*h},e.boundaryPadding),d=this.resolveCharacterCollision(i,u);if(Math.hypot(d.x-r.x,d.z-r.z)<.001){e.targetOffset=null,e.nextRetargetInSeconds=si.randFloat(.2,.55),n.isWalking&&this.stopWalking(i,n,!1);return}n.offset.x=d.x-n.basePosition.x,n.offset.z=d.z-n.basePosition.z,i.position.x=d.x,i.position.y=n.basePosition.y+Math.sin(n.walkCycle*2)*.035,i.position.z=d.z,i.rotation.y=this.sceneService.getFacingRotationY(d,o),i.rotation.x=Math.sin(n.walkCycle*2)*.018,i.rotation.z=l.x*.025;let _=hi(i);i.scale.set((n.side==="left"?1:-1)*_,_,_),this.applyWalkPose(i,n.walkCycle)}getMoveDirection(){return this.getKeyboardDirection()??this.getJoystickDirection()}getKeyboardDirection(){return this.pressedKeys.size===0||(this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),(this.pressedKeys.has("KeyW")||this.pressedKeys.has("ArrowUp"))&&this.moveVector.add(this.forwardVector),(this.pressedKeys.has("KeyS")||this.pressedKeys.has("ArrowDown"))&&this.moveVector.sub(this.forwardVector),(this.pressedKeys.has("KeyD")||this.pressedKeys.has("ArrowRight"))&&this.moveVector.add(this.rightVector),(this.pressedKeys.has("KeyA")||this.pressedKeys.has("ArrowLeft"))&&this.moveVector.sub(this.rightVector),this.moveVector.lengthSq()<1e-4)?null:this.moveVector.normalize()}getJoystickDirection(){if(!this.joystickInput)return null;this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),this.moveVector.addScaledVector(this.forwardVector,this.joystickInput.forward),this.moveVector.addScaledVector(this.rightVector,this.joystickInput.right);let e=this.moveVector.length();return e<1e-4?null:(e>1&&this.moveVector.divideScalar(e),this.moveVector)}stopWalking(e,t,i=!0){t.isWalking=!1,e.position.y=t.basePosition.y,i&&this.sceneService.setCameraFocus(e.position),e.rotation.x=0,e.rotation.z=0,this.resetLegPose(e)}applyWalkPose(e,t,i=1){let n=e.userData.legs;if(!Array.isArray(n))return;let r=1+(Math.min(i,4)-1)*.25,a=.18*r,o=.12*r;for(let l of n){let c=t+l.index*.8+(l.side<0?Math.PI:0),h=Math.sin(c)*a,u=Math.max(0,Math.sin(c))*o;l.group.rotation.x=l.baseRotation.x-u,l.group.rotation.y=l.baseRotation.y+h,l.group.rotation.z=l.baseRotation.z+h*.25*l.side}}getWalkAnimationMultiplier(e){let t=vh(e),i=Xt(e);return i<=0||t<=i?1:Math.sqrt(t/i)}resetLegPose(e){let t=e.userData.legs;if(Array.isArray(t))for(let i of t)i.group.rotation.set(i.baseRotation.x,i.baseRotation.y,i.baseRotation.z)}clampToArenaBounds(e,t=this.controlledMeshBoundaryPadding){let i=(this.arenaBounds.maxX-this.arenaBounds.minX)/2-.5,n=(this.arenaBounds.maxZ-this.arenaBounds.minZ)/2-.5,r=Math.min(t,i,n);return{x:si.clamp(e.x,this.arenaBounds.minX+r,this.arenaBounds.maxX-r),y:e.y,z:si.clamp(e.z,this.arenaBounds.minZ+r,this.arenaBounds.maxZ-r)}}shouldRetargetIdleWander(e,t){if(e.nextRetargetInSeconds>0)return!1;if(!e.targetOffset)return!0;let i=Di(e.mesh);if(!i)return!1;let n={x:i.basePosition.x+e.targetOffset.x,y:i.basePosition.y,z:i.basePosition.z+e.targetOffset.z};return t.x===n.x&&t.z===n.z}retargetIdleWander(e,t,i){let n=this.getIdleWanderDistance(e.mesh),r=this.clampToArenaBounds({x:t.x+si.randFloatSpread(n*2),y:i,z:t.z+si.randFloatSpread(n*2)},e.boundaryPadding),a=Di(e.mesh);a&&(e.targetOffset=new D(r.x-a.basePosition.x,0,r.z-a.basePosition.z),e.nextRetargetInSeconds=si.randFloat(.6,1.8))}getIdleWanderDistance(e){let t=hi(e);return si.clamp(xS*Math.max(t,.9),vS,yS)}measureBoundaryPadding(e){e.updateMatrixWorld(!0),this.meshBounds.setFromObject(e);let t=Math.max(Math.abs(this.meshBounds.min.x-e.position.x),Math.abs(this.meshBounds.max.x-e.position.x)),i=Math.max(Math.abs(this.meshBounds.min.z-e.position.z),Math.abs(this.meshBounds.max.z-e.position.z)),n=Math.max(Math.abs(e.scale.x),Math.abs(e.scale.y),Math.abs(e.scale.z),.01);return Math.max(Math.hypot(t,i)/n,lh)}resolveCharacterCollision(e,t){let i=this.characterColliders.get(e);if(i===void 0)return t;let n=i*Xt(e),r=t.x,a=t.z;for(let[o,l]of this.characterColliders){if(o===e||!o.visible)continue;let c=r-o.position.x,h=a-o.position.z,u=c*c+h*h,d=n+l*Xt(o);if(u>=d*d)continue;let f=Math.sqrt(u);if(f<.001)r+=d;else{let _=d-f;this.collisionSeparation.set(c/f,0,h/f),r+=this.collisionSeparation.x*_,a+=this.collisionSeparation.z*_}}return{x:r,y:t.y,z:a}}isEditableTarget(e){return e instanceof this.document.defaultView.HTMLElement?e.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(e.tagName):!1}static \u0275fac=function(t){return new(t||s)};static \u0275prov=tn({token:s,factory:s.\u0275fac})};var po=class s{sceneService=dt(Qi);battleCharacterBuilderService=dt(js);actionToken=0;dispose(){this.battleCharacterBuilderService.disposeAllShields()}createTeleportationEntrance(e,t,i){let n=Xt(e);e.position.set(t.x,t.y+gn*n,t.z),e.scale.set(.01,.01,.01),e.visible=!0,oi.to(e.scale,{x:(i==="right"?-1:1)*n,y:n,z:n,duration:.4,ease:"back.out(1.4)"})}animateAction(e,t,i){this.actionToken+=1;let n=t.get(e.attackerId),r=t.get(e.defenderId);if(!n||!r)return;let a=n.mesh,o=r.mesh,l=n.side==="left";a.userData[Vn]=!0,o.userData[Vn]=!0,oi.killTweensOf(a.position),oi.killTweensOf(a.rotation),oi.killTweensOf(a.scale),oi.killTweensOf(o.position),oi.killTweensOf(o.rotation),oi.killTweensOf(o.scale),this.killLegTweens(a),this.killLegTweens(o),(()=>{let h=Xt(a),u=Xt(o),d=this.getCharacterBasePosition(a,n.character),f=this.getCharacterBasePosition(o,r.character),_=this.sceneService.getFacingRotationY(d,f),g=o.rotation.y,m=la({},d),p=l?-1:1,y=this.getSpiderAttackMotion(d,f,p,h,u),S=oi.timeline();return a.position.set(d.x,d.y,d.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*h,h,h),o.position.set(f.x,f.y,f.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*u,u,u),S.to(a.scale,{x:(l?1.18:-1.18)*h,y:.84*h,z:1.12*h,duration:.18,ease:"power2.inOut"}),S.to(a.position,{x:y.windupPosition.x,y:y.windupPosition.y,z:y.windupPosition.z,duration:.18,ease:"power2.inOut"},"<"),S.to(a.rotation,{x:-.18,y:_+y.windupYawOffset,z:.08*p,duration:.18,ease:"power2.inOut"},"<"),S.to(a.position,{x:y.impactPosition.x,y:y.impactPosition.y,z:y.impactPosition.z,duration:.14,ease:"power4.in",onComplete:()=>{let M=oi.timeline(),b=(l?-.6:.6)*u;M.to(o.scale,{x:b,y:.6*u,z:.75*u,duration:.06,ease:"power3.in"},"<"),M.to(o.scale,{x:(l?-1.1:1.1)*u,y:.85*u,z:1.05*u,duration:.12,ease:"power1.out"},"<"),M.to(o.scale,{x:(l?-.9:.9)*u,y:1.1*u,z:.9*u,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}),S.to(a.rotation,{x:.28,y:_+y.impactYawOffset,z:.16*p,duration:.14,ease:"power4.in"},"<"),S.to(a.scale,{x:(l?1.28:-1.28)*h,y:.76*h,z:1.24*h,duration:.12,ease:"power3.out"},"<"),S.to(a.position,{x:y.recoilPosition.x,y:y.recoilPosition.y,z:y.recoilPosition.z,duration:.12,ease:"sine.out"}),S.to(a.rotation,{x:.08,y:_-y.impactYawOffset*.35,z:-.1*p,duration:.12,ease:"sine.out"},"<"),S.to(a.position,{x:m.x,y:m.y+.04,z:m.z,duration:.28,ease:"power2.inOut"}),S.to(a.rotation,{x:.02,y:_,z:0,duration:.28,ease:"power2.inOut"},"<"),S.to(a.scale,{x:(l?1:-1)*h,y:h,z:h,duration:.24,ease:"power2.out"},"<"),S.to(a.position,{y:m.y,duration:.12,ease:"sine.out"}),S.to(a.rotation,{x:0,duration:.12,ease:"sine.out"},"<"),S.to(o.position,{x:f.x,y:f.y,z:f.z,duration:.5,ease:"power2.inOut"},"-=0.5"),S.to(o.rotation,{z:0,y:g,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),S.to(o.scale,{x:(l?-1:1)*u,y:u,z:u,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1"),S.call(()=>{let M=Xt(a),b=Xt(o),w=this.getCharacterBasePosition(a,n.character),A=this.getCharacterBasePosition(o,r.character);a.position.set(w.x,w.y,w.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*M,M,M),o.position.set(A.x,A.y,A.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*b,b,b),a.userData[Vn]=!1,o.userData[Vn]=!1,i?.()}),S})()}getSpiderAttackMotion(e,t,i,n,r){let a=new D(t.x-e.x,0,t.z-e.z);a.lengthSq()<1e-4?a.set(i<0?1:-1,0,0):a.normalize();let o=new D(-a.z,0,a.x).multiplyScalar(i),l=(n+r)/2,c=.3*l,h=1.28*r,u=1.85*l;return{windupPosition:{x:e.x-a.x*.28*n+o.x*.18*n,y:e.y-.08*n,z:e.z-a.z*.28*n+o.z*.18*n},impactPosition:{x:t.x-a.x*h+o.x*.12*l,y:t.y+c,z:t.z-a.z*h+o.z*.12*l},recoilPosition:{x:t.x-a.x*u-o.x*.08*l,y:e.y+.12*n,z:t.z-a.z*u-o.z*.08*l},windupYawOffset:.08*i,impactYawOffset:-.06*i}}getCharacterBasePosition(e,t){return ch(e,{x:t.position.x,y:t.position.y+gn*Xt(e),z:t.position.z})}killLegTweens(e){let t=e.userData.legs;if(t)for(let i of t)oi.killTweensOf(i.group.rotation)}static \u0275fac=function(t){return new(t||s)};static \u0275prov=tn({token:s,factory:s.\u0275fac})};var MS=["base"],bS=["thumb"],Ud=.2,SS=.1,hh=class s{ngZone=dt(bo);movementService=dt(Qs);sceneService=dt(Qi);baseRef=ph.required("base");thumbRef=ph.required("thumb");activeTouchId=null;baseCenterX=0;baseCenterY=0;maxOffset=36;isPortraitRotated=!1;disposeListeners=null;disposeMediaQuery=null;constructor(){So(()=>{this.ngZone.runOutsideAngular(()=>{this.initPortraitDetection(),this.bindTouchListeners()})})}ngOnDestroy(){this.disposeListeners?.(),this.disposeMediaQuery?.(),this.movementService.clearJoystickDirection()}initPortraitDetection(){let e=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=e.matches;let t=i=>{this.isPortraitRotated=i.matches};e.addEventListener("change",t),this.disposeMediaQuery=()=>e.removeEventListener("change",t)}bindTouchListeners(){let e=this.baseRef().nativeElement,t=r=>{if(r.preventDefault(),this.activeTouchId!==null)return;let a=r.changedTouches[0];this.activeTouchId=a.identifier;let o=e.getBoundingClientRect(),l=this.thumbRef().nativeElement.getBoundingClientRect();this.baseCenterX=o.left+o.width/2,this.baseCenterY=o.top+o.height/2,this.maxOffset=o.width/2-l.width/2,this.thumbRef().nativeElement.classList.add("active"),this.sceneService.joystickActive=!0,this.updateFromTouch(a.clientX,a.clientY)},i=r=>{r.preventDefault();let a=this.findActiveTouch(r.changedTouches);a&&this.updateFromTouch(a.clientX,a.clientY)},n=r=>{this.findActiveTouch(r.changedTouches)&&this.resetThumb()};e.addEventListener("touchstart",t,{passive:!1}),e.addEventListener("touchmove",i,{passive:!1}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),this.disposeListeners=()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchmove",i),e.removeEventListener("touchend",n),e.removeEventListener("touchcancel",n)}}findActiveTouch(e){for(let t of Array.from(e))if(t.identifier===this.activeTouchId)return t;return null}updateFromTouch(e,t){let i=e-this.baseCenterX,n=t-this.baseCenterY,r=i,a=n;this.isPortraitRotated&&(r=n,a=-i);let o=Math.hypot(r,a);o>this.maxOffset&&(r=r/o*this.maxOffset,a=a/o*this.maxOffset),this.thumbRef().nativeElement.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`;let l=r/this.maxOffset,c=a/this.maxOffset,h=Math.hypot(l,c);if(h<Ud)this.movementService.clearJoystickDirection();else{let u=l/h,d=c/h,f=(h-Ud)/(1-Ud),_=Math.pow(Math.min(1,Math.max(0,f)),SS),g=u*_,m=d*_;this.movementService.setJoystickDirection(g,-m)}}resetThumb(){this.activeTouchId=null,this.thumbRef().nativeElement.style.transform="translate(-50%, -50%)",this.thumbRef().nativeElement.classList.remove("active"),this.sceneService.joystickActive=!1,this.movementService.clearJoystickDirection()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=nn({type:s,selectors:[["app-battle-joystick"]],viewQuery:function(t,i){t&1&&(mh(i.baseRef,MS,5),mh(i.thumbRef,bS,5)),t&2&&Kd(2)},decls:4,vars:0,consts:[["base",""],["thumb",""],[1,"joystick-base"],[1,"joystick-thumb"]],template:function(t,i){t&1&&(At(0,"div",2,0),bi(2,"div",3,1),Ft())},styles:["[_nghost-%COMP%]{display:none;position:absolute;bottom:24px;left:24px;z-index:10;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (pointer: coarse){[_nghost-%COMP%]{display:block}}.joystick-base[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;background:#070c1199;border:1.5px solid rgba(255,255,255,.15);box-shadow:0 4px 16px #0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);position:relative}.joystick-thumb[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#ffffff2e;border:1.5px solid rgba(255,255,255,.3);box-shadow:0 2px 8px #0003;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform}.joystick-thumb.active[_ngcontent-%COMP%]{background:#ffffff4d;border-color:#ffffff73}"],changeDetection:0})};var TS=["battleCanvas"];function ES(s,e){s&1&&(yo(),bi(0,"circle",7))}function wS(s,e){s&1&&(yo(),bi(0,"line",8))}function AS(s,e){if(s&1){let t=rr();bi(0,"app-battle-joystick"),At(1,"button",4),xn("click",function(){ir(t);let n=vn();return nr(n.toggleThreatIndicators())}),yo(),At(2,"svg",5),bi(3,"circle",6),Hn(4,ES,1,0,":svg:circle",7)(5,wS,1,0,":svg:line",8),Ft()()}if(s&2){let t=vn();Ot(),Zd("threat-toggle--off",!t.showThreatIndicators()),Ot(3),Wn(t.showThreatIndicators()?4:5)}}function CS(s,e){s&1&&(At(0,"div",2),bi(1,"div",9),Ft())}function RS(s,e){if(s&1&&(At(0,"div",3)(1,"div",10),ar(2),Ft(),At(3,"div",11)(4,"span"),ar(5),Ft(),At(6,"span"),ar(7),yn(8,"titlecase"),Ft()()()),s&2){let t=vn();Ot(2),gh("",t.performanceStats().fps," FPS"),Ot(3),gh("",t.performanceStats().frameTimeMs," ms"),Ot(2),Ao(Mn(8,3,t.performanceStats().qualityLevel))}}var PS={fps:60,frameTimeMs:16.67,qualityLevel:"high",pixelRatio:1},IS=s=>s*3+44,mo=class s{canvasRef;playerMesh=null;enemyMeshes=new Map;destroy$=new vo;removePerformanceListener=null;battleService=dt(Do);ngZone=dt(bo);cdr=dt($d);sceneService=dt(Qi);characterBuilder=dt(js);movementService=dt(Qs);vfxService=dt(po);hasCombatStarted=!1;animatingCharacterIds=new Set;resolvedOverlaps=new Set;removeOverlapListener=null;spawnProtectionTween=null;player=null;enemies=[];performanceStats=sr(PS);isBattleActive=sr(!1);isLoading=sr(!1);showFpsBadge=sr(!1);showThreatIndicators=sr(!1);fpsKeysHeld=new Set;onKeyDown=e=>{if(e.code==="KeyE"&&!e.ctrlKey&&!e.altKey&&!e.metaKey){this.toggleThreatIndicators();return}this.fpsKeysHeld.add(e.key.toLowerCase()),this.fpsKeysHeld.has("f")&&this.fpsKeysHeld.has("p")&&this.fpsKeysHeld.has("s")&&(this.showFpsBadge.update(t=>!t),this.cdr.detectChanges(),this.fpsKeysHeld.clear())};onKeyUp=e=>{this.fpsKeysHeld.delete(e.key.toLowerCase())};toggleThreatIndicators(){this.showThreatIndicators.update(e=>!e),this.movementService.setThreatIndicatorsEnabled(this.showThreatIndicators()),this.syncThreatIndicators()}constructor(){So(()=>{this.ngZone.runOutsideAngular(()=>{this.sceneService.init(this.canvasRef.nativeElement),this.movementService.init(this.canvasRef.nativeElement),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)})})}ngOnInit(){this.removePerformanceListener=this.sceneService.addPerformanceListener(e=>{this.performanceStats.set(e),this.cdr.detectChanges()}),this.ngZone.runOutsideAngular(()=>{this.battleService.battleState$.pipe(tr(this.destroy$)).subscribe(e=>{if(this.isBattleActive.set(e!==null),this.cdr.detectChanges(),!e){this.hasCombatStarted=!1,this.resolvedOverlaps.clear(),this.removeOverlapListener?.(),this.removeOverlapListener=null,this.sceneService.setArenaBounds(),this.movementService.setArenaBounds(),this.movementService.clearIdleWanderCharacter();return}this.hasCombatStarted=e.actions.length>0,this.player=e.team1[0]||null,this.enemies=e.team2,this.player&&(this.sceneService.setArenaBounds(),this.movementService.setArenaBounds()),this.applyDeathVisibility(),this.applyReviveSync(),!this.playerMesh&&this.enemyMeshes.size===0&&this.createCharacters(),this.syncCharacterScales(),this.syncThreatIndicators(),this.syncEnemyIdleWander()}),this.battleService.action$.pipe(tr(this.destroy$)).subscribe(e=>{e&&(this.hasCombatStarted=!0,this.movementService.clearIdleWanderCharacter(),this.animatingCharacterIds.add(e.attackerId),this.animatingCharacterIds.add(e.defenderId),this.vfxService.animateAction(e,this.buildParticipantsMap(),()=>{this.animatingCharacterIds.delete(e.attackerId),this.animatingCharacterIds.delete(e.defenderId),this.applyDeathVisibility(),this.syncEnemyIdleWander(),this.ngZone.run(()=>{this.battleService.processPostAnimationRevives(),this.battleService.finalizeIfComplete()})}))})}),this.battleService.playerSpawnProtection$.pipe(tr(this.destroy$)).subscribe(()=>{this.playerMesh&&this.startSpawnProtectionEffect(this.playerMesh)})}ngOnDestroy(){this.removeOverlapListener?.(),this.removeOverlapListener=null,this.destroy$.next(),this.destroy$.complete(),this.removePerformanceListener?.(),this.removePerformanceListener=null,document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.movementService.dispose(),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.spawnProtectionTween?.kill(),this.spawnProtectionTween=null,this.removeOverlapListener?.(),this.removeOverlapListener=null,this.resolvedOverlaps.clear(),this.characterBuilder.disposeAllThreatIndicators(),this.playerMesh&&(this.movementService.unregisterCharacterMesh(this.playerMesh),this.characterBuilder.disposeCharacterMesh(this.playerMesh,this.sceneService.scene),this.playerMesh=null);for(let[,e]of this.enemyMeshes)this.movementService.unregisterCharacterMesh(e),this.characterBuilder.disposeCharacterMesh(e,this.sceneService.scene);this.enemyMeshes.clear(),this.movementService.setControlledCharacter(null,null,"left"),this.movementService.clearIdleWanderCharacter(),this.player=null,this.enemies=[]}createCharacters(){if(!this.player||this.enemies.length===0)return;this.isLoading.set(!0),this.cdr.detectChanges();let e=[],{mesh:t,ready:i}=this.characterBuilder.createCharacterMesh(this.player.color,this.player.position);t.userData[ca]=Hi(this.player.size),t.visible=!1,this.sceneService.scene.add(t),this.playerMesh=t,e.push(i);for(let n of this.enemies){let{mesh:r,ready:a}=this.characterBuilder.createCharacterMesh(n.color,n.position);r.userData[ca]=Hi(n.size),r.visible=!1,this.sceneService.scene.add(r),this.enemyMeshes.set(n.id,r),e.push(a)}Promise.all(e).then(()=>{if(this.playerMesh){this.playerMesh.visible=!0;for(let[,n]of this.enemyMeshes)n.visible=!0;this.sceneService.compileScene(),this.playerMesh.visible=!1;for(let[,n]of this.enemyMeshes)n.visible=!1;this.isLoading.set(!1),this.cdr.detectChanges(),this.movementService.registerCharacterMesh(this.playerMesh),this.movementService.setControlledCharacter(this.playerMesh,this.player.position,"left"),this.vfxService.createTeleportationEntrance(this.playerMesh,this.player.position,"left"),this.startSpawnProtectionEffect(this.playerMesh);for(let n of this.enemies){let r=this.enemyMeshes.get(n.id);r&&(this.movementService.registerCharacterMesh(r),this.vfxService.createTeleportationEntrance(r,n.position,"right"))}this.updateCameraDistanceScale(),this.syncEnemyIdleWander(),this.startShieldOverlapDetection()}})}syncCharacterScales(){this.player&&this.playerMesh&&(this.animateScaleChange(this.playerMesh,this.player),this.updateCameraDistanceScale());for(let e of this.enemies){let t=this.enemyMeshes.get(e.id);t&&this.animateScaleChange(t,e)}}startSpawnProtectionEffect(e){this.setMeshOpacity(e,.35);let t={opacity:.35};this.spawnProtectionTween=oi.to(t,{opacity:1,duration:5,ease:"power2.in",onUpdate:()=>this.setMeshOpacity(e,t.opacity),onComplete:()=>{this.setMeshTransparent(e,!1),this.spawnProtectionTween=null}})}setMeshOpacity(e,t){e.traverse(i=>{i instanceof Ye&&i.material instanceof Ki&&(i.material.transparent=!0,i.material.opacity=t)})}setMeshTransparent(e,t){e.traverse(i=>{i instanceof Ye&&i.material instanceof Ki&&(i.material.transparent=t,t||(i.material.opacity=1))})}syncThreatIndicators(){if(!this.player)return;let e=this.player.size,t=this.showThreatIndicators();if(this.movementService.setThreatIndicatorsEnabled(t),this.playerMesh){t?(this.playerMesh.userData[_h]=Hi(IS(e)),this.playerMesh.userData[xh]=Hi(1)):(delete this.playerMesh.userData[_h],delete this.playerMesh.userData[xh]);let i=Xt(this.playerMesh),r=Di(this.playerMesh)?.side==="right"?-1:1;this.playerMesh.scale.set(r*i,i,i),this.updateMeshGroundOffset(this.playerMesh,this.player),this.updateCameraDistanceScale()}for(let i of this.enemies){let n=this.enemyMeshes.get(i.id);n&&(t&&i.isAlive&&i.size<=e?(this.characterBuilder.removeThreatIndicator(n),this.characterBuilder.showThreatIndicator(n)):this.characterBuilder.removeThreatIndicator(n))}}animateScaleChange(e,t){let i=Hi(t.size),n=e.userData[ca],r=this.player?this.player.size:null,a=r!==null?t.size>r:!1;if(this.characterBuilder.swapLegMaterial(e,a),n!==i){let o=oi.timeline();o.call(()=>{e.userData[ca]=i,this.updateMeshGroundOffset(e,t);let l=Di(e),c=l?.side==="right"?-1:1;e.scale.set(c*i,i,i),l&&l.isWalking&&this.movementService&&this.movementService.applyWalkPose(e,l.walkCycle)},[],"+=0.15"),o.call(()=>{this.characterBuilder.swapLegMaterial(e,a)},[],"+=0.15")}}updateMeshGroundOffset(e,t){let i=t.position.y+gn*Xt(e)*lr;e.position.y=i;let n=Di(e);n&&(n.basePosition.y=i)}updateCameraDistanceScale(){this.playerMesh?this.sceneService.setCameraDistanceScale(Xt(this.playerMesh)):this.player&&this.sceneService.setCameraDistanceScale(Hi(this.player.size))}syncEnemyIdleWander(){let e=new Set;for(let t of this.enemies){if(!t.isAlive||this.animatingCharacterIds.has(t.id))continue;let i=this.enemyMeshes.get(t.id);i&&e.add(i)}for(let[,t]of this.enemyMeshes)e.has(t)||this.movementService.removeIdleWanderCharacter(t);for(let t of this.enemies){if(!t.isAlive||this.animatingCharacterIds.has(t.id))continue;let i=this.enemyMeshes.get(t.id);i&&(this.movementService.hasIdleWanderCharacter(i)||this.movementService.addIdleWanderCharacter(i,t.position,"right"))}}startShieldOverlapDetection(){this.removeOverlapListener?.(),this.removeOverlapListener=this.sceneService.addFrameListener(()=>{if(this.pruneResolvedOverlaps(),this.playerMesh&&this.player?.isAlive)for(let e of this.enemies){if(!e.isAlive||this.resolvedOverlaps.has(e.id))continue;let t=this.enemyMeshes.get(e.id);if(!t)continue;let i=this.showThreatIndicators()?Hi(1):void 0;this.characterBuilder.doShieldsOverlap(this.playerMesh,t,i)&&this.ngZone.run(()=>{let n=this.showThreatIndicators()?0:void 0;this.battleService.resolveShieldOverlap(e.id,n)&&this.resolvedOverlaps.add(e.id)})}for(let e=0;e<this.enemies.length;e++){let t=this.enemies[e];if(!t.isAlive)continue;let i=this.enemyMeshes.get(t.id);if(i)for(let n=e+1;n<this.enemies.length;n++){let r=this.enemies[n];if(!r.isAlive)continue;let a=`${t.id}-${r.id}`;if(this.resolvedOverlaps.has(a))continue;let o=this.enemyMeshes.get(r.id);o&&this.characterBuilder.doShieldsOverlap(i,o)&&this.ngZone.run(()=>{this.battleService.resolveEnemyShieldOverlap(t.id,r.id)&&this.resolvedOverlaps.add(a)})}}})}pruneResolvedOverlaps(){if(this.playerMesh){let e=this.showThreatIndicators()?Hi(1):void 0;for(let t of this.enemies){if(!this.resolvedOverlaps.has(t.id))continue;let i=this.enemyMeshes.get(t.id);(!this.player?.isAlive||!t.isAlive||!i||!this.characterBuilder.doShieldsOverlap(this.playerMesh,i,e))&&this.resolvedOverlaps.delete(t.id)}}for(let e=0;e<this.enemies.length;e++){let t=this.enemies[e];for(let i=e+1;i<this.enemies.length;i++){let n=this.enemies[i],r=`${t.id}-${n.id}`;if(!this.resolvedOverlaps.has(r))continue;let a=this.enemyMeshes.get(t.id),o=this.enemyMeshes.get(n.id);(!t.isAlive||!n.isAlive||!a||!o||!this.characterBuilder.doShieldsOverlap(a,o))&&this.resolvedOverlaps.delete(r)}}}applyReviveSync(){for(let e of this.enemies){if(!e.isAlive)continue;let t=this.enemyMeshes.get(e.id);if(t&&!t.visible&&!this.animatingCharacterIds.has(e.id)){t.position.set(e.position.x,e.position.y+gn*hi(t)*lr,e.position.z);let i=Di(t);i&&(i.basePosition.x=t.position.x,i.basePosition.y=t.position.y,i.basePosition.z=t.position.z),t.visible=!0,this.resolvedOverlaps.delete(e.id)}}}applyDeathVisibility(){this.player&&!this.player.isAlive&&this.playerMesh&&!this.animatingCharacterIds.has(this.player.id)&&(this.playerMesh.visible=!1);for(let e of this.enemies){let t=this.enemyMeshes.get(e.id);t&&!e.isAlive&&!this.animatingCharacterIds.has(e.id)&&(t.visible=!1)}}buildParticipantsMap(){let e=new Map;this.player&&this.playerMesh&&e.set(this.player.id,{character:this.player,mesh:this.playerMesh,side:"left"});for(let t of this.enemies){let i=this.enemyMeshes.get(t.id);i&&e.set(t.id,{character:t,mesh:i,side:"right"})}return e}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=nn({type:s,selectors:[["app-battle-canvas"]],viewQuery:function(t,i){if(t&1&&To(TS,7),t&2){let n;Eo(n=wo())&&(i.canvasRef=n.first)}},features:[Jd([Qi,js,aa,Qs,po])],decls:5,vars:3,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"],[1,"loading-overlay"],[1,"fps-badge"],["type","button","aria-label","Toggle threat indicators",1,"threat-toggle",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","12","cy","12","r","9","stroke","currentColor","stroke-width","2"],["cx","12","cy","12","r","4","fill","currentColor"],["x1","6","y1","6","x2","18","y2","18","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"loading-spinner"],[1,"fps-badge__primary"],[1,"fps-badge__secondary"]],template:function(t,i){t&1&&(bi(0,"canvas",1,0),Hn(2,AS,6,3)(3,CS,2,0,"div",2)(4,RS,9,5,"div",3)),t&2&&(Ot(2),Wn(i.isBattleActive()?2:-1),Ot(),Wn(i.isLoading()?3:-1),Ot(),Wn(i.isBattleActive()&&i.showFpsBadge()?4:-1))},dependencies:[Xn,nf,hh],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}.fps-badge[_ngcontent-%COMP%]{position:absolute;top:16px;left:50%;transform:translate(-50%);z-index:5;min-width:126px;padding:8px 14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:#070c11b8;box-shadow:0 10px 24px #00000047;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f5fbff;text-align:center;pointer-events:none}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;letter-spacing:.08em;line-height:1}.fps-badge__secondary[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:6px;color:#f5fbffc7;font-size:.6875rem;font-weight:600;letter-spacing:.06em;line-height:1;text-transform:uppercase}@media (max-width: 580px){.fps-badge[_ngcontent-%COMP%]{top:10px;min-width:112px;padding:7px 12px}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.8125rem}.fps-badge__secondary[_ngcontent-%COMP%]{gap:8px;margin-top:5px;font-size:.625rem}}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:10;pointer-events:none}.loading-spinner[_ngcontent-%COMP%]{width:48px;height:48px;border:3px solid rgba(255,255,255,.15);border-top-color:#fffc;border-radius:50%;animation:_ngcontent-%COMP%_spin .8s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.threat-toggle[_ngcontent-%COMP%]{display:none;position:absolute;bottom:24px;right:24px;z-index:10;width:77px;height:77px;padding:0;border:1px solid rgba(0,255,136,.4);border-radius:50%;background:#070c1199;box-shadow:0 4px 16px #0000004d;color:#0f8;cursor:pointer;touch-action:manipulation;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.threat-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:30px;height:30px}.threat-toggle--off[_ngcontent-%COMP%]{color:#fff6;border-color:#ffffff26}@media (pointer: coarse){.threat-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}"],changeDetection:0})};function DS(s,e){if(s&1){let t=rr();At(0,"app-victory-banner",4),xn("terminateBattle",function(){ir(t);let n=vn(2);return nr(n.resetAndTerminateBattle())}),Ft()}if(s&2){let t=vn();Gn("winner",t.winner)}}function LS(s,e){if(s&1&&Hn(0,DS,1,1,"app-victory-banner",3),s&2){let t=e;Wn(t.isComplete&&t.winner?0:-1)}}var ug=class s{battleCanvas;destroy$=new vo;battleService=dt(Do);router=dt(sf);stateService=dt(rf);displayName=jd(()=>this.stateService.displayName());battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(qd(e=>e!==null));player=null;enemies=[];ngOnInit(){this.lockOrientation(),this.battleService.battleState$.pipe(tr(this.destroy$)).subscribe(e=>this.updateCharacters(e))}ngOnDestroy(){this.unlockOrientation(),this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){let e={id:af,name:this.displayName(),size:1,color:of};this.battleService.startBattle(e,[Ct.GIRAFFE,Ct.HORSE,Ct.CAT,Ct.BEAR,Ct.WOLF,Ct.EAGLE,Ct.SERPENT,Ct.A,Ct.B,Ct.C,Ct.D,Ct.E,Ct.F,Ct.G,Ct.H,Ct.I,Ct.J,Ct.K])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.player=null,this.enemies=[],this.router.navigate(["/"])}lockOrientation(){window.innerWidth<=768&&screen.orientation?.lock?.("landscape")?.catch?.(()=>{})}unlockOrientation(){screen.orientation?.unlock?.()}updateCharacters(e){if(!e){this.player=null,this.enemies=[];return}this.player=e.team1[0]||null,this.enemies=e.team2}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=nn({type:s,selectors:[["app-battle"]],viewQuery:function(t,i){if(t&1&&To(mo,5),t&2){let n;Eo(n=wo())&&(i.battleCanvas=n.first)}},decls:7,vars:6,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","isBattleActive"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(t,i){if(t&1&&(At(0,"div",0)(1,"div",1),bi(2,"app-battle-canvas"),Hn(3,LS,1,1),yn(4,"async"),Ft(),At(5,"app-battle-controls",2),yn(6,"async"),xn("startBattle",function(){return i.startBattle()}),Ft()()),t&2){let n,r;Ot(3),Wn((n=Mn(4,2,i.battleState$))?3:-1,n),Ot(2),Gn("isBattleActive",(r=Mn(6,4,i.isBattleActive$))!==null&&r!==void 0?r:!1)}},dependencies:[Xn,tf,Lo,Fo,mo],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;overflow:hidden}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:8px;display:flex;justify-content:center;align-items:center;pointer-events:none;z-index:1001}@media (max-width: 580px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{gap:10px;height:100%}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%]{padding:8px;gap:8px}.battle-overlay[_ngcontent-%COMP%]{gap:8px}}@media (max-width: 768px) and (orientation: portrait){[_nghost-%COMP%]{position:fixed;top:0;left:100dvw;width:100dvh;height:100dvw;transform:rotate(90deg);transform-origin:top left;overflow:hidden;z-index:1000}[_nghost-%COMP%]   .battle-arena[_ngcontent-%COMP%]{height:100dvw}}"]})};export{ug as BattleComponent};
