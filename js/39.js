import{f as Lp}from"./7.js";import{e as Fs,f as Us}from"./15.js";import"./35.js";import"./50.js";import{c as Ol,d as Nl}from"./12.js";import{c as Dp}from"./17.js";import{a as Cp,m as Rp,s as Pp,t as Ip,v as cr}from"./16.js";import{$a as Mp,Cb as qt,Da as Rl,Db as $t,Eb as Bi,Ib as Ns,Mb as vn,Nb as xn,P as Os,Rb as Pl,Sb as Il,T as xe,Ta as Ft,Tb as Ll,Vb as Ep,Wb as Tp,Yb as Bs,Z as ee,Zb as Dl,_b as Bu,a as Yt,b as Nn,dc as Ap,e as Ls,fa as jr,fb as _n,ga as Jr,ha as wl,k as Ds,kb as or,kc as Fn,l as Nu,lc as Un,oa as Cl,pa as ar,rc as wp,s as Sp,sb as Bn,ua as gn,ub as bp,yb as lr,yc as Fu}from"./27.js";var T0=5,Uu=r=>{let e=r<600?r*T0:3e3;return Object.freeze({minX:-e,maxX:e,minZ:-e,maxZ:e})},hr=Object.freeze({minX:-3e3,maxX:3e3,minZ:-3e3,maxZ:3e3});var A0=0,Op=8,w0=40,Bl=class r{randomInRange(e,t){return Math.random()*(t-e)+e}getXZDistance(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}generateRandomPosition(e){return{x:this.randomInRange(e.minX,e.maxX),y:A0,z:this.randomInRange(e.minZ,e.maxZ)}}isTooCloseToPositions(e,t,i){return t.some(n=>this.getXZDistance(e,n)<i)}generateRandomPositions(e,t,i=100){let n=Uu(t),s=[];for(let a=0;a<e;a++){let o=0,l;do l=this.generateRandomPosition(n),o++;while(o<i&&this.isTooCloseToPositions(l,s,Op));s.push(l)}return s}generatePositionsFarFromDeaths(e,t,i=100){let n=Uu(t),s=[];for(let a of e){let o=0,l;do l=this.generateRandomPosition(n),o++;while(o<i&&(this.getXZDistance(l,a)<w0||this.isTooCloseToPositions(l,s,Op)));s.push(l)}return s}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac,providedIn:"root"})};var no=.9,ro=3e3;var ks=5,so=(ks+.2)*1e3,Np=so/1e3,ku=so,kn="battleBaseScale",Fl="battleSpeedScale",Fi="battleVisualScale",C0=3;function Ot(r){return r/C0}function pi(r){return r.userData[kn]??1}function Ul(r){return r.userData[Fl]??pi(r)}function Zt(r){return r.userData[Fi]??pi(r)}var zn="char1",Bp="#555555",Fp=1,Up=200,si={RAT:{id:"charr1",name:"Wiq",size:.5,color:"#f50259"},CAT:{id:"char2",name:"Aragog",size:.5,color:"#f50259"},BEAR:{id:"char3",name:"Anansi",size:.5,color:"#f50259"},HORSE:{id:"char4",name:"Arachne",size:.5,color:"#f50259"},GIRAFFE:{id:"char5",name:"Ungoliant",size:.5,color:"#f50259"},WOLF:{id:"char6",name:"Lolth",size:.5,color:"#f50259"},EAGLE:{id:"char7",name:"Tsuchigumo",size:.5,color:"#f50259"},A:{id:"char8",name:"Tsuchigumo",size:.5,color:"#f50259"},B:{id:"char9",name:"Tsuchigumo",size:.5,color:"#f50259"},C:{id:"char10",name:"Tsuchigumo",size:.5,color:"#f50259"},D:{id:"char11",name:"Tsuchigumo",size:.5,color:"#f50259"},E:{id:"char12",name:"Tsuchigumo",size:.5,color:"#f50259"},J:{id:"char13",name:"Tsuchigumo",size:.5,color:"#f50259"},K:{id:"char14",name:"Tsuchigumo",size:.5,color:"#f50259"},L:{id:"char15",name:"Tsuchigumo",size:.5,color:"#f50259"}};var ur=class r{characterPositionService=ee(Bl);battleStateSubject=new Nu(null);battleState$=this.battleStateSubject.asObservable();playerSpawnProtectionSubject=new Ds;playerSpawnProtection$=this.playerSpawnProtectionSubject.asObservable();actionSubject=new Nu(null);action$=this.actionSubject.asObservable();pendingComplete=!1;lastAttackTime=new Map;battleStartTime=null;revivalStartTime=null;enemyRevivalTime=new Map;startBattle(e,t){if(t.length===0)throw new Error("Must have at least one enemy");let i={x:-4,y:0,z:0},n=Math.max(...t.map(o=>o.size)),s=this.characterPositionService.generateRandomPositions(t.length,n),a={team1:[Nn(Yt({},e),{isAlive:!0,position:i})],team2:t.map((o,l)=>Nn(Yt({},o),{isAlive:!0,position:s[l]})),actions:[],winner:null,isComplete:!1};this.battleStartTime=Date.now(),this.battleStateSubject.next(a),this.playerSpawnProtectionSubject.next()}getMaxCharacterSize(e){return e<2100?1e3:1001}isPlayerSpawnProtected(){return this.battleStartTime!==null&&Date.now()-this.battleStartTime<so||this.revivalStartTime!==null&&Date.now()-this.revivalStartTime<so}isPlayerSpawnShrinkActive(){return this.battleStartTime!==null&&Date.now()-this.battleStartTime<ks*1e3}isPlayerAttackOnCooldown(){let e=this.lastAttackTime.get(zn)??0;return Date.now()-e<2200}getPlayerCooldownProgress(){let e=this.lastAttackTime.get(zn)??0;return e===0?1:Math.min(1,(Date.now()-e)/2200)}isBattleStartAttackLocked(){return this.battleStartTime!==null&&Date.now()-this.battleStartTime<7500}resolveShieldOverlap(e,t){if(this.isPlayerSpawnProtected())return!1;let i=this.battleStateSubject.value;if(!i||i.isComplete)return!1;let n=i.team1[0],s=i.team2.find(o=>o.id===e);if(!n?.isAlive||!s?.isAlive)return!1;let a=this.resolveCombat(i,n,s,t);return a?(a!==n&&(this.pendingComplete=!0),this.battleStateSubject.next(Yt({},i)),!0):!1}resolveEnemyShieldOverlap(e,t){let i=this.battleStateSubject.value;if(!i)return!1;let n=i.team2.find(h=>h.id===e),s=i.team2.find(h=>h.id===t);if(!n?.isAlive||!s?.isAlive||n?.size>=1e3||s?.size>=1e3)return!1;let a=Date.now(),o=this.enemyRevivalTime.get(e)??0,l=this.enemyRevivalTime.get(t)??0;return a-o<ku||a-l<ku||!this.resolveCombat(i,n,s)?!1:(this.battleStateSubject.next(Yt({},i)),!0)}finalizeIfComplete(){if(!this.pendingComplete)return;this.pendingComplete=!1,this.endBattle();let e=this.battleStateSubject.value;e&&this.battleStateSubject.next(Yt({},e))}endBattle(){let e=this.battleStateSubject.value;if(!e)return;if(e.isComplete=!0,e.team1[0]?.isAlive)e.winner=e.team1[0].name;else{let i=e.team2.filter(n=>n.isAlive);e.winner=i.length>0?i[0].name:null}}processPostAnimationRevives(){let e=this.battleStateSubject.value;if(!e||e.isComplete)return;if(this.reviveAllIfAllEnemiesBigger(e)){this.battleStateSubject.next(Yt({},e));return}e.team1[0]?.isAlive&&e.team2.every(i=>!i.isAlive)&&(this.pendingComplete=!0)}resetBattle(){this.pendingComplete=!1,this.battleStartTime=null,this.lastAttackTime.clear(),this.enemyRevivalTime.clear(),this.battleStateSubject.next(null),this.actionSubject.next(null)}getLastKilledEnemyId(e,t){let i;for(let n=e.actions.length-1;n>=0;n--){let s=e.actions[n];if(s.type==="attack"&&t.some(a=>a.id===s.defenderId)){i=s.defenderId;break}}return i}reviveAllIfAllEnemiesBigger(e){let t=e.team1[0];if(!t?.isAlive||e.team2.filter(d=>d.isAlive).filter(d=>d.size<=t.size&&d.size<1e3).length>1)return!1;let s=e.team2.filter(d=>!d.isAlive);if(s.length===0)return!1;let a=this.getLastKilledEnemyId(e,s),o=a?s.filter(d=>d.id!==a):s;if(o.length===0)return!1;let l=o.map(d=>Yt({},d.position)),c=Math.max(...e.team2.map(d=>d.size)),h=this.characterPositionService.generatePositionsFarFromDeaths(l,c),u=Date.now();return o.forEach((d,f)=>{d.isAlive=!0,d.size=Math.min(Math.ceil(t.size*.75),1e3),d.position=h[f],this.lastAttackTime.delete(d.id),this.enemyRevivalTime.set(d.id,u)}),this.revivalStartTime=Date.now(),this.playerSpawnProtectionSubject.next(),!0}resolveCombat(e,t,i,n){if(this.isBattleStartAttackLocked())return null;let s=Date.now(),a=this.lastAttackTime.get(t.id)??0,o=this.lastAttackTime.get(i.id)??0;if(s-a<2200||s-o<2200)return null;let l;t.id===zn&&i.size===1e3?l=!1:i.id===zn&&t.size===1e3?l=!0:l=(n??t.size)>=i.size;let c=l?t:i,h=l?i:t;this.lastAttackTime.set(c.id,s);let u={attackerId:c.id,defenderId:h.id,type:"attack",timestamp:s};e.actions.push(u),this.actionSubject.next(u),h.isAlive=!1;let d=this.getMaxCharacterSize(c.id===zn?c.size:e.team1[0]?.size??c.size);if(c.size<d){if(c.id===zn)return c.size+=1,c.size>d&&(c.size=d),c;c.size+=h.size,c.size>d&&(c.size=d)}return c}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac,providedIn:"root"})};var kl=class r{winner;terminateBattle=new Cl;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=_n({type:r,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:7,vars:4,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(t,i){t&1&&(qt(0,"div",0)(1,"div",1)(2,"div",2),Bs(3),$t(),Bi(4,"div",3),qt(5,"p-button",4),Fn(6,"translate"),vn("onClick",function(){return i.onTerminateBattle()}),$t()()()),t&2&&(Ft(3),Dl(i.winner),Ft(2),Bn("label",Un(6,2,"Terminate")))},dependencies:[cr,Us,Fs,Nl,Ol],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden;pointer-events:none}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;pointer-events:auto;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;-webkit-user-select:none;user-select:none;margin-bottom:20px;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin-bottom:15px}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin-bottom:10px;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function L0(r,e){if(r&1){let t=Ns();qt(0,"div",2)(1,"p-button",3),Fn(2,"translate"),vn("onClick",function(){jr(t);let n=xn();return Jr(n.onStartBattle())}),$t()()}r&2&&(Ft(),Bn("label",Un(2,1,"Release the Spiders!")))}var Hl=class r{isBattleActive=!1;startBattle=new Cl;onStartBattle(){this.startBattle.emit()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=_n({type:r,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive"},outputs:{startBattle:"startBattle"},decls:2,vars:1,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","secondary","size","large","styleClass","battle-btn start-btn",3,"onClick","label"]],template:function(t,i){t&1&&(qt(0,"div",0),or(1,L0,3,3,"div",1),$t()),t&2&&(Ft(),Bn("ngIf",!i.isBattleActive))},dependencies:[cr,Rp,Us,Fs,Nl,Ol],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000;padding-top:120px;pointer-events:none}.main-button-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{pointer-events:auto}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 720px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{font-size:12px!important;padding:8px!important}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};var Jc="182",Ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ym=0,Ad=1,Sm=2;var Jo=1,Mm=2,Ea=3,Kn=0,vi=1,Ti=2,En=0,ns=1,wd=2,Cd=3,Rd=4,bm=5,vr=100,Em=101,Tm=102,Am=103,wm=104,Cm=200,Rm=201,Pm=202,Im=203,_c=204,vc=205,Lm=206,Dm=207,Om=208,Nm=209,Bm=210,Fm=211,Um=212,km=213,zm=214,$c=0,Qc=1,eh=2,rs=3,th=4,ih=5,nh=6,rh=7,sh=0,Hm=1,Vm=2,un=0,Pd=1,Id=2,Ld=3,$o=4,Dd=5,Od=6,Nd=7;var fd=300,Cr=301,ds=302,ah=303,oh=304,Qo=306,ss=1e3,yn=1001,xc=1002,jt=1003,Gm=1004;var el=1005;var Qt=1006,lh=1007;var Rr=1008;var Ai=1009,Bd=1010,Fd=1011,Ta=1012,ch=1013,dn=1014,fn=1015,Tn=1016,hh=1017,uh=1018,Aa=1020,Ud=35902,kd=35899,zd=1021,Hd=1022,Qi=1023,Mn=1026,Pr=1027,Vd=1028,dh=1029,fs=1030,fh=1031;var ph=1033,tl=33776,il=33777,nl=33778,rl=33779,mh=35840,gh=35841,_h=35842,vh=35843,xh=36196,yh=37492,Sh=37496,Mh=37488,bh=37489,Eh=37490,Th=37491,Ah=37808,wh=37809,Ch=37810,Rh=37811,Ph=37812,Ih=37813,Lh=37814,Dh=37815,Oh=37816,Nh=37817,Bh=37818,Fh=37819,Uh=37820,kh=37821,zh=36492,Hh=36494,Vh=36495,Gh=36283,Wh=36284,Xh=36285,Yh=36286;var yo=2300,yc=2301,gc=2302,pd=2400,md=2401,gd=2402;var Wm=3200;var qh=0,Xm=1,$n="",Ut="srgb",as="srgb-linear",So="linear",et="srgb";var is=7680;var _d=519,Ym=512,qm=513,Zm=514,Zh=515,Km=516,jm=517,Kh=518,Jm=519,Sc=35044;var Gd="300 es",cn=2e3,Mo=2001;function Wd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function D0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $m(){let r=oa("canvas");return r.style.display="block",r}var Hp={},la=null;function bo(...r){let e="THREE."+r.shift();la?la("log",e,...r):console.log(e,...r)}function we(...r){let e="THREE."+r.shift();la?la("warn",e,...r):console.warn(e,...r)}function Pe(...r){let e="THREE."+r.shift();la?la("error",e,...r):console.error(e,...r)}function ca(...r){let e=r.join(" ");e in Hp||(Hp[e]=!0,we(...r))}function Qm(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vp=1234567,go=Math.PI/180,ha=180/Math.PI;function Sn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ai[r&255]+ai[r>>8&255]+ai[r>>16&255]+ai[r>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[t&63|128]+ai[t>>8&255]+"-"+ai[t>>16&255]+ai[t>>24&255]+ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]).toLowerCase()}function ke(r,e,t){return Math.max(e,Math.min(t,r))}function Xd(r,e){return(r%e+e)%e}function O0(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function N0(r,e,t){return r!==e?(t-r)/(e-r):0}function _o(r,e,t){return(1-t)*r+t*e}function B0(r,e,t,i){return _o(r,e,1-Math.exp(-t*i))}function F0(r,e=1){return e-Math.abs(Xd(r,e*2)-e)}function U0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function k0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function z0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function H0(r,e){return r+Math.random()*(e-r)}function V0(r){return r*(.5-Math.random())}function G0(r){r!==void 0&&(Vp=r);let e=Vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W0(r){return r*go}function X0(r){return r*ha}function Y0(r){return(r&r-1)===0&&r!==0}function q0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Z0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function K0(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),_=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*h,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ci={DEG2RAD:go,RAD2DEG:ha,generateUUID:Sn,clamp:ke,euclideanModulo:Xd,mapLinear:O0,inverseLerp:N0,lerp:_o,damp:B0,pingpong:F0,smoothstep:U0,smootherstep:k0,randInt:z0,randFloat:H0,randFloatSpread:V0,seededRandom:G0,degToRad:W0,radToDeg:X0,isPowerOfTwo:Y0,ceilPowerOfTwo:q0,floorPowerOfTwo:Z0,setQuaternionFromProperEuler:K0,normalize:st,denormalize:ln},ne=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$i=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zu=new P,Gp=new $i,Fe=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],y=n[1],M=n[4],S=n[7],b=n[2],T=n[5],w=n[8];return s[0]=a*g+o*y+l*b,s[3]=a*m+o*M+l*T,s[6]=a*p+o*S+l*w,s[1]=c*g+h*y+u*b,s[4]=c*m+h*M+u*T,s[7]=c*p+h*S+u*w,s[2]=d*g+f*y+_*b,s[5]=d*m+f*M+_*T,s[8]=d*p+f*S+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hu=new Fe,Wp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){let r={enabled:!0,workingColorSpace:as,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(n.r=Zn(n.r),n.g=Zn(n.g),n.b=Zn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(n.r=ra(n.r),n.g=ra(n.g),n.b=ra(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?So:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[as]:{primaries:e,whitePoint:i,transfer:So,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),r}var qe=j0();function Zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Hs,Mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=oa("canvas")),Hs.width=e.width,Hs.height=e.height;let n=Hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Zn(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},J0=0,ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Vu(n[a].image)):s.push(Vu(n[a]))}else s=Vu(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Vu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var $0=0,Gu=new P,wi=(()=>{class r extends bn{constructor(t=r.DEFAULT_IMAGE,i=r.DEFAULT_MAPPING,n=yn,s=yn,a=Qt,o=Rr,l=Qi,c=Ai,h=r.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Sn(),this.name="",this.source=new ua(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let n=t[i];if(n===void 0){we(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){we(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=fd,r.DEFAULT_ANISOTROPY=1,r})(),yt=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,S=(f+1)/2,b=(p+1)/2,T=(h+d)/4,w=(u+g)/4,R=(_+m)/4;return M>S&&M>b?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=T/i,s=w/i):S>b?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=T/n,s=R/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=w/s,n=R/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bc=class extends bn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new wi(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends bc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Eo=class extends wi{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ec=class extends wi{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=jt,this.minFilter=jt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vl.copy(i.boundingBox)),Vl.applyMatrix4(e.matrixWorld),this.union(Vl)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Gl.subVectors(this.max,ao),Vs.subVectors(e.a,ao),Gs.subVectors(e.b,ao),Ws.subVectors(e.c,ao),dr.subVectors(Gs,Vs),fr.subVectors(Ws,Gs),$r.subVectors(Vs,Ws);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-$r.z,$r.y,dr.z,0,-dr.x,fr.z,0,-fr.x,$r.z,0,-$r.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-$r.y,$r.x,0];return!Wu(t,Vs,Gs,Ws,Gl)||(t=[1,0,0,0,1,0,0,0,1],!Wu(t,Vs,Gs,Ws,Gl))?!1:(Wl.crossVectors(dr,fr),t=[Wl.x,Wl.y,Wl.z],Wu(t,Vs,Gs,Ws,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hn=[new P,new P,new P,new P,new P,new P,new P,new P],sn=new P,Vl=new Hi,Vs=new P,Gs=new P,Ws=new P,dr=new P,fr=new P,$r=new P,ao=new P,Gl=new P,Wl=new P,Qr=new P;function Wu(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Qr.fromArray(r,s);let o=n.x*Math.abs(Qr.x)+n.y*Math.abs(Qr.y)+n.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),h=i.dot(Qr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Q0=new Hi,oo=new P,Xu=new P,xr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Q0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(oo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Xu)),this.expandByPoint(oo.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vn=new P,Yu=new P,Xl=new P,pr=new P,qu=new P,Yl=new P,Zu=new P,yr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Yu.copy(e).add(t).multiplyScalar(.5),Xl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Yu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Xl),o=pr.dot(this.direction),l=-pr.dot(Xl),c=pr.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Yu).addScaledVector(Xl,d),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let i=Vn.dot(this.direction),n=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,n,s){qu.subVectors(t,e),Yl.subVectors(i,e),Zu.crossVectors(qu,Yl);let a=this.direction.dot(Zu),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pr.subVectors(this.origin,e);let l=o*this.direction.dot(Yl.crossVectors(pr,Yl));if(l<0)return null;let c=o*this.direction.dot(qu.cross(pr));if(c<0||l+c>a)return null;let h=-o*pr.dot(Zu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class r{constructor(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,m)}set(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,i){let n=this.elements;return ki.subVectors(e,t),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),mr.crossVectors(i,ki),mr.lengthSq()===0&&(Math.abs(i.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),mr.crossVectors(i,ki)),mr.normalize(),ql.crossVectors(ki,mr),n[0]=mr.x,n[4]=ql.x,n[8]=ki.x,n[1]=mr.y,n[5]=ql.y,n[9]=ki.y,n[2]=mr.z,n[6]=ql.z,n[10]=ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],M=i[7],S=i[11],b=i[15],T=n[0],w=n[4],R=n[8],v=n[12],A=n[1],I=n[5],B=n[9],F=n[13],W=n[2],V=n[6],z=n[10],k=n[14],Z=n[3],ce=n[7],ie=n[11],ue=n[15];return s[0]=a*T+o*A+l*W+c*Z,s[4]=a*w+o*I+l*V+c*ce,s[8]=a*R+o*B+l*z+c*ie,s[12]=a*v+o*F+l*k+c*ue,s[1]=h*T+u*A+d*W+f*Z,s[5]=h*w+u*I+d*V+f*ce,s[9]=h*R+u*B+d*z+f*ie,s[13]=h*v+u*F+d*k+f*ue,s[2]=_*T+g*A+m*W+p*Z,s[6]=_*w+g*I+m*V+p*ce,s[10]=_*R+g*B+m*z+p*ie,s[14]=_*v+g*F+m*k+p*ue,s[3]=y*T+M*A+S*W+b*Z,s[7]=y*w+M*I+S*V+b*ce,s[11]=y*R+M*B+S*z+b*ie,s[15]=y*v+M*F+S*k+b*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],y=l*f-c*d,M=o*f-c*u,S=o*d-l*u,b=a*f-c*h,T=a*d-l*h,w=a*u-o*h;return t*(g*y-m*M+p*S)-i*(_*y-m*b+p*T)+n*(_*M-g*b+p*w)-s*(_*S-g*T+m*w)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,M=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,S=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,T=t*y+i*M+n*S+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=y*w,e[1]=(g*d*s-u*m*s-g*n*f+i*m*f+u*n*p-i*d*p)*w,e[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*p+i*l*p)*w,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*w,e[4]=M*w,e[5]=(h*m*s-_*d*s+_*n*f-t*m*f-h*n*p+t*d*p)*w,e[6]=(_*l*s-a*m*s-_*n*c+t*m*c+a*n*p-t*l*p)*w,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*w,e[8]=S*w,e[9]=(_*u*s-h*g*s-_*i*f+t*g*f+h*i*p-t*u*p)*w,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*p+t*o*p)*w,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*w,e[12]=b*w,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*w,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*m-t*o*m)*w,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*w,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,m=a*u,p=o*u,y=l*c,M=l*h,S=l*u,b=i.x,T=i.y,w=i.z;return n[0]=(1-(g+p))*b,n[1]=(f+S)*b,n[2]=(_-M)*b,n[3]=0,n[4]=(f-S)*T,n[5]=(1-(d+p))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(_+M)*w,n[9]=(m-y)*w,n[10]=(1-(d+g))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Xs.set(n[0],n[1],n[2]).length(),a=Xs.set(n[4],n[5],n[6]).length(),o=Xs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),an.copy(this);let c=1/s,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=cn,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),_,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===cn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Mo)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=cn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),_,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===cn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Mo)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xs=new P,an=new gt,ev=new P(0,0,0),tv=new P(1,1,1),mr=new P,ql=new P,ki=new P,Yp=new gt,qp=new $i,hn=(()=>{class r{constructor(t=0,i=0,n=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,s=this._order){return this._x=t,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){let s=t.elements,a=s[0],o=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],f=s[6],_=s[10];switch(i){case"XYZ":this._y=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return Yp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yp,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return qp.setFromEuler(this),this.setFromQuaternion(qp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),To=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},iv=0,Zp=new P,Ys=new $i,Gn=new gt,Zl=new P,lo=new P,nv=new P,rv=new $i,Kp=new P(1,0,0),jp=new P(0,1,0),Jp=new P(0,0,1),$p={type:"added"},sv={type:"removed"},qs={type:"childadded",child:null},Ku={type:"childremoved",child:null},_i=(()=>{class r extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new P,i=new hn,n=new $i,s=new P(1,1,1);function a(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ys.setFromAxisAngle(t,i),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,i){return Ys.setFromAxisAngle(t,i),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(Kp,t)}rotateY(t){return this.rotateOnAxis(jp,t)}rotateZ(t){return this.rotateOnAxis(Jp,t)}translateOnAxis(t,i){return Zp.copy(t).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Kp,t)}translateY(t){return this.translateOnAxis(jp,t)}translateZ(t){return this.translateOnAxis(Jp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Zl.copy(t):Zl.set(t,i,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(lo,Zl,this.up):Gn.lookAt(Zl,lo,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Gn),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($p),qs.child=t,this.dispatchEvent(qs),qs.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sv),Ku.child=t,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($p),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,i);if(o!==void 0)return o}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,nv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,rv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Nn(Yt({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Yt({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(a(t.animations,c))}}if(i){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),_=o(t.animations),g=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}}return r.DEFAULT_UP=new P(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),on=new P,Wn=new P,ju=new P,Xn=new P,Zs=new P,Ks=new P,Qp=new P,Ju=new P,$u=new P,Qu=new P,ed=new yt,td=new yt,id=new yt,qn=class r{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),on.subVectors(e,t),n.cross(on);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){on.subVectors(n,t),Wn.subVectors(i,t),ju.subVectors(e,t);let a=on.dot(on),o=on.dot(Wn),l=on.dot(ju),c=Wn.dot(Wn),h=Wn.dot(ju),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return ed.setScalar(0),td.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,i),id.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ed,s.x),a.addScaledVector(td,s.y),a.addScaledVector(id,s.z),a}static isFrontFacing(e,t,i,n){return on.subVectors(i,t),Wn.subVectors(e,t),on.cross(Wn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),on.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Zs.subVectors(n,i),Ks.subVectors(s,i),Ju.subVectors(e,i);let l=Zs.dot(Ju),c=Ks.dot(Ju);if(l<=0&&c<=0)return t.copy(i);$u.subVectors(e,n);let h=Zs.dot($u),u=Ks.dot($u);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Zs,a);Qu.subVectors(e,s);let f=Zs.dot(Qu),_=Ks.dot(Qu);if(_>=0&&f<=_)return t.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ks,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Qp.subVectors(s,n),o=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(Qp,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Zs,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=qe.workingColorSpace){if(e=Xd(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=nd(a,s,e+1/3),this.g=nd(a,s,e),this.b=nd(a,s,e-1/3)}return qe.colorSpaceToWorking(this,n),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=eg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return qe.workingToColorSpace(oi.copy(this),e),Math.round(ke(oi.r*255,0,255))*65536+Math.round(ke(oi.g*255,0,255))*256+Math.round(ke(oi.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(oi.copy(this),t);let i=oi.r,n=oi.g,s=oi.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(oi.copy(this),t),e.r=oi.r,e.g=oi.g,e.b=oi.b,e}getStyle(e=Ut){qe.workingToColorSpace(oi.copy(this),e);let t=oi.r,i=oi.g,n=oi.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(Kl);let i=_o(gr.h,Kl.h,t),n=_o(gr.s,Kl.s,t),s=_o(gr.l,Kl.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new Le;Le.NAMES=eg;var av=0,kt=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=ns,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==vc&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ao=class extends kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new P,jl=new ne,ov=0,Ei=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}};var wo=class extends Ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Co=class extends Ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends Ei{constructor(e,t,i){super(new Float32Array(e),t,i)}},lv=0,ji=new gt,rd=new _i,js=new P,zi=new Hi,co=new Hi,Kt=new P,zt=class r extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Co:wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,i){return ji.makeTranslation(e,t,i),this.applyMatrix4(ji),this}scale(e,t,i){return ji.makeScale(e,t,i),this.applyMatrix4(ji),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];zi.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,zi.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,zi.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(zi.min),this.boundingBox.expandByPoint(zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(zi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];co.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(zi.min,co.min),zi.expandByPoint(Kt),Kt.addVectors(zi.max,co.max),zi.expandByPoint(Kt)):(zi.expandByPoint(co.min),zi.expandByPoint(co.max))}zi.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Kt.fromBufferAttribute(o,c),l&&(js.fromBufferAttribute(e,c),Kt.add(js)),n=Math.max(n,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,d=new ne,f=new ne,_=new ne,g=new P,m=new P;function p(R,v,A){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,A),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),o[R].add(g),o[v].add(g),o[A].add(g),l[R].add(m),l[v].add(m),l[A].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,v=y.length;R<v;++R){let A=y[R],I=A.start,B=A.count;for(let F=I,W=I+B;F<W;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new P,S=new P,b=new P,T=new P;function w(R){b.fromBufferAttribute(n,R),T.copy(b);let v=o[R];M.copy(v),M.sub(b.multiplyScalar(b.dot(v))).normalize(),S.crossVectors(T,v);let I=S.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,I)}for(let R=0,v=y.length;R<v;++R){let A=y[R],I=A.start,B=A.count;for(let F=I,W=I+B;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Ei(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},em=new gt,es=new yr,Jl=new xr,tm=new P,$l=new P,Ql=new P,ec=new P,sd=new P,tc=new P,im=new P,ic=new P,Ge=class extends _i{constructor(e=new zt,t=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(sd.fromBufferAttribute(u,e),a?tc.addScaledVector(sd,h):tc.addScaledVector(sd.sub(t),h))}t.add(tc)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(Jl.containsPoint(es.origin)===!1&&(es.intersectSphere(Jl,tm)===null||es.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),es.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,b=M;S<b;S+=3){let T=o.getX(S),w=o.getX(S+1),R=o.getX(S+2);n=nc(this,p,e,i,c,h,u,T,w,R),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);n=nc(this,a,e,i,c,h,u,y,M,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,b=M;S<b;S+=3){let T=S,w=S+1,R=S+2;n=nc(this,p,e,i,c,h,u,T,w,R),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=m,M=m+1,S=m+2;n=nc(this,a,e,i,c,h,u,y,M,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function cv(r,e,t,i,n,s,a,o){let l;if(e.side===vi?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Kn,o),l===null)return null;ic.copy(o),ic.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ic);return c<t.near||c>t.far?null:{distance:c,point:ic.clone(),object:r}}function nc(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,$l),r.getVertexPosition(l,Ql),r.getVertexPosition(c,ec);let h=cv(r,e,t,i,$l,Ql,ec,im);if(h){let u=new P;qn.getBarycoord(im,$l,Ql,ec,u),n&&(h.uv=qn.getInterpolatedAttribute(n,o,l,c,u,new ne)),s&&(h.uv1=qn.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};qn.getNormal($l,Ql,ec,d.normal),h.face=d,h.barycoord=u}return h}var da=class r extends zt{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function _(g,m,p,y,M,S,b,T,w,R,v){let A=S/w,I=b/R,B=S/2,F=b/2,W=T/2,V=w+1,z=R+1,k=0,Z=0,ce=new P;for(let ie=0;ie<z;ie++){let ue=ie*I-F;for(let Oe=0;Oe<V;Oe++){let Be=Oe*A-B;ce[g]=Be*y,ce[m]=ue*M,ce[p]=W,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Oe/w),u.push(1-ie/R),k+=1}}for(let ie=0;ie<R;ie++)for(let ue=0;ue<w;ue++){let Oe=d+ue+V*ie,Be=d+ue+V*(ie+1),Ze=d+(ue+1)+V*(ie+1),Ke=d+(ue+1)+V*ie;l.push(Oe,Be,Ke),l.push(Be,Ze,Ke),Z+=6}o.addGroup(f,Z,v),f+=Z,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ps(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function hi(r){let e={};for(let t=0;t<r.length;t++){let i=ps(r[t]);for(let n in i)e[n]=i[n]}return e}function hv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var tg={clone:ps,merge:hi},uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=hv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ro=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_r=new P,nm=new ne,rm=new ne,li=class extends Ro{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,nm,rm),t.subVectors(rm,nm)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,$s=1,Tc=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new li(Js,$s,e,t);n.layers=this.layers,this.add(n);let s=new li(Js,$s,e,t);s.layers=this.layers,this.add(s);let a=new li(Js,$s,e,t);a.layers=this.layers,this.add(a);let o=new li(Js,$s,e,t);o.layers=this.layers,this.add(o);let l=new li(Js,$s,e,t);l.layers=this.layers,this.add(l);let c=new li(Js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Po=class extends wi{constructor(e=[],t=Cr,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Io=class extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Po(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new da(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:En});s.uniforms.tEquirect.value=t;let a=new Ge(n,s),o=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Qt),new Tc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Bt=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},fv={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Lo=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ac=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mi=new P,Do=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyMatrix4(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyNormalMatrix(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.transformDirection(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pa=class extends kt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,ho=new P,ea=new P,ta=new P,ia=new ne,uo=new ne,ig=new gt,rc=new P,fo=new P,sc=new P,sm=new ne,ad=new ne,am=new ne,Oo=class extends _i{constructor(e=new pa){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ac(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new Do(i,3,0,!1)),Qs.setAttribute("uv",new Do(i,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),ig.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ta.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ta.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ac(rc.set(-.5,-.5,0),ta,a,ea,n,s),ac(fo.set(.5,-.5,0),ta,a,ea,n,s),ac(sc.set(.5,.5,0),ta,a,ea,n,s),sm.set(0,0),ad.set(1,0),am.set(1,1);let o=e.ray.intersectTriangle(rc,fo,sc,!1,ho);if(o===null&&(ac(fo.set(-.5,.5,0),ta,a,ea,n,s),ad.set(0,1),o=e.ray.intersectTriangle(rc,sc,fo,!1,ho),o===null))return;let l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||t.push({distance:l,point:ho.clone(),uv:qn.getInterpolation(ho,rc,fo,sc,sm,ad,am,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ac(r,e,t,i,n,s){ia.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(uo.x=s*ia.x-n*ia.y,uo.y=n*ia.x+s*ia.y):uo.copy(ia),r.copy(e),r.x+=uo.x,r.y+=uo.y,r.applyMatrix4(ig)}var wc=class extends wi{constructor(e=null,t=1,i=1,n,s,a,o,l,c=jt,h=jt,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var od=new P,pv=new P,mv=new Fe,Ji=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=od.subVectors(i,t).cross(pv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(od),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mv.getNormalMatrix(e),n=this.coplanarPoint(od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new xr,gv=new ne(.5,.5),oc=new P,ma=class{constructor(e=new Ji,t=new Ji,i=new Ji,n=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],y=s[12],M=s[13],S=s[14],b=s[15];if(n[0].setComponents(c-a,f-h,p-_,b-y).normalize(),n[1].setComponents(c+a,f+h,p+_,b+y).normalize(),n[2].setComponents(c+o,f+u,p+g,b+M).normalize(),n[3].setComponents(c-o,f-u,p-g,b-M).normalize(),i)n[4].setComponents(l,d,m,S).normalize(),n[5].setComponents(c-l,f-d,p-m,b-S).normalize();else if(n[4].setComponents(c-l,f-d,p-m,b-S).normalize(),t===cn)n[5].setComponents(c+l,f+d,p+m,b+S).normalize();else if(t===Mo)n[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=gv.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(oc.x=n.normal.x>0?e.max.x:e.min.x,oc.y=n.normal.y>0?e.max.y:e.min.y,oc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sr=class extends kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cc=new P,Rc=new P,om=new gt,po=new yr,lc=new xr,ld=new P,lm=new P,Pc=class extends _i{constructor(e=new zt,t=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Cc.fromBufferAttribute(t,n-1),Rc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Cc.distanceTo(Rc);e.setAttribute("lineDistance",new tt(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(n),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;om.copy(n).invert(),po.copy(e.ray).applyMatrix4(om);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),y=h.getX(g+1),M=cc(this,e,po,l,p,y,g);M&&t.push(M)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=cc(this,e,po,l,g,m,_-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=cc(this,e,po,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=cc(this,e,po,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function cc(r,e,t,i,n,s,a){let o=r.geometry.attributes.position;if(Cc.fromBufferAttribute(o,n),Rc.fromBufferAttribute(o,s),t.distanceSqToSegment(Cc,Rc,ld,lm)>i)return;ld.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ld);if(!(c<e.near||c>e.far))return{distance:c,point:lm.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var cm=new P,hm=new P,ga=class extends Pc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)cm.fromBufferAttribute(t,n),hm.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+cm.distanceTo(hm);e.setAttribute("lineDistance",new tt(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jn=class extends kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},um=new gt,vd=new yr,hc=new xr,uc=new P,os=class extends _i{constructor(e=new zt,t=new jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(n),hc.radius+=s,e.ray.intersectsSphere(hc)===!1)return;um.copy(n).invert(),vd.copy(e.ray).applyMatrix4(um);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);uc.fromBufferAttribute(u,m),dm(uc,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)uc.fromBufferAttribute(u,_),dm(uc,_,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function dm(r,e,t,i,n,s,a){let o=vd.distanceSqToPoint(r);if(o<t){let l=new P;vd.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ls=class extends wi{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mr=class extends wi{constructor(e,t,i=dn,n,s,a,o=jt,l=jt,c,h=Mn,u=1){if(h!==Mn&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ic=class extends Mr{constructor(e,t=dn,i=Cr,n,s,a=jt,o=jt,l,c=Mn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},No=class extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var cs=class r extends zt{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],_=0,g=[],m=i/2,p=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function y(){let S=new P,b=new P,T=0,w=(t-e)/i;for(let R=0;R<=s;R++){let v=[],A=R/s,I=A*(t-e)+e;for(let B=0;B<=n;B++){let F=B/n,W=F*l+o,V=Math.sin(W),z=Math.cos(W);b.x=I*V,b.y=-A*i+m,b.z=I*z,u.push(b.x,b.y,b.z),S.set(V,w,z).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-A),v.push(_++)}g.push(v)}for(let R=0;R<n;R++)for(let v=0;v<s;v++){let A=g[v][R],I=g[v+1][R],B=g[v+1][R+1],F=g[v][R+1];(e>0||v!==0)&&(h.push(A,I,F),T+=3),(t>0||v!==s-1)&&(h.push(I,B,F),T+=3)}c.addGroup(p,T,0),p+=T}function M(S){let b=_,T=new ne,w=new P,R=0,v=S===!0?e:t,A=S===!0?1:-1;for(let B=1;B<=n;B++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),_++;let I=_;for(let B=0;B<=n;B++){let W=B/n*l+o,V=Math.cos(W),z=Math.sin(W);w.x=v*z,w.y=m*A,w.z=v*V,u.push(w.x,w.y,w.z),d.push(0,A,0),T.x=V*.5+.5,T.y=z*.5*A+.5,f.push(T.x,T.y),_++}for(let B=0;B<n;B++){let F=b+B,W=I+B;S===!0?h.push(W,W+1,F):h.push(W+1,W,F),R+=3}c.addGroup(p,R,S===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ne:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,n=[],s=[],a=[],o=new P,l=new gt;for(let f=0;f<=e;f++){let _=f/e;n[f]=this.getTangentAt(_,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ke(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(ke(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(n[_],f*_)),a[_].crossVectors(n[_],s[_])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_a=class extends Gi{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let i=t,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lc=class extends _a{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qd(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+i*o}}}var dc=new P,cd=new qd,hd=new qd,ud=new qd,Dc=class extends Gi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(dc.subVectors(n[0],n[1]).add(n[0]),c=dc);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(dc.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=dc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),cd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),hd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),ud.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),hd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ud.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(cd.calc(l),hd.calc(l),ud.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fm(r,e,t,i,n){let s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function _v(r,e){let t=1-r;return t*t*e}function vv(r,e){return 2*(1-r)*r*e}function xv(r,e){return r*r*e}function vo(r,e,t,i){return _v(r,e)+vv(r,t)+xv(r,i)}function yv(r,e){let t=1-r;return t*t*t*e}function Sv(r,e){let t=1-r;return 3*t*t*r*e}function Mv(r,e){return 3*(1-r)*r*r*e}function bv(r,e){return r*r*r*e}function xo(r,e,t,i,n){return yv(r,e)+Sv(r,t)+Mv(r,i)+bv(r,n)}var Bo=class extends Gi{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(xo(e,n.x,s.x,a.x,o.x),xo(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oc=class extends Gi{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(xo(e,n.x,s.x,a.x,o.x),xo(e,n.y,s.y,a.y,o.y),xo(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends Gi{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends Gi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends Gi{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(vo(e,n.x,s.x,a.x),vo(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends Gi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(vo(e,n.x,s.x,a.x),vo(e,n.y,s.y,a.y),vo(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(fm(o,l.x,c.x,h.x,u.x),fm(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},pm=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:Dc,CubicBezierCurve:Bo,CubicBezierCurve3:Oc,EllipseCurve:_a,LineCurve:Fo,LineCurve3:Nc,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Bc,SplineCurve:ko}),Fc=class extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pm[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new pm[n.type]().fromJSON(n))}return this}},zo=class extends Fc{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Fo(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Uo(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Bo(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ko(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new _a(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},va=class extends zo{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new zo().fromJSON(n))}return this}};function Ev(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=ng(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Rv(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let d=t;d<n;d+=t){let f=r[d],_=r[d+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>u&&(u=_)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ho(s,a,t,o,l,c,0),a}function ng(r,e,t,i,n){let s;if(n===zv(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=mm(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=mm(a/i|0,r[a],r[a+1],s);return s&&xa(s,s.next)&&(Go(s),s=s.next),s}function hs(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(xa(t,t.next)||xt(t.prev,t,t.next)===0)){if(Go(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ho(r,e,t,i,n,s,a){if(!r)return;!a&&s&&Ov(r,i,n,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Av(r,i,n,s):Tv(r)){e.push(l.i,r.i,c.i),Go(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=wv(hs(r),e),Ho(r,e,t,i,n,s,2)):a===2&&Cv(r,e,t,i,n,s):Ho(hs(r),e,t,i,n,s,1);break}}}function Tv(r){let e=r.prev,t=r,i=r.next;if(xt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,s,a),u=Math.min(o,l,c),d=Math.max(n,s,a),f=Math.max(o,l,c),_=i.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&mo(n,o,s,l,a,c,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Av(r,e,t,i){let n=r.prev,s=r,a=r.next;if(xt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,f=Math.min(o,l,c),_=Math.min(h,u,d),g=Math.max(o,l,c),m=Math.max(h,u,d),p=xd(f,_,e,t,i),y=xd(g,m,e,t,i),M=r.prevZ,S=r.nextZ;for(;M&&M.z>=p&&S&&S.z<=y;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==n&&M!==a&&mo(o,h,l,u,c,d,M.x,M.y)&&xt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=f&&S.x<=g&&S.y>=_&&S.y<=m&&S!==n&&S!==a&&mo(o,h,l,u,c,d,S.x,S.y)&&xt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==n&&M!==a&&mo(o,h,l,u,c,d,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=y;){if(S.x>=f&&S.x<=g&&S.y>=_&&S.y<=m&&S!==n&&S!==a&&mo(o,h,l,u,c,d,S.x,S.y)&&xt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function wv(r,e){let t=r;do{let i=t.prev,n=t.next.next;!xa(i,n)&&sg(i,t,t.next,n)&&Vo(i,n)&&Vo(n,i)&&(e.push(i.i,t.i,n.i),Go(t),Go(t.next),t=r=n),t=t.next}while(t!==r);return hs(t)}function Cv(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fv(a,o)){let l=ag(a,o);a=hs(a,a.next),l=hs(l,l.next),Ho(a,e,t,i,n,s,0),Ho(l,e,t,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Rv(r,e,t,i){let n=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:r.length,c=ng(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Bv(c))}n.sort(Pv);for(let s=0;s<n.length;s++)t=Iv(n[s],t);return t}function Pv(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let i=(r.next.y-r.y)/(r.next.x-r.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function Iv(r,e){let t=Lv(r,e);if(!t)return e;let i=ag(t,r);return hs(i,i.next),hs(t,t.next)}function Lv(r,e){let t=e,i=r.x,n=r.y,s=-1/0,a;if(xa(r,t))return t;do{if(xa(r,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&rg(n<c?i:s,n,l,c,n<c?s:i,n,t.x,t.y)){let u=Math.abs(n-t.y)/(i-t.x);Vo(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Dv(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Dv(r,e){return xt(r.prev,r,e.prev)<0&&xt(e.next,r,r.next)<0}function Ov(r,e,t,i){let n=r;do n.z===0&&(n.z=xd(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Nv(n)}function Nv(r){let e,t=1;do{let i=r,n;r=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,t*=2}while(e>1);return r}function xd(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Bv(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function rg(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function mo(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&rg(r,e,t,i,n,s,a,o)}function Fv(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Uv(r,e)&&(Vo(r,e)&&Vo(e,r)&&kv(r,e)&&(xt(r.prev,r,e.prev)||xt(r,e.prev,e))||xa(r,e)&&xt(r.prev,r,r.next)>0&&xt(e.prev,e,e.next)>0)}function xt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function xa(r,e){return r.x===e.x&&r.y===e.y}function sg(r,e,t,i){let n=pc(xt(r,e,t)),s=pc(xt(r,e,i)),a=pc(xt(t,i,r)),o=pc(xt(t,i,e));return!!(n!==s&&a!==o||n===0&&fc(r,t,e)||s===0&&fc(r,i,e)||a===0&&fc(t,r,i)||o===0&&fc(t,e,i))}function fc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function pc(r){return r>0?1:r<0?-1:0}function Uv(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&sg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Vo(r,e){return xt(r.prev,r,r.next)<0?xt(r,e,r.next)>=0&&xt(r,r.prev,e)>=0:xt(r,e,r.prev)<0||xt(r,r.next,e)<0}function kv(r,e){let t=r,i=!1,n=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&n<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function ag(r,e){let t=yd(r.i,r.x,r.y),i=yd(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function mm(r,e,t,i){let n=yd(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Go(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yd(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zv(r,e,t,i){let n=0;for(let s=e,a=t-i;s<t;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var Sd=class{static triangulate(e,t,i=2){return Ev(e,t,i)}},sa=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];gm(e),_m(i,e);let a=e.length;t.forEach(gm);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,_m(i,t[l]);let o=Sd.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function gm(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function _m(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var br=class r extends zt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let M=0;M<c;M++){let S=M*u-s;_.push(S,-y,0),g.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let M=y+c*p,S=y+c*(p+1),b=y+1+c*(p+1),T=y+1+c*p;f.push(M,S,T),f.push(S,b,T)}this.setIndex(f),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ya=class r extends zt{constructor(e=new va([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new tt(n,3)),this.setAttribute("normal",new tt(s,3)),this.setAttribute("uv",new tt(a,2));function c(h){let u=n.length/3,d=h.extractPoints(t),f=d.shape,_=d.holes;sa.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){let y=_[m];sa.isClockWise(y)===!0&&(_[m]=y.reverse())}let g=sa.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){let y=_[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];n.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=g.length;m<p;m++){let y=g[m],M=y[0]+u,S=y[1]+u,b=y[2]+u;i.push(M,S,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hv(t,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}};function Hv(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){let n=r[t];e.shapes.push(n.uuid)}else e.shapes.push(r.uuid);return e}var Wo=class r extends zt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){let y=[],M=p/i,S=0;p===0&&a===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){let T=b/t;u.x=-e*Math.cos(n+T*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(n+T*s)*Math.sin(a+M*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+S,1-M),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let M=h[p][y+1],S=h[p][y],b=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(M,S,T),(p!==i-1||l<Math.PI)&&f.push(S,b,T)}this.setIndex(f),this.setAttribute("position",new tt(_,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Uc=class extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_t=class extends kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xo=class extends kt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var kc=class extends kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var us=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends us{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case md:s=e,o=2*t-i;break;case gd:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case md:a=e,l=2*i-t;break;case gd:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,S=f*m-f*g;for(let b=0;b!==o;++b)s[b]=p*a[h+b]+y*a[c+b]+M*a[l+b]+S*a[u+b];return s}},Vc=class extends us{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Gc=class extends us{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Wi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mc(t,this.TimeBufferType),this.values=mc(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mc(e.times,Array),values:mc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case yc:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&D0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===gc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Wi.prototype.ValueTypeName="";Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=yc;var Er=class extends Wi{constructor(e,t,i){super(e,t,i)}};Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=yo;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Wi{constructor(e,t,i,n){super(e,t,i,n)}};Wc.prototype.ValueTypeName="color";var Xc=class extends Wi{constructor(e,t,i,n){super(e,t,i,n)}};Xc.prototype.ValueTypeName="number";var Yc=class extends us{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)$i.slerpFlat(s,0,a,c-o,a,c,l);return s}},Yo=class extends Wi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Wi{constructor(e,t,i){super(e,t,i)}};Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=yo;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Wi{constructor(e,t,i,n){super(e,t,i,n)}};qc.prototype.ValueTypeName="vector";var aa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Zc=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},og=new Zc,wa=(()=>{class r{constructor(t){this.manager=t!==void 0?t:og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let n=this;return new Promise(function(s,a){n.load(t,s,i,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return r.DEFAULT_MATERIAL_NAME="__DEFAULT",r})(),Yn={},Md=class extends Error{constructor(e,t){super(e),this.response=t}},qo=class extends wa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=aa.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:i,onError:n});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Yn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,g=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:M,value:S})=>{if(M)p.close();else{g+=S.byteLength;let b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let T=0,w=h.length;T<w;T++){let R=h[T];R.onProgress&&R.onProgress(b)}p.enqueue(S),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Md(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{aa.add(`file:${e}`,c);let h=Yn[e];delete Yn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Yn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var na=new WeakMap,Kc=class extends wa{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=aa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=na.get(a);u===void 0&&(u=[],na.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=oa("img");function l(){h(),t&&t(this);let u=na.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}na.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),aa.remove(`image:${e}`);let d=na.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}na.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),aa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Jn=class extends wa{constructor(e){super(e)}load(e,t,i,n){let s=new wi,a=new Kc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Zo=class extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var dd=new gt,vm=new P,xm=new P,bd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(vm),xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xm),t.updateMatrixWorld(),dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Sa=class extends Ro{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ed=class extends bd{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new Ed}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ko=class extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var jc=class extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zd="\\[\\]\\.:\\/",Vv=new RegExp("["+Zd+"]","g"),Kd="[^"+Zd+"]",Gv="[^"+Zd.replace("\\.","")+"]",Wv=/((?:WC+[\/:])*)/.source.replace("WC",Kd),Xv=/(WCOD+)?/.source.replace("WCOD",Gv),Yv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kd),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kd),Zv=new RegExp("^"+Wv+Xv+Yv+qv+"$"),Kv=["material","materials","bones","map"],Td=class{constructor(e,t,i){let n=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class r{constructor(t,i,n){this.path=i,this.parsedPath=n||r.parseTrackName(i),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,i,n):new r(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vv,"")}static parseTrackName(t){let i=Zv.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);Kv.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===i||l.uuid===i)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)t[i++]=n[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,n=i.objectName,s=i.propertyName,a=i.propertyIndex;if(t||(t=r.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=i.objectIndex;switch(n){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=Td,r})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JA=new Float32Array(1);var ba=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jo=class extends bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function jd(r,e,t,i){let n=jv(i);switch(t){case zd:return r*e;case Vd:return r*e/n.components*n.byteLength;case dh:return r*e/n.components*n.byteLength;case fs:return r*e*2/n.components*n.byteLength;case fh:return r*e*2/n.components*n.byteLength;case Hd:return r*e*3/n.components*n.byteLength;case Qi:return r*e*4/n.components*n.byteLength;case ph:return r*e*4/n.components*n.byteLength;case tl:case il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nl:case rl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:case vh:return Math.max(r,16)*Math.max(e,8)/4;case mh:case _h:return Math.max(r,8)*Math.max(e,8)/2;case xh:case yh:case Mh:case bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sh:case Eh:case Th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zh:case Hh:case Vh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xh:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jv(r){switch(r){case Ai:case Bd:return{byteLength:1,components:1};case Ta:case Fd:case Tn:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case dn:case ch:case fn:return{byteLength:4,components:1};case Ud:case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);function Pg(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Jv(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var $v=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
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
#endif`,jx=`uniform sampler2D dfgLUT;
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
}`,Jx=`
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yy=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,by=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
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
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$y=`uniform sampler2D t2D;
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
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
}`,rS=`#if DEPTH_PACKING == 3200
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
}`,sS=`#define DISTANCE
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
}`,aS=`#define DISTANCE
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
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
}`,hS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#define LAMBERT
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
}`,pS=`#define LAMBERT
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
}`,mS=`#define MATCAP
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
}`,gS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,vS=`#define NORMAL
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
}`,xS=`#define PHONG
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
}`,yS=`#define PHONG
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
}`,SS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,bS=`#define TOON
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
}`,ES=`#define TOON
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
}`,TS=`uniform float size;
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
}`,AS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,CS=`uniform vec3 color;
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
}`,RS=`uniform float rotation;
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
}`,PS=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:$v,alphahash_pars_fragment:Qv,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:ix,alphatest_pars_fragment:nx,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ax,batching_vertex:ox,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:hx,iridescence_fragment:ux,bumpmap_pars_fragment:dx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:vx,color_pars_vertex:xx,color_vertex:yx,common:Sx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:bx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Tx,emissivemap_fragment:Ax,emissivemap_pars_fragment:wx,colorspace_fragment:Cx,colorspace_pars_fragment:Rx,envmap_fragment:Px,envmap_common_pars_fragment:Ix,envmap_pars_fragment:Lx,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Wx,envmap_vertex:Ox,fog_vertex:Nx,fog_pars_vertex:Bx,fog_fragment:Fx,fog_pars_fragment:Ux,gradientmap_pars_fragment:kx,lightmap_pars_fragment:zx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:Yx,lights_phong_fragment:qx,lights_phong_pars_fragment:Zx,lights_physical_fragment:Kx,lights_physical_pars_fragment:jx,lights_fragment_begin:Jx,lights_fragment_maps:$x,lights_fragment_end:Qx,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ny,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:ay,map_particle_pars_fragment:oy,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:hy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:fy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:_y,normal_pars_vertex:vy,normal_vertex:xy,normalmap_pars_fragment:yy,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:by,iridescence_pars_fragment:Ey,opaque_fragment:Ty,packing:Ay,premultiplied_alpha_fragment:wy,project_vertex:Cy,dithering_fragment:Ry,dithering_pars_fragment:Py,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Oy,shadowmap_vertex:Ny,shadowmask_pars_fragment:By,skinbase_vertex:Fy,skinning_pars_vertex:Uy,skinning_vertex:ky,skinnormal_vertex:zy,specularmap_fragment:Hy,specularmap_pars_fragment:Vy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:Yy,uv_pars_fragment:qy,uv_pars_vertex:Zy,uv_vertex:Ky,worldpos_vertex:jy,background_vert:Jy,background_frag:$y,backgroundCube_vert:Qy,backgroundCube_frag:eS,cube_vert:tS,cube_frag:iS,depth_vert:nS,depth_frag:rS,distance_vert:sS,distance_frag:aS,equirect_vert:oS,equirect_frag:lS,linedashed_vert:cS,linedashed_frag:hS,meshbasic_vert:uS,meshbasic_frag:dS,meshlambert_vert:fS,meshlambert_frag:pS,meshmatcap_vert:mS,meshmatcap_frag:gS,meshnormal_vert:_S,meshnormal_frag:vS,meshphong_vert:xS,meshphong_frag:yS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:bS,meshtoon_frag:ES,points_vert:TS,points_frag:AS,shadow_vert:wS,shadow_frag:CS,sprite_vert:RS,sprite_frag:PS},he={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},wn={basic:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:hi([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:hi([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:hi([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:hi([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:hi([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:hi([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:hi([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:hi([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:hi([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:hi([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:hi([he.lights,he.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};wn.physical={uniforms:hi([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var jh={r:0,b:0,g:0},ms=new hn,IS=new gt;function LS(r,e,t,i,n,s,a){let o=new Le(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function g(M){let S=!1,b=_(M);b===null?p(o,l):b&&b.isColor&&(p(b,1),S=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){let b=_(S);b&&(b.isCubeTexture||b.mapping===Qo)?(h===void 0&&(h=new Ge(new da(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ps(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),ms.copy(S.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(ms)),h.material.toneMapped=qe.getTransfer(b.colorSpace)!==et,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ge(new br(2,2),new Vi({name:"BackgroundMaterial",uniforms:ps(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(b.colorSpace)!==et,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(jh,Yd(r)),i.buffers.color.setClear(jh.r,jh.g,jh.b,S,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:g,addToRenderList:m,dispose:y}}function DS(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(A,I,B,F,W){let V=!1,z=u(F,B,I);s!==z&&(s=z,c(s.object)),V=f(A,F,B,W),V&&_(A,F,B,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(A,I,B,F),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return r.createVertexArray()}function c(A){return r.bindVertexArray(A)}function h(A){return r.deleteVertexArray(A)}function u(A,I,B){let F=B.wireframe===!0,W=i[A.id];W===void 0&&(W={},i[A.id]=W);let V=W[I.id];V===void 0&&(V={},W[I.id]=V);let z=V[F];return z===void 0&&(z=d(l()),V[F]=z),z}function d(A){let I=[],B=[],F=[];for(let W=0;W<t;W++)I[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:F,object:A,attributes:{},index:null}}function f(A,I,B,F){let W=s.attributes,V=I.attributes,z=0,k=B.getAttributes();for(let Z in k)if(k[Z].location>=0){let ie=W[Z],ue=V[Z];if(ue===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function _(A,I,B,F){let W={},V=I.attributes,z=0,k=B.getAttributes();for(let Z in k)if(k[Z].location>=0){let ie=V[Z];ie===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));let ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),W[Z]=ue,z++}s.attributes=W,s.attributesNum=z,s.index=F}function g(){let A=s.newAttributes;for(let I=0,B=A.length;I<B;I++)A[I]=0}function m(A){p(A,0)}function p(A,I){let B=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;B[A]=1,F[A]===0&&(r.enableVertexAttribArray(A),F[A]=1),W[A]!==I&&(r.vertexAttribDivisor(A,I),W[A]=I)}function y(){let A=s.newAttributes,I=s.enabledAttributes;for(let B=0,F=I.length;B<F;B++)I[B]!==A[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function M(A,I,B,F,W,V,z){z===!0?r.vertexAttribIPointer(A,I,B,W,V):r.vertexAttribPointer(A,I,B,F,W,V)}function S(A,I,B,F){g();let W=F.attributes,V=B.getAttributes(),z=I.defaultAttributeValues;for(let k in V){let Z=V[k];if(Z.location>=0){let ce=W[k];if(ce===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){let ie=ce.normalized,ue=ce.itemSize,Oe=e.get(ce);if(Oe===void 0)continue;let Be=Oe.buffer,Ze=Oe.type,Ke=Oe.bytesPerElement,q=Ze===r.INT||Ze===r.UNSIGNED_INT||ce.gpuType===ch;if(ce.isInterleavedBufferAttribute){let J=ce.data,ge=J.stride,Ue=ce.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)p(Z.location+ye,J.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<Z.locationSize;ye++)m(Z.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let ye=0;ye<Z.locationSize;ye++)M(Z.location+ye,ue/Z.locationSize,Ze,ie,ge*Ke,(Ue+ue/Z.locationSize*ye)*Ke,q)}else{if(ce.isInstancedBufferAttribute){for(let J=0;J<Z.locationSize;J++)p(Z.location+J,ce.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let J=0;J<Z.locationSize;J++)m(Z.location+J);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let J=0;J<Z.locationSize;J++)M(Z.location+J,ue/Z.locationSize,Ze,ie,ue*Ke,ue/Z.locationSize*J*Ke,q)}}else if(z!==void 0){let ie=z[k];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(Z.location,ie);break;case 3:r.vertexAttrib3fv(Z.location,ie);break;case 4:r.vertexAttrib4fv(Z.location,ie);break;default:r.vertexAttrib1fv(Z.location,ie)}}}}y()}function b(){R();for(let A in i){let I=i[A];for(let B in I){let F=I[B];for(let W in F)h(F[W].object),delete F[W];delete I[B]}delete i[A]}}function T(A){if(i[A.id]===void 0)return;let I=i[A.id];for(let B in I){let F=I[B];for(let W in F)h(F[W].object),delete F[W];delete I[B]}delete i[A.id]}function w(A){for(let I in i){let B=i[I];if(B[A.id]===void 0)continue;let F=B[A.id];for(let W in F)h(F[W].object),delete F[W];delete B[A.id]}}function R(){v(),a=!0,s!==n&&(s=n,c(s.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function OS(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NS(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==Qi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let R=w===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ai&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:b,samples:T}}function BS(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Ji,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!m)s?h(null):c();else{let y=s?0:i,M=y*4,S=p.clippingState||null;l.value=S,S=h(_,d,M,f);for(let b=0;b!==M;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==g;++M,S+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function FS(r){let e=new WeakMap;function t(a,o){return o===ah?a.mapping=Cr:o===oh&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ah||o===oh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Io(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ir=4,lg=[.125,.215,.35,.446,.526,.582],_s=20,US=256,sl=new Sa,cg=new Le,Jd=null,$d=0,Qd=0,ef=!1,kS=new P,$h=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=kS}=s;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,Qd),this._renderer.xr.enabled=ef,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Tn,format:Qi,colorSpace:as,depthBuffer:!1},n=hg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zS(s)),this._blurMaterial=VS(s,e,t),this._ggxMaterial=HS(s,e,t)}return n}_compileMaterial(e){let t=new Ge(new zt,e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,n,s){let l=new li(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(cg),u.toneMapping=un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new da,new Ao({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(cg),p=!0);for(let M=0;M<6;M++){let S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));let b=this._cubeSize;Ca(n,S*b,M>2?b:0,b,b),u.setRenderTarget(n),p&&u.render(g,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Cr||e.mapping===ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-Ir?i-_+Ir:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,Ca(s,m,p,3*g,2*g),n.setRenderTarget(s),n.render(o,sl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ca(e,m,p,3*g,2*g),n.setRenderTarget(e),n.render(o,sl)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[n];u.material=c;let d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_s-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):_s;m>_s&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);let p=[],y=0;for(let w=0;w<_s;++w){let R=w/g,v=Math.exp(-R*R/2);p.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;let S=this._sizeLods[n],b=3*S*(n>M-Ir?n-M+Ir:0),T=4*(this._cubeSize-S);Ca(t,b,T,3*S,2*S),l.setRenderTarget(t),l.render(u,sl)}};function zS(r){let e=[],t=[],i=[],n=r,s=r-Ir+1+lg.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>r-Ir?l=lg[a-r+Ir-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),M=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,R=T>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(v,g*_*T),M.set(d,m*_*T);let A=[T,T,T,T,T,T];S.set(A,p*_*T)}let b=new zt;b.setAttribute("position",new Ei(y,g)),b.setAttribute("uv",new Ei(M,m)),b.setAttribute("faceIndex",new Ei(S,p)),i.push(new Ge(b,null)),n>Ir&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hg(r,e,t){let i=new gi(r,e,t);return i.texture.mapping=Qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function HS(r,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:US,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function VS(r,e,t){let i=new Float32Array(_s),n=new P(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:eu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function ug(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function dg(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function GS(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ah||l===oh,h=l===Cr||l===ds;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $h(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new $h(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function WS(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ca("WebGLRenderer: "+i+" extension not supported."),n}}}function XS(r,e,t,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let M=0,S=y.length;M<S;M+=3){let b=y[M+0],T=y[M+1],w=y[M+2];d.push(b,T,T,w,w,b)}}else if(_!==void 0){let y=_.array;g=_.version;for(let M=0,S=y.length/3-1;M<S;M+=3){let b=M+0,T=M+1,w=M+2;d.push(b,T,T,w,w,b)}}else return;let m=new(Wd(d)?Co:wo)(d,1);m.version=g;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function YS(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(i,f,s,d*a,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function ZS(r,e,t){let i=new WeakMap,n=new yt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var f=A;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*T*4*u),R=new Eo(w,b,T,u);R.type=fn,R.needsUpdate=!0;let v=S*4;for(let I=0;I<u;I++){let B=p[I],F=y[I],W=M[I],V=b*T*4*I;for(let z=0;z<B.count;z++){let k=z*v;_===!0&&(n.fromBufferAttribute(B,z),w[V+k+0]=n.x,w[V+k+1]=n.y,w[V+k+2]=n.z,w[V+k+3]=0),g===!0&&(n.fromBufferAttribute(F,z),w[V+k+4]=n.x,w[V+k+5]=n.y,w[V+k+6]=n.z,w[V+k+7]=0),m===!0&&(n.fromBufferAttribute(W,z),w[V+k+8]=n.x,w[V+k+9]=n.y,w[V+k+10]=n.z,w[V+k+11]=W.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new ne(b,T)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function KS(r,e,t,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var jS={[Pd]:"LINEAR_TONE_MAPPING",[Id]:"REINHARD_TONE_MAPPING",[Ld]:"CINEON_TONE_MAPPING",[$o]:"ACES_FILMIC_TONE_MAPPING",[Od]:"AGX_TONE_MAPPING",[Nd]:"NEUTRAL_TONE_MAPPING",[Dd]:"CUSTOM_TONE_MAPPING"};function JS(r,e,t,i,n){let s=new gi(e,t,{type:r,depthBuffer:i,stencilBuffer:n}),a=new gi(e,t,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),o=new zt;o.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tt([0,2,0,0,2,0],2));let l=new Uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ge(o,l),h=new Sa(-1,1,1,-1,0,1),u=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),a.setSize(y,M);for(let S=0;S<m.length;S++){let b=m[S];b.setSize&&b.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let M=s.width,S=s.height;for(let b=0;b<m.length;b++){let T=m[b];T.setSize&&T.setSize(M,S)}},this.begin=function(y,M){if(f||y.toneMapping===un&&m.length===0)return!1;if(g=M,M!==null){let S=M.width,b=M.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return p===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=un,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=_,f=!0;let S=s,b=a;for(let T=0;T<m.length;T++){let w=m[T];if(w.enabled!==!1&&(w.render(y,b,S,M),w.needsSwap!==!1)){let R=S;S=b,b=R}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},qe.getTransfer(u)===et&&(l.defines.SRGB_TRANSFER="");let T=jS[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Ig=new wi,rf=new Mr(1,1),Lg=new Eo,Dg=new Ec,Og=new Po,fg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),_g=new Float32Array(4);function Pa(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=fg[n];if(s===void 0&&(s=new Float32Array(n),fg[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ht(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function tu(r,e){let t=pg[e];t===void 0&&(t=new Int32Array(e),pg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function $S(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function QS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function eM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function tM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function iM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;_g.set(i),r.uniformMatrix2fv(this.addr,!1,_g),Vt(t,i)}}function nM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;gg.set(i),r.uniformMatrix3fv(this.addr,!1,gg),Vt(t,i)}}function rM(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;mg.set(i),r.uniformMatrix4fv(this.addr,!1,mg),Vt(t,i)}}function sM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function aM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function oM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function lM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function cM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function uM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function dM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function fM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?Kh:Zh,s=rf):s=Ig,t.setTexture2D(e||s,n)}function pM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Dg,n)}function mM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Og,n)}function gM(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Lg,n)}function _M(r){switch(r){case 5126:return $S;case 35664:return QS;case 35665:return eM;case 35666:return tM;case 35674:return iM;case 35675:return nM;case 35676:return rM;case 5124:case 35670:return sM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}function vM(r,e){r.uniform1fv(this.addr,e)}function xM(r,e){let t=Pa(e,this.size,2);r.uniform2fv(this.addr,t)}function yM(r,e){let t=Pa(e,this.size,3);r.uniform3fv(this.addr,t)}function SM(r,e){let t=Pa(e,this.size,4);r.uniform4fv(this.addr,t)}function MM(r,e){let t=Pa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bM(r,e){let t=Pa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function EM(r,e){let t=Pa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function TM(r,e){r.uniform1iv(this.addr,e)}function AM(r,e){r.uniform2iv(this.addr,e)}function wM(r,e){r.uniform3iv(this.addr,e)}function CM(r,e){r.uniform4iv(this.addr,e)}function RM(r,e){r.uniform1uiv(this.addr,e)}function PM(r,e){r.uniform2uiv(this.addr,e)}function IM(r,e){r.uniform3uiv(this.addr,e)}function LM(r,e){r.uniform4uiv(this.addr,e)}function DM(r,e,t){let i=this.cache,n=e.length,s=tu(t,n);Ht(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=rf:a=Ig;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function OM(r,e,t){let i=this.cache,n=e.length,s=tu(t,n);Ht(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Dg,s[a])}function NM(r,e,t){let i=this.cache,n=e.length,s=tu(t,n);Ht(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Og,s[a])}function BM(r,e,t){let i=this.cache,n=e.length,s=tu(t,n);Ht(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Lg,s[a])}function FM(r){switch(r){case 5126:return vM;case 35664:return xM;case 35665:return yM;case 35666:return SM;case 35674:return MM;case 35675:return bM;case 35676:return EM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return wM;case 35669:case 35673:return CM;case 5125:return RM;case 36294:return PM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return BM}}var sf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}},af=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}},of=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},tf=/(\w+)(\])?(\[|\.)?/g;function vg(r,e){r.seq.push(e),r.map[e.id]=e}function UM(r,e,t){let i=r.name,n=i.length;for(tf.lastIndex=0;;){let s=tf.exec(i),a=tf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){vg(t,c===void 0?new sf(o,r,e):new af(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new of(o),vg(t,u)),t=u}}}var Ra=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);UM(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function xg(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var kM=37297,zM=0;function HM(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var yg=new Fe;function VM(r){qe._getMatrix(yg,qe.workingColorSpace,r);let e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case So:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Sg(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+HM(r.getShaderSource(e),o)}else return s}function GM(r,e){let t=VM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var WM={[Pd]:"Linear",[Id]:"Reinhard",[Ld]:"Cineon",[$o]:"ACESFilmic",[Od]:"AgX",[Nd]:"Neutral",[Dd]:"Custom"};function XM(r,e){let t=WM[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jh=new P;function YM(){qe.getLuminanceCoefficients(Jh);let r=Jh.x.toFixed(4),e=Jh.y.toFixed(4),t=Jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function ZM(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function KM(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ol(r){return r!==""}function Mg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(r){return r.replace(jM,$M)}var JM=new Map;function $M(r,e){let t=ze[e];if(t===void 0){let i=JM.get(e);if(i!==void 0)t=ze[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}var QM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eg(r){return r.replace(QM,eb)}function eb(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Tg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var tb={[Jo]:"SHADOWMAP_TYPE_PCF",[Ea]:"SHADOWMAP_TYPE_VSM"};function ib(r){return tb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nb={[Cr]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function rb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":nb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var sb={[ds]:"ENVMAP_MODE_REFRACTION"};function ab(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":sb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ob={[sh]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Vm]:"ENVMAP_BLENDING_ADD"};function lb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ob[r.combine]||"ENVMAP_BLENDING_NONE"}function cb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hb(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ib(t),c=rb(t),h=ab(t),u=lb(t),d=cb(t),f=qM(t),_=ZM(s),g=n.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ol).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ol).join(`
`),p.length>0&&(p+=`
`)):(m=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),p=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?ze.tonemapping_pars_fragment:"",t.toneMapping!==un?XM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,GM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ol).join(`
`)),a=lf(a),a=Mg(a,t),a=bg(a,t),o=lf(o),o=Mg(o,t),o=bg(o,t),a=Eg(a),o=Eg(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+a,S=y+p+o,b=xg(n,n.VERTEX_SHADER,M),T=xg(n,n.FRAGMENT_SHADER,S);n.attachShader(g,b),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function w(I){if(r.debug.checkShaderErrors){let B=n.getProgramInfoLog(g)||"",F=n.getShaderInfoLog(b)||"",W=n.getShaderInfoLog(T)||"",V=B.trim(),z=F.trim(),k=W.trim(),Z=!0,ce=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,b,T);else{let ie=Sg(n,b,"vertex"),ue=Sg(n,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ie+`
`+ue)}else V!==""?we("WebGLProgram: Program Info Log:",V):(z===""||k==="")&&(ce=!1);ce&&(I.diagnostics={runnable:Z,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}n.deleteShader(b),n.deleteShader(T),R=new Ra(n,g),v=KM(n,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(g,kM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var ub=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hf(e),t.set(e,i)),i}},hf=class{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}};function db(r,e,t,i,n,s,a){let o=new To,l=new cf,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,A,I,B,F){let W=B.fog,V=F.geometry,z=v.isMeshStandardMaterial?B.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),Z=k&&k.mapping===Qo?k.image.height:null,ce=_[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&we("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=ie!==void 0?ie.length:0,Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let Be,Ze,Ke,q;if(ce){let nt=wn[ce];Be=nt.vertexShader,Ze=nt.fragmentShader}else Be=v.vertexShader,Ze=v.fragmentShader,l.update(v),Ke=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);let J=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,Je=!!v.map,Xt=!!v.matcap,je=!!k,it=!!v.aoMap,ct=!!v.lightMap,He=!!v.bumpMap,Lt=!!v.normalMap,L=!!v.displacementMap,Dt=!!v.emissiveMap,Qe=!!v.metalnessMap,ft=!!v.roughnessMap,be=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,O=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,X=be&&!!v.anisotropyMap,Te=C&&!!v.clearcoatMap,se=C&&!!v.clearcoatNormalMap,Se=C&&!!v.clearcoatRoughnessMap,De=O&&!!v.iridescenceMap,Q=O&&!!v.iridescenceThicknessMap,oe=Y&&!!v.sheenColorMap,ve=Y&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,ae=!!v.specularColorMap,Ve=!!v.specularIntensityMap,D=j&&!!v.transmissionMap,fe=j&&!!v.thicknessMap,te=!!v.gradientMap,pe=!!v.alphaMap,$=v.alphaTest>0,K=!!v.alphaHash,re=!!v.extensions,Ne=un;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ne=r.toneMapping);let pt={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Ze,defines:v.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:as,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:Xt,envMap:je,envMapMode:je&&k.mapping,envMapCubeUVHeight:Z,aoMap:it,lightMap:ct,bumpMap:He,normalMap:Lt,displacementMap:L,emissiveMap:Dt,normalMapObjectSpace:Lt&&v.normalMapType===Xm,normalMapTangentSpace:Lt&&v.normalMapType===qh,metalnessMap:Qe,roughnessMap:ft,anisotropy:be,anisotropyMap:X,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:Se,dispersion:x,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:oe,sheenRoughnessMap:ve,specularMap:Ee,specularColorMap:ae,specularIntensityMap:Ve,transmission:j,transmissionMap:D,thicknessMap:fe,gradientMap:te,opaque:v.transparent===!1&&v.blending===ns&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:$,alphaHash:K,combine:v.combine,mapUv:Je&&g(v.map.channel),aoMapUv:it&&g(v.aoMap.channel),lightMapUv:ct&&g(v.lightMap.channel),bumpMapUv:He&&g(v.bumpMap.channel),normalMapUv:Lt&&g(v.normalMap.channel),displacementMapUv:L&&g(v.displacementMap.channel),emissiveMapUv:Dt&&g(v.emissiveMap.channel),metalnessMapUv:Qe&&g(v.metalnessMap.channel),roughnessMapUv:ft&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:Te&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(v.sheenRoughnessMap.channel),specularMapUv:Ee&&g(v.specularMap.channel),specularColorMapUv:ae&&g(v.specularColorMap.channel),specularIntensityMapUv:Ve&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:fe&&g(v.thicknessMap.channel),alphaMapUv:pe&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Lt||be),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Je||pe),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ti,flipSided:v.side===vi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)A.push(I),A.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(y(A,v),M(A,v),A.push(r.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function y(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){let A=_[v.type],I;if(A){let B=wn[A];I=tg.clone(B.uniforms)}else I=v.uniforms;return I}function b(v,A){let I=u.get(A);return I!==void 0?++I.usedTimes:(I=new hb(r,A,v,s),h.push(I),u.set(A,I)),I}function T(v){if(--v.usedTimes===0){let A=h.indexOf(v);h[A]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:R}}function fb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function pb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ag(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wg(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||pb),i.length>1&&i.sort(d||Ag),n.length>1&&n.sort(d||Ag)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function mb(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new wg,r.set(i,[a])):n>=s.length?(a=new wg,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function gb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function _b(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var vb=0;function xb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yb(r){let e=new gb,t=_b(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let n=new P,s=new gt,a=new gt;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,M=0,S=0,b=0,T=0,w=0;c.sort(xb);for(let v=0,A=c.length;v<A;v++){let I=c[v],B=I.color,F=I.intensity,W=I.distance,V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===fs?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],F);w++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,Z=t.get(I);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=I.shadow.matrix,y++}i.directional[f]=z,f++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(B).multiplyScalar(F),z.distance=W,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[g]=z;let k=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,k.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[g]=k.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[g]=Z,i.spotShadowMap[g]=V,S++}g++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(B).multiplyScalar(F),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=z,m++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let k=I.shadow,Z=t.get(I);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=I.shadow.matrix,M++}i.point[_]=z,_++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(F),z.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==S||R.numSpotMaps!==b||R.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=S,R.numSpotMaps=b,R.numLightProbes=w,i.version=vb++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let M=c[p];if(M.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(M.isSpotLight){let S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Cg(r){let e=new yb(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Sb(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Cg(r),e.set(n,[o])):s>=a.length?(o=new Cg(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Tb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Rg=new gt,al=new P,nf=new P;function Ab(r,e,t){let i=new ma,n=new ne,s=new ne,a=new yt,o=new kc,l=new zc,c={},h=t.maxTextureSize,u={[Kn]:vi,[vi]:Kn,[Ti]:Ti},d=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Mb,fragmentShader:bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new zt;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ge(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let p=this.type;this.render=function(T,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===Mm&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Jo);let v=r.getRenderTarget(),A=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(En),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=p!==this.type;F&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(V=>V.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,V=T.length;W<V;W++){let z=T[W],k=z.shadow;if(k===void 0){we("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);let Z=k.getFrameExtents();if(n.multiply(Z),s.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Z.x),n.x=s.x*Z.x,k.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Z.y),n.y=s.y*Z.y,k.mapSize.y=s.y)),k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ea){if(z.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new gi(n.x,n.y,{format:fs,type:Tn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Mr(n.x,n.y,fn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Mn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=jt,k.map.depthTexture.magFilter=jt}else{z.isPointLight?(k.map=new Io(n.x),k.map.depthTexture=new Ic(n.x,dn)):(k.map=new gi(n.x,n.y),k.map.depthTexture=new Mr(n.x,n.y,dn)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Mn;let ie=r.state.buffers.depth.getReversed();this.type===Jo?(k.map.depthTexture.compareFunction=ie?Kh:Zh,k.map.depthTexture.minFilter=Qt,k.map.depthTexture.magFilter=Qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=jt,k.map.depthTexture.magFilter=jt)}k.camera.updateProjectionMatrix()}let ce=k.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ce;ie++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ie),r.clear();else{ie===0&&(r.setRenderTarget(k.map),r.clear());let ue=k.getViewport(ie);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),B.viewport(a)}if(z.isPointLight){let ue=k.camera,Oe=k.matrix,Be=z.distance||ue.far;Be!==ue.far&&(ue.far=Be,ue.updateProjectionMatrix()),al.setFromMatrixPosition(z.matrixWorld),ue.position.copy(al),nf.copy(ue.position),nf.add(Eb[ie]),ue.up.copy(Tb[ie]),ue.lookAt(nf),ue.updateMatrixWorld(),Oe.makeTranslation(-al.x,-al.y,-al.z),Rg.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Rg,ue.coordinateSystem,ue.reversedDepth)}else k.updateMatrices(z);i=k.getFrustum(),S(w,R,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Ea&&y(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,A,I)};function y(T,w){let R=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gi(n.x,n.y,{format:fs,type:Tn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,R,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,R,f,g,null)}function M(T,w,R,v){let A=null,I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)A=I;else if(A=R.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=A.uuid,F=w.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let V=W[F];V===void 0&&(V=A.clone(),W[F]=V,w.addEventListener("dispose",b)),A=V}if(A.visible=w.visible,A.wireframe=w.wireframe,v===Ea?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,R.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=r.properties.get(A);B.light=R}return A}function S(T,w,R,v,A){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Ea)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let F=e.update(T),W=T.material;if(Array.isArray(W)){let V=F.groups;for(let z=0,k=V.length;z<k;z++){let Z=V[z],ce=W[Z.materialIndex];if(ce&&ce.visible){let ie=M(T,ce,v,A);T.onBeforeShadow(r,T,w,R,F,ie,Z),r.renderBufferDirect(R,null,F,ie,T,Z),T.onAfterShadow(r,T,w,R,F,ie,Z)}}}else if(W.visible){let V=M(T,W,v,A);T.onBeforeShadow(r,T,w,R,F,V,null),r.renderBufferDirect(R,null,F,V,T,null),T.onAfterShadow(r,T,w,R,F,V,null)}}let B=T.children;for(let F=0,W=B.length;F<W;F++)S(B[F],w,R,v,A)}function b(T){T.target.removeEventListener("dispose",b);for(let R in c){let v=c[R],A=T.target.uuid;A in v&&(v[A].dispose(),delete v[A])}}}var wb={[$c]:Qc,[eh]:nh,[th]:rh,[rs]:ih,[Qc]:$c,[nh]:eh,[rh]:th,[ih]:rs};function Cb(r,e){function t(){let D=!1,fe=new yt,te=null,pe=new yt(0,0,0,0);return{setMask:function($){te!==$&&!D&&(r.colorMask($,$,$,$),te=$)},setLocked:function($){D=$},setClear:function($,K,re,Ne,pt){pt===!0&&($*=Ne,K*=Ne,re*=Ne),fe.set($,K,re,Ne),pe.equals(fe)===!1&&(r.clearColor($,K,re,Ne),pe.copy(fe))},reset:function(){D=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,fe=!1,te=null,pe=null,$=null;return{setReversed:function(K){if(fe!==K){let re=e.get("EXT_clip_control");K?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),fe=K;let Ne=$;$=null,this.setClear(Ne)}},getReversed:function(){return fe},setTest:function(K){K?J(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(K){te!==K&&!D&&(r.depthMask(K),te=K)},setFunc:function(K){if(fe&&(K=wb[K]),pe!==K){switch(K){case $c:r.depthFunc(r.NEVER);break;case Qc:r.depthFunc(r.ALWAYS);break;case eh:r.depthFunc(r.LESS);break;case rs:r.depthFunc(r.LEQUAL);break;case th:r.depthFunc(r.EQUAL);break;case ih:r.depthFunc(r.GEQUAL);break;case nh:r.depthFunc(r.GREATER);break;case rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=K}},setLocked:function(K){D=K},setClear:function(K){$!==K&&(fe&&(K=1-K),r.clearDepth(K),$=K)},reset:function(){D=!1,te=null,pe=null,$=null,fe=!1}}}function n(){let D=!1,fe=null,te=null,pe=null,$=null,K=null,re=null,Ne=null,pt=null;return{setTest:function(nt){D||(nt?J(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(nt){fe!==nt&&!D&&(r.stencilMask(nt),fe=nt)},setFunc:function(nt,mn,On){(te!==nt||pe!==mn||$!==On)&&(r.stencilFunc(nt,mn,On),te=nt,pe=mn,$=On)},setOp:function(nt,mn,On){(K!==nt||re!==mn||Ne!==On)&&(r.stencilOp(nt,mn,On),K=nt,re=mn,Ne=On)},setLocked:function(nt){D=nt},setClear:function(nt){pt!==nt&&(r.clearStencil(nt),pt=nt)},reset:function(){D=!1,fe=null,te=null,pe=null,$=null,K=null,re=null,Ne=null,pt=null}}}let s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,S=null,b=null,T=null,w=new Le(0,0,0),R=0,v=!1,A=null,I=null,B=null,F=null,W=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,k=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=k>=2);let ce=null,ie={},ue=r.getParameter(r.SCISSOR_BOX),Oe=r.getParameter(r.VIEWPORT),Be=new yt().fromArray(ue),Ze=new yt().fromArray(Oe);function Ke(D,fe,te,pe){let $=new Uint8Array(4),K=r.createTexture();r.bindTexture(D,K),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<te;re++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(fe+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return K}let q={};q[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(rs),He(!1),Lt(Ad),J(r.CULL_FACE),it(En);function J(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function ge(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ue(D,fe){return u[D]!==fe?(r.bindFramebuffer(D,fe),u[D]=fe,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=fe),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function ye(D,fe){let te=f,pe=!1;if(D){te=d.get(fe),te===void 0&&(te=[],d.set(fe,te));let $=D.textures;if(te.length!==$.length||te[0]!==r.COLOR_ATTACHMENT0){for(let K=0,re=$.length;K<re;K++)te[K]=r.COLOR_ATTACHMENT0+K;te.length=$.length,pe=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,pe=!0);pe&&r.drawBuffers(te)}function Je(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Xt={[vr]:r.FUNC_ADD,[Em]:r.FUNC_SUBTRACT,[Tm]:r.FUNC_REVERSE_SUBTRACT};Xt[Am]=r.MIN,Xt[wm]=r.MAX;let je={[Cm]:r.ZERO,[Rm]:r.ONE,[Pm]:r.SRC_COLOR,[_c]:r.SRC_ALPHA,[Bm]:r.SRC_ALPHA_SATURATE,[Om]:r.DST_COLOR,[Lm]:r.DST_ALPHA,[Im]:r.ONE_MINUS_SRC_COLOR,[vc]:r.ONE_MINUS_SRC_ALPHA,[Nm]:r.ONE_MINUS_DST_COLOR,[Dm]:r.ONE_MINUS_DST_ALPHA,[Fm]:r.CONSTANT_COLOR,[Um]:r.ONE_MINUS_CONSTANT_COLOR,[km]:r.CONSTANT_ALPHA,[zm]:r.ONE_MINUS_CONSTANT_ALPHA};function it(D,fe,te,pe,$,K,re,Ne,pt,nt){if(D===En){g===!0&&(ge(r.BLEND),g=!1);return}if(g===!1&&(J(r.BLEND),g=!0),D!==bm){if(D!==m||nt!==v){if((p!==vr||S!==vr)&&(r.blendEquation(r.FUNC_ADD),p=vr,S=vr),nt)switch(D){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wd:r.blendFunc(r.ONE,r.ONE);break;case Cd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pe("WebGLState: Invalid blending: ",D);break}else switch(D){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cd:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rd:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",D);break}y=null,M=null,b=null,T=null,w.set(0,0,0),R=0,m=D,v=nt}return}$=$||fe,K=K||te,re=re||pe,(fe!==p||$!==S)&&(r.blendEquationSeparate(Xt[fe],Xt[$]),p=fe,S=$),(te!==y||pe!==M||K!==b||re!==T)&&(r.blendFuncSeparate(je[te],je[pe],je[K],je[re]),y=te,M=pe,b=K,T=re),(Ne.equals(w)===!1||pt!==R)&&(r.blendColor(Ne.r,Ne.g,Ne.b,pt),w.copy(Ne),R=pt),m=D,v=!1}function ct(D,fe){D.side===Ti?ge(r.CULL_FACE):J(r.CULL_FACE);let te=D.side===vi;fe&&(te=!te),He(te),D.blending===ns&&D.transparent===!1?it(En):it(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){A!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),A=D)}function Lt(D){D!==ym?(J(r.CULL_FACE),D!==I&&(D===Ad?r.cullFace(r.BACK):D===Sm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),I=D}function L(D){D!==B&&(z&&r.lineWidth(D),B=D)}function Dt(D,fe,te){D?(J(r.POLYGON_OFFSET_FILL),(F!==fe||W!==te)&&(r.polygonOffset(fe,te),F=fe,W=te)):ge(r.POLYGON_OFFSET_FILL)}function Qe(D){D?J(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function ft(D){D===void 0&&(D=r.TEXTURE0+V-1),ce!==D&&(r.activeTexture(D),ce=D)}function be(D,fe,te){te===void 0&&(ce===null?te=r.TEXTURE0+V-1:te=ce);let pe=ie[te];pe===void 0&&(pe={type:void 0,texture:void 0},ie[te]=pe),(pe.type!==D||pe.texture!==fe)&&(ce!==te&&(r.activeTexture(te),ce=te),r.bindTexture(D,fe||q[D]),pe.type=D,pe.texture=fe)}function C(){let D=ie[ce];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Y(){try{r.texSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function j(){try{r.texSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Se(){try{r.texStorage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function De(){try{r.texImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function oe(D){Be.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Be.copy(D))}function ve(D){Ze.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ee(D,fe){let te=c.get(fe);te===void 0&&(te=new WeakMap,c.set(fe,te));let pe=te.get(D);pe===void 0&&(pe=r.getUniformBlockIndex(fe,D.name),te.set(D,pe))}function ae(D,fe){let pe=c.get(fe).get(D);l.get(fe)!==pe&&(r.uniformBlockBinding(fe,pe,D.__bindingPointIndex),l.set(fe,pe))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ce=null,ie={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,S=null,b=null,T=null,w=new Le(0,0,0),R=0,v=!1,A=null,I=null,B=null,F=null,W=null,Be.set(0,0,r.canvas.width,r.canvas.height),Ze.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ge,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Je,setBlending:it,setMaterial:ct,setFlipSided:He,setCullFace:Lt,setLineWidth:L,setPolygonOffset:Dt,setScissorTest:Qe,activeTexture:ft,bindTexture:be,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:De,texImage3D:Q,updateUBOMapping:Ee,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:oe,viewport:ve,reset:Ve}}function Rb(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return f?new OffscreenCanvas(C,x):oa("canvas")}function g(C,x,O){let Y=1,j=be(C);if((j.width>O||j.height>O)&&(Y=O/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let X=Math.floor(Y*j.width),Te=Math.floor(Y*j.height);u===void 0&&(u=_(X,Te));let se=x?_(X,Te):u;return se.width=X,se.height=Te,se.getContext("2d").drawImage(C,0,0,X,Te),we("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Te+")."),se}else return"data"in C&&we("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,x,O,Y,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=x;if(x===r.RED&&(O===r.FLOAT&&(X=r.R32F),O===r.HALF_FLOAT&&(X=r.R16F),O===r.UNSIGNED_BYTE&&(X=r.R8)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(X=r.R8UI),O===r.UNSIGNED_SHORT&&(X=r.R16UI),O===r.UNSIGNED_INT&&(X=r.R32UI),O===r.BYTE&&(X=r.R8I),O===r.SHORT&&(X=r.R16I),O===r.INT&&(X=r.R32I)),x===r.RG&&(O===r.FLOAT&&(X=r.RG32F),O===r.HALF_FLOAT&&(X=r.RG16F),O===r.UNSIGNED_BYTE&&(X=r.RG8)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(X=r.RG8UI),O===r.UNSIGNED_SHORT&&(X=r.RG16UI),O===r.UNSIGNED_INT&&(X=r.RG32UI),O===r.BYTE&&(X=r.RG8I),O===r.SHORT&&(X=r.RG16I),O===r.INT&&(X=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(X=r.RGB8UI),O===r.UNSIGNED_SHORT&&(X=r.RGB16UI),O===r.UNSIGNED_INT&&(X=r.RGB32UI),O===r.BYTE&&(X=r.RGB8I),O===r.SHORT&&(X=r.RGB16I),O===r.INT&&(X=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),O===r.UNSIGNED_INT&&(X=r.RGBA32UI),O===r.BYTE&&(X=r.RGBA8I),O===r.SHORT&&(X=r.RGBA16I),O===r.INT&&(X=r.RGBA32I)),x===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),x===r.RGBA){let Te=j?So:qe.getTransfer(Y);O===r.FLOAT&&(X=r.RGBA32F),O===r.HALF_FLOAT&&(X=r.RGBA16F),O===r.UNSIGNED_BYTE&&(X=Te===et?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(C,x){let O;return C?x===null||x===dn||x===Aa?O=r.DEPTH24_STENCIL8:x===fn?O=r.DEPTH32F_STENCIL8:x===Ta&&(O=r.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===dn||x===Aa?O=r.DEPTH_COMPONENT24:x===fn?O=r.DEPTH_COMPONENT32F:x===Ta&&(O=r.DEPTH_COMPONENT16),O}function b(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function T(C){let x=C.target;x.removeEventListener("dispose",T),R(x),x.isVideoTexture&&h.delete(x)}function w(C){let x=C.target;x.removeEventListener("dispose",w),A(x)}function R(C){let x=i.get(C);if(x.__webglInit===void 0)return;let O=C.source,Y=d.get(O);if(Y){let j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(C),Object.keys(Y).length===0&&d.delete(O)}i.remove(C)}function v(C){let x=i.get(C);r.deleteTexture(x.__webglTexture);let O=C.source,Y=d.get(O);delete Y[x.__cacheKey],a.memory.textures--}function A(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)r.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else r.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[Y]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=C.textures;for(let Y=0,j=O.length;Y<j;Y++){let X=i.get(O[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(C)}let I=0;function B(){I=0}function F(){let C=I;return C>=n.maxTextures&&we("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),I+=1,C}function W(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function V(C,x){let O=i.get(C);if(C.isVideoTexture&&Qe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let Y=C.image;if(Y===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,C,x);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function z(C,x){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){q(O,C,x);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function k(C,x){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){q(O,C,x);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function Z(C,x){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){J(O,C,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}let ce={[ss]:r.REPEAT,[yn]:r.CLAMP_TO_EDGE,[xc]:r.MIRRORED_REPEAT},ie={[jt]:r.NEAREST,[Gm]:r.NEAREST_MIPMAP_NEAREST,[el]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[lh]:r.LINEAR_MIPMAP_NEAREST,[Rr]:r.LINEAR_MIPMAP_LINEAR},ue={[Ym]:r.NEVER,[Jm]:r.ALWAYS,[qm]:r.LESS,[Zh]:r.LEQUAL,[Zm]:r.EQUAL,[Kh]:r.GEQUAL,[Km]:r.GREATER,[jm]:r.NOTEQUAL};function Oe(C,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===lh||x.magFilter===el||x.magFilter===Rr||x.minFilter===Qt||x.minFilter===lh||x.minFilter===el||x.minFilter===Rr)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ce[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ce[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ce[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ie[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ie[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===jt||x.minFilter!==el&&x.minFilter!==Rr||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Be(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",T));let Y=x.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let X=W(x);if(X!==C.__cacheKey){j[X]===void 0&&(j[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[X].usedTimes++;let Te=j[C.__cacheKey];Te!==void 0&&(j[C.__cacheKey].usedTimes--,Te.usedTimes===0&&v(x)),C.__cacheKey=X,C.__webglTexture=j[X].texture}return O}function Ze(C,x,O){return Math.floor(Math.floor(C/O)/x)}function Ke(C,x,O,Y){let X=C.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,Y,x.data);else{X.sort((Q,oe)=>Q.start-oe.start);let Te=0;for(let Q=1;Q<X.length;Q++){let oe=X[Te],ve=X[Q],Ee=oe.start+oe.count,ae=Ze(ve.start,x.width,4),Ve=Ze(oe.start,x.width,4);ve.start<=Ee+1&&ae===Ve&&Ze(ve.start+ve.count-1,x.width,4)===ae?oe.count=Math.max(oe.count,ve.start+ve.count-oe.start):(++Te,X[Te]=ve)}X.length=Te+1;let se=r.getParameter(r.UNPACK_ROW_LENGTH),Se=r.getParameter(r.UNPACK_SKIP_PIXELS),De=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Q=0,oe=X.length;Q<oe;Q++){let ve=X[Q],Ee=Math.floor(ve.start/4),ae=Math.ceil(ve.count/4),Ve=Ee%x.width,D=Math.floor(Ee/x.width),fe=ae,te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Ve,D,fe,te,O,Y,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),r.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function q(C,x,O){let Y=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=r.TEXTURE_3D);let j=Be(C,x),X=x.source;t.bindTexture(Y,C.__webglTexture,r.TEXTURE0+O);let Te=i.get(X);if(X.version!==Te.__version||j===!0){t.activeTexture(r.TEXTURE0+O);let se=qe.getPrimaries(qe.workingColorSpace),Se=x.colorSpace===$n?null:qe.getPrimaries(x.colorSpace),De=x.colorSpace===$n||se===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Q=g(x.image,!1,n.maxTextureSize);Q=ft(x,Q);let oe=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Ee=M(x.internalFormat,oe,ve,x.colorSpace,x.isVideoTexture);Oe(Y,x);let ae,Ve=x.mipmaps,D=x.isVideoTexture!==!0,fe=Te.__version===void 0||j===!0,te=X.dataReady,pe=b(x,Q);if(x.isDepthTexture)Ee=S(x.format===Pr,x.type),fe&&(D?t.texStorage2D(r.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,oe,ve,null));else if(x.isDataTexture)if(Ve.length>0){D&&fe&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,Ve[0].width,Ve[0].height);for(let $=0,K=Ve.length;$<K;$++)ae=Ve[$],D?te&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ae.width,ae.height,oe,ve,ae.data):t.texImage2D(r.TEXTURE_2D,$,Ee,ae.width,ae.height,0,oe,ve,ae.data);x.generateMipmaps=!1}else D?(fe&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,Q.width,Q.height),te&&Ke(x,Q,oe,ve)):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,oe,ve,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ee,Ve[0].width,Ve[0].height,Q.depth);for(let $=0,K=Ve.length;$<K;$++)if(ae=Ve[$],x.format!==Qi)if(oe!==null)if(D){if(te)if(x.layerUpdates.size>0){let re=jd(ae.width,ae.height,x.format,x.type);for(let Ne of x.layerUpdates){let pt=ae.data.subarray(Ne*re/ae.data.BYTES_PER_ELEMENT,(Ne+1)*re/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Ne,ae.width,ae.height,1,oe,pt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,Q.depth,oe,ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Ee,ae.width,ae.height,Q.depth,0,ae.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,Q.depth,oe,ve,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Ee,ae.width,ae.height,Q.depth,0,oe,ve,ae.data)}else{D&&fe&&t.texStorage2D(r.TEXTURE_2D,pe,Ee,Ve[0].width,Ve[0].height);for(let $=0,K=Ve.length;$<K;$++)ae=Ve[$],x.format!==Qi?oe!==null?D?te&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Ee,ae.width,ae.height,0,ae.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,ae.width,ae.height,oe,ve,ae.data):t.texImage2D(r.TEXTURE_2D,$,Ee,ae.width,ae.height,0,oe,ve,ae.data)}else if(x.isDataArrayTexture)if(D){if(fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Ee,Q.width,Q.height,Q.depth),te)if(x.layerUpdates.size>0){let $=jd(Q.width,Q.height,x.format,x.type);for(let K of x.layerUpdates){let re=Q.data.subarray(K*$/Q.data.BYTES_PER_ELEMENT,(K+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,oe,ve,re)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,ve,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,oe,ve,Q.data);else if(x.isData3DTexture)D?(fe&&t.texStorage3D(r.TEXTURE_3D,pe,Ee,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,ve,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,oe,ve,Q.data);else if(x.isFramebufferTexture){if(fe)if(D)t.texStorage2D(r.TEXTURE_2D,pe,Ee,Q.width,Q.height);else{let $=Q.width,K=Q.height;for(let re=0;re<pe;re++)t.texImage2D(r.TEXTURE_2D,re,Ee,$,K,0,oe,ve,null),$>>=1,K>>=1}}else if(Ve.length>0){if(D&&fe){let $=be(Ve[0]);t.texStorage2D(r.TEXTURE_2D,pe,Ee,$.width,$.height)}for(let $=0,K=Ve.length;$<K;$++)ae=Ve[$],D?te&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,oe,ve,ae):t.texImage2D(r.TEXTURE_2D,$,Ee,oe,ve,ae);x.generateMipmaps=!1}else if(D){if(fe){let $=be(Q);t.texStorage2D(r.TEXTURE_2D,pe,Ee,$.width,$.height)}te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,ve,Q)}else t.texImage2D(r.TEXTURE_2D,0,Ee,oe,ve,Q);m(x)&&p(Y),Te.__version=X.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function J(C,x,O){if(x.image.length!==6)return;let Y=Be(C,x),j=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);let X=i.get(j);if(j.version!==X.__version||Y===!0){t.activeTexture(r.TEXTURE0+O);let Te=qe.getPrimaries(qe.workingColorSpace),se=x.colorSpace===$n?null:qe.getPrimaries(x.colorSpace),Se=x.colorSpace===$n||Te===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let De=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!De&&!Q?oe[K]=g(x.image[K],!0,n.maxCubemapSize):oe[K]=Q?x.image[K].image:x.image[K],oe[K]=ft(x,oe[K]);let ve=oe[0],Ee=s.convert(x.format,x.colorSpace),ae=s.convert(x.type),Ve=M(x.internalFormat,Ee,ae,x.colorSpace),D=x.isVideoTexture!==!0,fe=X.__version===void 0||Y===!0,te=j.dataReady,pe=b(x,ve);Oe(r.TEXTURE_CUBE_MAP,x);let $;if(De){D&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,ve.width,ve.height);for(let K=0;K<6;K++){$=oe[K].mipmaps;for(let re=0;re<$.length;re++){let Ne=$[re];x.format!==Qi?Ee!==null?D?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Ne.width,Ne.height,Ee,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Ve,Ne.width,Ne.height,0,Ne.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,Ne.width,Ne.height,Ee,ae,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Ve,Ne.width,Ne.height,0,Ee,ae,Ne.data)}}}else{if($=x.mipmaps,D&&fe){$.length>0&&pe++;let K=be(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,K.width,K.height)}for(let K=0;K<6;K++)if(Q){D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,Ee,ae,oe[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,oe[K].width,oe[K].height,0,Ee,ae,oe[K].data);for(let re=0;re<$.length;re++){let pt=$[re].image[K].image;D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,pt.width,pt.height,Ee,ae,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Ve,pt.width,pt.height,0,Ee,ae,pt.data)}}else{D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,ae,oe[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ve,Ee,ae,oe[K]);for(let re=0;re<$.length;re++){let Ne=$[re];D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Ee,ae,Ne.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Ve,Ee,ae,Ne.image[K])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),X.__version=j.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ge(C,x,O,Y,j,X){let Te=s.convert(O.format,O.colorSpace),se=s.convert(O.type),Se=M(O.internalFormat,Te,se,O.colorSpace),De=i.get(x),Q=i.get(O);if(Q.__renderTarget=x,!De.__hasExternalTextures){let oe=Math.max(1,x.width>>X),ve=Math.max(1,x.height>>X);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,X,Se,oe,ve,x.depth,0,Te,se,null):t.texImage2D(j,X,Se,oe,ve,0,Te,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Dt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,j,Q.__webglTexture,0,L(x)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,j,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(C,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){let Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,X=S(x.stencilBuffer,j),Te=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Dt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(x),X,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(x),X,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,X,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,C)}else{let Y=x.textures;for(let j=0;j<Y.length;j++){let X=Y[j],Te=s.convert(X.format,X.colorSpace),se=s.convert(X.type),Se=M(X.internalFormat,Te,se,X.colorSpace);Dt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(x),Se,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(x),Se,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Se,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(C,x,O){let Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x.depthTexture);let De=s.convert(x.depthTexture.format),Q=s.convert(x.depthTexture.type),oe;x.depthTexture.format===Mn?oe=r.DEPTH_COMPONENT24:x.depthTexture.format===Pr&&(oe=r.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,oe,x.width,x.height,0,De,Q,null)}}else V(x.depthTexture,0);let X=j.__webglTexture,Te=L(x),se=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,Se=x.depthTexture.format===Pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Mn)Dt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,se,X,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,Se,se,X,0);else if(x.depthTexture.format===Pr)Dt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Se,se,X,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,Se,se,X,0);else throw new Error("Unknown depthTexture format")}function Je(C){let x=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)ye(x.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?ye(x.__webglFramebuffer[0],C,0):ye(x.__webglFramebuffer,C,0)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ue(x.__webglDepthbuffer[Y],C,!1);else{let j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,X)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ue(x.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(C,x,O){let Y=i.get(C);x!==void 0&&ge(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Je(C)}function je(C){let x=C.texture,O=i.get(C),Y=i.get(x);C.addEventListener("dispose",w);let j=C.textures,X=C.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=x.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let Se=0;Se<x.mipmaps.length;Se++)O.__webglFramebuffer[se][Se]=r.createFramebuffer()}else O.__webglFramebuffer[se]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)O.__webglFramebuffer[se]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Te)for(let se=0,Se=j.length;se<Se;se++){let De=i.get(j[se]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Dt(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){let Se=j[se];O.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[se]);let De=s.convert(Se.format,Se.colorSpace),Q=s.convert(Se.type),oe=M(Se.internalFormat,De,Q,Se.colorSpace,C.isXRRenderTarget===!0),ve=L(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,oe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,O.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)ge(O.__webglFramebuffer[se][Se],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se);else ge(O.__webglFramebuffer[se],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let se=0,Se=j.length;se<Se;se++){let De=j[se],Q=i.get(De),oe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),Oe(oe,De),ge(O.__webglFramebuffer,C,De,r.COLOR_ATTACHMENT0+se,oe,0),m(De)&&p(oe)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),Oe(se,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)ge(O.__webglFramebuffer[Se],C,x,r.COLOR_ATTACHMENT0,se,Se);else ge(O.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,se,0);m(x)&&p(se),t.unbindTexture()}C.depthBuffer&&Je(C)}function it(C){let x=C.textures;for(let O=0,Y=x.length;O<Y;O++){let j=x[O];if(m(j)){let X=y(C),Te=i.get(j).__webglTexture;t.bindTexture(X,Te),p(X),t.unbindTexture()}}}let ct=[],He=[];function Lt(C){if(C.samples>0){if(Dt(C)===!1){let x=C.textures,O=C.width,Y=C.height,j=r.COLOR_BUFFER_BIT,X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=i.get(C),se=x.length>1;if(se)for(let De=0;De<x.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Se=C.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let De=0;De<x.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[De]);let Q=i.get(x[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,Y,0,0,O,Y,j,r.NEAREST),l===!0&&(ct.length=0,He.length=0,ct.push(r.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(X),He.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,He)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let De=0;De<x.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Te.__webglColorRenderbuffer[De]);let Q=i.get(x[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function L(C){return Math.min(n.maxSamples,C.samples)}function Dt(C){let x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Qe(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ft(C,x){let O=C.colorSpace,Y=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==as&&O!==$n&&(qe.getTransfer(O)===et?(Y!==Qi||j!==Ai)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",O)),x}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=Xt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pb(r,e){function t(i,n=$n){let s,a=qe.getTransfer(n);if(i===Ai)return r.UNSIGNED_BYTE;if(i===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Ud)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===kd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bd)return r.BYTE;if(i===Fd)return r.SHORT;if(i===Ta)return r.UNSIGNED_SHORT;if(i===ch)return r.INT;if(i===dn)return r.UNSIGNED_INT;if(i===fn)return r.FLOAT;if(i===Tn)return r.HALF_FLOAT;if(i===zd)return r.ALPHA;if(i===Hd)return r.RGB;if(i===Qi)return r.RGBA;if(i===Mn)return r.DEPTH_COMPONENT;if(i===Pr)return r.DEPTH_STENCIL;if(i===Vd)return r.RED;if(i===dh)return r.RED_INTEGER;if(i===fs)return r.RG;if(i===fh)return r.RG_INTEGER;if(i===ph)return r.RGBA_INTEGER;if(i===tl||i===il||i===nl||i===rl)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mh||i===gh||i===_h||i===vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xh||i===yh||i===Sh||i===Mh||i===bh||i===Eh||i===Th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xh||i===yh)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mh)return s.COMPRESSED_R11_EAC;if(i===bh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Eh)return s.COMPRESSED_RG11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ah||i===wh||i===Ch||i===Rh||i===Ph||i===Ih||i===Lh||i===Dh||i===Oh||i===Nh||i===Bh||i===Fh||i===Uh||i===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ph)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ih)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zh||i===Hh||i===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zh)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Wh||i===Xh||i===Yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Aa?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new No(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Vi({vertexShader:Ib,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends bn{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new uf,p={},y=t.getContextAttributes(),M=null,S=null,b=[],T=[],w=new ne,R=null,v=new li;v.viewport=new yt;let A=new li;A.viewport=new yt;let I=[v,A],B=new jc,F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=b[q];return J===void 0&&(J=new fa,b[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=b[q];return J===void 0&&(J=new fa,b[q]=J),J.getGripSpace()},this.getHand=function(q){let J=b[q];return J===void 0&&(J=new fa,b[q]=J),J.getHandSpace()};function V(q){let J=T.indexOf(q.inputSource);if(J===-1)return;let ge=b[J];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",k);for(let q=0;q<b.length;q++){let J=T[q];J!==null&&(T[q]=null,b[q].disconnect(J))}F=null,W=null,m.reset();for(let q in p)delete p[q];e.setRenderTarget(M),f=null,d=null,u=null,n=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=function(q){return Ls(this,null,function*(){if(n=q,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",z),n.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ue=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?Pr:Mn,Ue=y.stencil?Aa:dn);let Je={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Je),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:Qi,type:Ai,depthTexture:new Mr(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ge),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new gi(f.framebufferWidth,f.framebufferHeight,{format:Qi,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),Ke.setContext(n),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(q){for(let J=0;J<q.removed.length;J++){let ge=q.removed[J],Ue=T.indexOf(ge);Ue>=0&&(T[Ue]=null,b[Ue].disconnect(ge))}for(let J=0;J<q.added.length;J++){let ge=q.added[J],Ue=T.indexOf(ge);if(Ue===-1){for(let Je=0;Je<b.length;Je++)if(Je>=T.length){T.push(ge),Ue=Je;break}else if(T[Je]===null){T[Je]=ge,Ue=Je;break}if(Ue===-1)break}let ye=b[Ue];ye&&ye.connect(ge)}}let Z=new P,ce=new P;function ie(q,J,ge){Z.setFromMatrixPosition(J.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);let Ue=Z.distanceTo(ce),ye=J.projectionMatrix.elements,Je=ge.projectionMatrix.elements,Xt=ye[14]/(ye[10]-1),je=ye[14]/(ye[10]+1),it=(ye[9]+1)/ye[5],ct=(ye[9]-1)/ye[5],He=(ye[8]-1)/ye[0],Lt=(Je[8]+1)/Je[0],L=Xt*He,Dt=Xt*Lt,Qe=Ue/(-He+Lt),ft=Qe*-He;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(Qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let be=Xt+Qe,C=je+Qe,x=L-ft,O=Dt+(Ue-ft),Y=it*je/C*be,j=ct*je/C*be;q.projectionMatrix.makePerspective(x,O,Y,j,be,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ue(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let J=q.near,ge=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),B.near=A.near=v.near=J,B.far=A.far=v.far=ge,(F!==B.near||W!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,W=B.far),B.layers.mask=q.layers.mask|6,v.layers.mask=B.layers.mask&3,A.layers.mask=B.layers.mask&5;let Ue=q.parent,ye=B.cameras;ue(B,Ue);for(let Je=0;Je<ye.length;Je++)ue(ye[Je],Ue);ye.length===2?ie(B,v,A):B.projectionMatrix.copy(v.projectionMatrix),Oe(q,B,Ue)};function Oe(q,J,ge){ge===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ha*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return p[q]};let Be=null;function Ze(q,J){if(h=J.getViewerPose(c||a),_=J,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ue=!1;ge.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let je=0;je<ge.length;je++){let it=ge[je],ct=null;if(f!==null)ct=f.getViewport(it);else{let Lt=u.getViewSubImage(d,it);ct=Lt.viewport,je===0&&(e.setRenderTargetTextures(S,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(S))}let He=I[je];He===void 0&&(He=new li,He.layers.enable(je),He.viewport=new yt,I[je]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ct.x,ct.y,ct.width,ct.height),je===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(He)}let ye=n.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let je=u.getDepthInformation(ge[0]);je&&je.isValid&&je.texture&&m.init(je,n.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let je=0;je<ge.length;je++){let it=ge[je].camera;if(it){let ct=p[it];ct||(ct=new No,p[it]=ct);let He=u.getCameraImage(it);ct.sourceTexture=He}}}}for(let ge=0;ge<b.length;ge++){let Ue=T[ge],ye=b[ge];Ue!==null&&ye!==void 0&&ye.update(Ue,J,c||a)}Be&&Be(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}let Ke=new Pg;Ke.setAnimationLoop(Ze),this.setAnimationLoop=function(q){Be=q},this.dispose=function(){}}},gs=new hn,Db=new gt;function Ob(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,S=y.envMapRotation;M&&(m.envMap.value=M,gs.copy(S),gs.x*=-1,gs.y*=-1,gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(gs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Nb(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let S=M.program;i.uniformBlockBinding(y,S)}function c(y,M){let S=n[y.id];S===void 0&&(_(y),S=h(y),n[y.id]=S,y.addEventListener("dispose",m));let b=M.program;i.updateUBOMapping(y,b);let T=e.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function h(y){let M=u();y.__bindingPointIndex=M;let S=r.createBuffer(),b=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=n[y.id],S=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,w=S.length;T<w;T++){let R=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,A=R.length;v<A;v++){let I=R[v];if(f(I,T,v,b)===!0){let B=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],W=0;for(let V=0;V<F.length;V++){let z=F[V],k=g(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,B+W,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,S,b){let T=y.value,w=M+"_"+S;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{let R=b[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return b[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function _(y){let M=y.uniforms,S=0,b=16;for(let w=0,R=M.length;w<R;w++){let v=Array.isArray(M[w])?M[w]:[M[w]];for(let A=0,I=v.length;A<I;A++){let B=v[A],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,V=F.length;W<V;W++){let z=F[W],k=g(z),Z=S%b,ce=Z%k.boundary,ie=Z+ce;S+=ce,ie!==0&&b-ie<k.storage&&(S+=b-ie),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=k.storage}}}let T=S%b;return T>0&&(S+=b-T),y.__size=S,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}var Bb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),An=null;function Fb(){return An===null&&(An=new wc(Bb,16,16,fs,Tn),An.name="DFG_LUT",An.minFilter=Qt,An.magFilter=Qt,An.wrapS=yn,An.wrapT=yn,An.generateMipmaps=!1,An.needsUpdate=!0),An}var Qh=class{constructor(e={}){let{canvas:t=$m(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ai}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let g=f,m=new Set([ph,fh,dh]),p=new Set([Ai,dn,Ta,Aa,hh,uh]),y=new Uint32Array(4),M=new Int32Array(4),S=null,b=null,T=[],w=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Ut;let I=0,B=0,F=null,W=-1,V=null,z=new yt,k=new yt,Z=null,ce=new Le(0),ie=0,ue=t.width,Oe=t.height,Be=1,Ze=null,Ke=null,q=new yt(0,0,ue,Oe),J=new yt(0,0,ue,Oe),ge=!1,Ue=new ma,ye=!1,Je=!1,Xt=new gt,je=new P,it=new yt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Lt(){return F===null?Be:1}let L=i;function Dt(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),L===null){let N="webgl2";if(L=Dt(N,E),L===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}let Qe,ft,be,C,x,O,Y,j,X,Te,se,Se,De,Q,oe,ve,Ee,ae,Ve,D,fe,te,pe,$;function K(){Qe=new WS(L),Qe.init(),te=new Pb(L,Qe),ft=new NS(L,Qe,e,te),be=new Cb(L,Qe),ft.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),C=new qS(L),x=new fb,O=new Rb(L,Qe,be,x,ft,te,C),Y=new FS(v),j=new GS(v),X=new Jv(L),pe=new DS(L,X),Te=new XS(L,X,C,pe),se=new KS(L,Te,X,C),Ve=new ZS(L,ft,O),ve=new BS(x),Se=new db(v,Y,j,Qe,ft,pe,ve),De=new Ob(v,x),Q=new mb,oe=new Sb(Qe),ae=new LS(v,Y,j,be,se,_,l),Ee=new Ab(v,se,ft),$=new Nb(L,C,ft,be),D=new OS(L,Qe,C),fe=new YS(L,Qe,C),C.programs=Se.programs,v.capabilities=ft,v.extensions=Qe,v.properties=x,v.renderLists=Q,v.shadowMap=Ee,v.state=be,v.info=C}K(),g!==Ai&&(R=new JS(g,t.width,t.height,n,s));let re=new df(v,L);this.xr=re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(E){E!==void 0&&(Be=E,this.setSize(ue,Oe,!1))},this.getSize=function(E){return E.set(ue,Oe)},this.setSize=function(E,N,G=!0){if(re.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,Oe=N,t.width=Math.floor(E*Be),t.height=Math.floor(N*Be),G===!0&&(t.style.width=E+"px",t.style.height=N+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(ue*Be,Oe*Be).floor()},this.setDrawingBufferSize=function(E,N,G){ue=E,Oe=N,Be=G,t.width=Math.floor(E*G),t.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(g===Ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,N,G,H){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,N,G,H),be.viewport(z.copy(q).multiplyScalar(Be).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,N,G,H){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,G,H),be.scissor(k.copy(J).multiplyScalar(Be).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){be.setScissorTest(ge=E)},this.setOpaqueSort=function(E){Ze=E},this.setTransparentSort=function(E){Ke=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,G=!0){let H=0;if(E){let U=!1;if(F!==null){let le=F.texture.format;U=m.has(le)}if(U){let le=F.texture.type,me=p.has(le),de=ae.getClearColor(),_e=ae.getClearAlpha(),Ae=de.r,Ie=de.g,Ce=de.b;me?(y[0]=Ae,y[1]=Ie,y[2]=Ce,y[3]=_e,L.clearBufferuiv(L.COLOR,0,y)):(M[0]=Ae,M[1]=Ie,M[2]=Ce,M[3]=_e,L.clearBufferiv(L.COLOR,0,M))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),G&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ae.dispose(),Q.dispose(),oe.dispose(),x.dispose(),Y.dispose(),j.dispose(),se.dispose(),pe.dispose(),$.dispose(),Se.dispose(),re.dispose(),re.removeEventListener("sessionstart",pp),re.removeEventListener("sessionend",mp),Zr.stop()};function Ne(E){E.preventDefault(),bo("WebGLRenderer: Context Lost."),A=!0}function pt(){bo("WebGLRenderer: Context Restored."),A=!1;let E=C.autoReset,N=Ee.enabled,G=Ee.autoUpdate,H=Ee.needsUpdate,U=Ee.type;K(),C.autoReset=E,Ee.enabled=N,Ee.autoUpdate=G,Ee.needsUpdate=H,Ee.type=U}function nt(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mn(E){let N=E.target;N.removeEventListener("dispose",mn),On(N)}function On(E){_0(E),x.remove(E)}function _0(E){let N=x.get(E).programs;N!==void 0&&(N.forEach(function(G){Se.releaseProgram(G)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,H,U,le){N===null&&(N=ct);let me=U.isMesh&&U.matrixWorld.determinant()<0,de=x0(E,N,G,H,U);be.setMaterial(H,me);let _e=G.index,Ae=1;if(H.wireframe===!0){if(_e=Te.getWireframeAttribute(G),_e===void 0)return;Ae=2}let Ie=G.drawRange,Ce=G.attributes.position,We=Ie.start*Ae,at=(Ie.start+Ie.count)*Ae;le!==null&&(We=Math.max(We,le.start*Ae),at=Math.min(at,(le.start+le.count)*Ae)),_e!==null?(We=Math.max(We,0),at=Math.min(at,_e.count)):Ce!=null&&(We=Math.max(We,0),at=Math.min(at,Ce.count));let Tt=at-We;if(Tt<0||Tt===1/0)return;pe.setup(U,H,de,G,_e);let At,ht=D;if(_e!==null&&(At=X.get(_e),ht=fe,ht.setIndex(At)),U.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Lt()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(U.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),be.setLineWidth(Re*Lt()),U.isLineSegments?ht.setMode(L.LINES):U.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else U.isPoints?ht.setMode(L.POINTS):U.isSprite&&ht.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))ht.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Re=U._multiDrawStarts,rt=U._multiDrawCounts,$e=U._multiDrawCount,Oi=_e?X.get(_e).bytesPerElement:1,Is=x.get(H).currentProgram.getUniforms();for(let Ni=0;Ni<$e;Ni++)Is.setValue(L,"_gl_DrawID",Ni),ht.render(Re[Ni]/Oi,rt[Ni])}else if(U.isInstancedMesh)ht.renderInstances(We,Tt,U.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rt=Math.min(G.instanceCount,Re);ht.renderInstances(We,Tt,rt)}else ht.render(We,Tt)};function fp(E,N,G){E.transparent===!0&&E.side===Ti&&E.forceSinglePass===!1?(E.side=vi,E.needsUpdate=!0,Al(E,N,G),E.side=Kn,E.needsUpdate=!0,Al(E,N,G),E.side=Ti):Al(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),b=oe.get(G),b.init(N),w.push(b),G.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),E!==G&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(b.pushLight(U),U.castShadow&&b.pushShadow(U))}),b.setupLights();let H=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let le=U.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){let de=le[me];fp(de,G,U),H.add(de)}else fp(le,G,U),H.add(le)}),b=w.pop(),H},this.compileAsync=function(E,N,G=null){let H=this.compile(E,N,G);return new Promise(U=>{function le(){if(H.forEach(function(me){x.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){U(E);return}setTimeout(le,10)}Qe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Lu=null;function v0(E){Lu&&Lu(E)}function pp(){Zr.stop()}function mp(){Zr.start()}let Zr=new Pg;Zr.setAnimationLoop(v0),typeof self<"u"&&Zr.setContext(self),this.setAnimationLoop=function(E){Lu=E,re.setAnimationLoop(E),E===null?Zr.stop():Zr.start()},re.addEventListener("sessionstart",pp),re.addEventListener("sessionend",mp),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;let G=re.enabled===!0&&re.isPresenting===!0,H=R!==null&&(F===null||G)&&R.begin(v,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,F),b=oe.get(E,w.length),b.init(N),w.push(b),Xt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(Xt,cn,N.reversedDepth),Je=this.localClippingEnabled,ye=ve.init(this.clippingPlanes,Je),S=Q.get(E,T.length),S.init(),T.push(S),re.enabled===!0&&re.isPresenting===!0){let me=v.xr.getDepthSensingMesh();me!==null&&Du(me,N,-1/0,v.sortObjects)}Du(E,N,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(Ze,Ke),He=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,He&&ae.addToRenderList(S,E),this.info.render.frame++,ye===!0&&ve.beginShadows();let U=b.state.shadowsArray;if(Ee.render(U,E,N),ye===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){let me=S.opaque,de=S.transmissive;if(b.setupLights(),N.isArrayCamera){let _e=N.cameras;if(de.length>0)for(let Ae=0,Ie=_e.length;Ae<Ie;Ae++){let Ce=_e[Ae];_p(me,de,E,Ce)}He&&ae.render(E);for(let Ae=0,Ie=_e.length;Ae<Ie;Ae++){let Ce=_e[Ae];gp(S,E,Ce,Ce.viewport)}}else de.length>0&&_p(me,de,E,N),He&&ae.render(E),gp(S,E,N)}F!==null&&B===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),H&&R.end(v),E.isScene===!0&&E.onAfterRender(v,E,N),pe.resetDefaultState(),W=-1,V=null,w.pop(),w.length>0?(b=w[w.length-1],ye===!0&&ve.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Du(E,N,G,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){H&&it.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xt);let me=se.update(E),de=E.material;de.visible&&S.push(E,me,de,G,it.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){let me=se.update(E),de=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),it.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),it.copy(me.boundingSphere.center)),it.applyMatrix4(E.matrixWorld).applyMatrix4(Xt)),Array.isArray(de)){let _e=me.groups;for(let Ae=0,Ie=_e.length;Ae<Ie;Ae++){let Ce=_e[Ae],We=de[Ce.materialIndex];We&&We.visible&&S.push(E,me,We,G,it.z,Ce)}}else de.visible&&S.push(E,me,de,G,it.z,null)}}let le=E.children;for(let me=0,de=le.length;me<de;me++)Du(le[me],N,G,H)}function gp(E,N,G,H){let{opaque:U,transmissive:le,transparent:me}=E;b.setupLightsView(G),ye===!0&&ve.setGlobalState(v.clippingPlanes,G),H&&be.viewport(z.copy(H)),U.length>0&&Tl(U,N,G),le.length>0&&Tl(le,N,G),me.length>0&&Tl(me,N,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function _p(E,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let We=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new gi(1,1,{generateMipmaps:!0,type:We?Tn:Ai,minFilter:Rr,samples:ft.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let le=b.state.transmissionRenderTarget[H.id],me=H.viewport||z;le.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);let de=v.getRenderTarget(),_e=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(ce),ie=v.getClearAlpha(),ie<1&&v.setClearColor(16777215,.5),v.clear(),He&&ae.render(G);let Ie=v.toneMapping;v.toneMapping=un;let Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ye===!0&&ve.setGlobalState(v.clippingPlanes,H),Tl(E,G,H),O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let at=0,Tt=N.length;at<Tt;at++){let At=N[at],{object:ht,geometry:Re,material:rt,group:$e}=At;if(rt.side===Ti&&ht.layers.test(H.layers)){let Oi=rt.side;rt.side=vi,rt.needsUpdate=!0,vp(ht,G,H,Re,rt,$e),rt.side=Oi,rt.needsUpdate=!0,We=!0}}We===!0&&(O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le))}v.setRenderTarget(de,_e,Ae),v.setClearColor(ce,ie),Ce!==void 0&&(H.viewport=Ce),v.toneMapping=Ie}function Tl(E,N,G){let H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,le=E.length;U<le;U++){let me=E[U],{object:de,geometry:_e,group:Ae}=me,Ie=me.material;Ie.allowOverride===!0&&H!==null&&(Ie=H),de.layers.test(G.layers)&&vp(de,N,G,_e,Ie,Ae)}}function vp(E,N,G,H,U,le){E.onBeforeRender(v,N,G,H,U,le),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(v,N,G,H,E,le),U.transparent===!0&&U.side===Ti&&U.forceSinglePass===!1?(U.side=vi,U.needsUpdate=!0,v.renderBufferDirect(G,N,H,U,E,le),U.side=Kn,U.needsUpdate=!0,v.renderBufferDirect(G,N,H,U,E,le),U.side=Ti):v.renderBufferDirect(G,N,H,U,E,le),E.onAfterRender(v,N,G,H,U,le)}function Al(E,N,G){N.isScene!==!0&&(N=ct);let H=x.get(E),U=b.state.lights,le=b.state.shadowsArray,me=U.state.version,de=Se.getParameters(E,U.state,le,N,G),_e=Se.getProgramCacheKey(de),Ae=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?j:Y).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",mn),Ae=new Map,H.programs=Ae);let Ie=Ae.get(_e);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===me)return yp(E,de),Ie}else de.uniforms=Se.getUniforms(E),E.onBeforeCompile(de,v),Ie=Se.acquireProgram(de,_e),Ae.set(_e,Ie),H.uniforms=de.uniforms;let Ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ve.uniform),yp(E,de),H.needsLights=S0(E),H.lightsStateVersion=me,H.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function xp(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Ra.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function yp(E,N){let G=x.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function x0(E,N,G,H,U){N.isScene!==!0&&(N=ct),O.resetTextureUnits();let le=N.fog,me=H.isMeshStandardMaterial?N.environment:null,de=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:as,_e=(H.isMeshStandardMaterial?j:Y).get(H.envMap||me),Ae=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!G.morphAttributes.position,We=!!G.morphAttributes.normal,at=!!G.morphAttributes.color,Tt=un;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=v.toneMapping);let At=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=At!==void 0?At.length:0,Re=x.get(H),rt=b.state.lights;if(ye===!0&&(Je===!0||E!==V)){let fi=E===V&&H.id===W;ve.setState(H,E,fi)}let $e=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==rt.state.version||Re.outputColorSpace!==de||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==_e||H.fog===!0&&Re.fog!==le||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ve.numPlanes||Re.numIntersection!==ve.numIntersection)||Re.vertexAlphas!==Ae||Re.vertexTangents!==Ie||Re.morphTargets!==Ce||Re.morphNormals!==We||Re.morphColors!==at||Re.toneMapping!==Tt||Re.morphTargetsCount!==ht)&&($e=!0):($e=!0,Re.__version=H.version);let Oi=Re.currentProgram;$e===!0&&(Oi=Al(H,N,U));let Is=!1,Ni=!1,io=!1,mt=Oi.getUniforms(),Mi=Re.uniforms;if(be.useProgram(Oi.program)&&(Is=!0,Ni=!0,io=!0),H.id!==W&&(W=H.id,Ni=!0),Is||V!==E){be.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",E.projectionMatrix),mt.setValue(L,"viewMatrix",E.matrixWorldInverse);let bi=mt.map.cameraPosition;bi!==void 0&&bi.setValue(L,je.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Ni=!0,io=!0)}if(Re.needsLights&&(rt.state.directionalShadowMap.length>0&&mt.setValue(L,"directionalShadowMap",rt.state.directionalShadowMap,O),rt.state.spotShadowMap.length>0&&mt.setValue(L,"spotShadowMap",rt.state.spotShadowMap,O),rt.state.pointShadowMap.length>0&&mt.setValue(L,"pointShadowMap",rt.state.pointShadowMap,O)),U.isSkinnedMesh){mt.setOptional(L,U,"bindMatrix"),mt.setOptional(L,U,"bindMatrixInverse");let fi=U.skeleton;fi&&(fi.boneTexture===null&&fi.computeBoneTexture(),mt.setValue(L,"boneTexture",fi.boneTexture,O))}U.isBatchedMesh&&(mt.setOptional(L,U,"batchingTexture"),mt.setValue(L,"batchingTexture",U._matricesTexture,O),mt.setOptional(L,U,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",U._indirectTexture,O),mt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",U._colorsTexture,O));let Ki=G.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Ve.update(U,G,Oi),(Ni||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,mt.setValue(L,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Mi.envMap.value=_e,Mi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Mi.envMapIntensity.value=N.environmentIntensity),Mi.dfgLUT!==void 0&&(Mi.dfgLUT.value=Fb()),Ni&&(mt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&y0(Mi,io),le&&H.fog===!0&&De.refreshFogUniforms(Mi,le),De.refreshMaterialUniforms(Mi,H,Be,Oe,b.state.transmissionRenderTarget[E.id]),Ra.upload(L,xp(Re),Mi,O)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ra.upload(L,xp(Re),Mi,O),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(L,"center",U.center),mt.setValue(L,"modelViewMatrix",U.modelViewMatrix),mt.setValue(L,"normalMatrix",U.normalMatrix),mt.setValue(L,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let fi=H.uniformsGroups;for(let bi=0,Ou=fi.length;bi<Ou;bi++){let Kr=fi[bi];$.update(Kr,Oi),$.bind(Kr,Oi)}}return Oi}function y0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function S0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,N,G){let H=x.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=N,x.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let G=x.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};let M0=L.createFramebuffer();this.setRenderTarget=function(E,N=0,G=0){F=E,I=N,B=G;let H=null,U=!1,le=!1;if(E){let de=x.get(E);if(de.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(L.FRAMEBUFFER,de.__webglFramebuffer),z.copy(E.viewport),k.copy(E.scissor),Z=E.scissorTest,be.viewport(z),be.scissor(k),be.setScissorTest(Z),W=-1;return}else if(de.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(de.__hasExternalTextures)O.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ie=E.depthTexture;if(de.__boundDepthTexture!==Ie){if(Ie!==null&&x.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}let _e=E.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(le=!0);let Ae=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?H=Ae[N][G]:H=Ae[N],U=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?H=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[G]:H=Ae,z.copy(E.viewport),k.copy(E.scissor),Z=E.scissorTest}else z.copy(q).multiplyScalar(Be).floor(),k.copy(J).multiplyScalar(Be).floor(),Z=ge;if(G!==0&&(H=M0),be.bindFramebuffer(L.FRAMEBUFFER,H)&&be.drawBuffers(E,H),be.viewport(z),be.scissor(k),be.setScissorTest(Z),U){let de=x.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,G)}else if(le){let de=N;for(let _e=0;_e<E.textures.length;_e++){let Ae=x.get(E.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,Ae.__webglTexture,G,de)}}else if(E!==null&&G!==0){let de=x.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,de.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(E,N,G,H,U,le,me,de=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){be.bindFramebuffer(L.FRAMEBUFFER,_e);try{let Ae=E.textures[de],Ie=Ae.format,Ce=Ae.type;if(!ft.textureFormatReadable(Ie)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ce)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&G>=0&&G<=E.height-U&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),L.readPixels(N,G,H,U,te.convert(Ie),te.convert(Ce),le))}finally{let Ae=F!==null?x.get(F).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=function(E,N,G,H,U,le,me,de=0){return Ls(this,null,function*(){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(N>=0&&N<=E.width-H&&G>=0&&G<=E.height-U){be.bindFramebuffer(L.FRAMEBUFFER,_e);let Ae=E.textures[de],Ie=Ae.format,Ce=Ae.type;if(!ft.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+de),L.readPixels(N,G,H,U,te.convert(Ie),te.convert(Ce),0);let at=F!==null?x.get(F).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,at);let Tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),yield Qm(L,Tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le),L.deleteBuffer(We),L.deleteSync(Tt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(E,N=null,G=0){let H=Math.pow(2,-G),U=Math.floor(E.image.width*H),le=Math.floor(E.image.height*H),me=N!==null?N.x:0,de=N!==null?N.y:0;O.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,me,de,U,le),be.unbindTexture()};let b0=L.createFramebuffer(),E0=L.createFramebuffer();this.copyTextureToTexture=function(E,N,G=null,H=null,U=0,le=null){le===null&&(U!==0?(ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=U,U=0):le=0);let me,de,_e,Ae,Ie,Ce,We,at,Tt,At=E.isCompressedTexture?E.mipmaps[le]:E.image;if(G!==null)me=G.max.x-G.min.x,de=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,Ie=G.min.y,Ce=G.isBox3?G.min.z:0;else{let Ki=Math.pow(2,-U);me=Math.floor(At.width*Ki),de=Math.floor(At.height*Ki),E.isDataArrayTexture?_e=At.depth:E.isData3DTexture?_e=Math.floor(At.depth*Ki):_e=1,Ae=0,Ie=0,Ce=0}H!==null?(We=H.x,at=H.y,Tt=H.z):(We=0,at=0,Tt=0);let ht=te.convert(N.format),Re=te.convert(N.type),rt;N.isData3DTexture?(O.setTexture3D(N,0),rt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(O.setTexture2DArray(N,0),rt=L.TEXTURE_2D_ARRAY):(O.setTexture2D(N,0),rt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let $e=L.getParameter(L.UNPACK_ROW_LENGTH),Oi=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Is=L.getParameter(L.UNPACK_SKIP_PIXELS),Ni=L.getParameter(L.UNPACK_SKIP_ROWS),io=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce);let mt=E.isDataArrayTexture||E.isData3DTexture,Mi=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Ki=x.get(E),fi=x.get(N),bi=x.get(Ki.__renderTarget),Ou=x.get(fi.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,bi.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ou.__webglFramebuffer);for(let Kr=0;Kr<_e;Kr++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(E).__webglTexture,U,Ce+Kr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(N).__webglTexture,le,Tt+Kr)),L.blitFramebuffer(Ae,Ie,me,de,We,at,me,de,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||x.has(E)){let Ki=x.get(E),fi=x.get(N);be.bindFramebuffer(L.READ_FRAMEBUFFER,b0),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,E0);for(let bi=0;bi<_e;bi++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ki.__webglTexture,U,Ce+bi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ki.__webglTexture,U),Mi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fi.__webglTexture,le,Tt+bi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fi.__webglTexture,le),U!==0?L.blitFramebuffer(Ae,Ie,me,de,We,at,me,de,L.COLOR_BUFFER_BIT,L.NEAREST):Mi?L.copyTexSubImage3D(rt,le,We,at,Tt+bi,Ae,Ie,me,de):L.copyTexSubImage2D(rt,le,We,at,Ae,Ie,me,de);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mi?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(rt,le,We,at,Tt,me,de,_e,ht,Re,At.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(rt,le,We,at,Tt,me,de,_e,ht,At.data):L.texSubImage3D(rt,le,We,at,Tt,me,de,_e,ht,Re,At):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,le,We,at,me,de,ht,Re,At.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,le,We,at,At.width,At.height,ht,At.data):L.texSubImage2D(L.TEXTURE_2D,le,We,at,me,de,ht,Re,At);L.pixelStorei(L.UNPACK_ROW_LENGTH,$e),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Oi),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Is),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ni),L.pixelStorei(L.UNPACK_SKIP_IMAGES,io),le===0&&N.generateMipmaps&&L.generateMipmap(rt),be.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){I=0,B=0,F=null,be.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Ng=500,Bg=50,Fg=57,Ug=2500,kg=8e3,ff={high:{pixelRatioCap:1.5},medium:{pixelRatioCap:1.25},low:{pixelRatioCap:1}};var Ia=class r{performanceListeners=new Set;currentQualityLevel="high";currentPixelRatioCap=ff.high.pixelRatioCap;performanceSampleElapsedMs=0;performanceSampleFrameTimeTotalMs=0;performanceSampleFrames=0;smoothedFps=60;lastPublishedFrameTimeMs=1e3/60;lowPerformanceMs=0;stablePerformanceMs=0;onQualityChange=null;setQualityChangeCallback(e){this.onQualityChange=e}addPerformanceListener(e){return this.performanceListeners.add(e),e(this.getPerformanceStats()),()=>{this.performanceListeners.delete(e)}}getQualityLevel(){return this.currentQualityLevel}getPixelRatioCap(){return this.currentPixelRatioCap}getEffectivePixelRatio(){return Math.min(window.devicePixelRatio,this.currentPixelRatioCap)}updateStats(e){let t=e>0?1e3/e:60;this.smoothedFps=ci.lerp(this.smoothedFps,t,.12),this.performanceSampleElapsedMs+=e,this.performanceSampleFrameTimeTotalMs+=e,this.performanceSampleFrames+=1,this.updateQualityTracking(e),this.checkQualityTransition(),this.publishStatsIfNeeded()}forcePublishStats(){this.publishStats()}dispose(){this.performanceListeners.clear(),this.onQualityChange=null}updateQualityTracking(e){this.smoothedFps<Bg?(this.lowPerformanceMs+=e,this.stablePerformanceMs=0):this.smoothedFps>Fg?(this.stablePerformanceMs+=e,this.lowPerformanceMs=0):(this.lowPerformanceMs=0,this.stablePerformanceMs=0)}checkQualityTransition(){if(this.lowPerformanceMs>=Ug){let e=this.getAdjacentQualityLevel("down");e!==this.currentQualityLevel&&this.applyQualityLevel(e)}else if(this.stablePerformanceMs>=kg){let e=this.getAdjacentQualityLevel("up");e!==this.currentQualityLevel&&this.applyQualityLevel(e)}}applyQualityLevel(e){let t=ff[e];this.currentQualityLevel=e,this.currentPixelRatioCap=t.pixelRatioCap,this.lowPerformanceMs=0,this.stablePerformanceMs=0,this.onQualityChange?.(e),this.publishStats()}getAdjacentQualityLevel(e){let t=["low","medium","high"],i=t.indexOf(this.currentQualityLevel);return e==="up"?t[Math.min(i+1,t.length-1)]:t[Math.max(i-1,0)]}publishStatsIfNeeded(){this.performanceSampleElapsedMs>=Ng&&(this.lastPublishedFrameTimeMs=this.performanceSampleFrameTimeTotalMs/Math.max(this.performanceSampleFrames,1),this.performanceSampleElapsedMs=0,this.performanceSampleFrameTimeTotalMs=0,this.performanceSampleFrames=0,this.publishStats())}publishStats(){let e=this.getPerformanceStats();this.performanceListeners.forEach(t=>{t(e)})}getPerformanceStats(){return{fps:Number((1e3/this.lastPublishedFrameTimeMs).toFixed(1)),frameTimeMs:Number(this.lastPublishedFrameTimeMs.toFixed(2)),qualityLevel:this.currentQualityLevel,pixelRatio:Number(this.getEffectivePixelRatio().toFixed(2))}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var La=class r{canvas=null;isPortraitRotated=!1;disposeMediaQuery=null;disposePointerThrottle=null;disposePointerInterceptor=null;transformedPointerEvents=new WeakSet;getIsPortraitRotated(){return this.isPortraitRotated}init(e){this.canvas=e,this.initPortraitDetection(),this.installPointerThrottle(),this.installPointerInterceptor()}dispose(){this.disposeMediaQuery?.(),this.disposePointerThrottle?.(),this.disposePointerInterceptor?.(),this.disposeMediaQuery=null,this.disposePointerThrottle=null,this.disposePointerInterceptor=null,this.canvas=null}initPortraitDetection(){let e=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=e.matches;let t=i=>{let n=this.isPortraitRotated;this.isPortraitRotated=i.matches,i.matches&&!n?this.installPointerInterceptor():!i.matches&&n&&(this.disposePointerInterceptor?.(),this.disposePointerInterceptor=null)};e.addEventListener("change",t),this.disposeMediaQuery=()=>e.removeEventListener("change",t)}installPointerThrottle(){if(!this.canvas)return;let e=this.canvas,t=null,i=null,n=()=>{if(i=null,t){let o=new PointerEvent(t.type,t);this.transformedPointerEvents.add(o),e.dispatchEvent(o),t=null}},s=o=>{this.transformedPointerEvents.has(o)||o.type==="pointermove"&&(this.isPortraitRotated||(o.stopImmediatePropagation(),t=o,i===null&&(i=requestAnimationFrame(n))))},a=new AbortController;e.addEventListener("pointermove",s,{capture:!0,signal:a.signal}),this.disposePointerThrottle=()=>{a.abort(),i!==null&&cancelAnimationFrame(i)}}installPointerInterceptor(){if(!this.isPortraitRotated||!this.canvas)return;let e=this.canvas,t=null,i=null,n=window.innerWidth,s=h=>{let u=new PointerEvent(h.type,{bubbles:h.bubbles,cancelable:h.cancelable,composed:h.composed,clientX:h.clientY,clientY:n-h.clientX,screenX:h.screenY,screenY:n-h.screenX,pointerId:h.pointerId,pointerType:h.pointerType,isPrimary:h.isPrimary,button:h.button,buttons:h.buttons,width:h.width,height:h.height,pressure:h.pressure});this.transformedPointerEvents.add(u),e.dispatchEvent(u)},a=()=>{i=null,t&&(s(t),t=null)},o=h=>{if(!this.transformedPointerEvents.has(h)){if(h.stopImmediatePropagation(),h.type==="pointermove"){t=h,i===null&&(i=requestAnimationFrame(a));return}s(h)}},l=()=>{n=window.innerWidth},c=new AbortController;window.addEventListener("resize",l,{signal:c.signal});for(let h of["pointerdown","pointermove","pointerup","pointercancel"])e.addEventListener(h,o,{capture:!0,signal:c.signal});this.disposePointerInterceptor=()=>{c.abort(),i!==null&&cancelAnimationFrame(i)}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Lr={fov:60,cameraZ:10,cameraZCompact:12,cameraY:4,minDistance:3,maxDistance:6,minPolarAngle:Math.PI/4.8,maxPolarAngle:Math.PI/2},Dr=class r{characterDistanceScale=1;isPortraitRotated=!1;setCharacterDistanceScale(e){this.characterDistanceScale=Math.max(e,1)}getCharacterDistanceScale(){return this.characterDistanceScale}setPortraitRotated(e){this.isPortraitRotated=e}getViewportSettings(e,t){let i=e/t,n=e<520,s=i<.9||this.isPortraitRotated,a=n||s||t<520,o=Lr.cameraZ,l=Lr.minDistance,c=Lr.maxDistance;return a&&(o=Lr.cameraZCompact),l*=this.characterDistanceScale,c*=this.characterDistanceScale,{fov:Lr.fov,cameraZ:o,cameraY:Lr.cameraY,minDistance:l,maxDistance:c,minPolarAngle:Lr.minPolarAngle,maxPolarAngle:Lr.maxPolarAngle}}calculateFarPlane(){return Math.max(4500,4500*this.characterDistanceScale*1.5)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var zg={type:"change"},mf={type:"start"},Vg={type:"end"},iu=new yr,Hg=new Ji,Ub=Math.cos(70*ci.DEG2RAD),Gt=new P,Ci=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pf=1e-6,nu=class extends jo{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new $i,this._lastTargetPosition=new P,this._quat=new $i().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ba,this._sphericalDelta=new ba,this._scale=1,this._panOffset=new P,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new P,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zb.bind(this),this._onPointerDown=kb.bind(this),this._onPointerUp=Hb.bind(this),this._onContextMenu=Zb.bind(this),this._onMouseWheel=Wb.bind(this),this._onKeyDown=Xb.bind(this),this._onTouchStart=Yb.bind(this),this._onTouchMove=qb.bind(this),this._onMouseDown=Vb.bind(this),this._onMouseMove=Gb.bind(this),this._interceptControlDown=Kb.bind(this),this._interceptControlUp=jb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zg),this.update(),this.state=ot.NONE}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Ci:i>Math.PI&&(i-=Ci),n<-Math.PI?n+=Ci:n>Math.PI&&(n-=Ci),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Gt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(iu.origin.copy(this.object.position),iu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(iu.direction))<Ub?this.object.lookAt(this.target):(Hg.setFromNormalAndCoplanarPoint(this.object.up,this.target),iu.intersectPlane(Hg,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pf||this._lastTargetPosition.distanceToSquared(this.target)>pf?(this.dispatchEvent(zg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ci/60*this.autoRotateSpeed*e:Ci/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Gt.copy(n).sub(this.target);let s=Gt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(n,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,s=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function kb(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function zb(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Hb(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vg),this.state=ot.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vb(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ot.DOLLY;break;case Ar.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ot.ROTATE}break;case Ar.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(mf)}function Gb(r){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Wb(r){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(r.preventDefault(),this.dispatchEvent(mf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Vg))}function Xb(r){this.enabled!==!1&&this._handleKeyDown(r)}function Yb(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ot.TOUCH_ROTATE;break;case wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ot.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(mf)}function qb(r){switch(this._trackPointer(r),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ot.NONE}}function Zb(r){this.enabled!==!1&&r.preventDefault()}function Kb(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jb(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Da=class r{viewportService=ee(Dr);camera;controls;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;cameraTarget=new P(0,1,0);originalMinPolarAngle=0;originalMaxPolarAngle=Math.PI/2.45;isPitchRotationEnabled=!0;isCameraRotationLocked=!1;getCameraTarget(){return this.cameraTarget}initCamera(e,t,i){this.baseCameraFov=i.fov,this.camera=new li(this.baseCameraFov,e/t,.1,1e3),this.camera.position.set(0,i.cameraY,i.cameraZ),this.cameraOriginalPosition=this.camera.position.clone()}initControls(e,t){this.controls=new nu(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=t.minDistance,this.controls.maxDistance=t.maxDistance,this.controls.minPolarAngle=t.minPolarAngle,this.controls.maxPolarAngle=t.maxPolarAngle,this.originalMinPolarAngle=t.minPolarAngle,this.originalMaxPolarAngle=t.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update()}setCameraDistanceScale(e){let t=this.viewportService.getCharacterDistanceScale();if(this.viewportService.setCharacterDistanceScale(e),this.updateCameraFarPlane(),!this.controls)return;let i=this.controls.domElement;if(!i)return;let n=this.viewportService.getViewportSettings(i.clientWidth,i.clientHeight);this.controls.minDistance=n.minDistance,this.controls.maxDistance=n.maxDistance;let s=this.viewportService.getCharacterDistanceScale();if(t!==s){let a=new P().subVectors(this.camera.position,this.controls.target),o=a.length(),l=s/t,c=Math.max(n.minDistance,Math.min(n.maxDistance,o*l));a.normalize().multiplyScalar(c),this.camera.position.copy(this.controls.target).add(a)}this.controls.update()}updateCameraFarPlane(){let e=this.viewportService.calculateFarPlane();this.camera.far=e,this.camera.updateProjectionMatrix()}setCameraFocus(e){this.cameraTarget.set(e.x,e.y,e.z),this.controls&&this.controls.target.copy(this.cameraTarget)}setPitchRotationEnabled(e){this.controls&&(e&&this.isCameraRotationLocked||e!==this.isPitchRotationEnabled&&(this.isPitchRotationEnabled=e,e?(this.controls.minPolarAngle=this.originalMinPolarAngle,this.controls.maxPolarAngle=this.originalMaxPolarAngle):(this.controls.minPolarAngle=Math.PI/2.5,this.controls.maxPolarAngle=Math.PI/2.5)))}setCameraRotationLocked(e){if(this.controls)if(this.isCameraRotationLocked=e,this.controls.enableRotate=!e,e){let t=this.controls.getPolarAngle();this.controls.minPolarAngle=t,this.controls.maxPolarAngle=t}else this.controls.minPolarAngle=this.originalMinPolarAngle,this.controls.maxPolarAngle=this.originalMaxPolarAngle}setCameraPolarAngle(e){if(!this.controls)return;let t=this.controls.target,i=this.camera.position.distanceTo(t),n=this.controls.getAzimuthalAngle();this.camera.position.set(t.x+i*Math.sin(e)*Math.sin(n),t.y+i*Math.cos(e),t.z+i*Math.sin(e)*Math.cos(n)),this.controls.update()}getFacingRotationY(e,t){return Math.atan2(t.x-e.x,t.z-e.z)}updateControls(e){this.controls.enabled=!this.timeSlowActive,this.controls.target.copy(this.cameraTarget),this.controls.update(e)}handleResize(e,t){let i=this.viewportService.getViewportSettings(e,t);if(this.camera.aspect=e/t,this.camera.fov=i.fov,this.camera.updateProjectionMatrix(),this.camera.position.set(0,i.cameraY,i.cameraZ),this.cameraOriginalPosition=new P(0,i.cameraY,i.cameraZ),this.baseCameraFov=i.fov,this.controls.minDistance=i.minDistance,this.controls.maxDistance=i.maxDistance,this.controls.minPolarAngle=i.minPolarAngle,this.controls.maxPolarAngle=i.maxPolarAngle,this.originalMinPolarAngle=i.minPolarAngle,this.originalMaxPolarAngle=i.maxPolarAngle,!this.isPitchRotationEnabled){let n=this.controls.getPolarAngle();this.controls.minPolarAngle=n,this.controls.maxPolarAngle=n}this.isPitchRotationEnabled&&this.controls.target.copy(this.cameraTarget),this.controls.update(),this.updateCameraFarPlane()}dispose(){this.controls?.dispose()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var St=class r{performanceService=ee(Ia);pointerService=ee(La);viewportService=ee(Dr);cameraService=ee(Da);scene;canvas;animationFrameId=null;lastFrameTime=0;isPaused=!1;groundMaterial=null;arenaBoundaryGroup=null;resizeTimeout=null;frameListeners=new Set;visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);animateBound=e=>this.animate(e);arenaBounds=hr;groundMesh=null;get camera(){return this.cameraService.camera}get renderer(){return this._renderer}get controls(){return this.cameraService.controls}get cameraOriginalPosition(){return this.cameraService.cameraOriginalPosition}get baseCameraFov(){return this.cameraService.baseCameraFov}set baseCameraFov(e){this.cameraService.baseCameraFov=e}get timeSlowActive(){return this.cameraService.timeSlowActive}set timeSlowActive(e){this.cameraService.timeSlowActive=e}_renderer;init(e){this.canvas=e,this.viewportService.setPortraitRotated(this.pointerService.getIsPortraitRotated()),this.pointerService.init(e),this.initScene(),this.setupPerformanceCallback(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.pointerService.dispose(),this.cameraService.dispose(),this.performanceService.dispose(),this.disposeObject(this.arenaBoundaryGroup),this.arenaBoundaryGroup=null,this.groundMaterial?.dispose(),this.groundMaterial=null,this.frameListeners.clear(),this.scene?.clear(),this._renderer?.dispose(),this._renderer?.forceContextLoss()}compileScene(){this._renderer.compile(this.scene,this.camera);let e=new gi(1,1);this._renderer.setRenderTarget(e),this._renderer.render(this.scene,this.camera),this._renderer.setRenderTarget(null),e.dispose()}setCameraDistanceScale(e){this.cameraService.setCameraDistanceScale(e)}setArenaBounds(){this.arenaBounds=hr,this.updateGroundSize()}setCameraFocus(e){this.cameraService.setCameraFocus(e)}setPitchRotationEnabled(e){this.cameraService.setPitchRotationEnabled(e)}setCameraRotationLocked(e){this.cameraService.setCameraRotationLocked(e)}setCameraPolarAngle(e){this.cameraService.setCameraPolarAngle(e)}getFacingRotationY(e,t){return this.cameraService.getFacingRotationY(e,t)}addFrameListener(e){return this.frameListeners.add(e),()=>{this.frameListeners.delete(e)}}addPerformanceListener(e){return this.performanceService.addPerformanceListener(e)}getQualityLevel(){return this.performanceService.getQualityLevel()}setupPerformanceCallback(){this.performanceService.setQualityChangeCallback(()=>{this._renderer&&this._renderer.setPixelRatio(this.performanceService.getEffectivePixelRatio())})}initScene(){let e=this.canvas,t=e.clientWidth,i=e.clientHeight,n=this.viewportService.getViewportSettings(t,i);this.scene=new Lo,this.scene.background=new Le(657931),this.cameraService.initCamera(t,i,n),this._renderer=new Qh({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this._renderer.setSize(t,i),this._renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this._renderer.toneMapping=$o,this._renderer.toneMappingExposure=1.2,this.cameraService.initControls(this._renderer.domElement,n),this.addLighting(),this.createGround(),this.createArenaBoundaryObstacles(),this.compileScene()}addLighting(){let e=new Ko(16777215,20);this.scene.add(e);let t=new Ma(16777215,4);t.position.set(5,10,5),this.scene.add(t);let i=new Ma(16777215,4);i.position.set(-5,8,-3),this.scene.add(i)}createGround(){let e=this.arenaBounds.maxX-this.arenaBounds.minX,t=this.arenaBounds.maxZ-this.arenaBounds.minZ,i=new Jn().load("assets/texture1.png");i.wrapS=ss,i.wrapT=ss;let n=new _t({map:i,color:136,roughness:.4,metalness:.8,emissive:736064,emissiveIntensity:.25});this.groundMaterial=n;let s=new br(e,t),a=new Ge(s,n);a.rotation.x=-Math.PI/2,a.position.set(0,0,0),this.scene.add(a),this.groundMesh=a}createArenaBoundaryObstacles(){let e=new Bt;this.arenaBoundaryGroup=e,this.scene.add(e)}updateGroundSize(){if(!this.groundMesh)return;let e=this.arenaBounds.maxX-this.arenaBounds.minX,t=this.arenaBounds.maxZ-this.arenaBounds.minZ,i=this.groundMesh.geometry;this.groundMesh.geometry=new br(e,t),i.dispose()}animate(e=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(this.animateBound);let t=this.lastFrameTime===0?1e3/60:e-this.lastFrameTime;this.lastFrameTime=e;let i=Math.min(t/1e3,1/20);this.frameListeners.forEach(n=>{n(i,e)}),this.cameraService.updateControls(i),this._renderer.render(this.scene,this.camera),this.performanceService.updateStats(t)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this._renderer)return;let e=this.canvas.clientWidth,t=this.canvas.clientHeight;this.viewportService.setPortraitRotated(this.pointerService.getIsPortraitRotated()),this.cameraService.handleResize(e,t),this._renderer.setSize(e,t),this._renderer.setPixelRatio(this.performanceService.getEffectivePixelRatio()),this.performanceService.forcePublishStats()}disposeObject(e){e&&e.traverse(t=>{if(t instanceof Ge)if(t.geometry.dispose(),Array.isArray(t.material))t.material.forEach(i=>{for(let n of Object.values(i))n instanceof wi&&n.dispose();i.dispose()});else{for(let i of Object.values(t.material))i instanceof wi&&i.dispose();t.material.dispose()}})}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Jb="assets/texture.jpg",Gg=512,gf=1,Oa=class r{baseImagePromise=null;registry=new Map;applyToMesh(e,t,i){return this.loadBaseImage().then(n=>{if(e.userData.disposed)return;let s=this.registry.get(e);if(s){s.material=t,t.map=s.texture,t.needsUpdate=!0,this.redraw(s,n,i);return}let a=document.createElement("canvas");a.width=Gg,a.height=Gg;let o=a.getContext("2d");if(!o)return;let l=new ls(a);l.colorSpace=Ut,l.anisotropy=4;let c={canvas:a,ctx:o,texture:l,material:t,currentSize:i};this.redraw(c,n,i),t.map=l,t.needsUpdate=!0,this.registry.set(e,c)})}updateSize(e,t){let i=this.registry.get(e);!i||i.currentSize===t||this.loadBaseImage().then(n=>{this.registry.has(e)&&this.redraw(i,n,t)})}disposeForMesh(e){let t=this.registry.get(e);t&&(t.texture.dispose(),this.registry.delete(e))}disposeAll(){this.registry.forEach(e=>e.texture.dispose()),this.registry.clear(),this.baseImagePromise=null}redraw(e,t,i){let{ctx:n,canvas:s,texture:a}=e;e.currentSize=i,n.clearRect(0,0,s.width,s.height),n.drawImage(t,0,0,s.width,s.height);let o=i===1e3?"\u{1F341}":this.formatSize(i),l=s.width/gf,c=i===1e3?l*.08:Math.floor(l*(.2-1e-4*i));n.font=`900 ${c}px "Inter", "Segoe UI", system-ui, sans-serif`,n.textAlign="center",n.textBaseline="middle";for(let h=0;h<gf;h++)for(let u=0;u<gf;u++){let d=u*l+l*.25,f=h*l+l*.35;this.drawSizeBadge(n,d,f,c,o)}a.needsUpdate=!0}drawSizeBadge(e,t,i,n,s){let a=n*1.4,o=e.createRadialGradient(t,i,n*.2,t,i,a);o.addColorStop(0,"rgba(0, 0, 0, 0.6)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.fillRect(t-a,i-a,a*2,a*2),e.lineJoin="round",e.lineWidth=Math.max(2,n*.14),e.strokeStyle="rgba(0, 0, 0, 0.85)",e.strokeText(s,t,i),e.shadowColor="rgba(0, 0, 0, 0.55)",e.shadowBlur=n*.35,e.fillStyle="#ffffff",e.fillText(s,t,i),e.shadowBlur=0,e.shadowColor="transparent"}formatSize(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e4?`${Math.round(e/1e3)}K`:e>=1e3?`${(e/1e3).toFixed(1)}K`:`${Math.round(e)}`}loadBaseImage(){return this.baseImagePromise||(this.baseImagePromise=new Promise((e,t)=>{let i=new Image;i.onload=()=>e(i),i.onerror=n=>t(n),i.src=Jb})),this.baseImagePromise}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var $b=/^[og]\s*(.+)?/,Qb=/^mtllib /,eE=/^usemtl /,tE=/^usemap /,Wg=/\s+/,Xg=new P,_f=new P,Yg=new P,qg=new P,en=new P,ru=new Le;function iE(){let r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,s){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let n=this.vertices,s=this.object.geometry.vertices;s.push(n[e+0],n[e+1],n[e+2]),s.push(n[t+0],n[t+1],n[t+2]),s.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let n=this.normals,s=this.object.geometry.normals;s.push(n[e+0],n[e+1],n[e+2]),s.push(n[t+0],n[t+1],n[t+2]),s.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){let n=this.vertices,s=this.object.geometry.normals;Xg.fromArray(n,e),_f.fromArray(n,t),Yg.fromArray(n,i),en.subVectors(Yg,_f),qg.subVectors(Xg,_f),en.cross(qg),en.normalize(),s.push(en.x,en.y,en.z),s.push(en.x,en.y,en.z),s.push(en.x,en.y,en.z)},addColor:function(e,t,i){let n=this.colors,s=this.object.geometry.colors;n[e]!==void 0&&s.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&s.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&s.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){let n=this.uvs,s=this.object.geometry.uvs;s.push(n[e+0],n[e+1]),s.push(n[t+0],n[t+1]),s.push(n[i+0],n[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,s,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let _=this.normals.length;u=this.parseNormalIndex(o,_),d=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let _=this.uvs.length;u=this.parseUVIndex(n,_),d=this.parseUVIndex(s,_),f=this.parseUVIndex(a,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){let s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],n))}};return r.startObject("",!1),r}var su=class extends wa{constructor(e){super(e),this.materials=null}load(e,t,i,n){let s=this,a=new qo(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){let t=new iE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(Wg);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ru.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Ut),t.colors.push(ru.r,ru.g,ru.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(Wg),f=[];for(let g=0,m=d.length;g<m;g++){let p=d[g];if(p.length>0){let y=p.split("/");f.push(y)}}let _=f[0];for(let g=1,m=f.length-1;g<m;g++){let p=f[g],y=f[g+1];t.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let _=0,g=u.length;_<g;_++){let m=u[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((n=$b.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);t.startObject(u)}else if(eE.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(Qb.test(c))t.materialLibraries.push(c.substring(7).trim());else if(tE.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let s=new Bt;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",_=!1;if(h.vertices.length===0)continue;let g=new zt;g.setAttribute("position",new tt(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new tt(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new tt(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new tt(h.uvs,2));let m=[];for(let y=0,M=u.length;y<M;y++){let S=u[y],b=S.name+"_"+S.smooth+"_"+_,T=t.materials[b];if(this.materials!==null){if(T=this.materials.create(S.name),d&&T&&!(T instanceof Sr)){let w=new Sr;kt.prototype.copy.call(w,T),w.color.copy(T.color),T=w}else if(f&&T&&!(T instanceof jn)){let w=new jn({size:10,sizeAttenuation:!1});kt.prototype.copy.call(w,T),w.color.copy(T.color),w.map=T.map,T=w}}T===void 0&&(d?T=new Sr:f?T=new jn({size:1,sizeAttenuation:!1}):T=new Xo,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=_,t.materials[b]=T),m.push(T)}let p;if(m.length>1){for(let y=0,M=u.length;y<M;y++){let S=u[y];g.addGroup(S.groupStart,S.groupCount,y)}d?p=new ga(g,m):f?p=new os(g,m):p=new Ge(g,m)}else d?p=new ga(g,m[0]):f?p=new os(g,m[0]):p=new Ge(g,m[0]);p.name=c.name,s.add(p)}else if(t.vertices.length>0){let o=new jn({size:1,sizeAttenuation:!1}),l=new zt;l.setAttribute("position",new tt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new tt(t.colors,3)),o.vertexColors=!0);let c=new os(l,o);s.add(c)}return s}};var nE="assets/models/hominid_skull.obj3e95cd92-63a9-48ec-a41f-461a344caf62.obj",rE="assets/texture.jpg",sE=1.6,aE=new P(0,.2,.4),oE=new hn(Math.PI,-Math.PI,-Math.PI),Na=class r{skullTemplatePromise=null;skullTexture=null;attachSkullModel(e,t){return this.loadSkullTexture().then(i=>(t.map=i,t.needsUpdate=!0,this.loadSkullTemplate())).then(i=>{let n=this.createSkullAnchor(i,t);if(e.userData.disposed){this.disposeSkullAnchor(n,t);return}e.add(n)}).catch(()=>{if(e.userData.disposed){t.dispose();return}})}loadSkullTexture(){return this.skullTexture?Promise.resolve(this.skullTexture):new Jn().loadAsync(rE).then(t=>(t.colorSpace=Ut,this.skullTexture=t,t))}loadSkullTemplate(){if(!this.skullTemplatePromise){let e=new su;this.skullTemplatePromise=e.loadAsync(nE).then(t=>{let i=this.normalizeSkullTemplate(t),s=new Hi().setFromObject(i).getSize(new P),a=Math.max(s.x,s.y,s.z);return a>0&&i.scale.setScalar(sE/a),i})}return this.skullTemplatePromise}normalizeSkullTemplate(e){e.updateMatrixWorld(!0);let t=new Bt,i=[];e.traverse(a=>{if(!(a instanceof Ge))return;let o=a.geometry.clone();o.applyMatrix4(a.matrixWorld);let l=new Ge(o);t.add(l),i.push(l)});let s=new Hi().setFromObject(t).getCenter(new P);return i.forEach(a=>{a.geometry.translate(-s.x,-s.y,-s.z)}),t}createSkullAnchor(e,t){let i=new Bt;i.position.copy(aE),i.rotation.copy(oE);let n=e.clone(!0);return n.traverse(s=>{s instanceof Ge&&(s.geometry=s.geometry.clone(),s.material=t,s.castShadow=!0,s.receiveShadow=!0,s.userData.isSkull=!0)}),i.add(n),i}disposeSkullAnchor(e,t){e.traverse(i=>{i instanceof Ge&&i.geometry.dispose()}),t.dispose()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};function Qn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function i_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fa={duration:.5,overwrite:!1,delay:0},Nf,ti,vt,nn=1e8,dt=1/nn,Tf=Math.PI*2,lE=Tf/4,cE=0,n_=Math.sqrt,hE=Math.cos,uE=Math.sin,Wt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},mu=function(e){return typeof e>"u"},Pn=function(e){return typeof e=="object"},Ii=function(e){return e!==!1},Bf=function(){return typeof window<"u"},au=function(e){return Ct(e)||Wt(e)},r_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ui=Array.isArray,dE=/random\([^)]+\)/g,fE=/,\s*/g,Zg=/(?:-?\.?\d|\.)+/gi,Ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uf=/[+-]=-?[.\d]+/,pE=/[^,'"\[\]\s]+/gi,mE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,Cn,Af,kf,Yi={},hu={},s_,a_=function(e){return(hu=Ua(e,Yi))&&di},gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},fl=function(e,t){return!t&&console.warn(e)},o_=function(e,t){return e&&(Yi[e]=t)&&hu&&(hu[e]=t)||Yi},pl=function(){return 0},gE={suppressEvents:!0,isStart:!0,kill:!1},ou={suppressEvents:!0,kill:!1},_E={suppressEvents:!0},zf={},Nr=[],wf={},l_,Ri={},xf={},Kg=30,lu=[],Hf="",Vf=function(e){var t=e[0],i,n;if(Pn(t)||Ct(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=lu.length;n--&&!lu[n].targetTest(t););i=lu[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Yf(e[n],i)))||e.splice(n,1);return e},Br=function(e){return e._gsap||Vf(rn(e))[0]._gsap},Gf=function(e,t,i){return(i=e[t])&&Ct(i)?e[t]():mu(i)&&e.getAttribute&&e.getAttribute(t)||i},xi=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Ms=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},vE=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},uu=function(){var e=Nr.length,t=Nr.slice(0),i,n;for(wf={},Nr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Wf=function(e){return!!(e._initted||e._startAt||e.add)},c_=function(e,t,i,n){Nr.length&&!ti&&uu(),e.render(t,i,n||!!(ti&&t<0&&Wf(e))),Nr.length&&!ti&&uu()},h_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pE).length<2?t:Wt(e)?e.trim():e},u_=function(e){return e},qi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xE=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},jg=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pn(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},du=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},hl=function(e){var t=e.parent||bt,i=e.keyframes?xE(ui(e.keyframes)):qi;if(Ii(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},yE=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},d_=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},_u=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},SE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cf=function(e,t,i,n){return e._startAt&&(ti?e._startAt.revert(ou):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},ME=function r(e){return!e||e._ts&&r(e.parent)},Jg=function(e){return e._repeat?ka(e._tTime,e=e.duration()+e._rDelay)*e:0},ka=function(e,t){var i=Math.floor(e=Mt(e/t));return e&&i===e?i-1:i},fu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vu=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},xu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Mt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vu(e),i._dirty||vs(i,e)),e},f_=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=fu(e.rawTime(),t),(!t._dur||_l(0,t.totalDuration(),i)-t._tTime>dt)&&t.render(i,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-dt}},Rn=function(e,t,i,n){return t.parent&&Fr(t),t._start=Mt((tr(i)?i:i||e!==bt?tn(e,i,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),d_(e,t,"_first","_last",e._sort?"_start":0),Rf(t)||(e._recent=t),n||f_(e,t),e._ts<0&&xu(e,e._tTime),e},p_=function(e,t){return(Yi.ScrollTrigger||gu("scrollTrigger",t))&&Yi.ScrollTrigger.create(t,e)},m_=function(e,t,i,n,s){if(Kf(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!ti&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&l_!==Pi.frame)return Nr.push(e),e._lazy=[s,n],1},bE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Rf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},EE=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&bE(e)&&!(!e._initted&&Rf(e))||(e._ts<0||e._dp._ts<0)&&!Rf(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=_l(0,e._tDur,t),h=ka(l,o),e._yoyo&&h&1&&(a=1-a),h!==ka(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ti||n||e._zTime===dt||!t&&e._zTime){if(!e._initted&&m_(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?dt:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Cf(e,t,i,!0),e._onUpdate&&!i&&Xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Fr(e,1),!i&&!ti&&(Xi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TE=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},za=function(e,t,i,n){var s=e._repeat,a=Mt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Mt(a*(s+1)+e._rDelay*s):a,o>0&&!n&&xu(e,e._tTime=e._tDur*o),e.parent&&vu(e),i||vs(e.parent,e),e},$g=function(e){return e instanceof ei?vs(e):za(e,e._dur)},AE={_start:0,endTime:pl,totalDuration:pl},tn=function r(e,t,i){var n=e.labels,s=e._recent||AE,a=e.duration()>=nn?s.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(ui(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},ul=function(e,t,i){var n=tr(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ii(l.vars.inherit)&&l.parent;a.immediateRender=Ii(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},Ur=function(e,t){return e||e===0?t(e):t},_l=function(e,t,i){return i<e?e:i>t?t:i},ii=function(e,t){return!Wt(e)||!(t=mE.exec(e))?"":t[1]},wE=function(e,t,i){return Ur(i,function(n){return _l(e,t,n)})},Pf=[].slice,g_=function(e,t){return e&&Pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pn(e[0]))&&!e.nodeType&&e!==Cn},CE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Wt(n)&&!t||g_(n,1)?(s=i).push.apply(s,rn(n)):i.push(n)})||i},rn=function(e,t,i){return vt&&!t&&vt.selector?vt.selector(e):Wt(e)&&!i&&(Af||!Ha())?Pf.call((t||kf).querySelectorAll(e),0):ui(e)?CE(e,i):g_(e)?Pf.call(e,0):e?[e]:[]},If=function(e){return e=rn(e)[0]||fl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return rn(t,i.querySelectorAll?i:i===e?fl("Invalid scope")||kf.createElement("div"):e)}},__=function(e){return e.sort(function(){return .5-Math.random()})},v_=function(e){if(Ct(e))return e;var t=Pn(e)?e:{each:e},i=xs(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,u=n;return Wt(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,y,M,S,b,T,w,R,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,nn])[1],!v){for(w=-nn;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:n%v,y=v===nn?0:l?g*u/v-.5:n/v|0,w=0,R=nn,T=0;T<g;T++)M=T%v-p,S=y-(T/v|0),m[T]=b=c?Math.abs(c==="y"?S:M):n_(M*M+S*S),b>w&&(w=b),b<R&&(R=b);n==="random"&&__(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=ii(t.amount||t.each)||0,i=i&&g<0?w_(i):i}return g=(m[d]-m.min)/m.max||0,Mt(m.b+(i?i(g):g)*m.v)+m.u}},Lf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Mt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(tr(i)?0:ii(i))}},x_=function(e,t){var i=ui(e),n,s;return!i&&Pn(e)&&(n=i=e.radius||nn,e.values?(e=rn(e.values),(s=!tr(e[0]))&&(n*=n)):e=Lf(e.increment)),Ur(t,i?Ct(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=nn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:a,s||h===a||tr(a)?h:h+ii(a)}:Lf(e))},y_=function(e,t,i,n){return Ur(ui(e)?!t:i===!0?!!(i=0):!n,function(){return ui(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},RE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},PE=function(e,t){return function(i){return e(parseFloat(i))+(t||ii(i))}},IE=function(e,t,i){return M_(e,t,0,1,i)},S_=function(e,t,i){return Ur(i,function(n){return e[~~t(n)]})},LE=function r(e,t,i){var n=t-e;return ui(e)?S_(e,r(0,e.length),t):Ur(i,function(s){return(n+(s-e)%n)%n+e})},DE=function r(e,t,i){var n=t-e,s=n*2;return ui(e)?S_(e,r(0,e.length-1),t):Ur(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},Va=function(e){return e.replace(dE,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(fE);return y_(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},M_=function(e,t,i,n,s){var a=t-e,o=n-i;return Ur(s,function(l){return i+((l-e)/a*o||0)})},OE=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Wt(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(ui(e)&&!ui(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=Ua(ui(e)?[]:{},e));if(!h){for(l in t)qf.call(o,e,l,"get",t[l]);s=function(_){return $f(_,o)||(a?e.p:e)}}}return Ur(i,s)},Qg=function(e,t,i){var n=e.labels,s=nn,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Xi=function(e,t,i){var n=e.vars,s=n[t],a=vt,o=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Nr.length&&uu(),o&&(vt=o),h=l?s.apply(c,l):s.call(c),vt=a,h},ll=function(e){return Fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ti),e.progress()<1&&Xi(e,"onInterrupt"),e},Ba,b_=[],E_=function(e){if(e)if(e=!e.name&&e.default||e,Bf()||e.headless){var t=e.name,i=Ct(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:pl,render:$f,add:qf,kill:jE,modifier:KE,rawVars:0},a={targetTest:0,get:0,getSetter:yu,aliases:{},register:0};if(Ha(),e!==n){if(Ri[t])return;qi(n,qi(du(e,s),a)),Ua(n.prototype,Ua(s,du(e,a))),Ri[n.prop=t]=n,e.targetTest&&(lu.push(n),zf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}o_(t,n),e.register&&e.register(di,n,yi)}else b_.push(e)},ut=255,cl={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},yf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},T_=function(e,t,i){var n=e?tr(e)?[e>>16,e>>8&ut,e&ut]:0:cl.black,s,a,o,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cl[e])n=cl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ut,n&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Zg),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=yf(l+1/3,s,a),n[1]=yf(l,s,a),n[2]=yf(l-1/3,s,a);else if(~e.indexOf("="))return n=e.match(Ff),i&&n.length<4&&(n[3]=1),n}else n=e.match(Zg)||cl.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/ut,a=n[1]/ut,o=n[2]/ut,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},A_=function(e){var t=[],i=[],n=-1;return e.split(er).forEach(function(s){var a=s.match(Ss)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},e_=function(e,t,i){var n="",s=(e+n).match(er),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=T_(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=A_(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(er,"1").split(Ss),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(er),u=c.length-1;o<u;o++)n+=c[o]+s[o];return n+c[u]},er=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),NE=/hsl[a]?\(/,Xf=function(e){var t=e.join(" "),i;if(er.lastIndex=0,er.test(t))return i=NE.test(t),e[1]=e_(e[1],i),e[0]=e_(e[0],i,A_(e[1])),!0},ml,Pi=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(m){var p=r()-n,y=m===!0,M,S,b,T;if((p>e||p<0)&&(i+=p-t),n+=p,b=n-i,M=b-a,(M>0||y)&&(T=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=M+(M>=s?4:s-M),S=1),y||(l=c(g)),S)for(f=0;f<o.length;f++)o[f](b,d,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){s_&&(!Af&&Bf()&&(Cn=Af=window,kf=Cn.document||{},Yi.gsap=di,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(di.version),a_(hu||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),b_.forEach(E_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ml=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ml=0,c=pl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,y){var M=p?function(S,b,T,w){m(S,b,T,w),u.remove(M)}:m;return u.remove(m),o[y?"unshift":"push"](M),Ha(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Ha=function(){return!ml&&Pi.wake()},Ye={},BE=/^[\d.\-M][\d.\-,\s]/,FE=/["']/g,UE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(FE,"").trim():+c,n=l.substr(o+1).trim();return t},kE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},zE=function(e){var t=(e+"").split("("),i=Ye[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[UE(t[1])]:kE(e).split(",").map(h_)):Ye._CE&&BE.test(e)?Ye._CE("",e):i},w_=function(e){return function(t){return 1-e(1-t)}},C_=function r(e,t){for(var i=e._first,n;i;)i instanceof ei?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},xs=function(e,t){return e&&(Ct(e)?e:Ye[e]||zE(e))||t},bs=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return xi(e,function(o){Ye[o]=Yi[o]=s,Ye[a=o.toLowerCase()]=i;for(var l in s)Ye[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},R_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sf=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/Tf*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*uE((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:R_(o);return s=Tf/s,l.config=function(c,h){return r(e,c,h)},l},Mf=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:R_(i);return n.config=function(s){return r(e,s)},n};xi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;bs(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;bs("Elastic",Sf("in"),Sf("out"),Sf());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};bs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(n_(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-hE(r*lE)+1});bs("Back",Mf("in"),Mf("out"),Mf());Ye.SteppedEase=Ye.steps=Yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-dt;return function(o){return((n*_l(0,a,o)|0)+s)*i}}};Fa.ease=Ye["quad.out"];xi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Hf+=r+","+r+"Params,"});var Yf=function(e,t){this.id=cE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gf,this.set=t?t.getSetter:yu},gl=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,za(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),ml||Pi.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,za(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Ha(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xu(this,i),!s._dp||s.parent||f_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===dt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),c_(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jg(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jg(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ka(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?fu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-dt?0:this._rts,this.totalTime(_l(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),vu(this),SE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ha(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dt&&(this._tTime-=dt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Mt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Rn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ii(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fu(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_E);var n=ti;return ti=i,Wf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ti=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,$g(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,$g(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(tn(this,i),Ii(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Ii(n)),this._dur||(this._zTime=-dt),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-dt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-dt)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=Ct(i)?i:u_,l=function(){var h=n.then;n.then=null,s&&s(),Ct(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){ll(this)},r}();qi(gl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var ei=function(r){i_(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ii(i.sortChildren),bt&&Rn(i.parent||bt,Qn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&p_(Qn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return ul(0,arguments,this),this},t.from=function(n,s,a){return ul(1,arguments,this),this},t.fromTo=function(n,s,a,o){return ul(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,hl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(n,s,tn(this,a),1),this},t.call=function(n,s,a){return Rn(this,Pt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Pt(n,a,tn(this,l)),this},t.staggerFrom=function(n,s,a,o,l,c,h){return a.runBackwards=1,hl(a).immediateRender=Ii(a.immediateRender),this.staggerTo(n,s,a,o,l,c,h)},t.staggerFromTo=function(n,s,a,o,l,c,h,u){return o.startAt=a,hl(o).immediateRender=Ii(o.immediateRender),this.staggerTo(n,s,o,l,c,h,u)},t.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Mt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,y,M,S,b,T,w;if(this!==bt&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,S=this._start,M=this._ts,p=!M,u&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,a);if(d=Mt(h%m),h===l?(g=this._repeat,d=c):(b=Mt(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=ka(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),T&&g&1&&(d=c-d,w=1),g!==b&&!this._lock){var R=T&&b&1,v=R===(T&&g&1);if(g<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Mt(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Xi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;C_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=TE(this,Mt(o),Mt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!s&&!b&&(Xi(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-dt);break}}f=_}else{f=this._last;for(var A=n<0?n:d;f;){if(_=f._prev,(f._act||A<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,a||ti&&Wf(f)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=A?-dt:dt);break}}f=_}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-dt)._zTime=d>=o?1:-1,this._ts))return this._start=S,vu(this),this.render(n,s,a);this._onUpdate&&!s&&Xi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Fr(this,1),!s&&!(n<0&&!o)&&(h||o||!l)&&(Xi(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(tr(s)||(s=tn(this,s,n)),!(n instanceof gl)){if(ui(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Wt(n))return this.addLabel(n,s);if(Ct(n))n=Pt.delayedCall(0,n);else return this}return this!==n?Rn(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-nn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return Wt(n)?this.removeLabel(n):Ct(n)?this.killTweensOf(n):(n.parent===this&&_u(this,n),n===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(Pi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=tn(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=Pt.delayedCall(0,s||pl,a);return o.data="isPause",this._hasPause=1,Rn(this,o,tn(this,n))},t.removePause=function(n){var s=this._first;for(n=tn(this,n);s;)s._start===n&&s.data==="isPause"&&Fr(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Or!==o[l]&&o[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=rn(n),l=this._first,c=tr(s),h;l;)l instanceof Pt?vE(l._targets,o)&&(c?(!Or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=tn(a,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Pt.to(a,qi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||dt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&za(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,qi({startAt:{time:tn(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Qg(this,tn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Qg(this,tn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=Mt(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return vs(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),vs(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,l=nn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Rn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Mt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;za(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(bt._ts&&(c_(bt,fu(n,bt)),l_=Pi.frame),Pi.frame>=Kg){Kg+=Li.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Li.autoSleep&&Pi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pi.sleep()}}},e}(gl);qi(ei.prototype,{_lock:0,_hasPause:0,_forcing:0});var HE=function(e,t,i,n,s,a,o){var l=new yi(this._pt,e,t,0,1,Jf,null,s),c=0,h=0,u,d,f,_,g,m,p,y;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Va(n)),a&&(y=[i,n],a(y,e,t),i=y[0],n=y[1]),d=i.match(vf)||[];u=vf.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ms(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=vf.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Uf.test(n)||p)&&(l.e=0),this._pt=l,l},qf=function(e,t,i,n,s,a,o,l,c,h){Ct(n)&&(n=n(s||0,e,a));var u=e[t],d=i!=="get"?i:Ct(u)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Ct(u)?c?YE:L_:jf,_;if(Wt(n)&&(~n.indexOf("random(")&&(n=Va(n)),n.charAt(1)==="="&&(_=Ms(d,n)+(ii(d)||0),(_||_===0)&&(n=_))),!h||d!==n||Df)return!isNaN(d*n)&&n!==""?(_=new yi(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?ZE:D_,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&gu(t,n),HE.call(this,e,t,d,n,f,l||Li.stringFilter,c))},VE=function(e,t,i,n,s){if(Ct(e)&&(e=dl(e,s,t,i,n)),!Pn(e)||e.style&&e.nodeType||ui(e)||r_(e))return Wt(e)?dl(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=dl(e[o],s,t,i,n);return a},Zf=function(e,t,i,n,s,a){var o,l,c,h;if(Ri[e]&&(o=new Ri[e]).init(s,o.rawVars?t[e]:VE(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new yi(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ba))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Or,Df,Kf=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Nf,S=e.timeline,b,T,w,R,v,A,I,B,F,W,V,z,k;if(S&&(!d||!s)&&(s="none"),e._ease=xs(s,Fa.ease),e._yEase=u?w_(xs(u===!0?s:u,Fa.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!S&&!!n.runBackwards,!S||d&&!n.stagger){if(B=m[0]?Br(m[0]).harness:0,z=B&&n[B.prop],b=du(n,zf),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ou:gE),g._lazy=0),a){if(Fr(e._startAt=Pt.set(m,qi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ii(l),startAt:null,delay:0,onUpdate:c&&function(){return Xi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ti||!o&&!f)&&e._startAt.revert(ou),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),w=qi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ii(l),immediateRender:o,stagger:0,parent:p},b),z&&(w[B.prop]=z),Fr(e._startAt=Pt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ti?e._startAt.revert(ou):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,dt,dt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Ii(l)||l&&!_,T=0;T<m.length;T++){if(v=m[T],I=v._gsap||Vf(m)[T]._gsap,e._ptLookup[T]=W={},wf[I.id]&&Nr.length&&uu(),V=y===m?T:y.indexOf(v),B&&(F=new B).init(v,z||b,e,V,y)!==!1&&(e._pt=R=new yi(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Z){W[Z]=R}),F.priority&&(A=1)),!B||z)for(w in b)Ri[w]&&(F=Zf(w,b,e,V,v,y))?F.priority&&(A=1):W[w]=R=qf.call(e,v,w,"get",b[w],V,y,0,n.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),M&&e._pt&&(Or=e,bt.killTweensOf(v,W,e.globalTime(t)),k=!e.parent,Or=0),e._pt&&l&&(wf[I.id]=1)}A&&Qf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&S.render(nn,!0,!0)},GE=function(e,t,i,n,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Df=1,e.vars[t]="+=0",Kf(e,o),Df=0,l?fl(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Rt(i)+ii(u.e)),u.b&&(u.b=h.s+ii(u.b))},WE=function(e,t){var i=e[0]?Br(e[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return t;s=Ua({},t);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},XE=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(ui(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},dl=function(e,t,i,n,s){return Ct(e)?e.call(t,i,n,s):Wt(e)&&~e.indexOf("random(")?Va(e):e},P_=Hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",I_={};xi(P_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return I_[r]=1});var Pt=function(r){i_(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:hl(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=n.parent||bt,M=(ui(i)||r_(i)?tr(i[0]):"length"in n)?[i]:rn(i),S,b,T,w,R,v,A,I;if(o._targets=M.length?Vf(M):fl("GSAP target "+i+" not found. https://gsap.com",!Li.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||au(c)||au(h)){if(n=o.vars,S=o.timeline=new ei({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:M}),S.kill(),S.parent=S._dp=Qn(o),S._start=0,d||au(c)||au(h)){if(w=M.length,A=d&&v_(d),Pn(d))for(R in d)~P_.indexOf(R)&&(I||(I={}),I[R]=d[R]);for(b=0;b<w;b++)T=du(n,I_),T.stagger=0,p&&(T.yoyoEase=p),I&&Ua(T,I),v=M[b],T.duration=+dl(c,Qn(o),b,v,M),T.delay=(+dl(h,Qn(o),b,v,M)||0)-o._delay,!d&&w===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),S.to(v,T,A?A(b,v,M):0),S._ease=Ye.none;S.duration()?c=h=0:o.timeline=0}else if(_){hl(qi(S.vars.defaults,{ease:"none"})),S._ease=xs(_.ease||n.ease||"none");var B=0,F,W,V;if(ui(_))_.forEach(function(z){return S.to(M,z,">")}),S.duration();else{T={};for(R in _)R==="ease"||R==="easeEach"||XE(R,_[R],T,_.easeEach);for(R in T)for(F=T[R].sort(function(z,k){return z.t-k.t}),B=0,b=0;b<F.length;b++)W=F[b],V={ease:W.e,duration:(W.t-(b?F[b-1].t:0))/100*c},V[R]=W.v,S.to(M,V,B),B+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!Nf&&(Or=Qn(o),bt.killTweensOf(M),Or=0),Rn(y,Qn(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===Mt(y._time)&&Ii(u)&&ME(Qn(o))&&y.data!=="nested")&&(o._tTime=-dt,o.render(Math.max(0,-h)||0)),m&&p_(Qn(o),m),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-dt&&!h?l:n<dt?0:n,d,f,_,g,m,p,y,M,S;if(!c)EE(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,a);if(d=Mt(u%g),u===l?(_=this._repeat,d=c):(m=Mt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(S=this._yEase,d=c-d),m=ka(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(M&&this._yEase&&C_(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Mt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(m_(this,h?n:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&u&&!s&&!m&&(Xi(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;M&&M.render(n<0?n:M._dur*M._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Cf(this,n,s,a),Xi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Xi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Cf(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Fr(this,1),!s&&!(h&&!o)&&(u||o||p)&&(Xi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,l){ml||Pi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kf(this,c),h=this._ease(c/this._dur),GE(this,n,s,a,o,h,c,l)?this.resetTo(n,s,a,o,1):(xu(this,0),this.parent||d_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ll(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ti),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Or&&Or.vars.overwrite!==!0)._first||ll(this),this.parent&&a!==this.timeline.totalDuration()&&za(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?rn(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&yE(o,l))return s==="all"&&(this._pt=0),ll(this);for(u=this._op=this._op||[],s!=="all"&&(Wt(s)&&(g={},xi(s,function(y){return g[y]=1}),s=g),s=WE(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&_u(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ll(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return ul(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return ul(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return bt.killTweensOf(n,s,a)},e}(gl);qi(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xi("staggerTo,staggerFrom,staggerFromTo",function(r){Pt[r]=function(){var e=new ei,t=Pf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jf=function(e,t,i){return e[t]=i},L_=function(e,t,i){return e[t](i)},YE=function(e,t,i,n){return e[t](n.fp,i)},qE=function(e,t,i){return e.setAttribute(t,i)},yu=function(e,t){return Ct(e[t])?L_:mu(e[t])&&e.setAttribute?qE:jf},D_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ZE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jf=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},$f=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},KE=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},jE=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?_u(this,t,"_pt"):t.dep||(i=1),t=n;return!i},JE=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Qf=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},yi=function(){function r(t,i,n,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||D_,this.d=l||this,this.set=c||jf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=JE,this.m=i,this.mt=s,this.tween=n},r}();xi(Hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return zf[r]=1});Yi.TweenMax=Yi.TweenLite=Pt;Yi.TimelineLite=Yi.TimelineMax=ei;bt=new ei({sortChildren:!1,defaults:Fa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Li.stringFilter=Xf;var ys=[],cu={},$E=[],t_=0,QE=0,bf=function(e){return(cu[e]||$E).map(function(t){return t()})},Of=function(){var e=Date.now(),t=[];e-t_>2&&(bf("matchMediaInit"),ys.forEach(function(i){var n=i.queries,s=i.conditions,a,o,l,c;for(o in n)a=Cn.matchMedia(n[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),bf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),t_=e,bf("matchMedia"))},O_=function(){function r(t,i){this.selector=i&&If(i),this.data=[],this._r=[],this.isReverted=!1,this.id=QE++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){Ct(i)&&(s=n,n=i,i=Ct);var a=this,o=function(){var c=vt,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=If(s)),vt=a,u=n.apply(a,arguments),Ct(u)&&a._r.push(u),vt=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===Ct?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=vt;vt=null,i(this),vt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Pt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ei?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=ys.length;a--;)ys[a].id===this.id&&ys.splice(a,1)},e.revert=function(i){this.kill(i||{})},r}(),eT=function(){function r(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Pn(i)||(i={matches:i});var a=new O_(0,s||this.scope),o=a.conditions={},l,c,h;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=Cn.matchMedia(i[c]),l&&(ys.indexOf(a)<0&&ys.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Of):l.addEventListener("change",Of)));return h&&n(a,function(u){return a.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),pu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return E_(n)})},timeline:function(e){return new ei(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Wt(e)&&(e=rn(e)[0]);var s=Br(e||{}).get,a=i?u_:h_;return i==="native"&&(i=""),e&&(t?a((Ri[t]&&Ri[t].get||s)(e,t,i,n)):function(o,l,c){return a((Ri[o]&&Ri[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=rn(e),e.length>1){var n=e.map(function(h){return di.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var a=Ri[t],o=Br(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Ba._pt=0,u.init(e,i?h+i:h,Ba,0,[e]),u.render(1,u),Ba._pt&&$f(1,Ba)}:o.set(e,l);return a?c:function(h){return c(e,l,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,s=di.to(e,qi((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xs(e.ease,Fa.ease)),jg(Fa,e||{})},config:function(e){return jg(Li,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Ri[o]&&!Yi[o]&&fl(t+" effect requires "+o+" plugin.")}),xf[t]=function(o,l,c){return i(rn(o),qi(l||{},s),c)},a&&(ei.prototype[t]=function(o,l,c){return this.add(xf[t](o,Pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=xs(t)},parseEase:function(e,t){return arguments.length?xs(e,t):Ye},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ei(e),n,s;for(i.smoothChildTiming=Ii(e.smoothChildTiming),bt.remove(i),i._dp=0,i._time=i._tTime=bt._time,n=bt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof Pt&&n.vars.onComplete===n._targets[0]))&&Rn(i,n,n._start-n._delay),n=s;return Rn(bt,i,0),i},context:function(e,t){return e?new O_(e,t):vt},matchMedia:function(e){return new eT(e)},matchMediaRefresh:function(){return ys.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Of()},addEventListener:function(e,t){var i=cu[e]||(cu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cu[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:LE,wrapYoyo:DE,distribute:v_,random:y_,snap:x_,normalize:IE,getUnit:ii,clamp:wE,splitColor:T_,toArray:rn,selector:If,mapRange:M_,pipe:RE,unitize:PE,interpolate:OE,shuffle:__},install:a_,effects:xf,ticker:Pi,updateRoot:ei.updateRoot,plugins:Ri,globalTimeline:bt,core:{PropTween:yi,globals:o_,Tween:Pt,Timeline:ei,Animation:gl,getCache:Br,_removeLinkedListItem:_u,reverting:function(){return ti},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return Nf=e}}};xi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pu[r]=Pt[r]});Pi.add(ei.updateRoot);Ba=pu.to({},{duration:0});var tT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},iT=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=tT(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},Ef=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(Wt(s)&&(l={},xi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}iT(o,s)}}}},di=pu.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)ti?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ef("roundProps",Lf),Ef("modifiers"),Ef("snap",x_))||pu;Pt.version=ei.version=di.version="3.14.2";s_=1;Bf()&&Ha();var nT=Ye.Power0,rT=Ye.Power1,sT=Ye.Power2,aT=Ye.Power3,oT=Ye.Power4,lT=Ye.Linear,cT=Ye.Quad,hT=Ye.Cubic,uT=Ye.Quart,dT=Ye.Quint,fT=Ye.Strong,pT=Ye.Elastic,mT=Ye.Back,gT=Ye.SteppedEase,_T=Ye.Bounce,vT=Ye.Sine,xT=Ye.Expo,yT=Ye.Circ;var N_,kr,Wa,sp,ws,ST,B_,ap,MT=function(){return typeof window<"u"},nr={},As=180/Math.PI,Xa=Math.PI/180,Ga=Math.atan2,F_=1e8,op=/([A-Z])/g,bT=/(left|right|width|margin|padding|x)/i,ET=/[\s,\(]\S/,In={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},CT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},X_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Y_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},RT=function(e,t,i){return e.style[t]=i},PT=function(e,t,i){return e.style.setProperty(t,i)},IT=function(e,t,i){return e._gsap[t]=i},LT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},DT=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},OT=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Et="transform",Di=Et+"Origin",NT=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in nr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=In[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ir(n,o)}):this.tfm[e]=a.x?a[e]:ir(n,e),e===Di&&(this.tfm.zOrigin=a.zOrigin);else return In.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Et)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Di,t,"")),e=Et}(s||t)&&this.props.push(e,t,s[e])},q_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},BT=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(op,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ap(),(!s||!s.isStart)&&!i[Et]&&(q_(i),n.zOrigin&&i[Di]&&(i[Di]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Z_=function(e,t){var i={target:e,props:[],revert:BT,save:NT};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},K_,ip=function(e,t){var i=kr.createElementNS?kr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):kr.createElement(e);return i&&i.style?i:kr.createElement(e)},Zi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(op,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Ya(t)||t,1)||""},U_="O,Moz,ms,Ms,Webkit".split(","),Ya=function(e,t,i){var n=t||ws,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(U_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?U_[a]:"")+e},np=function(){MT()&&window.document&&(N_=window,kr=N_.document,Wa=kr.documentElement,ws=ip("div")||{style:{}},ST=ip("div"),Et=Ya(Et),Di=Et+"Origin",ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",K_=!!Ya("perspective"),ap=di.core.reverting,sp=1)},k_=function(e){var t=e.ownerSVGElement,i=ip("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Wa.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Wa.removeChild(i),s},z_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},j_=function(e){var t,i;try{t=e.getBBox()}catch{t=k_(e),i=1}return t&&(t.width||t.height)||i||(t=k_(e)),t&&!t.width&&!t.x&&!t.y?{x:+z_(e,["x","cx","x1"])||0,y:+z_(e,["y","cy","y1"])||0,width:0,height:0}:t},J_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&j_(e))},Hr=function(e,t){if(t){var i=e.style,n;t in nr&&t!==Di&&(t=Et),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(op,"-$1").toLowerCase())):i.removeAttribute(t)}},zr=function(e,t,i,n,s,a){var o=new yi(e._pt,t,i,0,1,a?Y_:X_);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},H_={deg:1,rad:1,turn:1},FT={grid:1,flex:1},Vr=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ws.style,l=bT.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===a||!s||H_[n]||H_[a])return s;if(a!=="px"&&!d&&(s=r(e,t,i,"px")),p=e.getCTM&&J_(e),(f||a==="%")&&(nr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],Rt(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===kr||!g.appendChild)&&(g=kr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Pi.time&&!m.uncache)return Rt(s/m.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+n,_=e[h],y?e.style[t]=y:Hr(e,t)}else(f||a==="%")&&!FT[Zi(g,"display")]&&(o.position=Zi(e,"position")),g===e&&(o.position="static"),g.appendChild(ws),_=ws[h],g.removeChild(ws),o.position="absolute";return l&&f&&(m=Br(g),m.time=Pi.time,m.width=g[h]),Rt(d?_*s/u:_&&s?u/_*s:0)},ir=function(e,t,i,n){var s;return sp||np(),t in In&&t!=="transform"&&(t=In[t],~t.indexOf(",")&&(t=t.split(",")[0])),nr[t]&&t!=="transform"?(s=yl(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Mu(Zi(e,Di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Su[t]&&Su[t](e,t,i)||Zi(e,t)||Gf(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Vr(e,t,s,i)+i:s},UT=function(e,t,i,n){if(!i||i==="none"){var s=Ya(t,e,1),a=s&&Zi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Zi(e,"borderTopColor"))}var o=new yi(this._pt,e.style,t,0,1,Jf),l=0,c=0,h,u,d,f,_,g,m,p,y,M,S,b;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Zi(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=Zi(e,t)||n,g?e.style[t]=g:Hr(e,t)),h=[i,n],Xf(h),i=h[0],n=h[1],d=i.match(Ss)||[],b=n.match(Ss)||[],b.length){for(;u=Ss.exec(n);)m=u[0],y=n.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+S),p=parseFloat(m),M=m.substr((p+"").length),l=Ss.lastIndex-M.length,M||(M=M||Li.units[t]||S,l===n.length&&(n+=M,o.e+=M)),S!==M&&(f=Vr(e,t,g,M)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Y_:X_;return Uf.test(n)&&(o.e=0),this._pt=o,o},V_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kT=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=V_[i]||i,t[1]=V_[n]||n,t.join(" ")},zT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],nr[o]&&(l=1,o=o==="transformOrigin"?Di:Et),Hr(i,o);l&&(Hr(i,Et),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",yl(i,1),a.uncache=1,q_(n)))}},Su={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new yi(e._pt,t,i,0,0,zT);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},xl=[1,0,0,1,0,0],$_={},Q_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},G_=function(e){var t=Zi(e,Et);return Q_(t)?xl:t.substr(7).match(Ff).map(Rt)},lp=function(e,t){var i=e._gsap||Br(e),n=e.style,s=G_(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?xl:s):(s===xl&&!e.offsetParent&&e!==Wa&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Wa.appendChild(e)),s=G_(e),l?n.display=l:Hr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Wa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rp=function(e,t,i,n,s,a){var o=e._gsap,l=s||lp(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],M=t.split(" "),S=parseFloat(M[0])||0,b=parseFloat(M[1])||0,T,w,R,v;i?l!==xl&&(w=f*m-_*g)&&(R=S*(m/w)+b*(-g/w)+(g*y-m*p)/w,v=S*(-_/w)+b*(f/w)-(f*y-_*p)/w,S=R,b=v):(T=j_(e),S=T.x+(~M[0].indexOf("%")?S/100*T.width:S),b=T.y+(~(M[1]||M[0]).indexOf("%")?b/100*T.height:b)),n||n!==!1&&o.smooth?(p=S-c,y=b-h,o.xOffset=u+(p*f+y*g)-p,o.yOffset=d+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=b,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Di]="0px 0px",a&&(zr(a,o,"xOrigin",c,S),zr(a,o,"yOrigin",h,b),zr(a,o,"xOffset",u,o.xOffset),zr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},yl=function(e,t){var i=e._gsap||new Yf(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Zi(e,Di)||"0",h,u,d,f,_,g,m,p,y,M,S,b,T,w,R,v,A,I,B,F,W,V,z,k,Z,ce,ie,ue,Oe,Be,Ze,Ke;return h=u=d=g=m=p=y=M=S=0,f=_=1,i.svg=!!(e.getCTM&&J_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Et]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Et]!=="none"?l[Et]:"")),n.scale=n.rotate=n.translate="none"),w=lp(e,i.svg),i.svg&&(i.uncache?(Z=e.getBBox(),c=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),rp(e,k||c,!!k||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,T=i.yOrigin||0,w!==xl&&(I=w[0],B=w[1],F=w[2],W=w[3],h=V=w[4],u=z=w[5],w.length===6?(f=Math.sqrt(I*I+B*B),_=Math.sqrt(W*W+F*F),g=I||B?Ga(B,I)*As:0,y=F||W?Ga(F,W)*As+g:0,y&&(_*=Math.abs(Math.cos(y*Xa))),i.svg&&(h-=b-(b*I+T*F),u-=T-(b*B+T*W))):(Ke=w[6],Be=w[7],ie=w[8],ue=w[9],Oe=w[10],Ze=w[11],h=w[12],u=w[13],d=w[14],R=Ga(Ke,Oe),m=R*As,R&&(v=Math.cos(-R),A=Math.sin(-R),k=V*v+ie*A,Z=z*v+ue*A,ce=Ke*v+Oe*A,ie=V*-A+ie*v,ue=z*-A+ue*v,Oe=Ke*-A+Oe*v,Ze=Be*-A+Ze*v,V=k,z=Z,Ke=ce),R=Ga(-F,Oe),p=R*As,R&&(v=Math.cos(-R),A=Math.sin(-R),k=I*v-ie*A,Z=B*v-ue*A,ce=F*v-Oe*A,Ze=W*A+Ze*v,I=k,B=Z,F=ce),R=Ga(B,I),g=R*As,R&&(v=Math.cos(R),A=Math.sin(R),k=I*v+B*A,Z=V*v+z*A,B=B*v-I*A,z=z*v-V*A,I=k,V=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Rt(Math.sqrt(I*I+B*B+F*F)),_=Rt(Math.sqrt(z*z+Ke*Ke)),R=Ga(V,z),y=Math.abs(R)>2e-4?R*As:0,S=Ze?1/(Ze<0?-Ze:Ze):0),i.svg&&(k=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Q_(Zi(e,Et)),k&&e.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Rt(f),i.scaleY=Rt(_),i.rotation=Rt(g)+o,i.rotationX=Rt(m)+o,i.rotationY=Rt(p)+o,i.skewX=y+o,i.skewY=M+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Di]=Mu(c)),i.xOffset=i.yOffset=0,i.force3D=Li.force3D,i.renderTransform=i.svg?VT:K_?e0:HT,i.uncache=0,i},Mu=function(e){return(e=e.split(" "))[0]+" "+e[1]},ep=function(e,t,i){var n=ii(t);return Rt(parseFloat(t)+parseFloat(Vr(e,"x",i+"px",n)))+n},HT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,e0(e,t)},Es="0deg",vl="0px",Ts=") ",e0=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,M=i.zOrigin,S="",b=p==="auto"&&e&&e!==1||p===!0;if(M&&(u!==Es||h!==Es)){var T=parseFloat(h)*Xa,w=Math.sin(T),R=Math.cos(T),v;T=parseFloat(u)*Xa,v=Math.cos(T),a=ep(y,a,w*v*-M),o=ep(y,o,-Math.sin(T)*-M),l=ep(y,l,R*v*-M+M)}m!==vl&&(S+="perspective("+m+Ts),(n||s)&&(S+="translate("+n+"%, "+s+"%) "),(b||a!==vl||o!==vl||l!==vl)&&(S+=l!==vl||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ts),c!==Es&&(S+="rotate("+c+Ts),h!==Es&&(S+="rotateY("+h+Ts),u!==Es&&(S+="rotateX("+u+Ts),(d!==Es||f!==Es)&&(S+="skew("+d+", "+f+Ts),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ts),y.style[Et]=S||"translate(0, 0)"},VT=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,M=parseFloat(a),S=parseFloat(o),b,T,w,R,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Xa,c*=Xa,b=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Xa,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,R*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),b*=v,T*=v)),b=Rt(b),T=Rt(T),w=Rt(w),R=Rt(R)):(b=u,R=d,T=w=0),(M&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(M=Vr(f,"x",a,"px"),S=Vr(f,"y",o,"px")),(_||g||m||p)&&(M=Rt(M+_-(_*b+g*w)+m),S=Rt(S+g-(_*T+g*R)+p)),(n||s)&&(v=f.getBBox(),M=Rt(M+n/100*v.width),S=Rt(S+s/100*v.height)),v="matrix("+b+","+T+","+w+","+R+","+M+","+S+")",f.setAttribute("transform",v),y&&(f.style[Et]=v)},GT=function(e,t,i,n,s){var a=360,o=Wt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?As:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*F_)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*F_)%a-~~(c/a)*a)),e._pt=d=new yi(e._pt,t,i,n,c,TT),d.e=h,d.u="deg",e._props.push(i),d},W_=function(e,t){for(var i in t)e[i]=t[i];return e},WT=function(e,t,i){var n=W_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Et]=t,o=yl(i,1),Hr(i,Et),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Et],a[Et]=t,o=yl(i,1),a[Et]=c);for(l in nr)c=n[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=ii(c),_=ii(h),u=f!==_?Vr(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new yi(e._pt,o,l,u,d-u,tp),e._pt.u=_||0,e._props.push(l));W_(o,n)};xi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});Su[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return ir(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var cp={name:"css",register:np,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,y,M,S,b,T,w,R,v;sp||np(),this.styles=this.styles||Z_(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Ri[g]&&Zf(g,t,i,n,e,s)))){if(f=typeof h,_=Su[g],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Va(h)),_)_(this,e,g,h,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",er.lastIndex=0,er.test(c)||(m=ii(c),p=ii(h),p?m!==p&&(c=Vr(e,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,s):l[g],Wt(c)&&~c.indexOf("random(")&&(c=Va(c)),ii(c+"")||c==="auto"||(c+=Li.units[g]||ii(ir(e,g))||""),(c+"").charAt(1)==="="&&(c=ir(e,g))):c=ir(e,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in In&&(g==="autoAlpha"&&(d===1&&ir(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),zr(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=In[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in nr,M){if(this.styles.save(g),v=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Zi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=Zi(e,"perspective"),A?e.style.perspective=A:Hr(e,"perspective")}u=parseFloat(h)}if(S||(b=e._gsap,b.renderTransform&&!t.parseTransform||yl(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new yi(this._pt,o,Et,0,1,b.renderTransform,b,0,-1),S.dep=1),g==="scale")this._pt=new yi(this._pt,b,"scaleY",b.scaleY,(y?Ms(b.scaleY,y+u):u)-b.scaleY||0,tp),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Di,0,o[Di]),h=kT(h),b.svg?rp(e,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&zr(this,b,"zOrigin",b.zOrigin,p),zr(this,o,g,Mu(c),Mu(h)));continue}else if(g==="svgOrigin"){rp(e,h,1,T,0,this);continue}else if(g in $_){GT(this,b,g,d,y?Ms(d,y+h):h);continue}else if(g==="smoothOrigin"){zr(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){WT(this,h,e);continue}}else g in o||(g=Ya(g)||g);if(M||(u||u===0)&&(d||d===0)&&!ET.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=ii(h)||(g in Li.units?Li.units[g]:m),m!==p&&(d=Vr(e,g,c,p)),this._pt=new yi(this._pt,M?b:o,g,d,(y?Ms(d,y+u):u)-d,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?CT:tp),this._pt.u=p||0,M&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=wT):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=AT);else if(g in o)UT.call(this,e,g,c,y?y+h:h);else if(g in e)this.add(e,g,c||e[g],y?y+h:h,n,s);else if(g!=="parseTransform"){gu(g,h);continue}M||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}w&&Qf(this)},render:function(e,t){if(t.tween._time||!ap())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ir,aliases:In,getSetter:function(e,t,i){var n=In[t];return n&&n.indexOf(",")<0&&(t=n),t in nr&&t!==Di&&(e._gsap.x||ir(e,"x"))?i&&B_===i?t==="scale"?LT:IT:(B_=i||{})&&(t==="scale"?DT:OT):e.style&&!mu(e.style[t])?RT:~t.indexOf("-")?PT:yu(e,t)},core:{_removeProperty:Hr,_getMatrix:lp}};di.utils.checkPrefix=Ya;di.core.getStyleSaver=Z_;(function(r,e,t,i){var n=xi(r+","+e+","+t,function(s){nr[s]=1});xi(e,function(s){Li.units[s]="deg",$_[s]=1}),In[n[13]]=r+","+e,xi(i,function(s){var a=s.split(":");In[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Li.units[r]="px"});di.registerPlugin(cp);var It=di.registerPlugin(cp)||di,PR=It.core.Tween;var t0="#baff39";var i0=r=>r<200?r*5+44:1044;var pn={SPAWN_PROTECTION:"spawn-protection",SPAWN_SHRINK:"spawn-shrink",THREAT_HOVER:"threat-hover",ACTION_ATTACK:"action-attack",TELEPORT_ENTRANCE:"teleport-entrance"},Ln=class r{channels=new WeakMap;owners=new Set;track(e,t,i){let n=this.channels.get(e);return n||(n=new Map,this.channels.set(e,n),this.owners.add(e)),n.get(t)?.kill(),n.set(t,i),i}get(e,t){return this.channels.get(e)?.get(t)}has(e,t){return this.channels.get(e)?.has(t)??!1}kill(e,t){let i=this.channels.get(e),n=i?.get(t);n&&(i.delete(t),i.size===0&&(this.channels.delete(e),this.owners.delete(e)),n.kill())}killOwner(e){let t=this.channels.get(e);if(t){this.channels.delete(e),this.owners.delete(e);for(let i of t.values())i.kill()}}killAll(){for(let e of this.owners){let t=this.channels.get(e);if(this.channels.delete(e),t)for(let i of t.values())i.kill()}this.owners.clear()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var qa=class r{tweenManager=ee(Ln);threatIndicators=new Map;sharedThreatTexture=null;showThreatIndicator(e){if(this.threatIndicators.has(e))return;this.sharedThreatTexture||(this.sharedThreatTexture=this.createThreatTexture());let t=new pa({map:this.sharedThreatTexture,transparent:!0,depthTest:!1,depthWrite:!1}),i=Zt(e),n=Ot(22),s=i<n?n/i:1,a=new Oo(t),o=3*s;a.scale.set(o,o,1),a.position.y=1.5*s,a.renderOrder=10,e.add(a);let l=a.position.y;this.tweenManager.track(e,pn.THREAT_HOVER,It.to(a.position,{y:l+.45*s,duration:.75,ease:"sine.inOut",yoyo:!0,repeat:-1})),this.threatIndicators.set(e,{sprite:a,material:t,texture:this.sharedThreatTexture})}removeThreatIndicator(e){let t=this.threatIndicators.get(e);t&&(this.tweenManager.kill(e,pn.THREAT_HOVER),e.remove(t.sprite),t.material.dispose(),this.threatIndicators.delete(e))}disposeAll(){this.threatIndicators.forEach((e,t)=>this.removeThreatIndicator(t)),this.sharedThreatTexture&&(this.sharedThreatTexture.dispose(),this.sharedThreatTexture=null)}hasThreatIndicator(e){return this.threatIndicators.has(e)}createThreatTexture(){let e=256,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),n=e/2,s=i.createRadialGradient(n,n,0,n,n,e*.5);s.addColorStop(0,"rgba(220, 255, 120, 0.2)"),s.addColorStop(.35,"rgba(170, 255, 60, 0.42)"),s.addColorStop(.65,"rgba(120, 255, 0, 0.24)"),s.addColorStop(.88,"rgba(90, 245, 0, 0.08)"),s.addColorStop(1,"rgba(90, 245, 0, 0)"),i.fillStyle=s,i.fillRect(0,0,e,e);let a=e*.29,o=e*.164,l=e*.039,c=n-(3*o+2*l)/2,h=[{armY:c,apexY:c+o},{armY:c+o+l,apexY:c+2*o+l},{armY:c+2*(o+l),apexY:c+3*o+2*l}];i.lineCap="round",i.lineJoin="round",i.strokeStyle="rgba(0, 0, 0, 0.82)",i.lineWidth=e*.092,this.drawChevrons(i,h,n,a,[.95,.87,.79]),i.strokeStyle=t0,i.lineWidth=e*.065,this.drawChevrons(i,h,n,a,[1,.82,.64]),i.strokeStyle="#e6ff8a",i.lineWidth=e*.022,this.drawChevrons(i,h,n,a,[.8,.62,.44]),i.globalAlpha=1;let u=new ls(t);return u.needsUpdate=!0,u}drawChevrons(e,t,i,n,s){for(let a=0;a<t.length;a++){let{armY:o,apexY:l}=t[a];e.globalAlpha=s[a],e.beginPath(),e.moveTo(i-n,o),e.lineTo(i,l),e.lineTo(i+n,o),e.stroke()}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var lt={LEG:"legMaterial",YELLOW_LEG:"yellowLegMaterial",GREEN_LEG:"greenLegMaterial",SKULL:"skullMaterial"};var Si={LOWER_LEG_MESHES:"lowerLegMeshes",MIDDLE_LEG_MESHES:"middleLegMeshes",UPPER_LEG_MESHES:"upperLegMeshes",LEGS:"legs",LEG_BAND_MATERIALS:"legBandMaterials"};var KT={upperLegLength:.8,middleLegLength:.55,lowerLegLength:.7,legAngles:[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],legStanceOffsets:[.015,.008,-.005,-.012],legSpreadOffsets:[.02,.012,-.008,-.015]},jT={upperTop:.13,upperBottom:.09,middleTop:.09,middleBottom:.055,lowerTop:.055,lowerBottom:.018,jointRadius:.0525},JT=[.5,.25,0,-.2],hp=8,Za=class r{geometryConfig=KT;radiiConfig=jT;upperLegGeo=null;middleLegGeo=null;lowerLegGeo=null;buildLegs(e,t){this.ensureGeometriesCreated();let i=[],n=[],s=[],a=[];for(let l=0;l<2;l++){let c=l===0?-1:1;for(let h=0;h<4;h++){let u=this.buildSingleLeg(t,l,h,c);e.add(u.legGroup),i.push(u.buildData),n.push(u.lowerLeg),s.push(u.middleLeg),a.push(u.upperLeg)}}return this.applyLegGrounding(e,i),{legData:this.convertToLegData(i),lowerLegMeshes:n,middleLegMeshes:s,upperLegMeshes:a}}storeLegDataInUserData(e,t,i,n,s,a){e.userData[Si.LEGS]=t,e.userData[Si.LOWER_LEG_MESHES]=i,e.userData[Si.MIDDLE_LEG_MESHES]=n,e.userData[Si.UPPER_LEG_MESHES]=s,e.userData[Si.LEG_BAND_MATERIALS]={lower:a.clone(),middle:a.clone(),upper:a.clone()}}disposeGeometries(){this.upperLegGeo?.dispose(),this.middleLegGeo?.dispose(),this.lowerLegGeo?.dispose(),this.upperLegGeo=null,this.middleLegGeo=null,this.lowerLegGeo=null}ensureGeometriesCreated(){if(this.upperLegGeo)return;let{upperLegLength:e,middleLegLength:t,lowerLegLength:i}=this.geometryConfig,n=this.radiiConfig;this.upperLegGeo=new cs(n.upperTop,n.upperBottom,e,hp),this.middleLegGeo=new cs(n.middleTop,n.middleBottom,t,hp),this.lowerLegGeo=new cs(n.lowerTop,n.lowerBottom,i,hp)}buildSingleLeg(e,t,i,n){let{upperLegLength:s,middleLegLength:a,lowerLegLength:o,legAngles:l,legStanceOffsets:c,legSpreadOffsets:h}=this.geometryConfig,u=new Bt,d=l[i]*(t===0?1:-1),f=(Math.PI/2.8+i*.05)*n,_=f*1.2,g=f*.75,m=Math.PI/5.3*n,p=new P(.2*n,-.1,0),y=new Ge(this.upperLegGeo,e);y.position.copy(p),y.rotation.z=_,u.add(y);let M=this.getConnectedSegmentPosition(p,_,s,-1,g,a,1),S=new Ge(this.middleLegGeo,e);S.position.copy(M),S.rotation.z=g,u.add(S);let b=this.getConnectedSegmentPosition(M,g,a,-1,m,o,1),T=new Ge(this.lowerLegGeo,e);T.position.copy(b),T.rotation.z=m,u.add(T);let w=new _i;w.name=`foot_${t}_${i}`;let R=this.getSegmentEndpointOffset(o,m,-1);w.position.copy(b).add(R),u.add(w);let v=JT[i];u.position.set(.4*n,.3,v);let A=d,I=-.02+c[i],B=Math.PI/120*n+h[i]*n;return u.rotation.set(I,A,B),{legGroup:u,buildData:{legGroup:u,footMarker:w,side:n,index:i,baseRotationY:A},upperLeg:y,middleLeg:S,lowerLeg:T}}getConnectedSegmentPosition(e,t,i,n,s,a,o){return e.clone().add(this.getSegmentEndpointOffset(i,t,n)).sub(this.getSegmentEndpointOffset(a,s,o))}getSegmentEndpointOffset(e,t,i){return new P(0,e/2*i,0).applyAxisAngle(new P(0,0,1),t)}applyLegGrounding(e,t){e.updateMatrixWorld(!0);let i=[],n=new P;for(let a of t)a.footMarker.getWorldPosition(n),i.push({legGroup:a.legGroup,footWorldY:n.y});let s=Math.min(...i.map(a=>a.footWorldY));for(let a of i){let o=s-a.footWorldY;a.legGroup.position.y+=o}}convertToLegData(e){return e.map(t=>({group:t.legGroup,baseRotation:{x:t.legGroup.rotation.x,y:t.baseRotationY,z:t.legGroup.rotation.z},side:t.side,index:t.index,footMarker:t.footMarker}))}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Me={MOVEMENT_STATE:"battleMovementState",MOVEMENT_LOCKED:"battleMovementLocked",BASE_SCALE:"battleBaseScale",SPEED_SCALE:"battleSpeedScale",VISUAL_SCALE:"battleVisualScale",LEGS:"legs",MAX_SIZE_GREEN:"__maxSizeGreen",IS_MAX_SIZE_ENEMY:"__isMaxSizeEnemy",SPAWN_COLLISION_DISABLED:"__spawnCollisionDisabled",ENEMY_SPAWN_OPACITY_FORCED:"__enemySpawnOpacityForced",MESH_OPACITY:"__meshOpacity",MESH_TRANSPARENT:"__meshTransparent",COOLDOWN_ACTIVE:"__cooldownActive",SKULL_COOLDOWN_BASE_COLOR:"__skullCooldownBaseColor",ACTIVE_LEG_MATERIAL_KEY:"__activeLegMaterialKey",DISPOSED:"disposed",PERMANENT_OPACITY:"permanentOpacity"};var $T="assets/texture3.jpg",n0={DEFAULT:255,YELLOW:16773494,GREEN:2450411},bu={roughness:.99,metalness:.4},Eu={DIM:new Le(255),CREST:new Le(0,0,1.5)},QT=4,Ka=class r{textureLoader=new Jn;cachedTexture=null;createCharacterMaterials(e){let t=this.getOrLoadTexture(),i=new _t(Nn(Yt({color:e},bu),{map:t})),n=new _t(Nn(Yt({color:n0.YELLOW},bu),{map:t})),s=new _t(Nn(Yt({color:n0.GREEN},bu),{map:t})),a=new _t(Yt({color:e},bu)),o=a.clone();return{legMaterial:i,yellowLegMaterial:n,greenLegMaterial:s,skullMaterial:o,cephaloMaterial:a}}storeMaterialsInUserData(e,t){e.userData[lt.LEG]=t.legMaterial,e.userData[lt.YELLOW_LEG]=t.yellowLegMaterial,e.userData[lt.GREEN_LEG]=t.greenLegMaterial,e.userData[lt.SKULL]=t.skullMaterial}swapLegMaterial(e,t){let i=e.userData[t];if(!i)return;let n=e.userData[Si.LEGS];if(n){e.userData[Me.ACTIVE_LEG_MATERIAL_KEY]=t,this.applyOpacityStateToMaterial(e,i);for(let s of n)s.group.traverse(a=>{a instanceof Ge&&(a.material=i,a.material instanceof kt&&(a.material.needsUpdate=!0))})}}applyLegCooldownProgress(e,t){let i=e.userData[Si.LEG_BAND_MATERIALS];if(!i)return;let n=e.userData[Me.ACTIVE_LEG_MATERIAL_KEY]??lt.LEG,s=e.userData[n],a=s?.color??new Le(1,1,1),o=s?.map??null,l=1/QT;this.updateBandMaterial(i.lower,t/l,a,o),this.updateBandMaterial(i.middle,(t-l)/l,a,o),this.updateBandMaterial(i.upper,(t-2*l)/l,a,o),this.assignBandMeshes(e,i),this.updateSkullCooldown(e,t,l),e.userData[Me.COOLDOWN_ACTIVE]=!0}clearLegCooldownBands(e){let t=e.userData[Me.ACTIVE_LEG_MATERIAL_KEY]??lt.LEG,i=e.userData[t];if(!i)return;let n=this.getAllLegMeshes(e);for(let s of n)s.material=i;delete e.userData[Me.COOLDOWN_ACTIVE],this.restoreSkullFromCooldown(e)}dispose(){this.cachedTexture?.dispose(),this.cachedTexture=null}getOrLoadTexture(){return this.cachedTexture||(this.cachedTexture=this.textureLoader.load($T)),this.cachedTexture}applyOpacityStateToMaterial(e,t){let n=!!e.userData[Me.ENEMY_SPAWN_OPACITY_FORCED]?e.userData[Me.MESH_OPACITY]??.1:void 0,s=e.userData[Me.MESH_OPACITY],a=e.userData[Me.MESH_TRANSPARENT];if(n!==void 0){t.transparent=!0,t.opacity=n,t.needsUpdate=!0;let o=[lt.LEG,lt.YELLOW_LEG,lt.GREEN_LEG];for(let l of o){let c=e.userData[l];c&&(c.transparent=!0,c.opacity=n,c.needsUpdate=!0)}}else a!==void 0&&(t.transparent=a,t.needsUpdate=!0),s!==void 0&&(t.transparent=!0,t.opacity=s,t.needsUpdate=!0)}updateBandMaterial(e,t,i,n){let s=Math.max(0,Math.min(1,t)),a=t>0&&t<1?Math.sin(s*Math.PI):0;e.color.lerpColors(Eu.DIM,i,s),a>0&&e.color.lerp(Eu.CREST,a*.5),e.opacity=Math.min(1,.18+.82*s+a*.2),e.transparent=!0,e.map=n,e.needsUpdate=!0}assignBandMeshes(e,t){let i=e.userData[Si.LOWER_LEG_MESHES],n=e.userData[Si.MIDDLE_LEG_MESHES],s=e.userData[Si.UPPER_LEG_MESHES];i?.forEach(a=>a.material=t.lower),n?.forEach(a=>a.material=t.middle),s?.forEach(a=>a.material=t.upper)}updateSkullCooldown(e,t,i){let n=e.userData[lt.SKULL];if(!n)return;e.userData[Me.SKULL_COOLDOWN_BASE_COLOR]||(e.userData[Me.SKULL_COOLDOWN_BASE_COLOR]=n.color.clone());let s=e.userData[Me.SKULL_COOLDOWN_BASE_COLOR],a=(t-3*i)/i,o=Math.max(0,Math.min(1,a)),l=a>0&&a<1?Math.sin(o*Math.PI):0;n.color.lerpColors(Eu.DIM,s,o),l>0&&n.color.lerp(Eu.CREST,l*.5),n.opacity=Math.min(1,.18+.82*o+l*.2),n.transparent=!0,n.needsUpdate=!0}restoreSkullFromCooldown(e){let t=e.userData[lt.SKULL],i=e.userData[Me.SKULL_COOLDOWN_BASE_COLOR];if(t&&i){t.color.copy(i);let n=e.userData[Me.MESH_OPACITY],s=e.userData[Me.MESH_TRANSPARENT];n!==void 0?(t.opacity=n,t.transparent=!0):s!==void 0?(t.transparent=s,s||(t.opacity=1)):(t.opacity=1,t.transparent=!1),t.needsUpdate=!0,delete e.userData[Me.SKULL_COOLDOWN_BASE_COLOR]}}getAllLegMeshes(e){return[...e.userData[Si.LOWER_LEG_MESHES]??[],...e.userData[Si.MIDDLE_LEG_MESHES]??[],...e.userData[Si.UPPER_LEG_MESHES]??[]]}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Tu="__enemyRose",eA={scale:5.5,position:{x:0,y:.8,z:-.35},rotation:{x:-.8,y:0,z:0},defaultOpacity:.05},Sl={INNER_PETAL:12058666,OUTER_PETAL:9109534,FOLIAGE:2972696,STAMEN:13935616,STAMEN_EMISSIVE:9069056},tA=[{isInner:!0,width:.14,height:.27,tiltX:.14,rotY0:0,yOffset:.04},{isInner:!0,width:.17,height:.31,tiltX:.36,rotY0:Math.PI/5,yOffset:.02},{isInner:!1,width:.21,height:.36,tiltX:.68,rotY0:0,yOffset:0},{isInner:!1,width:.24,height:.38,tiltX:.98,rotY0:Math.PI/5,yOffset:-.02},{isInner:!1,width:.26,height:.4,tiltX:1.25,rotY0:0,yOffset:-.04}],r0=5,s0=5,ja=class r{innerPetalMaterial=null;outerPetalMaterial=null;foliageMaterial=null;stamenMaterial=null;attachRose(e){if(e.getObjectByName(Tu))return;let t=this.buildRose();t.name=Tu;let{position:i,rotation:n,scale:s,defaultOpacity:a}=eA;t.scale.setScalar(s),t.position.set(i.x,i.y,i.z),t.rotation.set(n.x,n.y,n.z),this.applyRoseOpacity(t,a),e.add(t)}removeRose(e){let t=e.getObjectByName(Tu);t&&(e.remove(t),this.disposeRoseObject(t))}hasRose(e){return!!e.getObjectByName(Tu)}dispose(){this.innerPetalMaterial?.dispose(),this.outerPetalMaterial?.dispose(),this.foliageMaterial?.dispose(),this.stamenMaterial?.dispose(),this.innerPetalMaterial=null,this.outerPetalMaterial=null,this.foliageMaterial=null,this.stamenMaterial=null}buildRose(){let e=new Bt;return this.ensureMaterialsCreated(),this.addSepals(e),this.addPetals(e),this.addStamen(e),e}ensureMaterialsCreated(){this.innerPetalMaterial||(this.innerPetalMaterial=new _t({color:Sl.INNER_PETAL,roughness:.58,metalness:.05,side:Ti}),this.outerPetalMaterial=new _t({color:Sl.OUTER_PETAL,roughness:.63,metalness:.04,side:Ti}),this.foliageMaterial=new _t({color:Sl.FOLIAGE,roughness:.82,metalness:0,side:Ti}),this.stamenMaterial=new _t({color:Sl.STAMEN,roughness:.75,metalness:0,emissive:Sl.STAMEN_EMISSIVE,emissiveIntensity:.15}))}addSepals(e){let t=new ya(this.buildPetalShape(.13,.28),3);for(let i=0;i<s0;i++){let n=new Ge(t,this.foliageMaterial.clone());n.rotation.set(.48,i/s0*Math.PI*2+Math.PI/10,0,"YXZ"),n.position.y=-.03,e.add(n)}}addPetals(e){for(let t of tA){let i=t.isInner?this.innerPetalMaterial:this.outerPetalMaterial,n=new ya(this.buildPetalShape(t.width,t.height),4);for(let s=0;s<r0;s++){let a=new Ge(n,i.clone());a.rotation.set(t.tiltX,t.rotY0+s/r0*Math.PI*2,0,"YXZ"),a.position.y=t.yOffset,e.add(a)}}}addStamen(e){let t=new Wo(.052,7,5),i=new Ge(t,this.stamenMaterial.clone());i.position.y=.04,e.add(i)}buildPetalShape(e,t){let i=e/2,n=new va;return n.moveTo(0,0),n.bezierCurveTo(i*1.4,t*.1,i*1.1,t*.55,i*.55,t*.8),n.bezierCurveTo(i*.25,t*.9,0,t,0,t),n.bezierCurveTo(0,t,-i*.25,t*.9,-i*.55,t*.8),n.bezierCurveTo(-i*1.1,t*.55,-i*1.4,t*.1,0,0),n}applyRoseOpacity(e,t){e.traverse(i=>{if(i instanceof Ge){let n=i.material;n.transparent=!0,n.opacity=t,n.needsUpdate=!0,i.userData[Me.PERMANENT_OPACITY]=t}})}disposeRoseObject(e){e.traverse(t=>{t instanceof Ge&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};function o0(r,e,t){let i=r.position.x-e.position.x,n=r.position.z-e.position.z,s=i*i+n*n,a=t??pi(r),o=pi(e),l=1.5*a+1.5*o;return s<l*l}var Dn=class r{skullService=ee(Na);sizeTextureService=ee(Oa);threatIndicatorService=ee(qa);legBuilderService=ee(Za);materialService=ee(Ka);roseService=ee(ja);createCharacterMesh(e,t){let i=new Bt,n=this.materialService.createCharacterMaterials(e);this.materialService.storeMaterialsInUserData(i,n);let s=this.legBuilderService.buildLegs(i,n.legMaterial);this.legBuilderService.storeLegDataInUserData(i,s.legData,s.lowerLegMeshes,s.middleLegMeshes,s.upperLegMeshes,n.legMaterial);let a=this.skullService.attachSkullModel(i,n.skullMaterial);return i.position.set(t.x,t.y+.8,t.z),{mesh:i,ready:a}}applyDynamicSizeBadge(e,t){let i=e.userData[lt.SKULL];return i?this.sizeTextureService.applyToMesh(e,i,t):Promise.resolve()}updateDynamicSizeBadge(e,t){this.sizeTextureService.updateSize(e,t)}disposeAllSizeBadges(){this.sizeTextureService.disposeAll()}swapLegMaterial(e,t){this.materialService.swapLegMaterial(e,t)}applyLegCooldownProgress(e,t){this.materialService.applyLegCooldownProgress(e,t)}clearLegCooldownBands(e){this.materialService.clearLegCooldownBands(e)}doShieldsOverlap(e,t,i){return o0(e,t,i)}attachRose(e){this.roseService.attachRose(e)}removeRose(e){this.roseService.removeRose(e)}showThreatIndicator(e){this.threatIndicatorService.showThreatIndicator(e)}removeThreatIndicator(e){this.threatIndicatorService.removeThreatIndicator(e)}disposeAllThreatIndicators(){this.threatIndicatorService.disposeAll()}disposeCharacterMesh(e,t){if(!e)return;e.userData.disposed=!0,this.sizeTextureService.disposeForMesh(e),t.remove(e);let i=e.userData.legBandMaterials;i&&(i.lower.dispose(),i.middle.dispose(),i.upper.dispose()),e.traverse(n=>{n instanceof Ge&&(n.geometry.dispose(),this.disposeMeshMaterials(n))})}disposeAll(){this.threatIndicatorService.disposeAll(),this.sizeTextureService.disposeAll(),this.roseService.dispose(),this.materialService.dispose(),this.legBuilderService.disposeGeometries()}disposeMeshMaterials(e){let t=Array.isArray(e.material)?e.material:[e.material];for(let i of t)i instanceof _t&&(i.map?.dispose(),i.emissiveMap?.dispose(),i.roughnessMap?.dispose(),i.metalnessMap?.dispose(),i.normalMap?.dispose()),i.dispose()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Au=Math.PI*2,l0=.4,wu=.001,Cu=1e-4,c0=.12,h0=2.7,ni={MAX_BOUNCE_MULTIPLIER:2.5,MAX_TILT_MULTIPLIER:2,MAX_STRIDE_MULTIPLIER:4,CONTROLLED_BOUNCE_AMPLITUDE:.005,CONTROLLED_TILT_AMPLITUDE:.035,WANDER_BOUNCE_AMPLITUDE:.0035,WANDER_TILT_AMPLITUDE:.018,CONTROLLED_ROLL_FACTOR:.05,WANDER_ROLL_FACTOR:.025,STRIDE_AMPLITUDE:.18,LIFT_AMPLITUDE:.12,STRIDE_SCALE_GROWTH:.25,LEG_PHASE_OFFSET:.8,LEG_SIDE_ROLL_MULTIPLIER:.25},sr={INITIAL_MIN:.3,INITIAL_MAX:2,REACHED_MIN:.45,REACHED_MAX:1.35,BLOCKED_MIN:.2,BLOCKED_MAX:.55,RETARGET_MIN:.6,RETARGET_MAX:1.8},u0=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);var Ja=class r{document=ee(Cp);sceneService=ee(St);pressedKeys=new Set;upAxis=new P(0,1,0);forwardVector=new P;rightVector=new P;moveVector=new P;keyDownHandler=this.handleKeyDown.bind(this);keyUpHandler=this.handleKeyUp.bind(this);blurHandler=this.handleBlur.bind(this);isInitialized=!1;forwardButtonPressed=!1;isInputEnabled=!0;isKeyboardMoving=!1;init(){this.isInitialized||(window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("blur",this.blurHandler),this.isInitialized=!0)}dispose(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("keyup",this.keyUpHandler),window.removeEventListener("blur",this.blurHandler),this.pressedKeys.clear(),this.forwardButtonPressed=!1,this.isKeyboardMoving=!1,this.isInputEnabled=!0,this.isInitialized=!1}setForwardButtonPressed(e){this.forwardButtonPressed=e,this.sceneService.setPitchRotationEnabled(!e)}setInputEnabled(e){this.isInputEnabled=e}getIsKeyboardMoving(){return this.isKeyboardMoving}updateKeyboardMovingState(e){let t=this.isKeyboardMoving;return!e&&this.isKeyboardMoving?(this.isKeyboardMoving=!1,this.sceneService.setPitchRotationEnabled(!this.forwardButtonPressed)):e&&!this.isKeyboardMoving&&(this.isKeyboardMoving=!0,this.sceneService.setPitchRotationEnabled(!1)),t}getMoveDirection(){return this.getKeyboardDirection()??this.getButtonDirection()}getKeyboardDirection(){return this.pressedKeys.size===0||(this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<Cu?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),(this.pressedKeys.has("KeyW")||this.pressedKeys.has("ArrowUp"))&&this.moveVector.add(this.forwardVector),(this.pressedKeys.has("KeyD")||this.pressedKeys.has("ArrowRight"))&&this.moveVector.add(this.rightVector),(this.pressedKeys.has("KeyA")||this.pressedKeys.has("ArrowLeft"))&&this.moveVector.sub(this.rightVector),this.moveVector.lengthSq()<Cu)?null:this.moveVector.normalize()}getButtonDirection(){return this.forwardButtonPressed?(this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<Cu?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.forwardVector):null}handleKeyDown(e){!this.isInputEnabled||this.isEditableTarget(e.target)||u0.has(e.code)&&this.pressedKeys.add(e.code)}handleKeyUp(e){this.pressedKeys.delete(e.code)}handleBlur(){this.pressedKeys.clear()}isEditableTarget(e){let t=this.document.defaultView;return!t||!(e instanceof t.HTMLElement)?!1:e.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(e.tagName)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Gr=class r{meshBounds=new Hi;collisionSeparation=new P;characterColliders=new Map;controlledMesh=null;controlledCharacterCollisionEnabled=!0;dispose(){this.characterColliders.clear(),this.controlledMesh=null,this.controlledCharacterCollisionEnabled=!0}setControlledMesh(e){this.controlledMesh=e}setControlledCharacterCollisionEnabled(e){this.controlledCharacterCollisionEnabled=e}registerCharacterMesh(e){let t=this.measureBoundaryPadding(e)*l0;this.characterColliders.set(e,t)}unregisterCharacterMesh(e){this.characterColliders.delete(e)}measureBoundaryPadding(e){e.updateMatrixWorld(!0),this.meshBounds.setFromObject(e);let t=Math.max(Math.abs(this.meshBounds.min.x-e.position.x),Math.abs(this.meshBounds.max.x-e.position.x)),i=Math.max(Math.abs(this.meshBounds.min.z-e.position.z),Math.abs(this.meshBounds.max.z-e.position.z)),n=Math.max(Math.abs(e.scale.x),Math.abs(e.scale.y),Math.abs(e.scale.z),.01);return Math.max(Math.hypot(t,i)/n,.75)}measureBoundaryPaddingWithScale(e){let t=this.measureBoundaryPadding(e),i=t*pi(e);return{basePadding:t,scaledPadding:i}}resolveCharacterCollision(e,t){let i=this.characterColliders.get(e);if(i===void 0)return t;let n=i*pi(e),s=t.x,a=t.z;for(let[o,l]of this.characterColliders){if(this.shouldSkipCollision(e,o))continue;let c=s-o.position.x,h=a-o.position.z,u=c*c+h*h,d=n+l*pi(o);if(u>=d*d)continue;let f=Math.sqrt(u);if(f<wu)s+=d;else{let _=d-f;this.collisionSeparation.set(c/f,0,h/f),s+=this.collisionSeparation.x*_,a+=this.collisionSeparation.z*_}}return{x:s,y:t.y,z:a}}shouldSkipCollision(e,t){if(t===e||!t.visible)return!0;let i=!!e.userData?.[Me.IS_MAX_SIZE_ENEMY],n=!!t.userData?.[Me.IS_MAX_SIZE_ENEMY];return!!((i||n)&&e!==this.controlledMesh&&t!==this.controlledMesh||t.userData?.[Me.SPAWN_COLLISION_DISABLED]||!this.controlledCharacterCollisionEnabled&&(e===this.controlledMesh||t===this.controlledMesh))}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Wr=class r{applyWalkPose(e,t,i=1){let n=e.userData.legs;if(!Array.isArray(n))return;let s=1+(Math.min(i,ni.MAX_STRIDE_MULTIPLIER)-1)*ni.STRIDE_SCALE_GROWTH,a=ni.STRIDE_AMPLITUDE*s,o=ni.LIFT_AMPLITUDE*s;for(let l of n){let c=t+l.index*ni.LEG_PHASE_OFFSET+(l.side<0?Math.PI:0),h=Math.sin(c)*a,u=Math.max(0,Math.sin(c))*o;l.group.rotation.x=l.baseRotation.x-u,l.group.rotation.y=l.baseRotation.y+h,l.group.rotation.z=l.baseRotation.z+h*ni.LEG_SIDE_ROLL_MULTIPLIER*l.side}}resetLegPose(e){let t=e.userData.legs;if(Array.isArray(t))for(let i of t)i.group.rotation.set(i.baseRotation.x,i.baseRotation.y,i.baseRotation.z)}getWalkAnimationMultiplier(e){let t=Ul(e),i=Zt(e);return i<=0||t<=i?1:Math.sqrt(t/i)}getControlledBounceAmplitude(e,t){return e?0:ni.CONTROLLED_BOUNCE_AMPLITUDE*Math.min(t,ni.MAX_BOUNCE_MULTIPLIER)}getControlledTiltAmplitude(e){return ni.CONTROLLED_TILT_AMPLITUDE*Math.min(e,ni.MAX_TILT_MULTIPLIER)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Xr=class r{arenaBounds=hr;defaultBoundaryPadding=.75;setArenaBounds(){this.arenaBounds=hr}setDefaultBoundaryPadding(e){this.defaultBoundaryPadding=e}getDefaultBoundaryPadding(){return this.defaultBoundaryPadding}resetDefaultBoundaryPadding(){this.defaultBoundaryPadding=.75}clampToArenaBounds(e,t=this.defaultBoundaryPadding){let i=(this.arenaBounds.maxX-this.arenaBounds.minX)/2-.5,n=(this.arenaBounds.maxZ-this.arenaBounds.minZ)/2-.5,s=Math.min(t,i,n);return{x:ci.clamp(e.x,this.arenaBounds.minX+s,this.arenaBounds.maxX-s),y:e.y,z:ci.clamp(e.z,this.arenaBounds.minZ+s,this.arenaBounds.maxZ-s)}}getArenaBounds(){return this.arenaBounds}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Yr=class r{initializeMovementState(e,t,i){let n=.8*pi(e)*no;e.userData[Me.MOVEMENT_STATE]={basePosition:{x:t.x,y:t.y+n,z:t.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}}initializeMovementLock(e){e.userData[Me.MOVEMENT_LOCKED]===void 0&&(e.userData[Me.MOVEMENT_LOCKED]=!1)}getBattleMovementState(e){return e?e.userData[Me.MOVEMENT_STATE]??null:null}resolveBattleMeshPosition(e,t){let i=this.getBattleMovementState(e);return i?{x:i.basePosition.x+i.offset.x,y:i.basePosition.y+i.offset.y,z:i.basePosition.z+i.offset.z}:t}isMovementLocked(e){return!!e.userData[Me.MOVEMENT_LOCKED]}setMovementLocked(e,t){e.userData[Me.MOVEMENT_LOCKED]=t}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var $a=class r{sceneService=ee(St);collisionService=ee(Gr);walkAnimationService=ee(Wr);arenaBoundsService=ee(Xr);movementStateService=ee(Yr);moveVector=new P;idleWanderStates=[];smoothedAnimationDelta=1/60;setSmoothedAnimationDelta(e){this.smoothedAnimationDelta=e}dispose(){this.clearAllWanderCharacters(),this.smoothedAnimationDelta=1/60}addIdleWanderCharacter(e,t,i){if(!e||!t)return;this.removeIdleWanderCharacter(e),this.movementStateService.getBattleMovementState(e)||this.movementStateService.initializeMovementState(e,t,i),e.userData[Me.MOVEMENT_LOCKED]===void 0&&(e.userData[Me.MOVEMENT_LOCKED]=!1);let{scaledPadding:n}=this.collisionService.measureBoundaryPaddingWithScale(e);this.idleWanderStates.push({mesh:e,boundaryPadding:n,nextRetargetInSeconds:ci.randFloat(sr.INITIAL_MIN,sr.INITIAL_MAX),targetOffset:null})}removeIdleWanderCharacter(e){let t=this.idleWanderStates.findIndex(s=>s.mesh===e);if(t===-1)return;let i=this.idleWanderStates[t],n=this.movementStateService.getBattleMovementState(i.mesh);n?.isWalking&&this.stopWalking(i.mesh,n),this.idleWanderStates.splice(t,1)}hasIdleWanderCharacter(e){return this.idleWanderStates.some(t=>t.mesh===e)}clearAllWanderCharacters(){for(let e of this.idleWanderStates){let t=this.movementStateService.getBattleMovementState(e.mesh);t?.isWalking&&this.stopWalking(e.mesh,t)}this.idleWanderStates=[]}syncIdleWanderCharacters(e,t,i){let n=new Set;for(let s of e){if(!s.isAlive||i(s.id))continue;let a=t.get(s.id);a&&n.add(a)}for(let[,s]of t)n.has(s)||this.removeIdleWanderCharacter(s);for(let s of e){if(!s.isAlive||i(s.id))continue;let a=t.get(s.id);!a||this.hasIdleWanderCharacter(a)||this.addIdleWanderCharacter(a,s.position,"right")}}updateIdleWanderMeshes(e){for(let t of this.idleWanderStates)this.updateSingleIdleWanderMesh(t,e)}updateSingleIdleWanderMesh(e,t){let{mesh:i}=e,n=this.movementStateService.getBattleMovementState(i);if(!n)return;if(i.userData[Me.MOVEMENT_LOCKED]){n.isWalking&&this.stopWalking(i,n);return}e.nextRetargetInSeconds-=t;let s=this.movementStateService.resolveBattleMeshPosition(i,n.basePosition);this.shouldRetargetIdleWander(e,s,n)&&this.retargetIdleWander(e,s,n.basePosition.y);let a=e.targetOffset;if(!a){n.isWalking&&this.stopWalking(i,n);return}let o={x:n.basePosition.x+a.x,y:n.basePosition.y,z:n.basePosition.z+a.z},l=this.moveVector.set(o.x-s.x,0,o.z-s.z),c=l.length();if(c<c0){this.onTargetReached(e,n);return}l.divideScalar(c),n.isWalking=!0,n.walkCycle=(n.walkCycle+this.smoothedAnimationDelta*8)%Au;let h=Math.min(h0*pi(i)*t,c),u=this.arenaBoundsService.clampToArenaBounds({x:s.x+l.x*h,y:n.basePosition.y,z:s.z+l.z*h},e.boundaryPadding),d=this.collisionService.resolveCharacterCollision(i,u);if(Math.hypot(d.x-s.x,d.z-s.z)<wu){this.onMovementBlocked(e,n);return}this.applyWanderPosition(i,n,d,o,l)}applyWanderPosition(e,t,i,n,s){t.offset.x=i.x-t.basePosition.x,t.offset.z=i.z-t.basePosition.z,e.position.x=i.x,e.position.y=t.basePosition.y+Math.sin(t.walkCycle*2)*ni.WANDER_BOUNCE_AMPLITUDE,e.position.z=i.z,e.rotation.y=this.sceneService.getFacingRotationY(i,n),e.rotation.x=Math.sin(t.walkCycle*2)*ni.WANDER_TILT_AMPLITUDE,e.rotation.z=s.x*ni.WANDER_ROLL_FACTOR;let a=pi(e);e.scale.set((t.side==="left"?1:-1)*a,a,a),this.walkAnimationService.applyWalkPose(e,t.walkCycle)}onTargetReached(e,t){e.targetOffset=null,e.nextRetargetInSeconds=ci.randFloat(sr.REACHED_MIN,sr.REACHED_MAX),t.isWalking&&this.stopWalking(e.mesh,t)}onMovementBlocked(e,t){e.targetOffset=null,e.nextRetargetInSeconds=ci.randFloat(sr.BLOCKED_MIN,sr.BLOCKED_MAX),t.isWalking&&this.stopWalking(e.mesh,t)}stopWalking(e,t){t.isWalking=!1,e.position.y=t.basePosition.y,e.rotation.x=0,e.rotation.z=0,this.walkAnimationService.resetLegPose(e)}shouldRetargetIdleWander(e,t,i){if(e.nextRetargetInSeconds>0)return!1;if(!e.targetOffset)return!0;let n={x:i.basePosition.x+e.targetOffset.x,y:i.basePosition.y,z:i.basePosition.z+e.targetOffset.z};return t.x===n.x&&t.z===n.z}retargetIdleWander(e,t,i){let n=this.getIdleWanderDistance(e.mesh),s=this.arenaBoundsService.clampToArenaBounds({x:t.x+ci.randFloatSpread(n*2),y:i,z:t.z+ci.randFloatSpread(n*2)},e.boundaryPadding),a=this.movementStateService.getBattleMovementState(e.mesh);a&&(e.targetOffset=new P(s.x-a.basePosition.x,0,s.z-a.basePosition.z),e.nextRetargetInSeconds=ci.randFloat(sr.RETARGET_MIN,sr.RETARGET_MAX))}getIdleWanderDistance(e){let t=pi(e);return ci.clamp(132*Math.max(t,.9),100,1500)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var aA=.2,d0=1/60,ri=class r{sceneService=ee(St);inputService=ee(Ja);collisionService=ee(Gr);walkAnimationService=ee(Wr);idleWanderService=ee($a);arenaBoundsService=ee(Xr);movementStateService=ee(Yr);canvas=null;controlledMesh=null;removeFrameListener=null;smoothedAnimationDelta=d0;threatIndicatorsEnabled=!1;init(e){this.canvas!==e&&(this.canvas=e,this.inputService.init(),this.removeFrameListener||(this.removeFrameListener=this.sceneService.addFrameListener(t=>{this.smoothedAnimationDelta+=(t-this.smoothedAnimationDelta)*aA,this.idleWanderService.setSmoothedAnimationDelta(this.smoothedAnimationDelta),this.updateControlledMesh(t),this.idleWanderService.updateIdleWanderMeshes(t)})))}dispose(){this.inputService.dispose(),this.controlledMesh=null,this.arenaBoundsService.resetDefaultBoundaryPadding(),this.idleWanderService.dispose(),this.collisionService.dispose(),this.smoothedAnimationDelta=d0,this.threatIndicatorsEnabled=!1,this.removeFrameListener&&(this.removeFrameListener(),this.removeFrameListener=null),this.canvas=null}setThreatIndicatorsEnabled(e){this.threatIndicatorsEnabled=e}setControlledCharacterCollisionEnabled(e){this.collisionService.setControlledCharacterCollisionEnabled(e)}setArenaBounds(){this.arenaBoundsService.setArenaBounds()}registerCharacterMesh(e){this.collisionService.registerCharacterMesh(e)}unregisterCharacterMesh(e){this.collisionService.unregisterCharacterMesh(e)}setForwardButtonPressed(e){this.inputService.setForwardButtonPressed(e)}setControlledCharacter(e,t,i){if(this.controlledMesh=e,this.collisionService.setControlledMesh(e),this.inputService.setInputEnabled(!!e),!e||!t){this.arenaBoundsService.resetDefaultBoundaryPadding();return}let{scaledPadding:n}=this.collisionService.measureBoundaryPaddingWithScale(e);this.arenaBoundsService.setDefaultBoundaryPadding(n),this.movementStateService.initializeMovementState(e,t,i),this.movementStateService.initializeMovementLock(e);let s=this.movementStateService.getBattleMovementState(e);s&&this.sceneService.setCameraFocus(s.basePosition)}getBattleMovementState(e){return this.movementStateService.getBattleMovementState(e)}resolveBattleMeshPosition(e,t){return this.movementStateService.resolveBattleMeshPosition(e,t)}addIdleWanderCharacter(e,t,i){this.idleWanderService.addIdleWanderCharacter(e,t,i)}removeIdleWanderCharacter(e){this.idleWanderService.removeIdleWanderCharacter(e)}hasIdleWanderCharacter(e){return this.idleWanderService.hasIdleWanderCharacter(e)}syncIdleWanderCharacters(e,t,i){this.idleWanderService.syncIdleWanderCharacters(e,t,i)}clearIdleWanderCharacter(){this.idleWanderService.clearAllWanderCharacters()}applyWalkPose(e,t,i=1){this.walkAnimationService.applyWalkPose(e,t,i)}isMobileDevice(){return window.matchMedia("(pointer: coarse)").matches}updateControlledMesh(e){if(!this.controlledMesh)return;let t=this.movementStateService.getBattleMovementState(this.controlledMesh);if(!t)return;if(this.movementStateService.isMovementLocked(this.controlledMesh)){t.isWalking&&this.stopWalking(this.controlledMesh,t,!0);return}let i=this.inputService.getMoveDirection();if(!i){t.isWalking&&this.stopWalking(this.controlledMesh,t,!0),this.inputService.updateKeyboardMovingState(!1);return}this.inputService.updateKeyboardMovingState(!0),t.isWalking=!0;let n=this.walkAnimationService.getWalkAnimationMultiplier(this.controlledMesh);t.walkCycle=(t.walkCycle+this.smoothedAnimationDelta*8*n)%Au;let s=this.calculateNextPosition(this.controlledMesh,t,i,e);this.applyControlledMeshTransform(this.controlledMesh,t,s,i,n)}calculateNextPosition(e,t,i,n){let s=this.movementStateService.resolveBattleMeshPosition(e,t.basePosition),a=10.2*Ul(e)*n,o=this.arenaBoundsService.clampToArenaBounds({x:s.x+i.x*a,y:t.basePosition.y,z:s.z+i.z*a});return this.collisionService.resolveCharacterCollision(e,o)}applyControlledMeshTransform(e,t,i,n,s){t.offset.x=i.x-t.basePosition.x,t.offset.z=i.z-t.basePosition.z;let a=this.isMobileDevice(),o=this.walkAnimationService.getControlledBounceAmplitude(a,s),l=this.walkAnimationService.getControlledTiltAmplitude(s);e.position.x=i.x,e.position.y=t.basePosition.y+Math.sin(t.walkCycle*2)*o,e.position.z=i.z,this.updateCameraFocus(e,t,a);let c={x:i.x+n.x,z:i.z+n.z};e.rotation.y=this.sceneService.getFacingRotationY(i,c),e.rotation.x=Math.sin(t.walkCycle*2)*l,e.rotation.z=n.x*ni.CONTROLLED_ROLL_FACTOR;let h=Zt(e);e.scale.set((t.side==="left"?1:-1)*h,h,h),this.walkAnimationService.applyWalkPose(e,t.walkCycle,s)}updateCameraFocus(e,t,i){let s=i&&this.threatIndicatorsEnabled?t.basePosition.y:e.position.y;this.sceneService.setCameraFocus({x:e.position.x,y:s,z:e.position.z})}stopWalking(e,t,i){t.isWalking=!1,e.position.y=t.basePosition.y,i&&this.sceneService.setCameraFocus(e.position),e.rotation.x=0,e.rotation.z=0,this.walkAnimationService.resetLegPose(e)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Cs=class r{sceneService=ee(St);battleCharacterBuilderService=ee(Dn);battleMovementService=ee(ri);tweenManager=ee(Ln);actionToken=0;dispose(){}createTeleportationEntrance(e,t,i){let n=Zt(e);e.position.set(t.x,t.y+.8*n,t.z),e.scale.set(.01,.01,.01),e.visible=!0,this.tweenManager.track(e,pn.TELEPORT_ENTRANCE,It.to(e.scale,{x:(i==="right"?-1:1)*n,y:n,z:n,duration:.4,ease:"back.out(1.4)"}))}animateAction(e,t,i){this.actionToken+=1;let n=t.get(e.attackerId),s=t.get(e.defenderId);if(!n||!s)return;let a=n.mesh,o=s.mesh,l=n.side==="left";a.userData[Me.MOVEMENT_LOCKED]=!0,o.userData[Me.MOVEMENT_LOCKED]=!0,It.killTweensOf(a.position),It.killTweensOf(a.rotation),It.killTweensOf(a.scale),It.killTweensOf(o.position),It.killTweensOf(o.rotation),It.killTweensOf(o.scale),this.killLegTweens(a),this.killLegTweens(o);let c=()=>{let h=Zt(a),u=Zt(o),d=this.getCharacterBasePosition(a,n.character),f=this.getCharacterBasePosition(o,s.character),_=this.sceneService.getFacingRotationY(d,f),g=o.rotation.y,m=Yt({},d),p=l?-1:1,y=this.getSpiderAttackMotion(d,f,p,h,u),M=It.timeline();return a.position.set(d.x,d.y,d.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*h,h,h),o.position.set(f.x,f.y,f.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*u,u,u),M.to(a.position,{x:y.windupPosition.x,y:y.windupPosition.y,z:y.windupPosition.z,duration:.18,ease:"power2.inOut"},"<"),M.to(a.position,{x:y.impactPosition.x,y:y.impactPosition.y,z:y.impactPosition.z,duration:.14,ease:"power4.in"}),M.to(a.position,{x:y.recoilPosition.x,y:y.recoilPosition.y,z:y.recoilPosition.z,duration:.12,ease:"sine.out"}),M.to(a.position,{x:m.x,y:m.y+.04,z:m.z,duration:.28,ease:"power2.inOut"}),M.to(a.position,{y:m.y,duration:.12,ease:"sine.out"}),M.to(o.position,{x:f.x,y:f.y,z:f.z,duration:.5,ease:"power2.inOut"},"-=0.5"),M.call(()=>{let S=Zt(a),b=Zt(o),T=this.getCharacterBasePosition(a,n.character),w=this.getCharacterBasePosition(o,s.character);a.position.set(T.x,T.y,T.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*S,S,S),o.position.set(w.x,w.y,w.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*b,b,b),a.userData[Me.MOVEMENT_LOCKED]=!1,o.userData[Me.MOVEMENT_LOCKED]=!1,i?.()}),this.addLegAttackAnimation(M,a),M};this.tweenManager.track(a,pn.ACTION_ATTACK,c())}getSpiderAttackMotion(e,t,i,n,s){let a=new P(t.x-e.x,0,t.z-e.z);a.lengthSq()<1e-4?a.set(i<0?1:-1,0,0):a.normalize();let o=new P(-a.z,0,a.x).multiplyScalar(i),l=(n+s)/2,c=.3*l,h=1.28*s,u=1.85*l;return{windupPosition:{x:e.x-a.x*.28*n+o.x*.18*n,y:e.y-.08*n,z:e.z-a.z*.28*n+o.z*.18*n},impactPosition:{x:t.x-a.x*h+o.x*.12*l,y:t.y+c,z:t.z-a.z*h+o.z*.12*l},recoilPosition:{x:t.x-a.x*u-o.x*.08*l,y:e.y+.12*n,z:t.z-a.z*u-o.z*.08*l},windupYawOffset:.08*i,impactYawOffset:-.06*i}}getCharacterBasePosition(e,t){return this.battleMovementService.resolveBattleMeshPosition(e,{x:t.position.x,y:t.position.y+.8*Zt(e),z:t.position.z})}killLegTweens(e){let t=e.userData.legs;if(t)for(let i of t)It.killTweensOf(i.group.rotation),i.baseRotation&&i.group.rotation.set(i.baseRotation.x,i.baseRotation.y,i.baseRotation.z)}addLegAttackAnimation(e,t){let i=t.userData.legs;if(i?.length)for(let n of i){let s=n.baseRotation??{x:n.group.rotation.x,y:n.group.rotation.y,z:n.group.rotation.z},a=n.side??1,o=n.index??0,l=o%2===0?1:-1;e.to(n.group.rotation,{x:s.x-.16+.05*l,y:s.y+.04*a,z:s.z+.2*a*l,duration:.1,ease:"power2.out"},.03*o),e.to(n.group.rotation,{x:s.x+.1-.04*l,y:s.y-.02*a,z:s.z-.14*a*l,duration:.12,ease:"sine.inOut"},.22+.02*o),e.to(n.group.rotation,{x:s.x,y:s.y,z:s.z,duration:.18,ease:"power2.out"},.46+.02*o)}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var oA=[lt.LEG,lt.YELLOW_LEG,lt.GREEN_LEG];function Pu(r,e,t={}){let{skipPermanentOpacity:i=!0,includeSharedMaterials:n=!0,additionalMaterialKeys:s=[]}=t;if(r.traverse(a=>{if(!(a instanceof Ge)||i&&a.userData[Me.PERMANENT_OPACITY]!==void 0)return;let o=a.material;Array.isArray(o)?o.forEach(l=>{l instanceof _t&&e(l)}):o instanceof _t&&e(o)}),n){let a=[...oA,...s];for(let o of a){let l=r.userData[o];l instanceof _t&&e(l)}}}function f0(r,e,t=!0){t&&r.userData[Me.ENEMY_SPAWN_OPACITY_FORCED]||(r.userData[Me.MESH_OPACITY]=e,Pu(r,i=>{i.transparent=!0,i.opacity=e,i.needsUpdate=!0}))}function p0(r,e,t=!0){t&&r.userData[Me.ENEMY_SPAWN_OPACITY_FORCED]||(r.userData[Me.MESH_TRANSPARENT]=e,Pu(r,i=>{i.transparent=e,i.needsUpdate=!0}))}var dp=.4,m0=11206400,lA=[lt.LEG,lt.YELLOW_LEG,lt.GREEN_LEG,lt.SKULL],Qa=class r{setMeshOpacity(e,t){f0(e,t)}setMeshTransparent(e,t){p0(e,t)}applyMaxSizeAppearance(e){e.userData[Me.MAX_SIZE_GREEN]=!0;let t=e.userData[Me.ENEMY_SPAWN_OPACITY_FORCED];t||(e.userData[Me.MESH_OPACITY]=dp,e.userData[Me.MESH_TRANSPARENT]=!0);for(let i of lA){let n=e.userData[i];n instanceof _t&&(n.color.set(m0),n.transparent=!0,t||(n.opacity=dp),n.needsUpdate=!0)}Pu(e,i=>{i.color.set(m0),i.transparent=!0,t||(i.opacity=dp),i.needsUpdate=!0},{includeSharedMaterials:!1})}hasMaxSizeAppearance(e){return e.userData[Me.MAX_SIZE_GREEN]===!0}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var qr=class r{sceneService=ee(St);characterBuilder=ee(Dn);appearanceService=ee(Qa);movementService=ee(ri);playerMesh=null;enemyMeshes=new Map;animatingCharacterIds=new Set;getPlayerMesh(){return this.playerMesh}getEnemyMeshes(){return this.enemyMeshes}getEnemyMesh(e){return this.enemyMeshes.get(e)}isCharacterAnimating(e){return this.animatingCharacterIds.has(e)}setCharacterAnimating(e,t){t?this.animatingCharacterIds.add(e):this.animatingCharacterIds.delete(e)}getAnimatingCharacterCount(){return this.animatingCharacterIds.size}createCharacters(e,t){return Ls(this,null,function*(){let i=[],{mesh:n,ready:s}=this.characterBuilder.createCharacterMesh(e.color,e.position);n.userData[kn]=Ot(e.size),n.visible=!1,this.sceneService.scene.add(n),this.playerMesh=n,i.push(s);for(let a of t){let{mesh:o,ready:l}=this.characterBuilder.createCharacterMesh(a.color,a.position);o.userData[kn]=Ot(a.size),o.visible=!1,this.sceneService.scene.add(o),this.enemyMeshes.set(a.id,o),i.push(l)}return yield Promise.all(i),this.playerMesh&&this.characterBuilder.applyDynamicSizeBadge(this.playerMesh,e.size),{playerMesh:this.playerMesh,enemyMeshes:this.enemyMeshes}})}revealCharacters(){this.playerMesh&&(this.playerMesh.visible=!0);for(let[,e]of this.enemyMeshes)e.visible=!0;this.sceneService.compileScene(),this.playerMesh&&(this.playerMesh.visible=!1);for(let[,e]of this.enemyMeshes)e.visible=!1}clearCharacters(){this.characterBuilder.disposeAllThreatIndicators(),this.characterBuilder.disposeAllSizeBadges(),this.playerMesh&&(this.movementService.unregisterCharacterMesh(this.playerMesh),this.characterBuilder.disposeCharacterMesh(this.playerMesh,this.sceneService.scene),this.playerMesh=null);for(let[,e]of this.enemyMeshes)this.movementService.unregisterCharacterMesh(e),this.characterBuilder.disposeCharacterMesh(e,this.sceneService.scene);this.enemyMeshes.clear(),this.movementService.setControlledCharacter(null,null,"left"),this.movementService.clearIdleWanderCharacter(),this.animatingCharacterIds.clear()}applyDeathVisibility(e,t){e&&!e.isAlive&&this.playerMesh&&!this.animatingCharacterIds.has(e.id)&&(this.playerMesh.visible=!1);for(let i of t){let n=this.enemyMeshes.get(i.id);n&&!i.isAlive&&!this.animatingCharacterIds.has(i.id)&&(n.visible=!1)}}syncCharacterScales(e,t,i){e&&this.playerMesh&&this.animateScaleChange(this.playerMesh,e,e.size,i);for(let n of t){let s=this.enemyMeshes.get(n.id);s&&this.animateScaleChange(s,n,e?.size??null,i)}}updateMeshGroundOffset(e,t){let i=t.position.y+.8*Zt(e)*no;e.position.y=i;let n=this.movementService.getBattleMovementState(e);n&&(n.basePosition.y=i)}setMeshOpacity(e,t){this.appearanceService.setMeshOpacity(e,t)}setMeshTransparent(e,t){this.appearanceService.setMeshTransparent(e,t)}applyMaxSizeColors(e){for(let t of e)if(t.size===1e3){let i=this.enemyMeshes.get(t.id);i&&!this.appearanceService.hasMaxSizeAppearance(i)&&(this.appearanceService.applyMaxSizeAppearance(i),i.userData[Me.IS_MAX_SIZE_ENEMY]=!0)}}buildParticipantsMap(e,t){let i=new Map;e&&this.playerMesh&&i.set(e.id,{character:e,mesh:this.playerMesh,side:"left"});for(let n of t){let s=this.enemyMeshes.get(n.id);s&&i.set(n.id,{character:n,mesh:s,side:"right"})}return i}animateScaleChange(e,t,i,n){let s=Ot(t.size),a=e.userData[kn],l=(i!==null?t.size>i:!1)?lt.YELLOW_LEG:lt.LEG;if(this.characterBuilder.swapLegMaterial(e,l),e===this.playerMesh&&this.characterBuilder.updateDynamicSizeBadge(e,t.size),e.userData[Fi]!==void 0){e.userData[kn]=s;return}if(a!==s){let h=It.timeline();h.call(()=>{if(e.userData[Fi]!==void 0){e.userData[kn]=s;return}e.userData[kn]=s,this.updateMeshGroundOffset(e,t);let u=this.movementService.getBattleMovementState(e),d=u?.side==="right"?-1:1;e.scale.set(d*s,s,s),u?.isWalking&&this.movementService.applyWalkPose(e,u.walkCycle),n?.(e,t)},[],"+=0.15"),h.call(()=>{this.characterBuilder.swapLegMaterial(e,l)},[],"+=0.15")}}syncEnemyThreatIndicators(e,t,i){for(let n of e){let s=this.enemyMeshes.get(n.id);s&&(i&&n.isAlive&&n.size<=t?(this.characterBuilder.removeThreatIndicator(s),this.characterBuilder.showThreatIndicator(s)):this.characterBuilder.removeThreatIndicator(s))}}syncPlayerThreatIndicatorState(e,t,i){if(!this.playerMesh)return;let n=e.size;t?(this.characterBuilder.swapLegMaterial(this.playerMesh,lt.GREEN_LEG),this.playerMesh.userData[Fl]=Ot(i0(n)),this.playerMesh.userData[Fi]=Ot(1)):(i||this.setMeshTransparent(this.playerMesh,!1),this.characterBuilder.swapLegMaterial(this.playerMesh,lt.LEG),delete this.playerMesh.userData[Fl],delete this.playerMesh.userData[Fi]);let s=Zt(this.playerMesh),o=this.movementService.getBattleMovementState(this.playerMesh)?.side==="right"?-1:1;this.playerMesh.scale.set(o*s,s,s),this.updateMeshGroundOffset(this.playerMesh,e)}setupRevivalMesh(e,t,i,n){let s=Ot(t.size);e.userData[kn]=s;let a=i?Ot(n):s,o=this.movementService.getBattleMovementState(e),l=o?.side==="right"?-1:1;e.scale.set(l*a,a,a);let c=t.position.y+.8*a*no;return e.position.set(t.position.x,c,t.position.z),o&&(o.basePosition.x=e.position.x,o.basePosition.y=e.position.y,o.basePosition.z=e.position.z,o.offset.x=0,o.offset.y=0,o.offset.z=0),a}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var eo=class r{forces=new WeakMap;prevOpacity=new WeakMap;forceOpacity(e,t,i){if(!e)return;let n=this.forces.get(e);if(n||(n=new Map,this.forces.set(e,n)),n.size===0){let s=e.userData.__meshOpacity??1;this.prevOpacity.set(e,s)}n.set(i,t),e.userData.__enemySpawnOpacityForced=!0,this.applyMinOpacity(e)}releaseOpacity(e,t){let i=this.forces.get(e);if(i){if(i.delete(t),i.size===0){let n=this.prevOpacity.get(e)??1;this.applyOpacityToMesh(e,n),this.prevOpacity.delete(e),delete e.userData.__enemySpawnOpacityForced,this.forces.delete(e);return}this.applyMinOpacity(e)}}forceTemporary(e,t,i,n){this.forceOpacity(e,t,n);let s=!1,a=setTimeout(()=>{s||this.releaseOpacity(e,n)},i);return()=>{s=!0,clearTimeout(a),this.releaseOpacity(e,n)}}applyMinOpacity(e){let t=this.forces.get(e);if(!t)return;let i=1/0;for(let n of t.values())n<i&&(i=n);isFinite(i)||(i=1),this.applyOpacityToMesh(e,i)}applyOpacityToMesh(e,t){e.userData.__meshOpacity=t,e.traverse(i=>{if(i.material&&i.material instanceof _t){if(i.userData?.permanentOpacity!==void 0)return;let n=i.material;n.transparent=!0,n.opacity=t,n.needsUpdate=!0}});for(let i of Object.keys(e.userData)){let n=e.userData[i];n&&n instanceof kt&&(n.transparent=!0,n.opacity!==void 0&&(n.opacity=t))}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac,providedIn:"root"})};var Rs=class r{sceneService=ee(St);playerOpacityService=ee(eo);battleMovementService=ee(ri);tweenManager=ee(Ln);hasPlayerSpawnShrinkOccurred=!1;activeEnemyShrinks=new Set;isFirstSpawning=gn(!0);startPlayerSpawnProtection(e,t,i){this.tweenManager.track(e,pn.SPAWN_PROTECTION,It.delayedCall(Np+1,()=>{this.isFirstSpawning.set(!1)})),this.hasPlayerSpawnShrinkOccurred||(this.hasPlayerSpawnShrinkOccurred=!0,this.startPlayerSpawnShrink(e,t,i))}startPlayerSpawnShrink(e,t,i){It.killTweensOf(e.scale);let n=Ot(ro),s=Ot(1);e.userData[Fi]=n;let o=this.battleMovementService.getBattleMovementState(e)?.side==="right"?-1:1;e.scale.set(o*n,n,n),e.userData[Me.MOVEMENT_LOCKED]=!0,this.sceneService.setCameraRotationLocked(!0),t(),i();let l={scale:n};this.tweenManager.track(e,pn.SPAWN_SHRINK,It.to(l,{scale:s,duration:ks,ease:"linear",onUpdate:()=>{e.userData[Fi]=l.scale;let h=this.battleMovementService.getBattleMovementState(e)?.side==="right"?-1:1;e.scale.set(h*l.scale,l.scale,l.scale),t(),i()},onComplete:()=>{e.userData[Me.MOVEMENT_LOCKED]=!1,this.sceneService.setCameraRotationLocked(!1),delete e.userData[Fi]}}))}startEnemySpawnShrink(e,t,i,n){this.tweenManager.kill(e,pn.SPAWN_SHRINK),this.activeEnemyShrinks.delete(e),It.killTweensOf(e.scale);let s=Ot(ro),a=Ot(t.size);e.userData[Fi]=s;let l=this.battleMovementService.getBattleMovementState(e)?.side==="right"?-1:1;e.scale.set(l*s,s,s),e.userData[Me.MOVEMENT_LOCKED]=!0,i&&this.playerOpacityService.forceOpacity(i,.1,"enemy-spawn"),e.userData[Me.SPAWN_COLLISION_DISABLED]=!0,this.activeEnemyShrinks.add(e);let c={scale:s};this.tweenManager.track(e,pn.SPAWN_SHRINK,It.to(c,{scale:a,duration:ks,ease:"linear",onUpdate:()=>{e.userData[Fi]=c.scale;let u=this.battleMovementService.getBattleMovementState(e)?.side==="right"?-1:1;e.scale.set(u*c.scale,c.scale,c.scale),n(e,t)},onComplete:()=>{e.userData[Me.MOVEMENT_LOCKED]=!1,delete e.userData[Fi],delete e.userData[Me.SPAWN_COLLISION_DISABLED],this.activeEnemyShrinks.delete(e),this.activeEnemyShrinks.size===0&&i&&this.playerOpacityService.releaseOpacity(i,"enemy-spawn")}}))}hasActiveEnemySpawnShrinks(){return this.activeEnemyShrinks.size>0}clearAll(){this.hasPlayerSpawnShrinkOccurred=!1;for(let e of this.activeEnemyShrinks)this.tweenManager.killOwner(e);this.activeEnemyShrinks.clear(),this.sceneService.setCameraRotationLocked(!1),this.isFirstSpawning.set(!0)}dispose(){this.clearAll()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Ps=class r{ngZone=ee(ar);sceneService=ee(St);characterBuilder=ee(Dn);battleService=ee(ur);resolvedOverlaps=new Set;removeOverlapListener=null;removeEdgeRoseListener=null;startShieldOverlapDetection(e,t,i,n,s,a,o){this.removeOverlapListener?.(),this.removeOverlapListener=this.sceneService.addFrameListener(()=>{let l=i(),c=e(),h=n(),u=t(),d=l?.isAlive??!1,f=d&&this.battleService.isPlayerAttackOnCooldown(),_=d&&this.battleService.isPlayerSpawnProtected();if(a(d&&!f&&!_),c&&d){let g=this.battleService.getPlayerCooldownProgress();g<1?this.characterBuilder.applyLegCooldownProgress(c,g):c.userData.__cooldownActive&&this.characterBuilder.clearLegCooldownBands(c)}if(this.pruneResolvedOverlaps(c,u,l,h,s()),c&&l?.isAlive&&!f&&!_)for(let g of h){if(!g.isAlive||this.resolvedOverlaps.has(g.id))continue;let m=u.get(g.id);if(!m)continue;let p=s()?Ot(1):void 0;this.characterBuilder.doShieldsOverlap(c,m,p)&&this.ngZone.run(()=>{let y=s()?0:void 0;this.battleService.resolveShieldOverlap(g.id,y)&&(this.resolvedOverlaps.add(g.id),o({type:"player-enemy",enemyId:g.id}))})}for(let g=0;g<h.length;g++){let m=h[g];if(!m.isAlive)continue;let p=u.get(m.id);if(p)for(let y=g+1;y<h.length;y++){let M=h[y];if(!M.isAlive)continue;let S=`${m.id}-${M.id}`;if(this.resolvedOverlaps.has(S))continue;let b=u.get(M.id);b&&this.characterBuilder.doShieldsOverlap(p,b)&&this.ngZone.run(()=>{this.battleService.resolveEnemyShieldOverlap(m.id,M.id)&&(this.resolvedOverlaps.add(S),o({type:"enemy-enemy",enemy1Id:m.id,enemy2Id:M.id}))})}}})}startEdgeRoseDetection(e,t){this.removeEdgeRoseListener?.(),this.removeEdgeRoseListener=this.sceneService.addFrameListener(()=>{let i=e(),n=t();if(!i||!n?.isAlive)return;let{x:s,z:a}=i.position,{minX:o,maxX:l,minZ:c,maxZ:h}=hr,u=n.size/2;s<=o+u||s>=l-u||a<=c+u||a>=h-u?this.characterBuilder.attachRose(i):this.characterBuilder.removeRose(i)})}clearResolvedOverlap(e){this.resolvedOverlaps.delete(e)}clearAll(){this.resolvedOverlaps.clear(),this.removeOverlapListener?.(),this.removeOverlapListener=null,this.removeEdgeRoseListener?.(),this.removeEdgeRoseListener=null}dispose(){this.clearAll()}pruneResolvedOverlaps(e,t,i,n,s){if(e){let a=s?Ot(1):void 0;for(let o of n){if(!this.resolvedOverlaps.has(o.id))continue;let l=t.get(o.id);(!i?.isAlive||!o.isAlive||!l||!this.characterBuilder.doShieldsOverlap(e,l,a))&&this.resolvedOverlaps.delete(o.id)}}for(let a=0;a<n.length;a++){let o=n[a];for(let l=a+1;l<n.length;l++){let c=n[l],h=`${o.id}-${c.id}`;if(!this.resolvedOverlaps.has(h))continue;let u=t.get(o.id),d=t.get(c.id);(!o.isAlive||!c.isAlive||!u||!d||!this.characterBuilder.doShieldsOverlap(u,d))&&this.resolvedOverlaps.delete(h)}}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var Ml=class r{fpsKeysHeld=new Set;threatToggleCallback=null;isFirstSpawningFn=null;isInitialized=!1;showFpsBadge=gn(!1);onKeyDown=e=>{if(e.code==="KeyE"&&!e.ctrlKey&&!e.altKey&&!e.metaKey){!(this.isFirstSpawningFn?.()??!1)&&this.threatToggleCallback&&this.threatToggleCallback();return}this.fpsKeysHeld.add(e.key.toLowerCase()),this.checkFpsToggleCombo()&&(this.showFpsBadge.update(t=>!t),this.fpsKeysHeld.clear())};onKeyUp=e=>{this.fpsKeysHeld.delete(e.key.toLowerCase())};checkFpsToggleCombo(){return this.fpsKeysHeld.has("f")&&this.fpsKeysHeld.has("p")&&this.fpsKeysHeld.has("s")}init(e,t){this.isInitialized||(this.threatToggleCallback=e,this.isFirstSpawningFn=t,document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),this.isInitialized=!0)}dispose(){document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.fpsKeysHeld.clear(),this.threatToggleCallback=null,this.isFirstSpawningFn=null,this.isInitialized=!1}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var to=class r{sceneService=ee(St);movementService=ee(ri);meshManager=ee(qr);static THREAT_CAMERA_POLAR_ANGLE=Math.PI/2.5;showThreatIndicators=gn(!1);pendingThreatToggle=null;playerAttackAnimatingCount=0;hasCombatStarted=!1;reset(){this.pendingThreatToggle=null,this.playerAttackAnimatingCount=0,this.hasCombatStarted=!1,this.showThreatIndicators.set(!1)}setCombatStarted(e){this.hasCombatStarted=e}incrementPlayerAttackCount(){this.playerAttackAnimatingCount++}decrementPlayerAttackCount(){this.playerAttackAnimatingCount=Math.max(0,this.playerAttackAnimatingCount-1)}toggle(e,t){let i=!this.showThreatIndicators();return!e?.isAlive&&i?!1:this.shouldDeferToggle()?(this.pendingThreatToggle=i,!1):(this.applyToggle(i,t),!0)}applyPendingToggle(e){if(this.pendingThreatToggle===null||this.meshManager.getAnimatingCharacterCount()>0||this.playerAttackAnimatingCount>0)return!1;let t=this.pendingThreatToggle;return this.pendingThreatToggle=null,this.applyToggle(t,e),!0}disable(){this.showThreatIndicators()&&(this.showThreatIndicators.set(!1),this.movementService.setThreatIndicatorsEnabled(!1))}hasPendingToggle(){return this.pendingThreatToggle!==null}shouldDeferToggle(){return this.hasCombatStarted&&this.meshManager.getAnimatingCharacterCount()>0&&this.playerAttackAnimatingCount>0}applyToggle(e,t){e&&this.sceneService.setCameraPolarAngle(r.THREAT_CAMERA_POLAR_ANGLE),this.showThreatIndicators.set(e),this.movementService.setThreatIndicatorsEnabled(e),t()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var cA={fps:60,frameTimeMs:16.67,qualityLevel:"high",pixelRatio:1},bl=class r{ngZone=ee(ar);battleService=ee(ur);sceneService=ee(St);movementService=ee(ri);vfxService=ee(Cs);meshManager=ee(qr);spawnAnimationService=ee(Rs);collisionDetectionService=ee(Ps);threatToggleService=ee(to);playerOpacityService=ee(eo);player=null;enemies=[];isBattleActive=gn(!1);isLoading=gn(!1);performanceStats=gn(cA);removePerformanceListener=null;callbacks=null;get playerMesh(){return this.meshManager.getPlayerMesh()}get enemyMeshes(){return this.meshManager.getEnemyMeshes()}init(e,t){this.callbacks=t,this.removePerformanceListener=this.sceneService.addPerformanceListener(i=>{this.performanceStats.set(i)}),this.battleService.battleState$.pipe(Os(e)).subscribe(i=>{this.handleBattleStateChange(i)}),this.battleService.action$.pipe(Os(e)).subscribe(i=>{i&&this.handleBattleAction(i)}),this.battleService.playerSpawnProtection$.pipe(Os(e)).subscribe(()=>{this.playerMesh&&this.startSpawnProtectionEffect(this.playerMesh)})}dispose(){this.removePerformanceListener?.(),this.removePerformanceListener=null,this.callbacks=null}clearCharacters(){this.spawnAnimationService.clearAll(),this.collisionDetectionService.clearAll(),this.meshManager.clearCharacters(),this.player=null,this.enemies=[],this.callbacks?.onCharactersCleared()}toggleThreatIndicators(){this.threatToggleService.toggle(this.player,()=>this.syncThreatIndicators())}get showThreatIndicators(){return this.threatToggleService.showThreatIndicators}get isFirstSpawning(){return this.spawnAnimationService.isFirstSpawning}handleBattleStateChange(e){if(this.isBattleActive.set(e!==null),!e){this.handleBattleEnd();return}this.threatToggleService.setCombatStarted(e.actions.length>0),this.player=e.team1[0]||null,this.enemies=e.team2,this.movementService.setControlledCharacterCollisionEnabled(this.player?.isAlive??!1),this.player&&(this.sceneService.setArenaBounds(),this.movementService.setArenaBounds()),this.meshManager.applyDeathVisibility(this.player,this.enemies),this.applyReviveSync(),!this.playerMesh&&this.enemyMeshes.size===0&&this.createCharacters(),this.syncCharacterScales(),this.syncThreatIndicators(),this.syncEnemyIdleWander(),this.meshManager.applyMaxSizeColors(this.enemies)}handleBattleEnd(){this.threatToggleService.reset(),this.collisionDetectionService.clearAll(),this.sceneService.setArenaBounds(),this.movementService.setArenaBounds(),this.movementService.clearIdleWanderCharacter()}handleBattleAction(e){this.threatToggleService.setCombatStarted(!0),this.movementService.clearIdleWanderCharacter(),this.meshManager.setCharacterAnimating(e.attackerId,!0),this.meshManager.setCharacterAnimating(e.defenderId,!0),e.type==="attack"&&e.attackerId===this.player?.id&&this.threatToggleService.incrementPlayerAttackCount(),this.vfxService.animateAction(e,this.meshManager.buildParticipantsMap(this.player,this.enemies),()=>this.handleActionAnimationComplete(e))}handleActionAnimationComplete(e){this.meshManager.setCharacterAnimating(e.attackerId,!1),this.meshManager.setCharacterAnimating(e.defenderId,!1),e.type==="attack"&&e.attackerId===this.player?.id&&this.threatToggleService.decrementPlayerAttackCount(),this.meshManager.applyDeathVisibility(this.player,this.enemies),this.applyEnemyAttackCooldownOpacity(e),this.syncEnemyIdleWander(),this.ngZone.run(()=>{this.threatToggleService.applyPendingToggle(()=>this.syncThreatIndicators()),this.battleService.processPostAnimationRevives(),this.battleService.finalizeIfComplete()})}applyEnemyAttackCooldownOpacity(e){if(e.type!=="attack")return;let t=1200;if(e.attackerId!==this.player?.id){let i=this.enemyMeshes.get(e.attackerId);i&&this.playerOpacityService.forceTemporary(i,.1,t,"attack-cooldown")}}createCharacters(){!this.player||this.enemies.length===0||(this.isLoading.set(!0),this.meshManager.createCharacters(this.player,this.enemies).then(()=>{let e=this.playerMesh;if(e){this.meshManager.revealCharacters(),this.isLoading.set(!1),this.movementService.registerCharacterMesh(e),this.movementService.setControlledCharacter(e,this.player.position,"left"),this.vfxService.createTeleportationEntrance(e,this.player.position,"left"),this.startSpawnProtectionEffect(e);for(let t of this.enemies){let i=this.enemyMeshes.get(t.id);i&&(this.movementService.registerCharacterMesh(i),this.vfxService.createTeleportationEntrance(i,t.position,"right"))}this.updateCameraDistanceScale(),this.syncEnemyIdleWander(),this.startShieldOverlapDetection(),this.startEdgeRoseDetection(),this.meshManager.applyMaxSizeColors(this.enemies),this.callbacks?.onCharactersCreated()}}))}syncCharacterScales(){this.meshManager.syncCharacterScales(this.player,this.enemies),this.updateCameraDistanceScale()}startSpawnProtectionEffect(e){this.spawnAnimationService.startPlayerSpawnProtection(e,()=>this.updateCameraDistanceScale(),()=>{this.playerMesh&&this.player&&this.meshManager.updateMeshGroundOffset(this.playerMesh,this.player)})}syncThreatIndicators(){if(!this.player)return;this.player.isAlive||(this.threatToggleService.disable(),this.player.size=Math.max(Up,this.player.size));let e=this.player.size,t=this.threatToggleService.showThreatIndicators();this.movementService.setThreatIndicatorsEnabled(t),this.playerMesh&&(this.meshManager.syncPlayerThreatIndicatorState(this.player,t,this.battleService.isPlayerSpawnProtected()),this.sceneService.setCameraFocus(this.playerMesh.position),this.updateCameraDistanceScale()),this.meshManager.syncEnemyThreatIndicators(this.enemies,e,t)}updateCameraDistanceScale(){this.playerMesh?this.sceneService.setCameraDistanceScale(Zt(this.playerMesh)):this.player&&this.sceneService.setCameraDistanceScale(Ot(this.player.size))}syncEnemyIdleWander(){this.movementService.syncIdleWanderCharacters(this.enemies,this.enemyMeshes,e=>this.meshManager.isCharacterAnimating(e))}startShieldOverlapDetection(){this.collisionDetectionService.startShieldOverlapDetection(()=>this.playerMesh,()=>this.enemyMeshes,()=>this.player,()=>this.enemies,()=>this.threatToggleService.showThreatIndicators(),e=>this.movementService.setControlledCharacterCollisionEnabled(e),()=>{})}startEdgeRoseDetection(){this.collisionDetectionService.startEdgeRoseDetection(()=>this.playerMesh,()=>this.player)}applyReviveSync(){for(let e of this.enemies){if(!e.isAlive)continue;let t=this.enemyMeshes.get(e.id);if(t&&!t.visible&&!this.meshManager.isCharacterAnimating(e.id)){this.movementService.removeIdleWanderCharacter(t);let i=!this.battleService.isPlayerSpawnShrinkActive();this.meshManager.setupRevivalMesh(t,e,i,ro),i&&this.spawnAnimationService.startEnemySpawnShrink(t,e,this.playerMesh,(n,s)=>this.meshManager.updateMeshGroundOffset(n,s)),t.visible=!0,this.collisionDetectionService.clearResolvedOverlap(e.id)}}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=xe({token:r,factory:r.\u0275fac})};var hA=["btn"],Iu=class r{ngZone=ee(ar);movementService=ee(ri);btnRef=Mp.required("btn");isMoving=!1;disposeListeners=null;constructor(){Rl(()=>{this.ngZone.runOutsideAngular(()=>{this.bindTouchListeners()})})}ngOnDestroy(){this.disposeListeners?.(),this.isMoving=!1,this.movementService.setForwardButtonPressed(!1)}bindTouchListeners(){let e=this.btnRef().nativeElement,t=s=>{e.classList.toggle("active",s),this.movementService.setForwardButtonPressed(s)},i=s=>{s.preventDefault(),this.isMoving=!this.isMoving,t(this.isMoving)},n=s=>{s.code==="Space"&&!s.repeat&&(s.preventDefault(),this.isMoving=!this.isMoving,t(this.isMoving))};e.addEventListener("pointerup",i),document.addEventListener("keydown",n),this.disposeListeners=()=>{e.removeEventListener("pointerup",i),document.removeEventListener("keydown",n)}}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=_n({type:r,selectors:[["app-battle-joystick"]],viewQuery:function(t,i){t&1&&Ep(i.btnRef,hA,5),t&2&&Tp()},decls:2,vars:0,consts:[["btn",""],["draggable","false","aria-label","Move forward",1,"move-btn"]],template:function(t,i){t&1&&Bi(0,"button",1,0)},styles:["[_nghost-%COMP%]{display:none;position:absolute;bottom:20px;left:64px;z-index:10;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (pointer: coarse){[_nghost-%COMP%]{display:block}}.move-btn[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;background:#070c1199;border:1.5px solid rgba(255,255,255,.15);box-shadow:0 4px 16px #0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);cursor:pointer;-webkit-user-drag:none;transition:background .1s,border-color .1s}.move-btn.active[_ngcontent-%COMP%]{background:#ffffff2e;border-color:#fff6}"],changeDetection:0})};var uA=["battleCanvas"];function dA(r,e){r&1&&(wl(),Bi(0,"circle",7))}function fA(r,e){r&1&&(wl(),Bi(0,"line",8))}function pA(r,e){if(r&1){let t=Ns();Bi(0,"app-battle-joystick"),qt(1,"button",4),vn("pointerdown",function(n){jr(t);let s=xn();return Jr(s.onThreatTogglePointerDown(n))})("click",function(n){jr(t);let s=xn();return Jr(s.onThreatToggleClick(n))}),wl(),qt(2,"svg",5),Bi(3,"circle",6),or(4,dA,1,0,":svg:circle",7)(5,fA,1,0,":svg:line",8),$t()()}if(r&2){let t=xn();Ft(),bp("threat-toggle--off",!t.showThreatIndicators()),Ft(3),lr(t.showThreatIndicators()?4:5)}}function mA(r,e){r&1&&(qt(0,"div",2),Bi(1,"div",9),$t())}function gA(r,e){if(r&1&&(qt(0,"div",3)(1,"div",10),Bs(2),$t(),qt(3,"div",11)(4,"span"),Bs(5),$t(),qt(6,"span"),Bs(7),Fn(8,"titlecase"),$t()()()),r&2){let t=xn();Ft(2),Bu("",t.performanceStats().fps," FPS"),Ft(3),Bu("",t.performanceStats().frameTimeMs," ms"),Ft(2),Dl(Un(8,3,t.performanceStats().qualityLevel))}}var El=class r{canvasRef;destroy$=new Ds;ngZone=ee(ar);cdr=ee(wp);sceneService=ee(St);movementService=ee(ri);vfxService=ee(Cs);collisionDetectionService=ee(Ps);spawnAnimationService=ee(Rs);keyboardService=ee(Ml);orchestrationService=ee(bl);suppressThreatToggleClick=!1;performanceStats=this.orchestrationService.performanceStats;isBattleActive=this.orchestrationService.isBattleActive;isLoading=this.orchestrationService.isLoading;showFpsBadge=this.keyboardService.showFpsBadge;showThreatIndicators=this.orchestrationService.showThreatIndicators;isFirstSpawning=this.orchestrationService.isFirstSpawning;get player(){return this.orchestrationService.player}get enemies(){return this.orchestrationService.enemies}toggleThreatIndicators(){this.orchestrationService.toggleThreatIndicators()}onThreatTogglePointerDown(e){e.pointerType!=="touch"&&e.pointerType!=="pen"||(e.preventDefault(),this.suppressThreatToggleClick=!0,this.toggleThreatIndicators())}onThreatToggleClick(e){if(this.suppressThreatToggleClick){e.preventDefault(),this.suppressThreatToggleClick=!1;return}this.toggleThreatIndicators()}constructor(){Rl(()=>{this.ngZone.runOutsideAngular(()=>{this.sceneService.init(this.canvasRef.nativeElement),this.movementService.init(this.canvasRef.nativeElement),this.keyboardService.init(()=>this.toggleThreatIndicators(),()=>this.isFirstSpawning())})})}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.orchestrationService.init(this.destroy$,{onCharactersCreated:()=>this.cdr.detectChanges(),onCharactersCleared:()=>this.cdr.detectChanges(),onLoadingStateChanged:()=>this.cdr.detectChanges()})})}ngOnDestroy(){this.collisionDetectionService.dispose(),this.spawnAnimationService.dispose(),this.destroy$.next(),this.destroy$.complete(),this.keyboardService.dispose(),this.orchestrationService.dispose(),this.movementService.dispose(),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.orchestrationService.clearCharacters()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=_n({type:r,selectors:[["app-battle-canvas"]],viewQuery:function(t,i){if(t&1&&Pl(uA,7),t&2){let n;Il(n=Ll())&&(i.canvasRef=n.first)}},features:[Ap([Ln,Ia,La,Dr,Da,St,Dn,Za,Ka,ja,Oa,Na,qa,Ja,Gr,Wr,Xr,Yr,$a,ri,Cs,Qa,qr,Rs,Ps,Ml,to,bl])],decls:5,vars:3,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"],[1,"loading-overlay"],[1,"fps-badge"],["type","button","aria-label","Toggle threat indicators",1,"threat-toggle",3,"pointerdown","click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","12","cy","12","r","9","stroke","currentColor","stroke-width","2"],["cx","12","cy","12","r","4","fill","currentColor"],["x1","6","y1","6","x2","18","y2","18","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"loading-spinner"],[1,"fps-badge__primary"],[1,"fps-badge__secondary"]],template:function(t,i){t&1&&(Bi(0,"canvas",1,0),or(2,pA,6,3)(3,mA,2,0,"div",2)(4,gA,9,5,"div",3)),t&2&&(Ft(2),lr(i.isBattleActive()&&!i.isFirstSpawning()?2:-1),Ft(),lr(i.isLoading()?3:-1),Ft(),lr(i.isBattleActive()&&i.showFpsBadge()?4:-1))},dependencies:[cr,Ip,Iu],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}.fps-badge[_ngcontent-%COMP%]{position:absolute;top:16px;left:50%;transform:translate(-50%);z-index:5;min-width:126px;padding:8px 14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:#070c11b8;box-shadow:0 10px 24px #00000047;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f5fbff;text-align:center;pointer-events:none}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;letter-spacing:.08em;line-height:1}.fps-badge__secondary[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:6px;color:#f5fbffc7;font-size:.6875rem;font-weight:600;letter-spacing:.06em;line-height:1;text-transform:uppercase}@media (max-width: 580px){.fps-badge[_ngcontent-%COMP%]{top:10px;min-width:112px;padding:7px 12px}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.8125rem}.fps-badge__secondary[_ngcontent-%COMP%]{gap:8px;margin-top:5px;font-size:.625rem}}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:10;pointer-events:none}.loading-spinner[_ngcontent-%COMP%]{width:48px;height:48px;border:3px solid rgba(255,255,255,.15);border-top-color:#fffc;border-radius:50%;animation:_ngcontent-%COMP%_spin .8s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.threat-toggle[_ngcontent-%COMP%]{display:none;position:absolute;bottom:24px;right:64px;z-index:10;width:77px;height:77px;padding:0;border:1px solid rgba(0,255,136,.4);border-radius:50%;background:#070c1199;box-shadow:0 4px 16px #0000004d;color:#0f8;cursor:pointer;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.threat-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:30px;height:30px}.threat-toggle--off[_ngcontent-%COMP%]{color:#fff6;border-color:#ffffff26}@media (pointer: coarse){.threat-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}"],changeDetection:0})};function _A(r,e){if(r&1){let t=Ns();qt(0,"app-victory-banner",5),vn("terminateBattle",function(){jr(t);let n=xn(2);return Jr(n.resetAndTerminateBattle())}),$t()}if(r&2){let t=xn();Bn("winner",t.winner)}}function vA(r,e){if(r&1&&or(0,_A,1,1,"app-victory-banner",4),r&2){let t=e;lr(t.isComplete&&t.winner?0:-1)}}var g0=class r{battleCanvas;destroy$=new Ds;battleService=ee(ur);router=ee(Lp);stateService=ee(Dp);displayName=Fu(()=>this.stateService.displayName());isFullscreen=Fu(()=>this.stateService.isFullscreenMode());battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(Sp(e=>e!==null));player=null;enemies=[];ngOnInit(){this.lockOrientation(),this.battleService.battleState$.pipe(Os(this.destroy$)).subscribe(e=>this.updateCharacters(e))}ngOnDestroy(){this.unlockOrientation(),this.stateService.isFullscreenMode.set(!1),this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){let e={id:zn,name:this.displayName(),size:Fp,color:Bp};this.battleService.startBattle(e,[si.RAT,si.GIRAFFE,si.HORSE,si.CAT,si.BEAR,si.WOLF,si.EAGLE,si.A,si.B,si.C,si.D,si.E,si.J,si.K,si.L])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.player=null,this.enemies=[],this.router.navigate(["/"])}lockOrientation(){window.innerWidth<=768&&screen.orientation?.lock?.("landscape")?.catch?.(()=>{})}unlockOrientation(){screen.orientation?.unlock?.()}toggleFullscreen(){this.stateService.isFullscreenMode.set(!this.isFullscreen())}updateCharacters(e){if(!e){this.player=null,this.enemies=[];return}this.player=e.team1[0]||null,this.enemies=e.team2}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=_n({type:r,selectors:[["app-battle"]],viewQuery:function(t,i){if(t&1&&Pl(El,5),t&2){let n;Il(n=Ll())&&(i.battleCanvas=n.first)}},decls:8,vars:7,consts:[[1,"battle-arena"],["severity","secondary",1,"fullscreen-toggle",3,"onClick","icon"],[1,"canvas-wrapper"],[3,"startBattle","isBattleActive"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(t,i){if(t&1&&(qt(0,"div",0)(1,"p-button",1),vn("onClick",function(){return i.toggleFullscreen()}),$t(),qt(2,"div",2),Bi(3,"app-battle-canvas"),or(4,vA,1,1),Fn(5,"async"),$t(),qt(6,"app-battle-controls",3),Fn(7,"async"),vn("startBattle",function(){return i.startBattle()}),$t()()),t&2){let n,s;Ft(),Bn("icon",i.isFullscreen()?"pi pi-window-minimize":"pi pi-window-maximize"),Ft(3),lr((n=Un(5,3,i.battleState$))?4:-1,n),Ft(2),Bn("isBattleActive",(s=Un(7,5,i.isBattleActive$))!==null&&s!==void 0?s:!1)}},dependencies:[cr,Pp,kl,Hl,El,Us,Fs],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;position:relative;overflow:hidden}.fullscreen-toggle[_ngcontent-%COMP%]{position:absolute;right:calc(50% - 17px);z-index:1002;opacity:.3;bottom:4px;width:39px}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;overflow:hidden}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:8px;display:flex;justify-content:center;align-items:center;pointer-events:none;z-index:1001}@media (max-width: 768px){.fullscreen-toggle[_ngcontent-%COMP%]{left:calc(50% - 17px)}}@media (max-width: 580px){.battle-overlay[_ngcontent-%COMP%]{gap:10px;height:100%}}@media (max-width: 480px){.battle-overlay[_ngcontent-%COMP%]{gap:8px}}@media (max-width: 768px) and (orientation: portrait){[_nghost-%COMP%]{position:fixed;top:0;left:100dvw;width:100dvh;height:100dvw;transform:rotate(90deg);transform-origin:top left;overflow:hidden;z-index:1000}[_nghost-%COMP%]   .battle-arena[_ngcontent-%COMP%]{height:100dvw}[_nghost-%COMP%]:fullscreen{top:0;left:100dvw;width:100dvh;height:100dvw;transform:rotate(90deg);transform-origin:top left}[_nghost-%COMP%]:fullscreen   .battle-arena[_ngcontent-%COMP%]{height:100dvw}.fullscreen-toggle[_ngcontent-%COMP%]{right:50%}}"]})};export{g0 as BattleComponent};
