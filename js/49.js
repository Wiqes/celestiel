import{f as hf}from"./7.js";import{e as Fo,f as Oo}from"./22.js";import"./40.js";import"./46.js";import{c as Do,d as Lo}from"./12.js";import{a as af,m as of,s as lf,t as cf,v as Wi}from"./50.js";import{$a as wh,$b as nf,Cb as oe,Da as Ao,Db as le,Eb as xi,Ib as ua,Mb as Hi,Nb as Gi,P as ca,Rb as Ro,Sb as Po,T as we,Ta as $t,Tb as Io,Vb as Ah,Wb as ef,Yb as tn,Z as Jt,Zb as Is,_b as Ch,a as li,b as lr,dc as sf,e as Mo,fa as Cn,fb as _i,ga as Rn,k as So,kb as Ps,kc as $e,l as To,lc as Qe,oa as ha,pa as Eo,rc as rf,s as $d,sb as ke,tb as Qd,ua as wo,ub as Co,wb as tf,yb as cr}from"./31.js";var No=class r{initiativeRandomMax=10;calculateInitiative(t){return t.speed+Math.floor(Math.random()*(this.initiativeRandomMax+1))}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac,providedIn:"root"})};var Uo=class r{baseHitChance=75;hitChanceSpeedFactor=.5;minHitChance=5;maxHitChance=100;critBaseChance=5;critSpeedFactor=.2;bearRageThreshold=.5;bearRageAttackFactor=.05;bearRageDefenseFactor=.3;horseRushSpeedFactor=.01;defenseMultiplier=.6;minDamage=1;calculateHitChance(t,e){let i=this.baseHitChance+(t.speed-e.speed)*this.hitChanceSpeedFactor;return t.debuffEffect&&(i-=t.debuffEffect.accuracyReduction),Math.max(this.minHitChance,Math.min(this.maxHitChance,i))}calculateBaseDamage(t,e){let i=t.attack;if(t.debuffEffect&&(i-=t.debuffEffect.attackReduction),t.race==="bear"&&t.health<t.maxHealth*this.bearRageThreshold){let o=(t.maxHealth-t.health)*this.bearRageAttackFactor;i+=o}let n=1;t.race==="horse"&&t.turnCount===0&&(n=.5+t.speed*this.horseRushSpeedFactor);let s=e.defense;e.race==="bear"&&e.health<e.maxHealth*this.bearRageThreshold&&(s+=e.defense*this.bearRageDefenseFactor);let a=i*n-s*this.defenseMultiplier;return Math.max(this.minDamage,a)}calculateCritChance(t){return this.critBaseChance+t.speed*this.critSpeedFactor}isCriticalHit(t){return Math.random()*100<t}isHit(t){return Math.random()*100<=t}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac,providedIn:"root"})};var Jn=class r{poisonDeathDelayMs=1e3;poisonTickIntervalMs=3e3;poisonTickCount=4;poisonTimers=new Map;applyEndOfTurnEffects(t){!t||t.isComplete}startAutonomousPoisonTicks(t,e,i,n){this.clearPoisonTimersForCharacter(t.id);let s=e.team1.some(o=>o.id===t.id),a=[];for(let o=0;o<this.poisonTickCount;o++){let l=setTimeout(()=>{this.applyPoisonDamage(t,e,i,s,n)},(o+1)*this.poisonTickIntervalMs);a.push(l)}this.poisonTimers.set(t.id,a)}clearPoisonTimersForCharacter(t){let e=this.poisonTimers.get(t);e&&(e.forEach(i=>clearTimeout(i)),this.poisonTimers.delete(t))}clearAllPoisonTimers(){this.poisonTimers.forEach(t=>t.forEach(e=>clearTimeout(e))),this.poisonTimers.clear()}applyPoisonDamage(t,e,i,n,s){if(!t||!t.poisonEffect||!t.isAlive||e.isComplete)return;let a=t.poisonEffect.damagePerTurn;t.health=Math.max(0,t.health-a),t.isAlive=t.health>0,this.emitAction(e,i,{attackerId:"",defenderId:t.id,damage:a,type:"poison",timestamp:Date.now(),message:`${t.name} takes poison damage!`}),t.poisonEffect.turnsRemaining--,t.poisonEffect.turnsRemaining<=0&&(delete t.poisonEffect,this.clearPoisonTimersForCharacter(t.id)),t.isAlive||(this.clearPoisonTimersForCharacter(t.id),setTimeout(()=>{s(!n)},this.poisonDeathDelayMs))}emitAction(t,e,i){t.actions.push(i),e.next(i)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac,providedIn:"root"})};var Bo=class r{effectsService=Jt(Jn);poisonBaseChance=20;poisonFocusFactor=.5;poisonSpeedFactor=.3;poisonAttackFactor=.3;poisonFocusDamageFactor=.5;poisonTurns=4;comboBaseChance=25;comboSpeedFactor=.6;comboDamageFactor=.6;comboDamageDelayMs=500;debuffAttackFactor=.4;debuffAccuracyFactor=.3;applyRacialSkills(t,e,i,n,s){switch(t.race){case"rat":this.applyPoisonBite(t,e,i,n,s);break;case"cat":this.applyComboStrike(t,e,i,n);break;case"giraffe":this.applyDistanceControl(t,e);break}}applyForcedPoison(t,e,i,n,s){let a=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(a)},this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`}),this.effectsService.startAutonomousPoisonTicks(e,i,n,s)}applyForcedCombo(t,e,i,n,s){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0,s?.()},this.comboDamageDelayMs)}applyPoisonBite(t,e,i,n,s){let a=this.poisonBaseChance+t.focus*this.poisonFocusFactor+t.speed*this.poisonSpeedFactor;if(Math.random()*100<a){let o=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(o)},this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`}),this.effectsService.startAutonomousPoisonTicks(e,i,n,s)}}applyComboStrike(t,e,i,n){let s=this.comboBaseChance+t.speed*this.comboSpeedFactor;if(Math.random()*100<s){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0},this.comboDamageDelayMs)}}applyDistanceControl(t,e){let i=t.focus*this.debuffAttackFactor,n=t.focus*this.debuffAccuracyFactor;e.debuffEffect={attackReduction:i,accuracyReduction:n}}emitAction(t,e,i){t.actions.push(i),e.next(i)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac,providedIn:"root"})};var zo=class r{initiativeService=Jt(No);damageService=Jt(Uo);racialSkillsService=Jt(Bo);effectsService=Jt(Jn);counterAttackDelayMs=2e3;effectsDelayMs=500;damageApplyDelayMs=350;deathNotificationDelayMs=1500;getCounterAttackDelayMs(){return this.counterAttackDelayMs}getEffectsDelayMs(){return this.effectsDelayMs}getTurnOrder(t,e){let i=this.initiativeService.calculateInitiative(t),n=this.initiativeService.calculateInitiative(e),s=i>=n;return{firstAttacker:s?t:e,firstDefender:s?e:t,firstAttackerIsTeam1:s}}executeTurn(t,e,i,n){if(!t||t.isComplete)return;let s=t.team1[t.activeTeam1Index],a=t.team2[t.activeTeam2Index];if(!s||!a){i();return}let{firstAttacker:o,firstDefender:l}=this.getTurnOrder(s,a);this.executeAutoAttack(o,l,t,e,n),setTimeout(()=>{t.isComplete||(l.isAlive&&this.executeAutoAttack(l,o,t,e,n),setTimeout(()=>{this.effectsService.applyEndOfTurnEffects(t)},this.effectsDelayMs))},this.counterAttackDelayMs)}executeAutoAttack(t,e,i,n,s){this.executeAutoAttackInternal(t,e,i,n,s)}executePlayerAttack(t,e,i,n,s,a){if(t.turnCount++,a==="shield"){t.shieldEffect={blocksNextAttack:!0},this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:0,type:"shield",timestamp:Date.now(),message:`${t.name} raised a shield!`});return}if(this.consumeShield(e)){this.executeMiss(t,e,i,n);return}if(a==="miss"){this.executeMiss(t,e,i,n);return}if(a==="poison"){this.racialSkillsService.applyForcedPoison(t,e,i,n,s);return}if(a==="combo"){this.racialSkillsService.applyForcedCombo(t,e,i,n,()=>this.handleDeathCallback(t,e,i,s));return}let o=this.damageService.calculateBaseDamage(t,e),l=Math.floor(a==="critical"?o*1.5:o);this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:l,type:a,timestamp:Date.now()}),this.applyDamageWithDelay(t,e,i,s,l)}applyEndOfTurnEffects(t){this.effectsService.applyEndOfTurnEffects(t)}executeAutoAttackInternal(t,e,i,n,s){if(t.turnCount++,this.consumeShield(e)){this.executeMiss(t,e,i,n);return}let a=this.damageService.calculateHitChance(t,e);this.damageService.isHit(a);let o=this.damageService.calculateBaseDamage(t,e),l=this.damageService.calculateCritChance(t),c=this.damageService.isCriticalHit(l);c&&(o*=1.5),o=Math.floor(o),this.racialSkillsService.applyRacialSkills(t,e,i,n,s),this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:o,type:c?"critical":"attack",timestamp:Date.now()}),this.applyDamageWithDelay(t,e,i,s,o)}executeMiss(t,e,i,n){this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:0,type:"miss",timestamp:Date.now(),message:`${t.name} missed!`})}executeSkipAttack(t,e,i,n){this.emitAction(i,n,{attackerId:t.id,defenderId:e.id,damage:0,type:"skip",timestamp:Date.now(),message:`${t.name} skipped their turn!`})}consumeShield(t){return t.shieldEffect?.blocksNextAttack?(delete t.shieldEffect,!0):!1}emitAction(t,e,i){t.actions.push(i),e.next(i)}applyDamageWithDelay(t,e,i,n,s){setTimeout(()=>{i.isComplete||(e.health=Math.max(0,e.health-s),e.isAlive=e.health>0,e.isAlive||setTimeout(()=>{let a=t===i.team1[i.activeTeam1Index];n(a)},this.deathNotificationDelayMs))},this.damageApplyDelayMs)}handleDeathCallback(t,e,i,n){e.isAlive||setTimeout(()=>{let s=t===i.team1[i.activeTeam1Index];n(s)},this.deathNotificationDelayMs)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac,providedIn:"root"})};var hr=class r{turnService=Jt(zo);effectsService=Jt(Jn);team1StartPosition={x:-2,y:.2,z:3};team2StartPosition={x:3,y:.2,z:-3};battleStateSubject=new To(null);battleState$=this.battleStateSubject.asObservable();awaitingPlayerActionSubject=new To(!1);awaitingPlayerAction$=this.awaitingPlayerActionSubject.asObservable();actionSubject=new To(null);action$=this.actionSubject.asObservable();currentTurn=null;awaitingPlayerPhase=null;startBattle(t,e){if(t.length===0||e.length===0)throw new Error("Both teams must have at least one character");let i={team1:this.prepareTeam(t,this.team1StartPosition),team2:this.prepareTeam(e,this.team2StartPosition),activeTeam1Index:0,activeTeam2Index:0,actions:[],winner:null,isComplete:!1};this.battleStateSubject.next(i),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null,this.beginNextTurn()}performPlayerAction(t){let e=this.battleStateSubject.value;if(!e||e.isComplete||!this.currentTurn||!this.awaitingPlayerPhase)return;let{team1:i,team2:n}=this.currentTurn;this.awaitingPlayerActionSubject.next(!1),this.turnService.executePlayerAttack(i,n,e,this.actionSubject,s=>this.handleCharacterDeath(s),t),this.battleStateSubject.next(li({},e)),this.awaitingPlayerPhase==="first"?setTimeout(()=>{let s=this.battleStateSubject.value;!s||s.isComplete||(n.isAlive&&(this.turnService.executeAutoAttack(n,i,s,this.actionSubject,a=>this.handleCharacterDeath(a)),this.battleStateSubject.next(li({},s))),this.finalizeTurn())},this.turnService.getCounterAttackDelayMs()):this.finalizeTurn(),this.awaitingPlayerPhase=null}performPursuitAttack(){let t=this.battleStateSubject.value;if(!t||t.isComplete)return;let e=t.team2[t.activeTeam2Index],i=t.team1[t.activeTeam1Index];!e?.isAlive||!i?.isAlive||(this.turnService.executeAutoAttack(e,i,t,this.actionSubject,n=>this.handleCharacterDeath(n)),this.battleStateSubject.next(li({},t)))}beginNextTurn(){let t=this.battleStateSubject.value;if(!t||t.isComplete)return;let e=t.team1[t.activeTeam1Index],i=t.team2[t.activeTeam2Index];if(!e||!i){this.endBattle();return}let n=this.turnService.getTurnOrder(e,i);if(this.currentTurn={team1:e,team2:i,firstAttackerIsTeam1:n.firstAttackerIsTeam1},n.firstAttackerIsTeam1){this.awaitingPlayerPhase="first",this.awaitingPlayerActionSubject.next(!0);return}this.turnService.executeAutoAttack(n.firstAttacker,n.firstDefender,t,this.actionSubject,s=>this.handleCharacterDeath(s)),this.battleStateSubject.next(li({},t)),this.awaitingPlayerPhase="second",setTimeout(()=>{let s=this.battleStateSubject.value;if(!(!s||s.isComplete)){if(!this.currentTurn?.team1.isAlive){this.finalizeTurn();return}this.awaitingPlayerActionSubject.next(!0)}},this.turnService.getCounterAttackDelayMs())}finalizeTurn(){setTimeout(()=>{let t=this.battleStateSubject.value;!t||t.isComplete||(this.turnService.applyEndOfTurnEffects(t),this.battleStateSubject.next(li({},t)),t.isComplete||this.beginNextTurn())},this.turnService.getEffectsDelayMs())}handleCharacterDeath(t){let e=this.battleStateSubject.value;if(!e||e.isComplete)return;let i=t?"team2":"team1",n=t?"activeTeam2Index":"activeTeam1Index",s=e[i],a=e[n],o=this.getNextAliveIndex(s,a);if(o!==null){e[n]=o,this.battleStateSubject.next(li({},e));return}this.endBattle()}getNextAliveIndex(t,e){let i=t.findIndex((s,a)=>a>e&&s.isAlive);if(i!==-1)return i;let n=t.findIndex(s=>s.isAlive);return n!==-1?n:null}endBattle(){let t=this.battleStateSubject.value;if(!t)return;t.isComplete=!0,this.effectsService.clearAllPoisonTimers();let n=(t.team1.some(s=>s.isAlive)?t.team1:t.team2).filter(s=>s.isAlive);t.winner=n.length>0?n[0].name:null,this.battleStateSubject.next(li({},t)),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null}resetBattle(){this.effectsService.clearAllPoisonTimers(),this.battleStateSubject.next(null),this.actionSubject.next(null),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null}prepareTeam(t,e){return t.map(i=>lr(li({},i),{isAlive:!0,position:e,turnCount:0}))}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac,providedIn:"root"})};var ko=class r{health;maxHealth;healthBarClass;alignment="left";get healthPercentage(){return this.maxHealth?this.health/this.maxHealth*100:0}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-health-bar"]],inputs:{health:"health",maxHealth:"maxHealth",healthBarClass:"healthBarClass",alignment:"alignment"},decls:5,vars:10,consts:[[1,"health-container"],[1,"health-bar-wrapper"],[1,"health-bar"],[1,"health-text"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"div",1),xi(2,"div",2),oe(3,"span",3),tn(4),le()()()),e&2&&(Co("left",i.alignment==="left")("right",i.alignment==="right"),$t(2),tf(i.healthBarClass),Qd("width",i.healthPercentage,"%"),$t(2),nf("",i.health," / ",i.maxHealth,""))},dependencies:[Wi],styles:['.health-bar-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:32px;background:#58585880;border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,.5)}.health-bar[_ngcontent-%COMP%]{height:100%;transition:width .6s cubic-bezier(.4,0,.2,1);position:relative;border-radius:16px}.health-bar.character1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#f43f5ef2,#fb923c,#f43f5ef2);box-shadow:0 0 20px #fb923ca6,inset 0 0 10px #ffffff4d}.health-bar.character2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#34d3f5f2,#58f5d3,#34d3f5f2);box-shadow:0 0 20px #34f5dd99,inset 0 0 10px #ffffff4d}.health-bar[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.4) 0%,transparent 100%);border-radius:16px 16px 0 0}.health-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700;font-size:1rem;pointer-events:none;z-index:1;white-space:nowrap}.health-container.right[_ngcontent-%COMP%]   .health-text[_ngcontent-%COMP%]{color:#000}.health-container.left[_ngcontent-%COMP%]   .health-text[_ngcontent-%COMP%]{color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8)}@media (max-width: 1024px){.health-bar-wrapper[_ngcontent-%COMP%]{height:28px}}@media (max-width: 580px){.health-bar-wrapper[_ngcontent-%COMP%]{height:24px}.health-text[_ngcontent-%COMP%]{font-size:.75rem}}@media (max-width: 480px){.health-bar-wrapper[_ngcontent-%COMP%]{height:20px}.health-text[_ngcontent-%COMP%]{font-size:.7rem}}@media (max-width: 360px){.health-bar-wrapper[_ngcontent-%COMP%]{height:18px;border-radius:9px}.health-bar[_ngcontent-%COMP%]{border-radius:9px}.health-bar[_ngcontent-%COMP%]:after{border-radius:9px 9px 0 0}.health-text[_ngcontent-%COMP%]{font-size:.6rem}}@media (max-width: 768px) and (orientation: portrait){.health-bar-wrapper[_ngcontent-%COMP%]{height:16px;border-radius:8px}.health-bar[_ngcontent-%COMP%]{border-radius:8px}.health-bar[_ngcontent-%COMP%]:after{border-radius:8px 8px 0 0}.health-text[_ngcontent-%COMP%]{font-size:.6rem}}']})};var Vo=class r{character;alignment="left";get healthBarClass(){return this.alignment==="left"?"character1":"character2"}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-character-status-card"]],inputs:{character:"character",alignment:"alignment"},decls:5,vars:9,consts:[[1,"character-status"],[1,"character-card","glass-panel"],[1,"character-name"],[3,"health","maxHealth","healthBarClass","alignment"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"div",1)(2,"div",2),tn(3),le(),xi(4,"app-health-bar",3),le()()),e&2&&(Co("left",i.alignment==="left")("right",i.alignment==="right"),$t(3),Is(i.character.name),$t(),ke("health",i.character.health)("maxHealth",i.character.maxHealth)("healthBarClass",i.healthBarClass)("alignment",i.alignment))},dependencies:[Wi,ko],styles:[".right[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 15% 25%,rgba(152,255,238,.6) 0%,transparent 122%),radial-gradient(circle at 85% 15%,rgba(120,240,214,.53) 0%,transparent 90%),radial-gradient(circle at 50% 90%,rgba(160,255,234,.4) 0%,transparent 80%),radial-gradient(circle at 70% 50%,rgba(100,230,191,.28) 0%,transparent 65%),linear-gradient(145deg,#0a231999,#0c1e1666,#081c1480 60%,#0c1e1666);border:1px solid rgba(52,245,180,.25);box-shadow:0 8px 24px #0006,0 0 15px #34f5b414,inset 0 1px #ffffff0f}.left[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(244,63,94,.42) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(251,146,60,.8) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(244,63,94,.42) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(251,146,60,.8) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{width:auto}.character-status[_ngcontent-%COMP%]{pointer-events:auto;animation:slideIn .8s ease-out}.character-status.left[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInLeftDramatic}.character-status.right[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInRightDramatic}.character-card[_ngcontent-%COMP%]{padding:8px;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .3s ease}.character-name[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:1.8rem;margin-bottom:8px;letter-spacing:1px}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}.right[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]   .character-name[_ngcontent-%COMP%]{color:#000}.left[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]   .character-name[_ngcontent-%COMP%]{color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8)}@keyframes _ngcontent-%COMP%_slideInLeftDramatic{0%{opacity:0;transform:translate(-150px) rotate(-10deg) scale(.5)}70%{transform:translate(10px) rotate(2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@keyframes _ngcontent-%COMP%_slideInRightDramatic{0%{opacity:0;transform:translate(150px) rotate(10deg) scale(.5)}70%{transform:translate(-10px) rotate(-2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@media (max-width: 1024px){.character-name[_ngcontent-%COMP%]{font-size:1.4rem}}@keyframes _ngcontent-%COMP%_slideInDown{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 580px){[_nghost-%COMP%]{width:auto}.character-status[_ngcontent-%COMP%]{width:auto}.character-status.left[_ngcontent-%COMP%], .character-status.right[_ngcontent-%COMP%]{animation-name:slideInDown}.character-card[_ngcontent-%COMP%]{min-width:unset;width:auto}.character-name[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:8px}}@media (max-width: 480px){.character-name[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:6px}}@media (max-width: 360px){.character-card[_ngcontent-%COMP%]{padding:6px 8px}.character-name[_ngcontent-%COMP%]{font-size:.9rem;margin-bottom:4px}}@media (max-width: 768px) and (orientation: portrait){.character-name[_ngcontent-%COMP%]{font-size:.85rem;margin-bottom:4px}.glass-panel[_ngcontent-%COMP%]{border-radius:8px}}"]})};var Ho=class r{winner;terminateBattle=new ha;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:10,vars:7,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-subtitle"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(e,i){e&1&&(oe(0,"div",0)(1,"div",1)(2,"h1",2),tn(3),le(),oe(4,"p",3),tn(5),$e(6,"translate"),le(),xi(7,"div",4),oe(8,"p-button",5),$e(9,"translate"),Hi("onClick",function(){return i.onTerminateBattle()}),le()()()),e&2&&($t(3),Is(i.winner),$t(2),Is(Qe(6,3,"VICTORY!")),$t(3),ke("label",Qe(9,5,"Terminate")))},dependencies:[Wi,Oo,Fo,Lo,Do],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin:20px 0;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#c0c6d0;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 24px rgba(123,140,173,.4),0 0 48px rgba(123,140,173,.15),0 2px 12px rgba(0,0,0,.9);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:1px solid rgba(168,178,193,.18)}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0d1117f5,#161b26ed),radial-gradient(ellipse at center,rgba(123,140,173,.05) 0%,transparent 70%);border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin:15px 0}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin:10px 0;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function Mg(r,t){if(r&1){let e=ua();oe(0,"div",3)(1,"p-button",4),$e(2,"translate"),Hi("onClick",function(){Cn(e);let n=Gi();return Rn(n.onStartBattle())}),le()()}r&2&&($t(),ke("label",Qe(2,1,"Release the Spiders!")))}function Sg(r,t){if(r&1){let e=ua();oe(0,"div",5)(1,"p-button",6),$e(2,"translate"),Hi("onClick",function(){Cn(e);let n=Gi();return Rn(n.onPlayerAction("attack"))}),le(),oe(3,"p-button",7),$e(4,"translate"),Hi("onClick",function(){Cn(e);let n=Gi();return Rn(n.onPlayerAction("critical"))}),le(),oe(5,"p-button",8),$e(6,"translate"),Hi("onClick",function(){Cn(e);let n=Gi();return Rn(n.onPlayerAction("combo"))}),le(),oe(7,"p-button",9),$e(8,"translate"),Hi("onClick",function(){Cn(e);let n=Gi();return Rn(n.onPlayerAction("poison"))}),le(),oe(9,"p-button",10),$e(10,"translate"),Hi("onClick",function(){Cn(e);let n=Gi();return Rn(n.onPlayerAction("shield"))}),le()()}r&2&&($t(),ke("label",Qe(2,5,"Attack")),$t(2),ke("label",Qe(4,7,"Critical")),$t(2),ke("label",Qe(6,9,"Combo")),$t(2),ke("label",Qe(8,11,"Poison")),$t(2),ke("label",Qe(10,13,"Shield")))}var Go=class r{isBattleActive=!1;isAwaitingPlayerAction=!1;startBattle=new ha;playerAction=new ha;onStartBattle(){this.startBattle.emit()}onPlayerAction(t){this.playerAction.emit(t)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive",isAwaitingPlayerAction:"isAwaitingPlayerAction"},outputs:{startBattle:"startBattle",playerAction:"playerAction"},decls:3,vars:2,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],["class","control-buttons",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"],[1,"control-buttons"],["icon","pi pi-angle-double-right","severity","secondary","size","large","styleClass","battle-btn attack-btn",3,"onClick","label"],["icon","pi pi-bolt","severity","secondary","size","large","styleClass","battle-btn critical-btn",3,"onClick","label"],["icon","pi pi-clone","severity","secondary","size","large","styleClass","battle-btn combo-btn",3,"onClick","label"],["icon","pi pi-bullseye","severity","secondary","size","large","styleClass","battle-btn poison-btn",3,"onClick","label"],["icon","pi pi-shield","severity","secondary","size","large","styleClass","battle-btn shield-btn",3,"onClick","label"]],template:function(e,i){e&1&&(oe(0,"div",0),Ps(1,Mg,3,3,"div",1)(2,Sg,11,15,"div",2),le()),e&2&&($t(),ke("ngIf",!i.isBattleActive),$t(),ke("ngIf",i.isBattleActive&&i.isAwaitingPlayerAction))},dependencies:[Wi,of,Oo,Fo,Lo,Do],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000;padding-top:120px}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 720px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{font-size:12px!important;padding:8px!important}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};var Wl="182",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kf=0,hu=1,Vf=2;var Wa=1,Xl=2,Wr=3,zn=0,di=1,We=2,vn=0,Us=1,ni=2,uu=3,du=4,Hf=5,ss=100,Gf=101,Wf=102,Xf=103,Yf=104,qf=200,Zf=201,jf=202,Kf=203,gl=204,_l=205,Jf=206,$f=207,Qf=208,tp=209,ep=210,ip=211,np=212,sp=213,rp=214,Yl=0,ql=1,Zl=2,Bs=3,jl=4,Kl=5,Jl=6,$l=7,Ql=0,ap=1,op=2,un=0,fu=1,pu=2,mu=3,Xa=4,gu=5,_u=6,xu=7;var Qh=300,ms=301,Gs=302,tc=303,ec=304,Ya=306,on=1e3,vi=1001,xl=1002,He=1003,lp=1004;var qa=1005;var qe=1006,ic=1007;var gs=1008;var yi=1009,vu=1010,yu=1011,Xr=1012,nc=1013,dn=1014,fn=1015,yn=1016,sc=1017,rc=1018,Yr=1020,bu=35902,Mu=35899,Su=1021,Tu=1022,Zi=1023,mn=1026,_s=1027,Eu=1028,ac=1029,Ws=1030,oc=1031;var lc=1033,Za=33776,ja=33777,Ka=33778,Ja=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,_c=37489,xc=37490,vc=37491,yc=37808,bc=37809,Mc=37810,Sc=37811,Tc=37812,Ec=37813,wc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Ic=37819,Dc=37820,Lc=37821,Fc=36492,Oc=36494,Nc=36495,Uc=36283,Bc=36284,zc=36285,kc=36286;var Ma=2300,vl=2301,ml=2302,tu=2400,eu=2401,iu=2402;var cp=3200;var Vc=0,hp=1,Hn="",hi="srgb",zs="srgb-linear",Sa="linear",te="srgb";var Ns=7680;var nu=519,up=512,dp=513,fp=514,Hc=515,pp=516,mp=517,Gc=518,gp=519,yl=35044,Xs=35048;var wu="300 es",an=2e3,Ta=2001;function Au(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Tg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _p(){let r=Ea("canvas");return r.style.display="block",r}var df={},Rr=null;function wa(...r){let t="THREE."+r.shift();Rr?Rr("log",t,...r):console.log(t,...r)}function At(...r){let t="THREE."+r.shift();Rr?Rr("warn",t,...r):console.warn(t,...r)}function Ct(...r){let t="THREE."+r.shift();Rr?Rr("error",t,...r):console.error(t,...r)}function Pr(...r){let t=r.join(" ");t in df||(df[t]=!0,At(...r))}function xp(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=1234567,ya=Math.PI/180,Ir=180/Math.PI;function Un(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[e&63|128]+ti[e>>8&255]+"-"+ti[e>>16&255]+ti[e>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function Vt(r,t,e){return Math.max(t,Math.min(e,r))}function Cu(r,t){return(r%t+t)%t}function Eg(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function wg(r,t,e){return r!==t?(e-r)/(t-r):0}function ba(r,t,e){return(1-e)*r+e*t}function Ag(r,t,e,i){return ba(r,t,1-Math.exp(-e*i))}function Cg(r,t=1){return t-Math.abs(Cu(r,t*2)-t)}function Rg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Pg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ig(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Dg(r,t){return r+Math.random()*(t-r)}function Lg(r){return r*(.5-Math.random())}function Fg(r){r!==void 0&&(ff=r);let t=ff+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Og(r){return r*ya}function Ng(r){return r*Ir}function Ug(r){return(r&r-1)===0&&r!==0}function Bg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kg(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),_=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*h,o*c);break;default:At("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function rn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ji={DEG2RAD:ya,RAD2DEG:Ir,generateUUID:Un,clamp:Vt,euclideanModulo:Cu,mapLinear:Eg,inverseLerp:wg,lerp:ba,damp:Ag,pingpong:Cg,smoothstep:Rg,smootherstep:Pg,randInt:Ig,randFloat:Dg,randFloatSpread:Lg,seededRandom:Fg,degToRad:Og,radToDeg:Ng,isPowerOfTwo:Ug,ceilPowerOfTwo:Bg,floorPowerOfTwo:zg,setQuaternionFromProperEuler:kg,normalize:re,denormalize:rn},vt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=l*d+c*f+h*_+u*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+_*o,u=u*p+g*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,n=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Vt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rh=new D,pf=new qi,Ft=class r{constructor(t,e,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],v=n[1],y=n[4],S=n[7],M=n[2],T=n[5],w=n[8];return s[0]=a*g+o*v+l*M,s[3]=a*m+o*y+l*T,s[6]=a*p+o*S+l*w,s[1]=c*g+h*v+u*M,s[4]=c*m+h*y+u*T,s[7]=c*p+h*S+u*w,s[2]=d*g+f*v+_*M,s[5]=d*m+f*y+_*T,s[8]=d*p+f*S+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=e*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(n*c-h*i)*g,t[2]=(o*i-n*a)*g,t[3]=d*g,t[4]=(h*e-n*l)*g,t[5]=(n*s-o*e)*g,t[6]=f*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ph.makeScale(t,e)),this}rotate(t){return this.premultiply(Ph.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ph.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ph=new Ft,mf=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gf=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vg(){let r={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(n.r=Bn(n.r),n.g=Bn(n.g),n.b=Bn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(n.r=Cr(n.r),n.g=Cr(n.g),n.b=Cr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hn?Sa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[zs]:{primaries:t,whitePoint:i,transfer:Sa,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:i,transfer:te,toXYZ:mf,fromXYZ:gf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}var Yt=Vg();function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var dr,bl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dr===void 0&&(dr=Ea("canvas")),dr.width=t.width,dr.height=t.height;let n=dr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=dr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bn(e[i]/255)*255):e[i]=Bn(e[i]);return{data:e,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hg=0,Dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Ih(n[a].image)):s.push(Ih(n[a]))}else s=Ih(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Ih(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}var Gg=0,Dh=new D,Oi=(()=>{class r extends gn{constructor(e=r.DEFAULT_IMAGE,i=r.DEFAULT_MAPPING,n=vi,s=vi,a=qe,o=gs,l=Zi,c=yi,h=r.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Un(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let n=e[i];if(n===void 0){At(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){At(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[i]=n}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=Qh,r.DEFAULT_ANISOTROPY=1,r})(),ye=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,S=(f+1)/2,M=(p+1)/2,T=(h+d)/4,w=(u+g)/4,C=(_+m)/4;return y>S&&y>M?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=T/i,s=w/i):S>M?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=T/n,s=C/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=w/s,n=C/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ml=class extends gn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let n={width:t,height:e,depth:i.depth},s=new Oi(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Dr(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends Ml{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Aa=class extends Oi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends Oi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(da),Xo.subVectors(this.max,da),fr.subVectors(t.a,da),pr.subVectors(t.b,da),mr.subVectors(t.c,da),$n.subVectors(pr,fr),Qn.subVectors(mr,pr),Ds.subVectors(fr,mr);let e=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-Ds.z,Ds.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,Ds.z,0,-Ds.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-Ds.y,Ds.x,0];return!Lh(e,fr,pr,mr,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Lh(e,fr,pr,mr,Xo))?!1:(Yo.crossVectors($n,Qn),e=[Yo.x,Yo.y,Yo.z],Lh(e,fr,pr,mr,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pn=[new D,new D,new D,new D,new D,new D,new D,new D],en=new D,Wo=new Di,fr=new D,pr=new D,mr=new D,$n=new D,Qn=new D,Ds=new D,da=new D,Xo=new D,Yo=new D,Ls=new D;function Lh(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ls.fromArray(r,s);let o=n.x*Math.abs(Ls.x)+n.y*Math.abs(Ls.y)+n.z*Math.abs(Ls.z),l=t.dot(Ls),c=e.dot(Ls),h=i.dot(Ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Wg=new Di,fa=new D,Fh=new D,rs=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wg.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fa.subVectors(t,this.center);let e=fa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(fa,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fa.copy(t.center).add(Fh)),this.expandByPoint(fa.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},In=new D,Oh=new D,qo=new D,ts=new D,Nh=new D,Zo=new D,Uh=new D,as=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Oh.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),ts.copy(this.origin).sub(Oh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(qo),o=ts.dot(this.direction),l=-ts.dot(qo),c=ts.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Oh).addScaledVector(qo,d),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);let i=In.dot(this.direction),n=In.dot(In)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,n,s){Nh.subVectors(e,t),Zo.subVectors(i,t),Uh.crossVectors(Nh,Zo);let a=this.direction.dot(Uh),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ts.subVectors(this.origin,t);let l=o*this.direction.dot(Zo.crossVectors(ts,Zo));if(l<0)return null;let c=o*this.direction.dot(Nh.cross(ts));if(c<0||l+c>a)return null;let h=-o*ts.dot(Uh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class r{constructor(t,e,i,n,s,a,o,l,c,h,u,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,i,n,s,a,o,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,n=1/gr.setFromMatrixColumn(t,0).length(),s=1/gr.setFromMatrixColumn(t,1).length(),a=1/gr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xg,t,Yg)}lookAt(t,e,i){let n=this.elements;return Ri.subVectors(t,e),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),es.crossVectors(i,Ri),es.lengthSq()===0&&(Math.abs(i.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),es.crossVectors(i,Ri)),es.normalize(),jo.crossVectors(Ri,es),n[0]=es.x,n[4]=jo.x,n[8]=Ri.x,n[1]=es.y,n[5]=jo.y,n[9]=Ri.y,n[2]=es.z,n[6]=jo.z,n[10]=Ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],v=i[3],y=i[7],S=i[11],M=i[15],T=n[0],w=n[4],C=n[8],x=n[12],E=n[1],P=n[5],I=n[9],F=n[13],V=n[2],H=n[6],k=n[10],B=n[14],Y=n[3],rt=n[7],tt=n[11],lt=n[15];return s[0]=a*T+o*E+l*V+c*Y,s[4]=a*w+o*P+l*H+c*rt,s[8]=a*C+o*I+l*k+c*tt,s[12]=a*x+o*F+l*B+c*lt,s[1]=h*T+u*E+d*V+f*Y,s[5]=h*w+u*P+d*H+f*rt,s[9]=h*C+u*I+d*k+f*tt,s[13]=h*x+u*F+d*B+f*lt,s[2]=_*T+g*E+m*V+p*Y,s[6]=_*w+g*P+m*H+p*rt,s[10]=_*C+g*I+m*k+p*tt,s[14]=_*x+g*F+m*B+p*lt,s[3]=v*T+y*E+S*V+M*Y,s[7]=v*w+y*P+S*H+M*rt,s[11]=v*C+y*I+S*k+M*tt,s[15]=v*x+y*F+S*B+M*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15],v=l*f-c*d,y=o*f-c*u,S=o*d-l*u,M=a*f-c*h,T=a*d-l*h,w=a*u-o*h;return e*(g*v-m*y+p*S)-i*(_*v-m*M+p*T)+n*(_*y-g*M+p*w)-s*(_*S-g*T+m*w)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,y=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,S=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,M=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,T=e*v+i*y+n*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=v*w,t[1]=(g*d*s-u*m*s-g*n*f+i*m*f+u*n*p-i*d*p)*w,t[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*p+i*l*p)*w,t[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*w,t[4]=y*w,t[5]=(h*m*s-_*d*s+_*n*f-e*m*f-h*n*p+e*d*p)*w,t[6]=(_*l*s-a*m*s-_*n*c+e*m*c+a*n*p-e*l*p)*w,t[7]=(a*d*s-h*l*s+h*n*c-e*d*c-a*n*f+e*l*f)*w,t[8]=S*w,t[9]=(_*u*s-h*g*s-_*i*f+e*g*f+h*i*p-e*u*p)*w,t[10]=(a*g*s-_*o*s+_*i*c-e*g*c-a*i*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*f-e*o*f)*w,t[12]=M*w,t[13]=(h*g*n-_*u*n+_*i*d-e*g*d-h*i*m+e*u*m)*w,t[14]=(_*o*n-a*g*n-_*i*l+e*g*l+a*i*m-e*o*m)*w,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*d+e*o*d)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,m=a*u,p=o*u,v=l*c,y=l*h,S=l*u,M=i.x,T=i.y,w=i.z;return n[0]=(1-(g+p))*M,n[1]=(f+S)*M,n[2]=(_-y)*M,n[3]=0,n[4]=(f-S)*T,n[5]=(1-(d+p))*T,n[6]=(m+v)*T,n[7]=0,n[8]=(_+y)*w,n[9]=(m-v)*w,n[10]=(1-(d+g))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;if(t.x=n[12],t.y=n[13],t.z=n[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=gr.set(n[0],n[1],n[2]).length(),a=gr.set(n[4],n[5],n[6]).length(),o=gr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),nn.copy(this);let c=1/s,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=an,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),_,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===an)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ta)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=an,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),_,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===an)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Ta)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},gr=new D,nn=new _e,Xg=new D(0,0,0),Yg=new D(1,1,1),es=new D,jo=new D,Ri=new D,_f=new _e,xf=new qi,ln=(()=>{class r{constructor(e=0,i=0,n=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,s=this._order){return this._x=e,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){let s=e.elements,a=s[0],o=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],f=s[6],_=s[10];switch(i){case"XYZ":this._y=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),Ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qg=0,vf=new D,_r=new qi,Dn=new _e,Ko=new D,pa=new D,Zg=new D,jg=new qi,yf=new D(1,0,0),bf=new D(0,1,0),Mf=new D(0,0,1),Sf={type:"added"},Kg={type:"removed"},xr={type:"childadded",child:null},Bh={type:"childremoved",child:null},ui=(()=>{class r extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new D,i=new ln,n=new qi,s=new D(1,1,1);function a(){n.setFromEuler(i,!1)}function o(){i.setFromQuaternion(n,void 0,!1)}i._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Ft}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(bf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,i){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(bf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?Ko.copy(e):Ko.set(e,i,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(pa,Ko,this.up):Dn.lookAt(Ko,pa,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Dn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sf),xr.child=e,this.dispatchEvent(xr),xr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Kg),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sf),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,i);if(o!==void 0)return o}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){let i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>lr(li({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>li({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(a(e.animations,c))}}if(i){let l=o(e.geometries),c=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),_=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}}return r.DEFAULT_UP=new D(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),sn=new D,Ln=new D,zh=new D,Fn=new D,vr=new D,yr=new D,Tf=new D,kh=new D,Vh=new D,Hh=new D,Gh=new ye,Wh=new ye,Xh=new ye,Nn=class r{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),sn.subVectors(t,e),n.cross(sn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){sn.subVectors(n,e),Ln.subVectors(i,e),zh.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(Ln),l=sn.dot(zh),c=Ln.dot(Ln),h=Ln.dot(zh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Gh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Gh.fromBufferAttribute(t,e),Wh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Gh,s.x),a.addScaledVector(Wh,s.y),a.addScaledVector(Xh,s.z),a}static isFrontFacing(t,e,i,n){return sn.subVectors(i,e),Ln.subVectors(t,e),sn.cross(Ln).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),sn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;vr.subVectors(n,i),yr.subVectors(s,i),kh.subVectors(t,i);let l=vr.dot(kh),c=yr.dot(kh);if(l<=0&&c<=0)return e.copy(i);Vh.subVectors(t,n);let h=vr.dot(Vh),u=yr.dot(Vh);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(vr,a);Hh.subVectors(t,s);let f=vr.dot(Hh),_=yr.dot(Hh);if(_>=0&&f<=_)return e.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(yr,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Tf.subVectors(s,n),o=(u-h)/(u-h+(f-_)),e.copy(n).addScaledVector(Tf,o);let p=1/(m+g+d);return a=g*p,o=d*p,e.copy(i).addScaledVector(vr,a).addScaledVector(yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Yh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Tt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=Cu(t,1),e=Vt(e,0,1),i=Vt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Yh(a,s,t+1/3),this.g=Yh(a,s,t),this.b=Yh(a,s,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=hi){function i(s){s!==void 0&&parseFloat(s)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:At("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let i=vp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Yt.workingToColorSpace(ei.copy(this),t),Math.round(Vt(ei.r*255,0,255))*65536+Math.round(Vt(ei.g*255,0,255))*256+Math.round(Vt(ei.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(ei.copy(this),e);let i=ei.r,n=ei.g,s=ei.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=hi){Yt.workingToColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,n=ei.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(Jo);let i=ba(is.h,Jo.h,e),n=ba(is.s,Jo.s,e),s=ba(is.l,Jo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new Tt;Tt.NAMES=vp;var Jg=0,Ze=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Us,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){At(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){At(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cn=class extends Ze{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new D,$o=new vt,$g=0,xe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yl,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}};var Ra=class extends xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Pa=class extends xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends xe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Qg=0,Xi=new _e,qh=new ui,br=new D,Pi=new Di,ma=new Di,Ve=new D,ee=class r extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?Pa:Ra)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xi.makeRotationFromQuaternion(t),this.applyMatrix4(Xi),this}rotateX(t){return Xi.makeRotationX(t),this.applyMatrix4(Xi),this}rotateY(t){return Xi.makeRotationY(t),this.applyMatrix4(Xi),this}rotateZ(t){return Xi.makeRotationZ(t),this.applyMatrix4(Xi),this}translate(t,e,i){return Xi.makeTranslation(t,e,i),this.applyMatrix4(Xi),this}scale(t,e,i){return Xi.makeScale(t,e,i),this.applyMatrix4(Xi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Pi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(Pi.min,ma.min),Pi.expandByPoint(Ve),Ve.addVectors(Pi.max,ma.max),Pi.expandByPoint(Ve)):(Pi.expandByPoint(ma.min),Pi.expandByPoint(ma.max))}Pi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(t,c),Ve.add(br)),n=Math.max(n,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new D,l[C]=new D;let c=new D,h=new D,u=new D,d=new vt,f=new vt,_=new vt,g=new D,m=new D;function p(C,x,E){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,E),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[C].add(g),o[x].add(g),o[E].add(g),l[C].add(m),l[x].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,x=v.length;C<x;++C){let E=v[C],P=E.start,I=E.count;for(let F=P,V=P+I;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new D,S=new D,M=new D,T=new D;function w(C){M.fromBufferAttribute(n,C),T.copy(M);let x=o[C];y.copy(x),y.sub(M.multiplyScalar(M.dot(x))).normalize(),S.crossVectors(T,x);let P=S.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,x=v.length;C<x;++C){let E=v[C],P=E.start,I=E.count;for(let F=P,V=P+I;F<V;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new xe(d,h,u)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ef=new _e,Fs=new as,Qo=new rs,wf=new D,tl=new D,el=new D,il=new D,Zh=new D,nl=new D,Af=new D,sl=new D,Nt=class extends ui{constructor(t=new ee,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Zh.fromBufferAttribute(u,t),a?nl.addScaledVector(Zh,h):nl.addScaledVector(Zh.sub(e),h))}e.add(nl)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Fs.copy(t.ray).recast(t.near),!(Qo.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Qo,wf)===null||Fs.origin.distanceToSquared(wf)>(t.far-t.near)**2))&&(Ef.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(Ef),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,M=y;S<M;S+=3){let T=o.getX(S),w=o.getX(S+1),C=o.getX(S+2);n=rl(this,p,t,i,c,h,u,T,w,C),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let v=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);n=rl(this,a,t,i,c,h,u,v,y,S),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,M=y;S<M;S+=3){let T=S,w=S+1,C=S+2;n=rl(this,p,t,i,c,h,u,T,w,C),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let v=m,y=m+1,S=m+2;n=rl(this,a,t,i,c,h,u,v,y,S),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function t0(r,t,e,i,n,s,a,o){let l;if(t.side===di?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===zn,o),l===null)return null;sl.copy(o),sl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(sl);return c<e.near||c>e.far?null:{distance:c,point:sl.clone(),object:r}}function rl(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,tl),r.getVertexPosition(l,el),r.getVertexPosition(c,il);let h=t0(r,t,e,i,tl,el,il,Af);if(h){let u=new D;Nn.getBarycoord(Af,tl,el,il,u),n&&(h.uv=Nn.getInterpolatedAttribute(n,o,l,c,u,new vt)),s&&(h.uv1=Nn.getInterpolatedAttribute(s,o,l,c,u,new vt)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Nn.getNormal(tl,el,il,d.normal),h.face=d,h.barycoord=u}return h}var Lr=class r extends ee{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,s,4),_("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function _(g,m,p,v,y,S,M,T,w,C,x){let E=S/w,P=M/C,I=S/2,F=M/2,V=T/2,H=w+1,k=C+1,B=0,Y=0,rt=new D;for(let tt=0;tt<k;tt++){let lt=tt*P-F;for(let Rt=0;Rt<H;Rt++){let Dt=Rt*E-I;rt[g]=Dt*v,rt[m]=lt*y,rt[p]=V,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Rt/w),u.push(1-tt/C),B+=1}}for(let tt=0;tt<C;tt++)for(let lt=0;lt<w;lt++){let Rt=d+lt+H*tt,Dt=d+lt+H*(tt+1),Gt=d+(lt+1)+H*(tt+1),Wt=d+(lt+1)+H*tt;l.push(Rt,Dt,Wt),l.push(Dt,Gt,Wt),Y+=6}o.addGroup(f,Y,x),f+=Y,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function si(r){let t={};for(let e=0;e<r.length;e++){let i=Ys(r[e]);for(let n in i)t[n]=i[n]}return t}function e0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ru(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var yp={clone:Ys,merge:si},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Li=class extends Ze{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=e0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ia=class extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ns=new D,Cf=new vt,Rf=new vt,Ye=class extends Ia{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,Cf,Rf),e.subVectors(Rf,Cf)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ya*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mr=-90,Sr=1,Tl=class extends ui{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ye(Mr,Sr,t,e);n.layers=this.layers,this.add(n);let s=new Ye(Mr,Sr,t,e);s.layers=this.layers,this.add(s);let a=new Ye(Mr,Sr,t,e);a.layers=this.layers,this.add(a);let o=new Ye(Mr,Sr,t,e);o.layers=this.layers,this.add(o);let l=new Ye(Mr,Sr,t,e);l.layers=this.layers,this.add(l);let c=new Ye(Mr,Sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===an)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Da=class extends Oi{constructor(t=[],e=ms,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},La=class extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Da(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Lr(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:vn});s.uniforms.tEquirect.value=e;let a=new Nt(n,s),o=e.minFilter;return e.minFilter===gs&&(e.minFilter=qe),new Tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Ce=class extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Or=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fa=class extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},El=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yl,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ci=new D,Oa=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.applyMatrix4(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.applyNormalMatrix(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.transformDirection(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=rn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ks=class extends Ze{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tr,ga=new D,Er=new D,wr=new D,Ar=new vt,_a=new vt,bp=new _e,al=new D,xa=new D,ol=new D,Pf=new vt,jh=new vt,If=new vt,Nr=class extends ui{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new El(e,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new Oa(i,3,0,!1)),Tr.setAttribute("uv",new Oa(i,2,3,!1))}this.geometry=Tr,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Ct('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),bp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-wr.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ll(al.set(-.5,-.5,0),wr,a,Er,n,s),ll(xa.set(.5,-.5,0),wr,a,Er,n,s),ll(ol.set(.5,.5,0),wr,a,Er,n,s),Pf.set(0,0),jh.set(1,0),If.set(1,1);let o=t.ray.intersectTriangle(al,xa,ol,!1,ga);if(o===null&&(ll(xa.set(-.5,.5,0),wr,a,Er,n,s),jh.set(0,1),o=t.ray.intersectTriangle(al,ol,xa,!1,ga),o===null))return;let l=t.ray.origin.distanceTo(ga);l<t.near||l>t.far||e.push({distance:l,point:ga.clone(),uv:Nn.getInterpolation(ga,al,xa,ol,Pf,jh,If,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ll(r,t,e,i,n,s){Ar.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(_a.x=s*Ar.x-n*Ar.y,_a.y=n*Ar.x+s*Ar.y):_a.copy(Ar),r.copy(t),r.x+=_a.x,r.y+=_a.y,r.applyMatrix4(bp)}var wl=class extends Oi{constructor(t=null,e=1,i=1,n,s,a,o,l,c=He,h=He,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kh=new D,r0=new D,a0=new Ft,Yi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Kh.subVectors(i,e).cross(r0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Kh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||a0.getNormalMatrix(t),n=this.coplanarPoint(Kh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new rs,o0=new vt(.5,.5),cl=new D,Ur=class{constructor(t=new Yi,e=new Yi,i=new Yi,n=new Yi,s=new Yi,a=new Yi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=an,i=!1){let n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],v=s[12],y=s[13],S=s[14],M=s[15];if(n[0].setComponents(c-a,f-h,p-_,M-v).normalize(),n[1].setComponents(c+a,f+h,p+_,M+v).normalize(),n[2].setComponents(c+o,f+u,p+g,M+y).normalize(),n[3].setComponents(c-o,f-u,p-g,M-y).normalize(),i)n[4].setComponents(l,d,m,S).normalize(),n[5].setComponents(c-l,f-d,p-m,M-S).normalize();else if(n[4].setComponents(c-l,f-d,p-m,M-S).normalize(),e===an)n[5].setComponents(c+l,f+d,p+m,M+S).normalize();else if(e===Ta)n[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=o0.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(cl.x=n.normal.x>0?t.max.x:t.min.x,cl.y=n.normal.y>0?t.max.y:t.min.y,cl.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(cl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _n=class extends Ze{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Al=new D,Cl=new D,Df=new _e,va=new as,hl=new rs,Jh=new D,Lf=new D,Br=class extends ui{constructor(t=new ee,e=new _n){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Al.fromBufferAttribute(e,n-1),Cl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Al.distanceTo(Cl);t.setAttribute("lineDistance",new Zt(i,1))}else At("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(n),hl.radius+=s,t.ray.intersectsSphere(hl)===!1)return;Df.copy(n).invert(),va.copy(t.ray).applyMatrix4(Df);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),v=h.getX(g+1),y=ul(this,t,va,l,p,v,g);y&&e.push(y)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=ul(this,t,va,l,g,m,_-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){let p=ul(this,t,va,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){let g=ul(this,t,va,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ul(r,t,e,i,n,s,a){let o=r.geometry.attributes.position;if(Al.fromBufferAttribute(o,n),Cl.fromBufferAttribute(o,s),e.distanceSqToSegment(Al,Cl,Jh,Lf)>i)return;Jh.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Jh);if(!(c<t.near||c>t.far))return{distance:c,point:Lf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Ff=new D,Of=new D,zr=class extends Br{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ff.fromBufferAttribute(e,n),Of.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ff.distanceTo(Of);t.setAttribute("lineDistance",new Zt(i,1))}else At("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ge=class extends Ze{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nf=new _e,su=new as,dl=new rs,fl=new D,ii=class extends ui{constructor(t=new ee,e=new Ge){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(n),dl.radius+=s,t.ray.intersectsSphere(dl)===!1)return;Nf.copy(n).invert(),su.copy(t.ray).applyMatrix4(Nf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);fl.fromBufferAttribute(u,m),Uf(fl,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)fl.fromBufferAttribute(u,_),Uf(fl,_,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Uf(r,t,e,i,n,s,a){let o=su.distanceSqToPoint(r);if(o<e){let l=new D;su.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var xn=class extends Oi{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},os=class extends Oi{constructor(t,e,i=dn,n,s,a,o=He,l=He,c,h=mn,u=1){if(h!==mn&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rl=class extends os{constructor(t,e=dn,i=ms,n,s,a=He,o=He,l,c=mn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Na=class extends Oi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var kn=class r extends ee{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],_=0,g=[],m=i/2,p=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function v(){let S=new D,M=new D,T=0,w=(e-t)/i;for(let C=0;C<=s;C++){let x=[],E=C/s,P=E*(e-t)+t;for(let I=0;I<=n;I++){let F=I/n,V=F*l+o,H=Math.sin(V),k=Math.cos(V);M.x=P*H,M.y=-E*i+m,M.z=P*k,u.push(M.x,M.y,M.z),S.set(H,w,k).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-E),x.push(_++)}g.push(x)}for(let C=0;C<n;C++)for(let x=0;x<s;x++){let E=g[x][C],P=g[x+1][C],I=g[x+1][C+1],F=g[x][C+1];(t>0||x!==0)&&(h.push(E,P,F),T+=3),(e>0||x!==s-1)&&(h.push(P,I,F),T+=3)}c.addGroup(p,T,0),p+=T}function y(S){let M=_,T=new vt,w=new D,C=0,x=S===!0?t:e,E=S===!0?1:-1;for(let I=1;I<=n;I++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),_++;let P=_;for(let I=0;I<=n;I++){let V=I/n*l+o,H=Math.cos(V),k=Math.sin(V);w.x=x*k,w.y=m*E,w.z=x*H,u.push(w.x,w.y,w.z),d.push(0,E,0),T.x=H*.5+.5,T.y=k*.5*E+.5,f.push(T.x,T.y),_++}for(let I=0;I<n;I++){let F=M+I,V=P+I;S===!0?h.push(V,V+1,F):h.push(V+1,V,F),C+=3}c.addGroup(p,C,S===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ua=class r extends kn{constructor(t=1,e=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pl=class r extends ee{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let y=new D,S=new D,M=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],S),f(e[T+2],M),l(y,S,M,v)}function l(v,y,S,M){let T=M+1,w=[];for(let C=0;C<=T;C++){w[C]=[];let x=v.clone().lerp(S,C/T),E=y.clone().lerp(S,C/T),P=T-C;for(let I=0;I<=P;I++)I===0&&C===T?w[C][I]=x:w[C][I]=x.clone().lerp(E,I/P)}for(let C=0;C<T;C++)for(let x=0;x<2*(T-C)-1;x++){let E=Math.floor(x/2);x%2===0?(d(w[C][E+1]),d(w[C+1][E]),d(w[C][E])):(d(w[C][E+1]),d(w[C+1][E+1]),d(w[C+1][E]))}}function c(v){let y=new D;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(v),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function h(){let v=new D;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];let S=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;a.push(S,1-M)}_(),u()}function u(){for(let v=0;v<a.length;v+=6){let y=a[v+0],S=a[v+2],M=a[v+4],T=Math.max(y,S,M),w=Math.min(y,S,M);T>.9&&w<.1&&(y<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,y){let S=v*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function _(){let v=new D,y=new D,S=new D,M=new D,T=new vt,w=new vt,C=new vt;for(let x=0,E=0;x<s.length;x+=9,E+=6){v.set(s[x+0],s[x+1],s[x+2]),y.set(s[x+3],s[x+4],s[x+5]),S.set(s[x+6],s[x+7],s[x+8]),T.set(a[E+0],a[E+1]),w.set(a[E+2],a[E+3]),C.set(a[E+4],a[E+5]),M.copy(v).add(y).add(S).divideScalar(3);let P=m(M);g(T,E+0,v,P),g(w,E+2,y,P),g(C,E+4,S,P)}}function g(v,y,S,M){M<0&&v.x===1&&(a[y]=v.x-1),S.x===0&&S.z===0&&(a[y]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var ls=class r extends Pl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Vn=class r extends ee{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let y=0;y<c;y++){let S=y*u-s;_.push(S,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let y=v+c*p,S=v+c*(p+1),M=v+1+c*(p+1),T=v+1+c*p;f.push(y,S,T),f.push(S,M,T)}this.setIndex(f),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Ba=class r extends ee{constructor(t=.5,e=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new D,_=new vt;for(let g=0;g<=n;g++){for(let m=0;m<=i;m++){let p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<n;g++){let m=g*(i+1);for(let p=0;p<i;p++){let v=p+m,y=v,S=v+i+1,M=v+i+2,T=v+1;o.push(y,S,T),o.push(S,M,T)}}this.setIndex(o),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var cs=class r extends ee{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){let v=[],y=p/i,S=0;p===0&&a===0?S=.5/e:p===i&&l===Math.PI&&(S=-.5/e);for(let M=0;M<=e;M++){let T=M/e;u.x=-t*Math.cos(n+T*s)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(n+T*s)*Math.sin(a+y*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(T+S,1-y),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let y=h[p][v+1],S=h[p][v],M=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(y,S,T),(p!==i-1||l<Math.PI)&&f.push(S,M,T)}this.setIndex(f),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Il=class extends Li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vs=class extends Ze{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},za=class extends Vs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},hs=class extends Ze{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Dl=class extends Ze{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ll=class extends Ze{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pl(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}var Hs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Hs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case eu:s=t,o=2*e-i;break;case iu:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eu:a=t,l=2*i-e;break;case iu:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-e)/(n-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*m+(1.5+f)*g+.5*_,S=f*m-f*g;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+v*a[c+M]+y*a[l+M]+S*a[u+M];return s}},Ol=class extends Hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Nl=class extends Hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Fi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pl(e,this.TimeBufferType),this.values=pl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:pl(t.times,Array),values:pl(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ma:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case ml:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return At("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ct("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ct("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ct("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Tg(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ml,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=vl;var us=class extends Fi{constructor(t,e,i){super(t,e,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ma;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Fi{constructor(t,e,i,n){super(t,e,i,n)}};Ul.prototype.ValueTypeName="color";var Bl=class extends Fi{constructor(t,e,i,n){super(t,e,i,n)}};Bl.prototype.ValueTypeName="number";var zl=class extends Hs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)qi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ka=class extends Fi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Fi{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Ma;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Fi{constructor(t,e,i,n){super(t,e,i,n)}};kl.prototype.ValueTypeName="vector";var ru={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Vl=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Vl,Wc=(()=>{class r{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){let n=this;return new Promise(function(s,a){n.load(e,s,i,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}return r.DEFAULT_MATERIAL_NAME="__DEFAULT",r})(),On={},au=class extends Error{constructor(t,e){super(t),this.response=e}},Va=class extends Wc{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=ru.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(On[t]!==void 0){On[t].push({onLoad:e,onProgress:i,onError:n});return}On[t]=[],On[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&At("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=On[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,g=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:S})=>{if(y)p.close();else{g+=S.byteLength;let M=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let T=0,w=h.length;T<w;T++){let C=h[T];C.onProgress&&C.onProgress(M)}p.enqueue(S),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new au(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{ru.add(`file:${t}`,c);let h=On[t];delete On[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=On[t];if(h===void 0)throw this.manager.itemError(t),c;delete On[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var kr=class extends ui{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var $h=new _e,Bf=new D,zf=new D,Hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Bf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bf),zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zf),e.updateMatrixWorld(),$h.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ou=class extends Hl{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},hn=class extends kr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ou}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vr=class extends Ia{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lu=class extends Hl{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ui.DEFAULT_UP),this.updateMatrix(),this.target=new ui,this.shadow=new lu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ha=class extends kr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gl=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pu="\\[\\]\\.:\\/",l0=new RegExp("["+Pu+"]","g"),Iu="[^"+Pu+"]",c0="[^"+Pu.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",Iu),u0=/(WCOD+)?/.source.replace("WCOD",c0),d0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),f0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),p0=new RegExp("^"+h0+u0+d0+f0+"$"),m0=["material","materials","bones","map"],cu=class{constructor(t,e,i){let n=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=(()=>{class r{constructor(e,i,n){this.path=i,this.parsedPath=n||r.parseTrackName(i),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,i,n):new r(e,i,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(e){let i=p0.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);m0.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(i);if(n!==void 0)return n}if(e.children){let n=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===i||l.uuid===i)return l;let c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[i++]=n[s]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,n=i.objectName,s=i.propertyName,a=i.propertyIndex;if(e||(e=r.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=i.objectIndex;switch(n){case"materials":if(!e.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=i.nodeName;Ct("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=cu,r})();Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d1=new Float32Array(1);var Gr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ga=class extends gn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){At("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Du(r,t,e,i){let n=g0(i);switch(e){case Su:return r*t;case Eu:return r*t/n.components*n.byteLength;case ac:return r*t/n.components*n.byteLength;case Ws:return r*t*2/n.components*n.byteLength;case oc:return r*t*2/n.components*n.byteLength;case Tu:return r*t*3/n.components*n.byteLength;case Zi:return r*t*4/n.components*n.byteLength;case lc:return r*t*4/n.components*n.byteLength;case Za:case ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hc:case dc:return Math.max(r,16)*Math.max(t,8)/4;case cc:case uc:return Math.max(r,8)*Math.max(t,8)/2;case fc:case pc:case gc:case _c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mc:case xc:case vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Fc:case Oc:case Nc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Uc:case Bc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zc:case kc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(r){switch(r){case yi:case vu:return{byteLength:1,components:1};case Xr:case yu:case yn:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case dn:case nc:case fn:return{byteLength:4,components:1};case bu:case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);function Xp(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _0(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,E0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
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
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
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
#endif`,g_=`uniform sampler2D dfgLUT;
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
}`,__=`
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`#ifdef USE_MORPHTARGETS
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
#endif`,F_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`float getShadowMask() {
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
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bx=`varying vec3 vWorldDirection;
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
}`,Sx=`#include <common>
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
}`,Tx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,Vx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,Gx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,Xx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Zx=`uniform vec3 color;
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
}`,jx=`uniform float rotation;
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
}`,Bt={alphahash_fragment:x0,alphahash_pars_fragment:v0,alphamap_fragment:y0,alphamap_pars_fragment:b0,alphatest_fragment:M0,alphatest_pars_fragment:S0,aomap_fragment:T0,aomap_pars_fragment:E0,batching_pars_vertex:w0,batching_vertex:A0,begin_vertex:C0,beginnormal_vertex:R0,bsdfs:P0,iridescence_fragment:I0,bumpmap_pars_fragment:D0,clipping_planes_fragment:L0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:N0,color_fragment:U0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:k0,common:V0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:Z0,colorspace_pars_fragment:j0,envmap_fragment:K0,envmap_common_pars_fragment:J0,envmap_pars_fragment:$0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:i_,fog_fragment:n_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:a_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:x_,lights_fragment_end:v_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:S_,map_fragment:T_,map_pars_fragment:E_,map_particle_fragment:w_,map_particle_pars_fragment:A_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:R_,morphinstance_vertex:P_,morphcolor_vertex:I_,morphnormal_vertex:D_,morphtarget_pars_vertex:L_,morphtarget_vertex:F_,normal_fragment_begin:O_,normal_fragment_maps:N_,normal_pars_fragment:U_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:H_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:Y_,premultiplied_alpha_fragment:q_,project_vertex:Z_,dithering_fragment:j_,dithering_pars_fragment:K_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:$_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:tx,shadowmap_vertex:ex,shadowmask_pars_fragment:ix,skinbase_vertex:nx,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ax,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:hx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:_x,background_frag:xx,backgroundCube_vert:vx,backgroundCube_frag:yx,cube_vert:bx,cube_frag:Mx,depth_vert:Sx,depth_frag:Tx,distance_vert:Ex,distance_frag:wx,equirect_vert:Ax,equirect_frag:Cx,linedashed_vert:Rx,linedashed_frag:Px,meshbasic_vert:Ix,meshbasic_frag:Dx,meshlambert_vert:Lx,meshlambert_frag:Fx,meshmatcap_vert:Ox,meshmatcap_frag:Nx,meshnormal_vert:Ux,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:kx,meshphysical_vert:Vx,meshphysical_frag:Hx,meshtoon_vert:Gx,meshtoon_frag:Wx,points_vert:Xx,points_frag:Yx,shadow_vert:qx,shadow_frag:Zx,sprite_vert:jx,sprite_frag:Kx},ct={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Mn={basic:{uniforms:si([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:si([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:si([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:si([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:si([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:si([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:si([ct.points,ct.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:si([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:si([ct.common,ct.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:si([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:si([ct.sprite,ct.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:si([ct.common,ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:si([ct.lights,ct.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Mn.physical={uniforms:si([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Xc={r:0,b:0,g:0},qs=new ln,Jx=new _e;function $x(r,t,e,i,n,s,a){let o=new Tt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function g(y){let S=!1,M=_(y);M===null?p(o,l):M&&M.isColor&&(p(M,1),S=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,S){let M=_(S);M&&(M.isCubeTexture||M.mapping===Ya)?(h===void 0&&(h=new Nt(new Lr(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ys(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),qs.copy(S.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(qs)),h.material.toneMapped=Yt.getTransfer(M.colorSpace)!==te,(u!==M||d!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Nt(new Vn(2,2),new Li({name:"BackgroundMaterial",uniforms:Ys(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Xc,Ru(r)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,S,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:g,addToRenderList:m,dispose:v}}function Qx(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(E,P,I,F,V){let H=!1,k=u(F,I,P);s!==k&&(s=k,c(s.object)),H=f(E,F,I,V),H&&_(E,F,I,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(E,P,I,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,P,I){let F=I.wireframe===!0,V=i[E.id];V===void 0&&(V={},i[E.id]=V);let H=V[P.id];H===void 0&&(H={},V[P.id]=H);let k=H[F];return k===void 0&&(k=d(l()),H[F]=k),k}function d(E){let P=[],I=[],F=[];for(let V=0;V<e;V++)P[V]=0,I[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:E,attributes:{},index:null}}function f(E,P,I,F){let V=s.attributes,H=P.attributes,k=0,B=I.getAttributes();for(let Y in B)if(B[Y].location>=0){let tt=V[Y],lt=H[Y];if(lt===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor)),tt===void 0||tt.attribute!==lt||lt&&tt.data!==lt.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function _(E,P,I,F){let V={},H=P.attributes,k=0,B=I.getAttributes();for(let Y in B)if(B[Y].location>=0){let tt=H[Y];tt===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor));let lt={};lt.attribute=tt,tt&&tt.data&&(lt.data=tt.data),V[Y]=lt,k++}s.attributes=V,s.attributesNum=k,s.index=F}function g(){let E=s.newAttributes;for(let P=0,I=E.length;P<I;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){let I=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;I[E]=1,F[E]===0&&(r.enableVertexAttribArray(E),F[E]=1),V[E]!==P&&(r.vertexAttribDivisor(E,P),V[E]=P)}function v(){let E=s.newAttributes,P=s.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==E[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function y(E,P,I,F,V,H,k){k===!0?r.vertexAttribIPointer(E,P,I,V,H):r.vertexAttribPointer(E,P,I,F,V,H)}function S(E,P,I,F){g();let V=F.attributes,H=I.getAttributes(),k=P.defaultAttributeValues;for(let B in H){let Y=H[B];if(Y.location>=0){let rt=V[B];if(rt===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor)),rt!==void 0){let tt=rt.normalized,lt=rt.itemSize,Rt=t.get(rt);if(Rt===void 0)continue;let Dt=Rt.buffer,Gt=Rt.type,Wt=Rt.bytesPerElement,Z=Gt===r.INT||Gt===r.UNSIGNED_INT||rt.gpuType===nc;if(rt.isInterleavedBufferAttribute){let J=rt.data,pt=J.stride,Ot=rt.offset;if(J.isInstancedInterleavedBuffer){for(let _t=0;_t<Y.locationSize;_t++)p(Y.location+_t,J.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let _t=0;_t<Y.locationSize;_t++)y(Y.location+_t,lt/Y.locationSize,Gt,tt,pt*Wt,(Ot+lt/Y.locationSize*_t)*Wt,Z)}else{if(rt.isInstancedBufferAttribute){for(let J=0;J<Y.locationSize;J++)p(Y.location+J,rt.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let J=0;J<Y.locationSize;J++)m(Y.location+J);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let J=0;J<Y.locationSize;J++)y(Y.location+J,lt/Y.locationSize,Gt,tt,lt*Wt,lt/Y.locationSize*J*Wt,Z)}}else if(k!==void 0){let tt=k[B];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(Y.location,tt);break;case 3:r.vertexAttrib3fv(Y.location,tt);break;case 4:r.vertexAttrib4fv(Y.location,tt);break;default:r.vertexAttrib1fv(Y.location,tt)}}}}v()}function M(){C();for(let E in i){let P=i[E];for(let I in P){let F=P[I];for(let V in F)h(F[V].object),delete F[V];delete P[I]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;let P=i[E.id];for(let I in P){let F=P[I];for(let V in F)h(F[V].object),delete F[V];delete P[I]}delete i[E.id]}function w(E){for(let P in i){let I=i[P];if(I[E.id]===void 0)continue;let F=I[E.id];for(let V in F)h(F[V].object),delete F[V];delete I[E.id]}}function C(){x(),a=!0,s!==n&&(s=n,c(s.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function tv(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ev(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==Zi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(At("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:M,samples:T}}function iv(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Yi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,y=v*4,S=p.clippingState||null;l.value=S,S=h(_,d,y,f);for(let M=0;M!==y;++M)S[M]=e[M];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==g;++y,S+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function nv(r){let t=new WeakMap;function e(a,o){return o===tc?a.mapping=ms:o===ec&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===tc||o===ec)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new La(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var xs=4,Sp=[.125,.215,.35,.446,.526,.582],js=20,sv=256,$a=new Vr,Tp=new Tt,Lu=null,Fu=0,Ou=0,Nu=!1,rv=new D,qc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:a=256,position:o=rv}=s;Lu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lu,Fu,Ou),this._renderer.xr.enabled=Nu,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:yn,format:Zi,colorSpace:zs,depthBuffer:!1},n=Ep(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ep(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=av(s)),this._blurMaterial=lv(s,t,e),this._ggxMaterial=ov(s,t,e)}return n}_compileMaterial(t){let e=new Nt(new ee,t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,i,n,s){let l=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Tp),u.toneMapping=un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Lr,new cn({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Tp),p=!0);for(let y=0;y<6;y++){let S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let M=this._cubeSize;qr(n,S*M,y>2?M:0,M,M),u.setRenderTarget(n),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ms||t.mapping===Gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$a)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-xs?i-_+xs:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,qr(s,m,p,3*g,2*g),n.setRenderTarget(s),n.render(o,$a),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,qr(t,m,p,3*g,2*g),n.setRenderTarget(t),n.render(o,$a)}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[n];u.material=c;let d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*js-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):js;m>js&&At(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);let p=[],v=0;for(let w=0;w<js;++w){let C=w/g,x=Math.exp(-C*C/2);p.push(x),w===0?v+=x:w<m&&(v+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-i;let S=this._sizeLods[n],M=3*S*(n>y-xs?n-y+xs:0),T=4*(this._cubeSize-S);qr(e,M,T,3*S,2*S),l.setRenderTarget(e),l.render(u,$a)}};function av(r){let t=[],e=[],i=[],n=r,s=r-xs+1+Sp.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);t.push(o);let l=1/o;a>r-xs?l=Sp[a-r+xs-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),y=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,C=T>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(x,g*_*T),y.set(d,m*_*T);let E=[T,T,T,T,T,T];S.set(E,p*_*T)}let M=new ee;M.setAttribute("position",new xe(v,g)),M.setAttribute("uv",new xe(y,m)),M.setAttribute("faceIndex",new xe(S,p)),i.push(new Nt(M,null)),n>xs&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Ep(r,t,e){let i=new Ii(r,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function ov(r,t,e){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function lv(r,t,e){let i=new Float32Array(js),n=new D(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:jc(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function wp(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ap(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function cv(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===tc||l===ec,h=l===ms||l===Gs;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new qc(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new qc(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function hv(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Pr("WebGLRenderer: "+i+" extension not supported."),n}}}function uv(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let v=f.array;g=f.version;for(let y=0,S=v.length;y<S;y+=3){let M=v[y+0],T=v[y+1],w=v[y+2];d.push(M,T,T,w,w,M)}}else if(_!==void 0){let v=_.array;g=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){let M=y+0,T=y+1,w=y+2;d.push(M,T,T,w,w,M)}}else return;let m=new(Au(d)?Pa:Ra)(d,1);m.version=g;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function dv(r,t,e){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*a),e.update(f,i,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(i,f,s,d*a,_),e.update(f,i,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=f[v]*g[v];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Ct("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function pv(r,t,e){let i=new WeakMap,n=new ye;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*T*4*u),C=new Aa(w,M,T,u);C.type=fn,C.needsUpdate=!0;let x=S*4;for(let P=0;P<u;P++){let I=p[P],F=v[P],V=y[P],H=M*T*4*P;for(let k=0;k<I.count;k++){let B=k*x;_===!0&&(n.fromBufferAttribute(I,k),w[H+B+0]=n.x,w[H+B+1]=n.y,w[H+B+2]=n.z,w[H+B+3]=0),g===!0&&(n.fromBufferAttribute(F,k),w[H+B+4]=n.x,w[H+B+5]=n.y,w[H+B+6]=n.z,w[H+B+7]=0),m===!0&&(n.fromBufferAttribute(V,k),w[H+B+8]=n.x,w[H+B+9]=n.y,w[H+B+10]=n.z,w[H+B+11]=V.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new vt(M,T)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function mv(r,t,e,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var gv={[fu]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[Xa]:"ACES_FILMIC_TONE_MAPPING",[_u]:"AGX_TONE_MAPPING",[xu]:"NEUTRAL_TONE_MAPPING",[gu]:"CUSTOM_TONE_MAPPING"};function _v(r,t,e,i,n){let s=new Ii(t,e,{type:r,depthBuffer:i,stencilBuffer:n}),a=new Ii(t,e,{type:yn,depthBuffer:!1,stencilBuffer:!1}),o=new ee;o.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let l=new Il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Nt(o,l),h=new Vr(-1,1,1,-1,0,1),u=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let S=0;S<m.length;S++){let M=m[S];M.setSize&&M.setSize(v,y)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;let y=s.width,S=s.height;for(let M=0;M<m.length;M++){let T=m[M];T.setSize&&T.setSize(y,S)}},this.begin=function(v,y){if(f||v.toneMapping===un&&m.length===0)return!1;if(g=y,y!==null){let S=y.width,M=y.height;(s.width!==S||s.height!==M)&&this.setSize(S,M)}return p===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=un,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=_,f=!0;let S=s,M=a;for(let T=0;T<m.length;T++){let w=m[T];if(w.enabled!==!1&&(w.render(v,M,S,y),w.needsSwap!==!1)){let C=S;S=M,M=C}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,l.defines={},Yt.getTransfer(u)===te&&(l.defines.SRGB_TRANSFER="");let T=gv[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Yp=new Oi,zu=new os(1,1),qp=new Aa,Zp=new Sl,jp=new Da,Cp=[],Rp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Dp=new Float32Array(4);function jr(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Cp[n];if(s===void 0&&(s=new Float32Array(n),Cp[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Oe(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Kc(r,t){let e=Rp[t];e===void 0&&(e=new Int32Array(t),Rp[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function xv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2fv(this.addr,t),Ne(e,t)}}function yv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;r.uniform3fv(this.addr,t),Ne(e,t)}}function bv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4fv(this.addr,t),Ne(e,t)}}function Mv(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Oe(e,i))return;Dp.set(i),r.uniformMatrix2fv(this.addr,!1,Dp),Ne(e,i)}}function Sv(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Oe(e,i))return;Ip.set(i),r.uniformMatrix3fv(this.addr,!1,Ip),Ne(e,i)}}function Tv(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Oe(e,i))return;Pp.set(i),r.uniformMatrix4fv(this.addr,!1,Pp),Ne(e,i)}}function Ev(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function wv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2iv(this.addr,t),Ne(e,t)}}function Av(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;r.uniform3iv(this.addr,t),Ne(e,t)}}function Cv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4iv(this.addr,t),Ne(e,t)}}function Rv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Pv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;r.uniform2uiv(this.addr,t),Ne(e,t)}}function Iv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;r.uniform3uiv(this.addr,t),Ne(e,t)}}function Dv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;r.uniform4uiv(this.addr,t),Ne(e,t)}}function Lv(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(zu.compareFunction=e.isReversedDepthBuffer()?Gc:Hc,s=zu):s=Yp,e.setTexture2D(t||s,n)}function Fv(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Zp,n)}function Ov(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||jp,n)}function Nv(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qp,n)}function Uv(r){switch(r){case 5126:return xv;case 35664:return vv;case 35665:return yv;case 35666:return bv;case 35674:return Mv;case 35675:return Sv;case 35676:return Tv;case 5124:case 35670:return Ev;case 35667:case 35671:return wv;case 35668:case 35672:return Av;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Iv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Nv}}function Bv(r,t){r.uniform1fv(this.addr,t)}function zv(r,t){let e=jr(t,this.size,2);r.uniform2fv(this.addr,e)}function kv(r,t){let e=jr(t,this.size,3);r.uniform3fv(this.addr,e)}function Vv(r,t){let e=jr(t,this.size,4);r.uniform4fv(this.addr,e)}function Hv(r,t){let e=jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Gv(r,t){let e=jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Wv(r,t){let e=jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Xv(r,t){r.uniform1iv(this.addr,t)}function Yv(r,t){r.uniform2iv(this.addr,t)}function qv(r,t){r.uniform3iv(this.addr,t)}function Zv(r,t){r.uniform4iv(this.addr,t)}function jv(r,t){r.uniform1uiv(this.addr,t)}function Kv(r,t){r.uniform2uiv(this.addr,t)}function Jv(r,t){r.uniform3uiv(this.addr,t)}function $v(r,t){r.uniform4uiv(this.addr,t)}function Qv(r,t,e){let i=this.cache,n=t.length,s=Kc(e,n);Oe(i,s)||(r.uniform1iv(this.addr,s),Ne(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=zu:a=Yp;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,s[o])}function ty(r,t,e){let i=this.cache,n=t.length,s=Kc(e,n);Oe(i,s)||(r.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Zp,s[a])}function ey(r,t,e){let i=this.cache,n=t.length,s=Kc(e,n);Oe(i,s)||(r.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||jp,s[a])}function iy(r,t,e){let i=this.cache,n=t.length,s=Kc(e,n);Oe(i,s)||(r.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||qp,s[a])}function ny(r){switch(r){case 5126:return Bv;case 35664:return zv;case 35665:return kv;case 35666:return Vv;case 35674:return Hv;case 35675:return Gv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return Yv;case 35668:case 35672:return qv;case 35669:case 35673:return Zv;case 5125:return jv;case 36294:return Kv;case 36295:return Jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ty;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return iy}}var ku=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Uv(e.type)}},Vu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ny(e.type)}},Hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Uu=/(\w+)(\])?(\[|\.)?/g;function Lp(r,t){r.seq.push(t),r.map[t.id]=t}function sy(r,t,e){let i=r.name,n=i.length;for(Uu.lastIndex=0;;){let s=Uu.exec(i),a=Uu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Lp(e,c===void 0?new ku(o,r,t):new Vu(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Hu(o),Lp(e,u)),e=u}}}var Zr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);sy(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Fp(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var ry=37297,ay=0;function oy(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Op=new Ft;function ly(r){Yt._getMatrix(Op,Yt.workingColorSpace,r);let t=`mat3( ${Op.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case Sa:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Np(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+oy(r.getShaderSource(t),o)}else return s}function cy(r,t){let e=ly(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hy={[fu]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[Xa]:"ACESFilmic",[_u]:"AgX",[xu]:"Neutral",[gu]:"Custom"};function uy(r,t){let e=hy[t];return e===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yc=new D;function dy(){Yt.getLuminanceCoefficients(Yc);let r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),e=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function py(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function my(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function to(r){return r!==""}function Up(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(r){return r.replace(gy,xy)}var _y=new Map;function xy(r,t){let e=Bt[t];if(e===void 0){let i=_y.get(t);if(i!==void 0)e=Bt[i],At('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gu(e)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(r){return r.replace(vy,yy)}function yy(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function kp(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var by={[Wa]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function My(r){return by[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sy={[ms]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Ya]:"ENVMAP_TYPE_CUBE_UV"};function Ty(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Sy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ey={[Gs]:"ENVMAP_MODE_REFRACTION"};function wy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ey[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ay={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[op]:"ENVMAP_BLENDING_ADD"};function Cy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ay[r.combine]||"ENVMAP_BLENDING_NONE"}function Ry(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Py(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=My(e),c=Ty(e),h=wy(e),u=Cy(e),d=Ry(e),f=fy(e),_=py(s),g=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==un?uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,cy("linearToOutputTexel",e.outputColorSpace),dy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),a=Gu(a),a=Up(a,e),a=Bp(a,e),o=Gu(o),o=Up(o,e),o=Bp(o,e),a=zp(a),o=zp(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+a,S=v+p+o,M=Fp(n,n.VERTEX_SHADER,y),T=Fp(n,n.FRAGMENT_SHADER,S);n.attachShader(g,M),n.attachShader(g,T),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){let I=n.getProgramInfoLog(g)||"",F=n.getShaderInfoLog(M)||"",V=n.getShaderInfoLog(T)||"",H=I.trim(),k=F.trim(),B=V.trim(),Y=!0,rt=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,M,T);else{let tt=Np(n,M,"vertex"),lt=Np(n,T,"fragment");Ct("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+tt+`
`+lt)}else H!==""?At("WebGLProgram: Program Info Log:",H):(k===""||B==="")&&(rt=!1);rt&&(P.diagnostics={runnable:Y,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}n.deleteShader(M),n.deleteShader(T),C=new Zr(n,g),x=my(n,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(g,ry)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ay++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}var Iy=0,Wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xu(t),e.set(t,i)),i}},Xu=class{constructor(t){this.id=Iy++,this.code=t,this.usedTimes=0}};function Dy(r,t,e,i,n,s,a){let o=new Ca,l=new Wu,c=new Set,h=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,P,I,F){let V=I.fog,H=F.geometry,k=x.isMeshStandardMaterial?I.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),Y=B&&B.mapping===Ya?B.image.height:null,rt=_[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&At("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=tt!==void 0?tt.length:0,Rt=0;H.morphAttributes.position!==void 0&&(Rt=1),H.morphAttributes.normal!==void 0&&(Rt=2),H.morphAttributes.color!==void 0&&(Rt=3);let Dt,Gt,Wt,Z;if(rt){let ne=Mn[rt];Dt=ne.vertexShader,Gt=ne.fragmentShader}else Dt=x.vertexShader,Gt=x.fragmentShader,l.update(x),Wt=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);let J=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,jt=!!x.map,ze=!!x.matcap,qt=!!B,ie=!!x.aoMap,he=!!x.lightMap,zt=!!x.bumpMap,De=!!x.normalMap,L=!!x.displacementMap,Le=!!x.emissiveMap,Qt=!!x.metalnessMap,pe=!!x.roughnessMap,yt=x.anisotropy>0,R=x.clearcoat>0,b=x.dispersion>0,N=x.iridescence>0,q=x.sheen>0,K=x.transmission>0,X=yt&&!!x.anisotropyMap,Mt=R&&!!x.clearcoatMap,nt=R&&!!x.clearcoatNormalMap,xt=R&&!!x.clearcoatRoughnessMap,It=N&&!!x.iridescenceMap,Q=N&&!!x.iridescenceThicknessMap,at=q&&!!x.sheenColorMap,gt=q&&!!x.sheenRoughnessMap,bt=!!x.specularMap,st=!!x.specularColorMap,kt=!!x.specularIntensityMap,O=K&&!!x.transmissionMap,ut=K&&!!x.thicknessMap,et=!!x.gradientMap,dt=!!x.alphaMap,$=x.alphaTest>0,j=!!x.alphaHash,it=!!x.extensions,Lt=un;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=r.toneMapping);let me={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Dt,fragmentShader:Gt,defines:x.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zs,alphaToCoverage:!!x.alphaToCoverage,map:jt,matcap:ze,envMap:qt,envMapMode:qt&&B.mapping,envMapCubeUVHeight:Y,aoMap:ie,lightMap:he,bumpMap:zt,normalMap:De,displacementMap:L,emissiveMap:Le,normalMapObjectSpace:De&&x.normalMapType===hp,normalMapTangentSpace:De&&x.normalMapType===Vc,metalnessMap:Qt,roughnessMap:pe,anisotropy:yt,anisotropyMap:X,clearcoat:R,clearcoatMap:Mt,clearcoatNormalMap:nt,clearcoatRoughnessMap:xt,dispersion:b,iridescence:N,iridescenceMap:It,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:at,sheenRoughnessMap:gt,specularMap:bt,specularColorMap:st,specularIntensityMap:kt,transmission:K,transmissionMap:O,thicknessMap:ut,gradientMap:et,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:$,alphaHash:j,combine:x.combine,mapUv:jt&&g(x.map.channel),aoMapUv:ie&&g(x.aoMap.channel),lightMapUv:he&&g(x.lightMap.channel),bumpMapUv:zt&&g(x.bumpMap.channel),normalMapUv:De&&g(x.normalMap.channel),displacementMapUv:L&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:Qt&&g(x.metalnessMap.channel),roughnessMapUv:pe&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:Mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:bt&&g(x.specularMap.channel),specularColorMapUv:st&&g(x.specularColorMap.channel),specularIntensityMapUv:kt&&g(x.specularIntensityMap.channel),transmissionMapUv:O&&g(x.transmissionMap.channel),thicknessMapUv:ut&&g(x.thicknessMap.channel),alphaMapUv:dt&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(De||yt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(jt||dt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Lt,decodeVideoTexture:jt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===We,flipSided:x.side===di,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(E,x),y(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let E=_[x.type],P;if(E){let I=Mn[E];P=yp.clone(I.uniforms)}else P=x.uniforms;return P}function M(x,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new Py(r,E,x,s),h.push(P),u.set(E,P)),P}function T(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:C}}function Ly(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Fy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Vp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Hp(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Fy),i.length>1&&i.sort(d||Vp),n.length>1&&n.sort(d||Vp)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Oy(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Hp,r.set(i,[a])):n>=s.length?(a=new Hp,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ny(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Tt};break;case"SpotLight":e={position:new D,direction:new D,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Uy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var By=0;function zy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ky(r){let t=new Ny,e=Uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let n=new D,s=new _e,a=new _e;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,v=0,y=0,S=0,M=0,T=0,w=0;c.sort(zy);for(let x=0,E=c.length;x<E;x++){let P=c[x],I=P.color,F=P.intensity,V=P.distance,H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ws?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],F);w++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=k,f++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[g]=k;let B=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,B.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[g]=B.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=H,S++}g++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(I).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=P.shadow.matrix,y++}i.point[_]=k,_++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let C=i.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==M||C.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=M,C.numLightProbes=w,i.version=By++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=i.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Gp(r){let t=new ky(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vy(r){let t=new WeakMap;function e(n,s=0){let a=t.get(n),o;return a===void 0?(o=new Gp(r),t.set(n,[o])):s>=a.length?(o=new Gp(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`,Wy=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Xy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Wp=new _e,Qa=new D,Bu=new D;function Yy(r,t,e){let i=new Ur,n=new vt,s=new vt,a=new ye,o=new Dl,l=new Ll,c={},h=e.maxTextureSize,u={[zn]:di,[di]:zn,[We]:We},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Hy,fragmentShader:Gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new ee;_.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Nt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===Xl&&(At("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Wa);let x=r.getRenderTarget(),E=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(vn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=p!==this.type;F&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=T.length;V<H;V++){let k=T[V],B=k.shadow;if(B===void 0){At("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let Y=B.getFrameExtents();if(n.multiply(Y),s.copy(B.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Y.x),n.x=s.x*Y.x,B.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Y.y),n.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wr){if(k.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ii(n.x,n.y,{format:Ws,type:yn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new os(n.x,n.y,fn),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=mn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=He,B.map.depthTexture.magFilter=He}else{k.isPointLight?(B.map=new La(n.x),B.map.depthTexture=new Rl(n.x,dn)):(B.map=new Ii(n.x,n.y),B.map.depthTexture=new os(n.x,n.y,dn)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=mn;let tt=r.state.buffers.depth.getReversed();this.type===Wa?(B.map.depthTexture.compareFunction=tt?Gc:Hc,B.map.depthTexture.minFilter=qe,B.map.depthTexture.magFilter=qe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=He,B.map.depthTexture.magFilter=He)}B.camera.updateProjectionMatrix()}let rt=B.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<rt;tt++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(B.map),r.clear());let lt=B.getViewport(tt);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),I.viewport(a)}if(k.isPointLight){let lt=B.camera,Rt=B.matrix,Dt=k.distance||lt.far;Dt!==lt.far&&(lt.far=Dt,lt.updateProjectionMatrix()),Qa.setFromMatrixPosition(k.matrixWorld),lt.position.copy(Qa),Bu.copy(lt.position),Bu.add(Wy[tt]),lt.up.copy(Xy[tt]),lt.lookAt(Bu),lt.updateMatrixWorld(),Rt.makeTranslation(-Qa.x,-Qa.y,-Qa.z),Wp.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Wp,lt.coordinateSystem,lt.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),S(w,C,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===Wr&&v(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,E,P)};function v(T,w){let C=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ii(n.x,n.y,{format:Ws,type:yn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(w,null,C,f,g,null)}function y(T,w,C,x){let E=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)E=P;else if(E=C.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=E.uuid,F=w.uuid,V=c[I];V===void 0&&(V={},c[I]=V);let H=V[F];H===void 0&&(H=E.clone(),V[F]=H,w.addEventListener("dispose",M)),E=H}if(E.visible=w.visible,E.wireframe=w.wireframe,x===Wr?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=r.properties.get(E);I.light=C}return E}function S(T,w,C,x,E){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Wr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let F=t.update(T),V=T.material;if(Array.isArray(V)){let H=F.groups;for(let k=0,B=H.length;k<B;k++){let Y=H[k],rt=V[Y.materialIndex];if(rt&&rt.visible){let tt=y(T,rt,x,E);T.onBeforeShadow(r,T,w,C,F,tt,Y),r.renderBufferDirect(C,null,F,tt,T,Y),T.onAfterShadow(r,T,w,C,F,tt,Y)}}}else if(V.visible){let H=y(T,V,x,E);T.onBeforeShadow(r,T,w,C,F,H,null),r.renderBufferDirect(C,null,F,H,T,null),T.onAfterShadow(r,T,w,C,F,H,null)}}let I=T.children;for(let F=0,V=I.length;F<V;F++)S(I[F],w,C,x,E)}function M(T){T.target.removeEventListener("dispose",M);for(let C in c){let x=c[C],E=T.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}var qy={[Yl]:ql,[Zl]:Jl,[jl]:$l,[Bs]:Kl,[ql]:Yl,[Jl]:Zl,[$l]:jl,[Kl]:Bs};function Zy(r,t){function e(){let O=!1,ut=new ye,et=null,dt=new ye(0,0,0,0);return{setMask:function($){et!==$&&!O&&(r.colorMask($,$,$,$),et=$)},setLocked:function($){O=$},setClear:function($,j,it,Lt,me){me===!0&&($*=Lt,j*=Lt,it*=Lt),ut.set($,j,it,Lt),dt.equals(ut)===!1&&(r.clearColor($,j,it,Lt),dt.copy(ut))},reset:function(){O=!1,et=null,dt.set(-1,0,0,0)}}}function i(){let O=!1,ut=!1,et=null,dt=null,$=null;return{setReversed:function(j){if(ut!==j){let it=t.get("EXT_clip_control");j?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ut=j;let Lt=$;$=null,this.setClear(Lt)}},getReversed:function(){return ut},setTest:function(j){j?J(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(j){et!==j&&!O&&(r.depthMask(j),et=j)},setFunc:function(j){if(ut&&(j=qy[j]),dt!==j){switch(j){case Yl:r.depthFunc(r.NEVER);break;case ql:r.depthFunc(r.ALWAYS);break;case Zl:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case jl:r.depthFunc(r.EQUAL);break;case Kl:r.depthFunc(r.GEQUAL);break;case Jl:r.depthFunc(r.GREATER);break;case $l:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=j}},setLocked:function(j){O=j},setClear:function(j){$!==j&&(ut&&(j=1-j),r.clearDepth(j),$=j)},reset:function(){O=!1,et=null,dt=null,$=null,ut=!1}}}function n(){let O=!1,ut=null,et=null,dt=null,$=null,j=null,it=null,Lt=null,me=null;return{setTest:function(ne){O||(ne?J(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(ne){ut!==ne&&!O&&(r.stencilMask(ne),ut=ne)},setFunc:function(ne,pn,An){(et!==ne||dt!==pn||$!==An)&&(r.stencilFunc(ne,pn,An),et=ne,dt=pn,$=An)},setOp:function(ne,pn,An){(j!==ne||it!==pn||Lt!==An)&&(r.stencilOp(ne,pn,An),j=ne,it=pn,Lt=An)},setLocked:function(ne){O=ne},setClear:function(ne){me!==ne&&(r.clearStencil(ne),me=ne)},reset:function(){O=!1,ut=null,et=null,dt=null,$=null,j=null,it=null,Lt=null,me=null}}}let s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,y=null,S=null,M=null,T=null,w=new Tt(0,0,0),C=0,x=!1,E=null,P=null,I=null,F=null,V=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,B=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=B>=2);let rt=null,tt={},lt=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),Dt=new ye().fromArray(lt),Gt=new ye().fromArray(Rt);function Wt(O,ut,et,dt){let $=new Uint8Array(4),j=r.createTexture();r.bindTexture(O,j),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<et;it++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(ut+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return j}let Z={};Z[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(Bs),zt(!1),De(hu),J(r.CULL_FACE),ie(vn);function J(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function pt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Ot(O,ut){return u[O]!==ut?(r.bindFramebuffer(O,ut),u[O]=ut,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(O,ut){let et=f,dt=!1;if(O){et=d.get(ut),et===void 0&&(et=[],d.set(ut,et));let $=O.textures;if(et.length!==$.length||et[0]!==r.COLOR_ATTACHMENT0){for(let j=0,it=$.length;j<it;j++)et[j]=r.COLOR_ATTACHMENT0+j;et.length=$.length,dt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,dt=!0);dt&&r.drawBuffers(et)}function jt(O){return _!==O?(r.useProgram(O),_=O,!0):!1}let ze={[ss]:r.FUNC_ADD,[Gf]:r.FUNC_SUBTRACT,[Wf]:r.FUNC_REVERSE_SUBTRACT};ze[Xf]=r.MIN,ze[Yf]=r.MAX;let qt={[qf]:r.ZERO,[Zf]:r.ONE,[jf]:r.SRC_COLOR,[gl]:r.SRC_ALPHA,[ep]:r.SRC_ALPHA_SATURATE,[Qf]:r.DST_COLOR,[Jf]:r.DST_ALPHA,[Kf]:r.ONE_MINUS_SRC_COLOR,[_l]:r.ONE_MINUS_SRC_ALPHA,[tp]:r.ONE_MINUS_DST_COLOR,[$f]:r.ONE_MINUS_DST_ALPHA,[ip]:r.CONSTANT_COLOR,[np]:r.ONE_MINUS_CONSTANT_COLOR,[sp]:r.CONSTANT_ALPHA,[rp]:r.ONE_MINUS_CONSTANT_ALPHA};function ie(O,ut,et,dt,$,j,it,Lt,me,ne){if(O===vn){g===!0&&(pt(r.BLEND),g=!1);return}if(g===!1&&(J(r.BLEND),g=!0),O!==Hf){if(O!==m||ne!==x){if((p!==ss||S!==ss)&&(r.blendEquation(r.FUNC_ADD),p=ss,S=ss),ne)switch(O){case Us:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ni:r.blendFunc(r.ONE,r.ONE);break;case uu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case du:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",O);break}else switch(O){case Us:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case uu:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case du:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",O);break}v=null,y=null,M=null,T=null,w.set(0,0,0),C=0,m=O,x=ne}return}$=$||ut,j=j||et,it=it||dt,(ut!==p||$!==S)&&(r.blendEquationSeparate(ze[ut],ze[$]),p=ut,S=$),(et!==v||dt!==y||j!==M||it!==T)&&(r.blendFuncSeparate(qt[et],qt[dt],qt[j],qt[it]),v=et,y=dt,M=j,T=it),(Lt.equals(w)===!1||me!==C)&&(r.blendColor(Lt.r,Lt.g,Lt.b,me),w.copy(Lt),C=me),m=O,x=!1}function he(O,ut){O.side===We?pt(r.CULL_FACE):J(r.CULL_FACE);let et=O.side===di;ut&&(et=!et),zt(et),O.blending===Us&&O.transparent===!1?ie(vn):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);let dt=O.stencilWrite;o.setTest(dt),dt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(O){E!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),E=O)}function De(O){O!==kf?(J(r.CULL_FACE),O!==P&&(O===hu?r.cullFace(r.BACK):O===Vf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),P=O}function L(O){O!==I&&(k&&r.lineWidth(O),I=O)}function Le(O,ut,et){O?(J(r.POLYGON_OFFSET_FILL),(F!==ut||V!==et)&&(r.polygonOffset(ut,et),F=ut,V=et)):pt(r.POLYGON_OFFSET_FILL)}function Qt(O){O?J(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function pe(O){O===void 0&&(O=r.TEXTURE0+H-1),rt!==O&&(r.activeTexture(O),rt=O)}function yt(O,ut,et){et===void 0&&(rt===null?et=r.TEXTURE0+H-1:et=rt);let dt=tt[et];dt===void 0&&(dt={type:void 0,texture:void 0},tt[et]=dt),(dt.type!==O||dt.texture!==ut)&&(rt!==et&&(r.activeTexture(et),rt=et),r.bindTexture(O,ut||Z[O]),dt.type=O,dt.texture=ut)}function R(){let O=tt[rt];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(O){Ct("WebGLState:",O)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(O){Ct("WebGLState:",O)}}function q(){try{r.texSubImage2D(...arguments)}catch(O){Ct("WebGLState:",O)}}function K(){try{r.texSubImage3D(...arguments)}catch(O){Ct("WebGLState:",O)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Ct("WebGLState:",O)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Ct("WebGLState:",O)}}function nt(){try{r.texStorage2D(...arguments)}catch(O){Ct("WebGLState:",O)}}function xt(){try{r.texStorage3D(...arguments)}catch(O){Ct("WebGLState:",O)}}function It(){try{r.texImage2D(...arguments)}catch(O){Ct("WebGLState:",O)}}function Q(){try{r.texImage3D(...arguments)}catch(O){Ct("WebGLState:",O)}}function at(O){Dt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Dt.copy(O))}function gt(O){Gt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Gt.copy(O))}function bt(O,ut){let et=c.get(ut);et===void 0&&(et=new WeakMap,c.set(ut,et));let dt=et.get(O);dt===void 0&&(dt=r.getUniformBlockIndex(ut,O.name),et.set(O,dt))}function st(O,ut){let dt=c.get(ut).get(O);l.get(ut)!==dt&&(r.uniformBlockBinding(ut,dt,O.__bindingPointIndex),l.set(ut,dt))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},rt=null,tt={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,y=null,S=null,M=null,T=null,w=new Tt(0,0,0),C=0,x=!1,E=null,P=null,I=null,F=null,V=null,Dt.set(0,0,r.canvas.width,r.canvas.height),Gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:pt,bindFramebuffer:Ot,drawBuffers:_t,useProgram:jt,setBlending:ie,setMaterial:he,setFlipSided:zt,setCullFace:De,setLineWidth:L,setPolygonOffset:Le,setScissorTest:Qt,activeTexture:pe,bindTexture:yt,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:N,texImage2D:It,texImage3D:Q,updateUBOMapping:bt,uniformBlockBinding:st,texStorage2D:nt,texStorage3D:xt,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:at,viewport:gt,reset:kt}}function jy(r,t,e,i,n,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return f?new OffscreenCanvas(R,b):Ea("canvas")}function g(R,b,N){let q=1,K=yt(R);if((K.width>N||K.height>N)&&(q=N/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let X=Math.floor(q*K.width),Mt=Math.floor(q*K.height);u===void 0&&(u=_(X,Mt));let nt=b?_(X,Mt):u;return nt.width=X,nt.height=Mt,nt.getContext("2d").drawImage(R,0,0,X,Mt),At("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Mt+")."),nt}else return"data"in R&&At("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,b,N,q,K=!1){if(R!==null){if(r[R]!==void 0)return r[R];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=b;if(b===r.RED&&(N===r.FLOAT&&(X=r.R32F),N===r.HALF_FLOAT&&(X=r.R16F),N===r.UNSIGNED_BYTE&&(X=r.R8)),b===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.R8UI),N===r.UNSIGNED_SHORT&&(X=r.R16UI),N===r.UNSIGNED_INT&&(X=r.R32UI),N===r.BYTE&&(X=r.R8I),N===r.SHORT&&(X=r.R16I),N===r.INT&&(X=r.R32I)),b===r.RG&&(N===r.FLOAT&&(X=r.RG32F),N===r.HALF_FLOAT&&(X=r.RG16F),N===r.UNSIGNED_BYTE&&(X=r.RG8)),b===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RG8UI),N===r.UNSIGNED_SHORT&&(X=r.RG16UI),N===r.UNSIGNED_INT&&(X=r.RG32UI),N===r.BYTE&&(X=r.RG8I),N===r.SHORT&&(X=r.RG16I),N===r.INT&&(X=r.RG32I)),b===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGB8UI),N===r.UNSIGNED_SHORT&&(X=r.RGB16UI),N===r.UNSIGNED_INT&&(X=r.RGB32UI),N===r.BYTE&&(X=r.RGB8I),N===r.SHORT&&(X=r.RGB16I),N===r.INT&&(X=r.RGB32I)),b===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),N===r.UNSIGNED_INT&&(X=r.RGBA32UI),N===r.BYTE&&(X=r.RGBA8I),N===r.SHORT&&(X=r.RGBA16I),N===r.INT&&(X=r.RGBA32I)),b===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),b===r.RGBA){let Mt=K?Sa:Yt.getTransfer(q);N===r.FLOAT&&(X=r.RGBA32F),N===r.HALF_FLOAT&&(X=r.RGBA16F),N===r.UNSIGNED_BYTE&&(X=Mt===te?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(R,b){let N;return R?b===null||b===dn||b===Yr?N=r.DEPTH24_STENCIL8:b===fn?N=r.DEPTH32F_STENCIL8:b===Xr&&(N=r.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===dn||b===Yr?N=r.DEPTH_COMPONENT24:b===fn?N=r.DEPTH_COMPONENT32F:b===Xr&&(N=r.DEPTH_COMPONENT16),N}function M(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==He&&R.minFilter!==qe?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){let b=R.target;b.removeEventListener("dispose",T),C(b),b.isVideoTexture&&h.delete(b)}function w(R){let b=R.target;b.removeEventListener("dispose",w),E(b)}function C(R){let b=i.get(R);if(b.__webglInit===void 0)return;let N=R.source,q=d.get(N);if(q){let K=q[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(R),Object.keys(q).length===0&&d.delete(N)}i.remove(R)}function x(R){let b=i.get(R);r.deleteTexture(b.__webglTexture);let N=R.source,q=d.get(N);delete q[b.__cacheKey],a.memory.textures--}function E(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let K=0;K<b.__webglFramebuffer[q].length;K++)r.deleteFramebuffer(b.__webglFramebuffer[q][K]);else r.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)r.deleteFramebuffer(b.__webglFramebuffer[q]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let N=R.textures;for(let q=0,K=N.length;q<K;q++){let X=i.get(N[q]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(R)}let P=0;function I(){P=0}function F(){let R=P;return R>=n.maxTextures&&At("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),P+=1,R}function V(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function H(R,b){let N=i.get(R);if(R.isVideoTexture&&Qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){let q=R.image;if(q===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(N,R,b);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+b)}function k(R,b){let N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){Z(N,R,b);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+b)}function B(R,b){let N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){Z(N,R,b);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+b)}function Y(R,b){let N=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){J(N,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+b)}let rt={[on]:r.REPEAT,[vi]:r.CLAMP_TO_EDGE,[xl]:r.MIRRORED_REPEAT},tt={[He]:r.NEAREST,[lp]:r.NEAREST_MIPMAP_NEAREST,[qa]:r.NEAREST_MIPMAP_LINEAR,[qe]:r.LINEAR,[ic]:r.LINEAR_MIPMAP_NEAREST,[gs]:r.LINEAR_MIPMAP_LINEAR},lt={[up]:r.NEVER,[gp]:r.ALWAYS,[dp]:r.LESS,[Hc]:r.LEQUAL,[fp]:r.EQUAL,[Gc]:r.GEQUAL,[pp]:r.GREATER,[mp]:r.NOTEQUAL};function Rt(R,b){if(b.type===fn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===qe||b.magFilter===ic||b.magFilter===qa||b.magFilter===gs||b.minFilter===qe||b.minFilter===ic||b.minFilter===qa||b.minFilter===gs)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,rt[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,rt[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,rt[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,tt[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===He||b.minFilter!==qa&&b.minFilter!==gs||b.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Dt(R,b){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let q=b.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let X=V(b);if(X!==R.__cacheKey){K[X]===void 0&&(K[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[X].usedTimes++;let Mt=K[R.__cacheKey];Mt!==void 0&&(K[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&x(b)),R.__cacheKey=X,R.__webglTexture=K[X].texture}return N}function Gt(R,b,N){return Math.floor(Math.floor(R/N)/b)}function Wt(R,b,N,q){let X=R.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,N,q,b.data);else{X.sort((Q,at)=>Q.start-at.start);let Mt=0;for(let Q=1;Q<X.length;Q++){let at=X[Mt],gt=X[Q],bt=at.start+at.count,st=Gt(gt.start,b.width,4),kt=Gt(at.start,b.width,4);gt.start<=bt+1&&st===kt&&Gt(gt.start+gt.count-1,b.width,4)===st?at.count=Math.max(at.count,gt.start+gt.count-at.start):(++Mt,X[Mt]=gt)}X.length=Mt+1;let nt=r.getParameter(r.UNPACK_ROW_LENGTH),xt=r.getParameter(r.UNPACK_SKIP_PIXELS),It=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Q=0,at=X.length;Q<at;Q++){let gt=X[Q],bt=Math.floor(gt.start/4),st=Math.ceil(gt.count/4),kt=bt%b.width,O=Math.floor(bt/b.width),ut=st,et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),e.texSubImage2D(r.TEXTURE_2D,0,kt,O,ut,et,N,q,b.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,nt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,It)}}function Z(R,b,N){let q=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=r.TEXTURE_3D);let K=Dt(R,b),X=b.source;e.bindTexture(q,R.__webglTexture,r.TEXTURE0+N);let Mt=i.get(X);if(X.version!==Mt.__version||K===!0){e.activeTexture(r.TEXTURE0+N);let nt=Yt.getPrimaries(Yt.workingColorSpace),xt=b.colorSpace===Hn?null:Yt.getPrimaries(b.colorSpace),It=b.colorSpace===Hn||nt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Q=g(b.image,!1,n.maxTextureSize);Q=pe(b,Q);let at=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),bt=y(b.internalFormat,at,gt,b.colorSpace,b.isVideoTexture);Rt(q,b);let st,kt=b.mipmaps,O=b.isVideoTexture!==!0,ut=Mt.__version===void 0||K===!0,et=X.dataReady,dt=M(b,Q);if(b.isDepthTexture)bt=S(b.format===_s,b.type),ut&&(O?e.texStorage2D(r.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,at,gt,null));else if(b.isDataTexture)if(kt.length>0){O&&ut&&e.texStorage2D(r.TEXTURE_2D,dt,bt,kt[0].width,kt[0].height);for(let $=0,j=kt.length;$<j;$++)st=kt[$],O?et&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,st.width,st.height,at,gt,st.data):e.texImage2D(r.TEXTURE_2D,$,bt,st.width,st.height,0,at,gt,st.data);b.generateMipmaps=!1}else O?(ut&&e.texStorage2D(r.TEXTURE_2D,dt,bt,Q.width,Q.height),et&&Wt(b,Q,at,gt)):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,at,gt,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,bt,kt[0].width,kt[0].height,Q.depth);for(let $=0,j=kt.length;$<j;$++)if(st=kt[$],b.format!==Zi)if(at!==null)if(O){if(et)if(b.layerUpdates.size>0){let it=Du(st.width,st.height,b.format,b.type);for(let Lt of b.layerUpdates){let me=st.data.subarray(Lt*it/st.data.BYTES_PER_ELEMENT,(Lt+1)*it/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Lt,st.width,st.height,1,at,me)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,st.width,st.height,Q.depth,at,st.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,bt,st.width,st.height,Q.depth,0,st.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?et&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,st.width,st.height,Q.depth,at,gt,st.data):e.texImage3D(r.TEXTURE_2D_ARRAY,$,bt,st.width,st.height,Q.depth,0,at,gt,st.data)}else{O&&ut&&e.texStorage2D(r.TEXTURE_2D,dt,bt,kt[0].width,kt[0].height);for(let $=0,j=kt.length;$<j;$++)st=kt[$],b.format!==Zi?at!==null?O?et&&e.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,st.width,st.height,at,st.data):e.compressedTexImage2D(r.TEXTURE_2D,$,bt,st.width,st.height,0,st.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?et&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,st.width,st.height,at,gt,st.data):e.texImage2D(r.TEXTURE_2D,$,bt,st.width,st.height,0,at,gt,st.data)}else if(b.isDataArrayTexture)if(O){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,bt,Q.width,Q.height,Q.depth),et)if(b.layerUpdates.size>0){let $=Du(Q.width,Q.height,b.format,b.type);for(let j of b.layerUpdates){let it=Q.data.subarray(j*$/Q.data.BYTES_PER_ELEMENT,(j+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,at,gt,it)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,gt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,at,gt,Q.data);else if(b.isData3DTexture)O?(ut&&e.texStorage3D(r.TEXTURE_3D,dt,bt,Q.width,Q.height,Q.depth),et&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,gt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,at,gt,Q.data);else if(b.isFramebufferTexture){if(ut)if(O)e.texStorage2D(r.TEXTURE_2D,dt,bt,Q.width,Q.height);else{let $=Q.width,j=Q.height;for(let it=0;it<dt;it++)e.texImage2D(r.TEXTURE_2D,it,bt,$,j,0,at,gt,null),$>>=1,j>>=1}}else if(kt.length>0){if(O&&ut){let $=yt(kt[0]);e.texStorage2D(r.TEXTURE_2D,dt,bt,$.width,$.height)}for(let $=0,j=kt.length;$<j;$++)st=kt[$],O?et&&e.texSubImage2D(r.TEXTURE_2D,$,0,0,at,gt,st):e.texImage2D(r.TEXTURE_2D,$,bt,at,gt,st);b.generateMipmaps=!1}else if(O){if(ut){let $=yt(Q);e.texStorage2D(r.TEXTURE_2D,dt,bt,$.width,$.height)}et&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,gt,Q)}else e.texImage2D(r.TEXTURE_2D,0,bt,at,gt,Q);m(b)&&p(q),Mt.__version=X.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function J(R,b,N){if(b.image.length!==6)return;let q=Dt(R,b),K=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+N);let X=i.get(K);if(K.version!==X.__version||q===!0){e.activeTexture(r.TEXTURE0+N);let Mt=Yt.getPrimaries(Yt.workingColorSpace),nt=b.colorSpace===Hn?null:Yt.getPrimaries(b.colorSpace),xt=b.colorSpace===Hn||Mt===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let It=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,at=[];for(let j=0;j<6;j++)!It&&!Q?at[j]=g(b.image[j],!0,n.maxCubemapSize):at[j]=Q?b.image[j].image:b.image[j],at[j]=pe(b,at[j]);let gt=at[0],bt=s.convert(b.format,b.colorSpace),st=s.convert(b.type),kt=y(b.internalFormat,bt,st,b.colorSpace),O=b.isVideoTexture!==!0,ut=X.__version===void 0||q===!0,et=K.dataReady,dt=M(b,gt);Rt(r.TEXTURE_CUBE_MAP,b);let $;if(It){O&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,kt,gt.width,gt.height);for(let j=0;j<6;j++){$=at[j].mipmaps;for(let it=0;it<$.length;it++){let Lt=$[it];b.format!==Zi?bt!==null?O?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it,0,0,Lt.width,Lt.height,bt,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it,kt,Lt.width,Lt.height,0,Lt.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it,0,0,Lt.width,Lt.height,bt,st,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it,kt,Lt.width,Lt.height,0,bt,st,Lt.data)}}}else{if($=b.mipmaps,O&&ut){$.length>0&&dt++;let j=yt(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,kt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){O?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,at[j].width,at[j].height,bt,st,at[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,at[j].width,at[j].height,0,bt,st,at[j].data);for(let it=0;it<$.length;it++){let me=$[it].image[j].image;O?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it+1,0,0,me.width,me.height,bt,st,me.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it+1,kt,me.width,me.height,0,bt,st,me.data)}}else{O?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt,st,at[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,bt,st,at[j]);for(let it=0;it<$.length;it++){let Lt=$[it];O?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it+1,0,0,bt,st,Lt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,it+1,kt,bt,st,Lt.image[j])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),X.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function pt(R,b,N,q,K,X){let Mt=s.convert(N.format,N.colorSpace),nt=s.convert(N.type),xt=y(N.internalFormat,Mt,nt,N.colorSpace),It=i.get(b),Q=i.get(N);if(Q.__renderTarget=b,!It.__hasExternalTextures){let at=Math.max(1,b.width>>X),gt=Math.max(1,b.height>>X);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,X,xt,at,gt,b.depth,0,Mt,nt,null):e.texImage2D(K,X,xt,at,gt,0,Mt,nt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Le(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,K,Q.__webglTexture,0,L(b)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,K,Q.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(R,b,N){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let q=b.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=S(b.stencilBuffer,K),Mt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Le(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(b),X,b.width,b.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(b),X,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,X,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,R)}else{let q=b.textures;for(let K=0;K<q.length;K++){let X=q[K],Mt=s.convert(X.format,X.colorSpace),nt=s.convert(X.type),xt=y(X.internalFormat,Mt,nt,X.colorSpace);Le(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,L(b),xt,b.width,b.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,L(b),xt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,xt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(R,b,N){let q=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(b.depthTexture);if(K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,b.depthTexture);let It=s.convert(b.depthTexture.format),Q=s.convert(b.depthTexture.type),at;b.depthTexture.format===mn?at=r.DEPTH_COMPONENT24:b.depthTexture.format===_s&&(at=r.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,at,b.width,b.height,0,It,Q,null)}}else H(b.depthTexture,0);let X=K.__webglTexture,Mt=L(b),nt=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,xt=b.depthTexture.format===_s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===mn)Le(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,nt,X,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,xt,nt,X,0);else if(b.depthTexture.format===_s)Le(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xt,nt,X,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,xt,nt,X,0);else throw new Error("Unknown depthTexture format")}function jt(R){let b=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)_t(b.__webglFramebuffer[q],R,q);else{let q=R.texture.mipmaps;q&&q.length>0?_t(b.__webglFramebuffer[0],R,0):_t(b.__webglFramebuffer,R,0)}else if(N){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=r.createRenderbuffer(),Ot(b.__webglDepthbuffer[q],R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,X)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ot(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(R,b,N){let q=i.get(R);b!==void 0&&pt(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&jt(R)}function qt(R){let b=R.texture,N=i.get(R),q=i.get(b);R.addEventListener("dispose",w);let K=R.textures,X=R.isWebGLCubeRenderTarget===!0,Mt=K.length>1;if(Mt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=b.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)N.__webglFramebuffer[nt][xt]=r.createFramebuffer()}else N.__webglFramebuffer[nt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<b.mipmaps.length;nt++)N.__webglFramebuffer[nt]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let nt=0,xt=K.length;nt<xt;nt++){let It=i.get(K[nt]);It.__webglTexture===void 0&&(It.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Le(R)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<K.length;nt++){let xt=K[nt];N.__webglColorRenderbuffer[nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);let It=s.convert(xt.format,xt.colorSpace),Q=s.convert(xt.type),at=y(xt.internalFormat,It,Q,xt.colorSpace,R.isXRRenderTarget===!0),gt=L(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,at,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(N.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,b);for(let nt=0;nt<6;nt++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)pt(N.__webglFramebuffer[nt][xt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt);else pt(N.__webglFramebuffer[nt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let nt=0,xt=K.length;nt<xt;nt++){let It=K[nt],Q=i.get(It),at=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),Rt(at,It),pt(N.__webglFramebuffer,R,It,r.COLOR_ATTACHMENT0+nt,at,0),m(It)&&p(at)}e.unbindTexture()}else{let nt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(nt,q.__webglTexture),Rt(nt,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)pt(N.__webglFramebuffer[xt],R,b,r.COLOR_ATTACHMENT0,nt,xt);else pt(N.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,nt,0);m(b)&&p(nt),e.unbindTexture()}R.depthBuffer&&jt(R)}function ie(R){let b=R.textures;for(let N=0,q=b.length;N<q;N++){let K=b[N];if(m(K)){let X=v(R),Mt=i.get(K).__webglTexture;e.bindTexture(X,Mt),p(X),e.unbindTexture()}}}let he=[],zt=[];function De(R){if(R.samples>0){if(Le(R)===!1){let b=R.textures,N=R.width,q=R.height,K=r.COLOR_BUFFER_BIT,X=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=i.get(R),nt=b.length>1;if(nt)for(let It=0;It<b.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let xt=R.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let It=0;It<b.length;It++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);let Q=i.get(b[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,N,q,0,0,N,q,K,r.NEAREST),l===!0&&(he.length=0,zt.length=0,he.push(r.COLOR_ATTACHMENT0+It),R.depthBuffer&&R.resolveDepthBuffer===!1&&(he.push(X),zt.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),nt)for(let It=0;It<b.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);let Q=i.get(b[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function L(R){return Math.min(n.maxSamples,R.samples)}function Le(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qt(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function pe(R,b){let N=R.colorSpace,q=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==zs&&N!==Hn&&(Yt.getTransfer(N)===te?(q!==Zi||K!==yi)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",N)),b}function yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=ze,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ky(r,t){function e(i,n=Hn){let s,a=Yt.getTransfer(n);if(i===yi)return r.UNSIGNED_BYTE;if(i===sc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Mu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===vu)return r.BYTE;if(i===yu)return r.SHORT;if(i===Xr)return r.UNSIGNED_SHORT;if(i===nc)return r.INT;if(i===dn)return r.UNSIGNED_INT;if(i===fn)return r.FLOAT;if(i===yn)return r.HALF_FLOAT;if(i===Su)return r.ALPHA;if(i===Tu)return r.RGB;if(i===Zi)return r.RGBA;if(i===mn)return r.DEPTH_COMPONENT;if(i===_s)return r.DEPTH_STENCIL;if(i===Eu)return r.RED;if(i===ac)return r.RED_INTEGER;if(i===Ws)return r.RG;if(i===oc)return r.RG_INTEGER;if(i===lc)return r.RGBA_INTEGER;if(i===Za||i===ja||i===Ka||i===Ja)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===hc||i===uc||i===dc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fc||i===pc)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===gc)return s.COMPRESSED_R11_EAC;if(i===_c)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return s.COMPRESSED_RG11_EAC;if(i===vc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yc||i===bc||i===Mc||i===Sc||i===Tc||i===Ec||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Ic||i===Dc||i===Lc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===Oc||i===Nc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Fc)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uc||i===Bc||i===zc||i===kc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Jy=`
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

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Li({vertexShader:Jy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends gn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new Yu,p={},v=e.getContextAttributes(),y=null,S=null,M=[],T=[],w=new vt,C=null,x=new Ye;x.viewport=new ye;let E=new Ye;E.viewport=new ye;let P=[x,E],I=new Gl,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=M[Z];return J===void 0&&(J=new Fr,M[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=M[Z];return J===void 0&&(J=new Fr,M[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=M[Z];return J===void 0&&(J=new Fr,M[Z]=J),J.getHandSpace()};function H(Z){let J=T.indexOf(Z.inputSource);if(J===-1)return;let pt=M[J];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||a),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",B);for(let Z=0;Z<M.length;Z++){let J=T[Z];J!==null&&(T[Z]=null,M[Z].disconnect(J))}F=null,V=null,m.reset();for(let Z in p)delete p[Z];t.setRenderTarget(y),f=null,d=null,u=null,n=null,S=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=function(Z){return Mo(this,null,function*(){if(n=Z,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",k),n.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&(yield e.makeXRCompatible()),C=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ot=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=v.stencil?_s:mn,Ot=v.stencil?Yr:dn);let jt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(jt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ii(d.textureWidth,d.textureHeight,{format:Zi,type:yi,depthTexture:new os(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,pt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ii(f.framebufferWidth,f.framebufferHeight,{format:Zi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield n.requestReferenceSpace(o),Wt.setContext(n),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let J=0;J<Z.removed.length;J++){let pt=Z.removed[J],Ot=T.indexOf(pt);Ot>=0&&(T[Ot]=null,M[Ot].disconnect(pt))}for(let J=0;J<Z.added.length;J++){let pt=Z.added[J],Ot=T.indexOf(pt);if(Ot===-1){for(let jt=0;jt<M.length;jt++)if(jt>=T.length){T.push(pt),Ot=jt;break}else if(T[jt]===null){T[jt]=pt,Ot=jt;break}if(Ot===-1)break}let _t=M[Ot];_t&&_t.connect(pt)}}let Y=new D,rt=new D;function tt(Z,J,pt){Y.setFromMatrixPosition(J.matrixWorld),rt.setFromMatrixPosition(pt.matrixWorld);let Ot=Y.distanceTo(rt),_t=J.projectionMatrix.elements,jt=pt.projectionMatrix.elements,ze=_t[14]/(_t[10]-1),qt=_t[14]/(_t[10]+1),ie=(_t[9]+1)/_t[5],he=(_t[9]-1)/_t[5],zt=(_t[8]-1)/_t[0],De=(jt[8]+1)/jt[0],L=ze*zt,Le=ze*De,Qt=Ot/(-zt+De),pe=Qt*-zt;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(pe),Z.translateZ(Qt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_t[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let yt=ze+Qt,R=qt+Qt,b=L-pe,N=Le+(Ot-pe),q=ie*qt/R*yt,K=he*qt/R*yt;Z.projectionMatrix.makePerspective(b,N,q,K,yt,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let J=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),I.near=E.near=x.near=J,I.far=E.far=x.far=pt,(F!==I.near||V!==I.far)&&(n.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,V=I.far),I.layers.mask=Z.layers.mask|6,x.layers.mask=I.layers.mask&3,E.layers.mask=I.layers.mask&5;let Ot=Z.parent,_t=I.cameras;lt(I,Ot);for(let jt=0;jt<_t.length;jt++)lt(_t[jt],Ot);_t.length===2?tt(I,x,E):I.projectionMatrix.copy(x.projectionMatrix),Rt(Z,I,Ot)};function Rt(Z,J,pt){pt===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ir*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Dt=null;function Gt(Z,J){if(h=J.getViewerPose(c||a),_=J,h!==null){let pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ot=!1;pt.length!==I.cameras.length&&(I.cameras.length=0,Ot=!0);for(let qt=0;qt<pt.length;qt++){let ie=pt[qt],he=null;if(f!==null)he=f.getViewport(ie);else{let De=u.getViewSubImage(d,ie);he=De.viewport,qt===0&&(t.setRenderTargetTextures(S,De.colorTexture,De.depthStencilTexture),t.setRenderTarget(S))}let zt=P[qt];zt===void 0&&(zt=new Ye,zt.layers.enable(qt),zt.viewport=new ye,P[qt]=zt),zt.matrix.fromArray(ie.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(ie.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(he.x,he.y,he.width,he.height),qt===0&&(I.matrix.copy(zt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ot===!0&&I.cameras.push(zt)}let _t=n.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let qt=u.getDepthInformation(pt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,n.renderState)}if(_t&&_t.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let qt=0;qt<pt.length;qt++){let ie=pt[qt].camera;if(ie){let he=p[ie];he||(he=new Na,p[ie]=he);let zt=u.getCameraImage(ie);he.sourceTexture=zt}}}}for(let pt=0;pt<M.length;pt++){let Ot=T[pt],_t=M[pt];Ot!==null&&_t!==void 0&&_t.update(Ot,J,c||a)}Dt&&Dt(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}let Wt=new Xp;Wt.setAnimationLoop(Gt),this.setAnimationLoop=function(Z){Dt=Z},this.dispose=function(){}}},Zs=new ln,Qy=new _e;function tb(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ru(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===di&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===di&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,Zs.copy(S),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),m.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(Zs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===di&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function eb(r,t,e,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=n[v.id];S===void 0&&(_(v),S=h(v),n[v.id]=S,v.addEventListener("dispose",m));let M=y.program;i.updateUBOMapping(v,M);let T=t.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){let y=u();v.__bindingPointIndex=y;let S=r.createBuffer(),M=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=n[v.id],S=v.uniforms,M=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,w=S.length;T<w;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,E=C.length;x<E;x++){let P=C[x];if(f(P,T,x,M)===!0){let I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],V=0;for(let H=0;H<F.length;H++){let k=F[H],B=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+V,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,S,M){let T=v.value,w=y+"_"+S;if(M[w]===void 0)return typeof T=="number"||typeof T=="boolean"?M[w]=T:M[w]=T.clone(),!0;{let C=M[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return M[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(v){let y=v.uniforms,S=0,M=16;for(let w=0,C=y.length;w<C;w++){let x=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,P=x.length;E<P;E++){let I=x[E],F=Array.isArray(I.value)?I.value:[I.value];for(let V=0,H=F.length;V<H;V++){let k=F[V],B=g(k),Y=S%M,rt=Y%B.boundary,tt=Y+rt;S+=rt,tt!==0&&M-tt<B.storage&&(S+=M-tt),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=B.storage}}}let T=S%M;return T>0&&(S+=M-T),v.__size=S,v.__cache={},this}function g(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):At("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(let v in n)r.deleteBuffer(n[v]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}var ib=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bn=null;function nb(){return bn===null&&(bn=new wl(ib,16,16,Ws,yn),bn.name="DFG_LUT",bn.minFilter=qe,bn.magFilter=qe,bn.wrapS=vi,bn.wrapT=vi,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}var Zc=class{constructor(t={}){let{canvas:e=_p(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yi}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let g=f,m=new Set([lc,oc,ac]),p=new Set([yi,dn,Xr,Yr,sc,rc]),v=new Uint32Array(4),y=new Int32Array(4),S=null,M=null,T=[],w=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=hi;let P=0,I=0,F=null,V=-1,H=null,k=new ye,B=new ye,Y=null,rt=new Tt(0),tt=0,lt=e.width,Rt=e.height,Dt=1,Gt=null,Wt=null,Z=new ye(0,0,lt,Rt),J=new ye(0,0,lt,Rt),pt=!1,Ot=new Ur,_t=!1,jt=!1,ze=new _e,qt=new D,ie=new ye,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function De(){return F===null?Dt:1}let L=i;function Le(A,U){return e.getContext(A,U)}try{let A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ne,!1),L===null){let U="webgl2";if(L=Le(U,A),L===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let Qt,pe,yt,R,b,N,q,K,X,Mt,nt,xt,It,Q,at,gt,bt,st,kt,O,ut,et,dt,$;function j(){Qt=new hv(L),Qt.init(),et=new Ky(L,Qt),pe=new ev(L,Qt,t,et),yt=new Zy(L,Qt),pe.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),R=new fv(L),b=new Ly,N=new jy(L,Qt,yt,b,pe,et,R),q=new nv(x),K=new cv(x),X=new _0(L),dt=new Qx(L,X),Mt=new uv(L,X,R,dt),nt=new mv(L,Mt,X,R),kt=new pv(L,pe,N),gt=new iv(b),xt=new Dy(x,q,K,Qt,pe,dt,gt),It=new tb(x,b),Q=new Oy,at=new Vy(Qt),st=new $x(x,q,K,yt,nt,_,l),bt=new Yy(x,nt,pe),$=new eb(L,R,pe,yt),O=new tv(L,Qt,R),ut=new dv(L,Qt,R),R.programs=xt.programs,x.capabilities=pe,x.extensions=Qt,x.properties=b,x.renderLists=Q,x.shadowMap=bt,x.state=yt,x.info=R}j(),g!==yi&&(C=new _v(g,e.width,e.height,n,s));let it=new qu(x,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=Qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(A){A!==void 0&&(Dt=A,this.setSize(lt,Rt,!1))},this.getSize=function(A){return A.set(lt,Rt)},this.setSize=function(A,U,W=!0){if(it.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,Rt=U,e.width=Math.floor(A*Dt),e.height=Math.floor(U*Dt),W===!0&&(e.style.width=A+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(lt*Dt,Rt*Dt).floor()},this.setDrawingBufferSize=function(A,U,W){lt=A,Rt=U,Dt=W,e.width=Math.floor(A*W),e.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(g===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,U,W,G){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,U,W,G),yt.viewport(k.copy(Z).multiplyScalar(Dt).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,U,W,G){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,U,W,G),yt.scissor(B.copy(J).multiplyScalar(Dt).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){yt.setScissorTest(pt=A)},this.setOpaqueSort=function(A){Gt=A},this.setTransparentSort=function(A){Wt=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,W=!0){let G=0;if(A){let z=!1;if(F!==null){let ot=F.texture.format;z=m.has(ot)}if(z){let ot=F.texture.type,ft=p.has(ot),ht=st.getClearColor(),mt=st.getClearAlpha(),St=ht.r,Pt=ht.g,Et=ht.b;ft?(v[0]=St,v[1]=Pt,v[2]=Et,v[3]=mt,L.clearBufferuiv(L.COLOR,0,v)):(y[0]=St,y[1]=Pt,y[2]=Et,y[3]=mt,L.clearBufferiv(L.COLOR,0,y))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),W&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),st.dispose(),Q.dispose(),at.dispose(),b.dispose(),q.dispose(),K.dispose(),nt.dispose(),dt.dispose(),$.dispose(),xt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Xd),it.removeEventListener("sessionend",Yd),Cs.stop()};function Lt(A){A.preventDefault(),wa("WebGLRenderer: Context Lost."),E=!0}function me(){wa("WebGLRenderer: Context Restored."),E=!1;let A=R.autoReset,U=bt.enabled,W=bt.autoUpdate,G=bt.needsUpdate,z=bt.type;j(),R.autoReset=A,bt.enabled=U,bt.autoUpdate=W,bt.needsUpdate=G,bt.type=z}function ne(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pn(A){let U=A.target;U.removeEventListener("dispose",pn),An(U)}function An(A){dg(A),b.remove(A)}function dg(A){let U=b.get(A).programs;U!==void 0&&(U.forEach(function(W){xt.releaseProgram(W)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,G,z,ot){U===null&&(U=he);let ft=z.isMesh&&z.matrixWorld.determinant()<0,ht=pg(A,U,W,G,z);yt.setMaterial(G,ft);let mt=W.index,St=1;if(G.wireframe===!0){if(mt=Mt.getWireframeAttribute(W),mt===void 0)return;St=2}let Pt=W.drawRange,Et=W.attributes.position,Ht=Pt.start*St,ae=(Pt.start+Pt.count)*St;ot!==null&&(Ht=Math.max(Ht,ot.start*St),ae=Math.min(ae,(ot.start+ot.count)*St)),mt!==null?(Ht=Math.max(Ht,0),ae=Math.min(ae,mt.count)):Et!=null&&(Ht=Math.max(Ht,0),ae=Math.min(ae,Et.count));let Te=ae-Ht;if(Te<0||Te===1/0)return;dt.setup(z,G,ht,W,mt);let Ee,ue=O;if(mt!==null&&(Ee=X.get(mt),ue=ut,ue.setIndex(Ee)),z.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*De()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(z.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),yt.setLineWidth(wt*De()),z.isLineSegments?ue.setMode(L.LINES):z.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else z.isPoints?ue.setMode(L.POINTS):z.isSprite&&ue.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let wt=z._multiDrawStarts,se=z._multiDrawCounts,Kt=z._multiDrawCount,Ai=mt?X.get(mt).bytesPerElement:1,or=b.get(G).currentProgram.getUniforms();for(let Ci=0;Ci<Kt;Ci++)or.setValue(L,"_gl_DrawID",Ci),ue.render(wt[Ci]/Ai,se[Ci])}else if(z.isInstancedMesh)ue.renderInstances(Ht,Te,z.count);else if(W.isInstancedBufferGeometry){let wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,se=Math.min(W.instanceCount,wt);ue.renderInstances(Ht,Te,se)}else ue.render(Ht,Te)};function Wd(A,U,W){A.transparent===!0&&A.side===We&&A.forceSinglePass===!1?(A.side=di,A.needsUpdate=!0,bo(A,U,W),A.side=zn,A.needsUpdate=!0,bo(A,U,W),A.side=We):bo(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),M=at.get(W),M.init(U),w.push(M),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),M.setupLights();let G=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ot=z.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){let ht=ot[ft];Wd(ht,W,z),G.add(ht)}else Wd(ot,W,z),G.add(ot)}),M=w.pop(),G},this.compileAsync=function(A,U,W=null){let G=this.compile(A,U,W);return new Promise(z=>{function ot(){if(G.forEach(function(ft){b.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){z(A);return}setTimeout(ot,10)}Qt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Sh=null;function fg(A){Sh&&Sh(A)}function Xd(){Cs.stop()}function Yd(){Cs.start()}let Cs=new Xp;Cs.setAnimationLoop(fg),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(A){Sh=A,it.setAnimationLoop(A),A===null?Cs.stop():Cs.start()},it.addEventListener("sessionstart",Xd),it.addEventListener("sessionend",Yd),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let W=it.enabled===!0&&it.isPresenting===!0,G=C!==null&&(F===null||W)&&C.begin(x,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,F),M=at.get(A,w.length),M.init(U),w.push(M),ze.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ot.setFromProjectionMatrix(ze,an,U.reversedDepth),jt=this.localClippingEnabled,_t=gt.init(this.clippingPlanes,jt),S=Q.get(A,T.length),S.init(),T.push(S),it.enabled===!0&&it.isPresenting===!0){let ft=x.xr.getDepthSensingMesh();ft!==null&&Th(ft,U,-1/0,x.sortObjects)}Th(A,U,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(Gt,Wt),zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,zt&&st.addToRenderList(S,A),this.info.render.frame++,_t===!0&&gt.beginShadows();let z=M.state.shadowsArray;if(bt.render(z,A,U),_t===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&C.hasRenderPass())===!1){let ft=S.opaque,ht=S.transmissive;if(M.setupLights(),U.isArrayCamera){let mt=U.cameras;if(ht.length>0)for(let St=0,Pt=mt.length;St<Pt;St++){let Et=mt[St];Zd(ft,ht,A,Et)}zt&&st.render(A);for(let St=0,Pt=mt.length;St<Pt;St++){let Et=mt[St];qd(S,A,Et,Et.viewport)}}else ht.length>0&&Zd(ft,ht,A,U),zt&&st.render(A),qd(S,A,U)}F!==null&&I===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),G&&C.end(x),A.isScene===!0&&A.onAfterRender(x,A,U),dt.resetDefaultState(),V=-1,H=null,w.pop(),w.length>0?(M=w[w.length-1],_t===!0&&gt.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function Th(A,U,W,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ot.intersectsSprite(A)){G&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ze);let ft=nt.update(A),ht=A.material;ht.visible&&S.push(A,ft,ht,W,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ot.intersectsObject(A))){let ft=nt.update(A),ht=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ie.copy(ft.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(ze)),Array.isArray(ht)){let mt=ft.groups;for(let St=0,Pt=mt.length;St<Pt;St++){let Et=mt[St],Ht=ht[Et.materialIndex];Ht&&Ht.visible&&S.push(A,ft,Ht,W,ie.z,Et)}}else ht.visible&&S.push(A,ft,ht,W,ie.z,null)}}let ot=A.children;for(let ft=0,ht=ot.length;ft<ht;ft++)Th(ot[ft],U,W,G)}function qd(A,U,W,G){let{opaque:z,transmissive:ot,transparent:ft}=A;M.setupLightsView(W),_t===!0&&gt.setGlobalState(x.clippingPlanes,W),G&&yt.viewport(k.copy(G)),z.length>0&&yo(z,U,W),ot.length>0&&yo(ot,U,W),ft.length>0&&yo(ft,U,W),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Zd(A,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Ht=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Ii(1,1,{generateMipmaps:!0,type:Ht?yn:yi,minFilter:gs,samples:pe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let ot=M.state.transmissionRenderTarget[G.id],ft=G.viewport||k;ot.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);let ht=x.getRenderTarget(),mt=x.getActiveCubeFace(),St=x.getActiveMipmapLevel();x.setRenderTarget(ot),x.getClearColor(rt),tt=x.getClearAlpha(),tt<1&&x.setClearColor(16777215,.5),x.clear(),zt&&st.render(W);let Pt=x.toneMapping;x.toneMapping=un;let Et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),_t===!0&&gt.setGlobalState(x.clippingPlanes,G),yo(A,W,G),N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ae=0,Te=U.length;ae<Te;ae++){let Ee=U[ae],{object:ue,geometry:wt,material:se,group:Kt}=Ee;if(se.side===We&&ue.layers.test(G.layers)){let Ai=se.side;se.side=di,se.needsUpdate=!0,jd(ue,W,G,wt,se,Kt),se.side=Ai,se.needsUpdate=!0,Ht=!0}}Ht===!0&&(N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot))}x.setRenderTarget(ht,mt,St),x.setClearColor(rt,tt),Et!==void 0&&(G.viewport=Et),x.toneMapping=Pt}function yo(A,U,W){let G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ot=A.length;z<ot;z++){let ft=A[z],{object:ht,geometry:mt,group:St}=ft,Pt=ft.material;Pt.allowOverride===!0&&G!==null&&(Pt=G),ht.layers.test(W.layers)&&jd(ht,U,W,mt,Pt,St)}}function jd(A,U,W,G,z,ot){A.onBeforeRender(x,U,W,G,z,ot),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,U,W,G,A,ot),z.transparent===!0&&z.side===We&&z.forceSinglePass===!1?(z.side=di,z.needsUpdate=!0,x.renderBufferDirect(W,U,G,z,A,ot),z.side=zn,z.needsUpdate=!0,x.renderBufferDirect(W,U,G,z,A,ot),z.side=We):x.renderBufferDirect(W,U,G,z,A,ot),A.onAfterRender(x,U,W,G,z,ot)}function bo(A,U,W){U.isScene!==!0&&(U=he);let G=b.get(A),z=M.state.lights,ot=M.state.shadowsArray,ft=z.state.version,ht=xt.getParameters(A,z.state,ot,U,W),mt=xt.getProgramCacheKey(ht),St=G.programs;G.environment=A.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(A.isMeshStandardMaterial?K:q).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,St===void 0&&(A.addEventListener("dispose",pn),St=new Map,G.programs=St);let Pt=St.get(mt);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===ft)return Jd(A,ht),Pt}else ht.uniforms=xt.getUniforms(A),A.onBeforeCompile(ht,x),Pt=xt.acquireProgram(ht,mt),St.set(mt,Pt),G.uniforms=ht.uniforms;let Et=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Et.clippingPlanes=gt.uniform),Jd(A,ht),G.needsLights=gg(A),G.lightsStateVersion=ft,G.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function Kd(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Zr.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Jd(A,U){let W=b.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function pg(A,U,W,G,z){U.isScene!==!0&&(U=he),N.resetTextureUnits();let ot=U.fog,ft=G.isMeshStandardMaterial?U.environment:null,ht=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zs,mt=(G.isMeshStandardMaterial?K:q).get(G.envMap||ft),St=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!W.morphAttributes.position,Ht=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color,Te=un;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Te=x.toneMapping);let Ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=Ee!==void 0?Ee.length:0,wt=b.get(G),se=M.state.lights;if(_t===!0&&(jt===!0||A!==H)){let oi=A===H&&G.id===V;gt.setState(G,A,oi)}let Kt=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==se.state.version||wt.outputColorSpace!==ht||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==mt||G.fog===!0&&wt.fog!==ot||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==gt.numPlanes||wt.numIntersection!==gt.numIntersection)||wt.vertexAlphas!==St||wt.vertexTangents!==Pt||wt.morphTargets!==Et||wt.morphNormals!==Ht||wt.morphColors!==ae||wt.toneMapping!==Te||wt.morphTargetsCount!==ue)&&(Kt=!0):(Kt=!0,wt.__version=G.version);let Ai=wt.currentProgram;Kt===!0&&(Ai=bo(G,U,z));let or=!1,Ci=!1,la=!1,ge=Ai.getUniforms(),mi=wt.uniforms;if(yt.useProgram(Ai.program)&&(or=!0,Ci=!0,la=!0),G.id!==V&&(V=G.id,Ci=!0),or||H!==A){yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(L,"projectionMatrix",A.projectionMatrix),ge.setValue(L,"viewMatrix",A.matrixWorldInverse);let gi=ge.map.cameraPosition;gi!==void 0&&gi.setValue(L,qt.setFromMatrixPosition(A.matrixWorld)),pe.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Ci=!0,la=!0)}if(wt.needsLights&&(se.state.directionalShadowMap.length>0&&ge.setValue(L,"directionalShadowMap",se.state.directionalShadowMap,N),se.state.spotShadowMap.length>0&&ge.setValue(L,"spotShadowMap",se.state.spotShadowMap,N),se.state.pointShadowMap.length>0&&ge.setValue(L,"pointShadowMap",se.state.pointShadowMap,N)),z.isSkinnedMesh){ge.setOptional(L,z,"bindMatrix"),ge.setOptional(L,z,"bindMatrixInverse");let oi=z.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),ge.setValue(L,"boneTexture",oi.boneTexture,N))}z.isBatchedMesh&&(ge.setOptional(L,z,"batchingTexture"),ge.setValue(L,"batchingTexture",z._matricesTexture,N),ge.setOptional(L,z,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",z._indirectTexture,N),ge.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",z._colorsTexture,N));let Vi=W.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&kt.update(z,W,Ai),(Ci||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,ge.setValue(L,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(mi.envMap.value=mt,mi.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(mi.envMapIntensity.value=U.environmentIntensity),mi.dfgLUT!==void 0&&(mi.dfgLUT.value=nb()),Ci&&(ge.setValue(L,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&mg(mi,la),ot&&G.fog===!0&&It.refreshFogUniforms(mi,ot),It.refreshMaterialUniforms(mi,G,Dt,Rt,M.state.transmissionRenderTarget[A.id]),Zr.upload(L,Kd(wt),mi,N)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zr.upload(L,Kd(wt),mi,N),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(L,"center",z.center),ge.setValue(L,"modelViewMatrix",z.modelViewMatrix),ge.setValue(L,"normalMatrix",z.normalMatrix),ge.setValue(L,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let oi=G.uniformsGroups;for(let gi=0,Eh=oi.length;gi<Eh;gi++){let Rs=oi[gi];$.update(Rs,Ai),$.bind(Rs,Ai)}}return Ai}function mg(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function gg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,U,W){let G=b.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=U,b.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let W=b.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let _g=L.createFramebuffer();this.setRenderTarget=function(A,U=0,W=0){F=A,P=U,I=W;let G=null,z=!1,ot=!1;if(A){let ht=b.get(A);if(ht.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(L.FRAMEBUFFER,ht.__webglFramebuffer),k.copy(A.viewport),B.copy(A.scissor),Y=A.scissorTest,yt.viewport(k),yt.scissor(B),yt.setScissorTest(Y),V=-1;return}else if(ht.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(ht.__hasExternalTextures)N.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pt=A.depthTexture;if(ht.__boundDepthTexture!==Pt){if(Pt!==null&&b.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}let mt=A.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(ot=!0);let St=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(St[U])?G=St[U][W]:G=St[U],z=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?G=b.get(A).__webglMultisampledFramebuffer:Array.isArray(St)?G=St[W]:G=St,k.copy(A.viewport),B.copy(A.scissor),Y=A.scissorTest}else k.copy(Z).multiplyScalar(Dt).floor(),B.copy(J).multiplyScalar(Dt).floor(),Y=pt;if(W!==0&&(G=_g),yt.bindFramebuffer(L.FRAMEBUFFER,G)&&yt.drawBuffers(A,G),yt.viewport(k),yt.scissor(B),yt.setScissorTest(Y),z){let ht=b.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,W)}else if(ot){let ht=U;for(let mt=0;mt<A.textures.length;mt++){let St=b.get(A.textures[mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+mt,St.__webglTexture,W,ht)}}else if(A!==null&&W!==0){let ht=b.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(A,U,W,G,z,ot,ft,ht=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){yt.bindFramebuffer(L.FRAMEBUFFER,mt);try{let St=A.textures[ht],Pt=St.format,Et=St.type;if(!pe.textureFormatReadable(Pt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Et)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-G&&W>=0&&W<=A.height-z&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht),L.readPixels(U,W,G,z,et.convert(Pt),et.convert(Et),ot))}finally{let St=F!==null?b.get(F).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=function(A,U,W,G,z,ot,ft,ht=0){return Mo(this,null,function*(){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(U>=0&&U<=A.width-G&&W>=0&&W<=A.height-z){yt.bindFramebuffer(L.FRAMEBUFFER,mt);let St=A.textures[ht],Pt=St.format,Et=St.type;if(!pe.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht),L.readPixels(U,W,G,z,et.convert(Pt),et.convert(Et),0);let ae=F!==null?b.get(F).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,ae);let Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),yield xp(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(Ht),L.deleteSync(Te),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(A,U=null,W=0){let G=Math.pow(2,-W),z=Math.floor(A.image.width*G),ot=Math.floor(A.image.height*G),ft=U!==null?U.x:0,ht=U!==null?U.y:0;N.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ft,ht,z,ot),yt.unbindTexture()};let xg=L.createFramebuffer(),vg=L.createFramebuffer();this.copyTextureToTexture=function(A,U,W=null,G=null,z=0,ot=null){ot===null&&(z!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=z,z=0):ot=0);let ft,ht,mt,St,Pt,Et,Ht,ae,Te,Ee=A.isCompressedTexture?A.mipmaps[ot]:A.image;if(W!==null)ft=W.max.x-W.min.x,ht=W.max.y-W.min.y,mt=W.isBox3?W.max.z-W.min.z:1,St=W.min.x,Pt=W.min.y,Et=W.isBox3?W.min.z:0;else{let Vi=Math.pow(2,-z);ft=Math.floor(Ee.width*Vi),ht=Math.floor(Ee.height*Vi),A.isDataArrayTexture?mt=Ee.depth:A.isData3DTexture?mt=Math.floor(Ee.depth*Vi):mt=1,St=0,Pt=0,Et=0}G!==null?(Ht=G.x,ae=G.y,Te=G.z):(Ht=0,ae=0,Te=0);let ue=et.convert(U.format),wt=et.convert(U.type),se;U.isData3DTexture?(N.setTexture3D(U,0),se=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),se=L.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Kt=L.getParameter(L.UNPACK_ROW_LENGTH),Ai=L.getParameter(L.UNPACK_IMAGE_HEIGHT),or=L.getParameter(L.UNPACK_SKIP_PIXELS),Ci=L.getParameter(L.UNPACK_SKIP_ROWS),la=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et);let ge=A.isDataArrayTexture||A.isData3DTexture,mi=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let Vi=b.get(A),oi=b.get(U),gi=b.get(Vi.__renderTarget),Eh=b.get(oi.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,gi.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Eh.__webglFramebuffer);for(let Rs=0;Rs<mt;Rs++)ge&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(A).__webglTexture,z,Et+Rs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,b.get(U).__webglTexture,ot,Te+Rs)),L.blitFramebuffer(St,Pt,ft,ht,Ht,ae,ft,ht,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||b.has(A)){let Vi=b.get(A),oi=b.get(U);yt.bindFramebuffer(L.READ_FRAMEBUFFER,xg),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,vg);for(let gi=0;gi<mt;gi++)ge?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vi.__webglTexture,z,Et+gi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vi.__webglTexture,z),mi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oi.__webglTexture,ot,Te+gi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,oi.__webglTexture,ot),z!==0?L.blitFramebuffer(St,Pt,ft,ht,Ht,ae,ft,ht,L.COLOR_BUFFER_BIT,L.NEAREST):mi?L.copyTexSubImage3D(se,ot,Ht,ae,Te+gi,St,Pt,ft,ht):L.copyTexSubImage2D(se,ot,Ht,ae,St,Pt,ft,ht);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mi?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(se,ot,Ht,ae,Te,ft,ht,mt,ue,wt,Ee.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(se,ot,Ht,ae,Te,ft,ht,mt,ue,Ee.data):L.texSubImage3D(se,ot,Ht,ae,Te,ft,ht,mt,ue,wt,Ee):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ot,Ht,ae,ft,ht,ue,wt,Ee.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ot,Ht,ae,Ee.width,Ee.height,ue,Ee.data):L.texSubImage2D(L.TEXTURE_2D,ot,Ht,ae,ft,ht,ue,wt,Ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ai),L.pixelStorei(L.UNPACK_SKIP_PIXELS,or),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,la),ot===0&&U.generateMipmaps&&L.generateMipmap(se),yt.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){P=0,I=0,F=null,yt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Kp={type:"change"},ju={type:"start"},$p={type:"end"},Jc=new as,Jp=new Yi,sb=Math.cos(70*ji.DEG2RAD),Ue=new D,bi=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zu=1e-6,$c=class extends Ga{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new qi,this._lastTargetPosition=new D,this._quat=new qi().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gr,this._sphericalDelta=new Gr,this._scale=1,this._panOffset=new D,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new D,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ab.bind(this),this._onPointerDown=rb.bind(this),this._onPointerUp=ob.bind(this),this._onContextMenu=pb.bind(this),this._onMouseWheel=hb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=db.bind(this),this._onTouchMove=fb.bind(this),this._onMouseDown=lb.bind(this),this._onMouseMove=cb.bind(this),this._interceptControlDown=mb.bind(this),this._interceptControlUp=gb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kp),this.update(),this.state=ce.NONE}update(t=null){let e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=bi:i>Math.PI&&(i-=bi),n<-Math.PI?n+=bi:n>Math.PI&&(n-=bi),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ue.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Jc.origin.copy(this.object.position),Jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jc.direction))<sb?this.object.lookAt(this.target):(Jp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jc.intersectPlane(Jp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zu||this._lastTargetPosition.distanceToSquared(this.target)>Zu?(this.dispatchEvent(Kp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?bi/60*this.autoRotateSpeed*t:bi/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let n=this.object.position;Ue.copy(n).sub(this.target);let s=Ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),n=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/e.clientHeight),this._rotateUp(bi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-bi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panStart.set(i,n)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,s=Math.sqrt(i*i+n*n);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),n=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(n,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bi*this._rotateDelta.x/e.clientHeight),this._rotateUp(bi*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,n=t.pageY-e.y,s=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function rb(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ab(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function ob(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($p),this.state=ce.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lb(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ce.DOLLY;break;case fs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ce.ROTATE}break;case fs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ju)}function cb(r){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function hb(r){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(r.preventDefault(),this.dispatchEvent(ju),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent($p))}function ub(r){this.enabled!==!1&&this._handleKeyDown(r)}function db(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ce.TOUCH_ROTATE;break;case ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ce.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(ju)}function fb(r){switch(this._trackPointer(r),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ce.NONE}}function pb(r){this.enabled!==!1&&r.preventDefault()}function mb(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gb(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qc=Object.freeze({minX:-22,maxX:22,minZ:-22,maxZ:22}),Qp=.8;var _b=500,xb=50,vb=57,yb=2500,bb=8e3,th={high:{pixelRatioCap:1.5,shadowMapSize:1024,shadowsEnabled:!0,ambientParticlesVisible:!0,starfieldOpacity:.85,groundAnimationScale:1},medium:{pixelRatioCap:1.25,shadowMapSize:768,shadowsEnabled:!0,ambientParticlesVisible:!0,starfieldOpacity:.72,groundAnimationScale:.85},low:{pixelRatioCap:1,shadowMapSize:512,shadowsEnabled:!1,ambientParticlesVisible:!1,starfieldOpacity:.6,groundAnimationScale:.65}},Gn=class r{scene;camera;renderer;controls;circleTexture;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;canvas;animationFrameId=null;lastFrameTime=0;isPaused=!1;groundWaterTexture=null;groundWaterNormalMap=null;groundMaterial=null;arenaBoundaryGroup=null;starField=null;ambientParticles=null;ambientParticleVelocities=null;ambientParticlePositionAttr=null;ambientParticleMaterial=null;resizeTimeout=null;cameraTarget=new D(0,1,0);frameListeners=new Set;performanceListeners=new Set;particleAnimations=new Map;visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);animateBound=t=>this.animate(t);autoRotateSpeed=.9;nextParticleAnimationId=0;autoRotateResumeAt=0;currentQualityLevel="high";currentPixelRatioCap=th.high.pixelRatioCap;performanceSampleElapsedMs=0;performanceSampleFrameTimeTotalMs=0;performanceSampleFrames=0;smoothedFps=60;lastPublishedFrameTimeMs=1e3/60;lowPerformanceMs=0;stablePerformanceMs=0;groundAnimationScale=th.high.groundAnimationScale;mainLight=null;isPortraitRotated=!1;disposeMediaQuery=null;disposePointerInterceptor=null;transformedPointerEvents=new WeakSet;init(t){this.canvas=t,this.createCircleTexture(),this.initPortraitDetection(),this.initScene(),this.installPointerInterceptor(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.disposeMediaQuery?.(),this.disposePointerInterceptor?.(),this.particleAnimations.clear(),this.controls?.dispose(),this.disposeObject(this.arenaBoundaryGroup),this.arenaBoundaryGroup=null,this.starField?.geometry.dispose(),this.starField?.material?.dispose(),this.starField=null,this.ambientParticles?.geometry.dispose(),this.ambientParticles?.material?.dispose(),this.ambientParticles=null,this.ambientParticleVelocities=null,this.ambientParticlePositionAttr=null,this.ambientParticleMaterial=null,this.groundMaterial?.dispose(),this.groundMaterial=null,this.groundWaterTexture?.dispose(),this.groundWaterTexture=null,this.groundWaterNormalMap?.dispose(),this.groundWaterNormalMap=null,this.frameListeners.clear(),this.performanceListeners.clear(),this.scene?.clear(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.circleTexture?.dispose()}pauseAutoRotate(t){this.autoRotateResumeAt=performance.now()+Math.max(t,0),this.controls&&(this.controls.autoRotate=!1)}setCameraFocus(t){this.cameraTarget.set(t.x,t.y,t.z),this.controls&&this.controls.target.copy(this.cameraTarget)}getFacingRotationY(t,e){return Math.atan2(e.x-t.x,e.z-t.z)}addFrameListener(t){return this.frameListeners.add(t),()=>{this.frameListeners.delete(t)}}addPerformanceListener(t){return this.performanceListeners.add(t),t(this.getPerformanceStats()),()=>{this.performanceListeners.delete(t)}}getQualityLevel(){return this.currentQualityLevel}registerParticleAnimation(t){t.attribute.setUsage(Xs);let e=this.nextParticleAnimationId++;return this.particleAnimations.set(e,t),e}removeParticleAnimation(t){this.particleAnimations.delete(t)}createCircleTexture(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64),this.circleTexture=new xn(t)}initPortraitDetection(){let t=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=t.matches;let e=i=>{this.isPortraitRotated=i.matches};t.addEventListener("change",e),this.disposeMediaQuery=()=>t.removeEventListener("change",e)}installPointerInterceptor(){let t=this.canvas,e=n=>{if(!this.isPortraitRotated||this.transformedPointerEvents.has(n))return;n.stopImmediatePropagation();let s=new PointerEvent(n.type,{bubbles:n.bubbles,cancelable:n.cancelable,composed:n.composed,clientX:n.clientY,clientY:window.innerWidth-n.clientX,screenX:n.screenY,screenY:window.innerWidth-n.screenX,pointerId:n.pointerId,pointerType:n.pointerType,isPrimary:n.isPrimary,button:n.button,buttons:n.buttons,width:n.width,height:n.height,pressure:n.pressure});this.transformedPointerEvents.add(s),t.dispatchEvent(s)},i=new AbortController;for(let n of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(n,e,{capture:!0,signal:i.signal});this.disposePointerInterceptor=()=>i.abort()}initScene(){let t=this.canvas,e=t.clientWidth,i=t.clientHeight,n=this.getViewportSettings(e,i);this.scene=new Fa,this.scene.background=new Tt(657931),this.baseCameraFov=n.fov,this.camera=new Ye(this.baseCameraFov,e/i,.1,1e3),this.scene.fog=n.useFog?new Or(657931,.02):null,this.camera.position.set(0,n.cameraY,n.cameraZ),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new Zc({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(e,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xl,this.renderer.toneMapping=Xa,this.renderer.toneMappingExposure=1.2,this.controls=new $c(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.enablePan=!1,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=this.autoRotateSpeed,this.controls.minDistance=n.minDistance,this.controls.maxDistance=n.maxDistance,this.controls.minPolarAngle=n.minPolarAngle,this.controls.maxPolarAngle=n.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update();let s=new Ha(3470813,.3);this.scene.add(s);let a=new Hr(16777215,1.5);a.position.set(5,10,5),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=.5,a.shadow.camera.far=50,a.shadow.camera.left=-15,a.shadow.camera.right=15,a.shadow.camera.top=15,a.shadow.camera.bottom=-15,this.scene.add(a),this.mainLight=a;let o=new Hr(4491519,.6);o.position.set(-5,8,-3),this.scene.add(o);let l=new hn(2254591,1.5,25);l.position.set(-8,3,0),this.scene.add(l);let c=new hn(52394,1.2,25);c.position.set(8,3,0),this.scene.add(c);let d=1.5*88;this.groundWaterTexture=this.createSeaWaterTexture(),this.groundWaterNormalMap=this.createSeaWaterNormalMap();let f=new za({map:this.groundWaterTexture,normalMap:this.groundWaterNormalMap,normalScale:new vt(.7,.7),color:21964,roughness:.06,metalness:.05,clearcoat:1,clearcoatRoughness:.06,emissive:736064,emissiveIntensity:.25});this.groundMaterial=f;let _=new Vn(d,d),g=new Nt(_,f);g.rotation.x=-Math.PI/2,g.position.set(0,0,0),g.receiveShadow=!0,this.scene.add(g),this.createArenaBoundaryObstacles(),this.createStarfield(),this.createAmbientParticles(),this.applyQualityLevel(this.currentQualityLevel)}createArenaBoundaryObstacles(){let t=Qc,e=new Ce,i=t.maxX-t.minX,n=t.maxZ-t.minZ,s=Qp,a=.08,o=1.65,l=new Vn(i-2,o),c=new Vn(n-2,o),h=g=>{let m=this.createEdgeFoamTexture();return m.repeat.set(g,1),new cn({map:m,color:15138815,transparent:!0,opacity:.8,side:We,depthWrite:!1,depthTest:!0,blending:ni,toneMapped:!1})},u=new Nt(l,h(Math.max(4,i/5)));u.rotation.x=-Math.PI/2,u.position.set(0,a,t.minZ+s),u.renderOrder=2,e.add(u);let d=u.clone();d.position.z=t.maxZ-s,e.add(d);let f=new Nt(c,h(Math.max(4,n/5)));f.rotation.x=-Math.PI/2,f.rotation.z=Math.PI/2,f.position.set(t.minX+s,a,0),f.renderOrder=2,e.add(f);let _=f.clone();_.position.x=t.maxX-s,e.add(_),this.arenaBoundaryGroup=e,this.scene.add(e)}createEdgeFoamTexture(){let i=document.createElement("canvas");i.width=512,i.height=96;let n=i.getContext("2d"),s=n.createLinearGradient(0,0,0,96);s.addColorStop(0,"rgba(255,255,255,0.00)"),s.addColorStop(.2,"rgba(210,245,255,0.12)"),s.addColorStop(.45,"rgba(255,255,255,0.75)"),s.addColorStop(.75,"rgba(170,235,255,0.22)"),s.addColorStop(1,"rgba(255,255,255,0.00)"),n.fillStyle=s,n.fillRect(0,0,512,96),n.lineWidth=3,n.strokeStyle="rgba(255,255,255,0.55)";for(let o=0;o<3;o++){let l=22+o*16;n.beginPath(),n.moveTo(0,l);for(let c=0;c<=512;c+=8){let h=l+Math.sin(c*.05+o*1.2)*(3+o);n.lineTo(c,h)}n.stroke()}n.fillStyle="rgba(255,255,255,0.85)";for(let o=0;o<80;o++)n.beginPath(),n.arc(Math.random()*512,26+Math.random()*36,1+Math.random()*3.5,0,Math.PI*2),n.fill();let a=new xn(i);return a.wrapS=on,a.wrapT=vi,a.repeat.set(6,1),a}createSeaWaterTexture(){let e=document.createElement("canvas");e.width=1024,e.height=1024;let i=e.getContext("2d"),n=i.createLinearGradient(0,0,1024,1024);n.addColorStop(0,"#001840"),n.addColorStop(.38,"#002d6a"),n.addColorStop(.65,"#003d88"),n.addColorStop(1,"#001840"),i.fillStyle=n,i.fillRect(0,0,1024,1024);let s=i.createRadialGradient(1024*.35,1024*.45,0,1024*.35,1024*.45,1024*.55);s.addColorStop(0,"rgba(0,80,180,0.35)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,1024,1024);let a=[{color:"rgba(0,120,210,0.40)",amplitude:28,frequency:.018,rows:18,lineWidth:.2},{color:"rgba(0,160,230,0.28)",amplitude:14,frequency:.035,rows:30,lineWidth:.2},{color:"rgba(20,210,240,0.20)",amplitude:7,frequency:.07,rows:48,lineWidth:.2},{color:"rgba(80,230,255,0.12)",amplitude:3,frequency:.14,rows:72,lineWidth:.2}];for(let l of a){i.strokeStyle=l.color,i.lineWidth=l.lineWidth;for(let c=0;c<l.rows;c++){let h=(c+.5)/l.rows*1024,u=c*.63;i.beginPath(),i.moveTo(0,h);for(let d=0;d<=1024;d+=2){let f=h+Math.sin(d*l.frequency+u)*l.amplitude+Math.sin(d*l.frequency*.51+u*1.7)*(l.amplitude*.42);i.lineTo(d,f)}i.stroke()}}i.fillStyle="rgba(220,250,255,0.11)";for(let l=0;l<160;l++)i.beginPath(),i.arc(Math.random()*1024,Math.random()*1024,.8+Math.random()*3.2,0,Math.PI*2),i.fill();let o=new xn(e);return o.wrapS=vi,o.wrapT=vi,o}createSeaWaterNormalMap(){let e=document.createElement("canvas");e.width=512,e.height=512;let i=e.getContext("2d"),n=i.createImageData(512,512),s=n.data,a=l=>l*Math.PI*2/512;for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=Math.sin(c*a(4)+l*a(3))*.45+Math.sin(c*a(7)+l*a(5))*.3+Math.sin(c*a(11)-l*a(8))*.25,u=Math.cos(l*a(4)+c*a(3))*.45+Math.cos(l*a(7)+c*a(5))*.3+Math.cos(l*a(11)-c*a(8))*.25,d=(l*512+c)*4;s[d]=Math.round((h*.5+.5)*255),s[d+1]=Math.round((u*.5+.5)*255),s[d+2]=255,s[d+3]=255}i.putImageData(n,0,0);let o=new xn(e);return o.wrapS=on,o.wrapT=on,o.repeat.set(4,4),o}createStarfield(){let e=new ee,i=new Float32Array(2e3*3),n=new Float32Array(2e3*3);for(let a=0;a<2e3;a++){let o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=80+Math.random()*120;i[a*3]=c*Math.sin(l)*Math.cos(o),i[a*3+1]=Math.abs(c*Math.cos(l))*.6+5,i[a*3+2]=c*Math.sin(l)*Math.sin(o);let h=Math.random();h<.6?(n[a*3]=.8+Math.random()*.2,n[a*3+1]=.85+Math.random()*.15,n[a*3+2]=1):h<.85?(n[a*3]=.4+Math.random()*.3,n[a*3+1]=.6+Math.random()*.3,n[a*3+2]=1):(n[a*3]=1,n[a*3+1]=.8+Math.random()*.2,n[a*3+2]=.6+Math.random()*.4)}e.setAttribute("position",new xe(i,3)),e.setAttribute("color",new xe(n,3));let s=new Ge({size:.6,map:this.circleTexture,transparent:!0,opacity:.85,vertexColors:!0,blending:ni,depthWrite:!1,sizeAttenuation:!0,fog:!1});this.starField=new ii(e,s),this.scene.add(this.starField)}createAmbientParticles(){let e=new ee,i=new Float32Array(120*3);this.ambientParticleVelocities=new Float32Array(120*3);for(let a=0;a<120;a++)i[a*3]=(Math.random()-.5)*20,i[a*3+1]=.5+Math.random()*6,i[a*3+2]=(Math.random()-.5)*16,this.ambientParticleVelocities[a*3]=(Math.random()-.5)*.003,this.ambientParticleVelocities[a*3+1]=.001+Math.random()*.004,this.ambientParticleVelocities[a*3+2]=(Math.random()-.5)*.003;let n=new xe(i,3);n.setUsage(Xs),e.setAttribute("position",n),this.ambientParticlePositionAttr=n;let s=new Ge({map:this.circleTexture,color:4491519,size:.12,transparent:!0,opacity:.4,blending:ni,depthWrite:!1});this.ambientParticleMaterial=s,this.ambientParticles=new ii(e,s),this.scene.add(this.ambientParticles)}animate(t=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(this.animateBound);let e=this.lastFrameTime===0?1e3/60:t-this.lastFrameTime;this.lastFrameTime=t;let i=Math.min(e/1e3,1/20),n=i*30;if(this.groundWaterNormalMap&&(this.groundWaterNormalMap.offset.x-=i*.0174*this.groundAnimationScale,this.groundWaterNormalMap.offset.y+=i*.0096*this.groundAnimationScale),this.groundMaterial){let a=t*.001,o=(.65+Math.sin(a*.9)*.28+Math.sin(a*1.7+1.2)*.12)*this.groundAnimationScale;this.groundMaterial.normalScale.set(o,o),this.groundMaterial.emissiveIntensity=(.22+Math.sin(a*.6)*.1+Math.sin(a*1.3+.8)*.05)*(.75+this.groundAnimationScale*.25),this.groundMaterial.roughness=.06+Math.abs(Math.sin(a*.4))*.06*this.groundAnimationScale}if(this.particleAnimations.forEach(a=>{let o=a.attribute.array;for(let l=0;l<a.particleCount;l++)a.angles[l]+=a.angularVelocities[l]*n,o[l*3]=Math.cos(a.angles[l])*a.radii[l],o[l*3+2]=Math.sin(a.angles[l])*a.radii[l];a.attribute.needsUpdate=!0}),this.starField&&(this.starField.rotation.y+=i*.0024),this.ambientParticles&&this.ambientParticles.visible&&this.ambientParticleVelocities){let a=this.ambientParticlePositionAttr.array,o=this.ambientParticleVelocities,l=a.length/3;for(let c=0;c<l;c++)a[c*3]+=o[c*3]*n,a[c*3+1]+=o[c*3+1]*n,a[c*3+2]+=o[c*3+2]*n,a[c*3+1]>8&&(a[c*3+1]=.5,a[c*3]=(Math.random()-.5)*20,a[c*3+2]=(Math.random()-.5)*16);this.ambientParticlePositionAttr.needsUpdate=!0,this.ambientParticleMaterial.opacity=.3+Math.sin(t*.001)*.1}this.frameListeners.forEach(a=>{a(i,t)});let s=!this.timeSlowActive&&t>=this.autoRotateResumeAt;this.controls.enabled=!this.timeSlowActive,this.controls.autoRotate=s,this.controls.target.copy(this.cameraTarget),this.controls.update(i),this.renderer.render(this.scene,this.camera),this.updatePerformanceStats(e)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this.renderer)return;let t=this.canvas.clientWidth,e=this.canvas.clientHeight,i=this.getViewportSettings(t,e);this.camera.aspect=t/e,this.camera.fov=i.fov,this.camera.updateProjectionMatrix(),this.scene.fog=i.useFog?new Or(657931,.02):null,this.camera.position.set(0,i.cameraY,i.cameraZ),this.cameraOriginalPosition=new D(0,i.cameraY,i.cameraZ),this.baseCameraFov=i.fov,this.controls.minDistance=i.minDistance,this.controls.maxDistance=i.maxDistance,this.controls.minPolarAngle=i.minPolarAngle,this.controls.maxPolarAngle=i.maxPolarAngle,this.controls.target.copy(this.cameraTarget),this.controls.update(),this.renderer.setSize(t,e),this.renderer.setPixelRatio(this.getEffectivePixelRatio()),this.publishPerformanceStats()}applyQualityLevel(t){let e=th[t];this.currentQualityLevel=t,this.currentPixelRatioCap=e.pixelRatioCap,this.groundAnimationScale=e.groundAnimationScale,this.renderer&&(this.renderer.shadowMap.enabled=e.shadowsEnabled,this.renderer.setPixelRatio(this.getEffectivePixelRatio())),this.mainLight&&(this.mainLight.castShadow=e.shadowsEnabled,this.mainLight.shadow.mapSize.width=e.shadowMapSize,this.mainLight.shadow.mapSize.height=e.shadowMapSize,this.mainLight.shadow.map?.dispose(),this.mainLight.shadow.needsUpdate=!0),this.ambientParticles&&(this.ambientParticles.visible=e.ambientParticlesVisible),this.starField&&(this.starField.material.opacity=e.starfieldOpacity),this.lowPerformanceMs=0,this.stablePerformanceMs=0,this.publishPerformanceStats()}updatePerformanceStats(t){let e=t>0?1e3/t:60;if(this.smoothedFps=ji.lerp(this.smoothedFps,e,.12),this.performanceSampleElapsedMs+=t,this.performanceSampleFrameTimeTotalMs+=t,this.performanceSampleFrames+=1,this.smoothedFps<xb?(this.lowPerformanceMs+=t,this.stablePerformanceMs=0):this.smoothedFps>vb?(this.stablePerformanceMs+=t,this.lowPerformanceMs=0):(this.lowPerformanceMs=0,this.stablePerformanceMs=0),this.lowPerformanceMs>=yb){let i=this.getAdjacentQualityLevel("down");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}else if(this.stablePerformanceMs>=bb){let i=this.getAdjacentQualityLevel("up");i!==this.currentQualityLevel&&this.applyQualityLevel(i)}this.performanceSampleElapsedMs>=_b&&(this.lastPublishedFrameTimeMs=this.performanceSampleFrameTimeTotalMs/Math.max(this.performanceSampleFrames,1),this.performanceSampleElapsedMs=0,this.performanceSampleFrameTimeTotalMs=0,this.performanceSampleFrames=0,this.publishPerformanceStats())}getAdjacentQualityLevel(t){let e=["low","medium","high"],i=e.indexOf(this.currentQualityLevel);return t==="up"?e[Math.min(i+1,e.length-1)]:e[Math.max(i-1,0)]}publishPerformanceStats(){let t=this.getPerformanceStats();this.performanceListeners.forEach(e=>{e(t)})}getPerformanceStats(){return{fps:Number((1e3/this.lastPublishedFrameTimeMs).toFixed(1)),frameTimeMs:Number(this.lastPublishedFrameTimeMs.toFixed(2)),qualityLevel:this.currentQualityLevel,pixelRatio:Number(this.getEffectivePixelRatio().toFixed(2)),shadowsEnabled:th[this.currentQualityLevel].shadowsEnabled}}getEffectivePixelRatio(){return Math.min(window.devicePixelRatio,this.currentPixelRatioCap)}getViewportSettings(t,e){let i=t/e,n=t<520,s=i<.9,a=n||s||e<520,o=60,l=10,c=4,h=3,u=10,d=Math.PI/4.8,f=Math.PI/2.45;return a&&(l=12,h=4,u=12,f=Math.PI/2.1),{fov:o,cameraZ:l,cameraY:c,useFog:!0,minDistance:h,maxDistance:u,minPolarAngle:d,maxPolarAngle:f}}disposeObject(t){t&&t.traverse(e=>{if(e instanceof Nt)if(e.geometry.dispose(),Array.isArray(e.material))e.material.forEach(i=>{for(let n of Object.values(i))n instanceof Oi&&n.dispose();i.dispose()});else{for(let i of Object.values(e.material))i instanceof Oi&&i.dispose();e.material.dispose()}})}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac})};var Mb=/^[og]\s*(.+)?/,Sb=/^mtllib /,Tb=/^usemtl /,Eb=/^usemap /,tm=/\s+/,em=new D,Ku=new D,im=new D,nm=new D,Ki=new D,eh=new Tt;function wb(){let r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,s){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:n||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),n&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){let n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){let i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){let i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){let n=this.vertices,s=this.object.geometry.vertices;s.push(n[t+0],n[t+1],n[t+2]),s.push(n[e+0],n[e+1],n[e+2]),s.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){let n=this.normals,s=this.object.geometry.normals;s.push(n[t+0],n[t+1],n[t+2]),s.push(n[e+0],n[e+1],n[e+2]),s.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(t,e,i){let n=this.vertices,s=this.object.geometry.normals;em.fromArray(n,t),Ku.fromArray(n,e),im.fromArray(n,i),Ki.subVectors(im,Ku),nm.subVectors(em,Ku),Ki.cross(nm),Ki.normalize(),s.push(Ki.x,Ki.y,Ki.z),s.push(Ki.x,Ki.y,Ki.z),s.push(Ki.x,Ki.y,Ki.z)},addColor:function(t,e,i){let n=this.colors,s=this.object.geometry.colors;n[t]!==void 0&&s.push(n[t+0],n[t+1],n[t+2]),n[e]!==void 0&&s.push(n[e+0],n[e+1],n[e+2]),n[i]!==void 0&&s.push(n[i+0],n[i+1],n[i+2])},addUV:function(t,e,i){let n=this.uvs,s=this.object.geometry.uvs;s.push(n[t+0],n[t+1]),s.push(n[e+0],n[e+1]),s.push(n[i+0],n[i+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,n,s,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),f=this.parseVertexIndex(i,h);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==""){let _=this.normals.length;u=this.parseNormalIndex(o,_),d=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(n!==void 0&&n!==""){let _=this.uvs.length;u=this.parseUVIndex(n,_),d=this.parseUVIndex(s,_),f=this.parseUVIndex(a,_),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let i=0,n=t.length;i<n;i++){let s=this.parseVertexIndex(t[i],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let i=this.vertices.length,n=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],i));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],n))}};return r.startObject("",!1),r}var ih=class extends Wc{constructor(t){super(t),this.materials=null}load(t,e,i,n){let s=this,a=new Va(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){n?n(l):console.error(l),s.manager.itemError(t)}},i,n)}setMaterials(t){return this.materials=t,this}parse(t){let e=new wb;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let i=t.split(`
`),n=[];for(let o=0,l=i.length;o<l;o++){let c=i[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(tm);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(eh.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),hi),e.colors.push(eh.r,eh.g,eh.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let d=c.slice(1).trim().split(tm),f=[];for(let g=0,m=d.length;g<m;g++){let p=d[g];if(p.length>0){let v=p.split("/");f.push(v)}}let _=f[0];for(let g=1,m=f.length-1;g<m;g++){let p=f[g],v=f[g+1];e.addFace(_[0],p[0],v[0],_[1],p[1],v[1],_[2],p[2],v[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),d=[],f=[];if(c.indexOf("/")===-1)d=u;else for(let _=0,g=u.length;_<g;_++){let m=u[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(d,f)}else if(h==="p"){let d=c.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((n=Mb.exec(c))!==null){let u=(" "+n[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Tb.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(Sb.test(c))e.materialLibraries.push(c.substring(7).trim());else if(Eb.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(n=c.split(" "),n.length>1){let d=n[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;let u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();let s=new Ce;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){let c=e.objects[o],h=c.geometry,u=c.materials,d=h.type==="Line",f=h.type==="Points",_=!1;if(h.vertices.length===0)continue;let g=new ee;g.setAttribute("position",new Zt(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Zt(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new Zt(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Zt(h.uvs,2));let m=[];for(let v=0,y=u.length;v<y;v++){let S=u[v],M=S.name+"_"+S.smooth+"_"+_,T=e.materials[M];if(this.materials!==null){if(T=this.materials.create(S.name),d&&T&&!(T instanceof _n)){let w=new _n;Ze.prototype.copy.call(w,T),w.color.copy(T.color),T=w}else if(f&&T&&!(T instanceof Ge)){let w=new Ge({size:10,sizeAttenuation:!1});Ze.prototype.copy.call(w,T),w.color.copy(T.color),w.map=T.map,T=w}}T===void 0&&(d?T=new _n:f?T=new Ge({size:1,sizeAttenuation:!1}):T=new hs,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=_,e.materials[M]=T),m.push(T)}let p;if(m.length>1){for(let v=0,y=u.length;v<y;v++){let S=u[v];g.addGroup(S.groupStart,S.groupCount,v)}d?p=new zr(g,m):f?p=new ii(g,m):p=new Nt(g,m)}else d?p=new zr(g,m[0]):f?p=new ii(g,m[0]):p=new Nt(g,m[0]);p.name=c.name,s.add(p)}else if(e.vertices.length>0){let o=new Ge({size:1,sizeAttenuation:!1}),l=new ee;l.setAttribute("position",new Zt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Zt(e.colors,3)),o.vertexColors=!0);let c=new ii(l,o);s.add(c)}return s}};var Ab="assets/models/hominid_skull.obj3e95cd92-63a9-48ec-a41f-461a344caf62.obj",Cb=2.2,Rb=new D(0,.5,-.5),Pb=new ln(2.6,Math.PI,-Math.PI),Kr=class r{skullTemplatePromise=null;attachSkullModel(t,e){this.loadSkullTemplate().then(i=>{let n=this.createSkullAnchor(i,e);if(t.userData.disposed){this.disposeSkullAnchor(n,e);return}t.add(n)}).catch(()=>{if(t.userData.disposed){e.dispose();return}t.add(this.createFallbackCephalothorax(e))})}loadSkullTemplate(){if(!this.skullTemplatePromise){let t=new ih;this.skullTemplatePromise=t.loadAsync(Ab).then(e=>{let i=this.normalizeSkullTemplate(e),s=new Di().setFromObject(i).getSize(new D),a=Math.max(s.x,s.y,s.z);return a>0&&i.scale.setScalar(Cb/a),i})}return this.skullTemplatePromise}normalizeSkullTemplate(t){t.updateMatrixWorld(!0);let e=new Ce,i=[];t.traverse(a=>{if(!(a instanceof Nt))return;let o=a.geometry.clone();o.applyMatrix4(a.matrixWorld);let l=new Nt(o);e.add(l),i.push(l)});let s=new Di().setFromObject(e).getCenter(new D);return i.forEach(a=>{a.geometry.translate(-s.x,-s.y,-s.z)}),e}createSkullAnchor(t,e){let i=new Ce;i.position.copy(Rb),i.rotation.copy(Pb);let n=t.clone(!0);return n.traverse(s=>{s instanceof Nt&&(s.geometry=s.geometry.clone(),s.material=e,s.castShadow=!0,s.receiveShadow=!0)}),i.add(n),i}disposeSkullAnchor(t,e){t.traverse(i=>{i instanceof Nt&&i.geometry.dispose()}),e.dispose()}createFallbackCephalothorax(t){let e=new cs(.48,20,20);e.scale(1.2,.48,1.44);let i=new Nt(e,t);return i.position.set(0,.55,0),i.castShadow=!0,i.receiveShadow=!0,i}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac})};var Wn=.4,io=class r{battleCharacterSkullService=Jt(Kr);createCharacterMesh(t,e){let i=new Ce,n=new Tt(t),s=new Tt("#ffffff"),a=new Tt(657930).lerp(n,.35),o=this.createTarantulaPatternTexture(a,n),l=new Vs({color:new Tt(16777215).lerp(s,.85),roughness:.2,metalness:.1,emissive:s,emissiveIntensity:2.5}),c=new Vs({color:new Tt(1710618).lerp(n,.9),roughness:.9,metalness:.1,map:o,emissive:n,emissiveIntensity:.2}),h=c.clone();i.add(this.createCephalothorax(c)),this.battleCharacterSkullService.attachSkullModel(i,h);let u=l;for(let T=0;T<2;T++){let w=T===0?-1:1,C=new Ce,x=new kn(.07,.1,.18,10),E=new Nt(x,u);E.position.set(.12*w,.26,.52),E.rotation.x=Math.PI/8,E.rotation.z=Math.PI/10*w,E.castShadow=!0,E.receiveShadow=!0,C.add(E);let P=new Ua(.06,.4,20),I=new Nt(P,u);I.position.set(.14*w,.14,.6),I.rotation.x=Math.PI/2+Math.PI/10,I.rotation.z=Math.PI/12*w,I.castShadow=!0,I.receiveShadow=!0,C.add(I),i.add(C)}let d=l,f=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],_=.5,g=.55,m=.7,p=(T,w,C,...x)=>{x.forEach(E=>{let P=new Nt(C,d),I=new ui;I.position.copy(w.position),I.rotation.copy(w.rotation),P.position.set(0,E,0),P.castShadow=!0,P.receiveShadow=!0,I.add(P),T.add(I)})},v=new kn(.12,.08,_,10),y=new kn(.1,.06,g,10),S=new kn(.07,.03,m,10),M=new cs(.07,12,12);for(let T=0;T<2;T++){let w=T===0?-1:1;for(let C=0;C<4;C++){let x=new Ce,E=f[C]*(T===0?1:-1),P=(Math.PI/2.8+C*.05)*w,I=P*1.2,F=P*.75,V=Math.PI/5.3*w,H=new D(.2*w,-.1,0),k=new Nt(v,d);k.position.copy(H),k.rotation.z=I,k.castShadow=!0,k.receiveShadow=!0,x.add(k);let B=this.getConnectedSegmentPosition(H,I,_,-1,F,g,1),Y=new Nt(y,d);Y.position.copy(B),Y.rotation.z=F,Y.castShadow=!0,Y.receiveShadow=!0,x.add(Y),p(x,Y,M,g/2,-g/2);let rt=this.getConnectedSegmentPosition(B,F,g,-1,V,m,1),tt=new Nt(S,d);tt.position.copy(rt),tt.rotation.z=V,tt.castShadow=!0,tt.receiveShadow=!0,x.add(tt);let Rt=[.5,.25,0,-.2][C];x.rotation.y=E,x.position.set(.4*w,.3,Rt),i.add(x);let Dt=E,Gt=-.02+(Math.random()-.5)*.04,Wt=Math.PI/120*w+(Math.random()-.5)*.02;x.rotation.set(Gt,Dt,Wt),i.userData.legs||(i.userData.legs=[]),i.userData.legs.push({group:x,baseRotation:{x:Gt,y:Dt,z:Wt},side:w,index:C})}}return i.position.set(e.x,e.y+Wn,e.z),i}getConnectedSegmentPosition(t,e,i,n,s,a,o){return t.clone().add(this.getSegmentEndpointOffset(i,e,n)).sub(this.getSegmentEndpointOffset(a,s,o))}getSegmentEndpointOffset(t,e,i){return new D(0,t/2*i,0).applyAxisAngle(new D(0,0,1),e)}disposeCharacterMesh(t,e){t&&(t.userData.disposed=!0,e.remove(t),t.traverse(i=>{i instanceof Nt&&(i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(n=>{n.map?.dispose(),n.emissiveMap?.dispose(),n.roughnessMap?.dispose(),n.metalnessMap?.dispose(),n.normalMap?.dispose(),n.dispose()}):(i.material.map?.dispose(),i.material.emissiveMap?.dispose(),i.material.roughnessMap?.dispose(),i.material.metalnessMap?.dispose(),i.material.normalMap?.dispose(),i.material.dispose()))}))}createTarantulaPatternTexture(t,e){let n=document.createElement("canvas");n.width=256,n.height=256;let s=n.getContext("2d");s.fillStyle=t.getStyle(),s.fillRect(0,0,256,256);let a=s.createRadialGradient(256/2,256/2,20,256/2,256/2,256/2);a.addColorStop(0,"rgba(255, 255, 255, 0.08)"),a.addColorStop(.7,"rgba(0, 0, 0, 0.1)"),a.addColorStop(1,"rgba(0, 0, 0, 0.4)"),s.fillStyle=a,s.fillRect(0,0,256,256),s.strokeStyle=e.getStyle(),s.fillStyle=e.getStyle(),s.globalAlpha=.5,s.lineWidth=3,s.lineJoin="round";for(let l=0;l<5;l++){let c=(l+.5)*51.2,h=256/2,u=40+Math.sin(l*.8)*10,d=15;s.beginPath(),s.moveTo(h-u,c-d),s.lineTo(h,c),s.lineTo(h+u,c-d),s.stroke()}s.globalAlpha=.15,s.lineWidth=1;for(let l=0;l<80;l++){let c=Math.random()*256,h=Math.random()*256,u=8+Math.random()*12,d=Math.random()*Math.PI*2;s.beginPath(),s.moveTo(c,h),s.lineTo(c+Math.cos(d)*u,h+Math.sin(d)*u),s.strokeStyle=l%3===0?e.getStyle():"rgba(0, 0, 0, 0.6)",s.stroke()}s.globalAlpha=.3;for(let l=0;l<25;l++){let c=Math.random()*256,h=Math.random()*256,u=3+Math.random()*6,d=3+Math.random()*6,f=Math.random()*Math.PI;s.save(),s.translate(c,h),s.rotate(f),s.beginPath(),s.ellipse(0,0,u,d,0,0,Math.PI*2),s.fillStyle=l%2===0?e.getStyle():"rgba(0, 0, 0, 0.5)",s.fill(),s.restore()}s.globalAlpha=1;let o=new xn(n);return o.wrapS=on,o.wrapT=on,o.repeat.set(1.6,1.6),o.anisotropy=4,o}createCephalothorax(t){let e=new cs(.48,20,20);e.scale(1.2,1,1);let i=new Nt(e,t);return i.position.set(0,.65,-.8),i.castShadow=!0,i.receiveShadow=!0,i}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac})};function Xn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function dm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$r={duration:.5,overwrite:!1,delay:0},pd,Ke,ve,$i=1e8,fe=1/$i,sd=Math.PI*2,Ib=sd/4,Db=0,fm=Math.sqrt,Lb=Math.cos,Fb=Math.sin,Be=function(t){return typeof t=="string"},Re=function(t){return typeof t=="function"},qn=function(t){return typeof t=="number"},dh=function(t){return typeof t>"u"},En=function(t){return typeof t=="object"},Ti=function(t){return t!==!1},md=function(){return typeof window<"u"},nh=function(t){return Re(t)||Be(t)},pm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ri=Array.isArray,Ob=/random\([^)]+\)/g,Nb=/,\s*/g,sm=/(?:-?\.?\d|\.)+/gi,gd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ju=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_d=/[+-]=-?[.\d]+/,Ub=/[^,'"\[\]\s]+/gi,Bb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Me,Sn,rd,xd,Ui={},oh={},mm,gm=function(t){return(oh=Qr(t,Ui))&&ai},fh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},lo=function(t,e){return!e&&console.warn(t)},_m=function(t,e){return t&&(Ui[t]=e)&&oh&&(oh[t]=e)||Ui},co=function(){return 0},zb={suppressEvents:!0,isStart:!0,kill:!1},sh={suppressEvents:!0,kill:!1},kb={suppressEvents:!0},vd={},ys=[],ad={},xm,Mi={},$u={},rm=30,rh=[],yd="",bd=function(t){var e=t[0],i,n;if(En(e)||Re(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=rh.length;n--&&!rh[n].targetTest(e););i=rh[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Ed(t[n],i)))||t.splice(n,1);return t},bs=function(t){return t._gsap||bd(Qi(t))[0]._gsap},Md=function(t,e,i){return(i=t[e])&&Re(i)?t[e]():dh(i)&&t.getAttribute&&t.getAttribute(e)||i},fi=function(t,e){return(t=t.split(",")).forEach(e)||t},Pe=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},tr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Vb=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},lh=function(){var t=ys.length,e=ys.slice(0),i,n;for(ad={},ys.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Sd=function(t){return!!(t._initted||t._startAt||t.add)},vm=function(t,e,i,n){ys.length&&!Ke&&lh(),t.render(e,i,n||!!(Ke&&e<0&&Sd(t))),ys.length&&!Ke&&lh()},ym=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ub).length<2?e:Be(t)?t.trim():t},bm=function(t){return t},Bi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Hb=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Qr=function(t,e){for(var i in e)t[i]=e[i];return t},am=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=En(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},ch=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},ro=function(t){var e=t.parent||Me,i=t.keyframes?Hb(ri(t.keyframes)):Bi;if(Ti(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Gb=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Mm=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=t[n],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},ph=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Ms=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ks=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Wb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},od=function(t,e,i,n){return t._startAt&&(Ke?t._startAt.revert(sh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Xb=function r(t){return!t||t._ts&&r(t.parent)},om=function(t){return t._repeat?ta(t._tTime,t=t.duration()+t._rDelay)*t:0},ta=function(t,e){var i=Math.floor(t=be(t/e));return t&&i===t?i-1:i},hh=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},mh=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||fe)||0))},gh=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=be(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),mh(t),i._dirty||Ks(i,t)),t},Sm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=hh(t.rawTime(),e),(!e._dur||fo(0,e.totalDuration(),i)-e._tTime>fe)&&e.render(i,!0)),Ks(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-fe}},Tn=function(t,e,i,n){return e.parent&&Ms(e),e._start=be((qn(i)?i:i||t!==Me?Ji(t,i,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Mm(t,e,"_first","_last",t._sort?"_start":0),ld(e)||(t._recent=e),n||Sm(t,e),t._ts<0&&gh(t,t._tTime),t},Tm=function(t,e){return(Ui.ScrollTrigger||fh("scrollTrigger",e))&&Ui.ScrollTrigger.create(e,t)},Em=function(t,e,i,n,s){if(Cd(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&xm!==Si.frame)return ys.push(t),t._lazy=[s,n],1},Yb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ld=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qb=function(t,e,i,n){var s=t.ratio,a=e<0||!e&&(!t._start&&Yb(t)&&!(!t._initted&&ld(t))||(t._ts<0||t._dp._ts<0)&&!ld(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=fo(0,t._tDur,e),h=ta(l,o),t._yoyo&&h&1&&(a=1-a),h!==ta(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ke||n||t._zTime===fe||!e&&t._zTime){if(!t._initted&&Em(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?fe:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&od(t,e,i,!0),t._onUpdate&&!i&&Ni(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Ni(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ms(t,1),!i&&!Ke&&(Ni(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Zb=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ea=function(t,e,i,n){var s=t._repeat,a=be(e)||0,o=t._tTime/t._tDur;return o&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:be(a*(s+1)+t._rDelay*s):a,o>0&&!n&&gh(t,t._tTime=t._tDur*o),t.parent&&mh(t),i||Ks(t.parent,t),t},lm=function(t){return t instanceof je?Ks(t):ea(t,t._dur)},jb={_start:0,endTime:co,totalDuration:co},Ji=function r(t,e,i){var n=t.labels,s=t._recent||jb,a=t.duration()>=$i?s.endTime(!1):t._dur,o,l,c;return Be(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(e in n||(n[e]=a),n[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(ri(i)?i[0]:i).totalDuration()),o>1?r(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},ao=function(t,e,i){var n=qn(e[1]),s=(n?2:1)+(t<2?0:1),a=e[s],o,l;if(n&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ti(l.vars.inherit)&&l.parent;a.immediateRender=Ti(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ie(e[0],a,e[s+1])},Ss=function(t,e){return t||t===0?e(t):e},fo=function(t,e,i){return i<t?t:i>e?e:i},Je=function(t,e){return!Be(t)||!(e=Bb.exec(t))?"":e[1]},Kb=function(t,e,i){return Ss(i,function(n){return fo(t,e,n)})},cd=[].slice,wm=function(t,e){return t&&En(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&En(t[0]))&&!t.nodeType&&t!==Sn},Jb=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return Be(n)&&!e||wm(n,1)?(s=i).push.apply(s,Qi(n)):i.push(n)})||i},Qi=function(t,e,i){return ve&&!e&&ve.selector?ve.selector(t):Be(t)&&!i&&(rd||!ia())?cd.call((e||xd).querySelectorAll(t),0):ri(t)?Jb(t,i):wm(t)?cd.call(t,0):t?[t]:[]},hd=function(t){return t=Qi(t)[0]||lo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Qi(e,i.querySelectorAll?i:i===t?lo("Invalid scope")||xd.createElement("div"):t)}},Am=function(t){return t.sort(function(){return .5-Math.random()})},Cm=function(t){if(Re(t))return t;var e=En(t)?t:{each:t},i=Js(e.ease),n=e.from||0,s=parseFloat(e.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=e.axis,h=n,u=n;return Be(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,v,y,S,M,T,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,$i])[1],!x){for(w=-$i;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*h-.5:n%x,v=x===$i?0:l?g*u/x-.5:n/x|0,w=0,C=$i,T=0;T<g;T++)y=T%x-p,S=v-(T/x|0),m[T]=M=c?Math.abs(c==="y"?S:y):fm(y*y+S*S),M>w&&(w=M),M<C&&(C=M);n==="random"&&Am(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Je(e.amount||e.each)||0,i=i&&g<0?Um(i):i}return g=(m[d]-m.min)/m.max||0,be(m.b+(i?i(g):g)*m.v)+m.u}},ud=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=be(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(qn(i)?0:Je(i))}},Rm=function(t,e){var i=ri(t),n,s;return!i&&En(t)&&(n=i=t.radius||$i,t.values?(t=Qi(t.values),(s=!qn(t[0]))&&(n*=n)):t=ud(t.increment)),Ss(e,i?Re(t)?function(a){return s=t(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=$i,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?t[h]:a,s||h===a||qn(a)?h:h+Je(a)}:ud(t))},Pm=function(t,e,i,n){return Ss(ri(t)?!e:i===!0?!!(i=0):!n,function(){return ri(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},$b=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,a){return a(s)},n)}},Qb=function(t,e){return function(i){return t(parseFloat(i))+(e||Je(i))}},tM=function(t,e,i){return Dm(t,e,0,1,i)},Im=function(t,e,i){return Ss(i,function(n){return t[~~e(n)]})},eM=function r(t,e,i){var n=e-t;return ri(t)?Im(t,r(0,t.length),e):Ss(i,function(s){return(n+(s-t)%n)%n+t})},iM=function r(t,e,i){var n=e-t,s=n*2;return ri(t)?Im(t,r(0,t.length-1),e):Ss(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>n?s-a:a)})},na=function(t){return t.replace(Ob,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(Nb);return Pm(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},Dm=function(t,e,i,n,s){var a=e-t,o=n-i;return Ss(s,function(l){return i+((l-t)/a*o||0)})},nM=function r(t,e,i,n){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=Be(t),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(ri(t)&&!ri(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=e}else n||(t=Qr(ri(t)?[]:{},t));if(!h){for(l in e)wd.call(o,t,l,"get",e[l]);s=function(_){return Id(_,o)||(a?t.p:t)}}}return Ss(i,s)},cm=function(t,e,i){var n=t.labels,s=$i,a,o,l;for(a in n)o=n[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ni=function(t,e,i){var n=t.vars,s=n[e],a=ve,o=t._ctx,l,c,h;if(s)return l=n[e+"Params"],c=n.callbackScope||t,i&&ys.length&&lh(),o&&(ve=o),h=l?s.apply(c,l):s.call(c),ve=a,h},no=function(t){return Ms(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ke),t.progress()<1&&Ni(t,"onInterrupt"),t},Jr,Lm=[],Fm=function(t){if(t)if(t=!t.name&&t.default||t,md()||t.headless){var e=t.name,i=Re(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:co,render:Id,add:wd,kill:vM,modifier:xM,rawVars:0},a={targetTest:0,get:0,getSetter:_h,aliases:{},register:0};if(ia(),t!==n){if(Mi[e])return;Bi(n,Bi(ch(t,s),a)),Qr(n.prototype,Qr(s,ch(t,a))),Mi[n.prop=e]=n,t.targetTest&&(rh.push(n),vd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}_m(e,n),t.register&&t.register(ai,n,pi)}else Lm.push(t)},de=255,so={aqua:[0,de,de],lime:[0,de,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,de],navy:[0,0,128],white:[de,de,de],olive:[128,128,0],yellow:[de,de,0],orange:[de,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[de,0,0],pink:[de,192,203],cyan:[0,de,de],transparent:[de,de,de,0]},Qu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*de+.5|0},Om=function(t,e,i){var n=t?qn(t)?[t>>16,t>>8&de,t&de]:0:so.black,s,a,o,l,c,h,u,d,f,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),so[t])n=so[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&de,n&de,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&de,t&de]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(sm),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=Qu(l+1/3,s,a),n[1]=Qu(l,s,a),n[2]=Qu(l-1/3,s,a);else if(~t.indexOf("="))return n=t.match(gd),i&&n.length<4&&(n[3]=1),n}else n=t.match(sm)||so.transparent;n=n.map(Number)}return e&&!_&&(s=n[0]/de,a=n[1]/de,o=n[2]/de,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Nm=function(t){var e=[],i=[],n=-1;return t.split(Yn).forEach(function(s){var a=s.match(Qs)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},hm=function(t,e,i){var n="",s=(t+n).match(Yn),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Om(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=Nm(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Yn,"1").split(Qs),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=t.split(Yn),u=c.length-1;o<u;o++)n+=c[o]+s[o];return n+c[u]},Yn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in so)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),sM=/hsl[a]?\(/,Td=function(t){var e=t.join(" "),i;if(Yn.lastIndex=0,Yn.test(e))return i=sM.test(e),t[1]=hm(t[1],i),t[0]=hm(t[0],i,Nm(t[1])),!0},ho,Si=function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(m){var p=r()-n,v=m===!0,y,S,M,T;if((p>t||p<0)&&(i+=p-e),n+=p,M=n-i,y=M-a,(y>0||v)&&(T=++u.frame,d=M-u.time*1e3,u.time=M=M/1e3,a+=y+(y>=s?4:s-y),S=1),v||(l=c(g)),S)for(f=0;f<o.length;f++)o[f](M,d,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){mm&&(!rd&&md()&&(Sn=rd=window,xd=Sn.document||{},Ui.gsap=ai,(Sn.gsapVersions||(Sn.gsapVersions=[])).push(ai.version),gm(oh||Sn.GreenSockGlobals||!Sn.gsap&&Sn||{}),Lm.forEach(Fm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ho=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ho=0,c=co},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,v){var y=p?function(S,M,T,w){m(S,M,T,w),u.remove(y)}:m;return u.remove(m),o[v?"unshift":"push"](y),ia(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),ia=function(){return!ho&&Si.wake()},Xt={},rM=/^[\d.\-M][\d.\-,\s]/,aM=/["']/g,oM=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[n]=isNaN(c)?c.replace(aM,"").trim():+c,n=l.substr(o+1).trim();return e},lM=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},cM=function(t){var e=(t+"").split("("),i=Xt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[oM(e[1])]:lM(t).split(",").map(ym)):Xt._CE&&rM.test(t)?Xt._CE("",t):i},Um=function(t){return function(e){return 1-t(1-e)}},Bm=function r(t,e){for(var i=t._first,n;i;)i instanceof je?r(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?r(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},Js=function(t,e){return t&&(Re(t)?t:Xt[t]||cM(t))||e},er=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},a;return fi(t,function(o){Xt[o]=Ui[o]=s,Xt[a=o.toLowerCase()]=i;for(var l in s)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=s[l]}),s},zm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},td=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/sd*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*Fb((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:zm(o);return s=sd/s,l.config=function(c,h){return r(t,c,h)},l},ed=function r(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:zm(i);return n.config=function(s){return r(t,s)},n};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;er(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;er("Elastic",td("in"),td("out"),td());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(o){return o<e?r*o*o:o<i?r*Math.pow(o-1.5/t,2)+.75:o<n?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};er("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);er("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});er("Circ",function(r){return-(fm(1-r*r)-1)});er("Sine",function(r){return r===1?1:-Lb(r*Ib)+1});er("Back",ed("in"),ed("out"),ed());Xt.SteppedEase=Xt.steps=Ui.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,a=1-fe;return function(o){return((n*fo(0,a,o)|0)+s)*i}}};$r.ease=Xt["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yd+=r+","+r+"Params,"});var Ed=function(t,e){this.id=Db++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Md,this.set=e?e.getSetter:_h},uo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ea(this,+e.duration,1,1),this.data=e.data,ve&&(this._ctx=ve,ve.data.push(this)),ho||Si.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ea(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(ia(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gh(this,i),!s._dp||s.parent||Sm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Tn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===fe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),vm(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+om(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+om(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ta(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?hh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-fe?0:this._rts,this.totalTime(fo(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),mh(this),Wb(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=be(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Tn(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hh(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=kb);var n=Ke;return Ke=i,Sd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ke=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,lm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,lm(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Ji(this,i),Ti(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Ti(n)),this._dur||(this._zTime=-fe),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-fe)},t.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=Re(i)?i:bm,l=function(){var h=n.then;n.then=null,s&&s(),Re(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){no(this)},r}();Bi(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var je=function(r){dm(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ti(i.sortChildren),Me&&Tn(i.parent||Me,Xn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Tm(Xn(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,a){return ao(0,arguments,this),this},e.from=function(n,s,a){return ao(1,arguments,this),this},e.fromTo=function(n,s,a,o){return ao(2,arguments,this),this},e.set=function(n,s,a){return s.duration=0,s.parent=this,ro(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ie(n,s,Ji(this,a),1),this},e.call=function(n,s,a){return Tn(this,Ie.delayedCall(0,n,s),a)},e.staggerTo=function(n,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ie(n,a,Ji(this,l)),this},e.staggerFrom=function(n,s,a,o,l,c,h){return a.runBackwards=1,ro(a).immediateRender=Ti(a.immediateRender),this.staggerTo(n,s,a,o,l,c,h)},e.staggerFromTo=function(n,s,a,o,l,c,h,u){return o.startAt=a,ro(o).immediateRender=Ti(o.immediateRender),this.staggerTo(n,s,o,l,c,h,u)},e.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:be(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,v,y,S,M,T,w;if(this!==Me&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,S=this._start,y=this._ts,p=!y,u&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,a);if(d=be(h%m),h===l?(g=this._repeat,d=c):(M=be(h/m),g=~~M,g&&g===M&&(d=c,g--),d>c&&(d=c)),M=ta(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),T&&g&1&&(d=c-d,w=1),g!==M&&!this._lock){var C=T&&M&1,x=C===(T&&g&1);if(g<M&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(w?0:be(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Ni(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Bm(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Zb(this,be(o),be(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!s&&!M&&(Ni(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-fe);break}}f=_}else{f=this._last;for(var E=n<0?n:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,a||Ke&&Sd(f)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=E?-fe:fe);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-fe)._zTime=d>=o?1:-1,this._ts))return this._start=S,mh(this),this.render(n,s,a);this._onUpdate&&!s&&Ni(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ms(this,1),!s&&!(n<0&&!o)&&(h||o||!l)&&(Ni(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var a=this;if(qn(s)||(s=Ji(this,s,n)),!(n instanceof uo)){if(ri(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Be(n))return this.addLabel(n,s);if(Re(n))n=Ie.delayedCall(0,n);else return this}return this!==n?Tn(this,n,s):this},e.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-$i);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ie?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},e.remove=function(n){return Be(n)?this.removeLabel(n):Re(n)?this.killTweensOf(n):(n.parent===this&&ph(this,n),n===this._recent&&(this._recent=this._last),Ks(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(Si.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=Ji(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,a){var o=Ie.delayedCall(0,s||co,a);return o.data="isPause",this._hasPause=1,Tn(this,o,Ji(this,n))},e.removePause=function(n){var s=this._first;for(n=Ji(this,n);s;)s._start===n&&s.data==="isPause"&&Ms(s),s=s._next},e.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)vs!==o[l]&&o[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var a=[],o=Qi(n),l=this._first,c=qn(s),h;l;)l instanceof Ie?Vb(l._targets,o)&&(c?(!vs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(n,s){s=s||{};var a=this,o=Ji(a,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Ie.to(a,Bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||fe,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ea(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(n,s,a){return this.tweenTo(s,Bi({startAt:{time:Ji(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),cm(this,Ji(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),cm(this,Ji(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+fe)},e.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=be(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return Ks(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Ks(this)},e.totalDuration=function(n){var s=0,a=this,o=a._last,l=$i,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Tn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=be(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ea(a,a===Me&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(Me._ts&&(vm(Me,hh(n,Me)),xm=Si.frame),Si.frame>=rm){rm+=Ei.autoSleep||120;var s=Me._first;if((!s||!s._ts)&&Ei.autoSleep&&Si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Si.sleep()}}},t}(uo);Bi(je.prototype,{_lock:0,_hasPause:0,_forcing:0});var hM=function(t,e,i,n,s,a,o){var l=new pi(this._pt,t,e,0,1,Pd,null,s),c=0,h=0,u,d,f,_,g,m,p,v;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=na(n)),a&&(v=[i,n],a(v,t,e),i=v[0],n=v[1]),d=i.match(Ju)||[];u=Ju.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?tr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Ju.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(_d.test(n)||p)&&(l.e=0),this._pt=l,l},wd=function(t,e,i,n,s,a,o,l,c,h){Re(n)&&(n=n(s||0,t,a));var u=t[e],d=i!=="get"?i:Re(u)?c?t[e.indexOf("set")||!Re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Re(u)?c?mM:Hm:Rd,_;if(Be(n)&&(~n.indexOf("random(")&&(n=na(n)),n.charAt(1)==="="&&(_=tr(d,n)+(Je(d)||0),(_||_===0)&&(n=_))),!h||d!==n||dd)return!isNaN(d*n)&&n!==""?(_=new pi(this._pt,t,e,+d||0,n-(d||0),typeof u=="boolean"?_M:Gm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&fh(e,n),hM.call(this,t,e,d,n,f,l||Ei.stringFilter,c))},uM=function(t,e,i,n,s){if(Re(t)&&(t=oo(t,s,e,i,n)),!En(t)||t.style&&t.nodeType||ri(t)||pm(t))return Be(t)?oo(t,s,e,i,n):t;var a={},o;for(o in t)a[o]=oo(t[o],s,e,i,n);return a},Ad=function(t,e,i,n,s,a){var o,l,c,h;if(Mi[t]&&(o=new Mi[t]).init(s,o.rawVars?e[t]:uM(e[t],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new pi(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==Jr))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},vs,dd,Cd=function r(t,e,i){var n=t.vars,s=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!pd,S=t.timeline,M,T,w,C,x,E,P,I,F,V,H,k,B;if(S&&(!d||!s)&&(s="none"),t._ease=Js(s,$r.ease),t._yEase=u?Um(Js(u===!0?s:u,$r.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!S&&!!n.runBackwards,!S||d&&!n.stagger){if(I=m[0]?bs(m[0]).harness:0,k=I&&n[I.prop],M=ch(n,vd),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?sh:zb),g._lazy=0),a){if(Ms(t._startAt=Ie.set(m,Bi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ti(l),startAt:null,delay:0,onUpdate:c&&function(){return Ni(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke||!o&&!f)&&t._startAt.revert(sh),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),w=Bi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ti(l),immediateRender:o,stagger:0,parent:p},M),k&&(w[I.prop]=k),Ms(t._startAt=Ie.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke?t._startAt.revert(sh):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,fe,fe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ti(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],P=x._gsap||bd(m)[T]._gsap,t._ptLookup[T]=V={},ad[P.id]&&ys.length&&lh(),H=v===m?T:v.indexOf(x),I&&(F=new I).init(x,k||M,t,H,v)!==!1&&(t._pt=C=new pi(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Y){V[Y]=C}),F.priority&&(E=1)),!I||k)for(w in M)Mi[w]&&(F=Ad(w,M,t,H,x,v))?F.priority&&(E=1):V[w]=C=wd.call(t,x,w,"get",M[w],H,v,0,n.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),y&&t._pt&&(vs=t,Me.killTweensOf(x,V,t.globalTime(e)),B=!t.parent,vs=0),t._pt&&l&&(ad[P.id]=1)}E&&Dd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&S.render($i,!0,!0)},dM=function(t,e,i,n,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return dd=1,t.vars[e]="+=0",Cd(t,o),dd=0,l?lo(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Pe(i)+Je(u.e)),u.b&&(u.b=h.s+Je(u.b))},fM=function(t,e){var i=t[0]?bs(t[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return e;s=Qr({},e);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},pM=function(t,e,i,n){var s=e.ease||n||"power1.inOut",a,o;if(ri(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},oo=function(t,e,i,n,s){return Re(t)?t.call(e,i,n,s):Be(t)&&~t.indexOf("random(")?na(t):t},km=yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Vm={};fi(km+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vm[r]=1});var Ie=function(r){dm(t,r);function t(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:ro(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=n.parent||Me,y=(ri(i)||pm(i)?qn(i[0]):"length"in n)?[i]:Qi(i),S,M,T,w,C,x,E,P;if(o._targets=y.length?bd(y):lo("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||nh(c)||nh(h)){if(n=o.vars,S=o.timeline=new je({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),S.kill(),S.parent=S._dp=Xn(o),S._start=0,d||nh(c)||nh(h)){if(w=y.length,E=d&&Cm(d),En(d))for(C in d)~km.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(M=0;M<w;M++)T=ch(n,Vm),T.stagger=0,p&&(T.yoyoEase=p),P&&Qr(T,P),x=y[M],T.duration=+oo(c,Xn(o),M,x,y),T.delay=(+oo(h,Xn(o),M,x,y)||0)-o._delay,!d&&w===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),S.to(x,T,E?E(M,x,y):0),S._ease=Xt.none;S.duration()?c=h=0:o.timeline=0}else if(_){ro(Bi(S.vars.defaults,{ease:"none"})),S._ease=Js(_.ease||n.ease||"none");var I=0,F,V,H;if(ri(_))_.forEach(function(k){return S.to(y,k,">")}),S.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||pM(C,_[C],T,_.easeEach);for(C in T)for(F=T[C].sort(function(k,B){return k.t-B.t}),I=0,M=0;M<F.length;M++)V=F[M],H={ease:V.e,duration:(V.t-(M?F[M-1].t:0))/100*c},H[C]=V.v,S.to(y,H,I),I+=H.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!pd&&(vs=Xn(o),Me.killTweensOf(y),vs=0),Tn(v,Xn(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===be(v._time)&&Ti(u)&&Xb(Xn(o))&&v.data!=="nested")&&(o._tTime=-fe,o.render(Math.max(0,-h)||0)),m&&Tm(Xn(o),m),o}var e=t.prototype;return e.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-fe&&!h?l:n<fe?0:n,d,f,_,g,m,p,v,y,S;if(!c)qb(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,a);if(d=be(u%g),u===l?(_=this._repeat,d=c):(m=be(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(S=this._yEase,d=c-d),m=ta(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(y&&this._yEase&&Bm(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(be(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Em(this,h?n:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!o&&u&&!s&&!m&&(Ni(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(n<0?n:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&od(this,n,s,a),Ni(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ni(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&od(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ms(this,1),!s&&!(h&&!o)&&(u||o||p)&&(Ni(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,a,o,l){ho||Si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Cd(this,c),h=this._ease(c/this._dur),dM(this,n,s,a,o,h,c,l)?this.resetTo(n,s,a,o,1):(gh(this,0),this.parent||Mm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ke),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,vs&&vs.vars.overwrite!==!0)._first||no(this),this.parent&&a!==this.timeline.totalDuration()&&ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Qi(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&Gb(o,l))return s==="all"&&(this._pt=0),no(this);for(u=this._op=this._op||[],s!=="all"&&(Be(s)&&(g={},fi(s,function(v){return g[v]=1}),s=g),s=fM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ph(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&no(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return ao(1,arguments)},t.delayedCall=function(n,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(n,s,a){return ao(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,a){return Me.killTweensOf(n,s,a)},t}(uo);Bi(Ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(r){Ie[r]=function(){var t=new je,e=cd.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Rd=function(t,e,i){return t[e]=i},Hm=function(t,e,i){return t[e](i)},mM=function(t,e,i,n){return t[e](n.fp,i)},gM=function(t,e,i){return t.setAttribute(e,i)},_h=function(t,e){return Re(t[e])?Hm:dh(t[e])&&t.setAttribute?gM:Rd},Gm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_M=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Pd=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Id=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},xM=function(t,e,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(t,e,i),s=a},vM=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ph(this,e,"_pt"):e.dep||(i=1),e=n;return!i},yM=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Dd=function(t){for(var e=t._pt,i,n,s,a;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=s},pi=function(){function r(e,i,n,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||Gm,this.d=l||this,this.set=c||Rd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=yM,this.m=i,this.mt=s,this.tween=n},r}();fi(yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vd[r]=1});Ui.TweenMax=Ui.TweenLite=Ie;Ui.TimelineLite=Ui.TimelineMax=je;Me=new je({sortChildren:!1,defaults:$r,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=Td;var $s=[],ah={},bM=[],um=0,MM=0,id=function(t){return(ah[t]||bM).map(function(e){return e()})},fd=function(){var t=Date.now(),e=[];t-um>2&&(id("matchMediaInit"),$s.forEach(function(i){var n=i.queries,s=i.conditions,a,o,l,c;for(o in n)a=Sn.matchMedia(n[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),id("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),um=t,id("matchMedia"))},Wm=function(){function r(e,i){this.selector=i&&hd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=MM++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){Re(i)&&(s=n,n=i,i=Re);var a=this,o=function(){var c=ve,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=hd(s)),ve=a,u=n.apply(a,arguments),Re(u)&&a._r.push(u),ve=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===Re?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var n=ve;ve=null,i(this),ve=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Ie&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof je?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ie)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=$s.length;a--;)$s[a].id===this.id&&$s.splice(a,1)},t.revert=function(i){this.kill(i||{})},r}(),SM=function(){function r(e){this.contexts=[],this.scope=e,ve&&ve.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){En(i)||(i={matches:i});var a=new Wm(0,s||this.scope),o=a.conditions={},l,c,h;ve&&!a.selector&&(a.selector=ve.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=Sn.matchMedia(i[c]),l&&($s.indexOf(a)<0&&$s.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(fd):l.addEventListener("change",fd)));return h&&n(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),uh={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Fm(n)})},timeline:function(t){return new je(t)},getTweensOf:function(t,e){return Me.getTweensOf(t,e)},getProperty:function(t,e,i,n){Be(t)&&(t=Qi(t)[0]);var s=bs(t||{}).get,a=i?bm:ym;return i==="native"&&(i=""),t&&(e?a((Mi[e]&&Mi[e].get||s)(t,e,i,n)):function(o,l,c){return a((Mi[o]&&Mi[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=Qi(t),t.length>1){var n=t.map(function(h){return ai.quickSetter(h,e,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}t=t[0]||{};var a=Mi[e],o=bs(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Jr._pt=0,u.init(t,i?h+i:h,Jr,0,[t]),u.render(1,u),Jr._pt&&Id(1,Jr)}:o.set(t,l);return a?c:function(h){return c(t,l,i?h+i:h,o,1)}},quickTo:function(t,e,i){var n,s=ai.to(t,Bi((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return Me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Js(t.ease,$r.ease)),am($r,t||{})},config:function(t){return am(Ei,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Mi[o]&&!Ui[o]&&lo(e+" effect requires "+o+" plugin.")}),$u[e]=function(o,l,c){return i(Qi(o),Bi(l||{},s),c)},a&&(je.prototype[e]=function(o,l,c){return this.add($u[e](o,En(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=Js(e)},parseEase:function(t,e){return arguments.length?Js(t,e):Xt},getById:function(t){return Me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new je(t),n,s;for(i.smoothChildTiming=Ti(t.smoothChildTiming),Me.remove(i),i._dp=0,i._time=i._tTime=Me._time,n=Me._first;n;)s=n._next,(e||!(!n._dur&&n instanceof Ie&&n.vars.onComplete===n._targets[0]))&&Tn(i,n,n._start-n._delay),n=s;return Tn(Me,i,0),i},context:function(t,e){return t?new Wm(t,e):ve},matchMedia:function(t){return new SM(t)},matchMediaRefresh:function(){return $s.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||fd()},addEventListener:function(t,e){var i=ah[t]||(ah[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ah[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:eM,wrapYoyo:iM,distribute:Cm,random:Pm,snap:Rm,normalize:tM,getUnit:Je,clamp:Kb,splitColor:Om,toArray:Qi,selector:hd,mapRange:Dm,pipe:$b,unitize:Qb,interpolate:nM,shuffle:Am},install:gm,effects:$u,ticker:Si,updateRoot:je.updateRoot,plugins:Mi,globalTimeline:Me,core:{PropTween:pi,globals:_m,Tween:Ie,Timeline:je,Animation:uo,getCache:bs,_removeLinkedListItem:ph,reverting:function(){return Ke},context:function(t){return t&&ve&&(ve.data.push(t),t._ctx=ve),ve},suppressOverwrites:function(t){return pd=t}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return uh[r]=Ie[r]});Si.add(je.updateRoot);Jr=uh.to({},{duration:0});var TM=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},EM=function(t,e){var i=t._targets,n,s,a;for(n in e)for(s=i.length;s--;)a=t._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=TM(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[s],n))},nd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(Be(s)&&(l={},fi(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}EM(o,s)}}}},ai=uh.registerPlugin({name:"attr",init:function(t,e,i,n,s){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],n,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)Ke?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},nd("roundProps",ud),nd("modifiers"),nd("snap",Rm))||uh;Ie.version=je.version=ai.version="3.14.2";mm=1;md()&&ia();var wM=Xt.Power0,AM=Xt.Power1,CM=Xt.Power2,RM=Xt.Power3,PM=Xt.Power4,IM=Xt.Linear,DM=Xt.Quad,LM=Xt.Cubic,FM=Xt.Quart,OM=Xt.Quint,NM=Xt.Strong,UM=Xt.Elastic,BM=Xt.Back,zM=Xt.SteppedEase,kM=Xt.Bounce,VM=Xt.Sine,HM=Xt.Expo,GM=Xt.Circ;var Xm,Ts,ra,Bd,rr,WM,Ym,zd,XM=function(){return typeof window<"u"},jn={},sr=180/Math.PI,aa=Math.PI/180,sa=Math.atan2,qm=1e8,kd=/([A-Z])/g,YM=/(left|right|width|margin|padding|x)/i,qM=/[\s,\(]\S/,wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},JM=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},eg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ig=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$M=function(t,e,i){return t.style[e]=i},QM=function(t,e,i){return t.style.setProperty(e,i)},tS=function(t,e,i){return t._gsap[e]=i},eS=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},iS=function(t,e,i,n,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},nS=function(t,e,i,n,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},Se="transform",wi=Se+"Origin",sS=function r(t,e){var i=this,n=this.target,s=n.style,a=n._gsap;if(t in jn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=wn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Zn(n,o)}):this.tfm[t]=a.x?a[t]:Zn(n,t),t===wi&&(this.tfm.zOrigin=a.zOrigin);else return wn.transform.split(",").forEach(function(o){return r.call(i,o,e)});if(this.props.indexOf(Se)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(wi,e,"")),t=Se}(s||e)&&this.props.push(t,e,s[t])},ng=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},rS=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(kd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=zd(),(!s||!s.isStart)&&!i[Se]&&(ng(i),n.zOrigin&&i[wi]&&(i[wi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},sg=function(t,e){var i={target:t,props:[],revert:rS,save:sS};return t._gsap||ai.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},rg,Od=function(t,e){var i=Ts.createElementNS?Ts.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ts.createElement(t);return i&&i.style?i:Ts.createElement(t)},zi=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(kd,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,oa(e)||e,1)||""},Zm="O,Moz,ms,Ms,Webkit".split(","),oa=function(t,e,i){var n=e||rr,s=n.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Zm[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Zm[a]:"")+t},Nd=function(){XM()&&window.document&&(Xm=window,Ts=Xm.document,ra=Ts.documentElement,rr=Od("div")||{style:{}},WM=Od("div"),Se=oa(Se),wi=Se+"Origin",rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rg=!!oa("perspective"),zd=ai.core.reverting,Bd=1)},jm=function(t){var e=t.ownerSVGElement,i=Od("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),ra.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),ra.removeChild(i),s},Km=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},ag=function(t){var e,i;try{e=t.getBBox()}catch{e=jm(t),i=1}return e&&(e.width||e.height)||i||(e=jm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Km(t,["x","cx","x1"])||0,y:+Km(t,["y","cy","y1"])||0,width:0,height:0}:e},og=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ag(t))},ws=function(t,e){if(e){var i=t.style,n;e in jn&&e!==wi&&(e=Se),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(kd,"-$1").toLowerCase())):i.removeAttribute(e)}},Es=function(t,e,i,n,s,a){var o=new pi(t._pt,e,i,0,1,a?ig:eg);return t._pt=o,o.b=n,o.e=s,t._props.push(i),o},Jm={deg:1,rad:1,turn:1},aS={grid:1,flex:1},As=function r(t,e,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=rr.style,l=YM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===a||!s||Jm[n]||Jm[a])return s;if(a!=="px"&&!d&&(s=r(t,e,i,"px")),p=t.getCTM&&og(t),(f||a==="%")&&(jn[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Pe(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ts||!g.appendChild)&&(g=Ts.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Si.time&&!m.uncache)return Pe(s/m.width*u);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+n,_=t[h],v?t.style[e]=v:ws(t,e)}else(f||a==="%")&&!aS[zi(g,"display")]&&(o.position=zi(t,"position")),g===t&&(o.position="static"),g.appendChild(rr),_=rr[h],g.removeChild(rr),o.position="absolute";return l&&f&&(m=bs(g),m.time=Si.time,m.width=g[h]),Pe(d?_*s/u:_&&s?u/_*s:0)},Zn=function(t,e,i,n){var s;return Bd||Nd(),e in wn&&e!=="transform"&&(e=wn[e],~e.indexOf(",")&&(e=e.split(",")[0])),jn[e]&&e!=="transform"?(s=go(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:vh(zi(t,wi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=xh[e]&&xh[e](t,e,i)||zi(t,e)||Md(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?As(t,e,s,i)+i:s},oS=function(t,e,i,n){if(!i||i==="none"){var s=oa(e,t,1),a=s&&zi(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=zi(t,"borderTopColor"))}var o=new pi(this._pt,t.style,e,0,1,Pd),l=0,c=0,h,u,d,f,_,g,m,p,v,y,S,M;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=zi(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=t.style[e],t.style[e]=n,n=zi(t,e)||n,g?t.style[e]=g:ws(t,e)),h=[i,n],Td(h),i=h[0],n=h[1],d=i.match(Qs)||[],M=n.match(Qs)||[],M.length){for(;u=Qs.exec(n);)m=u[0],v=n.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=tr(f,m)+S),p=parseFloat(m),y=m.substr((p+"").length),l=Qs.lastIndex-y.length,y||(y=y||Ei.units[e]||S,l===n.length&&(n+=y,o.e+=y)),S!==y&&(f=As(t,e,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=e==="display"&&n==="none"?ig:eg;return _d.test(n)&&(o.e=0),this._pt=o,o},$m={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lS=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=$m[i]||i,e[1]=$m[n]||n,e.join(" ")},cS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],jn[o]&&(l=1,o=o==="transformOrigin"?wi:Se),ws(i,o);l&&(ws(i,Se),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",go(i,1),a.uncache=1,ng(n)))}},xh={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var a=t._pt=new pi(t._pt,e,i,0,0,cS);return a.u=n,a.pr=-10,a.tween=s,t._props.push(i),1}}},mo=[1,0,0,1,0,0],lg={},cg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qm=function(t){var e=zi(t,Se);return cg(e)?mo:e.substr(7).match(gd).map(Pe)},Vd=function(t,e){var i=t._gsap||bs(t),n=t.style,s=Qm(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?mo:s):(s===mo&&!t.offsetParent&&t!==ra&&!i.svg&&(l=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ra.appendChild(t)),s=Qm(t),l?n.display=l:ws(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ra.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ud=function(t,e,i,n,s,a){var o=t._gsap,l=s||Vd(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],y=e.split(" "),S=parseFloat(y[0])||0,M=parseFloat(y[1])||0,T,w,C,x;i?l!==mo&&(w=f*m-_*g)&&(C=S*(m/w)+M*(-g/w)+(g*v-m*p)/w,x=S*(-_/w)+M*(f/w)-(f*v-_*p)/w,S=C,M=x):(T=ag(t),S=T.x+(~y[0].indexOf("%")?S/100*T.width:S),M=T.y+(~(y[1]||y[0]).indexOf("%")?M/100*T.height:M)),n||n!==!1&&o.smooth?(p=S-c,v=M-h,o.xOffset=u+(p*f+v*g)-p,o.yOffset=d+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!n,o.origin=e,o.originIsAbsolute=!!i,t.style[wi]="0px 0px",a&&(Es(a,o,"xOrigin",c,S),Es(a,o,"yOrigin",h,M),Es(a,o,"xOffset",u,o.xOffset),Es(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+M)},go=function(t,e){var i=t._gsap||new Ed(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=zi(t,wi)||"0",h,u,d,f,_,g,m,p,v,y,S,M,T,w,C,x,E,P,I,F,V,H,k,B,Y,rt,tt,lt,Rt,Dt,Gt,Wt;return h=u=d=g=m=p=v=y=S=0,f=_=1,i.svg=!!(t.getCTM&&og(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),n.scale=n.rotate=n.translate="none"),w=Vd(t,i.svg),i.svg&&(i.uncache?(Y=t.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Ud(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,w)),M=i.xOrigin||0,T=i.yOrigin||0,w!==mo&&(P=w[0],I=w[1],F=w[2],V=w[3],h=H=w[4],u=k=w[5],w.length===6?(f=Math.sqrt(P*P+I*I),_=Math.sqrt(V*V+F*F),g=P||I?sa(I,P)*sr:0,v=F||V?sa(F,V)*sr+g:0,v&&(_*=Math.abs(Math.cos(v*aa))),i.svg&&(h-=M-(M*P+T*F),u-=T-(M*I+T*V))):(Wt=w[6],Dt=w[7],tt=w[8],lt=w[9],Rt=w[10],Gt=w[11],h=w[12],u=w[13],d=w[14],C=sa(Wt,Rt),m=C*sr,C&&(x=Math.cos(-C),E=Math.sin(-C),B=H*x+tt*E,Y=k*x+lt*E,rt=Wt*x+Rt*E,tt=H*-E+tt*x,lt=k*-E+lt*x,Rt=Wt*-E+Rt*x,Gt=Dt*-E+Gt*x,H=B,k=Y,Wt=rt),C=sa(-F,Rt),p=C*sr,C&&(x=Math.cos(-C),E=Math.sin(-C),B=P*x-tt*E,Y=I*x-lt*E,rt=F*x-Rt*E,Gt=V*E+Gt*x,P=B,I=Y,F=rt),C=sa(I,P),g=C*sr,C&&(x=Math.cos(C),E=Math.sin(C),B=P*x+I*E,Y=H*x+k*E,I=I*x-P*E,k=k*x-H*E,P=B,H=Y),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Pe(Math.sqrt(P*P+I*I+F*F)),_=Pe(Math.sqrt(k*k+Wt*Wt)),C=sa(H,k),v=Math.abs(C)>2e-4?C*sr:0,S=Gt?1/(Gt<0?-Gt:Gt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!cg(zi(t,Se)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Pe(f),i.scaleY=Pe(_),i.rotation=Pe(g)+o,i.rotationX=Pe(m)+o,i.rotationY=Pe(p)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[wi]=vh(c)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?uS:rg?hg:hS,i.uncache=0,i},vh=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ld=function(t,e,i){var n=Je(e);return Pe(parseFloat(e)+parseFloat(As(t,"x",i+"px",n)))+n},hS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,hg(t,e)},ir="0deg",po="0px",nr=") ",hg=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,y=i.zOrigin,S="",M=p==="auto"&&t&&t!==1||p===!0;if(y&&(u!==ir||h!==ir)){var T=parseFloat(h)*aa,w=Math.sin(T),C=Math.cos(T),x;T=parseFloat(u)*aa,x=Math.cos(T),a=Ld(v,a,w*x*-y),o=Ld(v,o,-Math.sin(T)*-y),l=Ld(v,l,C*x*-y+y)}m!==po&&(S+="perspective("+m+nr),(n||s)&&(S+="translate("+n+"%, "+s+"%) "),(M||a!==po||o!==po||l!==po)&&(S+=l!==po||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+nr),c!==ir&&(S+="rotate("+c+nr),h!==ir&&(S+="rotateY("+h+nr),u!==ir&&(S+="rotateX("+u+nr),(d!==ir||f!==ir)&&(S+="skew("+d+", "+f+nr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+nr),v.style[Se]=S||"translate(0, 0)"},uS=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,y=parseFloat(a),S=parseFloat(o),M,T,w,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=aa,c*=aa,M=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=aa,x=Math.tan(c-h),x=Math.sqrt(1+x*x),w*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),M*=x,T*=x)),M=Pe(M),T=Pe(T),w=Pe(w),C=Pe(C)):(M=u,C=d,T=w=0),(y&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(y=As(f,"x",a,"px"),S=As(f,"y",o,"px")),(_||g||m||p)&&(y=Pe(y+_-(_*M+g*w)+m),S=Pe(S+g-(_*T+g*C)+p)),(n||s)&&(x=f.getBBox(),y=Pe(y+n/100*x.width),S=Pe(S+s/100*x.height)),x="matrix("+M+","+T+","+w+","+C+","+y+","+S+")",f.setAttribute("transform",x),v&&(f.style[Se]=x)},dS=function(t,e,i,n,s){var a=360,o=Be(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?sr:1),c=l-n,h=n+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*qm)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*qm)%a-~~(c/a)*a)),t._pt=d=new pi(t._pt,e,i,n,c,ZM),d.e=h,d.u="deg",t._props.push(i),d},tg=function(t,e){for(var i in e)t[i]=e[i];return t},fS=function(t,e,i){var n=tg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Se]=e,o=go(i,1),ws(i,Se),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Se],a[Se]=e,o=go(i,1),a[Se]=c);for(l in jn)c=n[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Je(c),_=Je(h),u=f!==_?As(i,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new pi(t._pt,o,l,u,d-u,Fd),t._pt.u=_||0,t._props.push(l));tg(o,n)};fi("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",a=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(o){return t<2?r+o:"border"+o+r});xh[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return Zn(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Hd={name:"css",register:Nd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var a=this._props,o=t.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,v,y,S,M,T,w,C,x;Bd||Nd(),this.styles=this.styles||sg(t),C=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Mi[g]&&Ad(g,e,i,n,t,s)))){if(f=typeof h,_=xh[g],f==="function"&&(h=h.call(i,n,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=na(h)),_)_(this,t,g,h,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Yn.lastIndex=0,Yn.test(c)||(m=Je(c),p=Je(h),p?m!==p&&(c=As(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,t,s):l[g],Be(c)&&~c.indexOf("random(")&&(c=na(c)),Je(c+"")||c==="auto"||(c+=Ei.units[g]||Je(Zn(t,g))||""),(c+"").charAt(1)==="="&&(c=Zn(t,g))):c=Zn(t,g),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in wn&&(g==="autoAlpha"&&(d===1&&Zn(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),Es(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=wn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in jn,y){if(this.styles.save(g),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=zi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=h,h=zi(t,"perspective"),E?t.style.perspective=E:ws(t,"perspective")}u=parseFloat(h)}if(S||(M=t._gsap,M.renderTransform&&!e.parseTransform||go(t,e.parseTransform),T=e.smoothOrigin!==!1&&M.smooth,S=this._pt=new pi(this._pt,o,Se,0,1,M.renderTransform,M,0,-1),S.dep=1),g==="scale")this._pt=new pi(this._pt,M,"scaleY",M.scaleY,(v?tr(M.scaleY,v+u):u)-M.scaleY||0,Fd),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(wi,0,o[wi]),h=lS(h),M.svg?Ud(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&Es(this,M,"zOrigin",M.zOrigin,p),Es(this,o,g,vh(c),vh(h)));continue}else if(g==="svgOrigin"){Ud(t,h,1,T,0,this);continue}else if(g in lg){dS(this,M,g,d,v?tr(d,v+h):h);continue}else if(g==="smoothOrigin"){Es(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){fS(this,h,t);continue}}else g in o||(g=oa(g)||g);if(y||(u||u===0)&&(d||d===0)&&!qM.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Je(h)||(g in Ei.units?Ei.units[g]:m),m!==p&&(d=As(t,g,c,p)),this._pt=new pi(this._pt,y?M:o,g,d,(v?tr(d,v+u):u)-d,!y&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?JM:Fd),this._pt.u=p||0,y&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=KM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=jM);else if(g in o)oS.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,n,s);else if(g!=="parseTransform"){fh(g,h);continue}y||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}w&&Dd(this)},render:function(t,e){if(e.tween._time||!zd())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Zn,aliases:wn,getSetter:function(t,e,i){var n=wn[e];return n&&n.indexOf(",")<0&&(e=n),e in jn&&e!==wi&&(t._gsap.x||Zn(t,"x"))?i&&Ym===i?e==="scale"?eS:tS:(Ym=i||{})&&(e==="scale"?iS:nS):t.style&&!dh(t.style[e])?$M:~e.indexOf("-")?QM:_h(t,e)},core:{_removeProperty:ws,_getMatrix:Vd}};ai.utils.checkPrefix=oa;ai.core.getStyleSaver=sg;(function(r,t,e,i){var n=fi(r+","+t+","+e,function(s){jn[s]=1});fi(t,function(s){Ei.units[s]="deg",lg[s]=1}),wn[n[13]]=r+","+t,fi(i,function(s){var a=s.split(":");wn[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ei.units[r]="px"});ai.registerPlugin(Hd);var Ut=ai.registerPlugin(Hd)||ai,Ww=Ut.core.Tween;var bh="battleMovementState",ki="battleMovementLocked",yh=.75;function Kn(r){return r?r.userData[bh]??null:null}function _o(r,t){let e=Kn(r);return e?{x:e.basePosition.x+e.offset.x,y:e.basePosition.y+e.offset.y,z:e.basePosition.z+e.offset.z}:t}var ar=class r{document=Jt(af);sceneService=Jt(Gn);pressedKeys=new Set;upAxis=new D(0,1,0);forwardVector=new D;rightVector=new D;moveVector=new D;meshBounds=new Di;arenaBounds=Qc;movementSpeed=3.4;pursuitSpeed=2.2;keyboardMoveCodes=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);keyDownHandler=this.handleKeyDown.bind(this);keyUpHandler=this.handleKeyUp.bind(this);blurHandler=this.handleBlur.bind(this);canvas=null;controlledMesh=null;controlledMeshBoundaryPadding=yh;idleWanderState=null;pursuitState=null;removeFrameListener=null;joystickInput=null;characterColliders=new Map;collisionSeparation=new D;init(t){this.canvas!==t&&(this.disposeInputListeners(),this.canvas=t,window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("keyup",this.keyUpHandler),window.addEventListener("blur",this.blurHandler),this.removeFrameListener||(this.removeFrameListener=this.sceneService.addFrameListener(e=>{this.updateControlledMesh(e),this.updateIdleWanderMesh(e),this.updatePursuitMesh(e)})))}dispose(){this.disposeInputListeners(),this.pressedKeys.clear(),this.joystickInput=null,this.controlledMesh=null,this.controlledMeshBoundaryPadding=yh,this.clearIdleWanderCharacter(),this.clearPursuitCharacter(),this.characterColliders.clear(),this.removeFrameListener&&(this.removeFrameListener(),this.removeFrameListener=null)}registerCharacterMesh(t){this.characterColliders.set(t,this.measureBoundaryPadding(t)*.4)}unregisterCharacterMesh(t){this.characterColliders.delete(t)}setJoystickDirection(t,e){this.joystickInput={right:t,forward:e}}clearJoystickDirection(){this.joystickInput=null}setControlledCharacter(t,e,i){if(this.controlledMesh=t,!t||!e){this.controlledMeshBoundaryPadding=yh;return}this.controlledMeshBoundaryPadding=this.measureBoundaryPadding(t),t.userData[bh]={basePosition:{x:e.x,y:e.y+Wn,z:e.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i},t.userData[ki]=!1,this.sceneService.setCameraFocus({x:e.x,y:e.y+Wn,z:e.z})}setIdleWanderCharacter(t,e,i){this.clearIdleWanderCharacter(),!(!t||!e)&&(t.userData[bh]={basePosition:{x:e.x,y:e.y+Wn,z:e.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i},t.userData[ki]=!1,this.idleWanderState={mesh:t,boundaryPadding:this.measureBoundaryPadding(t),nextRetargetInSeconds:0,targetOffset:null})}clearIdleWanderCharacter(){if(!this.idleWanderState)return;let t=Kn(this.idleWanderState.mesh);t?.isWalking&&this.stopWalking(this.idleWanderState.mesh,t,!1),this.idleWanderState=null}setPursuitCharacter(t,e,i,n){this.clearPursuitCharacter(),Kn(t)||(t.userData[bh]={basePosition:{x:e.x,y:e.y+Wn,z:e.z},offset:{x:0,y:0,z:0},walkCycle:0,isWalking:!1,side:i}),t.userData[ki]=!1,this.pursuitState={mesh:t,boundaryPadding:this.measureBoundaryPadding(t),targetMesh:n}}clearPursuitCharacter(){if(!this.pursuitState)return;let t=Kn(this.pursuitState.mesh);t?.isWalking&&this.stopWalking(this.pursuitState.mesh,t,!1),this.pursuitState=null}isPursuing(){return this.pursuitState!==null}disposeInputListeners(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("keyup",this.keyUpHandler),window.removeEventListener("blur",this.blurHandler),this.canvas=null}handleKeyDown(t){!this.controlledMesh||this.isEditableTarget(t.target)||this.keyboardMoveCodes.has(t.code)&&this.pressedKeys.add(t.code)}handleKeyUp(t){this.pressedKeys.delete(t.code)}handleBlur(){this.pressedKeys.clear()}updateControlledMesh(t){if(!this.controlledMesh)return;let e=Kn(this.controlledMesh);if(!e)return;if(this.controlledMesh.userData[ki]){e.isWalking&&this.stopWalking(this.controlledMesh,e);return}let i=this.getMoveDirection();if(!i){e.isWalking&&this.stopWalking(this.controlledMesh,e);return}this.sceneService.pauseAutoRotate(250),e.isWalking=!0,e.walkCycle+=t*9;let n=_o(this.controlledMesh,e.basePosition),s=this.movementSpeed*t,a=this.clampToArenaBounds({x:n.x+i.x*s,y:e.basePosition.y,z:n.z+i.z*s}),o=this.resolveCharacterCollision(this.controlledMesh,a);e.offset.x=o.x-e.basePosition.x,e.offset.z=o.z-e.basePosition.z,this.controlledMesh.position.x=o.x,this.controlledMesh.position.y=e.basePosition.y+Math.sin(e.walkCycle*2)*.05,this.controlledMesh.position.z=o.z,this.sceneService.setCameraFocus(this.controlledMesh.position);let l={x:o.x+i.x,z:o.z+i.z};this.controlledMesh.rotation.y=this.sceneService.getFacingRotationY(o,l),this.controlledMesh.rotation.x=Math.sin(e.walkCycle*2)*.035,this.controlledMesh.rotation.z=i.x*.05,this.controlledMesh.scale.x=e.side==="left"?1:-1,this.applyWalkPose(this.controlledMesh,e.walkCycle)}updateIdleWanderMesh(t){if(!this.idleWanderState)return;let{mesh:e}=this.idleWanderState,i=Kn(e);if(!i)return;if(e.userData[ki]){i.isWalking&&this.stopWalking(e,i,!1);return}this.idleWanderState.nextRetargetInSeconds-=t;let n=_o(e,i.basePosition);this.shouldRetargetIdleWander(n)&&this.retargetIdleWander(n,i.basePosition.y);let s=this.idleWanderState.targetOffset;if(!s){i.isWalking&&this.stopWalking(e,i,!1);return}let a={x:i.basePosition.x+s.x,y:i.basePosition.y,z:i.basePosition.z+s.z},o=this.moveVector.set(a.x-n.x,0,a.z-n.z),l=o.length();if(l<.12){this.idleWanderState.targetOffset=null,this.idleWanderState.nextRetargetInSeconds=ji.randFloat(.45,1.35),i.isWalking&&this.stopWalking(e,i,!1);return}o.divideScalar(l),i.isWalking=!0,i.walkCycle+=t*4.4;let c=Math.min(.9*t,l),h=this.clampToArenaBounds({x:n.x+o.x*c,y:i.basePosition.y,z:n.z+o.z*c},this.idleWanderState.boundaryPadding),u=this.resolveCharacterCollision(e,h);i.offset.x=u.x-i.basePosition.x,i.offset.z=u.z-i.basePosition.z,e.position.x=u.x,e.position.y=i.basePosition.y+Math.sin(i.walkCycle*2)*.035,e.position.z=u.z,e.rotation.y=this.sceneService.getFacingRotationY(u,a),e.rotation.x=Math.sin(i.walkCycle*2)*.018,e.rotation.z=o.x*.025,e.scale.x=i.side==="left"?1:-1,this.applyWalkPose(e,i.walkCycle)}updatePursuitMesh(t){if(!this.pursuitState)return;let{mesh:e,targetMesh:i}=this.pursuitState,n=Kn(e);if(!n)return;if(e.userData[ki]){n.isWalking&&this.stopWalking(e,n,!1);return}let s=_o(e,n.basePosition),a={x:i.position.x,y:n.basePosition.y,z:i.position.z},o=this.moveVector.set(a.x-s.x,0,a.z-s.z),l=o.length();if(l<3){n.isWalking&&this.stopWalking(e,n,!1),e.rotation.y=this.sceneService.getFacingRotationY(s,a);return}o.divideScalar(l),n.isWalking=!0,n.walkCycle+=t*6;let c=Math.min(this.pursuitSpeed*t,l),h=this.clampToArenaBounds({x:s.x+o.x*c,y:n.basePosition.y,z:s.z+o.z*c},this.pursuitState.boundaryPadding),u=this.resolveCharacterCollision(e,h);n.offset.x=u.x-n.basePosition.x,n.offset.z=u.z-n.basePosition.z,e.position.x=u.x,e.position.y=n.basePosition.y+Math.sin(n.walkCycle*2)*.04,e.position.z=u.z,e.rotation.y=this.sceneService.getFacingRotationY(u,a),e.rotation.x=Math.sin(n.walkCycle*2)*.025,e.rotation.z=o.x*.03,e.scale.x=n.side==="left"?1:-1,this.applyWalkPose(e,n.walkCycle)}getMoveDirection(){return this.getKeyboardDirection()??this.getJoystickDirection()}getKeyboardDirection(){return this.pressedKeys.size===0||(this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),(this.pressedKeys.has("KeyW")||this.pressedKeys.has("ArrowUp"))&&this.moveVector.add(this.forwardVector),(this.pressedKeys.has("KeyS")||this.pressedKeys.has("ArrowDown"))&&this.moveVector.sub(this.forwardVector),(this.pressedKeys.has("KeyD")||this.pressedKeys.has("ArrowRight"))&&this.moveVector.add(this.rightVector),(this.pressedKeys.has("KeyA")||this.pressedKeys.has("ArrowLeft"))&&this.moveVector.sub(this.rightVector),this.moveVector.lengthSq()<1e-4)?null:this.moveVector.normalize()}getJoystickDirection(){if(!this.joystickInput)return null;this.sceneService.camera.getWorldDirection(this.forwardVector),this.forwardVector.y=0,this.forwardVector.lengthSq()<1e-4?this.forwardVector.set(0,0,-1):this.forwardVector.normalize(),this.rightVector.crossVectors(this.forwardVector,this.upAxis).normalize(),this.moveVector.set(0,0,0),this.moveVector.addScaledVector(this.forwardVector,this.joystickInput.forward),this.moveVector.addScaledVector(this.rightVector,this.joystickInput.right);let t=this.moveVector.length();return t<1e-4?null:(t>1&&this.moveVector.divideScalar(t),this.moveVector)}stopWalking(t,e,i=!0){e.isWalking=!1,t.position.y=e.basePosition.y,i&&this.sceneService.setCameraFocus(t.position),t.rotation.x=0,t.rotation.z=0,this.resetLegPose(t)}applyWalkPose(t,e){let i=t.userData.legs;if(Array.isArray(i))for(let n of i){let s=e+n.index*.8+(n.side<0?Math.PI:0),a=Math.sin(s)*.18,o=Math.max(0,Math.sin(s))*.12;n.group.rotation.x=n.baseRotation.x-o,n.group.rotation.y=n.baseRotation.y+a,n.group.rotation.z=n.baseRotation.z+a*.25*n.side}}resetLegPose(t){let e=t.userData.legs;if(Array.isArray(e))for(let i of e)i.group.rotation.set(i.baseRotation.x,i.baseRotation.y,i.baseRotation.z)}clampToArenaBounds(t,e=this.controlledMeshBoundaryPadding){return{x:ji.clamp(t.x,this.arenaBounds.minX+e,this.arenaBounds.maxX-e),y:t.y,z:ji.clamp(t.z,this.arenaBounds.minZ+e,this.arenaBounds.maxZ-e)}}shouldRetargetIdleWander(t){if(!this.idleWanderState||this.idleWanderState.nextRetargetInSeconds>0)return!1;if(!this.idleWanderState.targetOffset)return!0;let e=Kn(this.idleWanderState.mesh);if(!e)return!1;let i={x:e.basePosition.x+this.idleWanderState.targetOffset.x,y:e.basePosition.y,z:e.basePosition.z+this.idleWanderState.targetOffset.z};return t.x===i.x&&t.z===i.z}retargetIdleWander(t,e){if(!this.idleWanderState)return;let i=2.8,n=this.clampToArenaBounds({x:t.x+ji.randFloatSpread(i*2),y:e,z:t.z+ji.randFloatSpread(i*2)},this.idleWanderState.boundaryPadding),s=Kn(this.idleWanderState.mesh);s&&(this.idleWanderState.targetOffset=new D(n.x-s.basePosition.x,0,n.z-s.basePosition.z),this.idleWanderState.nextRetargetInSeconds=ji.randFloat(.6,1.8))}measureBoundaryPadding(t){t.updateMatrixWorld(!0),this.meshBounds.setFromObject(t);let e=Math.max(Math.abs(this.meshBounds.min.x-t.position.x),Math.abs(this.meshBounds.max.x-t.position.x)),i=Math.max(Math.abs(this.meshBounds.min.z-t.position.z),Math.abs(this.meshBounds.max.z-t.position.z));return Math.max(Math.hypot(e,i),yh)}resolveCharacterCollision(t,e){let i=this.characterColliders.get(t);if(i===void 0)return e;let n=e.x,s=e.z;for(let[a,o]of this.characterColliders){if(a===t||!a.visible)continue;let l=n-a.position.x,c=s-a.position.z,h=l*l+c*c,u=i+o;if(h>=u*u)continue;let d=Math.sqrt(h);if(d<.001)n+=u;else{let f=u-d;this.collisionSeparation.set(l/d,0,c/d),n+=this.collisionSeparation.x*f,s+=this.collisionSeparation.z*f}}return{x:n,y:e.y,z:s}}isEditableTarget(t){return t instanceof this.document.defaultView.HTMLElement?t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName):!1}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac})};var xo=class r{sceneService=Jt(Gn);activePoisonObjects=[];activePoisonTweens=[];persistentShields=new Map;comboDelayedCall=null;actionToken=0;tempMidPoint=new D;dispose(){this.killComboDelayedCall(),this.cleanupPoisonEffects(),this.persistentShields.forEach((t,e)=>this.disposePersistentShield(e)),this.persistentShields.clear()}createTeleportationEntrance(t,e,i){t.position.set(e.x,e.y+Wn,e.z),t.scale.set(.01,.01,.01),t.visible=!1;let n=Ut.timeline();n.call(()=>{t.visible=!0}),n.to(t.scale,{x:i==="right"?-1:1,y:1,z:1,duration:.8,ease:"elastic.out(1, 0.5)"})}animateAction(t,e){let{character1:i,character2:n,character1Mesh:s,character2Mesh:a}=e;this.cleanupPoisonEffects(),this.actionToken+=1;let o=this.actionToken;this.killComboDelayedCall();let l=i?t.attackerId===i.id:!1,c=n?t.attackerId===n.id:!1,h=l?s:c?a:null,u=i?t.defenderId===i.id:!1,d=n?t.defenderId===n.id:!1,f=u?s:d?a:null;if(t.type==="poison"&&!t.attackerId){f&&this.animatePoisonTick(f);return}if(!h||!f)return;h.userData[ki]=!0,f.userData[ki]=!0,Ut.killTweensOf(h.position),Ut.killTweensOf(h.rotation),Ut.killTweensOf(h.scale),Ut.killTweensOf(f.position),Ut.killTweensOf(f.rotation),Ut.killTweensOf(f.scale);let _=g=>{let m=g==="critical",p=g==="miss",v=g==="poison",y=g==="skip",S=lr(li({},t),{type:g}),M=this.getCharacterBasePosition(l,h,i,n),T=this.getCharacterBasePosition(!l,f,i,n),w=this.sceneService.getFacingRotationY(M,T),C=f.rotation.y,x=li({},M),E=l?-1:1,P=this.getSpiderAttackMotion(M,T,E,m),I=Ut.timeline();if(h.position.set(M.x,M.y,M.z),h.rotation.set(0,w,0),h.scale.set(l?1:-1,1,1),f.position.set(T.x,T.y,T.z),f.rotation.set(0,C,0),f.scale.set(l?-1:1,1,1),p&&I.call(()=>{this.breakPersistentEnergyShield(f)}),y)return I;let F=this.startLegCrawling(h);return m&&(this.sceneService.timeSlowActive=!0,I.call(()=>{this.createLightningStrike(h.position,f.position)})),I.to(h.scale,{x:l?1.18:-1.18,y:.84,z:1.12,duration:.18,ease:"power2.inOut"}),I.to(h.position,{x:P.windupPosition.x,y:P.windupPosition.y,z:P.windupPosition.z,duration:.18,ease:"power2.inOut"},"<"),I.to(h.rotation,{x:-.18,y:w+P.windupYawOffset,z:.08*E,duration:.18,ease:"power2.inOut"},"<"),I.to(h.position,{x:P.impactPosition.x,y:P.impactPosition.y,z:P.impactPosition.z,duration:m?.16:.14,ease:"power4.in",onComplete:()=>{this.stopLegCrawling(F,h),v||this.createMassiveImpact(f.position,S.type),v&&this.animatePoisonAttack(f);let V=Ut.timeline();if(p)V.to(f.position,{y:f.position.y+.2,duration:.08,ease:"power2.out"}),V.to(f.rotation,{x:-.1,duration:.08,ease:"power2.out"},"<"),V.to(f.position,{y:f.position.y,duration:.15,ease:"bounce.out"}),V.to(f.rotation,{x:0,duration:.15,ease:"power2.out"},"<");else{let H=l?-.6:.6;V.to(f.scale,{x:H,y:.6,z:.75,duration:.06,ease:"power3.in"},"<"),V.to(f.scale,{x:l?-1.1:1.1,y:.85,z:1.05,duration:.12,ease:"power1.out"},"<"),V.to(f.scale,{x:l?-.9:.9,y:1.1,z:.9,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}}),I.to(h.rotation,{x:.28,y:w+P.impactYawOffset,z:.16*E,duration:m?.16:.14,ease:"power4.in"},"<"),I.to(h.scale,{x:l?1.28:-1.28,y:.76,z:1.24,duration:.12,ease:"power3.out"},"<"),I.to(h.position,{x:P.recoilPosition.x,y:P.recoilPosition.y,z:P.recoilPosition.z,duration:.12,ease:"sine.out"}),I.to(h.rotation,{x:.08,y:w-P.impactYawOffset*.35,z:-.1*E,duration:.12,ease:"sine.out"},"<"),I.to(h.position,{x:x.x,y:x.y+.04,z:x.z,duration:.28,ease:"power2.inOut"}),I.to(h.rotation,{x:.02,y:w,z:0,duration:.28,ease:"power2.inOut"},"<"),I.to(h.scale,{x:l?1:-1,y:1,z:1,duration:.24,ease:"power2.out"},"<"),I.to(h.position,{y:x.y,duration:.12,ease:"sine.out"}),I.to(h.rotation,{x:0,duration:.12,ease:"sine.out"},"<"),p||(I.to(f.position,{x:T.x,y:T.y,z:T.z,duration:.5,ease:"power2.inOut"},"-=0.5"),I.to(f.rotation,{z:0,y:C,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),I.to(f.scale,{x:l?-1:1,y:1,z:1,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1")),I.call(()=>{h.position.set(M.x,M.y,M.z),h.rotation.set(0,w,0),h.scale.set(l?1:-1,1,1),f.position.set(T.x,T.y,T.z),f.rotation.set(0,C,0),f.scale.set(l?-1:1,1,1),h.userData[ki]=!1,f.userData[ki]=!1,this.sceneService.timeSlowActive=!1}),I};if(t.type==="shield"){this.createPersistentEnergyShield(h);return}if(t.type==="combo"){let g=_("attack");this.comboDelayedCall=Ut.delayedCall(g.duration()+.1,()=>{this.comboDelayedCall=null,this.actionToken===o&&_("attack")});return}_(t.type)}getSpiderAttackMotion(t,e,i,n){let s=new D(e.x-t.x,0,e.z-t.z);s.lengthSq()<1e-4?s.set(i<0?1:-1,0,0):s.normalize();let a=new D(-s.z,0,s.x).multiplyScalar(i),o=n?.42:.3,l=n?1.15:1.28,c=n?1.7:1.85;return{windupPosition:{x:t.x-s.x*.28+a.x*.18,y:t.y-.08,z:t.z-s.z*.28+a.z*.18},impactPosition:{x:e.x-s.x*l+a.x*.12,y:e.y+o,z:e.z-s.z*l+a.z*.12},recoilPosition:{x:e.x-s.x*c-a.x*.08,y:t.y+.12,z:e.z-s.z*c-a.z*.08},windupYawOffset:.08*i,impactYawOffset:-.06*i}}cleanupPoisonEffects(){let t=this.sceneService.scene;this.activePoisonObjects.forEach(e=>{e.parent&&t.remove(e)}),this.activePoisonObjects=[],this.activePoisonTweens.forEach(e=>e.kill()),this.activePoisonTweens=[]}killComboDelayedCall(){this.comboDelayedCall?.kill(),this.comboDelayedCall=null}getCharacterBasePosition(t,e,i,n){let s=t?i:n;return s?_o(e,{x:s.position.x,y:s.position.y+Wn,z:s.position.z}):{x:e.position.x,y:e.position.y,z:e.position.z}}animatePoisonTick(t){let e=this.sceneService.scene,i=this.sceneService.circleTexture,n=new Ce;n.position.copy(t.position),n.position.y+=1.1,e.add(n);let s=new hn(8191851,3,6);s.position.copy(n.position),s.position.y+=.4,e.add(s);let a=[],o=new ks({map:i,color:8191851,transparent:!0,opacity:.8,blending:ni,depthWrite:!1});for(let h=0;h<16;h++){let u=new Nr(o.clone()),d=Math.random()*Math.PI*2,f=.4+Math.random()*.8;u.position.set(Math.cos(d)*f,.2+Math.random()*.8,Math.sin(d)*f);let _=.2+Math.random()*.35;u.scale.set(_,_,_),n.add(u),a.push(u)}let l=[];a.forEach(h=>{let u=Math.random()*Math.PI*2,d=.6+Math.random()*.8,f=Math.random()*.15;l.push(Ut.to(h.position,{x:Math.cos(u)*d,y:h.position.y+1+Math.random()*.6,z:Math.sin(u)*d,duration:.9,delay:f,ease:"power2.out"})),l.push(Ut.to(h.material,{opacity:0,duration:.9,delay:f,ease:"power2.out"}))}),l.push(Ut.to(s,{intensity:0,duration:.7,ease:"power2.out",onComplete:()=>{e.remove(s)}})),this.activePoisonObjects.push(n,s),this.activePoisonTweens.push(...l);let c=Ut.delayedCall(.95,()=>{e.remove(n),a.forEach(h=>{h.material instanceof Ze&&h.material.dispose()})});this.activePoisonTweens.push(c)}animatePoisonAttack(t){let e=this.sceneService.scene,i=this.sceneService.circleTexture,n=new ks({map:i,color:8191851,transparent:!0,opacity:1,blending:ni,depthWrite:!1}),s=12;for(let f=0;f<s;f++){let _=f/s,g=_*Math.PI*6,m=_*3.2,p=.75+Math.sin(_*Math.PI)*.45,v=new Nr(n.clone());v.position.set(t.position.x+Math.cos(g)*p,t.position.y+m,t.position.z+Math.sin(g)*p);let y=.1+Math.random()*.14;v.scale.set(y,y,y),e.add(v),Ut.to(v.position,{x:t.position.x+Math.cos(g+Math.PI)*(p+1),y:v.position.y+1.8+Math.random()*.8,z:t.position.z+Math.sin(g+Math.PI)*(p+1),duration:1+Math.random()*.5,delay:_*.45,ease:"power2.out"}),Ut.to(v.material,{opacity:0,duration:.7,delay:.35+_*.45,ease:"power2.in",onComplete:()=>{e.remove(v),v.material.dispose()}})}let a=24,o=new ee,l=new Float32Array(a*3),c=[];for(let f=0;f<a;f++){l[f*3]=t.position.x,l[f*3+1]=t.position.y+1.5,l[f*3+2]=t.position.z;let _=f/a*Math.PI*2,g=(Math.random()-.25)*Math.PI,m=.3+Math.random()*.5;c.push(new D(Math.cos(_)*Math.cos(g)*m,Math.abs(Math.sin(g))*m+.04,Math.sin(_)*Math.cos(g)*m))}o.setAttribute("position",new xe(l,3));let h=new Ge({color:3800852,size:.16,transparent:!0,opacity:1,blending:ni,map:i,alphaTest:.01,depthWrite:!1}),u=new ii(o,h);e.add(u),Ut.to(h,{opacity:0,duration:.85,onUpdate:()=>{let f=o.attributes.position;for(let _=0;_<a;_++)f.array[_*3]+=c[_].x,f.array[_*3+1]+=c[_].y,f.array[_*3+2]+=c[_].z,c[_].y-=.018;f.needsUpdate=!0},onComplete:()=>{e.remove(u),o.dispose(),h.dispose()}});let d=new hn(3800852,0,8);d.position.copy(t.position),d.position.y+=1.5,e.add(d),Ut.to(d,{intensity:7,duration:.08,ease:"expo.out",onComplete:()=>{Ut.to(d,{intensity:0,duration:.65,ease:"power2.out",onComplete:()=>{e.remove(d)}})}})}createEnergyShield(t){let e=this.sceneService.scene,i=this.sceneService.circleTexture,n=new Ce;n.position.copy(t.position),n.position.y+=1,e.add(n);let s=new ls(2.5,1),a=new hs({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:We,emissive:65535,emissiveIntensity:.8}),o=new Nt(s,a);n.add(o);let l=new ls(2.2,1),c=new cn({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:We}),h=new Nt(l,c);n.add(h);let u=40,d=new ee,f=new Float32Array(u*3),_=new Float32Array(u),g=new Float32Array(u),m=new Float32Array(u);for(let M=0;M<u;M++){let T=Math.random()*Math.PI*2,w=2+Math.random()*1.5,C=(Math.random()-.5)*3;f[M*3]=Math.cos(T)*w,f[M*3+1]=C,f[M*3+2]=Math.sin(T)*w,_[M]=T,g[M]=Math.random()*.02+.01,m[M]=w}let p=new xe(f,3);p.setUsage(Xs),d.setAttribute("position",p);let v=new Ge({map:i,color:65535,size:.18,transparent:!0,opacity:.8,blending:ni,depthWrite:!1}),y=new ii(d,v);n.add(y),Ut.to(o.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),Ut.to(h.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8});let S=this.sceneService.registerParticleAnimation({attribute:p,angles:_,angularVelocities:g,radii:m,particleCount:u});Ut.to([a,v],{opacity:0,duration:.5,delay:.5,onComplete:()=>{this.sceneService.removeParticleAnimation(S),e.remove(n),s.dispose(),a.dispose(),l.dispose(),c.dispose(),d.dispose(),v.dispose()}})}createPersistentEnergyShield(t){this.disposePersistentShield(t);let e=this.sceneService.scene,i=this.sceneService.circleTexture,n=new Ce;n.position.copy(t.position),n.position.y+=1,e.add(n);let s=new ls(2.5,1),a=new hs({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:We,emissive:65535,emissiveIntensity:.8}),o=new Nt(s,a);n.add(o);let l=new ls(2.2,1),c=new cn({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:We}),h=new Nt(l,c);n.add(h);let u=40,d=new ee,f=new Float32Array(u*3),_=new Float32Array(u),g=new Float32Array(u),m=new Float32Array(u);for(let T=0;T<u;T++){let w=Math.random()*Math.PI*2,C=2+Math.random()*1.5,x=(Math.random()-.5)*3;f[T*3]=Math.cos(w)*C,f[T*3+1]=x,f[T*3+2]=Math.sin(w)*C,_[T]=w,g[T]=Math.random()*.02+.01,m[T]=C}let p=new xe(f,3);p.setUsage(Xs),d.setAttribute("position",p);let v=new Ge({map:i,color:65535,size:.18,transparent:!0,opacity:.8,blending:ni,depthWrite:!1}),y=new ii(d,v);n.add(y),Ut.to(o.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),Ut.to(h.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8});let S=this.sceneService.registerParticleAnimation({attribute:p,angles:_,angularVelocities:g,radii:m,particleCount:u}),M=[];M.push(Ut.to(o.rotation,{x:"+=6.28",y:"+=6.28",duration:4,repeat:-1,ease:"none"})),M.push(Ut.to(h.rotation,{x:"-=6.28",z:"+=6.28",duration:3,repeat:-1,ease:"none"})),M.push(Ut.to(a,{opacity:.75,duration:1.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),this.persistentShields.set(t,{shieldGroup:n,particleAnimationId:S,materials:[a,v],geometries:[s,d],idleTweens:M})}breakPersistentEnergyShield(t){let e=this.persistentShields.get(t);if(!e){this.createEnergyShield(t);return}let i=this.sceneService.scene,{shieldGroup:n,materials:s,geometries:a,idleTweens:o}=e;o.forEach(l=>l.kill()),Ut.to(s,{opacity:0,duration:.4,delay:.15,onComplete:()=>{this.sceneService.removeParticleAnimation(e.particleAnimationId),i.remove(n),a.forEach(l=>l.dispose()),s.forEach(l=>l.dispose()),this.persistentShields.delete(t)}})}disposePersistentShield(t){let e=this.persistentShields.get(t);if(!e)return;let i=this.sceneService.scene,{shieldGroup:n,materials:s,geometries:a,idleTweens:o}=e;o.forEach(l=>l.kill()),this.sceneService.removeParticleAnimation(e.particleAnimationId),i.remove(n),a.forEach(l=>l.dispose()),s.forEach(l=>l.dispose()),this.persistentShields.delete(t)}createLightningStrike(t,e){let i=this.sceneService.scene,n=this.sceneService.circleTexture,s=this.getCriticalLightningProfile(this.sceneService.getQualityLevel()),a=t.clone(),o=e.clone();a.y+=6.5,o.y+=1.2;let l=(v,y,S)=>{let M=[];M.push(v.clone());for(let T=1;T<S;T++){let w=T/S,C=new D().lerpVectors(v,y,w);C.y+=.8-w*.8;let x=.8+Math.sin(w*Math.PI*2)*.6;C.x+=(Math.random()-.5)*x,C.z+=(Math.random()-.5)*x,M.push(C)}return M.push(y.clone()),M},c=(v,y,S,M)=>{let T=new ee().setFromPoints(v),w=new _n({color:y,transparent:!0,opacity:S,blending:ni}),C=new Br(T,w);i.add(C);let x=v.map(F=>F.clone()),E=T.attributes.position,P=()=>{for(let F=0;F<x.length;F++){let V=x[F],H=F===0||F===x.length-1?0:M;E.setXYZ(F,V.x+(Math.random()-.5)*H,V.y+(Math.random()-.5)*H,V.z+(Math.random()-.5)*H)}E.needsUpdate=!0};P();let I=Ut.to(w,{opacity:Math.max(.15,S*.25),duration:.06,repeat:6,yoyo:!0,onUpdate:P});return{line:C,geometry:T,material:w,flickerTween:I}};for(let v=0;v<s.boltCount;v++){let y=l(a,o,s.boltSegments+v*2),S=c(y,v===0?16777215:12124159,1,.55),M=c(y,8388607,.4,.2);for(let T=0;T<s.branchCount;T++){let w=Math.floor(Math.random()*(y.length-4))+2,C=[y[w].clone()],x=s.branchSegments+Math.floor(Math.random()*2);for(let P=1;P<=x;P++){let F=C[C.length-1].clone();F.x+=(Math.random()-.5)*1.15,F.y+=(Math.random()-.8)*.7,F.z+=(Math.random()-.5)*1.15,C.push(F)}let E=c(C,11206655,.6,.35);Ut.to(E.material,{opacity:0,duration:.2,delay:.08,onComplete:()=>{E.flickerTween.kill(),i.remove(E.line),E.geometry.dispose(),E.material.dispose()}})}Ut.to([S.material,M.material],{opacity:0,duration:.35,delay:.15+v*.05,onComplete:()=>{S.flickerTween.kill(),M.flickerTween.kill(),i.remove(S.line),i.remove(M.line),S.geometry.dispose(),M.geometry.dispose(),S.material.dispose(),M.material.dispose()}})}let h=new hn(16777215,s.primaryLightIntensity,13);h.position.copy(o),i.add(h);let u=s.secondaryLightIntensity>0?new hn(11206655,s.secondaryLightIntensity,10):null;u&&(u.position.copy(a),i.add(u));let d=s.particleCount,f=new ee,_=new Float32Array(d*3),g=[];for(let v=0;v<d;v++){let y=Math.random();_[v*3]=a.x+(o.x-a.x)*y+(Math.random()-.5)*2,_[v*3+1]=a.y+(o.y-a.y)*y+(Math.random()-.5)*2,_[v*3+2]=a.z+(o.z-a.z)*y+(Math.random()-.5)*2,g.push(new D((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3))}f.setAttribute("position",new xe(_,3));let m=new Ge({color:16777215,size:.16,transparent:!0,opacity:.85,blending:ni,map:n,alphaTest:.01,depthWrite:!1}),p=new ii(f,m);i.add(p),Ut.to(m,{opacity:0,duration:.8,onUpdate:()=>{let v=f.attributes.position;for(let y=0;y<d;y++)v.array[y*3]+=g[y].x,v.array[y*3+1]+=g[y].y,v.array[y*3+2]+=g[y].z;v.needsUpdate=!0},onComplete:()=>{i.remove(p),f.dispose(),m.dispose()}}),Ut.to(h,{intensity:0,duration:.3,delay:.16,onComplete:()=>{i.remove(h)}}),u&&Ut.to(u,{intensity:0,duration:.3,delay:.16,onComplete:()=>{i.remove(u)}})}createMassiveImpact(t,e){let i=this.sceneService.scene,n=this.sceneService.circleTexture,s=e==="critical",a=e==="miss"?43775:17663,o=s?1:2,l=.24,c=s?.34:.38;for(let m=0;m<o;m++){let p=new Ba(.5,.8,32),v=new cn({color:a,transparent:!0,opacity:.28,side:We,depthWrite:!1}),y=new Nt(p,v);y.position.copy(t),y.position.y=.1,y.rotation.x=-Math.PI/2,i.add(y),Ut.to(y.scale,{x:s?7.2:6.5,y:s?7.2:6.5,z:1,duration:l,delay:m*.04,ease:"power2.out"}),Ut.to(v,{opacity:0,duration:l,delay:m*.04,onComplete:()=>{i.remove(y),p.dispose(),v.dispose()}})}let h=s?18:20,u=new ee,d=new Float32Array(h*3),f=[];for(let m=0;m<h;m++){d[m*3]=t.x,d[m*3+1]=t.y+2,d[m*3+2]=t.z;let p=s?.92:.85,v=m/h*Math.PI*2,y=(Math.random()-.3)*Math.PI;f.push(new D(Math.cos(v)*Math.cos(y)*p,Math.sin(y)*p,Math.sin(v)*Math.cos(y)*p))}u.setAttribute("position",new xe(d,3));let _=new Ge({color:a,size:s?.14:.11,transparent:!0,opacity:.38,blending:ni,map:n,alphaTest:.01,depthWrite:!1}),g=new ii(u,_);i.add(g),Ut.to(_,{opacity:0,duration:c,onUpdate:()=>{let m=u.attributes.position;for(let p=0;p<h;p++)m.array[p*3]+=f[p].x,m.array[p*3+1]+=f[p].y,m.array[p*3+2]+=f[p].z,f[p].y-=.05;m.needsUpdate=!0},onComplete:()=>{i.remove(g),u.dispose(),_.dispose()}})}getCriticalLightningProfile(t){switch(t){case"low":return{boltCount:1,boltSegments:12,branchCount:0,branchSegments:0,particleCount:8,primaryLightIntensity:18,secondaryLightIntensity:0};case"medium":return{boltCount:1,boltSegments:14,branchCount:1,branchSegments:4,particleCount:10,primaryLightIntensity:24,secondaryLightIntensity:10};default:return{boltCount:1,boltSegments:16,branchCount:1,branchSegments:5,particleCount:12,primaryLightIntensity:30,secondaryLightIntensity:14}}}startLegCrawling(t){let e=t.userData.legs;if(!e?.length)return[];let i=[],n=.08,s=.18,a=.14;for(let o of e){let{group:l,baseRotation:c,side:h,index:u}=o,d=u%2===0!=(h===1),f=Ut.fromTo(l.rotation,{x:c.x+a,y:c.y+s},{x:c.x-a,y:c.y-s,duration:n,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:d?0:n});i.push(f)}return i}stopLegCrawling(t,e){t.forEach(n=>n.kill());let i=e.userData.legs;if(i)for(let n of i)Ut.to(n.group.rotation,{x:n.baseRotation.x,y:n.baseRotation.y,z:n.baseRotation.z,duration:.1,ease:"power2.out"})}static \u0275fac=function(e){return new(e||r)};static \u0275prov=we({token:r,factory:r.\u0275fac})};var pS=["base"],mS=["thumb"],gS=.15,Mh=class r{ngZone=Jt(Eo);movementService=Jt(ar);baseRef=wh.required("base");thumbRef=wh.required("thumb");activeTouchId=null;baseCenterX=0;baseCenterY=0;maxOffset=36;isPortraitRotated=!1;disposeListeners=null;disposeMediaQuery=null;constructor(){Ao(()=>{this.ngZone.runOutsideAngular(()=>{this.initPortraitDetection(),this.bindTouchListeners()})})}ngOnDestroy(){this.disposeListeners?.(),this.disposeMediaQuery?.(),this.movementService.clearJoystickDirection()}initPortraitDetection(){let t=window.matchMedia("(max-width: 768px) and (orientation: portrait)");this.isPortraitRotated=t.matches;let e=i=>{this.isPortraitRotated=i.matches};t.addEventListener("change",e),this.disposeMediaQuery=()=>t.removeEventListener("change",e)}bindTouchListeners(){let t=this.baseRef().nativeElement,e=s=>{if(s.preventDefault(),this.activeTouchId!==null)return;let a=s.changedTouches[0];this.activeTouchId=a.identifier;let o=t.getBoundingClientRect(),l=this.thumbRef().nativeElement.getBoundingClientRect();this.baseCenterX=o.left+o.width/2,this.baseCenterY=o.top+o.height/2,this.maxOffset=o.width/2-l.width/2,this.thumbRef().nativeElement.classList.add("active"),this.updateFromTouch(a.clientX,a.clientY)},i=s=>{s.preventDefault();let a=this.findActiveTouch(s.changedTouches);a&&this.updateFromTouch(a.clientX,a.clientY)},n=s=>{this.findActiveTouch(s.changedTouches)&&this.resetThumb()};t.addEventListener("touchstart",e,{passive:!1}),t.addEventListener("touchmove",i,{passive:!1}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),this.disposeListeners=()=>{t.removeEventListener("touchstart",e),t.removeEventListener("touchmove",i),t.removeEventListener("touchend",n),t.removeEventListener("touchcancel",n)}}findActiveTouch(t){for(let e of Array.from(t))if(e.identifier===this.activeTouchId)return e;return null}updateFromTouch(t,e){let i=t-this.baseCenterX,n=e-this.baseCenterY,s=i,a=n;this.isPortraitRotated&&(s=n,a=-i);let o=Math.hypot(s,a);o>this.maxOffset&&(s=s/o*this.maxOffset,a=a/o*this.maxOffset),this.thumbRef().nativeElement.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${a}px))`;let l=s/this.maxOffset,c=a/this.maxOffset;Math.hypot(l,c)<gS?this.movementService.clearJoystickDirection():this.movementService.setJoystickDirection(l,-c)}resetThumb(){this.activeTouchId=null,this.thumbRef().nativeElement.style.transform="translate(-50%, -50%)",this.thumbRef().nativeElement.classList.remove("active"),this.movementService.clearJoystickDirection()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-battle-joystick"]],viewQuery:function(e,i){e&1&&(Ah(i.baseRef,pS,5),Ah(i.thumbRef,mS,5)),e&2&&ef(2)},decls:4,vars:0,consts:[["base",""],["thumb",""],[1,"joystick-base"],[1,"joystick-thumb"]],template:function(e,i){e&1&&(oe(0,"div",2,0),xi(2,"div",3,1),le())},styles:["[_nghost-%COMP%]{display:none;position:absolute;bottom:24px;left:24px;z-index:10;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (pointer: coarse){[_nghost-%COMP%]{display:block}}.joystick-base[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;background:#070c1199;border:1.5px solid rgba(255,255,255,.15);box-shadow:0 4px 16px #0000004d;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);position:relative}.joystick-thumb[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:#ffffff2e;border:1.5px solid rgba(255,255,255,.3);box-shadow:0 2px 8px #0003;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);will-change:transform}.joystick-thumb.active[_ngcontent-%COMP%]{background:#ffffff4d;border-color:#ffffff73}"],changeDetection:0})};var _S=["battleCanvas"];function xS(r,t){r&1&&xi(0,"app-battle-joystick")}function vS(r,t){if(r&1&&(oe(0,"div",2)(1,"div",3),tn(2),le(),oe(3,"div",4)(4,"span"),tn(5),le(),oe(6,"span"),tn(7),$e(8,"titlecase"),le()()()),r&2){let e=Gi();$t(2),Ch("",e.performanceStats().fps," FPS"),$t(3),Ch("",e.performanceStats().frameTimeMs," ms"),$t(2),Is(Qe(8,3,e.performanceStats().qualityLevel))}}var yS={fps:60,frameTimeMs:16.67,qualityLevel:"high",pixelRatio:1,shadowsEnabled:!0},vo=class r{canvasRef;character1Mesh=null;character2Mesh=null;destroy$=new So;removePerformanceListener=null;battleService=Jt(hr);ngZone=Jt(Eo);cdr=Jt(rf);sceneService=Jt(Gn);characterBuilder=Jt(io);movementService=Jt(ar);vfxService=Jt(xo);hasCombatStarted=!1;isPursuitActive=!1;pursuitAttackTimer=null;character1=null;character2=null;performanceStats=wo(yS);isBattleActive=wo(!1);showFpsBadge=wo(!1);fpsKeysHeld=new Set;onKeyDown=t=>{this.fpsKeysHeld.add(t.key.toLowerCase()),this.fpsKeysHeld.has("f")&&this.fpsKeysHeld.has("p")&&this.fpsKeysHeld.has("s")&&(this.showFpsBadge.update(e=>!e),this.cdr.detectChanges(),this.fpsKeysHeld.clear())};onKeyUp=t=>{this.fpsKeysHeld.delete(t.key.toLowerCase())};constructor(){Ao(()=>{this.ngZone.runOutsideAngular(()=>{this.sceneService.init(this.canvasRef.nativeElement),this.movementService.init(this.canvasRef.nativeElement),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)})})}ngOnInit(){this.removePerformanceListener=this.sceneService.addPerformanceListener(t=>{this.performanceStats.set(t),this.cdr.detectChanges()}),this.ngZone.runOutsideAngular(()=>{this.battleService.battleState$.pipe(ca(this.destroy$)).subscribe(t=>{if(this.isBattleActive.set(t!==null),this.cdr.detectChanges(),!t){this.hasCombatStarted=!1,this.deactivatePursuit(),this.movementService.clearIdleWanderCharacter();return}this.hasCombatStarted=t.actions.length>0;let e=this.character1,i=this.character2;this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null,this.character1?.health===0&&this.character1Mesh&&(this.character1Mesh.visible=!1,this.deactivatePursuit()),this.character2?.health===0&&this.character2Mesh&&(this.character2Mesh.visible=!1,this.deactivatePursuit()),!this.character1Mesh&&!this.character2Mesh?this.createCharacters():(e&&this.character1&&e.id!==this.character1.id&&this.replaceCharacter(1),i&&this.character2&&i.id!==this.character2.id&&this.replaceCharacter(2)),this.syncEnemyIdleWander()}),this.battleService.action$.pipe(ca(this.destroy$)).subscribe(t=>{t&&(this.hasCombatStarted=!0,this.movementService.clearIdleWanderCharacter(),this.vfxService.animateAction(t,{character1:this.character1,character2:this.character2,character1Mesh:this.character1Mesh,character2Mesh:this.character2Mesh}),!this.isPursuitActive&&this.character1&&this.character2&&t.attackerId===this.character1.id&&t.defenderId===this.character2.id&&t.damage>0&&this.activatePursuit())})})}ngOnDestroy(){this.deactivatePursuit(),this.destroy$.next(),this.destroy$.complete(),this.removePerformanceListener?.(),this.removePerformanceListener=null,document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.movementService.dispose(),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.deactivatePursuit(),this.character1Mesh&&this.movementService.unregisterCharacterMesh(this.character1Mesh),this.character2Mesh&&this.movementService.unregisterCharacterMesh(this.character2Mesh),this.characterBuilder.disposeCharacterMesh(this.character1Mesh,this.sceneService.scene),this.characterBuilder.disposeCharacterMesh(this.character2Mesh,this.sceneService.scene),this.character1Mesh=null,this.character2Mesh=null,this.movementService.setControlledCharacter(null,null,"left"),this.movementService.clearIdleWanderCharacter(),this.character1=null,this.character2=null}replaceCharacter(t){this.deactivatePursuit();let e=t===1?this.character1:this.character2;if(!e)return;let i=t===1?this.character1Mesh:this.character2Mesh;i&&this.movementService.unregisterCharacterMesh(i),this.characterBuilder.disposeCharacterMesh(i,this.sceneService.scene);let n=this.characterBuilder.createCharacterMesh(e.color,e.position);t===1?this.character1Mesh=n:(n.scale.x=-1,this.character2Mesh=n),this.updateCharacterFacing(),this.sceneService.scene.add(n),this.movementService.registerCharacterMesh(n),t===1&&this.movementService.setControlledCharacter(n,e.position,"left"),this.vfxService.createTeleportationEntrance(n,e.position,t===1?"left":"right"),t===2&&this.syncEnemyIdleWander()}createCharacters(){if(!this.character1||!this.character2)return;let t=this.characterBuilder.createCharacterMesh(this.character1.color,this.character1.position);this.sceneService.scene.add(t);let e=this.characterBuilder.createCharacterMesh(this.character2.color,this.character2.position);e.scale.x=-1,this.sceneService.scene.add(e),this.character1Mesh=t,this.character2Mesh=e,this.updateCharacterFacing(),this.movementService.registerCharacterMesh(t),this.movementService.registerCharacterMesh(e),this.movementService.setControlledCharacter(t,this.character1.position,"left"),this.vfxService.createTeleportationEntrance(t,this.character1.position,"left"),this.vfxService.createTeleportationEntrance(e,this.character2.position,"right"),this.syncEnemyIdleWander()}updateCharacterFacing(){this.character1&&this.character2&&this.character1Mesh&&this.character2Mesh&&(this.character1Mesh.rotation.y=this.sceneService.getFacingRotationY(this.character1.position,this.character2.position),this.character2Mesh.rotation.y=this.sceneService.getFacingRotationY(this.character2.position,this.character1.position))}syncEnemyIdleWander(){if(!this.isPursuitActive){if(!this.character2Mesh||!this.character2||this.hasCombatStarted||this.character2.health<=0){this.movementService.clearIdleWanderCharacter();return}this.movementService.setIdleWanderCharacter(this.character2Mesh,this.character2.position,"right")}}activatePursuit(){!this.character2Mesh||!this.character2||!this.character1Mesh||(this.isPursuitActive=!0,this.movementService.clearIdleWanderCharacter(),this.movementService.setPursuitCharacter(this.character2Mesh,this.character2.position,"right",this.character1Mesh),this.startPursuitAttackTimer())}deactivatePursuit(){this.isPursuitActive&&(this.isPursuitActive=!1,this.clearPursuitAttackTimer(),this.movementService.clearPursuitCharacter())}startPursuitAttackTimer(){this.clearPursuitAttackTimer(),this.pursuitAttackTimer=setInterval(()=>{if(!this.isPursuitActive||!this.character1?.isAlive||!this.character2?.isAlive){this.deactivatePursuit();return}this.character2Mesh?.userData[ki]||this.battleService.performPursuitAttack()},3e3)}clearPursuitAttackTimer(){this.pursuitAttackTimer!==null&&(clearInterval(this.pursuitAttackTimer),this.pursuitAttackTimer=null)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-battle-canvas"]],viewQuery:function(e,i){if(e&1&&Ro(_S,7),e&2){let n;Po(n=Io())&&(i.canvasRef=n.first)}},features:[sf([Gn,io,Kr,ar,xo])],decls:4,vars:2,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"],[1,"fps-badge"],[1,"fps-badge__primary"],[1,"fps-badge__secondary"]],template:function(e,i){e&1&&(xi(0,"canvas",1,0),Ps(2,xS,1,0,"app-battle-joystick")(3,vS,9,5,"div",2)),e&2&&($t(2),cr(i.isBattleActive()?2:-1),$t(),cr(i.isBattleActive()&&i.showFpsBadge()?3:-1))},dependencies:[Wi,cf,Mh],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}.fps-badge[_ngcontent-%COMP%]{position:absolute;top:16px;left:50%;transform:translate(-50%);z-index:5;min-width:126px;padding:8px 14px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:#070c11b8;box-shadow:0 10px 24px #00000047;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f5fbff;text-align:center;pointer-events:none}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.875rem;font-weight:700;letter-spacing:.08em;line-height:1}.fps-badge__secondary[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;margin-top:6px;color:#f5fbffc7;font-size:.6875rem;font-weight:600;letter-spacing:.06em;line-height:1;text-transform:uppercase}@media (max-width: 580px){.fps-badge[_ngcontent-%COMP%]{top:10px;min-width:112px;padding:7px 12px}.fps-badge__primary[_ngcontent-%COMP%]{font-size:.8125rem}.fps-badge__secondary[_ngcontent-%COMP%]{gap:8px;margin-top:5px;font-size:.625rem}}"],changeDetection:0})};var Gd={RAT:{id:"char1",name:"Shelob",race:"rat",health:85,maxHealth:85,attack:18,defense:12,speed:22,focus:20,color:"#ff0000"},CAT:{id:"char2",name:"Aragog",race:"cat",health:90,maxHealth:90,attack:22,defense:13,speed:23,focus:14,color:"#0000ff"},BEAR:{id:"char3",name:"Anansi",race:"bear",health:130,maxHealth:130,attack:18,defense:22,speed:10,focus:10,color:"#444444"},HORSE:{id:"char4",name:"Arachne",race:"horse",health:110,maxHealth:110,attack:21,defense:14,speed:20,focus:10,color:"#dd8888"},GIRAFFE:{id:"char5",name:"Ungoliant",race:"giraffe",health:95,maxHealth:95,attack:19,defense:14,speed:13,focus:24,color:"#34f5dd"}};function bS(r,t){if(r&1){let e=ua();oe(0,"app-victory-banner",7),Hi("terminateBattle",function(){Cn(e);let n=Gi(2);return Rn(n.resetAndTerminateBattle())}),le()}if(r&2){let e=Gi();ke("winner",e.winner)}}function MS(r,t){if(r&1&&(oe(0,"div",3),xi(1,"app-character-status-card",4)(2,"app-character-status-card",5),le(),Ps(3,bS,1,1,"app-victory-banner",6)),r&2){let e=t;$t(),ke("character",e.team1[e.activeTeam1Index]),$t(),ke("character",e.team2[e.activeTeam2Index]),$t(),cr(e.isComplete&&e.winner?3:-1)}}var ug=class r{battleCanvas;destroy$=new So;battleService=Jt(hr);router=Jt(hf);battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe($d(t=>t!==null));awaitingPlayerAction$=this.battleService.awaitingPlayerAction$;character1=null;character2=null;ngOnInit(){this.lockOrientation(),this.battleService.battleState$.pipe(ca(this.destroy$)).subscribe(t=>this.updateActiveCharacters(t))}ngOnDestroy(){this.unlockOrientation(),this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){this.battleService.startBattle([Gd.HORSE],[Gd.GIRAFFE])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.character1=null,this.character2=null,this.router.navigate(["/"])}onPlayerAction(t){this.battleService.performPlayerAction(t)}lockOrientation(){window.innerWidth<=768&&screen.orientation?.lock?.("landscape")?.catch?.(()=>{})}unlockOrientation(){screen.orientation?.unlock?.()}updateActiveCharacters(t){if(!t){this.character1=null,this.character2=null;return}this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_i({type:r,selectors:[["app-battle"]],viewQuery:function(e,i){if(e&1&&Ro(vo,5),e&2){let n;Po(n=Io())&&(i.battleCanvas=n.first)}},decls:8,vars:9,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","playerAction","isBattleActive","isAwaitingPlayerAction"],[1,"battle-overlay"],["alignment","left",3,"character"],["alignment","right",3,"character"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(e,i){if(e&1&&(oe(0,"div",0)(1,"div",1),xi(2,"app-battle-canvas"),Ps(3,MS,4,3),$e(4,"async"),le(),oe(5,"app-battle-controls",2),$e(6,"async"),$e(7,"async"),Hi("startBattle",function(){return i.startBattle()})("playerAction",function(s){return i.onPlayerAction(s)}),le()()),e&2){let n,s,a;$t(3),cr((n=Qe(4,3,i.battleState$))?3:-1,n),$t(2),ke("isBattleActive",(s=Qe(6,5,i.isBattleActive$))!==null&&s!==void 0?s:!1)("isAwaitingPlayerAction",(a=Qe(7,7,i.awaitingPlayerAction$))!==null&&a!==void 0?a:!1)}},dependencies:[Wi,lf,Vo,Ho,Go,vo],styles:[".canvas-wrapper[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;padding:4px;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 60px #34f5dd4d,inset 0 0 40px #34f5dd1a}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:8px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;z-index:10}@media (max-width: 580px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{gap:10px;height:100%}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%]{padding:8px;gap:8px}.battle-overlay[_ngcontent-%COMP%]{gap:8px}}@media (max-width: 768px) and (orientation: portrait){[_nghost-%COMP%]{position:fixed;top:0;left:100dvw;width:100dvh;height:100dvw;transform:rotate(90deg);transform-origin:top left;overflow:hidden;z-index:1000}[_nghost-%COMP%]   .battle-arena[_ngcontent-%COMP%]{height:100dvw}}"]})};export{ug as BattleComponent};
