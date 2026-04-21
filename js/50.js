import{f as Ud}from"./7.js";import{e as vo,f as yo}from"./22.js";import"./40.js";import"./46.js";import{c as _o,d as xo}from"./12.js";import{a as Ld,m as Od,s as Fd,t as Nd,v as On}from"./49.js";import{$a as th,Cb as Fe,Da as ho,Db as Ne,Eb as Qi,Ib as uo,Mb as ps,Nb as ms,P as $r,Rb as fo,Sb as po,T as Pi,Ta as Xe,Tb as mo,Vb as eh,Wb as Pd,Yb as js,Z as fe,Zb as go,_b as ih,a as ki,b as jr,dc as Id,e as so,fa as ao,fb as $i,ga as oo,k as ro,kb as ds,kc as gn,l as Qc,lc as _n,oa as lo,pa as co,rc as Dd,s as Rd,sb as Ln,ua as Qr,yb as fs}from"./31.js";var gs=Object.freeze({minX:-67,maxX:67,minZ:-67,maxZ:67});var $s="battleBaseScale",qm=3;function Qs(s){return s/qm}function ee(s){return s.userData[$s]??1}var Zm=.2,Km=8;function Bd(s,t){return Math.random()*(t-s)+s}function Jm(s){let t=[];for(let e=0;e<s;e++){let i=0,n;do n={x:Bd(gs.minX,gs.maxX),y:Zm,z:Bd(gs.minZ,gs.maxZ)},i++;while(i<100&&t.some(r=>Math.hypot(n.x-r.x,n.z-r.z)<Km));t.push(n)}return t}var zd=1e3,tr=class s{battleStateSubject=new Qc(null);battleState$=this.battleStateSubject.asObservable();actionSubject=new Qc(null);action$=this.actionSubject.asObservable();pendingComplete=!1;lastAttackTime=new Map;startBattle(t,e){if(e.length===0)throw new Error("Must have at least one enemy");let i=Jm(1+e.length),[n,...r]=i,a={team1:[jr(ki({},t),{isAlive:!0,position:n})],team2:e.map((o,l)=>jr(ki({},o),{isAlive:!0,position:r[l]})),actions:[],winner:null,isComplete:!1};this.battleStateSubject.next(a)}resolveShieldOverlap(t){let e=this.battleStateSubject.value;if(!e||e.isComplete)return!1;let i=e.team1[0],n=e.team2.find(a=>a.id===t);if(!i?.isAlive||!n?.isAlive)return!1;let r=this.resolveCombat(e,i,n);return r?(r!==i?this.pendingComplete=!0:e.team2.every(a=>!a.isAlive)&&(this.pendingComplete=!0),this.battleStateSubject.next(ki({},e)),!0):!1}resolveEnemyShieldOverlap(t,e){let i=this.battleStateSubject.value;if(!i||i.isComplete)return!1;let n=i.team2.find(o=>o.id===t),r=i.team2.find(o=>o.id===e);return!n?.isAlive||!r?.isAlive||!this.resolveCombat(i,n,r)?!1:(i.team2.every(o=>!o.isAlive)&&(this.pendingComplete=!0),this.battleStateSubject.next(ki({},i)),!0)}finalizeIfComplete(){if(!this.pendingComplete)return;this.pendingComplete=!1,this.endBattle();let t=this.battleStateSubject.value;t&&this.battleStateSubject.next(ki({},t))}endBattle(){let t=this.battleStateSubject.value;if(!t)return;if(t.isComplete=!0,t.team1[0]?.isAlive)t.winner=t.team1[0].name;else{let i=t.team2.filter(n=>n.isAlive);t.winner=i.length>0?i[0].name:null}}resetBattle(){this.pendingComplete=!1,this.lastAttackTime.clear(),this.battleStateSubject.next(null),this.actionSubject.next(null)}resolveCombat(t,e,i){let n=Date.now(),r=this.lastAttackTime.get(e.id)??0,a=this.lastAttackTime.get(i.id)??0;if(n-r<zd||n-a<zd)return null;let o=e.size>=i.size,l=o?e:i,c=o?i:e;this.lastAttackTime.set(l.id,n);let h={attackerId:l.id,defenderId:c.id,type:"attack",timestamp:n};return t.actions.push(h),this.actionSubject.next(h),c.isAlive=!1,l.size+=c.size,l}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Pi({token:s,factory:s.\u0275fac,providedIn:"root"})};var Mo=class s{winner;terminateBattle=new lo;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=$i({type:s,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:7,vars:4,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(e,i){e&1&&(Fe(0,"div",0)(1,"div",1)(2,"div",2),js(3),Ne(),Qi(4,"div",3),Fe(5,"p-button",4),gn(6,"translate"),ps("onClick",function(){return i.onTerminateBattle()}),Ne()()()),e&2&&(Xe(3),go(i.winner),Xe(2),Ln("label",_n(6,2,"Terminate")))},dependencies:[On,yo,vo,xo,_o],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden;pointer-events:none}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;pointer-events:auto;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin-bottom:20px;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#c0c6d0;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 24px rgba(123,140,173,.4),0 0 48px rgba(123,140,173,.15),0 2px 12px rgba(0,0,0,.9);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:1px solid rgba(168,178,193,.18)}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin-bottom:15px}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin-bottom:10px;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function Qm(s,t){if(s&1){let e=uo();Fe(0,"div",2)(1,"p-button",3),gn(2,"translate"),ps("onClick",function(){ao(e);let n=ms();return oo(n.onStartBattle())}),Ne()()}s&2&&(Xe(),Ln("label",_n(2,1,"Release the Spiders!")))}var So=class s{isBattleActive=!1;startBattle=new lo;onStartBattle(){this.startBattle.emit()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=$i({type:s,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive"},outputs:{startBattle:"startBattle"},decls:2,vars:1,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"]],template:function(e,i){e&1&&(Fe(0,"div",0),ds(1,Qm,3,3,"div",1),Ne()),e&2&&(Xe(),Ln("ngIf",!i.isBattleActive))},dependencies:[On,Od,yo,vo,xo,_o],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000;padding-top:120px}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 720px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{font-size:12px!important;padding:8px!important}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};var yl="182",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pf=0,Uh=1,mf=2;var Ca=1,gf=2,Pr=3,En=0,ti=1,rn=2,an=0,bs=1,Bh=2,zh=3,kh=4,_f=5,Hn=100,xf=101,vf=102,yf=103,Mf=104,bf=200,Sf=201,Tf=202,Ef=203,qo=204,Zo=205,wf=206,Af=207,Cf=208,Rf=209,Pf=210,If=211,Df=212,Lf=213,Of=214,Ml=0,bl=1,Sl=2,Ss=3,Tl=4,El=5,wl=6,Al=7,Cl=0,Ff=1,Nf=2,Yi=0,Vh=1,Hh=2,Gh=3,Ra=4,Wh=5,Xh=6,Yh=7;var wh=300,jn=301,Ds=302,Rl=303,Pl=304,Pa=306,Ts=1e3,en=1001,Ko=1002,Oe=1003,Uf=1004;var Ia=1005;var ke=1006,Il=1007;var $n=1008;var oi=1009,qh=1010,Zh=1011,Ir=1012,Dl=1013,qi=1014,Zi=1015,on=1016,Ll=1017,Ol=1018,Dr=1020,Kh=35902,Jh=35899,jh=1021,$h=1022,Oi=1023,nn=1026,Qn=1027,Qh=1028,Fl=1029,Ls=1030,Nl=1031;var Ul=1033,Da=33776,La=33777,Oa=33778,Fa=33779,Bl=35840,zl=35841,kl=35842,Vl=35843,Hl=36196,Gl=37492,Wl=37496,Xl=37488,Yl=37489,ql=37490,Zl=37491,Kl=37808,Jl=37809,jl=37810,$l=37811,Ql=37812,tc=37813,ec=37814,ic=37815,nc=37816,sc=37817,rc=37818,ac=37819,oc=37820,lc=37821,cc=36492,hc=36494,uc=36495,dc=36283,fc=36284,pc=36285,mc=36286;var oa=2300,Jo=2301,Yo=2302,Ah=2400,Ch=2401,Rh=2402;var Bf=3200;var gc=0,zf=1,An="",Ue="srgb",Es="srgb-linear",la="linear",Kt="srgb";var Ms=7680;var Ph=519,kf=512,Vf=513,Hf=514,_c=515,Gf=516,Wf=517,xc=518,Xf=519,Ih=35044,tu=35048;var eu="300 es",Wi=2e3,ca=2001;function iu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yf(){let s=_r("canvas");return s.style.display="block",s}var Vd={},xr=null;function nu(...s){let t="THREE."+s.shift();xr?xr("log",t,...s):console.log(t,...s)}function Et(...s){let t="THREE."+s.shift();xr?xr("warn",t,...s):console.warn(t,...s)}function At(...s){let t="THREE."+s.shift();xr?xr("error",t,...s):console.error(t,...s)}function vr(...s){let t=s.join(" ");t in Vd||(Vd[t]=!0,Et(...s))}function qf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=1234567,ra=Math.PI/180,yr=180/Math.PI;function Lr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function su(s,t){return(s%t+t)%t}function eg(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function ig(s,t,e){return s!==t?(e-s)/(t-s):0}function aa(s,t,e){return(1-e)*s+e*t}function ng(s,t,e,i){return aa(s,t,1-Math.exp(-e*i))}function sg(s,t=1){return t-Math.abs(su(s,t*2)-t)}function rg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ag(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function og(s,t){return s+Math.floor(Math.random()*(t-s+1))}function lg(s,t){return s+Math.random()*(t-s)}function cg(s){return s*(.5-Math.random())}function hg(s){s!==void 0&&(Hd=s);let t=Hd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ug(s){return s*ra}function dg(s){return s*yr}function fg(s){return(s&s-1)===0&&s!==0}function pg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gg(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),_=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*f,o*h,o*c);break;default:Et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function pr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Si={DEG2RAD:ra,RAD2DEG:yr,generateUUID:Lr,clamp:kt,euclideanModulo:su,mapLinear:eg,inverseLerp:ig,lerp:aa,damp:ng,pingpong:sg,smoothstep:rg,smootherstep:ag,randInt:og,randFloat:lg,randFloatSpread:cg,seededRandom:hg,degToRad:ug,radToDeg:dg,isPowerOfTwo:fg,ceilPowerOfTwo:pg,floorPowerOfTwo:mg,setQuaternionFromProperEuler:gg,normalize:$e,denormalize:pr},Pt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Li=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nh.copy(this).projectOnVector(t),this.sub(nh)}reflect(t){return this.sub(nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nh=new D,Gd=new Li,Ot=class s{constructor(t,e,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],y=n[1],b=n[4],M=n[7],S=n[2],w=n[5],A=n[8];return r[0]=a*g+o*y+l*S,r[3]=a*m+o*b+l*w,r[6]=a*p+o*M+l*A,r[1]=c*g+h*y+u*S,r[4]=c*m+h*b+u*w,r[7]=c*p+h*M+u*A,r[2]=d*g+f*y+_*S,r[5]=d*m+f*b+_*w,r[8]=d*p+f*M+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(n*c-h*i)*g,t[2]=(o*i-n*a)*g,t[3]=d*g,t[4]=(h*e-n*l)*g,t[5]=(n*r-o*e)*g,t[6]=f*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sh.makeScale(t,e)),this}rotate(t){return this.premultiply(sh.makeRotation(-t)),this}translate(t,e){return this.premultiply(sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sh=new Ot,Wd=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){let s={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(n.r=Tn(n.r),n.g=Tn(n.g),n.b=Tn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(n.r=mr(n.r),n.g=mr(n.g),n.b=mr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===An?la:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Es]:{primaries:t,whitePoint:i,transfer:la,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:i,transfer:Kt,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}var Ht=_g();function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var er,jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{er===void 0&&(er=_r("canvas")),er.width=t.width,er.height=t.height;let n=er.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=er}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Tn(e[i]/255)*255):e[i]=Tn(e[i]);return{data:e,width:t.width,height:t.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xg=0,Mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(rh(n[a].image)):r.push(rh(n[a]))}else r=rh(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}var vg=0,ah=new D,li=(()=>{class s extends sn{constructor(e=s.DEFAULT_IMAGE,i=s.DEFAULT_MAPPING,n=en,r=en,a=ke,o=$n,l=Oi,c=oi,h=s.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Lr(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let n=e[i];if(n===void 0){Et(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){Et(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=wh,s.DEFAULT_ANISOTROPY=1,s})(),pe=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(f+1)/2,S=(p+1)/2,w=(h+d)/4,A=(u+g)/4,R=(_+m)/4;return b>M&&b>S?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=w/i,r=A/i):M>S?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=w/n,r=R/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=A/r,n=R/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends sn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let n={width:t,height:e,depth:i.depth},r=new li(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Mr(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends $o{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ha=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qo=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vi):Vi.fromBufferAttribute(r,a),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),Eo.subVectors(this.max,ta),ir.subVectors(t.a,ta),nr.subVectors(t.b,ta),sr.subVectors(t.c,ta),Fn.subVectors(nr,ir),Nn.subVectors(sr,nr),_s.subVectors(ir,sr);let e=[0,-Fn.z,Fn.y,0,-Nn.z,Nn.y,0,-_s.z,_s.y,Fn.z,0,-Fn.x,Nn.z,0,-Nn.x,_s.z,0,-_s.x,-Fn.y,Fn.x,0,-Nn.y,Nn.x,0,-_s.y,_s.x,0];return!oh(e,ir,nr,sr,Eo)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,ir,nr,sr,Eo))?!1:(wo.crossVectors(Fn,Nn),e=[wo.x,wo.y,wo.z],oh(e,ir,nr,sr,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xn=[new D,new D,new D,new D,new D,new D,new D,new D],Vi=new D,To=new yi,ir=new D,nr=new D,sr=new D,Fn=new D,Nn=new D,_s=new D,ta=new D,Eo=new D,wo=new D,xs=new D;function oh(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){xs.fromArray(s,r);let o=n.x*Math.abs(xs.x)+n.y*Math.abs(xs.y)+n.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var yg=new yi,ea=new D,lh=new D,Gn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):yg.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);let e=ea.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ea,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(lh)),this.expandByPoint(ea.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vn=new D,ch=new D,Ao=new D,Un=new D,hh=new D,Co=new D,uh=new D,Wn=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ch.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(ch);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ao),o=Un.dot(this.direction),l=-Un.dot(Ao),c=Un.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ch).addScaledVector(Ao,d),f}intersectSphere(t,e){vn.subVectors(t.center,this.origin);let i=vn.dot(this.direction),n=vn.dot(vn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,n,r){hh.subVectors(e,t),Co.subVectors(i,t),uh.crossVectors(hh,Co);let a=this.direction.dot(uh),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,t);let l=o*this.direction.dot(Co.crossVectors(Un,Co));if(l<0)return null;let c=o*this.direction.dot(hh.cross(Un));if(c<0||l+c>a)return null;let h=-o*Un.dot(uh);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class s{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,n=1/rr.setFromMatrixColumn(t,0).length(),r=1/rr.setFromMatrixColumn(t,1).length(),a=1/rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,bg)}lookAt(t,e,i){let n=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Bn.crossVectors(i,_i),Bn.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Bn.crossVectors(i,_i)),Bn.normalize(),Ro.crossVectors(_i,Bn),n[0]=Bn.x,n[4]=Ro.x,n[8]=_i.x,n[1]=Bn.y,n[5]=Ro.y,n[9]=_i.y,n[2]=Bn.z,n[6]=Ro.z,n[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],b=i[7],M=i[11],S=i[15],w=n[0],A=n[4],R=n[8],x=n[12],E=n[1],P=n[5],N=n[9],F=n[13],G=n[2],V=n[6],k=n[10],B=n[14],q=n[3],nt=n[7],et=n[11],ct=n[15];return r[0]=a*w+o*E+l*G+c*q,r[4]=a*A+o*P+l*V+c*nt,r[8]=a*R+o*N+l*k+c*et,r[12]=a*x+o*F+l*B+c*ct,r[1]=h*w+u*E+d*G+f*q,r[5]=h*A+u*P+d*V+f*nt,r[9]=h*R+u*N+d*k+f*et,r[13]=h*x+u*F+d*B+f*ct,r[2]=_*w+g*E+m*G+p*q,r[6]=_*A+g*P+m*V+p*nt,r[10]=_*R+g*N+m*k+p*et,r[14]=_*x+g*F+m*B+p*ct,r[3]=y*w+b*E+M*G+S*q,r[7]=y*A+b*P+M*V+S*nt,r[11]=y*R+b*N+M*k+S*et,r[15]=y*x+b*F+M*B+S*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15],y=l*f-c*d,b=o*f-c*u,M=o*d-l*u,S=a*f-c*h,w=a*d-l*h,A=a*u-o*h;return e*(g*y-m*b+p*M)-i*(_*y-m*S+p*w)+n*(_*b-g*S+p*A)-r*(_*M-g*w+m*A)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,b=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,M=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,S=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=e*y+i*b+n*M+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=y*A,t[1]=(g*d*r-u*m*r-g*n*f+i*m*f+u*n*p-i*d*p)*A,t[2]=(o*m*r-g*l*r+g*n*c-i*m*c-o*n*p+i*l*p)*A,t[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*f-i*l*f)*A,t[4]=b*A,t[5]=(h*m*r-_*d*r+_*n*f-e*m*f-h*n*p+e*d*p)*A,t[6]=(_*l*r-a*m*r-_*n*c+e*m*c+a*n*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*n*c-e*d*c-a*n*f+e*l*f)*A,t[8]=M*A,t[9]=(_*u*r-h*g*r-_*i*f+e*g*f+h*i*p-e*u*p)*A,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*f-e*o*f)*A,t[12]=S*A,t[13]=(h*g*n-_*u*n+_*i*d-e*g*d-h*i*m+e*u*m)*A,t[14]=(_*o*n-a*g*n-_*i*l+e*g*l+a*i*m-e*o*m)*A,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*A,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,m=a*u,p=o*u,y=l*c,b=l*h,M=l*u,S=i.x,w=i.y,A=i.z;return n[0]=(1-(g+p))*S,n[1]=(f+M)*S,n[2]=(_-b)*S,n[3]=0,n[4]=(f-M)*w,n[5]=(1-(d+p))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(_+b)*A,n[9]=(m-y)*A,n[10]=(1-(d+g))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=rr.set(n[0],n[1],n[2]).length(),a=rr.set(n[4],n[5],n[6]).length(),o=rr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),Hi.copy(this);let c=1/r,h=1/a,u=1/o;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=u,Hi.elements[9]*=u,Hi.elements[10]*=u,e.setFromRotationMatrix(Hi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Wi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Wi)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ca)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Wi,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Wi)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===ca)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rr=new D,Hi=new ue,Mg=new D(0,0,0),bg=new D(1,1,1),Bn=new D,Ro=new D,_i=new D,Yd=new ue,qd=new Li,Xi=(()=>{class s{constructor(e=0,i=0,n=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,r=this._order){return this._x=e,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){let r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],_=r[10];switch(i){case"XYZ":this._y=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sg=0,Zd=new D,ar=new Li,yn=new ue,Po=new D,ia=new D,Tg=new D,Eg=new Li,Kd=new D(1,0,0),Jd=new D(0,1,0),jd=new D(0,0,1),$d={type:"added"},wg={type:"removed"},or={type:"childadded",child:null},dh={type:"childremoved",child:null},ri=(()=>{class s extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,i=new Xi,n=new Li,r=new D(1,1,1);function a(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ot}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ar.setFromAxisAngle(e,i),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,i){return ar.setFromAxisAngle(e,i),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,i){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?Po.copy(e):Po.set(e,i,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ia,Po,this.up):yn.lookAt(Po,ia,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(yn),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),or.child=e,this.dispatchEvent(or),or.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wg),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,i);if(o!==void 0)return o}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,Tg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>jr(ki({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>ki({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(e.animations,c))}}if(i){let l=o(e.geometries),c=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}}return s.DEFAULT_UP=new D(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),Gi=new D,Mn=new D,fh=new D,bn=new D,lr=new D,cr=new D,Qd=new D,ph=new D,mh=new D,gh=new D,_h=new pe,xh=new pe,vh=new pe,Vn=class s{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Gi.subVectors(t,e),n.cross(Gi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Gi.subVectors(n,e),Mn.subVectors(i,e),fh.subVectors(t,e);let a=Gi.dot(Gi),o=Gi.dot(Mn),l=Gi.dot(fh),c=Mn.dot(Mn),h=Mn.dot(fh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return _h.setScalar(0),xh.setScalar(0),vh.setScalar(0),_h.fromBufferAttribute(t,e),xh.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(_h,r.x),a.addScaledVector(xh,r.y),a.addScaledVector(vh,r.z),a}static isFrontFacing(t,e,i,n){return Gi.subVectors(i,e),Mn.subVectors(t,e),Gi.cross(Mn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Gi.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;lr.subVectors(n,i),cr.subVectors(r,i),ph.subVectors(t,i);let l=lr.dot(ph),c=cr.dot(ph);if(l<=0&&c<=0)return e.copy(i);mh.subVectors(t,n);let h=lr.dot(mh),u=cr.dot(mh);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(lr,a);gh.subVectors(t,r);let f=lr.dot(gh),_=cr.dot(gh);if(_>=0&&f<=_)return e.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(cr,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Qd.subVectors(r,n),o=(u-h)/(u-h+(f-_)),e.copy(n).addScaledVector(Qd,o);let p=1/(m+g+d);return a=g*p,o=d*p,e.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Io={h:0,s:0,l:0};function yh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ht.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Ht.workingColorSpace){if(t=su(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yh(a,r,t+1/3),this.g=yh(a,r,t),this.b=yh(a,r,t-1/3)}return Ht.colorSpaceToWorking(this,n),this}setStyle(t,e=Ue){function i(r){r!==void 0&&parseFloat(r)<1&&Et("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Et("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let i=Zf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Ht.workingToColorSpace(qe.copy(this),t),Math.round(kt(qe.r*255,0,255))*65536+Math.round(kt(qe.g*255,0,255))*256+Math.round(kt(qe.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(qe.copy(this),e);let i=qe.r,n=qe.g,r=qe.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ue){Ht.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,n=qe.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Io);let i=aa(zn.h,Io.h,e),n=aa(zn.s,Io.s,e),r=aa(zn.l,Io.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Dt;Dt.NAMES=Zf;var Ag=0,ai=class extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=bs,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Zo,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Et(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Et(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==Zo&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},da=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new D,Do=new Pt,Cg=0,vi=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}};var fa=class extends vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var pa=class extends vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends vi{constructor(t,e,i){super(new Float32Array(t),e,i)}},Rg=0,Ii=new ue,Mh=new ri,hr=new D,xi=new yi,na=new yi,Le=new D,Ve=class s extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iu(t)?pa:fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,i){return Ii.makeTranslation(t,e,i),this.applyMatrix4(Ii),this}scale(t,e,i){return Ii.makeScale(t,e,i),this.applyMatrix4(Ii),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(xi.min,na.min),xi.expandByPoint(Le),Le.addVectors(xi.max,na.max),xi.expandByPoint(Le)):(xi.expandByPoint(na.min),xi.expandByPoint(na.max))}xi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Le.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(t,c),Le.add(hr)),n=Math.max(n,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;let c=new D,h=new D,u=new D,d=new Pt,f=new Pt,_=new Pt,g=new D,m=new D;function p(R,x,E){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,x),_.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[x].add(g),o[E].add(g),l[R].add(m),l[x].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,x=y.length;R<x;++R){let E=y[R],P=E.start,N=E.count;for(let F=P,G=P+N;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new D,M=new D,S=new D,w=new D;function A(R){S.fromBufferAttribute(n,R),w.copy(S);let x=o[R];b.copy(x),b.sub(S.multiplyScalar(S.dot(x))).normalize(),M.crossVectors(w,x);let P=M.dot(l[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,P)}for(let R=0,x=y.length;R<x;++R){let E=y[R],P=E.start,N=E.count;for(let F=P,G=P+N;F<G;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new vi(d,h,u)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tf=new ue,vs=new Wn,Lo=new Gn,ef=new D,Oo=new D,Fo=new D,No=new D,bh=new D,Uo=new D,nf=new D,Bo=new D,Qt=class extends ri{constructor(t=new Ve,e=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(bh.fromBufferAttribute(u,t),a?Uo.addScaledVector(bh,h):Uo.addScaledVector(bh.sub(e),h))}e.add(Uo)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(Lo.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Lo,ef)===null||vs.origin.distanceToSquared(ef)>(t.far-t.near)**2))&&(tf.copy(r).invert(),vs.copy(t.ray).applyMatrix4(tf),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,S=b;M<S;M+=3){let w=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);n=zo(this,p,t,i,c,h,u,w,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);n=zo(this,a,t,i,c,h,u,y,b,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,S=b;M<S;M+=3){let w=M,A=M+1,R=M+2;n=zo(this,p,t,i,c,h,u,w,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=m,b=m+1,M=m+2;n=zo(this,a,t,i,c,h,u,y,b,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Pg(s,t,e,i,n,r,a,o){let l;if(t.side===ti?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===En,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Bo);return c<e.near||c>e.far?null:{distance:c,point:Bo.clone(),object:s}}function zo(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Oo),s.getVertexPosition(l,Fo),s.getVertexPosition(c,No);let h=Pg(s,t,e,i,Oo,Fo,No,nf);if(h){let u=new D;Vn.getBarycoord(nf,Oo,Fo,No,u),n&&(h.uv=Vn.getInterpolatedAttribute(n,o,l,c,u,new Pt)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new Pt)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Vn.getNormal(Oo,Fo,No,d.normal),h.face=d,h.barycoord=u}return h}var br=class s extends Ve{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,r,4),_("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function _(g,m,p,y,b,M,S,w,A,R,x){let E=M/A,P=S/R,N=M/2,F=S/2,G=w/2,V=A+1,k=R+1,B=0,q=0,nt=new D;for(let et=0;et<k;et++){let ct=et*P-F;for(let Rt=0;Rt<V;Rt++){let Lt=Rt*E-N;nt[g]=Lt*y,nt[m]=ct*b,nt[p]=G,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[p]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Rt/A),u.push(1-et/R),B+=1}}for(let et=0;et<R;et++)for(let ct=0;ct<A;ct++){let Rt=d+ct+V*et,Lt=d+ct+V*(et+1),Gt=d+(ct+1)+V*(et+1),Wt=d+(ct+1)+V*et;l.push(Rt,Lt,Wt),l.push(Lt,Gt,Wt),q+=6}o.addGroup(f,q,x),f+=q,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ze(s){let t={};for(let e=0;e<s.length;e++){let i=Os(s[e]);for(let n in i)t[n]=i[n]}return t}function Ig(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ru(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var Kf={clone:Os,merge:Ze},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Ig(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ma=class extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new D,sf=new Pt,rf=new Pt,Be=class extends ma{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,sf,rf),e.subVectors(rf,sf)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ra*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ur=-90,dr=1,tl=class extends ri{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Be(ur,dr,t,e);n.layers=this.layers,this.add(n);let r=new Be(ur,dr,t,e);r.layers=this.layers,this.add(r);let a=new Be(ur,dr,t,e);a.layers=this.layers,this.add(a);let o=new Be(ur,dr,t,e);o.layers=this.layers,this.add(o);let l=new Be(ur,dr,t,e);l.layers=this.layers,this.add(l);let c=new Be(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ga=class extends li{constructor(t=[],e=jn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_a=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ga(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new br(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:an});r.uniforms.tEquirect.value=e;let a=new Qt(n,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=ke),new tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},ze=class extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var xa=class extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var el=class extends li{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Oe,h=Oe,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sh=new D,Fg=new D,Ng=new Ot,Di=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Sh.subVectors(i,e).cross(Fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Sh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ng.getNormalMatrix(t),n=this.coplanarPoint(Sh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Gn,Ug=new Pt(.5,.5),ko=new D,Tr=class{constructor(t=new Di,e=new Di,i=new Di,n=new Di,r=new Di,a=new Di){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],g=r[9],m=r[10],p=r[11],y=r[12],b=r[13],M=r[14],S=r[15];if(n[0].setComponents(c-a,f-h,p-_,S-y).normalize(),n[1].setComponents(c+a,f+h,p+_,S+y).normalize(),n[2].setComponents(c+o,f+u,p+g,S+b).normalize(),n[3].setComponents(c-o,f-u,p-g,S-b).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,p-m,S-M).normalize();else if(n[4].setComponents(c-l,f-d,p-m,S-M).normalize(),e===Wi)n[5].setComponents(c+l,f+d,p+m,S+M).normalize();else if(e===ca)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=Ug.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ko.x=n.normal.x>0?t.max.x:t.min.x,ko.y=n.normal.y>0?t.max.y:t.min.y,ko.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xn=class extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},il=new D,nl=new D,af=new ue,sa=new Wn,Vo=new Gn,Th=new D,of=new D,sl=class extends ri{constructor(t=new Ve,e=new Xn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)il.fromBufferAttribute(e,n-1),nl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=il.distanceTo(nl);t.setAttribute("lineDistance",new re(i,1))}else Et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(n),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;af.copy(n).invert(),sa.copy(t.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),y=h.getX(g+1),b=Ho(this,t,sa,l,p,y,g);b&&e.push(b)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=Ho(this,t,sa,l,g,m,_-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=Ho(this,t,sa,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){let g=Ho(this,t,sa,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ho(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(il.fromBufferAttribute(o,n),nl.fromBufferAttribute(o,r),e.distanceSqToSegment(il,nl,Th,of)>i)return;Th.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Th);if(!(c<t.near||c>t.far))return{distance:c,point:of.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var lf=new D,cf=new D,Er=class extends sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)lf.fromBufferAttribute(e,n),cf.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+lf.distanceTo(cf);t.setAttribute("lineDistance",new re(i,1))}else Et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wn=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hf=new ue,Dh=new Wn,Go=new Gn,Wo=new D,ws=class extends ri{constructor(t=new Ve,e=new wn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(n),Go.radius+=r,t.ray.intersectsSphere(Go)===!1)return;hf.copy(n).invert(),Dh.copy(t.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);Wo.fromBufferAttribute(u,m),uf(Wo,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Wo.fromBufferAttribute(u,_),uf(Wo,_,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uf(s,t,e,i,n,r,a){let o=Dh.distanceSqToPoint(s);if(o<e){let l=new D;Dh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var va=class extends li{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yn=class extends li{constructor(t,e,i=qi,n,r,a,o=Oe,l=Oe,c,h=nn,u=1){if(h!==nn&&h!==Qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rl=class extends Yn{constructor(t,e=qi,i=jn,n,r,a=Oe,o=Oe,l,c=nn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ya=class extends li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var As=class s extends Ve{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],m=i/2,p=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function y(){let M=new D,S=new D,w=0,A=(e-t)/i;for(let R=0;R<=r;R++){let x=[],E=R/r,P=E*(e-t)+t;for(let N=0;N<=n;N++){let F=N/n,G=F*l+o,V=Math.sin(G),k=Math.cos(G);S.x=P*V,S.y=-E*i+m,S.z=P*k,u.push(S.x,S.y,S.z),M.set(V,A,k).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-E),x.push(_++)}g.push(x)}for(let R=0;R<n;R++)for(let x=0;x<r;x++){let E=g[x][R],P=g[x+1][R],N=g[x+1][R+1],F=g[x][R+1];(t>0||x!==0)&&(h.push(E,P,F),w+=3),(e>0||x!==r-1)&&(h.push(P,N,F),w+=3)}c.addGroup(p,w,0),p+=w}function b(M){let S=_,w=new Pt,A=new D,R=0,x=M===!0?t:e,E=M===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),_++;let P=_;for(let N=0;N<=n;N++){let G=N/n*l+o,V=Math.cos(G),k=Math.sin(G);A.x=x*k,A.y=m*E,A.z=x*V,u.push(A.x,A.y,A.z),d.push(0,E,0),w.x=V*.5+.5,w.y=k*.5*E+.5,f.push(w.x,w.y),_++}for(let N=0;N<n;N++){let F=S+N,G=P+N;M===!0?h.push(G,G+1,F):h.push(G+1,G,F),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Cs=class s extends Ve{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let b=0;b<c;b++){let M=b*u-r;_.push(M,-y,0),g.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+c*p,M=y+c*(p+1),S=y+1+c*(p+1),w=y+1+c*p;f.push(b,M,w),f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ma=class s extends Ve{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){let y=[],b=p/i,M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){let w=S/e;u.x=-t*Math.cos(n+w*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(n+w*r)*Math.sin(a+b*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+M,1-b),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let b=h[p][y+1],M=h[p][y],S=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(b,M,w),(p!==i-1||l<Math.PI)&&f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(g,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var al=class extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rs=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ba=class extends ai{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Dt(16777215),this.specular=new Dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ol=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ll=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Ps=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Ps{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ah,endingEnd:Ah}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:r=t,o=2*e-i;break;case Rh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:a=t,l=2*i-e;break;case Rh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-e)/(n-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*m+(1.5+f)*g+.5*_,M=f*m-f*g;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+y*a[c+S]+b*a[l+S]+M*a[u+S];return r}},hl=class extends Ps{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ul=class extends Ps{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},bi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xo(e,this.TimeBufferType),this.values=Xo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Xo(t.times,Array),values:Xo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oa:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Et("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(At("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(At("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){At("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){At("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&tg(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){At("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Yo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Jo;var qn=class extends bi{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=oa;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends bi{constructor(t,e,i,n){super(t,e,i,n)}};dl.prototype.ValueTypeName="color";var fl=class extends bi{constructor(t,e,i,n){super(t,e,i,n)}};fl.prototype.ValueTypeName="number";var pl=class extends Ps{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}},Sa=class extends bi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends bi{constructor(t,e,i){super(t,e,i)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=oa;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends bi{constructor(t,e,i,n){super(t,e,i,n)}};ml.prototype.ValueTypeName="vector";var gr={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},gl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new gl,Or=(()=>{class s{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){let n=this;return new Promise(function(r,a){n.load(e,r,i,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}return s.DEFAULT_MATERIAL_NAME="__DEFAULT",s})(),Sn={},Lh=class extends Error{constructor(t,e){super(t),this.response=e}},Ta=class extends Or{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=gr.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:i,onError:n});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Sn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,g=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{g+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,A=h.length;w<A;w++){let R=h[w];R.onProgress&&R.onProgress(S)}p.enqueue(M),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Lh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{gr.add(`file:${t}`,c);let h=Sn[t];delete Sn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Sn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Sn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=new WeakMap,_l=class extends Or{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=gr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=fr.get(a);u===void 0&&(u=[],fr.set(a,u)),u.push({onLoad:e,onError:n})}return a}let o=_r("img");function l(){h(),e&&e(this);let u=fr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}fr.delete(this),r.manager.itemEnd(t)}function c(u){h(),n&&n(u),gr.remove(`image:${t}`);let d=fr.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}fr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gr.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Is=class extends Or{constructor(t){super(t)}load(t,e,i,n){let r=new li,a=new _l(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},wr=class extends ri{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Eh=new ue,df=new D,ff=new D,xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Oh=class extends xl{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Ea=class extends wr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Oh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ar=class extends ma{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fh=class extends xl{constructor(){super(new Ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ri.DEFAULT_UP),this.updateMatrix(),this.target=new ri,this.shadow=new Fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},wa=class extends wr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var vl=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var au="\\[\\]\\.:\\/",Bg=new RegExp("["+au+"]","g"),ou="[^"+au+"]",zg="[^"+au.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",ou),Vg=/(WCOD+)?/.source.replace("WCOD",zg),Hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),Wg=new RegExp("^"+kg+Vg+Hg+Gg+"$"),Xg=["material","materials","bones","map"],Nh=class{constructor(t,e,i){let n=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=(()=>{class s{constructor(e,i,n){this.path=i,this.parsedPath=n||s.parseTrackName(i),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,i,n):new s(e,i,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(e){let i=Wg.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);Xg.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(i);if(n!==void 0)return n}if(e.children){let n=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===i||l.uuid===i)return l;let c=n(l.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[i++]=n[r]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,n=i.objectName,r=i.propertyName,a=i.propertyIndex;if(e||(e=s.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=i.objectIndex;switch(n){case"materials":if(!e.material){At("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){At("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){At("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){At("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){At("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){At("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){At("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[r];if(o===void 0){let h=i.nodeName;At("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){At("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){At("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=Nh,s})();Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AS=new Float32Array(1);var Rr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Aa=class extends sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Et("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function lu(s,t,e,i){let n=Yg(i);switch(e){case jh:return s*t;case Qh:return s*t/n.components*n.byteLength;case Fl:return s*t/n.components*n.byteLength;case Ls:return s*t*2/n.components*n.byteLength;case Nl:return s*t*2/n.components*n.byteLength;case $h:return s*t*3/n.components*n.byteLength;case Oi:return s*t*4/n.components*n.byteLength;case Ul:return s*t*4/n.components*n.byteLength;case Da:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zl:case Vl:return Math.max(s,16)*Math.max(t,8)/4;case Bl:case kl:return Math.max(s,8)*Math.max(t,8)/2;case Hl:case Gl:case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wl:case ql:case Zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case jl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $l:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case cc:case hc:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case dc:case fc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case pc:case mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(s){switch(s){case oi:case qh:return{byteLength:1,components:1};case Ir:case Zh:case on:return{byteLength:2,components:1};case Ll:case Ol:return{byteLength:2,components:4};case qi:case Dl:case Zi:return{byteLength:4,components:1};case Kh:case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function vp(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qg(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
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
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o_=`#ifdef USE_IRIDESCENCE
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
#endif`,l_=`#ifdef USE_BUMPMAP
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,__=`#define PI 3.141592653589793
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
} // validated`,x_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v_=`vec3 transformedNormal = objectNormal;
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
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z_=`uniform bool receiveShadow;
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
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
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
#endif`,Y_=`uniform sampler2D dfgLUT;
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
}`,q_=`
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
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,ix=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,dx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,_x=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,yx=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Zg,alphahash_pars_fragment:Kg,alphamap_fragment:Jg,alphamap_pars_fragment:jg,alphatest_fragment:$g,alphatest_pars_fragment:Qg,aomap_fragment:t_,aomap_pars_fragment:e_,batching_pars_vertex:i_,batching_vertex:n_,begin_vertex:s_,beginnormal_vertex:r_,bsdfs:a_,iridescence_fragment:o_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:d_,color_fragment:f_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:__,cube_uv_reflection_fragment:x_,defaultnormal_vertex:v_,displacementmap_pars_vertex:y_,displacementmap_vertex:M_,emissivemap_fragment:b_,emissivemap_pars_fragment:S_,colorspace_fragment:T_,colorspace_pars_fragment:E_,envmap_fragment:w_,envmap_common_pars_fragment:A_,envmap_pars_fragment:C_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:k_,envmap_vertex:P_,fog_vertex:I_,fog_pars_vertex:D_,fog_fragment:L_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:N_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:B_,lights_pars_begin:z_,lights_toon_fragment:V_,lights_toon_pars_fragment:H_,lights_phong_fragment:G_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:Y_,lights_fragment_begin:q_,lights_fragment_maps:Z_,lights_fragment_end:K_,logdepthbuf_fragment:J_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:Q_,map_fragment:t0,map_pars_fragment:e0,map_particle_fragment:i0,map_particle_pars_fragment:n0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphinstance_vertex:a0,morphcolor_vertex:o0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:f0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:y0,opaque_fragment:M0,packing:b0,premultiplied_alpha_fragment:S0,project_vertex:T0,dithering_fragment:E0,dithering_pars_fragment:w0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:P0,shadowmap_vertex:I0,shadowmask_pars_fragment:D0,skinbase_vertex:L0,skinning_pars_vertex:O0,skinning_vertex:F0,skinnormal_vertex:N0,specularmap_fragment:U0,specularmap_pars_fragment:B0,tonemapping_fragment:z0,tonemapping_pars_fragment:k0,transmission_fragment:V0,transmission_pars_fragment:H0,uv_pars_fragment:G0,uv_pars_vertex:W0,uv_vertex:X0,worldpos_vertex:Y0,background_vert:q0,background_frag:Z0,backgroundCube_vert:K0,backgroundCube_frag:J0,cube_vert:j0,cube_frag:$0,depth_vert:Q0,depth_frag:tx,distance_vert:ex,distance_frag:ix,equirect_vert:nx,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ax,meshbasic_vert:ox,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:_x,meshphysical_frag:xx,meshtoon_vert:vx,meshtoon_frag:yx,points_vert:Mx,points_frag:bx,shadow_vert:Sx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:wx},lt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},cn={basic:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ze([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ze([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ze([lt.points,lt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ze([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ze([lt.common,lt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ze([lt.sprite,lt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Ze([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Ze([lt.lights,lt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};cn.physical={uniforms:Ze([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var vc={r:0,b:0,g:0},Fs=new Xi,Ax=new ue;function Cx(s,t,e,i,n,r,a){let o=new Dt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function g(b){let M=!1,S=_(b);S===null?p(o,l):S&&S.isColor&&(p(S,1),M=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,M){let S=_(M);S&&(S.isCubeTexture||S.mapping===Pa)?(h===void 0&&(h=new Qt(new br(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Os(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Fs.copy(M.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Fs)),h.material.toneMapped=Ht.getTransfer(S.colorSpace)!==Kt,(u!==S||d!==S.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Qt(new Cs(2,2),new Mi({name:"BackgroundMaterial",uniforms:Os(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(S.colorSpace)!==Kt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(vc,ru(s)),i.buffers.color.setClear(vc.r,vc.g,vc.b,M,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:g,addToRenderList:m,dispose:y}}function Rx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(E,P,N,F,G){let V=!1,k=u(F,N,P);r!==k&&(r=k,c(r.object)),V=f(E,F,N,G),V&&_(E,F,N,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(E,P,N,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,P,N){let F=N.wireframe===!0,G=i[E.id];G===void 0&&(G={},i[E.id]=G);let V=G[P.id];V===void 0&&(V={},G[P.id]=V);let k=V[F];return k===void 0&&(k=d(l()),V[F]=k),k}function d(E){let P=[],N=[],F=[];for(let G=0;G<e;G++)P[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:F,object:E,attributes:{},index:null}}function f(E,P,N,F){let G=r.attributes,V=P.attributes,k=0,B=N.getAttributes();for(let q in B)if(B[q].location>=0){let et=G[q],ct=V[q];if(ct===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function _(E,P,N,F){let G={},V=P.attributes,k=0,B=N.getAttributes();for(let q in B)if(B[q].location>=0){let et=V[q];et===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(et=E.instanceColor));let ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),G[q]=ct,k++}r.attributes=G,r.attributesNum=k,r.index=F}function g(){let E=r.newAttributes;for(let P=0,N=E.length;P<N;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){let N=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;N[E]=1,F[E]===0&&(s.enableVertexAttribArray(E),F[E]=1),G[E]!==P&&(s.vertexAttribDivisor(E,P),G[E]=P)}function y(){let E=r.newAttributes,P=r.enabledAttributes;for(let N=0,F=P.length;N<F;N++)P[N]!==E[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function b(E,P,N,F,G,V,k){k===!0?s.vertexAttribIPointer(E,P,N,G,V):s.vertexAttribPointer(E,P,N,F,G,V)}function M(E,P,N,F){g();let G=F.attributes,V=N.getAttributes(),k=P.defaultAttributeValues;for(let B in V){let q=V[B];if(q.location>=0){let nt=G[B];if(nt===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(nt=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(nt=E.instanceColor)),nt!==void 0){let et=nt.normalized,ct=nt.itemSize,Rt=t.get(nt);if(Rt===void 0)continue;let Lt=Rt.buffer,Gt=Rt.type,Wt=Rt.bytesPerElement,Z=Gt===s.INT||Gt===s.UNSIGNED_INT||nt.gpuType===Dl;if(nt.isInterleavedBufferAttribute){let j=nt.data,pt=j.stride,Ft=nt.offset;if(j.isInstancedInterleavedBuffer){for(let _t=0;_t<q.locationSize;_t++)p(q.location+_t,j.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let _t=0;_t<q.locationSize;_t++)b(q.location+_t,ct/q.locationSize,Gt,et,pt*Wt,(Ft+ct/q.locationSize*_t)*Wt,Z)}else{if(nt.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,nt.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let j=0;j<q.locationSize;j++)b(q.location+j,ct/q.locationSize,Gt,et,ct*Wt,ct/q.locationSize*j*Wt,Z)}}else if(k!==void 0){let et=k[B];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(q.location,et);break;case 3:s.vertexAttrib3fv(q.location,et);break;case 4:s.vertexAttrib4fv(q.location,et);break;default:s.vertexAttrib1fv(q.location,et)}}}}y()}function S(){R();for(let E in i){let P=i[E];for(let N in P){let F=P[N];for(let G in F)h(F[G].object),delete F[G];delete P[N]}delete i[E]}}function w(E){if(i[E.id]===void 0)return;let P=i[E.id];for(let N in P){let F=P[N];for(let G in F)h(F[G].object),delete F[G];delete P[N]}delete i[E.id]}function A(E){for(let P in i){let N=i[P];if(N[E.id]===void 0)continue;let F=N[E.id];for(let G in F)h(F[G].object),delete F[G];delete N[E.id]}}function R(){x(),a=!0,r!==n&&(r=n,c(r.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Px(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ix(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Oi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==oi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zi&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:S,samples:w}}function Dx(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Di,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,b=y*4,M=p.clippingState||null;l.value=M,M=h(_,d,b,f);for(let S=0;S!==b;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==g;++b,M+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Lx(s){let t=new WeakMap;function e(a,o){return o===Rl?a.mapping=jn:o===Pl&&(a.mapping=Ds),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Rl||o===Pl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _a(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ts=4,jf=[.125,.215,.35,.446,.526,.582],Us=20,Ox=256,Na=new Ar,$f=new Dt,cu=null,hu=0,uu=0,du=!1,Fx=new D,Mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Fx}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jn||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:on,format:Oi,colorSpace:Es,depthBuffer:!1},n=Qf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nx(r)),this._blurMaterial=Bx(r,t,e),this._ggxMaterial=Ux(r,t,e)}return n}_compileMaterial(t){let e=new Qt(new Ve,t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,i,n,r){let l=new Be(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($f),u.toneMapping=Yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new br,new da({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy($f),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Fr(n,M*S,b>2?S:0,S,S),u.setRenderTarget(n),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===jn||t.mapping===Ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Na)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-ts?i-_+ts:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,Fr(r,m,p,3*g,2*g),n.setRenderTarget(r),n.render(o,Na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Fr(t,m,p,3*g,2*g),n.setRenderTarget(t),n.render(o,Na)}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[n];u.material=c;let d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Us-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Us;m>Us&&Et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);let p=[],y=0;for(let A=0;A<Us;++A){let R=A/g,x=Math.exp(-R*R/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;let M=this._sizeLods[n],S=3*M*(n>b-ts?n-b+ts:0),w=4*(this._cubeSize-M);Fr(e,S,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Na)}};function Nx(s){let t=[],e=[],i=[],n=s,r=s-ts+1+jf.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);t.push(o);let l=1/o;a>s-ts?l=jf[a-s+ts-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),b=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,R=w>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,g*_*w),b.set(d,m*_*w);let E=[w,w,w,w,w,w];M.set(E,p*_*w)}let S=new Ve;S.setAttribute("position",new vi(y,g)),S.setAttribute("uv",new vi(b,m)),S.setAttribute("faceIndex",new vi(M,p)),i.push(new Qt(S,null)),n>ts&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Qf(s,t,e){let i=new Qe(s,t,e);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Ux(s,t,e){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ox,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Bx(s,t,e){let i=new Float32Array(Us),n=new D(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function tp(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function ep(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function zx(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Rl||l===Pl,h=l===jn||l===Ds;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Mc(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Mc(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function kx(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&vr("WebGLRenderer: "+i+" extension not supported."),n}}}function Vx(s,t,e,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let b=0,M=y.length;b<M;b+=3){let S=y[b+0],w=y[b+1],A=y[b+2];d.push(S,w,w,A,A,S)}}else if(_!==void 0){let y=_.array;g=_.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let S=b+0,w=b+1,A=b+2;d.push(S,w,w,A,A,S)}}else return;let m=new(iu(d)?pa:fa)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Hx(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*a),e.update(f,i,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(i,f,r,d*a,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:At("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Wx(s,t,e){let i=new WeakMap,n=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let S=o.attributes.position.count*M,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*w*4*u),R=new ha(A,S,w,u);R.type=Zi,R.needsUpdate=!0;let x=M*4;for(let P=0;P<u;P++){let N=p[P],F=y[P],G=b[P],V=S*w*4*P;for(let k=0;k<N.count;k++){let B=k*x;_===!0&&(n.fromBufferAttribute(N,k),A[V+B+0]=n.x,A[V+B+1]=n.y,A[V+B+2]=n.z,A[V+B+3]=0),g===!0&&(n.fromBufferAttribute(F,k),A[V+B+4]=n.x,A[V+B+5]=n.y,A[V+B+6]=n.z,A[V+B+7]=0),m===!0&&(n.fromBufferAttribute(G,k),A[V+B+8]=n.x,A[V+B+9]=n.y,A[V+B+10]=n.z,A[V+B+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new Pt(S,w)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Xx(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Yx={[Vh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[Yh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function qx(s,t,e,i,n){let r=new Qe(t,e,{type:s,depthBuffer:i,stencilBuffer:n}),a=new Qe(t,e,{type:on,depthBuffer:!1,stencilBuffer:!1}),o=new Ve;o.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new re([0,2,0,0,2,0],2));let l=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Qt(o,l),h=new Ar(-1,1,1,-1,0,1),u=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let M=0;M<m.length;M++){let S=m[M];S.setSize&&S.setSize(y,b)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let b=r.width,M=r.height;for(let S=0;S<m.length;S++){let w=m[S];w.setSize&&w.setSize(b,M)}},this.begin=function(y,b){if(f||y.toneMapping===Yi&&m.length===0)return!1;if(g=b,b!==null){let M=b.width,S=b.height;(r.width!==M||r.height!==S)&&this.setSize(M,S)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Yi,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=_,f=!0;let M=r,S=a;for(let w=0;w<m.length;w++){let A=m[w];if(A.enabled!==!1&&(A.render(y,S,M,b),A.needsSwap!==!1)){let R=M;M=S,S=R}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},Ht.getTransfer(u)===Kt&&(l.defines.SRGB_TRANSFER="");let w=Yx[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var yp=new li,mu=new Yn(1,1),Mp=new ha,bp=new Qo,Sp=new ga,ip=[],np=[],sp=new Float32Array(16),rp=new Float32Array(9),ap=new Float32Array(4);function Ur(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=ip[n];if(r===void 0&&(r=new Float32Array(n),ip[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Tc(s,t){let e=np[t];e===void 0&&(e=new Int32Array(t),np[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Zx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Kx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function Jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function $x(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;ap.set(i),s.uniformMatrix2fv(this.addr,!1,ap),Re(e,i)}}function Qx(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;rp.set(i),s.uniformMatrix3fv(this.addr,!1,rp),Re(e,i)}}function tv(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;sp.set(i),s.uniformMatrix4fv(this.addr,!1,sp),Re(e,i)}}function ev(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function iv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function nv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function sv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function rv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function av(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function ov(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function lv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function cv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?xc:_c,r=mu):r=yp,e.setTexture2D(t||r,n)}function hv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||bp,n)}function uv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Sp,n)}function dv(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Mp,n)}function fv(s){switch(s){case 5126:return Zx;case 35664:return Kx;case 35665:return Jx;case 35666:return jx;case 35674:return $x;case 35675:return Qx;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return iv;case 35668:case 35672:return nv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}function pv(s,t){s.uniform1fv(this.addr,t)}function mv(s,t){let e=Ur(t,this.size,2);s.uniform2fv(this.addr,e)}function gv(s,t){let e=Ur(t,this.size,3);s.uniform3fv(this.addr,e)}function _v(s,t){let e=Ur(t,this.size,4);s.uniform4fv(this.addr,e)}function xv(s,t){let e=Ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function vv(s,t){let e=Ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yv(s,t){let e=Ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Mv(s,t){s.uniform1iv(this.addr,t)}function bv(s,t){s.uniform2iv(this.addr,t)}function Sv(s,t){s.uniform3iv(this.addr,t)}function Tv(s,t){s.uniform4iv(this.addr,t)}function Ev(s,t){s.uniform1uiv(this.addr,t)}function wv(s,t){s.uniform2uiv(this.addr,t)}function Av(s,t){s.uniform3uiv(this.addr,t)}function Cv(s,t){s.uniform4uiv(this.addr,t)}function Rv(s,t,e){let i=this.cache,n=t.length,r=Tc(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=mu:a=yp;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Pv(s,t,e){let i=this.cache,n=t.length,r=Tc(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||bp,r[a])}function Iv(s,t,e){let i=this.cache,n=t.length,r=Tc(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Sp,r[a])}function Dv(s,t,e){let i=this.cache,n=t.length,r=Tc(e,n);Ce(i,r)||(s.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Mp,r[a])}function Lv(s){switch(s){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return xv;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return Tv;case 5125:return Ev;case 36294:return wv;case 36295:return Av;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}var gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fv(e.type)}},_u=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lv(e.type)}},xu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function op(s,t){s.seq.push(t),s.map[t.id]=t}function Ov(s,t,e){let i=s.name,n=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),a=fu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){op(e,c===void 0?new gu(o,s,t):new _u(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new xu(o),op(e,u)),e=u}}}var Nr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ov(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function lp(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Fv=37297,Nv=0;function Uv(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var cp=new Ot;function Bv(s){Ht._getMatrix(cp,Ht.workingColorSpace,s);let t=`mat3( ${cp.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(s)){case la:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function hp(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Uv(s.getShaderSource(t),o)}else return r}function zv(s,t){let e=Bv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var kv={[Vh]:"Linear",[Hh]:"Reinhard",[Gh]:"Cineon",[Ra]:"ACESFilmic",[Xh]:"AgX",[Yh]:"Neutral",[Wh]:"Custom"};function Vv(s,t){let e=kv[t];return e===void 0?(Et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yc=new D;function Hv(){Ht.getLuminanceCoefficients(yc);let s=yc.x.toFixed(4),t=yc.y.toFixed(4),e=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function Wv(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Xv(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ba(s){return s!==""}function up(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(s){return s.replace(Yv,Zv)}var qv=new Map;function Zv(s,t){let e=Nt[t];if(e===void 0){let i=qv.get(t);if(i!==void 0)e=Nt[i],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vu(e)}var Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(s){return s.replace(Kv,Jv)}function Jv(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function pp(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jv={[Ca]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function $v(s){return jv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qv={[jn]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function ty(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Qv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var ey={[Ds]:"ENVMAP_MODE_REFRACTION"};function iy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ey[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ny={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[Ff]:"ENVMAP_BLENDING_MIX",[Nf]:"ENVMAP_BLENDING_ADD"};function sy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ny[s.combine]||"ENVMAP_BLENDING_NONE"}function ry(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ay(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$v(e),c=ty(e),h=iy(e),u=sy(e),d=ry(e),f=Gv(e),_=Wv(r),g=n.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ba).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ba).join(`
`),p.length>0&&(p+=`
`)):(m=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),p=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Yi?Vv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,zv("linearToOutputTexel",e.outputColorSpace),Hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ba).join(`
`)),a=vu(a),a=up(a,e),a=dp(a,e),o=vu(o),o=up(o,e),o=dp(o,e),a=fp(a),o=fp(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,M=y+p+o,S=lp(n,n.VERTEX_SHADER,b),w=lp(n,n.FRAGMENT_SHADER,M);n.attachShader(g,S),n.attachShader(g,w),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(g)||"",F=n.getShaderInfoLog(S)||"",G=n.getShaderInfoLog(w)||"",V=N.trim(),k=F.trim(),B=G.trim(),q=!0,nt=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,S,w);else{let et=hp(n,S,"vertex"),ct=hp(n,w,"fragment");At("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+et+`
`+ct)}else V!==""?Et("WebGLProgram: Program Info Log:",V):(k===""||B==="")&&(nt=!1);nt&&(P.diagnostics={runnable:q,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}n.deleteShader(S),n.deleteShader(w),R=new Nr(n,g),x=Xv(n,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(g,Fv)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var oy=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mu(t),e.set(t,i)),i}},Mu=class{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}};function ly(s,t,e,i,n,r,a){let o=new ua,l=new yu,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,P,N,F){let G=N.fog,V=F.geometry,k=x.isMeshStandardMaterial?N.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),q=B&&B.mapping===Pa?B.image.height:null,nt=_[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Et("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=et!==void 0?et.length:0,Rt=0;V.morphAttributes.position!==void 0&&(Rt=1),V.morphAttributes.normal!==void 0&&(Rt=2),V.morphAttributes.color!==void 0&&(Rt=3);let Lt,Gt,Wt,Z;if(nt){let jt=cn[nt];Lt=jt.vertexShader,Gt=jt.fragmentShader}else Lt=x.vertexShader,Gt=x.fragmentShader,l.update(x),Wt=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);let j=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,Yt=!!x.map,De=!!x.matcap,Xt=!!B,Jt=!!x.aoMap,ne=!!x.lightMap,Ut=!!x.bumpMap,Ee=!!x.normalMap,I=!!x.displacementMap,we=!!x.emissiveMap,Zt=!!x.metalnessMap,le=!!x.roughnessMap,vt=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,Y=x.sheen>0,J=x.transmission>0,X=vt&&!!x.anisotropyMap,Mt=C&&!!x.clearcoatMap,st=C&&!!x.clearcoatNormalMap,xt=C&&!!x.clearcoatRoughnessMap,Ct=O&&!!x.iridescenceMap,Q=O&&!!x.iridescenceThicknessMap,at=Y&&!!x.sheenColorMap,gt=Y&&!!x.sheenRoughnessMap,yt=!!x.specularMap,rt=!!x.specularColorMap,Bt=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,ut=J&&!!x.thicknessMap,tt=!!x.gradientMap,dt=!!x.alphaMap,$=x.alphaTest>0,K=!!x.alphaHash,it=!!x.extensions,It=Yi;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=s.toneMapping);let ce={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:Gt,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Es,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:De,envMap:Xt,envMapMode:Xt&&B.mapping,envMapCubeUVHeight:q,aoMap:Jt,lightMap:ne,bumpMap:Ut,normalMap:Ee,displacementMap:I,emissiveMap:we,normalMapObjectSpace:Ee&&x.normalMapType===zf,normalMapTangentSpace:Ee&&x.normalMapType===gc,metalnessMap:Zt,roughnessMap:le,anisotropy:vt,anisotropyMap:X,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:xt,dispersion:v,iridescence:O,iridescenceMap:Ct,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:at,sheenRoughnessMap:gt,specularMap:yt,specularColorMap:rt,specularIntensityMap:Bt,transmission:J,transmissionMap:L,thicknessMap:ut,gradientMap:tt,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:$,alphaHash:K,combine:x.combine,mapUv:Yt&&g(x.map.channel),aoMapUv:Jt&&g(x.aoMap.channel),lightMapUv:ne&&g(x.lightMap.channel),bumpMapUv:Ut&&g(x.bumpMap.channel),normalMapUv:Ee&&g(x.normalMap.channel),displacementMapUv:I&&g(x.displacementMap.channel),emissiveMapUv:we&&g(x.emissiveMap.channel),metalnessMapUv:Zt&&g(x.metalnessMap.channel),roughnessMapUv:le&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:yt&&g(x.specularMap.channel),specularColorMapUv:rt&&g(x.specularColorMap.channel),specularIntensityMapUv:Bt&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:ut&&g(x.thicknessMap.channel),alphaMapUv:dt&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ee||vt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Yt||dt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&Ht.getTransfer(x.map.colorSpace)===Kt,decodeVideoTextureEmissive:we&&x.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(x.emissiveMap.colorSpace)===Kt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===ti,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(E,x),b(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){let E=_[x.type],P;if(E){let N=cn[E];P=Kf.clone(N.uniforms)}else P=x.uniforms;return P}function S(x,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new ay(s,E,x,r),h.push(P),u.set(E,P)),P}function w(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function cy(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function hy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gp(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||hy),i.length>1&&i.sort(d||mp),n.length>1&&n.sort(d||mp)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function uy(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new gp,s.set(i,[a])):n>=r.length?(a=new gp,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function dy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function fy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var py=0;function my(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gy(s){let t=new dy,e=fy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,r=new ue,a=new ue;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,b=0,M=0,S=0,w=0,A=0;c.sort(my);for(let x=0,E=c.length;x<E;x++){let P=c[x],N=P.color,F=P.intensity,G=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ls?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,q=e.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=k,f++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=G,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[g]=k;let B=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,B.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[g]=B.matrix,P.castShadow){let q=e.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=V,M++}g++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let B=P.shadow,q=e.get(P);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,b++}i.point[_]=k,_++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==b||R.numSpotShadows!==M||R.numSpotMaps!==S||R.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=b,R.numSpotShadows=M,R.numSpotMaps=S,R.numLightProbes=A,i.version=py++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),u++}else if(b.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function _p(s){let t=new gy(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _y(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new _p(s),t.set(n,[o])):r>=a.length?(o=new _p(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`,yy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],My=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],xp=new ue,Ua=new D,pu=new D;function by(s,t,e){let i=new Tr,n=new Pt,r=new Pt,a=new pe,o=new ol,l=new ll,c={},h=e.maxTextureSize,u={[En]:ti,[ti]:En,[rn]:rn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:xy,fragmentShader:vy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ve;_.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Qt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let p=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===gf&&(Et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ca);let x=s.getRenderTarget(),E=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(an),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==this.type;F&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(V=>V.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,V=w.length;G<V;G++){let k=w[G],B=k.shadow;if(B===void 0){Et("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let q=B.getFrameExtents();if(n.multiply(q),r.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/q.x),n.x=r.x*q.x,B.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/q.y),n.y=r.y*q.y,B.mapSize.y=r.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Pr){if(k.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Qe(n.x,n.y,{format:Ls,type:on,minFilter:ke,magFilter:ke,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Yn(n.x,n.y,Zi),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=nn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe}else{k.isPointLight?(B.map=new _a(n.x),B.map.depthTexture=new rl(n.x,qi)):(B.map=new Qe(n.x,n.y),B.map.depthTexture=new Yn(n.x,n.y,qi)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=nn;let et=s.state.buffers.depth.getReversed();this.type===Ca?(B.map.depthTexture.compareFunction=et?xc:_c,B.map.depthTexture.minFilter=ke,B.map.depthTexture.magFilter=ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Oe,B.map.depthTexture.magFilter=Oe)}B.camera.updateProjectionMatrix()}let nt=B.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<nt;et++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,et),s.clear();else{et===0&&(s.setRenderTarget(B.map),s.clear());let ct=B.getViewport(et);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),N.viewport(a)}if(k.isPointLight){let ct=B.camera,Rt=B.matrix,Lt=k.distance||ct.far;Lt!==ct.far&&(ct.far=Lt,ct.updateProjectionMatrix()),Ua.setFromMatrixPosition(k.matrixWorld),ct.position.copy(Ua),pu.copy(ct.position),pu.add(yy[et]),ct.up.copy(My[et]),ct.lookAt(pu),ct.updateMatrixWorld(),Rt.makeTranslation(-Ua.x,-Ua.y,-Ua.z),xp.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),B._frustum.setFromProjectionMatrix(xp,ct.coordinateSystem,ct.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),M(A,R,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Pr&&y(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,E,P)};function y(w,A){let R=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qe(n.x,n.y,{format:Ls,type:on})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,R,f,g,null)}function b(w,A,R,x){let E=null,P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=E.uuid,F=A.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let V=G[F];V===void 0&&(V=E.clone(),G[F]=V,A.addEventListener("dispose",S)),E=V}if(E.visible=A.visible,E.wireframe=A.wireframe,x===Pr?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=s.properties.get(E);N.light=R}return E}function M(w,A,R,x,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Pr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let F=t.update(w),G=w.material;if(Array.isArray(G)){let V=F.groups;for(let k=0,B=V.length;k<B;k++){let q=V[k],nt=G[q.materialIndex];if(nt&&nt.visible){let et=b(w,nt,x,E);w.onBeforeShadow(s,w,A,R,F,et,q),s.renderBufferDirect(R,null,F,et,w,q),w.onAfterShadow(s,w,A,R,F,et,q)}}}else if(G.visible){let V=b(w,G,x,E);w.onBeforeShadow(s,w,A,R,F,V,null),s.renderBufferDirect(R,null,F,V,w,null),w.onAfterShadow(s,w,A,R,F,V,null)}}let N=w.children;for(let F=0,G=N.length;F<G;F++)M(N[F],A,R,x,E)}function S(w){w.target.removeEventListener("dispose",S);for(let R in c){let x=c[R],E=w.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}var Sy={[Ml]:bl,[Sl]:wl,[Tl]:Al,[Ss]:El,[bl]:Ml,[wl]:Sl,[Al]:Tl,[El]:Ss};function Ty(s,t){function e(){let L=!1,ut=new pe,tt=null,dt=new pe(0,0,0,0);return{setMask:function($){tt!==$&&!L&&(s.colorMask($,$,$,$),tt=$)},setLocked:function($){L=$},setClear:function($,K,it,It,ce){ce===!0&&($*=It,K*=It,it*=It),ut.set($,K,it,It),dt.equals(ut)===!1&&(s.clearColor($,K,it,It),dt.copy(ut))},reset:function(){L=!1,tt=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,ut=!1,tt=null,dt=null,$=null;return{setReversed:function(K){if(ut!==K){let it=t.get("EXT_clip_control");K?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ut=K;let It=$;$=null,this.setClear(It)}},getReversed:function(){return ut},setTest:function(K){K?j(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(K){tt!==K&&!L&&(s.depthMask(K),tt=K)},setFunc:function(K){if(ut&&(K=Sy[K]),dt!==K){switch(K){case Ml:s.depthFunc(s.NEVER);break;case bl:s.depthFunc(s.ALWAYS);break;case Sl:s.depthFunc(s.LESS);break;case Ss:s.depthFunc(s.LEQUAL);break;case Tl:s.depthFunc(s.EQUAL);break;case El:s.depthFunc(s.GEQUAL);break;case wl:s.depthFunc(s.GREATER);break;case Al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=K}},setLocked:function(K){L=K},setClear:function(K){$!==K&&(ut&&(K=1-K),s.clearDepth(K),$=K)},reset:function(){L=!1,tt=null,dt=null,$=null,ut=!1}}}function n(){let L=!1,ut=null,tt=null,dt=null,$=null,K=null,it=null,It=null,ce=null;return{setTest:function(jt){L||(jt?j(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(jt){ut!==jt&&!L&&(s.stencilMask(jt),ut=jt)},setFunc:function(jt,ji,mn){(tt!==jt||dt!==ji||$!==mn)&&(s.stencilFunc(jt,ji,mn),tt=jt,dt=ji,$=mn)},setOp:function(jt,ji,mn){(K!==jt||it!==ji||It!==mn)&&(s.stencilOp(jt,ji,mn),K=jt,it=ji,It=mn)},setLocked:function(jt){L=jt},setClear:function(jt){ce!==jt&&(s.clearStencil(jt),ce=jt)},reset:function(){L=!1,ut=null,tt=null,dt=null,$=null,K=null,it=null,It=null,ce=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,b=null,M=null,S=null,w=null,A=new Dt(0,0,0),R=0,x=!1,E=null,P=null,N=null,F=null,G=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,B=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=B>=2);let nt=null,et={},ct=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Lt=new pe().fromArray(ct),Gt=new pe().fromArray(Rt);function Wt(L,ut,tt,dt){let $=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<tt;it++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(ut+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return K}let Z={};Z[s.TEXTURE_2D]=Wt(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Ss),Ut(!1),Ee(Uh),j(s.CULL_FACE),Jt(an);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function pt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ft(L,ut){return u[L]!==ut?(s.bindFramebuffer(L,ut),u[L]=ut,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(L,ut){let tt=f,dt=!1;if(L){tt=d.get(ut),tt===void 0&&(tt=[],d.set(ut,tt));let $=L.textures;if(tt.length!==$.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let K=0,it=$.length;K<it;K++)tt[K]=s.COLOR_ATTACHMENT0+K;tt.length=$.length,dt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,dt=!0);dt&&s.drawBuffers(tt)}function Yt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let De={[Hn]:s.FUNC_ADD,[xf]:s.FUNC_SUBTRACT,[vf]:s.FUNC_REVERSE_SUBTRACT};De[yf]=s.MIN,De[Mf]=s.MAX;let Xt={[bf]:s.ZERO,[Sf]:s.ONE,[Tf]:s.SRC_COLOR,[qo]:s.SRC_ALPHA,[Pf]:s.SRC_ALPHA_SATURATE,[Cf]:s.DST_COLOR,[wf]:s.DST_ALPHA,[Ef]:s.ONE_MINUS_SRC_COLOR,[Zo]:s.ONE_MINUS_SRC_ALPHA,[Rf]:s.ONE_MINUS_DST_COLOR,[Af]:s.ONE_MINUS_DST_ALPHA,[If]:s.CONSTANT_COLOR,[Df]:s.ONE_MINUS_CONSTANT_COLOR,[Lf]:s.CONSTANT_ALPHA,[Of]:s.ONE_MINUS_CONSTANT_ALPHA};function Jt(L,ut,tt,dt,$,K,it,It,ce,jt){if(L===an){g===!0&&(pt(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),L!==_f){if(L!==m||jt!==x){if((p!==Hn||M!==Hn)&&(s.blendEquation(s.FUNC_ADD),p=Hn,M=Hn),jt)switch(L){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bh:s.blendFunc(s.ONE,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",L);break}else switch(L){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zh:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",L);break}y=null,b=null,S=null,w=null,A.set(0,0,0),R=0,m=L,x=jt}return}$=$||ut,K=K||tt,it=it||dt,(ut!==p||$!==M)&&(s.blendEquationSeparate(De[ut],De[$]),p=ut,M=$),(tt!==y||dt!==b||K!==S||it!==w)&&(s.blendFuncSeparate(Xt[tt],Xt[dt],Xt[K],Xt[it]),y=tt,b=dt,S=K,w=it),(It.equals(A)===!1||ce!==R)&&(s.blendColor(It.r,It.g,It.b,ce),A.copy(It),R=ce),m=L,x=!1}function ne(L,ut){L.side===rn?pt(s.CULL_FACE):j(s.CULL_FACE);let tt=L.side===ti;ut&&(tt=!tt),Ut(tt),L.blending===bs&&L.transparent===!1?Jt(an):Jt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),we(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(L){E!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),E=L)}function Ee(L){L!==pf?(j(s.CULL_FACE),L!==P&&(L===Uh?s.cullFace(s.BACK):L===mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),P=L}function I(L){L!==N&&(k&&s.lineWidth(L),N=L)}function we(L,ut,tt){L?(j(s.POLYGON_OFFSET_FILL),(F!==ut||G!==tt)&&(s.polygonOffset(ut,tt),F=ut,G=tt)):pt(s.POLYGON_OFFSET_FILL)}function Zt(L){L?j(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function le(L){L===void 0&&(L=s.TEXTURE0+V-1),nt!==L&&(s.activeTexture(L),nt=L)}function vt(L,ut,tt){tt===void 0&&(nt===null?tt=s.TEXTURE0+V-1:tt=nt);let dt=et[tt];dt===void 0&&(dt={type:void 0,texture:void 0},et[tt]=dt),(dt.type!==L||dt.texture!==ut)&&(nt!==tt&&(s.activeTexture(tt),nt=tt),s.bindTexture(L,ut||Z[L]),dt.type=L,dt.texture=ut)}function C(){let L=et[nt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(L){At("WebGLState:",L)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(L){At("WebGLState:",L)}}function Y(){try{s.texSubImage2D(...arguments)}catch(L){At("WebGLState:",L)}}function J(){try{s.texSubImage3D(...arguments)}catch(L){At("WebGLState:",L)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(L){At("WebGLState:",L)}}function Mt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){At("WebGLState:",L)}}function st(){try{s.texStorage2D(...arguments)}catch(L){At("WebGLState:",L)}}function xt(){try{s.texStorage3D(...arguments)}catch(L){At("WebGLState:",L)}}function Ct(){try{s.texImage2D(...arguments)}catch(L){At("WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){At("WebGLState:",L)}}function at(L){Lt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Lt.copy(L))}function gt(L){Gt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Gt.copy(L))}function yt(L,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let dt=tt.get(L);dt===void 0&&(dt=s.getUniformBlockIndex(ut,L.name),tt.set(L,dt))}function rt(L,ut){let dt=c.get(ut).get(L);l.get(ut)!==dt&&(s.uniformBlockBinding(ut,dt,L.__bindingPointIndex),l.set(ut,dt))}function Bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,et={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,b=null,M=null,S=null,w=null,A=new Dt(0,0,0),R=0,x=!1,E=null,P=null,N=null,F=null,G=null,Lt.set(0,0,s.canvas.width,s.canvas.height),Gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:pt,bindFramebuffer:Ft,drawBuffers:_t,useProgram:Yt,setBlending:Jt,setMaterial:ne,setFlipSided:Ut,setCullFace:Ee,setLineWidth:I,setPolygonOffset:we,setScissorTest:Zt,activeTexture:le,bindTexture:vt,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ct,texImage3D:Q,updateUBOMapping:yt,uniformBlockBinding:rt,texStorage2D:st,texStorage3D:xt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:at,viewport:gt,reset:Bt}}function Ey(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return f?new OffscreenCanvas(C,v):_r("canvas")}function g(C,v,O){let Y=1,J=vt(C);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let X=Math.floor(Y*J.width),Mt=Math.floor(Y*J.height);u===void 0&&(u=_(X,Mt));let st=v?_(X,Mt):u;return st.width=X,st.height=Mt,st.getContext("2d").drawImage(C,0,0,X,Mt),Et("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),st}else return"data"in C&&Et("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,v,O,Y,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),v===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){let Mt=J?la:Ht.getTransfer(Y);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=Mt===Kt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(C,v){let O;return C?v===null||v===qi||v===Dr?O=s.DEPTH24_STENCIL8:v===Zi?O=s.DEPTH32F_STENCIL8:v===Ir&&(O=s.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qi||v===Dr?O=s.DEPTH_COMPONENT24:v===Zi?O=s.DEPTH_COMPONENT32F:v===Ir&&(O=s.DEPTH_COMPONENT16),O}function S(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oe&&C.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&h.delete(v)}function A(C){let v=C.target;v.removeEventListener("dispose",A),E(v)}function R(C){let v=i.get(C);if(v.__webglInit===void 0)return;let O=C.source,Y=d.get(O);if(Y){let J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(C),Object.keys(Y).length===0&&d.delete(O)}i.remove(C)}function x(C){let v=i.get(C);s.deleteTexture(v.__webglTexture);let O=C.source,Y=d.get(O);delete Y[v.__cacheKey],a.memory.textures--}function E(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let Y=0,J=O.length;Y<J;Y++){let X=i.get(O[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(C)}let P=0;function N(){P=0}function F(){let C=P;return C>=n.maxTextures&&Et("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function G(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function V(C,v){let O=i.get(C);if(C.isVideoTexture&&Zt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let Y=C.image;if(Y===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,C,v);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function k(C,v){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,v);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function B(C,v){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function q(C,v){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){j(O,C,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let nt={[Ts]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[Ko]:s.MIRRORED_REPEAT},et={[Oe]:s.NEAREST,[Uf]:s.NEAREST_MIPMAP_NEAREST,[Ia]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Il]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},ct={[kf]:s.NEVER,[Xf]:s.ALWAYS,[Vf]:s.LESS,[_c]:s.LEQUAL,[Hf]:s.EQUAL,[xc]:s.GEQUAL,[Gf]:s.GREATER,[Wf]:s.NOTEQUAL};function Rt(C,v){if(v.type===Zi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Il||v.magFilter===Ia||v.magFilter===$n||v.minFilter===ke||v.minFilter===Il||v.minFilter===Ia||v.minFilter===$n)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,nt[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,nt[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,nt[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,et[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Oe||v.minFilter!==Ia&&v.minFilter!==$n||v.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Lt(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let Y=v.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let X=G(v);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[X].usedTimes++;let Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&x(v)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return O}function Gt(C,v,O){return Math.floor(Math.floor(C/O)/v)}function Wt(C,v,O,Y){let X=C.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,Y,v.data);else{X.sort((Q,at)=>Q.start-at.start);let Mt=0;for(let Q=1;Q<X.length;Q++){let at=X[Mt],gt=X[Q],yt=at.start+at.count,rt=Gt(gt.start,v.width,4),Bt=Gt(at.start,v.width,4);gt.start<=yt+1&&rt===Bt&&Gt(gt.start+gt.count-1,v.width,4)===rt?at.count=Math.max(at.count,gt.start+gt.count-at.start):(++Mt,X[Mt]=gt)}X.length=Mt+1;let st=s.getParameter(s.UNPACK_ROW_LENGTH),xt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ct=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Q=0,at=X.length;Q<at;Q++){let gt=X[Q],yt=Math.floor(gt.start/4),rt=Math.ceil(gt.count/4),Bt=yt%v.width,L=Math.floor(yt/v.width),ut=rt,tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Bt),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),e.texSubImage2D(s.TEXTURE_2D,0,Bt,L,ut,tt,O,Y,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,st),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ct)}}function Z(C,v,O){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let J=Lt(C,v),X=v.source;e.bindTexture(Y,C.__webglTexture,s.TEXTURE0+O);let Mt=i.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);let st=Ht.getPrimaries(Ht.workingColorSpace),xt=v.colorSpace===An?null:Ht.getPrimaries(v.colorSpace),Ct=v.colorSpace===An||st===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Q=g(v.image,!1,n.maxTextureSize);Q=le(v,Q);let at=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),yt=b(v.internalFormat,at,gt,v.colorSpace,v.isVideoTexture);Rt(Y,v);let rt,Bt=v.mipmaps,L=v.isVideoTexture!==!0,ut=Mt.__version===void 0||J===!0,tt=X.dataReady,dt=S(v,Q);if(v.isDepthTexture)yt=M(v.format===Qn,v.type),ut&&(L?e.texStorage2D(s.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,yt,Q.width,Q.height,0,at,gt,null));else if(v.isDataTexture)if(Bt.length>0){L&&ut&&e.texStorage2D(s.TEXTURE_2D,dt,yt,Bt[0].width,Bt[0].height);for(let $=0,K=Bt.length;$<K;$++)rt=Bt[$],L?tt&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,rt.width,rt.height,at,gt,rt.data):e.texImage2D(s.TEXTURE_2D,$,yt,rt.width,rt.height,0,at,gt,rt.data);v.generateMipmaps=!1}else L?(ut&&e.texStorage2D(s.TEXTURE_2D,dt,yt,Q.width,Q.height),tt&&Wt(v,Q,at,gt)):e.texImage2D(s.TEXTURE_2D,0,yt,Q.width,Q.height,0,at,gt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,yt,Bt[0].width,Bt[0].height,Q.depth);for(let $=0,K=Bt.length;$<K;$++)if(rt=Bt[$],v.format!==Oi)if(at!==null)if(L){if(tt)if(v.layerUpdates.size>0){let it=lu(rt.width,rt.height,v.format,v.type);for(let It of v.layerUpdates){let ce=rt.data.subarray(It*it/rt.data.BYTES_PER_ELEMENT,(It+1)*it/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,It,rt.width,rt.height,1,at,ce)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,rt.width,rt.height,Q.depth,at,rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,yt,rt.width,rt.height,Q.depth,0,rt.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,rt.width,rt.height,Q.depth,at,gt,rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,yt,rt.width,rt.height,Q.depth,0,at,gt,rt.data)}else{L&&ut&&e.texStorage2D(s.TEXTURE_2D,dt,yt,Bt[0].width,Bt[0].height);for(let $=0,K=Bt.length;$<K;$++)rt=Bt[$],v.format!==Oi?at!==null?L?tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,rt.width,rt.height,at,rt.data):e.compressedTexImage2D(s.TEXTURE_2D,$,yt,rt.width,rt.height,0,rt.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,rt.width,rt.height,at,gt,rt.data):e.texImage2D(s.TEXTURE_2D,$,yt,rt.width,rt.height,0,at,gt,rt.data)}else if(v.isDataArrayTexture)if(L){if(ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,yt,Q.width,Q.height,Q.depth),tt)if(v.layerUpdates.size>0){let $=lu(Q.width,Q.height,v.format,v.type);for(let K of v.layerUpdates){let it=Q.data.subarray(K*$/Q.data.BYTES_PER_ELEMENT,(K+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,at,gt,it)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,gt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,at,gt,Q.data);else if(v.isData3DTexture)L?(ut&&e.texStorage3D(s.TEXTURE_3D,dt,yt,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,gt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,at,gt,Q.data);else if(v.isFramebufferTexture){if(ut)if(L)e.texStorage2D(s.TEXTURE_2D,dt,yt,Q.width,Q.height);else{let $=Q.width,K=Q.height;for(let it=0;it<dt;it++)e.texImage2D(s.TEXTURE_2D,it,yt,$,K,0,at,gt,null),$>>=1,K>>=1}}else if(Bt.length>0){if(L&&ut){let $=vt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,dt,yt,$.width,$.height)}for(let $=0,K=Bt.length;$<K;$++)rt=Bt[$],L?tt&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,at,gt,rt):e.texImage2D(s.TEXTURE_2D,$,yt,at,gt,rt);v.generateMipmaps=!1}else if(L){if(ut){let $=vt(Q);e.texStorage2D(s.TEXTURE_2D,dt,yt,$.width,$.height)}tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at,gt,Q)}else e.texImage2D(s.TEXTURE_2D,0,yt,at,gt,Q);m(v)&&p(Y),Mt.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function j(C,v,O){if(v.image.length!==6)return;let Y=Lt(C,v),J=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);let X=i.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(s.TEXTURE0+O);let Mt=Ht.getPrimaries(Ht.workingColorSpace),st=v.colorSpace===An?null:Ht.getPrimaries(v.colorSpace),xt=v.colorSpace===An||Mt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ct=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,at=[];for(let K=0;K<6;K++)!Ct&&!Q?at[K]=g(v.image[K],!0,n.maxCubemapSize):at[K]=Q?v.image[K].image:v.image[K],at[K]=le(v,at[K]);let gt=at[0],yt=r.convert(v.format,v.colorSpace),rt=r.convert(v.type),Bt=b(v.internalFormat,yt,rt,v.colorSpace),L=v.isVideoTexture!==!0,ut=X.__version===void 0||Y===!0,tt=J.dataReady,dt=S(v,gt);Rt(s.TEXTURE_CUBE_MAP,v);let $;if(Ct){L&&ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Bt,gt.width,gt.height);for(let K=0;K<6;K++){$=at[K].mipmaps;for(let it=0;it<$.length;it++){let It=$[it];v.format!==Oi?yt!==null?L?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,It.width,It.height,yt,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Bt,It.width,It.height,0,It.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,It.width,It.height,yt,rt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Bt,It.width,It.height,0,yt,rt,It.data)}}}else{if($=v.mipmaps,L&&ut){$.length>0&&dt++;let K=vt(at[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,at[K].width,at[K].height,yt,rt,at[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,at[K].width,at[K].height,0,yt,rt,at[K].data);for(let it=0;it<$.length;it++){let ce=$[it].image[K].image;L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,ce.width,ce.height,yt,rt,ce.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Bt,ce.width,ce.height,0,yt,rt,ce.data)}}else{L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,rt,at[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,yt,rt,at[K]);for(let it=0;it<$.length;it++){let It=$[it];L?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,yt,rt,It.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Bt,yt,rt,It.image[K])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function pt(C,v,O,Y,J,X){let Mt=r.convert(O.format,O.colorSpace),st=r.convert(O.type),xt=b(O.internalFormat,Mt,st,O.colorSpace),Ct=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!Ct.__hasExternalTextures){let at=Math.max(1,v.width>>X),gt=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,X,xt,at,gt,v.depth,0,Mt,st,null):e.texImage2D(J,X,xt,at,gt,0,Mt,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),we(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,Q.__webglTexture,0,I(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,Q.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(C,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){let Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,J),Mt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;we(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),X,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,C)}else{let Y=v.textures;for(let J=0;J<Y.length;J++){let X=Y[J],Mt=r.convert(X.format,X.colorSpace),st=r.convert(X.type),xt=b(X.internalFormat,Mt,st,X.colorSpace);we(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),xt,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),xt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,xt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(C,v,O){let Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,v.depthTexture);let Ct=r.convert(v.depthTexture.format),Q=r.convert(v.depthTexture.type),at;v.depthTexture.format===nn?at=s.DEPTH_COMPONENT24:v.depthTexture.format===Qn&&(at=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,at,v.width,v.height,0,Ct,Q,null)}}else V(v.depthTexture,0);let X=J.__webglTexture,Mt=I(v),st=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,xt=v.depthTexture.format===Qn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===nn)we(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,st,X,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,xt,st,X,0);else if(v.depthTexture.format===Qn)we(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,st,X,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,xt,st,X,0);else throw new Error("Unknown depthTexture format")}function Yt(C){let v=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)_t(v.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?_t(v.__webglFramebuffer[0],C,0):_t(v.__webglFramebuffer,C,0)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ft(v.__webglDepthbuffer[Y],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ft(v.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function De(C,v,O){let Y=i.get(C);v!==void 0&&pt(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Yt(C)}function Xt(C){let v=C.texture,O=i.get(C),Y=i.get(v);C.addEventListener("dispose",A);let J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let xt=0;xt<v.mipmaps.length;xt++)O.__webglFramebuffer[st][xt]=s.createFramebuffer()}else O.__webglFramebuffer[st]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)O.__webglFramebuffer[st]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let st=0,xt=J.length;st<xt;st++){let Ct=i.get(J[st]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&we(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){let xt=J[st];O.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[st]);let Ct=r.convert(xt.format,xt.colorSpace),Q=r.convert(xt.type),at=b(xt.internalFormat,Ct,Q,xt.colorSpace,C.isXRRenderTarget===!0),gt=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,at,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,O.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)pt(O.__webglFramebuffer[st][xt],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt);else pt(O.__webglFramebuffer[st],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,xt=J.length;st<xt;st++){let Ct=J[st],Q=i.get(Ct),at=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),Rt(at,Ct),pt(O.__webglFramebuffer,C,Ct,s.COLOR_ATTACHMENT0+st,at,0),m(Ct)&&p(at)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Rt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)pt(O.__webglFramebuffer[xt],C,v,s.COLOR_ATTACHMENT0,st,xt);else pt(O.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,st,0);m(v)&&p(st),e.unbindTexture()}C.depthBuffer&&Yt(C)}function Jt(C){let v=C.textures;for(let O=0,Y=v.length;O<Y;O++){let J=v[O];if(m(J)){let X=y(C),Mt=i.get(J).__webglTexture;e.bindTexture(X,Mt),p(X),e.unbindTexture()}}}let ne=[],Ut=[];function Ee(C){if(C.samples>0){if(we(C)===!1){let v=C.textures,O=C.width,Y=C.height,J=s.COLOR_BUFFER_BIT,X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=i.get(C),st=v.length>1;if(st)for(let Ct=0;Ct<v.length;Ct++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let xt=C.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ct=0;Ct<v.length;Ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ct]);let Q=i.get(v[Ct]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,s.NEAREST),l===!0&&(ne.length=0,Ut.length=0,ne.push(s.COLOR_ATTACHMENT0+Ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ne.push(X),Ut.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let Ct=0;Ct<v.length;Ct++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ct]);let Q=i.get(v[Ct]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,Q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(n.maxSamples,C.samples)}function we(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Zt(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function le(C,v){let O=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Es&&O!==An&&(Ht.getTransfer(O)===Kt?(Y!==Oi||J!==oi)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",O)),v}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=De,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wy(s,t){function e(i,n=An){let r,a=Ht.getTransfer(n);if(i===oi)return s.UNSIGNED_BYTE;if(i===Ll)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return s.BYTE;if(i===Zh)return s.SHORT;if(i===Ir)return s.UNSIGNED_SHORT;if(i===Dl)return s.INT;if(i===qi)return s.UNSIGNED_INT;if(i===Zi)return s.FLOAT;if(i===on)return s.HALF_FLOAT;if(i===jh)return s.ALPHA;if(i===$h)return s.RGB;if(i===Oi)return s.RGBA;if(i===nn)return s.DEPTH_COMPONENT;if(i===Qn)return s.DEPTH_STENCIL;if(i===Qh)return s.RED;if(i===Fl)return s.RED_INTEGER;if(i===Ls)return s.RG;if(i===Nl)return s.RG_INTEGER;if(i===Ul)return s.RGBA_INTEGER;if(i===Da||i===La||i===Oa||i===Fa)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===zl||i===kl||i===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Gl||i===Wl||i===Xl||i===Yl||i===ql||i===Zl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===Gl)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return r.COMPRESSED_R11_EAC;if(i===Yl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ql)return r.COMPRESSED_RG11_EAC;if(i===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kl||i===Jl||i===jl||i===$l||i===Ql||i===tc||i===ec||i===ic||i===nc||i===sc||i===rc||i===ac||i===oc||i===lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kl)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jl)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jl)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cc||i===hc||i===uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===cc)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dc||i===fc||i===pc||i===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cy=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Mi({vertexShader:Ay,fragmentShader:Cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends sn{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new bu,p={},y=e.getContextAttributes(),b=null,M=null,S=[],w=[],A=new Pt,R=null,x=new Be;x.viewport=new pe;let E=new Be;E.viewport=new pe;let P=[x,E],N=new vl,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=S[Z];return j===void 0&&(j=new Sr,S[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=S[Z];return j===void 0&&(j=new Sr,S[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=S[Z];return j===void 0&&(j=new Sr,S[Z]=j),j.getHandSpace()};function V(Z){let j=w.indexOf(Z.inputSource);if(j===-1)return;let pt=S[j];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||a),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",B);for(let Z=0;Z<S.length;Z++){let j=w[Z];j!==null&&(w[Z]=null,S[Z].disconnect(j))}F=null,G=null,m.reset();for(let Z in p)delete p[Z];t.setRenderTarget(b),f=null,d=null,u=null,n=null,M=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=function(Z){return so(this,null,function*(){if(n=Z,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",k),n.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ft=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?Qn:nn,Ft=y.stencil?Dr:qi);let Yt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Yt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Qe(d.textureWidth,d.textureHeight,{format:Oi,type:oi,depthTexture:new Yn(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,pt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Oi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),Wt.setContext(n),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let j=0;j<Z.removed.length;j++){let pt=Z.removed[j],Ft=w.indexOf(pt);Ft>=0&&(w[Ft]=null,S[Ft].disconnect(pt))}for(let j=0;j<Z.added.length;j++){let pt=Z.added[j],Ft=w.indexOf(pt);if(Ft===-1){for(let Yt=0;Yt<S.length;Yt++)if(Yt>=w.length){w.push(pt),Ft=Yt;break}else if(w[Yt]===null){w[Yt]=pt,Ft=Yt;break}if(Ft===-1)break}let _t=S[Ft];_t&&_t.connect(pt)}}let q=new D,nt=new D;function et(Z,j,pt){q.setFromMatrixPosition(j.matrixWorld),nt.setFromMatrixPosition(pt.matrixWorld);let Ft=q.distanceTo(nt),_t=j.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,De=_t[14]/(_t[10]-1),Xt=_t[14]/(_t[10]+1),Jt=(_t[9]+1)/_t[5],ne=(_t[9]-1)/_t[5],Ut=(_t[8]-1)/_t[0],Ee=(Yt[8]+1)/Yt[0],I=De*Ut,we=De*Ee,Zt=Ft/(-Ut+Ee),le=Zt*-Ut;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(le),Z.translateZ(Zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_t[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let vt=De+Zt,C=Xt+Zt,v=I-le,O=we+(Ft-le),Y=Jt*Xt/C*vt,J=ne*Xt/C*vt;Z.projectionMatrix.makePerspective(v,O,Y,J,vt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let j=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),N.near=E.near=x.near=j,N.far=E.far=x.far=pt,(F!==N.near||G!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,G=N.far),N.layers.mask=Z.layers.mask|6,x.layers.mask=N.layers.mask&3,E.layers.mask=N.layers.mask&5;let Ft=Z.parent,_t=N.cameras;ct(N,Ft);for(let Yt=0;Yt<_t.length;Yt++)ct(_t[Yt],Ft);_t.length===2?et(N,x,E):N.projectionMatrix.copy(x.projectionMatrix),Rt(Z,N,Ft)};function Rt(Z,j,pt){pt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=yr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let Lt=null;function Gt(Z,j){if(h=j.getViewerPose(c||a),_=j,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ft=!1;pt.length!==N.cameras.length&&(N.cameras.length=0,Ft=!0);for(let Xt=0;Xt<pt.length;Xt++){let Jt=pt[Xt],ne=null;if(f!==null)ne=f.getViewport(Jt);else{let Ee=u.getViewSubImage(d,Jt);ne=Ee.viewport,Xt===0&&(t.setRenderTargetTextures(M,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(M))}let Ut=P[Xt];Ut===void 0&&(Ut=new Be,Ut.layers.enable(Xt),Ut.viewport=new pe,P[Xt]=Ut),Ut.matrix.fromArray(Jt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Jt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(ne.x,ne.y,ne.width,ne.height),Xt===0&&(N.matrix.copy(Ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ft===!0&&N.cameras.push(Ut)}let _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let Xt=u.getDepthInformation(pt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,n.renderState)}if(_t&&_t.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let Xt=0;Xt<pt.length;Xt++){let Jt=pt[Xt].camera;if(Jt){let ne=p[Jt];ne||(ne=new ya,p[Jt]=ne);let Ut=u.getCameraImage(Jt);ne.sourceTexture=Ut}}}}for(let pt=0;pt<S.length;pt++){let Ft=w[pt],_t=S[pt];Ft!==null&&_t!==void 0&&_t.update(Ft,j,c||a)}Lt&&Lt(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}let Wt=new vp;Wt.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){Lt=Z},this.dispose=function(){}}},Ns=new Xi,Ry=new ue;function Py(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ru(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,Ns.copy(M),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(Ns)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Iy(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let M=b.program;i.uniformBlockBinding(y,M)}function c(y,b){let M=n[y.id];M===void 0&&(_(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",m));let S=b.program;i.updateUBOMapping(y,S);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let b=u();y.__bindingPointIndex=b;let M=s.createBuffer(),S=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=n[y.id],M=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let w=0,A=M.length;w<A;w++){let R=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,E=R.length;x<E;x++){let P=R[x];if(f(P,w,x,S)===!0){let N=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],G=0;for(let V=0;V<F.length;V++){let k=F[V],B=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,N+G,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,G),G+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,M,S){let w=y.value,A=b+"_"+M;if(S[A]===void 0)return typeof w=="number"||typeof w=="boolean"?S[A]=w:S[A]=w.clone(),!0;{let R=S[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return S[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(y){let b=y.uniforms,M=0,S=16;for(let A=0,R=b.length;A<R;A++){let x=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,P=x.length;E<P;E++){let N=x[E],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,V=F.length;G<V;G++){let k=F[G],B=g(k),q=M%S,nt=q%B.boundary,et=q+nt;M+=nt,et!==0&&S-et<B.storage&&(M+=S-et),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=B.storage}}}let w=M%S;return w>0&&(M+=S-w),y.__size=M,y.__cache={},this}function g(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Et("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[b.id]),delete n[b.id],delete r[b.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var Dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ln=null;function Ly(){return ln===null&&(ln=new el(Dy,16,16,Ls,on),ln.name="DFG_LUT",ln.minFilter=ke,ln.magFilter=ke,ln.wrapS=en,ln.wrapT=en,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}var bc=class{constructor(t={}){let{canvas:e=Yf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let g=f,m=new Set([Ul,Nl,Fl]),p=new Set([oi,qi,Ir,Dr,Ll,Ol]),y=new Uint32Array(4),b=new Int32Array(4),M=null,S=null,w=[],A=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=Ue;let P=0,N=0,F=null,G=-1,V=null,k=new pe,B=new pe,q=null,nt=new Dt(0),et=0,ct=e.width,Rt=e.height,Lt=1,Gt=null,Wt=null,Z=new pe(0,0,ct,Rt),j=new pe(0,0,ct,Rt),pt=!1,Ft=new Tr,_t=!1,Yt=!1,De=new ue,Xt=new D,Jt=new pe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Ee(){return F===null?Lt:1}let I=i;function we(T,U){return e.getContext(T,U)}try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",jt,!1),I===null){let U="webgl2";if(I=we(U,T),I===null)throw we(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw At("WebGLRenderer: "+T.message),T}let Zt,le,vt,C,v,O,Y,J,X,Mt,st,xt,Ct,Q,at,gt,yt,rt,Bt,L,ut,tt,dt,$;function K(){Zt=new kx(I),Zt.init(),tt=new wy(I,Zt),le=new Ix(I,Zt,t,tt),vt=new Ty(I,Zt),le.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),C=new Gx(I),v=new cy,O=new Ey(I,Zt,vt,v,le,tt,C),Y=new Lx(x),J=new zx(x),X=new qg(I),dt=new Rx(I,X),Mt=new Vx(I,X,C,dt),st=new Xx(I,Mt,X,C),Bt=new Wx(I,le,O),gt=new Dx(v),xt=new ly(x,Y,J,Zt,le,dt,gt),Ct=new Py(x,v),Q=new uy,at=new _y(Zt),rt=new Cx(x,Y,J,vt,st,_,l),yt=new by(x,st,le),$=new Iy(I,C,le,vt),L=new Px(I,Zt,C),ut=new Hx(I,Zt,C),C.programs=xt.programs,x.capabilities=le,x.extensions=Zt,x.properties=v,x.renderLists=Q,x.shadowMap=yt,x.state=vt,x.info=C}K(),g!==oi&&(R=new qx(g,e.width,e.height,n,r));let it=new Su(x,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(T){T!==void 0&&(Lt=T,this.setSize(ct,Rt,!1))},this.getSize=function(T){return T.set(ct,Rt)},this.setSize=function(T,U,W=!0){if(it.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=T,Rt=U,e.width=Math.floor(T*Lt),e.height=Math.floor(U*Lt),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(ct*Lt,Rt*Lt).floor()},this.setDrawingBufferSize=function(T,U,W){ct=T,Rt=U,Lt=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(g===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,U,W,H){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,U,W,H),vt.viewport(k.copy(Z).multiplyScalar(Lt).round())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,U,W,H){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,W,H),vt.scissor(B.copy(j).multiplyScalar(Lt).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){vt.setScissorTest(pt=T)},this.setOpaqueSort=function(T){Gt=T},this.setTransparentSort=function(T){Wt=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,W=!0){let H=0;if(T){let z=!1;if(F!==null){let ot=F.texture.format;z=m.has(ot)}if(z){let ot=F.texture.type,ft=p.has(ot),ht=rt.getClearColor(),mt=rt.getClearAlpha(),bt=ht.r,wt=ht.g,St=ht.b;ft?(y[0]=bt,y[1]=wt,y[2]=St,y[3]=mt,I.clearBufferuiv(I.COLOR,0,y)):(b[0]=bt,b[1]=wt,b[2]=St,b[3]=mt,I.clearBufferiv(I.COLOR,0,b))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),rt.dispose(),Q.dispose(),at.dispose(),v.dispose(),Y.dispose(),J.dispose(),st.dispose(),dt.dispose(),$.dispose(),xt.dispose(),it.dispose(),it.removeEventListener("sessionstart",bd),it.removeEventListener("sessionend",Sd),hs.stop()};function It(T){T.preventDefault(),nu("WebGLRenderer: Context Lost."),E=!0}function ce(){nu("WebGLRenderer: Context Restored."),E=!1;let T=C.autoReset,U=yt.enabled,W=yt.autoUpdate,H=yt.needsUpdate,z=yt.type;K(),C.autoReset=T,yt.enabled=U,yt.autoUpdate=W,yt.needsUpdate=H,yt.type=z}function jt(T){At("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ji(T){let U=T.target;U.removeEventListener("dispose",ji),mn(U)}function mn(T){zm(T),v.remove(T)}function zm(T){let U=v.get(T).programs;U!==void 0&&(U.forEach(function(W){xt.releaseProgram(W)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,H,z,ot){U===null&&(U=ne);let ft=z.isMesh&&z.matrixWorld.determinant()<0,ht=Vm(T,U,W,H,z);vt.setMaterial(H,ft);let mt=W.index,bt=1;if(H.wireframe===!0){if(mt=Mt.getWireframeAttribute(W),mt===void 0)return;bt=2}let wt=W.drawRange,St=W.attributes.position,zt=wt.start*bt,te=(wt.start+wt.count)*bt;ot!==null&&(zt=Math.max(zt,ot.start*bt),te=Math.min(te,(ot.start+ot.count)*bt)),mt!==null?(zt=Math.max(zt,0),te=Math.min(te,mt.count)):St!=null&&(zt=Math.max(zt,0),te=Math.min(te,St.count));let ve=te-zt;if(ve<0||ve===1/0)return;dt.setup(z,H,ht,W,mt);let ye,se=L;if(mt!==null&&(ye=X.get(mt),se=ut,se.setIndex(ye)),z.isMesh)H.wireframe===!0?(vt.setLineWidth(H.wireframeLinewidth*Ee()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(z.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),vt.setLineWidth(Tt*Ee()),z.isLineSegments?se.setMode(I.LINES):z.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else z.isPoints?se.setMode(I.POINTS):z.isSprite&&se.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Tt=z._multiDrawStarts,$t=z._multiDrawCounts,qt=z._multiDrawCount,mi=mt?X.get(mt).bytesPerElement:1,Js=v.get(H).currentProgram.getUniforms();for(let gi=0;gi<qt;gi++)Js.setValue(I,"_gl_DrawID",gi),se.render(Tt[gi]/mi,$t[gi])}else if(z.isInstancedMesh)se.renderInstances(zt,ve,z.count);else if(W.isInstancedBufferGeometry){let Tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,$t=Math.min(W.instanceCount,Tt);se.renderInstances(zt,ve,$t)}else se.render(zt,ve)};function Md(T,U,W){T.transparent===!0&&T.side===rn&&T.forceSinglePass===!1?(T.side=ti,T.needsUpdate=!0,no(T,U,W),T.side=En,T.needsUpdate=!0,no(T,U,W),T.side=rn):no(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),S=at.get(W),S.init(U),A.push(S),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights();let H=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ot=z.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){let ht=ot[ft];Md(ht,W,z),H.add(ht)}else Md(ot,W,z),H.add(ot)}),S=A.pop(),H},this.compileAsync=function(T,U,W=null){let H=this.compile(T,U,W);return new Promise(z=>{function ot(){if(H.forEach(function(ft){v.get(ft).currentProgram.isReady()&&H.delete(ft)}),H.size===0){z(T);return}setTimeout(ot,10)}Zt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Jc=null;function km(T){Jc&&Jc(T)}function bd(){hs.stop()}function Sd(){hs.start()}let hs=new vp;hs.setAnimationLoop(km),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(T){Jc=T,it.setAnimationLoop(T),T===null?hs.stop():hs.start()},it.addEventListener("sessionstart",bd),it.addEventListener("sessionend",Sd),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let W=it.enabled===!0&&it.isPresenting===!0,H=R!==null&&(F===null||W)&&R.begin(x,F);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,F),S=at.get(T,A.length),S.init(U),A.push(S),De.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ft.setFromProjectionMatrix(De,Wi,U.reversedDepth),Yt=this.localClippingEnabled,_t=gt.init(this.clippingPlanes,Yt),M=Q.get(T,w.length),M.init(),w.push(M),it.enabled===!0&&it.isPresenting===!0){let ft=x.xr.getDepthSensingMesh();ft!==null&&jc(ft,U,-1/0,x.sortObjects)}jc(T,U,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(Gt,Wt),Ut=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ut&&rt.addToRenderList(M,T),this.info.render.frame++,_t===!0&&gt.beginShadows();let z=S.state.shadowsArray;if(yt.render(z,T,U),_t===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){let ft=M.opaque,ht=M.transmissive;if(S.setupLights(),U.isArrayCamera){let mt=U.cameras;if(ht.length>0)for(let bt=0,wt=mt.length;bt<wt;bt++){let St=mt[bt];Ed(ft,ht,T,St)}Ut&&rt.render(T);for(let bt=0,wt=mt.length;bt<wt;bt++){let St=mt[bt];Td(M,T,St,St.viewport)}}else ht.length>0&&Ed(ft,ht,T,U),Ut&&rt.render(T),Td(M,T,U)}F!==null&&N===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),H&&R.end(x),T.isScene===!0&&T.onAfterRender(x,T,U),dt.resetDefaultState(),G=-1,V=null,A.pop(),A.length>0?(S=A[A.length-1],_t===!0&&gt.setGlobalState(x.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function jc(T,U,W,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ft.intersectsSprite(T)){H&&Jt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);let ft=st.update(T),ht=T.material;ht.visible&&M.push(T,ft,ht,W,Jt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ft.intersectsObject(T))){let ft=st.update(T),ht=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Jt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Jt.copy(ft.boundingSphere.center)),Jt.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(ht)){let mt=ft.groups;for(let bt=0,wt=mt.length;bt<wt;bt++){let St=mt[bt],zt=ht[St.materialIndex];zt&&zt.visible&&M.push(T,ft,zt,W,Jt.z,St)}}else ht.visible&&M.push(T,ft,ht,W,Jt.z,null)}}let ot=T.children;for(let ft=0,ht=ot.length;ft<ht;ft++)jc(ot[ft],U,W,H)}function Td(T,U,W,H){let{opaque:z,transmissive:ot,transparent:ft}=T;S.setupLightsView(W),_t===!0&&gt.setGlobalState(x.clippingPlanes,W),H&&vt.viewport(k.copy(H)),z.length>0&&io(z,U,W),ot.length>0&&io(ot,U,W),ft.length>0&&io(ft,U,W),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ed(T,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let zt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new Qe(1,1,{generateMipmaps:!0,type:zt?on:oi,minFilter:$n,samples:le.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let ot=S.state.transmissionRenderTarget[H.id],ft=H.viewport||k;ot.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);let ht=x.getRenderTarget(),mt=x.getActiveCubeFace(),bt=x.getActiveMipmapLevel();x.setRenderTarget(ot),x.getClearColor(nt),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),Ut&&rt.render(W);let wt=x.toneMapping;x.toneMapping=Yi;let St=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),_t===!0&&gt.setGlobalState(x.clippingPlanes,H),io(T,W,H),O.updateMultisampleRenderTarget(ot),O.updateRenderTargetMipmap(ot),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let te=0,ve=U.length;te<ve;te++){let ye=U[te],{object:se,geometry:Tt,material:$t,group:qt}=ye;if($t.side===rn&&se.layers.test(H.layers)){let mi=$t.side;$t.side=ti,$t.needsUpdate=!0,wd(se,W,H,Tt,$t,qt),$t.side=mi,$t.needsUpdate=!0,zt=!0}}zt===!0&&(O.updateMultisampleRenderTarget(ot),O.updateRenderTargetMipmap(ot))}x.setRenderTarget(ht,mt,bt),x.setClearColor(nt,et),St!==void 0&&(H.viewport=St),x.toneMapping=wt}function io(T,U,W){let H=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ot=T.length;z<ot;z++){let ft=T[z],{object:ht,geometry:mt,group:bt}=ft,wt=ft.material;wt.allowOverride===!0&&H!==null&&(wt=H),ht.layers.test(W.layers)&&wd(ht,U,W,mt,wt,bt)}}function wd(T,U,W,H,z,ot){T.onBeforeRender(x,U,W,H,z,ot),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,U,W,H,T,ot),z.transparent===!0&&z.side===rn&&z.forceSinglePass===!1?(z.side=ti,z.needsUpdate=!0,x.renderBufferDirect(W,U,H,z,T,ot),z.side=En,z.needsUpdate=!0,x.renderBufferDirect(W,U,H,z,T,ot),z.side=rn):x.renderBufferDirect(W,U,H,z,T,ot),T.onAfterRender(x,U,W,H,z,ot)}function no(T,U,W){U.isScene!==!0&&(U=ne);let H=v.get(T),z=S.state.lights,ot=S.state.shadowsArray,ft=z.state.version,ht=xt.getParameters(T,z.state,ot,U,W),mt=xt.getProgramCacheKey(ht),bt=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?J:Y).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,bt===void 0&&(T.addEventListener("dispose",ji),bt=new Map,H.programs=bt);let wt=bt.get(mt);if(wt!==void 0){if(H.currentProgram===wt&&H.lightsStateVersion===ft)return Cd(T,ht),wt}else ht.uniforms=xt.getUniforms(T),T.onBeforeCompile(ht,x),wt=xt.acquireProgram(ht,mt),bt.set(mt,wt),H.uniforms=ht.uniforms;let St=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(St.clippingPlanes=gt.uniform),Cd(T,ht),H.needsLights=Gm(T),H.lightsStateVersion=ft,H.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.directionalShadowMap.value=z.state.directionalShadowMap,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotShadowMap.value=z.state.spotShadowMap,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMap.value=z.state.pointShadowMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=wt,H.uniformsList=null,wt}function Ad(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Cd(T,U){let W=v.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Vm(T,U,W,H,z){U.isScene!==!0&&(U=ne),O.resetTextureUnits();let ot=U.fog,ft=H.isMeshStandardMaterial?U.environment:null,ht=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Es,mt=(H.isMeshStandardMaterial?J:Y).get(H.envMap||ft),bt=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,wt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!W.morphAttributes.position,zt=!!W.morphAttributes.normal,te=!!W.morphAttributes.color,ve=Yi;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ve=x.toneMapping);let ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=ye!==void 0?ye.length:0,Tt=v.get(H),$t=S.state.lights;if(_t===!0&&(Yt===!0||T!==V)){let je=T===V&&H.id===G;gt.setState(H,T,je)}let qt=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==$t.state.version||Tt.outputColorSpace!==ht||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==mt||H.fog===!0&&Tt.fog!==ot||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==gt.numPlanes||Tt.numIntersection!==gt.numIntersection)||Tt.vertexAlphas!==bt||Tt.vertexTangents!==wt||Tt.morphTargets!==St||Tt.morphNormals!==zt||Tt.morphColors!==te||Tt.toneMapping!==ve||Tt.morphTargetsCount!==se)&&(qt=!0):(qt=!0,Tt.__version=H.version);let mi=Tt.currentProgram;qt===!0&&(mi=no(H,U,z));let Js=!1,gi=!1,Jr=!1,he=mi.getUniforms(),ni=Tt.uniforms;if(vt.useProgram(mi.program)&&(Js=!0,gi=!0,Jr=!0),H.id!==G&&(G=H.id,gi=!0),Js||V!==T){vt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),he.setValue(I,"projectionMatrix",T.projectionMatrix),he.setValue(I,"viewMatrix",T.matrixWorldInverse);let si=he.map.cameraPosition;si!==void 0&&si.setValue(I,Xt.setFromMatrixPosition(T.matrixWorld)),le.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,gi=!0,Jr=!0)}if(Tt.needsLights&&($t.state.directionalShadowMap.length>0&&he.setValue(I,"directionalShadowMap",$t.state.directionalShadowMap,O),$t.state.spotShadowMap.length>0&&he.setValue(I,"spotShadowMap",$t.state.spotShadowMap,O),$t.state.pointShadowMap.length>0&&he.setValue(I,"pointShadowMap",$t.state.pointShadowMap,O)),z.isSkinnedMesh){he.setOptional(I,z,"bindMatrix"),he.setOptional(I,z,"bindMatrixInverse");let je=z.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),he.setValue(I,"boneTexture",je.boneTexture,O))}z.isBatchedMesh&&(he.setOptional(I,z,"batchingTexture"),he.setValue(I,"batchingTexture",z._matricesTexture,O),he.setOptional(I,z,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",z._indirectTexture,O),he.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",z._colorsTexture,O));let Ri=W.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Bt.update(z,W,mi),(gi||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,he.setValue(I,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ni.envMap.value=mt,ni.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(ni.envMapIntensity.value=U.environmentIntensity),ni.dfgLUT!==void 0&&(ni.dfgLUT.value=Ly()),gi&&(he.setValue(I,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&Hm(ni,Jr),ot&&H.fog===!0&&Ct.refreshFogUniforms(ni,ot),Ct.refreshMaterialUniforms(ni,H,Lt,Rt,S.state.transmissionRenderTarget[T.id]),Nr.upload(I,Ad(Tt),ni,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Nr.upload(I,Ad(Tt),ni,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(I,"center",z.center),he.setValue(I,"modelViewMatrix",z.modelViewMatrix),he.setValue(I,"normalMatrix",z.normalMatrix),he.setValue(I,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let je=H.uniformsGroups;for(let si=0,$c=je.length;si<$c;si++){let us=je[si];$.update(us,mi),$.bind(us,mi)}}return mi}function Hm(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Gm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,W){let H=v.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=U,v.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let W=v.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let Wm=I.createFramebuffer();this.setRenderTarget=function(T,U=0,W=0){F=T,P=U,N=W;let H=null,z=!1,ot=!1;if(T){let ht=v.get(T);if(ht.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(I.FRAMEBUFFER,ht.__webglFramebuffer),k.copy(T.viewport),B.copy(T.scissor),q=T.scissorTest,vt.viewport(k),vt.scissor(B),vt.setScissorTest(q),G=-1;return}else if(ht.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(ht.__hasExternalTextures)O.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let wt=T.depthTexture;if(ht.__boundDepthTexture!==wt){if(wt!==null&&v.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}let mt=T.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(ot=!0);let bt=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(bt[U])?H=bt[U][W]:H=bt[U],z=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?H=v.get(T).__webglMultisampledFramebuffer:Array.isArray(bt)?H=bt[W]:H=bt,k.copy(T.viewport),B.copy(T.scissor),q=T.scissorTest}else k.copy(Z).multiplyScalar(Lt).floor(),B.copy(j).multiplyScalar(Lt).floor(),q=pt;if(W!==0&&(H=Wm),vt.bindFramebuffer(I.FRAMEBUFFER,H)&&vt.drawBuffers(T,H),vt.viewport(k),vt.scissor(B),vt.setScissorTest(q),z){let ht=v.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,W)}else if(ot){let ht=U;for(let mt=0;mt<T.textures.length;mt++){let bt=v.get(T.textures[mt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+mt,bt.__webglTexture,W,ht)}}else if(T!==null&&W!==0){let ht=v.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ht.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(T,U,W,H,z,ot,ft,ht=0){if(!(T&&T.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){vt.bindFramebuffer(I.FRAMEBUFFER,mt);try{let bt=T.textures[ht],wt=bt.format,St=bt.type;if(!le.textureFormatReadable(wt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(St)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&W>=0&&W<=T.height-z&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ht),I.readPixels(U,W,H,z,tt.convert(wt),tt.convert(St),ot))}finally{let bt=F!==null?v.get(F).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=function(T,U,W,H,z,ot,ft,ht=0){return so(this,null,function*(){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(U>=0&&U<=T.width-H&&W>=0&&W<=T.height-z){vt.bindFramebuffer(I.FRAMEBUFFER,mt);let bt=T.textures[ht],wt=bt.format,St=bt.type;if(!le.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,zt),I.bufferData(I.PIXEL_PACK_BUFFER,ot.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ht),I.readPixels(U,W,H,z,tt.convert(wt),tt.convert(St),0);let te=F!==null?v.get(F).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,te);let ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield qf(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ot),I.deleteBuffer(zt),I.deleteSync(ve),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(T,U=null,W=0){let H=Math.pow(2,-W),z=Math.floor(T.image.width*H),ot=Math.floor(T.image.height*H),ft=U!==null?U.x:0,ht=U!==null?U.y:0;O.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ft,ht,z,ot),vt.unbindTexture()};let Xm=I.createFramebuffer(),Ym=I.createFramebuffer();this.copyTextureToTexture=function(T,U,W=null,H=null,z=0,ot=null){ot===null&&(z!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=z,z=0):ot=0);let ft,ht,mt,bt,wt,St,zt,te,ve,ye=T.isCompressedTexture?T.mipmaps[ot]:T.image;if(W!==null)ft=W.max.x-W.min.x,ht=W.max.y-W.min.y,mt=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,wt=W.min.y,St=W.isBox3?W.min.z:0;else{let Ri=Math.pow(2,-z);ft=Math.floor(ye.width*Ri),ht=Math.floor(ye.height*Ri),T.isDataArrayTexture?mt=ye.depth:T.isData3DTexture?mt=Math.floor(ye.depth*Ri):mt=1,bt=0,wt=0,St=0}H!==null?(zt=H.x,te=H.y,ve=H.z):(zt=0,te=0,ve=0);let se=tt.convert(U.format),Tt=tt.convert(U.type),$t;U.isData3DTexture?(O.setTexture3D(U,0),$t=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(O.setTexture2DArray(U,0),$t=I.TEXTURE_2D_ARRAY):(O.setTexture2D(U,0),$t=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let qt=I.getParameter(I.UNPACK_ROW_LENGTH),mi=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Js=I.getParameter(I.UNPACK_SKIP_PIXELS),gi=I.getParameter(I.UNPACK_SKIP_ROWS),Jr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ye.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,St);let he=T.isDataArrayTexture||T.isData3DTexture,ni=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Ri=v.get(T),je=v.get(U),si=v.get(Ri.__renderTarget),$c=v.get(je.__renderTarget);vt.bindFramebuffer(I.READ_FRAMEBUFFER,si.__webglFramebuffer),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let us=0;us<mt;us++)he&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(T).__webglTexture,z,St+us),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ot,ve+us)),I.blitFramebuffer(bt,wt,ft,ht,zt,te,ft,ht,I.DEPTH_BUFFER_BIT,I.NEAREST);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||v.has(T)){let Ri=v.get(T),je=v.get(U);vt.bindFramebuffer(I.READ_FRAMEBUFFER,Xm),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ym);for(let si=0;si<mt;si++)he?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ri.__webglTexture,z,St+si):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ri.__webglTexture,z),ni?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,ot,ve+si):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,ot),z!==0?I.blitFramebuffer(bt,wt,ft,ht,zt,te,ft,ht,I.COLOR_BUFFER_BIT,I.NEAREST):ni?I.copyTexSubImage3D($t,ot,zt,te,ve+si,bt,wt,ft,ht):I.copyTexSubImage2D($t,ot,zt,te,bt,wt,ft,ht);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ni?T.isDataTexture||T.isData3DTexture?I.texSubImage3D($t,ot,zt,te,ve,ft,ht,mt,se,Tt,ye.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D($t,ot,zt,te,ve,ft,ht,mt,se,ye.data):I.texSubImage3D($t,ot,zt,te,ve,ft,ht,mt,se,Tt,ye):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ot,zt,te,ft,ht,se,Tt,ye.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ot,zt,te,ye.width,ye.height,se,ye.data):I.texSubImage2D(I.TEXTURE_2D,ot,zt,te,ft,ht,se,Tt,ye);I.pixelStorei(I.UNPACK_ROW_LENGTH,qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mi),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Js),I.pixelStorei(I.UNPACK_SKIP_ROWS,gi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jr),ot===0&&U.generateMipmaps&&I.generateMipmap($t),vt.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),vt.unbindTexture()},this.resetState=function(){P=0,N=0,F=null,vt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var Tp={type:"change"},Eu={type:"start"},wp={type:"end"},Ec=new Wn,Ep=new Di,Oy=Math.cos(70*Si.DEG2RAD),Pe=new D,ci=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tu=1e-6,wc=class extends Aa{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:Jn.ROTATE,TWO:Jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Li,this._lastTargetPosition=new D,this._quat=new Li().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rr,this._sphericalDelta=new Rr,this._scale=1,this._panOffset=new D,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new D,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ny.bind(this),this._onPointerDown=Fy.bind(this),this._onPointerUp=Uy.bind(this),this._onContextMenu=Wy.bind(this),this._onMouseWheel=ky.bind(this),this._onKeyDown=Vy.bind(this),this._onTouchStart=Hy.bind(this),this._onTouchMove=Gy.bind(this),this._onMouseDown=By.bind(this),this._onMouseMove=zy.bind(this),this._interceptControlDown=Xy.bind(this),this._interceptControlUp=Yy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tp),this.update(),this.state=ie.NONE}update(t=null){let e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=ci:i>Math.PI&&(i-=ci),n<-Math.PI?n+=ci:n>Math.PI&&(n-=ci),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Pe.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<Oy?this.object.lookAt(this.target):(Ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(Ep,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tu||this._lastTargetPosition.distanceToSquared(this.target)>Tu?(this.dispatchEvent(Tp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ci/60*this.autoRotateSpeed*t:ci/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Pe.copy(n).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/e.clientHeight),this._rotateUp(ci*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/e.clientHeight),this._rotateUp(ci*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Fy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ny(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Uy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wp),this.state=ie.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function By(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ie.DOLLY;break;case Kn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}break;case Kn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Eu)}function zy(s){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ky(s){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(s.preventDefault(),this.dispatchEvent(Eu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(wp))}function Vy(s){this.enabled!==!1&&this._handleKeyDown(s)}function Hy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Jn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ie.TOUCH_ROTATE;break;case Jn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ie.TOUCH_DOLLY_PAN;break;case Jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Eu)}function Gy(s){switch(this._trackPointer(s),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ie.NONE}}function Wy(s){this.enabled!==!1&&s.preventDefault()}function Xy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qy=500,Zy=50,Ky=57,Jy=2500,jy=8e3,wu={high:{pixelRatioCap:1.5,ambientParticlesVisible:!0,starfieldOpacity:.85,groundAnimationScale:1},medium:{pixelRatioCap:1.25,ambientParticlesVisible:!0,starfieldOpacity:.72,groundAnimationScale:.85},low:{pixelRatioCap:1,ambientParticlesVisible:!1,starfieldOpacity:.6,groundAnimationScale:.65}},Ki=class s{scene;camera;renderer;controls;circleTexture;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;joystickActive=!1;canvas;animationFrameId=null;lastFrameTime=0;isPaused=!1;groundWaterTexture=null;groundWaterNormalMap=null;groundMaterial=null;arenaBoundaryGroup=null;starField=null;resizeTimeout=null;cameraTarget=new D(0,1,0);frameListeners=new Set;performanceListeners=new Set;particleAnimations=new Map;visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);animateBound=t=>this.animate(t);nextParticleAnimationId=0;currentQualityLevel="high";currentPixelRatioCap=wu.high.pixelRatioCap;performanceSampleElapsedMs=0;performanceSampleFrameTimeTotalMs=0;performanceSampleFrames=0;smoothedFps=60;lastPublishedFrameTimeMs=1e3/60;lowPerformanceMs=0;stablePerformanceMs=0;groundAnimationScale=wu.high.groundAnimationScale;mainLight=null;isPortraitRotated=!1;disposeMediaQuery=null;disposePointerInterceptor=null;transformedPointerEvents=new WeakSet;characterDistanceScale=1;init(t){this.canvas=t,this.createCircleTexture(),this.initPortraitDetection(),this.initScene(),this.installPointerInterceptor(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.disposeMediaQuery?.(),this.disposePointerInterceptor?.(),this.particleAnimations.clear(),this.controls?.dispose(),this.disposeObject(this.arenaBoundaryGroup),this.arenaBoundaryGroup=null,this.starField?.geometry.dispose(),this.starField?.material?.dispose(),this.starField=null,this.groundMaterial?.dispose(),this.groundMaterial=null,this.groundWaterTexture?.dispose(),this.groundWaterTexture=null,this.groundWaterNormalMap?.dispose(),this.groundWaterNormalMap=null,this.frameListeners.clear(),this.performanceListeners.clear(),this.scene?.clear(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.circleTexture?.dispose()}compileScene(){this.renderer.compile(this.scene,this.camera);let t=new Qe(1,1);this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),t.dispose()}setCameraDistanceScale(t){if(this.characterDistanceScale=Math.max(t,1),this.controls&&this.canvas){let e=this.getViewportSettings(this.canvas.clientWidth,this.canvas.clientHeight);this.controls.minDistance=e.minDistance,this.controls.maxDistance=e.maxDistance,this.controls.update()}}setCameraFocus(t){this.cameraTarget.set(t.x,t.y,t.z),this.controls&&this.controls.target.copy(this.cameraTarget)}getFacingRotationY(t,e){return Math.atan2(e.x-t.x,e.z-t.z)}addFrameListener(t){return this.frameListeners.add(t),()=>{this.frameListeners.delete(t)}}addPerformanceListener(t){return this.performanceListeners.add(t),t(this.getPerformanceStats()),()=>{this.performanceListeners.delete(t)}}getQualityLevel(){return this.currentQualityLevel}registerParticleAnimation(t){t.attribute.setUsage(tu);let e=this.nextParticleAnimationId++;return this.particleAnimations.set(e,t),e}removeParticleAnimation(t){this.particleAnimations.delete(t)}createCircleTexture(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64),this.circleTexture=new va(t)}initPortraitDetection(){let t=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=t.matches;let e=i=>{this.isPortraitRotated=i.matches};t.addEventListener("change",e),this.disposeMediaQuery=()=>t.removeEventListener("change",e)}installPointerInterceptor(){let t=this.canvas,e=n=>{if(!this.isPortraitRotated||this.transformedPointerEvents.has(n))return;n.stopImmediatePropagation();let r=new PointerEvent(n.type,{bubbles:n.bubbles,cancelable:n.cancelable,composed:n.composed,clientX:n.clientY,clientY:window.innerWidth-n.clientX,screenX:n.screenY,screenY:window.innerWidth-n.screenX,pointerId:n.pointerId,pointerType:n.pointerType,isPrimary:n.isPrimary,button:n.button,buttons:n.buttons,width:n.width,height:n.height,pressure:n.pressure});this.transformedPointerEvents.add(r),t.dispatchEvent(r)},i=new AbortController;for(let n of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(n,e,{capture:!0,signal:i.signal});this.disposePointerInterceptor=()=>i.abort()}initScene(){let t=this.canvas,e=t.clientWidth,i=t.clientHeight,n=this.getViewportSettings(e,i);this.scene=new xa,this.scene.background=new Dt(657931),this.baseCameraFov=n.fov,this.camera=new Be(this.baseCameraFov,e/i,.1,1e3),this.camera.position.set(0,n.cameraY,n.cameraZ),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new bc({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(e,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=Ra,this.renderer.toneMappingExposure=1.2,this.controls=new wc(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=n.minDistance,this.controls.maxDistance=n.maxDistance,this.controls.minPolarAngle=n.minPolarAngle,this.controls.maxPolarAngle=n.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update();let r=new wa(3470813,1.2);this.scene.add(r);let a=new Cr(16777215,6);a.position.set(5,10,5),this.scene.add(a),this.mainLight=a;let o=new Cr(4491519,2.4);o.position.set(-5,8,-3),this.scene.add(o);let l=new Ea(2254591,6,100);l.position.set(-8,3,0),this.scene.add(l);let u=1.5*88,d=new Is().load("assets/texture1.png");d.wrapS=Ts,d.wrapT=Ts;let f=new Rs({map:d,color:11141120,roughness:.06,metalness:.05,emissive:736064,emissiveIntensity:.25});this.groundMaterial=f;let _=new Cs(u,u),g=new Qt(_,f);g.rotation.x=-Math.PI/2,g.position.set(0,0,0),this.scene.add(g),this.createArenaBoundaryObstacles(),this.applyQualityLevel(this.currentQualityLevel),this.compileScene()}createArenaBoundaryObstacles(){let t=new ze;this.arenaBoundaryGroup=t,this.scene.add(t)}animate(t=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(this.animateBound);let e=this.lastFrameTime===0?1e3/60:t-this.lastFrameTime;this.lastFrameTime=t;let i=Math.min(e/1e3,1/20),n=i*30;this.groundWaterNormalMap&&(this.groundWaterNormalMap.offset.x-=i*.0174*this.groundAnimationScale,this.groundWaterNormalMap.offset.y+=i*.0096*this.groundAnimationScale),this.particleAnimations.forEach(r=>{let a=r.attribute.array;for(let o=0;o<r.particleCount;o++)r.angles[o]+=r.angularVelocities[o]*n,a[o*3]=Math.cos(r.angles[o])*r.radii[o],a[o*3+2]=Math.sin(r.angles[o])*r.radii[o];r.attribute.needsUpdate=!0}),this.starField&&(this.starField.rotation.y+=i*.0024),this.frameListeners.forEach(r=>{r(i,t)}),this.controls.enabled=!this.timeSlowActive&&!this.joystickActive,this.controls.target.copy(this.cameraTarget),this.controls.update(i),this.renderer.render(this.scene,this.camera),this.updatePerformanceStats(e)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this.renderer)return;let t=this.canvas.clientWidth,e=this.canvas.clientHeight,i=this.getViewportSettings(t,e);this.camera.aspect=t/e,this.camera.fov=i.fov,this.camera.updateProjectionMatrix(),this.camera.position.set(0,i.cameraY,i.cameraZ),this.cameraOriginalPosition=new D(0,i.cameraY,i.cameraZ),this.baseCameraFov=i.fov,this.controls.minDistance=i.minDistance,this.controls.maxDistance=i.maxDistance,this.controls.minPolarAngle=i.minPolarAngle,this.controls.maxPolarAngle=i.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.publishPerformanceStats()}applyQualityLevel(t){let e=wu[t];this.currentQualityLevel=t,this.currentPixelRatioCap=e.pixelRatioCap,this.groundAnimationScale=e.groundAnimationScale,this.renderer&&this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.starField&&(this.starField.material.opacity=e.starfieldOpacity),this.lowPerformanceMs=0,this.stablePerformanceMs=0,this.publishPerformanceStats()}updatePerformanceStats(t){let e=t>0?1e3/t:60;if(this.smoothedFps=Si.lerp(this.smoothedFps,e,.12),this.performanceSampleElapsedMs+=t,this.performanceSampleFrameTimeTotalMs+=t,this.performanceSampleFrames+=1,this.smoothedFps<Zy?(this.lowPerformanceMs+=t,this.stablePerformanceMs=0):this.smoothedFps>Ky?(this.stablePerformanceMs+=t,this.lowPerformanceMs=0):(this.lowPerformanceMs=0,this.stablePerformanceMs=0),this.lowPerformanceMs>=Jy){let i=this.getAdjacentQualityLevel("down");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}else if(this.stablePerformanceMs>=jy){let i=this.getAdjacentQualityLevel("up");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}this.performanceSampleElapsedMs>=qy&&(this.lastPublishedFrameTimeMs=this.performanceSampleFrameTimeTotalMs/Math.max(this.performanceSampleFrames,1),this.performanceSampleElapsedMs=0,this.performanceSampleFrameTimeTotalMs=0,this.performanceSampleFrames=0,this.publishPerformanceStats())}getAdjacentQualityLevel(t){let e=["low","medium","high"],i=e.indexOf(this.currentQualityLevel);return t==="up"?e[Math.min(i+1,e.length-1)]:e[Math.max(i-1,0)]}publishPerformanceStats(){let t=this.getPerformanceStats();this.performanceListeners.forEach(e=>{e(t)})}getPerformanceStats(){return{fps:Number((1e3/this.lastPublishedFrameTimeMs).toFixed(1)),frameTimeMs:Number(this.lastPublishedFrameTimeMs.toFixed(2)),qualityLevel:this.currentQualityLevel,pixelRatio:Number(this.getEffectivePixelRatio().toFixed(2))}}getEffectivePixelRatio(){return Math.min(window.devicePixelRatio,this.currentPixelRatioCap)}getViewportSettings(t,e){let i=t/e,n=t<520,r=i<.9,a=n||r||e<520,o=60,l=10,c=4,h=3,u=10,d=Math.PI/4.8,f=Math.PI/2.45;return a&&(l=12,h=4,u=12,f=Math.PI/2.1),h*=this.characterDistanceScale,u*=this.characterDistanceScale,{fov:o,cameraZ:l,cameraY:c,minDistance:h,maxDistance:u,minPolarAngle:d,maxPolarAngle:f}}disposeObject(t){t&&t.traverse(e=>{if(e instanceof Qt)if(e.geometry.dispose(),Array.isArray(e.material))e.material.forEach(i=>{for(let n of Object.values(i))n instanceof li&&n.dispose();i.dispose()});else{for(let i of Object.values(e.material))i instanceof li&&i.dispose();e.material.dispose()}})}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Pi({token:s,factory:s.\u0275fac})};var $y=/^[og]\s*(.+)?/,Qy=/^mtllib /,tM=/^usemtl /,eM=/^usemap /,Ap=/\s+/,Cp=new D,Au=new D,Rp=new D,Pp=new D,Fi=new D,Ac=new Dt;function iM(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){let i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){let i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){let n=this.vertices,r=this.object.geometry.vertices;r.push(n[t+0],n[t+1],n[t+2]),r.push(n[e+0],n[e+1],n[e+2]),r.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){let n=this.normals,r=this.object.geometry.normals;r.push(n[t+0],n[t+1],n[t+2]),r.push(n[e+0],n[e+1],n[e+2]),r.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(t,e,i){let n=this.vertices,r=this.object.geometry.normals;Cp.fromArray(n,t),Au.fromArray(n,e),Rp.fromArray(n,i),Fi.subVectors(Rp,Au),Pp.subVectors(Cp,Au),Fi.cross(Pp),Fi.normalize(),r.push(Fi.x,Fi.y,Fi.z),r.push(Fi.x,Fi.y,Fi.z),r.push(Fi.x,Fi.y,Fi.z)},addColor:function(t,e,i){let n=this.colors,r=this.object.geometry.colors;n[t]!==void 0&&r.push(n[t+0],n[t+1],n[t+2]),n[e]!==void 0&&r.push(n[e+0],n[e+1],n[e+2]),n[i]!==void 0&&r.push(n[i+0],n[i+1],n[i+2])},addUV:function(t,e,i){let n=this.uvs,r=this.object.geometry.uvs;r.push(n[t+0],n[t+1]),r.push(n[e+0],n[e+1]),r.push(n[i+0],n[i+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,n,r,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let _=this.normals.length;u=this.parseNormalIndex(o,_),d=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let _=this.uvs.length;u=this.parseUVIndex(n,_),d=this.parseUVIndex(r,_),f=this.parseUVIndex(a,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let i=0,n=t.length;i<n;i++){let r=this.parseVertexIndex(t[i],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],i));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],n))}};return s.startObject("",!1),s}var Cc=class extends Or{constructor(t){super(t),this.materials=null}load(t,e,i,n){let r=this,a=new Ta(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){n?n(l):console.error(l),r.manager.itemError(t)}},i,n)}setMaterials(t){return this.materials=t,this}parse(t){let e=new iM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let i=t.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(Ap);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Ac.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Ue),e.colors.push(Ac.r,Ac.g,Ac.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(Ap),f=[];for(let g=0,m=d.length;g<m;g++){let p=d[g];if(p.length>0){let y=p.split("/");f.push(y)}}let _=f[0];for(let g=1,m=f.length-1;g<m;g++){let p=f[g],y=f[g+1];e.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let _=0,g=u.length;_<g;_++){let m=u[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((n=$y.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);e.startObject(u)}else if(tM.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(Qy.test(c))e.materialLibraries.push(c.substring(7).trim());else if(eM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;let u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();let r=new ze;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){let c=e.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",_=!1;if(h.vertices.length===0)continue;let g=new Ve;g.setAttribute("position",new re(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new re(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new re(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new re(h.uvs,2));let m=[];for(let y=0,b=u.length;y<b;y++){let M=u[y],S=M.name+"_"+M.smooth+"_"+_,w=e.materials[S];if(this.materials!==null){if(w=this.materials.create(M.name),d&&w&&!(w instanceof Xn)){let A=new Xn;ai.prototype.copy.call(A,w),A.color.copy(w.color),w=A}else if(f&&w&&!(w instanceof wn)){let A=new wn({size:10,sizeAttenuation:!1});ai.prototype.copy.call(A,w),A.color.copy(w.color),A.map=w.map,w=A}}w===void 0&&(d?w=new Xn:f?w=new wn({size:1,sizeAttenuation:!1}):w=new ba,w.name=M.name,w.flatShading=!M.smooth,w.vertexColors=_,e.materials[S]=w),m.push(w)}let p;if(m.length>1){for(let y=0,b=u.length;y<b;y++){let M=u[y];g.addGroup(M.groupStart,M.groupCount,y)}d?p=new Er(g,m):f?p=new ws(g,m):p=new Qt(g,m)}else d?p=new Er(g,m[0]):f?p=new ws(g,m[0]):p=new Qt(g,m[0]);p.name=c.name,r.add(p)}else if(e.vertices.length>0){let o=new wn({size:1,sizeAttenuation:!1}),l=new Ve;l.setAttribute("position",new re(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new re(e.colors,3)),o.vertexColors=!0);let c=new ws(l,o);r.add(c)}return r}};var nM="assets/models/hominid_skull.obj3e95cd92-63a9-48ec-a41f-461a344caf62.obj",sM="assets/texture.jpg",rM=1.6,aM=new D(0,.2,.4),oM=new Xi(Math.PI,-Math.PI,-Math.PI),Br=class s{skullTemplatePromise=null;skullTexture=null;attachSkullModel(t,e){return this.loadSkullTexture().then(i=>(e.map=i,e.needsUpdate=!0,this.loadSkullTemplate())).then(i=>{let n=this.createSkullAnchor(i,e);if(t.userData.disposed){this.disposeSkullAnchor(n,e);return}t.add(n)}).catch(()=>{if(t.userData.disposed){e.dispose();return}})}loadSkullTexture(){return this.skullTexture?Promise.resolve(this.skullTexture):new Is().loadAsync(sM).then(e=>(e.colorSpace=Ue,this.skullTexture=e,e))}loadSkullTemplate(){if(!this.skullTemplatePromise){let t=new Cc;this.skullTemplatePromise=t.loadAsync(nM).then(e=>{let i=this.normalizeSkullTemplate(e),r=new yi().setFromObject(i).getSize(new D),a=Math.max(r.x,r.y,r.z);return a>0&&i.scale.setScalar(rM/a),i})}return this.skullTemplatePromise}normalizeSkullTemplate(t){t.updateMatrixWorld(!0);let e=new ze,i=[];t.traverse(a=>{if(!(a instanceof Qt))return;let o=a.geometry.clone();o.applyMatrix4(a.matrixWorld);let l=new Qt(o);e.add(l),i.push(l)});let r=new yi().setFromObject(e).getCenter(new D);return i.forEach(a=>{a.geometry.translate(-r.x,-r.y,-r.z)}),e}createSkullAnchor(t,e){let i=new ze;i.position.copy(aM),i.rotation.copy(oM);let n=t.clone(!0);return n.traverse(r=>{r instanceof Qt&&(r.geometry=r.geometry.clone(),r.material=e,r.castShadow=!0,r.receiveShadow=!0)}),i.add(n),i}disposeSkullAnchor(t,e){t.traverse(i=>{i instanceof Qt&&i.geometry.dispose()}),e.dispose()}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Pi({token:s,factory:s.\u0275fac})};var hn=.8,Rc=1.5,Bs=class s{battleCharacterSkullService=fe(Br);persistentShields=new Map;createCharacterMesh(t,e){let i=new ze,r=new Rs({color:15658734,roughness:.9,metalness:.1}).clone(),a=this.battleCharacterSkullService.attachSkullModel(i,r),o=r,l=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],c=.8,h=.55,u=.7,d=(p,y,b,...M)=>{M.forEach(S=>{let w=new Qt(b,o),A=new ri;A.position.copy(y.position),A.rotation.copy(y.rotation),w.position.set(0,S,0),A.add(w),p.add(A)})},f=new As(.12,.08,c,5),_=new As(.1,.06,h,5),g=new As(.07,.03,u,5),m=new Ma(.07,5,4);for(let p=0;p<2;p++){let y=p===0?-1:1;for(let b=0;b<4;b++){let M=new ze,S=l[b]*(p===0?1:-1),w=(Math.PI/2.8+b*.05)*y,A=w*1.2,R=w*.75,x=Math.PI/5.3*y,E=new D(.2*y,-.1,0),P=new Qt(f,o);P.position.copy(E),P.rotation.z=A,M.add(P);let N=this.getConnectedSegmentPosition(E,A,c,-1,R,h,1),F=new Qt(_,o);F.position.copy(N),F.rotation.z=R,M.add(F),d(M,F,m,h/2,-h/2);let G=this.getConnectedSegmentPosition(N,R,h,-1,x,u,1),V=new Qt(g,o);V.position.copy(G),V.rotation.z=x,M.add(V);let B=[.5,.25,0,-.2][b];M.rotation.y=S,M.position.set(.4*y,.3,B),i.add(M);let q=S,nt=-.02+(Math.random()-.5)*.04,et=Math.PI/120*y+(Math.random()-.5)*.02;M.rotation.set(nt,q,et),i.userData.legs||(i.userData.legs=[]),i.userData.legs.push({group:M,baseRotation:{x:nt,y:q,z:et},side:y,index:b})}}return i.position.set(e.x,e.y+hn,e.z),{mesh:i,ready:a}}getConnectedSegmentPosition(t,e,i,n,r,a,o){return t.clone().add(this.getSegmentEndpointOffset(i,e,n)).sub(this.getSegmentEndpointOffset(a,r,o))}getSegmentEndpointOffset(t,e,i){return new D(0,t/2*i,0).applyAxisAngle(new D(0,0,1),e)}doShieldsOverlap(t,e){let i=t.position.x-e.position.x,n=t.position.z-e.position.z,r=i*i+n*n,a=Rc*ee(t)+Rc*ee(e);return r<a*a}disposeAllShields(){this.persistentShields.forEach((t,e)=>this.disposePersistentShield(e)),this.persistentShields.clear()}disposePersistentShield(t){let e=this.persistentShields.get(t);if(!e)return;let{shieldGroup:i,materials:n,geometries:r,idleTweens:a}=e;a.forEach(o=>o.kill()),t.remove(i),r.forEach(o=>o.dispose()),n.forEach(o=>o.dispose()),this.persistentShields.delete(t)}disposeCharacterMesh(t,e){t&&(t.userData.disposed=!0,e.remove(t),t.traverse(i=>{i instanceof Qt&&(i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(n=>{n.map?.dispose(),n.emissiveMap?.dispose(),n.roughnessMap?.dispose(),n.metalnessMap?.dispose(),n.normalMap?.dispose(),n.dispose()}):(i.material.map?.dispose(),i.material.emissiveMap?.dispose(),i.material.roughnessMap?.dispose(),i.material.metalnessMap?.dispose(),i.material.normalMap?.dispose(),i.material.dispose()))}))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Pi({token:s,factory:s.\u0275fac})};function Cn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function zp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},Xu,Ge,de,Ui=1e8,oe=1/Ui,Fu=Math.PI*2,lM=Fu/4,cM=0,kp=Math.sqrt,hM=Math.cos,uM=Math.sin,Ie=function(t){return typeof t=="string"},be=function(t){return typeof t=="function"},Pn=function(t){return typeof t=="number"},zc=function(t){return typeof t>"u"},fn=function(t){return typeof t=="object"},di=function(t){return t!==!1},Yu=function(){return typeof window<"u"},Pc=function(t){return be(t)||Ie(t)},Vp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ke=Array.isArray,dM=/random\([^)]+\)/g,fM=/,\s*/g,Ip=/(?:-?\.?\d|\.)+/gi,qu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,pM=/[^,'"\[\]\s]+/gi,mM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ge,un,Nu,Ku,Ei={},Oc={},Hp,Gp=function(t){return(Oc=Vr(t,Ei))&&Je},kc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Xa=function(t,e){return!e&&console.warn(t)},Wp=function(t,e){return t&&(Ei[t]=e)&&Oc&&(Oc[t]=e)||Ei},Ya=function(){return 0},gM={suppressEvents:!0,isStart:!0,kill:!1},Ic={suppressEvents:!0,kill:!1},_M={suppressEvents:!0},Ju={},is=[],Uu={},Xp,hi={},Ru={},Dp=30,Dc=[],ju="",$u=function(t){var e=t[0],i,n;if(fn(e)||be(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Dc.length;n--&&!Dc[n].targetTest(e););i=Dc[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new id(t[n],i)))||t.splice(n,1);return t},ns=function(t){return t._gsap||$u(Bi(t))[0]._gsap},Qu=function(t,e,i){return(i=t[e])&&be(i)?t[e]():zc(i)&&t.getAttribute&&t.getAttribute(e)||i},ei=function(t,e){return(t=t.split(",")).forEach(e)||t},Se=function(t){return Math.round(t*1e5)/1e5||0},me=function(t){return Math.round(t*1e7)/1e7||0},Gs=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},xM=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Fc=function(){var t=is.length,e=is.slice(0),i,n;for(Uu={},is.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},td=function(t){return!!(t._initted||t._startAt||t.add)},Yp=function(t,e,i,n){is.length&&!Ge&&Fc(),t.render(e,i,n||!!(Ge&&e<0&&td(t))),is.length&&!Ge&&Fc()},qp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(pM).length<2?e:Ie(t)?t.trim():t},Zp=function(t){return t},wi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},vM=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Vr=function(t,e){for(var i in e)t[i]=e[i];return t},Lp=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=fn(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Nc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Ha=function(t){var e=t.parent||ge,i=t.keyframes?vM(Ke(t.keyframes)):wi;if(di(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},yM=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Kp=function(t,e,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t[n],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},Vc=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e._prev,a=e._next;r?r._next=a:t[i]===e&&(t[i]=a),a?a._prev=r:t[n]===e&&(t[n]=r),e._next=e._prev=e.parent=null},ss=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},MM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Bu=function(t,e,i,n){return t._startAt&&(Ge?t._startAt.revert(Ic):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},bM=function s(t){return!t||t._ts&&s(t.parent)},Op=function(t){return t._repeat?Hr(t._tTime,t=t.duration()+t._rDelay)*t:0},Hr=function(t,e){var i=Math.floor(t=me(t/e));return t&&i===t?i-1:i},Uc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hc=function(t){return t._end=me(t._start+(t._tDur/Math.abs(t._ts||t._rts||oe)||0))},Gc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=me(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Hc(t),i._dirty||zs(i,t)),t},Jp=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Uc(t.rawTime(),e),(!e._dur||Ka(0,e.totalDuration(),i)-e._tTime>oe)&&e.render(i,!0)),zs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-oe}},dn=function(t,e,i,n){return e.parent&&ss(e),e._start=me((Pn(i)?i:i||t!==ge?Ni(t,i,e):t._time)+e._delay),e._end=me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Kp(t,e,"_first","_last",t._sort?"_start":0),zu(e)||(t._recent=e),n||Jp(t,e),t._ts<0&&Gc(t,t._tTime),t},jp=function(t,e){return(Ei.ScrollTrigger||kc("scrollTrigger",e))&&Ei.ScrollTrigger.create(e,t)},$p=function(t,e,i,n,r){if(rd(t,e,r),!t._initted)return 1;if(!i&&t._pt&&!Ge&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xp!==ui.frame)return is.push(t),t._lazy=[r,n],1},SM=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},zu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},TM=function(t,e,i,n){var r=t.ratio,a=e<0||!e&&(!t._start&&SM(t)&&!(!t._initted&&zu(t))||(t._ts<0||t._dp._ts<0)&&!zu(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Ka(0,t._tDur,e),h=Hr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Hr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Ge||n||t._zTime===oe||!e&&t._zTime){if(!t._initted&&$p(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?oe:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Bu(t,e,i,!0),t._onUpdate&&!i&&Ti(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ss(t,1),!i&&!Ge&&(Ti(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},EM=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},Gr=function(t,e,i,n){var r=t._repeat,a=me(e)||0,o=t._tTime/t._tDur;return o&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:me(a*(r+1)+t._rDelay*r):a,o>0&&!n&&Gc(t,t._tTime=t._tDur*o),t.parent&&Hc(t),i||zs(t.parent,t),t},Fp=function(t){return t instanceof He?zs(t):Gr(t,t._dur)},wM={_start:0,endTime:Ya,totalDuration:Ya},Ni=function s(t,e,i){var n=t.labels,r=t._recent||wM,a=t.duration()>=Ui?r.endTime(!1):t._dur,o,l,c;return Ie(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(e in n||(n[e]=a),n[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(Ke(i)?i[0]:i).totalDuration()),o>1?s(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},Ga=function(t,e,i){var n=Pn(e[1]),r=(n?2:1)+(t<2?0:1),a=e[r],o,l;if(n&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=di(l.vars.inherit)&&l.parent;a.immediateRender=di(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Te(e[0],a,e[r+1])},rs=function(t,e){return t||t===0?e(t):e},Ka=function(t,e,i){return i<t?t:i>e?e:i},We=function(t,e){return!Ie(t)||!(e=mM.exec(t))?"":e[1]},AM=function(t,e,i){return rs(i,function(n){return Ka(t,e,n)})},ku=[].slice,Qp=function(t,e){return t&&fn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&fn(t[0]))&&!t.nodeType&&t!==un},CM=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var r;return Ie(n)&&!e||Qp(n,1)?(r=i).push.apply(r,Bi(n)):i.push(n)})||i},Bi=function(t,e,i){return de&&!e&&de.selector?de.selector(t):Ie(t)&&!i&&(Nu||!Wr())?ku.call((e||Ku).querySelectorAll(t),0):Ke(t)?CM(t,i):Qp(t)?ku.call(t,0):t?[t]:[]},Vu=function(t){return t=Bi(t)[0]||Xa("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Bi(e,i.querySelectorAll?i:i===t?Xa("Invalid scope")||Ku.createElement("div"):t)}},tm=function(t){return t.sort(function(){return .5-Math.random()})},em=function(t){if(be(t))return t;var e=fn(t)?t:{each:t},i=ks(e.ease),n=e.from||0,r=parseFloat(e.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=e.axis,h=n,u=n;return Ie(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,y,b,M,S,w,A,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Ui])[1],!x){for(A=-Ui;A<(A=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*h-.5:n%x,y=x===Ui?0:l?g*u/x-.5:n/x|0,A=0,R=Ui,w=0;w<g;w++)b=w%x-p,M=y-(w/x|0),m[w]=S=c?Math.abs(c==="y"?M:b):kp(b*b+M*M),S>A&&(A=S),S<R&&(R=S);n==="random"&&tm(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(n==="edges"?-1:1),m.b=g<0?r-g:r,m.u=We(e.amount||e.each)||0,i=i&&g<0?hm(i):i}return g=(m[d]-m.min)/m.max||0,me(m.b+(i?i(g):g)*m.v)+m.u}},Hu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=me(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Pn(i)?0:We(i))}},im=function(t,e){var i=Ke(t),n,r;return!i&&fn(t)&&(n=i=t.radius||Ui,t.values?(t=Bi(t.values),(r=!Pn(t[0]))&&(n*=n)):t=Hu(t.increment)),rs(e,i?be(t)?function(a){return r=t(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ui,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?t[h]:a,r||h===a||Pn(a)?h:h+We(a)}:Hu(t))},nm=function(t,e,i,n){return rs(Ke(t)?!e:i===!0?!!(i=0):!n,function(){return Ke(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},RM=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(r,a){return a(r)},n)}},PM=function(t,e){return function(i){return t(parseFloat(i))+(e||We(i))}},IM=function(t,e,i){return rm(t,e,0,1,i)},sm=function(t,e,i){return rs(i,function(n){return t[~~e(n)]})},DM=function s(t,e,i){var n=e-t;return Ke(t)?sm(t,s(0,t.length),e):rs(i,function(r){return(n+(r-t)%n)%n+t})},LM=function s(t,e,i){var n=e-t,r=n*2;return Ke(t)?sm(t,s(0,t.length-1),e):rs(i,function(a){return a=(r+(a-t)%r)%r||0,t+(a>n?r-a:a)})},Xr=function(t){return t.replace(dM,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(fM);return nm(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},rm=function(t,e,i,n,r){var a=e-t,o=n-i;return rs(r,function(l){return i+((l-t)/a*o||0)})},OM=function s(t,e,i,n){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Ie(t),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(Ke(t)&&!Ke(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=e}else n||(t=Vr(Ke(t)?[]:{},t));if(!h){for(l in e)nd.call(o,t,l,"get",e[l]);r=function(_){return ld(_,o)||(a?t.p:t)}}}return rs(i,r)},Np=function(t,e,i){var n=t.labels,r=Ui,a,o,l;for(a in n)o=n[a]-e,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Ti=function(t,e,i){var n=t.vars,r=n[e],a=de,o=t._ctx,l,c,h;if(r)return l=n[e+"Params"],c=n.callbackScope||t,i&&is.length&&Fc(),o&&(de=o),h=l?r.apply(c,l):r.call(c),de=a,h},ka=function(t){return ss(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ge),t.progress()<1&&Ti(t,"onInterrupt"),t},zr,am=[],om=function(t){if(t)if(t=!t.name&&t.default||t,Yu()||t.headless){var e=t.name,i=be(t),n=e&&!i&&t.init?function(){this._props=[]}:t,r={init:Ya,render:ld,add:nd,kill:JM,modifier:KM,rawVars:0},a={targetTest:0,get:0,getSetter:Wc,aliases:{},register:0};if(Wr(),t!==n){if(hi[e])return;wi(n,wi(Nc(t,r),a)),Vr(n.prototype,Vr(r,Nc(t,a))),hi[n.prop=e]=n,t.targetTest&&(Dc.push(n),Ju[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wp(e,n),t.register&&t.register(Je,n,ii)}else am.push(t)},ae=255,Va={aqua:[0,ae,ae],lime:[0,ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ae],navy:[0,0,128],white:[ae,ae,ae],olive:[128,128,0],yellow:[ae,ae,0],orange:[ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ae,0,0],pink:[ae,192,203],cyan:[0,ae,ae],transparent:[ae,ae,ae,0]},Pu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ae+.5|0},lm=function(t,e,i){var n=t?Pn(t)?[t>>16,t>>8&ae,t&ae]:0:Va.black,r,a,o,l,c,h,u,d,f,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Va[t])n=Va[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&ae,n&ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&ae,t&ae]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(Ip),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,n.length>3&&(n[3]*=1),n[0]=Pu(l+1/3,r,a),n[1]=Pu(l,r,a),n[2]=Pu(l-1/3,r,a);else if(~t.indexOf("="))return n=t.match(qu),i&&n.length<4&&(n[3]=1),n}else n=t.match(Ip)||Va.transparent;n=n.map(Number)}return e&&!_&&(r=n[0]/ae,a=n[1]/ae,o=n[2]/ae,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},cm=function(t){var e=[],i=[],n=-1;return t.split(Rn).forEach(function(r){var a=r.match(Hs)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},Up=function(t,e,i){var n="",r=(t+n).match(Rn),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=lm(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=cm(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Rn,"1").split(Hs),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=t.split(Rn),u=c.length-1;o<u;o++)n+=c[o]+r[o];return n+c[u]},Rn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Va)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),FM=/hsl[a]?\(/,ed=function(t){var e=t.join(" "),i;if(Rn.lastIndex=0,Rn.test(e))return i=FM.test(e),t[1]=Up(t[1],i),t[0]=Up(t[0],i,cm(t[1])),!0},qa,ui=function(){var s=Date.now,t=500,e=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,h,u,d,f,_=function g(m){var p=s()-n,y=m===!0,b,M,S,w;if((p>t||p<0)&&(i+=p-e),n+=p,S=n-i,b=S-a,(b>0||y)&&(w=++u.frame,d=S-u.time*1e3,u.time=S=S/1e3,a+=b+(b>=r?4:r-b),M=1),y||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](S,d,w,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hp&&(!Nu&&Yu()&&(un=Nu=window,Ku=un.document||{},Ei.gsap=Je,(un.gsapVersions||(un.gsapVersions=[])).push(Je.version),Gp(Oc||un.GreenSockGlobals||!un.gsap&&un||{}),am.forEach(om)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},qa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),qa=0,c=Ya},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,y){var b=p?function(M,S,w,A){m(M,S,w,A),u.remove(b)}:m;return u.remove(m),o[y?"unshift":"push"](b),Wr(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Wr=function(){return!qa&&ui.wake()},Vt={},NM=/^[\d.\-M][\d.\-,\s]/,UM=/["']/g,BM=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[n]=isNaN(c)?c.replace(UM,"").trim():+c,n=l.substr(o+1).trim();return e},zM=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},kM=function(t){var e=(t+"").split("("),i=Vt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[BM(e[1])]:zM(t).split(",").map(qp)):Vt._CE&&NM.test(t)?Vt._CE("",t):i},hm=function(t){return function(e){return 1-t(1-e)}},um=function s(t,e){for(var i=t._first,n;i;)i instanceof He?s(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?s(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},ks=function(t,e){return t&&(be(t)?t:Vt[t]||kM(t))||e},Ws=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:i,easeInOut:n},a;return ei(t,function(o){Vt[o]=Ei[o]=r,Vt[a=o.toLowerCase()]=i;for(var l in r)Vt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Vt[o+"."+l]=r[l]}),r},dm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Iu=function s(t,e,i){var n=e>=1?e:1,r=(i||(t?.3:.45))/(e<1?e:1),a=r/Fu*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*uM((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:dm(o);return r=Fu/r,l.config=function(c,h){return s(t,c,h)},l},Du=function s(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:dm(i);return n.config=function(r){return s(t,r)},n};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ws(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Vt.Linear.easeNone=Vt.none=Vt.Linear.easeIn;Ws("Elastic",Iu("in"),Iu("out"),Iu());(function(s,t){var e=1/t,i=2*e,n=2.5*e,r=function(o){return o<e?s*o*o:o<i?s*Math.pow(o-1.5/t,2)+.75:o<n?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Ws("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ws("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ws("Circ",function(s){return-(kp(1-s*s)-1)});Ws("Sine",function(s){return s===1?1:-hM(s*lM)+1});Ws("Back",Du("in"),Du("out"),Du());Vt.SteppedEase=Vt.steps=Ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),r=e?1:0,a=1-oe;return function(o){return((n*Ka(0,a,o)|0)+r)*i}}};kr.ease=Vt["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ju+=s+","+s+"Params,"});var id=function(t,e){this.id=cM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Qu,this.set=e?e.getSetter:Wc},Za=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gr(this,+e.duration,1,1),this.data=e.data,de&&(this._ctx=de,de.data.push(this)),qa||ui.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Wr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Gc(this,i),!r._dp||r.parent||Jp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===oe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Yp(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Op(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Op(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Hr(this._tTime,r)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-oe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Uc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-oe?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Hc(this),MM(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==oe&&(this._tTime-=oe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=me(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&dn(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(di(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uc(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=_M);var n=Ge;return Ge=i,td(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ge=n,this},t.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Fp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Fp(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Ni(this,i),di(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,di(n)),this._dur||(this._zTime=-oe),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-oe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-oe,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-oe)},t.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var o=be(i)?i:Zp,l=function(){var h=n.then;n.then=null,r&&r(),be(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){ka(this)},s}();wi(Za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-oe,_prom:0,_ps:!1,_rts:1});var He=function(s){zp(t,s);function t(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=di(i.sortChildren),ge&&dn(i.parent||ge,Cn(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&jp(Cn(r),i.scrollTrigger),r}var e=t.prototype;return e.to=function(n,r,a){return Ga(0,arguments,this),this},e.from=function(n,r,a){return Ga(1,arguments,this),this},e.fromTo=function(n,r,a,o){return Ga(2,arguments,this),this},e.set=function(n,r,a){return r.duration=0,r.parent=this,Ha(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Te(n,r,Ni(this,a),1),this},e.call=function(n,r,a){return dn(this,Te.delayedCall(0,n,r),a)},e.staggerTo=function(n,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Te(n,a,Ni(this,l)),this},e.staggerFrom=function(n,r,a,o,l,c,h){return a.runBackwards=1,Ha(a).immediateRender=di(a.immediateRender),this.staggerTo(n,r,a,o,l,c,h)},e.staggerFromTo=function(n,r,a,o,l,c,h,u){return o.startAt=a,Ha(o).immediateRender=di(o.immediateRender),this.staggerTo(n,r,o,l,c,h,u)},e.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:me(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,y,b,M,S,w,A;if(this!==ge&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,M=this._start,b=this._ts,p=!b,u&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,a);if(d=me(h%m),h===l?(g=this._repeat,d=c):(S=me(h/m),g=~~S,g&&g===S&&(d=c,g--),d>c&&(d=c)),S=Hr(this._tTime,m),!o&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),w&&g&1&&(d=c-d,A=1),g!==S&&!this._lock){var R=w&&S&1,x=R===(w&&g&1);if(g<S&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:me(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;um(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=EM(this,me(o),me(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!r&&!S&&(Ti(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-oe);break}}f=_}else{f=this._last;for(var E=n<0?n:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,r,a||Ge&&td(f)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=E?-oe:oe);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-oe)._zTime=d>=o?1:-1,this._ts))return this._start=M,Hc(this),this.render(n,r,a);this._onUpdate&&!r&&Ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ss(this,1),!r&&!(n<0&&!o)&&(h||o||!l)&&(Ti(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,r){var a=this;if(Pn(r)||(r=Ni(this,r,n)),!(n instanceof Za)){if(Ke(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Ie(n))return this.addLabel(n,r);if(be(n))n=Te.delayedCall(0,n);else return this}return this!==n?dn(this,n,r):this},e.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ui);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Te?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},e.remove=function(n){return Ie(n)?this.removeLabel(n):be(n)?this.killTweensOf(n):(n.parent===this&&Vc(this,n),n===this._recent&&(this._recent=this._last),zs(this))},e.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=me(ui.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},e.addLabel=function(n,r){return this.labels[n]=Ni(this,r),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,r,a){var o=Te.delayedCall(0,r||Ya,a);return o.data="isPause",this._hasPause=1,dn(this,o,Ni(this,n))},e.removePause=function(n){var r=this._first;for(n=Ni(this,n);r;)r._start===n&&r.data==="isPause"&&ss(r),r=r._next},e.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)es!==o[l]&&o[l].kill(n,r);return this},e.getTweensOf=function(n,r){for(var a=[],o=Bi(n),l=this._first,c=Pn(r),h;l;)l instanceof Te?xM(l._targets,o)&&(c?(!es||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(n,r){r=r||{};var a=this,o=Ni(a,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Te.to(a,wi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||oe,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Gr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(n,r,a){return this.tweenTo(r,wi({startAt:{time:Ni(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Np(this,Ni(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Np(this,Ni(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+oe)},e.shiftChildren=function(n,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=me(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return zs(this)},e.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),zs(this)},e.totalDuration=function(n){var r=0,a=this,o=a._last,l=Ui,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,dn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=me(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Gr(a,a===ge&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(ge._ts&&(Yp(ge,Uc(n,ge)),Xp=ui.frame),ui.frame>=Dp){Dp+=fi.autoSleep||120;var r=ge._first;if((!r||!r._ts)&&fi.autoSleep&&ui._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ui.sleep()}}},t}(Za);wi(He.prototype,{_lock:0,_hasPause:0,_forcing:0});var VM=function(t,e,i,n,r,a,o){var l=new ii(this._pt,t,e,0,1,od,null,r),c=0,h=0,u,d,f,_,g,m,p,y;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Xr(n)),a&&(y=[i,n],a(y,t,e),i=y[0],n=y[1]),d=i.match(Cu)||[];u=Cu.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Gs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Cu.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Zu.test(n)||p)&&(l.e=0),this._pt=l,l},nd=function(t,e,i,n,r,a,o,l,c,h){be(n)&&(n=n(r||0,t,a));var u=t[e],d=i!=="get"?i:be(u)?c?t[e.indexOf("set")||!be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=be(u)?c?YM:mm:ad,_;if(Ie(n)&&(~n.indexOf("random(")&&(n=Xr(n)),n.charAt(1)==="="&&(_=Gs(d,n)+(We(d)||0),(_||_===0)&&(n=_))),!h||d!==n||Gu)return!isNaN(d*n)&&n!==""?(_=new ii(this._pt,t,e,+d||0,n-(d||0),typeof u=="boolean"?ZM:gm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&kc(e,n),VM.call(this,t,e,d,n,f,l||fi.stringFilter,c))},HM=function(t,e,i,n,r){if(be(t)&&(t=Wa(t,r,e,i,n)),!fn(t)||t.style&&t.nodeType||Ke(t)||Vp(t))return Ie(t)?Wa(t,r,e,i,n):t;var a={},o;for(o in t)a[o]=Wa(t[o],r,e,i,n);return a},sd=function(t,e,i,n,r,a){var o,l,c,h;if(hi[t]&&(o=new hi[t]).init(r,o.rawVars?e[t]:HM(e[t],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new ii(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==zr))for(c=i._ptLookup[i._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},es,Gu,rd=function s(t,e,i){var n=t.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,b=t._overwrite==="auto"&&!Xu,M=t.timeline,S,w,A,R,x,E,P,N,F,G,V,k,B;if(M&&(!d||!r)&&(r="none"),t._ease=ks(r,kr.ease),t._yEase=u?hm(ks(u===!0?r:u,kr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!n.runBackwards,!M||d&&!n.stagger){if(N=m[0]?ns(m[0]).harness:0,k=N&&n[N.prop],S=Nc(n,Ju),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Ic:gM),g._lazy=0),a){if(ss(t._startAt=Te.set(m,wi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&di(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ge||!o&&!f)&&t._startAt.revert(Ic),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),A=wi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&di(l),immediateRender:o,stagger:0,parent:p},S),k&&(A[N.prop]=k),ss(t._startAt=Te.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ge?t._startAt.revert(Ic):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,oe,oe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&di(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||$u(m)[w]._gsap,t._ptLookup[w]=G={},Uu[P.id]&&is.length&&Fc(),V=y===m?w:y.indexOf(x),N&&(F=new N).init(x,k||S,t,V,y)!==!1&&(t._pt=R=new ii(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(q){G[q]=R}),F.priority&&(E=1)),!N||k)for(A in S)hi[A]&&(F=sd(A,S,t,V,x,y))?F.priority&&(E=1):G[A]=R=nd.call(t,x,A,"get",S[A],V,y,0,n.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),b&&t._pt&&(es=t,ge.killTweensOf(x,G,t.globalTime(e)),B=!t.parent,es=0),t._pt&&l&&(Uu[P.id]=1)}E&&cd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&M.render(Ui,!0,!0)},GM=function(t,e,i,n,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Gu=1,t.vars[e]="+=0",rd(t,o),Gu=0,l?Xa(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!r?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Se(i)+We(u.e)),u.b&&(u.b=h.s+We(u.b))},WM=function(t,e){var i=t[0]?ns(t[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return e;r=Vr({},e);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},XM=function(t,e,i,n){var r=e.ease||n||"power1.inOut",a,o;if(Ke(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Wa=function(t,e,i,n,r){return be(t)?t.call(e,i,n,r):Ie(t)&&~t.indexOf("random(")?Xr(t):t},fm=ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pm={};ei(fm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return pm[s]=1});var Te=function(s){zp(t,s);function t(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:Ha(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=n.parent||ge,b=(Ke(i)||Vp(i)?Pn(i[0]):"length"in n)?[i]:Bi(i),M,S,w,A,R,x,E,P;if(o._targets=b.length?$u(b):Xa("GSAP target "+i+" not found. https://gsap.com",!fi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Pc(c)||Pc(h)){if(n=o.vars,M=o.timeline=new He({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:b}),M.kill(),M.parent=M._dp=Cn(o),M._start=0,d||Pc(c)||Pc(h)){if(A=b.length,E=d&&em(d),fn(d))for(R in d)~fm.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(S=0;S<A;S++)w=Nc(n,pm),w.stagger=0,p&&(w.yoyoEase=p),P&&Vr(w,P),x=b[S],w.duration=+Wa(c,Cn(o),S,x,b),w.delay=(+Wa(h,Cn(o),S,x,b)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),M.to(x,w,E?E(S,x,b):0),M._ease=Vt.none;M.duration()?c=h=0:o.timeline=0}else if(_){Ha(wi(M.vars.defaults,{ease:"none"})),M._ease=ks(_.ease||n.ease||"none");var N=0,F,G,V;if(Ke(_))_.forEach(function(k){return M.to(b,k,">")}),M.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||XM(R,_[R],w,_.easeEach);for(R in w)for(F=w[R].sort(function(k,B){return k.t-B.t}),N=0,S=0;S<F.length;S++)G=F[S],V={ease:G.e,duration:(G.t-(S?F[S-1].t:0))/100*c},V[R]=G.v,M.to(b,V,N),N+=V.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!Xu&&(es=Cn(o),ge.killTweensOf(b),es=0),dn(y,Cn(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===me(y._time)&&di(u)&&bM(Cn(o))&&y.data!=="nested")&&(o._tTime=-oe,o.render(Math.max(0,-h)||0)),m&&jp(Cn(o),m),o}var e=t.prototype;return e.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-oe&&!h?l:n<oe?0:n,d,f,_,g,m,p,y,b,M;if(!c)TM(this,n,r,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,r,a);if(d=me(u%g),u===l?(_=this._repeat,d=c):(m=me(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(M=this._yEase,d=c-d),m=Hr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(b&&this._yEase&&um(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(me(g*_),!0).invalidate()._lock=0))}if(!this._initted){if($p(this,h?n:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&u&&!r&&!m&&(Ti(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;b&&b.render(n<0?n:b._dur*b._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Bu(this,n,r,a),Ti(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Ti(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Bu(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ss(this,1),!r&&!(h&&!o)&&(u||o||p)&&(Ti(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},e.resetTo=function(n,r,a,o,l){qa||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||rd(this,c),h=this._ease(c/this._dur),GM(this,n,r,a,o,h,c,l)?this.resetTo(n,r,a,o,1):(Gc(this,0),this.parent||Kp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ge),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,es&&es.vars.overwrite!==!0)._first||ka(this),this.parent&&a!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Bi(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&yM(o,l))return r==="all"&&(this._pt=0),ka(this);for(u=this._op=this._op||[],r!=="all"&&(Ie(r)&&(g={},ei(r,function(y){return g[y]=1}),r=g),r=WM(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Vc(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ka(this),this},t.to=function(n,r){return new t(n,r,arguments[2])},t.from=function(n,r){return Ga(1,arguments)},t.delayedCall=function(n,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(n,r,a){return Ga(2,arguments)},t.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(n,r)},t.killTweensOf=function(n,r,a){return ge.killTweensOf(n,r,a)},t}(Za);wi(Te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(s){Te[s]=function(){var t=new He,e=ku.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ad=function(t,e,i){return t[e]=i},mm=function(t,e,i){return t[e](i)},YM=function(t,e,i,n){return t[e](n.fp,i)},qM=function(t,e,i){return t.setAttribute(e,i)},Wc=function(t,e){return be(t[e])?mm:zc(t[e])&&t.setAttribute?qM:ad},gm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ZM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},od=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},ld=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},KM=function(t,e,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(t,e,i),r=a},JM=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?Vc(this,e,"_pt"):e.dep||(i=1),e=n;return!i},jM=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},cd=function(t){for(var e=t._pt,i,n,r,a;e;){for(i=e._next,n=r;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:r=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=r},ii=function(){function s(e,i,n,r,a,o,l,c,h){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||gm,this.d=l||this,this.set=c||ad,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=jM,this.m=i,this.mt=r,this.tween=n},s}();ei(ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Ju[s]=1});Ei.TweenMax=Ei.TweenLite=Te;Ei.TimelineLite=Ei.TimelineMax=He;ge=new He({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=ed;var Vs=[],Lc={},$M=[],Bp=0,QM=0,Lu=function(t){return(Lc[t]||$M).map(function(e){return e()})},Wu=function(){var t=Date.now(),e=[];t-Bp>2&&(Lu("matchMediaInit"),Vs.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=un.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),Lu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Bp=t,Lu("matchMedia"))},_m=function(){function s(e,i){this.selector=i&&Vu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QM++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,n,r){be(i)&&(r=n,n=i,i=be);var a=this,o=function(){var c=de,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Vu(r)),de=a,u=n.apply(a,arguments),be(u)&&a._r.push(u),de=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===be?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var n=de;de=null,i(this),de=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Te&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof He?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Te)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Vs.length;a--;)Vs[a].id===this.id&&Vs.splice(a,1)},t.revert=function(i){this.kill(i||{})},s}(),tb=function(){function s(e){this.contexts=[],this.scope=e,de&&de.data.push(this)}var t=s.prototype;return t.add=function(i,n,r){fn(i)||(i={matches:i});var a=new _m(0,r||this.scope),o=a.conditions={},l,c,h;de&&!a.selector&&(a.selector=de.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=un.matchMedia(i[c]),l&&(Vs.indexOf(a)<0&&Vs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Wu):l.addEventListener("change",Wu)));return h&&n(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Bc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return om(n)})},timeline:function(t){return new He(t)},getTweensOf:function(t,e){return ge.getTweensOf(t,e)},getProperty:function(t,e,i,n){Ie(t)&&(t=Bi(t)[0]);var r=ns(t||{}).get,a=i?Zp:qp;return i==="native"&&(i=""),t&&(e?a((hi[e]&&hi[e].get||r)(t,e,i,n)):function(o,l,c){return a((hi[o]&&hi[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=Bi(t),t.length>1){var n=t.map(function(h){return Je.quickSetter(h,e,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}t=t[0]||{};var a=hi[e],o=ns(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;zr._pt=0,u.init(t,i?h+i:h,zr,0,[t]),u.render(1,u),zr._pt&&ld(1,zr)}:o.set(t,l);return a?c:function(h){return c(t,l,i?h+i:h,o,1)}},quickTo:function(t,e,i){var n,r=Je.to(t,wi((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ks(t.ease,kr.ease)),Lp(kr,t||{})},config:function(t){return Lp(fi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,r=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!hi[o]&&!Ei[o]&&Xa(e+" effect requires "+o+" plugin.")}),Ru[e]=function(o,l,c){return i(Bi(o),wi(l||{},r),c)},a&&(He.prototype[e]=function(o,l,c){return this.add(Ru[e](o,fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Vt[t]=ks(e)},parseEase:function(t,e){return arguments.length?ks(t,e):Vt},getById:function(t){return ge.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new He(t),n,r;for(i.smoothChildTiming=di(t.smoothChildTiming),ge.remove(i),i._dp=0,i._time=i._tTime=ge._time,n=ge._first;n;)r=n._next,(e||!(!n._dur&&n instanceof Te&&n.vars.onComplete===n._targets[0]))&&dn(i,n,n._start-n._delay),n=r;return dn(ge,i,0),i},context:function(t,e){return t?new _m(t,e):de},matchMedia:function(t){return new tb(t)},matchMediaRefresh:function(){return Vs.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Wu()},addEventListener:function(t,e){var i=Lc[t]||(Lc[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Lc[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:DM,wrapYoyo:LM,distribute:em,random:nm,snap:im,normalize:IM,getUnit:We,clamp:AM,splitColor:lm,toArray:Bi,selector:Vu,mapRange:rm,pipe:RM,unitize:PM,interpolate:OM,shuffle:tm},install:Gp,effects:Ru,ticker:ui,updateRoot:He.updateRoot,plugins:hi,globalTimeline:ge,core:{PropTween:ii,globals:Wp,Tween:Te,Timeline:He,Animation:Za,getCache:ns,_removeLinkedListItem:Vc,reverting:function(){return Ge},context:function(t){return t&&de&&(de.data.push(t),t._ctx=de),de},suppressOverwrites:function(t){return Xu=t}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Bc[s]=Te[s]});ui.add(He.updateRoot);zr=Bc.to({},{duration:0});var eb=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},ib=function(t,e){var i=t._targets,n,r,a;for(n in e)for(r=i.length;r--;)a=t._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=eb(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[r],n))},Ou=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Ie(r)&&(l={},ei(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ib(o,r)}}}},Je=Bc.registerPlugin({name:"attr",init:function(t,e,i,n,r){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)Ge?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ou("roundProps",Hu),Ou("modifiers"),Ou("snap",im))||Bc;Te.version=He.version=Je.version="3.14.2";Hp=1;Yu()&&Wr();var nb=Vt.Power0,sb=Vt.Power1,rb=Vt.Power2,ab=Vt.Power3,ob=Vt.Power4,lb=Vt.Linear,cb=Vt.Quad,hb=Vt.Cubic,ub=Vt.Quart,db=Vt.Quint,fb=Vt.Strong,pb=Vt.Elastic,mb=Vt.Back,gb=Vt.SteppedEase,_b=Vt.Bounce,xb=Vt.Sine,vb=Vt.Expo,yb=Vt.Circ;var xm,as,qr,md,Zs,Mb,vm,gd,bb=function(){return typeof window<"u"},Dn={},qs=180/Math.PI,Zr=Math.PI/180,Yr=Math.atan2,ym=1e8,_d=/([A-Z])/g,Sb=/(left|right|width|margin|padding|x)/i,Tb=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ud=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Eb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ab=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cb=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Cm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Rm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rb=function(t,e,i){return t.style[e]=i},Pb=function(t,e,i){return t.style.setProperty(e,i)},Ib=function(t,e,i){return t._gsap[e]=i},Db=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Lb=function(t,e,i,n,r){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},Ob=function(t,e,i,n,r){var a=t._gsap;a[e]=i,a.renderTransform(r,a)},_e="transform",pi=_e+"Origin",Fb=function s(t,e){var i=this,n=this.target,r=n.style,a=n._gsap;if(t in Dn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=pn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=In(n,o)}):this.tfm[t]=a.x?a[t]:In(n,t),t===pi&&(this.tfm.zOrigin=a.zOrigin);else return pn.transform.split(",").forEach(function(o){return s.call(i,o,e)});if(this.props.indexOf(_e)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pi,e,"")),t=_e}(r||e)&&this.props.push(t,e,r[t])},Pm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nb=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(_d,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=gd(),(!r||!r.isStart)&&!i[_e]&&(Pm(i),n.zOrigin&&i[pi]&&(i[pi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Im=function(t,e){var i={target:t,props:[],revert:Nb,save:Fb};return t._gsap||Je.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Dm,dd=function(t,e){var i=as.createElementNS?as.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):as.createElement(t);return i&&i.style?i:as.createElement(t)},Ai=function s(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(_d,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&s(t,Kr(e)||e,1)||""},Mm="O,Moz,ms,Ms,Webkit".split(","),Kr=function(t,e,i){var n=e||Zs,r=n.style,a=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Mm[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Mm[a]:"")+t},fd=function(){bb()&&window.document&&(xm=window,as=xm.document,qr=as.documentElement,Zs=dd("div")||{style:{}},Mb=dd("div"),_e=Kr(_e),pi=_e+"Origin",Zs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dm=!!Kr("perspective"),gd=Je.core.reverting,md=1)},bm=function(t){var e=t.ownerSVGElement,i=dd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),r;n.style.display="block",i.appendChild(n),qr.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),qr.removeChild(i),r},Sm=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Lm=function(t){var e,i;try{e=t.getBBox()}catch{e=bm(t),i=1}return e&&(e.width||e.height)||i||(e=bm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Sm(t,["x","cx","x1"])||0,y:+Sm(t,["y","cy","y1"])||0,width:0,height:0}:e},Om=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lm(t))},ls=function(t,e){if(e){var i=t.style,n;e in Dn&&e!==pi&&(e=_e),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(_d,"-$1").toLowerCase())):i.removeAttribute(e)}},os=function(t,e,i,n,r,a){var o=new ii(t._pt,e,i,0,1,a?Rm:Cm);return t._pt=o,o.b=n,o.e=r,t._props.push(i),o},Tm={deg:1,rad:1,turn:1},Ub={grid:1,flex:1},cs=function s(t,e,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=Zs.style,l=Sb.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===a||!r||Tm[n]||Tm[a])return r;if(a!=="px"&&!d&&(r=s(t,e,i,"px")),p=t.getCTM&&Om(t),(f||a==="%")&&(Dn[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Se(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===as||!g.appendChild)&&(g=as.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ui.time&&!m.uncache)return Se(r/m.width*u);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+n,_=t[h],y?t.style[e]=y:ls(t,e)}else(f||a==="%")&&!Ub[Ai(g,"display")]&&(o.position=Ai(t,"position")),g===t&&(o.position="static"),g.appendChild(Zs),_=Zs[h],g.removeChild(Zs),o.position="absolute";return l&&f&&(m=ns(g),m.time=ui.time,m.width=g[h]),Se(d?_*r/u:_&&r?u/_*r:0)},In=function(t,e,i,n){var r;return md||fd(),e in pn&&e!=="transform"&&(e=pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Dn[e]&&e!=="transform"?(r=$a(t,n),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Yc(Ai(t,pi))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Xc[e]&&Xc[e](t,e,i)||Ai(t,e)||Qu(t,e)||(e==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?cs(t,e,r,i)+i:r},Bb=function(t,e,i,n){if(!i||i==="none"){var r=Kr(e,t,1),a=r&&Ai(t,r,1);a&&a!==i?(e=r,i=a):e==="borderColor"&&(i=Ai(t,"borderTopColor"))}var o=new ii(this._pt,t.style,e,0,1,od),l=0,c=0,h,u,d,f,_,g,m,p,y,b,M,S;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Ai(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=t.style[e],t.style[e]=n,n=Ai(t,e)||n,g?t.style[e]=g:ls(t,e)),h=[i,n],ed(h),i=h[0],n=h[1],d=i.match(Hs)||[],S=n.match(Hs)||[],S.length){for(;u=Hs.exec(n);)m=u[0],y=n.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=Gs(f,m)+M),p=parseFloat(m),b=m.substr((p+"").length),l=Hs.lastIndex-b.length,b||(b=b||fi.units[e]||M,l===n.length&&(n+=b,o.e+=b)),M!==b&&(f=cs(t,e,g,b)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=e==="display"&&n==="none"?Rm:Cm;return Zu.test(n)&&(o.e=0),this._pt=o,o},Em={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zb=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Em[i]||i,e[1]=Em[n]||n,e.join(" ")},kb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,r=e.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Dn[o]&&(l=1,o=o==="transformOrigin"?pi:_e),ls(i,o);l&&(ls(i,_e),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",$a(i,1),a.uncache=1,Pm(n)))}},Xc={clearProps:function(t,e,i,n,r){if(r.data!=="isFromStart"){var a=t._pt=new ii(t._pt,e,i,0,0,kb);return a.u=n,a.pr=-10,a.tween=r,t._props.push(i),1}}},ja=[1,0,0,1,0,0],Fm={},Nm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wm=function(t){var e=Ai(t,_e);return Nm(e)?ja:e.substr(7).match(qu).map(Se)},xd=function(t,e){var i=t._gsap||ns(t),n=t.style,r=wm(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ja:r):(r===ja&&!t.offsetParent&&t!==qr&&!i.svg&&(l=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,qr.appendChild(t)),r=wm(t),l?n.display=l:ls(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):qr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},pd=function(t,e,i,n,r,a){var o=t._gsap,l=r||xd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],b=e.split(" "),M=parseFloat(b[0])||0,S=parseFloat(b[1])||0,w,A,R,x;i?l!==ja&&(A=f*m-_*g)&&(R=M*(m/A)+S*(-g/A)+(g*y-m*p)/A,x=M*(-_/A)+S*(f/A)-(f*y-_*p)/A,M=R,S=x):(w=Lm(t),M=w.x+(~b[0].indexOf("%")?M/100*w.width:M),S=w.y+(~(b[1]||b[0]).indexOf("%")?S/100*w.height:S)),n||n!==!1&&o.smooth?(p=M-c,y=S-h,o.xOffset=u+(p*f+y*g)-p,o.yOffset=d+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=S,o.smooth=!!n,o.origin=e,o.originIsAbsolute=!!i,t.style[pi]="0px 0px",a&&(os(a,o,"xOrigin",c,M),os(a,o,"yOrigin",h,S),os(a,o,"xOffset",u,o.xOffset),os(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+S)},$a=function(t,e){var i=t._gsap||new id(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Ai(t,pi)||"0",h,u,d,f,_,g,m,p,y,b,M,S,w,A,R,x,E,P,N,F,G,V,k,B,q,nt,et,ct,Rt,Lt,Gt,Wt;return h=u=d=g=m=p=y=b=M=0,f=_=1,i.svg=!!(t.getCTM&&Om(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[_e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_e]!=="none"?l[_e]:"")),n.scale=n.rotate=n.translate="none"),A=xd(t,i.svg),i.svg&&(i.uncache?(q=t.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),pd(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,A)),S=i.xOrigin||0,w=i.yOrigin||0,A!==ja&&(P=A[0],N=A[1],F=A[2],G=A[3],h=V=A[4],u=k=A[5],A.length===6?(f=Math.sqrt(P*P+N*N),_=Math.sqrt(G*G+F*F),g=P||N?Yr(N,P)*qs:0,y=F||G?Yr(F,G)*qs+g:0,y&&(_*=Math.abs(Math.cos(y*Zr))),i.svg&&(h-=S-(S*P+w*F),u-=w-(S*N+w*G))):(Wt=A[6],Lt=A[7],et=A[8],ct=A[9],Rt=A[10],Gt=A[11],h=A[12],u=A[13],d=A[14],R=Yr(Wt,Rt),m=R*qs,R&&(x=Math.cos(-R),E=Math.sin(-R),B=V*x+et*E,q=k*x+ct*E,nt=Wt*x+Rt*E,et=V*-E+et*x,ct=k*-E+ct*x,Rt=Wt*-E+Rt*x,Gt=Lt*-E+Gt*x,V=B,k=q,Wt=nt),R=Yr(-F,Rt),p=R*qs,R&&(x=Math.cos(-R),E=Math.sin(-R),B=P*x-et*E,q=N*x-ct*E,nt=F*x-Rt*E,Gt=G*E+Gt*x,P=B,N=q,F=nt),R=Yr(N,P),g=R*qs,R&&(x=Math.cos(R),E=Math.sin(R),B=P*x+N*E,q=V*x+k*E,N=N*x-P*E,k=k*x-V*E,P=B,V=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Se(Math.sqrt(P*P+N*N+F*F)),_=Se(Math.sqrt(k*k+Wt*Wt)),R=Yr(V,k),y=Math.abs(R)>2e-4?R*qs:0,M=Gt?1/(Gt<0?-Gt:Gt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Nm(Ai(t,_e)),B&&t.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Se(f),i.scaleY=Se(_),i.rotation=Se(g)+o,i.rotationX=Se(m)+o,i.rotationY=Se(p)+o,i.skewX=y+o,i.skewY=b+o,i.transformPerspective=M+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[pi]=Yc(c)),i.xOffset=i.yOffset=0,i.force3D=fi.force3D,i.renderTransform=i.svg?Hb:Dm?Um:Vb,i.uncache=0,i},Yc=function(t){return(t=t.split(" "))[0]+" "+t[1]},hd=function(t,e,i){var n=We(e);return Se(parseFloat(e)+parseFloat(cs(t,"x",i+"px",n)))+n},Vb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Um(t,e)},Xs="0deg",Ja="0px",Ys=") ",Um=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,b=i.zOrigin,M="",S=p==="auto"&&t&&t!==1||p===!0;if(b&&(u!==Xs||h!==Xs)){var w=parseFloat(h)*Zr,A=Math.sin(w),R=Math.cos(w),x;w=parseFloat(u)*Zr,x=Math.cos(w),a=hd(y,a,A*x*-b),o=hd(y,o,-Math.sin(w)*-b),l=hd(y,l,R*x*-b+b)}m!==Ja&&(M+="perspective("+m+Ys),(n||r)&&(M+="translate("+n+"%, "+r+"%) "),(S||a!==Ja||o!==Ja||l!==Ja)&&(M+=l!==Ja||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ys),c!==Xs&&(M+="rotate("+c+Ys),h!==Xs&&(M+="rotateY("+h+Ys),u!==Xs&&(M+="rotateX("+u+Ys),(d!==Xs||f!==Xs)&&(M+="skew("+d+", "+f+Ys),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ys),y.style[_e]=M||"translate(0, 0)"},Hb=function(t,e){var i=e||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,b=parseFloat(a),M=parseFloat(o),S,w,A,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Zr,c*=Zr,S=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Zr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),S*=x,w*=x)),S=Se(S),w=Se(w),A=Se(A),R=Se(R)):(S=u,R=d,w=A=0),(b&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(b=cs(f,"x",a,"px"),M=cs(f,"y",o,"px")),(_||g||m||p)&&(b=Se(b+_-(_*S+g*A)+m),M=Se(M+g-(_*w+g*R)+p)),(n||r)&&(x=f.getBBox(),b=Se(b+n/100*x.width),M=Se(M+r/100*x.height)),x="matrix("+S+","+w+","+A+","+R+","+b+","+M+")",f.setAttribute("transform",x),y&&(f.style[_e]=x)},Gb=function(t,e,i,n,r){var a=360,o=Ie(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?qs:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*ym)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*ym)%a-~~(c/a)*a)),t._pt=d=new ii(t._pt,e,i,n,c,Eb),d.e=h,d.u="deg",t._props.push(i),d},Am=function(t,e){for(var i in e)t[i]=e[i];return t},Wb=function(t,e,i){var n=Am({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[_e]=e,o=$a(i,1),ls(i,_e),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_e],a[_e]=e,o=$a(i,1),a[_e]=c);for(l in Dn)c=n[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=We(c),_=We(h),u=f!==_?cs(i,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new ii(t._pt,o,l,u,d-u,ud),t._pt.u=_||0,t._props.push(l));Am(o,n)};ei("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",n="Bottom",r="Left",a=(t<3?[e,i,n,r]:[e+r,e+i,n+i,n+r]).map(function(o){return t<2?s+o:"border"+o+s});Xc[t>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return In(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var vd={name:"css",register:fd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,r){var a=this._props,o=t.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,y,b,M,S,w,A,R,x;md||fd(),this.styles=this.styles||Im(t),R=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(h=e[g],!(hi[g]&&sd(g,e,i,n,t,r)))){if(f=typeof h,_=Xc[g],f==="function"&&(h=h.call(i,n,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Xr(h)),_)_(this,t,g,h,i)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Rn.lastIndex=0,Rn.test(c)||(m=We(c),p=We(h),p?m!==p&&(c=cs(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,t,r):l[g],Ie(c)&&~c.indexOf("random(")&&(c=Xr(c)),We(c+"")||c==="auto"||(c+=fi.units[g]||We(In(t,g))||""),(c+"").charAt(1)==="="&&(c=In(t,g))):c=In(t,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in pn&&(g==="autoAlpha"&&(d===1&&In(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),os(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in Dn,b){if(this.styles.save(g),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Ai(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=h,h=Ai(t,"perspective"),E?t.style.perspective=E:ls(t,"perspective")}u=parseFloat(h)}if(M||(S=t._gsap,S.renderTransform&&!e.parseTransform||$a(t,e.parseTransform),w=e.smoothOrigin!==!1&&S.smooth,M=this._pt=new ii(this._pt,o,_e,0,1,S.renderTransform,S,0,-1),M.dep=1),g==="scale")this._pt=new ii(this._pt,S,"scaleY",S.scaleY,(y?Gs(S.scaleY,y+u):u)-S.scaleY||0,ud),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(pi,0,o[pi]),h=zb(h),S.svg?pd(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&os(this,S,"zOrigin",S.zOrigin,p),os(this,o,g,Yc(c),Yc(h)));continue}else if(g==="svgOrigin"){pd(t,h,1,w,0,this);continue}else if(g in Fm){Gb(this,S,g,d,y?Gs(d,y+h):h);continue}else if(g==="smoothOrigin"){os(this,S,"smooth",S.smooth,h);continue}else if(g==="force3D"){S[g]=h;continue}else if(g==="transform"){Wb(this,h,t);continue}}else g in o||(g=Kr(g)||g);if(b||(u||u===0)&&(d||d===0)&&!Tb.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=We(h)||(g in fi.units?fi.units[g]:m),m!==p&&(d=cs(t,g,c,p)),this._pt=new ii(this._pt,b?S:o,g,d,(y?Gs(d,y+u):u)-d,!b&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Cb:ud),this._pt.u=p||0,b&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=Ab):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=wb);else if(g in o)Bb.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,n,r);else if(g!=="parseTransform"){kc(g,h);continue}b||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}A&&cd(this)},render:function(t,e){if(e.tween._time||!gd())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:In,aliases:pn,getSetter:function(t,e,i){var n=pn[e];return n&&n.indexOf(",")<0&&(e=n),e in Dn&&e!==pi&&(t._gsap.x||In(t,"x"))?i&&vm===i?e==="scale"?Db:Ib:(vm=i||{})&&(e==="scale"?Lb:Ob):t.style&&!zc(t.style[e])?Rb:~e.indexOf("-")?Pb:Wc(t,e)},core:{_removeProperty:ls,_getMatrix:xd}};Je.utils.checkPrefix=Kr;Je.core.getStyleSaver=Im;(function(s,t,e,i){var n=ei(s+","+t+","+e,function(r){Dn[r]=1});ei(t,function(r){fi.units[r]="deg",Fm[r]=1}),pn[n[13]]=s+","+t,ei(i,function(r){var a=r.split(":");pn[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fi.units[s]="px"});Je.registerPlugin(vd);var zi=Je.registerPlugin(vd)||Je,dw=zi.core.Tween;var Zc="battleMovementState",Ji="battleMovementLocked",qc=.75,yd=Math.PI*2;function Ci(s){return s?s.userData[Zc]??null:null}function Qa(s,t){let e=Ci(s);return e?{x:e.basePosition.x+e.offset.x,y:e.basePosition.y+e.offset.y,z:e.basePosition.z+e.offset.z}:t}var Ks=class s{document=fe(Ld);sceneService=fe(Ki);pressedKeys=new Set;upAxis=new D(0,1,0);forwardVector=new D;rightVector=new D;moveVector=new D;meshBounds=new yi;arenaBounds=gs;movementSpeed=3.4;pursuitSpeed=2.2;walkCycleSpeed=6;keyboardMoveCodes=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);keyDownHandler=this.handleKeyDown.bind(this);keyUpHandler=this.handleKeyUp.bind(this);blurHandler=this.handleBlur.bind(this);canvas=null;controlledMesh=null;controlledMeshBoundaryPadding=qc;idleWanderStates=[];pursuitState=null;removeFrameListener=null;joystickInput=null;characterColliders=new Map;collisionSeparation=new D;smoothedAnimationDelta=1/60;init(t){this.canvas!==t&&(this.disposeInputListeners(),this.canvas=t,window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("blur",this.blurHandler),this.removeFrameListener||(this.removeFrameListener=this.sceneService.addFrameListener(e=>{this.smoothedAnimationDelta+=(e-this.smoothedAnimationDelta)*.2,this.updateControlledMesh(e),this.updateIdleWanderMeshes(e),this.updatePursuitMesh(e)})))}dispose(){this.disposeInputListeners(),this.pressedKeys.clear(),this.joystickInput=null,this.controlledMesh=null,this.controlledMeshBoundaryPadding=qc,this.clearIdleWanderCharacter(),this.clearPursuitCharacter(),this.characterColliders.clear(),this.smoothedAnimationDelta=1/60,this.removeFrameListener&&(this.removeFrameListener(),this.removeFrameListener=null)}registerCharacterMesh(t){let e=ee(t);this.characterColliders.set(t,this.measureBoundaryPadding(t)*.4*e)}unregisterCharacterMesh(t){this.characterColliders.delete(t)}setJoystickDirection(t,e){this.joystickInput={right:t,forward:e}}clearJoystickDirection(){this.joystickInput=null}setControlledCharacter(t,e,i){if(this.controlledMesh=t,!t||!e){this.controlledMeshBoundaryPadding=qc;return}this.controlledMeshBoundaryPadding=this.measureBoundaryPadding(t)*ee(t);let n=hn*ee(t);t.userData[Zc]={basePosition:{x:e.x,y:e.y+n,z:e.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i},t.userData[Ji]=!1,this.sceneService.setCameraFocus({x:e.x,y:e.y+n,z:e.z})}addIdleWanderCharacter(t,e,i){!t||!e||(this.removeIdleWanderCharacter(t),Ci(t)||(t.userData[Zc]={basePosition:{x:e.x,y:e.y+hn*ee(t),z:e.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}),t.userData[Ji]=!1,this.idleWanderStates.push({mesh:t,boundaryPadding:this.measureBoundaryPadding(t)*ee(t),nextRetargetInSeconds:Si.randFloat(.3,2),targetOffset:null}))}removeIdleWanderCharacter(t){let e=this.idleWanderStates.findIndex(r=>r.mesh===t);if(e===-1)return;let i=this.idleWanderStates[e],n=Ci(i.mesh);n?.isWalking&&this.stopWalking(i.mesh,n,!1),this.idleWanderStates.splice(e,1)}hasIdleWanderCharacter(t){return this.idleWanderStates.some(e=>e.mesh===t)}clearIdleWanderCharacter(){for(let t of this.idleWanderStates){let e=Ci(t.mesh);e?.isWalking&&this.stopWalking(t.mesh,e,!1)}this.idleWanderStates=[]}setPursuitCharacter(t,e,i,n){this.clearPursuitCharacter(),Ci(t)||(t.userData[Zc]={basePosition:{x:e.x,y:e.y+hn*ee(t),z:e.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}),t.userData[Ji]=!1,this.pursuitState={mesh:t,boundaryPadding:this.measureBoundaryPadding(t)*ee(t),targetMesh:n}}clearPursuitCharacter(){if(!this.pursuitState)return;let t=Ci(this.pursuitState.mesh);t?.isWalking&&this.stopWalking(this.pursuitState.mesh,t,!1),this.pursuitState=null}isPursuing(){return this.pursuitState!==null}disposeInputListeners(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("keyup",this.keyUpHandler),window.removeEventListener("blur",this.blurHandler),this.canvas=null}handleKeyDown(t){!this.controlledMesh||this.isEditableTarget(t.target)||this.keyboardMoveCodes.has(t.code)&&this.pressedKeys.add(t.code)}handleKeyUp(t){this.pressedKeys.delete(t.code)}handleBlur(){this.pressedKeys.clear()}updateControlledMesh(t){if(!this.controlledMesh)return;let e=Ci(this.controlledMesh);if(!e)return;if(this.controlledMesh.userData[Ji]){e.isWalking&&this.stopWalking(this.controlledMesh,e);return}let i=this.getMoveDirection();if(!i){e.isWalking&&this.stopWalking(this.controlledMesh,e);return}e.isWalking=!0,e.walkCycle=(e.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%yd;let n=Qa(this.controlledMesh,e.basePosition),r=this.movementSpeed*ee(this.controlledMesh)*t,a=this.clampToArenaBounds({x:n.x+i.x*r,y:e.basePosition.y,z:n.z+i.z*r}),o=this.resolveCharacterCollision(this.controlledMesh,a);e.offset.x=o.x-e.basePosition.x,e.offset.z=o.z-e.basePosition.z,this.controlledMesh.position.x=o.x,this.controlledMesh.position.y=e.basePosition.y+Math.sin(e.walkCycle*2)*.05,this.controlledMesh.position.z=o.z,this.sceneService.setCameraFocus(this.controlledMesh.position);let l={x:o.x+i.x,z:o.z+i.z};this.controlledMesh.rotation.y=this.sceneService.getFacingRotationY(o,l),this.controlledMesh.rotation.x=Math.sin(e.walkCycle*2)*.035,this.controlledMesh.rotation.z=i.x*.05,this.controlledMesh.scale.x=(e.side==="left"?1:-1)*ee(this.controlledMesh),this.applyWalkPose(this.controlledMesh,e.walkCycle)}updateIdleWanderMeshes(t){for(let e of this.idleWanderStates)this.updateSingleIdleWanderMesh(e,t)}updateSingleIdleWanderMesh(t,e){let{mesh:i}=t,n=Ci(i);if(!n)return;if(i.userData[Ji]){n.isWalking&&this.stopWalking(i,n,!1);return}t.nextRetargetInSeconds-=e;let r=Qa(i,n.basePosition);this.shouldRetargetIdleWander(t,r)&&this.retargetIdleWander(t,r,n.basePosition.y);let a=t.targetOffset;if(!a){n.isWalking&&this.stopWalking(i,n,!1);return}let o={x:n.basePosition.x+a.x,y:n.basePosition.y,z:n.basePosition.z+a.z},l=this.moveVector.set(o.x-r.x,0,o.z-r.z),c=l.length();if(c<.12){t.targetOffset=null,t.nextRetargetInSeconds=Si.randFloat(.45,1.35),n.isWalking&&this.stopWalking(i,n,!1);return}l.divideScalar(c),n.isWalking=!0,n.walkCycle=(n.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%yd;let h=Math.min(.9*ee(i)*e,c),u=this.clampToArenaBounds({x:r.x+l.x*h,y:n.basePosition.y,z:r.z+l.z*h},t.boundaryPadding),d=this.resolveCharacterCollision(i,u);n.offset.x=d.x-n.basePosition.x,n.offset.z=d.z-n.basePosition.z,i.position.x=d.x,i.position.y=n.basePosition.y+Math.sin(n.walkCycle*2)*.035,i.position.z=d.z,i.rotation.y=this.sceneService.getFacingRotationY(d,o),i.rotation.x=Math.sin(n.walkCycle*2)*.018,i.rotation.z=l.x*.025,i.scale.x=(n.side==="left"?1:-1)*ee(i),this.applyWalkPose(i,n.walkCycle)}updatePursuitMesh(t){if(!this.pursuitState)return;let{mesh:e,targetMesh:i}=this.pursuitState,n=Ci(e);if(!n)return;if(e.userData[Ji]){n.isWalking&&this.stopWalking(e,n,!1);return}let r=Qa(e,n.basePosition),a={x:i.position.x,y:n.basePosition.y,z:i.position.z},o=this.moveVector.set(a.x-r.x,0,a.z-r.z),l=o.length(),c=Rc*(ee(e)+ee(i));if(l<c){n.isWalking&&this.stopWalking(e,n,!1),e.rotation.y=this.sceneService.getFacingRotationY(r,a);return}o.divideScalar(l),n.isWalking=!0,n.walkCycle=(n.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%yd;let h=Math.min(this.pursuitSpeed*ee(e)*t,l),u=this.clampToArenaBounds({x:r.x+o.x*h,y:n.basePosition.y,z:r.z+o.z*h},this.pursuitState.boundaryPadding),d=this.resolveCharacterCollision(e,u);n.offset.x=d.x-n.basePosition.x,n.offset.z=d.z-n.basePosition.z,e.position.x=d.x,e.position.y=n.basePosition.y+Math.sin(n.walkCycle*2)*.04,e.position.z=d.z,e.rotation.y=this.sceneService.getFacingRotationY(d,a),e.rotation.x=Math.sin(n.walkCycle*2)*.025,e.rotation.z=o.x*.03,e.scale.x=(n.side==="left"?1:-1)*ee(e),this.applyWalkPose(e,n.walkCycle)}getMoveDirection(){return this.getKeyboardDirection()??this.getJoystickDirection()}getKeyboardDirection(){return this.pressedKeys.size===0||(this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),(this.pressedKeys.has("KeyW")||this.pressedKeys.has("ArrowUp"))&&this.moveVector.add(this.forwardVector),(this.pressedKeys.has("KeyS")||this.pressedKeys.has("ArrowDown"))&&this.moveVector.sub(this.forwardVector),(this.pressedKeys.has("KeyD")||this.pressedKeys.has("ArrowRight"))&&this.moveVector.add(this.rightVector),(this.pressedKeys.has("KeyA")||this.pressedKeys.has("ArrowLeft"))&&this.moveVector.sub(this.rightVector),this.moveVector.lengthSq()<1e-4)?null:this.moveVector.normalize()}getJoystickDirection(){if(!this.joystickInput)return null;this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),this.moveVector.addScaledVector(this.forwardVector,this.joystickInput.forward),this.moveVector.addScaledVector(this.rightVector,this.joystickInput.right);let t=this.moveVector.length();return t<1e-4?null:(t>1&&this.moveVector.divideScalar(t),this.moveVector)}stopWalking(t,e,i=!0){e.isWalking=!1,t.position.y=e.basePosition.y,i&&this.sceneService.setCameraFocus(t.position),t.rotation.x=0,t.rotation.z=0,this.resetLegPose(t)}applyWalkPose(t,e){let i=t.userData.legs;if(Array.isArray(i))for(let n of i){let r=e+n.index*.8+(n.side<0?Math.PI:0),a=Math.sin(r)*.18,o=Math.max(0,Math.sin(r))*.12;n.group.rotation.x=n.baseRotation.x-o,n.group.rotation.y=n.baseRotation.y+a,n.group.rotation.z=n.baseRotation.z+a*.25*n.side}}resetLegPose(t){let e=t.userData.legs;if(Array.isArray(e))for(let i of e)i.group.rotation.set(i.baseRotation.x,i.baseRotation.y,i.baseRotation.z)}clampToArenaBounds(t,e=this.controlledMeshBoundaryPadding){let i=(this.arenaBounds.maxX-this.arenaBounds.minX)/2-.5,n=(this.arenaBounds.maxZ-this.arenaBounds.minZ)/2-.5,r=Math.min(e,i,n);return{x:Si.clamp(t.x,this.arenaBounds.minX+r,this.arenaBounds.maxX-r),y:t.y,z:Si.clamp(t.z,this.arenaBounds.minZ+r,this.arenaBounds.maxZ-r)}}shouldRetargetIdleWander(t,e){if(t.nextRetargetInSeconds>0)return!1;if(!t.targetOffset)return!0;let i=Ci(t.mesh);if(!i)return!1;let n={x:i.basePosition.x+t.targetOffset.x,y:i.basePosition.y,z:i.basePosition.z+t.targetOffset.z};return e.x===n.x&&e.z===n.z}retargetIdleWander(t,e,i){let r=this.clampToArenaBounds({x:e.x+Si.randFloatSpread(5.6),y:i,z:e.z+Si.randFloatSpread(5.6)},t.boundaryPadding),a=Ci(t.mesh);a&&(t.targetOffset=new D(r.x-a.basePosition.x,0,r.z-a.basePosition.z),t.nextRetargetInSeconds=Si.randFloat(.6,1.8))}measureBoundaryPadding(t){t.updateMatrixWorld(!0),this.meshBounds.setFromObject(t);let e=Math.max(Math.abs(this.meshBounds.min.x-t.position.x),Math.abs(this.meshBounds.max.x-t.position.x)),i=Math.max(Math.abs(this.meshBounds.min.z-t.position.z),Math.abs(this.meshBounds.max.z-t.position.z)),n=Math.max(Math.abs(t.scale.x),Math.abs(t.scale.y),Math.abs(t.scale.z),.01);return Math.max(Math.hypot(e,i)/n,qc)}resolveCharacterCollision(t,e){let i=this.characterColliders.get(t);if(i===void 0)return e;let n=e.x,r=e.z;for(let[a,o]of this.characterColliders){if(a===t||!a.visible)continue;let l=n-a.position.x,c=r-a.position.z,h=l*l+c*c,u=i+o;if(h>=u*u)continue;let d=Math.sqrt(h);if(d<.001)n+=u;else{let f=u-d;this.collisionSeparation.set(l/d,0,c/d),n+=this.collisionSeparation.x*f,r+=this.collisionSeparation.z*f}}return{x:n,y:e.y,z:r}}isEditableTarget(t){return t instanceof this.document.defaultView.HTMLElement?t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName):!1}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Pi({token:s,factory:s.\u0275fac})};var to=class s{sceneService=fe(Ki);battleCharacterBuilderService=fe(Bs);actionToken=0;dispose(){this.battleCharacterBuilderService.disposeAllShields()}createTeleportationEntrance(t,e,i){let n=ee(t);t.position.set(e.x,e.y+hn*n,e.z),t.scale.set(.01,.01,.01),t.visible=!0,zi.to(t.scale,{x:(i==="right"?-1:1)*n,y:n,z:n,duration:.4,ease:"back.out(1.4)"})}animateAction(t,e,i){this.actionToken+=1;let n=e.get(t.attackerId),r=e.get(t.defenderId);if(!n||!r)return;let a=n.mesh,o=r.mesh,l=n.side==="left";a.userData[Ji]=!0,o.userData[Ji]=!0,zi.killTweensOf(a.position),zi.killTweensOf(a.rotation),zi.killTweensOf(a.scale),zi.killTweensOf(o.position),zi.killTweensOf(o.rotation),zi.killTweensOf(o.scale),this.killLegTweens(a),this.killLegTweens(o),(()=>{let h=ee(a),u=ee(o),d=this.getCharacterBasePosition(a,n.character),f=this.getCharacterBasePosition(o,r.character),_=this.sceneService.getFacingRotationY(d,f),g=o.rotation.y,m=ki({},d),p=l?-1:1,y=this.getSpiderAttackMotion(d,f,p,h,u),b=zi.timeline();return a.position.set(d.x,d.y,d.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*h,h,h),o.position.set(f.x,f.y,f.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*u,u,u),b.to(a.scale,{x:(l?1.18:-1.18)*h,y:.84*h,z:1.12*h,duration:.18,ease:"power2.inOut"}),b.to(a.position,{x:y.windupPosition.x,y:y.windupPosition.y,z:y.windupPosition.z,duration:.18,ease:"power2.inOut"},"<"),b.to(a.rotation,{x:-.18,y:_+y.windupYawOffset,z:.08*p,duration:.18,ease:"power2.inOut"},"<"),b.to(a.position,{x:y.impactPosition.x,y:y.impactPosition.y,z:y.impactPosition.z,duration:.14,ease:"power4.in",onComplete:()=>{let M=zi.timeline(),S=(l?-.6:.6)*u;M.to(o.scale,{x:S,y:.6*u,z:.75*u,duration:.06,ease:"power3.in"},"<"),M.to(o.scale,{x:(l?-1.1:1.1)*u,y:.85*u,z:1.05*u,duration:.12,ease:"power1.out"},"<"),M.to(o.scale,{x:(l?-.9:.9)*u,y:1.1*u,z:.9*u,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}),b.to(a.rotation,{x:.28,y:_+y.impactYawOffset,z:.16*p,duration:.14,ease:"power4.in"},"<"),b.to(a.scale,{x:(l?1.28:-1.28)*h,y:.76*h,z:1.24*h,duration:.12,ease:"power3.out"},"<"),b.to(a.position,{x:y.recoilPosition.x,y:y.recoilPosition.y,z:y.recoilPosition.z,duration:.12,ease:"sine.out"}),b.to(a.rotation,{x:.08,y:_-y.impactYawOffset*.35,z:-.1*p,duration:.12,ease:"sine.out"},"<"),b.to(a.position,{x:m.x,y:m.y+.04,z:m.z,duration:.28,ease:"power2.inOut"}),b.to(a.rotation,{x:.02,y:_,z:0,duration:.28,ease:"power2.inOut"},"<"),b.to(a.scale,{x:(l?1:-1)*h,y:h,z:h,duration:.24,ease:"power2.out"},"<"),b.to(a.position,{y:m.y,duration:.12,ease:"sine.out"}),b.to(a.rotation,{x:0,duration:.12,ease:"sine.out"},"<"),b.to(o.position,{x:f.x,y:f.y,z:f.z,duration:.5,ease:"power2.inOut"},"-=0.5"),b.to(o.rotation,{z:0,y:g,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),b.to(o.scale,{x:(l?-1:1)*u,y:u,z:u,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1"),b.call(()=>{let M=ee(a),S=ee(o);a.position.set(d.x,d.y,d.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*M,M,M),o.position.set(f.x,f.y,f.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*S,S,S),a.userData[Ji]=!1,o.userData[Ji]=!1,i?.()}),b})()}getSpiderAttackMotion(t,e,i,n,r){let a=new D(e.x-t.x,0,e.z-t.z);a.lengthSq()<1e-4?a.set(i<0?1:-1,0,0):a.normalize();let o=new D(-a.z,0,a.x).multiplyScalar(i),l=(n+r)/2,c=.3*l,h=1.28*r,u=1.85*l;return{windupPosition:{x:t.x-a.x*.28*n+o.x*.18*n,y:t.y-.08*n,z:t.z-a.z*.28*n+o.z*.18*n},impactPosition:{x:e.x-a.x*h+o.x*.12*l,y:e.y+c,z:e.z-a.z*h+o.z*.12*l},recoilPosition:{x:e.x-a.x*u-o.x*.08*l,y:t.y+.12*n,z:e.z-a.z*u-o.z*.08*l},windupYawOffset:.08*i,impactYawOffset:-.06*i}}getCharacterBasePosition(t,e){return Qa(t,{x:e.position.x,y:e.position.y+hn*ee(t),z:e.position.z})}killLegTweens(t){let e=t.userData.legs;if(e)for(let i of e)zi.killTweensOf(i.group.rotation)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Pi({token:s,factory:s.\u0275fac})};var Xb=["base"],Yb=["thumb"],qb=.15,Kc=class s{ngZone=fe(co);movementService=fe(Ks);sceneService=fe(Ki);baseRef=th.required("base");thumbRef=th.required("thumb");activeTouchId=null;baseCenterX=0;baseCenterY=0;maxOffset=36;isPortraitRotated=!1;disposeListeners=null;disposeMediaQuery=null;constructor(){ho(()=>{this.ngZone.runOutsideAngular(()=>{this.initPortraitDetection(),this.bindTouchListeners()})})}ngOnDestroy(){this.disposeListeners?.(),this.disposeMediaQuery?.(),this.movementService.clearJoystickDirection()}initPortraitDetection(){let t=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=t.matches;let e=i=>{this.isPortraitRotated=i.matches};t.addEventListener("change",e),this.disposeMediaQuery=()=>t.removeEventListener("change",e)}bindTouchListeners(){let t=this.baseRef().nativeElement,e=r=>{if(r.preventDefault(),this.activeTouchId!==null)return;let a=r.changedTouches[0];this.activeTouchId=a.identifier;let o=t.getBoundingClientRect(),l=this.thumbRef().nativeElement.getBoundingClientRect();this.baseCenterX=o.left+o.width/2,this.baseCenterY=o.top+o.height/2,this.maxOffset=o.width/2-l.width/2,this.thumbRef().nativeElement.classList.add("active"),this.sceneService.joystickActive=!0,this.updateFromTouch(a.clientX,a.clientY)},i=r=>{r.preventDefault();let a=this.findActiveTouch(r.changedTouches);a&&this.updateFromTouch(a.clientX,a.clientY)},n=r=>{this.findActiveTouch(r.changedTouches)&&this.resetThumb()};t.addEventListener("touchstart",e,{passive:!1}),t.addEventListener("touchmove",i,{passive:!1}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),this.disposeListeners=()=>{t.removeEventListener("touchstart",e),t.removeEventListener("touchmove",i),t.removeEventListener("touchend",n),t.removeEventListener("touchcancel",n)}}findActiveTouch(t){for(let e of Array.from(t))if(e.identifier===this.activeTouchId)return e;return null}updateFromTouch(t,e){let i=t-this.baseCenterX,n=e-this.baseCenterY,r=i,a=n;this.isPortraitRotated&&(r=n,a=-i);let o=Math.hypot(r,a);o>this.maxOffset&&(r=r/o*this.maxOffset,a=a/o*this.maxOffset),this.thumbRef().nativeElement.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`;let l=r/this.maxOffset,c=a/this.maxOffset;Math.hypot(l,c)<qb?this.movementService.clearJoystickDirection():this.movementService.setJoystickDirection(l,-c)}resetThumb(){this.activeTouchId=null,this.thumbRef().nativeElement.style.transform="translate(-50%, -50%)",this.thumbRef().nativeElement.classList.remove("active"),this.sceneService.joystickActive=!1,this.movementService.clearJoystickDirection()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=$i({type:s,selectors:[["app-battle-joystick"]],viewQuery:function(e,i){e&1&&(eh(i.baseRef,Xb,5),eh(i.thumbRef,Yb,5)),e&2&&Pd(2)},decls:4,vars:0,consts:[["base",""],["thumb",""],[1,"joystick-base"],[1,"joystick-thumb"]],template:function(e,i){e&1&&(Fe(0,"div",2,0),Qi(2,"div",3,1),Ne())},styles:["[_nghost-%COMP%]{display:none;position:absolute;bottom:24px;left:24px;z-index:10;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (pointer: coarse){[_nghost-%COMP%]{display:block}}.joystick-base[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;background:#070c1199;border:1.5px solid rgba(255,255,255,.15);box-shadow:0 4px 16px #0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);position:relative}.joystick-thumb[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#ffffff2e;border:1.5px solid rgba(255,255,255,.3);box-shadow:0 2px 8px #0003;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform}.joystick-thumb.active[_ngcontent-%COMP%]{background:#ffffff4d;border-color:#ffffff73}"],changeDetection:0})};var Zb=["battleCanvas"];function Kb(s,t){s&1&&Qi(0,"app-battle-joystick")}function Jb(s,t){s&1&&(Fe(0,"div",2),Qi(1,"div",4),Ne())}function jb(s,t){if(s&1&&(Fe(0,"div",3)(1,"div",5),js(2),Ne(),Fe(3,"div",6)(4,"span"),js(5),Ne(),Fe(6,"span"),js(7),gn(8,"titlecase"),Ne()()()),s&2){let e=ms();Xe(2),ih("",e.performanceStats().fps," FPS"),Xe(3),ih("",e.performanceStats().frameTimeMs," ms"),Xe(2),go(_n(8,3,e.performanceStats().qualityLevel))}}var $b={fps:60,frameTimeMs:16.67,qualityLevel:"high",pixelRatio:1},eo=class s{canvasRef;playerMesh=null;enemyMeshes=new Map;destroy$=new ro;removePerformanceListener=null;battleService=fe(tr);ngZone=fe(co);cdr=fe(Dd);sceneService=fe(Ki);characterBuilder=fe(Bs);movementService=fe(Ks);vfxService=fe(to);hasCombatStarted=!1;animatingCharacterIds=new Set;resolvedOverlaps=new Set;removeOverlapListener=null;player=null;enemies=[];performanceStats=Qr($b);isBattleActive=Qr(!1);isLoading=Qr(!1);showFpsBadge=Qr(!1);fpsKeysHeld=new Set;onKeyDown=t=>{this.fpsKeysHeld.add(t.key.toLowerCase()),this.fpsKeysHeld.has("f")&&this.fpsKeysHeld.has("p")&&this.fpsKeysHeld.has("s")&&(this.showFpsBadge.update(e=>!e),this.cdr.detectChanges(),this.fpsKeysHeld.clear())};onKeyUp=t=>{this.fpsKeysHeld.delete(t.key.toLowerCase())};constructor(){ho(()=>{this.ngZone.runOutsideAngular(()=>{this.sceneService.init(this.canvasRef.nativeElement),this.movementService.init(this.canvasRef.nativeElement),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)})})}ngOnInit(){this.removePerformanceListener=this.sceneService.addPerformanceListener(t=>{this.performanceStats.set(t),this.cdr.detectChanges()}),this.ngZone.runOutsideAngular(()=>{this.battleService.battleState$.pipe($r(this.destroy$)).subscribe(t=>{if(this.isBattleActive.set(t!==null),this.cdr.detectChanges(),!t){this.hasCombatStarted=!1,this.resolvedOverlaps.clear(),this.removeOverlapListener?.(),this.removeOverlapListener=null,this.movementService.clearIdleWanderCharacter();return}this.hasCombatStarted=t.actions.length>0,this.player=t.team1[0]||null,this.enemies=t.team2,this.applyDeathVisibility(),!this.playerMesh&&this.enemyMeshes.size===0&&this.createCharacters(),this.syncCharacterScales(),this.syncEnemyIdleWander()}),this.battleService.action$.pipe($r(this.destroy$)).subscribe(t=>{t&&(this.hasCombatStarted=!0,this.movementService.clearIdleWanderCharacter(),this.animatingCharacterIds.add(t.attackerId),this.animatingCharacterIds.add(t.defenderId),this.vfxService.animateAction(t,this.buildParticipantsMap(),()=>{this.animatingCharacterIds.delete(t.attackerId),this.animatingCharacterIds.delete(t.defenderId),this.applyDeathVisibility(),this.syncEnemyIdleWander(),this.ngZone.run(()=>{this.battleService.finalizeIfComplete()})}))})})}ngOnDestroy(){this.removeOverlapListener?.(),this.removeOverlapListener=null,this.destroy$.next(),this.destroy$.complete(),this.removePerformanceListener?.(),this.removePerformanceListener=null,document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.movementService.dispose(),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.removeOverlapListener?.(),this.removeOverlapListener=null,this.resolvedOverlaps.clear(),this.playerMesh&&(this.movementService.unregisterCharacterMesh(this.playerMesh),this.characterBuilder.disposeCharacterMesh(this.playerMesh,this.sceneService.scene),this.playerMesh=null);for(let[,t]of this.enemyMeshes)this.movementService.unregisterCharacterMesh(t),this.characterBuilder.disposeCharacterMesh(t,this.sceneService.scene);this.enemyMeshes.clear(),this.movementService.setControlledCharacter(null,null,"left"),this.movementService.clearIdleWanderCharacter(),this.player=null,this.enemies=[]}createCharacters(){if(!this.player||this.enemies.length===0)return;this.isLoading.set(!0),this.cdr.detectChanges();let t=[],{mesh:e,ready:i}=this.characterBuilder.createCharacterMesh(this.player.color,this.player.position);e.userData[$s]=Qs(this.player.size),e.visible=!1,this.sceneService.scene.add(e),this.playerMesh=e,t.push(i);for(let n of this.enemies){let{mesh:r,ready:a}=this.characterBuilder.createCharacterMesh(n.color,n.position);r.userData[$s]=Qs(n.size),r.visible=!1,this.sceneService.scene.add(r),this.enemyMeshes.set(n.id,r),t.push(a)}Promise.all(t).then(()=>{if(this.playerMesh){this.playerMesh.visible=!0;for(let[,n]of this.enemyMeshes)n.visible=!0;this.sceneService.compileScene(),this.playerMesh.visible=!1;for(let[,n]of this.enemyMeshes)n.visible=!1;this.isLoading.set(!1),this.cdr.detectChanges(),this.movementService.registerCharacterMesh(this.playerMesh),this.movementService.setControlledCharacter(this.playerMesh,this.player.position,"left"),this.vfxService.createTeleportationEntrance(this.playerMesh,this.player.position,"left");for(let n of this.enemies){let r=this.enemyMeshes.get(n.id);r&&(this.movementService.registerCharacterMesh(r),this.vfxService.createTeleportationEntrance(r,n.position,"right"))}this.updateCameraDistanceScale(),this.syncEnemyIdleWander(),this.startShieldOverlapDetection()}})}syncCharacterScales(){this.player&&this.playerMesh&&(this.playerMesh.userData[$s]=Qs(this.player.size),this.updateMeshGroundOffset(this.playerMesh,this.player),this.updateCameraDistanceScale());for(let t of this.enemies){let e=this.enemyMeshes.get(t.id);e&&(e.userData[$s]=Qs(t.size),this.updateMeshGroundOffset(e,t))}}updateMeshGroundOffset(t,e){let i=e.position.y+hn*ee(t);t.position.y=i;let n=Ci(t);n&&(n.basePosition.y=i)}updateCameraDistanceScale(){this.player&&this.sceneService.setCameraDistanceScale(Qs(this.player.size))}syncEnemyIdleWander(){let t=new Set;for(let e of this.enemies){if(!e.isAlive||this.animatingCharacterIds.has(e.id))continue;let i=this.enemyMeshes.get(e.id);i&&t.add(i)}for(let[,e]of this.enemyMeshes)t.has(e)||this.movementService.removeIdleWanderCharacter(e);for(let e of this.enemies){if(!e.isAlive||this.animatingCharacterIds.has(e.id))continue;let i=this.enemyMeshes.get(e.id);i&&(this.movementService.hasIdleWanderCharacter(i)||this.movementService.addIdleWanderCharacter(i,e.position,"right"))}}startShieldOverlapDetection(){this.removeOverlapListener?.(),this.removeOverlapListener=this.sceneService.addFrameListener(()=>{if(this.playerMesh&&this.player?.isAlive)for(let t of this.enemies){if(!t.isAlive||this.resolvedOverlaps.has(t.id))continue;let e=this.enemyMeshes.get(t.id);e&&this.characterBuilder.doShieldsOverlap(this.playerMesh,e)&&this.ngZone.run(()=>{this.battleService.resolveShieldOverlap(t.id)&&this.resolvedOverlaps.add(t.id)})}for(let t=0;t<this.enemies.length;t++){let e=this.enemies[t];if(!e.isAlive)continue;let i=this.enemyMeshes.get(e.id);if(i)for(let n=t+1;n<this.enemies.length;n++){let r=this.enemies[n];if(!r.isAlive)continue;let a=`${e.id}-${r.id}`;if(this.resolvedOverlaps.has(a))continue;let o=this.enemyMeshes.get(r.id);o&&this.characterBuilder.doShieldsOverlap(i,o)&&this.ngZone.run(()=>{this.battleService.resolveEnemyShieldOverlap(e.id,r.id)&&this.resolvedOverlaps.add(a)})}}})}applyDeathVisibility(){this.player&&!this.player.isAlive&&this.playerMesh&&!this.animatingCharacterIds.has(this.player.id)&&(this.playerMesh.visible=!1);for(let t of this.enemies){let e=this.enemyMeshes.get(t.id);e&&!t.isAlive&&!this.animatingCharacterIds.has(t.id)&&(e.visible=!1)}}buildParticipantsMap(){let t=new Map;this.player&&this.playerMesh&&t.set(this.player.id,{character:this.player,mesh:this.playerMesh,side:"left"});for(let e of this.enemies){let i=this.enemyMeshes.get(e.id);i&&t.set(e.id,{character:e,mesh:i,side:"right"})}return t}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=$i({type:s,selectors:[["app-battle-canvas"]],viewQuery:function(e,i){if(e&1&&fo(Zb,7),e&2){let n;po(n=mo())&&(i.canvasRef=n.first)}},features:[Id([Ki,Bs,Br,Ks,to])],decls:5,vars:3,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"],[1,"loading-overlay"],[1,"fps-badge"],[1,"loading-spinner"],[1,"fps-badge__primary"],[1,"fps-badge__secondary"]],template:function(e,i){e&1&&(Qi(0,"canvas",1,0),ds(2,Kb,1,0,"app-battle-joystick")(3,Jb,2,0,"div",2)(4,jb,9,5,"div",3)),e&2&&(Xe(2),fs(i.isBattleActive()?2:-1),Xe(),fs(i.isLoading()?3:-1),Xe(),fs(i.isBattleActive()&&i.showFpsBadge()?4:-1))},dependencies:[On,Nd,Kc],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}.fps-badge[_ngcontent-%COMP%]{position:absolute;top:16px;left:50%;transform:translate(-50%);z-index:5;min-width:126px;padding:8px 14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:#070c11b8;box-shadow:0 10px 24px #00000047;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f5fbff;text-align:center;pointer-events:none}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;letter-spacing:.08em;line-height:1}.fps-badge__secondary[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:6px;color:#f5fbffc7;font-size:.6875rem;font-weight:600;letter-spacing:.06em;line-height:1;text-transform:uppercase}@media (max-width: 580px){.fps-badge[_ngcontent-%COMP%]{top:10px;min-width:112px;padding:7px 12px}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.8125rem}.fps-badge__secondary[_ngcontent-%COMP%]{gap:8px;margin-top:5px;font-size:.625rem}}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:10;pointer-events:none}.loading-spinner[_ngcontent-%COMP%]{width:48px;height:48px;border:3px solid rgba(255,255,255,.15);border-top-color:#fffc;border-radius:50%;animation:_ngcontent-%COMP%_spin .8s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"],changeDetection:0})};var xe={RAT:{id:"char1",name:"Shelob",size:7,color:"#ff0000"},CAT:{id:"char2",name:"Aragog",size:4,color:"#0000ff"},BEAR:{id:"char3",name:"Anansi",size:4,color:"#444444"},HORSE:{id:"char4",name:"Arachne",size:4,color:"#dd8888"},GIRAFFE:{id:"char5",name:"Ungoliant",size:4,color:"#34f5dd"},WOLF:{id:"char6",name:"Lolth",size:4,color:"#8b00ff"},EAGLE:{id:"char7",name:"Tsuchigumo",size:4,color:"#ff8c00"},SERPENT:{id:"char8",name:"Jor\u014Dgumo",size:4,color:"#00cc44"},A:{id:"char9",name:"Shelob",size:4,color:"#ff0000"},B:{id:"char10",name:"Aragog",size:4,color:"#0000ff"},C:{id:"char11",name:"Anansi",size:4,color:"#444444"},D:{id:"char12",name:"Arachne",size:4,color:"#dd8888"},E:{id:"char13",name:"Ungoliant",size:4,color:"#34f5dd"},F:{id:"char14",name:"Lolth",size:4,color:"#8b00ff"},G:{id:"char15",name:"Tsuchigumo",size:4,color:"#ff8c00"},H:{id:"char16",name:"Jor\u014Dgumo",size:4,color:"#00cc44"},I:{id:"char17",name:"Atlach-Nacha",size:4,color:"#c71585"},J:{id:"char18",name:"Kumonga",size:7,color:"#2e8b57"},K:{id:"char19",name:"Uttu",size:7,color:"#daa520"},L:{id:"char20",name:"Iktomi",size:7,color:"#4682b4"},M:{id:"char21",name:"Nareau",size:7,color:"#9932cc"},N:{id:"char22",name:"Aranea",size:7,color:"#dc143c"}};function Qb(s,t){if(s&1){let e=uo();Fe(0,"app-victory-banner",4),ps("terminateBattle",function(){ao(e);let n=ms(2);return oo(n.resetAndTerminateBattle())}),Ne()}if(s&2){let e=ms();Ln("winner",e.winner)}}function tS(s,t){if(s&1&&ds(0,Qb,1,1,"app-victory-banner",3),s&2){let e=t;fs(e.isComplete&&e.winner?0:-1)}}var Bm=class s{battleCanvas;destroy$=new ro;battleService=fe(tr);router=fe(Ud);battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(Rd(t=>t!==null));player=null;enemies=[];ngOnInit(){this.lockOrientation(),this.battleService.battleState$.pipe($r(this.destroy$)).subscribe(t=>this.updateCharacters(t))}ngOnDestroy(){this.unlockOrientation(),this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){this.battleService.startBattle(xe.RAT,[xe.GIRAFFE,xe.HORSE,xe.CAT,xe.BEAR,xe.WOLF,xe.EAGLE,xe.SERPENT,xe.A,xe.B,xe.C,xe.D,xe.E,xe.F,xe.G,xe.H,xe.I,xe.J,xe.K,xe.L,xe.M,xe.N])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.player=null,this.enemies=[],this.router.navigate(["/"])}lockOrientation(){window.innerWidth<=768&&screen.orientation?.lock?.("landscape")?.catch?.(()=>{})}unlockOrientation(){screen.orientation?.unlock?.()}updateCharacters(t){if(!t){this.player=null,this.enemies=[];return}this.player=t.team1[0]||null,this.enemies=t.team2}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=$i({type:s,selectors:[["app-battle"]],viewQuery:function(e,i){if(e&1&&fo(eo,5),e&2){let n;po(n=mo())&&(i.battleCanvas=n.first)}},decls:7,vars:6,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","isBattleActive"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(e,i){if(e&1&&(Fe(0,"div",0)(1,"div",1),Qi(2,"app-battle-canvas"),ds(3,tS,1,1),gn(4,"async"),Ne(),Fe(5,"app-battle-controls",2),gn(6,"async"),ps("startBattle",function(){return i.startBattle()}),Ne()()),e&2){let n,r;Xe(3),fs((n=_n(4,2,i.battleState$))?3:-1,n),Xe(2),Ln("isBattleActive",(r=_n(6,4,i.isBattleActive$))!==null&&r!==void 0?r:!1)}},dependencies:[On,Fd,Mo,So,eo],styles:[".canvas-wrapper[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;padding:4px;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 60px #34f5dd4d,inset 0 0 40px #34f5dd1a}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:8px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;z-index:10}@media (max-width: 580px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{gap:10px;height:100%}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%]{padding:8px;gap:8px}.battle-overlay[_ngcontent-%COMP%]{gap:8px}}@media (max-width: 768px) and (orientation: portrait){[_nghost-%COMP%]{position:fixed;top:0;left:100dvw;width:100dvh;height:100dvw;transform:rotate(90deg);transform-origin:top left;overflow:hidden;z-index:1000}[_nghost-%COMP%]   .battle-arena[_ngcontent-%COMP%]{height:100dvw}}"]})};export{Bm as BattleComponent};
