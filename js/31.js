import{f as Fd}from"./8.js";import{a as Nd,b as Ud}from"./30.js";import"./9.js";import{e as fo,f as po}from"./14.js";import"./52.js";import"./41.js";import{c as ho,d as uo}from"./18.js";import{m as Dd,s as Ld,u as Vn}from"./42.js";import{Cb as me,Da as Ad,Db as ge,Eb as Cn,Ib as Qs,Mb as kn,Nb as ri,P as $s,Qb as ih,Sb as oo,T as Le,Ta as se,Tb as lo,Ub as co,Z as Ae,Zb as Mr,_b as ta,a as mn,ac as Pd,b as jr,e as io,ec as Id,fa as bi,fb as gn,ga as Si,k as ro,kb as Ks,l as so,lc as _n,mc as xn,oa as js,s as wd,sb as Ne,tb as Cd,ub as ao,wb as Rd,yb as nh}from"./35.js";var mo=class s{initiativeRandomMax=10;calculateInitiative(t){return t.speed+Math.floor(Math.random()*(this.initiativeRandomMax+1))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac,providedIn:"root"})};var go=class s{baseHitChance=75;hitChanceSpeedFactor=.5;minHitChance=5;maxHitChance=100;critBaseChance=5;critSpeedFactor=.2;bearRageThreshold=.5;bearRageAttackFactor=.05;bearRageDefenseFactor=.3;horseRushSpeedFactor=.01;defenseMultiplier=.6;minDamage=1;calculateHitChance(t,e){let n=this.baseHitChance+(t.speed-e.speed)*this.hitChanceSpeedFactor;return t.debuffEffect&&(n-=t.debuffEffect.accuracyReduction),Math.max(this.minHitChance,Math.min(this.maxHitChance,n))}calculateBaseDamage(t,e){let n=t.attack;if(t.debuffEffect&&(n-=t.debuffEffect.attackReduction),t.race==="bear"&&t.health<t.maxHealth*this.bearRageThreshold){let o=(t.maxHealth-t.health)*this.bearRageAttackFactor;n+=o}let i=1;t.race==="horse"&&t.turnCount===0&&(i=.5+t.speed*this.horseRushSpeedFactor);let r=e.defense;e.race==="bear"&&e.health<e.maxHealth*this.bearRageThreshold&&(r+=e.defense*this.bearRageDefenseFactor);let a=n*i-r*this.defenseMultiplier;return Math.max(this.minDamage,a)}calculateCritChance(t){return this.critBaseChance+t.speed*this.critSpeedFactor}isCriticalHit(t){return Math.random()*100<t}isHit(t){return Math.random()*100<=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac,providedIn:"root"})};var Wi=class s{poisonDeathDelayMs=1e3;poisonTickIntervalMs=3e3;poisonTickCount=4;poisonTimers=new Map;applyEndOfTurnEffects(t,e,n){!t||t.isComplete}startAutonomousPoisonTicks(t,e,n,i){this.clearPoisonTimersForCharacter(t.id);let r=e.team1.some(o=>o.id===t.id),a=[];for(let o=0;o<this.poisonTickCount;o++){let l=setTimeout(()=>{this.applyPoisonDamage(t,e,n,r,i)},(o+1)*this.poisonTickIntervalMs);a.push(l)}this.poisonTimers.set(t.id,a)}clearPoisonTimersForCharacter(t){let e=this.poisonTimers.get(t);e&&(e.forEach(n=>clearTimeout(n)),this.poisonTimers.delete(t))}clearAllPoisonTimers(){this.poisonTimers.forEach(t=>t.forEach(e=>clearTimeout(e))),this.poisonTimers.clear()}applyPoisonDamage(t,e,n,i,r){if(!t||!t.poisonEffect||!t.isAlive||e.isComplete)return;let a=t.poisonEffect.damagePerTurn;t.health=Math.max(0,t.health-a),t.isAlive=t.health>0,this.emitAction(e,n,{attackerId:"",defenderId:t.id,damage:a,type:"poison",timestamp:Date.now(),message:`${t.name} takes poison damage!`}),t.poisonEffect.turnsRemaining--,t.poisonEffect.turnsRemaining<=0&&(delete t.poisonEffect,this.clearPoisonTimersForCharacter(t.id)),t.isAlive||(this.clearPoisonTimersForCharacter(t.id),setTimeout(()=>{r(!i)},this.poisonDeathDelayMs))}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac,providedIn:"root"})};var _o=class s{effectsService=Ae(Wi);poisonBaseChance=20;poisonFocusFactor=.5;poisonSpeedFactor=.3;poisonAttackFactor=.3;poisonFocusDamageFactor=.5;poisonTurns=4;comboBaseChance=25;comboSpeedFactor=.6;comboDamageFactor=.6;comboDamageDelayMs=500;debuffAttackFactor=.4;debuffAccuracyFactor=.3;applyRacialSkills(t,e,n,i,r){switch(t.race){case"rat":this.applyPoisonBite(t,e,n,i,r);break;case"cat":this.applyComboStrike(t,e,n,i);break;case"giraffe":this.applyDistanceControl(t,e);break}}applyForcedPoison(t,e,n,i,r){let a=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(a)},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`}),this.effectsService.startAutonomousPoisonTicks(e,n,i,r)}applyForcedCombo(t,e,n,i,r){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0,r?.()},this.comboDamageDelayMs)}applyPoisonBite(t,e,n,i,r){let a=this.poisonBaseChance+t.focus*this.poisonFocusFactor+t.speed*this.poisonSpeedFactor;if(Math.random()*100<a){let o=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(o)},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`}),this.effectsService.startAutonomousPoisonTicks(e,n,i,r)}}applyComboStrike(t,e,n,i){let r=this.comboBaseChance+t.speed*this.comboSpeedFactor;if(Math.random()*100<r){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0},this.comboDamageDelayMs)}}applyDistanceControl(t,e){let n=t.focus*this.debuffAttackFactor,i=t.focus*this.debuffAccuracyFactor;e.debuffEffect={attackReduction:n,accuracyReduction:i}}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac,providedIn:"root"})};var xo=class s{initiativeService=Ae(mo);damageService=Ae(go);racialSkillsService=Ae(_o);effectsService=Ae(Wi);counterAttackDelayMs=2e3;effectsDelayMs=500;damageApplyDelayMs=350;deathNotificationDelayMs=1500;getCounterAttackDelayMs(){return this.counterAttackDelayMs}getEffectsDelayMs(){return this.effectsDelayMs}getTurnOrder(t,e){let n=this.initiativeService.calculateInitiative(t),i=this.initiativeService.calculateInitiative(e),r=n>=i;return{firstAttacker:r?t:e,firstDefender:r?e:t,firstAttackerIsTeam1:r}}executeTurn(t,e,n,i){if(!t||t.isComplete)return;let r=t.team1[t.activeTeam1Index],a=t.team2[t.activeTeam2Index];if(!r||!a){n();return}let{firstAttacker:o,firstDefender:l}=this.getTurnOrder(r,a);this.executeAutoAttack(o,l,t,e,i),setTimeout(()=>{t.isComplete||(l.isAlive&&this.executeAutoAttack(l,o,t,e,i),setTimeout(()=>{this.effectsService.applyEndOfTurnEffects(t,e,i)},this.effectsDelayMs))},this.counterAttackDelayMs)}executeAutoAttack(t,e,n,i,r){this.executeAutoAttackInternal(t,e,n,i,r)}executePlayerAttack(t,e,n,i,r,a){if(t.turnCount++,a==="shield"){t.shieldEffect={blocksNextAttack:!0},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"shield",timestamp:Date.now(),message:`${t.name} raised a shield!`});return}if(this.consumeShield(e)){this.executeMiss(t,e,n,i);return}if(a==="miss"){this.executeMiss(t,e,n,i);return}if(a==="poison"){this.racialSkillsService.applyForcedPoison(t,e,n,i,r);return}if(a==="combo"){this.racialSkillsService.applyForcedCombo(t,e,n,i,()=>this.handleDeathCallback(t,e,n,r));return}let o=this.damageService.calculateBaseDamage(t,e),l=Math.floor(a==="critical"?o*1.5:o);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:l,type:a,timestamp:Date.now()}),this.applyDamageWithDelay(t,e,n,r,l)}applyEndOfTurnEffects(t,e,n){this.effectsService.applyEndOfTurnEffects(t,e,n)}executeAutoAttackInternal(t,e,n,i,r){if(t.turnCount++,this.consumeShield(e)){this.executeMiss(t,e,n,i);return}let a=this.damageService.calculateHitChance(t,e);if(!this.damageService.isHit(a)){this.executeSkipAttack(t,e,n,i);return}let o=this.damageService.calculateBaseDamage(t,e),l=this.damageService.calculateCritChance(t),c=this.damageService.isCriticalHit(l);c&&(o*=1.5),o=Math.floor(o),this.racialSkillsService.applyRacialSkills(t,e,n,i,r),this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:o,type:c?"critical":"attack",timestamp:Date.now()}),this.applyDamageWithDelay(t,e,n,r,o)}executeMiss(t,e,n,i){this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"miss",timestamp:Date.now(),message:`${t.name} missed!`})}executeSkipAttack(t,e,n,i){this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"skip",timestamp:Date.now(),message:`${t.name} skipped their turn!`})}consumeShield(t){return t.shieldEffect?.blocksNextAttack?(delete t.shieldEffect,!0):!1}emitAction(t,e,n){t.actions.push(n),e.next(n)}applyDamageWithDelay(t,e,n,i,r){setTimeout(()=>{n.isComplete||(e.health=Math.max(0,e.health-r),e.isAlive=e.health>0,e.isAlive||setTimeout(()=>{let a=t===n.team1[n.activeTeam1Index];i(a)},this.deathNotificationDelayMs))},this.damageApplyDelayMs)}handleDeathCallback(t,e,n,i){e.isAlive||setTimeout(()=>{let r=t===n.team1[n.activeTeam1Index];i(r)},this.deathNotificationDelayMs)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac,providedIn:"root"})};var Kr=class s{turnService=Ae(xo);effectsService=Ae(Wi);team1StartPosition={x:-2,y:-1,z:3};team2StartPosition={x:3,y:-1,z:-3};battleStateSubject=new so(null);battleState$=this.battleStateSubject.asObservable();awaitingPlayerActionSubject=new so(!1);awaitingPlayerAction$=this.awaitingPlayerActionSubject.asObservable();actionSubject=new so(null);action$=this.actionSubject.asObservable();currentTurn=null;awaitingPlayerPhase=null;startBattle(t,e){if(t.length===0||e.length===0)throw new Error("Both teams must have at least one character");let n={team1:this.prepareTeam(t,this.team1StartPosition),team2:this.prepareTeam(e,this.team2StartPosition),activeTeam1Index:0,activeTeam2Index:0,actions:[],winner:null,isComplete:!1};this.battleStateSubject.next(n),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null,this.beginNextTurn()}performPlayerAction(t){let e=this.battleStateSubject.value;if(!e||e.isComplete||!this.currentTurn||!this.awaitingPlayerPhase)return;let{team1:n,team2:i}=this.currentTurn;this.awaitingPlayerActionSubject.next(!1),this.turnService.executePlayerAttack(n,i,e,this.actionSubject,r=>this.handleCharacterDeath(r),t),this.battleStateSubject.next(mn({},e)),this.awaitingPlayerPhase==="first"?setTimeout(()=>{let r=this.battleStateSubject.value;!r||r.isComplete||(i.isAlive&&(this.turnService.executeAutoAttack(i,n,r,this.actionSubject,a=>this.handleCharacterDeath(a)),this.battleStateSubject.next(mn({},r))),this.finalizeTurn())},this.turnService.getCounterAttackDelayMs()):this.finalizeTurn(),this.awaitingPlayerPhase=null}beginNextTurn(){let t=this.battleStateSubject.value;if(!t||t.isComplete)return;let e=t.team1[t.activeTeam1Index],n=t.team2[t.activeTeam2Index];if(!e||!n){this.endBattle();return}let i=this.turnService.getTurnOrder(e,n);if(this.currentTurn={team1:e,team2:n,firstAttackerIsTeam1:i.firstAttackerIsTeam1},i.firstAttackerIsTeam1){this.awaitingPlayerPhase="first",this.awaitingPlayerActionSubject.next(!0);return}this.turnService.executeAutoAttack(i.firstAttacker,i.firstDefender,t,this.actionSubject,r=>this.handleCharacterDeath(r)),this.battleStateSubject.next(mn({},t)),this.awaitingPlayerPhase="second",setTimeout(()=>{let r=this.battleStateSubject.value;if(!(!r||r.isComplete)){if(!this.currentTurn?.team1.isAlive){this.finalizeTurn();return}this.awaitingPlayerActionSubject.next(!0)}},this.turnService.getCounterAttackDelayMs())}finalizeTurn(){setTimeout(()=>{let t=this.battleStateSubject.value;!t||t.isComplete||(this.turnService.applyEndOfTurnEffects(t,this.actionSubject,e=>this.handleCharacterDeath(e)),this.battleStateSubject.next(mn({},t)),t.isComplete||this.beginNextTurn())},this.turnService.getEffectsDelayMs())}handleCharacterDeath(t){let e=this.battleStateSubject.value;if(!e||e.isComplete)return;let n=t?"team2":"team1",i=t?"activeTeam2Index":"activeTeam1Index",r=e[n],a=e[i],o=this.getNextAliveIndex(r,a);if(o!==null){e[i]=o,this.battleStateSubject.next(mn({},e));return}this.endBattle()}getNextAliveIndex(t,e){let n=t.findIndex((r,a)=>a>e&&r.isAlive);if(n!==-1)return n;let i=t.findIndex(r=>r.isAlive);return i!==-1?i:null}endBattle(){let t=this.battleStateSubject.value;if(!t)return;t.isComplete=!0,this.effectsService.clearAllPoisonTimers();let i=(t.team1.some(r=>r.isAlive)?t.team1:t.team2).filter(r=>r.isAlive);t.winner=i.length>0?i[0].name:null,this.battleStateSubject.next(mn({},t)),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null}resetBattle(){this.effectsService.clearAllPoisonTimers(),this.battleStateSubject.next(null),this.actionSubject.next(null),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null}prepareTeam(t,e){return t.map(n=>jr(mn({},n),{isAlive:!0,position:e,turnCount:0}))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac,providedIn:"root"})};var vo=class s{health;maxHealth;healthBarClass;alignment="left";get healthPercentage(){return this.maxHealth?this.health/this.maxHealth*100:0}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-health-bar"]],inputs:{health:"health",maxHealth:"maxHealth",healthBarClass:"healthBarClass",alignment:"alignment"},decls:5,vars:10,consts:[[1,"health-container"],[1,"health-bar-wrapper"],[1,"health-bar"],[1,"health-text"]],template:function(e,n){e&1&&(me(0,"div",0)(1,"div",1),Cn(2,"div",2),me(3,"span",3),Mr(4),ge()()()),e&2&&(ao("left",n.alignment==="left")("right",n.alignment==="right"),se(2),Rd(n.healthBarClass),Cd("width",n.healthPercentage,"%"),se(2),Pd("",n.health," / ",n.maxHealth,""))},dependencies:[Vn],styles:['.health-container[_ngcontent-%COMP%]{margin-bottom:12px}.health-bar-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:32px;background:#58585880;border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,.5)}.health-bar[_ngcontent-%COMP%]{height:100%;transition:width .6s cubic-bezier(.4,0,.2,1);position:relative;border-radius:16px}.health-bar.character1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#f43f5ef2,#fb923c,#f43f5ef2);box-shadow:0 0 20px #fb923ca6,inset 0 0 10px #ffffff4d}.health-bar.character2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#34d3f5f2,#58f5d3,#34d3f5f2);box-shadow:0 0 20px #34f5dd99,inset 0 0 10px #ffffff4d}.health-bar[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.4) 0%,transparent 100%);border-radius:16px 16px 0 0}.health-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700;font-size:1rem;pointer-events:none;z-index:1}.health-container.right[_ngcontent-%COMP%]   .health-text[_ngcontent-%COMP%]{color:#000}.health-container.left[_ngcontent-%COMP%]   .health-text[_ngcontent-%COMP%]{color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8)}@media (max-width: 1024px){.health-bar-wrapper[_ngcontent-%COMP%]{height:28px}}@media (max-width: 580px){.health-bar-wrapper[_ngcontent-%COMP%]{height:24px}.health-text[_ngcontent-%COMP%]{font-size:.75rem}}@media (max-width: 480px){.health-bar-wrapper[_ngcontent-%COMP%]{height:20px}.health-text[_ngcontent-%COMP%]{font-size:.7rem}}']})};var yo=class s{attack;defense;static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-stats-row"]],inputs:{attack:"attack",defense:"defense"},decls:3,vars:4,consts:[[1,"stats-row"],["styleClass","stat-chip attack-stat",3,"label"],["styleClass","stat-chip defense-stat",3,"label"]],template:function(e,n){e&1&&(me(0,"div",0),Cn(1,"p-chip",1)(2,"p-chip",2),ge()),e&2&&(se(),ih("label","\u2694\uFE0F ",n.attack,""),se(),ih("label","\u{1F6E1}\uFE0F ",n.defense,""))},dependencies:[Ud,Nd],styles:[".stats-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){display:inline-flex;align-items:center;border:1px solid rgba(52,245,221,.3)!important;color:#fff!important;font-weight:600;font-size:.95rem;padding:6px 12px;white-space:nowrap;box-shadow:0 0 15px #34f5dd33;transition:all .2s ease}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip):hover{background:#34f5dd40!important;transform:scale(1.05)}@media (max-width: 1024px){.stats-row[_ngcontent-%COMP%]{gap:6px}}@media (max-width: 580px){.stats-row[_ngcontent-%COMP%]{gap:6px;flex-wrap:wrap}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){flex:1 1 calc(50% - 3px);justify-content:center;min-width:0}}@media (max-width: 480px){.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){font-size:.8rem;padding:.3rem .6rem}}@media (max-width: 360px){.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){flex-basis:100%}}@media (max-width: 580px){[_nghost-%COMP%]     .p-chip{padding:4px 8px!important;font-size:12px!important}}"]})};var Mo=class s{character;alignment="left";get healthBarClass(){return this.alignment==="left"?"character1":"character2"}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-character-status-card"]],inputs:{character:"character",alignment:"alignment"},decls:6,vars:11,consts:[[1,"character-status"],[1,"character-card","glass-panel"],[1,"character-name"],[3,"health","maxHealth","healthBarClass","alignment"],[3,"attack","defense"]],template:function(e,n){e&1&&(me(0,"div",0)(1,"div",1)(2,"div",2),Mr(3),ge(),Cn(4,"app-health-bar",3)(5,"app-stats-row",4),ge()()),e&2&&(ao("left",n.alignment==="left")("right",n.alignment==="right"),se(3),ta(n.character.name),se(),Ne("health",n.character.health)("maxHealth",n.character.maxHealth)("healthBarClass",n.healthBarClass)("alignment",n.alignment),se(),Ne("attack",n.character.attack)("defense",n.character.defense))},dependencies:[Vn,vo,yo],styles:[".right[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 15% 25%,rgba(152,255,238,.6) 0%,transparent 122%),radial-gradient(circle at 85% 15%,rgba(120,240,214,.53) 0%,transparent 90%),radial-gradient(circle at 50% 90%,rgba(160,255,234,.4) 0%,transparent 80%),radial-gradient(circle at 70% 50%,rgba(100,230,191,.28) 0%,transparent 65%),linear-gradient(145deg,#0a231999,#0c1e1666,#081c1480 60%,#0c1e1666);border:1px solid rgba(52,245,180,.25);box-shadow:0 8px 24px #0006,0 0 15px #34f5b414,inset 0 1px #ffffff0f}.left[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(244,63,94,.42) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(251,146,60,.8) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(244,63,94,.42) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(251,146,60,.8) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}.character-status[_ngcontent-%COMP%]{pointer-events:auto;animation:slideIn .8s ease-out}.character-status.left[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInLeftDramatic}.character-status.right[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInRightDramatic}.character-card[_ngcontent-%COMP%]{padding:16px 20px;min-width:260px;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .3s ease}.character-name[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:1.8rem;margin-bottom:12px;letter-spacing:1px}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}.right[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]   .character-name[_ngcontent-%COMP%]{color:#000}.left[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]   .character-name[_ngcontent-%COMP%]{color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8)}@keyframes _ngcontent-%COMP%_slideInLeftDramatic{0%{opacity:0;transform:translate(-150px) rotate(-10deg) scale(.5)}70%{transform:translate(10px) rotate(2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@keyframes _ngcontent-%COMP%_slideInRightDramatic{0%{opacity:0;transform:translate(150px) rotate(10deg) scale(.5)}70%{transform:translate(-10px) rotate(-2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@media (max-width: 1024px){.character-card[_ngcontent-%COMP%]{min-width:200px;padding:12px 14px}.character-name[_ngcontent-%COMP%]{font-size:1.4rem}}@keyframes _ngcontent-%COMP%_slideInDown{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 580px){[_nghost-%COMP%]{width:100%}.character-status[_ngcontent-%COMP%]{width:100%}.character-status.left[_ngcontent-%COMP%], .character-status.right[_ngcontent-%COMP%]{animation-name:slideInDown}.character-card[_ngcontent-%COMP%]{min-width:unset;width:100%;padding:10px 12px}.character-name[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:8px}}@media (max-width: 480px){.character-card[_ngcontent-%COMP%]{padding:8px 10px}.character-name[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:6px}}"]})};var bo=class s{winner;terminateBattle=new js;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:10,vars:7,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-subtitle"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(e,n){e&1&&(me(0,"div",0)(1,"div",1)(2,"h1",2),Mr(3),ge(),me(4,"p",3),Mr(5),_n(6,"translate"),ge(),Cn(7,"div",4),me(8,"p-button",5),_n(9,"translate"),kn("onClick",function(){return n.onTerminateBattle()}),ge()()()),e&2&&(se(3),ta(n.winner),se(2),ta(xn(6,3,"VICTORY!")),se(3),Ne("label",xn(9,5,"Terminate")))},dependencies:[Vn,po,fo,uo,ho],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin:20px 0;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#c0c6d0;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 24px rgba(123,140,173,.4),0 0 48px rgba(123,140,173,.15),0 2px 12px rgba(0,0,0,.9);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:1px solid rgba(168,178,193,.18)}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0d1117f5,#161b26ed),radial-gradient(ellipse at center,rgba(123,140,173,.05) 0%,transparent 70%);border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin:15px 0}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin:10px 0;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function Wm(s,t){if(s&1){let e=Qs();me(0,"div",3)(1,"p-button",4),_n(2,"translate"),kn("onClick",function(){bi(e);let i=ri();return Si(i.onStartBattle())}),ge()()}s&2&&(se(),Ne("label",xn(2,1,"Release the Spiders!")))}function Xm(s,t){if(s&1){let e=Qs();me(0,"div",5)(1,"p-button",6),_n(2,"translate"),kn("onClick",function(){bi(e);let i=ri();return Si(i.onPlayerAction("attack"))}),ge(),me(3,"p-button",7),_n(4,"translate"),kn("onClick",function(){bi(e);let i=ri();return Si(i.onPlayerAction("critical"))}),ge(),me(5,"p-button",8),_n(6,"translate"),kn("onClick",function(){bi(e);let i=ri();return Si(i.onPlayerAction("combo"))}),ge(),me(7,"p-button",9),_n(8,"translate"),kn("onClick",function(){bi(e);let i=ri();return Si(i.onPlayerAction("poison"))}),ge(),me(9,"p-button",10),_n(10,"translate"),kn("onClick",function(){bi(e);let i=ri();return Si(i.onPlayerAction("shield"))}),ge()()}s&2&&(se(),Ne("label",xn(2,5,"Attack")),se(2),Ne("label",xn(4,7,"Critical")),se(2),Ne("label",xn(6,9,"Combo")),se(2),Ne("label",xn(8,11,"Poison")),se(2),Ne("label",xn(10,13,"Shield")))}var So=class s{isBattleActive=!1;isAwaitingPlayerAction=!1;startBattle=new js;playerAction=new js;onStartBattle(){this.startBattle.emit()}onPlayerAction(t){this.playerAction.emit(t)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive",isAwaitingPlayerAction:"isAwaitingPlayerAction"},outputs:{startBattle:"startBattle",playerAction:"playerAction"},decls:3,vars:2,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],["class","control-buttons",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"],[1,"control-buttons"],["icon","pi pi-angle-double-right","severity","secondary","size","large","styleClass","battle-btn attack-btn",3,"onClick","label"],["icon","pi pi-bolt","severity","secondary","size","large","styleClass","battle-btn critical-btn",3,"onClick","label"],["icon","pi pi-clone","severity","secondary","size","large","styleClass","battle-btn combo-btn",3,"onClick","label"],["icon","pi pi-bullseye","severity","secondary","size","large","styleClass","battle-btn poison-btn",3,"onClick","label"],["icon","pi pi-shield","severity","secondary","size","large","styleClass","battle-btn shield-btn",3,"onClick","label"]],template:function(e,n){e&1&&(me(0,"div",0),Ks(1,Wm,3,3,"div",1)(2,Xm,11,15,"div",2),ge()),e&2&&(se(),Ne("ngIf",!n.isBattleActive),se(),Ne("ngIf",n.isBattleActive&&n.isAwaitingPlayerAction))},dependencies:[Vn,Dd,po,fo,uo,ho],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000;padding-top:120px}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 580px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{justify-content:space-between;width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px 20px!important}.control-buttons[_ngcontent-%COMP%]     .control-buttons, .control-buttons[_ngcontent-%COMP%]     .p-button-label{display:none!important}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};function Ti(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Xd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},es={duration:.5,overwrite:!1,delay:0},Mh,We,_e,Gn=1e8,he=1/Gn,uh=Math.PI*2,qm=uh/4,Ym=0,qd=Math.sqrt,Zm=Math.cos,Jm=Math.sin,Ue=function(t){return typeof t=="string"},Ce=function(t){return typeof t=="function"},wi=function(t){return typeof t=="number"},Lo=function(t){return typeof t>"u"},oi=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},bh=function(){return typeof window<"u"},To=function(t){return Ce(t)||Ue(t)},Yd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},je=Array.isArray,$m=/random\([^)]+\)/g,jm=/,\s*/g,Od=/(?:-?\.?\d|\.)+/gi,Sh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Er=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Th=/[+-]=-?[.\d]+/,Km=/[^,'"\[\]\s]+/gi,Qm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,be,si,dh,Eh,Pn={},Co={},Zd,Jd=function(t){return(Co=ns(t,Pn))&&Ke},Fo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},aa=function(t,e){return!e&&console.warn(t)},$d=function(t,e){return t&&(Pn[t]=e)&&Co&&(Co[t]=e)||Pn},oa=function(){return 0},t0={suppressEvents:!0,isStart:!0,kill:!1},Eo={suppressEvents:!0,kill:!1},e0={suppressEvents:!0},wh={},qi=[],fh={},jd,vn={},sh={},Bd=30,wo=[],Ah="",Ch=function(t){var e=t[0],n,i;if(oi(e)||Ce(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=wo.length;i--&&!wo[i].targetTest(e););n=wo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Dh(t[i],n)))||t.splice(i,1);return t},Yi=function(t){return t._gsap||Ch(Wn(t))[0]._gsap},Rh=function(t,e,n){return(n=t[e])&&Ce(n)?t[e]():Lo(n)&&t.getAttribute&&t.getAttribute(e)||n},on=function(t,e){return(t=t.split(",")).forEach(e)||t},Re=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},wr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},n0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ro=function(){var t=qi.length,e=qi.slice(0),n,i;for(fh={},qi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ph=function(t){return!!(t._initted||t._startAt||t.add)},Kd=function(t,e,n,i){qi.length&&!We&&Ro(),t.render(e,n,i||!!(We&&e<0&&Ph(t))),qi.length&&!We&&Ro()},Qd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Km).length<2?e:Ue(t)?t.trim():t},tf=function(t){return t},In=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},i0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ns=function(t,e){for(var n in e)t[n]=e[n];return t},zd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=oi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Po=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ia=function(t){var e=t.parent||be,n=t.keyframes?i0(je(t.keyframes)):In;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},r0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ef=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},No=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Zi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},br=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},s0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ph=function(t,e,n,i){return t._startAt&&(We?t._startAt.revert(Eo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},a0=function s(t){return!t||t._ts&&s(t.parent)},kd=function(t){return t._repeat?is(t._tTime,t=t.duration()+t._rDelay)*t:0},is=function(t,e){var n=Math.floor(t=Me(t/e));return t&&n===t?n-1:n},Io=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Uo=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},Oo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Uo(t),n._dirty||br(n,t)),t},nf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Io(t.rawTime(),e),(!e._dur||ha(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),br(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},ai=function(t,e,n,i){return e.parent&&Zi(e),e._start=Me((wi(n)?n:n||t!==be?Hn(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ef(t,e,"_first","_last",t._sort?"_start":0),mh(e)||(t._recent=e),i||nf(t,e),t._ts<0&&Oo(t,t._tTime),t},rf=function(t,e){return(Pn.ScrollTrigger||Fo("scrollTrigger",e))&&Pn.ScrollTrigger.create(e,t)},sf=function(t,e,n,i,r){if(Nh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!We&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jd!==yn.frame)return qi.push(t),t._lazy=[r,i],1},o0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},mh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},l0=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&o0(t)&&!(!t._initted&&mh(t))||(t._ts<0||t._dp._ts<0)&&!mh(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ha(0,t._tDur,e),h=is(l,o),t._yoyo&&h&1&&(a=1-a),h!==is(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||We||i||t._zTime===he||!e&&t._zTime){if(!t._initted&&sf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ph(t,e,n,!0),t._onUpdate&&!n&&Rn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Zi(t,1),!n&&!We&&(Rn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},c0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},rs=function(t,e,n,i){var r=t._repeat,a=Me(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Me(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Oo(t,t._tTime=t._tDur*o),t.parent&&Uo(t),n||br(t.parent,t),t},Vd=function(t){return t instanceof Ge?br(t):rs(t,t._dur)},h0={_start:0,endTime:oa,totalDuration:oa},Hn=function s(t,e,n){var i=t.labels,r=t._recent||h0,a=t.duration()>=Gn?r.endTime(!1):t._dur,o,l,c;return Ue(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(je(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ra=function(t,e,n){var i=wi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ie(e[0],a,e[r+1])},Ji=function(t,e){return t||t===0?e(t):e},ha=function(t,e,n){return n<t?t:n>e?e:n},Xe=function(t,e){return!Ue(t)||!(e=Qm.exec(t))?"":e[1]},u0=function(t,e,n){return Ji(n,function(i){return ha(t,e,i)})},gh=[].slice,af=function(t,e){return t&&oi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&oi(t[0]))&&!t.nodeType&&t!==si},d0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ue(i)&&!e||af(i,1)?(r=n).push.apply(r,Wn(i)):n.push(i)})||n},Wn=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Ue(t)&&!n&&(dh||!ss())?gh.call((e||Eh).querySelectorAll(t),0):je(t)?d0(t,n):af(t)?gh.call(t,0):t?[t]:[]},_h=function(t){return t=Wn(t)[0]||aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Wn(e,n.querySelectorAll?n:n===t?aa("Invalid scope")||Eh.createElement("div"):t)}},of=function(t){return t.sort(function(){return .5-Math.random()})},lf=function(t){if(Ce(t))return t;var e=oi(t)?t:{each:t},n=Sr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ue(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,v,E,y,b,M,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Gn])[1],!x){for(w=-Gn;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*h-.5:i%x,v=x===Gn?0:l?g*u/x-.5:i/x|0,w=0,C=Gn,M=0;M<g;M++)E=M%x-p,y=v-(M/x|0),m[M]=b=c?Math.abs(c==="y"?y:E):qd(E*E+y*y),b>w&&(w=b),b<C&&(C=b);i==="random"&&of(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Xe(e.amount||e.each)||0,n=n&&g<0?_f(n):n}return g=(m[f]-m.min)/m.max||0,Me(m.b+(n?n(g):g)*m.v)+m.u}},xh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(wi(n)?0:Xe(n))}},cf=function(t,e){var n=je(t),i,r;return!n&&oi(t)&&(i=n=t.radius||Gn,t.values?(t=Wn(t.values),(r=!wi(t[0]))&&(i*=i)):t=xh(t.increment)),Ji(e,n?Ce(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Gn,h=0,u=t.length,f,d;u--;)r?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,r||h===a||wi(a)?h:h+Xe(a)}:xh(t))},hf=function(t,e,n,i){return Ji(je(t)?!e:n===!0?!!(n=0):!i,function(){return je(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},f0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},p0=function(t,e){return function(n){return t(parseFloat(n))+(e||Xe(n))}},m0=function(t,e,n){return df(t,e,0,1,n)},uf=function(t,e,n){return Ji(n,function(i){return t[~~e(i)]})},g0=function s(t,e,n){var i=e-t;return je(t)?uf(t,s(0,t.length),e):Ji(n,function(r){return(i+(r-t)%i)%i+t})},_0=function s(t,e,n){var i=e-t,r=i*2;return je(t)?uf(t,s(0,t.length-1),e):Ji(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},as=function(t){return t.replace($m,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(jm);return hf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},df=function(t,e,n,i,r){var a=e-t,o=i-n;return Ji(r,function(l){return n+((l-t)/a*o||0)})},x0=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var a=Ue(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(je(t)&&!je(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=ns(je(t)?[]:{},t));if(!h){for(l in e)Lh.call(o,t,l,"get",e[l]);r=function(_){return Bh(_,o)||(a?t.p:t)}}}return Ji(n,r)},Hd=function(t,e,n){var i=t.labels,r=Gn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Rn=function(t,e,n){var i=t.vars,r=i[e],a=_e,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&qi.length&&Ro(),o&&(_e=o),h=l?r.apply(c,l):r.call(c),_e=a,h},ea=function(t){return Zi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!We),t.progress()<1&&Rn(t,"onInterrupt"),t},ts,ff=[],pf=function(t){if(t)if(t=!t.name&&t.default||t,bh()||t.headless){var e=t.name,n=Ce(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:oa,render:Bh,add:Lh,kill:F0,modifier:L0,rawVars:0},a={targetTest:0,get:0,getSetter:Bo,aliases:{},register:0};if(ss(),t!==i){if(vn[e])return;In(i,In(Po(t,r),a)),ns(i.prototype,ns(r,Po(t,a))),vn[i.prop=e]=i,t.targetTest&&(wo.push(i),wh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}$d(e,i),t.register&&t.register(Ke,i,ln)}else ff.push(t)},ce=255,na={aqua:[0,ce,ce],lime:[0,ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ce],navy:[0,0,128],white:[ce,ce,ce],olive:[128,128,0],yellow:[ce,ce,0],orange:[ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ce,0,0],pink:[ce,192,203],cyan:[0,ce,ce],transparent:[ce,ce,ce,0]},ah=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ce+.5|0},mf=function(t,e,n){var i=t?wi(t)?[t>>16,t>>8&ce,t&ce]:0:na.black,r,a,o,l,c,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),na[t])i=na[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ce,i&ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ce,t&ce]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Od),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=ah(l+1/3,r,a),i[1]=ah(l,r,a),i[2]=ah(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Sh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Od)||na.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ce,a=i[1]/ce,o=i[2]/ce,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},gf=function(t){var e=[],n=[],i=-1;return t.split(Ei).forEach(function(r){var a=r.match(Er)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Gd=function(t,e,n){var i="",r=(t+i).match(Ei),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=mf(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=gf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ei,"1").split(Er),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ei),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Ei=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in na)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),v0=/hsl[a]?\(/,Ih=function(t){var e=t.join(" "),n;if(Ei.lastIndex=0,Ei.test(e))return n=v0.test(e),t[1]=Gd(t[1],n),t[0]=Gd(t[0],n,gf(t[1])),!0},la,yn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,d,_=function g(m){var p=s()-i,v=m===!0,E,y,b,M;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,E=b-a,(E>0||v)&&(M=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,a+=E+(E>=r?4:r-E),y=1),v||(l=c(g)),y)for(d=0;d<o.length;d++)o[d](b,f,M,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Zd&&(!dh&&bh()&&(si=dh=window,Eh=si.document||{},Pn.gsap=Ke,(si.gsapVersions||(si.gsapVersions=[])).push(Ke.version),Jd(Co||si.GreenSockGlobals||!si.gsap&&si||{}),ff.forEach(pf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},la=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),la=0,c=oa},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,v){var E=p?function(y,b,M,w){m(y,b,M,w),u.remove(E)}:m;return u.remove(m),o[v?"unshift":"push"](E),ss(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),ss=function(){return!la&&yn.wake()},Jt={},y0=/^[\d.\-M][\d.\-,\s]/,M0=/["']/g,b0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(M0,"").trim():+c,i=l.substr(o+1).trim();return e},S0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},T0=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[b0(e[1])]:S0(t).split(",").map(Qd)):Jt._CE&&y0.test(t)?Jt._CE("",t):n},_f=function(t){return function(e){return 1-t(1-e)}},xf=function s(t,e){for(var n=t._first,i;n;)n instanceof Ge?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Sr=function(t,e){return t&&(Ce(t)?t:Jt[t]||T0(t))||e},Ar=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return on(t,function(o){Jt[o]=Pn[o]=r,Jt[a=o.toLowerCase()]=n;for(var l in r)Jt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[o+"."+l]=r[l]}),r},vf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},oh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/uh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Jm((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:vf(o);return r=uh/r,l.config=function(c,h){return s(t,c,h)},l},lh=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:vf(n);return i.config=function(r){return s(t,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ar(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;Ar("Elastic",oh("in"),oh("out"),oh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Ar("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ar("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ar("Circ",function(s){return-(qd(1-s*s)-1)});Ar("Sine",function(s){return s===1?1:-Zm(s*qm)+1});Ar("Back",lh("in"),lh("out"),lh());Jt.SteppedEase=Jt.steps=Pn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-he;return function(o){return((i*ha(0,a,o)|0)+r)*n}}};es.ease=Jt["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ah+=s+","+s+"Params,"});var Dh=function(t,e){this.id=Ym++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rh,this.set=e?e.getSetter:Bo},ca=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rs(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),la||yn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ss(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Oo(this,n),!r._dp||r.parent||nf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Kd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+kd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+kd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?is(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Io(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(ha(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Uo(this),s0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ss(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Me(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ai(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Io(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=e0);var i=We;return We=n,Ph(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),We=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Hn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-he),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-he)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Ce(n)?n:tf,l=function(){var h=i.then;i.then=null,r&&r(),Ce(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ea(this)},s}();In(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var Ge=function(s){Xd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Mn(n.sortChildren),be&&ai(n.parent||be,Ti(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&rf(Ti(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return ra(0,arguments,this),this},e.from=function(i,r,a){return ra(1,arguments,this),this},e.fromTo=function(i,r,a,o){return ra(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ia(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ie(i,r,Hn(this,a),1),this},e.call=function(i,r,a){return ai(this,Ie.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ie(i,a,Hn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,ia(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,ia(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Me(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,v,E,y,b,M,w;if(this!==be&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,E=this._ts,p=!E,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Me(h%m),h===l?(g=this._repeat,f=c):(b=Me(h/m),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=is(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),M&&g&1&&(f=c-f,w=1),g!==b&&!this._lock){var C=M&&b&1,x=C===(M&&g&1);if(g<b&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Me(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;xf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=c0(this,Me(o),Me(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!b&&(Rn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-he);break}}d=_}else{d=this._last;for(var T=i<0?i:f;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,r,a||We&&Ph(d)),f!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=T?-he:he);break}}d=_}}if(v&&!r&&(this.pause(),v.render(f>=o?0:-he)._zTime=f>=o?1:-1,this._ts))return this._start=y,Uo(this),this.render(i,r,a);this._onUpdate&&!r&&Rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Zi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Rn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(wi(r)||(r=Hn(this,r,i)),!(i instanceof ca)){if(je(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ue(i))return this.addLabel(i,r);if(Ce(i))i=Ie.delayedCall(0,i);else return this}return this!==i?ai(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ie?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ue(i)?this.removeLabel(i):Ce(i)?this.killTweensOf(i):(i.parent===this&&No(this,i),i===this._recent&&(this._recent=this._last),br(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(yn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Hn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ie.delayedCall(0,r||oa,a);return o.data="isPause",this._hasPause=1,ai(this,o,Hn(this,i))},e.removePause=function(i){var r=this._first;for(i=Hn(this,i);r;)r._start===i&&r.data==="isPause"&&Zi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Xi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Wn(i),l=this._first,c=wi(r),h;l;)l instanceof Ie?n0(l._targets,o)&&(c?(!Xi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Hn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Ie.to(a,In({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||he,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&rs(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,In({startAt:{time:Hn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Hd(this,Hn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Hd(this,Hn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Me(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return br(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),br(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Gn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ai(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Me(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;rs(a,a===be&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(be._ts&&(Kd(be,Io(i,be)),jd=yn.frame),yn.frame>=Bd){Bd+=bn.autoSleep||120;var r=be._first;if((!r||!r._ts)&&bn.autoSleep&&yn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||yn.sleep()}}},t}(ca);In(Ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var E0=function(t,e,n,i,r,a,o){var l=new ln(this._pt,t,e,0,1,Oh,null,r),c=0,h=0,u,f,d,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=as(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),f=n.match(rh)||[];u=rh.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?wr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=rh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Th.test(i)||p)&&(l.e=0),this._pt=l,l},Lh=function(t,e,n,i,r,a,o,l,c,h){Ce(i)&&(i=i(r||0,t,a));var u=t[e],f=n!=="get"?n:Ce(u)?c?t[e.indexOf("set")||!Ce(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ce(u)?c?P0:bf:Uh,_;if(Ue(i)&&(~i.indexOf("random(")&&(i=as(i)),i.charAt(1)==="="&&(_=wr(f,i)+(Xe(f)||0),(_||_===0)&&(i=_))),!h||f!==i||vh)return!isNaN(f*i)&&i!==""?(_=new ln(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?D0:Sf,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Fo(e,i),E0.call(this,t,e,f,i,d,l||bn.stringFilter,c))},w0=function(t,e,n,i,r){if(Ce(t)&&(t=sa(t,r,e,n,i)),!oi(t)||t.style&&t.nodeType||je(t)||Yd(t))return Ue(t)?sa(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=sa(t[o],r,e,n,i);return a},Fh=function(t,e,n,i,r,a){var o,l,c,h;if(vn[t]&&(o=new vn[t]).init(r,o.rawVars?e[t]:w0(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new ln(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==ts))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Xi,vh,Nh=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!Mh,y=t.timeline,b,M,w,C,x,T,P,L,I,N,k,B,O;if(y&&(!f||!r)&&(r="none"),t._ease=Sr(r,es.ease),t._yEase=u?_f(Sr(u===!0?r:u,es.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(L=m[0]?Yi(m[0]).harness:0,B=L&&i[L.prop],b=Po(i,wh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?Eo:t0),g._lazy=0),a){if(Zi(t._startAt=Ie.set(m,In({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Rn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We||!o&&!d)&&t._startAt.revert(Eo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),w=In({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Mn(l),immediateRender:o,stagger:0,parent:p},b),B&&(w[L.prop]=B),Zi(t._startAt=Ie.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We?t._startAt.revert(Eo):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Mn(l)||l&&!_,M=0;M<m.length;M++){if(x=m[M],P=x._gsap||Ch(m)[M]._gsap,t._ptLookup[M]=N={},fh[P.id]&&qi.length&&Ro(),k=v===m?M:v.indexOf(x),L&&(I=new L).init(x,B||b,t,k,v)!==!1&&(t._pt=C=new ln(t._pt,x,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){N[X]=C}),I.priority&&(T=1)),!L||B)for(w in b)vn[w]&&(I=Fh(w,b,t,k,x,v))?I.priority&&(T=1):N[w]=C=Lh.call(t,x,w,"get",b[w],k,v,0,i.stringFilter);t._op&&t._op[M]&&t.kill(x,t._op[M]),E&&t._pt&&(Xi=t,be.killTweensOf(x,N,t.globalTime(e)),O=!t.parent,Xi=0),t._pt&&l&&(fh[P.id]=1)}T&&zh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!O,f&&e<=0&&y.render(Gn,!0,!0)},A0=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return vh=1,t.vars[e]="+=0",Nh(t,o),vh=0,l?aa(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Re(n)+Xe(u.e)),u.b&&(u.b=h.s+Xe(u.b))},C0=function(t,e){var n=t[0]?Yi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ns({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},R0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(je(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},sa=function(t,e,n,i,r){return Ce(t)?t.call(e,n,i,r):Ue(t)&&~t.indexOf("random(")?as(t):t},yf=Ah+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mf={};on(yf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Mf[s]=1});var Ie=function(s){Xd(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ia(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||be,E=(je(n)||Yd(n)?wi(n[0]):"length"in i)?[n]:Wn(n),y,b,M,w,C,x,T,P;if(o._targets=E.length?Ch(E):aa("GSAP target "+n+" not found. https://gsap.com",!bn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||To(c)||To(h)){if(i=o.vars,y=o.timeline=new Ge({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:E}),y.kill(),y.parent=y._dp=Ti(o),y._start=0,f||To(c)||To(h)){if(w=E.length,T=f&&lf(f),oi(f))for(C in f)~yf.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(b=0;b<w;b++)M=Po(i,Mf),M.stagger=0,p&&(M.yoyoEase=p),P&&ns(M,P),x=E[b],M.duration=+sa(c,Ti(o),b,x,E),M.delay=(+sa(h,Ti(o),b,x,E)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),y.to(x,M,T?T(b,x,E):0),y._ease=Jt.none;y.duration()?c=h=0:o.timeline=0}else if(_){ia(In(y.vars.defaults,{ease:"none"})),y._ease=Sr(_.ease||i.ease||"none");var L=0,I,N,k;if(je(_))_.forEach(function(B){return y.to(E,B,">")}),y.duration();else{M={};for(C in _)C==="ease"||C==="easeEach"||R0(C,_[C],M,_.easeEach);for(C in M)for(I=M[C].sort(function(B,O){return B.t-O.t}),L=0,b=0;b<I.length;b++)N=I[b],k={ease:N.e,duration:(N.t-(b?I[b-1].t:0))/100*c},k[C]=N.v,y.to(E,k,L),L+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!Mh&&(Xi=Ti(o),be.killTweensOf(E),Xi=0),ai(v,Ti(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Me(v._time)&&Mn(u)&&a0(Ti(o))&&v.data!=="nested")&&(o._tTime=-he,o.render(Math.max(0,-h)||0)),m&&rf(Ti(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-he&&!h?l:i<he?0:i,f,d,_,g,m,p,v,E,y;if(!c)l0(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(f=Me(u%g),u===l?(_=this._repeat,f=c):(m=Me(u/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,f=c-f),m=is(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(E&&this._yEase&&xf(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Me(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(sf(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!o&&u&&!r&&!m&&(Rn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ph(this,i,r,a),Rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ph(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Zi(this,1),!r&&!(h&&!o)&&(u||o||p)&&(Rn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){la||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Nh(this,c),h=this._ease(c/this._dur),A0(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Oo(this,0),this.parent||ef(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!We),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Xi&&Xi.vars.overwrite!==!0)._first||ea(this),this.parent&&a!==this.timeline.totalDuration()&&rs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Wn(i):o,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!r||r==="all")&&r0(o,l))return r==="all"&&(this._pt=0),ea(this);for(u=this._op=this._op||[],r!=="all"&&(Ue(r)&&(g={},on(r,function(v){return g[v]=1}),r=g),r=C0(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(u[p]=r,_=f,d={}):(d=u[p]=u[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&No(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&ea(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ra(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return ra(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return be.killTweensOf(i,r,a)},t}(ca);In(Ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(s){Ie[s]=function(){var t=new Ge,e=gh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Uh=function(t,e,n){return t[e]=n},bf=function(t,e,n){return t[e](n)},P0=function(t,e,n,i){return t[e](i.fp,n)},I0=function(t,e,n){return t.setAttribute(e,n)},Bo=function(t,e){return Ce(t[e])?bf:Lo(t[e])&&t.setAttribute?I0:Uh},Sf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},D0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Oh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},L0=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},F0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?No(this,e,"_pt"):e.dep||(n=1),e=i;return!n},N0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},ln=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Sf,this.d=l||this,this.set=c||Uh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=N0,this.m=n,this.mt=r,this.tween=i},s}();on(Ah+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return wh[s]=1});Pn.TweenMax=Pn.TweenLite=Ie;Pn.TimelineLite=Pn.TimelineMax=Ge;be=new Ge({sortChildren:!1,defaults:es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bn.stringFilter=Ih;var Tr=[],Ao={},U0=[],Wd=0,O0=0,ch=function(t){return(Ao[t]||U0).map(function(e){return e()})},yh=function(){var t=Date.now(),e=[];t-Wd>2&&(ch("matchMediaInit"),Tr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=si.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ch("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wd=t,ch("matchMedia"))},Tf=function(){function s(e,n){this.selector=n&&_h(n),this.data=[],this._r=[],this.isReverted=!1,this.id=O0++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ce(n)&&(r=i,i=n,n=Ce);var a=this,o=function(){var c=_e,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=_h(r)),_e=a,u=i.apply(a,arguments),Ce(u)&&a._r.push(u),_e=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ce?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ie&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ge?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ie)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Tr.length;a--;)Tr[a].id===this.id&&Tr.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),B0=function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){oi(n)||(n={matches:n});var a=new Tf(0,r||this.scope),o=a.conditions={},l,c,h;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=si.matchMedia(n[c]),l&&(Tr.indexOf(a)<0&&Tr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(yh):l.addEventListener("change",yh)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Do={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return pf(i)})},timeline:function(t){return new Ge(t)},getTweensOf:function(t,e){return be.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ue(t)&&(t=Wn(t)[0]);var r=Yi(t||{}).get,a=n?tf:Qd;return n==="native"&&(n=""),t&&(e?a((vn[e]&&vn[e].get||r)(t,e,n,i)):function(o,l,c){return a((vn[o]&&vn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Wn(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=vn[e],o=Yi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ts._pt=0,u.init(t,n?h+n:h,ts,0,[t]),u.render(1,u),ts._pt&&Bh(1,ts)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ke.to(t,In((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Sr(t.ease,es.ease)),zd(es,t||{})},config:function(t){return zd(bn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!vn[o]&&!Pn[o]&&aa(e+" effect requires "+o+" plugin.")}),sh[e]=function(o,l,c){return n(Wn(o),In(l||{},r),c)},a&&(Ge.prototype[e]=function(o,l,c){return this.add(sh[e](o,oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=Sr(e)},parseEase:function(t,e){return arguments.length?Sr(t,e):Jt},getById:function(t){return be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ge(t),i,r;for(n.smoothChildTiming=Mn(t.smoothChildTiming),be.remove(n),n._dp=0,n._time=n._tTime=be._time,i=be._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ie&&i.vars.onComplete===i._targets[0]))&&ai(n,i,i._start-i._delay),i=r;return ai(be,n,0),n},context:function(t,e){return t?new Tf(t,e):_e},matchMedia:function(t){return new B0(t)},matchMediaRefresh:function(){return Tr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||yh()},addEventListener:function(t,e){var n=Ao[t]||(Ao[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ao[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:g0,wrapYoyo:_0,distribute:lf,random:hf,snap:cf,normalize:m0,getUnit:Xe,clamp:u0,splitColor:mf,toArray:Wn,selector:_h,mapRange:df,pipe:f0,unitize:p0,interpolate:x0,shuffle:of},install:Jd,effects:sh,ticker:yn,updateRoot:Ge.updateRoot,plugins:vn,globalTimeline:be,core:{PropTween:ln,globals:$d,Tween:Ie,Timeline:Ge,Animation:ca,getCache:Yi,_removeLinkedListItem:No,reverting:function(){return We},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return Mh=t}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Do[s]=Ie[s]});yn.add(Ge.updateRoot);ts=Do.to({},{duration:0});var z0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},k0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=z0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},hh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ue(r)&&(l={},on(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}k0(o,r)}}}},Ke=Do.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)We?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},hh("roundProps",xh),hh("modifiers"),hh("snap",cf))||Do;Ie.version=Ge.version=Ke.version="3.14.2";Zd=1;bh()&&ss();var V0=Jt.Power0,H0=Jt.Power1,G0=Jt.Power2,W0=Jt.Power3,X0=Jt.Power4,q0=Jt.Linear,Y0=Jt.Quad,Z0=Jt.Cubic,J0=Jt.Quart,$0=Jt.Quint,j0=Jt.Strong,K0=Jt.Elastic,Q0=Jt.Back,tg=Jt.SteppedEase,eg=Jt.Bounce,ng=Jt.Sine,ig=Jt.Expo,rg=Jt.Circ;var Ef,$i,ls,Xh,Ir,sg,wf,qh,ag=function(){return typeof window<"u"},Ci={},Pr=180/Math.PI,cs=Math.PI/180,os=Math.atan2,Af=1e8,Yh=/([A-Z])/g,og=/(left|right|width|margin|padding|x)/i,lg=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cg=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hg=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ug=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},dg=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Nf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Uf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},fg=function(t,e,n){return t.style[e]=n},pg=function(t,e,n){return t.style.setProperty(e,n)},mg=function(t,e,n){return t._gsap[e]=n},gg=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},_g=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},xg=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Se="transform",Sn=Se+"Origin",vg=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Ci&&r){if(this.tfm=this.tfm||{},t!=="transform")t=li[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ai(i,o)}):this.tfm[t]=a.x?a[t]:Ai(i,t),t===Sn&&(this.tfm.zOrigin=a.zOrigin);else return li.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Se)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,e,"")),t=Se}(r||e)&&this.props.push(t,e,r[t])},Of=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},yg=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Yh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=qh(),(!r||!r.isStart)&&!n[Se]&&(Of(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bf=function(t,e){var n={target:t,props:[],revert:yg,save:vg};return t._gsap||Ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},zf,Hh=function(t,e){var n=$i.createElementNS?$i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):$i.createElement(t);return n&&n.style?n:$i.createElement(t)},Dn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,hs(e)||e,1)||""},Cf="O,Moz,ms,Ms,Webkit".split(","),hs=function(t,e,n){var i=e||Ir,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Cf[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Cf[a]:"")+t},Gh=function(){ag()&&window.document&&(Ef=window,$i=Ef.document,ls=$i.documentElement,Ir=Hh("div")||{style:{}},sg=Hh("div"),Se=hs(Se),Sn=Se+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zf=!!hs("perspective"),qh=Ke.core.reverting,Xh=1)},Rf=function(t){var e=t.ownerSVGElement,n=Hh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ls.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ls.removeChild(n),r},Pf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},kf=function(t){var e,n;try{e=t.getBBox()}catch{e=Rf(t),n=1}return e&&(e.width||e.height)||n||(e=Rf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Pf(t,["x","cx","x1"])||0,y:+Pf(t,["y","cy","y1"])||0,width:0,height:0}:e},Vf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kf(t))},Ki=function(t,e){if(e){var n=t.style,i;e in Ci&&e!==Sn&&(e=Se),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yh,"-$1").toLowerCase())):n.removeAttribute(e)}},ji=function(t,e,n,i,r,a){var o=new ln(t._pt,e,n,0,1,a?Uf:Nf);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},If={deg:1,rad:1,turn:1},Mg={grid:1,flex:1},Qi=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ir.style,l=og.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!r||If[i]||If[a])return r;if(a!=="px"&&!f&&(r=s(t,e,n,"px")),p=t.getCTM&&Vf(t),(d||a==="%")&&(Ci[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Re(d?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===$i||!g.appendChild)&&(g=$i.body),m=g._gsap,m&&d&&m.width&&l&&m.time===yn.time&&!m.uncache)return Re(r/m.width*u);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,_=t[h],v?t.style[e]=v:Ki(t,e)}else(d||a==="%")&&!Mg[Dn(g,"display")]&&(o.position=Dn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ir),_=Ir[h],g.removeChild(Ir),o.position="absolute";return l&&d&&(m=Yi(g),m.time=yn.time,m.width=g[h]),Re(f?_*r/u:_&&r?u/_*r:0)},Ai=function(t,e,n,i){var r;return Xh||Gh(),e in li&&e!=="transform"&&(e=li[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ci[e]&&e!=="transform"?(r=fa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ko(Dn(t,Sn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=zo[e]&&zo[e](t,e,n)||Dn(t,e)||Rh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Qi(t,e,r,n)+n:r},bg=function(t,e,n,i){if(!n||n==="none"){var r=hs(e,t,1),a=r&&Dn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Dn(t,"borderTopColor"))}var o=new ln(this._pt,t.style,e,0,1,Oh),l=0,c=0,h,u,f,d,_,g,m,p,v,E,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Dn(t,e)||i,g?t.style[e]=g:Ki(t,e)),h=[n,i],Ih(h),n=h[0],i=h[1],f=n.match(Er)||[],b=i.match(Er)||[],b.length){for(;u=Er.exec(i);)m=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),m.charAt(1)==="="&&(m=wr(d,m)+y),p=parseFloat(m),E=m.substr((p+"").length),l=Er.lastIndex-E.length,E||(E=E||bn.units[e]||y,l===i.length&&(i+=E,o.e+=E)),y!==E&&(d=Qi(t,e,g,E)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Uf:Nf;return Th.test(i)&&(o.e=0),this._pt=o,o},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sg=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Df[n]||n,e[1]=Df[i]||i,e.join(" ")},Tg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ci[o]&&(l=1,o=o==="transformOrigin"?Sn:Se),Ki(n,o);l&&(Ki(n,Se),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fa(n,1),a.uncache=1,Of(i)))}},zo={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new ln(t._pt,e,n,0,0,Tg);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},da=[1,0,0,1,0,0],Hf={},Gf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Lf=function(t){var e=Dn(t,Se);return Gf(e)?da:e.substr(7).match(Sh).map(Re)},Zh=function(t,e){var n=t._gsap||Yi(t),i=t.style,r=Lf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?da:r):(r===da&&!t.offsetParent&&t!==ls&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ls.appendChild(t)),r=Lf(t),l?i.display=l:Ki(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ls.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Wh=function(t,e,n,i,r,a){var o=t._gsap,l=r||Zh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],E=e.split(" "),y=parseFloat(E[0])||0,b=parseFloat(E[1])||0,M,w,C,x;n?l!==da&&(w=d*m-_*g)&&(C=y*(m/w)+b*(-g/w)+(g*v-m*p)/w,x=y*(-_/w)+b*(d/w)-(d*v-_*p)/w,y=C,b=x):(M=kf(t),y=M.x+(~E[0].indexOf("%")?y/100*M.width:y),b=M.y+(~(E[1]||E[0]).indexOf("%")?b/100*M.height:b)),i||i!==!1&&o.smooth?(p=y-c,v=b-h,o.xOffset=u+(p*d+v*g)-p,o.yOffset=f+(p*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Sn]="0px 0px",a&&(ji(a,o,"xOrigin",c,y),ji(a,o,"yOrigin",h,b),ji(a,o,"xOffset",u,o.xOffset),ji(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+b)},fa=function(t,e){var n=t._gsap||new Dh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Dn(t,Sn)||"0",h,u,f,d,_,g,m,p,v,E,y,b,M,w,C,x,T,P,L,I,N,k,B,O,X,Q,et,st,At,Ut,Zt,Ht;return h=u=f=g=m=p=v=E=y=0,d=_=1,n.svg=!!(t.getCTM&&Vf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),i.scale=i.rotate=i.translate="none"),w=Zh(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Wh(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,M=n.yOrigin||0,w!==da&&(P=w[0],L=w[1],I=w[2],N=w[3],h=k=w[4],u=B=w[5],w.length===6?(d=Math.sqrt(P*P+L*L),_=Math.sqrt(N*N+I*I),g=P||L?os(L,P)*Pr:0,v=I||N?os(I,N)*Pr+g:0,v&&(_*=Math.abs(Math.cos(v*cs))),n.svg&&(h-=b-(b*P+M*I),u-=M-(b*L+M*N))):(Ht=w[6],Ut=w[7],et=w[8],st=w[9],At=w[10],Zt=w[11],h=w[12],u=w[13],f=w[14],C=os(Ht,At),m=C*Pr,C&&(x=Math.cos(-C),T=Math.sin(-C),O=k*x+et*T,X=B*x+st*T,Q=Ht*x+At*T,et=k*-T+et*x,st=B*-T+st*x,At=Ht*-T+At*x,Zt=Ut*-T+Zt*x,k=O,B=X,Ht=Q),C=os(-I,At),p=C*Pr,C&&(x=Math.cos(-C),T=Math.sin(-C),O=P*x-et*T,X=L*x-st*T,Q=I*x-At*T,Zt=N*T+Zt*x,P=O,L=X,I=Q),C=os(L,P),g=C*Pr,C&&(x=Math.cos(C),T=Math.sin(C),O=P*x+L*T,X=k*x+B*T,L=L*x-P*T,B=B*x-k*T,P=O,k=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Re(Math.sqrt(P*P+L*L+I*I)),_=Re(Math.sqrt(B*B+Ht*Ht)),C=os(k,B),v=Math.abs(C)>2e-4?C*Pr:0,y=Zt?1/(Zt<0?-Zt:Zt):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gf(Dn(t,Se)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Re(d),n.scaleY=Re(_),n.rotation=Re(g)+o,n.rotationX=Re(m)+o,n.rotationY=Re(p)+o,n.skewX=v+o,n.skewY=E+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Sn]=ko(c)),n.xOffset=n.yOffset=0,n.force3D=bn.force3D,n.renderTransform=n.svg?wg:zf?Wf:Eg,n.uncache=0,n},ko=function(t){return(t=t.split(" "))[0]+" "+t[1]},kh=function(t,e,n){var i=Xe(e);return Re(parseFloat(e)+parseFloat(Qi(t,"x",n+"px",i)))+i},Eg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wf(t,e)},Cr="0deg",ua="0px",Rr=") ",Wf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,E=n.zOrigin,y="",b=p==="auto"&&t&&t!==1||p===!0;if(E&&(u!==Cr||h!==Cr)){var M=parseFloat(h)*cs,w=Math.sin(M),C=Math.cos(M),x;M=parseFloat(u)*cs,x=Math.cos(M),a=kh(v,a,w*x*-E),o=kh(v,o,-Math.sin(M)*-E),l=kh(v,l,C*x*-E+E)}m!==ua&&(y+="perspective("+m+Rr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||a!==ua||o!==ua||l!==ua)&&(y+=l!==ua||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rr),c!==Cr&&(y+="rotate("+c+Rr),h!==Cr&&(y+="rotateY("+h+Rr),u!==Cr&&(y+="rotateX("+u+Rr),(f!==Cr||d!==Cr)&&(y+="skew("+f+", "+d+Rr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Rr),v.style[Se]=y||"translate(0, 0)"},wg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,E=parseFloat(a),y=parseFloat(o),b,M,w,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=cs,c*=cs,b=Math.cos(l)*u,M=Math.sin(l)*u,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=cs,x=Math.tan(c-h),x=Math.sqrt(1+x*x),w*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,M*=x)),b=Re(b),M=Re(M),w=Re(w),C=Re(C)):(b=u,C=f,M=w=0),(E&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(E=Qi(d,"x",a,"px"),y=Qi(d,"y",o,"px")),(_||g||m||p)&&(E=Re(E+_-(_*b+g*w)+m),y=Re(y+g-(_*M+g*C)+p)),(i||r)&&(x=d.getBBox(),E=Re(E+i/100*x.width),y=Re(y+r/100*x.height)),x="matrix("+b+","+M+","+w+","+C+","+E+","+y+")",d.setAttribute("transform",x),v&&(d.style[Se]=x)},Ag=function(t,e,n,i,r){var a=360,o=Ue(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Pr:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Af)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Af)%a-~~(c/a)*a)),t._pt=f=new ln(t._pt,e,n,i,c,cg),f.e=h,f.u="deg",t._props.push(n),f},Ff=function(t,e){for(var n in e)t[n]=e[n];return t},Cg=function(t,e,n){var i=Ff({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Se]=e,o=fa(n,1),Ki(n,Se),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Se],a[Se]=e,o=fa(n,1),a[Se]=c);for(l in Ci)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=Xe(c),_=Xe(h),u=d!==_?Qi(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new ln(t._pt,o,l,u,f-u,Vh),t._pt.u=_||0,t._props.push(l));Ff(o,i)};on("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});zo[t>1?"border"+s:s]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ai(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,u)}});var Jh={name:"css",register:Gh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,_,g,m,p,v,E,y,b,M,w,C,x;Xh||Gh(),this.styles=this.styles||Bf(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(vn[g]&&Fh(g,e,n,i,t,r)))){if(d=typeof h,_=zo[g],d==="function"&&(h=h.call(n,i,t,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=as(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ei.lastIndex=0,Ei.test(c)||(m=Xe(c),p=Xe(h),p?m!==p&&(c=Qi(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ue(c)&&~c.indexOf("random(")&&(c=as(c)),Xe(c+"")||c==="auto"||(c+=bn.units[g]||Xe(Ai(t,g))||""),(c+"").charAt(1)==="="&&(c=Ai(t,g))):c=Ai(t,g),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in li&&(g==="autoAlpha"&&(f===1&&Ai(t,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),ji(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=li[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Ci,E){if(this.styles.save(g),x=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Dn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=Dn(t,"perspective"),T?t.style.perspective=T:Ki(t,"perspective")}u=parseFloat(h)}if(y||(b=t._gsap,b.renderTransform&&!e.parseTransform||fa(t,e.parseTransform),M=e.smoothOrigin!==!1&&b.smooth,y=this._pt=new ln(this._pt,o,Se,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new ln(this._pt,b,"scaleY",b.scaleY,(v?wr(b.scaleY,v+u):u)-b.scaleY||0,Vh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Sn,0,o[Sn]),h=Sg(h),b.svg?Wh(t,h,0,M,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&ji(this,b,"zOrigin",b.zOrigin,p),ji(this,o,g,ko(c),ko(h)));continue}else if(g==="svgOrigin"){Wh(t,h,1,M,0,this);continue}else if(g in Hf){Ag(this,b,g,f,v?wr(f,v+h):h);continue}else if(g==="smoothOrigin"){ji(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){Cg(this,h,t);continue}}else g in o||(g=hs(g)||g);if(E||(u||u===0)&&(f||f===0)&&!lg.test(h)&&g in o)m=(c+"").substr((f+"").length),u||(u=0),p=Xe(h)||(g in bn.units?bn.units[g]:m),m!==p&&(f=Qi(t,g,c,p)),this._pt=new ln(this._pt,E?b:o,g,f,(v?wr(f,v+u):u)-f,!E&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?dg:Vh),this._pt.u=p||0,E&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=ug):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=hg);else if(g in o)bg.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,r);else if(g!=="parseTransform"){Fo(g,h);continue}E||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}w&&zh(this)},render:function(t,e){if(e.tween._time||!qh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ai,aliases:li,getSetter:function(t,e,n){var i=li[e];return i&&i.indexOf(",")<0&&(e=i),e in Ci&&e!==Sn&&(t._gsap.x||Ai(t,"x"))?n&&wf===n?e==="scale"?gg:mg:(wf=n||{})&&(e==="scale"?_g:xg):t.style&&!Lo(t.style[e])?fg:~e.indexOf("-")?pg:Bo(t,e)},core:{_removeProperty:Ki,_getMatrix:Zh}};Ke.utils.checkPrefix=hs;Ke.core.getStyleSaver=Bf;(function(s,t,e,n){var i=on(s+","+t+","+e,function(r){Ci[r]=1});on(t,function(r){bn.units[r]="deg",Hf[r]=1}),li[i[13]]=s+","+t,on(n,function(r){var a=r.split(":");li[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){bn.units[s]="px"});Ke.registerPlugin(Jh);var K=Ke.registerPlugin(Jh)||Ke,nS=K.core.Tween;var Hl="182";var xp=0,Lu=1,vp=2;var Va=1,Gl=2,Hs=3,Oi=0,Je=1,ve=2,gi=0,Or=1,dn=2,Fu=3,Nu=4,yp=5,or=100,Mp=101,bp=102,Sp=103,Tp=104,Ep=200,wp=201,Ap=202,Cp=203,fl=204,pl=205,Rp=206,Pp=207,Ip=208,Dp=209,Lp=210,Fp=211,Np=212,Up=213,Op=214,Wl=0,Xl=1,ql=2,Br=3,Yl=4,Zl=5,Jl=6,$l=7,jl=0,Bp=1,zp=2,ti=0,Uu=1,Ou=2,Bu=3,Ha=4,zu=5,ku=6,Vu=7;var bu=300,mr=301,Gr=302,Kl=303,Ql=304,Ga=306,ui=1e3,Nn=1001,ml=1002,Ve=1003,kp=1004;var Wa=1005;var Ze=1006,tc=1007;var gr=1008;var En=1009,Hu=1010,Gu=1011,Gs=1012,ec=1013,ei=1014,ni=1015,_i=1016,nc=1017,ic=1018,Ws=1020,Wu=35902,Xu=35899,qu=1021,Yu=1022,qn=1023,di=1026,_r=1027,Zu=1028,rc=1029,Wr=1030,sc=1031;var ac=1033,Xa=33776,qa=33777,Ya=33778,Za=33779,oc=35840,lc=35841,cc=35842,hc=35843,uc=36196,dc=37492,fc=37496,pc=37488,mc=37489,gc=37490,_c=37491,xc=37808,vc=37809,yc=37810,Mc=37811,bc=37812,Sc=37813,Tc=37814,Ec=37815,wc=37816,Ac=37817,Cc=37818,Rc=37819,Pc=37820,Ic=37821,Dc=36492,Lc=36494,Fc=36495,Nc=36283,Uc=36284,Oc=36285,Bc=36286;var ba=2300,gl=2301,dl=2302,Su=2400,Tu=2401,Eu=2402;var Vp=3200;var zc=0,Hp=1,Gi="",hn="srgb",zr="srgb-linear",Sa="linear",ee="srgb";var Ur=7680;var wu=519,Gp=512,Wp=513,Xp=514,kc=515,qp=516,Yp=517,Vc=518,Zp=519,_l=35044;var Ju="300 es",jn=2e3,Ta=2001;function $u(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jp(){let s=Ea("canvas");return s.style.display="block",s}var Xf={},Cs=null;function wa(...s){let t="THREE."+s.shift();Cs?Cs("log",t,...s):console.log(t,...s)}function Pt(...s){let t="THREE."+s.shift();Cs?Cs("warn",t,...s):console.warn(t,...s)}function It(...s){let t="THREE."+s.shift();Cs?Cs("error",t,...s):console.error(t,...s)}function Rs(...s){let t=s.join(" ");t in Xf||(Xf[t]=!0,Pt(...s))}function $p(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $h=Math.PI/180,xl=180/Math.PI;function ar(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function Pg(s,t){return(s%t+t)%t}function jh(s,t,e){return(1-e)*s+e*t}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=l*f+c*d+h*_+u*g;m<0&&(f=-f,d=-d,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,l=l*p+f*o,c=c*p+d*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+_*o,u=u*p+g*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-o*d,t[e+2]=c*_+h*d+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kh.copy(this).projectOnVector(t),this.sub(Kh)}reflect(t){return this.sub(Kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kh=new F,qf=new zi,Bt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],E=i[4],y=i[7],b=i[2],M=i[5],w=i[8];return r[0]=a*g+o*v+l*b,r[3]=a*m+o*E+l*M,r[6]=a*p+o*y+l*w,r[1]=c*g+h*v+u*b,r[4]=c*m+h*E+u*M,r[7]=c*p+h*y+u*w,r[2]=f*g+d*v+_*b,r[5]=f*m+d*E+_*M,r[8]=f*p+d*y+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qh.makeScale(t,e)),this}rotate(t){return this.premultiply(Qh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qh=new Bt,Yf=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zf=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ig(){let s={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ee&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zr]:{primaries:t,whitePoint:n,transfer:Sa,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Yf,fromXYZ:Zf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}var $t=Ig();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var us,vl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=Ea("canvas")),us.width=t.width,us.height=t.height;let i=us.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dg=0,Ps=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(tu(i[a].image)):r.push(tu(i[a]))}else r=tu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function tu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Lg=0,eu=new F,xi=(()=>{class s extends Bi{constructor(e=s.DEFAULT_IMAGE,n=s.DEFAULT_MAPPING,i=Nn,r=Nn,a=Ze,o=gr,l=qn,c=En,h=s.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=ar(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Pt(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=bu,s.DEFAULT_ANISOTROPY=1,s})(),Te=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(d+1)/2,b=(p+1)/2,M=(h+f)/4,w=(u+g)/4,C=(_+m)/4;return E>y&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=M/n,r=w/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=w/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-g)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new xi(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Aa=class extends xi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends xi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Ho.subVectors(this.max,pa),ds.subVectors(t.a,pa),fs.subVectors(t.b,pa),ps.subVectors(t.c,pa),tr.subVectors(fs,ds),er.subVectors(ps,fs),Dr.subVectors(ds,ps);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Dr.z,Dr.y,tr.z,0,-tr.x,er.z,0,-er.x,Dr.z,0,-Dr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Dr.y,Dr.x,0];return!nu(e,ds,fs,ps,Ho)||(e=[1,0,0,0,1,0,0,0,1],!nu(e,ds,fs,ps,Ho))?!1:(Go.crossVectors(tr,er),e=[Go.x,Go.y,Go.z],nu(e,ds,fs,ps,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ri=[new F,new F,new F,new F,new F,new F,new F,new F],Zn=new F,Vo=new fi,ds=new F,fs=new F,ps=new F,tr=new F,er=new F,Dr=new F,pa=new F,Ho=new F,Go=new F,Lr=new F;function nu(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Lr.fromArray(s,r);let o=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=t.dot(Lr),c=e.dot(Lr),h=n.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fg=new fi,ma=new F,iu=new F,lr=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(iu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(iu)),this.expandByPoint(ma.copy(t.center).sub(iu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pi=new F,ru=new F,Wo=new F,nr=new F,su=new F,Xo=new F,au=new F,Is=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ru.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(ru);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Wo),o=nr.dot(this.direction),l=-nr.dot(Wo),c=nr.lengthSq(),h=Math.abs(1-a*a),u,f,d,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ru).addScaledVector(Wo,f),d}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);let n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,i,r){su.subVectors(e,t),Xo.subVectors(n,t),au.crossVectors(su,Xo);let a=this.direction.dot(au),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,t);let l=o*this.direction.dot(Xo.crossVectors(nr,Xo));if(l<0)return null;let c=o*this.direction.dot(su.cross(nr));if(c<0||l+c>a)return null;let h=-o*nr.dot(au);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,_,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),a=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ng,t,Ug)}lookAt(t,e,n){let i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ir.crossVectors(n,Ln),ir.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ir.crossVectors(n,Ln)),ir.normalize(),qo.crossVectors(Ln,ir),i[0]=ir.x,i[4]=qo.x,i[8]=Ln.x,i[1]=ir.y,i[5]=qo.y,i[9]=Ln.y,i[2]=ir.z,i[6]=qo.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],E=n[7],y=n[11],b=n[15],M=i[0],w=i[4],C=i[8],x=i[12],T=i[1],P=i[5],L=i[9],I=i[13],N=i[2],k=i[6],B=i[10],O=i[14],X=i[3],Q=i[7],et=i[11],st=i[15];return r[0]=a*M+o*T+l*N+c*X,r[4]=a*w+o*P+l*k+c*Q,r[8]=a*C+o*L+l*B+c*et,r[12]=a*x+o*I+l*O+c*st,r[1]=h*M+u*T+f*N+d*X,r[5]=h*w+u*P+f*k+d*Q,r[9]=h*C+u*L+f*B+d*et,r[13]=h*x+u*I+f*O+d*st,r[2]=_*M+g*T+m*N+p*X,r[6]=_*w+g*P+m*k+p*Q,r[10]=_*C+g*L+m*B+p*et,r[14]=_*x+g*I+m*O+p*st,r[3]=v*M+E*T+y*N+b*X,r[7]=v*w+E*P+y*k+b*Q,r[11]=v*C+E*L+y*B+b*et,r[15]=v*x+E*I+y*O+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15],v=l*d-c*f,E=o*d-c*u,y=o*f-l*u,b=a*d-c*h,M=a*f-l*h,w=a*u-o*h;return e*(g*v-m*E+p*y)-n*(_*v-m*b+p*M)+i*(_*E-g*b+p*w)-r*(_*y-g*M+m*w)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],v=u*m*c-g*f*c+g*l*d-o*m*d-u*l*p+o*f*p,E=_*f*c-h*m*c-_*l*d+a*m*d+h*l*p-a*f*p,y=h*g*c-_*u*c+_*o*d-a*g*d-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*f+a*g*f+h*o*m-a*u*m,M=e*v+n*E+i*y+r*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/M;return t[0]=v*w,t[1]=(g*f*r-u*m*r-g*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*w,t[4]=E*w,t[5]=(h*m*r-_*f*r+_*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*w,t[8]=y*w,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*p-e*u*p)*w,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=b*w,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*w,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,_=r*u,g=a*h,m=a*u,p=o*u,v=l*c,E=l*h,y=l*u,b=n.x,M=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+y)*b,i[2]=(_-E)*b,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(f+p))*M,i[6]=(m+v)*M,i[7]=0,i[8]=(_+E)*w,i[9]=(m-v)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=ms.set(i[0],i[1],i[2]).length(),a=ms.set(i[4],i[5],i[6]).length(),o=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Jn.copy(this);let c=1/r,h=1/a,u=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===jn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ta)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=jn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===jn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Ta)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new F,Jn=new pe,Ng=new F(0,0,0),Ug=new F(1,1,1),ir=new F,qo=new F,Ln=new F,Jf=new pe,$f=new zi,ki=(()=>{class s{constructor(e=0,n=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $f.setFromEuler(this),this.setFromQuaternion($f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),Ca=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Og=0,jf=new F,gs=new zi,Ii=new pe,Yo=new F,ga=new F,Bg=new F,zg=new zi,Kf=new F(1,0,0),Qf=new F(0,1,0),tp=new F(0,0,1),ep={type:"added"},kg={type:"removed"},_s={type:"childadded",child:null},ou={type:"childremoved",child:null},un=(()=>{class s extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,n=new ki,i=new zi,r=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Bt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,n){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yo.copy(e):Yo.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ga,Yo,this.up):Ii.lookAt(Yo,ga,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Ii),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ep),_s.child=e,this.dispatchEvent(_s),_s.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kg),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ep),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>jr(mn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>mn({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(e.animations,c))}}if(n){let l=o(e.geometries),c=o(e.materials),h=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}}return s.DEFAULT_UP=new F(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),$n=new F,Di=new F,lu=new F,Li=new F,xs=new F,vs=new F,np=new F,cu=new F,hu=new F,uu=new F,du=new Te,fu=new Te,pu=new Te,Ni=class s{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$n.subVectors(t,e),i.cross($n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$n.subVectors(i,e),Di.subVectors(n,e),lu.subVectors(t,e);let a=$n.dot($n),o=$n.dot(Di),l=$n.dot(lu),c=Di.dot(Di),h=Di.dot(lu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return du.setScalar(0),fu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(t,e),fu.fromBufferAttribute(t,n),pu.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(du,r.x),a.addScaledVector(fu,r.y),a.addScaledVector(pu,r.z),a}static isFrontFacing(t,e,n,i){return $n.subVectors(n,e),Di.subVectors(t,e),$n.cross(Di).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),$n.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;xs.subVectors(i,n),vs.subVectors(r,n),cu.subVectors(t,n);let l=xs.dot(cu),c=vs.dot(cu);if(l<=0&&c<=0)return e.copy(n);hu.subVectors(t,i);let h=xs.dot(hu),u=vs.dot(hu);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xs,a);uu.subVectors(t,r);let d=xs.dot(uu),_=vs.dot(uu);if(_>=0&&d<=_)return e.copy(r);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(vs,o);let m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return np.subVectors(r,i),o=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(np,o);let p=1/(m+g+f);return a=g*p,o=f*p,e.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function mu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Pg(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=mu(a,r,t+1/3),this.g=mu(a,r,t),this.b=mu(a,r,t-1/3)}return $t.colorSpaceToWorking(this,i),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=jp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return $t.workingToColorSpace(tn.copy(this),t),Math.round(qt(tn.r*255,0,255))*65536+Math.round(qt(tn.g*255,0,255))*256+Math.round(qt(tn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(tn.copy(this),e);let n=tn.r,i=tn.g,r=tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=hn){$t.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,i=tn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(rr),this.setHSL(rr.h+t,rr.s+e,rr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rr),t.getHSL(Zo);let n=jh(rr.h,Zo.h,e),i=jh(rr.s,Zo.s,e),r=jh(rr.l,Zo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Mt;Mt.NAMES=jp;var Vg=0,Oe=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Or,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},en=class extends Oe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new F,Jo=new Lt,Hg=0,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jo.fromBufferAttribute(this,e),Jo.applyMatrix3(t),this.setXY(e,Jo.x,Jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var Ra=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Pa=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gg=0,Xn=new pe,gu=new un,ys=new F,Fn=new fi,_a=new fi,ke=new F,Qt=class s extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?Pa:Ra)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return gu.lookAt(t),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(Fn.min,_a.min),Fn.expandByPoint(ke),ke.addVectors(Fn.max,_a.max),Fn.expandByPoint(ke)):(Fn.expandByPoint(_a.min),Fn.expandByPoint(_a.max))}Fn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ke.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),ke.add(ys)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new F,l[C]=new F;let c=new F,h=new F,u=new F,f=new Lt,d=new Lt,_=new Lt,g=new F,m=new F;function p(C,x,T){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,T),h.sub(c),u.sub(c),d.sub(f),_.sub(f);let P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),o[C].add(g),o[x].add(g),o[T].add(g),l[C].add(m),l[x].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,x=v.length;C<x;++C){let T=v[C],P=T.start,L=T.count;for(let I=P,N=P+L;I<N;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let E=new F,y=new F,b=new F,M=new F;function w(C){b.fromBufferAttribute(i,C),M.copy(b);let x=o[C];E.copy(x),E.sub(b.multiplyScalar(b.dot(x))).normalize(),y.crossVectors(M,x);let P=y.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,x=v.length;C<x;++C){let T=v[C],P=T.start,L=T.count;for(let I=P,N=P+L;I<N;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new xe(f,h,u)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ip=new pe,Fr=new Is,$o=new lr,rp=new F,jo=new F,Ko=new F,Qo=new F,_u=new F,tl=new F,sp=new F,el=new F,wt=class extends un{constructor(t=new Qt,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_u.fromBufferAttribute(u,t),a?tl.addScaledVector(_u,h):tl.addScaledVector(_u.sub(e),h))}e.add(tl)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),Fr.copy(t.ray).recast(t.near),!($o.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere($o,rp)===null||Fr.origin.distanceToSquared(rp)>(t.far-t.near)**2))&&(ip.copy(r).invert(),Fr.copy(t.ray).applyMatrix4(ip),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fr)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=a[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=E;y<b;y+=3){let M=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);i=nl(this,p,t,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let v=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);i=nl(this,a,t,n,c,h,u,v,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=a[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=E;y<b;y+=3){let M=y,w=y+1,C=y+2;i=nl(this,p,t,n,c,h,u,M,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let v=m,E=m+1,y=m+2;i=nl(this,a,t,n,c,h,u,v,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Wg(s,t,e,n,i,r,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Oi,o),l===null)return null;el.copy(o),el.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(el);return c<e.near||c>e.far?null:{distance:c,point:el.clone(),object:s}}function nl(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,jo),s.getVertexPosition(l,Ko),s.getVertexPosition(c,Qo);let h=Wg(s,t,e,n,jo,Ko,Qo,sp);if(h){let u=new F;Ni.getBarycoord(sp,jo,Ko,Qo,u),i&&(h.uv=Ni.getInterpolatedAttribute(i,o,l,c,u,new Lt)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,o,l,c,u,new Lt)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};Ni.getNormal(jo,Ko,Qo,f.normal),h.face=f,h.barycoord=u}return h}var Ds=class s extends Qt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function _(g,m,p,v,E,y,b,M,w,C,x){let T=y/w,P=b/C,L=y/2,I=b/2,N=M/2,k=w+1,B=C+1,O=0,X=0,Q=new F;for(let et=0;et<B;et++){let st=et*P-I;for(let At=0;At<k;At++){let Ut=At*T-L;Q[g]=Ut*v,Q[m]=st*E,Q[p]=N,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=M>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(At/w),u.push(1-et/C),O+=1}}for(let et=0;et<C;et++)for(let st=0;st<w;st++){let At=f+st+k*et,Ut=f+st+k*(et+1),Zt=f+(st+1)+k*(et+1),Ht=f+(st+1)+k*et;l.push(At,Ut,Ht),l.push(Ut,Zt,Ht),X+=6}o.addGroup(d,X,x),d+=X,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function sn(s){let t={};for(let e=0;e<s.length;e++){let n=Xr(s[e]);for(let i in n)t[i]=n[i]}return t}function Xg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ju(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Kp={clone:Xr,merge:sn},qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Oe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=Xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ia=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sr=new F,ap=new Lt,op=new Lt,qe=class extends Ia{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($h*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan($h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,ap,op),e.subVectors(op,ap)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($h*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=-90,bs=1,bl=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qe(Ms,bs,t,e);i.layers=this.layers,this.add(i);let r=new qe(Ms,bs,t,e);r.layers=this.layers,this.add(r);let a=new qe(Ms,bs,t,e);a.layers=this.layers,this.add(a);let o=new qe(Ms,bs,t,e);o.layers=this.layers,this.add(o);let l=new qe(Ms,bs,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ms,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Da=class extends xi{constructor(t=[],e=mr,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},La=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Da(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:gi});r.uniforms.tEquirect.value=e;let a=new wt(i,r),o=e.minFilter;return e.minFilter===gr&&(e.minFilter=Ze),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Ye=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fs=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fa=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new F,Na=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kr=class extends Oe{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,xa=new F,Ts=new F,Es=new F,ws=new Lt,va=new Lt,Qp=new pe,il=new F,ya=new F,rl=new F,lp=new Lt,xu=new Lt,cp=new Lt,Ns=class extends un{constructor(t=new kr){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new Qt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sl(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Na(n,3,0,!1)),Ss.setAttribute("uv",new Na(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new Lt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),Qp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-Es.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;sl(il.set(-.5,-.5,0),Es,a,Ts,i,r),sl(ya.set(.5,-.5,0),Es,a,Ts,i,r),sl(rl.set(.5,.5,0),Es,a,Ts,i,r),lp.set(0,0),xu.set(1,0),cp.set(1,1);let o=t.ray.intersectTriangle(il,ya,rl,!1,xa);if(o===null&&(sl(ya.set(-.5,.5,0),Es,a,Ts,i,r),xu.set(0,1),o=t.ray.intersectTriangle(il,rl,ya,!1,xa),o===null))return;let l=t.ray.origin.distanceTo(xa);l<t.near||l>t.far||e.push({distance:l,point:xa.clone(),uv:Ni.getInterpolation(xa,il,ya,rl,lp,xu,cp,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function sl(s,t,e,n,i,r){ws.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(va.x=r*ws.x-i*ws.y,va.y=i*ws.x+r*ws.y):va.copy(ws),s.copy(t),s.x+=va.x,s.y+=va.y,s.applyMatrix4(Qp)}var Tl=class extends xi{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ve,h=Ve,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vu=new F,Jg=new F,$g=new Bt,ci=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=vu.subVectors(n,e).cross(Jg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$g.getNormalMatrix(t),i=this.coplanarPoint(vu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nr=new lr,jg=new Lt(.5,.5),al=new F,Us=class{constructor(t=new ci,e=new ci,n=new ci,i=new ci,r=new ci,a=new ci){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],v=r[12],E=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,p-_,b-v).normalize(),i[1].setComponents(c+a,d+h,p+_,b+v).normalize(),i[2].setComponents(c+o,d+u,p+g,b+E).normalize(),i[3].setComponents(c-o,d-u,p-g,b-E).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-y).normalize(),e===jn)i[5].setComponents(c+l,d+f,p+m,b+y).normalize();else if(e===Ta)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);let e=jg.distanceTo(t.center);return Nr.radius=.7071067811865476+e,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(al.x=i.normal.x>0?t.max.x:t.min.x,al.y=i.normal.y>0?t.max.y:t.min.y,al.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pi=class extends Oe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},El=new F,wl=new F,hp=new pe,Ma=new Is,ol=new lr,yu=new F,up=new F,Os=class extends un{constructor(t=new Qt,e=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)El.fromBufferAttribute(e,i-1),wl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=El.distanceTo(wl);t.setAttribute("lineDistance",new Yt(n,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(i),ol.radius+=r,t.ray.intersectsSphere(ol)===!1)return;hp.copy(i).invert(),Ma.copy(t.ray).applyMatrix4(hp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){let p=h.getX(g),v=h.getX(g+1),E=ll(this,t,Ma,l,p,v,g);E&&e.push(E)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(d),p=ll(this,t,Ma,l,g,m,_-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){let p=ll(this,t,Ma,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){let g=ll(this,t,Ma,l,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ll(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(El.fromBufferAttribute(o,i),wl.fromBufferAttribute(o,r),e.distanceSqToSegment(El,wl,yu,up)>n)return;yu.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(yu);if(!(c<t.near||c>t.far))return{distance:c,point:up.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var dp=new F,fp=new F,Bs=class extends Os{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)dp.fromBufferAttribute(e,i),fp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+dp.distanceTo(fp);t.setAttribute("lineDistance",new Yt(n,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var He=class extends Oe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pp=new pe,Au=new Is,cl=new lr,hl=new F,nn=class extends un{constructor(t=new Qt,e=new He){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=r,t.ray.intersectsSphere(cl)===!1)return;pp.copy(i).invert(),Au.copy(t.ray).applyMatrix4(pp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){let m=c.getX(_);hl.fromBufferAttribute(u,m),mp(hl,m,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)hl.fromBufferAttribute(u,_),mp(hl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function mp(s,t,e,n,i,r,a){let o=Au.distanceSqToPoint(s);if(o<e){let l=new F;Au.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Vi=class extends xi{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},cr=class extends xi{constructor(t,e,n=ei,i,r,a,o=Ve,l=Ve,c,h=di,u=1){if(h!==di&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Al=class extends cr{constructor(t,e=ei,n=mr,i,r,a=Ve,o=Ve,l,c=di){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ua=class extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Tn=class s extends Qt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],_=0,g=[],m=n/2,p=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function v(){let y=new F,b=new F,M=0,w=(e-t)/n;for(let C=0;C<=r;C++){let x=[],T=C/r,P=T*(e-t)+t;for(let L=0;L<=i;L++){let I=L/i,N=I*l+o,k=Math.sin(N),B=Math.cos(N);b.x=P*k,b.y=-T*n+m,b.z=P*B,u.push(b.x,b.y,b.z),y.set(k,w,B).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-T),x.push(_++)}g.push(x)}for(let C=0;C<i;C++)for(let x=0;x<r;x++){let T=g[x][C],P=g[x+1][C],L=g[x+1][C+1],I=g[x][C+1];(t>0||x!==0)&&(h.push(T,P,I),M+=3),(e>0||x!==r-1)&&(h.push(P,L,I),M+=3)}c.addGroup(p,M,0),p+=M}function E(y){let b=_,M=new Lt,w=new F,C=0,x=y===!0?t:e,T=y===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),_++;let P=_;for(let L=0;L<=i;L++){let N=L/i*l+o,k=Math.cos(N),B=Math.sin(N);w.x=x*B,w.y=m*T,w.z=x*k,u.push(w.x,w.y,w.z),f.push(0,T,0),M.x=k*.5+.5,M.y=B*.5*T+.5,d.push(M.x,M.y),_++}for(let L=0;L<i;L++){let I=b+L,N=P+L;y===!0?h.push(N,N+1,I):h.push(N+1,N,I),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oa=class s extends Tn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cl=class s extends Qt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new F,y=new F,b=new F;for(let M=0;M<e.length;M+=3)d(e[M+0],E),d(e[M+1],y),d(e[M+2],b),l(E,y,b,v)}function l(v,E,y,b){let M=b+1,w=[];for(let C=0;C<=M;C++){w[C]=[];let x=v.clone().lerp(y,C/M),T=E.clone().lerp(y,C/M),P=M-C;for(let L=0;L<=P;L++)L===0&&C===M?w[C][L]=x:w[C][L]=x.clone().lerp(T,L/P)}for(let C=0;C<M;C++)for(let x=0;x<2*(M-C)-1;x++){let T=Math.floor(x/2);x%2===0?(f(w[C][T+1]),f(w[C+1][T]),f(w[C][T])):(f(w[C][T+1]),f(w[C+1][T+1]),f(w[C+1][T]))}}function c(v){let E=new F;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(v),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let v=new F;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let y=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;a.push(y,1-b)}_(),u()}function u(){for(let v=0;v<a.length;v+=6){let E=a[v+0],y=a[v+2],b=a[v+4],M=Math.max(E,y,b),w=Math.min(E,y,b);M>.9&&w<.1&&(E<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,E){let y=v*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function _(){let v=new F,E=new F,y=new F,b=new F,M=new Lt,w=new Lt,C=new Lt;for(let x=0,T=0;x<r.length;x+=9,T+=6){v.set(r[x+0],r[x+1],r[x+2]),E.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),M.set(a[T+0],a[T+1]),w.set(a[T+2],a[T+3]),C.set(a[T+4],a[T+5]),b.copy(v).add(E).add(y).divideScalar(3);let P=m(b);g(M,T+0,v,P),g(w,T+2,E,P),g(C,T+4,y,P)}}function g(v,E,y,b){b<0&&v.x===1&&(a[E]=v.x-1),y.x===0&&y.z===0&&(a[E]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var hr=class s extends Cl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Hi=class s extends Qt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let v=p*f-a;for(let E=0;E<c;E++){let y=E*u-r;_.push(y,-v,0),g.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let E=v+c*p,y=v+c*(p+1),b=v+1+c*(p+1),M=v+1+c*p;d.push(E,y,M),d.push(y,b,M)}this.setIndex(d),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ur=class s extends Qt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new F,_=new Lt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<i;g++){let m=g*(n+1);for(let p=0;p<n;p++){let v=p+m,E=v,y=v+n+1,b=v+n+2,M=v+1;o.push(E,y,M),o.push(y,b,M)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Kn=class s extends Qt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new F,f=new F,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let v=[],E=p/n,y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let M=b/e;u.x=-t*Math.cos(i+M*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+M*r)*Math.sin(a+E*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(M+y,1-E),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let E=h[p][v+1],y=h[p][v],b=h[p+1][v],M=h[p+1][v+1];(p!==0||a>0)&&d.push(E,y,M),(p!==n-1||l<Math.PI)&&d.push(y,b,M)}this.setIndex(d),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(g,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var dr=class s extends Qt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new F,u=new F,f=new F;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){let g=_/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){let g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,v=(i+1)*d+_;a.push(g,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Rl=class extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qn=class extends Oe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vr=class extends Qn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},mi=class extends Oe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pl=class extends Oe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Il=class extends Oe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ul(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Hr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends Hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tu:r=t,o=2*e-n;break;case Eu:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:a=t,l=2*n-e;break;case Eu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,v=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,E=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+v*a[c+b]+E*a[l+b]+y*a[u+b];return r}},Ll=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Fl=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ul(e,this.TimeBufferType),this.values=ul(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ul(t.times,Array),values:ul(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case gl:e=this.InterpolantFactoryMethodLinear;break;case dl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Rg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=gl;var fr=class extends Bn{constructor(t,e,n){super(t,e,n)}};fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=ba;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}};Nl.prototype.ValueTypeName="color";var Ul=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}};Ul.prototype.ValueTypeName="number";var Ol=class extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ba=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends Bn{constructor(t,e,n){super(t,e,n)}};pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=ba;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Bn{constructor(t,e,n,i){super(t,e,n,i)}};Bl.prototype.ValueTypeName="vector";var Cu={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},zl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new zl,Hc=(()=>{class s{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}return s.DEFAULT_MATERIAL_NAME="__DEFAULT",s})(),Fi={},Ru=class extends Error{constructor(t,e){super(t),this.response=e}},za=class extends Hc{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Cu.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Fi[t]!==void 0){Fi[t].push({onLoad:e,onProgress:n,onError:i});return}Fi[t]=[],Fi[t].push({onLoad:e,onProgress:n,onError:i});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0,g=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:E,value:y})=>{if(E)p.close();else{g+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let M=0,w=h.length;M<w;M++){let C=h[M];C.onProgress&&C.onProgress(b)}p.enqueue(y),v()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Ru(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Cu.add(`file:${t}`,c);let h=Fi[t];delete Fi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Fi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Fi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zs=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Mu=new pe,gp=new F,_p=new F,kl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gp.setFromMatrixPosition(t.matrixWorld),e.position.copy(gp),_p.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_p),e.updateMatrixWorld(),Mu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Pu=class extends kl{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},rn=class extends zs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ks=class extends Ia{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Iu=class extends kl{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Iu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ka=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vl=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ku="\\[\\]\\.:\\/",Kg=new RegExp("["+Ku+"]","g"),Qu="[^"+Ku+"]",Qg="[^"+Ku.replace("\\.","")+"]",t_=/((?:WC+[\/:])*)/.source.replace("WC",Qu),e_=/(WCOD+)?/.source.replace("WCOD",Qg),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),i_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),r_=new RegExp("^"+t_+e_+n_+i_+"$"),s_=["material","materials","bones","map"],Du=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=(()=>{class s{constructor(e,n,i){this.path=n,this.parsedPath=i||s.parseTrackName(n),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,n,i):new s(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kg,"")}static parseTrackName(e){let n=r_.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);s_.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,a=n.propertyIndex;if(e||(e=s.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!e.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[r];if(o===void 0){let h=n.nodeName;It("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=Du,s})();Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rS=new Float32Array(1);function td(s,t,e,n){let i=a_(n);switch(e){case qu:return s*t;case Zu:return s*t/i.components*i.byteLength;case rc:return s*t/i.components*i.byteLength;case Wr:return s*t*2/i.components*i.byteLength;case sc:return s*t*2/i.components*i.byteLength;case Yu:return s*t*3/i.components*i.byteLength;case qn:return s*t*4/i.components*i.byteLength;case ac:return s*t*4/i.components*i.byteLength;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ya:case Za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lc:case hc:return Math.max(s,16)*Math.max(t,8)/4;case oc:case cc:return Math.max(s,8)*Math.max(t,8)/2;case uc:case dc:case pc:case mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fc:case gc:case _c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Dc:case Lc:case Fc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nc:case Uc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Oc:case Bc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a_(s){switch(s){case En:case Hu:return{byteLength:1,components:1};case Gs:case Gu:case _i:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case ei:case ec:case ni:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function Sm(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function o_(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){let _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){let g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
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
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
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
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
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
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M_=`#ifdef USE_IRIDESCENCE
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
#endif`,b_=`#ifdef USE_BUMPMAP
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
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I_=`#define PI 3.141592653589793
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
} // validated`,D_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L_=`vec3 transformedNormal = objectNormal;
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
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
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
}`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
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
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
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
#endif`,ax=`uniform sampler2D dfgLUT;
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
}`,ox=`
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_x=`#if defined( USE_POINTS_UV )
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
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,bv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,Tv=`#define LAMBERT
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
}`,Ev=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Cv=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Iv=`#define STANDARD
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
}`,Dv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Fv=`#define TOON
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
}`,Nv=`uniform float size;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Bv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:h_,alphamap_pars_fragment:u_,alphatest_fragment:d_,alphatest_pars_fragment:f_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:__,begin_vertex:x_,beginnormal_vertex:v_,bsdfs:y_,iridescence_fragment:M_,bumpmap_pars_fragment:b_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:w_,color_fragment:A_,color_pars_fragment:C_,color_pars_vertex:R_,color_vertex:P_,common:I_,cube_uv_reflection_fragment:D_,defaultnormal_vertex:L_,displacementmap_pars_vertex:F_,displacementmap_vertex:N_,emissivemap_fragment:U_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:z_,envmap_fragment:k_,envmap_common_pars_fragment:V_,envmap_pars_fragment:H_,envmap_pars_vertex:G_,envmap_physical_pars_fragment:tx,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:q_,fog_fragment:Y_,fog_pars_fragment:Z_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:$_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:K_,lights_pars_begin:Q_,lights_toon_fragment:ex,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:rx,lights_physical_fragment:sx,lights_physical_pars_fragment:ax,lights_fragment_begin:ox,lights_fragment_maps:lx,lights_fragment_end:cx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:fx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:gx,map_particle_pars_fragment:_x,metalnessmap_fragment:xx,metalnessmap_pars_fragment:vx,morphinstance_vertex:yx,morphcolor_vertex:Mx,morphnormal_vertex:bx,morphtarget_pars_vertex:Sx,morphtarget_vertex:Tx,normal_fragment_begin:Ex,normal_fragment_maps:wx,normal_pars_fragment:Ax,normal_pars_vertex:Cx,normal_vertex:Rx,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Fx,opaque_fragment:Nx,packing:Ux,premultiplied_alpha_fragment:Ox,project_vertex:Bx,dithering_fragment:zx,dithering_pars_fragment:kx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:qx,skinbase_vertex:Yx,skinning_pars_vertex:Zx,skinning_vertex:Jx,skinnormal_vertex:$x,specularmap_fragment:jx,specularmap_pars_fragment:Kx,tonemapping_fragment:Qx,tonemapping_pars_fragment:tv,transmission_fragment:ev,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:av,background_vert:ov,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:hv,cube_vert:uv,cube_frag:dv,depth_vert:fv,depth_frag:pv,distance_vert:mv,distance_frag:gv,equirect_vert:_v,equirect_frag:xv,linedashed_vert:vv,linedashed_frag:yv,meshbasic_vert:Mv,meshbasic_frag:bv,meshlambert_vert:Sv,meshlambert_frag:Tv,meshmatcap_vert:Ev,meshmatcap_frag:wv,meshnormal_vert:Av,meshnormal_frag:Cv,meshphong_vert:Rv,meshphong_frag:Pv,meshphysical_vert:Iv,meshphysical_frag:Dv,meshtoon_vert:Lv,meshtoon_frag:Fv,points_vert:Nv,points_frag:Uv,shadow_vert:Ov,shadow_frag:Bv,sprite_vert:zv,sprite_frag:kv},ut={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},yi={basic:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:sn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:sn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:sn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:sn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:sn([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:sn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:sn([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:sn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:sn([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:sn([ut.common,ut.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:sn([ut.lights,ut.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};yi.physical={uniforms:sn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Gc={r:0,b:0,g:0},qr=new ki,Vv=new pe;function Hv(s,t,e,n,i,r,a){let o=new Mt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function g(E){let y=!1,b=_(E);b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,y){let b=_(y);b&&(b.isCubeTexture||b.mapping===Ga)?(h===void 0&&(h=new wt(new Ds(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Xr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qr.copy(y.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(qr)),h.material.toneMapped=$t.getTransfer(b.colorSpace)!==ee,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wt(new Hi(2,2),new On({name:"BackgroundMaterial",uniforms:Xr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$t.getTransfer(b.colorSpace)!==ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Gc,ju(s)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:g,addToRenderList:m,dispose:v}}function Gv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(T,P,L,I,N){let k=!1,B=u(I,L,P);r!==B&&(r=B,c(r.object)),k=d(T,I,L,N),k&&_(T,I,L,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(T,P,L,I),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function h(T){return s.deleteVertexArray(T)}function u(T,P,L){let I=L.wireframe===!0,N=n[T.id];N===void 0&&(N={},n[T.id]=N);let k=N[P.id];k===void 0&&(k={},N[P.id]=k);let B=k[I];return B===void 0&&(B=f(l()),k[I]=B),B}function f(T){let P=[],L=[],I=[];for(let N=0;N<e;N++)P[N]=0,L[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:I,object:T,attributes:{},index:null}}function d(T,P,L,I){let N=r.attributes,k=P.attributes,B=0,O=L.getAttributes();for(let X in O)if(O[X].location>=0){let et=N[X],st=k[X];if(st===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(st=T.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function _(T,P,L,I){let N={},k=P.attributes,B=0,O=L.getAttributes();for(let X in O)if(O[X].location>=0){let et=k[X];et===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(et=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(et=T.instanceColor));let st={};st.attribute=et,et&&et.data&&(st.data=et.data),N[X]=st,B++}r.attributes=N,r.attributesNum=B,r.index=I}function g(){let T=r.newAttributes;for(let P=0,L=T.length;P<L;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){let L=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;L[T]=1,I[T]===0&&(s.enableVertexAttribArray(T),I[T]=1),N[T]!==P&&(s.vertexAttribDivisor(T,P),N[T]=P)}function v(){let T=r.newAttributes,P=r.enabledAttributes;for(let L=0,I=P.length;L<I;L++)P[L]!==T[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function E(T,P,L,I,N,k,B){B===!0?s.vertexAttribIPointer(T,P,L,N,k):s.vertexAttribPointer(T,P,L,I,N,k)}function y(T,P,L,I){g();let N=I.attributes,k=L.getAttributes(),B=P.defaultAttributeValues;for(let O in k){let X=k[O];if(X.location>=0){let Q=N[O];if(Q===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let et=Q.normalized,st=Q.itemSize,At=t.get(Q);if(At===void 0)continue;let Ut=At.buffer,Zt=At.type,Ht=At.bytesPerElement,Y=Zt===s.INT||Zt===s.UNSIGNED_INT||Q.gpuType===ec;if(Q.isInterleavedBufferAttribute){let j=Q.data,mt=j.stride,Ot=Q.offset;if(j.isInstancedInterleavedBuffer){for(let rt=0;rt<X.locationSize;rt++)p(X.location+rt,j.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let rt=0;rt<X.locationSize;rt++)m(X.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let rt=0;rt<X.locationSize;rt++)E(X.location+rt,st/X.locationSize,Zt,et,mt*Ht,(Ot+st/X.locationSize*rt)*Ht,Y)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);T.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let j=0;j<X.locationSize;j++)E(X.location+j,st/X.locationSize,Zt,et,st*Ht,st/X.locationSize*j*Ht,Y)}}else if(B!==void 0){let et=B[O];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(X.location,et);break;case 3:s.vertexAttrib3fv(X.location,et);break;case 4:s.vertexAttrib4fv(X.location,et);break;default:s.vertexAttrib1fv(X.location,et)}}}}v()}function b(){C();for(let T in n){let P=n[T];for(let L in P){let I=P[L];for(let N in I)h(I[N].object),delete I[N];delete P[L]}delete n[T]}}function M(T){if(n[T.id]===void 0)return;let P=n[T.id];for(let L in P){let I=P[L];for(let N in I)h(I[N].object),delete I[N];delete P[L]}delete n[T.id]}function w(T){for(let P in n){let L=n[P];if(L[T.id]===void 0)continue;let I=L[T.id];for(let N in I)h(I[N].object),delete I[N];delete L[T.id]}}function C(){x(),a=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Wv(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==qn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==En&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ni&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:M}}function qv(s){let t=this,e=null,n=0,i=!1,r=!1,a=new ci,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,E=v*4,y=p.clippingState||null;l.value=y,y=h(_,f,E,d);for(let b=0;b!==E;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==g;++E,y+=4)a.copy(u[E]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Yv(s){let t=new WeakMap;function e(a,o){return o===Kl?a.mapping=mr:o===Ql&&(a.mapping=Gr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Kl||o===Ql)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new La(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xr=4,em=[.125,.215,.35,.446,.526,.582],Zr=20,Zv=256,Ja=new ks,nm=new Mt,ed=null,nd=0,id=0,rd=!1,Jv=new F,Xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Jv}=r;ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ed,nd,id),this._renderer.xr.enabled=rd,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:_i,format:qn,colorSpace:zr,depthBuffer:!1},i=im(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$v(r)),this._blurMaterial=Kv(r,t,e),this._ggxMaterial=jv(r,t,e)}return i}_compileMaterial(t){let e=new wt(new Qt,t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,i,r){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nm),u.toneMapping=ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new Ds,new en({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(nm),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Xs(i,y*b,E>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===mr||t.mapping===Gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-xr?n-_+xr:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,Xs(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Xs(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,Ja)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zr-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Zr;m>Zr&&Pt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zr}`);let p=[],v=0;for(let w=0;w<Zr;++w){let C=w/g,x=Math.exp(-C*C/2);p.push(x),w===0?v+=x:w<m&&(v+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let y=this._sizeLods[i],b=3*y*(i>E-xr?i-E+xr:0),M=4*(this._cubeSize-y);Xs(e,b,M,3*y,2*y),l.setRenderTarget(e),l.render(u,Ja)}};function $v(s){let t=[],e=[],n=[],i=s,r=s-xr+1+em.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-xr?l=em[a-s+xr-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*d),E=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let M=0;M<d;M++){let w=M%3*2/3-1,C=M>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(x,g*_*M),E.set(f,m*_*M);let T=[M,M,M,M,M,M];y.set(T,p*_*M)}let b=new Qt;b.setAttribute("position",new xe(v,g)),b.setAttribute("uv",new xe(E,m)),b.setAttribute("faceIndex",new xe(y,p)),n.push(new wt(b,null)),i>xr&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function im(s,t,e){let n=new Un(s,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jv(s,t,e){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Kv(s,t,e){let n=new Float32Array(Zr),i=new F(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rm(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function sm(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function Qv(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Kl||l===Ql,h=l===mr||l===Gr;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Xc(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Xc(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ty(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Rs("WebGLRenderer: "+n+" extension not supported."),i}}}function ey(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let v=d.array;g=d.version;for(let E=0,y=v.length;E<y;E+=3){let b=v[E+0],M=v[E+1],w=v[E+2];f.push(b,M,M,w,w,b)}}else if(_!==void 0){let v=_.array;g=_.version;for(let E=0,y=v.length/3-1;E<y;E+=3){let b=E+0,M=E+1,w=E+2;f.push(b,M,M,w,w,b)}}else return;let m=new($u(f)?Pa:Ra)(f,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ny(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v]*g[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ry(s,t,e){let n=new WeakMap,i=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var d=T;f!==void 0&&f.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,M=1;b>t.maxTextureSize&&(M=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*M*4*u),C=new Aa(w,b,M,u);C.type=ni,C.needsUpdate=!0;let x=y*4;for(let P=0;P<u;P++){let L=p[P],I=v[P],N=E[P],k=b*M*4*P;for(let B=0;B<L.count;B++){let O=B*x;_===!0&&(i.fromBufferAttribute(L,B),w[k+O+0]=i.x,w[k+O+1]=i.y,w[k+O+2]=i.z,w[k+O+3]=0),g===!0&&(i.fromBufferAttribute(I,B),w[k+O+4]=i.x,w[k+O+5]=i.y,w[k+O+6]=i.z,w[k+O+7]=0),m===!0&&(i.fromBufferAttribute(N,B),w[k+O+8]=i.x,w[k+O+9]=i.y,w[k+O+10]=i.z,w[k+O+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Lt(b,M)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function sy(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ay={[Uu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[Ha]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function oy(s,t,e,n,i){let r=new Un(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Un(t,e,{type:_i,depthBuffer:!1,stencilBuffer:!1}),o=new Qt;o.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let l=new Rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new wt(o,l),h=new ks(-1,1,1,-1,0,1),u=null,f=null,d=!1,_,g=null,m=[],p=!1;this.setSize=function(v,E){r.setSize(v,E),a.setSize(v,E);for(let y=0;y<m.length;y++){let b=m[y];b.setSize&&b.setSize(v,E)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;let E=r.width,y=r.height;for(let b=0;b<m.length;b++){let M=m[b];M.setSize&&M.setSize(E,y)}},this.begin=function(v,E){if(d||v.toneMapping===ti&&m.length===0)return!1;if(g=E,E!==null){let y=E.width,b=E.height;(r.width!==y||r.height!==b)&&this.setSize(y,b)}return p===!1&&v.setRenderTarget(r),_=v.toneMapping,v.toneMapping=ti,!0},this.hasRenderPass=function(){return p},this.end=function(v,E){v.toneMapping=_,d=!0;let y=r,b=a;for(let M=0;M<m.length;M++){let w=m[M];if(w.enabled!==!1&&(w.render(v,b,y,E),w.needsSwap!==!1)){let C=y;y=b,b=C}}if(u!==v.outputColorSpace||f!==v.toneMapping){u=v.outputColorSpace,f=v.toneMapping,l.defines={},$t.getTransfer(u)===ee&&(l.defines.SRGB_TRANSFER="");let M=ay[f];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(g),v.render(c,h),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Tm=new xi,od=new cr(1,1),Em=new Aa,wm=new Ml,Am=new Da,am=[],om=[],lm=new Float32Array(16),cm=new Float32Array(9),hm=new Float32Array(4);function Ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=am[i];if(r===void 0&&(r=new Float32Array(i),am[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zc(s,t){let e=om[t];e===void 0&&(e=new Int32Array(t),om[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ly(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function dy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;hm.set(n),s.uniformMatrix2fv(this.addr,!1,hm),ze(e,n)}}function fy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;cm.set(n),s.uniformMatrix3fv(this.addr,!1,cm),ze(e,n)}}function py(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;lm.set(n),s.uniformMatrix4fv(this.addr,!1,lm),ze(e,n)}}function my(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function _y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function vy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function My(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function by(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function Sy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(od.compareFunction=e.isReversedDepthBuffer()?Vc:kc,r=od):r=Tm,e.setTexture2D(t||r,i)}function Ty(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wm,i)}function Ey(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Am,i)}function wy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Em,i)}function Ay(s){switch(s){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return vy;case 36294:return yy;case 36295:return My;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return wy}}function Cy(s,t){s.uniform1fv(this.addr,t)}function Ry(s,t){let e=Ys(t,this.size,2);s.uniform2fv(this.addr,e)}function Py(s,t){let e=Ys(t,this.size,3);s.uniform3fv(this.addr,e)}function Iy(s,t){let e=Ys(t,this.size,4);s.uniform4fv(this.addr,e)}function Dy(s,t){let e=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ly(s,t){let e=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fy(s,t){let e=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ny(s,t){s.uniform1iv(this.addr,t)}function Uy(s,t){s.uniform2iv(this.addr,t)}function Oy(s,t){s.uniform3iv(this.addr,t)}function By(s,t){s.uniform4iv(this.addr,t)}function zy(s,t){s.uniform1uiv(this.addr,t)}function ky(s,t){s.uniform2uiv(this.addr,t)}function Vy(s,t){s.uniform3uiv(this.addr,t)}function Hy(s,t){s.uniform4uiv(this.addr,t)}function Gy(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=od:a=Tm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Wy(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||wm,r[a])}function Xy(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Am,r[a])}function qy(s,t,e){let n=this.cache,i=t.length,r=Zc(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Em,r[a])}function Yy(s){switch(s){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Dy;case 35675:return Ly;case 35676:return Fy;case 5124:case 35670:return Ny;case 35667:case 35671:return Uy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Vy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}var ld=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ay(e.type)}},cd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yy(e.type)}},hd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},sd=/(\w+)(\])?(\[|\.)?/g;function um(s,t){s.seq.push(t),s.map[t.id]=t}function Zy(s,t,e){let n=s.name,i=n.length;for(sd.lastIndex=0;;){let r=sd.exec(n),a=sd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){um(e,c===void 0?new ld(o,s,t):new cd(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new hd(o),um(e,u)),e=u}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zy(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function dm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Jy=37297,$y=0;function jy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fm=new Bt;function Ky(s){$t._getMatrix(fm,$t.workingColorSpace,s);let t=`mat3( ${fm.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case Sa:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jy(s.getShaderSource(t),o)}else return r}function Qy(s,t){let e=Ky(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var tM={[Uu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[Ha]:"ACESFilmic",[ku]:"AgX",[Vu]:"Neutral",[zu]:"Custom"};function eM(s,t){let e=tM[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wc=new F;function nM(){$t.getLuminanceCoefficients(Wc);let s=Wc.x.toFixed(4),t=Wc.y.toFixed(4),e=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function rM(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sM(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ja(s){return s!==""}function mm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(s){return s.replace(aM,lM)}var oM=new Map;function lM(s,t){let e=Vt[t];if(e===void 0){let n=oM.get(t);if(n!==void 0)e=Vt[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ud(e)}var cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(s){return s.replace(cM,hM)}function hM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xm(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var uM={[Va]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function dM(s){return uM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fM={[mr]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function pM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var mM={[Gr]:"ENVMAP_MODE_REFRACTION"};function gM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _M={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[zp]:"ENVMAP_BLENDING_ADD"};function xM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_M[s.combine]||"ENVMAP_BLENDING_NONE"}function vM(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yM(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dM(e),c=pM(e),h=gM(e),u=xM(e),f=vM(e),d=iM(e),_=rM(r),g=i.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[xm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[xm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ti?eM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Qy("linearToOutputTexel",e.outputColorSpace),nM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),a=ud(a),a=mm(a,e),a=gm(a,e),o=ud(o),o=mm(o,e),o=gm(o,e),a=_m(a),o=_m(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+m+a,y=v+p+o,b=dm(i,i.VERTEX_SHADER,E),M=dm(i,i.FRAGMENT_SHADER,y);i.attachShader(g,b),i.attachShader(g,M),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g)||"",I=i.getShaderInfoLog(b)||"",N=i.getShaderInfoLog(M)||"",k=L.trim(),B=I.trim(),O=N.trim(),X=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,M);else{let et=pm(i,b,"vertex"),st=pm(i,M,"fragment");It("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+et+`
`+st)}else k!==""?Pt("WebGLProgram: Program Info Log:",k):(B===""||O==="")&&(Q=!1);Q&&(P.diagnostics={runnable:X,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(b),i.deleteShader(M),C=new qs(i,g),x=sM(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,Jy)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$y++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=M,this}var MM=0,dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fd(t),e.set(t,n)),n}},fd=class{constructor(t){this.id=MM++,this.code=t,this.usedTimes=0}};function bM(s,t,e,n,i,r,a){let o=new Ca,l=new dd,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,P,L,I){let N=L.fog,k=I.geometry,B=x.isMeshStandardMaterial?L.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||B),X=O&&O.mapping===Ga?O.image.height:null,Q=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Pt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=et!==void 0?et.length:0,At=0;k.morphAttributes.position!==void 0&&(At=1),k.morphAttributes.normal!==void 0&&(At=2),k.morphAttributes.color!==void 0&&(At=3);let Ut,Zt,Ht,Y;if(Q){let ie=yi[Q];Ut=ie.vertexShader,Zt=ie.fragmentShader}else Ut=x.vertexShader,Zt=x.fragmentShader,l.update(x),Ht=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);let j=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,rt=I.isBatchedMesh===!0,vt=!!x.map,kt=!!x.matcap,Xt=!!O,Kt=!!x.aoMap,ne=!!x.lightMap,zt=!!x.bumpMap,ye=!!x.normalMap,D=!!x.displacementMap,De=!!x.emissiveMap,te=!!x.metalnessMap,ue=!!x.roughnessMap,bt=x.anisotropy>0,R=x.clearcoat>0,S=x.dispersion>0,z=x.iridescence>0,Z=x.sheen>0,$=x.transmission>0,q=bt&&!!x.anisotropyMap,Tt=R&&!!x.clearcoatMap,ot=R&&!!x.clearcoatNormalMap,yt=R&&!!x.clearcoatRoughnessMap,Ft=z&&!!x.iridescenceMap,nt=z&&!!x.iridescenceThicknessMap,ct=Z&&!!x.sheenColorMap,xt=Z&&!!x.sheenRoughnessMap,St=!!x.specularMap,lt=!!x.specularColorMap,Gt=!!x.specularIntensityMap,U=$&&!!x.transmissionMap,ft=$&&!!x.thicknessMap,it=!!x.gradientMap,pt=!!x.alphaMap,tt=x.alphaTest>0,J=!!x.alphaHash,at=!!x.extensions,Nt=ti;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=s.toneMapping);let de={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ut,fragmentShader:Zt,defines:x.defines,customVertexShaderID:Ht,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:rt,batchingColor:rt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:zr,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:kt,envMap:Xt,envMapMode:Xt&&O.mapping,envMapCubeUVHeight:X,aoMap:Kt,lightMap:ne,bumpMap:zt,normalMap:ye,displacementMap:D,emissiveMap:De,normalMapObjectSpace:ye&&x.normalMapType===Hp,normalMapTangentSpace:ye&&x.normalMapType===zc,metalnessMap:te,roughnessMap:ue,anisotropy:bt,anisotropyMap:q,clearcoat:R,clearcoatMap:Tt,clearcoatNormalMap:ot,clearcoatRoughnessMap:yt,dispersion:S,iridescence:z,iridescenceMap:Ft,iridescenceThicknessMap:nt,sheen:Z,sheenColorMap:ct,sheenRoughnessMap:xt,specularMap:St,specularColorMap:lt,specularIntensityMap:Gt,transmission:$,transmissionMap:U,thicknessMap:ft,gradientMap:it,opaque:x.transparent===!1&&x.blending===Or&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:J,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:Kt&&g(x.aoMap.channel),lightMapUv:ne&&g(x.lightMap.channel),bumpMapUv:zt&&g(x.bumpMap.channel),normalMapUv:ye&&g(x.normalMap.channel),displacementMapUv:D&&g(x.displacementMap.channel),emissiveMapUv:De&&g(x.emissiveMap.channel),metalnessMapUv:te&&g(x.metalnessMap.channel),roughnessMapUv:ue&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:Tt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:St&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Gt&&g(x.specularIntensityMap.channel),transmissionMapUv:U&&g(x.transmissionMap.channel),thicknessMapUv:ft&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(vt||pt),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:At,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ve,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(T,x),E(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){let T=_[x.type],P;if(T){let L=yi[T];P=Kp.clone(L.uniforms)}else P=x.uniforms;return P}function b(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new yM(s,T,x,r),h.push(P),u.set(T,P)),P}function M(x){if(--x.usedTimes===0){let T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:C}}function SM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function TM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ym(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,f,d,_,g,m){let p=a(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,_,g,m){let p=a(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||TM),n.length>1&&n.sort(f||vm),i.length>1&&i.sort(f||vm)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function EM(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new ym,s.set(n,[a])):i>=r.length?(a=new ym,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function wM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Mt};break;case"SpotLight":e={position:new F,direction:new F,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function AM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var CM=0;function RM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PM(s){let t=new wM,e=AM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new pe,a=new pe;function o(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,v=0,E=0,y=0,b=0,M=0,w=0;c.sort(RM);for(let x=0,T=c.length;x<T;x++){let P=c[x],L=P.color,I=P.intensity,N=P.distance,k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Wr?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*I,u+=L.g*I,f+=L.b*I;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],I);w++}else if(P.isDirectionalLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,X=e.get(P);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=B,d++}else if(P.isSpotLight){let B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(L).multiplyScalar(I),B.distance=N,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[g]=B;let O=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[g]=O.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=k,y++}g++}else if(P.isRectAreaLight){let B=t.get(P);B.color.copy(L).multiplyScalar(I),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let O=P.shadow,X=e.get(P);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,X.shadowCameraNear=O.camera.near,X.shadowCameraFar=O.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=B,_++}else if(P.isHemisphereLight){let B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(I),B.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==E||C.numSpotShadows!==y||C.numSpotMaps!==b||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+b-M,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=E,C.numSpotShadows=y,C.numSpotMaps=b,C.numLightProbes=w,n.version=CM++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let E=c[p];if(E.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(E.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Mm(s){let t=new PM(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function IM(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Mm(s),t.set(i,[o])):r>=a.length?(o=new Mm(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`,FM=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],NM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],bm=new pe,$a=new F,ad=new F;function UM(s,t,e){let n=new Us,i=new Lt,r=new Lt,a=new Te,o=new Pl,l=new Il,c={},h=e.maxTextureSize,u={[Oi]:Je,[Je]:Oi,[ve]:ve},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:DM,fragmentShader:LM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new Qt;_.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new wt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let p=this.type;this.render=function(M,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;M.type===Gl&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),M.type=Va);let x=s.getRenderTarget(),T=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(gi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==this.type;I&&w.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=M.length;N<k;N++){let B=M[N],O=B.shadow;if(O===void 0){Pt("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let X=O.getFrameExtents();if(i.multiply(X),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,O.mapSize.y=r.y)),O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Hs){if(B.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Un(i.x,i.y,{format:Wr,type:_i,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new cr(i.x,i.y,ni),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=di,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ve,O.map.depthTexture.magFilter=Ve}else{B.isPointLight?(O.map=new La(i.x),O.map.depthTexture=new Al(i.x,ei)):(O.map=new Un(i.x,i.y),O.map.depthTexture=new cr(i.x,i.y,ei)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=di;let et=s.state.buffers.depth.getReversed();this.type===Va?(O.map.depthTexture.compareFunction=et?Vc:kc,O.map.depthTexture.minFilter=Ze,O.map.depthTexture.magFilter=Ze):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ve,O.map.depthTexture.magFilter=Ve)}O.camera.updateProjectionMatrix()}let Q=O.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<Q;et++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,et),s.clear();else{et===0&&(s.setRenderTarget(O.map),s.clear());let st=O.getViewport(et);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),L.viewport(a)}if(B.isPointLight){let st=O.camera,At=O.matrix,Ut=B.distance||st.far;Ut!==st.far&&(st.far=Ut,st.updateProjectionMatrix()),$a.setFromMatrixPosition(B.matrixWorld),st.position.copy($a),ad.copy(st.position),ad.add(FM[et]),st.up.copy(NM[et]),st.lookAt(ad),st.updateMatrixWorld(),At.makeTranslation(-$a.x,-$a.y,-$a.z),bm.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),O._frustum.setFromProjectionMatrix(bm,st.coordinateSystem,st.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),y(w,C,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===Hs&&v(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,T,P)};function v(M,w){let C=t.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Un(i.x,i.y,{format:Wr,type:_i})),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,C,f,g,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,C,d,g,null)}function E(M,w,C,x){let T=null,P=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=T.uuid,I=w.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let k=N[I];k===void 0&&(k=T.clone(),N[I]=k,w.addEventListener("dispose",b)),T=k}if(T.visible=w.visible,T.wireframe=w.wireframe,x===Hs?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let L=s.properties.get(T);L.light=C}return T}function y(M,w,C,x,T){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===Hs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);let I=t.update(M),N=M.material;if(Array.isArray(N)){let k=I.groups;for(let B=0,O=k.length;B<O;B++){let X=k[B],Q=N[X.materialIndex];if(Q&&Q.visible){let et=E(M,Q,x,T);M.onBeforeShadow(s,M,w,C,I,et,X),s.renderBufferDirect(C,null,I,et,M,X),M.onAfterShadow(s,M,w,C,I,et,X)}}}else if(N.visible){let k=E(M,N,x,T);M.onBeforeShadow(s,M,w,C,I,k,null),s.renderBufferDirect(C,null,I,k,M,null),M.onAfterShadow(s,M,w,C,I,k,null)}}let L=M.children;for(let I=0,N=L.length;I<N;I++)y(L[I],w,C,x,T)}function b(M){M.target.removeEventListener("dispose",b);for(let C in c){let x=c[C],T=M.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}var OM={[Wl]:Xl,[ql]:Jl,[Yl]:$l,[Br]:Zl,[Xl]:Wl,[Jl]:ql,[$l]:Yl,[Zl]:Br};function BM(s,t){function e(){let U=!1,ft=new Te,it=null,pt=new Te(0,0,0,0);return{setMask:function(tt){it!==tt&&!U&&(s.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){U=tt},setClear:function(tt,J,at,Nt,de){de===!0&&(tt*=Nt,J*=Nt,at*=Nt),ft.set(tt,J,at,Nt),pt.equals(ft)===!1&&(s.clearColor(tt,J,at,Nt),pt.copy(ft))},reset:function(){U=!1,it=null,pt.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,it=null,pt=null,tt=null;return{setReversed:function(J){if(ft!==J){let at=t.get("EXT_clip_control");J?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),ft=J;let Nt=tt;tt=null,this.setClear(Nt)}},getReversed:function(){return ft},setTest:function(J){J?j(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(J){it!==J&&!U&&(s.depthMask(J),it=J)},setFunc:function(J){if(ft&&(J=OM[J]),pt!==J){switch(J){case Wl:s.depthFunc(s.NEVER);break;case Xl:s.depthFunc(s.ALWAYS);break;case ql:s.depthFunc(s.LESS);break;case Br:s.depthFunc(s.LEQUAL);break;case Yl:s.depthFunc(s.EQUAL);break;case Zl:s.depthFunc(s.GEQUAL);break;case Jl:s.depthFunc(s.GREATER);break;case $l:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=J}},setLocked:function(J){U=J},setClear:function(J){tt!==J&&(ft&&(J=1-J),s.clearDepth(J),tt=J)},reset:function(){U=!1,it=null,pt=null,tt=null,ft=!1}}}function i(){let U=!1,ft=null,it=null,pt=null,tt=null,J=null,at=null,Nt=null,de=null;return{setTest:function(ie){U||(ie?j(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!U&&(s.stencilMask(ie),ft=ie)},setFunc:function(ie,ii,Mi){(it!==ie||pt!==ii||tt!==Mi)&&(s.stencilFunc(ie,ii,Mi),it=ie,pt=ii,tt=Mi)},setOp:function(ie,ii,Mi){(J!==ie||at!==ii||Nt!==Mi)&&(s.stencilOp(ie,ii,Mi),J=ie,at=ii,Nt=Mi)},setLocked:function(ie){U=ie},setClear:function(ie){de!==ie&&(s.clearStencil(ie),de=ie)},reset:function(){U=!1,ft=null,it=null,pt=null,tt=null,J=null,at=null,Nt=null,de=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,E=null,y=null,b=null,M=null,w=new Mt(0,0,0),C=0,x=!1,T=null,P=null,L=null,I=null,N=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,O=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=O>=2);let Q=null,et={},st=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Ut=new Te().fromArray(st),Zt=new Te().fromArray(At);function Ht(U,ft,it,pt){let tt=new Uint8Array(4),J=s.createTexture();s.bindTexture(U,J),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<it;at++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(ft+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return J}let Y={};Y[s.TEXTURE_2D]=Ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Br),zt(!1),ye(Lu),j(s.CULL_FACE),Kt(gi);function j(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function mt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ot(U,ft){return u[U]!==ft?(s.bindFramebuffer(U,ft),u[U]=ft,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function rt(U,ft){let it=d,pt=!1;if(U){it=f.get(ft),it===void 0&&(it=[],f.set(ft,it));let tt=U.textures;if(it.length!==tt.length||it[0]!==s.COLOR_ATTACHMENT0){for(let J=0,at=tt.length;J<at;J++)it[J]=s.COLOR_ATTACHMENT0+J;it.length=tt.length,pt=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,pt=!0);pt&&s.drawBuffers(it)}function vt(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let kt={[or]:s.FUNC_ADD,[Mp]:s.FUNC_SUBTRACT,[bp]:s.FUNC_REVERSE_SUBTRACT};kt[Sp]=s.MIN,kt[Tp]=s.MAX;let Xt={[Ep]:s.ZERO,[wp]:s.ONE,[Ap]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[Lp]:s.SRC_ALPHA_SATURATE,[Ip]:s.DST_COLOR,[Rp]:s.DST_ALPHA,[Cp]:s.ONE_MINUS_SRC_COLOR,[pl]:s.ONE_MINUS_SRC_ALPHA,[Dp]:s.ONE_MINUS_DST_COLOR,[Pp]:s.ONE_MINUS_DST_ALPHA,[Fp]:s.CONSTANT_COLOR,[Np]:s.ONE_MINUS_CONSTANT_COLOR,[Up]:s.CONSTANT_ALPHA,[Op]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(U,ft,it,pt,tt,J,at,Nt,de,ie){if(U===gi){g===!0&&(mt(s.BLEND),g=!1);return}if(g===!1&&(j(s.BLEND),g=!0),U!==yp){if(U!==m||ie!==x){if((p!==or||y!==or)&&(s.blendEquation(s.FUNC_ADD),p=or,y=or),ie)switch(U){case Or:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dn:s.blendFunc(s.ONE,s.ONE);break;case Fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",U);break}else switch(U){case Or:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fu:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",U);break}v=null,E=null,b=null,M=null,w.set(0,0,0),C=0,m=U,x=ie}return}tt=tt||ft,J=J||it,at=at||pt,(ft!==p||tt!==y)&&(s.blendEquationSeparate(kt[ft],kt[tt]),p=ft,y=tt),(it!==v||pt!==E||J!==b||at!==M)&&(s.blendFuncSeparate(Xt[it],Xt[pt],Xt[J],Xt[at]),v=it,E=pt,b=J,M=at),(Nt.equals(w)===!1||de!==C)&&(s.blendColor(Nt.r,Nt.g,Nt.b,de),w.copy(Nt),C=de),m=U,x=!1}function ne(U,ft){U.side===ve?mt(s.CULL_FACE):j(s.CULL_FACE);let it=U.side===Je;ft&&(it=!it),zt(it),U.blending===Or&&U.transparent===!1?Kt(gi):Kt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let pt=U.stencilWrite;o.setTest(pt),pt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),De(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){T!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),T=U)}function ye(U){U!==xp?(j(s.CULL_FACE),U!==P&&(U===Lu?s.cullFace(s.BACK):U===vp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),P=U}function D(U){U!==L&&(B&&s.lineWidth(U),L=U)}function De(U,ft,it){U?(j(s.POLYGON_OFFSET_FILL),(I!==ft||N!==it)&&(s.polygonOffset(ft,it),I=ft,N=it)):mt(s.POLYGON_OFFSET_FILL)}function te(U){U?j(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function ue(U){U===void 0&&(U=s.TEXTURE0+k-1),Q!==U&&(s.activeTexture(U),Q=U)}function bt(U,ft,it){it===void 0&&(Q===null?it=s.TEXTURE0+k-1:it=Q);let pt=et[it];pt===void 0&&(pt={type:void 0,texture:void 0},et[it]=pt),(pt.type!==U||pt.texture!==ft)&&(Q!==it&&(s.activeTexture(it),Q=it),s.bindTexture(U,ft||Y[U]),pt.type=U,pt.texture=ft)}function R(){let U=et[Q];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function Z(){try{s.texSubImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function $(){try{s.texSubImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function ot(){try{s.texStorage2D(...arguments)}catch(U){It("WebGLState:",U)}}function yt(){try{s.texStorage3D(...arguments)}catch(U){It("WebGLState:",U)}}function Ft(){try{s.texImage2D(...arguments)}catch(U){It("WebGLState:",U)}}function nt(){try{s.texImage3D(...arguments)}catch(U){It("WebGLState:",U)}}function ct(U){Ut.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ut.copy(U))}function xt(U){Zt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Zt.copy(U))}function St(U,ft){let it=c.get(ft);it===void 0&&(it=new WeakMap,c.set(ft,it));let pt=it.get(U);pt===void 0&&(pt=s.getUniformBlockIndex(ft,U.name),it.set(U,pt))}function lt(U,ft){let pt=c.get(ft).get(U);l.get(ft)!==pt&&(s.uniformBlockBinding(ft,pt,U.__bindingPointIndex),l.set(ft,pt))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,et={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,v=null,E=null,y=null,b=null,M=null,w=new Mt(0,0,0),C=0,x=!1,T=null,P=null,L=null,I=null,N=null,Ut.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:mt,bindFramebuffer:Ot,drawBuffers:rt,useProgram:vt,setBlending:Kt,setMaterial:ne,setFlipSided:zt,setCullFace:ye,setLineWidth:D,setPolygonOffset:De,setScissorTest:te,activeTexture:ue,bindTexture:bt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:z,texImage2D:Ft,texImage3D:nt,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:ot,texStorage3D:yt,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:Tt,scissor:ct,viewport:xt,reset:Gt}}function zM(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return d?new OffscreenCanvas(R,S):Ea("canvas")}function g(R,S,z){let Z=1,$=bt(R);if(($.width>z||$.height>z)&&(Z=z/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor(Z*$.width),Tt=Math.floor(Z*$.height);u===void 0&&(u=_(q,Tt));let ot=S?_(q,Tt):u;return ot.width=q,ot.height=Tt,ot.getContext("2d").drawImage(R,0,0,q,Tt),Pt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+Tt+")."),ot}else return"data"in R&&Pt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,S,z,Z,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===s.RED&&(z===s.FLOAT&&(q=s.R32F),z===s.HALF_FLOAT&&(q=s.R16F),z===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.R8UI),z===s.UNSIGNED_SHORT&&(q=s.R16UI),z===s.UNSIGNED_INT&&(q=s.R32UI),z===s.BYTE&&(q=s.R8I),z===s.SHORT&&(q=s.R16I),z===s.INT&&(q=s.R32I)),S===s.RG&&(z===s.FLOAT&&(q=s.RG32F),z===s.HALF_FLOAT&&(q=s.RG16F),z===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RG8UI),z===s.UNSIGNED_SHORT&&(q=s.RG16UI),z===s.UNSIGNED_INT&&(q=s.RG32UI),z===s.BYTE&&(q=s.RG8I),z===s.SHORT&&(q=s.RG16I),z===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(q=s.RGB16UI),z===s.UNSIGNED_INT&&(q=s.RGB32UI),z===s.BYTE&&(q=s.RGB8I),z===s.SHORT&&(q=s.RGB16I),z===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),z===s.UNSIGNED_INT&&(q=s.RGBA32UI),z===s.BYTE&&(q=s.RGBA8I),z===s.SHORT&&(q=s.RGBA16I),z===s.INT&&(q=s.RGBA32I)),S===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),S===s.RGBA){let Tt=$?Sa:$t.getTransfer(Z);z===s.FLOAT&&(q=s.RGBA32F),z===s.HALF_FLOAT&&(q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(q=Tt===ee?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(R,S){let z;return R?S===null||S===ei||S===Ws?z=s.DEPTH24_STENCIL8:S===ni?z=s.DEPTH32F_STENCIL8:S===Gs&&(z=s.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ei||S===Ws?z=s.DEPTH_COMPONENT24:S===ni?z=s.DEPTH_COMPONENT32F:S===Gs&&(z=s.DEPTH_COMPONENT16),z}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ve&&R.minFilter!==Ze?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){let S=R.target;S.removeEventListener("dispose",M),C(S),S.isVideoTexture&&h.delete(S)}function w(R){let S=R.target;S.removeEventListener("dispose",w),T(S)}function C(R){let S=n.get(R);if(S.__webglInit===void 0)return;let z=R.source,Z=f.get(z);if(Z){let $=Z[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(R),Object.keys(Z).length===0&&f.delete(z)}n.remove(R)}function x(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let z=R.source,Z=f.get(z);delete Z[S.__cacheKey],a.memory.textures--}function T(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let $=0;$<S.__webglFramebuffer[Z].length;$++)s.deleteFramebuffer(S.__webglFramebuffer[Z][$]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=R.textures;for(let Z=0,$=z.length;Z<$;Z++){let q=n.get(z[Z]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(R)}let P=0;function L(){P=0}function I(){let R=P;return R>=i.maxTextures&&Pt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function N(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function k(R,S){let z=n.get(R);if(R.isVideoTexture&&te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let Z=R.image;if(Z===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,S);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function B(R,S){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,S);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function O(R,S){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function X(R,S){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){j(z,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let Q={[ui]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[ml]:s.MIRRORED_REPEAT},et={[Ve]:s.NEAREST,[kp]:s.NEAREST_MIPMAP_NEAREST,[Wa]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[tc]:s.LINEAR_MIPMAP_NEAREST,[gr]:s.LINEAR_MIPMAP_LINEAR},st={[Gp]:s.NEVER,[Zp]:s.ALWAYS,[Wp]:s.LESS,[kc]:s.LEQUAL,[Xp]:s.EQUAL,[Vc]:s.GEQUAL,[qp]:s.GREATER,[Yp]:s.NOTEQUAL};function At(R,S){if(S.type===ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ze||S.magFilter===tc||S.magFilter===Wa||S.magFilter===gr||S.minFilter===Ze||S.minFilter===tc||S.minFilter===Wa||S.minFilter===gr)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Q[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,et[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ve||S.minFilter!==Wa&&S.minFilter!==gr||S.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ut(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",M));let Z=S.source,$=f.get(Z);$===void 0&&($={},f.set(Z,$));let q=N(S);if(q!==R.__cacheKey){$[q]===void 0&&($[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[q].usedTimes++;let Tt=$[R.__cacheKey];Tt!==void 0&&($[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&x(S)),R.__cacheKey=q,R.__webglTexture=$[q].texture}return z}function Zt(R,S,z){return Math.floor(Math.floor(R/z)/S)}function Ht(R,S,z,Z){let q=R.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,Z,S.data);else{q.sort((nt,ct)=>nt.start-ct.start);let Tt=0;for(let nt=1;nt<q.length;nt++){let ct=q[Tt],xt=q[nt],St=ct.start+ct.count,lt=Zt(xt.start,S.width,4),Gt=Zt(ct.start,S.width,4);xt.start<=St+1&&lt===Gt&&Zt(xt.start+xt.count-1,S.width,4)===lt?ct.count=Math.max(ct.count,xt.start+xt.count-ct.start):(++Tt,q[Tt]=xt)}q.length=Tt+1;let ot=s.getParameter(s.UNPACK_ROW_LENGTH),yt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ft=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let nt=0,ct=q.length;nt<ct;nt++){let xt=q[nt],St=Math.floor(xt.start/4),lt=Math.ceil(xt.count/4),Gt=St%S.width,U=Math.floor(St/S.width),ft=lt,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Gt,U,ft,it,z,Z,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ot),s.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ft)}}function Y(R,S,z){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let $=Ut(R,S),q=S.source;e.bindTexture(Z,R.__webglTexture,s.TEXTURE0+z);let Tt=n.get(q);if(q.version!==Tt.__version||$===!0){e.activeTexture(s.TEXTURE0+z);let ot=$t.getPrimaries($t.workingColorSpace),yt=S.colorSpace===Gi?null:$t.getPrimaries(S.colorSpace),Ft=S.colorSpace===Gi||ot===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let nt=g(S.image,!1,i.maxTextureSize);nt=ue(S,nt);let ct=r.convert(S.format,S.colorSpace),xt=r.convert(S.type),St=E(S.internalFormat,ct,xt,S.colorSpace,S.isVideoTexture);At(Z,S);let lt,Gt=S.mipmaps,U=S.isVideoTexture!==!0,ft=Tt.__version===void 0||$===!0,it=q.dataReady,pt=b(S,nt);if(S.isDepthTexture)St=y(S.format===_r,S.type),ft&&(U?e.texStorage2D(s.TEXTURE_2D,1,St,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,St,nt.width,nt.height,0,ct,xt,null));else if(S.isDataTexture)if(Gt.length>0){U&&ft&&e.texStorage2D(s.TEXTURE_2D,pt,St,Gt[0].width,Gt[0].height);for(let tt=0,J=Gt.length;tt<J;tt++)lt=Gt[tt],U?it&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,xt,lt.data):e.texImage2D(s.TEXTURE_2D,tt,St,lt.width,lt.height,0,ct,xt,lt.data);S.generateMipmaps=!1}else U?(ft&&e.texStorage2D(s.TEXTURE_2D,pt,St,nt.width,nt.height),it&&Ht(S,nt,ct,xt)):e.texImage2D(s.TEXTURE_2D,0,St,nt.width,nt.height,0,ct,xt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,St,Gt[0].width,Gt[0].height,nt.depth);for(let tt=0,J=Gt.length;tt<J;tt++)if(lt=Gt[tt],S.format!==qn)if(ct!==null)if(U){if(it)if(S.layerUpdates.size>0){let at=td(lt.width,lt.height,S.format,S.type);for(let Nt of S.layerUpdates){let de=lt.data.subarray(Nt*at/lt.data.BYTES_PER_ELEMENT,(Nt+1)*at/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Nt,lt.width,lt.height,1,ct,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ct,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,St,lt.width,lt.height,nt.depth,0,lt.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ct,xt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,St,lt.width,lt.height,nt.depth,0,ct,xt,lt.data)}else{U&&ft&&e.texStorage2D(s.TEXTURE_2D,pt,St,Gt[0].width,Gt[0].height);for(let tt=0,J=Gt.length;tt<J;tt++)lt=Gt[tt],S.format!==qn?ct!==null?U?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,St,lt.width,lt.height,0,lt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?it&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,xt,lt.data):e.texImage2D(s.TEXTURE_2D,tt,St,lt.width,lt.height,0,ct,xt,lt.data)}else if(S.isDataArrayTexture)if(U){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,St,nt.width,nt.height,nt.depth),it)if(S.layerUpdates.size>0){let tt=td(nt.width,nt.height,S.format,S.type);for(let J of S.layerUpdates){let at=nt.data.subarray(J*tt/nt.data.BYTES_PER_ELEMENT,(J+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ct,xt,at)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,xt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,nt.width,nt.height,nt.depth,0,ct,xt,nt.data);else if(S.isData3DTexture)U?(ft&&e.texStorage3D(s.TEXTURE_3D,pt,St,nt.width,nt.height,nt.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,xt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,St,nt.width,nt.height,nt.depth,0,ct,xt,nt.data);else if(S.isFramebufferTexture){if(ft)if(U)e.texStorage2D(s.TEXTURE_2D,pt,St,nt.width,nt.height);else{let tt=nt.width,J=nt.height;for(let at=0;at<pt;at++)e.texImage2D(s.TEXTURE_2D,at,St,tt,J,0,ct,xt,null),tt>>=1,J>>=1}}else if(Gt.length>0){if(U&&ft){let tt=bt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,pt,St,tt.width,tt.height)}for(let tt=0,J=Gt.length;tt<J;tt++)lt=Gt[tt],U?it&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct,xt,lt):e.texImage2D(s.TEXTURE_2D,tt,St,ct,xt,lt);S.generateMipmaps=!1}else if(U){if(ft){let tt=bt(nt);e.texStorage2D(s.TEXTURE_2D,pt,St,tt.width,tt.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,xt,nt)}else e.texImage2D(s.TEXTURE_2D,0,St,ct,xt,nt);m(S)&&p(Z),Tt.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function j(R,S,z){if(S.image.length!==6)return;let Z=Ut(R,S),$=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);let q=n.get($);if($.version!==q.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);let Tt=$t.getPrimaries($t.workingColorSpace),ot=S.colorSpace===Gi?null:$t.getPrimaries(S.colorSpace),yt=S.colorSpace===Gi||Tt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let J=0;J<6;J++)!Ft&&!nt?ct[J]=g(S.image[J],!0,i.maxCubemapSize):ct[J]=nt?S.image[J].image:S.image[J],ct[J]=ue(S,ct[J]);let xt=ct[0],St=r.convert(S.format,S.colorSpace),lt=r.convert(S.type),Gt=E(S.internalFormat,St,lt,S.colorSpace),U=S.isVideoTexture!==!0,ft=q.__version===void 0||Z===!0,it=$.dataReady,pt=b(S,xt);At(s.TEXTURE_CUBE_MAP,S);let tt;if(Ft){U&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Gt,xt.width,xt.height);for(let J=0;J<6;J++){tt=ct[J].mipmaps;for(let at=0;at<tt.length;at++){let Nt=tt[at];S.format!==qn?St!==null?U?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,Nt.width,Nt.height,St,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Gt,Nt.width,Nt.height,0,Nt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,Nt.width,Nt.height,St,lt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Gt,Nt.width,Nt.height,0,St,lt,Nt.data)}}}else{if(tt=S.mipmaps,U&&ft){tt.length>0&&pt++;let J=bt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){U?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ct[J].width,ct[J].height,St,lt,ct[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,ct[J].width,ct[J].height,0,St,lt,ct[J].data);for(let at=0;at<tt.length;at++){let de=tt[at].image[J].image;U?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,de.width,de.height,St,lt,de.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Gt,de.width,de.height,0,St,lt,de.data)}}else{U?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,lt,ct[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,St,lt,ct[J]);for(let at=0;at<tt.length;at++){let Nt=tt[at];U?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,St,lt,Nt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Gt,St,lt,Nt.image[J])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),q.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function mt(R,S,z,Z,$,q){let Tt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),yt=E(z.internalFormat,Tt,ot,z.colorSpace),Ft=n.get(S),nt=n.get(z);if(nt.__renderTarget=S,!Ft.__hasExternalTextures){let ct=Math.max(1,S.width>>q),xt=Math.max(1,S.height>>q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,q,yt,ct,xt,S.depth,0,Tt,ot,null):e.texImage2D($,q,yt,ct,xt,0,Tt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),De(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,nt.__webglTexture,0,D(S)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,nt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(R,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let Z=S.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,q=y(S.stencilBuffer,$),Tt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(S),q,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(S),q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,R)}else{let Z=S.textures;for(let $=0;$<Z.length;$++){let q=Z[$],Tt=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),yt=E(q.internalFormat,Tt,ot,q.colorSpace);De(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(S),yt,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(S),yt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,yt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(R,S,z){let Z=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",M)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),At(s.TEXTURE_CUBE_MAP,S.depthTexture);let Ft=r.convert(S.depthTexture.format),nt=r.convert(S.depthTexture.type),ct;S.depthTexture.format===di?ct=s.DEPTH_COMPONENT24:S.depthTexture.format===_r&&(ct=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ct,S.width,S.height,0,Ft,nt,null)}}else k(S.depthTexture,0);let q=$.__webglTexture,Tt=D(S),ot=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,yt=S.depthTexture.format===_r?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===di)De(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,ot,q,0,Tt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,ot,q,0);else if(S.depthTexture.format===_r)De(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,ot,q,0,Tt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,ot,q,0);else throw new Error("Unknown depthTexture format")}function vt(R){let S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)rt(S.__webglFramebuffer[Z],R,Z);else{let Z=R.texture.mipmaps;Z&&Z.length>0?rt(S.__webglFramebuffer[0],R,0):rt(S.__webglFramebuffer,R,0)}else if(z){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ot(S.__webglDepthbuffer[Z],R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}else{let Z=R.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Ot(S.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(R,S,z){let Z=n.get(R);S!==void 0&&mt(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&vt(R)}function Xt(R){let S=R.texture,z=n.get(R),Z=n.get(S);R.addEventListener("dispose",w);let $=R.textures,q=R.isWebGLCubeRenderTarget===!0,Tt=$.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let yt=0;yt<S.mipmaps.length;yt++)z.__webglFramebuffer[ot][yt]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let ot=0,yt=$.length;ot<yt;ot++){let Ft=n.get($[ot]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&De(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<$.length;ot++){let yt=$[ot];z.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let Ft=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),ct=E(yt.internalFormat,Ft,nt,yt.colorSpace,R.isXRRenderTarget===!0),xt=D(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,ct,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),At(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)mt(z.__webglFramebuffer[ot][yt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt);else mt(z.__webglFramebuffer[ot],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,yt=$.length;ot<yt;ot++){let Ft=$[ot],nt=n.get(Ft),ct=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,nt.__webglTexture),At(ct,Ft),mt(z.__webglFramebuffer,R,Ft,s.COLOR_ATTACHMENT0+ot,ct,0),m(Ft)&&p(ct)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),At(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)mt(z.__webglFramebuffer[yt],R,S,s.COLOR_ATTACHMENT0,ot,yt);else mt(z.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}R.depthBuffer&&vt(R)}function Kt(R){let S=R.textures;for(let z=0,Z=S.length;z<Z;z++){let $=S[z];if(m($)){let q=v(R),Tt=n.get($).__webglTexture;e.bindTexture(q,Tt),p(q),e.unbindTexture()}}}let ne=[],zt=[];function ye(R){if(R.samples>0){if(De(R)===!1){let S=R.textures,z=R.width,Z=R.height,$=s.COLOR_BUFFER_BIT,q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(R),ot=S.length>1;if(ot)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);let yt=R.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ft]);let nt=n.get(S[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,$,s.NEAREST),l===!0&&(ne.length=0,zt.length=0,ne.push(s.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push(q),zt.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ft]);let nt=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function De(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function te(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ue(R,S){let z=R.colorSpace,Z=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==zr&&z!==Gi&&($t.getTransfer(z)===ee?(Z!==qn||$!==En)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",z)),S}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kM(s,t){function e(n,i=Gi){let r,a=$t.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===nc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return s.BYTE;if(n===Gu)return s.SHORT;if(n===Gs)return s.UNSIGNED_SHORT;if(n===ec)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===_i)return s.HALF_FLOAT;if(n===qu)return s.ALPHA;if(n===Yu)return s.RGB;if(n===qn)return s.RGBA;if(n===di)return s.DEPTH_COMPONENT;if(n===_r)return s.DEPTH_STENCIL;if(n===Zu)return s.RED;if(n===rc)return s.RED_INTEGER;if(n===Wr)return s.RG;if(n===sc)return s.RG_INTEGER;if(n===ac)return s.RGBA_INTEGER;if(n===Xa||n===qa||n===Ya||n===Za)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===lc||n===cc||n===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===dc)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pc)return r.COMPRESSED_R11_EAC;if(n===mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gc)return r.COMPRESSED_RG11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===vc||n===yc||n===Mc||n===bc||n===Sc||n===Tc||n===Ec||n===wc||n===Ac||n===Cc||n===Rc||n===Pc||n===Ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Lc||n===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dc)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===Oc||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var VM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`,pd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ua(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new On({vertexShader:VM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},md=class extends Bi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null,g=typeof XRWebGLBinding<"u",m=new pd,p={},v=e.getContextAttributes(),E=null,y=null,b=[],M=[],w=new Lt,C=null,x=new qe;x.viewport=new Te;let T=new qe;T.viewport=new Te;let P=[x,T],L=new Vl,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=b[Y];return j===void 0&&(j=new Ls,b[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=b[Y];return j===void 0&&(j=new Ls,b[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=b[Y];return j===void 0&&(j=new Ls,b[Y]=j),j.getHandSpace()};function k(Y){let j=M.indexOf(Y.inputSource);if(j===-1)return;let mt=b[j];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",O);for(let Y=0;Y<b.length;Y++){let j=M[Y];j!==null&&(M[Y]=null,b[Y].disconnect(j))}I=null,N=null,m.reset();for(let Y in p)delete p[Y];t.setRenderTarget(E),d=null,f=null,u=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=function(Y){return io(this,null,function*(){if(i=Y,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&(yield e.makeXRCompatible()),C=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ot=null,rt=null;v.depth&&(rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?_r:di,Ot=v.stencil?Ws:ei);let vt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Un(f.textureWidth,f.textureHeight,{format:qn,type:En,depthTexture:new cr(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Un(d.framebufferWidth,d.framebufferHeight,{format:qn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Y){for(let j=0;j<Y.removed.length;j++){let mt=Y.removed[j],Ot=M.indexOf(mt);Ot>=0&&(M[Ot]=null,b[Ot].disconnect(mt))}for(let j=0;j<Y.added.length;j++){let mt=Y.added[j],Ot=M.indexOf(mt);if(Ot===-1){for(let vt=0;vt<b.length;vt++)if(vt>=M.length){M.push(mt),Ot=vt;break}else if(M[vt]===null){M[vt]=mt,Ot=vt;break}if(Ot===-1)break}let rt=b[Ot];rt&&rt.connect(mt)}}let X=new F,Q=new F;function et(Y,j,mt){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let Ot=X.distanceTo(Q),rt=j.projectionMatrix.elements,vt=mt.projectionMatrix.elements,kt=rt[14]/(rt[10]-1),Xt=rt[14]/(rt[10]+1),Kt=(rt[9]+1)/rt[5],ne=(rt[9]-1)/rt[5],zt=(rt[8]-1)/rt[0],ye=(vt[8]+1)/vt[0],D=kt*zt,De=kt*ye,te=Ot/(-zt+ye),ue=te*-zt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),rt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let bt=kt+te,R=Xt+te,S=D-ue,z=De+(Ot-ue),Z=Kt*Xt/R*bt,$=ne*Xt/R*bt;Y.projectionMatrix.makePerspective(S,z,Z,$,bt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,mt=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),L.near=T.near=x.near=j,L.far=T.far=x.far=mt,(I!==L.near||N!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,N=L.far),L.layers.mask=Y.layers.mask|6,x.layers.mask=L.layers.mask&3,T.layers.mask=L.layers.mask&5;let Ot=Y.parent,rt=L.cameras;st(L,Ot);for(let vt=0;vt<rt.length;vt++)st(rt[vt],Ot);rt.length===2?et(L,x,T):L.projectionMatrix.copy(x.projectionMatrix),At(Y,L,Ot)};function At(Y,j,mt){mt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return p[Y]};let Ut=null;function Zt(Y,j){if(h=j.getViewerPose(c||a),_=j,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ot=!1;mt.length!==L.cameras.length&&(L.cameras.length=0,Ot=!0);for(let Xt=0;Xt<mt.length;Xt++){let Kt=mt[Xt],ne=null;if(d!==null)ne=d.getViewport(Kt);else{let ye=u.getViewSubImage(f,Kt);ne=ye.viewport,Xt===0&&(t.setRenderTargetTextures(y,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(y))}let zt=P[Xt];zt===void 0&&(zt=new qe,zt.layers.enable(Xt),zt.viewport=new Te,P[Xt]=zt),zt.matrix.fromArray(Kt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Kt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ne.x,ne.y,ne.width,ne.height),Xt===0&&(L.matrix.copy(zt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ot===!0&&L.cameras.push(zt)}let rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let Xt=u.getDepthInformation(mt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,i.renderState)}if(rt&&rt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<mt.length;Xt++){let Kt=mt[Xt].camera;if(Kt){let ne=p[Kt];ne||(ne=new Ua,p[Kt]=ne);let zt=u.getCameraImage(Kt);ne.sourceTexture=zt}}}}for(let mt=0;mt<b.length;mt++){let Ot=M[mt],rt=b[mt];Ot!==null&&rt!==void 0&&rt.update(Ot,j,c||a)}Ut&&Ut(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let Ht=new Sm;Ht.setAnimationLoop(Zt),this.setAnimationLoop=function(Y){Ut=Y},this.dispose=function(){}}},Yr=new ki,GM=new pe;function WM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ju(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),E=v.envMap,y=v.envMapRotation;E&&(m.envMap.value=E,Yr.copy(y),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(Yr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function XM(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let y=E.program;n.uniformBlockBinding(v,y)}function c(v,E){let y=i[v.id];y===void 0&&(_(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));let b=E.program;n.updateUBOMapping(v,b);let M=t.render.frame;r[v.id]!==M&&(f(v),r[v.id]=M)}function h(v){let E=u();v.__bindingPointIndex=E;let y=s.createBuffer(),b=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let E=i[v.id],y=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let M=0,w=y.length;M<w;M++){let C=Array.isArray(y[M])?y[M]:[y[M]];for(let x=0,T=C.length;x<T;x++){let P=C[x];if(d(P,M,x,b)===!0){let L=P.__offset,I=Array.isArray(P.value)?P.value:[P.value],N=0;for(let k=0;k<I.length;k++){let B=I[k],O=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,L+N,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,E,y,b){let M=v.value,w=E+"_"+y;if(b[w]===void 0)return typeof M=="number"||typeof M=="boolean"?b[w]=M:b[w]=M.clone(),!0;{let C=b[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return b[w]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function _(v){let E=v.uniforms,y=0,b=16;for(let w=0,C=E.length;w<C;w++){let x=Array.isArray(E[w])?E[w]:[E[w]];for(let T=0,P=x.length;T<P;T++){let L=x[T],I=Array.isArray(L.value)?L.value:[L.value];for(let N=0,k=I.length;N<k;N++){let B=I[N],O=g(B),X=y%b,Q=X%O.boundary,et=X+Q;y+=Q,et!==0&&b-et<O.storage&&(y+=b-et),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=O.storage}}}let M=y%b;return M>0&&(y+=b-M),v.__size=y,v.__cache={},this}function g(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pt("WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){let E=v.target;E.removeEventListener("dispose",m);let y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function YM(){return vi===null&&(vi=new Tl(qM,16,16,Wr,_i),vi.name="DFG_LUT",vi.minFilter=Ze,vi.magFilter=Ze,vi.wrapS=Nn,vi.wrapT=Nn,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var qc=class{constructor(t={}){let{canvas:e=Jp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let g=d,m=new Set([ac,sc,rc]),p=new Set([En,ei,Gs,Ws,nc,ic]),v=new Uint32Array(4),E=new Int32Array(4),y=null,b=null,M=[],w=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=hn;let P=0,L=0,I=null,N=-1,k=null,B=new Te,O=new Te,X=null,Q=new Mt(0),et=0,st=e.width,At=e.height,Ut=1,Zt=null,Ht=null,Y=new Te(0,0,st,At),j=new Te(0,0,st,At),mt=!1,Ot=new Us,rt=!1,vt=!1,kt=new pe,Xt=new F,Kt=new Te,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function ye(){return I===null?Ut:1}let D=n;function De(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hl}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ie,!1),D===null){let V="webgl2";if(D=De(V,A),D===null)throw De(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw It("WebGLRenderer: "+A.message),A}let te,ue,bt,R,S,z,Z,$,q,Tt,ot,yt,Ft,nt,ct,xt,St,lt,Gt,U,ft,it,pt,tt;function J(){te=new ty(D),te.init(),it=new kM(D,te),ue=new Xv(D,te,t,it),bt=new BM(D,te),ue.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),R=new iy(D),S=new SM,z=new zM(D,te,bt,S,ue,it,R),Z=new Yv(x),$=new Qv(x),q=new o_(D),pt=new Gv(D,q),Tt=new ey(D,q,R,pt),ot=new sy(D,Tt,q,R),Gt=new ry(D,ue,z),xt=new qv(S),yt=new bM(x,Z,$,te,ue,pt,xt),Ft=new WM(x,S),nt=new EM,ct=new IM(te),lt=new Hv(x,Z,$,bt,ot,_,l),St=new UM(x,ot,ue),tt=new XM(D,R,ue,bt),U=new Wv(D,te,R),ft=new ny(D,te,R),R.programs=yt.programs,x.capabilities=ue,x.extensions=te,x.properties=S,x.renderLists=nt,x.shadowMap=St,x.state=bt,x.info=R}J(),g!==En&&(C=new oy(g,e.width,e.height,i,r));let at=new md(x,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(A){A!==void 0&&(Ut=A,this.setSize(st,At,!1))},this.getSize=function(A){return A.set(st,At)},this.setSize=function(A,V,W=!0){if(at.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,At=V,e.width=Math.floor(A*Ut),e.height=Math.floor(V*Ut),W===!0&&(e.style.width=A+"px",e.style.height=V+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(st*Ut,At*Ut).floor()},this.setDrawingBufferSize=function(A,V,W){st=A,At=V,Ut=W,e.width=Math.floor(A*W),e.height=Math.floor(V*W),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(g===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,V,W,G){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,V,W,G),bt.viewport(B.copy(Y).multiplyScalar(Ut).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,V,W,G){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,V,W,G),bt.scissor(O.copy(j).multiplyScalar(Ut).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){bt.setScissorTest(mt=A)},this.setOpaqueSort=function(A){Zt=A},this.setTransparentSort=function(A){Ht=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,W=!0){let G=0;if(A){let H=!1;if(I!==null){let ht=I.texture.format;H=m.has(ht)}if(H){let ht=I.texture.type,gt=p.has(ht),dt=lt.getClearColor(),_t=lt.getClearAlpha(),Et=dt.r,Dt=dt.g,Ct=dt.b;gt?(v[0]=Et,v[1]=Dt,v[2]=Ct,v[3]=_t,D.clearBufferuiv(D.COLOR,0,v)):(E[0]=Et,E[1]=Dt,E[2]=Ct,E[3]=_t,D.clearBufferiv(D.COLOR,0,E))}else G|=D.COLOR_BUFFER_BIT}V&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),lt.dispose(),nt.dispose(),ct.dispose(),S.dispose(),Z.dispose(),$.dispose(),ot.dispose(),pt.dispose(),tt.dispose(),yt.dispose(),at.dispose(),at.removeEventListener("sessionstart",vd),at.removeEventListener("sessionend",yd),vr.stop()};function Nt(A){A.preventDefault(),wa("WebGLRenderer: Context Lost."),T=!0}function de(){wa("WebGLRenderer: Context Restored."),T=!1;let A=R.autoReset,V=St.enabled,W=St.autoUpdate,G=St.needsUpdate,H=St.type;J(),R.autoReset=A,St.enabled=V,St.autoUpdate=W,St.needsUpdate=G,St.type=H}function ie(A){It("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ii(A){let V=A.target;V.removeEventListener("dispose",ii),Mi(V)}function Mi(A){Lm(A),S.remove(A)}function Lm(A){let V=S.get(A).programs;V!==void 0&&(V.forEach(function(W){yt.releaseProgram(W)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,W,G,H,ht){V===null&&(V=ne);let gt=H.isMesh&&H.matrixWorld.determinant()<0,dt=Nm(A,V,W,G,H);bt.setMaterial(G,gt);let _t=W.index,Et=1;if(G.wireframe===!0){if(_t=Tt.getWireframeAttribute(W),_t===void 0)return;Et=2}let Dt=W.drawRange,Ct=W.attributes.position,Wt=Dt.start*Et,ae=(Dt.start+Dt.count)*Et;ht!==null&&(Wt=Math.max(Wt,ht.start*Et),ae=Math.min(ae,(ht.start+ht.count)*Et)),_t!==null?(Wt=Math.max(Wt,0),ae=Math.min(ae,_t.count)):Ct!=null&&(Wt=Math.max(Wt,0),ae=Math.min(ae,Ct.count));let Ee=ae-Wt;if(Ee<0||Ee===1/0)return;pt.setup(H,G,dt,W,_t);let we,le=U;if(_t!==null&&(we=q.get(_t),le=ft,le.setIndex(we)),H.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*ye()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(H.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),bt.setLineWidth(Rt*ye()),H.isLineSegments?le.setMode(D.LINES):H.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else H.isPoints?le.setMode(D.POINTS):H.isSprite&&le.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Rs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Rt=H._multiDrawStarts,re=H._multiDrawCounts,jt=H._multiDrawCount,wn=_t?q.get(_t).bytesPerElement:1,$r=S.get(G).currentProgram.getUniforms();for(let An=0;An<jt;An++)$r.setValue(D,"_gl_DrawID",An),le.render(Rt[An]/wn,re[An])}else if(H.isInstancedMesh)le.renderInstances(Wt,Ee,H.count);else if(W.isInstancedBufferGeometry){let Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,re=Math.min(W.instanceCount,Rt);le.renderInstances(Wt,Ee,re)}else le.render(Wt,Ee)};function xd(A,V,W){A.transparent===!0&&A.side===ve&&A.forceSinglePass===!1?(A.side=Je,A.needsUpdate=!0,no(A,V,W),A.side=Oi,A.needsUpdate=!0,no(A,V,W),A.side=ve):no(A,V,W)}this.compile=function(A,V,W=null){W===null&&(W=A),b=ct.get(W),b.init(V),w.push(b),W.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();let G=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ht=H.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){let dt=ht[gt];xd(dt,W,H),G.add(dt)}else xd(ht,W,H),G.add(ht)}),b=w.pop(),G},this.compileAsync=function(A,V,W=null){let G=this.compile(A,V,W);return new Promise(H=>{function ht(){if(G.forEach(function(gt){S.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){H(A);return}setTimeout(ht,10)}te.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Qc=null;function Fm(A){Qc&&Qc(A)}function vd(){vr.stop()}function yd(){vr.start()}let vr=new Sm;vr.setAnimationLoop(Fm),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(A){Qc=A,at.setAnimationLoop(A),A===null?vr.stop():vr.start()},at.addEventListener("sessionstart",vd),at.addEventListener("sessionend",yd),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let W=at.enabled===!0&&at.isPresenting===!0,G=C!==null&&(I===null||W)&&C.begin(x,I);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(V),V=at.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,I),b=ct.get(A,w.length),b.init(V),w.push(b),kt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ot.setFromProjectionMatrix(kt,jn,V.reversedDepth),vt=this.localClippingEnabled,rt=xt.init(this.clippingPlanes,vt),y=nt.get(A,M.length),y.init(),M.push(y),at.enabled===!0&&at.isPresenting===!0){let gt=x.xr.getDepthSensingMesh();gt!==null&&th(gt,V,-1/0,x.sortObjects)}th(A,V,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Zt,Ht),zt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,zt&&lt.addToRenderList(y,A),this.info.render.frame++,rt===!0&&xt.beginShadows();let H=b.state.shadowsArray;if(St.render(H,A,V),rt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&C.hasRenderPass())===!1){let gt=y.opaque,dt=y.transmissive;if(b.setupLights(),V.isArrayCamera){let _t=V.cameras;if(dt.length>0)for(let Et=0,Dt=_t.length;Et<Dt;Et++){let Ct=_t[Et];bd(gt,dt,A,Ct)}zt&&lt.render(A);for(let Et=0,Dt=_t.length;Et<Dt;Et++){let Ct=_t[Et];Md(y,A,Ct,Ct.viewport)}}else dt.length>0&&bd(gt,dt,A,V),zt&&lt.render(A),Md(y,A,V)}I!==null&&L===0&&(z.updateMultisampleRenderTarget(I),z.updateRenderTargetMipmap(I)),G&&C.end(x),A.isScene===!0&&A.onAfterRender(x,A,V),pt.resetDefaultState(),N=-1,k=null,w.pop(),w.length>0?(b=w[w.length-1],rt===!0&&xt.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?y=M[M.length-1]:y=null};function th(A,V,W,G){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ot.intersectsSprite(A)){G&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);let gt=ot.update(A),dt=A.material;dt.visible&&y.push(A,gt,dt,W,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ot.intersectsObject(A))){let gt=ot.update(A),dt=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Kt.copy(gt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(dt)){let _t=gt.groups;for(let Et=0,Dt=_t.length;Et<Dt;Et++){let Ct=_t[Et],Wt=dt[Ct.materialIndex];Wt&&Wt.visible&&y.push(A,gt,Wt,W,Kt.z,Ct)}}else dt.visible&&y.push(A,gt,dt,W,Kt.z,null)}}let ht=A.children;for(let gt=0,dt=ht.length;gt<dt;gt++)th(ht[gt],V,W,G)}function Md(A,V,W,G){let{opaque:H,transmissive:ht,transparent:gt}=A;b.setupLightsView(W),rt===!0&&xt.setGlobalState(x.clippingPlanes,W),G&&bt.viewport(B.copy(G)),H.length>0&&eo(H,V,W),ht.length>0&&eo(ht,V,W),gt.length>0&&eo(gt,V,W),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function bd(A,V,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Wt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Un(1,1,{generateMipmaps:!0,type:Wt?_i:En,minFilter:gr,samples:ue.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let ht=b.state.transmissionRenderTarget[G.id],gt=G.viewport||B;ht.setSize(gt.z*x.transmissionResolutionScale,gt.w*x.transmissionResolutionScale);let dt=x.getRenderTarget(),_t=x.getActiveCubeFace(),Et=x.getActiveMipmapLevel();x.setRenderTarget(ht),x.getClearColor(Q),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),zt&&lt.render(W);let Dt=x.toneMapping;x.toneMapping=ti;let Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),rt===!0&&xt.setGlobalState(x.clippingPlanes,G),eo(A,W,G),z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht),te.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ae=0,Ee=V.length;ae<Ee;ae++){let we=V[ae],{object:le,geometry:Rt,material:re,group:jt}=we;if(re.side===ve&&le.layers.test(G.layers)){let wn=re.side;re.side=Je,re.needsUpdate=!0,Sd(le,W,G,Rt,re,jt),re.side=wn,re.needsUpdate=!0,Wt=!0}}Wt===!0&&(z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht))}x.setRenderTarget(dt,_t,Et),x.setClearColor(Q,et),Ct!==void 0&&(G.viewport=Ct),x.toneMapping=Dt}function eo(A,V,W){let G=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ht=A.length;H<ht;H++){let gt=A[H],{object:dt,geometry:_t,group:Et}=gt,Dt=gt.material;Dt.allowOverride===!0&&G!==null&&(Dt=G),dt.layers.test(W.layers)&&Sd(dt,V,W,_t,Dt,Et)}}function Sd(A,V,W,G,H,ht){A.onBeforeRender(x,V,W,G,H,ht),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,V,W,G,A,ht),H.transparent===!0&&H.side===ve&&H.forceSinglePass===!1?(H.side=Je,H.needsUpdate=!0,x.renderBufferDirect(W,V,G,H,A,ht),H.side=Oi,H.needsUpdate=!0,x.renderBufferDirect(W,V,G,H,A,ht),H.side=ve):x.renderBufferDirect(W,V,G,H,A,ht),A.onAfterRender(x,V,W,G,H,ht)}function no(A,V,W){V.isScene!==!0&&(V=ne);let G=S.get(A),H=b.state.lights,ht=b.state.shadowsArray,gt=H.state.version,dt=yt.getParameters(A,H.state,ht,V,W),_t=yt.getProgramCacheKey(dt),Et=G.programs;G.environment=A.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(A.isMeshStandardMaterial?$:Z).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Et===void 0&&(A.addEventListener("dispose",ii),Et=new Map,G.programs=Et);let Dt=Et.get(_t);if(Dt!==void 0){if(G.currentProgram===Dt&&G.lightsStateVersion===gt)return Ed(A,dt),Dt}else dt.uniforms=yt.getUniforms(A),A.onBeforeCompile(dt,x),Dt=yt.acquireProgram(dt,_t),Et.set(_t,Dt),G.uniforms=dt.uniforms;let Ct=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ct.clippingPlanes=xt.uniform),Ed(A,dt),G.needsLights=Om(A),G.lightsStateVersion=gt,G.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.directionalShadowMap.value=H.state.directionalShadowMap,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotShadowMap.value=H.state.spotShadowMap,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMap.value=H.state.pointShadowMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Dt,G.uniformsList=null,Dt}function Td(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=qs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ed(A,V){let W=S.get(A);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function Nm(A,V,W,G,H){V.isScene!==!0&&(V=ne),z.resetTextureUnits();let ht=V.fog,gt=G.isMeshStandardMaterial?V.environment:null,dt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:zr,_t=(G.isMeshStandardMaterial?$:Z).get(G.envMap||gt),Et=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Dt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!W.morphAttributes.position,Wt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color,Ee=ti;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=x.toneMapping);let we=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=we!==void 0?we.length:0,Rt=S.get(G),re=b.state.lights;if(rt===!0&&(vt===!0||A!==k)){let an=A===k&&G.id===N;xt.setState(G,A,an)}let jt=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==re.state.version||Rt.outputColorSpace!==dt||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isBatchedMesh&&Rt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Rt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==_t||G.fog===!0&&Rt.fog!==ht||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==xt.numPlanes||Rt.numIntersection!==xt.numIntersection)||Rt.vertexAlphas!==Et||Rt.vertexTangents!==Dt||Rt.morphTargets!==Ct||Rt.morphNormals!==Wt||Rt.morphColors!==ae||Rt.toneMapping!==Ee||Rt.morphTargetsCount!==le)&&(jt=!0):(jt=!0,Rt.__version=G.version);let wn=Rt.currentProgram;jt===!0&&(wn=no(G,V,H));let $r=!1,An=!1,Js=!1,fe=wn.getUniforms(),fn=Rt.uniforms;if(bt.useProgram(wn.program)&&($r=!0,An=!0,Js=!0),G.id!==N&&(N=G.id,An=!0),$r||k!==A){bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",A.projectionMatrix),fe.setValue(D,"viewMatrix",A.matrixWorldInverse);let pn=fe.map.cameraPosition;pn!==void 0&&pn.setValue(D,Xt.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,An=!0,Js=!0)}if(Rt.needsLights&&(re.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",re.state.directionalShadowMap,z),re.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",re.state.spotShadowMap,z),re.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",re.state.pointShadowMap,z)),H.isSkinnedMesh){fe.setOptional(D,H,"bindMatrix"),fe.setOptional(D,H,"bindMatrixInverse");let an=H.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),fe.setValue(D,"boneTexture",an.boneTexture,z))}H.isBatchedMesh&&(fe.setOptional(D,H,"batchingTexture"),fe.setValue(D,"batchingTexture",H._matricesTexture,z),fe.setOptional(D,H,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",H._indirectTexture,z),fe.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",H._colorsTexture,z));let zn=W.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Gt.update(H,W,wn),(An||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,fe.setValue(D,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(fn.envMap.value=_t,fn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&V.environment!==null&&(fn.envMapIntensity.value=V.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=YM()),An&&(fe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&Um(fn,Js),ht&&G.fog===!0&&Ft.refreshFogUniforms(fn,ht),Ft.refreshMaterialUniforms(fn,G,Ut,At,b.state.transmissionRenderTarget[A.id]),qs.upload(D,Td(Rt),fn,z)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qs.upload(D,Td(Rt),fn,z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(D,"center",H.center),fe.setValue(D,"modelViewMatrix",H.modelViewMatrix),fe.setValue(D,"normalMatrix",H.normalMatrix),fe.setValue(D,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let an=G.uniformsGroups;for(let pn=0,eh=an.length;pn<eh;pn++){let yr=an[pn];tt.update(yr,wn),tt.bind(yr,wn)}}return wn}function Um(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Om(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,W){let G=S.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=V,S.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let W=S.get(A);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};let Bm=D.createFramebuffer();this.setRenderTarget=function(A,V=0,W=0){I=A,P=V,L=W;let G=null,H=!1,ht=!1;if(A){let dt=S.get(A);if(dt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(D.FRAMEBUFFER,dt.__webglFramebuffer),B.copy(A.viewport),O.copy(A.scissor),X=A.scissorTest,bt.viewport(B),bt.scissor(O),bt.setScissorTest(X),N=-1;return}else if(dt.__webglFramebuffer===void 0)z.setupRenderTarget(A);else if(dt.__hasExternalTextures)z.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Dt=A.depthTexture;if(dt.__boundDepthTexture!==Dt){if(Dt!==null&&S.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(A)}}let _t=A.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);let Et=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Et[V])?G=Et[V][W]:G=Et[V],H=!0):A.samples>0&&z.useMultisampledRTT(A)===!1?G=S.get(A).__webglMultisampledFramebuffer:Array.isArray(Et)?G=Et[W]:G=Et,B.copy(A.viewport),O.copy(A.scissor),X=A.scissorTest}else B.copy(Y).multiplyScalar(Ut).floor(),O.copy(j).multiplyScalar(Ut).floor(),X=mt;if(W!==0&&(G=Bm),bt.bindFramebuffer(D.FRAMEBUFFER,G)&&bt.drawBuffers(A,G),bt.viewport(B),bt.scissor(O),bt.setScissorTest(X),H){let dt=S.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,dt.__webglTexture,W)}else if(ht){let dt=V;for(let _t=0;_t<A.textures.length;_t++){let Et=S.get(A.textures[_t]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_t,Et.__webglTexture,W,dt)}}else if(A!==null&&W!==0){let dt=S.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,W)}N=-1},this.readRenderTargetPixels=function(A,V,W,G,H,ht,gt,dt=0){if(!(A&&A.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(_t=_t[gt]),_t){bt.bindFramebuffer(D.FRAMEBUFFER,_t);try{let Et=A.textures[dt],Dt=Et.format,Ct=Et.type;if(!ue.textureFormatReadable(Dt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ct)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-G&&W>=0&&W<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt),D.readPixels(V,W,G,H,it.convert(Dt),it.convert(Ct),ht))}finally{let Et=I!==null?S.get(I).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=function(A,V,W,G,H,ht,gt,dt=0){return io(this,null,function*(){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(_t=_t[gt]),_t)if(V>=0&&V<=A.width-G&&W>=0&&W<=A.height-H){bt.bindFramebuffer(D.FRAMEBUFFER,_t);let Et=A.textures[dt],Dt=Et.format,Ct=Et.type;if(!ue.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Wt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt),D.readPixels(V,W,G,H,it.convert(Dt),it.convert(Ct),0);let ae=I!==null?S.get(I).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,ae);let Ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield $p(D,Ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Wt),D.deleteSync(Ee),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(A,V=null,W=0){let G=Math.pow(2,-W),H=Math.floor(A.image.width*G),ht=Math.floor(A.image.height*G),gt=V!==null?V.x:0,dt=V!==null?V.y:0;z.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,gt,dt,H,ht),bt.unbindTexture()};let zm=D.createFramebuffer(),km=D.createFramebuffer();this.copyTextureToTexture=function(A,V,W=null,G=null,H=0,ht=null){ht===null&&(H!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=H,H=0):ht=0);let gt,dt,_t,Et,Dt,Ct,Wt,ae,Ee,we=A.isCompressedTexture?A.mipmaps[ht]:A.image;if(W!==null)gt=W.max.x-W.min.x,dt=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Dt=W.min.y,Ct=W.isBox3?W.min.z:0;else{let zn=Math.pow(2,-H);gt=Math.floor(we.width*zn),dt=Math.floor(we.height*zn),A.isDataArrayTexture?_t=we.depth:A.isData3DTexture?_t=Math.floor(we.depth*zn):_t=1,Et=0,Dt=0,Ct=0}G!==null?(Wt=G.x,ae=G.y,Ee=G.z):(Wt=0,ae=0,Ee=0);let le=it.convert(V.format),Rt=it.convert(V.type),re;V.isData3DTexture?(z.setTexture3D(V,0),re=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),re=D.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let jt=D.getParameter(D.UNPACK_ROW_LENGTH),wn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$r=D.getParameter(D.UNPACK_SKIP_PIXELS),An=D.getParameter(D.UNPACK_SKIP_ROWS),Js=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct);let fe=A.isDataArrayTexture||A.isData3DTexture,fn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let zn=S.get(A),an=S.get(V),pn=S.get(zn.__renderTarget),eh=S.get(an.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,pn.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,eh.__webglFramebuffer);for(let yr=0;yr<_t;yr++)fe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(A).__webglTexture,H,Ct+yr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(V).__webglTexture,ht,Ee+yr)),D.blitFramebuffer(Et,Dt,gt,dt,Wt,ae,gt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||S.has(A)){let zn=S.get(A),an=S.get(V);bt.bindFramebuffer(D.READ_FRAMEBUFFER,zm),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,km);for(let pn=0;pn<_t;pn++)fe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zn.__webglTexture,H,Ct+pn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zn.__webglTexture,H),fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,ht,Ee+pn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,ht),H!==0?D.blitFramebuffer(Et,Dt,gt,dt,Wt,ae,gt,dt,D.COLOR_BUFFER_BIT,D.NEAREST):fn?D.copyTexSubImage3D(re,ht,Wt,ae,Ee+pn,Et,Dt,gt,dt):D.copyTexSubImage2D(re,ht,Wt,ae,Et,Dt,gt,dt);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(re,ht,Wt,ae,Ee,gt,dt,_t,le,Rt,we.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(re,ht,Wt,ae,Ee,gt,dt,_t,le,we.data):D.texSubImage3D(re,ht,Wt,ae,Ee,gt,dt,_t,le,Rt,we):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ht,Wt,ae,gt,dt,le,Rt,we.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ht,Wt,ae,we.width,we.height,le,we.data):D.texSubImage2D(D.TEXTURE_2D,ht,Wt,ae,gt,dt,le,Rt,we);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$r),D.pixelStorei(D.UNPACK_SKIP_ROWS,An),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Js),ht===0&&V.generateMipmaps&&D.generateMipmap(re),bt.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?z.setTextureCube(A,0):A.isData3DTexture?z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?z.setTexture2DArray(A,0):z.setTexture2D(A,0),bt.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,bt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var ZM=/^[og]\s*(.+)?/,JM=/^mtllib /,$M=/^usemtl /,jM=/^usemap /,Cm=/\s+/,Rm=new F,gd=new F,Pm=new F,Im=new F,Yn=new F,$c=new Mt;function KM(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){let i=this.vertices,r=this.object.geometry.normals;Rm.fromArray(i,t),gd.fromArray(i,e),Pm.fromArray(i,n),Yn.subVectors(Pm,gd),Im.subVectors(Rm,gd),Yn.cross(Im),Yn.normalize(),r.push(Yn.x,Yn.y,Yn.z),r.push(Yn.x,Yn.y,Yn.z),r.push(Yn.x,Yn.y,Yn.z)},addColor:function(t,e,n){let i=this.colors,r=this.object.geometry.colors;i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[t+0],i[t+1]),r.push(i[e+0],i[e+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,r,a,o,l,c){let h=this.vertices.length,u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),o!==void 0&&o!==""){let _=this.normals.length;u=this.parseNormalIndex(o,_),f=this.parseNormalIndex(l,_),d=this.parseNormalIndex(c,_),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(i!==void 0&&i!==""){let _=this.uvs.length;u=this.parseUVIndex(i,_),f=this.parseUVIndex(r,_),d=this.parseUVIndex(a,_),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){let r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],i))}};return s.startObject("",!1),s}var jc=class extends Hc{constructor(t){super(t),this.materials=null}load(t,e,n,i){let r=this,a=new za(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){let e=new KM;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let n=t.split(`
`),i=[];for(let o=0,l=n.length;o<l;o++){let c=n[o].trimStart();if(c.length===0)continue;let h=c.charAt(0);if(h!=="#")if(h==="v"){let u=c.split(Cm);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?($c.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),hn),e.colors.push($c.r,$c.g,$c.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=c.slice(1).trim().split(Cm),d=[];for(let g=0,m=f.length;g<m;g++){let p=f[g];if(p.length>0){let v=p.split("/");d.push(v)}}let _=d[0];for(let g=1,m=d.length-1;g<m;g++){let p=d[g],v=d[g+1];e.addFace(_[0],p[0],v[0],_[1],p[1],v[1],_[2],p[2],v[2])}}else if(h==="l"){let u=c.substring(1).trim().split(" "),f=[],d=[];if(c.indexOf("/")===-1)f=u;else for(let _=0,g=u.length;_<g;_++){let m=u[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(f,d)}else if(h==="p"){let f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((i=ZM.exec(c))!==null){let u=(" "+i[0].slice(1).trim()).slice(1);e.startObject(u)}else if($M.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(JM.test(c))e.materialLibraries.push(c.substring(7).trim());else if(jM.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){let f=i[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;let u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();let r=new Ye;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){let c=e.objects[o],h=c.geometry,u=c.materials,f=h.type==="Line",d=h.type==="Points",_=!1;if(h.vertices.length===0)continue;let g=new Qt;g.setAttribute("position",new Yt(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Yt(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new Yt(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Yt(h.uvs,2));let m=[];for(let v=0,E=u.length;v<E;v++){let y=u[v],b=y.name+"_"+y.smooth+"_"+_,M=e.materials[b];if(this.materials!==null){if(M=this.materials.create(y.name),f&&M&&!(M instanceof pi)){let w=new pi;Oe.prototype.copy.call(w,M),w.color.copy(M.color),M=w}else if(d&&M&&!(M instanceof He)){let w=new He({size:10,sizeAttenuation:!1});Oe.prototype.copy.call(w,M),w.color.copy(M.color),w.map=M.map,M=w}}M===void 0&&(f?M=new pi:d?M=new He({size:1,sizeAttenuation:!1}):M=new mi,M.name=y.name,M.flatShading=!y.smooth,M.vertexColors=_,e.materials[b]=M),m.push(M)}let p;if(m.length>1){for(let v=0,E=u.length;v<E;v++){let y=u[v];g.addGroup(y.groupStart,y.groupCount,v)}f?p=new Bs(g,m):d?p=new nn(g,m):p=new wt(g,m)}else f?p=new Bs(g,m[0]):d?p=new nn(g,m[0]):p=new wt(g,m[0]);p.name=c.name,r.add(p)}else if(e.vertices.length>0){let o=new He({size:1,sizeAttenuation:!1}),l=new Qt;l.setAttribute("position",new Yt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Yt(e.colors,3)),o.vertexColors=!0);let c=new nn(l,o);r.add(c)}return r}};var Zs=class s{skullGroup=null;skullMaterial=null;load(t){new jc().load("assets/models/hominid_skull.obj3e95cd92-63a9-48ec-a41f-461a344caf62.obj",n=>{let i=new Vr({color:6702182,roughness:.55,metalness:.3,emissive:661544,emissiveIntensity:.15,clearcoat:.4,clearcoatRoughness:.3,transparent:!0,opacity:1});this.skullMaterial=i,n.traverse(u=>{u instanceof wt&&(u.material=i,u.castShadow=!0,u.receiveShadow=!0)});let r=new fi().setFromObject(n),a=r.getCenter(new F);n.position.sub(a);let o=r.getSize(new F),h=8/Math.max(o.x,o.y,o.z);n.scale.setScalar(h),n.rotation.z=1.2,n.rotation.y=.75,n.rotation.x=-.3,n.position.set(-3,1.5,-8),this.skullGroup=n,t.add(n)})}animate(t){if(this.skullGroup&&(this.skullGroup.rotation.y+=3e-4,this.skullGroup.position.y=.8+Math.sin(t*4e-4)*.15),this.skullMaterial){let e=t*.001;this.skullMaterial.emissiveIntensity=.12+Math.sin(e*.5)*.08,this.skullMaterial.opacity=1}}dispose(){this.skullGroup&&(this.skullGroup.traverse(t=>{t instanceof wt&&(t.geometry.dispose(),t.material instanceof Oe&&t.material.dispose())}),this.skullGroup=null),this.skullMaterial?.dispose(),this.skullMaterial=null}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac})};var Jr=class s{scene;camera;renderer;circleTexture;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;lightningBolts=[];particleAnimations=[];canvas;animationFrameId=null;targetFps=30;lastFrameTime=0;lastTime=0;isPaused=!1;groundWaterTexture=null;groundWaterNormalMap=null;groundMaterial=null;starField=null;ambientParticles=null;ambientParticleVelocities=null;resizeTimeout=null;skullService=Ae(Zs);visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);init(t){this.canvas=t,this.createCircleTexture(),this.initScene(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.particleAnimations=[],this.starField?.geometry.dispose(),this.starField?.material?.dispose(),this.starField=null,this.ambientParticles?.geometry.dispose(),this.ambientParticles?.material?.dispose(),this.ambientParticles=null,this.ambientParticleVelocities=null,this.skullService.dispose(),this.scene?.clear(),this.renderer?.dispose(),this.circleTexture?.dispose()}createCircleTexture(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this.circleTexture=new Vi(t)}initScene(){let t=this.canvas,e=t.clientWidth,n=t.clientHeight,i=this.getViewportSettings(e,n);this.scene=new Fa,this.scene.background=new Mt(657931),this.baseCameraFov=i.fov,this.camera=new qe(this.baseCameraFov,e/n,.1,1e3),this.scene.fog=i.useFog?new Fs(657931,.02):null,this.camera.position.set(0,i.cameraY,i.cameraZ),this.camera.lookAt(0,1,0),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new qc({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gl,this.renderer.toneMapping=Ha,this.renderer.toneMappingExposure=1.2;let r=new ka(3470813,.3);this.scene.add(r);let a=new Vs(16777215,1.5);a.position.set(5,10,5),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.near=.5,a.shadow.camera.far=50,a.shadow.camera.left=-15,a.shadow.camera.right=15,a.shadow.camera.top=15,a.shadow.camera.bottom=-15,this.scene.add(a);let o=new Vs(4491519,.6);o.position.set(-5,8,-3),this.scene.add(o);let l=new rn(2254591,1.5,25);l.position.set(-8,3,0),this.scene.add(l);let c=new rn(52394,1.2,25);c.position.set(8,3,0),this.scene.add(c);let f=1.5*88;this.groundWaterTexture=this.createSeaWaterTexture(),this.groundWaterNormalMap=this.createSeaWaterNormalMap();let d=new Vr({map:this.groundWaterTexture,normalMap:this.groundWaterNormalMap,normalScale:new Lt(.7,.7),color:21964,roughness:.06,metalness:.05,transmission:.18,thickness:.4,transparent:!0,opacity:.85,clearcoat:1,clearcoatRoughness:.06,emissive:736064,emissiveIntensity:.25});this.groundMaterial=d;let _=new Hi(f,f),g=new wt(_,d);g.rotation.x=-Math.PI/2,g.position.set(0,0,0),g.receiveShadow=!0,this.scene.add(g),this.createStarfield(),this.createAmbientParticles(),this.skullService.load(this.scene)}createSeaWaterTexture(){let e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,1024);i.addColorStop(0,"#001840"),i.addColorStop(.38,"#002d6a"),i.addColorStop(.65,"#003d88"),i.addColorStop(1,"#001840"),n.fillStyle=i,n.fillRect(0,0,1024,1024);let r=n.createRadialGradient(1024*.35,1024*.45,0,1024*.35,1024*.45,1024*.55);r.addColorStop(0,"rgba(0,80,180,0.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let a=[{color:"rgba(0,120,210,0.40)",amplitude:28,frequency:.018,rows:18,lineWidth:.2},{color:"rgba(0,160,230,0.28)",amplitude:14,frequency:.035,rows:30,lineWidth:.2},{color:"rgba(20,210,240,0.20)",amplitude:7,frequency:.07,rows:48,lineWidth:.2},{color:"rgba(80,230,255,0.12)",amplitude:3,frequency:.14,rows:72,lineWidth:.2}];for(let l of a){n.strokeStyle=l.color,n.lineWidth=l.lineWidth;for(let c=0;c<l.rows;c++){let h=(c+.5)/l.rows*1024,u=c*.63;n.beginPath(),n.moveTo(0,h);for(let f=0;f<=1024;f+=2){let d=h+Math.sin(f*l.frequency+u)*l.amplitude+Math.sin(f*l.frequency*.51+u*1.7)*(l.amplitude*.42);n.lineTo(f,d)}n.stroke()}}n.fillStyle="rgba(220,250,255,0.11)";for(let l=0;l<160;l++)n.beginPath(),n.arc(Math.random()*1024,Math.random()*1024,.8+Math.random()*3.2,0,Math.PI*2),n.fill();let o=new Vi(e);return o.wrapS=Nn,o.wrapT=Nn,o}createSeaWaterNormalMap(){let e=document.createElement("canvas");e.width=512,e.height=512;let n=e.getContext("2d"),i=n.createImageData(512,512),r=i.data,a=l=>l*Math.PI*2/512;for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=Math.sin(c*a(4)+l*a(3))*.45+Math.sin(c*a(7)+l*a(5))*.3+Math.sin(c*a(11)-l*a(8))*.25,u=Math.cos(l*a(4)+c*a(3))*.45+Math.cos(l*a(7)+c*a(5))*.3+Math.cos(l*a(11)-c*a(8))*.25,f=(l*512+c)*4;r[f]=Math.round((h*.5+.5)*255),r[f+1]=Math.round((u*.5+.5)*255),r[f+2]=255,r[f+3]=255}n.putImageData(i,0,0);let o=new Vi(e);return o.wrapS=ui,o.wrapT=ui,o.repeat.set(4,4),o}createStarfield(){let e=new Qt,n=new Float32Array(2e3*3),i=new Float32Array(2e3*3);for(let a=0;a<2e3;a++){let o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=80+Math.random()*120;n[a*3]=c*Math.sin(l)*Math.cos(o),n[a*3+1]=Math.abs(c*Math.cos(l))*.6+5,n[a*3+2]=c*Math.sin(l)*Math.sin(o);let h=Math.random();h<.6?(i[a*3]=.8+Math.random()*.2,i[a*3+1]=.85+Math.random()*.15,i[a*3+2]=1):h<.85?(i[a*3]=.4+Math.random()*.3,i[a*3+1]=.6+Math.random()*.3,i[a*3+2]=1):(i[a*3]=1,i[a*3+1]=.8+Math.random()*.2,i[a*3+2]=.6+Math.random()*.4)}e.setAttribute("position",new xe(n,3)),e.setAttribute("color",new xe(i,3));let r=new He({size:.6,map:this.circleTexture,transparent:!0,opacity:.85,vertexColors:!0,blending:dn,depthWrite:!1,sizeAttenuation:!0,fog:!1});this.starField=new nn(e,r),this.scene.add(this.starField)}createAmbientParticles(){let e=new Qt,n=new Float32Array(120*3);this.ambientParticleVelocities=new Float32Array(120*3);for(let r=0;r<120;r++)n[r*3]=(Math.random()-.5)*20,n[r*3+1]=.5+Math.random()*6,n[r*3+2]=(Math.random()-.5)*16,this.ambientParticleVelocities[r*3]=(Math.random()-.5)*.003,this.ambientParticleVelocities[r*3+1]=.001+Math.random()*.004,this.ambientParticleVelocities[r*3+2]=(Math.random()-.5)*.003;e.setAttribute("position",new xe(n,3));let i=new He({map:this.circleTexture,color:4491519,size:.12,transparent:!0,opacity:.4,blending:dn,depthWrite:!1});this.ambientParticles=new nn(e,i),this.scene.add(this.ambientParticles)}animate(t=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(i=>this.animate(i));let e=1e3/this.targetFps;if(t-this.lastFrameTime<e)return;this.lastFrameTime=t,this.lastTime=t;let n=t*1e-4;if(this.timeSlowActive||(this.camera.position.x=this.cameraOriginalPosition.x+Math.sin(n)*.3,this.camera.position.y=this.cameraOriginalPosition.y+Math.sin(n*.7)*.2),this.groundWaterNormalMap&&(this.groundWaterNormalMap.offset.x-=58e-5,this.groundWaterNormalMap.offset.y+=32e-5),this.groundMaterial){let i=t*.001,r=.65+Math.sin(i*.9)*.28+Math.sin(i*1.7+1.2)*.12;this.groundMaterial.normalScale.set(r,r),this.groundMaterial.emissiveIntensity=.22+Math.sin(i*.6)*.1+Math.sin(i*1.3+.8)*.05,this.groundMaterial.roughness=.06+Math.abs(Math.sin(i*.4))*.06}for(let i=this.lightningBolts.length-1;i>=0;i--){let r=this.lightningBolts[i].material;(!r||r.opacity<.01)&&this.lightningBolts.splice(i,1)}if(this.particleAnimations.forEach(i=>{let r=i.geometry.attributes.position.array;for(let a=0;a<i.particleCount;a++){let o=i.velocities[a*2+1];i.velocities[a*2]+=o;let l=i.velocities[a*2],c=Math.sqrt(r[a*3]**2+r[a*3+2]**2);r[a*3]=Math.cos(l)*c,r[a*3+2]=Math.sin(l)*c}i.geometry.attributes.position.needsUpdate=!0}),this.starField&&(this.starField.rotation.y+=8e-5),this.skullService.animate(t),this.ambientParticles&&this.ambientParticleVelocities){let i=this.ambientParticles.geometry.attributes.position.array,r=this.ambientParticleVelocities,a=i.length/3;for(let o=0;o<a;o++)i[o*3]+=r[o*3],i[o*3+1]+=r[o*3+1],i[o*3+2]+=r[o*3+2],i[o*3+1]>8&&(i[o*3+1]=.5,i[o*3]=(Math.random()-.5)*20,i[o*3+2]=(Math.random()-.5)*16);this.ambientParticles.geometry.attributes.position.needsUpdate=!0,this.ambientParticles.material.opacity=.3+Math.sin(t*.001)*.1}this.renderer.render(this.scene,this.camera)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this.renderer)return;let t=this.canvas.clientWidth,e=this.canvas.clientHeight,n=this.getViewportSettings(t,e);this.camera.aspect=t/e,this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.scene.fog=n.useFog?new Fs(657931,.02):null,this.camera.position.set(0,n.cameraY,n.cameraZ),this.cameraOriginalPosition=new F(0,n.cameraY,n.cameraZ),this.baseCameraFov=n.fov,this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}getViewportSettings(t,e){let n=t/e,i=t<520,r=n<.9,a=i||r||e<520,o=60,l=10,c=4;return a&&(l=12),{fov:o,cameraZ:l,cameraY:c,useFog:!0}}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac})};var Kc=.4,Ka=class s{createCharacterMesh(t,e){let n=new Ye,i=new Mt(t),r=new Mt("#ffffff"),a=new Mt(657930).lerp(i,.35),o=this.createTarantulaPatternTexture(a,i),l=new Qn({color:new Mt(16777215).lerp(r,.85),roughness:.2,metalness:.1,emissive:r,emissiveIntensity:2.5}),c=new Qn({color:new Mt(1710618).lerp(i,.9),roughness:.9,metalness:.1,map:o,emissive:i,emissiveIntensity:.2}),h=new Kn(.48,20,20);h.scale(1.2,.48,1.44);let u=new wt(h,c);u.position.set(0,.45,.18),u.castShadow=!0,u.receiveShadow=!0,n.add(u);let f=l;for(let I=0;I<2;I++){let N=I===0?-1:1,k=new Ye,B=new Tn(.07,.1,.18,10),O=new wt(B,f);O.position.set(.12*N,.26,.52),O.rotation.x=Math.PI/8,O.rotation.z=Math.PI/10*N,O.castShadow=!0,O.receiveShadow=!0,k.add(O);let X=new Oa(.06,.4,20),Q=new wt(X,f);Q.position.set(.14*N,.14,.6),Q.rotation.x=Math.PI/2+Math.PI/10,Q.rotation.z=Math.PI/12*N,Q.castShadow=!0,Q.receiveShadow=!0,k.add(Q),n.add(k)}let d=l,_=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],g=(I,N,k,B)=>{(X=>{let Q=new wt(B,d),et=new un;et.position.copy(N.position),et.rotation.copy(N.rotation),Q.position.set(0,X,0),Q.castShadow=!0,Q.receiveShadow=!0,et.add(Q),I.add(et)})(k/2)},m=new Tn(.12,.08,.5,10),p=new Tn(.1,.06,.55,10),v=new Tn(.07,.03,.7,10),E=new Kn(.07,12,12),y=new Tn(.012,.006,.22,4),b=new Tn(.014,.006,.17,4),M=new Tn(.012,.005,.15,4),w=new Tn(.012,.005,.08,4),C=new Tn(.01,.004,.12,4);for(let I=0;I<2;I++){let N=I===0?-1:1;for(let k=0;k<4;k++){let B=new Ye,O=_[k]*(I===0?1:-1),X=(Math.PI/2.8+k*.05)*N,Q=.55,et=new wt(m,d);et.position.set(.2*N,-.1,0),et.rotation.z=X*1.2,et.castShadow=!0,et.receiveShadow=!0,B.add(et);for(let rt=0;rt<22;rt++){let vt=new wt(y,d),kt=rt/8*Math.PI*2;vt.position.set(.25*N+Math.cos(kt)*.08,-.1+Math.sin(kt)*.08,0),vt.rotation.z=X*1.15+(Math.random()-.5)*.35,vt.rotation.y=kt,B.add(vt)}let st=new wt(p,d);st.position.set(.65*N,-.28,0),st.rotation.z=X*.75,st.castShadow=!0,st.receiveShadow=!0,B.add(st),g(B,st,Q,E);for(let rt=0;rt<10;rt++){let vt=new wt(b,d),kt=rt/8*Math.PI*2;vt.position.set(.6*N+Math.cos(kt)*.08,-.2+Math.sin(kt)*.03,0),vt.rotation.z=X*.95+(Math.random()-.5)*.4,vt.rotation.y=kt,B.add(vt)}for(let rt=0;rt<8;rt++){let vt=new wt(M,d),kt=rt/6*Math.PI*2;vt.position.set(.7*N+Math.cos(kt)*.06,-.28+Math.sin(kt)*.06,0),vt.rotation.z=X*.7+(Math.random()-.5)*.3,vt.rotation.y=kt,B.add(vt)}let At=new wt(v,d);At.position.set(1.025*N,-.7,0),At.rotation.z=Math.PI/5.3*N,At.castShadow=!0,At.receiveShadow=!0,B.add(At);for(let rt=0;rt<10;rt++){let vt=new wt(w,d),kt=rt/7*Math.PI*2;vt.position.set(.925*N+Math.cos(kt)*.07,-.55+Math.sin(kt)*.07,0),vt.rotation.z=Math.PI/8*N+(Math.random()-.5)*.4,vt.rotation.y=kt,B.add(vt)}for(let rt=0;rt<6;rt++){let vt=new wt(C,d),kt=rt/4*Math.PI*2;vt.position.set(1.025*N+Math.cos(kt)*.05,-.7+Math.sin(kt)*.05,0),vt.rotation.z=Math.PI/6*N+(Math.random()-.5)*.3,vt.rotation.y=kt,B.add(vt)}let Zt=[.5,.25,0,-.2][k];B.rotation.y=O,B.position.set(.4*N,.3,Zt),n.add(B);let Ht=O,Y=-.02+(Math.random()-.5)*.04,j=Math.PI/120*N+(Math.random()-.5)*.02;B.rotation.set(Y,Ht,j);let mt=()=>{let rt=.08+Math.random()*.08,vt=.08+Math.random()*.08,kt=0,Xt=.32+Math.random()*.45,Kt=.22+Math.random()*.35,ne=2+Math.random()*8,zt=Math.random(),ye=K.timeline({onComplete:()=>{K.delayedCall(ne,mt)}});ye.to(B.rotation,{x:Y-vt,y:Ht-rt,z:j+kt*N,duration:Xt*.9,ease:"sine.out"}).to(B.rotation,{x:Y+vt*.35,y:Ht+rt,z:j-0,duration:Xt*1.2,ease:"sine.in"}).to(B.rotation,{x:Y,y:Ht,z:j,duration:Kt,ease:"power2.out"}),zt<.35&&ye.to(B.rotation,{x:Y+(Math.random()*.08-.04),y:Ht+(Math.random()*.12-.06),z:j+(Math.random()*.12-.06)*N,duration:2+Math.random()*.08,ease:"power3.inOut"})},Ot=2+Math.random()*8;K.delayedCall(Ot,mt)}}let x=new Kn(.75,30,30),T=new Qn({color:new Mt(1184274).lerp(i,.7),roughness:.85,metalness:.1,map:o,emissive:i,emissiveIntensity:.15}),P=new wt(x,T);P.position.set(0,.9,-.7),n.add(P);let L=Math.random()*1.5;return K.to(P.scale,{x:1.05,y:1.05,z:1.05,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:L}),n.position.set(e.x,e.y+Kc,e.z),n}disposeCharacterMesh(t,e){t&&(e.remove(t),t.traverse(n=>{n instanceof wt&&(n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(i=>{i.map?.dispose(),i.emissiveMap?.dispose(),i.roughnessMap?.dispose(),i.metalnessMap?.dispose(),i.normalMap?.dispose(),i.dispose()}):(n.material.map?.dispose(),n.material.emissiveMap?.dispose(),n.material.roughnessMap?.dispose(),n.material.metalnessMap?.dispose(),n.material.normalMap?.dispose(),n.material.dispose()))}))}createTarantulaPatternTexture(t,e){let i=document.createElement("canvas");i.width=256,i.height=256;let r=i.getContext("2d");r.fillStyle=t.getStyle(),r.fillRect(0,0,256,256);let a=r.createRadialGradient(256/2,256/2,20,256/2,256/2,256/2);a.addColorStop(0,"rgba(255, 255, 255, 0.08)"),a.addColorStop(.7,"rgba(0, 0, 0, 0.1)"),a.addColorStop(1,"rgba(0, 0, 0, 0.4)"),r.fillStyle=a,r.fillRect(0,0,256,256),r.strokeStyle=e.getStyle(),r.fillStyle=e.getStyle(),r.globalAlpha=.5,r.lineWidth=3,r.lineJoin="round";for(let l=0;l<5;l++){let c=(l+.5)*51.2,h=256/2,u=40+Math.sin(l*.8)*10,f=15;r.beginPath(),r.moveTo(h-u,c-f),r.lineTo(h,c),r.lineTo(h+u,c-f),r.stroke()}r.globalAlpha=.15,r.lineWidth=1;for(let l=0;l<80;l++){let c=Math.random()*256,h=Math.random()*256,u=8+Math.random()*12,f=Math.random()*Math.PI*2;r.beginPath(),r.moveTo(c,h),r.lineTo(c+Math.cos(f)*u,h+Math.sin(f)*u),r.strokeStyle=l%3===0?e.getStyle():"rgba(0, 0, 0, 0.6)",r.stroke()}r.globalAlpha=.3;for(let l=0;l<25;l++){let c=Math.random()*256,h=Math.random()*256,u=3+Math.random()*6,f=3+Math.random()*6,d=Math.random()*Math.PI;r.save(),r.translate(c,h),r.rotate(d),r.beginPath(),r.ellipse(0,0,u,f,0,0,Math.PI*2),r.fillStyle=l%2===0?e.getStyle():"rgba(0, 0, 0, 0.5)",r.fill(),r.restore()}r.globalAlpha=1;let o=new Vi(i);return o.wrapS=ui,o.wrapT=ui,o.repeat.set(1.6,1.6),o.anisotropy=4,o}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac})};var Qa=class s{sceneService=Ae(Jr);activePoisonObjects=[];activePoisonTweens=[];persistentShields=new Map;comboTimeoutId=null;actionToken=0;dispose(){this.comboTimeoutId&&(clearTimeout(this.comboTimeoutId),this.comboTimeoutId=null),this.cleanupPoisonEffects(),this.persistentShields.forEach((t,e)=>this.disposePersistentShield(e)),this.persistentShields.clear()}createTeleportationEntrance(t,e,n){t.position.set(e.x,e.y+Kc,e.z),t.scale.set(.01,.01,.01),t.visible=!1;let i=K.timeline();i.call(()=>{t.visible=!0}),i.to(t.scale,{x:n==="right"?-1:1,y:1,z:1,duration:.8,ease:"elastic.out(1, 0.5)"})}animateAction(t,e){let{character1:n,character2:i,character1Mesh:r,character2Mesh:a}=e;this.cleanupPoisonEffects(),this.actionToken+=1;let o=this.actionToken;this.comboTimeoutId&&(clearTimeout(this.comboTimeoutId),this.comboTimeoutId=null);let l=n?t.attackerId===n.id:!1,c=i?t.attackerId===i.id:!1,h=l?r:c?a:null,u=n?t.defenderId===n.id:!1,f=i?t.defenderId===i.id:!1,d=u?r:f?a:null;if(t.type==="poison"&&!t.attackerId){d&&this.animatePoisonTick(d,t);return}if(!h||!d)return;K.killTweensOf(h.position),K.killTweensOf(h.rotation),K.killTweensOf(h.scale),K.killTweensOf(d.position),K.killTweensOf(d.rotation),K.killTweensOf(d.scale);let _=g=>{let m=g==="critical",p=g==="miss",v=g==="poison",E=g==="skip",y=jr(mn({},t),{type:g});this.cinematicCameraZoom(h,d,m);let b=this.getCharacterBasePosition(l,h,n,i),M=this.getCharacterBasePosition(!l,d,n,i),w=mn({},b),C=K.timeline();if(h.position.set(b.x,b.y,b.z),h.rotation.set(0,l?Math.PI/3:-Math.PI/3,0),h.scale.set(l?1:-1,1,1),d.position.set(M.x,M.y,M.z),d.rotation.set(0,l?-Math.PI/3:Math.PI/3,0),d.scale.set(l?-1:1,1,1),p&&C.call(()=>{this.breakPersistentEnergyShield(d)}),E)return C;m&&(this.sceneService.timeSlowActive=!0,C.call(()=>{this.createLightningStrike(h.position,d.position)}));let x=l?1.3:-1.3;return C.to(h.scale,{x,y:.7,z:1.3,duration:.2,ease:"power2.in"}),C.to(h.rotation,{y:l?Math.PI+Math.PI*2:-Math.PI-Math.PI*2,duration:.15,ease:"power4.inOut"},"<"),C.to(h.position,{x:l?M.x-.9:M.x+.9,y:M.y+1,z:l?M.z-1:M.z+1,duration:.15,ease:"power4.inOut",onComplete:()=>{this.createMassiveImpact(d.position,y),this.createEnergyWave(d.position,m),m&&this.screenFlash(),v&&this.animatePoisonAttack(d);let T=K.timeline();if(p)T.to(d.position,{y:d.position.y+.2,duration:.08,ease:"power2.out"}),T.to(d.rotation,{x:-.1,duration:.08,ease:"power2.out"},"<"),T.to(d.position,{y:d.position.y,duration:.15,ease:"bounce.out"}),T.to(d.rotation,{x:0,duration:.15,ease:"power2.out"},"<");else{T.to(d.position,{y:d.position.y+.5,duration:.06,ease:"power4.out"}),T.to(d.rotation,{z:(l?1:-1)*.8,y:(l?1:-1)*Math.PI*.25,x:.5,duration:.06,ease:"power3.out"},"<");let P=l?-.6:.6;T.to(d.scale,{x:P,y:.6,z:.75,duration:.06,ease:"power3.in"},"<"),T.to(d.position,{x:d.position.x+(l?1.8:-1.8),y:d.position.y+1.2,z:d.position.z+(l?.6:-.6),duration:.18,ease:"power3.out"}),T.to(d.rotation,{z:(l?1:-1)*Math.PI*1.2,y:(l?1:-1)*Math.PI*.6,x:Math.PI*.8,duration:.18,ease:"power2.out"},"<"),T.to(d.scale,{x:l?-1.1:1.1,y:.85,z:1.05,duration:.12,ease:"power1.out"},"<"),T.to(d.position,{x:d.position.x+(l?2.5:-2.5),y:d.position.y+.2,z:d.position.z+(l?.4:-.4),duration:.2,ease:"power1.in"}),T.to(d.rotation,{z:(l?1:-1)*Math.PI*2.2,y:(l?1:-1)*Math.PI*1.1,x:Math.PI*1.3,duration:.2,ease:"power1.in"},"<"),T.to(d.scale,{x:l?-.9:.9,y:1.1,z:.9,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}}),C.to(h.position,{x:w.x,y:w.y+3,z:w.z,duration:.4,ease:"power2.in"}),C.to(h.rotation,{x:Math.PI*2,duration:.4,ease:"power2.in"},"<"),C.to(h.position,{x:w.x,y:w.y,z:w.z,duration:.3,ease:"bounce.out"}),C.to(h.rotation,{x:0,y:l?Math.PI/3:-Math.PI/3,duration:.3},"<"),C.to(h.scale,{x:l?1:-1,y:1,z:1,duration:.2}),p||(C.to(d.position,{x:M.x,y:M.y,z:M.z,duration:.5,ease:"power2.inOut"},"-=0.5"),C.to(d.rotation,{z:0,y:l?-Math.PI/3:Math.PI/3,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),C.to(d.scale,{x:l?-1:1,y:1,z:1,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1")),C.call(()=>{h.position.set(b.x,b.y,b.z),h.rotation.set(0,l?Math.PI/3:-Math.PI/3,0),h.scale.set(l?1:-1,1,1),d.position.set(M.x,M.y,M.z),d.rotation.set(0,l?-Math.PI/3:Math.PI/3,0),d.scale.set(l?-1:1,1,1),this.resetCamera(),this.sceneService.timeSlowActive=!1}),C};if(t.type==="shield"){this.createPersistentEnergyShield(h);return}if(t.type==="combo"){let g=_("attack");this.comboTimeoutId=setTimeout(()=>{this.actionToken===o&&(_("attack"),this.comboTimeoutId=null)},(g.duration()+.1)*500);return}_(t.type)}cleanupPoisonEffects(){let t=this.sceneService.scene;this.activePoisonObjects.forEach(e=>{e.parent&&t.remove(e)}),this.activePoisonObjects=[],this.activePoisonTweens.forEach(e=>e.kill()),this.activePoisonTweens=[]}getCharacterBasePosition(t,e,n,i){let r=t?n:i;return r?{x:r.position.x,y:r.position.y+Kc,z:r.position.z}:{x:e.position.x,y:e.position.y,z:e.position.z}}animatePoisonTick(t,e){let n=this.sceneService.scene,i=this.sceneService.circleTexture,r=new Ye;r.position.copy(t.position),r.position.y+=1.1,n.add(r);let a=new Mt(8191851),o=new Mt(3538810),l=new dr(1.4,.08,18,80),c=new Qn({color:a,emissive:o,emissiveIntensity:1.3,transparent:!0,opacity:.85}),h=new wt(l,c);h.rotation.x=Math.PI/2,r.add(h);let u=new wt(l,c.clone());u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/3,u.scale.set(.7,.7,.7),r.add(u);let f=new rn(8191851,3,6);f.position.copy(r.position),f.position.y+=.4,n.add(f);let d=[],_=new kr({map:i,color:8191851,transparent:!0,opacity:.8,blending:dn,depthWrite:!1});for(let p=0;p<16;p++){let v=new Ns(_.clone()),E=Math.random()*Math.PI*2,y=.4+Math.random()*.8;v.position.set(Math.cos(E)*y,.2+Math.random()*.8,Math.sin(E)*y);let b=.2+Math.random()*.35;v.scale.set(b,b,b),r.add(v),d.push(v)}let g=[];g.push(K.to(h.scale,{x:1.9,y:1.9,z:1.9,duration:.7,ease:"power2.out"})),g.push(K.to(h.material,{opacity:0,duration:.7,ease:"power2.out"})),g.push(K.to(u.scale,{x:2.3,y:2.3,z:2.3,duration:.8,ease:"power2.out",delay:.05})),g.push(K.to(u.material,{opacity:0,duration:.8,ease:"power2.out",delay:.05})),g.push(K.to(h.rotation,{z:Math.PI*1.2,duration:.7,ease:"power2.out"})),g.push(K.to(u.rotation,{z:-Math.PI*1.2,duration:.8,ease:"power2.out"})),d.forEach(p=>{let v=Math.random()*Math.PI*2,E=.6+Math.random()*.8,y=Math.random()*.15;g.push(K.to(p.position,{x:Math.cos(v)*E,y:p.position.y+1+Math.random()*.6,z:Math.sin(v)*E,duration:.9,delay:y,ease:"power2.out"})),g.push(K.to(p.material,{opacity:0,duration:.9,delay:y,ease:"power2.out"}))}),g.push(K.to(f,{intensity:0,duration:.7,ease:"power2.out",onComplete:()=>{n.remove(f)}})),this.activePoisonObjects.push(r,f),this.activePoisonTweens.push(...g);let m=K.delayedCall(.95,()=>{n.remove(r),l.dispose(),c.dispose(),u.material.dispose(),d.forEach(p=>{p.material instanceof Oe&&p.material.dispose()})});this.createMassiveImpact(t.position,e),this.activePoisonTweens.push(m)}animatePoisonAttack(t){let e=this.sceneService.scene,n=this.sceneService.camera,i=this.sceneService.circleTexture,r=new Mt(3800852),a=new Mt(65348);for(let y=0;y<3;y++){let b=new dr(.5+y*.12,.065-y*.004,16,80),M=new Qn({color:r,emissive:a,emissiveIntensity:1.6-y*.12,transparent:!0,opacity:.92-y*.05}),w=new wt(b,M);w.position.copy(t.position),w.position.y=.2+y*.4,w.rotation.x=Math.PI/2,e.add(w);let C=y*.065,x=.75+y*.1,T=y%2===0?1:-1;K.to(w.scale,{x:4,y:4,z:4,duration:x,delay:C,ease:"power2.out"}),K.to(w.rotation,{z:T*Math.PI*2.5,duration:x,delay:C,ease:"power2.out"}),K.to(M,{opacity:0,duration:x,delay:C,ease:"power2.out",onComplete:()=>{e.remove(w),b.dispose(),M.dispose()}})}let o=new kr({map:i,color:8191851,transparent:!0,opacity:1,blending:dn,depthWrite:!1}),l=20;for(let y=0;y<l;y++){let b=y/l,M=b*Math.PI*6,w=b*3.2,C=.75+Math.sin(b*Math.PI)*.45,x=new Ns(o.clone());x.position.set(t.position.x+Math.cos(M)*C,t.position.y+w,t.position.z+Math.sin(M)*C);let T=.1+Math.random()*.14;x.scale.set(T,T,T),e.add(x),K.to(x.position,{x:t.position.x+Math.cos(M+Math.PI)*(C+1),y:x.position.y+1.8+Math.random()*.8,z:t.position.z+Math.sin(M+Math.PI)*(C+1),duration:1+Math.random()*.5,delay:b*.45,ease:"power2.out"}),K.to(x.material,{opacity:0,duration:.7,delay:.35+b*.45,ease:"power2.in",onComplete:()=>{e.remove(x),x.material.dispose()}})}let c=45,h=new Qt,u=new Float32Array(c*3),f=[];for(let y=0;y<c;y++){u[y*3]=t.position.x,u[y*3+1]=t.position.y+1.5,u[y*3+2]=t.position.z;let b=y/c*Math.PI*2,M=(Math.random()-.25)*Math.PI,w=.3+Math.random()*.5;f.push(new F(Math.cos(b)*Math.cos(M)*w,Math.abs(Math.sin(M))*w+.04,Math.sin(b)*Math.cos(M)*w))}h.setAttribute("position",new xe(u,3));let d=new He({color:3800852,size:.2,transparent:!0,opacity:1,blending:dn,map:i,alphaTest:.01}),_=new nn(h,d);e.add(_),K.to(d,{opacity:0,duration:1.3,onUpdate:()=>{let y=h.attributes.position;for(let b=0;b<c;b++)y.array[b*3]+=f[b].x,y.array[b*3+1]+=f[b].y,y.array[b*3+2]+=f[b].z,f[b].y-=.018;y.needsUpdate=!0},onComplete:()=>{e.remove(_),h.dispose(),d.dispose()}});let g=new rn(3800852,0,9);g.position.copy(t.position),g.position.y+=1.5,e.add(g);let m=new rn(65348,0,5);m.position.copy(t.position),m.position.y+=.3,e.add(m),K.to(g,{intensity:10,duration:.08,ease:"expo.out",onComplete:()=>{K.to(g,{intensity:0,duration:.85,ease:"power2.out",onComplete:()=>{e.remove(g)}})}}),K.to(m,{intensity:6,duration:.18,ease:"expo.out",onComplete:()=>{K.to(m,{intensity:0,duration:.75,delay:.15,ease:"power2.out",onComplete:()=>{e.remove(m)}})}});let p=n.position.clone(),v=K.timeline(),E=.18;for(let y=0;y<5;y++)v.to(n.position,{x:p.x+(Math.random()-.5)*E,y:p.y+(Math.random()-.5)*E*.5,duration:.055,ease:"none"});v.to(n.position,{x:p.x,y:p.y,duration:.07,ease:"none"})}createEnergyShield(t){let e=this.sceneService.scene,n=this.sceneService.camera,i=this.sceneService.circleTexture,r=new Ye;r.position.copy(t.position),r.position.y+=1,e.add(r);let a=new hr(2.5,1),o=new mi({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:ve,emissive:65535,emissiveIntensity:.8}),l=new wt(a,o);r.add(l);let c=new Kn(2.2,32,32),h=new mi({color:4495871,transparent:!0,opacity:.4,side:ve,emissive:2254591,emissiveIntensity:1.2}),u=new wt(c,h);r.add(u);let f=new hr(1.8,1),d=new en({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:ve}),_=new wt(f,d);r.add(_);let g=40,m=new Qt,p=new Float32Array(g*3),v=[];for(let I=0;I<g;I++){let N=Math.random()*Math.PI*2,k=2+Math.random()*1.5,B=(Math.random()-.5)*3;p[I*3]=Math.cos(N)*k,p[I*3+1]=B,p[I*3+2]=Math.sin(N)*k,v.push(N,Math.random()*.02+.01)}m.setAttribute("position",new xe(p,3));let E=new He({map:i,color:65535,size:.18,transparent:!0,opacity:.8,blending:dn,depthWrite:!1}),y=new nn(m,E);r.add(y);let b=[];for(let I=0;I<3;I++){let N=new dr(1.5,.1,16,50),k=new en({color:65535,transparent:!0,opacity:.8,side:ve}),B=new wt(N,k);B.rotation.x=Math.PI/2,B.scale.set(.1,.1,.1),r.add(B),b.push(B),K.to(B.scale,{x:2,y:2,z:2,duration:.8,delay:I*.1,ease:"power2.out"}),K.to(k,{opacity:0,duration:.8,delay:I*.1})}let M=new rn(65535,30,8);M.position.copy(r.position),e.add(M);let w=new rn(16777215,20,6);w.position.copy(r.position),e.add(w);let C=new ur(.5,3,6),x=new en({color:16777215,transparent:!0,opacity:1,side:ve}),T=new wt(C,x);T.position.copy(r.position),T.lookAt(n.position),e.add(T),K.to(T.scale,{x:3,y:3,z:3,duration:.3,ease:"power2.out"}),K.to(x,{opacity:0,duration:.3,onComplete:()=>{e.remove(T),C.dispose(),x.dispose()}});let P=n.position.clone(),L=K.timeline();for(let I=0;I<6;I++)L.to(n.position,{x:P.x+(Math.random()-.5)*.2,y:P.y+(Math.random()-.5)*.2,z:P.z+(Math.random()-.5)*.15,duration:.03});L.to(n.position,{x:P.x,y:P.y,z:P.z,duration:.05}),K.to(l.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),K.to(_.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8}),K.to(u.scale,{x:1.3,y:1.3,z:1.3,duration:.2,yoyo:!0,repeat:1,ease:"power2.inOut"}),K.to(r.scale,{x:1.2,y:1.2,z:1.2,duration:.15,yoyo:!0,repeat:1,ease:"elastic.out(1, 0.3)"}),K.to(M,{intensity:50,duration:.1,yoyo:!0,repeat:3}),K.to(w,{intensity:35,duration:.15,yoyo:!0,repeat:2}),this.sceneService.particleAnimations.push({geometry:m,velocities:v,particleCount:g}),K.to([o,h,d,E],{opacity:0,duration:.5,delay:.5,onComplete:()=>{let I=this.sceneService.particleAnimations.findIndex(N=>N.geometry===m);I>-1&&this.sceneService.particleAnimations.splice(I,1),e.remove(r),e.remove(M),e.remove(w),a.dispose(),o.dispose(),c.dispose(),h.dispose(),f.dispose(),d.dispose(),m.dispose(),E.dispose(),b.forEach(N=>{N.geometry.dispose(),N.material.dispose()})}}),K.to([M,w],{intensity:0,duration:.5,delay:.5})}createPersistentEnergyShield(t){this.disposePersistentShield(t);let e=this.sceneService.scene,n=this.sceneService.camera,i=this.sceneService.circleTexture,r=new Ye;r.position.copy(t.position),r.position.y+=1,e.add(r);let a=new hr(2.5,1),o=new mi({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:ve,emissive:65535,emissiveIntensity:.8}),l=new wt(a,o);r.add(l);let c=new Kn(2.2,32,32),h=new mi({color:4495871,transparent:!0,opacity:.4,side:ve,emissive:2254591,emissiveIntensity:1.2}),u=new wt(c,h);r.add(u);let f=new hr(1.8,1),d=new en({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:ve}),_=new wt(f,d);r.add(_);let g=40,m=new Qt,p=new Float32Array(g*3),v=[];for(let k=0;k<g;k++){let B=Math.random()*Math.PI*2,O=2+Math.random()*1.5,X=(Math.random()-.5)*3;p[k*3]=Math.cos(B)*O,p[k*3+1]=X,p[k*3+2]=Math.sin(B)*O,v.push(B,Math.random()*.02+.01)}m.setAttribute("position",new xe(p,3));let E=new He({map:i,color:65535,size:.18,transparent:!0,opacity:.8,blending:dn,depthWrite:!1}),y=new nn(m,E);r.add(y);let b=[];for(let k=0;k<3;k++){let B=new dr(1.5,.1,16,50),O=new en({color:65535,transparent:!0,opacity:.8,side:ve}),X=new wt(B,O);X.rotation.x=Math.PI/2,X.scale.set(.1,.1,.1),r.add(X),b.push(X),K.to(X.scale,{x:2,y:2,z:2,duration:.8,delay:k*.1,ease:"power2.out"}),K.to(O,{opacity:0,duration:.8,delay:k*.1})}let M=new rn(65535,30,8);M.position.copy(r.position),e.add(M);let w=new rn(16777215,20,6);w.position.copy(r.position),e.add(w);let C=new ur(.5,3,6),x=new en({color:16777215,transparent:!0,opacity:1,side:ve}),T=new wt(C,x);T.position.copy(r.position),T.lookAt(n.position),e.add(T),K.to(T.scale,{x:3,y:3,z:3,duration:.3,ease:"power2.out"}),K.to(x,{opacity:0,duration:.3,onComplete:()=>{e.remove(T),C.dispose(),x.dispose()}});let P=n.position.clone(),L=K.timeline();for(let k=0;k<6;k++)L.to(n.position,{x:P.x+(Math.random()-.5)*.2,y:P.y+(Math.random()-.5)*.2,z:P.z+(Math.random()-.5)*.15,duration:.03});L.to(n.position,{x:P.x,y:P.y,z:P.z,duration:.05}),K.to(l.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),K.to(_.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8}),K.to(u.scale,{x:1.3,y:1.3,z:1.3,duration:.2,yoyo:!0,repeat:1,ease:"power2.inOut"}),K.to(r.scale,{x:1.2,y:1.2,z:1.2,duration:.15,yoyo:!0,repeat:1,ease:"elastic.out(1, 0.3)"}),K.to(M,{intensity:50,duration:.1,yoyo:!0,repeat:3}),K.to(w,{intensity:35,duration:.15,yoyo:!0,repeat:2});let I=this.sceneService.particleAnimations.push({geometry:m,velocities:v,particleCount:g})-1,N=[];N.push(K.to(l.rotation,{x:"+=6.28",y:"+=6.28",duration:4,repeat:-1,ease:"none"})),N.push(K.to(_.rotation,{x:"-=6.28",z:"+=6.28",duration:3,repeat:-1,ease:"none"})),N.push(K.to(u.scale,{x:1.15,y:1.15,z:1.15,duration:1.2,yoyo:!0,repeat:-1,ease:"sine.inOut"})),N.push(K.to(h,{opacity:.55,duration:1.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),N.push(K.to(M,{intensity:15,duration:1,delay:.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),N.push(K.to(w,{intensity:10,duration:.8,delay:.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),this.persistentShields.set(t,{shieldGroup:r,mainLight:M,pulseLight:w,particleAnimIndex:I,materials:[o,h,d,E],geometries:[a,c,f,m],rings:b,idleTweens:N})}breakPersistentEnergyShield(t){let e=this.persistentShields.get(t);if(!e){this.createEnergyShield(t);return}let n=this.sceneService.scene,i=this.sceneService.camera,{shieldGroup:r,mainLight:a,pulseLight:o,materials:l,geometries:c,rings:h,idleTweens:u}=e;u.forEach(_=>_.kill());let f=i.position.clone(),d=K.timeline();for(let _=0;_<8;_++)d.to(i.position,{x:f.x+(Math.random()-.5)*.3,y:f.y+(Math.random()-.5)*.3,z:f.z+(Math.random()-.5)*.2,duration:.03});d.to(i.position,{x:f.x,y:f.y,z:f.z,duration:.05}),K.to(a,{intensity:60,duration:.1,yoyo:!0,repeat:1}),K.to(o,{intensity:45,duration:.1,yoyo:!0,repeat:1}),K.to(r.scale,{x:1.6,y:1.6,z:1.6,duration:.15,ease:"power4.out"}),K.to(l,{opacity:0,duration:.4,delay:.15,onComplete:()=>{let _=c[3],g=this.sceneService.particleAnimations.findIndex(m=>m.geometry===_);g>-1&&this.sceneService.particleAnimations.splice(g,1),n.remove(r),n.remove(a),n.remove(o),c.forEach(m=>m.dispose()),l.forEach(m=>m.dispose()),h.forEach(m=>{m.geometry.dispose(),m.material.dispose()}),this.persistentShields.delete(t)}}),K.to([a,o],{intensity:0,duration:.4,delay:.15})}disposePersistentShield(t){let e=this.persistentShields.get(t);if(!e)return;let n=this.sceneService.scene,{shieldGroup:i,mainLight:r,pulseLight:a,materials:o,geometries:l,rings:c,idleTweens:h}=e;h.forEach(d=>d.kill());let u=l[3],f=this.sceneService.particleAnimations.findIndex(d=>d.geometry===u);f>-1&&this.sceneService.particleAnimations.splice(f,1),n.remove(i),n.remove(r),n.remove(a),l.forEach(d=>d.dispose()),o.forEach(d=>d.dispose()),c.forEach(d=>{d.geometry.dispose(),d.material.dispose()}),this.persistentShields.delete(t)}createLightningStrike(t,e){let n=this.sceneService.scene,i=this.sceneService.camera,r=this.sceneService.circleTexture,a=i.position.clone(),o=K.timeline();for(let M=0;M<8;M++)o.to(i.position,{x:a.x+(Math.random()-.5)*.3,y:a.y+(Math.random()-.5)*.3,z:a.z+(Math.random()-.5)*.2,duration:.03});o.to(i.position,{x:a.x,y:a.y,z:a.z,duration:.1});let l=t.clone(),c=e.clone();l.y+=6.5,c.y+=1.2;let h=(M,w,C)=>{let x=[];x.push(M.clone());for(let T=1;T<C;T++){let P=T/C,L=new F().lerpVectors(M,w,P);L.y+=.8-P*.8;let I=.8+Math.sin(P*Math.PI*2)*.6;L.x+=(Math.random()-.5)*I,L.z+=(Math.random()-.5)*I,x.push(L)}return x.push(w.clone()),x},u=(M,w,C,x)=>{let T=new Qt().setFromPoints(M),P=new pi({color:w,transparent:!0,opacity:C,blending:dn}),L=new Os(T,P);n.add(L),this.sceneService.lightningBolts.push(L);let I=M.map(O=>O.clone()),N=T.attributes.position,k=()=>{for(let O=0;O<I.length;O++){let X=I[O],Q=O===0||O===I.length-1?0:x;N.setXYZ(O,X.x+(Math.random()-.5)*Q,X.y+(Math.random()-.5)*Q,X.z+(Math.random()-.5)*Q)}N.needsUpdate=!0};k();let B=K.to(P,{opacity:Math.max(.15,C*.25),duration:.06,repeat:6,yoyo:!0,onUpdate:k});return{line:L,geometry:T,material:P,flickerTween:B}},f=2;for(let M=0;M<f;M++){let w=h(l,c,18+M*3),C=u(w,M===0?16777215:12124159,1,.55),x=u(w,8388607,.45,.25);for(let T=0;T<2;T++){let P=Math.floor(Math.random()*(w.length-6))+2,L=[w[P].clone()],I=6+Math.floor(Math.random()*5);for(let k=1;k<=I;k++){let O=L[L.length-1].clone();O.x+=(Math.random()-.5)*1.6,O.y+=(Math.random()-.8)*.9,O.z+=(Math.random()-.5)*1.6,L.push(O)}let N=u(L,11206655,.6,.35);K.to(N.material,{opacity:0,duration:.2,delay:.08,onComplete:()=>{N.flickerTween.kill(),n.remove(N.line),N.geometry.dispose(),N.material.dispose()}})}K.to([C.material,x.material],{opacity:0,duration:.35,delay:.15+M*.05,onComplete:()=>{C.flickerTween.kill(),x.flickerTween.kill(),n.remove(C.line),n.remove(x.line),C.geometry.dispose(),x.geometry.dispose(),C.material.dispose(),x.material.dispose();let T=this.sceneService.lightningBolts.indexOf(C.line);T>-1&&this.sceneService.lightningBolts.splice(T,1);let P=this.sceneService.lightningBolts.indexOf(x.line);P>-1&&this.sceneService.lightningBolts.splice(P,1)}})}let d=new rn(16777215,50,15);d.position.copy(c),n.add(d);let _=new rn(11206655,30,12);_.position.copy(l),n.add(_);let g=30,m=new Qt,p=new Float32Array(g*3),v=[];for(let M=0;M<g;M++){let w=Math.random();p[M*3]=l.x+(c.x-l.x)*w+(Math.random()-.5)*2,p[M*3+1]=l.y+(c.y-l.y)*w+(Math.random()-.5)*2,p[M*3+2]=l.z+(c.z-l.z)*w+(Math.random()-.5)*2,v.push(new F((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3))}m.setAttribute("position",new xe(p,3));let E=new He({color:16777215,size:.2,transparent:!0,opacity:1,blending:dn,map:r,alphaTest:.01}),y=new nn(m,E);n.add(y),K.to(E,{opacity:0,duration:.8,onUpdate:()=>{let M=m.attributes.position;for(let w=0;w<g;w++)M.array[w*3]+=v[w].x,M.array[w*3+1]+=v[w].y,M.array[w*3+2]+=v[w].z;M.needsUpdate=!0},onComplete:()=>{n.remove(y),m.dispose(),E.dispose()}});let b=3;for(let M=0;M<b;M++){let w=new ur(.5,1,32),C=new en({color:M%2===0?16777215:11206655,transparent:!0,opacity:.9,side:ve}),x=new wt(w,C);x.position.copy(c),x.position.y=.1,x.rotation.x=-Math.PI/2,n.add(x),K.to(x.scale,{x:8+M*2,y:8+M*2,duration:.6,delay:M*.05,ease:"power2.out"}),K.to(C,{opacity:0,duration:.6,delay:M*.05,onComplete:()=>{n.remove(x),w.dispose(),C.dispose()}})}K.to(d,{intensity:0,duration:.4,delay:.2,onComplete:()=>{n.remove(d)}}),K.to(_,{intensity:0,duration:.4,delay:.2,onComplete:()=>{n.remove(_)}})}createMassiveImpact(t,e){let n=this.sceneService.scene,i=this.sceneService.circleTexture,r=e.type==="critical",a=e.type==="miss"?43775:17663;for(let d=0;d<3;d++){let _=new ur(.5,.8,32),g=new en({color:a,transparent:!0,opacity:.8,side:ve}),m=new wt(_,g);m.position.copy(t),m.position.y=.1,m.rotation.x=-Math.PI/2,n.add(m),K.to(m.scale,{x:r?12:8,y:r?12:8,z:1,duration:.8,delay:d*.1,ease:"power2.out"}),K.to(g,{opacity:0,duration:.8,delay:d*.1,onComplete:()=>{n.remove(m),_.dispose(),g.dispose()}})}let o=r?60:40,l=new Qt,c=new Float32Array(o*3),h=[];for(let d=0;d<o;d++){c[d*3]=t.x,c[d*3+1]=t.y+2,c[d*3+2]=t.z;let _=r?.8:.5,g=d/o*Math.PI*2,m=(Math.random()-.3)*Math.PI;h.push(new F(Math.cos(g)*Math.cos(m)*_,Math.sin(m)*_,Math.sin(g)*Math.cos(m)*_))}l.setAttribute("position",new xe(c,3));let u=new He({color:a,size:r?.25:.15,transparent:!0,opacity:1,blending:dn,map:i,alphaTest:.01}),f=new nn(l,u);n.add(f),K.to(u,{opacity:0,duration:1.2,onUpdate:()=>{let d=l.attributes.position;for(let _=0;_<o;_++)d.array[_*3]+=h[_].x,d.array[_*3+1]+=h[_].y,d.array[_*3+2]+=h[_].z,h[_].y-=.03;d.needsUpdate=!0},onComplete:()=>{n.remove(f),l.dispose(),u.dispose()}})}createEnergyWave(t,e){let n=this.sceneService.scene,i=new Kn(1,32,32),r=new en({color:17663,transparent:!0,opacity:.5,side:Je,wireframe:!1}),a=new wt(i,r);a.position.copy(t),a.position.y+=2,n.add(a),K.to(a.scale,{x:e?8:5,y:e?8:5,z:e?8:5,duration:.6,ease:"power2.out"}),K.to(r,{opacity:0,duration:.6,onComplete:()=>{n.remove(a),i.dispose(),r.dispose()}})}cinematicCameraZoom(t,e,n){if(n){let i=this.sceneService.camera,r=new F().addVectors(t.position,e.position).multiplyScalar(.5);K.to(i.position,{x:r.x,y:r.y+3,z:r.z+6,duration:.3,ease:"power2.inOut"}),K.to(i,{fov:Math.max(this.sceneService.baseCameraFov-10,45),duration:.3,ease:"power2.inOut",onUpdate:()=>{i.updateProjectionMatrix()}})}}resetCamera(){let t=this.sceneService.camera,e=this.sceneService.cameraOriginalPosition;K.to(t.position,{x:e.x,y:e.y,z:e.z,duration:.5,ease:"power2.out"}),K.to(t,{fov:this.sceneService.baseCameraFov,duration:.5,ease:"power2.out",onUpdate:()=>{t.updateProjectionMatrix()}})}screenFlash(){let t=this.sceneService.scene,e=this.sceneService.camera,n=new Hi(100,100),i=new en({color:16777215,transparent:!0,opacity:.8,side:ve}),r=new wt(n,i);r.position.copy(e.position),r.position.z-=5,r.lookAt(e.position),t.add(r),K.to(i,{opacity:0,duration:.2,onComplete:()=>{t.remove(r),n.dispose(),i.dispose()}})}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Le({token:s,factory:s.\u0275fac})};var QM=["battleCanvas"],to=class s{canvasRef;character1Mesh=null;character2Mesh=null;destroy$=new ro;battleService=Ae(Kr);sceneService=Ae(Jr);characterBuilder=Ae(Ka);vfxService=Ae(Qa);character1=null;character2=null;constructor(){Ad(()=>{this.sceneService.init(this.canvasRef.nativeElement)})}ngOnInit(){this.battleService.battleState$.pipe($s(this.destroy$)).subscribe(t=>{if(t){let e=this.character1,n=this.character2;this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null,this.character1?.health===0&&this.character1Mesh&&(this.character1Mesh.visible=!1),this.character2?.health===0&&this.character2Mesh&&(this.character2Mesh.visible=!1),!this.character1Mesh&&!this.character2Mesh?this.createCharacters():(e&&this.character1&&e.id!==this.character1.id&&this.replaceCharacter(1),n&&this.character2&&n.id!==this.character2.id&&this.replaceCharacter(2))}}),this.battleService.action$.pipe($s(this.destroy$)).subscribe(t=>{t&&this.vfxService.animateAction(t,{character1:this.character1,character2:this.character2,character1Mesh:this.character1Mesh,character2Mesh:this.character2Mesh})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),K.killTweensOf("*"),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.characterBuilder.disposeCharacterMesh(this.character1Mesh,this.sceneService.scene),this.characterBuilder.disposeCharacterMesh(this.character2Mesh,this.sceneService.scene),this.character1Mesh=null,this.character2Mesh=null,this.character1=null,this.character2=null}replaceCharacter(t){let e=t===1?this.character1:this.character2;if(!e)return;let n=t===1?this.character1Mesh:this.character2Mesh;this.characterBuilder.disposeCharacterMesh(n,this.sceneService.scene);let i=this.characterBuilder.createCharacterMesh(e.color,e.position);t===1?(i.rotation.y=Math.PI/3,this.character1Mesh=i):(i.scale.x=-1,i.rotation.y=-Math.PI/3,this.character2Mesh=i),this.sceneService.scene.add(i),this.vfxService.createTeleportationEntrance(i,e.position,t===1?"left":"right")}createCharacters(){if(!this.character1||!this.character2)return;let t=this.characterBuilder.createCharacterMesh(this.character1.color,this.character1.position);t.rotation.y=Math.PI/3,this.sceneService.scene.add(t);let e=this.characterBuilder.createCharacterMesh(this.character2.color,this.character2.position);e.scale.x=-1,e.rotation.y=-Math.PI/3,this.sceneService.scene.add(e),this.character1Mesh=t,this.character2Mesh=e,this.vfxService.createTeleportationEntrance(t,this.character1.position,"left"),this.vfxService.createTeleportationEntrance(e,this.character2.position,"right")}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-battle-canvas"]],viewQuery:function(e,n){if(e&1&&oo(QM,7),e&2){let i;lo(i=co())&&(n.canvasRef=i.first)}},features:[Id([Jr,Ka,Qa,Zs])],decls:2,vars:0,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"]],template:function(e,n){e&1&&Cn(0,"canvas",1,0)},dependencies:[Vn],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}"]})};var _d={RAT:{id:"char1",name:"Shelob",race:"rat",health:85,maxHealth:85,attack:18,defense:12,speed:22,focus:20,color:"#ff0000"},CAT:{id:"char2",name:"Aragog",race:"cat",health:90,maxHealth:90,attack:22,defense:13,speed:23,focus:14,color:"#0000ff"},BEAR:{id:"char3",name:"Anansi",race:"bear",health:130,maxHealth:130,attack:18,defense:22,speed:10,focus:10,color:"#444444"},HORSE:{id:"char4",name:"Arachne",race:"horse",health:110,maxHealth:110,attack:21,defense:14,speed:20,focus:10,color:"#dd8888"},GIRAFFE:{id:"char5",name:"Ungoliant",race:"giraffe",health:95,maxHealth:95,attack:19,defense:14,speed:13,focus:24,color:"#34f5dd"}};function tb(s,t){if(s&1){let e=Qs();me(0,"app-victory-banner",7),kn("terminateBattle",function(){bi(e);let i=ri(2);return Si(i.resetAndTerminateBattle())}),ge()}if(s&2){let e=ri();Ne("winner",e.winner)}}function eb(s,t){if(s&1&&(me(0,"div",3),Cn(1,"app-character-status-card",4)(2,"app-character-status-card",5),ge(),Ks(3,tb,1,1,"app-victory-banner",6)),s&2){let e=t;se(),Ne("character",e.team1[e.activeTeam1Index]),se(),Ne("character",e.team2[e.activeTeam2Index]),se(),nh(e.isComplete&&e.winner?3:-1)}}var Dm=class s{battleCanvas;destroy$=new ro;battleService=Ae(Kr);router=Ae(Fd);battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(wd(t=>t!==null));awaitingPlayerAction$=this.battleService.awaitingPlayerAction$;character1=null;character2=null;ngOnInit(){this.battleService.battleState$.pipe($s(this.destroy$)).subscribe(t=>this.updateActiveCharacters(t))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){this.battleService.startBattle([_d.HORSE],[_d.GIRAFFE])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.character1=null,this.character2=null,this.router.navigate(["/"])}onPlayerAction(t){this.battleService.performPlayerAction(t)}updateActiveCharacters(t){if(!t){this.character1=null,this.character2=null;return}this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=gn({type:s,selectors:[["app-battle"]],viewQuery:function(e,n){if(e&1&&oo(to,5),e&2){let i;lo(i=co())&&(n.battleCanvas=i.first)}},decls:8,vars:9,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","playerAction","isBattleActive","isAwaitingPlayerAction"],[1,"battle-overlay"],["alignment","left",3,"character"],["alignment","right",3,"character"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(e,n){if(e&1&&(me(0,"div",0)(1,"div",1),Cn(2,"app-battle-canvas"),Ks(3,eb,4,3),_n(4,"async"),ge(),me(5,"app-battle-controls",2),_n(6,"async"),_n(7,"async"),kn("startBattle",function(){return n.startBattle()})("playerAction",function(r){return n.onPlayerAction(r)}),ge()()),e&2){let i,r,a;se(3),nh((i=xn(4,3,n.battleState$))?3:-1,i),se(2),Ne("isBattleActive",(r=xn(6,5,n.isBattleActive$))!==null&&r!==void 0?r:!1)("isAwaitingPlayerAction",(a=xn(7,7,n.awaitingPlayerAction$))!==null&&a!==void 0?a:!1)}},dependencies:[Vn,Ld,Mo,bo,So,to],styles:[".canvas-wrapper[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;padding:4px;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 60px #34f5dd4d,inset 0 0 40px #34f5dd1a}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:20px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;z-index:10}@media (max-width: 580px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{flex-direction:column-reverse;justify-content:flex-end;gap:10px;height:100%;padding:10px 10px 60px}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%]{padding:8px;gap:8px}.battle-overlay[_ngcontent-%COMP%]{padding:8px 8px 60px;gap:8px}}"]})};export{Dm as BattleComponent};
