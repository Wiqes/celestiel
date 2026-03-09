import{f as bd}from"./8.js";import{a as Sd,b as Td}from"./31.js";import"./9.js";import{e as oo,f as lo}from"./14.js";import"./52.js";import"./41.js";import{c as so,d as ao}from"./18.js";import{m as yd,s as Md,u as kn}from"./42.js";import{Cb as me,Da as md,Db as ge,Eb as En,Ib as Ys,Mb as zn,Nb as ii,P as Ws,Qb as Yc,Sb as no,T as Be,Ta as ie,Tb as io,Ub as ro,Z as De,Zb as xr,_b as Zs,a as un,ac as xd,b as Yr,e as ja,ec as vd,fa as xi,fb as dn,ga as vi,k as Qa,kb as qs,l as to,lc as fn,mc as pn,oa as Xs,s as pd,sb as Fe,tb as gd,ub as eo,wb as _d,yb as qc}from"./35.js";var co=class s{initiativeRandomMax=10;calculateInitiative(t){return t.speed+Math.floor(Math.random()*(this.initiativeRandomMax+1))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac,providedIn:"root"})};var ho=class s{baseHitChance=75;hitChanceSpeedFactor=.5;minHitChance=5;maxHitChance=100;critBaseChance=5;critSpeedFactor=.2;bearRageThreshold=.5;bearRageAttackFactor=.05;bearRageDefenseFactor=.3;horseRushSpeedFactor=.01;defenseMultiplier=.6;minDamage=1;calculateHitChance(t,e){let n=this.baseHitChance+(t.speed-e.speed)*this.hitChanceSpeedFactor;return t.debuffEffect&&(n-=t.debuffEffect.accuracyReduction),Math.max(this.minHitChance,Math.min(this.maxHitChance,n))}calculateBaseDamage(t,e){let n=t.attack;if(t.debuffEffect&&(n-=t.debuffEffect.attackReduction),t.race==="bear"&&t.health<t.maxHealth*this.bearRageThreshold){let o=(t.maxHealth-t.health)*this.bearRageAttackFactor;n+=o}let i=1;t.race==="horse"&&t.turnCount===0&&(i=.5+t.speed*this.horseRushSpeedFactor);let r=e.defense;e.race==="bear"&&e.health<e.maxHealth*this.bearRageThreshold&&(r+=e.defense*this.bearRageDefenseFactor);let a=n*i-r*this.defenseMultiplier;return Math.max(this.minDamage,a)}calculateCritChance(t){return this.critBaseChance+t.speed*this.critSpeedFactor}isCriticalHit(t){return Math.random()*100<t}isHit(t){return Math.random()*100<=t}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac,providedIn:"root"})};var zi=class s{poisonDeathDelayMs=1e3;poisonTickIntervalMs=3e3;poisonTickCount=4;poisonTimers=new Map;applyEndOfTurnEffects(t,e,n){!t||t.isComplete}startAutonomousPoisonTicks(t,e,n,i){this.clearPoisonTimersForCharacter(t.id);let r=e.team1.some(o=>o.id===t.id),a=[];for(let o=0;o<this.poisonTickCount;o++){let l=setTimeout(()=>{this.applyPoisonDamage(t,e,n,r,i)},(o+1)*this.poisonTickIntervalMs);a.push(l)}this.poisonTimers.set(t.id,a)}clearPoisonTimersForCharacter(t){let e=this.poisonTimers.get(t);e&&(e.forEach(n=>clearTimeout(n)),this.poisonTimers.delete(t))}clearAllPoisonTimers(){this.poisonTimers.forEach(t=>t.forEach(e=>clearTimeout(e))),this.poisonTimers.clear()}applyPoisonDamage(t,e,n,i,r){if(!t||!t.poisonEffect||!t.isAlive||e.isComplete)return;let a=t.poisonEffect.damagePerTurn;t.health=Math.max(0,t.health-a),t.isAlive=t.health>0,this.emitAction(e,n,{attackerId:"",defenderId:t.id,damage:a,type:"poison",timestamp:Date.now(),message:`${t.name} takes poison damage!`}),t.poisonEffect.turnsRemaining--,t.poisonEffect.turnsRemaining<=0&&(delete t.poisonEffect,this.clearPoisonTimersForCharacter(t.id)),t.isAlive||(this.clearPoisonTimersForCharacter(t.id),setTimeout(()=>{r(!i)},this.poisonDeathDelayMs))}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac,providedIn:"root"})};var uo=class s{effectsService=De(zi);poisonBaseChance=20;poisonFocusFactor=.5;poisonSpeedFactor=.3;poisonAttackFactor=.3;poisonFocusDamageFactor=.5;poisonTurns=4;comboBaseChance=25;comboSpeedFactor=.6;comboDamageFactor=.6;comboDamageDelayMs=500;debuffAttackFactor=.4;debuffAccuracyFactor=.3;applyRacialSkills(t,e,n,i,r){switch(t.race){case"rat":this.applyPoisonBite(t,e,n,i,r);break;case"cat":this.applyComboStrike(t,e,n,i);break;case"giraffe":this.applyDistanceControl(t,e);break}}applyForcedPoison(t,e,n,i,r){let a=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(a)},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`}),this.effectsService.startAutonomousPoisonTicks(e,n,i,r)}applyForcedCombo(t,e,n,i,r){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0,r?.()},this.comboDamageDelayMs)}applyPoisonBite(t,e,n,i,r){let a=this.poisonBaseChance+t.focus*this.poisonFocusFactor+t.speed*this.poisonSpeedFactor;if(Math.random()*100<a){let o=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(o)},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`}),this.effectsService.startAutonomousPoisonTicks(e,n,i,r)}}applyComboStrike(t,e,n,i){let r=this.comboBaseChance+t.speed*this.comboSpeedFactor;if(Math.random()*100<r){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0},this.comboDamageDelayMs)}}applyDistanceControl(t,e){let n=t.focus*this.debuffAttackFactor,i=t.focus*this.debuffAccuracyFactor;e.debuffEffect={attackReduction:n,accuracyReduction:i}}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac,providedIn:"root"})};var fo=class s{initiativeService=De(co);damageService=De(ho);racialSkillsService=De(uo);effectsService=De(zi);counterAttackDelayMs=2e3;effectsDelayMs=500;damageApplyDelayMs=350;deathNotificationDelayMs=1500;getCounterAttackDelayMs(){return this.counterAttackDelayMs}getEffectsDelayMs(){return this.effectsDelayMs}getTurnOrder(t,e){let n=this.initiativeService.calculateInitiative(t),i=this.initiativeService.calculateInitiative(e),r=n>=i;return{firstAttacker:r?t:e,firstDefender:r?e:t,firstAttackerIsTeam1:r}}executeTurn(t,e,n,i){if(!t||t.isComplete)return;let r=t.team1[t.activeTeam1Index],a=t.team2[t.activeTeam2Index];if(!r||!a){n();return}let{firstAttacker:o,firstDefender:l}=this.getTurnOrder(r,a);this.executeAutoAttack(o,l,t,e,i),setTimeout(()=>{t.isComplete||(l.isAlive&&this.executeAutoAttack(l,o,t,e,i),setTimeout(()=>{this.effectsService.applyEndOfTurnEffects(t,e,i)},this.effectsDelayMs))},this.counterAttackDelayMs)}executeAutoAttack(t,e,n,i,r){this.executeAutoAttackInternal(t,e,n,i,r)}executePlayerAttack(t,e,n,i,r,a){if(t.turnCount++,a==="shield"){t.shieldEffect={blocksNextAttack:!0},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"shield",timestamp:Date.now(),message:`${t.name} raised a shield!`});return}if(this.consumeShield(e)){this.executeMiss(t,e,n,i);return}if(a==="miss"){this.executeMiss(t,e,n,i);return}if(a==="poison"){this.racialSkillsService.applyForcedPoison(t,e,n,i,r);return}if(a==="combo"){this.racialSkillsService.applyForcedCombo(t,e,n,i,()=>this.handleDeathCallback(t,e,n,r));return}let o=this.damageService.calculateBaseDamage(t,e),l=Math.floor(a==="critical"?o*1.5:o);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:l,type:a,timestamp:Date.now()}),this.applyDamageWithDelay(t,e,n,r,l)}applyEndOfTurnEffects(t,e,n){this.effectsService.applyEndOfTurnEffects(t,e,n)}executeAutoAttackInternal(t,e,n,i,r){if(t.turnCount++,this.consumeShield(e)){this.executeMiss(t,e,n,i);return}let a=this.damageService.calculateHitChance(t,e);if(!this.damageService.isHit(a)){this.executeSkipAttack(t,e,n,i);return}let o=this.damageService.calculateBaseDamage(t,e),l=this.damageService.calculateCritChance(t),c=this.damageService.isCriticalHit(l);c&&(o*=1.5),o=Math.floor(o),this.racialSkillsService.applyRacialSkills(t,e,n,i,r),this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:o,type:c?"critical":"attack",timestamp:Date.now()}),this.applyDamageWithDelay(t,e,n,r,o)}executeMiss(t,e,n,i){this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"miss",timestamp:Date.now(),message:`${t.name} missed!`})}executeSkipAttack(t,e,n,i){this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"skip",timestamp:Date.now(),message:`${t.name} skipped their turn!`})}consumeShield(t){return t.shieldEffect?.blocksNextAttack?(delete t.shieldEffect,!0):!1}emitAction(t,e,n){t.actions.push(n),e.next(n)}applyDamageWithDelay(t,e,n,i,r){setTimeout(()=>{n.isComplete||(e.health=Math.max(0,e.health-r),e.isAlive=e.health>0,e.isAlive||setTimeout(()=>{let a=t===n.team1[n.activeTeam1Index];i(a)},this.deathNotificationDelayMs))},this.damageApplyDelayMs)}handleDeathCallback(t,e,n,i){e.isAlive||setTimeout(()=>{let r=t===n.team1[n.activeTeam1Index];i(r)},this.deathNotificationDelayMs)}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac,providedIn:"root"})};var Zr=class s{turnService=De(fo);effectsService=De(zi);team1StartPosition={x:-2,y:-1,z:3};team2StartPosition={x:3,y:-1,z:-3};battleStateSubject=new to(null);battleState$=this.battleStateSubject.asObservable();awaitingPlayerActionSubject=new to(!1);awaitingPlayerAction$=this.awaitingPlayerActionSubject.asObservable();actionSubject=new to(null);action$=this.actionSubject.asObservable();currentTurn=null;awaitingPlayerPhase=null;startBattle(t,e){if(t.length===0||e.length===0)throw new Error("Both teams must have at least one character");let n={team1:this.prepareTeam(t,this.team1StartPosition),team2:this.prepareTeam(e,this.team2StartPosition),activeTeam1Index:0,activeTeam2Index:0,actions:[],winner:null,isComplete:!1};this.battleStateSubject.next(n),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null,this.beginNextTurn()}performPlayerAction(t){let e=this.battleStateSubject.value;if(!e||e.isComplete||!this.currentTurn||!this.awaitingPlayerPhase)return;let{team1:n,team2:i}=this.currentTurn;this.awaitingPlayerActionSubject.next(!1),this.turnService.executePlayerAttack(n,i,e,this.actionSubject,r=>this.handleCharacterDeath(r),t),this.battleStateSubject.next(un({},e)),this.awaitingPlayerPhase==="first"?setTimeout(()=>{let r=this.battleStateSubject.value;!r||r.isComplete||(i.isAlive&&(this.turnService.executeAutoAttack(i,n,r,this.actionSubject,a=>this.handleCharacterDeath(a)),this.battleStateSubject.next(un({},r))),this.finalizeTurn())},this.turnService.getCounterAttackDelayMs()):this.finalizeTurn(),this.awaitingPlayerPhase=null}beginNextTurn(){let t=this.battleStateSubject.value;if(!t||t.isComplete)return;let e=t.team1[t.activeTeam1Index],n=t.team2[t.activeTeam2Index];if(!e||!n){this.endBattle();return}let i=this.turnService.getTurnOrder(e,n);if(this.currentTurn={team1:e,team2:n,firstAttackerIsTeam1:i.firstAttackerIsTeam1},i.firstAttackerIsTeam1){this.awaitingPlayerPhase="first",this.awaitingPlayerActionSubject.next(!0);return}this.turnService.executeAutoAttack(i.firstAttacker,i.firstDefender,t,this.actionSubject,r=>this.handleCharacterDeath(r)),this.battleStateSubject.next(un({},t)),this.awaitingPlayerPhase="second",setTimeout(()=>{let r=this.battleStateSubject.value;if(!(!r||r.isComplete)){if(!this.currentTurn?.team1.isAlive){this.finalizeTurn();return}this.awaitingPlayerActionSubject.next(!0)}},this.turnService.getCounterAttackDelayMs())}finalizeTurn(){setTimeout(()=>{let t=this.battleStateSubject.value;!t||t.isComplete||(this.turnService.applyEndOfTurnEffects(t,this.actionSubject,e=>this.handleCharacterDeath(e)),this.battleStateSubject.next(un({},t)),t.isComplete||this.beginNextTurn())},this.turnService.getEffectsDelayMs())}handleCharacterDeath(t){let e=this.battleStateSubject.value;if(!e||e.isComplete)return;let n=t?"team2":"team1",i=t?"activeTeam2Index":"activeTeam1Index",r=e[n],a=e[i],o=this.getNextAliveIndex(r,a);if(o!==null){e[i]=o,this.battleStateSubject.next(un({},e));return}this.endBattle()}getNextAliveIndex(t,e){let n=t.findIndex((r,a)=>a>e&&r.isAlive);if(n!==-1)return n;let i=t.findIndex(r=>r.isAlive);return i!==-1?i:null}endBattle(){let t=this.battleStateSubject.value;if(!t)return;t.isComplete=!0,this.effectsService.clearAllPoisonTimers();let i=(t.team1.some(r=>r.isAlive)?t.team1:t.team2).filter(r=>r.isAlive);t.winner=i.length>0?i[0].name:null,this.battleStateSubject.next(un({},t)),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null}resetBattle(){this.effectsService.clearAllPoisonTimers(),this.battleStateSubject.next(null),this.actionSubject.next(null),this.awaitingPlayerActionSubject.next(!1),this.currentTurn=null,this.awaitingPlayerPhase=null}prepareTeam(t,e){return t.map(n=>Yr(un({},n),{isAlive:!0,position:e,turnCount:0}))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac,providedIn:"root"})};var po=class s{health;maxHealth;healthBarClass;alignment="left";get healthPercentage(){return this.maxHealth?this.health/this.maxHealth*100:0}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-health-bar"]],inputs:{health:"health",maxHealth:"maxHealth",healthBarClass:"healthBarClass",alignment:"alignment"},decls:5,vars:10,consts:[[1,"health-container"],[1,"health-bar-wrapper"],[1,"health-bar"],[1,"health-text"]],template:function(e,n){e&1&&(me(0,"div",0)(1,"div",1),En(2,"div",2),me(3,"span",3),xr(4),ge()()()),e&2&&(eo("left",n.alignment==="left")("right",n.alignment==="right"),ie(2),_d(n.healthBarClass),gd("width",n.healthPercentage,"%"),ie(2),xd("",n.health," / ",n.maxHealth,""))},dependencies:[kn],styles:['.health-container[_ngcontent-%COMP%]{margin-bottom:12px}.health-bar-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:32px;background:#58585880;border-radius:16px;overflow:hidden;border:1px solid rgba(0,0,0,.5)}.health-bar[_ngcontent-%COMP%]{height:100%;transition:width .6s cubic-bezier(.4,0,.2,1);position:relative;border-radius:16px}.health-bar.character1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#f43f5ef2,#fb923c,#f43f5ef2);box-shadow:0 0 20px #fb923ca6,inset 0 0 10px #ffffff4d}.health-bar.character2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#34d3f5f2,#58f5d3,#34d3f5f2);box-shadow:0 0 20px #34f5dd99,inset 0 0 10px #ffffff4d}.health-bar[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.4) 0%,transparent 100%);border-radius:16px 16px 0 0}.health-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700;font-size:1rem;pointer-events:none;z-index:1}.health-container.right[_ngcontent-%COMP%]   .health-text[_ngcontent-%COMP%]{color:#000}.health-container.left[_ngcontent-%COMP%]   .health-text[_ngcontent-%COMP%]{color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8)}@media (max-width: 1024px){.health-bar-wrapper[_ngcontent-%COMP%]{height:28px}}@media (max-width: 580px){.health-bar-wrapper[_ngcontent-%COMP%]{height:24px}.health-text[_ngcontent-%COMP%]{font-size:.75rem}}@media (max-width: 480px){.health-bar-wrapper[_ngcontent-%COMP%]{height:20px}.health-text[_ngcontent-%COMP%]{font-size:.7rem}}']})};var mo=class s{attack;defense;static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-stats-row"]],inputs:{attack:"attack",defense:"defense"},decls:3,vars:4,consts:[[1,"stats-row"],["styleClass","stat-chip attack-stat",3,"label"],["styleClass","stat-chip defense-stat",3,"label"]],template:function(e,n){e&1&&(me(0,"div",0),En(1,"p-chip",1)(2,"p-chip",2),ge()),e&2&&(ie(),Yc("label","\u2694\uFE0F ",n.attack,""),ie(),Yc("label","\u{1F6E1}\uFE0F ",n.defense,""))},dependencies:[Td,Sd],styles:[".stats-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){display:inline-flex;align-items:center;border:1px solid rgba(52,245,221,.3)!important;color:#fff!important;font-weight:600;font-size:.95rem;padding:6px 12px;white-space:nowrap;box-shadow:0 0 15px #34f5dd33;transition:all .2s ease}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip):hover{background:#34f5dd40!important;transform:scale(1.05)}@media (max-width: 1024px){.stats-row[_ngcontent-%COMP%]{gap:6px}}@media (max-width: 580px){.stats-row[_ngcontent-%COMP%]{gap:6px;flex-wrap:wrap}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){flex:1 1 calc(50% - 3px);justify-content:center;min-width:0}}@media (max-width: 480px){.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){font-size:.8rem;padding:.3rem .6rem}}@media (max-width: 360px){.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){flex-basis:100%}}@media (max-width: 580px){[_nghost-%COMP%]     .p-chip{padding:4px 8px!important;font-size:12px!important}}"]})};var go=class s{character;alignment="left";get healthBarClass(){return this.alignment==="left"?"character1":"character2"}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-character-status-card"]],inputs:{character:"character",alignment:"alignment"},decls:6,vars:11,consts:[[1,"character-status"],[1,"character-card","glass-panel"],[1,"character-name"],[3,"health","maxHealth","healthBarClass","alignment"],[3,"attack","defense"]],template:function(e,n){e&1&&(me(0,"div",0)(1,"div",1)(2,"div",2),xr(3),ge(),En(4,"app-health-bar",3)(5,"app-stats-row",4),ge()()),e&2&&(eo("left",n.alignment==="left")("right",n.alignment==="right"),ie(3),Zs(n.character.name),ie(),Fe("health",n.character.health)("maxHealth",n.character.maxHealth)("healthBarClass",n.healthBarClass)("alignment",n.alignment),ie(),Fe("attack",n.character.attack)("defense",n.character.defense))},dependencies:[kn,po,mo],styles:[".right[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 15% 25%,rgba(152,255,238,.6) 0%,transparent 122%),radial-gradient(circle at 85% 15%,rgba(120,240,214,.53) 0%,transparent 90%),radial-gradient(circle at 50% 90%,rgba(160,255,234,.4) 0%,transparent 80%),radial-gradient(circle at 70% 50%,rgba(100,230,191,.28) 0%,transparent 65%),linear-gradient(145deg,#0a231999,#0c1e1666,#081c1480 60%,#0c1e1666);border:1px solid rgba(52,245,180,.25);box-shadow:0 8px 24px #0006,0 0 15px #34f5b414,inset 0 1px #ffffff0f}.left[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(244,63,94,.42) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(251,146,60,.8) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(244,63,94,.42) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(251,146,60,.8) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}.character-status[_ngcontent-%COMP%]{pointer-events:auto;animation:slideIn .8s ease-out}.character-status.left[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInLeftDramatic}.character-status.right[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInRightDramatic}.character-card[_ngcontent-%COMP%]{padding:16px 20px;min-width:260px;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .3s ease}.character-name[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:1.8rem;margin-bottom:12px;letter-spacing:1px}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}.right[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]   .character-name[_ngcontent-%COMP%]{color:#000}.left[_ngcontent-%COMP%] > .glass-panel[_ngcontent-%COMP%]   .character-name[_ngcontent-%COMP%]{color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8)}@keyframes _ngcontent-%COMP%_slideInLeftDramatic{0%{opacity:0;transform:translate(-150px) rotate(-10deg) scale(.5)}70%{transform:translate(10px) rotate(2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@keyframes _ngcontent-%COMP%_slideInRightDramatic{0%{opacity:0;transform:translate(150px) rotate(10deg) scale(.5)}70%{transform:translate(-10px) rotate(-2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@media (max-width: 1024px){.character-card[_ngcontent-%COMP%]{min-width:200px;padding:12px 14px}.character-name[_ngcontent-%COMP%]{font-size:1.4rem}}@keyframes _ngcontent-%COMP%_slideInDown{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 580px){[_nghost-%COMP%]{width:100%}.character-status[_ngcontent-%COMP%]{width:100%}.character-status.left[_ngcontent-%COMP%], .character-status.right[_ngcontent-%COMP%]{animation-name:slideInDown}.character-card[_ngcontent-%COMP%]{min-width:unset;width:100%;padding:10px 12px}.character-name[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:8px}}@media (max-width: 480px){.character-card[_ngcontent-%COMP%]{padding:8px 10px}.character-name[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:6px}}"]})};var _o=class s{winner;terminateBattle=new Xs;onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},outputs:{terminateBattle:"terminateBattle"},decls:10,vars:7,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-subtitle"],[1,"victory-particles"],["severity","secondary","size","large","styleClass","battle-btn terminate-btn",3,"onClick","label"]],template:function(e,n){e&1&&(me(0,"div",0)(1,"div",1)(2,"h1",2),xr(3),ge(),me(4,"p",3),xr(5),fn(6,"translate"),ge(),En(7,"div",4),me(8,"p-button",5),fn(9,"translate"),zn("onClick",function(){return n.onTerminateBattle()}),ge()()()),e&2&&(ie(3),Zs(n.winner),ie(2),Zs(pn(6,3,"VICTORY!")),ie(3),Fe("label",pn(9,5,"Terminate")))},dependencies:[kn,lo,oo,ao,so],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;border:1px solid;border-image:linear-gradient(135deg,#c0c6d099,#a8b2c140,#e8ecf214,#a8b2c140,#c0c6d099) 1;box-shadow:0 0 60px #7b8cad1f,inset 0 0 80px #7b8cad08,0 24px 64px #000c;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-1px;background:linear-gradient(135deg,rgba(192,198,208,.05) 0%,transparent 30%,transparent 70%,rgba(192,198,208,.05) 100%);z-index:-1;border-radius:10px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(168,178,193,.1);border-radius:6px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin:20px 0;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#e8ecf2,#c0c6d0 30%,#fff,#c0c6d0 70%,#e8ecf2);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#c0c6d0;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 24px rgba(123,140,173,.4),0 0 48px rgba(123,140,173,.15),0 2px 12px rgba(0,0,0,.9);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:1px solid rgba(168,178,193,.18)}.terminate-btn[_ngcontent-%COMP%]{margin-top:clamp(16px,3vw,32px)}.glass-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0d1117f5,#161b26ed),radial-gradient(ellipse at center,rgba(123,140,173,.05) 0%,transparent 70%);border-radius:10px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin:15px 0}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 580px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin:10px 0;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}']})};function Em(s,t){if(s&1){let e=Ys();me(0,"div",3)(1,"p-button",4),fn(2,"translate"),zn("onClick",function(){xi(e);let i=ii();return vi(i.onStartBattle())}),ge()()}s&2&&(ie(),Fe("label",pn(2,1,"Release the Spiders!")))}function wm(s,t){if(s&1){let e=Ys();me(0,"div",5)(1,"p-button",6),fn(2,"translate"),zn("onClick",function(){xi(e);let i=ii();return vi(i.onPlayerAction("attack"))}),ge(),me(3,"p-button",7),fn(4,"translate"),zn("onClick",function(){xi(e);let i=ii();return vi(i.onPlayerAction("critical"))}),ge(),me(5,"p-button",8),fn(6,"translate"),zn("onClick",function(){xi(e);let i=ii();return vi(i.onPlayerAction("combo"))}),ge(),me(7,"p-button",9),fn(8,"translate"),zn("onClick",function(){xi(e);let i=ii();return vi(i.onPlayerAction("poison"))}),ge(),me(9,"p-button",10),fn(10,"translate"),zn("onClick",function(){xi(e);let i=ii();return vi(i.onPlayerAction("shield"))}),ge()()}s&2&&(ie(),Fe("label",pn(2,5,"Attack")),ie(2),Fe("label",pn(4,7,"Critical")),ie(2),Fe("label",pn(6,9,"Combo")),ie(2),Fe("label",pn(8,11,"Poison")),ie(2),Fe("label",pn(10,13,"Shield")))}var xo=class s{isBattleActive=!1;isAwaitingPlayerAction=!1;startBattle=new Xs;playerAction=new Xs;onStartBattle(){this.startBattle.emit()}onPlayerAction(t){this.playerAction.emit(t)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive",isAwaitingPlayerAction:"isAwaitingPlayerAction"},outputs:{startBattle:"startBattle",playerAction:"playerAction"},decls:3,vars:2,consts:[[1,"control-panel","glass-panel"],["class","main-button-wrapper",4,"ngIf"],["class","control-buttons",4,"ngIf"],[1,"main-button-wrapper"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"],[1,"control-buttons"],["icon","pi pi-angle-double-right","severity","secondary","size","large","styleClass","battle-btn attack-btn",3,"onClick","label"],["icon","pi pi-bolt","severity","secondary","size","large","styleClass","battle-btn critical-btn",3,"onClick","label"],["icon","pi pi-clone","severity","secondary","size","large","styleClass","battle-btn combo-btn",3,"onClick","label"],["icon","pi pi-bullseye","severity","secondary","size","large","styleClass","battle-btn poison-btn",3,"onClick","label"],["icon","pi pi-shield","severity","secondary","size","large","styleClass","battle-btn shield-btn",3,"onClick","label"]],template:function(e,n){e&1&&(me(0,"div",0),qs(1,Em,3,3,"div",1)(2,wm,11,15,"div",2),ge()),e&2&&(ie(),Fe("ngIf",!n.isBattleActive),ie(),Fe("ngIf",n.isBattleActive&&n.isAwaitingPlayerAction))},dependencies:[kn,yd,lo,oo,ao,so],styles:[".main-button-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:2000}.control-panel[_ngcontent-%COMP%]{padding:0;display:flex;position:absolute;align-items:center;justify-content:space-between;flex-wrap:wrap;bottom:20px;width:100%;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding-right:40px;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 580px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{justify-content:space-between;width:100%;flex-direction:row;flex-wrap:nowrap;gap:10px;padding-right:18px}.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px 20px!important}.control-buttons[_ngcontent-%COMP%]     .control-buttons, .control-buttons[_ngcontent-%COMP%]     .p-button-label{display:none!important}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:auto;min-width:56px;padding:12px 14px}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-label){display:none}.main-button-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button-icon){margin:0}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{padding-right:12px}}@media (max-width: 390px){.control-buttons[_ngcontent-%COMP%]     .p-button{padding:8px!important}}"]})};function yi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ld(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kr={duration:.5,overwrite:!1,delay:0},uh,He,_e,Hn=1e8,he=1/Hn,eh=Math.PI*2,Am=eh/4,Cm=0,Fd=Math.sqrt,Rm=Math.cos,Pm=Math.sin,Ne=function(t){return typeof t=="string"},Ae=function(t){return typeof t=="function"},bi=function(t){return typeof t=="number"},Co=function(t){return typeof t>"u"},ai=function(t){return typeof t=="object"},_n=function(t){return t!==!1},dh=function(){return typeof window<"u"},vo=function(t){return Ae(t)||Ne(t)},Nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ye=Array.isArray,Im=/random\([^)]+\)/g,Dm=/,\s*/g,Ed=/(?:-?\.?\d|\.)+/gi,fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ph=/[+-]=-?[.\d]+/,Lm=/[^,'"\[\]\s]+/gi,Fm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,be,ri,nh,mh,An={},So={},Od,Ud=function(t){return(So=jr(t,An))&&Ze},Ro=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},Bd=function(t,e){return t&&(An[t]=e)&&So&&(So[t]=e)||An},ea=function(){return 0},Nm={suppressEvents:!0,isStart:!0,kill:!1},yo={suppressEvents:!0,kill:!1},Om={suppressEvents:!0},gh={},Vi=[],ih={},zd,mn={},Jc={},wd=30,Mo=[],_h="",xh=function(t){var e=t[0],n,i;if(ai(e)||Ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Mo.length;i--&&!Mo[i].targetTest(e););n=Mo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new bh(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||xh(Gn(t))[0]._gsap},vh=function(t,e,n){return(n=t[e])&&Ae(n)?t[e]():Co(n)&&t.getAttribute&&t.getAttribute(e)||n},nn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ce=function(t){return Math.round(t*1e5)/1e5||0},Me=function(t){return Math.round(t*1e7)/1e7||0},Sr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Um=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},To=function(){var t=Vi.length,e=Vi.slice(0),n,i;for(ih={},Vi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yh=function(t){return!!(t._initted||t._startAt||t.add)},kd=function(t,e,n,i){Vi.length&&!He&&To(),t.render(e,n,i||!!(He&&e<0&&yh(t))),Vi.length&&!He&&To()},Vd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Lm).length<2?e:Ne(t)?t.trim():t},Hd=function(t){return t},Cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Bm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},jr=function(t,e){for(var n in e)t[n]=e[n];return t},Ad=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ai(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Eo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ks=function(t){var e=t.parent||be,n=t.keyframes?Bm(Ye(t.keyframes)):Cn;if(_n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},zm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Gd=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Po=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Gi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},km=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rh=function(t,e,n,i){return t._startAt&&(He?t._startAt.revert(yo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Vm=function s(t){return!t||t._ts&&s(t.parent)},Cd=function(t){return t._repeat?Qr(t._tTime,t=t.duration()+t._rDelay)*t:0},Qr=function(t,e){var n=Math.floor(t=Me(t/e));return t&&n===t?n-1:n},wo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Io=function(t){return t._end=Me(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},Do=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Io(t),n._dirty||vr(n,t)),t},Wd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=wo(t.rawTime(),e),(!e._dur||ra(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},si=function(t,e,n,i){return e.parent&&Gi(e),e._start=Me((bi(n)?n:n||t!==be?Vn(t,n,e):t._time)+e._delay),e._end=Me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Gd(t,e,"_first","_last",t._sort?"_start":0),sh(e)||(t._recent=e),i||Wd(t,e),t._ts<0&&Do(t,t._tTime),t},Xd=function(t,e){return(An.ScrollTrigger||Ro("scrollTrigger",e))&&An.ScrollTrigger.create(e,t)},qd=function(t,e,n,i,r){if(Eh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!He&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zd!==gn.frame)return Vi.push(t),t._lazy=[r,i],1},Hm=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},sh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gm=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Hm(t)&&!(!t._initted&&sh(t))||(t._ts<0||t._dp._ts<0)&&!sh(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ra(0,t._tDur,e),h=Qr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Qr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||He||i||t._zTime===he||!e&&t._zTime){if(!t._initted&&qd(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&rh(t,e,n,!0),t._onUpdate&&!n&&wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Gi(t,1),!n&&!He&&(wn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ts=function(t,e,n,i){var r=t._repeat,a=Me(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Me(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Do(t,t._tTime=t._tDur*o),t.parent&&Io(t),n||vr(t.parent,t),t},Rd=function(t){return t instanceof Ve?vr(t):ts(t,t._dur)},Xm={_start:0,endTime:ea,totalDuration:ea},Vn=function s(t,e,n){var i=t.labels,r=t._recent||Xm,a=t.duration()>=Hn?r.endTime(!1):t._dur,o,l,c;return Ne(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ye(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},js=function(t,e,n){var i=bi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;a.immediateRender=_n(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Pe(e[0],a,e[r+1])},Wi=function(t,e){return t||t===0?e(t):e},ra=function(t,e,n){return n<t?t:n>e?e:n},Ge=function(t,e){return!Ne(t)||!(e=Fm.exec(t))?"":e[1]},qm=function(t,e,n){return Wi(n,function(i){return ra(t,e,i)})},ah=[].slice,Yd=function(t,e){return t&&ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ai(t[0]))&&!t.nodeType&&t!==ri},Ym=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ne(i)&&!e||Yd(i,1)?(r=n).push.apply(r,Gn(i)):n.push(i)})||n},Gn=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Ne(t)&&!n&&(nh||!es())?ah.call((e||mh).querySelectorAll(t),0):Ye(t)?Ym(t,n):Yd(t)?ah.call(t,0):t?[t]:[]},oh=function(t){return t=Gn(t)[0]||ta("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Gn(e,n.querySelectorAll?n:n===t?ta("Invalid scope")||mh.createElement("div"):t)}},Zd=function(t){return t.sort(function(){return .5-Math.random()})},Jd=function(t){if(Ae(t))return t;var e=ai(t)?t:{each:t},n=yr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ne(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,y,E,v,b,T,w,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Hn])[1],!x){for(w=-Hn;w<(w=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=a[g]=[],p=l?Math.min(x,g)*h-.5:i%x,y=x===Hn?0:l?g*u/x-.5:i/x|0,w=0,C=Hn,T=0;T<g;T++)E=T%x-p,v=y-(T/x|0),m[T]=b=c?Math.abs(c==="y"?v:E):Fd(E*E+v*v),b>w&&(w=b),b<C&&(C=b);i==="random"&&Zd(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ge(e.amount||e.each)||0,n=n&&g<0?sf(n):n}return g=(m[f]-m.min)/m.max||0,Me(m.b+(n?n(g):g)*m.v)+m.u}},lh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(bi(n)?0:Ge(n))}},$d=function(t,e){var n=Ye(t),i,r;return!n&&ai(t)&&(i=n=t.radius||Hn,t.values?(t=Gn(t.values),(r=!bi(t[0]))&&(i*=i)):t=lh(t.increment)),Wi(e,n?Ae(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Hn,h=0,u=t.length,f,d;u--;)r?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,r||h===a||bi(a)?h:h+Ge(a)}:lh(t))},Kd=function(t,e,n,i){return Wi(Ye(t)?!e:n===!0?!!(n=0):!i,function(){return Ye(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Zm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Jm=function(t,e){return function(n){return t(parseFloat(n))+(e||Ge(n))}},$m=function(t,e,n){return Qd(t,e,0,1,n)},jd=function(t,e,n){return Wi(n,function(i){return t[~~e(i)]})},Km=function s(t,e,n){var i=e-t;return Ye(t)?jd(t,s(0,t.length),e):Wi(n,function(r){return(i+(r-t)%i)%i+t})},jm=function s(t,e,n){var i=e-t,r=i*2;return Ye(t)?jd(t,s(0,t.length-1),e):Wi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},ns=function(t){return t.replace(Im,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Dm);return Kd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qd=function(t,e,n,i,r){var a=e-t,o=i-n;return Wi(r,function(l){return n+((l-t)/a*o||0)})},Qm=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var a=Ne(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ye(t)&&!Ye(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=jr(Ye(t)?[]:{},t));if(!h){for(l in e)Sh.call(o,t,l,"get",e[l]);r=function(_){return Ch(_,o)||(a?t.p:t)}}}return Wi(n,r)},Pd=function(t,e,n){var i=t.labels,r=Hn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},wn=function(t,e,n){var i=t.vars,r=i[e],a=_e,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Vi.length&&To(),o&&(_e=o),h=l?r.apply(c,l):r.call(c),_e=a,h},Js=function(t){return Gi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!He),t.progress()<1&&wn(t,"onInterrupt"),t},$r,tf=[],ef=function(t){if(t)if(t=!t.name&&t.default||t,dh()||t.headless){var e=t.name,n=Ae(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ea,render:Ch,add:Sh,kill:m0,modifier:p0,rawVars:0},a={targetTest:0,get:0,getSetter:Lo,aliases:{},register:0};if(es(),t!==i){if(mn[e])return;Cn(i,Cn(Eo(t,r),a)),jr(i.prototype,jr(r,Eo(t,a))),mn[i.prop=e]=i,t.targetTest&&(Mo.push(i),gh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bd(e,i),t.register&&t.register(Ze,i,rn)}else tf.push(t)},ce=255,$s={aqua:[0,ce,ce],lime:[0,ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ce],navy:[0,0,128],white:[ce,ce,ce],olive:[128,128,0],yellow:[ce,ce,0],orange:[ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ce,0,0],pink:[ce,192,203],cyan:[0,ce,ce],transparent:[ce,ce,ce,0]},$c=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ce+.5|0},nf=function(t,e,n){var i=t?bi(t)?[t>>16,t>>8&ce,t&ce]:0:$s.black,r,a,o,l,c,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$s[t])i=$s[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ce,i&ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ce,t&ce]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ed),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=$c(l+1/3,r,a),i[1]=$c(l,r,a),i[2]=$c(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(fh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ed)||$s.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ce,a=i[1]/ce,o=i[2]/ce,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},rf=function(t){var e=[],n=[],i=-1;return t.split(Mi).forEach(function(r){var a=r.match(br)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Id=function(t,e,n){var i="",r=(t+i).match(Mi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(f){return(f=nf(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=rf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Mi,"1").split(br),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Mi),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},Mi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $s)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),t0=/hsl[a]?\(/,Mh=function(t){var e=t.join(" "),n;if(Mi.lastIndex=0,Mi.test(e))return n=t0.test(e),t[1]=Id(t[1],n),t[0]=Id(t[0],n,rf(t[1])),!0},na,gn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,d,_=function g(m){var p=s()-i,y=m===!0,E,v,b,T;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,E=b-a,(E>0||y)&&(T=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,a+=E+(E>=r?4:r-E),v=1),y||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](b,f,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Od&&(!nh&&dh()&&(ri=nh=window,mh=ri.document||{},An.gsap=Ze,(ri.gsapVersions||(ri.gsapVersions=[])).push(Ze.version),Ud(So||ri.GreenSockGlobals||!ri.gsap&&ri||{}),tf.forEach(ef)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},na=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,y){var E=p?function(v,b,T,w){m(v,b,T,w),u.remove(E)}:m;return u.remove(m),o[y?"unshift":"push"](E),es(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u}(),es=function(){return!na&&gn.wake()},Zt={},e0=/^[\d.\-M][\d.\-,\s]/,n0=/["']/g,i0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(n0,"").trim():+c,i=l.substr(o+1).trim();return e},r0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},s0=function(t){var e=(t+"").split("("),n=Zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[i0(e[1])]:r0(t).split(",").map(Vd)):Zt._CE&&e0.test(t)?Zt._CE("",t):n},sf=function(t){return function(e){return 1-t(1-e)}},af=function s(t,e){for(var n=t._first,i;n;)n instanceof Ve?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},yr=function(t,e){return t&&(Ae(t)?t:Zt[t]||s0(t))||e},Tr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return nn(t,function(o){Zt[o]=An[o]=r,Zt[a=o.toLowerCase()]=n;for(var l in r)Zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[o+"."+l]=r[l]}),r},of=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Kc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/eh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Pm((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:of(o);return r=eh/r,l.config=function(c,h){return s(t,c,h)},l},jc=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:of(n);return i.config=function(r){return s(t,r)},i};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Tr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;Tr("Elastic",Kc("in"),Kc("out"),Kc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Tr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Tr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Tr("Circ",function(s){return-(Fd(1-s*s)-1)});Tr("Sine",function(s){return s===1?1:-Rm(s*Am)+1});Tr("Back",jc("in"),jc("out"),jc());Zt.SteppedEase=Zt.steps=An.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-he;return function(o){return((i*ra(0,a,o)|0)+r)*n}}};Kr.ease=Zt["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return _h+=s+","+s+"Params,"});var bh=function(t,e){this.id=Cm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vh,this.set=e?e.getSetter:Lo},ia=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ts(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),na||gn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(es(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Do(this,n),!r._dp||r.parent||Wd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),kd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(ra(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Io(this),km(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Me(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&si(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(_n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Om);var i=He;return He=n,yh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),He=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Vn(this,n),_n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_n(i)),this._dur||(this._zTime=-he),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-he)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Ae(n)?n:Hd,l=function(){var h=i.then;i.then=null,r&&r(),Ae(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Js(this)},s}();Cn(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var Ve=function(s){Ld(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=_n(n.sortChildren),be&&si(n.parent||be,yi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Xd(yi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return js(0,arguments,this),this},e.from=function(i,r,a){return js(1,arguments,this),this},e.fromTo=function(i,r,a,o){return js(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Ks(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Pe(i,r,Vn(this,a),1),this},e.call=function(i,r,a){return si(this,Pe.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Pe(i,a,Vn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Ks(a).immediateRender=_n(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Ks(o).immediateRender=_n(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Me(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,y,E,v,b,T,w;if(this!==be&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,E=this._ts,p=!E,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Me(h%m),h===l?(g=this._repeat,f=c):(b=Me(h/m),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=Qr(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),T&&g&1&&(f=c-f,w=1),g!==b&&!this._lock){var C=T&&b&1,x=C===(T&&g&1);if(g<b&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Me(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;af(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Wm(this,Me(o),Me(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!b&&(wn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-he);break}}d=_}else{d=this._last;for(var S=i<0?i:f;d;){if(_=d._prev,(d._act||S<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,r,a||He&&yh(d)),f!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=S?-he:he);break}}d=_}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-he)._zTime=f>=o?1:-1,this._ts))return this._start=v,Io(this),this.render(i,r,a);this._onUpdate&&!r&&wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Gi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(wn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(bi(r)||(r=Vn(this,r,i)),!(i instanceof ia)){if(Ye(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ne(i))return this.addLabel(i,r);if(Ae(i))i=Pe.delayedCall(0,i);else return this}return this!==i?si(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pe?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ne(i)?this.removeLabel(i):Ae(i)?this.killTweensOf(i):(i.parent===this&&Po(this,i),i===this._recent&&(this._recent=this._last),vr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Me(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Vn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Pe.delayedCall(0,r||ea,a);return o.data="isPause",this._hasPause=1,si(this,o,Vn(this,i))},e.removePause=function(i){var r=this._first;for(i=Vn(this,i);r;)r._start===i&&r.data==="isPause"&&Gi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ki!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Gn(i),l=this._first,c=bi(r),h;l;)l instanceof Pe?Um(l._targets,o)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Vn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Pe.to(a,Cn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||he,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ts(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Cn({startAt:{time:Vn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pd(this,Vn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pd(this,Vn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Me(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return vr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vr(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Hn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,si(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Me(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ts(a,a===be&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(be._ts&&(kd(be,wo(i,be)),zd=gn.frame),gn.frame>=wd){wd+=xn.autoSleep||120;var r=be._first;if((!r||!r._ts)&&xn.autoSleep&&gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||gn.sleep()}}},t}(ia);Cn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var a0=function(t,e,n,i,r,a,o){var l=new rn(this._pt,t,e,0,1,Ah,null,r),c=0,h=0,u,f,d,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ns(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),f=n.match(Zc)||[];u=Zc.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Sr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Zc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ph.test(i)||p)&&(l.e=0),this._pt=l,l},Sh=function(t,e,n,i,r,a,o,l,c,h){Ae(i)&&(i=i(r||0,t,a));var u=t[e],f=n!=="get"?n:Ae(u)?c?t[e.indexOf("set")||!Ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ae(u)?c?u0:hf:wh,_;if(Ne(i)&&(~i.indexOf("random(")&&(i=ns(i)),i.charAt(1)==="="&&(_=Sr(f,i)+(Ge(f)||0),(_||_===0)&&(i=_))),!h||f!==i||ch)return!isNaN(f*i)&&i!==""?(_=new rn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?f0:uf,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Ro(e,i),a0.call(this,t,e,f,i,d,l||xn.stringFilter,c))},o0=function(t,e,n,i,r){if(Ae(t)&&(t=Qs(t,r,e,n,i)),!ai(t)||t.style&&t.nodeType||Ye(t)||Nd(t))return Ne(t)?Qs(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Qs(t[o],r,e,n,i);return a},Th=function(t,e,n,i,r,a){var o,l,c,h;if(mn[t]&&(o=new mn[t]).init(r,o.rawVars?e[t]:o0(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new rn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==$r))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ki,ch,Eh=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!uh,v=t.timeline,b,T,w,C,x,S,P,L,I,F,k,U,O;if(v&&(!f||!r)&&(r="none"),t._ease=yr(r,Kr.ease),t._yEase=u?sf(yr(u===!0?r:u,Kr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(L=m[0]?Hi(m[0]).harness:0,U=L&&i[L.prop],b=Eo(i,gh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?yo:Nm),g._lazy=0),a){if(Gi(t._startAt=Pe.set(m,Cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&_n(l),startAt:null,delay:0,onUpdate:c&&function(){return wn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He||!o&&!d)&&t._startAt.revert(yo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),w=Cn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&_n(l),immediateRender:o,stagger:0,parent:p},b),U&&(w[L.prop]=U),Gi(t._startAt=Pe.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He?t._startAt.revert(yo):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&_n(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],P=x._gsap||xh(m)[T]._gsap,t._ptLookup[T]=F={},ih[P.id]&&Vi.length&&To(),k=y===m?T:y.indexOf(x),L&&(I=new L).init(x,U||b,t,k,y)!==!1&&(t._pt=C=new rn(t._pt,x,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(X){F[X]=C}),I.priority&&(S=1)),!L||U)for(w in b)mn[w]&&(I=Th(w,b,t,k,x,y))?I.priority&&(S=1):F[w]=C=Sh.call(t,x,w,"get",b[w],k,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),E&&t._pt&&(ki=t,be.killTweensOf(x,F,t.globalTime(e)),O=!t.parent,ki=0),t._pt&&l&&(ih[P.id]=1)}S&&Rh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!O,f&&e<=0&&v.render(Hn,!0,!0)},l0=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ch=1,t.vars[e]="+=0",Eh(t,o),ch=0,l?ta(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ce(n)+Ge(u.e)),u.b&&(u.b=h.s+Ge(u.b))},c0=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=jr({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},h0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Ye(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Qs=function(t,e,n,i,r){return Ae(t)?t.call(e,n,i,r):Ne(t)&&~t.indexOf("random(")?ns(t):t},lf=_h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cf={};nn(lf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return cf[s]=1});var Pe=function(s){Ld(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ks(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||be,E=(Ye(n)||Nd(n)?bi(n[0]):"length"in i)?[n]:Gn(n),v,b,T,w,C,x,S,P;if(o._targets=E.length?xh(E):ta("GSAP target "+n+" not found. https://gsap.com",!xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||vo(c)||vo(h)){if(i=o.vars,v=o.timeline=new Ve({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:E}),v.kill(),v.parent=v._dp=yi(o),v._start=0,f||vo(c)||vo(h)){if(w=E.length,S=f&&Jd(f),ai(f))for(C in f)~lf.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(b=0;b<w;b++)T=Eo(i,cf),T.stagger=0,p&&(T.yoyoEase=p),P&&jr(T,P),x=E[b],T.duration=+Qs(c,yi(o),b,x,E),T.delay=(+Qs(h,yi(o),b,x,E)||0)-o._delay,!f&&w===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),v.to(x,T,S?S(b,x,E):0),v._ease=Zt.none;v.duration()?c=h=0:o.timeline=0}else if(_){Ks(Cn(v.vars.defaults,{ease:"none"})),v._ease=yr(_.ease||i.ease||"none");var L=0,I,F,k;if(Ye(_))_.forEach(function(U){return v.to(E,U,">")}),v.duration();else{T={};for(C in _)C==="ease"||C==="easeEach"||h0(C,_[C],T,_.easeEach);for(C in T)for(I=T[C].sort(function(U,O){return U.t-O.t}),L=0,b=0;b<I.length;b++)F=I[b],k={ease:F.e,duration:(F.t-(b?I[b-1].t:0))/100*c},k[C]=F.v,v.to(E,k,L),L+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!uh&&(ki=yi(o),be.killTweensOf(E),ki=0),si(y,yi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Me(y._time)&&_n(u)&&Vm(yi(o))&&y.data!=="nested")&&(o._tTime=-he,o.render(Math.max(0,-h)||0)),m&&Xd(yi(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-he&&!h?l:i<he?0:i,f,d,_,g,m,p,y,E,v;if(!c)Gm(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(f=Me(u%g),u===l?(_=this._repeat,f=c):(m=Me(u/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,f=c-f),m=Qr(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(E&&this._yEase&&af(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Me(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(qd(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!o&&u&&!r&&!m&&(wn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&rh(this,i,r,a),wn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&wn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&rh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Gi(this,1),!r&&!(h&&!o)&&(u||o||p)&&(wn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){na||gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Eh(this,c),h=this._ease(c/this._dur),l0(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Do(this,0),this.parent||Gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!He),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ki&&ki.vars.overwrite!==!0)._first||Js(this),this.parent&&a!==this.timeline.totalDuration()&&ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Gn(i):o,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!r||r==="all")&&zm(o,l))return r==="all"&&(this._pt=0),Js(this);for(u=this._op=this._op||[],r!=="all"&&(Ne(r)&&(g={},nn(r,function(y){return g[y]=1}),r=g),r=c0(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(u[p]=r,_=f,d={}):(d=u[p]=u[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Po(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&Js(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return js(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return js(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return be.killTweensOf(i,r,a)},t}(ia);Cn(Pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(s){Pe[s]=function(){var t=new Ve,e=ah.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var wh=function(t,e,n){return t[e]=n},hf=function(t,e,n){return t[e](n)},u0=function(t,e,n,i){return t[e](i.fp,n)},d0=function(t,e,n){return t.setAttribute(e,n)},Lo=function(t,e){return Ae(t[e])?hf:Co(t[e])&&t.setAttribute?d0:wh},uf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},f0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ah=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ch=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},p0=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},m0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Po(this,e,"_pt"):e.dep||(n=1),e=i;return!n},g0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Rh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},rn=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||uf,this.d=l||this,this.set=c||wh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=g0,this.m=n,this.mt=r,this.tween=i},s}();nn(_h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return gh[s]=1});An.TweenMax=An.TweenLite=Pe;An.TimelineLite=An.TimelineMax=Ve;be=new Ve({sortChildren:!1,defaults:Kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xn.stringFilter=Mh;var Mr=[],bo={},_0=[],Dd=0,x0=0,Qc=function(t){return(bo[t]||_0).map(function(e){return e()})},hh=function(){var t=Date.now(),e=[];t-Dd>2&&(Qc("matchMediaInit"),Mr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=ri.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Qc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Dd=t,Qc("matchMedia"))},df=function(){function s(e,n){this.selector=n&&oh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=x0++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ae(n)&&(r=i,i=n,n=Ae);var a=this,o=function(){var c=_e,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=oh(r)),_e=a,u=i.apply(a,arguments),Ae(u)&&a._r.push(u),_e=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Ae?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Pe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Mr.length;a--;)Mr[a].id===this.id&&Mr.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),v0=function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ai(n)||(n={matches:n});var a=new df(0,r||this.scope),o=a.conditions={},l,c,h;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ri.matchMedia(n[c]),l&&(Mr.indexOf(a)<0&&Mr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(hh):l.addEventListener("change",hh)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ao={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ef(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return be.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ne(t)&&(t=Gn(t)[0]);var r=Hi(t||{}).get,a=n?Hd:Vd;return n==="native"&&(n=""),t&&(e?a((mn[e]&&mn[e].get||r)(t,e,n,i)):function(o,l,c){return a((mn[o]&&mn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Gn(t),t.length>1){var i=t.map(function(h){return Ze.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=mn[e],o=Hi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;$r._pt=0,u.init(t,n?h+n:h,$r,0,[t]),u.render(1,u),$r._pt&&Ch(1,$r)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ze.to(t,Cn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=yr(t.ease,Kr.ease)),Ad(Kr,t||{})},config:function(t){return Ad(xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!mn[o]&&!An[o]&&ta(e+" effect requires "+o+" plugin.")}),Jc[e]=function(o,l,c){return n(Gn(o),Cn(l||{},r),c)},a&&(Ve.prototype[e]=function(o,l,c){return this.add(Jc[e](o,ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=yr(e)},parseEase:function(t,e){return arguments.length?yr(t,e):Zt},getById:function(t){return be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,r;for(n.smoothChildTiming=_n(t.smoothChildTiming),be.remove(n),n._dp=0,n._time=n._tTime=be._time,i=be._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Pe&&i.vars.onComplete===i._targets[0]))&&si(n,i,i._start-i._delay),i=r;return si(be,n,0),n},context:function(t,e){return t?new df(t,e):_e},matchMedia:function(t){return new v0(t)},matchMediaRefresh:function(){return Mr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||hh()},addEventListener:function(t,e){var n=bo[t]||(bo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=bo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Km,wrapYoyo:jm,distribute:Jd,random:Kd,snap:$d,normalize:$m,getUnit:Ge,clamp:qm,splitColor:nf,toArray:Gn,selector:oh,mapRange:Qd,pipe:Zm,unitize:Jm,interpolate:Qm,shuffle:Zd},install:Ud,effects:Jc,ticker:gn,updateRoot:Ve.updateRoot,plugins:mn,globalTimeline:be,core:{PropTween:rn,globals:Bd,Tween:Pe,Timeline:Ve,Animation:ia,getCache:Hi,_removeLinkedListItem:Po,reverting:function(){return He},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return uh=t}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ao[s]=Pe[s]});gn.add(Ve.updateRoot);$r=Ao.to({},{duration:0});var y0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},M0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=y0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},th=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ne(r)&&(l={},nn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}M0(o,r)}}}},Ze=Ao.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)He?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},th("roundProps",lh),th("modifiers"),th("snap",$d))||Ao;Pe.version=Ve.version=Ze.version="3.14.2";Od=1;dh()&&es();var b0=Zt.Power0,S0=Zt.Power1,T0=Zt.Power2,E0=Zt.Power3,w0=Zt.Power4,A0=Zt.Linear,C0=Zt.Quad,R0=Zt.Cubic,P0=Zt.Quart,I0=Zt.Quint,D0=Zt.Strong,L0=Zt.Elastic,F0=Zt.Back,N0=Zt.SteppedEase,O0=Zt.Bounce,U0=Zt.Sine,B0=Zt.Expo,z0=Zt.Circ;var ff,Xi,rs,Nh,Cr,k0,pf,Oh,V0=function(){return typeof window<"u"},Ti={},Ar=180/Math.PI,ss=Math.PI/180,is=Math.atan2,mf=1e8,Uh=/([A-Z])/g,H0=/(left|right|width|margin|padding|x)/i,G0=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ih=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},W0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},X0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},q0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Y0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Sf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Tf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Z0=function(t,e,n){return t.style[e]=n},J0=function(t,e,n){return t.style.setProperty(e,n)},$0=function(t,e,n){return t._gsap[e]=n},K0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},j0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Q0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Se="transform",vn=Se+"Origin",tg=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Ti&&r){if(this.tfm=this.tfm||{},t!=="transform")t=oi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Si(i,o)}):this.tfm[t]=a.x?a[t]:Si(i,t),t===vn&&(this.tfm.zOrigin=a.zOrigin);else return oi.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Se)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(vn,e,"")),t=Se}(r||e)&&this.props.push(t,e,r[t])},Ef=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},eg=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Uh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Oh(),(!r||!r.isStart)&&!n[Se]&&(Ef(n),i.zOrigin&&n[vn]&&(n[vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wf=function(t,e){var n={target:t,props:[],revert:eg,save:tg};return t._gsap||Ze.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Af,Dh=function(t,e){var n=Xi.createElementNS?Xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xi.createElement(t);return n&&n.style?n:Xi.createElement(t)},Rn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Uh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,as(e)||e,1)||""},gf="O,Moz,ms,Ms,Webkit".split(","),as=function(t,e,n){var i=e||Cr,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(gf[a]+t in r););return a<0?null:(a===3?"ms":a>=0?gf[a]:"")+t},Lh=function(){V0()&&window.document&&(ff=window,Xi=ff.document,rs=Xi.documentElement,Cr=Dh("div")||{style:{}},k0=Dh("div"),Se=as(Se),vn=Se+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Af=!!as("perspective"),Oh=Ze.core.reverting,Nh=1)},_f=function(t){var e=t.ownerSVGElement,n=Dh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),rs.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),rs.removeChild(n),r},xf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Cf=function(t){var e,n;try{e=t.getBBox()}catch{e=_f(t),n=1}return e&&(e.width||e.height)||n||(e=_f(t)),e&&!e.width&&!e.x&&!e.y?{x:+xf(t,["x","cx","x1"])||0,y:+xf(t,["y","cy","y1"])||0,width:0,height:0}:e},Rf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Cf(t))},Yi=function(t,e){if(e){var n=t.style,i;e in Ti&&e!==vn&&(e=Se),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Uh,"-$1").toLowerCase())):n.removeAttribute(e)}},qi=function(t,e,n,i,r,a){var o=new rn(t._pt,e,n,0,1,a?Tf:Sf);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},vf={deg:1,rad:1,turn:1},ng={grid:1,flex:1},Zi=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Cr.style,l=H0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!r||vf[i]||vf[a])return r;if(a!=="px"&&!f&&(r=s(t,e,n,"px")),p=t.getCTM&&Rf(t),(d||a==="%")&&(Ti[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ce(d?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Xi||!g.appendChild)&&(g=Xi.body),m=g._gsap,m&&d&&m.width&&l&&m.time===gn.time&&!m.uncache)return Ce(r/m.width*u);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+i,_=t[h],y?t.style[e]=y:Yi(t,e)}else(d||a==="%")&&!ng[Rn(g,"display")]&&(o.position=Rn(t,"position")),g===t&&(o.position="static"),g.appendChild(Cr),_=Cr[h],g.removeChild(Cr),o.position="absolute";return l&&d&&(m=Hi(g),m.time=gn.time,m.width=g[h]),Ce(f?_*r/u:_&&r?u/_*r:0)},Si=function(t,e,n,i){var r;return Nh||Lh(),e in oi&&e!=="transform"&&(e=oi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ti[e]&&e!=="transform"?(r=oa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:No(Rn(t,vn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fo[e]&&Fo[e](t,e,n)||Rn(t,e)||vh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zi(t,e,r,n)+n:r},ig=function(t,e,n,i){if(!n||n==="none"){var r=as(e,t,1),a=r&&Rn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Rn(t,"borderTopColor"))}var o=new rn(this._pt,t.style,e,0,1,Ah),l=0,c=0,h,u,f,d,_,g,m,p,y,E,v,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Rn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Rn(t,e)||i,g?t.style[e]=g:Yi(t,e)),h=[n,i],Mh(h),n=h[0],i=h[1],f=n.match(br)||[],b=i.match(br)||[],b.length){for(;u=br.exec(i);)m=u[0],y=i.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Sr(d,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=br.lastIndex-E.length,E||(E=E||xn.units[e]||v,l===i.length&&(i+=E,o.e+=E)),v!==E&&(d=Zi(t,e,g,E)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Tf:Sf;return ph.test(i)&&(o.e=0),this._pt=o,o},yf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rg=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=yf[n]||n,e[1]=yf[i]||i,e.join(" ")},sg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ti[o]&&(l=1,o=o==="transformOrigin"?vn:Se),Yi(n,o);l&&(Yi(n,Se),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",oa(n,1),a.uncache=1,Ef(i)))}},Fo={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new rn(t._pt,e,n,0,0,sg);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},aa=[1,0,0,1,0,0],Pf={},If=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Mf=function(t){var e=Rn(t,Se);return If(e)?aa:e.substr(7).match(fh).map(Ce)},Bh=function(t,e){var n=t._gsap||Hi(t),i=t.style,r=Mf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?aa:r):(r===aa&&!t.offsetParent&&t!==rs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,rs.appendChild(t)),r=Mf(t),l?i.display=l:Yi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):rs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Fh=function(t,e,n,i,r,a){var o=t._gsap,l=r||Bh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],E=e.split(" "),v=parseFloat(E[0])||0,b=parseFloat(E[1])||0,T,w,C,x;n?l!==aa&&(w=d*m-_*g)&&(C=v*(m/w)+b*(-g/w)+(g*y-m*p)/w,x=v*(-_/w)+b*(d/w)-(d*y-_*p)/w,v=C,b=x):(T=Cf(t),v=T.x+(~E[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(E[1]||E[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&o.smooth?(p=v-c,y=b-h,o.xOffset=u+(p*d+y*g)-p,o.yOffset=f+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[vn]="0px 0px",a&&(qi(a,o,"xOrigin",c,v),qi(a,o,"yOrigin",h,b),qi(a,o,"xOffset",u,o.xOffset),qi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},oa=function(t,e){var n=t._gsap||new bh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Rn(t,vn)||"0",h,u,f,d,_,g,m,p,y,E,v,b,T,w,C,x,S,P,L,I,F,k,U,O,X,Q,et,st,wt,Ot,Yt,Ht;return h=u=f=g=m=p=y=E=v=0,d=_=1,n.svg=!!(t.getCTM&&Rf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),i.scale=i.rotate=i.translate="none"),w=Bh(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Fh(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,T=n.yOrigin||0,w!==aa&&(P=w[0],L=w[1],I=w[2],F=w[3],h=k=w[4],u=U=w[5],w.length===6?(d=Math.sqrt(P*P+L*L),_=Math.sqrt(F*F+I*I),g=P||L?is(L,P)*Ar:0,y=I||F?is(I,F)*Ar+g:0,y&&(_*=Math.abs(Math.cos(y*ss))),n.svg&&(h-=b-(b*P+T*I),u-=T-(b*L+T*F))):(Ht=w[6],Ot=w[7],et=w[8],st=w[9],wt=w[10],Yt=w[11],h=w[12],u=w[13],f=w[14],C=is(Ht,wt),m=C*Ar,C&&(x=Math.cos(-C),S=Math.sin(-C),O=k*x+et*S,X=U*x+st*S,Q=Ht*x+wt*S,et=k*-S+et*x,st=U*-S+st*x,wt=Ht*-S+wt*x,Yt=Ot*-S+Yt*x,k=O,U=X,Ht=Q),C=is(-I,wt),p=C*Ar,C&&(x=Math.cos(-C),S=Math.sin(-C),O=P*x-et*S,X=L*x-st*S,Q=I*x-wt*S,Yt=F*S+Yt*x,P=O,L=X,I=Q),C=is(L,P),g=C*Ar,C&&(x=Math.cos(C),S=Math.sin(C),O=P*x+L*S,X=k*x+U*S,L=L*x-P*S,U=U*x-k*S,P=O,k=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Ce(Math.sqrt(P*P+L*L+I*I)),_=Ce(Math.sqrt(U*U+Ht*Ht)),C=is(k,U),y=Math.abs(C)>2e-4?C*Ar:0,v=Yt?1/(Yt<0?-Yt:Yt):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!If(Rn(t,Se)),O&&t.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ce(d),n.scaleY=Ce(_),n.rotation=Ce(g)+o,n.rotationX=Ce(m)+o,n.rotationY=Ce(p)+o,n.skewX=y+o,n.skewY=E+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[vn]=No(c)),n.xOffset=n.yOffset=0,n.force3D=xn.force3D,n.renderTransform=n.svg?og:Af?Df:ag,n.uncache=0,n},No=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ph=function(t,e,n){var i=Ge(e);return Ce(parseFloat(e)+parseFloat(Zi(t,"x",n+"px",i)))+i},ag=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Df(t,e)},Er="0deg",sa="0px",wr=") ",Df=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,E=n.zOrigin,v="",b=p==="auto"&&t&&t!==1||p===!0;if(E&&(u!==Er||h!==Er)){var T=parseFloat(h)*ss,w=Math.sin(T),C=Math.cos(T),x;T=parseFloat(u)*ss,x=Math.cos(T),a=Ph(y,a,w*x*-E),o=Ph(y,o,-Math.sin(T)*-E),l=Ph(y,l,C*x*-E+E)}m!==sa&&(v+="perspective("+m+wr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(b||a!==sa||o!==sa||l!==sa)&&(v+=l!==sa||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+wr),c!==Er&&(v+="rotate("+c+wr),h!==Er&&(v+="rotateY("+h+wr),u!==Er&&(v+="rotateX("+u+wr),(f!==Er||d!==Er)&&(v+="skew("+f+", "+d+wr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+wr),y.style[Se]=v||"translate(0, 0)"},og=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,E=parseFloat(a),v=parseFloat(o),b,T,w,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ss,c*=ss,b=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=ss,x=Math.tan(c-h),x=Math.sqrt(1+x*x),w*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,T*=x)),b=Ce(b),T=Ce(T),w=Ce(w),C=Ce(C)):(b=u,C=f,T=w=0),(E&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(E=Zi(d,"x",a,"px"),v=Zi(d,"y",o,"px")),(_||g||m||p)&&(E=Ce(E+_-(_*b+g*w)+m),v=Ce(v+g-(_*T+g*C)+p)),(i||r)&&(x=d.getBBox(),E=Ce(E+i/100*x.width),v=Ce(v+r/100*x.height)),x="matrix("+b+","+T+","+w+","+C+","+E+","+v+")",d.setAttribute("transform",x),y&&(d.style[Se]=x)},lg=function(t,e,n,i,r){var a=360,o=Ne(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ar:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*mf)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*mf)%a-~~(c/a)*a)),t._pt=f=new rn(t._pt,e,n,i,c,W0),f.e=h,f.u="deg",t._props.push(n),f},bf=function(t,e){for(var n in e)t[n]=e[n];return t},cg=function(t,e,n){var i=bf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Se]=e,o=oa(n,1),Yi(n,Se),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Se],a[Se]=e,o=oa(n,1),a[Se]=c);for(l in Ti)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=Ge(c),_=Ge(h),u=d!==_?Zi(n,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new rn(t._pt,o,l,u,f-u,Ih),t._pt.u=_||0,t._props.push(l));bf(o,i)};nn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Fo[t>1?"border"+s:s]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return Si(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,u)}});var zh={name:"css",register:Lh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,_,g,m,p,y,E,v,b,T,w,C,x;Nh||Lh(),this.styles=this.styles||wf(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(mn[g]&&Th(g,e,n,i,t,r)))){if(d=typeof h,_=Fo[g],d==="function"&&(h=h.call(n,i,t,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ns(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Mi.lastIndex=0,Mi.test(c)||(m=Ge(c),p=Ge(h),p?m!==p&&(c=Zi(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),C.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ne(c)&&~c.indexOf("random(")&&(c=ns(c)),Ge(c+"")||c==="auto"||(c+=xn.units[g]||Ge(Si(t,g))||""),(c+"").charAt(1)==="="&&(c=Si(t,g))):c=Si(t,g),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in oi&&(g==="autoAlpha"&&(f===1&&Si(t,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,o.visibility),qi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Ti,E){if(this.styles.save(g),x=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Rn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=Rn(t,"perspective"),S?t.style.perspective=S:Yi(t,"perspective")}u=parseFloat(h)}if(v||(b=t._gsap,b.renderTransform&&!e.parseTransform||oa(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new rn(this._pt,o,Se,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new rn(this._pt,b,"scaleY",b.scaleY,(y?Sr(b.scaleY,y+u):u)-b.scaleY||0,Ih),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(vn,0,o[vn]),h=rg(h),b.svg?Fh(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&qi(this,b,"zOrigin",b.zOrigin,p),qi(this,o,g,No(c),No(h)));continue}else if(g==="svgOrigin"){Fh(t,h,1,T,0,this);continue}else if(g in Pf){lg(this,b,g,f,y?Sr(f,y+h):h);continue}else if(g==="smoothOrigin"){qi(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){cg(this,h,t);continue}}else g in o||(g=as(g)||g);if(E||(u||u===0)&&(f||f===0)&&!G0.test(h)&&g in o)m=(c+"").substr((f+"").length),u||(u=0),p=Ge(h)||(g in xn.units?xn.units[g]:m),m!==p&&(f=Zi(t,g,c,p)),this._pt=new rn(this._pt,E?b:o,g,f,(y?Sr(f,y+u):u)-f,!E&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Y0:Ih),this._pt.u=p||0,E&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=q0):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=X0);else if(g in o)ig.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){Ro(g,h);continue}E||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}w&&Rh(this)},render:function(t,e){if(e.tween._time||!Oh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Si,aliases:oi,getSetter:function(t,e,n){var i=oi[e];return i&&i.indexOf(",")<0&&(e=i),e in Ti&&e!==vn&&(t._gsap.x||Si(t,"x"))?n&&pf===n?e==="scale"?K0:$0:(pf=n||{})&&(e==="scale"?j0:Q0):t.style&&!Co(t.style[e])?Z0:~e.indexOf("-")?J0:Lo(t,e)},core:{_removeProperty:Yi,_getMatrix:Bh}};Ze.utils.checkPrefix=as;Ze.core.getStyleSaver=wf;(function(s,t,e,n){var i=nn(s+","+t+","+e,function(r){Ti[r]=1});nn(t,function(r){xn.units[r]="deg",Pf[r]=1}),oi[i[13]]=s+","+t,nn(n,function(r){var a=r.split(":");oi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){xn.units[s]="px"});Ze.registerPlugin(zh);var j=Ze.registerPlugin(zh)||Ze,Db=j.core.Tween;var Ol="182";var rp=0,Mu=1,sp=2;var Oa=1,Ul=2,Us=3,Di=0,qe=1,ve=2,di=0,Fr=1,ln=2,bu=3,Su=4,ap=5,nr=100,op=101,lp=102,cp=103,hp=104,up=200,dp=201,fp=202,pp=203,ll=204,cl=205,mp=206,gp=207,_p=208,xp=209,vp=210,yp=211,Mp=212,bp=213,Sp=214,Bl=0,zl=1,kl=2,Nr=3,Vl=4,Hl=5,Gl=6,Wl=7,Xl=0,Tp=1,Ep=2,Qn=0,Tu=1,Eu=2,wu=3,Ua=4,Au=5,Cu=6,Ru=7;var du=300,dr=301,zr=302,ql=303,Yl=304,Ba=306,hi=1e3,Ln=1001,hl=1002,ke=1003,wp=1004;var za=1005;var Xe=1006,Zl=1007;var fr=1008;var bn=1009,Pu=1010,Iu=1011,Bs=1012,Jl=1013,ti=1014,ei=1015,fi=1016,$l=1017,Kl=1018,zs=1020,Du=35902,Lu=35899,Fu=1021,Nu=1022,qn=1023,ui=1026,pr=1027,Ou=1028,jl=1029,kr=1030,Ql=1031;var tc=1033,ka=33776,Va=33777,Ha=33778,Ga=33779,ec=35840,nc=35841,ic=35842,rc=35843,sc=36196,ac=37492,oc=37496,lc=37488,cc=37489,hc=37490,uc=37491,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,_c=37813,xc=37814,vc=37815,yc=37816,Mc=37817,bc=37818,Sc=37819,Tc=37820,Ec=37821,wc=36492,Ac=36494,Cc=36495,Rc=36283,Pc=36284,Ic=36285,Dc=36286;var ga=2300,ul=2301,ol=2302,fu=2400,pu=2401,mu=2402;var Ap=3200;var Lc=0,Cp=1,Bi="",Dn="srgb",Or="srgb-linear",_a="linear",Qt="srgb";var Lr=7680;var gu=519,Rp=512,Pp=513,Ip=514,Fc=515,Dp=516,Lp=517,Nc=518,Fp=519,dl=35044;var Uu="300 es",$n=2e3,xa=2001;function Bu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Np(){let s=va("canvas");return s.style.display="block",s}var Lf={},Ts=null;function ya(...s){let t="THREE."+s.shift();Ts?Ts("log",t,...s):console.log(t,...s)}function It(...s){let t="THREE."+s.shift();Ts?Ts("warn",t,...s):console.warn(t,...s)}function Rt(...s){let t="THREE."+s.shift();Ts?Ts("error",t,...s):console.error(t,...s)}function Es(...s){let t=s.join(" ");t in Lf||(Lf[t]=!0,It(...s))}function Op(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kh=Math.PI/180,fl=180/Math.PI;function er(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function ug(s,t){return(s%t+t)%t}function Vh(s,t,e){return(1-e)*s+e*t}function ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Dt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=l*f+c*d+h*_+u*g;m<0&&(f=-f,d=-d,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);p=Math.sin(p*y)/E,o=Math.sin(o*y)/E,l=l*p+f*o,c=c*p+d*o,h=h*p+_*o,u=u*p+g*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+_*o,u=u*p+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-o*d,t[e+2]=c*_+h*d+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ff.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hh.copy(this).projectOnVector(t),this.sub(Hh)}reflect(t){return this.sub(Hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new B,Ff=new Fi,Bt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],E=i[4],v=i[7],b=i[2],T=i[5],w=i[8];return r[0]=a*g+o*y+l*b,r[3]=a*m+o*E+l*T,r[6]=a*p+o*v+l*w,r[1]=c*g+h*y+u*b,r[4]=c*m+h*E+u*T,r[7]=c*p+h*v+u*w,r[2]=f*g+d*y+_*b,r[5]=f*m+d*E+_*T,r[8]=f*p+d*v+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gh.makeScale(t,e)),this}rotate(t){return this.premultiply(Gh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gh=new Bt,Nf=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dg(){let s={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?_a:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Or]:{primaries:t,whitePoint:n,transfer:_a,toXYZ:Nf,fromXYZ:Of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Nf,fromXYZ:Of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),s}var Jt=dg();function Ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var os,pl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=va("canvas")),os.width=t.width,os.height=t.height;let i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fg=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Wh(i[a].image)):r.push(Wh(i[a]))}else r=Wh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var pg=0,Xh=new B,pi=(()=>{class s extends Li{constructor(e=s.DEFAULT_IMAGE,n=s.DEFAULT_MAPPING,i=Ln,r=Ln,a=Xe,o=fr,l=qn,c=bn,h=s.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=er(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){It(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){It(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=du,s.DEFAULT_ANISOTROPY=1,s})(),Te=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(d+1)/2,b=(p+1)/2,T=(h+f)/4,w=(u+g)/4,C=(_+m)/4;return E>v&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=T/n,r=w/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=w/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new pi(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ma=class extends pi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends pi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(t.matrixWorld),this.union(Oo)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),Uo.subVectors(this.max,la),ls.subVectors(t.a,la),cs.subVectors(t.b,la),hs.subVectors(t.c,la),Ji.subVectors(cs,ls),$i.subVectors(hs,cs),Rr.subVectors(ls,hs);let e=[0,-Ji.z,Ji.y,0,-$i.z,$i.y,0,-Rr.z,Rr.y,Ji.z,0,-Ji.x,$i.z,0,-$i.x,Rr.z,0,-Rr.x,-Ji.y,Ji.x,0,-$i.y,$i.x,0,-Rr.y,Rr.x,0];return!qh(e,ls,cs,hs,Uo)||(e=[1,0,0,0,1,0,0,0,1],!qh(e,ls,cs,hs,Uo))?!1:(Bo.crossVectors(Ji,$i),e=[Bo.x,Bo.y,Bo.z],qh(e,ls,cs,hs,Uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new B,new B,new B,new B,new B,new B,new B,new B],Yn=new B,Oo=new ir,ls=new B,cs=new B,hs=new B,Ji=new B,$i=new B,Rr=new B,la=new B,Uo=new B,Bo=new B,Pr=new B;function qh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pr.fromArray(s,r);let o=i.x*Math.abs(Pr.x)+i.y*Math.abs(Pr.y)+i.z*Math.abs(Pr.z),l=t.dot(Pr),c=e.dot(Pr),h=n.dot(Pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mg=new ir,ca=new B,Yh=new B,rr=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ca.subVectors(t,this.center);let e=ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ca,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ca.copy(t.center).add(Yh)),this.expandByPoint(ca.copy(t.center).sub(Yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wi=new B,Zh=new B,zo=new B,Ki=new B,Jh=new B,ko=new B,$h=new B,As=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zh.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Zh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(zo),o=Ki.dot(this.direction),l=-Ki.dot(zo),c=Ki.lengthSq(),h=Math.abs(1-a*a),u,f,d,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Zh).addScaledVector(zo,f),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,i,r){Jh.subVectors(e,t),ko.subVectors(n,t),$h.crossVectors(Jh,ko);let a=this.direction.dot($h),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,t);let l=o*this.direction.dot(ko.crossVectors(Ki,ko));if(l<0)return null;let c=o*this.direction.dot(Jh.cross(Ki));if(c<0||l+c>a)return null;let h=-o*Ki.dot($h);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pe=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,_,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gg,t,_g)}lookAt(t,e,n){let i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ji.crossVectors(n,Pn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ji.crossVectors(n,Pn)),ji.normalize(),Vo.crossVectors(Pn,ji),i[0]=ji.x,i[4]=Vo.x,i[8]=Pn.x,i[1]=ji.y,i[5]=Vo.y,i[9]=Pn.y,i[2]=ji.z,i[6]=Vo.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],E=n[7],v=n[11],b=n[15],T=i[0],w=i[4],C=i[8],x=i[12],S=i[1],P=i[5],L=i[9],I=i[13],F=i[2],k=i[6],U=i[10],O=i[14],X=i[3],Q=i[7],et=i[11],st=i[15];return r[0]=a*T+o*S+l*F+c*X,r[4]=a*w+o*P+l*k+c*Q,r[8]=a*C+o*L+l*U+c*et,r[12]=a*x+o*I+l*O+c*st,r[1]=h*T+u*S+f*F+d*X,r[5]=h*w+u*P+f*k+d*Q,r[9]=h*C+u*L+f*U+d*et,r[13]=h*x+u*I+f*O+d*st,r[2]=_*T+g*S+m*F+p*X,r[6]=_*w+g*P+m*k+p*Q,r[10]=_*C+g*L+m*U+p*et,r[14]=_*x+g*I+m*O+p*st,r[3]=y*T+E*S+v*F+b*X,r[7]=y*w+E*P+v*k+b*Q,r[11]=y*C+E*L+v*U+b*et,r[15]=y*x+E*I+v*O+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15],y=l*d-c*f,E=o*d-c*u,v=o*f-l*u,b=a*d-c*h,T=a*f-l*h,w=a*u-o*h;return e*(g*y-m*E+p*v)-n*(_*y-m*b+p*T)+i*(_*E-g*b+p*w)-r*(_*v-g*T+m*w)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=u*m*c-g*f*c+g*l*d-o*m*d-u*l*p+o*f*p,E=_*f*c-h*m*c-_*l*d+a*m*d+h*l*p-a*f*p,v=h*g*c-_*u*c+_*o*d-a*g*d-h*o*p+a*u*p,b=_*u*l-h*g*l-_*o*f+a*g*f+h*o*m-a*u*m,T=e*y+n*E+i*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=y*w,t[1]=(g*f*r-u*m*r-g*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*w,t[4]=E*w,t[5]=(h*m*r-_*f*r+_*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*w,t[8]=v*w,t[9]=(_*u*r-h*g*r-_*n*d+e*g*d+h*n*p-e*u*p)*w,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=b*w,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*w,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,_=r*u,g=a*h,m=a*u,p=o*u,y=l*c,E=l*h,v=l*u,b=n.x,T=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+v)*b,i[2]=(_-E)*b,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(_+E)*w,i[9]=(m-y)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=us.set(i[0],i[1],i[2]).length(),a=us.set(i[4],i[5],i[6]).length(),o=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Zn.copy(this);let c=1/r,h=1/a,u=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,e.setFromRotationMatrix(Zn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=$n,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===$n)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xa)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=$n,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===$n)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===xa)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new B,Zn=new pe,gg=new B(0,0,0),_g=new B(1,1,1),ji=new B,Vo=new B,Pn=new B,Uf=new pe,Bf=new Fi,Ni=(()=>{class s{constructor(e=0,n=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xg=0,zf=new B,ds=new Fi,Ai=new pe,Ho=new B,ha=new B,vg=new B,yg=new Fi,kf=new B(1,0,0),Vf=new B(0,1,0),Hf=new B(0,0,1),Gf={type:"added"},Mg={type:"removed"},fs={type:"childadded",child:null},Kh={type:"childremoved",child:null},on=(()=>{class s extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,n=new Ni,i=new Fi,r=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Bt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,n){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ho.copy(e):Ho.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ha,Ho,this.up):Ai.lookAt(Ho,ha,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ai),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),fs.child=e,this.dispatchEvent(fs),fs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mg),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>Yr(un({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>un({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(e.animations,c))}}if(n){let l=o(e.geometries),c=o(e.materials),h=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),_=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}}return s.DEFAULT_UP=new B(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),Jn=new B,Ci=new B,jh=new B,Ri=new B,ps=new B,ms=new B,Wf=new B,Qh=new B,tu=new B,eu=new B,nu=new Te,iu=new Te,ru=new Te,Pi=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Jn.subVectors(t,e),i.cross(Jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Jn.subVectors(i,e),Ci.subVectors(n,e),jh.subVectors(t,e);let a=Jn.dot(Jn),o=Jn.dot(Ci),l=Jn.dot(jh),c=Ci.dot(Ci),h=Ci.dot(jh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(t,e),iu.fromBufferAttribute(t,n),ru.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(nu,r.x),a.addScaledVector(iu,r.y),a.addScaledVector(ru,r.z),a}static isFrontFacing(t,e,n,i){return Jn.subVectors(n,e),Ci.subVectors(t,e),Jn.cross(Ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Jn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ps.subVectors(i,n),ms.subVectors(r,n),Qh.subVectors(t,n);let l=ps.dot(Qh),c=ms.dot(Qh);if(l<=0&&c<=0)return e.copy(n);tu.subVectors(t,i);let h=ps.dot(tu),u=ms.dot(tu);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ps,a);eu.subVectors(t,r);let d=ps.dot(eu),_=ms.dot(eu);if(_>=0&&d<=_)return e.copy(r);let g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ms,o);let m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Wf.subVectors(r,i),o=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(Wf,o);let p=1/(m+g+f);return a=g*p,o=f*p,e.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function su(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=ug(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=su(a,r,t+1/3),this.g=su(a,r,t),this.b=su(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Dn){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){let n=Up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Jt.workingToColorSpace($e.copy(this),t),Math.round(qt($e.r*255,0,255))*65536+Math.round(qt($e.g*255,0,255))*256+Math.round(qt($e.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,r=$e.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Dn){Jt.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Go);let n=Vh(Qi.h,Go.h,e),i=Vh(Qi.s,Go.s,e),r=Vh(Qi.l,Go.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Tt;Tt.NAMES=Up;var bg=0,yn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Fr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ke=class extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new B,Wo=new Dt,Sg=0,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}};var Sa=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ta=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tg=0,Wn=new pe,au=new on,gs=new B,In=new ir,ua=new ir,ze=new B,oe=class s extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bu(t)?Ta:Sa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return au.lookAt(t),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(In.min,ua.min),In.expandByPoint(ze),ze.addVectors(In.max,ua.max),In.expandByPoint(ze)):(In.expandByPoint(ua.min),In.expandByPoint(ua.max))}In.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),ze.add(gs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new B,l[C]=new B;let c=new B,h=new B,u=new B,f=new Dt,d=new Dt,_=new Dt,g=new B,m=new B;function p(C,x,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,x),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),_.sub(f);let P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),o[C].add(g),o[x].add(g),o[S].add(g),l[C].add(m),l[x].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,x=y.length;C<x;++C){let S=y[C],P=S.start,L=S.count;for(let I=P,F=P+L;I<F;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let E=new B,v=new B,b=new B,T=new B;function w(C){b.fromBufferAttribute(i,C),T.copy(b);let x=o[C];E.copy(x),E.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(T,x);let P=v.dot(l[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,x=y.length;C<x;++C){let S=y[C],P=S.start,L=S.count;for(let I=P,F=P+L;I<F;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let f=0,d=t.count;f<d;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new xe(f,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xf=new pe,Ir=new As,Xo=new rr,qf=new B,qo=new B,Yo=new B,Zo=new B,ou=new B,Jo=new B,Yf=new B,$o=new B,Ft=class extends on{constructor(t=new oe,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ou.fromBufferAttribute(u,t),a?Jo.addScaledVector(ou,h):Jo.addScaledVector(ou.sub(e),h))}e.add(Jo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Ir.copy(t.ray).recast(t.near),!(Xo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Xo,qf)===null||Ir.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&(Xf.copy(r).invert(),Ir.copy(t.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=E;v<b;v+=3){let T=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);i=Ko(this,p,t,n,c,h,u,T,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=Ko(this,a,t,n,c,h,u,y,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){let m=f[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=E;v<b;v+=3){let T=v,w=v+1,C=v+2;i=Ko(this,p,t,n,c,h,u,T,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){let y=m,E=m+1,v=m+2;i=Ko(this,a,t,n,c,h,u,y,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Eg(s,t,e,n,i,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Di,o),l===null)return null;$o.copy(o),$o.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($o);return c<e.near||c>e.far?null:{distance:c,point:$o.clone(),object:s}}function Ko(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,qo),s.getVertexPosition(l,Yo),s.getVertexPosition(c,Zo);let h=Eg(s,t,e,n,qo,Yo,Zo,Yf);if(h){let u=new B;Pi.getBarycoord(Yf,qo,Yo,Zo,u),i&&(h.uv=Pi.getInterpolatedAttribute(i,o,l,c,u,new Dt)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,o,l,c,u,new Dt)),a&&(h.normal=Pi.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};Pi.getNormal(qo,Yo,Zo,f.normal),h.face=f,h.barycoord=u}return h}var Cs=class s extends oe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function _(g,m,p,y,E,v,b,T,w,C,x){let S=v/w,P=b/C,L=v/2,I=b/2,F=T/2,k=w+1,U=C+1,O=0,X=0,Q=new B;for(let et=0;et<U;et++){let st=et*P-I;for(let wt=0;wt<k;wt++){let Ot=wt*S-L;Q[g]=Ot*y,Q[m]=st*E,Q[p]=F,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(wt/w),u.push(1-et/C),O+=1}}for(let et=0;et<C;et++)for(let st=0;st<w;st++){let wt=f+st+k*et,Ot=f+st+k*(et+1),Yt=f+(st+1)+k*(et+1),Ht=f+(st+1)+k*et;l.push(wt,Ot,Ht),l.push(Ot,Yt,Ht),X+=6}o.addGroup(d,X,x),d+=X,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(s){let t={};for(let e=0;e<s.length;e++){let n=Vr(s[e]);for(let i in n)t[i]=n[i]}return t}function wg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Bp={clone:Vr,merge:Qe},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=wg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ea=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new B,Zf=new Dt,Jf=new Dt,We=class extends Ea{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tr.x,tr.y).multiplyScalar(-t/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-t/tr.z)}getViewSize(t,e){return this.getViewBounds(t,Zf,Jf),e.subVectors(Jf,Zf)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_s=-90,xs=1,_l=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new We(_s,xs,t,e);i.layers=this.layers,this.add(i);let r=new We(_s,xs,t,e);r.layers=this.layers,this.add(r);let a=new We(_s,xs,t,e);a.layers=this.layers,this.add(a);let o=new We(_s,xs,t,e);o.layers=this.layers,this.add(o);let l=new We(_s,xs,t,e);l.layers=this.layers,this.add(l);let c=new We(_s,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},wa=class extends pi{constructor(t=[],e=dr,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Aa=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Cs(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:di});r.uniforms.tEquirect.value=e;let a=new Ft(i,r),o=e.minFilter;return e.minFilter===fr&&(e.minFilter=Xe),new _l(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},an=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ps=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ca=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new B,Ra=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur=class extends yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,da=new B,ys=new B,Ms=new B,bs=new Dt,fa=new Dt,zp=new pe,jo=new B,pa=new B,Qo=new B,$f=new Dt,lu=new Dt,Kf=new Dt,Is=class extends on{constructor(t=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xl(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Ra(n,3,0,!1)),vs.setAttribute("uv",new Ra(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new Dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),zp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;tl(jo.set(-.5,-.5,0),Ms,a,ys,i,r),tl(pa.set(.5,-.5,0),Ms,a,ys,i,r),tl(Qo.set(.5,.5,0),Ms,a,ys,i,r),$f.set(0,0),lu.set(1,0),Kf.set(1,1);let o=t.ray.intersectTriangle(jo,pa,Qo,!1,da);if(o===null&&(tl(pa.set(-.5,.5,0),Ms,a,ys,i,r),lu.set(0,1),o=t.ray.intersectTriangle(jo,Qo,pa,!1,da),o===null))return;let l=t.ray.origin.distanceTo(da);l<t.near||l>t.far||e.push({distance:l,point:da.clone(),uv:Pi.getInterpolation(da,jo,pa,Qo,$f,lu,Kf,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function tl(s,t,e,n,i,r){bs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(fa.x=r*bs.x-i*bs.y,fa.y=i*bs.x+r*bs.y):fa.copy(bs),s.copy(t),s.x+=fa.x,s.y+=fa.y,s.applyMatrix4(zp)}var vl=class extends pi{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ke,h=ke,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cu=new B,Pg=new B,Ig=new Bt,li=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=cu.subVectors(n,e).cross(Pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(cu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ig.getNormalMatrix(t),i=this.coplanarPoint(cu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new rr,Dg=new Dt(.5,.5),el=new B,Ds=class{constructor(t=new li,e=new li,n=new li,i=new li,r=new li,a=new li){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],y=r[12],E=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,p-_,b-y).normalize(),i[1].setComponents(c+a,d+h,p+_,b+y).normalize(),i[2].setComponents(c+o,d+u,p+g,b+E).normalize(),i[3].setComponents(c-o,d-u,p-g,b-E).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,p-m,b-v).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-v).normalize(),e===$n)i[5].setComponents(c+l,d+f,p+m,b+v).normalize();else if(e===xa)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let e=Dg.distanceTo(t.center);return Dr.radius=.7071067811865476+e,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(el.x=i.normal.x>0?t.max.x:t.min.x,el.y=i.normal.y>0?t.max.y:t.min.y,el.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(el)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ls=class extends yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yl=new B,Ml=new B,jf=new pe,ma=new As,nl=new rr,hu=new B,Qf=new B,Pa=class extends on{constructor(t=new oe,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)yl.fromBufferAttribute(e,i-1),Ml.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yl.distanceTo(Ml);t.setAttribute("lineDistance",new ae(n,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(i),nl.radius+=r,t.ray.intersectsSphere(nl)===!1)return;jf.copy(i).invert(),ma.copy(t.ray).applyMatrix4(jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){let p=h.getX(g),y=h.getX(g+1),E=il(this,t,ma,l,p,y,g);E&&e.push(E)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(d),p=il(this,t,ma,l,g,m,_-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){let p=il(this,t,ma,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){let g=il(this,t,ma,l,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function il(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(yl.fromBufferAttribute(o,i),Ml.fromBufferAttribute(o,r),e.distanceSqToSegment(yl,Ml,hu,Qf)>n)return;hu.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(hu);if(!(c<t.near||c>t.far))return{distance:c,point:Qf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var On=class extends yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tp=new pe,_u=new As,rl=new rr,sl=new B,Xn=class extends on{constructor(t=new oe,e=new On){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=r,t.ray.intersectsSphere(rl)===!1)return;tp.copy(i).invert(),_u.copy(t.ray).applyMatrix4(tp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){let m=c.getX(_);sl.fromBufferAttribute(u,m),ep(sl,m,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)sl.fromBufferAttribute(u,_),ep(sl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ep(s,t,e,n,i,r,a){let o=_u.distanceSqToPoint(s);if(o<e){let l=new B;_u.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Oi=class extends pi{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sr=class extends pi{constructor(t,e,n=ti,i,r,a,o=ke,l=ke,c,h=ui,u=1){if(h!==ui&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bl=class extends sr{constructor(t,e=ti,n=dr,i,r,a=ke,o=ke,l,c=ui){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ia=class extends pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Mn=class s extends oe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],_=0,g=[],m=n/2,p=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function y(){let v=new B,b=new B,T=0,w=(e-t)/n;for(let C=0;C<=r;C++){let x=[],S=C/r,P=S*(e-t)+t;for(let L=0;L<=i;L++){let I=L/i,F=I*l+o,k=Math.sin(F),U=Math.cos(F);b.x=P*k,b.y=-S*n+m,b.z=P*U,u.push(b.x,b.y,b.z),v.set(k,w,U).normalize(),f.push(v.x,v.y,v.z),d.push(I,1-S),x.push(_++)}g.push(x)}for(let C=0;C<i;C++)for(let x=0;x<r;x++){let S=g[x][C],P=g[x+1][C],L=g[x+1][C+1],I=g[x][C+1];(t>0||x!==0)&&(h.push(S,P,I),T+=3),(e>0||x!==r-1)&&(h.push(P,L,I),T+=3)}c.addGroup(p,T,0),p+=T}function E(v){let b=_,T=new Dt,w=new B,C=0,x=v===!0?t:e,S=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),_++;let P=_;for(let L=0;L<=i;L++){let F=L/i*l+o,k=Math.cos(F),U=Math.sin(F);w.x=x*U,w.y=m*S,w.z=x*k,u.push(w.x,w.y,w.z),f.push(0,S,0),T.x=k*.5+.5,T.y=U*.5*S+.5,d.push(T.x,T.y),_++}for(let L=0;L<i;L++){let I=b+L,F=P+L;v===!0?h.push(F,F+1,I):h.push(F+1,F,I),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Da=class s extends Mn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sl=class s extends oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let E=new B,v=new B,b=new B;for(let T=0;T<e.length;T+=3)d(e[T+0],E),d(e[T+1],v),d(e[T+2],b),l(E,v,b,y)}function l(y,E,v,b){let T=b+1,w=[];for(let C=0;C<=T;C++){w[C]=[];let x=y.clone().lerp(v,C/T),S=E.clone().lerp(v,C/T),P=T-C;for(let L=0;L<=P;L++)L===0&&C===T?w[C][L]=x:w[C][L]=x.clone().lerp(S,L/P)}for(let C=0;C<T;C++)for(let x=0;x<2*(T-C)-1;x++){let S=Math.floor(x/2);x%2===0?(f(w[C][S+1]),f(w[C+1][S]),f(w[C][S])):(f(w[C][S+1]),f(w[C+1][S+1]),f(w[C+1][S]))}}function c(y){let E=new B;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(y),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let y=new B;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let v=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(v,1-b)}_(),u()}function u(){for(let y=0;y<a.length;y+=6){let E=a[y+0],v=a[y+2],b=a[y+4],T=Math.max(E,v,b),w=Math.min(E,v,b);T>.9&&w<.1&&(E<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,E){let v=y*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function _(){let y=new B,E=new B,v=new B,b=new B,T=new Dt,w=new Dt,C=new Dt;for(let x=0,S=0;x<r.length;x+=9,S+=6){y.set(r[x+0],r[x+1],r[x+2]),E.set(r[x+3],r[x+4],r[x+5]),v.set(r[x+6],r[x+7],r[x+8]),T.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),b.copy(y).add(E).add(v).divideScalar(3);let P=m(b);g(T,S+0,y,P),g(w,S+2,E,P),g(C,S+4,v,P)}}function g(y,E,v,b){b<0&&y.x===1&&(a[E]=y.x-1),v.x===0&&v.z===0&&(a[E]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var ar=class s extends Sl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ui=class s extends oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let E=0;E<c;E++){let v=E*u-r;_.push(v,-y,0),g.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let E=y+c*p,v=y+c*(p+1),b=y+1+c*(p+1),T=y+1+c*p;d.push(E,v,T),d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},or=class s extends oe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new B,_=new Dt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<i;g++){let m=g*(n+1);for(let p=0;p<n;p++){let y=p+m,E=y,v=y+n+1,b=y+n+2,T=y+1;o.push(E,v,T),o.push(v,b,T)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Kn=class s extends oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,f=new B,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let y=[],E=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let T=b/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+E*o),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(T+v,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let E=h[p][y+1],v=h[p][y],b=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&d.push(E,v,T),(p!==n-1||l<Math.PI)&&d.push(v,b,T)}this.setIndex(d),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var lr=class s extends oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new B,u=new B,f=new B;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){let g=_/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){let g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,y=(i+1)*d+_;a.push(g,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Tl=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jn=class extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},La=class extends jn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},cr=class extends yn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var El=class extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wl=class extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function al(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Br=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Al=class extends Br{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=t,o=2*e-n;break;case mu:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:a=t,l=2*n-e;break;case mu:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,y=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,E=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+y*a[c+b]+E*a[l+b]+v*a[u+b];return r}},Cl=class extends Br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Rl=class extends Br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=al(e,this.TimeBufferType),this.values=al(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:al(t.times,Array),values:al(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case ul:e=this.InterpolantFactoryMethodLinear;break;case ol:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Rt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Rt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Rt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Rt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&hg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Rt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ol,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ul;var hr=class extends Un{constructor(t,e,n){super(t,e,n)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ga;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}};Pl.prototype.ValueTypeName="color";var Il=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}};Il.prototype.ValueTypeName="number";var Dl=class extends Br{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Fi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Fa=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends Un{constructor(t,e,n){super(t,e,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ga;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends Un{constructor(t,e,n,i){super(t,e,n,i)}};Ll.prototype.ValueTypeName="vector";var Fs=class extends on{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var uu=new pe,np=new B,ip=new B,Fl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;np.setFromMatrixPosition(t.matrixWorld),e.position.copy(np),ip.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ip),e.updateMatrixWorld(),uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xu=class extends Fl{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}},je=class extends Fs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ns=class extends Ea{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vu=class extends Fl{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new vu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Na=class extends Fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Nl=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ku="\\[\\]\\.:\\/",Lg=new RegExp("["+ku+"]","g"),Vu="[^"+ku+"]",Fg="[^"+ku.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",Vu),Og=/(WCOD+)?/.source.replace("WCOD",Fg),Ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),Bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),zg=new RegExp("^"+Ng+Og+Ug+Bg+"$"),kg=["material","materials","bones","map"],yu=class{constructor(t,e,n){let i=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=(()=>{class s{constructor(e,n,i){this.path=n,this.parsedPath=i||s.parseTrackName(n),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,n,i):new s(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(e){let n=zg.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);kg.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,a=n.propertyIndex;if(e||(e=s.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!e.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[r];if(o===void 0){let h=n.nodeName;Rt("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=yu,s})();Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fb=new Float32Array(1);function Hu(s,t,e,n){let i=Vg(n);switch(e){case Fu:return s*t;case Ou:return s*t/i.components*i.byteLength;case jl:return s*t/i.components*i.byteLength;case kr:return s*t*2/i.components*i.byteLength;case Ql:return s*t*2/i.components*i.byteLength;case Nu:return s*t*3/i.components*i.byteLength;case qn:return s*t*4/i.components*i.byteLength;case tc:return s*t*4/i.components*i.byteLength;case ka:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nc:case rc:return Math.max(s,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(s,8)*Math.max(t,8)/2;case sc:case ac:case lc:case cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oc:case hc:case uc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case _c:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wc:case Ac:case Cc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rc:case Pc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ic:case Dc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vg(s){switch(s){case bn:case Pu:return{byteLength:1,components:1};case Bs:case Iu:case fi:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case ti:case Jl:case ei:return{byteLength:4,components:1};case Du:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function lm(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hg(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){let _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){let g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
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
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n_=`#ifdef USE_IRIDESCENCE
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
#endif`,i_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p_=`vec3 transformedNormal = objectNormal;
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
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,__=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
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
#endif`,V_=`uniform sampler2D dfgLUT;
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
}`,H_=`
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j_=`#if defined( USE_POINTS_UV )
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
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ax=`float getShadowMask() {
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
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,$x=`#define DISTANCE
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
}`,Kx=`#define DISTANCE
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
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
}`,ev=`uniform vec3 diffuse;
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
}`,nv=`#include <common>
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
}`,iv=`uniform vec3 diffuse;
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
}`,rv=`#define LAMBERT
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
}`,sv=`#define LAMBERT
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
}`,av=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,lv=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,hv=`#define PHONG
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
}`,uv=`#define PHONG
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
}`,dv=`#define STANDARD
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
}`,fv=`#define STANDARD
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
}`,pv=`#define TOON
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
}`,mv=`#define TOON
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
}`,gv=`uniform float size;
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
}`,_v=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,vv=`uniform vec3 color;
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
}`,yv=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Gg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:Yg,alphatest_pars_fragment:Zg,aomap_fragment:Jg,aomap_pars_fragment:$g,batching_pars_vertex:Kg,batching_vertex:jg,begin_vertex:Qg,beginnormal_vertex:t_,bsdfs:e_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:o_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:h_,color_vertex:u_,common:d_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:g_,emissivemap_fragment:__,emissivemap_pars_fragment:x_,colorspace_fragment:v_,colorspace_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:b_,envmap_pars_fragment:S_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:N_,envmap_vertex:E_,fog_vertex:w_,fog_pars_vertex:A_,fog_fragment:C_,fog_pars_fragment:R_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:I_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:L_,lights_pars_begin:F_,lights_toon_fragment:O_,lights_toon_pars_fragment:U_,lights_phong_fragment:B_,lights_phong_pars_fragment:z_,lights_physical_fragment:k_,lights_physical_pars_fragment:V_,lights_fragment_begin:H_,lights_fragment_maps:G_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:Z_,map_fragment:J_,map_pars_fragment:$_,map_particle_fragment:K_,map_particle_pars_fragment:j_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:tx,morphinstance_vertex:ex,morphcolor_vertex:nx,morphnormal_vertex:ix,morphtarget_pars_vertex:rx,morphtarget_vertex:sx,normal_fragment_begin:ax,normal_fragment_maps:ox,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:hx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:gx,packing:_x,premultiplied_alpha_fragment:xx,project_vertex:vx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:wx,shadowmask_pars_fragment:Ax,skinbase_vertex:Cx,skinning_pars_vertex:Rx,skinning_vertex:Px,skinnormal_vertex:Ix,specularmap_fragment:Dx,specularmap_pars_fragment:Lx,tonemapping_fragment:Fx,tonemapping_pars_fragment:Nx,transmission_fragment:Ox,transmission_pars_fragment:Ux,uv_pars_fragment:Bx,uv_pars_vertex:zx,uv_vertex:kx,worldpos_vertex:Vx,background_vert:Hx,background_frag:Gx,backgroundCube_vert:Wx,backgroundCube_frag:Xx,cube_vert:qx,cube_frag:Yx,depth_vert:Zx,depth_frag:Jx,distance_vert:$x,distance_frag:Kx,equirect_vert:jx,equirect_frag:Qx,linedashed_vert:tv,linedashed_frag:ev,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:rv,meshlambert_frag:sv,meshmatcap_vert:av,meshmatcap_frag:ov,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:hv,meshphong_frag:uv,meshphysical_vert:dv,meshphysical_frag:fv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:_v,shadow_vert:xv,shadow_frag:vv,sprite_vert:yv,sprite_frag:Mv},ut={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},gi={basic:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Qe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Qe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Qe([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Qe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Qe([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Qe([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Qe([ut.common,ut.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Qe([ut.lights,ut.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};gi.physical={uniforms:Qe([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Oc={r:0,b:0,g:0},Hr=new Ni,bv=new pe;function Sv(s,t,e,n,i,r,a){let o=new Tt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function g(E){let v=!1,b=_(E);b===null?p(o,l):b&&b.isColor&&(p(b,1),v=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,v){let b=_(v);b&&(b.isCubeTexture||b.mapping===Ba)?(h===void 0&&(h=new Ft(new Cs(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Vr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hr.copy(v.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Hr)),h.material.toneMapped=Jt.getTransfer(b.colorSpace)!==Qt,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ft(new Ui(2,2),new Nn({name:"BackgroundMaterial",uniforms:Vr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(Oc,zu(s)),n.buffers.color.setClear(Oc.r,Oc.g,Oc.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:g,addToRenderList:m,dispose:y}}function Tv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(S,P,L,I,F){let k=!1,U=u(I,L,P);r!==U&&(r=U,c(r.object)),k=d(S,I,L,F),k&&_(S,I,L,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(S,P,L,I),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,L){let I=L.wireframe===!0,F=n[S.id];F===void 0&&(F={},n[S.id]=F);let k=F[P.id];k===void 0&&(k={},F[P.id]=k);let U=k[I];return U===void 0&&(U=f(l()),k[I]=U),U}function f(S){let P=[],L=[],I=[];for(let F=0;F<e;F++)P[F]=0,L[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:I,object:S,attributes:{},index:null}}function d(S,P,L,I){let F=r.attributes,k=P.attributes,U=0,O=L.getAttributes();for(let X in O)if(O[X].location>=0){let et=F[X],st=k[X];if(st===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function _(S,P,L,I){let F={},k=P.attributes,U=0,O=L.getAttributes();for(let X in O)if(O[X].location>=0){let et=k[X];et===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(et=S.instanceColor));let st={};st.attribute=et,et&&et.data&&(st.data=et.data),F[X]=st,U++}r.attributes=F,r.attributesNum=U,r.index=I}function g(){let S=r.newAttributes;for(let P=0,L=S.length;P<L;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){let L=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;L[S]=1,I[S]===0&&(s.enableVertexAttribArray(S),I[S]=1),F[S]!==P&&(s.vertexAttribDivisor(S,P),F[S]=P)}function y(){let S=r.newAttributes,P=r.enabledAttributes;for(let L=0,I=P.length;L<I;L++)P[L]!==S[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function E(S,P,L,I,F,k,U){U===!0?s.vertexAttribIPointer(S,P,L,F,k):s.vertexAttribPointer(S,P,L,I,F,k)}function v(S,P,L,I){g();let F=I.attributes,k=L.getAttributes(),U=P.defaultAttributeValues;for(let O in k){let X=k[O];if(X.location>=0){let Q=F[O];if(Q===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){let et=Q.normalized,st=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;let Ot=wt.buffer,Yt=wt.type,Ht=wt.bytesPerElement,Y=Yt===s.INT||Yt===s.UNSIGNED_INT||Q.gpuType===Jl;if(Q.isInterleavedBufferAttribute){let K=Q.data,mt=K.stride,Ut=Q.offset;if(K.isInstancedInterleavedBuffer){for(let rt=0;rt<X.locationSize;rt++)p(X.location+rt,K.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let rt=0;rt<X.locationSize;rt++)m(X.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let rt=0;rt<X.locationSize;rt++)E(X.location+rt,st/X.locationSize,Yt,et,mt*Ht,(Ut+st/X.locationSize*rt)*Ht,Y)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,Q.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<X.locationSize;K++)m(X.location+K);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let K=0;K<X.locationSize;K++)E(X.location+K,st/X.locationSize,Yt,et,st*Ht,st/X.locationSize*K*Ht,Y)}}else if(U!==void 0){let et=U[O];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(X.location,et);break;case 3:s.vertexAttrib3fv(X.location,et);break;case 4:s.vertexAttrib4fv(X.location,et);break;default:s.vertexAttrib1fv(X.location,et)}}}}y()}function b(){C();for(let S in n){let P=n[S];for(let L in P){let I=P[L];for(let F in I)h(I[F].object),delete I[F];delete P[L]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let L in P){let I=P[L];for(let F in I)h(I[F].object),delete I[F];delete P[L]}delete n[S.id]}function w(S){for(let P in n){let L=n[P];if(L[S.id]===void 0)continue;let I=L[S.id];for(let F in I)h(I[F].object),delete I[F];delete L[S.id]}}function C(){x(),a=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Ev(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==qn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==bn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ei&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,maxSamples:b,samples:T}}function Av(s){let t=this,e=null,n=0,i=!1,r=!1,a=new li,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,v=p.clippingState||null;l.value=v,v=h(_,f,E,d);for(let b=0;b!==E;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=d+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==g;++E,v+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Cv(s){let t=new WeakMap;function e(a,o){return o===ql?a.mapping=dr:o===Yl&&(a.mapping=zr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ql||o===Yl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Aa(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var mr=4,kp=[.125,.215,.35,.446,.526,.582],Wr=20,Rv=256,Wa=new Ns,Vp=new Tt,Gu=null,Wu=0,Xu=0,qu=!1,Pv=new B,Bc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Pv}=r;Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gu,Wu,Xu),this._renderer.xr.enabled=qu,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:fi,format:qn,colorSpace:Or,depthBuffer:!1},i=Hp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Iv(r)),this._blurMaterial=Lv(r,t,e),this._ggxMaterial=Dv(r,t,e)}return i}_compileMaterial(t){let e=new Ft(new oe,t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,i,r){let l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vp),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Cs,new Ke({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Vp),p=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;ks(i,v*b,E>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===dr||t.mapping===zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-mr?n-_+mr:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,ks(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(o,Wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,ks(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,Wa)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Wr;m>Wr&&It(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);let p=[],y=0;for(let w=0;w<Wr;++w){let C=w/g,x=Math.exp(-C*C/2);p.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let v=this._sizeLods[i],b=3*v*(i>E-mr?i-E+mr:0),T=4*(this._cubeSize-v);ks(e,b,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Wa)}};function Iv(s){let t=[],e=[],n=[],i=s,r=s-mr+1+kp.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-mr?l=kp[a-s+mr-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*d),E=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let T=0;T<d;T++){let w=T%3*2/3-1,C=T>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(x,g*_*T),E.set(f,m*_*T);let S=[T,T,T,T,T,T];v.set(S,p*_*T)}let b=new oe;b.setAttribute("position",new xe(y,g)),b.setAttribute("uv",new xe(E,m)),b.setAttribute("faceIndex",new xe(v,p)),n.push(new Ft(b,null)),i>mr&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Hp(s,t,e){let n=new Fn(s,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dv(s,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Lv(s,t,e){let n=new Float32Array(Wr),i=new B(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Gp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Wp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function Fv(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ql||l===Yl,h=l===dr||l===zr;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Bc(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Bc(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nv(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Es("WebGLRenderer: "+n+" extension not supported."),i}}}function Ov(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,_=u.attributes.position,g=0;if(d!==null){let y=d.array;g=d.version;for(let E=0,v=y.length;E<v;E+=3){let b=y[E+0],T=y[E+1],w=y[E+2];f.push(b,T,T,w,w,b)}}else if(_!==void 0){let y=_.array;g=_.version;for(let E=0,v=y.length/3-1;E<v;E+=3){let b=E+0,T=E+1,w=E+2;f.push(b,T,T,w,w,b)}}else return;let m=new(Bu(f)?Ta:Sa)(f,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Uv(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=d[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zv(s,t,e){let n=new WeakMap,i=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*T*4*u),C=new Ma(w,b,T,u);C.type=ei,C.needsUpdate=!0;let x=v*4;for(let P=0;P<u;P++){let L=p[P],I=y[P],F=E[P],k=b*T*4*P;for(let U=0;U<L.count;U++){let O=U*x;_===!0&&(i.fromBufferAttribute(L,U),w[k+O+0]=i.x,w[k+O+1]=i.y,w[k+O+2]=i.z,w[k+O+3]=0),g===!0&&(i.fromBufferAttribute(I,U),w[k+O+4]=i.x,w[k+O+5]=i.y,w[k+O+6]=i.z,w[k+O+7]=0),m===!0&&(i.fromBufferAttribute(F,U),w[k+O+8]=i.x,w[k+O+9]=i.y,w[k+O+10]=i.z,w[k+O+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Dt(b,T)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function kv(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Vv={[Tu]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[wu]:"CINEON_TONE_MAPPING",[Ua]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Ru]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function Hv(s,t,e,n,i){let r=new Fn(t,e,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Fn(t,e,{type:fi,depthBuffer:!1,stencilBuffer:!1}),o=new oe;o.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ae([0,2,0,0,2,0],2));let l=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ft(o,l),h=new Ns(-1,1,1,-1,0,1),u=null,f=null,d=!1,_,g=null,m=[],p=!1;this.setSize=function(y,E){r.setSize(y,E),a.setSize(y,E);for(let v=0;v<m.length;v++){let b=m[v];b.setSize&&b.setSize(y,E)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let E=r.width,v=r.height;for(let b=0;b<m.length;b++){let T=m[b];T.setSize&&T.setSize(E,v)}},this.begin=function(y,E){if(d||y.toneMapping===Qn&&m.length===0)return!1;if(g=E,E!==null){let v=E.width,b=E.height;(r.width!==v||r.height!==b)&&this.setSize(v,b)}return p===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return p},this.end=function(y,E){y.toneMapping=_,d=!0;let v=r,b=a;for(let T=0;T<m.length;T++){let w=m[T];if(w.enabled!==!1&&(w.render(y,b,v,E),w.needsSwap!==!1)){let C=v;v=b,b=C}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},Jt.getTransfer(u)===Qt&&(l.defines.SRGB_TRANSFER="");let T=Vv[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(g),y.render(c,h),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var cm=new pi,Ju=new sr(1,1),hm=new Ma,um=new gl,dm=new wa,Xp=[],qp=[],Yp=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function Hs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Xp[i];if(r===void 0&&(r=new Float32Array(i),Xp[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vc(s,t){let e=qp[t];e===void 0&&(e=new Int32Array(t),qp[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Xv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function qv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function Yv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Oe(e,n))return;Jp.set(n),s.uniformMatrix2fv(this.addr,!1,Jp),Ue(e,n)}}function Zv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Oe(e,n))return;Zp.set(n),s.uniformMatrix3fv(this.addr,!1,Zp),Ue(e,n)}}function Jv(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Oe(e,n))return;Yp.set(n),s.uniformMatrix4fv(this.addr,!1,Yp),Ue(e,n)}}function $v(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function Qv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function ty(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ey(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function iy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function ry(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ju.compareFunction=e.isReversedDepthBuffer()?Nc:Fc,r=Ju):r=cm,e.setTexture2D(t||r,i)}function sy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||um,i)}function ay(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dm,i)}function oy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hm,i)}function ly(s){switch(s){case 5126:return Gv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return $v;case 35667:case 35671:return Kv;case 35668:case 35672:return jv;case 35669:case 35673:return Qv;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(s,t){s.uniform1fv(this.addr,t)}function hy(s,t){let e=Hs(t,this.size,2);s.uniform2fv(this.addr,e)}function uy(s,t){let e=Hs(t,this.size,3);s.uniform3fv(this.addr,e)}function dy(s,t){let e=Hs(t,this.size,4);s.uniform4fv(this.addr,e)}function fy(s,t){let e=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function py(s,t){let e=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function my(s,t){let e=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gy(s,t){s.uniform1iv(this.addr,t)}function _y(s,t){s.uniform2iv(this.addr,t)}function xy(s,t){s.uniform3iv(this.addr,t)}function vy(s,t){s.uniform4iv(this.addr,t)}function yy(s,t){s.uniform1uiv(this.addr,t)}function My(s,t){s.uniform2uiv(this.addr,t)}function by(s,t){s.uniform3uiv(this.addr,t)}function Sy(s,t){s.uniform4uiv(this.addr,t)}function Ty(s,t,e){let n=this.cache,i=t.length,r=Vc(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ju:a=cm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Ey(s,t,e){let n=this.cache,i=t.length,r=Vc(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||um,r[a])}function wy(s,t,e){let n=this.cache,i=t.length,r=Vc(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dm,r[a])}function Ay(s,t,e){let n=this.cache,i=t.length,r=Vc(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||hm,r[a])}function Cy(s){switch(s){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return My;case 36295:return by;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ay}}var $u=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ly(e.type)}},Ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}},ju=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Yu=/(\w+)(\])?(\[|\.)?/g;function $p(s,t){s.seq.push(t),s.map[t.id]=t}function Ry(s,t,e){let n=s.name,i=n.length;for(Yu.lastIndex=0;;){let r=Yu.exec(n),a=Yu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$p(e,c===void 0?new $u(o,s,t):new Ku(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new ju(o),$p(e,u)),e=u}}}var Vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ry(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Kp(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Py=37297,Iy=0;function Dy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jp=new Bt;function Ly(s){Jt._getMatrix(jp,Jt.workingColorSpace,s);let t=`mat3( ${jp.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case _a:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qp(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dy(s.getShaderSource(t),o)}else return r}function Fy(s,t){let e=Ly(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ny={[Tu]:"Linear",[Eu]:"Reinhard",[wu]:"Cineon",[Ua]:"ACESFilmic",[Cu]:"AgX",[Ru]:"Neutral",[Au]:"Custom"};function Oy(s,t){let e=Ny[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uc=new B;function Uy(){Jt.getLuminanceCoefficients(Uc);let s=Uc.x.toFixed(4),t=Uc.y.toFixed(4),e=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function zy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ky(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function qa(s){return s!==""}function tm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function em(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(s){return s.replace(Vy,Gy)}var Hy=new Map;function Gy(s,t){let e=Vt[t];if(e===void 0){let n=Hy.get(t);if(n!==void 0)e=Vt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qu(e)}var Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(s){return s.replace(Wy,Xy)}function Xy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function im(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var qy={[Oa]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Yy(s){return qy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zy={[dr]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function Jy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Zy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var $y={[zr]:"ENVMAP_MODE_REFRACTION"};function Ky(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$y[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jy={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[Ep]:"ENVMAP_BLENDING_ADD"};function Qy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jy[s.combine]||"ENVMAP_BLENDING_NONE"}function tM(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eM(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Yy(e),c=Jy(e),h=Ky(e),u=Qy(e),f=tM(e),d=By(e),_=zy(r),g=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(m=[im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Fy("linearToOutputTexel",e.outputColorSpace),Uy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qa).join(`
`)),a=Qu(a),a=tm(a,e),a=em(a,e),o=Qu(o),o=tm(o,e),o=em(o,e),a=nm(a),o=nm(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=y+m+a,v=y+p+o,b=Kp(i,i.VERTEX_SHADER,E),T=Kp(i,i.FRAGMENT_SHADER,v);i.attachShader(g,b),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g)||"",I=i.getShaderInfoLog(b)||"",F=i.getShaderInfoLog(T)||"",k=L.trim(),U=I.trim(),O=F.trim(),X=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,T);else{let et=Qp(i,b,"vertex"),st=Qp(i,T,"fragment");Rt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+et+`
`+st)}else k!==""?It("WebGLProgram: Program Info Log:",k):(U===""||O==="")&&(Q=!1);Q&&(P.diagnostics={runnable:X,programLog:k,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(b),i.deleteShader(T),C=new Vs(i,g),x=ky(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,Py)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}var nM=0,td=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ed(t),e.set(t,n)),n}},ed=class{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}};function iM(s,t,e,n,i,r,a){let o=new ba,l=new td,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,L,I){let F=L.fog,k=I.geometry,U=x.isMeshStandardMaterial?L.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||U),X=O&&O.mapping===Ba?O.image.height:null,Q=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,st=et!==void 0?et.length:0,wt=0;k.morphAttributes.position!==void 0&&(wt=1),k.morphAttributes.normal!==void 0&&(wt=2),k.morphAttributes.color!==void 0&&(wt=3);let Ot,Yt,Ht,Y;if(Q){let ee=gi[Q];Ot=ee.vertexShader,Yt=ee.fragmentShader}else Ot=x.vertexShader,Yt=x.fragmentShader,l.update(x),Ht=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);let K=s.getRenderTarget(),mt=s.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,rt=I.isBatchedMesh===!0,vt=!!x.map,kt=!!x.matcap,Xt=!!O,Kt=!!x.aoMap,te=!!x.lightMap,zt=!!x.bumpMap,ye=!!x.normalMap,D=!!x.displacementMap,Ie=!!x.emissiveMap,jt=!!x.metalnessMap,ue=!!x.roughnessMap,Mt=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,z=x.iridescence>0,Z=x.sheen>0,$=x.transmission>0,q=Mt&&!!x.anisotropyMap,St=R&&!!x.clearcoatMap,ot=R&&!!x.clearcoatNormalMap,yt=R&&!!x.clearcoatRoughnessMap,Lt=z&&!!x.iridescenceMap,nt=z&&!!x.iridescenceThicknessMap,ct=Z&&!!x.sheenColorMap,xt=Z&&!!x.sheenRoughnessMap,bt=!!x.specularMap,lt=!!x.specularColorMap,Gt=!!x.specularIntensityMap,N=$&&!!x.transmissionMap,ft=$&&!!x.thicknessMap,it=!!x.gradientMap,pt=!!x.alphaMap,tt=x.alphaTest>0,J=!!x.alphaHash,at=!!x.extensions,Nt=Qn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=s.toneMapping);let de={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Yt,defines:x.defines,customVertexShaderID:Ht,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:rt,batchingColor:rt&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Or,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:kt,envMap:Xt,envMapMode:Xt&&O.mapping,envMapCubeUVHeight:X,aoMap:Kt,lightMap:te,bumpMap:zt,normalMap:ye,displacementMap:D,emissiveMap:Ie,normalMapObjectSpace:ye&&x.normalMapType===Cp,normalMapTangentSpace:ye&&x.normalMapType===Lc,metalnessMap:jt,roughnessMap:ue,anisotropy:Mt,anisotropyMap:q,clearcoat:R,clearcoatMap:St,clearcoatNormalMap:ot,clearcoatRoughnessMap:yt,dispersion:M,iridescence:z,iridescenceMap:Lt,iridescenceThicknessMap:nt,sheen:Z,sheenColorMap:ct,sheenRoughnessMap:xt,specularMap:bt,specularColorMap:lt,specularIntensityMap:Gt,transmission:$,transmissionMap:N,thicknessMap:ft,gradientMap:it,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:J,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:Kt&&g(x.aoMap.channel),lightMapUv:te&&g(x.lightMap.channel),bumpMapUv:zt&&g(x.bumpMap.channel),normalMapUv:ye&&g(x.normalMap.channel),displacementMapUv:D&&g(x.displacementMap.channel),emissiveMapUv:Ie&&g(x.emissiveMap.channel),metalnessMapUv:jt&&g(x.metalnessMap.channel),roughnessMapUv:ue&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:St&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:bt&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Gt&&g(x.specularIntensityMap.channel),transmissionMapUv:N&&g(x.transmissionMap.channel),thicknessMapUv:ft&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||Mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(vt||pt),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ie&&x.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ve,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(S,x),E(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){let S=_[x.type],P;if(S){let L=gi[S];P=Bp.clone(L.uniforms)}else P=x.uniforms;return P}function b(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new eM(s,S,x,r),h.push(P),u.set(S,P)),P}function T(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:C}}function rM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function rm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function sm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,f,d,_,g,m){let p=a(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,_,g,m){let p=a(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||sM),n.length>1&&n.sort(f||rm),i.length>1&&i.sort(f||rm)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function aM(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new sm,s.set(n,[a])):i>=r.length?(a=new sm,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function oM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Tt};break;case"SpotLight":e={position:new B,direction:new B,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function lM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var cM=0;function hM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uM(s){let t=new oM,e=lM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new pe,a=new pe;function o(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,y=0,E=0,v=0,b=0,T=0,w=0;c.sort(hM);for(let x=0,S=c.length;x<S;x++){let P=c[x],L=P.color,I=P.intensity,F=P.distance,k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===kr?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*I,u+=L.g*I,f+=L.b*I;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],I);w++}else if(P.isDirectionalLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,X=e.get(P);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=U,d++}else if(P.isSpotLight){let U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(L).multiplyScalar(I),U.distance=F,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[g]=U;let O=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=O.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=k,v++}g++}else if(P.isRectAreaLight){let U=t.get(P);U.color.copy(L).multiplyScalar(I),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){let U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){let O=P.shadow,X=e.get(P);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,X.shadowCameraNear=O.camera.near,X.shadowCameraFar=O.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=U,_++}else if(P.isHemisphereLight){let U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(I),U.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==b||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=b,C.numLightProbes=w,n.version=cM++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let E=c[p];if(E.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(E.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function am(s){let t=new uM(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function dM(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new am(s),t.set(i,[o])):r>=a.length?(o=new am(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
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
}`,mM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],gM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],om=new pe,Xa=new B,Zu=new B;function _M(s,t,e){let n=new Ds,i=new Dt,r=new Dt,a=new Te,o=new El,l=new wl,c={},h=e.maxTextureSize,u={[Di]:qe,[qe]:Di,[ve]:ve},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:fM,fragmentShader:pM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let _=new oe;_.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ft(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===Ul&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Oa);let x=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(di),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==this.type;I&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=T.length;F<k;F++){let U=T[F],O=U.shadow;if(O===void 0){It("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let X=O.getFrameExtents();if(i.multiply(X),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,O.mapSize.y=r.y)),O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Us){if(U.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Fn(i.x,i.y,{format:kr,type:fi,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new sr(i.x,i.y,ei),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=ui,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke}else{U.isPointLight?(O.map=new Aa(i.x),O.map.depthTexture=new bl(i.x,ti)):(O.map=new Fn(i.x,i.y),O.map.depthTexture=new sr(i.x,i.y,ti)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=ui;let et=s.state.buffers.depth.getReversed();this.type===Oa?(O.map.depthTexture.compareFunction=et?Nc:Fc,O.map.depthTexture.minFilter=Xe,O.map.depthTexture.magFilter=Xe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke)}O.camera.updateProjectionMatrix()}let Q=O.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<Q;et++){if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,et),s.clear();else{et===0&&(s.setRenderTarget(O.map),s.clear());let st=O.getViewport(et);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),L.viewport(a)}if(U.isPointLight){let st=O.camera,wt=O.matrix,Ot=U.distance||st.far;Ot!==st.far&&(st.far=Ot,st.updateProjectionMatrix()),Xa.setFromMatrixPosition(U.matrixWorld),st.position.copy(Xa),Zu.copy(st.position),Zu.add(mM[et]),st.up.copy(gM[et]),st.lookAt(Zu),st.updateMatrixWorld(),wt.makeTranslation(-Xa.x,-Xa.y,-Xa.z),om.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),O._frustum.setFromProjectionMatrix(om,st.coordinateSystem,st.reversedDepth)}else O.updateMatrices(U);n=O.getFrustum(),v(w,C,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Us&&y(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,S,P)};function y(T,w){let C=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(i.x,i.y,{format:kr,type:fi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,C,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,C,d,g,null)}function E(T,w,C,x){let S=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=S.uuid,I=w.uuid,F=c[L];F===void 0&&(F={},c[L]=F);let k=F[I];k===void 0&&(k=S.clone(),F[I]=k,w.addEventListener("dispose",b)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,x===Us?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=s.properties.get(S);L.light=C}return S}function v(T,w,C,x,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Us)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let I=t.update(T),F=T.material;if(Array.isArray(F)){let k=I.groups;for(let U=0,O=k.length;U<O;U++){let X=k[U],Q=F[X.materialIndex];if(Q&&Q.visible){let et=E(T,Q,x,S);T.onBeforeShadow(s,T,w,C,I,et,X),s.renderBufferDirect(C,null,I,et,T,X),T.onAfterShadow(s,T,w,C,I,et,X)}}}else if(F.visible){let k=E(T,F,x,S);T.onBeforeShadow(s,T,w,C,I,k,null),s.renderBufferDirect(C,null,I,k,T,null),T.onAfterShadow(s,T,w,C,I,k,null)}}let L=T.children;for(let I=0,F=L.length;I<F;I++)v(L[I],w,C,x,S)}function b(T){T.target.removeEventListener("dispose",b);for(let C in c){let x=c[C],S=T.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}var xM={[Bl]:zl,[kl]:Gl,[Vl]:Wl,[Nr]:Hl,[zl]:Bl,[Gl]:kl,[Wl]:Vl,[Hl]:Nr};function vM(s,t){function e(){let N=!1,ft=new Te,it=null,pt=new Te(0,0,0,0);return{setMask:function(tt){it!==tt&&!N&&(s.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){N=tt},setClear:function(tt,J,at,Nt,de){de===!0&&(tt*=Nt,J*=Nt,at*=Nt),ft.set(tt,J,at,Nt),pt.equals(ft)===!1&&(s.clearColor(tt,J,at,Nt),pt.copy(ft))},reset:function(){N=!1,it=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,ft=!1,it=null,pt=null,tt=null;return{setReversed:function(J){if(ft!==J){let at=t.get("EXT_clip_control");J?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),ft=J;let Nt=tt;tt=null,this.setClear(Nt)}},getReversed:function(){return ft},setTest:function(J){J?K(s.DEPTH_TEST):mt(s.DEPTH_TEST)},setMask:function(J){it!==J&&!N&&(s.depthMask(J),it=J)},setFunc:function(J){if(ft&&(J=xM[J]),pt!==J){switch(J){case Bl:s.depthFunc(s.NEVER);break;case zl:s.depthFunc(s.ALWAYS);break;case kl:s.depthFunc(s.LESS);break;case Nr:s.depthFunc(s.LEQUAL);break;case Vl:s.depthFunc(s.EQUAL);break;case Hl:s.depthFunc(s.GEQUAL);break;case Gl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=J}},setLocked:function(J){N=J},setClear:function(J){tt!==J&&(ft&&(J=1-J),s.clearDepth(J),tt=J)},reset:function(){N=!1,it=null,pt=null,tt=null,ft=!1}}}function i(){let N=!1,ft=null,it=null,pt=null,tt=null,J=null,at=null,Nt=null,de=null;return{setTest:function(ee){N||(ee?K(s.STENCIL_TEST):mt(s.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!N&&(s.stencilMask(ee),ft=ee)},setFunc:function(ee,ni,_i){(it!==ee||pt!==ni||tt!==_i)&&(s.stencilFunc(ee,ni,_i),it=ee,pt=ni,tt=_i)},setOp:function(ee,ni,_i){(J!==ee||at!==ni||Nt!==_i)&&(s.stencilOp(ee,ni,_i),J=ee,at=ni,Nt=_i)},setLocked:function(ee){N=ee},setClear:function(ee){de!==ee&&(s.clearStencil(ee),de=ee)},reset:function(){N=!1,ft=null,it=null,pt=null,tt=null,J=null,at=null,Nt=null,de=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,E=null,v=null,b=null,T=null,w=new Tt(0,0,0),C=0,x=!1,S=null,P=null,L=null,I=null,F=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,O=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=O>=2);let Q=null,et={},st=s.getParameter(s.SCISSOR_BOX),wt=s.getParameter(s.VIEWPORT),Ot=new Te().fromArray(st),Yt=new Te().fromArray(wt);function Ht(N,ft,it,pt){let tt=new Uint8Array(4),J=s.createTexture();s.bindTexture(N,J),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<it;at++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(ft+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return J}let Y={};Y[s.TEXTURE_2D]=Ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(Nr),zt(!1),ye(Mu),K(s.CULL_FACE),Kt(di);function K(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function mt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ut(N,ft){return u[N]!==ft?(s.bindFramebuffer(N,ft),u[N]=ft,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function rt(N,ft){let it=d,pt=!1;if(N){it=f.get(ft),it===void 0&&(it=[],f.set(ft,it));let tt=N.textures;if(it.length!==tt.length||it[0]!==s.COLOR_ATTACHMENT0){for(let J=0,at=tt.length;J<at;J++)it[J]=s.COLOR_ATTACHMENT0+J;it.length=tt.length,pt=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,pt=!0);pt&&s.drawBuffers(it)}function vt(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let kt={[nr]:s.FUNC_ADD,[op]:s.FUNC_SUBTRACT,[lp]:s.FUNC_REVERSE_SUBTRACT};kt[cp]=s.MIN,kt[hp]=s.MAX;let Xt={[up]:s.ZERO,[dp]:s.ONE,[fp]:s.SRC_COLOR,[ll]:s.SRC_ALPHA,[vp]:s.SRC_ALPHA_SATURATE,[_p]:s.DST_COLOR,[mp]:s.DST_ALPHA,[pp]:s.ONE_MINUS_SRC_COLOR,[cl]:s.ONE_MINUS_SRC_ALPHA,[xp]:s.ONE_MINUS_DST_COLOR,[gp]:s.ONE_MINUS_DST_ALPHA,[yp]:s.CONSTANT_COLOR,[Mp]:s.ONE_MINUS_CONSTANT_COLOR,[bp]:s.CONSTANT_ALPHA,[Sp]:s.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,ft,it,pt,tt,J,at,Nt,de,ee){if(N===di){g===!0&&(mt(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),N!==ap){if(N!==m||ee!==x){if((p!==nr||v!==nr)&&(s.blendEquation(s.FUNC_ADD),p=nr,v=nr),ee)switch(N){case Fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFunc(s.ONE,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Su:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rt("WebGLState: Invalid blending: ",N);break}else switch(N){case Fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bu:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",N);break}y=null,E=null,b=null,T=null,w.set(0,0,0),C=0,m=N,x=ee}return}tt=tt||ft,J=J||it,at=at||pt,(ft!==p||tt!==v)&&(s.blendEquationSeparate(kt[ft],kt[tt]),p=ft,v=tt),(it!==y||pt!==E||J!==b||at!==T)&&(s.blendFuncSeparate(Xt[it],Xt[pt],Xt[J],Xt[at]),y=it,E=pt,b=J,T=at),(Nt.equals(w)===!1||de!==C)&&(s.blendColor(Nt.r,Nt.g,Nt.b,de),w.copy(Nt),C=de),m=N,x=!1}function te(N,ft){N.side===ve?mt(s.CULL_FACE):K(s.CULL_FACE);let it=N.side===qe;ft&&(it=!it),zt(it),N.blending===Fr&&N.transparent===!1?Kt(di):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(N){S!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),S=N)}function ye(N){N!==rp?(K(s.CULL_FACE),N!==P&&(N===Mu?s.cullFace(s.BACK):N===sp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):mt(s.CULL_FACE),P=N}function D(N){N!==L&&(U&&s.lineWidth(N),L=N)}function Ie(N,ft,it){N?(K(s.POLYGON_OFFSET_FILL),(I!==ft||F!==it)&&(s.polygonOffset(ft,it),I=ft,F=it)):mt(s.POLYGON_OFFSET_FILL)}function jt(N){N?K(s.SCISSOR_TEST):mt(s.SCISSOR_TEST)}function ue(N){N===void 0&&(N=s.TEXTURE0+k-1),Q!==N&&(s.activeTexture(N),Q=N)}function Mt(N,ft,it){it===void 0&&(Q===null?it=s.TEXTURE0+k-1:it=Q);let pt=et[it];pt===void 0&&(pt={type:void 0,texture:void 0},et[it]=pt),(pt.type!==N||pt.texture!==ft)&&(Q!==it&&(s.activeTexture(it),Q=it),s.bindTexture(N,ft||Y[N]),pt.type=N,pt.texture=ft)}function R(){let N=et[Q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function Z(){try{s.texSubImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function $(){try{s.texSubImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function St(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function ot(){try{s.texStorage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function yt(){try{s.texStorage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function Lt(){try{s.texImage2D(...arguments)}catch(N){Rt("WebGLState:",N)}}function nt(){try{s.texImage3D(...arguments)}catch(N){Rt("WebGLState:",N)}}function ct(N){Ot.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ot.copy(N))}function xt(N){Yt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Yt.copy(N))}function bt(N,ft){let it=c.get(ft);it===void 0&&(it=new WeakMap,c.set(ft,it));let pt=it.get(N);pt===void 0&&(pt=s.getUniformBlockIndex(ft,N.name),it.set(N,pt))}function lt(N,ft){let pt=c.get(ft).get(N);l.get(ft)!==pt&&(s.uniformBlockBinding(ft,pt,N.__bindingPointIndex),l.set(ft,pt))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,et={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,y=null,E=null,v=null,b=null,T=null,w=new Tt(0,0,0),C=0,x=!1,S=null,P=null,L=null,I=null,F=null,Ot.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:mt,bindFramebuffer:Ut,drawBuffers:rt,useProgram:vt,setBlending:Kt,setMaterial:te,setFlipSided:zt,setCullFace:ye,setLineWidth:D,setPolygonOffset:Ie,setScissorTest:jt,activeTexture:ue,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Lt,texImage3D:nt,updateUBOMapping:bt,uniformBlockBinding:lt,texStorage2D:ot,texStorage3D:yt,texSubImage2D:Z,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:St,scissor:ct,viewport:xt,reset:Gt}}function yM(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return d?new OffscreenCanvas(R,M):va("canvas")}function g(R,M,z){let Z=1,$=Mt(R);if(($.width>z||$.height>z)&&(Z=z/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let q=Math.floor(Z*$.width),St=Math.floor(Z*$.height);u===void 0&&(u=_(q,St));let ot=M?_(q,St):u;return ot.width=q,ot.height=St,ot.getContext("2d").drawImage(R,0,0,q,St),It("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+St+")."),ot}else return"data"in R&&It("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,M,z,Z,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===s.RED&&(z===s.FLOAT&&(q=s.R32F),z===s.HALF_FLOAT&&(q=s.R16F),z===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.R8UI),z===s.UNSIGNED_SHORT&&(q=s.R16UI),z===s.UNSIGNED_INT&&(q=s.R32UI),z===s.BYTE&&(q=s.R8I),z===s.SHORT&&(q=s.R16I),z===s.INT&&(q=s.R32I)),M===s.RG&&(z===s.FLOAT&&(q=s.RG32F),z===s.HALF_FLOAT&&(q=s.RG16F),z===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RG8UI),z===s.UNSIGNED_SHORT&&(q=s.RG16UI),z===s.UNSIGNED_INT&&(q=s.RG32UI),z===s.BYTE&&(q=s.RG8I),z===s.SHORT&&(q=s.RG16I),z===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(q=s.RGB16UI),z===s.UNSIGNED_INT&&(q=s.RGB32UI),z===s.BYTE&&(q=s.RGB8I),z===s.SHORT&&(q=s.RGB16I),z===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),z===s.UNSIGNED_INT&&(q=s.RGBA32UI),z===s.BYTE&&(q=s.RGBA8I),z===s.SHORT&&(q=s.RGBA16I),z===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(z===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){let St=$?_a:Jt.getTransfer(Z);z===s.FLOAT&&(q=s.RGBA32F),z===s.HALF_FLOAT&&(q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(q=St===Qt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(R,M){let z;return R?M===null||M===ti||M===zs?z=s.DEPTH24_STENCIL8:M===ei?z=s.DEPTH32F_STENCIL8:M===Bs&&(z=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===zs?z=s.DEPTH_COMPONENT24:M===ei?z=s.DEPTH_COMPONENT32F:M===Bs&&(z=s.DEPTH_COMPONENT16),z}function b(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==Xe?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){let M=R.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&h.delete(M)}function w(R){let M=R.target;M.removeEventListener("dispose",w),S(M)}function C(R){let M=n.get(R);if(M.__webglInit===void 0)return;let z=R.source,Z=f.get(z);if(Z){let $=Z[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(R),Object.keys(Z).length===0&&f.delete(z)}n.remove(R)}function x(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let z=R.source,Z=f.get(z);delete Z[M.__cacheKey],a.memory.textures--}function S(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let $=0;$<M.__webglFramebuffer[Z].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[Z][$]);else s.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[Z]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=R.textures;for(let Z=0,$=z.length;Z<$;Z++){let q=n.get(z[Z]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(R)}let P=0;function L(){P=0}function I(){let R=P;return R>=i.maxTextures&&It("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function F(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){let z=n.get(R);if(R.isVideoTexture&&jt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let Z=R.image;if(Z===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,R,M);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function U(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,M);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function O(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Y(z,R,M);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function X(R,M){let z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){K(z,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}let Q={[hi]:s.REPEAT,[Ln]:s.CLAMP_TO_EDGE,[hl]:s.MIRRORED_REPEAT},et={[ke]:s.NEAREST,[wp]:s.NEAREST_MIPMAP_NEAREST,[za]:s.NEAREST_MIPMAP_LINEAR,[Xe]:s.LINEAR,[Zl]:s.LINEAR_MIPMAP_NEAREST,[fr]:s.LINEAR_MIPMAP_LINEAR},st={[Rp]:s.NEVER,[Fp]:s.ALWAYS,[Pp]:s.LESS,[Fc]:s.LEQUAL,[Ip]:s.EQUAL,[Nc]:s.GEQUAL,[Dp]:s.GREATER,[Lp]:s.NOTEQUAL};function wt(R,M){if(M.type===ei&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xe||M.magFilter===Zl||M.magFilter===za||M.magFilter===fr||M.minFilter===Xe||M.minFilter===Zl||M.minFilter===za||M.minFilter===fr)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Q[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,et[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ke||M.minFilter!==za&&M.minFilter!==fr||M.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ot(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));let Z=M.source,$=f.get(Z);$===void 0&&($={},f.set(Z,$));let q=F(M);if(q!==R.__cacheKey){$[q]===void 0&&($[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[q].usedTimes++;let St=$[R.__cacheKey];St!==void 0&&($[R.__cacheKey].usedTimes--,St.usedTimes===0&&x(M)),R.__cacheKey=q,R.__webglTexture=$[q].texture}return z}function Yt(R,M,z){return Math.floor(Math.floor(R/z)/M)}function Ht(R,M,z,Z){let q=R.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,z,Z,M.data);else{q.sort((nt,ct)=>nt.start-ct.start);let St=0;for(let nt=1;nt<q.length;nt++){let ct=q[St],xt=q[nt],bt=ct.start+ct.count,lt=Yt(xt.start,M.width,4),Gt=Yt(ct.start,M.width,4);xt.start<=bt+1&&lt===Gt&&Yt(xt.start+xt.count-1,M.width,4)===lt?ct.count=Math.max(ct.count,xt.start+xt.count-ct.start):(++St,q[St]=xt)}q.length=St+1;let ot=s.getParameter(s.UNPACK_ROW_LENGTH),yt=s.getParameter(s.UNPACK_SKIP_PIXELS),Lt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let nt=0,ct=q.length;nt<ct;nt++){let xt=q[nt],bt=Math.floor(xt.start/4),lt=Math.ceil(xt.count/4),Gt=bt%M.width,N=Math.floor(bt/M.width),ft=lt,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Gt,N,ft,it,z,Z,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ot),s.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Lt)}}function Y(R,M,z){let Z=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=s.TEXTURE_3D);let $=Ot(R,M),q=M.source;e.bindTexture(Z,R.__webglTexture,s.TEXTURE0+z);let St=n.get(q);if(q.version!==St.__version||$===!0){e.activeTexture(s.TEXTURE0+z);let ot=Jt.getPrimaries(Jt.workingColorSpace),yt=M.colorSpace===Bi?null:Jt.getPrimaries(M.colorSpace),Lt=M.colorSpace===Bi||ot===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let nt=g(M.image,!1,i.maxTextureSize);nt=ue(M,nt);let ct=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),bt=E(M.internalFormat,ct,xt,M.colorSpace,M.isVideoTexture);wt(Z,M);let lt,Gt=M.mipmaps,N=M.isVideoTexture!==!0,ft=St.__version===void 0||$===!0,it=q.dataReady,pt=b(M,nt);if(M.isDepthTexture)bt=v(M.format===pr,M.type),ft&&(N?e.texStorage2D(s.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,bt,nt.width,nt.height,0,ct,xt,null));else if(M.isDataTexture)if(Gt.length>0){N&&ft&&e.texStorage2D(s.TEXTURE_2D,pt,bt,Gt[0].width,Gt[0].height);for(let tt=0,J=Gt.length;tt<J;tt++)lt=Gt[tt],N?it&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,xt,lt.data):e.texImage2D(s.TEXTURE_2D,tt,bt,lt.width,lt.height,0,ct,xt,lt.data);M.generateMipmaps=!1}else N?(ft&&e.texStorage2D(s.TEXTURE_2D,pt,bt,nt.width,nt.height),it&&Ht(M,nt,ct,xt)):e.texImage2D(s.TEXTURE_2D,0,bt,nt.width,nt.height,0,ct,xt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,bt,Gt[0].width,Gt[0].height,nt.depth);for(let tt=0,J=Gt.length;tt<J;tt++)if(lt=Gt[tt],M.format!==qn)if(ct!==null)if(N){if(it)if(M.layerUpdates.size>0){let at=Hu(lt.width,lt.height,M.format,M.type);for(let Nt of M.layerUpdates){let de=lt.data.subarray(Nt*at/lt.data.BYTES_PER_ELEMENT,(Nt+1)*at/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Nt,lt.width,lt.height,1,ct,de)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ct,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,bt,lt.width,lt.height,nt.depth,0,lt.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,nt.depth,ct,xt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,bt,lt.width,lt.height,nt.depth,0,ct,xt,lt.data)}else{N&&ft&&e.texStorage2D(s.TEXTURE_2D,pt,bt,Gt[0].width,Gt[0].height);for(let tt=0,J=Gt.length;tt<J;tt++)lt=Gt[tt],M.format!==qn?ct!==null?N?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,bt,lt.width,lt.height,0,lt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?it&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,lt.width,lt.height,ct,xt,lt.data):e.texImage2D(s.TEXTURE_2D,tt,bt,lt.width,lt.height,0,ct,xt,lt.data)}else if(M.isDataArrayTexture)if(N){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,bt,nt.width,nt.height,nt.depth),it)if(M.layerUpdates.size>0){let tt=Hu(nt.width,nt.height,M.format,M.type);for(let J of M.layerUpdates){let at=nt.data.subarray(J*tt/nt.data.BYTES_PER_ELEMENT,(J+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ct,xt,at)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ct,xt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,ct,xt,nt.data);else if(M.isData3DTexture)N?(ft&&e.texStorage3D(s.TEXTURE_3D,pt,bt,nt.width,nt.height,nt.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ct,xt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,ct,xt,nt.data);else if(M.isFramebufferTexture){if(ft)if(N)e.texStorage2D(s.TEXTURE_2D,pt,bt,nt.width,nt.height);else{let tt=nt.width,J=nt.height;for(let at=0;at<pt;at++)e.texImage2D(s.TEXTURE_2D,at,bt,tt,J,0,ct,xt,null),tt>>=1,J>>=1}}else if(Gt.length>0){if(N&&ft){let tt=Mt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,pt,bt,tt.width,tt.height)}for(let tt=0,J=Gt.length;tt<J;tt++)lt=Gt[tt],N?it&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct,xt,lt):e.texImage2D(s.TEXTURE_2D,tt,bt,ct,xt,lt);M.generateMipmaps=!1}else if(N){if(ft){let tt=Mt(nt);e.texStorage2D(s.TEXTURE_2D,pt,bt,tt.width,tt.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,xt,nt)}else e.texImage2D(s.TEXTURE_2D,0,bt,ct,xt,nt);m(M)&&p(Z),St.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function K(R,M,z){if(M.image.length!==6)return;let Z=Ot(R,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+z);let q=n.get($);if($.version!==q.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);let St=Jt.getPrimaries(Jt.workingColorSpace),ot=M.colorSpace===Bi?null:Jt.getPrimaries(M.colorSpace),yt=M.colorSpace===Bi||St===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let J=0;J<6;J++)!Lt&&!nt?ct[J]=g(M.image[J],!0,i.maxCubemapSize):ct[J]=nt?M.image[J].image:M.image[J],ct[J]=ue(M,ct[J]);let xt=ct[0],bt=r.convert(M.format,M.colorSpace),lt=r.convert(M.type),Gt=E(M.internalFormat,bt,lt,M.colorSpace),N=M.isVideoTexture!==!0,ft=q.__version===void 0||Z===!0,it=$.dataReady,pt=b(M,xt);wt(s.TEXTURE_CUBE_MAP,M);let tt;if(Lt){N&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Gt,xt.width,xt.height);for(let J=0;J<6;J++){tt=ct[J].mipmaps;for(let at=0;at<tt.length;at++){let Nt=tt[at];M.format!==qn?bt!==null?N?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,Nt.width,Nt.height,bt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Gt,Nt.width,Nt.height,0,Nt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,Nt.width,Nt.height,bt,lt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Gt,Nt.width,Nt.height,0,bt,lt,Nt.data)}}}else{if(tt=M.mipmaps,N&&ft){tt.length>0&&pt++;let J=Mt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Gt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){N?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ct[J].width,ct[J].height,bt,lt,ct[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,ct[J].width,ct[J].height,0,bt,lt,ct[J].data);for(let at=0;at<tt.length;at++){let de=tt[at].image[J].image;N?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,de.width,de.height,bt,lt,de.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Gt,de.width,de.height,0,bt,lt,de.data)}}else{N?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt,lt,ct[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Gt,bt,lt,ct[J]);for(let at=0;at<tt.length;at++){let Nt=tt[at];N?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,bt,lt,Nt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Gt,bt,lt,Nt.image[J])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),q.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function mt(R,M,z,Z,$,q){let St=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),yt=E(z.internalFormat,St,ot,z.colorSpace),Lt=n.get(M),nt=n.get(z);if(nt.__renderTarget=M,!Lt.__hasExternalTextures){let ct=Math.max(1,M.width>>q),xt=Math.max(1,M.height>>q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,q,yt,ct,xt,M.depth,0,St,ot,null):e.texImage2D($,q,yt,ct,xt,0,St,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Ie(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,$,nt.__webglTexture,0,D(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,$,nt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let Z=M.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,q=v(M.stencilBuffer,$),St=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(M),q,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(M),q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,R)}else{let Z=M.textures;for(let $=0;$<Z.length;$++){let q=Z[$],St=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),yt=E(q.internalFormat,St,ot,q.colorSpace);Ie(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(M),yt,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(M),yt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,yt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(R,M,z){let Z=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);if($.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),wt(s.TEXTURE_CUBE_MAP,M.depthTexture);let Lt=r.convert(M.depthTexture.format),nt=r.convert(M.depthTexture.type),ct;M.depthTexture.format===ui?ct=s.DEPTH_COMPONENT24:M.depthTexture.format===pr&&(ct=s.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ct,M.width,M.height,0,Lt,nt,null)}}else k(M.depthTexture,0);let q=$.__webglTexture,St=D(M),ot=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,yt=M.depthTexture.format===pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ui)Ie(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,ot,q,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,yt,ot,q,0);else if(M.depthTexture.format===pr)Ie(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,ot,q,0,St):s.framebufferTexture2D(s.FRAMEBUFFER,yt,ot,q,0);else throw new Error("Unknown depthTexture format")}function vt(R){let M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)rt(M.__webglFramebuffer[Z],R,Z);else{let Z=R.texture.mipmaps;Z&&Z.length>0?rt(M.__webglFramebuffer[0],R,0):rt(M.__webglFramebuffer,R,0)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ut(M.__webglDepthbuffer[Z],R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}else{let Z=R.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ut(M.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(R,M,z){let Z=n.get(R);M!==void 0&&mt(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&vt(R)}function Xt(R){let M=R.texture,z=n.get(R),Z=n.get(M);R.addEventListener("dispose",w);let $=R.textures,q=R.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=M.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let yt=0;yt<M.mipmaps.length;yt++)z.__webglFramebuffer[ot][yt]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<M.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(St)for(let ot=0,yt=$.length;ot<yt;ot++){let Lt=n.get($[ot]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Ie(R)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<$.length;ot++){let yt=$[ot];z.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let Lt=r.convert(yt.format,yt.colorSpace),nt=r.convert(yt.type),ct=E(yt.internalFormat,Lt,nt,yt.colorSpace,R.isXRRenderTarget===!0),xt=D(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,ct,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),wt(s.TEXTURE_CUBE_MAP,M);for(let ot=0;ot<6;ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)mt(z.__webglFramebuffer[ot][yt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt);else mt(z.__webglFramebuffer[ot],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,yt=$.length;ot<yt;ot++){let Lt=$[ot],nt=n.get(Lt),ct=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,nt.__webglTexture),wt(ct,Lt),mt(z.__webglFramebuffer,R,Lt,s.COLOR_ATTACHMENT0+ot,ct,0),m(Lt)&&p(ct)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),wt(ot,M),M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)mt(z.__webglFramebuffer[yt],R,M,s.COLOR_ATTACHMENT0,ot,yt);else mt(z.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,ot,0);m(M)&&p(ot),e.unbindTexture()}R.depthBuffer&&vt(R)}function Kt(R){let M=R.textures;for(let z=0,Z=M.length;z<Z;z++){let $=M[z];if(m($)){let q=y(R),St=n.get($).__webglTexture;e.bindTexture(q,St),p(q),e.unbindTexture()}}}let te=[],zt=[];function ye(R){if(R.samples>0){if(Ie(R)===!1){let M=R.textures,z=R.width,Z=R.height,$=s.COLOR_BUFFER_BIT,q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(R),ot=M.length>1;if(ot)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let yt=R.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[Lt]);let nt=n.get(M[Lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,$,s.NEAREST),l===!0&&(te.length=0,zt.length=0,te.push(s.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(te.push(q),zt.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,St.__webglColorRenderbuffer[Lt]);let nt=n.get(M[Lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function D(R){return Math.min(i.maxSamples,R.samples)}function Ie(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function jt(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ue(R,M){let z=R.colorSpace,Z=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Or&&z!==Bi&&(Jt.getTransfer(z)===Qt?(Z!==qn||$!==bn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",z)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function MM(s,t){function e(n,i=Bi){let r,a=Jt.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===$l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return s.BYTE;if(n===Iu)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===Jl)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===ei)return s.FLOAT;if(n===fi)return s.HALF_FLOAT;if(n===Fu)return s.ALPHA;if(n===Nu)return s.RGB;if(n===qn)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===pr)return s.DEPTH_STENCIL;if(n===Ou)return s.RED;if(n===jl)return s.RED_INTEGER;if(n===kr)return s.RG;if(n===Ql)return s.RG_INTEGER;if(n===tc)return s.RGBA_INTEGER;if(n===ka||n===Va||n===Ha||n===Ga)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===nc||n===ic||n===rc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===ac)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lc)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hc)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===bc||n===Sc||n===Tc||n===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===Pc||n===Ic||n===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`,nd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ia(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:bM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},id=class extends Li{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null,g=typeof XRWebGLBinding<"u",m=new nd,p={},y=e.getContextAttributes(),E=null,v=null,b=[],T=[],w=new Dt,C=null,x=new We;x.viewport=new Te;let S=new We;S.viewport=new Te;let P=[x,S],L=new Nl,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=b[Y];return K===void 0&&(K=new Rs,b[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=b[Y];return K===void 0&&(K=new Rs,b[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=b[Y];return K===void 0&&(K=new Rs,b[Y]=K),K.getHandSpace()};function k(Y){let K=T.indexOf(Y.inputSource);if(K===-1)return;let mt=b[K];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,c||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",O);for(let Y=0;Y<b.length;Y++){let K=T[Y];K!==null&&(T[Y]=null,b[Y].disconnect(K))}I=null,F=null,m.reset();for(let Y in p)delete p[Y];t.setRenderTarget(E),d=null,f=null,u=null,i=null,v=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=function(Y){return ja(this,null,function*(){if(i=Y,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",U),i.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&(yield e.makeXRCompatible()),C=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ut=null,rt=null;y.depth&&(rt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=y.stencil?pr:ui,Ut=y.stencil?zs:ti);let vt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Fn(f.textureWidth,f.textureHeight,{format:qn,type:bn,depthTexture:new sr(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Fn(d.framebufferWidth,d.framebufferHeight,{format:qn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Y){for(let K=0;K<Y.removed.length;K++){let mt=Y.removed[K],Ut=T.indexOf(mt);Ut>=0&&(T[Ut]=null,b[Ut].disconnect(mt))}for(let K=0;K<Y.added.length;K++){let mt=Y.added[K],Ut=T.indexOf(mt);if(Ut===-1){for(let vt=0;vt<b.length;vt++)if(vt>=T.length){T.push(mt),Ut=vt;break}else if(T[vt]===null){T[vt]=mt,Ut=vt;break}if(Ut===-1)break}let rt=b[Ut];rt&&rt.connect(mt)}}let X=new B,Q=new B;function et(Y,K,mt){X.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let Ut=X.distanceTo(Q),rt=K.projectionMatrix.elements,vt=mt.projectionMatrix.elements,kt=rt[14]/(rt[10]-1),Xt=rt[14]/(rt[10]+1),Kt=(rt[9]+1)/rt[5],te=(rt[9]-1)/rt[5],zt=(rt[8]-1)/rt[0],ye=(vt[8]+1)/vt[0],D=kt*zt,Ie=kt*ye,jt=Ut/(-zt+ye),ue=jt*-zt;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(jt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),rt[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Mt=kt+jt,R=Xt+jt,M=D-ue,z=Ie+(Ut-ue),Z=Kt*Xt/R*Mt,$=te*Xt/R*Mt;Y.projectionMatrix.makePerspective(M,z,Z,$,Mt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,mt=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),L.near=S.near=x.near=K,L.far=S.far=x.far=mt,(I!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,F=L.far),L.layers.mask=Y.layers.mask|6,x.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;let Ut=Y.parent,rt=L.cameras;st(L,Ut);for(let vt=0;vt<rt.length;vt++)st(rt[vt],Ut);rt.length===2?et(L,x,S):L.projectionMatrix.copy(x.projectionMatrix),wt(Y,L,Ut)};function wt(Y,K,mt){mt===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return p[Y]};let Ot=null;function Yt(Y,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ut=!1;mt.length!==L.cameras.length&&(L.cameras.length=0,Ut=!0);for(let Xt=0;Xt<mt.length;Xt++){let Kt=mt[Xt],te=null;if(d!==null)te=d.getViewport(Kt);else{let ye=u.getViewSubImage(f,Kt);te=ye.viewport,Xt===0&&(t.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(v))}let zt=P[Xt];zt===void 0&&(zt=new We,zt.layers.enable(Xt),zt.viewport=new Te,P[Xt]=zt),zt.matrix.fromArray(Kt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Kt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(te.x,te.y,te.width,te.height),Xt===0&&(L.matrix.copy(zt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ut===!0&&L.cameras.push(zt)}let rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let Xt=u.getDepthInformation(mt[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,i.renderState)}if(rt&&rt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<mt.length;Xt++){let Kt=mt[Xt].camera;if(Kt){let te=p[Kt];te||(te=new Ia,p[Kt]=te);let zt=u.getCameraImage(Kt);te.sourceTexture=zt}}}}for(let mt=0;mt<b.length;mt++){let Ut=T[mt],rt=b[mt];Ut!==null&&rt!==void 0&&rt.update(Ut,K,c||a)}Ot&&Ot(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let Ht=new lm;Ht.setAnimationLoop(Yt),this.setAnimationLoop=function(Y){Ot=Y},this.dispose=function(){}}},Gr=new Ni,TM=new pe;function EM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,Gr.copy(v),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),m.envMapRotation.value.setFromMatrix4(TM.makeRotationFromEuler(Gr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wM(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=i[y.id];v===void 0&&(_(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));let b=E.program;n.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){let E=u();y.__bindingPointIndex=E;let v=s.createBuffer(),b=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let E=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let T=0,w=v.length;T<w;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,S=C.length;x<S;x++){let P=C[x];if(d(P,T,x,b)===!0){let L=P.__offset,I=Array.isArray(P.value)?P.value:[P.value],F=0;for(let k=0;k<I.length;k++){let U=I[k],O=g(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,L+F,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,E,v,b){let T=y.value,w=E+"_"+v;if(b[w]===void 0)return typeof T=="number"||typeof T=="boolean"?b[w]=T:b[w]=T.clone(),!0;{let C=b[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return b[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function _(y){let E=y.uniforms,v=0,b=16;for(let w=0,C=E.length;w<C;w++){let x=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,P=x.length;S<P;S++){let L=x[S],I=Array.isArray(L.value)?L.value:[L.value];for(let F=0,k=I.length;F<k;F++){let U=I[F],O=g(U),X=v%b,Q=X%O.boundary,et=X+Q;v+=Q,et!==0&&b-et<O.storage&&(v+=b-et),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=O.storage}}}let T=v%b;return T>0&&(v+=b-T),y.__size=v,y.__cache={},this}function g(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):It("WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){let E=y.target;E.removeEventListener("dispose",m);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var AM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function CM(){return mi===null&&(mi=new vl(AM,16,16,kr,fi),mi.name="DFG_LUT",mi.minFilter=Xe,mi.magFilter=Xe,mi.wrapS=Ln,mi.wrapT=Ln,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var zc=class{constructor(t={}){let{canvas:e=Np(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let g=d,m=new Set([tc,Ql,jl]),p=new Set([bn,ti,Bs,zs,$l,Kl]),y=new Uint32Array(4),E=new Int32Array(4),v=null,b=null,T=[],w=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,S=!1;this._outputColorSpace=Dn;let P=0,L=0,I=null,F=-1,k=null,U=new Te,O=new Te,X=null,Q=new Tt(0),et=0,st=e.width,wt=e.height,Ot=1,Yt=null,Ht=null,Y=new Te(0,0,st,wt),K=new Te(0,0,st,wt),mt=!1,Ut=new Ds,rt=!1,vt=!1,kt=new pe,Xt=new B,Kt=new Te,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function ye(){return I===null?Ot:1}let D=n;function Ie(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",ee,!1),D===null){let V="webgl2";if(D=Ie(V,A),D===null)throw Ie(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let jt,ue,Mt,R,M,z,Z,$,q,St,ot,yt,Lt,nt,ct,xt,bt,lt,Gt,N,ft,it,pt,tt;function J(){jt=new Nv(D),jt.init(),it=new MM(D,jt),ue=new wv(D,jt,t,it),Mt=new vM(D,jt),ue.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),R=new Bv(D),M=new rM,z=new yM(D,jt,Mt,M,ue,it,R),Z=new Cv(x),$=new Fv(x),q=new Hg(D),pt=new Tv(D,q),St=new Ov(D,q,R,pt),ot=new kv(D,St,q,R),Gt=new zv(D,ue,z),xt=new Av(M),yt=new iM(x,Z,$,jt,ue,pt,xt),Lt=new EM(x,M),nt=new aM,ct=new dM(jt),lt=new Sv(x,Z,$,Mt,ot,_,l),bt=new _M(x,ot,ue),tt=new wM(D,R,ue,Mt),N=new Ev(D,jt,R),ft=new Uv(D,jt,R),R.programs=yt.programs,x.capabilities=ue,x.extensions=jt,x.properties=M,x.renderLists=nt,x.shadowMap=bt,x.state=Mt,x.info=R}J(),g!==bn&&(C=new Hv(g,e.width,e.height,i,r));let at=new id(x,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(A){A!==void 0&&(Ot=A,this.setSize(st,wt,!1))},this.getSize=function(A){return A.set(st,wt)},this.setSize=function(A,V,W=!0){if(at.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}st=A,wt=V,e.width=Math.floor(A*Ot),e.height=Math.floor(V*Ot),W===!0&&(e.style.width=A+"px",e.style.height=V+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(st*Ot,wt*Ot).floor()},this.setDrawingBufferSize=function(A,V,W){st=A,wt=V,Ot=W,e.width=Math.floor(A*W),e.height=Math.floor(V*W),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(g===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,V,W,G){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,V,W,G),Mt.viewport(U.copy(Y).multiplyScalar(Ot).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,V,W,G){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,V,W,G),Mt.scissor(O.copy(K).multiplyScalar(Ot).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){Mt.setScissorTest(mt=A)},this.setOpaqueSort=function(A){Yt=A},this.setTransparentSort=function(A){Ht=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,W=!0){let G=0;if(A){let H=!1;if(I!==null){let ht=I.texture.format;H=m.has(ht)}if(H){let ht=I.texture.type,gt=p.has(ht),dt=lt.getClearColor(),_t=lt.getClearAlpha(),Et=dt.r,Pt=dt.g,At=dt.b;gt?(y[0]=Et,y[1]=Pt,y[2]=At,y[3]=_t,D.clearBufferuiv(D.COLOR,0,y)):(E[0]=Et,E[1]=Pt,E[2]=At,E[3]=_t,D.clearBufferiv(D.COLOR,0,E))}else G|=D.COLOR_BUFFER_BIT}V&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),lt.dispose(),nt.dispose(),ct.dispose(),M.dispose(),Z.dispose(),$.dispose(),ot.dispose(),pt.dispose(),tt.dispose(),yt.dispose(),at.dispose(),at.removeEventListener("sessionstart",od),at.removeEventListener("sessionend",ld),gr.stop()};function Nt(A){A.preventDefault(),ya("WebGLRenderer: Context Lost."),S=!0}function de(){ya("WebGLRenderer: Context Restored."),S=!1;let A=R.autoReset,V=bt.enabled,W=bt.autoUpdate,G=bt.needsUpdate,H=bt.type;J(),R.autoReset=A,bt.enabled=V,bt.autoUpdate=W,bt.needsUpdate=G,bt.type=H}function ee(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ni(A){let V=A.target;V.removeEventListener("dispose",ni),_i(V)}function _i(A){pm(A),M.remove(A)}function pm(A){let V=M.get(A).programs;V!==void 0&&(V.forEach(function(W){yt.releaseProgram(W)}),A.isShaderMaterial&&yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,W,G,H,ht){V===null&&(V=te);let gt=H.isMesh&&H.matrixWorld.determinant()<0,dt=gm(A,V,W,G,H);Mt.setMaterial(G,gt);let _t=W.index,Et=1;if(G.wireframe===!0){if(_t=St.getWireframeAttribute(W),_t===void 0)return;Et=2}let Pt=W.drawRange,At=W.attributes.position,Wt=Pt.start*Et,re=(Pt.start+Pt.count)*Et;ht!==null&&(Wt=Math.max(Wt,ht.start*Et),re=Math.min(re,(ht.start+ht.count)*Et)),_t!==null?(Wt=Math.max(Wt,0),re=Math.min(re,_t.count)):At!=null&&(Wt=Math.max(Wt,0),re=Math.min(re,At.count));let Ee=re-Wt;if(Ee<0||Ee===1/0)return;pt.setup(H,G,dt,W,_t);let we,le=N;if(_t!==null&&(we=q.get(_t),le=ft,le.setIndex(we)),H.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*ye()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(H.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*ye()),H.isLineSegments?le.setMode(D.LINES):H.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else H.isPoints?le.setMode(D.POINTS):H.isSprite&&le.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))le.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ct=H._multiDrawStarts,ne=H._multiDrawCounts,$t=H._multiDrawCount,Sn=_t?q.get(_t).bytesPerElement:1,qr=M.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<$t;Tn++)qr.setValue(D,"_gl_DrawID",Tn),le.render(Ct[Tn]/Sn,ne[Tn])}else if(H.isInstancedMesh)le.renderInstances(Wt,Ee,H.count);else if(W.isInstancedBufferGeometry){let Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ne=Math.min(W.instanceCount,Ct);le.renderInstances(Wt,Ee,ne)}else le.render(Wt,Ee)};function ad(A,V,W){A.transparent===!0&&A.side===ve&&A.forceSinglePass===!1?(A.side=qe,A.needsUpdate=!0,Ka(A,V,W),A.side=Di,A.needsUpdate=!0,Ka(A,V,W),A.side=ve):Ka(A,V,W)}this.compile=function(A,V,W=null){W===null&&(W=A),b=ct.get(W),b.init(V),w.push(b),W.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();let G=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ht=H.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){let dt=ht[gt];ad(dt,W,H),G.add(dt)}else ad(ht,W,H),G.add(ht)}),b=w.pop(),G},this.compileAsync=function(A,V,W=null){let G=this.compile(A,V,W);return new Promise(H=>{function ht(){if(G.forEach(function(gt){M.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){H(A);return}setTimeout(ht,10)}jt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Gc=null;function mm(A){Gc&&Gc(A)}function od(){gr.stop()}function ld(){gr.start()}let gr=new lm;gr.setAnimationLoop(mm),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(A){Gc=A,at.setAnimationLoop(A),A===null?gr.stop():gr.start()},at.addEventListener("sessionstart",od),at.addEventListener("sessionend",ld),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;let W=at.enabled===!0&&at.isPresenting===!0,G=C!==null&&(I===null||W)&&C.begin(x,I);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(V),V=at.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,I),b=ct.get(A,w.length),b.init(V),w.push(b),kt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ut.setFromProjectionMatrix(kt,$n,V.reversedDepth),vt=this.localClippingEnabled,rt=xt.init(this.clippingPlanes,vt),v=nt.get(A,T.length),v.init(),T.push(v),at.enabled===!0&&at.isPresenting===!0){let gt=x.xr.getDepthSensingMesh();gt!==null&&Wc(gt,V,-1/0,x.sortObjects)}Wc(A,V,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Yt,Ht),zt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,zt&&lt.addToRenderList(v,A),this.info.render.frame++,rt===!0&&xt.beginShadows();let H=b.state.shadowsArray;if(bt.render(H,A,V),rt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&C.hasRenderPass())===!1){let gt=v.opaque,dt=v.transmissive;if(b.setupLights(),V.isArrayCamera){let _t=V.cameras;if(dt.length>0)for(let Et=0,Pt=_t.length;Et<Pt;Et++){let At=_t[Et];hd(gt,dt,A,At)}zt&&lt.render(A);for(let Et=0,Pt=_t.length;Et<Pt;Et++){let At=_t[Et];cd(v,A,At,At.viewport)}}else dt.length>0&&hd(gt,dt,A,V),zt&&lt.render(A),cd(v,A,V)}I!==null&&L===0&&(z.updateMultisampleRenderTarget(I),z.updateRenderTargetMipmap(I)),G&&C.end(x),A.isScene===!0&&A.onAfterRender(x,A,V),pt.resetDefaultState(),F=-1,k=null,w.pop(),w.length>0?(b=w[w.length-1],rt===!0&&xt.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Wc(A,V,W,G){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ut.intersectsSprite(A)){G&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);let gt=ot.update(A),dt=A.material;dt.visible&&v.push(A,gt,dt,W,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ut.intersectsObject(A))){let gt=ot.update(A),dt=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Kt.copy(gt.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(dt)){let _t=gt.groups;for(let Et=0,Pt=_t.length;Et<Pt;Et++){let At=_t[Et],Wt=dt[At.materialIndex];Wt&&Wt.visible&&v.push(A,gt,Wt,W,Kt.z,At)}}else dt.visible&&v.push(A,gt,dt,W,Kt.z,null)}}let ht=A.children;for(let gt=0,dt=ht.length;gt<dt;gt++)Wc(ht[gt],V,W,G)}function cd(A,V,W,G){let{opaque:H,transmissive:ht,transparent:gt}=A;b.setupLightsView(W),rt===!0&&xt.setGlobalState(x.clippingPlanes,W),G&&Mt.viewport(U.copy(G)),H.length>0&&$a(H,V,W),ht.length>0&&$a(ht,V,W),gt.length>0&&$a(gt,V,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function hd(A,V,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Wt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:Wt?fi:bn,minFilter:fr,samples:ue.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let ht=b.state.transmissionRenderTarget[G.id],gt=G.viewport||U;ht.setSize(gt.z*x.transmissionResolutionScale,gt.w*x.transmissionResolutionScale);let dt=x.getRenderTarget(),_t=x.getActiveCubeFace(),Et=x.getActiveMipmapLevel();x.setRenderTarget(ht),x.getClearColor(Q),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),zt&&lt.render(W);let Pt=x.toneMapping;x.toneMapping=Qn;let At=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),rt===!0&&xt.setGlobalState(x.clippingPlanes,G),$a(A,W,G),z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let re=0,Ee=V.length;re<Ee;re++){let we=V[re],{object:le,geometry:Ct,material:ne,group:$t}=we;if(ne.side===ve&&le.layers.test(G.layers)){let Sn=ne.side;ne.side=qe,ne.needsUpdate=!0,ud(le,W,G,Ct,ne,$t),ne.side=Sn,ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht))}x.setRenderTarget(dt,_t,Et),x.setClearColor(Q,et),At!==void 0&&(G.viewport=At),x.toneMapping=Pt}function $a(A,V,W){let G=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ht=A.length;H<ht;H++){let gt=A[H],{object:dt,geometry:_t,group:Et}=gt,Pt=gt.material;Pt.allowOverride===!0&&G!==null&&(Pt=G),dt.layers.test(W.layers)&&ud(dt,V,W,_t,Pt,Et)}}function ud(A,V,W,G,H,ht){A.onBeforeRender(x,V,W,G,H,ht),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,V,W,G,A,ht),H.transparent===!0&&H.side===ve&&H.forceSinglePass===!1?(H.side=qe,H.needsUpdate=!0,x.renderBufferDirect(W,V,G,H,A,ht),H.side=Di,H.needsUpdate=!0,x.renderBufferDirect(W,V,G,H,A,ht),H.side=ve):x.renderBufferDirect(W,V,G,H,A,ht),A.onAfterRender(x,V,W,G,H,ht)}function Ka(A,V,W){V.isScene!==!0&&(V=te);let G=M.get(A),H=b.state.lights,ht=b.state.shadowsArray,gt=H.state.version,dt=yt.getParameters(A,H.state,ht,V,W),_t=yt.getProgramCacheKey(dt),Et=G.programs;G.environment=A.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(A.isMeshStandardMaterial?$:Z).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Et===void 0&&(A.addEventListener("dispose",ni),Et=new Map,G.programs=Et);let Pt=Et.get(_t);if(Pt!==void 0){if(G.currentProgram===Pt&&G.lightsStateVersion===gt)return fd(A,dt),Pt}else dt.uniforms=yt.getUniforms(A),A.onBeforeCompile(dt,x),Pt=yt.acquireProgram(dt,_t),Et.set(_t,Pt),G.uniforms=dt.uniforms;let At=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(At.clippingPlanes=xt.uniform),fd(A,dt),G.needsLights=xm(A),G.lightsStateVersion=gt,G.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.directionalShadowMap.value=H.state.directionalShadowMap,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotShadowMap.value=H.state.spotShadowMap,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMap.value=H.state.pointShadowMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Pt,G.uniformsList=null,Pt}function dd(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Vs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function fd(A,V){let W=M.get(A);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function gm(A,V,W,G,H){V.isScene!==!0&&(V=te),z.resetTextureUnits();let ht=V.fog,gt=G.isMeshStandardMaterial?V.environment:null,dt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Or,_t=(G.isMeshStandardMaterial?$:Z).get(G.envMap||gt),Et=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!W.morphAttributes.position,Wt=!!W.morphAttributes.normal,re=!!W.morphAttributes.color,Ee=Qn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=x.toneMapping);let we=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=we!==void 0?we.length:0,Ct=M.get(G),ne=b.state.lights;if(rt===!0&&(vt===!0||A!==k)){let tn=A===k&&G.id===F;xt.setState(G,A,tn)}let $t=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ne.state.version||Ct.outputColorSpace!==dt||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==_t||G.fog===!0&&Ct.fog!==ht||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==xt.numPlanes||Ct.numIntersection!==xt.numIntersection)||Ct.vertexAlphas!==Et||Ct.vertexTangents!==Pt||Ct.morphTargets!==At||Ct.morphNormals!==Wt||Ct.morphColors!==re||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==le)&&($t=!0):($t=!0,Ct.__version=G.version);let Sn=Ct.currentProgram;$t===!0&&(Sn=Ka(G,V,H));let qr=!1,Tn=!1,Gs=!1,fe=Sn.getUniforms(),cn=Ct.uniforms;if(Mt.useProgram(Sn.program)&&(qr=!0,Tn=!0,Gs=!0),G.id!==F&&(F=G.id,Tn=!0),qr||k!==A){Mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),fe.setValue(D,"projectionMatrix",A.projectionMatrix),fe.setValue(D,"viewMatrix",A.matrixWorldInverse);let hn=fe.map.cameraPosition;hn!==void 0&&hn.setValue(D,Xt.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&fe.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Tn=!0,Gs=!0)}if(Ct.needsLights&&(ne.state.directionalShadowMap.length>0&&fe.setValue(D,"directionalShadowMap",ne.state.directionalShadowMap,z),ne.state.spotShadowMap.length>0&&fe.setValue(D,"spotShadowMap",ne.state.spotShadowMap,z),ne.state.pointShadowMap.length>0&&fe.setValue(D,"pointShadowMap",ne.state.pointShadowMap,z)),H.isSkinnedMesh){fe.setOptional(D,H,"bindMatrix"),fe.setOptional(D,H,"bindMatrixInverse");let tn=H.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),fe.setValue(D,"boneTexture",tn.boneTexture,z))}H.isBatchedMesh&&(fe.setOptional(D,H,"batchingTexture"),fe.setValue(D,"batchingTexture",H._matricesTexture,z),fe.setOptional(D,H,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",H._indirectTexture,z),fe.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",H._colorsTexture,z));let Bn=W.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Gt.update(H,W,Sn),(Tn||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,fe.setValue(D,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(cn.envMap.value=_t,cn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&V.environment!==null&&(cn.envMapIntensity.value=V.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=CM()),Tn&&(fe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&_m(cn,Gs),ht&&G.fog===!0&&Lt.refreshFogUniforms(cn,ht),Lt.refreshMaterialUniforms(cn,G,Ot,wt,b.state.transmissionRenderTarget[A.id]),Vs.upload(D,dd(Ct),cn,z)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vs.upload(D,dd(Ct),cn,z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&fe.setValue(D,"center",H.center),fe.setValue(D,"modelViewMatrix",H.modelViewMatrix),fe.setValue(D,"normalMatrix",H.normalMatrix),fe.setValue(D,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let tn=G.uniformsGroups;for(let hn=0,Xc=tn.length;hn<Xc;hn++){let _r=tn[hn];tt.update(_r,Sn),tt.bind(_r,Sn)}}return Sn}function _m(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function xm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,W){let G=M.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=V,M.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let W=M.get(A);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};let vm=D.createFramebuffer();this.setRenderTarget=function(A,V=0,W=0){I=A,P=V,L=W;let G=null,H=!1,ht=!1;if(A){let dt=M.get(A);if(dt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(D.FRAMEBUFFER,dt.__webglFramebuffer),U.copy(A.viewport),O.copy(A.scissor),X=A.scissorTest,Mt.viewport(U),Mt.scissor(O),Mt.setScissorTest(X),F=-1;return}else if(dt.__webglFramebuffer===void 0)z.setupRenderTarget(A);else if(dt.__hasExternalTextures)z.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pt=A.depthTexture;if(dt.__boundDepthTexture!==Pt){if(Pt!==null&&M.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(A)}}let _t=A.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ht=!0);let Et=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Et[V])?G=Et[V][W]:G=Et[V],H=!0):A.samples>0&&z.useMultisampledRTT(A)===!1?G=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Et)?G=Et[W]:G=Et,U.copy(A.viewport),O.copy(A.scissor),X=A.scissorTest}else U.copy(Y).multiplyScalar(Ot).floor(),O.copy(K).multiplyScalar(Ot).floor(),X=mt;if(W!==0&&(G=vm),Mt.bindFramebuffer(D.FRAMEBUFFER,G)&&Mt.drawBuffers(A,G),Mt.viewport(U),Mt.scissor(O),Mt.setScissorTest(X),H){let dt=M.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,dt.__webglTexture,W)}else if(ht){let dt=V;for(let _t=0;_t<A.textures.length;_t++){let Et=M.get(A.textures[_t]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_t,Et.__webglTexture,W,dt)}}else if(A!==null&&W!==0){let dt=M.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,W)}F=-1},this.readRenderTargetPixels=function(A,V,W,G,H,ht,gt,dt=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(_t=_t[gt]),_t){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);try{let Et=A.textures[dt],Pt=Et.format,At=Et.type;if(!ue.textureFormatReadable(Pt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(At)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-G&&W>=0&&W<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt),D.readPixels(V,W,G,H,it.convert(Pt),it.convert(At),ht))}finally{let Et=I!==null?M.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=function(A,V,W,G,H,ht,gt,dt=0){return ja(this,null,function*(){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(_t=_t[gt]),_t)if(V>=0&&V<=A.width-G&&W>=0&&W<=A.height-H){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);let Et=A.textures[dt],Pt=Et.format,At=Et.type;if(!ue.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Wt),D.bufferData(D.PIXEL_PACK_BUFFER,ht.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt),D.readPixels(V,W,G,H,it.convert(Pt),it.convert(At),0);let re=I!==null?M.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,re);let Ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),yield Op(D,Ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ht),D.deleteBuffer(Wt),D.deleteSync(Ee),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(A,V=null,W=0){let G=Math.pow(2,-W),H=Math.floor(A.image.width*G),ht=Math.floor(A.image.height*G),gt=V!==null?V.x:0,dt=V!==null?V.y:0;z.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,gt,dt,H,ht),Mt.unbindTexture()};let ym=D.createFramebuffer(),Mm=D.createFramebuffer();this.copyTextureToTexture=function(A,V,W=null,G=null,H=0,ht=null){ht===null&&(H!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=H,H=0):ht=0);let gt,dt,_t,Et,Pt,At,Wt,re,Ee,we=A.isCompressedTexture?A.mipmaps[ht]:A.image;if(W!==null)gt=W.max.x-W.min.x,dt=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Pt=W.min.y,At=W.isBox3?W.min.z:0;else{let Bn=Math.pow(2,-H);gt=Math.floor(we.width*Bn),dt=Math.floor(we.height*Bn),A.isDataArrayTexture?_t=we.depth:A.isData3DTexture?_t=Math.floor(we.depth*Bn):_t=1,Et=0,Pt=0,At=0}G!==null?(Wt=G.x,re=G.y,Ee=G.z):(Wt=0,re=0,Ee=0);let le=it.convert(V.format),Ct=it.convert(V.type),ne;V.isData3DTexture?(z.setTexture3D(V,0),ne=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(z.setTexture2DArray(V,0),ne=D.TEXTURE_2D_ARRAY):(z.setTexture2D(V,0),ne=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let $t=D.getParameter(D.UNPACK_ROW_LENGTH),Sn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qr=D.getParameter(D.UNPACK_SKIP_PIXELS),Tn=D.getParameter(D.UNPACK_SKIP_ROWS),Gs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At);let fe=A.isDataArrayTexture||A.isData3DTexture,cn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Bn=M.get(A),tn=M.get(V),hn=M.get(Bn.__renderTarget),Xc=M.get(tn.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xc.__webglFramebuffer);for(let _r=0;_r<_t;_r++)fe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(A).__webglTexture,H,At+_r),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,M.get(V).__webglTexture,ht,Ee+_r)),D.blitFramebuffer(Et,Pt,gt,dt,Wt,re,gt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||M.has(A)){let Bn=M.get(A),tn=M.get(V);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,ym),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mm);for(let hn=0;hn<_t;hn++)fe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bn.__webglTexture,H,At+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bn.__webglTexture,H),cn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,ht,Ee+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,ht),H!==0?D.blitFramebuffer(Et,Pt,gt,dt,Wt,re,gt,dt,D.COLOR_BUFFER_BIT,D.NEAREST):cn?D.copyTexSubImage3D(ne,ht,Wt,re,Ee+hn,Et,Pt,gt,dt):D.copyTexSubImage2D(ne,ht,Wt,re,Et,Pt,gt,dt);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else cn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ne,ht,Wt,re,Ee,gt,dt,_t,le,Ct,we.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(ne,ht,Wt,re,Ee,gt,dt,_t,le,we.data):D.texSubImage3D(ne,ht,Wt,re,Ee,gt,dt,_t,le,Ct,we):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ht,Wt,re,gt,dt,le,Ct,we.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ht,Wt,re,we.width,we.height,le,we.data):D.texSubImage2D(D.TEXTURE_2D,ht,Wt,re,gt,dt,le,Ct,we);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Sn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gs),ht===0&&V.generateMipmaps&&D.generateMipmap(ne),Mt.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?z.setTextureCube(A,0):A.isData3DTexture?z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?z.setTexture2DArray(A,0):z.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,Mt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var Xr=class s{scene;camera;renderer;circleTexture;cameraOriginalPosition;baseCameraFov=60;timeSlowActive=!1;lightningBolts=[];particleAnimations=[];canvas;animationFrameId=null;targetFps=30;lastFrameTime=0;lastTime=0;isPaused=!1;groundWaterTexture=null;groundWaterNormalMap=null;groundMaterial=null;starField=null;ambientParticles=null;ambientParticleVelocities=null;resizeTimeout=null;visibilityHandler=this.handleVisibilityChange.bind(this);resizeHandler=this.throttleResize.bind(this);init(t){this.canvas=t,this.createCircleTexture(),this.initScene(),this.animate(),document.addEventListener("visibilitychange",this.visibilityHandler),window.addEventListener("resize",this.resizeHandler)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),document.removeEventListener("visibilitychange",this.visibilityHandler),window.removeEventListener("resize",this.resizeHandler),this.particleAnimations=[],this.starField?.geometry.dispose(),this.starField?.material?.dispose(),this.starField=null,this.ambientParticles?.geometry.dispose(),this.ambientParticles?.material?.dispose(),this.ambientParticles=null,this.ambientParticleVelocities=null,this.scene?.clear(),this.renderer?.dispose(),this.circleTexture?.dispose()}createCircleTexture(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this.circleTexture=new Oi(t)}initScene(){let t=this.canvas,e=t.clientWidth,n=t.clientHeight,i=this.getViewportSettings(e,n);this.scene=new Ca,this.scene.background=new Tt(657931),this.baseCameraFov=i.fov,this.camera=new We(this.baseCameraFov,e/n,.1,1e3),this.scene.fog=i.useFog?new Ps(657931,.02):null,this.camera.position.set(0,i.cameraY,i.cameraZ),this.camera.lookAt(0,1,0),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new zc({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ul,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.2;let r=new Na(3470813,.3);this.scene.add(r);let a=new Os(16777215,1.5);a.position.set(5,10,5),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.near=.5,a.shadow.camera.far=50,a.shadow.camera.left=-15,a.shadow.camera.right=15,a.shadow.camera.top=15,a.shadow.camera.bottom=-15,this.scene.add(a);let o=new Os(4491519,.6);o.position.set(-5,8,-3),this.scene.add(o);let l=new je(2254591,1.5,25);l.position.set(-8,3,0),this.scene.add(l);let c=new je(52394,1.2,25);c.position.set(8,3,0),this.scene.add(c);let f=1.5*88;this.groundWaterTexture=this.createSeaWaterTexture(),this.groundWaterNormalMap=this.createSeaWaterNormalMap();let d=new La({map:this.groundWaterTexture,normalMap:this.groundWaterNormalMap,normalScale:new Dt(.7,.7),color:21964,roughness:.06,metalness:.05,transmission:.18,thickness:.4,transparent:!0,opacity:.85,clearcoat:1,clearcoatRoughness:.06,emissive:736064,emissiveIntensity:.25});this.groundMaterial=d;let _=new Ui(f,f),g=new Ft(_,d);g.rotation.x=-Math.PI/2,g.position.set(0,0,0),g.receiveShadow=!0,this.scene.add(g),this.createStarfield(),this.createAmbientParticles()}createSeaWaterTexture(){let e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,1024,1024);i.addColorStop(0,"#001840"),i.addColorStop(.38,"#002d6a"),i.addColorStop(.65,"#003d88"),i.addColorStop(1,"#001840"),n.fillStyle=i,n.fillRect(0,0,1024,1024);let r=n.createRadialGradient(1024*.35,1024*.45,0,1024*.35,1024*.45,1024*.55);r.addColorStop(0,"rgba(0,80,180,0.35)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let a=[{color:"rgba(0,120,210,0.40)",amplitude:28,frequency:.018,rows:18,lineWidth:.2},{color:"rgba(0,160,230,0.28)",amplitude:14,frequency:.035,rows:30,lineWidth:.2},{color:"rgba(20,210,240,0.20)",amplitude:7,frequency:.07,rows:48,lineWidth:.2},{color:"rgba(80,230,255,0.12)",amplitude:3,frequency:.14,rows:72,lineWidth:.2}];for(let l of a){n.strokeStyle=l.color,n.lineWidth=l.lineWidth;for(let c=0;c<l.rows;c++){let h=(c+.5)/l.rows*1024,u=c*.63;n.beginPath(),n.moveTo(0,h);for(let f=0;f<=1024;f+=2){let d=h+Math.sin(f*l.frequency+u)*l.amplitude+Math.sin(f*l.frequency*.51+u*1.7)*(l.amplitude*.42);n.lineTo(f,d)}n.stroke()}}n.fillStyle="rgba(220,250,255,0.11)";for(let l=0;l<160;l++)n.beginPath(),n.arc(Math.random()*1024,Math.random()*1024,.8+Math.random()*3.2,0,Math.PI*2),n.fill();let o=new Oi(e);return o.wrapS=Ln,o.wrapT=Ln,o}createSeaWaterNormalMap(){let e=document.createElement("canvas");e.width=512,e.height=512;let n=e.getContext("2d"),i=n.createImageData(512,512),r=i.data,a=l=>l*Math.PI*2/512;for(let l=0;l<512;l++)for(let c=0;c<512;c++){let h=Math.sin(c*a(4)+l*a(3))*.45+Math.sin(c*a(7)+l*a(5))*.3+Math.sin(c*a(11)-l*a(8))*.25,u=Math.cos(l*a(4)+c*a(3))*.45+Math.cos(l*a(7)+c*a(5))*.3+Math.cos(l*a(11)-c*a(8))*.25,f=(l*512+c)*4;r[f]=Math.round((h*.5+.5)*255),r[f+1]=Math.round((u*.5+.5)*255),r[f+2]=255,r[f+3]=255}n.putImageData(i,0,0);let o=new Oi(e);return o.wrapS=hi,o.wrapT=hi,o.repeat.set(4,4),o}createStarfield(){let e=new oe,n=new Float32Array(2e3*3),i=new Float32Array(2e3*3);for(let a=0;a<2e3;a++){let o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=80+Math.random()*120;n[a*3]=c*Math.sin(l)*Math.cos(o),n[a*3+1]=Math.abs(c*Math.cos(l))*.6+5,n[a*3+2]=c*Math.sin(l)*Math.sin(o);let h=Math.random();h<.6?(i[a*3]=.8+Math.random()*.2,i[a*3+1]=.85+Math.random()*.15,i[a*3+2]=1):h<.85?(i[a*3]=.4+Math.random()*.3,i[a*3+1]=.6+Math.random()*.3,i[a*3+2]=1):(i[a*3]=1,i[a*3+1]=.8+Math.random()*.2,i[a*3+2]=.6+Math.random()*.4)}e.setAttribute("position",new xe(n,3)),e.setAttribute("color",new xe(i,3));let r=new On({size:.6,map:this.circleTexture,transparent:!0,opacity:.85,vertexColors:!0,blending:ln,depthWrite:!1,sizeAttenuation:!0,fog:!1});this.starField=new Xn(e,r),this.scene.add(this.starField)}createAmbientParticles(){let e=new oe,n=new Float32Array(120*3);this.ambientParticleVelocities=new Float32Array(120*3);for(let r=0;r<120;r++)n[r*3]=(Math.random()-.5)*20,n[r*3+1]=.5+Math.random()*6,n[r*3+2]=(Math.random()-.5)*16,this.ambientParticleVelocities[r*3]=(Math.random()-.5)*.003,this.ambientParticleVelocities[r*3+1]=.001+Math.random()*.004,this.ambientParticleVelocities[r*3+2]=(Math.random()-.5)*.003;e.setAttribute("position",new xe(n,3));let i=new On({map:this.circleTexture,color:4491519,size:.12,transparent:!0,opacity:.4,blending:ln,depthWrite:!1});this.ambientParticles=new Xn(e,i),this.scene.add(this.ambientParticles)}animate(t=0){if(this.isPaused)return;this.animationFrameId=requestAnimationFrame(i=>this.animate(i));let e=1e3/this.targetFps;if(t-this.lastFrameTime<e)return;this.lastFrameTime=t,this.lastTime=t;let n=t*1e-4;if(this.timeSlowActive||(this.camera.position.x=this.cameraOriginalPosition.x+Math.sin(n)*.3,this.camera.position.y=this.cameraOriginalPosition.y+Math.sin(n*.7)*.2),this.groundWaterNormalMap&&(this.groundWaterNormalMap.offset.x-=58e-5,this.groundWaterNormalMap.offset.y+=32e-5),this.groundMaterial){let i=t*.001,r=.65+Math.sin(i*.9)*.28+Math.sin(i*1.7+1.2)*.12;this.groundMaterial.normalScale.set(r,r),this.groundMaterial.emissiveIntensity=.22+Math.sin(i*.6)*.1+Math.sin(i*1.3+.8)*.05,this.groundMaterial.roughness=.06+Math.abs(Math.sin(i*.4))*.06}for(let i=this.lightningBolts.length-1;i>=0;i--){let r=this.lightningBolts[i].material;(!r||r.opacity<.01)&&this.lightningBolts.splice(i,1)}if(this.particleAnimations.forEach(i=>{let r=i.geometry.attributes.position.array;for(let a=0;a<i.particleCount;a++){let o=i.velocities[a*2+1];i.velocities[a*2]+=o;let l=i.velocities[a*2],c=Math.sqrt(r[a*3]**2+r[a*3+2]**2);r[a*3]=Math.cos(l)*c,r[a*3+2]=Math.sin(l)*c}i.geometry.attributes.position.needsUpdate=!0}),this.starField&&(this.starField.rotation.y+=8e-5),this.ambientParticles&&this.ambientParticleVelocities){let i=this.ambientParticles.geometry.attributes.position.array,r=this.ambientParticleVelocities,a=i.length/3;for(let o=0;o<a;o++)i[o*3]+=r[o*3],i[o*3+1]+=r[o*3+1],i[o*3+2]+=r[o*3+2],i[o*3+1]>8&&(i[o*3+1]=.5,i[o*3]=(Math.random()-.5)*20,i[o*3+2]=(Math.random()-.5)*16);this.ambientParticles.geometry.attributes.position.needsUpdate=!0,this.ambientParticles.material.opacity=.3+Math.sin(t*.001)*.1}this.renderer.render(this.scene,this.camera)}handleVisibilityChange(){if(document.hidden){this.isPaused=!0,this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}this.isPaused&&(this.isPaused=!1,this.lastFrameTime=0,this.animate())}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvas||!this.camera||!this.renderer)return;let t=this.canvas.clientWidth,e=this.canvas.clientHeight,n=this.getViewportSettings(t,e);this.camera.aspect=t/e,this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.scene.fog=n.useFog?new Ps(657931,.02):null,this.camera.position.set(0,n.cameraY,n.cameraZ),this.cameraOriginalPosition=new B(0,n.cameraY,n.cameraZ),this.baseCameraFov=n.fov,this.renderer.setSize(t,e),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}getViewportSettings(t,e){let n=t/e,i=t<520,r=n<.9,a=i||r||e<520,o=60,l=10,c=4;return a&&(l=12),{fov:o,cameraZ:l,cameraY:c,useFog:!0}}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac})};var Hc=.4,Ya=class s{createCharacterMesh(t,e){let n=new an,i=new Tt(t),r=new Tt("#ffffff"),a=new Tt(657930).lerp(i,.35),o=this.createTarantulaPatternTexture(a,i),l=new jn({color:new Tt(16777215).lerp(r,.85),roughness:.2,metalness:.1,emissive:r,emissiveIntensity:2.5}),c=new jn({color:new Tt(1710618).lerp(i,.9),roughness:.9,metalness:.1,map:o,emissive:i,emissiveIntensity:.2}),h=new Kn(.48,20,20);h.scale(1.2,.48,1.44);let u=new Ft(h,c);u.position.set(0,.45,.18),u.castShadow=!0,u.receiveShadow=!0,n.add(u);let f=l;for(let I=0;I<2;I++){let F=I===0?-1:1,k=new an,U=new Mn(.07,.1,.18,10),O=new Ft(U,f);O.position.set(.12*F,.26,.52),O.rotation.x=Math.PI/8,O.rotation.z=Math.PI/10*F,O.castShadow=!0,O.receiveShadow=!0,k.add(O);let X=new Da(.06,.4,20),Q=new Ft(X,f);Q.position.set(.14*F,.14,.6),Q.rotation.x=Math.PI/2+Math.PI/10,Q.rotation.z=Math.PI/12*F,Q.castShadow=!0,Q.receiveShadow=!0,k.add(Q),n.add(k)}let d=l,_=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4],g=(I,F,k,U)=>{(X=>{let Q=new Ft(U,d),et=new on;et.position.copy(F.position),et.rotation.copy(F.rotation),Q.position.set(0,X,0),Q.castShadow=!0,Q.receiveShadow=!0,et.add(Q),I.add(et)})(k/2)},m=new Mn(.12,.08,.5,10),p=new Mn(.1,.06,.55,10),y=new Mn(.07,.03,.7,10),E=new Kn(.07,12,12),v=new Mn(.012,.006,.22,4),b=new Mn(.014,.006,.17,4),T=new Mn(.012,.005,.15,4),w=new Mn(.012,.005,.08,4),C=new Mn(.01,.004,.12,4);for(let I=0;I<2;I++){let F=I===0?-1:1;for(let k=0;k<4;k++){let U=new an,O=_[k]*(I===0?1:-1),X=(Math.PI/2.8+k*.05)*F,Q=.55,et=new Ft(m,d);et.position.set(.2*F,-.1,0),et.rotation.z=X*1.2,et.castShadow=!0,et.receiveShadow=!0,U.add(et);for(let rt=0;rt<22;rt++){let vt=new Ft(v,d),kt=rt/8*Math.PI*2;vt.position.set(.25*F+Math.cos(kt)*.08,-.1+Math.sin(kt)*.08,0),vt.rotation.z=X*1.15+(Math.random()-.5)*.35,vt.rotation.y=kt,U.add(vt)}let st=new Ft(p,d);st.position.set(.65*F,-.28,0),st.rotation.z=X*.75,st.castShadow=!0,st.receiveShadow=!0,U.add(st),g(U,st,Q,E);for(let rt=0;rt<10;rt++){let vt=new Ft(b,d),kt=rt/8*Math.PI*2;vt.position.set(.6*F+Math.cos(kt)*.08,-.2+Math.sin(kt)*.03,0),vt.rotation.z=X*.95+(Math.random()-.5)*.4,vt.rotation.y=kt,U.add(vt)}for(let rt=0;rt<8;rt++){let vt=new Ft(T,d),kt=rt/6*Math.PI*2;vt.position.set(.7*F+Math.cos(kt)*.06,-.28+Math.sin(kt)*.06,0),vt.rotation.z=X*.7+(Math.random()-.5)*.3,vt.rotation.y=kt,U.add(vt)}let wt=new Ft(y,d);wt.position.set(1.025*F,-.7,0),wt.rotation.z=Math.PI/5.3*F,wt.castShadow=!0,wt.receiveShadow=!0,U.add(wt);for(let rt=0;rt<10;rt++){let vt=new Ft(w,d),kt=rt/7*Math.PI*2;vt.position.set(.925*F+Math.cos(kt)*.07,-.55+Math.sin(kt)*.07,0),vt.rotation.z=Math.PI/8*F+(Math.random()-.5)*.4,vt.rotation.y=kt,U.add(vt)}for(let rt=0;rt<6;rt++){let vt=new Ft(C,d),kt=rt/4*Math.PI*2;vt.position.set(1.025*F+Math.cos(kt)*.05,-.7+Math.sin(kt)*.05,0),vt.rotation.z=Math.PI/6*F+(Math.random()-.5)*.3,vt.rotation.y=kt,U.add(vt)}let Yt=[.5,.25,0,-.2][k];U.rotation.y=O,U.position.set(.4*F,.3,Yt),n.add(U);let Ht=O,Y=-.02+(Math.random()-.5)*.04,K=Math.PI/120*F+(Math.random()-.5)*.02;U.rotation.set(Y,Ht,K);let mt=()=>{let rt=.08+Math.random()*.08,vt=.08+Math.random()*.08,kt=0,Xt=.32+Math.random()*.45,Kt=.22+Math.random()*.35,te=2+Math.random()*8,zt=Math.random(),ye=j.timeline({onComplete:()=>{j.delayedCall(te,mt)}});ye.to(U.rotation,{x:Y-vt,y:Ht-rt,z:K+kt*F,duration:Xt*.9,ease:"sine.out"}).to(U.rotation,{x:Y+vt*.35,y:Ht+rt,z:K-0,duration:Xt*1.2,ease:"sine.in"}).to(U.rotation,{x:Y,y:Ht,z:K,duration:Kt,ease:"power2.out"}),zt<.35&&ye.to(U.rotation,{x:Y+(Math.random()*.08-.04),y:Ht+(Math.random()*.12-.06),z:K+(Math.random()*.12-.06)*F,duration:2+Math.random()*.08,ease:"power3.inOut"})},Ut=2+Math.random()*8;j.delayedCall(Ut,mt)}}let x=new Kn(.75,30,30),S=new jn({color:new Tt(1184274).lerp(i,.7),roughness:.85,metalness:.1,map:o,emissive:i,emissiveIntensity:.15}),P=new Ft(x,S);P.position.set(0,.9,-.7),n.add(P);let L=Math.random()*1.5;return j.to(P.scale,{x:1.05,y:1.05,z:1.05,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:L}),n.position.set(e.x,e.y+Hc,e.z),n}disposeCharacterMesh(t,e){t&&(e.remove(t),t.traverse(n=>{n instanceof Ft&&(n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(i=>{i.map?.dispose(),i.emissiveMap?.dispose(),i.roughnessMap?.dispose(),i.metalnessMap?.dispose(),i.normalMap?.dispose(),i.dispose()}):(n.material.map?.dispose(),n.material.emissiveMap?.dispose(),n.material.roughnessMap?.dispose(),n.material.metalnessMap?.dispose(),n.material.normalMap?.dispose(),n.material.dispose()))}))}createTarantulaPatternTexture(t,e){let i=document.createElement("canvas");i.width=256,i.height=256;let r=i.getContext("2d");r.fillStyle=t.getStyle(),r.fillRect(0,0,256,256);let a=r.createRadialGradient(256/2,256/2,20,256/2,256/2,256/2);a.addColorStop(0,"rgba(255, 255, 255, 0.08)"),a.addColorStop(.7,"rgba(0, 0, 0, 0.1)"),a.addColorStop(1,"rgba(0, 0, 0, 0.4)"),r.fillStyle=a,r.fillRect(0,0,256,256),r.strokeStyle=e.getStyle(),r.fillStyle=e.getStyle(),r.globalAlpha=.5,r.lineWidth=3,r.lineJoin="round";for(let l=0;l<5;l++){let c=(l+.5)*51.2,h=256/2,u=40+Math.sin(l*.8)*10,f=15;r.beginPath(),r.moveTo(h-u,c-f),r.lineTo(h,c),r.lineTo(h+u,c-f),r.stroke()}r.globalAlpha=.15,r.lineWidth=1;for(let l=0;l<80;l++){let c=Math.random()*256,h=Math.random()*256,u=8+Math.random()*12,f=Math.random()*Math.PI*2;r.beginPath(),r.moveTo(c,h),r.lineTo(c+Math.cos(f)*u,h+Math.sin(f)*u),r.strokeStyle=l%3===0?e.getStyle():"rgba(0, 0, 0, 0.6)",r.stroke()}r.globalAlpha=.3;for(let l=0;l<25;l++){let c=Math.random()*256,h=Math.random()*256,u=3+Math.random()*6,f=3+Math.random()*6,d=Math.random()*Math.PI;r.save(),r.translate(c,h),r.rotate(d),r.beginPath(),r.ellipse(0,0,u,f,0,0,Math.PI*2),r.fillStyle=l%2===0?e.getStyle():"rgba(0, 0, 0, 0.5)",r.fill(),r.restore()}r.globalAlpha=1;let o=new Oi(i);return o.wrapS=hi,o.wrapT=hi,o.repeat.set(1.6,1.6),o.anisotropy=4,o}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac})};var Za=class s{sceneService=De(Xr);activePoisonObjects=[];activePoisonTweens=[];persistentShields=new Map;comboTimeoutId=null;actionToken=0;dispose(){this.comboTimeoutId&&(clearTimeout(this.comboTimeoutId),this.comboTimeoutId=null),this.cleanupPoisonEffects(),this.persistentShields.forEach((t,e)=>this.disposePersistentShield(e)),this.persistentShields.clear()}createTeleportationEntrance(t,e,n){t.position.set(e.x,e.y+Hc,e.z),t.scale.set(.01,.01,.01),t.visible=!1;let i=j.timeline();i.call(()=>{t.visible=!0}),i.to(t.scale,{x:n==="right"?-1:1,y:1,z:1,duration:.8,ease:"elastic.out(1, 0.5)"})}animateAction(t,e){let{character1:n,character2:i,character1Mesh:r,character2Mesh:a}=e;this.cleanupPoisonEffects(),this.actionToken+=1;let o=this.actionToken;this.comboTimeoutId&&(clearTimeout(this.comboTimeoutId),this.comboTimeoutId=null);let l=n?t.attackerId===n.id:!1,c=i?t.attackerId===i.id:!1,h=l?r:c?a:null,u=n?t.defenderId===n.id:!1,f=i?t.defenderId===i.id:!1,d=u?r:f?a:null;if(t.type==="poison"&&!t.attackerId){d&&this.animatePoisonTick(d,t);return}if(!h||!d)return;j.killTweensOf(h.position),j.killTweensOf(h.rotation),j.killTweensOf(h.scale),j.killTweensOf(d.position),j.killTweensOf(d.rotation),j.killTweensOf(d.scale);let _=g=>{let m=g==="critical",p=g==="miss",y=g==="poison",E=g==="skip",v=Yr(un({},t),{type:g});this.cinematicCameraZoom(h,d,m);let b=this.getCharacterBasePosition(l,h,n,i),T=this.getCharacterBasePosition(!l,d,n,i),w=un({},b),C=j.timeline();if(h.position.set(b.x,b.y,b.z),h.rotation.set(0,l?Math.PI/3:-Math.PI/3,0),h.scale.set(l?1:-1,1,1),d.position.set(T.x,T.y,T.z),d.rotation.set(0,l?-Math.PI/3:Math.PI/3,0),d.scale.set(l?-1:1,1,1),p&&C.call(()=>{this.breakPersistentEnergyShield(d)}),E)return C;m&&(this.sceneService.timeSlowActive=!0,C.call(()=>{this.createLightningStrike(h.position,d.position)}));let x=l?1.3:-1.3;return C.to(h.scale,{x,y:.7,z:1.3,duration:.2,ease:"power2.in"}),C.to(h.rotation,{y:l?Math.PI+Math.PI*2:-Math.PI-Math.PI*2,duration:.15,ease:"power4.inOut"},"<"),C.to(h.position,{x:l?T.x-.9:T.x+.9,y:T.y+1,z:l?T.z-1:T.z+1,duration:.15,ease:"power4.inOut",onComplete:()=>{this.createMassiveImpact(d.position,v),this.createEnergyWave(d.position,m),m&&this.screenFlash(),y&&this.animatePoisonAttack(d);let S=j.timeline();if(p)S.to(d.position,{y:d.position.y+.2,duration:.08,ease:"power2.out"}),S.to(d.rotation,{x:-.1,duration:.08,ease:"power2.out"},"<"),S.to(d.position,{y:d.position.y,duration:.15,ease:"bounce.out"}),S.to(d.rotation,{x:0,duration:.15,ease:"power2.out"},"<");else{S.to(d.position,{y:d.position.y+.5,duration:.06,ease:"power4.out"}),S.to(d.rotation,{z:(l?1:-1)*.8,y:(l?1:-1)*Math.PI*.25,x:.5,duration:.06,ease:"power3.out"},"<");let P=l?-.6:.6;S.to(d.scale,{x:P,y:.6,z:.75,duration:.06,ease:"power3.in"},"<"),S.to(d.position,{x:d.position.x+(l?1.8:-1.8),y:d.position.y+1.2,z:d.position.z+(l?.6:-.6),duration:.18,ease:"power3.out"}),S.to(d.rotation,{z:(l?1:-1)*Math.PI*1.2,y:(l?1:-1)*Math.PI*.6,x:Math.PI*.8,duration:.18,ease:"power2.out"},"<"),S.to(d.scale,{x:l?-1.1:1.1,y:.85,z:1.05,duration:.12,ease:"power1.out"},"<"),S.to(d.position,{x:d.position.x+(l?2.5:-2.5),y:d.position.y+.2,z:d.position.z+(l?.4:-.4),duration:.2,ease:"power1.in"}),S.to(d.rotation,{z:(l?1:-1)*Math.PI*2.2,y:(l?1:-1)*Math.PI*1.1,x:Math.PI*1.3,duration:.2,ease:"power1.in"},"<"),S.to(d.scale,{x:l?-.9:.9,y:1.1,z:.9,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}}),C.to(h.position,{x:w.x,y:w.y+3,z:w.z,duration:.4,ease:"power2.in"}),C.to(h.rotation,{x:Math.PI*2,duration:.4,ease:"power2.in"},"<"),C.to(h.position,{x:w.x,y:w.y,z:w.z,duration:.3,ease:"bounce.out"}),C.to(h.rotation,{x:0,y:l?Math.PI/3:-Math.PI/3,duration:.3},"<"),C.to(h.scale,{x:l?1:-1,y:1,z:1,duration:.2}),p||(C.to(d.position,{x:T.x,y:T.y,z:T.z,duration:.5,ease:"power2.inOut"},"-=0.5"),C.to(d.rotation,{z:0,y:l?-Math.PI/3:Math.PI/3,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),C.to(d.scale,{x:l?-1:1,y:1,z:1,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1")),C.call(()=>{h.position.set(b.x,b.y,b.z),h.rotation.set(0,l?Math.PI/3:-Math.PI/3,0),h.scale.set(l?1:-1,1,1),d.position.set(T.x,T.y,T.z),d.rotation.set(0,l?-Math.PI/3:Math.PI/3,0),d.scale.set(l?-1:1,1,1),this.resetCamera(),this.sceneService.timeSlowActive=!1}),C};if(t.type==="shield"){this.createPersistentEnergyShield(h);return}if(t.type==="combo"){let g=_("attack");this.comboTimeoutId=setTimeout(()=>{this.actionToken===o&&(_("attack"),this.comboTimeoutId=null)},(g.duration()+.1)*500);return}_(t.type)}cleanupPoisonEffects(){let t=this.sceneService.scene;this.activePoisonObjects.forEach(e=>{e.parent&&t.remove(e)}),this.activePoisonObjects=[],this.activePoisonTweens.forEach(e=>e.kill()),this.activePoisonTweens=[]}getCharacterBasePosition(t,e,n,i){let r=t?n:i;return r?{x:r.position.x,y:r.position.y+Hc,z:r.position.z}:{x:e.position.x,y:e.position.y,z:e.position.z}}animatePoisonTick(t,e){let n=this.sceneService.scene,i=this.sceneService.circleTexture,r=new an;r.position.copy(t.position),r.position.y+=1.1,n.add(r);let a=new Tt(8191851),o=new Tt(3538810),l=new lr(1.4,.08,18,80),c=new jn({color:a,emissive:o,emissiveIntensity:1.3,transparent:!0,opacity:.85}),h=new Ft(l,c);h.rotation.x=Math.PI/2,r.add(h);let u=new Ft(l,c.clone());u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/3,u.scale.set(.7,.7,.7),r.add(u);let f=new je(8191851,3,6);f.position.copy(r.position),f.position.y+=.4,n.add(f);let d=[],_=new Ur({map:i,color:8191851,transparent:!0,opacity:.8,blending:ln,depthWrite:!1});for(let p=0;p<16;p++){let y=new Is(_.clone()),E=Math.random()*Math.PI*2,v=.4+Math.random()*.8;y.position.set(Math.cos(E)*v,.2+Math.random()*.8,Math.sin(E)*v);let b=.2+Math.random()*.35;y.scale.set(b,b,b),r.add(y),d.push(y)}let g=[];g.push(j.to(h.scale,{x:1.9,y:1.9,z:1.9,duration:.7,ease:"power2.out"})),g.push(j.to(h.material,{opacity:0,duration:.7,ease:"power2.out"})),g.push(j.to(u.scale,{x:2.3,y:2.3,z:2.3,duration:.8,ease:"power2.out",delay:.05})),g.push(j.to(u.material,{opacity:0,duration:.8,ease:"power2.out",delay:.05})),g.push(j.to(h.rotation,{z:Math.PI*1.2,duration:.7,ease:"power2.out"})),g.push(j.to(u.rotation,{z:-Math.PI*1.2,duration:.8,ease:"power2.out"})),d.forEach(p=>{let y=Math.random()*Math.PI*2,E=.6+Math.random()*.8,v=Math.random()*.15;g.push(j.to(p.position,{x:Math.cos(y)*E,y:p.position.y+1+Math.random()*.6,z:Math.sin(y)*E,duration:.9,delay:v,ease:"power2.out"})),g.push(j.to(p.material,{opacity:0,duration:.9,delay:v,ease:"power2.out"}))}),g.push(j.to(f,{intensity:0,duration:.7,ease:"power2.out",onComplete:()=>{n.remove(f)}})),this.activePoisonObjects.push(r,f),this.activePoisonTweens.push(...g);let m=j.delayedCall(.95,()=>{n.remove(r),l.dispose(),c.dispose(),u.material.dispose(),d.forEach(p=>{p.material instanceof yn&&p.material.dispose()})});this.createMassiveImpact(t.position,e),this.activePoisonTweens.push(m)}animatePoisonAttack(t){let e=this.sceneService.scene,n=this.sceneService.camera,i=this.sceneService.circleTexture,r=new Tt(3800852),a=new Tt(65348);for(let v=0;v<3;v++){let b=new lr(.5+v*.12,.065-v*.004,16,80),T=new jn({color:r,emissive:a,emissiveIntensity:1.6-v*.12,transparent:!0,opacity:.92-v*.05}),w=new Ft(b,T);w.position.copy(t.position),w.position.y=.2+v*.4,w.rotation.x=Math.PI/2,e.add(w);let C=v*.065,x=.75+v*.1,S=v%2===0?1:-1;j.to(w.scale,{x:4,y:4,z:4,duration:x,delay:C,ease:"power2.out"}),j.to(w.rotation,{z:S*Math.PI*2.5,duration:x,delay:C,ease:"power2.out"}),j.to(T,{opacity:0,duration:x,delay:C,ease:"power2.out",onComplete:()=>{e.remove(w),b.dispose(),T.dispose()}})}let o=new Ur({map:i,color:8191851,transparent:!0,opacity:1,blending:ln,depthWrite:!1}),l=20;for(let v=0;v<l;v++){let b=v/l,T=b*Math.PI*6,w=b*3.2,C=.75+Math.sin(b*Math.PI)*.45,x=new Is(o.clone());x.position.set(t.position.x+Math.cos(T)*C,t.position.y+w,t.position.z+Math.sin(T)*C);let S=.1+Math.random()*.14;x.scale.set(S,S,S),e.add(x),j.to(x.position,{x:t.position.x+Math.cos(T+Math.PI)*(C+1),y:x.position.y+1.8+Math.random()*.8,z:t.position.z+Math.sin(T+Math.PI)*(C+1),duration:1+Math.random()*.5,delay:b*.45,ease:"power2.out"}),j.to(x.material,{opacity:0,duration:.7,delay:.35+b*.45,ease:"power2.in",onComplete:()=>{e.remove(x),x.material.dispose()}})}let c=45,h=new oe,u=new Float32Array(c*3),f=[];for(let v=0;v<c;v++){u[v*3]=t.position.x,u[v*3+1]=t.position.y+1.5,u[v*3+2]=t.position.z;let b=v/c*Math.PI*2,T=(Math.random()-.25)*Math.PI,w=.3+Math.random()*.5;f.push(new B(Math.cos(b)*Math.cos(T)*w,Math.abs(Math.sin(T))*w+.04,Math.sin(b)*Math.cos(T)*w))}h.setAttribute("position",new xe(u,3));let d=new On({color:3800852,size:.2,transparent:!0,opacity:1,blending:ln,map:i,alphaTest:.01}),_=new Xn(h,d);e.add(_),j.to(d,{opacity:0,duration:1.3,onUpdate:()=>{let v=h.attributes.position;for(let b=0;b<c;b++)v.array[b*3]+=f[b].x,v.array[b*3+1]+=f[b].y,v.array[b*3+2]+=f[b].z,f[b].y-=.018;v.needsUpdate=!0},onComplete:()=>{e.remove(_),h.dispose(),d.dispose()}});let g=new je(3800852,0,9);g.position.copy(t.position),g.position.y+=1.5,e.add(g);let m=new je(65348,0,5);m.position.copy(t.position),m.position.y+=.3,e.add(m),j.to(g,{intensity:10,duration:.08,ease:"expo.out",onComplete:()=>{j.to(g,{intensity:0,duration:.85,ease:"power2.out",onComplete:()=>{e.remove(g)}})}}),j.to(m,{intensity:6,duration:.18,ease:"expo.out",onComplete:()=>{j.to(m,{intensity:0,duration:.75,delay:.15,ease:"power2.out",onComplete:()=>{e.remove(m)}})}});let p=n.position.clone(),y=j.timeline(),E=.18;for(let v=0;v<5;v++)y.to(n.position,{x:p.x+(Math.random()-.5)*E,y:p.y+(Math.random()-.5)*E*.5,duration:.055,ease:"none"});y.to(n.position,{x:p.x,y:p.y,duration:.07,ease:"none"})}createEnergyShield(t){let e=this.sceneService.scene,n=this.sceneService.camera,i=this.sceneService.circleTexture,r=new an;r.position.copy(t.position),r.position.y+=1,e.add(r);let a=new ar(2.5,1),o=new cr({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:ve,emissive:65535,emissiveIntensity:.8}),l=new Ft(a,o);r.add(l);let c=new Kn(2.2,32,32),h=new cr({color:4495871,transparent:!0,opacity:.4,side:ve,emissive:2254591,emissiveIntensity:1.2}),u=new Ft(c,h);r.add(u);let f=new ar(1.8,1),d=new Ke({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:ve}),_=new Ft(f,d);r.add(_);let g=40,m=new oe,p=new Float32Array(g*3),y=[];for(let I=0;I<g;I++){let F=Math.random()*Math.PI*2,k=2+Math.random()*1.5,U=(Math.random()-.5)*3;p[I*3]=Math.cos(F)*k,p[I*3+1]=U,p[I*3+2]=Math.sin(F)*k,y.push(F,Math.random()*.02+.01)}m.setAttribute("position",new xe(p,3));let E=new On({map:i,color:65535,size:.18,transparent:!0,opacity:.8,blending:ln,depthWrite:!1}),v=new Xn(m,E);r.add(v);let b=[];for(let I=0;I<3;I++){let F=new lr(1.5,.1,16,50),k=new Ke({color:65535,transparent:!0,opacity:.8,side:ve}),U=new Ft(F,k);U.rotation.x=Math.PI/2,U.scale.set(.1,.1,.1),r.add(U),b.push(U),j.to(U.scale,{x:2,y:2,z:2,duration:.8,delay:I*.1,ease:"power2.out"}),j.to(k,{opacity:0,duration:.8,delay:I*.1})}let T=new je(65535,30,8);T.position.copy(r.position),e.add(T);let w=new je(16777215,20,6);w.position.copy(r.position),e.add(w);let C=new or(.5,3,6),x=new Ke({color:16777215,transparent:!0,opacity:1,side:ve}),S=new Ft(C,x);S.position.copy(r.position),S.lookAt(n.position),e.add(S),j.to(S.scale,{x:3,y:3,z:3,duration:.3,ease:"power2.out"}),j.to(x,{opacity:0,duration:.3,onComplete:()=>{e.remove(S),C.dispose(),x.dispose()}});let P=n.position.clone(),L=j.timeline();for(let I=0;I<6;I++)L.to(n.position,{x:P.x+(Math.random()-.5)*.2,y:P.y+(Math.random()-.5)*.2,z:P.z+(Math.random()-.5)*.15,duration:.03});L.to(n.position,{x:P.x,y:P.y,z:P.z,duration:.05}),j.to(l.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),j.to(_.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8}),j.to(u.scale,{x:1.3,y:1.3,z:1.3,duration:.2,yoyo:!0,repeat:1,ease:"power2.inOut"}),j.to(r.scale,{x:1.2,y:1.2,z:1.2,duration:.15,yoyo:!0,repeat:1,ease:"elastic.out(1, 0.3)"}),j.to(T,{intensity:50,duration:.1,yoyo:!0,repeat:3}),j.to(w,{intensity:35,duration:.15,yoyo:!0,repeat:2}),this.sceneService.particleAnimations.push({geometry:m,velocities:y,particleCount:g}),j.to([o,h,d,E],{opacity:0,duration:.5,delay:.5,onComplete:()=>{let I=this.sceneService.particleAnimations.findIndex(F=>F.geometry===m);I>-1&&this.sceneService.particleAnimations.splice(I,1),e.remove(r),e.remove(T),e.remove(w),a.dispose(),o.dispose(),c.dispose(),h.dispose(),f.dispose(),d.dispose(),m.dispose(),E.dispose(),b.forEach(F=>{F.geometry.dispose(),F.material.dispose()})}}),j.to([T,w],{intensity:0,duration:.5,delay:.5})}createPersistentEnergyShield(t){this.disposePersistentShield(t);let e=this.sceneService.scene,n=this.sceneService.camera,i=this.sceneService.circleTexture,r=new an;r.position.copy(t.position),r.position.y+=1,e.add(r);let a=new ar(2.5,1),o=new cr({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:ve,emissive:65535,emissiveIntensity:.8}),l=new Ft(a,o);r.add(l);let c=new Kn(2.2,32,32),h=new cr({color:4495871,transparent:!0,opacity:.4,side:ve,emissive:2254591,emissiveIntensity:1.2}),u=new Ft(c,h);r.add(u);let f=new ar(1.8,1),d=new Ke({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:ve}),_=new Ft(f,d);r.add(_);let g=40,m=new oe,p=new Float32Array(g*3),y=[];for(let k=0;k<g;k++){let U=Math.random()*Math.PI*2,O=2+Math.random()*1.5,X=(Math.random()-.5)*3;p[k*3]=Math.cos(U)*O,p[k*3+1]=X,p[k*3+2]=Math.sin(U)*O,y.push(U,Math.random()*.02+.01)}m.setAttribute("position",new xe(p,3));let E=new On({map:i,color:65535,size:.18,transparent:!0,opacity:.8,blending:ln,depthWrite:!1}),v=new Xn(m,E);r.add(v);let b=[];for(let k=0;k<3;k++){let U=new lr(1.5,.1,16,50),O=new Ke({color:65535,transparent:!0,opacity:.8,side:ve}),X=new Ft(U,O);X.rotation.x=Math.PI/2,X.scale.set(.1,.1,.1),r.add(X),b.push(X),j.to(X.scale,{x:2,y:2,z:2,duration:.8,delay:k*.1,ease:"power2.out"}),j.to(O,{opacity:0,duration:.8,delay:k*.1})}let T=new je(65535,30,8);T.position.copy(r.position),e.add(T);let w=new je(16777215,20,6);w.position.copy(r.position),e.add(w);let C=new or(.5,3,6),x=new Ke({color:16777215,transparent:!0,opacity:1,side:ve}),S=new Ft(C,x);S.position.copy(r.position),S.lookAt(n.position),e.add(S),j.to(S.scale,{x:3,y:3,z:3,duration:.3,ease:"power2.out"}),j.to(x,{opacity:0,duration:.3,onComplete:()=>{e.remove(S),C.dispose(),x.dispose()}});let P=n.position.clone(),L=j.timeline();for(let k=0;k<6;k++)L.to(n.position,{x:P.x+(Math.random()-.5)*.2,y:P.y+(Math.random()-.5)*.2,z:P.z+(Math.random()-.5)*.15,duration:.03});L.to(n.position,{x:P.x,y:P.y,z:P.z,duration:.05}),j.to(l.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),j.to(_.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8}),j.to(u.scale,{x:1.3,y:1.3,z:1.3,duration:.2,yoyo:!0,repeat:1,ease:"power2.inOut"}),j.to(r.scale,{x:1.2,y:1.2,z:1.2,duration:.15,yoyo:!0,repeat:1,ease:"elastic.out(1, 0.3)"}),j.to(T,{intensity:50,duration:.1,yoyo:!0,repeat:3}),j.to(w,{intensity:35,duration:.15,yoyo:!0,repeat:2});let I=this.sceneService.particleAnimations.push({geometry:m,velocities:y,particleCount:g})-1,F=[];F.push(j.to(l.rotation,{x:"+=6.28",y:"+=6.28",duration:4,repeat:-1,ease:"none"})),F.push(j.to(_.rotation,{x:"-=6.28",z:"+=6.28",duration:3,repeat:-1,ease:"none"})),F.push(j.to(u.scale,{x:1.15,y:1.15,z:1.15,duration:1.2,yoyo:!0,repeat:-1,ease:"sine.inOut"})),F.push(j.to(h,{opacity:.55,duration:1.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),F.push(j.to(T,{intensity:15,duration:1,delay:.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),F.push(j.to(w,{intensity:10,duration:.8,delay:.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})),this.persistentShields.set(t,{shieldGroup:r,mainLight:T,pulseLight:w,particleAnimIndex:I,materials:[o,h,d,E],geometries:[a,c,f,m],rings:b,idleTweens:F})}breakPersistentEnergyShield(t){let e=this.persistentShields.get(t);if(!e){this.createEnergyShield(t);return}let n=this.sceneService.scene,i=this.sceneService.camera,{shieldGroup:r,mainLight:a,pulseLight:o,materials:l,geometries:c,rings:h,idleTweens:u}=e;u.forEach(_=>_.kill());let f=i.position.clone(),d=j.timeline();for(let _=0;_<8;_++)d.to(i.position,{x:f.x+(Math.random()-.5)*.3,y:f.y+(Math.random()-.5)*.3,z:f.z+(Math.random()-.5)*.2,duration:.03});d.to(i.position,{x:f.x,y:f.y,z:f.z,duration:.05}),j.to(a,{intensity:60,duration:.1,yoyo:!0,repeat:1}),j.to(o,{intensity:45,duration:.1,yoyo:!0,repeat:1}),j.to(r.scale,{x:1.6,y:1.6,z:1.6,duration:.15,ease:"power4.out"}),j.to(l,{opacity:0,duration:.4,delay:.15,onComplete:()=>{let _=c[3],g=this.sceneService.particleAnimations.findIndex(m=>m.geometry===_);g>-1&&this.sceneService.particleAnimations.splice(g,1),n.remove(r),n.remove(a),n.remove(o),c.forEach(m=>m.dispose()),l.forEach(m=>m.dispose()),h.forEach(m=>{m.geometry.dispose(),m.material.dispose()}),this.persistentShields.delete(t)}}),j.to([a,o],{intensity:0,duration:.4,delay:.15})}disposePersistentShield(t){let e=this.persistentShields.get(t);if(!e)return;let n=this.sceneService.scene,{shieldGroup:i,mainLight:r,pulseLight:a,materials:o,geometries:l,rings:c,idleTweens:h}=e;h.forEach(d=>d.kill());let u=l[3],f=this.sceneService.particleAnimations.findIndex(d=>d.geometry===u);f>-1&&this.sceneService.particleAnimations.splice(f,1),n.remove(i),n.remove(r),n.remove(a),l.forEach(d=>d.dispose()),o.forEach(d=>d.dispose()),c.forEach(d=>{d.geometry.dispose(),d.material.dispose()}),this.persistentShields.delete(t)}createLightningStrike(t,e){let n=this.sceneService.scene,i=this.sceneService.camera,r=this.sceneService.circleTexture,a=i.position.clone(),o=j.timeline();for(let T=0;T<8;T++)o.to(i.position,{x:a.x+(Math.random()-.5)*.3,y:a.y+(Math.random()-.5)*.3,z:a.z+(Math.random()-.5)*.2,duration:.03});o.to(i.position,{x:a.x,y:a.y,z:a.z,duration:.1});let l=t.clone(),c=e.clone();l.y+=6.5,c.y+=1.2;let h=(T,w,C)=>{let x=[];x.push(T.clone());for(let S=1;S<C;S++){let P=S/C,L=new B().lerpVectors(T,w,P);L.y+=.8-P*.8;let I=.8+Math.sin(P*Math.PI*2)*.6;L.x+=(Math.random()-.5)*I,L.z+=(Math.random()-.5)*I,x.push(L)}return x.push(w.clone()),x},u=(T,w,C,x)=>{let S=new oe().setFromPoints(T),P=new Ls({color:w,transparent:!0,opacity:C,blending:ln}),L=new Pa(S,P);n.add(L),this.sceneService.lightningBolts.push(L);let I=T.map(O=>O.clone()),F=S.attributes.position,k=()=>{for(let O=0;O<I.length;O++){let X=I[O],Q=O===0||O===I.length-1?0:x;F.setXYZ(O,X.x+(Math.random()-.5)*Q,X.y+(Math.random()-.5)*Q,X.z+(Math.random()-.5)*Q)}F.needsUpdate=!0};k();let U=j.to(P,{opacity:Math.max(.15,C*.25),duration:.06,repeat:6,yoyo:!0,onUpdate:k});return{line:L,geometry:S,material:P,flickerTween:U}},f=2;for(let T=0;T<f;T++){let w=h(l,c,18+T*3),C=u(w,T===0?16777215:12124159,1,.55),x=u(w,8388607,.45,.25);for(let S=0;S<2;S++){let P=Math.floor(Math.random()*(w.length-6))+2,L=[w[P].clone()],I=6+Math.floor(Math.random()*5);for(let k=1;k<=I;k++){let O=L[L.length-1].clone();O.x+=(Math.random()-.5)*1.6,O.y+=(Math.random()-.8)*.9,O.z+=(Math.random()-.5)*1.6,L.push(O)}let F=u(L,11206655,.6,.35);j.to(F.material,{opacity:0,duration:.2,delay:.08,onComplete:()=>{F.flickerTween.kill(),n.remove(F.line),F.geometry.dispose(),F.material.dispose()}})}j.to([C.material,x.material],{opacity:0,duration:.35,delay:.15+T*.05,onComplete:()=>{C.flickerTween.kill(),x.flickerTween.kill(),n.remove(C.line),n.remove(x.line),C.geometry.dispose(),x.geometry.dispose(),C.material.dispose(),x.material.dispose();let S=this.sceneService.lightningBolts.indexOf(C.line);S>-1&&this.sceneService.lightningBolts.splice(S,1);let P=this.sceneService.lightningBolts.indexOf(x.line);P>-1&&this.sceneService.lightningBolts.splice(P,1)}})}let d=new je(16777215,50,15);d.position.copy(c),n.add(d);let _=new je(11206655,30,12);_.position.copy(l),n.add(_);let g=30,m=new oe,p=new Float32Array(g*3),y=[];for(let T=0;T<g;T++){let w=Math.random();p[T*3]=l.x+(c.x-l.x)*w+(Math.random()-.5)*2,p[T*3+1]=l.y+(c.y-l.y)*w+(Math.random()-.5)*2,p[T*3+2]=l.z+(c.z-l.z)*w+(Math.random()-.5)*2,y.push(new B((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3))}m.setAttribute("position",new xe(p,3));let E=new On({color:16777215,size:.2,transparent:!0,opacity:1,blending:ln,map:r,alphaTest:.01}),v=new Xn(m,E);n.add(v),j.to(E,{opacity:0,duration:.8,onUpdate:()=>{let T=m.attributes.position;for(let w=0;w<g;w++)T.array[w*3]+=y[w].x,T.array[w*3+1]+=y[w].y,T.array[w*3+2]+=y[w].z;T.needsUpdate=!0},onComplete:()=>{n.remove(v),m.dispose(),E.dispose()}});let b=3;for(let T=0;T<b;T++){let w=new or(.5,1,32),C=new Ke({color:T%2===0?16777215:11206655,transparent:!0,opacity:.9,side:ve}),x=new Ft(w,C);x.position.copy(c),x.position.y=.1,x.rotation.x=-Math.PI/2,n.add(x),j.to(x.scale,{x:8+T*2,y:8+T*2,duration:.6,delay:T*.05,ease:"power2.out"}),j.to(C,{opacity:0,duration:.6,delay:T*.05,onComplete:()=>{n.remove(x),w.dispose(),C.dispose()}})}j.to(d,{intensity:0,duration:.4,delay:.2,onComplete:()=>{n.remove(d)}}),j.to(_,{intensity:0,duration:.4,delay:.2,onComplete:()=>{n.remove(_)}})}createMassiveImpact(t,e){let n=this.sceneService.scene,i=this.sceneService.circleTexture,r=e.type==="critical",a=e.type==="miss"?43775:17663;for(let d=0;d<3;d++){let _=new or(.5,.8,32),g=new Ke({color:a,transparent:!0,opacity:.8,side:ve}),m=new Ft(_,g);m.position.copy(t),m.position.y=.1,m.rotation.x=-Math.PI/2,n.add(m),j.to(m.scale,{x:r?12:8,y:r?12:8,z:1,duration:.8,delay:d*.1,ease:"power2.out"}),j.to(g,{opacity:0,duration:.8,delay:d*.1,onComplete:()=>{n.remove(m),_.dispose(),g.dispose()}})}let o=r?60:40,l=new oe,c=new Float32Array(o*3),h=[];for(let d=0;d<o;d++){c[d*3]=t.x,c[d*3+1]=t.y+2,c[d*3+2]=t.z;let _=r?.8:.5,g=d/o*Math.PI*2,m=(Math.random()-.3)*Math.PI;h.push(new B(Math.cos(g)*Math.cos(m)*_,Math.sin(m)*_,Math.sin(g)*Math.cos(m)*_))}l.setAttribute("position",new xe(c,3));let u=new On({color:a,size:r?.25:.15,transparent:!0,opacity:1,blending:ln,map:i,alphaTest:.01}),f=new Xn(l,u);n.add(f),j.to(u,{opacity:0,duration:1.2,onUpdate:()=>{let d=l.attributes.position;for(let _=0;_<o;_++)d.array[_*3]+=h[_].x,d.array[_*3+1]+=h[_].y,d.array[_*3+2]+=h[_].z,h[_].y-=.03;d.needsUpdate=!0},onComplete:()=>{n.remove(f),l.dispose(),u.dispose()}})}createEnergyWave(t,e){let n=this.sceneService.scene,i=new Kn(1,32,32),r=new Ke({color:17663,transparent:!0,opacity:.5,side:qe,wireframe:!1}),a=new Ft(i,r);a.position.copy(t),a.position.y+=2,n.add(a),j.to(a.scale,{x:e?8:5,y:e?8:5,z:e?8:5,duration:.6,ease:"power2.out"}),j.to(r,{opacity:0,duration:.6,onComplete:()=>{n.remove(a),i.dispose(),r.dispose()}})}cinematicCameraZoom(t,e,n){if(n){let i=this.sceneService.camera,r=new B().addVectors(t.position,e.position).multiplyScalar(.5);j.to(i.position,{x:r.x,y:r.y+3,z:r.z+6,duration:.3,ease:"power2.inOut"}),j.to(i,{fov:Math.max(this.sceneService.baseCameraFov-10,45),duration:.3,ease:"power2.inOut",onUpdate:()=>{i.updateProjectionMatrix()}})}}resetCamera(){let t=this.sceneService.camera,e=this.sceneService.cameraOriginalPosition;j.to(t.position,{x:e.x,y:e.y,z:e.z,duration:.5,ease:"power2.out"}),j.to(t,{fov:this.sceneService.baseCameraFov,duration:.5,ease:"power2.out",onUpdate:()=>{t.updateProjectionMatrix()}})}screenFlash(){let t=this.sceneService.scene,e=this.sceneService.camera,n=new Ui(100,100),i=new Ke({color:16777215,transparent:!0,opacity:.8,side:ve}),r=new Ft(n,i);r.position.copy(e.position),r.position.z-=5,r.lookAt(e.position),t.add(r),j.to(i,{opacity:0,duration:.2,onComplete:()=>{t.remove(r),n.dispose(),i.dispose()}})}static \u0275fac=function(e){return new(e||s)};static \u0275prov=Be({token:s,factory:s.\u0275fac})};var RM=["battleCanvas"],Ja=class s{canvasRef;character1Mesh=null;character2Mesh=null;destroy$=new Qa;battleService=De(Zr);sceneService=De(Xr);characterBuilder=De(Ya);vfxService=De(Za);character1=null;character2=null;constructor(){md(()=>{this.sceneService.init(this.canvasRef.nativeElement)})}ngOnInit(){this.battleService.battleState$.pipe(Ws(this.destroy$)).subscribe(t=>{if(t){let e=this.character1,n=this.character2;this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null,this.character1?.health===0&&this.character1Mesh&&(this.character1Mesh.visible=!1),this.character2?.health===0&&this.character2Mesh&&(this.character2Mesh.visible=!1),!this.character1Mesh&&!this.character2Mesh?this.createCharacters():(e&&this.character1&&e.id!==this.character1.id&&this.replaceCharacter(1),n&&this.character2&&n.id!==this.character2.id&&this.replaceCharacter(2))}}),this.battleService.action$.pipe(Ws(this.destroy$)).subscribe(t=>{t&&this.vfxService.animateAction(t,{character1:this.character1,character2:this.character2,character1Mesh:this.character1Mesh,character2Mesh:this.character2Mesh})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),j.killTweensOf("*"),this.vfxService.dispose(),this.sceneService.dispose()}clearCharacters(){this.characterBuilder.disposeCharacterMesh(this.character1Mesh,this.sceneService.scene),this.characterBuilder.disposeCharacterMesh(this.character2Mesh,this.sceneService.scene),this.character1Mesh=null,this.character2Mesh=null,this.character1=null,this.character2=null}replaceCharacter(t){let e=t===1?this.character1:this.character2;if(!e)return;let n=t===1?this.character1Mesh:this.character2Mesh;this.characterBuilder.disposeCharacterMesh(n,this.sceneService.scene);let i=this.characterBuilder.createCharacterMesh(e.color,e.position);t===1?(i.rotation.y=Math.PI/3,this.character1Mesh=i):(i.scale.x=-1,i.rotation.y=-Math.PI/3,this.character2Mesh=i),this.sceneService.scene.add(i),this.vfxService.createTeleportationEntrance(i,e.position,t===1?"left":"right")}createCharacters(){if(!this.character1||!this.character2)return;let t=this.characterBuilder.createCharacterMesh(this.character1.color,this.character1.position);t.rotation.y=Math.PI/3,this.sceneService.scene.add(t);let e=this.characterBuilder.createCharacterMesh(this.character2.color,this.character2.position);e.scale.x=-1,e.rotation.y=-Math.PI/3,this.sceneService.scene.add(e),this.character1Mesh=t,this.character2Mesh=e,this.vfxService.createTeleportationEntrance(t,this.character1.position,"left"),this.vfxService.createTeleportationEntrance(e,this.character2.position,"right")}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-battle-canvas"]],viewQuery:function(e,n){if(e&1&&no(RM,7),e&2){let i;io(i=ro())&&(n.canvasRef=i.first)}},features:[vd([Xr,Ya,Za])],decls:2,vars:0,consts:[["battleCanvas",""],[2,"width","100%","height","100%","display","block","position","absolute","top","0","left","0"]],template:function(e,n){e&1&&En(0,"canvas",1,0)},dependencies:[kn],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;min-height:100%;max-height:100%;display:block;position:absolute;top:0;left:0}"]})};var sd={RAT:{id:"char1",name:"Shelob",race:"rat",health:85,maxHealth:85,attack:18,defense:12,speed:22,focus:20,color:"#ff0000"},CAT:{id:"char2",name:"Aragog",race:"cat",health:90,maxHealth:90,attack:22,defense:13,speed:23,focus:14,color:"#0000ff"},BEAR:{id:"char3",name:"Anansi",race:"bear",health:130,maxHealth:130,attack:18,defense:22,speed:10,focus:10,color:"#444444"},HORSE:{id:"char4",name:"Arachne",race:"horse",health:110,maxHealth:110,attack:21,defense:14,speed:20,focus:10,color:"#dd8888"},GIRAFFE:{id:"char5",name:"Ungoliant",race:"giraffe",health:95,maxHealth:95,attack:19,defense:14,speed:13,focus:24,color:"#34f5dd"}};function PM(s,t){if(s&1){let e=Ys();me(0,"app-victory-banner",7),zn("terminateBattle",function(){xi(e);let i=ii(2);return vi(i.resetAndTerminateBattle())}),ge()}if(s&2){let e=ii();Fe("winner",e.winner)}}function IM(s,t){if(s&1&&(me(0,"div",3),En(1,"app-character-status-card",4)(2,"app-character-status-card",5),ge(),qs(3,PM,1,1,"app-victory-banner",6)),s&2){let e=t;ie(),Fe("character",e.team1[e.activeTeam1Index]),ie(),Fe("character",e.team2[e.activeTeam2Index]),ie(),qc(e.isComplete&&e.winner?3:-1)}}var fm=class s{battleCanvas;destroy$=new Qa;battleService=De(Zr);router=De(bd);battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(pd(t=>t!==null));awaitingPlayerAction$=this.battleService.awaitingPlayerAction$;character1=null;character2=null;ngOnInit(){this.battleService.battleState$.pipe(Ws(this.destroy$)).subscribe(t=>this.updateActiveCharacters(t))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.battleService.resetBattle()}startBattle(){this.battleService.startBattle([sd.HORSE],[sd.GIRAFFE])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.character1=null,this.character2=null,this.router.navigate(["/"])}onPlayerAction(t){this.battleService.performPlayerAction(t)}updateActiveCharacters(t){if(!t){this.character1=null,this.character2=null;return}this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=dn({type:s,selectors:[["app-battle"]],viewQuery:function(e,n){if(e&1&&no(Ja,5),e&2){let i;io(i=ro())&&(n.battleCanvas=i.first)}},decls:8,vars:9,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","playerAction","isBattleActive","isAwaitingPlayerAction"],[1,"battle-overlay"],["alignment","left",3,"character"],["alignment","right",3,"character"],[3,"winner"],[3,"terminateBattle","winner"]],template:function(e,n){if(e&1&&(me(0,"div",0)(1,"div",1),En(2,"app-battle-canvas"),qs(3,IM,4,3),fn(4,"async"),ge(),me(5,"app-battle-controls",2),fn(6,"async"),fn(7,"async"),zn("startBattle",function(){return n.startBattle()})("playerAction",function(r){return n.onPlayerAction(r)}),ge()()),e&2){let i,r,a;ie(3),qc((i=pn(4,3,n.battleState$))?3:-1,i),ie(2),Fe("isBattleActive",(r=pn(6,5,n.isBattleActive$))!==null&&r!==void 0?r:!1)("isAwaitingPlayerAction",(a=pn(7,7,n.awaitingPlayerAction$))!==null&&a!==void 0?a:!1)}},dependencies:[kn,Md,go,_o,xo,Ja],styles:[".canvas-wrapper[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;padding:4px;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 60px #34f5dd4d,inset 0 0 40px #34f5dd1a}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:20px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;z-index:10}@media (max-width: 580px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{flex-direction:column-reverse;justify-content:flex-end;gap:10px;height:100%;padding:10px 10px 60px}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%]{padding:8px;gap:8px}.battle-overlay[_ngcontent-%COMP%]{padding:8px 8px 60px;gap:8px}}"]})};export{fm as BattleComponent};
