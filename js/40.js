import{f as af}from"./7.js";import{e as Lo,f as Oo}from"./22.js";import"./41.js";import"./47.js";import{c as Io,d as Do}from"./12.js";import{a as tf,m as nf,s as sf,t as rf,v as Xn}from"./50.js";import{$a as bh,Cb as Rt,Da as wo,Db as Ft,Eb as bi,Ib as ar,Mb as Mn,Nb as bn,P as ha,Rb as Ao,Sb as Co,T as Ni,Ta as Nt,Tb as Ro,Vb as Sh,Wb as $d,Yb as or,Z as pt,Zb as Po,_b as Th,a as Mi,b as ca,dc as Qd,e as Mo,fa as nr,fb as rn,ga as sr,ha as So,k as bo,kb as Hn,kc as Sn,l as Mh,lc as Tn,oa as To,pa as Eo,rc as ef,s as Jd,sb as Gn,ua as rr,ub as jd,yb as Wn}from"./31.js";var Wi=Object.freeze({minX:-67,maxX:67,minZ:-67,maxZ:67});var lr="battleBaseScale",No="battleSpeedScale",Fo="battleVisualScale",bg=3;function an(s){return s/bg}function Mt(s){return s.userData[lr]??1}function of(s){return s.userData[No]??Mt(s)}function Si(s){return s.userData[Fo]??Mt(s)}var cf=.2,hf=8,Sg=44,Tg=9;function Uo(s,e){return Math.random()*(e-s)+s}function Eg(s){let e=[];for(let t=0;t<s;t++){let i=0,n;do n={x:Uo(Wi.minX,Wi.maxX),y:cf,z:Uo(Wi.minZ,Wi.maxZ)},i++;while(i<100&&e.some(r=>Math.hypot(n.x-r.x,n.z-r.z)<hf));e.push(n)}return e}var wg=40;function Ag(s){let e=[];for(let t of s){let i=0,n;do n={x:Uo(Wi.minX,Wi.maxX),y:cf,z:Uo(Wi.minZ,Wi.maxZ)},i++;while(i<100&&(Math.hypot(n.x-t.x,n.z-t.z)<wg||e.some(r=>Math.hypot(n.x-r.x,n.z-r.z)<hf)));e.push(n)}return e}var lf=1e3,cr=class s{battleStateSubject=new Mh(null);battleState$=this.battleStateSubject.asObservable();actionSubject=new Mh(null);action$=this.actionSubject.asObservable();pendingComplete=!1;lastAttackTime=new Map;startBattle(e,t){if(t.length===0)throw new Error("Must have at least one enemy");let i=Eg(1+t.length),[n,...r]=i,a={team1:[ca(Mi({},e),{isAlive:!0,position:n})],team2:t.map((o,l)=>ca(Mi({},o),{isAlive:!0,position:r[l]})),actions:[],winner:null,isComplete:!1};this.battleStateSubject.next(a)}resolveShieldOverlap(e,t){let i=this.battleStateSubject.value;if(!i||i.isComplete)return!1;let n=i.team1[0],r=i.team2.find(o=>o.id===e);if(!n?.isAlive||!r?.isAlive)return!1;let a=this.resolveCombat(i,n,r,t);return a?(a!==n&&(this.pendingComplete=!0),this.battleStateSubject.next(Mi({},i)),!0):!1}resolveEnemyShieldOverlap(e,t){let i=this.battleStateSubject.value;if(!i||i.isComplete)return!1;let n=i.team2.find(o=>o.id===e),r=i.team2.find(o=>o.id===t);return!n?.isAlive||!r?.isAlive||!this.resolveCombat(i,n,r)?!1:(this.battleStateSubject.next(Mi({},i)),!0)}finalizeIfComplete(){if(!this.pendingComplete)return;this.pendingComplete=!1,this.endBattle();let e=this.battleStateSubject.value;e&&this.battleStateSubject.next(Mi({},e))}endBattle(){let e=this.battleStateSubject.value;if(!e)return;if(e.isComplete=!0,e.team1[0]?.isAlive)e.winner=e.team1[0].name;else{let i=e.team2.filter(n=>n.isAlive);e.winner=i.length>0?i[0].name:null}}processPostAnimationRevives(){let e=this.battleStateSubject.value;if(!e||e.isComplete)return;if(this.reviveAllIfAllEnemiesBigger(e)){this.battleStateSubject.next(Mi({},e));return}e.team1[0]?.isAlive&&e.team2.every(i=>!i.isAlive)&&(this.pendingComplete=!0)}resetBattle(){this.pendingComplete=!1,this.lastAttackTime.clear(),this.battleStateSubject.next(null),this.actionSubject.next(null)}reviveAllIfAllEnemiesBigger(e){let t=e.team1[0];if(!t?.isAlive)return!1;let i=e.team2.filter(o=>o.isAlive);if(i.length===0||!(i.every(o=>o.size>t.size)||t.size<22))return!1;let n=e.team2.filter(o=>!o.isAlive&&o.size>t.size&&o.size<Tg);if(n.length===0)return!1;let r=n.map(o=>Mi({},o.position)),a=Ag(r);return n.forEach((o,l)=>{o.isAlive=!0,o.position=a[l],this.lastAttackTime.delete(o.id)}),!0}resolveCombat(e,t,i,n){let r=Date.now(),a=this.lastAttackTime.get(t.id)??0,o=this.lastAttackTime.get(i.id)??0;if(r-a<lf||r-o<lf)return null;let l=(n??t.size)>=i.size,c=l?t:i,h=l?i:t;this.lastAttackTime.set(c.id,r);let u={attackerId:c.id,defenderId:h.id,type:"attack",timestamp:r};return e.actions.push(u),this.actionSubject.next(u),h.isAlive=!1,c.size<Sg&&(c.size+=1),c}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Ni({token:s,factory:s.\u0275fac,providedIn:"root"})};var Bo=class s{winner;terminateBattle=new To;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=rn({type:s,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:7,vars:4,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(t,i){t&1&&(Rt(0,"div",0)(1,"div",1)(2,"div",2),or(3),Ft(),bi(4,"div",3),Rt(5,"p-button",4),Sn(6,"translate"),Mn("onClick",function(){return i.onTerminateBattle()}),Ft()()()),t&2&&(Nt(3),Po(i.winner),Nt(2),Gn("label",Tn(6,2,"Terminate")))},dependencies:[Xn,Oo,Lo,Do,Io],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden;pointer-events:none}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;pointer-events:auto;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin-bottom:20px;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#c0c6d0;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 24px rgba(123,140,173,.4),0 0 48px rgba(123,140,173,.15),0 2px 12px rgba(0,0,0,.9);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:1px solid rgba(168,178,193,.18)}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin-bottom:15px}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin-bottom:10px;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function Pg(s,e){if(s&1){let t=ar();Rt(0,"div",2)(1,"p-button",3),Sn(2,"translate"),Mn("onClick",function(){nr(t);let n=bn();return sr(n.onStartBattle())}),Ft()()}s&2&&(Nt(),Gn("label",Tn(2,1,"Release the Spiders!")))}var ko=class s{isBattleActive=!1;startBattle=new To;onStartBattle(){this.startBattle.emit()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=rn({type:s,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive"},outputs:{startBattle:"startBattle"},decls:2,vars:1,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"]],template:function(t,i){t&1&&(Rt(0,"div",0),Hn(1,Pg,3,3,"div",1),Ft()),t&2&&(Nt(),Gn("ngIf",!i.isBattleActive))},dependencies:[Xn,nf,Oo,Lo,Do,Io],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000;padding-top:120px}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 720px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{font-size:12px!important;padding:8px!important}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};function En(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function yf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ur={duration:.5,overwrite:!1,delay:0},Hh,Vt,ft,Ui=1e8,ot=1/Ui,Dh=Math.PI*2,Ig=Dh/4,Dg=0,Mf=Math.sqrt,Lg=Math.cos,Og=Math.sin,Pt=function(e){return typeof e=="string"},bt=function(e){return typeof e=="function"},An=function(e){return typeof e=="number"},Jo=function(e){return typeof e>"u"},hn=function(e){return typeof e=="object"},ui=function(e){return e!==!1},Gh=function(){return typeof window<"u"},Vo=function(e){return bt(e)||Pt(e)},bf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qt=Array.isArray,Ng=/random\([^)]+\)/g,Fg=/,\s*/g,df=/(?:-?\.?\d|\.)+/gi,Wh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xh=/[+-]=-?[.\d]+/,Ug=/[^,'"\[\]\s]+/gi,Bg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,ln,Lh,Yh,Ei={},Xo={},Sf,Tf=function(e){return(Xo=dr(e,Ei))&&Zt},jo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ga=function(e,t){return!t&&console.warn(e)},Ef=function(e,t){return e&&(Ei[e]=t)&&Xo&&(Xo[e]=t)||Ei},_a=function(){return 0},zg={suppressEvents:!0,isStart:!0,kill:!1},Ho={suppressEvents:!0,kill:!1},kg={suppressEvents:!0},qh={},qn=[],Oh={},wf,ci={},wh={},ff=30,Go=[],Zh="",Kh=function(e){var t=e[0],i,n;if(hn(t)||bt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Go.length;n--&&!Go[n].targetTest(t););i=Go[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Qh(e[n],i)))||e.splice(n,1);return e},Zn=function(e){return e._gsap||Kh(Bi(e))[0]._gsap},Jh=function(e,t,i){return(i=e[t])&&bt(i)?e[t]():Jo(i)&&e.getAttribute&&e.getAttribute(t)||i},ei=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},mt=function(e){return Math.round(e*1e7)/1e7||0},As=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Vg=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Yo=function(){var e=qn.length,t=qn.slice(0),i,n;for(Oh={},qn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},jh=function(e){return!!(e._initted||e._startAt||e.add)},Af=function(e,t,i,n){qn.length&&!Vt&&Yo(),e.render(t,i,n||!!(Vt&&t<0&&jh(e))),qn.length&&!Vt&&Yo()},Cf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ug).length<2?t:Pt(e)?e.trim():e},Rf=function(e){return e},wi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Hg=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},dr=function(e,t){for(var i in t)e[i]=t[i];return e},pf=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=hn(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},qo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},fa=function(e){var t=e.parent||gt,i=e.keyframes?Hg(qt(e.keyframes)):wi;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Gg=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Pf=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},$o=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Kn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Wg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nh=function(e,t,i,n){return e._startAt&&(Vt?e._startAt.revert(Ho):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Xg=function s(e){return!e||e._ts&&s(e.parent)},mf=function(e){return e._repeat?fr(e._tTime,e=e.duration()+e._rDelay)*e:0},fr=function(e,t){var i=Math.floor(e=mt(e/t));return e&&i===e?i-1:i},Zo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qo=function(e){return e._end=mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},el=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=mt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qo(e),i._dirty||Ss(i,e)),e},If=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zo(e.rawTime(),t),(!t._dur||ya(0,t.totalDuration(),i)-t._tTime>ot)&&t.render(i,!0)),Ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ot}},cn=function(e,t,i,n){return t.parent&&Kn(t),t._start=mt((An(i)?i:i||e!==gt?Fi(e,i,t):e._time)+t._delay),t._end=mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pf(e,t,"_first","_last",e._sort?"_start":0),Fh(t)||(e._recent=t),n||If(e,t),e._ts<0&&el(e,e._tTime),e},Df=function(e,t){return(Ei.ScrollTrigger||jo("scrollTrigger",t))&&Ei.ScrollTrigger.create(t,e)},Lf=function(e,t,i,n,r){if(iu(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&wf!==hi.frame)return qn.push(e),e._lazy=[r,n],1},Yg=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Fh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qg=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&Yg(e)&&!(!e._initted&&Fh(e))||(e._ts<0||e._dp._ts<0)&&!Fh(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=ya(0,e._tDur,t),h=fr(l,o),e._yoyo&&h&1&&(a=1-a),h!==fr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Vt||n||e._zTime===ot||!t&&e._zTime){if(!e._initted&&Lf(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?ot:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Nh(e,t,i,!0),e._onUpdate&&!i&&Ti(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Kn(e,1),!i&&!Vt&&(Ti(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zg=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},pr=function(e,t,i,n){var r=e._repeat,a=mt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:mt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&el(e,e._tTime=e._tDur*o),e.parent&&Qo(e),i||Ss(e.parent,e),e},gf=function(e){return e instanceof kt?Ss(e):pr(e,e._dur)},Kg={_start:0,endTime:_a,totalDuration:_a},Fi=function s(e,t,i){var n=e.labels,r=e._recent||Kg,a=e.duration()>=Ui?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(qt(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},pa=function(e,t,i){var n=An(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;a.immediateRender=ui(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Et(t[0],a,t[r+1])},Jn=function(e,t){return e||e===0?t(e):t},ya=function(e,t,i){return i<e?e:i>t?t:i},Ht=function(e,t){return!Pt(e)||!(t=Bg.exec(e))?"":t[1]},Jg=function(e,t,i){return Jn(i,function(n){return ya(e,t,n)})},Uh=[].slice,Of=function(e,t){return e&&hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hn(e[0]))&&!e.nodeType&&e!==ln},jg=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Pt(n)&&!t||Of(n,1)?(r=i).push.apply(r,Bi(n)):i.push(n)})||i},Bi=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):Pt(e)&&!i&&(Lh||!mr())?Uh.call((t||Yh).querySelectorAll(e),0):qt(e)?jg(e,i):Of(e)?Uh.call(e,0):e?[e]:[]},Bh=function(e){return e=Bi(e)[0]||ga("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bi(t,i.querySelectorAll?i:i===e?ga("Invalid scope")||Yh.createElement("div"):e)}},Nf=function(e){return e.sort(function(){return .5-Math.random()})},Ff=function(e){if(bt(e))return e;var t=hn(e)?e:{each:e},i=Ts(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,u=n;return Pt(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,y,S,M,b,E,A,R,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Ui])[1],!x){for(A=-Ui;A<(A=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*h-.5:n%x,y=x===Ui?0:l?g*u/x-.5:n/x|0,A=0,R=Ui,E=0;E<g;E++)S=E%x-p,M=y-(E/x|0),m[E]=b=c?Math.abs(c==="y"?M:S):Mf(S*S+M*M),b>A&&(A=b),b<R&&(R=b);n==="random"&&Nf(m),m.max=A-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(n==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ht(t.amount||t.each)||0,i=i&&g<0?Xf(i):i}return g=(m[d]-m.min)/m.max||0,mt(m.b+(i?i(g):g)*m.v)+m.u}},zh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=mt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(An(i)?0:Ht(i))}},Uf=function(e,t){var i=qt(e),n,r;return!i&&hn(e)&&(n=i=e.radius||Ui,e.values?(e=Bi(e.values),(r=!An(e[0]))&&(n*=n)):e=zh(e.increment)),Jn(t,i?bt(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ui,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:a,r||h===a||An(a)?h:h+Ht(a)}:zh(e))},Bf=function(e,t,i,n){return Jn(qt(e)?!t:i===!0?!!(i=0):!n,function(){return qt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},$g=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},Qg=function(e,t){return function(i){return e(parseFloat(i))+(t||Ht(i))}},e_=function(e,t,i){return kf(e,t,0,1,i)},zf=function(e,t,i){return Jn(i,function(n){return e[~~t(n)]})},t_=function s(e,t,i){var n=t-e;return qt(e)?zf(e,s(0,e.length),t):Jn(i,function(r){return(n+(r-e)%n)%n+e})},i_=function s(e,t,i){var n=t-e,r=n*2;return qt(e)?zf(e,s(0,e.length-1),t):Jn(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},gr=function(e){return e.replace(Ng,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Fg);return Bf(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},kf=function(e,t,i,n,r){var a=t-e,o=n-i;return Jn(r,function(l){return i+((l-e)/a*o||0)})},n_=function s(e,t,i,n){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var a=Pt(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(qt(e)&&!qt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=dr(qt(e)?[]:{},e));if(!h){for(l in t)eu.call(o,e,l,"get",t[l]);r=function(_){return ru(_,o)||(a?e.p:e)}}}return Jn(i,r)},_f=function(e,t,i){var n=e.labels,r=Ui,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Ti=function(e,t,i){var n=e.vars,r=n[t],a=ft,o=e._ctx,l,c,h;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&qn.length&&Yo(),o&&(ft=o),h=l?r.apply(c,l):r.call(c),ft=a,h},ua=function(e){return Kn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Ti(e,"onInterrupt"),e},hr,Vf=[],Hf=function(e){if(e)if(e=!e.name&&e.default||e,Gh()||e.headless){var t=e.name,i=bt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:_a,render:ru,add:eu,kill:v_,modifier:x_,rawVars:0},a={targetTest:0,get:0,getSetter:tl,aliases:{},register:0};if(mr(),e!==n){if(ci[t])return;wi(n,wi(qo(e,r),a)),dr(n.prototype,dr(r,qo(e,a))),ci[n.prop=t]=n,e.targetTest&&(Go.push(n),qh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ef(t,n),e.register&&e.register(Zt,n,ti)}else Vf.push(e)},at=255,da={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},Ah=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*at+.5|0},Gf=function(e,t,i){var n=e?An(e)?[e>>16,e>>8&at,e&at]:0:da.black,r,a,o,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])n=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&at,n&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(df),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,n.length>3&&(n[3]*=1),n[0]=Ah(l+1/3,r,a),n[1]=Ah(l,r,a),n[2]=Ah(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(Wh),i&&n.length<4&&(n[3]=1),n}else n=e.match(df)||da.transparent;n=n.map(Number)}return t&&!_&&(r=n[0]/at,a=n[1]/at,o=n[2]/at,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Wf=function(e){var t=[],i=[],n=-1;return e.split(wn).forEach(function(r){var a=r.match(ws)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},xf=function(e,t,i){var n="",r=(e+n).match(wn),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=Gf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=Wf(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(wn,"1").split(ws),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=e.split(wn),u=c.length-1;o<u;o++)n+=c[o]+r[o];return n+c[u]},wn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),s_=/hsl[a]?\(/,$h=function(e){var t=e.join(" "),i;if(wn.lastIndex=0,wn.test(t))return i=s_.test(t),e[1]=xf(e[1],i),e[0]=xf(e[0],i,Wf(e[1])),!0},xa,hi=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,h,u,d,f,_=function g(m){var p=s()-n,y=m===!0,S,M,b,E;if((p>e||p<0)&&(i+=p-t),n+=p,b=n-i,S=b-a,(S>0||y)&&(E=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=S+(S>=r?4:r-S),M=1),y||(l=c(g)),M)for(f=0;f<o.length;f++)o[f](b,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Sf&&(!Lh&&Gh()&&(ln=Lh=window,Yh=ln.document||{},Ei.gsap=Zt,(ln.gsapVersions||(ln.gsapVersions=[])).push(Zt.version),Tf(Xo||ln.GreenSockGlobals||!ln.gsap&&ln||{}),Vf.forEach(Hf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},xa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),xa=0,c=_a},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,y){var S=p?function(M,b,E,A){m(M,b,E,A),u.remove(S)}:m;return u.remove(m),o[y?"unshift":"push"](S),mr(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),mr=function(){return!xa&&hi.wake()},He={},r_=/^[\d.\-M][\d.\-,\s]/,a_=/["']/g,o_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(a_,"").trim():+c,n=l.substr(o+1).trim();return t},l_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},c_=function(e){var t=(e+"").split("("),i=He[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[o_(t[1])]:l_(e).split(",").map(Cf)):He._CE&&r_.test(e)?He._CE("",e):i},Xf=function(e){return function(t){return 1-e(1-t)}},Yf=function s(e,t){for(var i=e._first,n;i;)i instanceof kt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Ts=function(e,t){return e&&(bt(e)?e:He[e]||c_(e))||t},Cs=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return ei(e,function(o){He[o]=Ei[o]=r,He[a=o.toLowerCase()]=i;for(var l in r)He[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=He[o+"."+l]=r[l]}),r},qf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ch=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/Dh*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*Og((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:qf(o);return r=Dh/r,l.config=function(c,h){return s(e,c,h)},l},Rh=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:qf(i);return n.config=function(r){return s(e,r)},n};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Cs(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});He.Linear.easeNone=He.none=He.Linear.easeIn;Cs("Elastic",Ch("in"),Ch("out"),Ch());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Cs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Cs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Cs("Circ",function(s){return-(Mf(1-s*s)-1)});Cs("Sine",function(s){return s===1?1:-Lg(s*Ig)+1});Cs("Back",Rh("in"),Rh("out"),Rh());He.SteppedEase=He.steps=Ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-ot;return function(o){return((n*ya(0,a,o)|0)+r)*i}}};ur.ease=He["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Zh+=s+","+s+"Params,"});var Qh=function(e,t){this.id=Dg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jh,this.set=t?t.getSetter:tl},va=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,pr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),xa||hi.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,pr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(mr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(el(this,i),!r._dp||r.parent||If(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&cn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ot||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Af(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+mf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+mf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?fr(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Zo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ot?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),Qo(this),Wg(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=mt(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&cn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zo(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=kg);var n=Vt;return Vt=i,jh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Vt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,gf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,gf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Fi(this,i),ui(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ui(n)),this._dur||(this._zTime=-ot),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-ot)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,r=n._prom;return new Promise(function(a){var o=bt(i)?i:Rf,l=function(){var h=n.then;n.then=null,r&&r(),bt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){ua(this)},s}();wi(va.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var kt=function(s){yf(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=ui(i.sortChildren),gt&&cn(i.parent||gt,En(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Df(En(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return pa(0,arguments,this),this},t.from=function(n,r,a){return pa(1,arguments,this),this},t.fromTo=function(n,r,a,o){return pa(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,fa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(n,r,Fi(this,a),1),this},t.call=function(n,r,a){return cn(this,Et.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Et(n,a,Fi(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,h){return a.runBackwards=1,fa(a).immediateRender=ui(a.immediateRender),this.staggerTo(n,r,a,o,l,c,h)},t.staggerFromTo=function(n,r,a,o,l,c,h,u){return o.startAt=a,fa(o).immediateRender=ui(o.immediateRender),this.staggerTo(n,r,o,l,c,h,u)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:mt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,y,S,M,b,E,A;if(this!==gt&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,M=this._start,S=this._ts,p=!S,u&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,r,a);if(d=mt(h%m),h===l?(g=this._repeat,d=c):(b=mt(h/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=fr(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),E&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var R=E&&b&1,x=R===(E&&g&1);if(g<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:mt(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Yf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Zg(this,mt(o),mt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!r&&!b&&(Ti(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-ot);break}}f=_}else{f=this._last;for(var w=n<0?n:d;f;){if(_=f._prev,(f._act||w<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(n,r,a);if(f.render(f._ts>0?(w-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(w-f._start)*f._ts,r,a||Vt&&jh(f)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=w?-ot:ot);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-ot)._zTime=d>=o?1:-1,this._ts))return this._start=M,Qo(this),this.render(n,r,a);this._onUpdate&&!r&&Ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Kn(this,1),!r&&!(n<0&&!o)&&(h||o||!l)&&(Ti(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(An(r)||(r=Fi(this,r,n)),!(n instanceof va)){if(qt(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Pt(n))return this.addLabel(n,r);if(bt(n))n=Et.delayedCall(0,n);else return this}return this!==n?cn(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ui);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Pt(n)?this.removeLabel(n):bt(n)?this.killTweensOf(n):(n.parent===this&&$o(this,n),n===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mt(hi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Fi(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=Et.delayedCall(0,r||_a,a);return o.data="isPause",this._hasPause=1,cn(this,o,Fi(this,n))},t.removePause=function(n){var r=this._first;for(n=Fi(this,n);r;)r._start===n&&r.data==="isPause"&&Kn(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Yn!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=Bi(n),l=this._first,c=An(r),h;l;)l instanceof Et?Vg(l._targets,o)&&(c?(!Yn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Fi(a,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Et.to(a,wi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&pr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,wi({startAt:{time:Fi(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),_f(this,Fi(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),_f(this,Fi(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=mt(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return Ss(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Ss(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=Ui,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,cn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=mt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;pr(a,a===gt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(gt._ts&&(Af(gt,Zo(n,gt)),wf=hi.frame),hi.frame>=ff){ff+=di.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&di.autoSleep&&hi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||hi.sleep()}}},e}(va);wi(kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var h_=function(e,t,i,n,r,a,o){var l=new ti(this._pt,e,t,0,1,su,null,r),c=0,h=0,u,d,f,_,g,m,p,y;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=gr(n)),a&&(y=[i,n],a(y,e,t),i=y[0],n=y[1]),d=i.match(Eh)||[];u=Eh.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?As(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Eh.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Xh.test(n)||p)&&(l.e=0),this._pt=l,l},eu=function(e,t,i,n,r,a,o,l,c,h){bt(n)&&(n=n(r||0,e,a));var u=e[t],d=i!=="get"?i:bt(u)?c?e[t.indexOf("set")||!bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=bt(u)?c?m_:Jf:nu,_;if(Pt(n)&&(~n.indexOf("random(")&&(n=gr(n)),n.charAt(1)==="="&&(_=As(d,n)+(Ht(d)||0),(_||_===0)&&(n=_))),!h||d!==n||kh)return!isNaN(d*n)&&n!==""?(_=new ti(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?__:jf,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&jo(t,n),h_.call(this,e,t,d,n,f,l||di.stringFilter,c))},u_=function(e,t,i,n,r){if(bt(e)&&(e=ma(e,r,t,i,n)),!hn(e)||e.style&&e.nodeType||qt(e)||bf(e))return Pt(e)?ma(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=ma(e[o],r,t,i,n);return a},tu=function(e,t,i,n,r,a){var o,l,c,h;if(ci[e]&&(o=new ci[e]).init(r,o.rawVars?t[e]:u_(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new ti(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==hr))for(c=i._ptLookup[i._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Yn,kh,iu=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!Hh,M=e.timeline,b,E,A,R,x,w,P,N,F,H,G,k,z;if(M&&(!d||!r)&&(r="none"),e._ease=Ts(r,ur.ease),e._yEase=u?Xf(Ts(u===!0?r:u,ur.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!M&&!!n.runBackwards,!M||d&&!n.stagger){if(N=m[0]?Zn(m[0]).harness:0,k=N&&n[N.prop],b=qo(n,qh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Ho:zg),g._lazy=0),a){if(Kn(e._startAt=Et.set(m,wi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ui(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!o&&!f)&&e._startAt.revert(Ho),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(o=!1),A=wi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&ui(l),immediateRender:o,stagger:0,parent:p},b),k&&(A[N.prop]=k),Kn(e._startAt=Et.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(Ho):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,ot,ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ui(l)||l&&!_,E=0;E<m.length;E++){if(x=m[E],P=x._gsap||Kh(m)[E]._gsap,e._ptLookup[E]=H={},Oh[P.id]&&qn.length&&Yo(),G=y===m?E:y.indexOf(x),N&&(F=new N).init(x,k||b,e,G,y)!==!1&&(e._pt=R=new ti(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(q){H[q]=R}),F.priority&&(w=1)),!N||k)for(A in b)ci[A]&&(F=tu(A,b,e,G,x,y))?F.priority&&(w=1):H[A]=R=eu.call(e,x,A,"get",b[A],G,y,0,n.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),S&&e._pt&&(Yn=e,gt.killTweensOf(x,H,e.globalTime(t)),z=!e.parent,Yn=0),e._pt&&l&&(Oh[P.id]=1)}w&&au(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&M.render(Ui,!0,!0)},d_=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return kh=1,e.vars[t]="+=0",iu(e,o),kh=0,l?ga(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!r?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=St(i)+Ht(u.e)),u.b&&(u.b=h.s+Ht(u.b))},f_=function(e,t){var i=e[0]?Zn(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=dr({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},p_=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(qt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ma=function(e,t,i,n,r){return bt(e)?e.call(t,i,n,r):Pt(e)&&~e.indexOf("random(")?gr(e):e},Zf=Zh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kf={};ei(Zf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Kf[s]=1});var Et=function(s){yf(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:fa(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=n.parent||gt,S=(qt(i)||bf(i)?An(i[0]):"length"in n)?[i]:Bi(i),M,b,E,A,R,x,w,P;if(o._targets=S.length?Kh(S):ga("GSAP target "+i+" not found. https://gsap.com",!di.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Vo(c)||Vo(h)){if(n=o.vars,M=o.timeline=new kt({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:S}),M.kill(),M.parent=M._dp=En(o),M._start=0,d||Vo(c)||Vo(h)){if(A=S.length,w=d&&Ff(d),hn(d))for(R in d)~Zf.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(b=0;b<A;b++)E=qo(n,Kf),E.stagger=0,p&&(E.yoyoEase=p),P&&dr(E,P),x=S[b],E.duration=+ma(c,En(o),b,x,S),E.delay=(+ma(h,En(o),b,x,S)||0)-o._delay,!d&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),M.to(x,E,w?w(b,x,S):0),M._ease=He.none;M.duration()?c=h=0:o.timeline=0}else if(_){fa(wi(M.vars.defaults,{ease:"none"})),M._ease=Ts(_.ease||n.ease||"none");var N=0,F,H,G;if(qt(_))_.forEach(function(k){return M.to(S,k,">")}),M.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||p_(R,_[R],E,_.easeEach);for(R in E)for(F=E[R].sort(function(k,z){return k.t-z.t}),N=0,b=0;b<F.length;b++)H=F[b],G={ease:H.e,duration:(H.t-(b?F[b-1].t:0))/100*c},G[R]=H.v,M.to(S,G,N),N+=G.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!Hh&&(Yn=En(o),gt.killTweensOf(S),Yn=0),cn(y,En(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===mt(y._time)&&ui(u)&&Xg(En(o))&&y.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-h)||0)),m&&Df(En(o),m),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-ot&&!h?l:n<ot?0:n,d,f,_,g,m,p,y,S,M;if(!c)qg(this,n,r,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,r,a);if(d=mt(u%g),u===l?(_=this._repeat,d=c):(m=mt(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(M=this._yEase,d=c-d),m=fr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(S&&this._yEase&&Yf(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(mt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Lf(this,h?n:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&u&&!r&&!m&&(Ti(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;S&&S.render(n<0?n:S._dur*S._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Nh(this,n,r,a),Ti(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Ti(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Nh(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Kn(this,1),!r&&!(h&&!o)&&(u||o||p)&&(Ti(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){xa||hi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||iu(this,c),h=this._ease(c/this._dur),d_(this,n,r,a,o,h,c,l)?this.resetTo(n,r,a,o,1):(el(this,0),this.parent||Pf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Yn&&Yn.vars.overwrite!==!0)._first||ua(this),this.parent&&a!==this.timeline.totalDuration()&&pr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Bi(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&Gg(o,l))return r==="all"&&(this._pt=0),ua(this);for(u=this._op=this._op||[],r!=="all"&&(Pt(r)&&(g={},ei(r,function(y){return g[y]=1}),r=g),r=f_(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&$o(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ua(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return pa(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return pa(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return gt.killTweensOf(n,r,a)},e}(va);wi(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(s){Et[s]=function(){var e=new kt,t=Uh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var nu=function(e,t,i){return e[t]=i},Jf=function(e,t,i){return e[t](i)},m_=function(e,t,i,n){return e[t](n.fp,i)},g_=function(e,t,i){return e.setAttribute(t,i)},tl=function(e,t){return bt(e[t])?Jf:Jo(e[t])&&e.setAttribute?g_:nu},jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},__=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},su=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},ru=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},x_=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},v_=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?$o(this,t,"_pt"):t.dep||(i=1),t=n;return!i},y_=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},au=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},ti=function(){function s(t,i,n,r,a,o,l,c,h){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||jf,this.d=l||this,this.set=c||nu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=y_,this.m=i,this.mt=r,this.tween=n},s}();ei(Zh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return qh[s]=1});Ei.TweenMax=Ei.TweenLite=Et;Ei.TimelineLite=Ei.TimelineMax=kt;gt=new kt({sortChildren:!1,defaults:ur,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=$h;var Es=[],Wo={},M_=[],vf=0,b_=0,Ph=function(e){return(Wo[e]||M_).map(function(t){return t()})},Vh=function(){var e=Date.now(),t=[];e-vf>2&&(Ph("matchMediaInit"),Es.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=ln.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Ph("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),vf=e,Ph("matchMedia"))},$f=function(){function s(t,i){this.selector=i&&Bh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=b_++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){bt(i)&&(r=n,n=i,i=bt);var a=this,o=function(){var c=ft,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=Bh(r)),ft=a,u=n.apply(a,arguments),bt(u)&&a._r.push(u),ft=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===bt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=ft;ft=null,i(this),ft=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Et&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof kt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Es.length;a--;)Es[a].id===this.id&&Es.splice(a,1)},e.revert=function(i){this.kill(i||{})},s}(),S_=function(){function s(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){hn(i)||(i={matches:i});var a=new $f(0,r||this.scope),o=a.conditions={},l,c,h;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=ln.matchMedia(i[c]),l&&(Es.indexOf(a)<0&&Es.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Vh):l.addEventListener("change",Vh)));return h&&n(a,function(u){return a.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Ko={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Hf(n)})},timeline:function(e){return new kt(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Pt(e)&&(e=Bi(e)[0]);var r=Zn(e||{}).get,a=i?Rf:Cf;return i==="native"&&(i=""),e&&(t?a((ci[t]&&ci[t].get||r)(e,t,i,n)):function(o,l,c){return a((ci[o]&&ci[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Bi(e),e.length>1){var n=e.map(function(h){return Zt.quickSetter(h,t,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}e=e[0]||{};var a=ci[t],o=Zn(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;hr._pt=0,u.init(e,i?h+i:h,hr,0,[e]),u.render(1,u),hr._pt&&ru(1,hr)}:o.set(e,l);return a?c:function(h){return c(e,l,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,r=Zt.to(e,wi((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ts(e.ease,ur.ease)),pf(ur,e||{})},config:function(e){return pf(di,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!ci[o]&&!Ei[o]&&ga(t+" effect requires "+o+" plugin.")}),wh[t]=function(o,l,c){return i(Bi(o),wi(l||{},r),c)},a&&(kt.prototype[t]=function(o,l,c){return this.add(wh[t](o,hn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){He[e]=Ts(t)},parseEase:function(e,t){return arguments.length?Ts(e,t):He},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new kt(e),n,r;for(i.smoothChildTiming=ui(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Et&&n.vars.onComplete===n._targets[0]))&&cn(i,n,n._start-n._delay),n=r;return cn(gt,i,0),i},context:function(e,t){return e?new $f(e,t):ft},matchMedia:function(e){return new S_(e)},matchMediaRefresh:function(){return Es.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Vh()},addEventListener:function(e,t){var i=Wo[e]||(Wo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Wo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:t_,wrapYoyo:i_,distribute:Ff,random:Bf,snap:Uf,normalize:e_,getUnit:Ht,clamp:Jg,splitColor:Gf,toArray:Bi,selector:Bh,mapRange:kf,pipe:$g,unitize:Qg,interpolate:n_,shuffle:Nf},install:Tf,effects:wh,ticker:hi,updateRoot:kt.updateRoot,plugins:ci,globalTimeline:gt,core:{PropTween:ti,globals:Ef,Tween:Et,Timeline:kt,Animation:va,getCache:Zn,_removeLinkedListItem:$o,reverting:function(){return Vt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Hh=e}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ko[s]=Et[s]});hi.add(kt.updateRoot);hr=Ko.to({},{duration:0});var T_=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},E_=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=T_(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},Ih=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Pt(r)&&(l={},ei(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}E_(o,r)}}}},Zt=Ko.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Vt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ih("roundProps",zh),Ih("modifiers"),Ih("snap",Uf))||Ko;Et.version=kt.version=Zt.version="3.14.2";Sf=1;Gh()&&mr();var w_=He.Power0,A_=He.Power1,C_=He.Power2,R_=He.Power3,P_=He.Power4,I_=He.Linear,D_=He.Quad,L_=He.Cubic,O_=He.Quart,N_=He.Quint,F_=He.Strong,U_=He.Elastic,B_=He.Back,z_=He.SteppedEase,k_=He.Bounce,V_=He.Sine,H_=He.Expo,G_=He.Circ;var Qf,jn,xr,du,Ds,W_,ep,fu,X_=function(){return typeof window<"u"},Rn={},Is=180/Math.PI,vr=Math.PI/180,_r=Math.atan2,tp=1e8,pu=/([A-Z])/g,Y_=/(left|right|width|margin|padding|x)/i,q_=/[\s,\(]\S/,un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Z_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},K_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},J_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},j_=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},cp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$_=function(e,t,i){return e.style[t]=i},Q_=function(e,t,i){return e.style.setProperty(t,i)},e0=function(e,t,i){return e._gsap[t]=i},t0=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},i0=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},n0=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},_t="transform",fi=_t+"Origin",s0=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in Rn&&r){if(this.tfm=this.tfm||{},e!=="transform")e=un[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Cn(n,o)}):this.tfm[e]=a.x?a[e]:Cn(n,e),e===fi&&(this.tfm.zOrigin=a.zOrigin);else return un.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(_t)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=_t}(r||t)&&this.props.push(e,t,r[e])},up=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},r0=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(pu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=fu(),(!r||!r.isStart)&&!i[_t]&&(up(i),n.zOrigin&&i[fi]&&(i[fi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},dp=function(e,t){var i={target:e,props:[],revert:r0,save:s0};return e._gsap||Zt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},fp,cu=function(e,t){var i=jn.createElementNS?jn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):jn.createElement(e);return i&&i.style?i:jn.createElement(e)},Ai=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(pu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,yr(t)||t,1)||""},ip="O,Moz,ms,Ms,Webkit".split(","),yr=function(e,t,i){var n=t||Ds,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ip[a]+e in r););return a<0?null:(a===3?"ms":a>=0?ip[a]:"")+e},hu=function(){X_()&&window.document&&(Qf=window,jn=Qf.document,xr=jn.documentElement,Ds=cu("div")||{style:{}},W_=cu("div"),_t=yr(_t),fi=_t+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fp=!!yr("perspective"),fu=Zt.core.reverting,du=1)},np=function(e){var t=e.ownerSVGElement,i=cu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),xr.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),xr.removeChild(i),r},sp=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},pp=function(e){var t,i;try{t=e.getBBox()}catch{t=np(e),i=1}return t&&(t.width||t.height)||i||(t=np(e)),t&&!t.width&&!t.x&&!t.y?{x:+sp(e,["x","cx","x1"])||0,y:+sp(e,["y","cy","y1"])||0,width:0,height:0}:t},mp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pp(e))},Qn=function(e,t){if(t){var i=e.style,n;t in Rn&&t!==fi&&(t=_t),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(pu,"-$1").toLowerCase())):i.removeAttribute(t)}},$n=function(e,t,i,n,r,a){var o=new ti(e._pt,t,i,0,1,a?hp:cp);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},rp={deg:1,rad:1,turn:1},a0={grid:1,flex:1},es=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=Ds.style,l=Y_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===a||!r||rp[n]||rp[a])return r;if(a!=="px"&&!d&&(r=s(e,t,i,"px")),p=e.getCTM&&mp(e),(f||a==="%")&&(Rn[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],St(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===jn||!g.appendChild)&&(g=jn.body),m=g._gsap,m&&f&&m.width&&l&&m.time===hi.time&&!m.uncache)return St(r/m.width*u);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+n,_=e[h],y?e.style[t]=y:Qn(e,t)}else(f||a==="%")&&!a0[Ai(g,"display")]&&(o.position=Ai(e,"position")),g===e&&(o.position="static"),g.appendChild(Ds),_=Ds[h],g.removeChild(Ds),o.position="absolute";return l&&f&&(m=Zn(g),m.time=hi.time,m.width=g[h]),St(d?_*r/u:_&&r?u/_*r:0)},Cn=function(e,t,i,n){var r;return du||hu(),t in un&&t!=="transform"&&(t=un[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rn[t]&&t!=="transform"?(r=Sa(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:nl(Ai(e,fi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=il[t]&&il[t](e,t,i)||Ai(e,t)||Jh(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?es(e,t,r,i)+i:r},o0=function(e,t,i,n){if(!i||i==="none"){var r=yr(t,e,1),a=r&&Ai(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=Ai(e,"borderTopColor"))}var o=new ti(this._pt,e.style,t,0,1,su),l=0,c=0,h,u,d,f,_,g,m,p,y,S,M,b;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Ai(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=Ai(e,t)||n,g?e.style[t]=g:Qn(e,t)),h=[i,n],$h(h),i=h[0],n=h[1],d=i.match(ws)||[],b=n.match(ws)||[],b.length){for(;u=ws.exec(n);)m=u[0],y=n.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=As(f,m)+M),p=parseFloat(m),S=m.substr((p+"").length),l=ws.lastIndex-S.length,S||(S=S||di.units[t]||M,l===n.length&&(n+=S,o.e+=S)),M!==S&&(f=es(e,t,g,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?hp:cp;return Xh.test(n)&&(o.e=0),this._pt=o,o},ap={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},l0=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=ap[i]||i,t[1]=ap[n]||n,t.join(" ")},c0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Rn[o]&&(l=1,o=o==="transformOrigin"?fi:_t),Qn(i,o);l&&(Qn(i,_t),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Sa(i,1),a.uncache=1,up(n)))}},il={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new ti(e._pt,t,i,0,0,c0);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},ba=[1,0,0,1,0,0],gp={},_p=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},op=function(e){var t=Ai(e,_t);return _p(t)?ba:t.substr(7).match(Wh).map(St)},mu=function(e,t){var i=e._gsap||Zn(e),n=e.style,r=op(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ba:r):(r===ba&&!e.offsetParent&&e!==xr&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,xr.appendChild(e)),r=op(e),l?n.display=l:Qn(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):xr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},uu=function(e,t,i,n,r,a){var o=e._gsap,l=r||mu(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],S=t.split(" "),M=parseFloat(S[0])||0,b=parseFloat(S[1])||0,E,A,R,x;i?l!==ba&&(A=f*m-_*g)&&(R=M*(m/A)+b*(-g/A)+(g*y-m*p)/A,x=M*(-_/A)+b*(f/A)-(f*y-_*p)/A,M=R,b=x):(E=pp(e),M=E.x+(~S[0].indexOf("%")?M/100*E.width:M),b=E.y+(~(S[1]||S[0]).indexOf("%")?b/100*E.height:b)),n||n!==!1&&o.smooth?(p=M-c,y=b-h,o.xOffset=u+(p*f+y*g)-p,o.yOffset=d+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[fi]="0px 0px",a&&($n(a,o,"xOrigin",c,M),$n(a,o,"yOrigin",h,b),$n(a,o,"xOffset",u,o.xOffset),$n(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},Sa=function(e,t){var i=e._gsap||new Qh(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ai(e,fi)||"0",h,u,d,f,_,g,m,p,y,S,M,b,E,A,R,x,w,P,N,F,H,G,k,z,q,se,te,oe,Ie,Oe,We,Xe;return h=u=d=g=m=p=y=S=M=0,f=_=1,i.svg=!!(e.getCTM&&mp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),n.scale=n.rotate=n.translate="none"),A=mu(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),uu(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,A)),b=i.xOrigin||0,E=i.yOrigin||0,A!==ba&&(P=A[0],N=A[1],F=A[2],H=A[3],h=G=A[4],u=k=A[5],A.length===6?(f=Math.sqrt(P*P+N*N),_=Math.sqrt(H*H+F*F),g=P||N?_r(N,P)*Is:0,y=F||H?_r(F,H)*Is+g:0,y&&(_*=Math.abs(Math.cos(y*vr))),i.svg&&(h-=b-(b*P+E*F),u-=E-(b*N+E*H))):(Xe=A[6],Oe=A[7],te=A[8],oe=A[9],Ie=A[10],We=A[11],h=A[12],u=A[13],d=A[14],R=_r(Xe,Ie),m=R*Is,R&&(x=Math.cos(-R),w=Math.sin(-R),z=G*x+te*w,q=k*x+oe*w,se=Xe*x+Ie*w,te=G*-w+te*x,oe=k*-w+oe*x,Ie=Xe*-w+Ie*x,We=Oe*-w+We*x,G=z,k=q,Xe=se),R=_r(-F,Ie),p=R*Is,R&&(x=Math.cos(-R),w=Math.sin(-R),z=P*x-te*w,q=N*x-oe*w,se=F*x-Ie*w,We=H*w+We*x,P=z,N=q,F=se),R=_r(N,P),g=R*Is,R&&(x=Math.cos(R),w=Math.sin(R),z=P*x+N*w,q=G*x+k*w,N=N*x-P*w,k=k*x-G*w,P=z,G=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=St(Math.sqrt(P*P+N*N+F*F)),_=St(Math.sqrt(k*k+Xe*Xe)),R=_r(G,k),y=Math.abs(R)>2e-4?R*Is:0,M=We?1/(We<0?-We:We):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_p(Ai(e,_t)),z&&e.setAttribute("transform",z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=St(f),i.scaleY=St(_),i.rotation=St(g)+o,i.rotationX=St(m)+o,i.rotationY=St(p)+o,i.skewX=y+o,i.skewY=S+o,i.transformPerspective=M+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[fi]=nl(c)),i.xOffset=i.yOffset=0,i.force3D=di.force3D,i.renderTransform=i.svg?u0:fp?xp:h0,i.uncache=0,i},nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ou=function(e,t,i){var n=Ht(t);return St(parseFloat(t)+parseFloat(es(e,"x",i+"px",n)))+n},h0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xp(e,t)},Rs="0deg",Ma="0px",Ps=") ",xp=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,S=i.zOrigin,M="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(u!==Rs||h!==Rs)){var E=parseFloat(h)*vr,A=Math.sin(E),R=Math.cos(E),x;E=parseFloat(u)*vr,x=Math.cos(E),a=ou(y,a,A*x*-S),o=ou(y,o,-Math.sin(E)*-S),l=ou(y,l,R*x*-S+S)}m!==Ma&&(M+="perspective("+m+Ps),(n||r)&&(M+="translate("+n+"%, "+r+"%) "),(b||a!==Ma||o!==Ma||l!==Ma)&&(M+=l!==Ma||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ps),c!==Rs&&(M+="rotate("+c+Ps),h!==Rs&&(M+="rotateY("+h+Ps),u!==Rs&&(M+="rotateX("+u+Ps),(d!==Rs||f!==Rs)&&(M+="skew("+d+", "+f+Ps),(_!==1||g!==1)&&(M+="scale("+_+", "+g+Ps),y.style[_t]=M||"translate(0, 0)"},u0=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,S=parseFloat(a),M=parseFloat(o),b,E,A,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=vr,c*=vr,b=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=vr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,E*=x)),b=St(b),E=St(E),A=St(A),R=St(R)):(b=u,R=d,E=A=0),(S&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(S=es(f,"x",a,"px"),M=es(f,"y",o,"px")),(_||g||m||p)&&(S=St(S+_-(_*b+g*A)+m),M=St(M+g-(_*E+g*R)+p)),(n||r)&&(x=f.getBBox(),S=St(S+n/100*x.width),M=St(M+r/100*x.height)),x="matrix("+b+","+E+","+A+","+R+","+S+","+M+")",f.setAttribute("transform",x),y&&(f.style[_t]=x)},d0=function(e,t,i,n,r){var a=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Is:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*tp)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*tp)%a-~~(c/a)*a)),e._pt=d=new ti(e._pt,t,i,n,c,Z_),d.e=h,d.u="deg",e._props.push(i),d},lp=function(e,t){for(var i in t)e[i]=t[i];return e},f0=function(e,t,i){var n=lp({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[_t]=t,o=Sa(i,1),Qn(i,_t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_t],a[_t]=t,o=Sa(i,1),a[_t]=c);for(l in Rn)c=n[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Ht(c),_=Ht(h),u=f!==_?es(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new ti(e._pt,o,l,u,d-u,lu),e._pt.u=_||0,e._props.push(l));lp(o,n)};ei("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});il[e>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Cn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var gu={name:"css",register:hu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,y,S,M,b,E,A,R,x;du||hu(),this.styles=this.styles||dp(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(ci[g]&&tu(g,t,i,n,e,r)))){if(f=typeof h,_=il[g],f==="function"&&(h=h.call(i,n,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=gr(h)),_)_(this,e,g,h,i)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",wn.lastIndex=0,wn.test(c)||(m=Ht(c),p=Ht(h),p?m!==p&&(c=es(e,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,r):l[g],Pt(c)&&~c.indexOf("random(")&&(c=gr(c)),Ht(c+"")||c==="auto"||(c+=di.units[g]||Ht(Cn(e,g))||""),(c+"").charAt(1)==="="&&(c=Cn(e,g))):c=Cn(e,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in un&&(g==="autoAlpha"&&(d===1&&Cn(e,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),$n(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=un[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Rn,S){if(this.styles.save(g),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Ai(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=h,h=Ai(e,"perspective"),w?e.style.perspective=w:Qn(e,"perspective")}u=parseFloat(h)}if(M||(b=e._gsap,b.renderTransform&&!t.parseTransform||Sa(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,M=this._pt=new ti(this._pt,o,_t,0,1,b.renderTransform,b,0,-1),M.dep=1),g==="scale")this._pt=new ti(this._pt,b,"scaleY",b.scaleY,(y?As(b.scaleY,y+u):u)-b.scaleY||0,lu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(fi,0,o[fi]),h=l0(h),b.svg?uu(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&$n(this,b,"zOrigin",b.zOrigin,p),$n(this,o,g,nl(c),nl(h)));continue}else if(g==="svgOrigin"){uu(e,h,1,E,0,this);continue}else if(g in gp){d0(this,b,g,d,y?As(d,y+h):h);continue}else if(g==="smoothOrigin"){$n(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){f0(this,h,e);continue}}else g in o||(g=yr(g)||g);if(S||(u||u===0)&&(d||d===0)&&!q_.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ht(h)||(g in di.units?di.units[g]:m),m!==p&&(d=es(e,g,c,p)),this._pt=new ti(this._pt,S?b:o,g,d,(y?As(d,y+u):u)-d,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?j_:lu),this._pt.u=p||0,S&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=J_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=K_);else if(g in o)o0.call(this,e,g,c,y?y+h:h);else if(g in e)this.add(e,g,c||e[g],y?y+h:h,n,r);else if(g!=="parseTransform"){jo(g,h);continue}S||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}A&&au(this)},render:function(e,t){if(t.tween._time||!fu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Cn,aliases:un,getSetter:function(e,t,i){var n=un[t];return n&&n.indexOf(",")<0&&(t=n),t in Rn&&t!==fi&&(e._gsap.x||Cn(e,"x"))?i&&ep===i?t==="scale"?t0:e0:(ep=i||{})&&(t==="scale"?i0:n0):e.style&&!Jo(e.style[t])?$_:~t.indexOf("-")?Q_:tl(e,t)},core:{_removeProperty:Qn,_getMatrix:mu}};Zt.utils.checkPrefix=yr;Zt.core.getStyleSaver=dp;(function(s,e,t,i){var n=ei(s+","+e+","+t,function(r){Rn[r]=1});ei(e,function(r){di.units[r]="deg",gp[r]=1}),un[n[13]]=s+","+e,ei(i,function(r){var a=r.split(":");un[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){di.units[s]="px"});Zt.registerPlugin(gu);var pi=Zt.registerPlugin(gu)||Zt,_T=pi.core.Tween;var rc="182",ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qp=0,ju=1,Zp=2;var no=1,Kp=2,ea=3,zn=0,ai=1,mn=2,gn=0,Bs=1,$u=2,Qu=3,ed=4,Jp=5,os=100,jp=101,$p=102,Qp=103,em=104,tm=200,im=201,nm=202,sm=203,Pl=204,Il=205,rm=206,am=207,om=208,lm=209,cm=210,hm=211,um=212,dm=213,fm=214,ac=0,oc=1,lc=2,zs=3,cc=4,hc=5,uc=6,dc=7,fc=0,pm=1,mm=2,ji=0,td=1,id=2,nd=3,so=4,sd=5,rd=6,ad=7;var Vu=300,_s=301,Zs=302,pc=303,mc=304,ro=306,ks=1e3,dn=1001,Dl=1002,Bt=1003,gm=1004;var ao=1005;var Yt=1006,gc=1007;var xs=1008;var gi=1009,od=1010,ld=1011,ta=1012,_c=1013,$i=1014,Qi=1015,_n=1016,xc=1017,vc=1018,ia=1020,cd=35902,hd=35899,ud=1021,dd=1022,Hi=1023,fn=1026,vs=1027,fd=1028,yc=1029,Ks=1030,Mc=1031;var bc=1033,oo=33776,lo=33777,co=33778,ho=33779,Sc=35840,Tc=35841,Ec=35842,wc=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,Dc=37490,Lc=37491,Oc=37808,Nc=37809,Fc=37810,Uc=37811,Bc=37812,zc=37813,kc=37814,Vc=37815,Hc=37816,Gc=37817,Wc=37818,Xc=37819,Yc=37820,qc=37821,Zc=36492,Kc=36494,Jc=36495,jc=36283,$c=36284,Qc=36285,eh=36286;var Oa=2300,Ll=2301,Rl=2302,Hu=2400,Gu=2401,Wu=2402;var _m=3200;var th=0,xm=1,Vn="",Gt="srgb",Vs="srgb-linear",Na="linear",Je="srgb";var Us=7680;var Xu=519,vm=512,ym=513,Mm=514,ih=515,bm=516,Sm=517,nh=518,Tm=519,Ol=35044,pd=35048;var md="300 es",Ki=2e3,Fa=2001;function gd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function p0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Em(){let s=kr("canvas");return s.style.display="block",s}var vp={},Vr=null;function Ua(...s){let e="THREE."+s.shift();Vr?Vr("log",e,...s):console.log(e,...s)}function Ae(...s){let e="THREE."+s.shift();Vr?Vr("warn",e,...s):console.warn(e,...s)}function Ce(...s){let e="THREE."+s.shift();Vr?Vr("error",e,...s):console.error(e,...s)}function Hr(...s){let e=s.join(" ");e in vp||(vp[e]=!0,Ae(...s))}function wm(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yp=1234567,Da=Math.PI/180,Gr=180/Math.PI;function Un(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function _d(s,e){return(s%e+e)%e}function m0(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function g0(s,e,t){return s!==e?(t-s)/(e-s):0}function La(s,e,t){return(1-t)*s+t*e}function _0(s,e,t,i){return La(s,e,1-Math.exp(-t*i))}function x0(s,e=1){return e-Math.abs(_d(s,e*2)-e)}function v0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function y0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function M0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function b0(s,e){return s+Math.random()*(e-s)}function S0(s){return s*(.5-Math.random())}function T0(s){s!==void 0&&(yp=s);let e=yp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function E0(s){return s*Da}function w0(s){return s*Gr}function A0(s){return(s&s-1)===0&&s!==0}function C0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function R0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function P0(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),_=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Li={DEG2RAD:Da,RAD2DEG:Gr,generateUUID:Un,clamp:Ve,euclideanModulo:_d,mapLinear:m0,inverseLerp:g0,lerp:La,damp:_0,pingpong:x0,smoothstep:v0,smootherstep:y0,randInt:M0,randFloat:b0,randFloatSpread:S0,seededRandom:T0,degToRad:E0,radToDeg:w0,isPowerOfTwo:A0,ceilPowerOfTwo:C0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:P0,normalize:tt,denormalize:Zi},Te=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_u=new D,Mp=new Vi,Ne=class s{constructor(e,t,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],y=n[1],S=n[4],M=n[7],b=n[2],E=n[5],A=n[8];return r[0]=a*g+o*y+l*b,r[3]=a*m+o*S+l*E,r[6]=a*p+o*M+l*A,r[1]=c*g+h*y+u*b,r[4]=c*m+h*S+u*E,r[7]=c*p+h*M+u*A,r[2]=d*g+f*y+_*b,r[5]=d*m+f*S+_*E,r[8]=d*p+f*M+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xu.makeScale(e,t)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xu=new Ne,bp=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sp=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){let s={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(n.r=Bn(n.r),n.g=Bn(n.g),n.b=Bn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(n.r=Br(n.r),n.g=Br(n.g),n.b=Br(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vn?Na:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Vs]:{primaries:e,whitePoint:i,transfer:Na,toXYZ:bp,fromXYZ:Sp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:bp,fromXYZ:Sp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),s}var Ge=I0();function Bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Br(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Mr,Nl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mr===void 0&&(Mr=kr("canvas")),Mr.width=e.width,Mr.height=e.height;let n=Mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Mr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},D0=0,Wr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(vu(n[a].image)):r.push(vu(n[a]))}else r=vu(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var L0=0,yu=new D,_i=(()=>{class s extends pn{constructor(t=s.DEFAULT_IMAGE,i=s.DEFAULT_MAPPING,n=dn,r=dn,a=Yt,o=xs,l=Hi,c=gi,h=s.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Un(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yu).x}get height(){return this.source.getSize(yu).y}get depth(){return this.source.getSize(yu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let n=t[i];if(n===void 0){Ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){Ae(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=Vu,s.DEFAULT_ANISOTROPY=1,s})(),xt=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,b=(p+1)/2,E=(h+d)/4,A=(u+g)/4,R=(_+m)/4;return S>M&&S>b?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=E/i,r=A/i):M>b?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=E/n,r=R/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=A/r,n=R/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fl=class extends pn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let n={width:e,height:t,depth:i.depth},r=new _i(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wr(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Fl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ba=class extends _i{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ul=class extends _i{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xi):Xi.fromBufferAttribute(r,a),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),rl.subVectors(this.max,Ta),br.subVectors(e.a,Ta),Sr.subVectors(e.b,Ta),Tr.subVectors(e.c,Ta),ts.subVectors(Sr,br),is.subVectors(Tr,Sr),Ls.subVectors(br,Tr);let t=[0,-ts.z,ts.y,0,-is.z,is.y,0,-Ls.z,Ls.y,ts.z,0,-ts.x,is.z,0,-is.x,Ls.z,0,-Ls.x,-ts.y,ts.x,0,-is.y,is.x,0,-Ls.y,Ls.x,0];return!Mu(t,br,Sr,Tr,rl)||(t=[1,0,0,0,1,0,0,0,1],!Mu(t,br,Sr,Tr,rl))?!1:(al.crossVectors(ts,is),t=[al.x,al.y,al.z],Mu(t,br,Sr,Tr,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new D,new D,new D,new D,new D,new D,new D,new D],Xi=new D,sl=new Pi,br=new D,Sr=new D,Tr=new D,ts=new D,is=new D,Ls=new D,Ta=new D,rl=new D,al=new D,Os=new D;function Mu(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Os.fromArray(s,r);let o=n.x*Math.abs(Os.x)+n.y*Math.abs(Os.y)+n.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=i.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var O0=new Pi,Ea=new D,bu=new D,ls=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):O0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ea,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(bu)),this.expandByPoint(Ea.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},In=new D,Su=new D,ol=new D,ns=new D,Tu=new D,ll=new D,Eu=new D,cs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Su.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Su);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ol),o=ns.dot(this.direction),l=-ns.dot(ol),c=ns.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Su).addScaledVector(ol,d),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);let i=In.dot(this.direction),n=In.dot(In)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,n,r){Tu.subVectors(t,e),ll.subVectors(i,e),Eu.crossVectors(Tu,ll);let a=this.direction.dot(Eu),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);let l=o*this.direction.dot(ll.crossVectors(ns,ll));if(l<0)return null;let c=o*this.direction.dot(Tu.cross(ns));if(c<0||l+c>a)return null;let h=-o*ns.dot(Eu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class s{constructor(e,t,i,n,r,a,o,l,c,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,d,f,_,g,m)}set(e,t,i,n,r,a,o,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,F0)}lookAt(e,t,i){let n=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),ss.crossVectors(i,Ci),ss.lengthSq()===0&&(Math.abs(i.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),ss.crossVectors(i,Ci)),ss.normalize(),cl.crossVectors(Ci,ss),n[0]=ss.x,n[4]=cl.x,n[8]=Ci.x,n[1]=ss.y,n[5]=cl.y,n[9]=Ci.y,n[2]=ss.z,n[6]=cl.z,n[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],S=i[7],M=i[11],b=i[15],E=n[0],A=n[4],R=n[8],x=n[12],w=n[1],P=n[5],N=n[9],F=n[13],H=n[2],G=n[6],k=n[10],z=n[14],q=n[3],se=n[7],te=n[11],oe=n[15];return r[0]=a*E+o*w+l*H+c*q,r[4]=a*A+o*P+l*G+c*se,r[8]=a*R+o*N+l*k+c*te,r[12]=a*x+o*F+l*z+c*oe,r[1]=h*E+u*w+d*H+f*q,r[5]=h*A+u*P+d*G+f*se,r[9]=h*R+u*N+d*k+f*te,r[13]=h*x+u*F+d*z+f*oe,r[2]=_*E+g*w+m*H+p*q,r[6]=_*A+g*P+m*G+p*se,r[10]=_*R+g*N+m*k+p*te,r[14]=_*x+g*F+m*z+p*oe,r[3]=y*E+S*w+M*H+b*q,r[7]=y*A+S*P+M*G+b*se,r[11]=y*R+S*N+M*k+b*te,r[15]=y*x+S*F+M*z+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],y=l*f-c*d,S=o*f-c*u,M=o*d-l*u,b=a*f-c*h,E=a*d-l*h,A=a*u-o*h;return t*(g*y-m*S+p*M)-i*(_*y-m*b+p*E)+n*(_*S-g*b+p*A)-r*(_*M-g*E+m*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,S=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,M=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,E=t*y+i*S+n*M+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=y*A,e[1]=(g*d*r-u*m*r-g*n*f+i*m*f+u*n*p-i*d*p)*A,e[2]=(o*m*r-g*l*r+g*n*c-i*m*c-o*n*p+i*l*p)*A,e[3]=(u*l*r-o*d*r-u*n*c+i*d*c+o*n*f-i*l*f)*A,e[4]=S*A,e[5]=(h*m*r-_*d*r+_*n*f-t*m*f-h*n*p+t*d*p)*A,e[6]=(_*l*r-a*m*r-_*n*c+t*m*c+a*n*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*n*c-t*d*c-a*n*f+t*l*f)*A,e[8]=M*A,e[9]=(_*u*r-h*g*r-_*i*f+t*g*f+h*i*p-t*u*p)*A,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*A,e[12]=b*A,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*A,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*m-t*o*m)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,m=a*u,p=o*u,y=l*c,S=l*h,M=l*u,b=i.x,E=i.y,A=i.z;return n[0]=(1-(g+p))*b,n[1]=(f+M)*b,n[2]=(_-S)*b,n[3]=0,n[4]=(f-M)*E,n[5]=(1-(d+p))*E,n[6]=(m+y)*E,n[7]=0,n[8]=(_+S)*A,n[9]=(m-y)*A,n[10]=(1-(d+g))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;if(e.x=n[12],e.y=n[13],e.z=n[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Er.set(n[0],n[1],n[2]).length(),a=Er.set(n[4],n[5],n[6]).length(),o=Er.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),Yi.copy(this);let c=1/r,h=1/a,u=1/o;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=h,Yi.elements[5]*=h,Yi.elements[6]*=h,Yi.elements[8]*=u,Yi.elements[9]*=u,Yi.elements[10]*=u,t.setFromRotationMatrix(Yi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Ki,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Ki)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fa)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Ki,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Ki)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Fa)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Er=new D,Yi=new dt,N0=new D(0,0,0),F0=new D(1,1,1),ss=new D,cl=new D,Ci=new D,Tp=new dt,Ep=new Vi,Ji=(()=>{class s{constructor(t=0,i=0,n=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){let r=t.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],f=r[6],_=r[10];switch(i){case"XYZ":this._y=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return Tp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tp,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},U0=0,wp=new D,wr=new Vi,Dn=new dt,hl=new D,wa=new D,B0=new D,z0=new Vi,Ap=new D(1,0,0),Cp=new D(0,1,0),Rp=new D(0,0,1),Pp={type:"added"},k0={type:"removed"},Ar={type:"childadded",child:null},wu={type:"childremoved",child:null},si=(()=>{class s extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,i=new Ji,n=new Vi,r=new D(1,1,1);function a(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ne}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Ap,t)}rotateY(t){return this.rotateOnAxis(Cp,t)}rotateZ(t){return this.rotateOnAxis(Rp,t)}translateOnAxis(t,i){return wp.copy(t).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ap,t)}translateY(t){return this.translateOnAxis(Cp,t)}translateZ(t){return this.translateOnAxis(Rp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?hl.copy(t):hl.set(t,i,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(wa,hl,this.up):Dn.lookAt(hl,wa,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Dn),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pp),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(k0),wu.child=t,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pp),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,i);if(o!==void 0)return o}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,t,B0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>ca(Mi({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>Mi({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(t.materials,this.material[c]));r.material=l}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(t.animations,c))}}if(i){let l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),_=o(t.animations),g=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}}return s.DEFAULT_UP=new D(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),qi=new D,Ln=new D,Au=new D,On=new D,Cr=new D,Rr=new D,Ip=new D,Cu=new D,Ru=new D,Pu=new D,Iu=new xt,Du=new xt,Lu=new xt,Fn=class s{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),qi.subVectors(e,t),n.cross(qi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){qi.subVectors(n,t),Ln.subVectors(i,t),Au.subVectors(e,t);let a=qi.dot(qi),o=qi.dot(Ln),l=qi.dot(Au),c=Ln.dot(Ln),h=Ln.dot(Au),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Iu.setScalar(0),Du.setScalar(0),Lu.setScalar(0),Iu.fromBufferAttribute(e,t),Du.fromBufferAttribute(e,i),Lu.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Iu,r.x),a.addScaledVector(Du,r.y),a.addScaledVector(Lu,r.z),a}static isFrontFacing(e,t,i,n){return qi.subVectors(i,t),Ln.subVectors(e,t),qi.cross(Ln).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),qi.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Cr.subVectors(n,i),Rr.subVectors(r,i),Cu.subVectors(e,i);let l=Cr.dot(Cu),c=Rr.dot(Cu);if(l<=0&&c<=0)return t.copy(i);Ru.subVectors(e,n);let h=Cr.dot(Ru),u=Rr.dot(Ru);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Cr,a);Pu.subVectors(e,r);let f=Cr.dot(Pu),_=Rr.dot(Pu);if(_>=0&&f<=_)return t.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Rr,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Ip.subVectors(r,n),o=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(Ip,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Cr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Ou(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ge.workingColorSpace){if(e=_d(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ou(a,r,e+1/3),this.g=Ou(a,r,e),this.b=Ou(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,n),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Am[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Ge.workingToColorSpace(Jt.copy(this),e),Math.round(Ve(Jt.r*255,0,255))*65536+Math.round(Ve(Jt.g*255,0,255))*256+Math.round(Ve(Jt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Jt.copy(this),t);let i=Jt.r,n=Jt.g,r=Jt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Gt){Ge.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,n=Jt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(ul);let i=La(rs.h,ul.h,t),n=La(rs.s,ul.s,t),r=La(rs.l,ul.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new De;De.NAMES=Am;var V0=0,ri=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Bs,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ka=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new D,dl=new Te,H0=0,mi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}};var Va=class extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ha=class extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}},G0=0,zi=new dt,Nu=new si,Pr=new D,Ri=new Pi,Aa=new Pi,Ut=new D,zt=class s extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Ha:Va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Ri.min,Aa.min),Ri.expandByPoint(Ut),Ut.addVectors(Ri.max,Aa.max),Ri.expandByPoint(Ut)):(Ri.expandByPoint(Aa.min),Ri.expandByPoint(Aa.max))}Ri.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),Ut.add(Pr)),n=Math.max(n,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;let c=new D,h=new D,u=new D,d=new Te,f=new Te,_=new Te,g=new D,m=new D;function p(R,x,w){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,x),_.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[x].add(g),o[w].add(g),l[R].add(m),l[x].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,x=y.length;R<x;++R){let w=y[R],P=w.start,N=w.count;for(let F=P,H=P+N;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let S=new D,M=new D,b=new D,E=new D;function A(R){b.fromBufferAttribute(n,R),E.copy(b);let x=o[R];S.copy(x),S.sub(b.multiplyScalar(b.dot(x))).normalize(),M.crossVectors(E,x);let P=M.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,x=y.length;R<x;++R){let w=y[R],P=w.start,N=w.count;for(let F=P,H=P+N;F<H;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new mi(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dp=new dt,Ns=new cs,fl=new ls,Lp=new D,pl=new D,ml=new D,gl=new D,Fu=new D,_l=new D,Op=new D,xl=new D,je=class extends si{constructor(e=new zt,t=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){_l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Fu.fromBufferAttribute(u,e),a?_l.addScaledVector(Fu,h):_l.addScaledVector(Fu.sub(t),h))}t.add(_l)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(fl.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(fl,Lp)===null||Ns.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Dp.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=S;M<b;M+=3){let E=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);n=vl(this,p,e,i,c,h,u,E,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);n=vl(this,a,e,i,c,h,u,y,S,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,b=S;M<b;M+=3){let E=M,A=M+1,R=M+2;n=vl(this,p,e,i,c,h,u,E,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=m,S=m+1,M=m+2;n=vl(this,a,e,i,c,h,u,y,S,M),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function W0(s,e,t,i,n,r,a,o){let l;if(e.side===ai?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===zn,o),l===null)return null;xl.copy(o),xl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(xl);return c<t.near||c>t.far?null:{distance:c,point:xl.clone(),object:s}}function vl(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,pl),s.getVertexPosition(l,ml),s.getVertexPosition(c,gl);let h=W0(s,e,t,i,pl,ml,gl,Op);if(h){let u=new D;Fn.getBarycoord(Op,pl,ml,gl,u),n&&(h.uv=Fn.getInterpolatedAttribute(n,o,l,c,u,new Te)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new Te)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Fn.getNormal(pl,ml,gl,d.normal),h.face=d,h.barycoord=u}return h}var Xr=class s extends zt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function _(g,m,p,y,S,M,b,E,A,R,x){let w=M/A,P=b/R,N=M/2,F=b/2,H=E/2,G=A+1,k=R+1,z=0,q=0,se=new D;for(let te=0;te<k;te++){let oe=te*P-F;for(let Ie=0;Ie<G;Ie++){let Oe=Ie*w-N;se[g]=Oe*y,se[m]=oe*S,se[p]=H,c.push(se.x,se.y,se.z),se[g]=0,se[m]=0,se[p]=E>0?1:-1,h.push(se.x,se.y,se.z),u.push(Ie/A),u.push(1-te/R),z+=1}}for(let te=0;te<R;te++)for(let oe=0;oe<A;oe++){let Ie=d+oe+G*te,Oe=d+oe+G*(te+1),We=d+(oe+1)+G*(te+1),Xe=d+(oe+1)+G*te;l.push(Ie,Oe,Xe),l.push(Oe,We,Xe),q+=6}o.addGroup(f,q,x),f+=q,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function jt(s){let e={};for(let t=0;t<s.length;t++){let i=Js(s[t]);for(let n in i)e[n]=i[n]}return e}function X0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Cm={clone:Js,merge:jt},Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ii=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ga=class extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},as=new D,Np=new Te,Fp=new Te,Wt=class extends Ga{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Np,Fp),t.subVectors(Fp,Np)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Dr=1,Bl=class extends si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Wt(Ir,Dr,e,t);n.layers=this.layers,this.add(n);let r=new Wt(Ir,Dr,e,t);r.layers=this.layers,this.add(r);let a=new Wt(Ir,Dr,e,t);a.layers=this.layers,this.add(a);let o=new Wt(Ir,Dr,e,t);o.layers=this.layers,this.add(o);let l=new Wt(Ir,Dr,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Ir,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Wa=class extends _i{constructor(e=[],t=_s,i,n,r,a,o,l,c,h){super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xa=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Wa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Xr(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:gn});r.uniforms.tEquirect.value=t;let a=new je(n,r),o=t.minFilter;return t.minFilter===xs&&(t.minFilter=Yt),new Bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},Xt=class extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z0={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Ya=class extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ii=new D,qa=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qr=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lr,Ca=new D,Or=new D,Nr=new D,Fr=new Te,Ra=new Te,Rm=new dt,yl=new D,Pa=new D,Ml=new D,Up=new Te,Uu=new Te,Bp=new Te,Za=class extends si{constructor(e=new qr){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zl(t,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new qa(i,3,0,!1)),Lr.setAttribute("uv",new qa(i,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new Te(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),Rm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Nr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;bl(yl.set(-.5,-.5,0),Nr,a,Or,n,r),bl(Pa.set(.5,-.5,0),Nr,a,Or,n,r),bl(Ml.set(.5,.5,0),Nr,a,Or,n,r),Up.set(0,0),Uu.set(1,0),Bp.set(1,1);let o=e.ray.intersectTriangle(yl,Pa,Ml,!1,Ca);if(o===null&&(bl(Pa.set(-.5,.5,0),Nr,a,Or,n,r),Uu.set(0,1),o=e.ray.intersectTriangle(yl,Ml,Pa,!1,Ca),o===null))return;let l=e.ray.origin.distanceTo(Ca);l<e.near||l>e.far||t.push({distance:l,point:Ca.clone(),uv:Fn.getInterpolation(Ca,yl,Pa,Ml,Up,Uu,Bp,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bl(s,e,t,i,n,r){Fr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Ra.x=r*Fr.x-n*Fr.y,Ra.y=n*Fr.x+r*Fr.y):Ra.copy(Fr),s.copy(e),s.x+=Ra.x,s.y+=Ra.y,s.applyMatrix4(Rm)}var kl=class extends _i{constructor(e=null,t=1,i=1,n,r,a,o,l,c=Bt,h=Bt,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bu=new D,K0=new D,J0=new Ne,ki=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Bu.subVectors(i,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Bu),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||J0.getNormalMatrix(e),n=this.coplanarPoint(Bu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new ls,j0=new Te(.5,.5),Sl=new D,Zr=class{constructor(e=new ki,t=new ki,i=new ki,n=new ki,r=new ki,a=new ki){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],g=r[9],m=r[10],p=r[11],y=r[12],S=r[13],M=r[14],b=r[15];if(n[0].setComponents(c-a,f-h,p-_,b-y).normalize(),n[1].setComponents(c+a,f+h,p+_,b+y).normalize(),n[2].setComponents(c+o,f+u,p+g,b+S).normalize(),n[3].setComponents(c-o,f-u,p-g,b-S).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,p-m,b-M).normalize();else if(n[4].setComponents(c-l,f-d,p-m,b-M).normalize(),t===Ki)n[5].setComponents(c+l,f+d,p+m,b+M).normalize();else if(t===Fa)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=j0.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Sl.x=n.normal.x>0?e.max.x:e.min.x,Sl.y=n.normal.y>0?e.max.y:e.min.y,Sl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hs=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new D,Hl=new D,zp=new dt,Ia=new cs,Tl=new ls,zu=new D,kp=new D,Gl=class extends si{constructor(e=new zt,t=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Vl.fromBufferAttribute(t,n-1),Hl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Vl.distanceTo(Hl);e.setAttribute("lineDistance",new lt(i,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(n),Tl.radius+=r,e.ray.intersectsSphere(Tl)===!1)return;zp.copy(n).invert(),Ia.copy(e.ray).applyMatrix4(zp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),y=h.getX(g+1),S=El(this,e,Ia,l,p,y,g);S&&t.push(S)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=El(this,e,Ia,l,g,m,_-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=El(this,e,Ia,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=El(this,e,Ia,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function El(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(Vl.fromBufferAttribute(o,n),Hl.fromBufferAttribute(o,r),t.distanceSqToSegment(Vl,Hl,zu,kp)>i)return;zu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(zu);if(!(c<e.near||c>e.far))return{distance:c,point:kp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Vp=new D,Hp=new D,Kr=class extends Gl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Vp.fromBufferAttribute(t,n),Hp.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Vp.distanceTo(Hp);e.setAttribute("lineDistance",new lt(i,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var kn=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gp=new dt,Yu=new cs,wl=new ls,Al=new D,Hs=class extends si{constructor(e=new zt,t=new kn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(n),wl.radius+=r,e.ray.intersectsSphere(wl)===!1)return;Gp.copy(n).invert(),Yu.copy(e.ray).applyMatrix4(Gp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);Al.fromBufferAttribute(u,m),Wp(Al,m,l,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Al.fromBufferAttribute(u,_),Wp(Al,_,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wp(s,e,t,i,n,r,a){let o=Yu.distanceSqToPoint(s);if(o<t){let l=new D;Yu.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Gs=class extends _i{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},us=class extends _i{constructor(e,t,i=$i,n,r,a,o=Bt,l=Bt,c,h=fn,u=1){if(h!==fn&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wl=class extends us{constructor(e,t=$i,i=_s,n,r,a=Bt,o=Bt,l,c=fn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends _i{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ws=class s extends zt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],m=i/2,p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new D,b=new D,E=0,A=(t-e)/i;for(let R=0;R<=r;R++){let x=[],w=R/r,P=w*(t-e)+e;for(let N=0;N<=n;N++){let F=N/n,H=F*l+o,G=Math.sin(H),k=Math.cos(H);b.x=P*G,b.y=-w*i+m,b.z=P*k,u.push(b.x,b.y,b.z),M.set(G,A,k).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-w),x.push(_++)}g.push(x)}for(let R=0;R<n;R++)for(let x=0;x<r;x++){let w=g[x][R],P=g[x+1][R],N=g[x+1][R+1],F=g[x][R+1];(e>0||x!==0)&&(h.push(w,P,F),E+=3),(t>0||x!==r-1)&&(h.push(P,N,F),E+=3)}c.addGroup(p,E,0),p+=E}function S(M){let b=_,E=new Te,A=new D,R=0,x=M===!0?e:t,w=M===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),_++;let P=_;for(let N=0;N<=n;N++){let H=N/n*l+o,G=Math.cos(H),k=Math.sin(H);A.x=x*k,A.y=m*w,A.z=x*G,u.push(A.x,A.y,A.z),d.push(0,w,0),E.x=G*.5+.5,E.y=k*.5*w+.5,f.push(E.x,E.y),_++}for(let N=0;N<n;N++){let F=b+N,H=P+N;M===!0?h.push(H,H+1,F):h.push(H+1,H,F),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xs=class s extends zt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let S=0;S<c;S++){let M=S*u-r;_.push(M,-y,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),E=y+1+c*p;f.push(S,M,E),f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(g,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ja=class s extends zt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){let y=[],S=p/i,M=0;p===0&&a===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let E=b/t;u.x=-e*Math.cos(n+E*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(n+E*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+M,1-S),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let S=h[p][y+1],M=h[p][y],b=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(S,M,E),(p!==i-1||l<Math.PI)&&f.push(M,b,E)}this.setIndex(f),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(g,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xl=class extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ds=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ja=class extends ri{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yl=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var Ys=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zl=class extends Ys{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hu,endingEnd:Hu}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gu:r=e,o=2*t-i;break;case Wu:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gu:a=e,l=2*i-t;break;case Wu:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-f)*m+(1.5+f)*g+.5*_,M=f*m-f*g;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+y*a[c+b]+S*a[l+b]+M*a[u+b];return r}},Kl=class extends Ys{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Jl=class extends Ys{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Di=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cl(t,this.TimeBufferType),this.values=Cl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Cl(e.times,Array),values:Cl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case Ll:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ae("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Ll;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&p0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Rl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Ll;var fs=class extends Di{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Oa;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}};jl.prototype.ValueTypeName="color";var $l=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}};$l.prototype.ValueTypeName="number";var Ql=class extends Ys{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},$a=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};$a.prototype.ValueTypeName="quaternion";$a.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Di{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Oa;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}};ec.prototype.ValueTypeName="vector";var zr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},tc=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pm=new tc,na=(()=>{class s{constructor(t){this.manager=t!==void 0?t:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let n=this;return new Promise(function(r,a){n.load(t,r,i,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return s.DEFAULT_MATERIAL_NAME="__DEFAULT",s})(),Nn={},qu=class extends Error{constructor(e,t){super(e),this.response=t}},Qa=class extends na{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:i,onError:n});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Nn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,g=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:M})=>{if(S)p.close();else{g+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let E=0,A=h.length;E<A;E++){let R=h[E];R.onProgress&&R.onProgress(b)}p.enqueue(M),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new qu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{zr.add(`file:${e}`,c);let h=Nn[e];delete Nn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Nn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Nn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ur=new WeakMap,ic=class extends na{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ur.get(a);u===void 0&&(u=[],Ur.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=kr("img");function l(){h(),t&&t(this);let u=Ur.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ur.delete(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),zr.remove(`image:${e}`);let d=Ur.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}Ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var qs=class extends na{constructor(e){super(e)}load(e,t,i,n){let r=new _i,a=new ic(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Jr=class extends si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ku=new dt,Xp=new D,Yp=new D,nc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Xp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xp),Yp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yp),t.updateMatrixWorld(),ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Zu=class extends nc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},eo=class extends Jr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Zu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},jr=class extends Ga{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ku=class extends nc{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DEFAULT_UP),this.updateMatrix(),this.target=new si,this.shadow=new Ku}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},to=class extends Jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var sc=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vd="\\[\\]\\.:\\/",$0=new RegExp("["+vd+"]","g"),yd="[^"+vd+"]",Q0="[^"+vd.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",yd),tx=/(WCOD+)?/.source.replace("WCOD",Q0),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),sx=new RegExp("^"+ex+tx+ix+nx+"$"),rx=["material","materials","bones","map"],Ju=class{constructor(e,t,i){let n=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=(()=>{class s{constructor(t,i,n){this.path=i,this.parsedPath=n||s.parseTrackName(i),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,i,n):new s(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($0,"")}static parseTrackName(t){let i=sx.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);rx.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===i||l.uuid===i)return l;let c=n(l.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,n=i.objectName,r=i.propertyName,a=i.propertyIndex;if(t||(t=s.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=i.objectIndex;switch(n){case"materials":if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[r];if(o===void 0){let h=i.nodeName;Ce("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=Ju,s})();Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vT=new Float32Array(1);var Qr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var io=class extends pn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Md(s,e,t,i){let n=ax(i);switch(t){case ud:return s*e;case fd:return s*e/n.components*n.byteLength;case yc:return s*e/n.components*n.byteLength;case Ks:return s*e*2/n.components*n.byteLength;case Mc:return s*e*2/n.components*n.byteLength;case dd:return s*e*3/n.components*n.byteLength;case Hi:return s*e*4/n.components*n.byteLength;case bc:return s*e*4/n.components*n.byteLength;case oo:case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:case wc:return Math.max(s,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(s,8)*Math.max(e,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Dc:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zc:case Kc:case Jc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jc:case $c:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qc:case eh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ax(s){switch(s){case gi:case od:return{byteLength:1,components:1};case ta:case ld:case _n:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case $i:case _c:case Qi:return{byteLength:4,components:1};case cd:case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function Qm(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ox(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
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
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ix=`#define PI 3.141592653589793
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
} // validated`,Dx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
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
}`,Jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rv=`PhysicalMaterial material;
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
#endif`,av=`uniform sampler2D dfgLUT;
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
}`,ov=`
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
#endif`,lv=`#if defined( RE_IndirectDiffuse )
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
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_v=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
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
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pv=`#ifdef USE_NORMALMAP
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
#endif`,Iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yv=`float getShadowMask() {
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
}`,qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ey=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`#include <common>
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
}`,py=`#if DEPTH_PACKING == 3200
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
}`,my=`#define DISTANCE
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
}`,gy=`#define DISTANCE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,Sy=`#define LAMBERT
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
}`,Ty=`#define LAMBERT
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
}`,Ey=`#define MATCAP
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
}`,wy=`#define MATCAP
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
}`,Ay=`#define NORMAL
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
}`,Cy=`#define NORMAL
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
}`,Ry=`#define PHONG
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
}`,Py=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Ly=`#define TOON
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
}`,Oy=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,By=`uniform vec3 color;
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
}`,zy=`uniform float rotation;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:hx,alphamap_pars_fragment:ux,alphatest_fragment:dx,alphatest_pars_fragment:fx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:_x,begin_vertex:xx,beginnormal_vertex:vx,bsdfs:yx,iridescence_fragment:Mx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ex,clipping_planes_vertex:wx,color_fragment:Ax,color_pars_fragment:Cx,color_pars_vertex:Rx,color_vertex:Px,common:Ix,cube_uv_reflection_fragment:Dx,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Ox,displacementmap_vertex:Nx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ux,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:kx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Hx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:ev,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:Yx,fog_fragment:qx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:Jx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:$x,lights_pars_begin:Qx,lights_toon_fragment:tv,lights_toon_pars_fragment:iv,lights_phong_fragment:nv,lights_phong_pars_fragment:sv,lights_physical_fragment:rv,lights_physical_pars_fragment:av,lights_fragment_begin:ov,lights_fragment_maps:lv,lights_fragment_end:cv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:fv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:_v,metalnessmap_fragment:xv,metalnessmap_pars_fragment:vv,morphinstance_vertex:yv,morphcolor_vertex:Mv,morphnormal_vertex:bv,morphtarget_pars_vertex:Sv,morphtarget_vertex:Tv,normal_fragment_begin:Ev,normal_fragment_maps:wv,normal_pars_fragment:Av,normal_pars_vertex:Cv,normal_vertex:Rv,normalmap_pars_fragment:Pv,clearcoat_normal_fragment_begin:Iv,clearcoat_normal_fragment_maps:Dv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:Ov,opaque_fragment:Nv,packing:Fv,premultiplied_alpha_fragment:Uv,project_vertex:Bv,dithering_fragment:zv,dithering_pars_fragment:kv,roughnessmap_fragment:Vv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:Gv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Xv,shadowmask_pars_fragment:Yv,skinbase_vertex:qv,skinning_pars_vertex:Zv,skinning_vertex:Kv,skinnormal_vertex:Jv,specularmap_fragment:jv,specularmap_pars_fragment:$v,tonemapping_fragment:Qv,tonemapping_pars_fragment:ey,transmission_fragment:ty,transmission_pars_fragment:iy,uv_pars_fragment:ny,uv_pars_vertex:sy,uv_vertex:ry,worldpos_vertex:ay,background_vert:oy,background_frag:ly,backgroundCube_vert:cy,backgroundCube_frag:hy,cube_vert:uy,cube_frag:dy,depth_vert:fy,depth_frag:py,distance_vert:my,distance_frag:gy,equirect_vert:_y,equirect_frag:xy,linedashed_vert:vy,linedashed_frag:yy,meshbasic_vert:My,meshbasic_frag:by,meshlambert_vert:Sy,meshlambert_frag:Ty,meshmatcap_vert:Ey,meshmatcap_frag:wy,meshnormal_vert:Ay,meshnormal_frag:Cy,meshphong_vert:Ry,meshphong_frag:Py,meshphysical_vert:Iy,meshphysical_frag:Dy,meshtoon_vert:Ly,meshtoon_frag:Oy,points_vert:Ny,points_frag:Fy,shadow_vert:Uy,shadow_frag:By,sprite_vert:zy,sprite_frag:ky},he={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},vn={basic:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new De(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:jt([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:jt([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:jt([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:jt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:jt([he.lights,he.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};vn.physical={uniforms:jt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var sh={r:0,b:0,g:0},js=new Ji,Vy=new dt;function Hy(s,e,t,i,n,r,a){let o=new De(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function g(S){let M=!1,b=_(S);b===null?p(o,l):b&&b.isColor&&(p(b,1),M=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,M){let b=_(M);b&&(b.isCubeTexture||b.mapping===ro)?(h===void 0&&(h=new je(new Xr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Js(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),js.copy(M.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(js)),h.material.toneMapped=Ge.getTransfer(b.colorSpace)!==Je,(u!==b||d!==b.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new je(new Xs(2,2),new Ii({name:"BackgroundMaterial",uniforms:Js(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(b.colorSpace)!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(sh,xd(s)),i.buffers.color.setClear(sh.r,sh.g,sh.b,M,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m,dispose:y}}function Gy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(w,P,N,F,H){let G=!1,k=u(F,N,P);r!==k&&(r=k,c(r.object)),G=f(w,F,N,H),G&&_(w,F,N,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(w,P,N,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,P,N){let F=N.wireframe===!0,H=i[w.id];H===void 0&&(H={},i[w.id]=H);let G=H[P.id];G===void 0&&(G={},H[P.id]=G);let k=G[F];return k===void 0&&(k=d(l()),G[F]=k),k}function d(w){let P=[],N=[],F=[];for(let H=0;H<t;H++)P[H]=0,N[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:F,object:w,attributes:{},index:null}}function f(w,P,N,F){let H=r.attributes,G=P.attributes,k=0,z=N.getAttributes();for(let q in z)if(z[q].location>=0){let te=H[q],oe=G[q];if(oe===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function _(w,P,N,F){let H={},G=P.attributes,k=0,z=N.getAttributes();for(let q in z)if(z[q].location>=0){let te=G[q];te===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(te=w.instanceColor));let oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),H[q]=oe,k++}r.attributes=H,r.attributesNum=k,r.index=F}function g(){let w=r.newAttributes;for(let P=0,N=w.length;P<N;P++)w[P]=0}function m(w){p(w,0)}function p(w,P){let N=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;N[w]=1,F[w]===0&&(s.enableVertexAttribArray(w),F[w]=1),H[w]!==P&&(s.vertexAttribDivisor(w,P),H[w]=P)}function y(){let w=r.newAttributes,P=r.enabledAttributes;for(let N=0,F=P.length;N<F;N++)P[N]!==w[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function S(w,P,N,F,H,G,k){k===!0?s.vertexAttribIPointer(w,P,N,H,G):s.vertexAttribPointer(w,P,N,F,H,G)}function M(w,P,N,F){g();let H=F.attributes,G=N.getAttributes(),k=P.defaultAttributeValues;for(let z in G){let q=G[z];if(q.location>=0){let se=H[z];if(se===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(se=w.instanceColor)),se!==void 0){let te=se.normalized,oe=se.itemSize,Ie=e.get(se);if(Ie===void 0)continue;let Oe=Ie.buffer,We=Ie.type,Xe=Ie.bytesPerElement,Z=We===s.INT||We===s.UNSIGNED_INT||se.gpuType===_c;if(se.isInterleavedBufferAttribute){let j=se.data,me=j.stride,Fe=se.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe,j.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let xe=0;xe<q.locationSize;xe++)S(q.location+xe,oe/q.locationSize,We,te,me*Xe,(Fe+oe/q.locationSize*xe)*Xe,Z)}else{if(se.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,se.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let j=0;j<q.locationSize;j++)S(q.location+j,oe/q.locationSize,We,te,oe*Xe,oe/q.locationSize*j*Xe,Z)}}else if(k!==void 0){let te=k[z];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(q.location,te);break;case 3:s.vertexAttrib3fv(q.location,te);break;case 4:s.vertexAttrib4fv(q.location,te);break;default:s.vertexAttrib1fv(q.location,te)}}}}y()}function b(){R();for(let w in i){let P=i[w];for(let N in P){let F=P[N];for(let H in F)h(F[H].object),delete F[H];delete P[N]}delete i[w]}}function E(w){if(i[w.id]===void 0)return;let P=i[w.id];for(let N in P){let F=P[N];for(let H in F)h(F[H].object),delete F[H];delete P[N]}delete i[w.id]}function A(w){for(let P in i){let N=i[P];if(N[w.id]===void 0)continue;let F=N[w.id];for(let H in F)h(F[H].object),delete F[H];delete N[w.id]}}function R(){x(),a=!0,r!==n&&(r=n,c(r.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Wy(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xy(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Hi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qi&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:b,samples:E}}function Yy(s){let e=this,t=null,i=0,n=!1,r=!1,a=new ki,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,M=p.clippingState||null;l.value=M,M=h(_,d,S,f);for(let b=0;b!==S;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==g;++S,M+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function qy(s){let e=new WeakMap;function t(a,o){return o===pc?a.mapping=_s:o===mc&&(a.mapping=Zs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===pc||o===mc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xa(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ys=4,Im=[.125,.215,.35,.446,.526,.582],Qs=20,Zy=256,uo=new jr,Dm=new De,bd=null,Sd=0,Td=0,Ed=!1,Ky=new D,ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=Ky}=r;bd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Sd,Td),this._renderer.xr.enabled=Ed,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:_n,format:Hi,colorSpace:Vs,depthBuffer:!1},n=Lm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jy(r)),this._blurMaterial=$y(r,e,t),this._ggxMaterial=jy(r,e,t)}return n}_compileMaterial(e){let t=new je(new zt,e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,n,r){let l=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dm),u.toneMapping=ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new Xr,new ka({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Dm),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;sa(n,M*b,S>2?b:0,b,b),u.setRenderTarget(n),p&&u.render(g,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===_s||e.mapping===Zs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,uo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-ys?i-_+ys:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,sa(r,m,p,3*g,2*g),n.setRenderTarget(r),n.render(o,uo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,sa(e,m,p,3*g,2*g),n.setRenderTarget(e),n.render(o,uo)}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[n];u.material=c;let d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Qs;m>Qs&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let p=[],y=0;for(let A=0;A<Qs;++A){let R=A/g,x=Math.exp(-R*R/2);p.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;let M=this._sizeLods[n],b=3*M*(n>S-ys?n-S+ys:0),E=4*(this._cubeSize-M);sa(t,b,E,3*M,2*M),l.setRenderTarget(t),l.render(u,uo)}};function Jy(s){let e=[],t=[],i=[],n=s,r=s-ys+1+Im.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-ys?l=Im[a-s+ys-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),S=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,R=E>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,g*_*E),S.set(d,m*_*E);let w=[E,E,E,E,E,E];M.set(w,p*_*E)}let b=new zt;b.setAttribute("position",new mi(y,g)),b.setAttribute("uv",new mi(S,m)),b.setAttribute("faceIndex",new mi(M,p)),i.push(new je(b,null)),n>ys&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Lm(s,e,t){let i=new ni(s,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function jy(s,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lh(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function $y(s,e,t){let i=new Float32Array(Qs),n=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:lh(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Om(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Nm(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function Qy(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===pc||l===mc,h=l===_s||l===Zs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ah(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new ah(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function eM(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Hr("WebGLRenderer: "+i+" extension not supported."),n}}}function tM(s,e,t,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let S=0,M=y.length;S<M;S+=3){let b=y[S+0],E=y[S+1],A=y[S+2];d.push(b,E,E,A,A,b)}}else if(_!==void 0){let y=_.array;g=_.version;for(let S=0,M=y.length/3-1;S<M;S+=3){let b=S+0,E=S+1,A=S+2;d.push(b,E,E,A,A,b)}}else return;let m=new(gd(d)?Ha:Va)(d,1);m.version=g;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function iM(s,e,t){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(i,f,r,d*a,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function nM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ce("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function sM(s,e,t){let i=new WeakMap,n=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var f=w;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*E*4*u),R=new Ba(A,b,E,u);R.type=Qi,R.needsUpdate=!0;let x=M*4;for(let P=0;P<u;P++){let N=p[P],F=y[P],H=S[P],G=b*E*4*P;for(let k=0;k<N.count;k++){let z=k*x;_===!0&&(n.fromBufferAttribute(N,k),A[G+z+0]=n.x,A[G+z+1]=n.y,A[G+z+2]=n.z,A[G+z+3]=0),g===!0&&(n.fromBufferAttribute(F,k),A[G+z+4]=n.x,A[G+z+5]=n.y,A[G+z+6]=n.z,A[G+z+7]=0),m===!0&&(n.fromBufferAttribute(H,k),A[G+z+8]=n.x,A[G+z+9]=n.y,A[G+z+10]=n.z,A[G+z+11]=H.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new Te(b,E)},i.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function rM(s,e,t,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var aM={[td]:"LINEAR_TONE_MAPPING",[id]:"REINHARD_TONE_MAPPING",[nd]:"CINEON_TONE_MAPPING",[so]:"ACES_FILMIC_TONE_MAPPING",[rd]:"AGX_TONE_MAPPING",[ad]:"NEUTRAL_TONE_MAPPING",[sd]:"CUSTOM_TONE_MAPPING"};function oM(s,e,t,i,n){let r=new ni(e,t,{type:s,depthBuffer:i,stencilBuffer:n}),a=new ni(e,t,{type:_n,depthBuffer:!1,stencilBuffer:!1}),o=new zt;o.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new Xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new je(o,l),h=new jr(-1,1,1,-1,0,1),u=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(y,S){r.setSize(y,S),a.setSize(y,S);for(let M=0;M<m.length;M++){let b=m[M];b.setSize&&b.setSize(y,S)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let S=r.width,M=r.height;for(let b=0;b<m.length;b++){let E=m[b];E.setSize&&E.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===ji&&m.length===0)return!1;if(g=S,S!==null){let M=S.width,b=S.height;(r.width!==M||r.height!==b)&&this.setSize(M,b)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=ji,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=_,f=!0;let M=r,b=a;for(let E=0;E<m.length;E++){let A=m[E];if(A.enabled!==!1&&(A.render(y,b,M,S),A.needsSwap!==!1)){let R=M;M=b,b=R}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},Ge.getTransfer(u)===Je&&(l.defines.SRGB_TRANSFER="");let E=aM[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var eg=new _i,Cd=new us(1,1),tg=new Ba,ig=new Ul,ng=new Wa,Fm=[],Um=[],Bm=new Float32Array(16),zm=new Float32Array(9),km=new Float32Array(4);function aa(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Fm[n];if(r===void 0&&(r=new Float32Array(n),Fm[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ch(s,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function lM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function hM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function uM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function dM(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;km.set(i),s.uniformMatrix2fv(this.addr,!1,km),Dt(t,i)}}function fM(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;zm.set(i),s.uniformMatrix3fv(this.addr,!1,zm),Dt(t,i)}}function pM(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,i))return;Bm.set(i),s.uniformMatrix4fv(this.addr,!1,Bm),Dt(t,i)}}function mM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function _M(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function xM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function vM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function MM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function bM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function SM(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Cd.compareFunction=t.isReversedDepthBuffer()?nh:ih,r=Cd):r=eg,t.setTexture2D(e||r,n)}function TM(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||ig,n)}function EM(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ng,n)}function wM(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||tg,n)}function AM(s){switch(s){case 5126:return lM;case 35664:return cM;case 35665:return hM;case 35666:return uM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return xM;case 5125:return vM;case 36294:return yM;case 36295:return MM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return EM;case 36289:case 36303:case 36311:case 36292:return wM}}function CM(s,e){s.uniform1fv(this.addr,e)}function RM(s,e){let t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function PM(s,e){let t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function IM(s,e){let t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function DM(s,e){let t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function LM(s,e){let t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OM(s,e){let t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function NM(s,e){s.uniform1iv(this.addr,e)}function FM(s,e){s.uniform2iv(this.addr,e)}function UM(s,e){s.uniform3iv(this.addr,e)}function BM(s,e){s.uniform4iv(this.addr,e)}function zM(s,e){s.uniform1uiv(this.addr,e)}function kM(s,e){s.uniform2uiv(this.addr,e)}function VM(s,e){s.uniform3uiv(this.addr,e)}function HM(s,e){s.uniform4uiv(this.addr,e)}function GM(s,e,t){let i=this.cache,n=e.length,r=ch(t,n);It(i,r)||(s.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Cd:a=eg;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function WM(s,e,t){let i=this.cache,n=e.length,r=ch(t,n);It(i,r)||(s.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||ig,r[a])}function XM(s,e,t){let i=this.cache,n=e.length,r=ch(t,n);It(i,r)||(s.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ng,r[a])}function YM(s,e,t){let i=this.cache,n=e.length,r=ch(t,n);It(i,r)||(s.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||tg,r[a])}function qM(s){switch(s){case 5126:return CM;case 35664:return RM;case 35665:return PM;case 35666:return IM;case 35674:return DM;case 35675:return LM;case 35676:return OM;case 5124:case 35670:return NM;case 35667:case 35671:return FM;case 35668:case 35672:return UM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return kM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}var Rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=AM(t.type)}},Pd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qM(t.type)}},Id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},wd=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function ZM(s,e,t){let i=s.name,n=i.length;for(wd.lastIndex=0;;){let r=wd.exec(i),a=wd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Vm(t,c===void 0?new Rd(o,s,e):new Pd(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Id(o),Vm(t,u)),t=u}}}var ra=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ZM(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Hm(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var KM=37297,JM=0;function jM(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Gm=new Ne;function $M(s){Ge._getMatrix(Gm,Ge.workingColorSpace,s);let e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(s)){case Na:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wm(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jM(s.getShaderSource(e),o)}else return r}function QM(s,e){let t=$M(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var eb={[td]:"Linear",[id]:"Reinhard",[nd]:"Cineon",[so]:"ACESFilmic",[rd]:"AgX",[ad]:"Neutral",[sd]:"Custom"};function tb(s,e){let t=eb[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var rh=new D;function ib(){Ge.getLuminanceCoefficients(rh);let s=rh.x.toFixed(4),e=rh.y.toFixed(4),t=rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function sb(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rb(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function po(s){return s!==""}function Xm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(s){return s.replace(ab,lb)}var ob=new Map;function lb(s,e){let t=Ue[e];if(t===void 0){let i=ob.get(e);if(i!==void 0)t=Ue[i],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Dd(t)}var cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(cb,hb)}function hb(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Zm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var ub={[no]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function db(s){return ub[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fb={[_s]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE_UV"};function pb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var mb={[Zs]:"ENVMAP_MODE_REFRACTION"};function gb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _b={[fc]:"ENVMAP_BLENDING_MULTIPLY",[pm]:"ENVMAP_BLENDING_MIX",[mm]:"ENVMAP_BLENDING_ADD"};function xb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_b[s.combine]||"ENVMAP_BLENDING_NONE"}function vb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function yb(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=db(t),c=pb(t),h=gb(t),u=xb(t),d=vb(t),f=nb(t),_=sb(r),g=n.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(po).join(`
`),p.length>0&&(p+=`
`)):(m=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?Ue.tonemapping_pars_fragment:"",t.toneMapping!==ji?tb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,QM("linearToOutputTexel",t.outputColorSpace),ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),a=Dd(a),a=Xm(a,t),a=Ym(a,t),o=Dd(o),o=Xm(o,t),o=Ym(o,t),a=qm(a),o=qm(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+a,M=y+p+o,b=Hm(n,n.VERTEX_SHADER,S),E=Hm(n,n.FRAGMENT_SHADER,M);n.attachShader(g,b),n.attachShader(g,E),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(g)||"",F=n.getShaderInfoLog(b)||"",H=n.getShaderInfoLog(E)||"",G=N.trim(),k=F.trim(),z=H.trim(),q=!0,se=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,b,E);else{let te=Wm(n,b,"vertex"),oe=Wm(n,E,"fragment");Ce("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+te+`
`+oe)}else G!==""?Ae("WebGLProgram: Program Info Log:",G):(k===""||z==="")&&(se=!1);se&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:p}})}n.deleteShader(b),n.deleteShader(E),R=new ra(n,g),x=rb(n,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(g,KM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}var Mb=0,Ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Od(e),t.set(e,i)),i}},Od=class{constructor(e){this.id=Mb++,this.code=e,this.usedTimes=0}};function bb(s,e,t,i,n,r,a){let o=new za,l=new Ld,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,P,N,F){let H=N.fog,G=F.geometry,k=x.isMeshStandardMaterial?N.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),q=z&&z.mapping===ro?z.image.height:null,se=_[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Ae("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=te!==void 0?te.length:0,Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let Oe,We,Xe,Z;if(se){let Qe=vn[se];Oe=Qe.vertexShader,We=Qe.fragmentShader}else Oe=x.vertexShader,We=x.fragmentShader,l.update(x),Xe=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);let j=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,qe=!!x.map,Ot=!!x.matcap,Ye=!!z,$e=!!x.aoMap,st=!!x.lightMap,Be=!!x.bumpMap,wt=!!x.normalMap,I=!!x.displacementMap,At=!!x.emissiveMap,Ke=!!x.metalnessMap,ct=!!x.roughnessMap,ye=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,Y=x.sheen>0,J=x.transmission>0,X=ye&&!!x.anisotropyMap,be=C&&!!x.clearcoatMap,re=C&&!!x.clearcoatNormalMap,ve=C&&!!x.clearcoatRoughnessMap,Pe=O&&!!x.iridescenceMap,Q=O&&!!x.iridescenceThicknessMap,le=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ae=!!x.specularColorMap,ze=!!x.specularIntensityMap,L=J&&!!x.transmissionMap,de=J&&!!x.thicknessMap,ee=!!x.gradientMap,fe=!!x.alphaMap,$=x.alphaTest>0,K=!!x.alphaHash,ie=!!x.extensions,Le=ji;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=s.toneMapping);let ht={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:We,defines:x.defines,customVertexShaderID:Xe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vs,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:Ot,envMap:Ye,envMapMode:Ye&&z.mapping,envMapCubeUVHeight:q,aoMap:$e,lightMap:st,bumpMap:Be,normalMap:wt,displacementMap:I,emissiveMap:At,normalMapObjectSpace:wt&&x.normalMapType===xm,normalMapTangentSpace:wt&&x.normalMapType===th,metalnessMap:Ke,roughnessMap:ct,anisotropy:ye,anisotropyMap:X,clearcoat:C,clearcoatMap:be,clearcoatNormalMap:re,clearcoatRoughnessMap:ve,dispersion:v,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:le,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:ae,specularIntensityMap:ze,transmission:J,transmissionMap:L,thicknessMap:de,gradientMap:ee,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:$,alphaHash:K,combine:x.combine,mapUv:qe&&g(x.map.channel),aoMapUv:$e&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:wt&&g(x.normalMap.channel),displacementMapUv:I&&g(x.displacementMap.channel),emissiveMapUv:At&&g(x.emissiveMap.channel),metalnessMapUv:Ke&&g(x.metalnessMap.channel),roughnessMapUv:ct&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:be&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:ae&&g(x.specularColorMap.channel),specularIntensityMapUv:ze&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:de&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(wt||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(qe||fe),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:At&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===ai,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(w,x),S(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function y(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){let w=_[x.type],P;if(w){let N=vn[w];P=Cm.clone(N.uniforms)}else P=x.uniforms;return P}function b(x,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new yb(s,w,x,r),h.push(P),u.set(w,P)),P}function E(x){if(--x.usedTimes===0){let w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:R}}function Sb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Tb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Tb),i.length>1&&i.sort(d||Km),n.length>1&&n.sort(d||Km)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Eb(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new Jm,s.set(i,[a])):n>=r.length?(a=new Jm,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Ab(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Cb=0;function Rb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pb(s){let e=new wb,t=Ab(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,r=new dt,a=new dt;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,S=0,M=0,b=0,E=0,A=0;c.sort(Rb);for(let x=0,w=c.length;x<w;x++){let P=c[x],N=P.color,F=P.intensity,H=P.distance,G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ks?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=k,f++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[g]=k;let z=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,z.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[g]=z.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=G,M++}g++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let z=P.shadow,q=t.get(P);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=k,_++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==M||R.numSpotMaps!==b||R.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=M,R.numSpotMaps=b,R.numLightProbes=A,i.version=Cb++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let S=c[p];if(S.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=i.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function jm(s){let e=new Pb(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ib(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new jm(s),e.set(n,[o])):r>=a.length?(o=new jm(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`,Ob=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Nb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],$m=new dt,fo=new D,Ad=new D;function Fb(s,e,t){let i=new Zr,n=new Te,r=new Te,a=new xt,o=new Yl,l=new ql,c={},h=t.maxTextureSize,u={[zn]:ai,[ai]:zn,[mn]:mn},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Db,fragmentShader:Lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new zt;_.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new je(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===Kp&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=no);let x=s.getRenderTarget(),w=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(gn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==this.type;F&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(G=>G.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,G=E.length;H<G;H++){let k=E[H],z=k.shadow;if(z===void 0){Ae("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let q=z.getFrameExtents();if(n.multiply(q),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/q.x),n.x=r.x*q.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/q.y),n.y=r.y*q.y,z.mapSize.y=r.y)),z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ea){if(k.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ni(n.x,n.y,{format:Ks,type:_n,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new us(n.x,n.y,Qi),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=fn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt}else{k.isPointLight?(z.map=new Xa(n.x),z.map.depthTexture=new Wl(n.x,$i)):(z.map=new ni(n.x,n.y),z.map.depthTexture=new us(n.x,n.y,$i)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=fn;let te=s.state.buffers.depth.getReversed();this.type===no?(z.map.depthTexture.compareFunction=te?nh:ih,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt)}z.camera.updateProjectionMatrix()}let se=z.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<se;te++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,te),s.clear();else{te===0&&(s.setRenderTarget(z.map),s.clear());let oe=z.getViewport(te);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),N.viewport(a)}if(k.isPointLight){let oe=z.camera,Ie=z.matrix,Oe=k.distance||oe.far;Oe!==oe.far&&(oe.far=Oe,oe.updateProjectionMatrix()),fo.setFromMatrixPosition(k.matrixWorld),oe.position.copy(fo),Ad.copy(oe.position),Ad.add(Ob[te]),oe.up.copy(Nb[te]),oe.lookAt(Ad),oe.updateMatrixWorld(),Ie.makeTranslation(-fo.x,-fo.y,-fo.z),$m.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),z._frustum.setFromProjectionMatrix($m,oe.coordinateSystem,oe.reversedDepth)}else z.updateMatrices(k);i=z.getFrustum(),M(A,R,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===ea&&y(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,w,P)};function y(E,A){let R=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ni(n.x,n.y,{format:Ks,type:_n})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,R,f,g,null)}function S(E,A,R,x){let w=null,P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)w=P;else if(w=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=w.uuid,F=A.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let G=H[F];G===void 0&&(G=w.clone(),H[F]=G,A.addEventListener("dispose",b)),w=G}if(w.visible=A.visible,w.wireframe=A.wireframe,x===ea?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let N=s.properties.get(w);N.light=R}return w}function M(E,A,R,x,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ea)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=e.update(E),H=E.material;if(Array.isArray(H)){let G=F.groups;for(let k=0,z=G.length;k<z;k++){let q=G[k],se=H[q.materialIndex];if(se&&se.visible){let te=S(E,se,x,w);E.onBeforeShadow(s,E,A,R,F,te,q),s.renderBufferDirect(R,null,F,te,E,q),E.onAfterShadow(s,E,A,R,F,te,q)}}}else if(H.visible){let G=S(E,H,x,w);E.onBeforeShadow(s,E,A,R,F,G,null),s.renderBufferDirect(R,null,F,G,E,null),E.onAfterShadow(s,E,A,R,F,G,null)}}let N=E.children;for(let F=0,H=N.length;F<H;F++)M(N[F],A,R,x,w)}function b(E){E.target.removeEventListener("dispose",b);for(let R in c){let x=c[R],w=E.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}var Ub={[ac]:oc,[lc]:uc,[cc]:dc,[zs]:hc,[oc]:ac,[uc]:lc,[dc]:cc,[hc]:zs};function Bb(s,e){function t(){let L=!1,de=new xt,ee=null,fe=new xt(0,0,0,0);return{setMask:function($){ee!==$&&!L&&(s.colorMask($,$,$,$),ee=$)},setLocked:function($){L=$},setClear:function($,K,ie,Le,ht){ht===!0&&($*=Le,K*=Le,ie*=Le),de.set($,K,ie,Le),fe.equals(de)===!1&&(s.clearColor($,K,ie,Le),fe.copy(de))},reset:function(){L=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,ee=null,fe=null,$=null;return{setReversed:function(K){if(de!==K){let ie=e.get("EXT_clip_control");K?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),de=K;let Le=$;$=null,this.setClear(Le)}},getReversed:function(){return de},setTest:function(K){K?j(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(K){ee!==K&&!L&&(s.depthMask(K),ee=K)},setFunc:function(K){if(de&&(K=Ub[K]),fe!==K){switch(K){case ac:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case lc:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=K}},setLocked:function(K){L=K},setClear:function(K){$!==K&&(de&&(K=1-K),s.clearDepth(K),$=K)},reset:function(){L=!1,ee=null,fe=null,$=null,de=!1}}}function n(){let L=!1,de=null,ee=null,fe=null,$=null,K=null,ie=null,Le=null,ht=null;return{setTest:function(Qe){L||(Qe?j(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!L&&(s.stencilMask(Qe),de=Qe)},setFunc:function(Qe,sn,yn){(ee!==Qe||fe!==sn||$!==yn)&&(s.stencilFunc(Qe,sn,yn),ee=Qe,fe=sn,$=yn)},setOp:function(Qe,sn,yn){(K!==Qe||ie!==sn||Le!==yn)&&(s.stencilOp(Qe,sn,yn),K=Qe,ie=sn,Le=yn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){ht!==Qe&&(s.clearStencil(Qe),ht=Qe)},reset:function(){L=!1,de=null,ee=null,fe=null,$=null,K=null,ie=null,Le=null,ht=null}}}let r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,S=null,M=null,b=null,E=null,A=new De(0,0,0),R=0,x=!1,w=null,P=null,N=null,F=null,H=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,z=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=z>=2);let se=null,te={},oe=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Oe=new xt().fromArray(oe),We=new xt().fromArray(Ie);function Xe(L,de,ee,fe){let $=new Uint8Array(4),K=s.createTexture();s.bindTexture(L,K),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ee;ie++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,$):s.texImage2D(de+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$);return K}let Z={};Z[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(zs),Be(!1),wt(ju),j(s.CULL_FACE),$e(gn);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function me(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Fe(L,de){return u[L]!==de?(s.bindFramebuffer(L,de),u[L]=de,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function xe(L,de){let ee=f,fe=!1;if(L){ee=d.get(de),ee===void 0&&(ee=[],d.set(de,ee));let $=L.textures;if(ee.length!==$.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let K=0,ie=$.length;K<ie;K++)ee[K]=s.COLOR_ATTACHMENT0+K;ee.length=$.length,fe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ee)}function qe(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Ot={[os]:s.FUNC_ADD,[jp]:s.FUNC_SUBTRACT,[$p]:s.FUNC_REVERSE_SUBTRACT};Ot[Qp]=s.MIN,Ot[em]=s.MAX;let Ye={[tm]:s.ZERO,[im]:s.ONE,[nm]:s.SRC_COLOR,[Pl]:s.SRC_ALPHA,[cm]:s.SRC_ALPHA_SATURATE,[om]:s.DST_COLOR,[rm]:s.DST_ALPHA,[sm]:s.ONE_MINUS_SRC_COLOR,[Il]:s.ONE_MINUS_SRC_ALPHA,[lm]:s.ONE_MINUS_DST_COLOR,[am]:s.ONE_MINUS_DST_ALPHA,[hm]:s.CONSTANT_COLOR,[um]:s.ONE_MINUS_CONSTANT_COLOR,[dm]:s.CONSTANT_ALPHA,[fm]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(L,de,ee,fe,$,K,ie,Le,ht,Qe){if(L===gn){g===!0&&(me(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),L!==Jp){if(L!==m||Qe!==x){if((p!==os||M!==os)&&(s.blendEquation(s.FUNC_ADD),p=os,M=os),Qe)switch(L){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $u:s.blendFunc(s.ONE,s.ONE);break;case Qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ed:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ce("WebGLState: Invalid blending: ",L);break}else switch(L){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $u:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qu:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",L);break}y=null,S=null,b=null,E=null,A.set(0,0,0),R=0,m=L,x=Qe}return}$=$||de,K=K||ee,ie=ie||fe,(de!==p||$!==M)&&(s.blendEquationSeparate(Ot[de],Ot[$]),p=de,M=$),(ee!==y||fe!==S||K!==b||ie!==E)&&(s.blendFuncSeparate(Ye[ee],Ye[fe],Ye[K],Ye[ie]),y=ee,S=fe,b=K,E=ie),(Le.equals(A)===!1||ht!==R)&&(s.blendColor(Le.r,Le.g,Le.b,ht),A.copy(Le),R=ht),m=L,x=!1}function st(L,de){L.side===mn?me(s.CULL_FACE):j(s.CULL_FACE);let ee=L.side===ai;de&&(ee=!ee),Be(ee),L.blending===Bs&&L.transparent===!1?$e(gn):$e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),At(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function wt(L){L!==qp?(j(s.CULL_FACE),L!==P&&(L===ju?s.cullFace(s.BACK):L===Zp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),P=L}function I(L){L!==N&&(k&&s.lineWidth(L),N=L)}function At(L,de,ee){L?(j(s.POLYGON_OFFSET_FILL),(F!==de||H!==ee)&&(s.polygonOffset(de,ee),F=de,H=ee)):me(s.POLYGON_OFFSET_FILL)}function Ke(L){L?j(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function ct(L){L===void 0&&(L=s.TEXTURE0+G-1),se!==L&&(s.activeTexture(L),se=L)}function ye(L,de,ee){ee===void 0&&(se===null?ee=s.TEXTURE0+G-1:ee=se);let fe=te[ee];fe===void 0&&(fe={type:void 0,texture:void 0},te[ee]=fe),(fe.type!==L||fe.texture!==de)&&(se!==ee&&(s.activeTexture(ee),se=ee),s.bindTexture(L,de||Z[L]),fe.type=L,fe.texture=de)}function C(){let L=te[se];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Y(){try{s.texSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function J(){try{s.texSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function re(){try{s.texStorage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function ve(){try{s.texStorage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Pe(){try{s.texImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function le(L){Oe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function _e(L){We.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function Me(L,de){let ee=c.get(de);ee===void 0&&(ee=new WeakMap,c.set(de,ee));let fe=ee.get(L);fe===void 0&&(fe=s.getUniformBlockIndex(de,L.name),ee.set(L,fe))}function ae(L,de){let fe=c.get(de).get(L);l.get(de)!==fe&&(s.uniformBlockBinding(de,fe,L.__bindingPointIndex),l.set(de,fe))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,te={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,S=null,M=null,b=null,E=null,A=new De(0,0,0),R=0,x=!1,w=null,P=null,N=null,F=null,H=null,Oe.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:me,bindFramebuffer:Fe,drawBuffers:xe,useProgram:qe,setBlending:$e,setMaterial:st,setFlipSided:Be,setCullFace:wt,setLineWidth:I,setPolygonOffset:At,setScissorTest:Ke,activeTexture:ct,bindTexture:ye,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Pe,texImage3D:Q,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:re,texStorage3D:ve,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:be,scissor:le,viewport:_e,reset:ze}}function zb(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return f?new OffscreenCanvas(C,v):kr("canvas")}function g(C,v,O){let Y=1,J=ye(C);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let X=Math.floor(Y*J.width),be=Math.floor(Y*J.height);u===void 0&&(u=_(X,be));let re=v?_(X,be):u;return re.width=X,re.height=be,re.getContext("2d").drawImage(C,0,0,X,be),Ae("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+be+")."),re}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,v,O,Y,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),v===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){let be=J?Na:Ge.getTransfer(Y);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=be===Je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(C,v){let O;return C?v===null||v===$i||v===ia?O=s.DEPTH24_STENCIL8:v===Qi?O=s.DEPTH32F_STENCIL8:v===ta&&(O=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===ia?O=s.DEPTH_COMPONENT24:v===Qi?O=s.DEPTH_COMPONENT32F:v===ta&&(O=s.DEPTH_COMPONENT16),O}function b(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==Yt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function E(C){let v=C.target;v.removeEventListener("dispose",E),R(v),v.isVideoTexture&&h.delete(v)}function A(C){let v=C.target;v.removeEventListener("dispose",A),w(v)}function R(C){let v=i.get(C);if(v.__webglInit===void 0)return;let O=C.source,Y=d.get(O);if(Y){let J=Y[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(C),Object.keys(Y).length===0&&d.delete(O)}i.remove(C)}function x(C){let v=i.get(C);s.deleteTexture(v.__webglTexture);let O=C.source,Y=d.get(O);delete Y[v.__cacheKey],a.memory.textures--}function w(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let J=0;J<v.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(v.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let Y=0,J=O.length;Y<J;Y++){let X=i.get(O[Y]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(O[Y])}i.remove(C)}let P=0;function N(){P=0}function F(){let C=P;return C>=n.maxTextures&&Ae("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function H(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function G(C,v){let O=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let Y=C.image;if(Y===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,C,v);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function k(C,v){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,v);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function z(C,v){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Z(O,C,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function q(C,v){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){j(O,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let se={[ks]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[Dl]:s.MIRRORED_REPEAT},te={[Bt]:s.NEAREST,[gm]:s.NEAREST_MIPMAP_NEAREST,[ao]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[gc]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},oe={[vm]:s.NEVER,[Tm]:s.ALWAYS,[ym]:s.LESS,[ih]:s.LEQUAL,[Mm]:s.EQUAL,[nh]:s.GEQUAL,[bm]:s.GREATER,[Sm]:s.NOTEQUAL};function Ie(C,v){if(v.type===Qi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yt||v.magFilter===gc||v.magFilter===ao||v.magFilter===xs||v.minFilter===Yt||v.minFilter===gc||v.minFilter===ao||v.minFilter===xs)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,se[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,se[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,se[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,te[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==ao&&v.minFilter!==xs||v.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",E));let Y=v.source,J=d.get(Y);J===void 0&&(J={},d.set(Y,J));let X=H(v);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[X].usedTimes++;let be=J[C.__cacheKey];be!==void 0&&(J[C.__cacheKey].usedTimes--,be.usedTimes===0&&x(v)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return O}function We(C,v,O){return Math.floor(Math.floor(C/O)/v)}function Xe(C,v,O,Y){let X=C.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,Y,v.data);else{X.sort((Q,le)=>Q.start-le.start);let be=0;for(let Q=1;Q<X.length;Q++){let le=X[be],_e=X[Q],Me=le.start+le.count,ae=We(_e.start,v.width,4),ze=We(le.start,v.width,4);_e.start<=Me+1&&ae===ze&&We(_e.start+_e.count-1,v.width,4)===ae?le.count=Math.max(le.count,_e.start+_e.count-le.start):(++be,X[be]=_e)}X.length=be+1;let re=s.getParameter(s.UNPACK_ROW_LENGTH),ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Q=0,le=X.length;Q<le;Q++){let _e=X[Q],Me=Math.floor(_e.start/4),ae=Math.ceil(_e.count/4),ze=Me%v.width,L=Math.floor(Me/v.width),de=ae,ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,ze,L,de,ee,O,Y,v.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Z(C,v,O){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let J=Oe(C,v),X=v.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+O);let be=i.get(X);if(X.version!==be.__version||J===!0){t.activeTexture(s.TEXTURE0+O);let re=Ge.getPrimaries(Ge.workingColorSpace),ve=v.colorSpace===Vn?null:Ge.getPrimaries(v.colorSpace),Pe=v.colorSpace===Vn||re===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Q=g(v.image,!1,n.maxTextureSize);Q=ct(v,Q);let le=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),Me=S(v.internalFormat,le,_e,v.colorSpace,v.isVideoTexture);Ie(Y,v);let ae,ze=v.mipmaps,L=v.isVideoTexture!==!0,de=be.__version===void 0||J===!0,ee=X.dataReady,fe=b(v,Q);if(v.isDepthTexture)Me=M(v.format===vs,v.type),de&&(L?t.texStorage2D(s.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Me,Q.width,Q.height,0,le,_e,null));else if(v.isDataTexture)if(ze.length>0){L&&de&&t.texStorage2D(s.TEXTURE_2D,fe,Me,ze[0].width,ze[0].height);for(let $=0,K=ze.length;$<K;$++)ae=ze[$],L?ee&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ae.width,ae.height,le,_e,ae.data):t.texImage2D(s.TEXTURE_2D,$,Me,ae.width,ae.height,0,le,_e,ae.data);v.generateMipmaps=!1}else L?(de&&t.texStorage2D(s.TEXTURE_2D,fe,Me,Q.width,Q.height),ee&&Xe(v,Q,le,_e)):t.texImage2D(s.TEXTURE_2D,0,Me,Q.width,Q.height,0,le,_e,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Me,ze[0].width,ze[0].height,Q.depth);for(let $=0,K=ze.length;$<K;$++)if(ae=ze[$],v.format!==Hi)if(le!==null)if(L){if(ee)if(v.layerUpdates.size>0){let ie=Md(ae.width,ae.height,v.format,v.type);for(let Le of v.layerUpdates){let ht=ae.data.subarray(Le*ie/ae.data.BYTES_PER_ELEMENT,(Le+1)*ie/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,Le,ae.width,ae.height,1,le,ht)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,Q.depth,le,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Me,ae.width,ae.height,Q.depth,0,ae.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ae.width,ae.height,Q.depth,le,_e,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Me,ae.width,ae.height,Q.depth,0,le,_e,ae.data)}else{L&&de&&t.texStorage2D(s.TEXTURE_2D,fe,Me,ze[0].width,ze[0].height);for(let $=0,K=ze.length;$<K;$++)ae=ze[$],v.format!==Hi?le!==null?L?ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Me,ae.width,ae.height,0,ae.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ee&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ae.width,ae.height,le,_e,ae.data):t.texImage2D(s.TEXTURE_2D,$,Me,ae.width,ae.height,0,le,_e,ae.data)}else if(v.isDataArrayTexture)if(L){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,fe,Me,Q.width,Q.height,Q.depth),ee)if(v.layerUpdates.size>0){let $=Md(Q.width,Q.height,v.format,v.type);for(let K of v.layerUpdates){let ie=Q.data.subarray(K*$/Q.data.BYTES_PER_ELEMENT,(K+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,le,_e,ie)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,_e,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,le,_e,Q.data);else if(v.isData3DTexture)L?(de&&t.texStorage3D(s.TEXTURE_3D,fe,Me,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,_e,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,le,_e,Q.data);else if(v.isFramebufferTexture){if(de)if(L)t.texStorage2D(s.TEXTURE_2D,fe,Me,Q.width,Q.height);else{let $=Q.width,K=Q.height;for(let ie=0;ie<fe;ie++)t.texImage2D(s.TEXTURE_2D,ie,Me,$,K,0,le,_e,null),$>>=1,K>>=1}}else if(ze.length>0){if(L&&de){let $=ye(ze[0]);t.texStorage2D(s.TEXTURE_2D,fe,Me,$.width,$.height)}for(let $=0,K=ze.length;$<K;$++)ae=ze[$],L?ee&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,le,_e,ae):t.texImage2D(s.TEXTURE_2D,$,Me,le,_e,ae);v.generateMipmaps=!1}else if(L){if(de){let $=ye(Q);t.texStorage2D(s.TEXTURE_2D,fe,Me,$.width,$.height)}ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,_e,Q)}else t.texImage2D(s.TEXTURE_2D,0,Me,le,_e,Q);m(v)&&p(Y),be.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function j(C,v,O){if(v.image.length!==6)return;let Y=Oe(C,v),J=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);let X=i.get(J);if(J.version!==X.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);let be=Ge.getPrimaries(Ge.workingColorSpace),re=v.colorSpace===Vn?null:Ge.getPrimaries(v.colorSpace),ve=v.colorSpace===Vn||be===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,le=[];for(let K=0;K<6;K++)!Pe&&!Q?le[K]=g(v.image[K],!0,n.maxCubemapSize):le[K]=Q?v.image[K].image:v.image[K],le[K]=ct(v,le[K]);let _e=le[0],Me=r.convert(v.format,v.colorSpace),ae=r.convert(v.type),ze=S(v.internalFormat,Me,ae,v.colorSpace),L=v.isVideoTexture!==!0,de=X.__version===void 0||Y===!0,ee=J.dataReady,fe=b(v,_e);Ie(s.TEXTURE_CUBE_MAP,v);let $;if(Pe){L&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ze,_e.width,_e.height);for(let K=0;K<6;K++){$=le[K].mipmaps;for(let ie=0;ie<$.length;ie++){let Le=$[ie];v.format!==Hi?Me!==null?L?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,ze,Le.width,Le.height,0,Le.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,Le.width,Le.height,Me,ae,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,ze,Le.width,Le.height,0,Me,ae,Le.data)}}}else{if($=v.mipmaps,L&&de){$.length>0&&fe++;let K=ye(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ze,K.width,K.height)}for(let K=0;K<6;K++)if(Q){L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,le[K].width,le[K].height,Me,ae,le[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,le[K].width,le[K].height,0,Me,ae,le[K].data);for(let ie=0;ie<$.length;ie++){let ht=$[ie].image[K].image;L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ht.width,ht.height,Me,ae,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,ze,ht.width,ht.height,0,Me,ae,ht.data)}}else{L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,ae,le[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,Me,ae,le[K]);for(let ie=0;ie<$.length;ie++){let Le=$[ie];L?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,Me,ae,Le.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,ze,Me,ae,Le.image[K])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function me(C,v,O,Y,J,X){let be=r.convert(O.format,O.colorSpace),re=r.convert(O.type),ve=S(O.internalFormat,be,re,O.colorSpace),Pe=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!Pe.__hasExternalTextures){let le=Math.max(1,v.width>>X),_e=Math.max(1,v.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,X,ve,le,_e,v.depth,0,be,re,null):t.texImage2D(J,X,ve,le,_e,0,be,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,Q.__webglTexture,0,I(v)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,Q.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(C,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){let Y=v.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,J),be=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;At(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),X,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),X,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,X,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,C)}else{let Y=v.textures;for(let J=0;J<Y.length;J++){let X=Y[J],be=r.convert(X.format,X.colorSpace),re=r.convert(X.type),ve=S(X.internalFormat,be,re,X.colorSpace);At(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I(v),ve,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,I(v),ve,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ve,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(C,v,O){let Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,v.depthTexture);let Pe=r.convert(v.depthTexture.format),Q=r.convert(v.depthTexture.type),le;v.depthTexture.format===fn?le=s.DEPTH_COMPONENT24:v.depthTexture.format===vs&&(le=s.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,le,v.width,v.height,0,Pe,Q,null)}}else G(v.depthTexture,0);let X=J.__webglTexture,be=I(v),re=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,ve=v.depthTexture.format===vs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===fn)At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,re,X,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ve,re,X,0);else if(v.depthTexture.format===vs)At(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,re,X,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ve,re,X,0);else throw new Error("Unknown depthTexture format")}function qe(C){let v=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)xe(v.__webglFramebuffer[Y],C,Y);else{let Y=C.texture.mipmaps;Y&&Y.length>0?xe(v.__webglFramebuffer[0],C,0):xe(v.__webglFramebuffer,C,0)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),Fe(v.__webglDepthbuffer[Y],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Fe(v.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,v,O){let Y=i.get(C);v!==void 0&&me(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&qe(C)}function Ye(C){let v=C.texture,O=i.get(C),Y=i.get(v);C.addEventListener("dispose",A);let J=C.textures,X=C.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),X){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let ve=0;ve<v.mipmaps.length;ve++)O.__webglFramebuffer[re][ve]=s.createFramebuffer()}else O.__webglFramebuffer[re]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)O.__webglFramebuffer[re]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(be)for(let re=0,ve=J.length;re<ve;re++){let Pe=i.get(J[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&At(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){let ve=J[re];O.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[re]);let Pe=r.convert(ve.format,ve.colorSpace),Q=r.convert(ve.type),le=S(ve.internalFormat,Pe,Q,ve.colorSpace,C.isXRRenderTarget===!0),_e=I(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,O.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)me(O.__webglFramebuffer[re][ve],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve);else me(O.__webglFramebuffer[re],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let re=0,ve=J.length;re<ve;re++){let Pe=J[re],Q=i.get(Pe),le=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),Ie(le,Pe),me(O.__webglFramebuffer,C,Pe,s.COLOR_ATTACHMENT0+re,le,0),m(Pe)&&p(le)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Ie(re,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)me(O.__webglFramebuffer[ve],C,v,s.COLOR_ATTACHMENT0,re,ve);else me(O.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}C.depthBuffer&&qe(C)}function $e(C){let v=C.textures;for(let O=0,Y=v.length;O<Y;O++){let J=v[O];if(m(J)){let X=y(C),be=i.get(J).__webglTexture;t.bindTexture(X,be),p(X),t.unbindTexture()}}}let st=[],Be=[];function wt(C){if(C.samples>0){if(At(C)===!1){let v=C.textures,O=C.width,Y=C.height,J=s.COLOR_BUFFER_BIT,X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=i.get(C),re=v.length>1;if(re)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ve=C.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);let Q=i.get(v[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,s.NEAREST),l===!0&&(st.length=0,Be.length=0,st.push(s.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(X),Be.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,be.__webglColorRenderbuffer[Pe]);let Q=i.get(v[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Q,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function I(C){return Math.min(n.maxSamples,C.samples)}function At(C){let v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ct(C,v){let O=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Vs&&O!==Vn&&(Ge.getTransfer(O)===Je?(Y!==Hi||J!==gi)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",O)),v}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kb(s,e){function t(i,n=Vn){let r,a=Ge.getTransfer(n);if(i===gi)return s.UNSIGNED_BYTE;if(i===xc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===cd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return s.BYTE;if(i===ld)return s.SHORT;if(i===ta)return s.UNSIGNED_SHORT;if(i===_c)return s.INT;if(i===$i)return s.UNSIGNED_INT;if(i===Qi)return s.FLOAT;if(i===_n)return s.HALF_FLOAT;if(i===ud)return s.ALPHA;if(i===dd)return s.RGB;if(i===Hi)return s.RGBA;if(i===fn)return s.DEPTH_COMPONENT;if(i===vs)return s.DEPTH_STENCIL;if(i===fd)return s.RED;if(i===yc)return s.RED_INTEGER;if(i===Ks)return s.RG;if(i===Mc)return s.RG_INTEGER;if(i===bc)return s.RGBA_INTEGER;if(i===oo||i===lo||i===co||i===ho)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sc||i===Tc||i===Ec||i===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ac||i===Cc||i===Rc||i===Pc||i===Ic||i===Dc||i===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ac||i===Cc)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pc)return r.COMPRESSED_R11_EAC;if(i===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Dc)return r.COMPRESSED_RG11_EAC;if(i===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oc||i===Nc||i===Fc||i===Uc||i===Bc||i===zc||i===kc||i===Vc||i===Hc||i===Gc||i===Wc||i===Xc||i===Yc||i===qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qc)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zc||i===Kc||i===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zc)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jc||i===$c||i===Qc||i===eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`,Nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ii({vertexShader:Vb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fd=class extends pn{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new Nd,p={},y=t.getContextAttributes(),S=null,M=null,b=[],E=[],A=new Te,R=null,x=new Wt;x.viewport=new xt;let w=new Wt;w.viewport=new xt;let P=[x,w],N=new sc,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=b[Z];return j===void 0&&(j=new Yr,b[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=b[Z];return j===void 0&&(j=new Yr,b[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=b[Z];return j===void 0&&(j=new Yr,b[Z]=j),j.getHandSpace()};function G(Z){let j=E.indexOf(Z.inputSource);if(j===-1)return;let me=b[j];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",z);for(let Z=0;Z<b.length;Z++){let j=E[Z];j!==null&&(E[Z]=null,b[Z].disconnect(j))}F=null,H=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(S),f=null,d=null,u=null,n=null,M=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=function(Z){return Mo(this,null,function*(){if(n=Z,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",k),n.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Fe=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?vs:fn,Fe=y.stencil?ia:$i);let qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ni(d.textureWidth,d.textureHeight,{format:Hi,type:gi,depthTexture:new us(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ni(f.framebufferWidth,f.framebufferHeight,{format:Hi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),Xe.setContext(n),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Z){for(let j=0;j<Z.removed.length;j++){let me=Z.removed[j],Fe=E.indexOf(me);Fe>=0&&(E[Fe]=null,b[Fe].disconnect(me))}for(let j=0;j<Z.added.length;j++){let me=Z.added[j],Fe=E.indexOf(me);if(Fe===-1){for(let qe=0;qe<b.length;qe++)if(qe>=E.length){E.push(me),Fe=qe;break}else if(E[qe]===null){E[qe]=me,Fe=qe;break}if(Fe===-1)break}let xe=b[Fe];xe&&xe.connect(me)}}let q=new D,se=new D;function te(Z,j,me){q.setFromMatrixPosition(j.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);let Fe=q.distanceTo(se),xe=j.projectionMatrix.elements,qe=me.projectionMatrix.elements,Ot=xe[14]/(xe[10]-1),Ye=xe[14]/(xe[10]+1),$e=(xe[9]+1)/xe[5],st=(xe[9]-1)/xe[5],Be=(xe[8]-1)/xe[0],wt=(qe[8]+1)/qe[0],I=Ot*Be,At=Ot*wt,Ke=Fe/(-Be+wt),ct=Ke*-Be;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ct),Z.translateZ(Ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let ye=Ot+Ke,C=Ye+Ke,v=I-ct,O=At+(Fe-ct),Y=$e*Ye/C*ye,J=st*Ye/C*ye;Z.projectionMatrix.makePerspective(v,O,Y,J,ye,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let j=Z.near,me=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(me=m.depthFar)),N.near=w.near=x.near=j,N.far=w.far=x.far=me,(F!==N.near||H!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,H=N.far),N.layers.mask=Z.layers.mask|6,x.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;let Fe=Z.parent,xe=N.cameras;oe(N,Fe);for(let qe=0;qe<xe.length;qe++)oe(xe[qe],Fe);xe.length===2?te(N,x,w):N.projectionMatrix.copy(x.projectionMatrix),Ie(Z,N,Fe)};function Ie(Z,j,me){me===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let Oe=null;function We(Z,j){if(h=j.getViewerPose(c||a),_=j,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;me.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let Ye=0;Ye<me.length;Ye++){let $e=me[Ye],st=null;if(f!==null)st=f.getViewport($e);else{let wt=u.getViewSubImage(d,$e);st=wt.viewport,Ye===0&&(e.setRenderTargetTextures(M,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(M))}let Be=P[Ye];Be===void 0&&(Be=new Wt,Be.layers.enable(Ye),Be.viewport=new xt,P[Ye]=Be),Be.matrix.fromArray($e.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray($e.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),Ye===0&&(N.matrix.copy(Be.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(Be)}let xe=n.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let Ye=u.getDepthInformation(me[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,n.renderState)}if(xe&&xe.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let Ye=0;Ye<me.length;Ye++){let $e=me[Ye].camera;if($e){let st=p[$e];st||(st=new Ka,p[$e]=st);let Be=u.getCameraImage($e);st.sourceTexture=Be}}}}for(let me=0;me<b.length;me++){let Fe=E[me],xe=b[me];Fe!==null&&xe!==void 0&&xe.update(Fe,j,c||a)}Oe&&Oe(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}let Xe=new Qm;Xe.setAnimationLoop(We),this.setAnimationLoop=function(Z){Oe=Z},this.dispose=function(){}}},$s=new Ji,Gb=new dt;function Wb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,xd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ai&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ai&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,$s.copy(M),$s.x*=-1,$s.y*=-1,$s.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),m.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler($s)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ai&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Xb(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=n[y.id];M===void 0&&(_(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",m));let b=S.program;i.updateUBOMapping(y,b);let E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){let S=u();y.__bindingPointIndex=S;let M=s.createBuffer(),b=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=n[y.id],M=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,A=M.length;E<A;E++){let R=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,w=R.length;x<w;x++){let P=R[x];if(f(P,E,x,b)===!0){let N=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],H=0;for(let G=0;G<F.length;G++){let k=F[G],z=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,N+H,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,H),H+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,M,b){let E=y.value,A=S+"_"+M;if(b[A]===void 0)return typeof E=="number"||typeof E=="boolean"?b[A]=E:b[A]=E.clone(),!0;{let R=b[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return b[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(y){let S=y.uniforms,M=0,b=16;for(let A=0,R=S.length;A<R;A++){let x=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,P=x.length;w<P;w++){let N=x[w],F=Array.isArray(N.value)?N.value:[N.value];for(let H=0,G=F.length;H<G;H++){let k=F[H],z=g(k),q=M%b,se=q%z.boundary,te=q+se;M+=se,te!==0&&b-te<z.storage&&(M+=b-te),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=z.storage}}}let E=M%b;return E>0&&(M+=b-E),y.__size=M,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){let S=y.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:p}}var Yb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xn=null;function qb(){return xn===null&&(xn=new kl(Yb,16,16,Ks,_n),xn.name="DFG_LUT",xn.minFilter=Yt,xn.magFilter=Yt,xn.wrapS=dn,xn.wrapT=dn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}var oh=class{constructor(e={}){let{canvas:t=Em(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gi}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let g=f,m=new Set([bc,Mc,yc]),p=new Set([gi,$i,ta,ia,xc,vc]),y=new Uint32Array(4),S=new Int32Array(4),M=null,b=null,E=[],A=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Gt;let P=0,N=0,F=null,H=-1,G=null,k=new xt,z=new xt,q=null,se=new De(0),te=0,oe=t.width,Ie=t.height,Oe=1,We=null,Xe=null,Z=new xt(0,0,oe,Ie),j=new xt(0,0,oe,Ie),me=!1,Fe=new Zr,xe=!1,qe=!1,Ot=new dt,Ye=new D,$e=new xt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Be=!1;function wt(){return F===null?Oe:1}let I=i;function At(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),I===null){let U="webgl2";if(I=At(U,T),I===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ce("WebGLRenderer: "+T.message),T}let Ke,ct,ye,C,v,O,Y,J,X,be,re,ve,Pe,Q,le,_e,Me,ae,ze,L,de,ee,fe,$;function K(){Ke=new eM(I),Ke.init(),ee=new kb(I,Ke),ct=new Xy(I,Ke,e,ee),ye=new Bb(I,Ke),ct.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),C=new nM(I),v=new Sb,O=new zb(I,Ke,ye,v,ct,ee,C),Y=new qy(x),J=new Qy(x),X=new ox(I),fe=new Gy(I,X),be=new tM(I,X,C,fe),re=new rM(I,be,X,C),ze=new sM(I,ct,O),_e=new Yy(v),ve=new bb(x,Y,J,Ke,ct,fe,_e),Pe=new Wb(x,v),Q=new Eb,le=new Ib(Ke),ae=new Hy(x,Y,J,ye,re,_,l),Me=new Fb(x,re,ct),$=new Xb(I,C,ct,ye),L=new Wy(I,Ke,C),de=new iM(I,Ke,C),C.programs=ve.programs,x.capabilities=ct,x.extensions=Ke,x.properties=v,x.renderLists=Q,x.shadowMap=Me,x.state=ye,x.info=C}K(),g!==gi&&(R=new oM(g,t.width,t.height,n,r));let ie=new Fd(x,I);this.xr=ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(T){T!==void 0&&(Oe=T,this.setSize(oe,Ie,!1))},this.getSize=function(T){return T.set(oe,Ie)},this.setSize=function(T,U,W=!0){if(ie.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,Ie=U,t.width=Math.floor(T*Oe),t.height=Math.floor(U*Oe),W===!0&&(t.style.width=T+"px",t.style.height=U+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(oe*Oe,Ie*Oe).floor()},this.setDrawingBufferSize=function(T,U,W){oe=T,Ie=U,Oe=W,t.width=Math.floor(T*W),t.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(g===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,U,W,V){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,U,W,V),ye.viewport(k.copy(Z).multiplyScalar(Oe).round())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,U,W,V){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,W,V),ye.scissor(z.copy(j).multiplyScalar(Oe).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){ye.setScissorTest(me=T)},this.setOpaqueSort=function(T){We=T},this.setTransparentSort=function(T){Xe=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,W=!0){let V=0;if(T){let B=!1;if(F!==null){let ce=F.texture.format;B=m.has(ce)}if(B){let ce=F.texture.type,pe=p.has(ce),ue=ae.getClearColor(),ge=ae.getClearAlpha(),Se=ue.r,Re=ue.g,Ee=ue.b;pe?(y[0]=Se,y[1]=Re,y[2]=Ee,y[3]=ge,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=Se,S[1]=Re,S[2]=Ee,S[3]=ge,I.clearBufferiv(I.COLOR,0,S))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),W&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),ae.dispose(),Q.dispose(),le.dispose(),v.dispose(),Y.dispose(),J.dispose(),re.dispose(),fe.dispose(),$.dispose(),ve.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Gd),ie.removeEventListener("sessionend",Wd),Ms.stop()};function Le(T){T.preventDefault(),Ua("WebGLRenderer: Context Lost."),w=!0}function ht(){Ua("WebGLRenderer: Context Restored."),w=!1;let T=C.autoReset,U=Me.enabled,W=Me.autoUpdate,V=Me.needsUpdate,B=Me.type;K(),C.autoReset=T,Me.enabled=U,Me.autoUpdate=W,Me.needsUpdate=V,Me.type=B}function Qe(T){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function sn(T){let U=T.target;U.removeEventListener("dispose",sn),yn(U)}function yn(T){pg(T),v.remove(T)}function pg(T){let U=v.get(T).programs;U!==void 0&&(U.forEach(function(W){ve.releaseProgram(W)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,V,B,ce){U===null&&(U=st);let pe=B.isMesh&&B.matrixWorld.determinant()<0,ue=gg(T,U,W,V,B);ye.setMaterial(V,pe);let ge=W.index,Se=1;if(V.wireframe===!0){if(ge=be.getWireframeAttribute(W),ge===void 0)return;Se=2}let Re=W.drawRange,Ee=W.attributes.position,ke=Re.start*Se,it=(Re.start+Re.count)*Se;ce!==null&&(ke=Math.max(ke,ce.start*Se),it=Math.min(it,(ce.start+ce.count)*Se)),ge!==null?(ke=Math.max(ke,0),it=Math.min(it,ge.count)):Ee!=null&&(ke=Math.max(ke,0),it=Math.min(it,Ee.count));let vt=it-ke;if(vt<0||vt===1/0)return;fe.setup(B,V,ue,W,ge);let yt,rt=L;if(ge!==null&&(yt=X.get(ge),rt=de,rt.setIndex(yt)),B.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*wt()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(B.isLine){let we=V.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*wt()),B.isLineSegments?rt.setMode(I.LINES):B.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else B.isPoints?rt.setMode(I.POINTS):B.isSprite&&rt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let we=B._multiDrawStarts,et=B._multiDrawCounts,Ze=B._multiDrawCount,vi=ge?X.get(ge).bytesPerElement:1,ir=v.get(V).currentProgram.getUniforms();for(let yi=0;yi<Ze;yi++)ir.setValue(I,"_gl_DrawID",yi),rt.render(we[yi]/vi,et[yi])}else if(B.isInstancedMesh)rt.renderInstances(ke,vt,B.count);else if(W.isInstancedBufferGeometry){let we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,et=Math.min(W.instanceCount,we);rt.renderInstances(ke,vt,et)}else rt.render(ke,vt)};function Hd(T,U,W){T.transparent===!0&&T.side===mn&&T.forceSinglePass===!1?(T.side=ai,T.needsUpdate=!0,yo(T,U,W),T.side=zn,T.needsUpdate=!0,yo(T,U,W),T.side=mn):yo(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),b=le.get(W),b.init(U),A.push(b),W.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),T!==W&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights();let V=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ce=B.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){let ue=ce[pe];Hd(ue,W,B),V.add(ue)}else Hd(ce,W,B),V.add(ce)}),b=A.pop(),V},this.compileAsync=function(T,U,W=null){let V=this.compile(T,U,W);return new Promise(B=>{function ce(){if(V.forEach(function(pe){v.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){B(T);return}setTimeout(ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let xh=null;function mg(T){xh&&xh(T)}function Gd(){Ms.stop()}function Wd(){Ms.start()}let Ms=new Qm;Ms.setAnimationLoop(mg),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(T){xh=T,ie.setAnimationLoop(T),T===null?Ms.stop():Ms.start()},ie.addEventListener("sessionstart",Gd),ie.addEventListener("sessionend",Wd),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;let W=ie.enabled===!0&&ie.isPresenting===!0,V=R!==null&&(F===null||W)&&R.begin(x,F);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,F),b=le.get(T,A.length),b.init(U),A.push(b),Ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(Ot,Ki,U.reversedDepth),qe=this.localClippingEnabled,xe=_e.init(this.clippingPlanes,qe),M=Q.get(T,E.length),M.init(),E.push(M),ie.enabled===!0&&ie.isPresenting===!0){let pe=x.xr.getDepthSensingMesh();pe!==null&&vh(pe,U,-1/0,x.sortObjects)}vh(T,U,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(We,Xe),Be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Be&&ae.addToRenderList(M,T),this.info.render.frame++,xe===!0&&_e.beginShadows();let B=b.state.shadowsArray;if(Me.render(B,T,U),xe===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&R.hasRenderPass())===!1){let pe=M.opaque,ue=M.transmissive;if(b.setupLights(),U.isArrayCamera){let ge=U.cameras;if(ue.length>0)for(let Se=0,Re=ge.length;Se<Re;Se++){let Ee=ge[Se];Yd(pe,ue,T,Ee)}Be&&ae.render(T);for(let Se=0,Re=ge.length;Se<Re;Se++){let Ee=ge[Se];Xd(M,T,Ee,Ee.viewport)}}else ue.length>0&&Yd(pe,ue,T,U),Be&&ae.render(T),Xd(M,T,U)}F!==null&&N===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),V&&R.end(x),T.isScene===!0&&T.onAfterRender(x,T,U),fe.resetDefaultState(),H=-1,G=null,A.pop(),A.length>0?(b=A[A.length-1],xe===!0&&_e.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function vh(T,U,W,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Fe.intersectsSprite(T)){V&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ot);let pe=re.update(T),ue=T.material;ue.visible&&M.push(T,pe,ue,W,$e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Fe.intersectsObject(T))){let pe=re.update(T),ue=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),$e.copy(pe.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(Ot)),Array.isArray(ue)){let ge=pe.groups;for(let Se=0,Re=ge.length;Se<Re;Se++){let Ee=ge[Se],ke=ue[Ee.materialIndex];ke&&ke.visible&&M.push(T,pe,ke,W,$e.z,Ee)}}else ue.visible&&M.push(T,pe,ue,W,$e.z,null)}}let ce=T.children;for(let pe=0,ue=ce.length;pe<ue;pe++)vh(ce[pe],U,W,V)}function Xd(T,U,W,V){let{opaque:B,transmissive:ce,transparent:pe}=T;b.setupLightsView(W),xe===!0&&_e.setGlobalState(x.clippingPlanes,W),V&&ye.viewport(k.copy(V)),B.length>0&&vo(B,U,W),ce.length>0&&vo(ce,U,W),pe.length>0&&vo(pe,U,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Yd(T,U,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let ke=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new ni(1,1,{generateMipmaps:!0,type:ke?_n:gi,minFilter:xs,samples:ct.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let ce=b.state.transmissionRenderTarget[V.id],pe=V.viewport||k;ce.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);let ue=x.getRenderTarget(),ge=x.getActiveCubeFace(),Se=x.getActiveMipmapLevel();x.setRenderTarget(ce),x.getClearColor(se),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ae.render(W);let Re=x.toneMapping;x.toneMapping=ji;let Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),xe===!0&&_e.setGlobalState(x.clippingPlanes,V),vo(T,W,V),O.updateMultisampleRenderTarget(ce),O.updateRenderTargetMipmap(ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let it=0,vt=U.length;it<vt;it++){let yt=U[it],{object:rt,geometry:we,material:et,group:Ze}=yt;if(et.side===mn&&rt.layers.test(V.layers)){let vi=et.side;et.side=ai,et.needsUpdate=!0,qd(rt,W,V,we,et,Ze),et.side=vi,et.needsUpdate=!0,ke=!0}}ke===!0&&(O.updateMultisampleRenderTarget(ce),O.updateRenderTargetMipmap(ce))}x.setRenderTarget(ue,ge,Se),x.setClearColor(se,te),Ee!==void 0&&(V.viewport=Ee),x.toneMapping=Re}function vo(T,U,W){let V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ce=T.length;B<ce;B++){let pe=T[B],{object:ue,geometry:ge,group:Se}=pe,Re=pe.material;Re.allowOverride===!0&&V!==null&&(Re=V),ue.layers.test(W.layers)&&qd(ue,U,W,ge,Re,Se)}}function qd(T,U,W,V,B,ce){T.onBeforeRender(x,U,W,V,B,ce),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(x,U,W,V,T,ce),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=ai,B.needsUpdate=!0,x.renderBufferDirect(W,U,V,B,T,ce),B.side=zn,B.needsUpdate=!0,x.renderBufferDirect(W,U,V,B,T,ce),B.side=mn):x.renderBufferDirect(W,U,V,B,T,ce),T.onAfterRender(x,U,W,V,B,ce)}function yo(T,U,W){U.isScene!==!0&&(U=st);let V=v.get(T),B=b.state.lights,ce=b.state.shadowsArray,pe=B.state.version,ue=ve.getParameters(T,B.state,ce,U,W),ge=ve.getProgramCacheKey(ue),Se=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?J:Y).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Se===void 0&&(T.addEventListener("dispose",sn),Se=new Map,V.programs=Se);let Re=Se.get(ge);if(Re!==void 0){if(V.currentProgram===Re&&V.lightsStateVersion===pe)return Kd(T,ue),Re}else ue.uniforms=ve.getUniforms(T),T.onBeforeCompile(ue,x),Re=ve.acquireProgram(ue,ge),Se.set(ge,Re),V.uniforms=ue.uniforms;let Ee=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),Kd(T,ue),V.needsLights=xg(T),V.lightsStateVersion=pe,V.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Re,V.uniformsList=null,Re}function Zd(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ra.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Kd(T,U){let W=v.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function gg(T,U,W,V,B){U.isScene!==!0&&(U=st),O.resetTextureUnits();let ce=U.fog,pe=V.isMeshStandardMaterial?U.environment:null,ue=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Vs,ge=(V.isMeshStandardMaterial?J:Y).get(V.envMap||pe),Se=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!W.morphAttributes.position,ke=!!W.morphAttributes.normal,it=!!W.morphAttributes.color,vt=ji;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=x.toneMapping);let yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=yt!==void 0?yt.length:0,we=v.get(V),et=b.state.lights;if(xe===!0&&(qe===!0||T!==G)){let Qt=T===G&&V.id===H;_e.setState(V,T,Qt)}let Ze=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==et.state.version||we.outputColorSpace!==ue||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==ge||V.fog===!0&&we.fog!==ce||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==_e.numPlanes||we.numIntersection!==_e.numIntersection)||we.vertexAlphas!==Se||we.vertexTangents!==Re||we.morphTargets!==Ee||we.morphNormals!==ke||we.morphColors!==it||we.toneMapping!==vt||we.morphTargetsCount!==rt)&&(Ze=!0):(Ze=!0,we.__version=V.version);let vi=we.currentProgram;Ze===!0&&(vi=yo(V,U,B));let ir=!1,yi=!1,la=!1,ut=vi.getUniforms(),oi=we.uniforms;if(ye.useProgram(vi.program)&&(ir=!0,yi=!0,la=!0),V.id!==H&&(H=V.id,yi=!0),ir||G!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(I,"projectionMatrix",T.projectionMatrix),ut.setValue(I,"viewMatrix",T.matrixWorldInverse);let li=ut.map.cameraPosition;li!==void 0&&li.setValue(I,Ye.setFromMatrixPosition(T.matrixWorld)),ct.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,yi=!0,la=!0)}if(we.needsLights&&(et.state.directionalShadowMap.length>0&&ut.setValue(I,"directionalShadowMap",et.state.directionalShadowMap,O),et.state.spotShadowMap.length>0&&ut.setValue(I,"spotShadowMap",et.state.spotShadowMap,O),et.state.pointShadowMap.length>0&&ut.setValue(I,"pointShadowMap",et.state.pointShadowMap,O)),B.isSkinnedMesh){ut.setOptional(I,B,"bindMatrix"),ut.setOptional(I,B,"bindMatrixInverse");let Qt=B.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),ut.setValue(I,"boneTexture",Qt.boneTexture,O))}B.isBatchedMesh&&(ut.setOptional(I,B,"batchingTexture"),ut.setValue(I,"batchingTexture",B._matricesTexture,O),ut.setOptional(I,B,"batchingIdTexture"),ut.setValue(I,"batchingIdTexture",B._indirectTexture,O),ut.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(I,"batchingColorTexture",B._colorsTexture,O));let Oi=W.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&ze.update(B,W,vi),(yi||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,ut.setValue(I,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(oi.envMap.value=ge,oi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),oi.dfgLUT!==void 0&&(oi.dfgLUT.value=qb()),yi&&(ut.setValue(I,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&_g(oi,la),ce&&V.fog===!0&&Pe.refreshFogUniforms(oi,ce),Pe.refreshMaterialUniforms(oi,V,Oe,Ie,b.state.transmissionRenderTarget[T.id]),ra.upload(I,Zd(we),oi,O)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ra.upload(I,Zd(we),oi,O),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(I,"center",B.center),ut.setValue(I,"modelViewMatrix",B.modelViewMatrix),ut.setValue(I,"normalMatrix",B.normalMatrix),ut.setValue(I,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Qt=V.uniformsGroups;for(let li=0,yh=Qt.length;li<yh;li++){let bs=Qt[li];$.update(bs,vi),$.bind(bs,vi)}}return vi}function _g(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function xg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,W){let V=v.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=U,v.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let W=v.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let vg=I.createFramebuffer();this.setRenderTarget=function(T,U=0,W=0){F=T,P=U,N=W;let V=null,B=!1,ce=!1;if(T){let ue=v.get(T);if(ue.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(I.FRAMEBUFFER,ue.__webglFramebuffer),k.copy(T.viewport),z.copy(T.scissor),q=T.scissorTest,ye.viewport(k),ye.scissor(z),ye.setScissorTest(q),H=-1;return}else if(ue.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(ue.__hasExternalTextures)O.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Re=T.depthTexture;if(ue.__boundDepthTexture!==Re){if(Re!==null&&v.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}let ge=T.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ce=!0);let Se=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Se[U])?V=Se[U][W]:V=Se[U],B=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?V=v.get(T).__webglMultisampledFramebuffer:Array.isArray(Se)?V=Se[W]:V=Se,k.copy(T.viewport),z.copy(T.scissor),q=T.scissorTest}else k.copy(Z).multiplyScalar(Oe).floor(),z.copy(j).multiplyScalar(Oe).floor(),q=me;if(W!==0&&(V=vg),ye.bindFramebuffer(I.FRAMEBUFFER,V)&&ye.drawBuffers(T,V),ye.viewport(k),ye.scissor(z),ye.setScissorTest(q),B){let ue=v.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,W)}else if(ce){let ue=U;for(let ge=0;ge<T.textures.length;ge++){let Se=v.get(T.textures[ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ge,Se.__webglTexture,W,ue)}}else if(T!==null&&W!==0){let ue=v.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,W)}H=-1},this.readRenderTargetPixels=function(T,U,W,V,B,ce,pe,ue=0){if(!(T&&T.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){ye.bindFramebuffer(I.FRAMEBUFFER,ge);try{let Se=T.textures[ue],Re=Se.format,Ee=Se.type;if(!ct.textureFormatReadable(Re)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ee)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&W>=0&&W<=T.height-B&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),I.readPixels(U,W,V,B,ee.convert(Re),ee.convert(Ee),ce))}finally{let Se=F!==null?v.get(F).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=function(T,U,W,V,B,ce,pe,ue=0){return Mo(this,null,function*(){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge)if(U>=0&&U<=T.width-V&&W>=0&&W<=T.height-B){ye.bindFramebuffer(I.FRAMEBUFFER,ge);let Se=T.textures[ue],Re=Se.format,Ee=Se.type;if(!ct.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue),I.readPixels(U,W,V,B,ee.convert(Re),ee.convert(Ee),0);let it=F!==null?v.get(F).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,it);let vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield wm(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(ke),I.deleteSync(vt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(T,U=null,W=0){let V=Math.pow(2,-W),B=Math.floor(T.image.width*V),ce=Math.floor(T.image.height*V),pe=U!==null?U.x:0,ue=U!==null?U.y:0;O.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,pe,ue,B,ce),ye.unbindTexture()};let yg=I.createFramebuffer(),Mg=I.createFramebuffer();this.copyTextureToTexture=function(T,U,W=null,V=null,B=0,ce=null){ce===null&&(B!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let pe,ue,ge,Se,Re,Ee,ke,it,vt,yt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(W!==null)pe=W.max.x-W.min.x,ue=W.max.y-W.min.y,ge=W.isBox3?W.max.z-W.min.z:1,Se=W.min.x,Re=W.min.y,Ee=W.isBox3?W.min.z:0;else{let Oi=Math.pow(2,-B);pe=Math.floor(yt.width*Oi),ue=Math.floor(yt.height*Oi),T.isDataArrayTexture?ge=yt.depth:T.isData3DTexture?ge=Math.floor(yt.depth*Oi):ge=1,Se=0,Re=0,Ee=0}V!==null?(ke=V.x,it=V.y,vt=V.z):(ke=0,it=0,vt=0);let rt=ee.convert(U.format),we=ee.convert(U.type),et;U.isData3DTexture?(O.setTexture3D(U,0),et=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(O.setTexture2DArray(U,0),et=I.TEXTURE_2D_ARRAY):(O.setTexture2D(U,0),et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Ze=I.getParameter(I.UNPACK_ROW_LENGTH),vi=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ir=I.getParameter(I.UNPACK_SKIP_PIXELS),yi=I.getParameter(I.UNPACK_SKIP_ROWS),la=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ee);let ut=T.isDataArrayTexture||T.isData3DTexture,oi=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Oi=v.get(T),Qt=v.get(U),li=v.get(Oi.__renderTarget),yh=v.get(Qt.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,li.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,yh.__webglFramebuffer);for(let bs=0;bs<ge;bs++)ut&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(T).__webglTexture,B,Ee+bs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ce,vt+bs)),I.blitFramebuffer(Se,Re,pe,ue,ke,it,pe,ue,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||v.has(T)){let Oi=v.get(T),Qt=v.get(U);ye.bindFramebuffer(I.READ_FRAMEBUFFER,yg),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mg);for(let li=0;li<ge;li++)ut?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oi.__webglTexture,B,Ee+li):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oi.__webglTexture,B),oi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qt.__webglTexture,ce,vt+li):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qt.__webglTexture,ce),B!==0?I.blitFramebuffer(Se,Re,pe,ue,ke,it,pe,ue,I.COLOR_BUFFER_BIT,I.NEAREST):oi?I.copyTexSubImage3D(et,ce,ke,it,vt+li,Se,Re,pe,ue):I.copyTexSubImage2D(et,ce,ke,it,Se,Re,pe,ue);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else oi?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(et,ce,ke,it,vt,pe,ue,ge,rt,we,yt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(et,ce,ke,it,vt,pe,ue,ge,rt,yt.data):I.texSubImage3D(et,ce,ke,it,vt,pe,ue,ge,rt,we,yt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ce,ke,it,pe,ue,rt,we,yt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ce,ke,it,yt.width,yt.height,rt,yt.data):I.texSubImage2D(I.TEXTURE_2D,ce,ke,it,pe,ue,rt,we,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vi),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ir),I.pixelStorei(I.UNPACK_SKIP_ROWS,yi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,la),ce===0&&U.generateMipmaps&&I.generateMipmap(et),ye.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){P=0,N=0,F=null,ye.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var sg={type:"change"},Bd={type:"start"},ag={type:"end"},hh=new cs,rg=new ki,Zb=Math.cos(70*Li.DEG2RAD),Lt=new D,xi=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6,uh=class extends io{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Vi,this._lastTargetPosition=new D,this._quat=new Vi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qr,this._sphericalDelta=new Qr,this._scale=1,this._panOffset=new D,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new D,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jb.bind(this),this._onPointerDown=Kb.bind(this),this._onPointerUp=jb.bind(this),this._onContextMenu=sS.bind(this),this._onMouseWheel=eS.bind(this),this._onKeyDown=tS.bind(this),this._onTouchStart=iS.bind(this),this._onTouchMove=nS.bind(this),this._onMouseDown=$b.bind(this),this._onMouseMove=Qb.bind(this),this._interceptControlDown=rS.bind(this),this._interceptControlUp=aS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sg),this.update(),this.state=nt.NONE}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=xi:i>Math.PI&&(i-=xi),n<-Math.PI?n+=xi:n>Math.PI&&(n-=xi),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(hh.origin.copy(this.object.position),hh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hh.direction))<Zb?this.object.lookAt(this.target):(rg.setFromNormalAndCoplanarPoint(this.object.up,this.target),hh.intersectPlane(rg,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(sg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xi/60*this.autoRotateSpeed*e:xi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Lt.copy(n).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xi*this._rotateDelta.x/t.clientHeight),this._rotateUp(xi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xi*this._rotateDelta.x/t.clientHeight),this._rotateUp(xi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Kb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Jb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function jb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ag),this.state=nt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $b(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=nt.DOLLY;break;case ms.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}break;case ms.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Bd)}function Qb(s){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function eS(s){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(s.preventDefault(),this.dispatchEvent(Bd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ag))}function tS(s){this.enabled!==!1&&this._handleKeyDown(s)}function iS(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=nt.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=nt.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Bd)}function nS(s){switch(this._trackPointer(s),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=nt.NONE}}function sS(s){this.enabled!==!1&&s.preventDefault()}function rS(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aS(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var oS=500,lS=50,cS=57,hS=2500,uS=8e3,zd={high:{pixelRatioCap:1.5,ambientParticlesVisible:!0,starfieldOpacity:.85,groundAnimationScale:1},medium:{pixelRatioCap:1.25,ambientParticlesVisible:!0,starfieldOpacity:.72,groundAnimationScale:.85},low:{pixelRatioCap:1,ambientParticlesVisible:!1,starfieldOpacity:.6,groundAnimationScale:.65}},en=class s{scene;camera;renderer;controls;circleTexture;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;joystickActive=!1;canvas;animationFrameId=null;lastFrameTime=0;isPaused=!1;groundWaterTexture=null;groundWaterNormalMap=null;groundMaterial=null;arenaBoundaryGroup=null;starField=null;resizeTimeout=null;cameraTarget=new D(0,1,0);frameListeners=new Set;performanceListeners=new Set;particleAnimations=new Map;visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);animateBound=e=>this.animate(e);nextParticleAnimationId=0;currentQualityLevel="high";currentPixelRatioCap=zd.high.pixelRatioCap;performanceSampleElapsedMs=0;performanceSampleFrameTimeTotalMs=0;performanceSampleFrames=0;smoothedFps=60;lastPublishedFrameTimeMs=1e3/60;lowPerformanceMs=0;stablePerformanceMs=0;groundAnimationScale=zd.high.groundAnimationScale;mainLight=null;isPortraitRotated=!1;disposeMediaQuery=null;disposePointerInterceptor=null;transformedPointerEvents=new WeakSet;characterDistanceScale=1;init(e){this.canvas=e,this.createCircleTexture(),this.initPortraitDetection(),this.initScene(),this.installPointerInterceptor(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.disposeMediaQuery?.(),this.disposePointerInterceptor?.(),this.particleAnimations.clear(),this.controls?.dispose(),this.disposeObject(this.arenaBoundaryGroup),this.arenaBoundaryGroup=null,this.starField?.geometry.dispose(),this.starField?.material?.dispose(),this.starField=null,this.groundMaterial?.dispose(),this.groundMaterial=null,this.groundWaterTexture?.dispose(),this.groundWaterTexture=null,this.groundWaterNormalMap?.dispose(),this.groundWaterNormalMap=null,this.frameListeners.clear(),this.performanceListeners.clear(),this.scene?.clear(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.circleTexture?.dispose()}compileScene(){this.renderer.compile(this.scene,this.camera);let e=new ni(1,1);this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),e.dispose()}setCameraDistanceScale(e){if(this.characterDistanceScale=Math.max(e,1),this.controls&&this.canvas){let t=this.getViewportSettings(this.canvas.clientWidth,this.canvas.clientHeight);this.controls.minDistance=t.minDistance,this.controls.maxDistance=t.maxDistance,this.controls.update()}}setCameraFocus(e){this.cameraTarget.set(e.x,e.y,e.z),this.controls&&this.controls.target.copy(this.cameraTarget)}getFacingRotationY(e,t){return Math.atan2(t.x-e.x,t.z-e.z)}addFrameListener(e){return this.frameListeners.add(e),()=>{this.frameListeners.delete(e)}}addPerformanceListener(e){return this.performanceListeners.add(e),e(this.getPerformanceStats()),()=>{this.performanceListeners.delete(e)}}getQualityLevel(){return this.currentQualityLevel}registerParticleAnimation(e){e.attribute.setUsage(pd);let t=this.nextParticleAnimationId++;return this.particleAnimations.set(t,e),t}removeParticleAnimation(e){this.particleAnimations.delete(e)}createCircleTexture(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,64,64),this.circleTexture=new Gs(e)}initPortraitDetection(){let e=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=e.matches;let t=i=>{this.isPortraitRotated=i.matches};e.addEventListener("change",t),this.disposeMediaQuery=()=>e.removeEventListener("change",t)}installPointerInterceptor(){let e=this.canvas,t=n=>{if(!this.isPortraitRotated||this.transformedPointerEvents.has(n))return;n.stopImmediatePropagation();let r=new PointerEvent(n.type,{bubbles:n.bubbles,cancelable:n.cancelable,composed:n.composed,clientX:n.clientY,clientY:window.innerWidth-n.clientX,screenX:n.screenY,screenY:window.innerWidth-n.screenX,pointerId:n.pointerId,pointerType:n.pointerType,isPrimary:n.isPrimary,button:n.button,buttons:n.buttons,width:n.width,height:n.height,pressure:n.pressure});this.transformedPointerEvents.add(r),e.dispatchEvent(r)},i=new AbortController;for(let n of["pointerdown","pointermove","pointerup","pointercancel"])e.addEventListener(n,t,{capture:!0,signal:i.signal});this.disposePointerInterceptor=()=>i.abort()}initScene(){let e=this.canvas,t=e.clientWidth,i=e.clientHeight,n=this.getViewportSettings(t,i);this.scene=new Ya,this.scene.background=new De(657931),this.baseCameraFov=n.fov,this.camera=new Wt(this.baseCameraFov,t/i,.1,1e3),this.camera.position.set(0,n.cameraY,n.cameraZ),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new oh({canvas:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=so,this.renderer.toneMappingExposure=1.2,this.controls=new uh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.minDistance=n.minDistance,this.controls.maxDistance=n.maxDistance,this.controls.minPolarAngle=n.minPolarAngle,this.controls.maxPolarAngle=n.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update();let r=new to(3470813,1.2);this.scene.add(r);let a=new $r(16777215,6);a.position.set(5,10,5),this.scene.add(a),this.mainLight=a;let o=new $r(4491519,2.4);o.position.set(-5,8,-3),this.scene.add(o);let l=new eo(2254591,6,100);l.position.set(-8,3,0),this.scene.add(l);let u=1.5*88,d=new qs().load("assets/texture1.png");d.wrapS=ks,d.wrapT=ks;let f=new ds({map:d,color:16711680,roughness:.4,metalness:.8,emissive:736064,emissiveIntensity:.25});this.groundMaterial=f;let _=new Xs(u,u),g=new je(_,f);g.rotation.x=-Math.PI/2,g.position.set(0,0,0),this.scene.add(g),this.createArenaBoundaryObstacles(),this.applyQualityLevel(this.currentQualityLevel),this.compileScene()}createArenaBoundaryObstacles(){let e=new Xt;this.arenaBoundaryGroup=e,this.scene.add(e)}animate(e=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(this.animateBound);let t=this.lastFrameTime===0?1e3/60:e-this.lastFrameTime;this.lastFrameTime=e;let i=Math.min(t/1e3,1/20),n=i*30;this.groundWaterNormalMap&&(this.groundWaterNormalMap.offset.x-=i*.0174*this.groundAnimationScale,this.groundWaterNormalMap.offset.y+=i*.0096*this.groundAnimationScale),this.particleAnimations.forEach(r=>{let a=r.attribute.array;for(let o=0;o<r.particleCount;o++)r.angles[o]+=r.angularVelocities[o]*n,a[o*3]=Math.cos(r.angles[o])*r.radii[o],a[o*3+2]=Math.sin(r.angles[o])*r.radii[o];r.attribute.needsUpdate=!0}),this.starField&&(this.starField.rotation.y+=i*.0024),this.frameListeners.forEach(r=>{r(i,e)}),this.controls.enabled=!this.timeSlowActive&&!this.joystickActive,this.controls.target.copy(this.cameraTarget),this.controls.update(i),this.renderer.render(this.scene,this.camera),this.updatePerformanceStats(t)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this.renderer)return;let e=this.canvas.clientWidth,t=this.canvas.clientHeight,i=this.getViewportSettings(e,t);this.camera.aspect=e/t,this.camera.fov=i.fov,this.camera.updateProjectionMatrix(),this.camera.position.set(0,i.cameraY,i.cameraZ),this.cameraOriginalPosition=new D(0,i.cameraY,i.cameraZ),this.baseCameraFov=i.fov,this.controls.minDistance=i.minDistance,this.controls.maxDistance=i.maxDistance,this.controls.minPolarAngle=i.minPolarAngle,this.controls.maxPolarAngle=i.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.publishPerformanceStats()}applyQualityLevel(e){let t=zd[e];this.currentQualityLevel=e,this.currentPixelRatioCap=t.pixelRatioCap,this.groundAnimationScale=t.groundAnimationScale,this.renderer&&this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.starField&&(this.starField.material.opacity=t.starfieldOpacity),this.lowPerformanceMs=0,this.stablePerformanceMs=0,this.publishPerformanceStats()}updatePerformanceStats(e){let t=e>0?1e3/e:60;if(this.smoothedFps=Li.lerp(this.smoothedFps,t,.12),this.performanceSampleElapsedMs+=e,this.performanceSampleFrameTimeTotalMs+=e,this.performanceSampleFrames+=1,this.smoothedFps<lS?(this.lowPerformanceMs+=e,this.stablePerformanceMs=0):this.smoothedFps>cS?(this.stablePerformanceMs+=e,this.lowPerformanceMs=0):(this.lowPerformanceMs=0,this.stablePerformanceMs=0),this.lowPerformanceMs>=hS){let i=this.getAdjacentQualityLevel("down");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}else if(this.stablePerformanceMs>=uS){let i=this.getAdjacentQualityLevel("up");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}this.performanceSampleElapsedMs>=oS&&(this.lastPublishedFrameTimeMs=this.performanceSampleFrameTimeTotalMs/Math.max(this.performanceSampleFrames,1),this.performanceSampleElapsedMs=0,this.performanceSampleFrameTimeTotalMs=0,this.performanceSampleFrames=0,this.publishPerformanceStats())}getAdjacentQualityLevel(e){let t=["low","medium","high"],i=t.indexOf(this.currentQualityLevel);return e==="up"?t[Math.min(i+1,t.length-1)]:t[Math.max(i-1,0)]}publishPerformanceStats(){let e=this.getPerformanceStats();this.performanceListeners.forEach(t=>{t(e)})}getPerformanceStats(){return{fps:Number((1e3/this.lastPublishedFrameTimeMs).toFixed(1)),frameTimeMs:Number(this.lastPublishedFrameTimeMs.toFixed(2)),qualityLevel:this.currentQualityLevel,pixelRatio:Number(this.getEffectivePixelRatio().toFixed(2))}}getEffectivePixelRatio(){return Math.min(window.devicePixelRatio,this.currentPixelRatioCap)}getViewportSettings(e,t){let i=e/t,n=e<520,r=i<.9,a=n||r||t<520,o=60,l=10,c=4,h=3,u=10,d=Math.PI/4.8,f=Math.PI/2.45;return a&&(l=12,h=4,u=12,f=Math.PI/2.1),h*=this.characterDistanceScale,u*=this.characterDistanceScale,{fov:o,cameraZ:l,cameraY:c,minDistance:h,maxDistance:u,minPolarAngle:d,maxPolarAngle:f}}disposeObject(e){e&&e.traverse(t=>{if(t instanceof je)if(t.geometry.dispose(),Array.isArray(t.material))t.material.forEach(i=>{for(let n of Object.values(i))n instanceof _i&&n.dispose();i.dispose()});else{for(let i of Object.values(t.material))i instanceof _i&&i.dispose();t.material.dispose()}})}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Ni({token:s,factory:s.\u0275fac})};var dS=/^[og]\s*(.+)?/,fS=/^mtllib /,pS=/^usemtl /,mS=/^usemap /,og=/\s+/,lg=new D,kd=new D,cg=new D,hg=new D,Gi=new D,dh=new De;function gS(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let n=this.vertices,r=this.object.geometry.vertices;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let n=this.normals,r=this.object.geometry.normals;r.push(n[e+0],n[e+1],n[e+2]),r.push(n[t+0],n[t+1],n[t+2]),r.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){let n=this.vertices,r=this.object.geometry.normals;lg.fromArray(n,e),kd.fromArray(n,t),cg.fromArray(n,i),Gi.subVectors(cg,kd),hg.subVectors(lg,kd),Gi.cross(hg),Gi.normalize(),r.push(Gi.x,Gi.y,Gi.z),r.push(Gi.x,Gi.y,Gi.z),r.push(Gi.x,Gi.y,Gi.z)},addColor:function(e,t,i){let n=this.colors,r=this.object.geometry.colors;n[e]!==void 0&&r.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&r.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&r.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){let n=this.uvs,r=this.object.geometry.uvs;r.push(n[e+0],n[e+1]),r.push(n[t+0],n[t+1]),r.push(n[i+0],n[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,r,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(e,h),d=this.parseVertexIndex(t,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let _=this.normals.length;u=this.parseNormalIndex(o,_),d=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let _=this.uvs.length;u=this.parseUVIndex(n,_),d=this.parseUVIndex(r,_),f=this.parseUVIndex(a,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){let r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],n))}};return s.startObject("",!1),s}var fh=class extends na{constructor(e){super(e),this.materials=null}load(e,t,i,n){let r=this,a=new Qa(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){let t=new gS;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(og);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(dh.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Gt),t.colors.push(dh.r,dh.g,dh.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(og),f=[];for(let g=0,m=d.length;g<m;g++){let p=d[g];if(p.length>0){let y=p.split("/");f.push(y)}}let _=f[0];for(let g=1,m=f.length-1;g<m;g++){let p=f[g],y=f[g+1];t.addFace(_[0],p[0],y[0],_[1],p[1],y[1],_[2],p[2],y[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let _=0,g=u.length;_<g;_++){let m=u[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((n=dS.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);t.startObject(u)}else if(pS.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(fS.test(c))t.materialLibraries.push(c.substring(7).trim());else if(mS.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();let r=new Xt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){let c=t.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",_=!1;if(h.vertices.length===0)continue;let g=new zt;g.setAttribute("position",new lt(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new lt(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new lt(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new lt(h.uvs,2));let m=[];for(let y=0,S=u.length;y<S;y++){let M=u[y],b=M.name+"_"+M.smooth+"_"+_,E=t.materials[b];if(this.materials!==null){if(E=this.materials.create(M.name),d&&E&&!(E instanceof hs)){let A=new hs;ri.prototype.copy.call(A,E),A.color.copy(E.color),E=A}else if(f&&E&&!(E instanceof kn)){let A=new kn({size:10,sizeAttenuation:!1});ri.prototype.copy.call(A,E),A.color.copy(E.color),A.map=E.map,E=A}}E===void 0&&(d?E=new hs:f?E=new kn({size:1,sizeAttenuation:!1}):E=new ja,E.name=M.name,E.flatShading=!M.smooth,E.vertexColors=_,t.materials[b]=E),m.push(E)}let p;if(m.length>1){for(let y=0,S=u.length;y<S;y++){let M=u[y];g.addGroup(M.groupStart,M.groupCount,y)}d?p=new Kr(g,m):f?p=new Hs(g,m):p=new je(g,m)}else d?p=new Kr(g,m[0]):f?p=new Hs(g,m[0]):p=new je(g,m[0]);p.name=c.name,r.add(p)}else if(t.vertices.length>0){let o=new kn({size:1,sizeAttenuation:!1}),l=new zt;l.setAttribute("position",new lt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new lt(t.colors,3)),o.vertexColors=!0);let c=new Hs(l,o);r.add(c)}return r}};var _S="assets/models/hominid_skull.obj3e95cd92-63a9-48ec-a41f-461a344caf62.obj",xS="assets/texture.jpg",vS=1.6,yS=new D(0,.2,.4),MS=new Ji(Math.PI,-Math.PI,-Math.PI),oa=class s{skullTemplatePromise=null;skullTexture=null;attachSkullModel(e,t){return this.loadSkullTexture().then(i=>(t.map=i,t.needsUpdate=!0,this.loadSkullTemplate())).then(i=>{let n=this.createSkullAnchor(i,t);if(e.userData.disposed){this.disposeSkullAnchor(n,t);return}e.add(n)}).catch(()=>{if(e.userData.disposed){t.dispose();return}})}loadSkullTexture(){return this.skullTexture?Promise.resolve(this.skullTexture):new qs().loadAsync(xS).then(t=>(t.colorSpace=Gt,this.skullTexture=t,t))}loadSkullTemplate(){if(!this.skullTemplatePromise){let e=new fh;this.skullTemplatePromise=e.loadAsync(_S).then(t=>{let i=this.normalizeSkullTemplate(t),r=new Pi().setFromObject(i).getSize(new D),a=Math.max(r.x,r.y,r.z);return a>0&&i.scale.setScalar(vS/a),i})}return this.skullTemplatePromise}normalizeSkullTemplate(e){e.updateMatrixWorld(!0);let t=new Xt,i=[];e.traverse(a=>{if(!(a instanceof je))return;let o=a.geometry.clone();o.applyMatrix4(a.matrixWorld);let l=new je(o);t.add(l),i.push(l)});let r=new Pi().setFromObject(t).getCenter(new D);return i.forEach(a=>{a.geometry.translate(-r.x,-r.y,-r.z)}),t}createSkullAnchor(e,t){let i=new Xt;i.position.copy(yS),i.rotation.copy(MS);let n=e.clone(!0);return n.traverse(r=>{r instanceof je&&(r.geometry=r.geometry.clone(),r.material=t,r.castShadow=!0,r.receiveShadow=!0)}),i.add(n),i}disposeSkullAnchor(e,t){e.traverse(i=>{i instanceof je&&i.geometry.dispose()}),t.dispose()}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Ni({token:s,factory:s.\u0275fac})};var tn=.8,ph=1.5,bS="#00ff88",SS=2.6,ug=1.6,TS=128,ES=5,er=class s{battleCharacterSkullService=pt(oa);persistentShields=new Map;threatIndicators=new Map;sharedThreatTexture=null;createCharacterMesh(e,t){let i=new Xt,n=new ds({color:e,roughness:.9,metalness:.1,emissive:new De(e).multiplyScalar(.9),emissiveIntensity:.9}),a=new ds({color:15658734,roughness:.9,metalness:.1}).clone(),o=this.battleCharacterSkullService.attachSkullModel(i,a),l=a,c=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],h=.8,u=.55,d=.7,f=(y,S,M,...b)=>{b.forEach(E=>{let A=new je(M,l),R=new si;R.position.copy(S.position),R.rotation.copy(S.rotation),A.position.set(0,E,0),R.add(A),y.add(R)})},_=new Ws(.12,.08,h,5),g=new Ws(.1,.06,u,5),m=new Ws(.07,.03,d,5),p=new Ja(.07,5,4);for(let y=0;y<2;y++){let S=y===0?-1:1;for(let M=0;M<4;M++){let b=new Xt,E=c[M]*(y===0?1:-1),A=(Math.PI/2.8+M*.05)*S,R=A*1.2,x=A*.75,w=Math.PI/5.3*S,P=new D(.2*S,-.1,0),N=new je(_,l);N.position.copy(P),N.rotation.z=R,b.add(N);let F=this.getConnectedSegmentPosition(P,R,h,-1,x,u,1),H=new je(g,l);H.position.copy(F),H.rotation.z=x,b.add(H),f(b,H,p,u/2,-u/2);let G=this.getConnectedSegmentPosition(F,x,u,-1,w,d,1),k=new je(m,l);k.position.copy(G),k.rotation.z=w,b.add(k);let q=[.5,.25,0,-.2][M];b.rotation.y=E,b.position.set(.4*S,.3,q),i.add(b);let se=E,te=-.02+(Math.random()-.5)*.04,oe=Math.PI/120*S+(Math.random()-.5)*.02;b.rotation.set(te,se,oe),i.userData.legs||(i.userData.legs=[]),i.userData.legs.push({group:b,baseRotation:{x:te,y:se,z:oe},side:S,index:M})}}return i.userData.legMaterial=l,i.userData.secondMaterial=n,i.position.set(t.x,t.y+tn,t.z),{mesh:i,ready:o}}getConnectedSegmentPosition(e,t,i,n,r,a,o){return e.clone().add(this.getSegmentEndpointOffset(i,t,n)).sub(this.getSegmentEndpointOffset(a,r,o))}getSegmentEndpointOffset(e,t,i){return new D(0,e/2*i,0).applyAxisAngle(new D(0,0,1),t)}swapLegMaterial(e,t){let i=t?e.userData.secondMaterial:e.userData.legMaterial;i&&e.traverse(n=>{n instanceof je&&(n.material=i)})}doShieldsOverlap(e,t,i){let n=e.position.x-t.position.x,r=e.position.z-t.position.z,a=n*n+r*r,o=ph*(i??Mt(e))+ph*Mt(t);return a<o*o}disposeAllShields(){this.persistentShields.forEach((e,t)=>this.disposePersistentShield(t)),this.persistentShields.clear()}disposePersistentShield(e){let t=this.persistentShields.get(e);if(!t)return;let{shieldGroup:i,materials:n,geometries:r,idleTweens:a}=t;a.forEach(o=>o.kill()),e.remove(i),r.forEach(o=>o.dispose()),n.forEach(o=>o.dispose()),this.persistentShields.delete(e)}showThreatIndicator(e){if(this.threatIndicators.has(e))return;this.sharedThreatTexture||(this.sharedThreatTexture=this.createThreatTexture());let t=new qr({map:this.sharedThreatTexture,transparent:!0,depthWrite:!1}),i=Mt(e),n=an(ES),r=i<n?n/i:1,a=new Za(t);a.scale.set(ug*r,ug*r,1),a.position.y=SS*r,a.renderOrder=1,e.add(a),this.threatIndicators.set(e,{sprite:a,material:t,texture:this.sharedThreatTexture})}createThreatTexture(){let e=TS,t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d"),n=e/2,r=e/2,a=i.createRadialGradient(n,r,e*.28,n,r,e*.48);a.addColorStop(0,"rgba(0, 255, 136, 0)"),a.addColorStop(.5,"rgba(0, 255, 136, 0.3)"),a.addColorStop(.7,"rgba(0, 255, 136, 0.7)"),a.addColorStop(.85,"rgba(0, 255, 136, 0.3)"),a.addColorStop(1,"rgba(0, 255, 136, 0)"),i.fillStyle=a,i.fillRect(0,0,e,e),i.beginPath(),i.arc(n,r,e*.35,0,Math.PI*2),i.lineWidth=e*.06,i.strokeStyle=bS,i.globalAlpha=.9,i.stroke(),i.globalAlpha=1;let o=new Gs(t);return o.needsUpdate=!0,o}removeThreatIndicator(e){let t=this.threatIndicators.get(e);t&&(e.remove(t.sprite),t.material.dispose(),this.threatIndicators.delete(e))}disposeAllThreatIndicators(){this.threatIndicators.forEach((e,t)=>this.removeThreatIndicator(t)),this.sharedThreatTexture&&(this.sharedThreatTexture.dispose(),this.sharedThreatTexture=null)}disposeCharacterMesh(e,t){e&&(e.userData.disposed=!0,t.remove(e),e.traverse(i=>{i instanceof je&&(i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(n=>{n.map?.dispose(),n.emissiveMap?.dispose(),n.roughnessMap?.dispose(),n.metalnessMap?.dispose(),n.normalMap?.dispose(),n.dispose()}):(i.material.map?.dispose(),i.material.emissiveMap?.dispose(),i.material.roughnessMap?.dispose(),i.material.metalnessMap?.dispose(),i.material.normalMap?.dispose(),i.material.dispose()))}))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Ni({token:s,factory:s.\u0275fac})};var gh="battleMovementState",nn="battleMovementLocked",mh=.75,Vd=Math.PI*2;function $t(s){return s?s.userData[gh]??null:null}function go(s,e){let t=$t(s);return t?{x:t.basePosition.x+t.offset.x,y:t.basePosition.y+t.offset.y,z:t.basePosition.z+t.offset.z}:e}var tr=class s{document=pt(tf);sceneService=pt(en);pressedKeys=new Set;upAxis=new D(0,1,0);forwardVector=new D;rightVector=new D;moveVector=new D;meshBounds=new Pi;arenaBounds=Wi;movementSpeed=3.4;pursuitSpeed=2.2;walkCycleSpeed=6;keyboardMoveCodes=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);keyDownHandler=this.handleKeyDown.bind(this);keyUpHandler=this.handleKeyUp.bind(this);blurHandler=this.handleBlur.bind(this);canvas=null;controlledMesh=null;controlledMeshBoundaryPadding=mh;idleWanderStates=[];pursuitState=null;removeFrameListener=null;joystickInput=null;characterColliders=new Map;collisionSeparation=new D;smoothedAnimationDelta=1/60;init(e){this.canvas!==e&&(this.disposeInputListeners(),this.canvas=e,window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("blur",this.blurHandler),this.removeFrameListener||(this.removeFrameListener=this.sceneService.addFrameListener(t=>{this.smoothedAnimationDelta+=(t-this.smoothedAnimationDelta)*.2,this.updateControlledMesh(t),this.updateIdleWanderMeshes(t),this.updatePursuitMesh(t)})))}dispose(){this.disposeInputListeners(),this.pressedKeys.clear(),this.joystickInput=null,this.controlledMesh=null,this.controlledMeshBoundaryPadding=mh,this.clearIdleWanderCharacter(),this.clearPursuitCharacter(),this.characterColliders.clear(),this.smoothedAnimationDelta=1/60,this.removeFrameListener&&(this.removeFrameListener(),this.removeFrameListener=null)}registerCharacterMesh(e){let t=Mt(e);this.characterColliders.set(e,this.measureBoundaryPadding(e)*.4*t)}unregisterCharacterMesh(e){this.characterColliders.delete(e)}setJoystickDirection(e,t){this.joystickInput={right:e,forward:t}}clearJoystickDirection(){this.joystickInput=null}setControlledCharacter(e,t,i){if(this.controlledMesh=e,!e||!t){this.controlledMeshBoundaryPadding=mh;return}this.controlledMeshBoundaryPadding=this.measureBoundaryPadding(e)*Mt(e);let n=tn*Mt(e);e.userData[gh]={basePosition:{x:t.x,y:t.y+n,z:t.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i},e.userData[nn]=!1,this.sceneService.setCameraFocus({x:t.x,y:t.y+n,z:t.z})}addIdleWanderCharacter(e,t,i){!e||!t||(this.removeIdleWanderCharacter(e),$t(e)||(e.userData[gh]={basePosition:{x:t.x,y:t.y+tn*Mt(e),z:t.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}),e.userData[nn]=!1,this.idleWanderStates.push({mesh:e,boundaryPadding:this.measureBoundaryPadding(e)*Mt(e),nextRetargetInSeconds:Li.randFloat(.3,2),targetOffset:null}))}removeIdleWanderCharacter(e){let t=this.idleWanderStates.findIndex(r=>r.mesh===e);if(t===-1)return;let i=this.idleWanderStates[t],n=$t(i.mesh);n?.isWalking&&this.stopWalking(i.mesh,n,!1),this.idleWanderStates.splice(t,1)}hasIdleWanderCharacter(e){return this.idleWanderStates.some(t=>t.mesh===e)}clearIdleWanderCharacter(){for(let e of this.idleWanderStates){let t=$t(e.mesh);t?.isWalking&&this.stopWalking(e.mesh,t,!1)}this.idleWanderStates=[]}setPursuitCharacter(e,t,i,n){this.clearPursuitCharacter(),$t(e)||(e.userData[gh]={basePosition:{x:t.x,y:t.y+tn*Mt(e),z:t.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}),e.userData[nn]=!1,this.pursuitState={mesh:e,boundaryPadding:this.measureBoundaryPadding(e)*Mt(e),targetMesh:n}}clearPursuitCharacter(){if(!this.pursuitState)return;let e=$t(this.pursuitState.mesh);e?.isWalking&&this.stopWalking(this.pursuitState.mesh,e,!1),this.pursuitState=null}isPursuing(){return this.pursuitState!==null}disposeInputListeners(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("keyup",this.keyUpHandler),window.removeEventListener("blur",this.blurHandler),this.canvas=null}handleKeyDown(e){!this.controlledMesh||this.isEditableTarget(e.target)||this.keyboardMoveCodes.has(e.code)&&this.pressedKeys.add(e.code)}handleKeyUp(e){this.pressedKeys.delete(e.code)}handleBlur(){this.pressedKeys.clear()}updateControlledMesh(e){if(!this.controlledMesh)return;let t=$t(this.controlledMesh);if(!t)return;if(this.controlledMesh.userData[nn]){t.isWalking&&this.stopWalking(this.controlledMesh,t);return}let i=this.getMoveDirection();if(!i){t.isWalking&&this.stopWalking(this.controlledMesh,t);return}t.isWalking=!0,t.walkCycle=(t.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%Vd;let n=go(this.controlledMesh,t.basePosition),r=this.movementSpeed*of(this.controlledMesh)*e,a=this.clampToArenaBounds({x:n.x+i.x*r,y:t.basePosition.y,z:n.z+i.z*r}),o=this.resolveCharacterCollision(this.controlledMesh,a);t.offset.x=o.x-t.basePosition.x,t.offset.z=o.z-t.basePosition.z,this.controlledMesh.position.x=o.x,this.controlledMesh.position.y=t.basePosition.y+Math.sin(t.walkCycle*2)*.05,this.controlledMesh.position.z=o.z,this.sceneService.setCameraFocus(this.controlledMesh.position);let l={x:o.x+i.x,z:o.z+i.z};this.controlledMesh.rotation.y=this.sceneService.getFacingRotationY(o,l),this.controlledMesh.rotation.x=Math.sin(t.walkCycle*2)*.035,this.controlledMesh.rotation.z=i.x*.05;let c=Si(this.controlledMesh);this.controlledMesh.scale.set((t.side==="left"?1:-1)*c,c,c),this.applyWalkPose(this.controlledMesh,t.walkCycle)}updateIdleWanderMeshes(e){for(let t of this.idleWanderStates)this.updateSingleIdleWanderMesh(t,e)}updateSingleIdleWanderMesh(e,t){let{mesh:i}=e,n=$t(i);if(!n)return;if(i.userData[nn]){n.isWalking&&this.stopWalking(i,n,!1);return}e.nextRetargetInSeconds-=t;let r=go(i,n.basePosition);this.shouldRetargetIdleWander(e,r)&&this.retargetIdleWander(e,r,n.basePosition.y);let a=e.targetOffset;if(!a){n.isWalking&&this.stopWalking(i,n,!1);return}let o={x:n.basePosition.x+a.x,y:n.basePosition.y,z:n.basePosition.z+a.z},l=this.moveVector.set(o.x-r.x,0,o.z-r.z),c=l.length();if(c<.12){e.targetOffset=null,e.nextRetargetInSeconds=Li.randFloat(.45,1.35),n.isWalking&&this.stopWalking(i,n,!1);return}l.divideScalar(c),n.isWalking=!0,n.walkCycle=(n.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%Vd;let h=Math.min(.9*Mt(i)*t,c),u=this.clampToArenaBounds({x:r.x+l.x*h,y:n.basePosition.y,z:r.z+l.z*h},e.boundaryPadding),d=this.resolveCharacterCollision(i,u);n.offset.x=d.x-n.basePosition.x,n.offset.z=d.z-n.basePosition.z,i.position.x=d.x,i.position.y=n.basePosition.y+Math.sin(n.walkCycle*2)*.035,i.position.z=d.z,i.rotation.y=this.sceneService.getFacingRotationY(d,o),i.rotation.x=Math.sin(n.walkCycle*2)*.018,i.rotation.z=l.x*.025;let f=Mt(i);i.scale.set((n.side==="left"?1:-1)*f,f,f),this.applyWalkPose(i,n.walkCycle)}updatePursuitMesh(e){if(!this.pursuitState)return;let{mesh:t,targetMesh:i}=this.pursuitState,n=$t(t);if(!n)return;if(t.userData[nn]){n.isWalking&&this.stopWalking(t,n,!1);return}let r=go(t,n.basePosition),a={x:i.position.x,y:n.basePosition.y,z:i.position.z},o=this.moveVector.set(a.x-r.x,0,a.z-r.z),l=o.length(),c=ph*(Mt(t)+Mt(i));if(l<c){n.isWalking&&this.stopWalking(t,n,!1),t.rotation.y=this.sceneService.getFacingRotationY(r,a);return}o.divideScalar(l),n.isWalking=!0,n.walkCycle=(n.walkCycle+this.smoothedAnimationDelta*this.walkCycleSpeed)%Vd;let h=Math.min(this.pursuitSpeed*Mt(t)*e,l),u=this.clampToArenaBounds({x:r.x+o.x*h,y:n.basePosition.y,z:r.z+o.z*h},this.pursuitState.boundaryPadding),d=this.resolveCharacterCollision(t,u);n.offset.x=d.x-n.basePosition.x,n.offset.z=d.z-n.basePosition.z,t.position.x=d.x,t.position.y=n.basePosition.y+Math.sin(n.walkCycle*2)*.04,t.position.z=d.z,t.rotation.y=this.sceneService.getFacingRotationY(d,a),t.rotation.x=Math.sin(n.walkCycle*2)*.025,t.rotation.z=o.x*.03;let f=Mt(t);t.scale.set((n.side==="left"?1:-1)*f,f,f),this.applyWalkPose(t,n.walkCycle)}getMoveDirection(){return this.getKeyboardDirection()??this.getJoystickDirection()}getKeyboardDirection(){return this.pressedKeys.size===0||(this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),(this.pressedKeys.has("KeyW")||this.pressedKeys.has("ArrowUp"))&&this.moveVector.add(this.forwardVector),(this.pressedKeys.has("KeyS")||this.pressedKeys.has("ArrowDown"))&&this.moveVector.sub(this.forwardVector),(this.pressedKeys.has("KeyD")||this.pressedKeys.has("ArrowRight"))&&this.moveVector.add(this.rightVector),(this.pressedKeys.has("KeyA")||this.pressedKeys.has("ArrowLeft"))&&this.moveVector.sub(this.rightVector),this.moveVector.lengthSq()<1e-4)?null:this.moveVector.normalize()}getJoystickDirection(){if(!this.joystickInput)return null;this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),this.moveVector.addScaledVector(this.forwardVector,this.joystickInput.forward),this.moveVector.addScaledVector(this.rightVector,this.joystickInput.right);let e=this.moveVector.length();return e<1e-4?null:(e>1&&this.moveVector.divideScalar(e),this.moveVector)}stopWalking(e,t,i=!0){t.isWalking=!1,e.position.y=t.basePosition.y,i&&this.sceneService.setCameraFocus(e.position),e.rotation.x=0,e.rotation.z=0,this.resetLegPose(e)}applyWalkPose(e,t){let i=e.userData.legs;if(Array.isArray(i))for(let n of i){let r=t+n.index*.8+(n.side<0?Math.PI:0),a=Math.sin(r)*.18,o=Math.max(0,Math.sin(r))*.12;n.group.rotation.x=n.baseRotation.x-o,n.group.rotation.y=n.baseRotation.y+a,n.group.rotation.z=n.baseRotation.z+a*.25*n.side}}resetLegPose(e){let t=e.userData.legs;if(Array.isArray(t))for(let i of t)i.group.rotation.set(i.baseRotation.x,i.baseRotation.y,i.baseRotation.z)}clampToArenaBounds(e,t=this.controlledMeshBoundaryPadding){let i=(this.arenaBounds.maxX-this.arenaBounds.minX)/2-.5,n=(this.arenaBounds.maxZ-this.arenaBounds.minZ)/2-.5,r=Math.min(t,i,n);return{x:Li.clamp(e.x,this.arenaBounds.minX+r,this.arenaBounds.maxX-r),y:e.y,z:Li.clamp(e.z,this.arenaBounds.minZ+r,this.arenaBounds.maxZ-r)}}shouldRetargetIdleWander(e,t){if(e.nextRetargetInSeconds>0)return!1;if(!e.targetOffset)return!0;let i=$t(e.mesh);if(!i)return!1;let n={x:i.basePosition.x+e.targetOffset.x,y:i.basePosition.y,z:i.basePosition.z+e.targetOffset.z};return t.x===n.x&&t.z===n.z}retargetIdleWander(e,t,i){let r=this.clampToArenaBounds({x:t.x+Li.randFloatSpread(5.6),y:i,z:t.z+Li.randFloatSpread(5.6)},e.boundaryPadding),a=$t(e.mesh);a&&(e.targetOffset=new D(r.x-a.basePosition.x,0,r.z-a.basePosition.z),e.nextRetargetInSeconds=Li.randFloat(.6,1.8))}measureBoundaryPadding(e){e.updateMatrixWorld(!0),this.meshBounds.setFromObject(e);let t=Math.max(Math.abs(this.meshBounds.min.x-e.position.x),Math.abs(this.meshBounds.max.x-e.position.x)),i=Math.max(Math.abs(this.meshBounds.min.z-e.position.z),Math.abs(this.meshBounds.max.z-e.position.z)),n=Math.max(Math.abs(e.scale.x),Math.abs(e.scale.y),Math.abs(e.scale.z),.01);return Math.max(Math.hypot(t,i)/n,mh)}resolveCharacterCollision(e,t){let i=this.characterColliders.get(e);if(i===void 0)return t;let n=t.x,r=t.z;for(let[a,o]of this.characterColliders){if(a===e||!a.visible)continue;let l=n-a.position.x,c=r-a.position.z,h=l*l+c*c,u=i+o;if(h>=u*u)continue;let d=Math.sqrt(h);if(d<.001)n+=u;else{let f=u-d;this.collisionSeparation.set(l/d,0,c/d),n+=this.collisionSeparation.x*f,r+=this.collisionSeparation.z*f}}return{x:n,y:t.y,z:r}}isEditableTarget(e){return e instanceof this.document.defaultView.HTMLElement?e.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(e.tagName):!1}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Ni({token:s,factory:s.\u0275fac})};var _o=class s{sceneService=pt(en);battleCharacterBuilderService=pt(er);actionToken=0;dispose(){this.battleCharacterBuilderService.disposeAllShields()}createTeleportationEntrance(e,t,i){let n=Si(e);e.position.set(t.x,t.y+tn*n,t.z),e.scale.set(.01,.01,.01),e.visible=!0,pi.to(e.scale,{x:(i==="right"?-1:1)*n,y:n,z:n,duration:.4,ease:"back.out(1.4)"})}animateAction(e,t,i){this.actionToken+=1;let n=t.get(e.attackerId),r=t.get(e.defenderId);if(!n||!r)return;let a=n.mesh,o=r.mesh,l=n.side==="left";a.userData[nn]=!0,o.userData[nn]=!0,pi.killTweensOf(a.position),pi.killTweensOf(a.rotation),pi.killTweensOf(a.scale),pi.killTweensOf(o.position),pi.killTweensOf(o.rotation),pi.killTweensOf(o.scale),this.killLegTweens(a),this.killLegTweens(o),(()=>{let h=Si(a),u=Si(o),d=this.getCharacterBasePosition(a,n.character),f=this.getCharacterBasePosition(o,r.character),_=this.sceneService.getFacingRotationY(d,f),g=o.rotation.y,m=Mi({},d),p=l?-1:1,y=this.getSpiderAttackMotion(d,f,p,h,u),S=pi.timeline();return a.position.set(d.x,d.y,d.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*h,h,h),o.position.set(f.x,f.y,f.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*u,u,u),S.to(a.scale,{x:(l?1.18:-1.18)*h,y:.84*h,z:1.12*h,duration:.18,ease:"power2.inOut"}),S.to(a.position,{x:y.windupPosition.x,y:y.windupPosition.y,z:y.windupPosition.z,duration:.18,ease:"power2.inOut"},"<"),S.to(a.rotation,{x:-.18,y:_+y.windupYawOffset,z:.08*p,duration:.18,ease:"power2.inOut"},"<"),S.to(a.position,{x:y.impactPosition.x,y:y.impactPosition.y,z:y.impactPosition.z,duration:.14,ease:"power4.in",onComplete:()=>{let M=pi.timeline(),b=(l?-.6:.6)*u;M.to(o.scale,{x:b,y:.6*u,z:.75*u,duration:.06,ease:"power3.in"},"<"),M.to(o.scale,{x:(l?-1.1:1.1)*u,y:.85*u,z:1.05*u,duration:.12,ease:"power1.out"},"<"),M.to(o.scale,{x:(l?-.9:.9)*u,y:1.1*u,z:.9*u,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}),S.to(a.rotation,{x:.28,y:_+y.impactYawOffset,z:.16*p,duration:.14,ease:"power4.in"},"<"),S.to(a.scale,{x:(l?1.28:-1.28)*h,y:.76*h,z:1.24*h,duration:.12,ease:"power3.out"},"<"),S.to(a.position,{x:y.recoilPosition.x,y:y.recoilPosition.y,z:y.recoilPosition.z,duration:.12,ease:"sine.out"}),S.to(a.rotation,{x:.08,y:_-y.impactYawOffset*.35,z:-.1*p,duration:.12,ease:"sine.out"},"<"),S.to(a.position,{x:m.x,y:m.y+.04,z:m.z,duration:.28,ease:"power2.inOut"}),S.to(a.rotation,{x:.02,y:_,z:0,duration:.28,ease:"power2.inOut"},"<"),S.to(a.scale,{x:(l?1:-1)*h,y:h,z:h,duration:.24,ease:"power2.out"},"<"),S.to(a.position,{y:m.y,duration:.12,ease:"sine.out"}),S.to(a.rotation,{x:0,duration:.12,ease:"sine.out"},"<"),S.to(o.position,{x:f.x,y:f.y,z:f.z,duration:.5,ease:"power2.inOut"},"-=0.5"),S.to(o.rotation,{z:0,y:g,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),S.to(o.scale,{x:(l?-1:1)*u,y:u,z:u,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1"),S.call(()=>{let M=Si(a),b=Si(o),E=this.getCharacterBasePosition(a,n.character),A=this.getCharacterBasePosition(o,r.character);a.position.set(E.x,E.y,E.z),a.rotation.set(0,_,0),a.scale.set((l?1:-1)*M,M,M),o.position.set(A.x,A.y,A.z),o.rotation.set(0,g,0),o.scale.set((l?-1:1)*b,b,b),a.userData[nn]=!1,o.userData[nn]=!1,i?.()}),S})()}getSpiderAttackMotion(e,t,i,n,r){let a=new D(t.x-e.x,0,t.z-e.z);a.lengthSq()<1e-4?a.set(i<0?1:-1,0,0):a.normalize();let o=new D(-a.z,0,a.x).multiplyScalar(i),l=(n+r)/2,c=.3*l,h=1.28*r,u=1.85*l;return{windupPosition:{x:e.x-a.x*.28*n+o.x*.18*n,y:e.y-.08*n,z:e.z-a.z*.28*n+o.z*.18*n},impactPosition:{x:t.x-a.x*h+o.x*.12*l,y:t.y+c,z:t.z-a.z*h+o.z*.12*l},recoilPosition:{x:t.x-a.x*u-o.x*.08*l,y:e.y+.12*n,z:t.z-a.z*u-o.z*.08*l},windupYawOffset:.08*i,impactYawOffset:-.06*i}}getCharacterBasePosition(e,t){return go(e,{x:t.position.x,y:t.position.y+tn*Si(e),z:t.position.z})}killLegTweens(e){let t=e.userData.legs;if(t)for(let i of t)pi.killTweensOf(i.group.rotation)}static \u0275fac=function(t){return new(t||s)};static \u0275prov=Ni({token:s,factory:s.\u0275fac})};var wS=["base"],AS=["thumb"],CS=.15,_h=class s{ngZone=pt(Eo);movementService=pt(tr);sceneService=pt(en);baseRef=bh.required("base");thumbRef=bh.required("thumb");activeTouchId=null;baseCenterX=0;baseCenterY=0;maxOffset=36;isPortraitRotated=!1;disposeListeners=null;disposeMediaQuery=null;constructor(){wo(()=>{this.ngZone.runOutsideAngular(()=>{this.initPortraitDetection(),this.bindTouchListeners()})})}ngOnDestroy(){this.disposeListeners?.(),this.disposeMediaQuery?.(),this.movementService.clearJoystickDirection()}initPortraitDetection(){let e=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=e.matches;let t=i=>{this.isPortraitRotated=i.matches};e.addEventListener("change",t),this.disposeMediaQuery=()=>e.removeEventListener("change",t)}bindTouchListeners(){let e=this.baseRef().nativeElement,t=r=>{if(r.preventDefault(),this.activeTouchId!==null)return;let a=r.changedTouches[0];this.activeTouchId=a.identifier;let o=e.getBoundingClientRect(),l=this.thumbRef().nativeElement.getBoundingClientRect();this.baseCenterX=o.left+o.width/2,this.baseCenterY=o.top+o.height/2,this.maxOffset=o.width/2-l.width/2,this.thumbRef().nativeElement.classList.add("active"),this.sceneService.joystickActive=!0,this.updateFromTouch(a.clientX,a.clientY)},i=r=>{r.preventDefault();let a=this.findActiveTouch(r.changedTouches);a&&this.updateFromTouch(a.clientX,a.clientY)},n=r=>{this.findActiveTouch(r.changedTouches)&&this.resetThumb()};e.addEventListener("touchstart",t,{passive:!1}),e.addEventListener("touchmove",i,{passive:!1}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),this.disposeListeners=()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchmove",i),e.removeEventListener("touchend",n),e.removeEventListener("touchcancel",n)}}findActiveTouch(e){for(let t of Array.from(e))if(t.identifier===this.activeTouchId)return t;return null}updateFromTouch(e,t){let i=e-this.baseCenterX,n=t-this.baseCenterY,r=i,a=n;this.isPortraitRotated&&(r=n,a=-i);let o=Math.hypot(r,a);o>this.maxOffset&&(r=r/o*this.maxOffset,a=a/o*this.maxOffset),this.thumbRef().nativeElement.style.transform=`translate(calc(-50% + ${r}px), calc(-50% + ${a}px))`;let l=r/this.maxOffset,c=a/this.maxOffset;Math.hypot(l,c)<CS?this.movementService.clearJoystickDirection():this.movementService.setJoystickDirection(l,-c)}resetThumb(){this.activeTouchId=null,this.thumbRef().nativeElement.style.transform="translate(-50%, -50%)",this.thumbRef().nativeElement.classList.remove("active"),this.sceneService.joystickActive=!1,this.movementService.clearJoystickDirection()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=rn({type:s,selectors:[["app-battle-joystick"]],viewQuery:function(t,i){t&1&&(Sh(i.baseRef,wS,5),Sh(i.thumbRef,AS,5)),t&2&&$d(2)},decls:4,vars:0,consts:[["base",""],["thumb",""],[1,"joystick-base"],[1,"joystick-thumb"]],template:function(t,i){t&1&&(Rt(0,"div",2,0),bi(2,"div",3,1),Ft())},styles:["[_nghost-%COMP%]{display:none;position:absolute;bottom:24px;left:24px;z-index:10;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (pointer: coarse){[_nghost-%COMP%]{display:block}}.joystick-base[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;background:#070c1199;border:1.5px solid rgba(255,255,255,.15);box-shadow:0 4px 16px #0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);position:relative}.joystick-thumb[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#ffffff2e;border:1.5px solid rgba(255,255,255,.3);box-shadow:0 2px 8px #0003;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform}.joystick-thumb.active[_ngcontent-%COMP%]{background:#ffffff4d;border-color:#ffffff73}"],changeDetection:0})};var RS=["battleCanvas"];function PS(s,e){s&1&&(So(),bi(0,"circle",7))}function IS(s,e){s&1&&(So(),bi(0,"line",8))}function DS(s,e){if(s&1){let t=ar();bi(0,"app-battle-joystick"),Rt(1,"button",4),Mn("click",function(){nr(t);let n=bn();return sr(n.toggleThreatIndicators())}),So(),Rt(2,"svg",5),bi(3,"circle",6),Hn(4,PS,1,0,":svg:circle",7)(5,IS,1,0,":svg:line",8),Ft()()}if(s&2){let t=bn();Nt(),jd("threat-toggle--off",!t.showThreatIndicators()),Nt(3),Wn(t.showThreatIndicators()?4:5)}}function LS(s,e){s&1&&(Rt(0,"div",2),bi(1,"div",9),Ft())}function OS(s,e){if(s&1&&(Rt(0,"div",3)(1,"div",10),or(2),Ft(),Rt(3,"div",11)(4,"span"),or(5),Ft(),Rt(6,"span"),or(7),Sn(8,"titlecase"),Ft()()()),s&2){let t=bn();Nt(2),Th("",t.performanceStats().fps," FPS"),Nt(3),Th("",t.performanceStats().frameTimeMs," ms"),Nt(2),Po(Tn(8,3,t.performanceStats().qualityLevel))}}var NS={fps:60,frameTimeMs:16.67,qualityLevel:"high",pixelRatio:1},dg="battle_threat_indicators",xo=class s{canvasRef;playerMesh=null;enemyMeshes=new Map;destroy$=new bo;removePerformanceListener=null;battleService=pt(cr);ngZone=pt(Eo);cdr=pt(ef);sceneService=pt(en);characterBuilder=pt(er);movementService=pt(tr);vfxService=pt(_o);hasCombatStarted=!1;animatingCharacterIds=new Set;resolvedOverlaps=new Set;removeOverlapListener=null;player=null;enemies=[];performanceStats=rr(NS);isBattleActive=rr(!1);isLoading=rr(!1);showFpsBadge=rr(!1);showThreatIndicators=rr(localStorage.getItem(dg)!=="false");fpsKeysHeld=new Set;onKeyDown=e=>{if(e.code==="KeyE"&&!e.ctrlKey&&!e.altKey&&!e.metaKey){this.toggleThreatIndicators();return}this.fpsKeysHeld.add(e.key.toLowerCase()),this.fpsKeysHeld.has("f")&&this.fpsKeysHeld.has("p")&&this.fpsKeysHeld.has("s")&&(this.showFpsBadge.update(t=>!t),this.cdr.detectChanges(),this.fpsKeysHeld.clear())};onKeyUp=e=>{this.fpsKeysHeld.delete(e.key.toLowerCase())};toggleThreatIndicators(){this.showThreatIndicators.update(e=>!e),localStorage.setItem(dg,String(this.showThreatIndicators())),this.syncThreatIndicators()}constructor(){wo(()=>{this.ngZone.runOutsideAngular(()=>{this.sceneService.init(this.canvasRef.nativeElement),this.movementService.init(this.canvasRef.nativeElement),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)})})}ngOnInit(){this.removePerformanceListener=this.sceneService.addPerformanceListener(e=>{this.performanceStats.set(e),this.cdr.detectChanges()}),this.ngZone.runOutsideAngular(()=>{this.battleService.battleState$.pipe(ha(this.destroy$)).subscribe(e=>{if(this.isBattleActive.set(e!==null),this.cdr.detectChanges(),!e){this.hasCombatStarted=!1,this.resolvedOverlaps.clear(),this.removeOverlapListener?.(),this.removeOverlapListener=null,this.movementService.clearIdleWanderCharacter();return}this.hasCombatStarted=e.actions.length>0,this.player=e.team1[0]||null,this.enemies=e.team2,this.applyDeathVisibility(),this.applyReviveSync(),!this.playerMesh&&this.enemyMeshes.size===0&&this.createCharacters(),this.syncCharacterScales(),this.syncThreatIndicators(),this.syncEnemyIdleWander()}),this.battleService.action$.pipe(ha(this.destroy$)).subscribe(e=>{e&&(this.hasCombatStarted=!0,this.movementService.clearIdleWanderCharacter(),this.animatingCharacterIds.add(e.attackerId),this.animatingCharacterIds.add(e.defenderId),this.vfxService.animateAction(e,this.buildParticipantsMap(),()=>{this.animatingCharacterIds.delete(e.attackerId),this.animatingCharacterIds.delete(e.defenderId),this.applyDeathVisibility(),this.syncEnemyIdleWander(),this.ngZone.run(()=>{this.battleService.processPostAnimationRevives(),this.battleService.finalizeIfComplete()})}))})})}ngOnDestroy(){this.removeOverlapListener?.(),this.removeOverlapListener=null,this.destroy$.next(),this.destroy$.complete(),this.removePerformanceListener?.(),this.removePerformanceListener=null,document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.movementService.dispose(),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.removeOverlapListener?.(),this.removeOverlapListener=null,this.resolvedOverlaps.clear(),this.characterBuilder.disposeAllThreatIndicators(),this.playerMesh&&(this.movementService.unregisterCharacterMesh(this.playerMesh),this.characterBuilder.disposeCharacterMesh(this.playerMesh,this.sceneService.scene),this.playerMesh=null);for(let[,e]of this.enemyMeshes)this.movementService.unregisterCharacterMesh(e),this.characterBuilder.disposeCharacterMesh(e,this.sceneService.scene);this.enemyMeshes.clear(),this.movementService.setControlledCharacter(null,null,"left"),this.movementService.clearIdleWanderCharacter(),this.player=null,this.enemies=[]}createCharacters(){if(!this.player||this.enemies.length===0)return;this.isLoading.set(!0),this.cdr.detectChanges();let e=[],{mesh:t,ready:i}=this.characterBuilder.createCharacterMesh(this.player.color,this.player.position);t.userData[lr]=an(this.player.size),t.visible=!1,this.sceneService.scene.add(t),this.playerMesh=t,e.push(i);for(let n of this.enemies){let{mesh:r,ready:a}=this.characterBuilder.createCharacterMesh(n.color,n.position);r.userData[lr]=an(n.size),r.visible=!1,this.sceneService.scene.add(r),this.enemyMeshes.set(n.id,r),e.push(a)}Promise.all(e).then(()=>{if(this.playerMesh){this.playerMesh.visible=!0;for(let[,n]of this.enemyMeshes)n.visible=!0;this.sceneService.compileScene(),this.playerMesh.visible=!1;for(let[,n]of this.enemyMeshes)n.visible=!1;this.isLoading.set(!1),this.cdr.detectChanges(),this.movementService.registerCharacterMesh(this.playerMesh),this.movementService.setControlledCharacter(this.playerMesh,this.player.position,"left"),this.vfxService.createTeleportationEntrance(this.playerMesh,this.player.position,"left");for(let n of this.enemies){let r=this.enemyMeshes.get(n.id);r&&(this.movementService.registerCharacterMesh(r),this.vfxService.createTeleportationEntrance(r,n.position,"right"))}this.updateCameraDistanceScale(),this.syncEnemyIdleWander(),this.startShieldOverlapDetection()}})}syncCharacterScales(){this.player&&this.playerMesh&&(this.animateScaleChange(this.playerMesh,this.player),this.updateCameraDistanceScale());for(let e of this.enemies){let t=this.enemyMeshes.get(e.id);t&&this.animateScaleChange(t,e)}}syncThreatIndicators(){if(!this.player)return;let e=this.player.size,t=this.showThreatIndicators();if(this.playerMesh){t?(this.playerMesh.userData[No]=an(22),this.playerMesh.userData[Fo]=an(1)):(delete this.playerMesh.userData[No],delete this.playerMesh.userData[Fo]);let i=Si(this.playerMesh),r=$t(this.playerMesh)?.side==="right"?-1:1;this.playerMesh.scale.set(r*i,i,i),this.updateMeshGroundOffset(this.playerMesh,this.player),this.updateCameraDistanceScale()}for(let i of this.enemies){let n=this.enemyMeshes.get(i.id);n&&(t&&i.isAlive&&i.size<=e?(this.characterBuilder.removeThreatIndicator(n),this.characterBuilder.showThreatIndicator(n)):this.characterBuilder.removeThreatIndicator(n))}}animateScaleChange(e,t){let i=an(t.size);if(e.userData[lr]===i)return;let r=pi.timeline();r.call(()=>{this.characterBuilder.swapLegMaterial(e,!0)}),r.call(()=>{e.userData[lr]=i,this.updateMeshGroundOffset(e,t);let o=$t(e)?.side==="right"?-1:1;e.scale.set(o*i,i,i)},[],"+=0.15"),r.call(()=>{this.characterBuilder.swapLegMaterial(e,!1)},[],"+=0.15")}updateMeshGroundOffset(e,t){let i=t.position.y+tn*Si(e);e.position.y=i;let n=$t(e);n&&(n.basePosition.y=i)}updateCameraDistanceScale(){this.playerMesh?this.sceneService.setCameraDistanceScale(Si(this.playerMesh)):this.player&&this.sceneService.setCameraDistanceScale(an(this.player.size))}syncEnemyIdleWander(){let e=new Set;for(let t of this.enemies){if(!t.isAlive||this.animatingCharacterIds.has(t.id))continue;let i=this.enemyMeshes.get(t.id);i&&e.add(i)}for(let[,t]of this.enemyMeshes)e.has(t)||this.movementService.removeIdleWanderCharacter(t);for(let t of this.enemies){if(!t.isAlive||this.animatingCharacterIds.has(t.id))continue;let i=this.enemyMeshes.get(t.id);i&&(this.movementService.hasIdleWanderCharacter(i)||this.movementService.addIdleWanderCharacter(i,t.position,"right"))}}startShieldOverlapDetection(){this.removeOverlapListener?.(),this.removeOverlapListener=this.sceneService.addFrameListener(()=>{if(this.playerMesh&&this.player?.isAlive)for(let e of this.enemies){if(!e.isAlive||this.resolvedOverlaps.has(e.id))continue;let t=this.enemyMeshes.get(e.id);if(!t)continue;let i=this.showThreatIndicators()?an(1):void 0;this.characterBuilder.doShieldsOverlap(this.playerMesh,t,i)&&this.ngZone.run(()=>{let n=this.showThreatIndicators()?1:void 0;this.battleService.resolveShieldOverlap(e.id,n)&&this.resolvedOverlaps.add(e.id)})}for(let e=0;e<this.enemies.length;e++){let t=this.enemies[e];if(!t.isAlive)continue;let i=this.enemyMeshes.get(t.id);if(i)for(let n=e+1;n<this.enemies.length;n++){let r=this.enemies[n];if(!r.isAlive)continue;let a=`${t.id}-${r.id}`;if(this.resolvedOverlaps.has(a))continue;let o=this.enemyMeshes.get(r.id);o&&this.characterBuilder.doShieldsOverlap(i,o)&&this.ngZone.run(()=>{this.battleService.resolveEnemyShieldOverlap(t.id,r.id)&&this.resolvedOverlaps.add(a)})}}})}applyReviveSync(){for(let e of this.enemies){if(!e.isAlive)continue;let t=this.enemyMeshes.get(e.id);if(t&&!t.visible&&!this.animatingCharacterIds.has(e.id)){t.position.set(e.position.x,e.position.y+tn*Mt(t),e.position.z);let i=$t(t);i&&(i.basePosition.x=t.position.x,i.basePosition.y=t.position.y,i.basePosition.z=t.position.z),t.visible=!0,this.resolvedOverlaps.delete(e.id)}}}applyDeathVisibility(){this.player&&!this.player.isAlive&&this.playerMesh&&!this.animatingCharacterIds.has(this.player.id)&&(this.playerMesh.visible=!1);for(let e of this.enemies){let t=this.enemyMeshes.get(e.id);t&&!e.isAlive&&!this.animatingCharacterIds.has(e.id)&&(t.visible=!1)}}buildParticipantsMap(){let e=new Map;this.player&&this.playerMesh&&e.set(this.player.id,{character:this.player,mesh:this.playerMesh,side:"left"});for(let t of this.enemies){let i=this.enemyMeshes.get(t.id);i&&e.set(t.id,{character:t,mesh:i,side:"right"})}return e}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=rn({type:s,selectors:[["app-battle-canvas"]],viewQuery:function(t,i){if(t&1&&Ao(RS,7),t&2){let n;Co(n=Ro())&&(i.canvasRef=n.first)}},features:[Qd([en,er,oa,tr,_o])],decls:5,vars:3,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"],[1,"loading-overlay"],[1,"fps-badge"],["type","button","aria-label","Toggle threat indicators",1,"threat-toggle",3,"click"],["viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg"],["cx","12","cy","12","r","9","stroke","currentColor","stroke-width","2"],["cx","12","cy","12","r","4","fill","currentColor"],["x1","6","y1","6","x2","18","y2","18","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"loading-spinner"],[1,"fps-badge__primary"],[1,"fps-badge__secondary"]],template:function(t,i){t&1&&(bi(0,"canvas",1,0),Hn(2,DS,6,3)(3,LS,2,0,"div",2)(4,OS,9,5,"div",3)),t&2&&(Nt(2),Wn(i.isBattleActive()?2:-1),Nt(),Wn(i.isLoading()?3:-1),Nt(),Wn(i.isBattleActive()&&i.showFpsBadge()?4:-1))},dependencies:[Xn,rf,_h],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}.fps-badge[_ngcontent-%COMP%]{position:absolute;top:16px;left:50%;transform:translate(-50%);z-index:5;min-width:126px;padding:8px 14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:#070c11b8;box-shadow:0 10px 24px #00000047;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f5fbff;text-align:center;pointer-events:none}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;letter-spacing:.08em;line-height:1}.fps-badge__secondary[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:6px;color:#f5fbffc7;font-size:.6875rem;font-weight:600;letter-spacing:.06em;line-height:1;text-transform:uppercase}@media (max-width: 580px){.fps-badge[_ngcontent-%COMP%]{top:10px;min-width:112px;padding:7px 12px}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.8125rem}.fps-badge__secondary[_ngcontent-%COMP%]{gap:8px;margin-top:5px;font-size:.625rem}}.loading-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:10;pointer-events:none}.loading-spinner[_ngcontent-%COMP%]{width:48px;height:48px;border:3px solid rgba(255,255,255,.15);border-top-color:#fffc;border-radius:50%;animation:_ngcontent-%COMP%_spin .8s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.threat-toggle[_ngcontent-%COMP%]{display:none;position:absolute;bottom:24px;right:24px;z-index:10;width:48px;height:48px;padding:0;border:1px solid rgba(0,255,136,.4);border-radius:50%;background:#070c1199;box-shadow:0 4px 16px #0000004d;color:#0f8;cursor:pointer;touch-action:manipulation;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.threat-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px}.threat-toggle--off[_ngcontent-%COMP%]{color:#fff6;border-color:#ffffff26}@media (pointer: coarse){.threat-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}"],changeDetection:0})};var ne={RAT:{id:"char1",name:"Shelob",size:1,color:"#34f5dd"},CAT:{id:"char2",name:"Aragog",size:1,color:"#34f5dd"},BEAR:{id:"char3",name:"Anansi",size:2,color:"#34f5dd"},HORSE:{id:"char4",name:"Arachne",size:3,color:"#34f5dd"},GIRAFFE:{id:"char5",name:"Ungoliant",size:4,color:"#34f5dd"},WOLF:{id:"char6",name:"Lolth",size:5,color:"#34f5dd"},EAGLE:{id:"char7",name:"Tsuchigumo",size:6,color:"#34f5dd"},SERPENT:{id:"char8",name:"Jor\u014Dgumo",size:7,color:"#34f5dd"},A:{id:"char9",name:"Shelob",size:8,color:"#34f5dd"},B:{id:"char10",name:"Aragog",size:9,color:"#34f5dd"},C:{id:"char11",name:"Anansi",size:10,color:"#34f5dd"},D:{id:"char12",name:"Arachne",size:11,color:"#34f5dd"},E:{id:"char13",name:"Ungoliant",size:12,color:"#34f5dd"},F:{id:"char14",name:"Lolth",size:13,color:"#34f5dd"},G:{id:"char15",name:"Tsuchigumo",size:14,color:"#34f5dd"},H:{id:"char16",name:"Jor\u014Dgumo",size:3,color:"#34f5dd"},I:{id:"char17",name:"Atlach-Nacha",size:4,color:"#34f5dd"},J:{id:"char18",name:"Kumonga",size:5,color:"#34f5dd"},K:{id:"char19",name:"Uttu",size:6,color:"#34f5dd"},L:{id:"char20",name:"Iktomi",size:1,color:"#34f5dd"},M:{id:"char21",name:"Nareau",size:1,color:"#34f5dd"},N:{id:"char22",name:"Aranea",size:1,color:"#34f5dd"},O:{id:"char23",name:"Aranea",size:9,color:"#34f5dd"},P:{id:"char24",name:"Aranea",size:10,color:"#34f5dd"},Q:{id:"char25",name:"Aranea",size:11,color:"#34f5dd"},R:{id:"char26",name:"Aranea",size:12,color:"#34f5dd"},S:{id:"char27",name:"Aranea",size:13,color:"#34f5dd"},T:{id:"char28",name:"Aranea",size:14,color:"#34f5dd"},U:{id:"char29",name:"Shelob",size:8,color:"#34f5dd"},V:{id:"char30",name:"Aragog",size:9,color:"#34f5dd"},W:{id:"char31",name:"Anansi",size:10,color:"#34f5dd"},X:{id:"char32",name:"Arachne",size:11,color:"#34f5dd"},Y:{id:"char33",name:"Ungoliant",size:12,color:"#34f5dd"},Z:{id:"char34",name:"Lolth",size:13,color:"#34f5dd"},AA:{id:"char35",name:"Tsuchigumo",size:14,color:"#34f5dd"},AB:{id:"char36",name:"Jor\u014Dgumo",size:8,color:"#34f5dd"},AC:{id:"char37",name:"Atlach-Nacha",size:9,color:"#34f5dd"},AD:{id:"char38",name:"Kumonga",size:20,color:"#34f5dd"},AE:{id:"char39",name:"Uttu",size:11,color:"#34f5dd"},AF:{id:"char40",name:"Iktomi",size:12,color:"#34f5dd"},AG:{id:"char41",name:"Nareau",size:13,color:"#34f5dd"},AH:{id:"char42",name:"Aranea",size:14,color:"#34f5dd"},AI:{id:"char43",name:"Shelob",size:15,color:"#34f5dd"},AJ:{id:"char44",name:"Aragog",size:15,color:"#34f5dd"},AK:{id:"char45",name:"Anansi",size:15,color:"#34f5dd"},AL:{id:"char46",name:"Arachne",size:16,color:"#34f5dd"},AM:{id:"char47",name:"Ungoliant",size:16,color:"#34f5dd"},AN:{id:"char48",name:"Lolth",size:16,color:"#34f5dd"},AO:{id:"char49",name:"Tsuchigumo",size:17,color:"#34f5dd"},AP:{id:"char50",name:"Jor\u014Dgumo",size:17,color:"#34f5dd"},AQ:{id:"char51",name:"Atlach-Nacha",size:17,color:"#34f5dd"},AR:{id:"char52",name:"Kumonga",size:17,color:"#34f5dd"},AS:{id:"char53",name:"Uttu",size:8,color:"#34f5dd"},AT:{id:"char54",name:"Iktomi",size:9,color:"#34f5dd"},AU:{id:"char55",name:"Nareau",size:10,color:"#34f5dd"},AV:{id:"char56",name:"Aranea",size:8,color:"#34f5dd"},AW:{id:"char57",name:"Shelob",size:11,color:"#34f5dd"},AX:{id:"char58",name:"Aragog",size:12,color:"#34f5dd"},AY:{id:"char59",name:"Anansi",size:13,color:"#34f5dd"},AZ:{id:"char60",name:"Arachne",size:14,color:"#34f5dd"},BA:{id:"char61",name:"Ungoliant",size:15,color:"#34f5dd"},BB:{id:"char62",name:"Lolth",size:16,color:"#34f5dd"},BC:{id:"char63",name:"Tsuchigumo",size:1,color:"#34f5dd"},BD:{id:"char64",name:"Jor\u014Dgumo",size:2,color:"#34f5dd"},BE:{id:"char65",name:"Atlach-Nacha",size:3,color:"#34f5dd"},BF:{id:"char66",name:"Kumonga",size:4,color:"#34f5dd"},BG:{id:"char67",name:"Uttu",size:5,color:"#34f5dd"},BH:{id:"char68",name:"Iktomi",size:1,color:"#34f5dd"},BI:{id:"char69",name:"Nareau",size:2,color:"#34f5dd"},BJ:{id:"char70",name:"Aranea",size:3,color:"#34f5dd"},BK:{id:"char71",name:"Shelob",size:4,color:"#34f5dd"},BL:{id:"char72",name:"Aragog",size:5,color:"#34f5dd"},BM:{id:"char73",name:"Anansi",size:6,color:"#34f5dd"},BN:{id:"char74",name:"Arachne",size:7,color:"#34f5dd"},BO:{id:"char75",name:"Ungoliant",size:8,color:"#34f5dd"},BP:{id:"char76",name:"Lolth",size:1,color:"#34f5dd"},BQ:{id:"char77",name:"Tsuchigumo",size:2,color:"#34f5dd"},BR:{id:"char78",name:"Jor\u014Dgumo",size:3,color:"#34f5dd"}};function FS(s,e){if(s&1){let t=ar();Rt(0,"app-victory-banner",4),Mn("terminateBattle",function(){nr(t);let n=bn(2);return sr(n.resetAndTerminateBattle())}),Ft()}if(s&2){let t=bn();Gn("winner",t.winner)}}function US(s,e){if(s&1&&Hn(0,FS,1,1,"app-victory-banner",3),s&2){let t=e;Wn(t.isComplete&&t.winner?0:-1)}}var fg=class s{battleCanvas;destroy$=new bo;battleService=pt(cr);router=pt(af);battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(Jd(e=>e!==null));player=null;enemies=[];ngOnInit(){this.lockOrientation(),this.battleService.battleState$.pipe(ha(this.destroy$)).subscribe(e=>this.updateCharacters(e))}ngOnDestroy(){this.unlockOrientation(),this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){this.battleService.startBattle(ne.RAT,[ne.GIRAFFE,ne.HORSE,ne.CAT,ne.BEAR,ne.WOLF,ne.EAGLE,ne.SERPENT,ne.A,ne.B,ne.C,ne.D,ne.E,ne.F,ne.G,ne.H,ne.I,ne.J,ne.K,ne.L,ne.M,ne.N,ne.O,ne.P,ne.Q,ne.R,ne.S,ne.T,ne.U,ne.V,ne.W,ne.X,ne.Y,ne.Z,ne.AA,ne.AB,ne.AC,ne.AD,ne.AE,ne.AF,ne.AG,ne.AH,ne.AI,ne.AJ,ne.AK,ne.AL,ne.AM,ne.AN,ne.AO,ne.AP,ne.AQ,ne.AR,ne.AS,ne.AT,ne.AU,ne.AV,ne.AW,ne.AX,ne.AY,ne.AZ,ne.BA,ne.BB,ne.BC,ne.BD,ne.BE,ne.BF,ne.BG,ne.BH,ne.BI,ne.BJ,ne.BK,ne.BL,ne.BM,ne.BN,ne.BO,ne.BP,ne.BQ,ne.BR])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.player=null,this.enemies=[],this.router.navigate(["/"])}lockOrientation(){window.innerWidth<=768&&screen.orientation?.lock?.("landscape")?.catch?.(()=>{})}unlockOrientation(){screen.orientation?.unlock?.()}updateCharacters(e){if(!e){this.player=null,this.enemies=[];return}this.player=e.team1[0]||null,this.enemies=e.team2}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=rn({type:s,selectors:[["app-battle"]],viewQuery:function(t,i){if(t&1&&Ao(xo,5),t&2){let n;Co(n=Ro())&&(i.battleCanvas=n.first)}},decls:7,vars:6,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","isBattleActive"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(t,i){if(t&1&&(Rt(0,"div",0)(1,"div",1),bi(2,"app-battle-canvas"),Hn(3,US,1,1),Sn(4,"async"),Ft(),Rt(5,"app-battle-controls",2),Sn(6,"async"),Mn("startBattle",function(){return i.startBattle()}),Ft()()),t&2){let n,r;Nt(3),Wn((n=Tn(4,2,i.battleState$))?3:-1,n),Nt(2),Gn("isBattleActive",(r=Tn(6,4,i.isBattleActive$))!==null&&r!==void 0?r:!1)}},dependencies:[Xn,sf,Bo,ko,xo],styles:[".canvas-wrapper[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;padding:4px;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 60px #34f5dd4d,inset 0 0 40px #34f5dd1a}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:8px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;z-index:10}@media (max-width: 580px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{gap:10px;height:100%}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%]{padding:8px;gap:8px}.battle-overlay[_ngcontent-%COMP%]{gap:8px}}@media (max-width: 768px) and (orientation: portrait){[_nghost-%COMP%]{position:fixed;top:0;left:100dvw;width:100dvh;height:100dvw;transform:rotate(90deg);transform-origin:top left;overflow:hidden;z-index:1000}[_nghost-%COMP%]   .battle-arena[_ngcontent-%COMP%]{height:100dvw}}"]})};export{fg as BattleComponent};
