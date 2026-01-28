import{f as td}from"./chunk-2YA7HKD7.js";import{a as id,b as rd}from"./chunk-44S5IU4G.js";import"./chunk-5NG7NJIG.js";import{e as ed,f as nd}from"./chunk-5HO2ASMD.js";import"./chunk-IICOC5F7.js";import"./chunk-OK3DBQKA.js";import{c as za,d as ka}from"./chunk-6LCSXYVM.js";import{m as ju,s as Qu,u as En}from"./chunk-I2C5T5RO.js";import{$ as Tn,$b as bi,Ab as Mc,Eb as De,Fa as Yu,Fb as Le,Gb as Ln,Kb as Sc,Ob as As,Pb as Cs,Q as ws,R as qu,Sb as bc,Ub as Ua,V as bn,Va as Ie,Vb as Oa,Wb as Ba,a as Xn,ac as Rs,b as La,cc as Ku,e as Fa,ha as xc,hb as wn,ia as vc,k as Na,l as _c,mb as Es,nc as Ti,oc as wi,qa as yc,s as Wu,ub as qn,vb as Zu,wb as Ju,yb as $u,z as Xu}from"./chunk-CBTV3KHB.js";var Va=class r{initiativeRandomMax=10;calculateInitiative(t){return t.speed+Math.floor(Math.random()*(this.initiativeRandomMax+1))}static \u0275fac=function(e){return new(e||r)};static \u0275prov=bn({token:r,factory:r.\u0275fac,providedIn:"root"})};var Ga=class r{baseHitChance=75;hitChanceSpeedFactor=.5;minHitChance=5;maxHitChance=100;critBaseChance=5;critSpeedFactor=.2;bearRageThreshold=.5;bearRageAttackFactor=.05;bearRageDefenseFactor=.3;horseRushSpeedFactor=.01;defenseMultiplier=.6;minDamage=1;calculateHitChance(t,e){let n=this.baseHitChance+(t.speed-e.speed)*this.hitChanceSpeedFactor;return t.debuffEffect&&(n-=t.debuffEffect.accuracyReduction),Math.max(this.minHitChance,Math.min(this.maxHitChance,n))}calculateBaseDamage(t,e){let n=t.attack;if(t.debuffEffect&&(n-=t.debuffEffect.attackReduction),t.race==="bear"&&t.health<t.maxHealth*this.bearRageThreshold){let o=(t.maxHealth-t.health)*this.bearRageAttackFactor;n+=o}let i=1;t.race==="horse"&&t.turnCount===0&&(i=.5+t.speed*this.horseRushSpeedFactor);let s=e.defense;e.race==="bear"&&e.health<e.maxHealth*this.bearRageThreshold&&(s+=e.defense*this.bearRageDefenseFactor);let a=n*i-s*this.defenseMultiplier;return Math.max(this.minDamage,a)}calculateCritChance(t){return this.critBaseChance+t.speed*this.critSpeedFactor}isCriticalHit(t){return Math.random()*100<t}isHit(t){return Math.random()*100<=t}static \u0275fac=function(e){return new(e||r)};static \u0275prov=bn({token:r,factory:r.\u0275fac,providedIn:"root"})};var Ha=class r{poisonBaseChance=20;poisonFocusFactor=.5;poisonSpeedFactor=.3;poisonAttackFactor=.3;poisonFocusDamageFactor=.5;poisonTurns=3;comboBaseChance=25;comboSpeedFactor=.6;comboDamageFactor=.6;comboDamageDelayMs=500;debuffAttackFactor=.4;debuffAccuracyFactor=.3;applyRacialSkills(t,e,n,i){switch(t.race){case"rat":this.applyPoisonBite(t,e,n,i);break;case"cat":this.applyComboStrike(t,e,n,i);break;case"giraffe":this.applyDistanceControl(t,e);break}}applyPoisonBite(t,e,n,i){let s=this.poisonBaseChance+t.focus*this.poisonFocusFactor+t.speed*this.poisonSpeedFactor;if(Math.random()*100<s){let a=t.attack*this.poisonAttackFactor+t.focus*this.poisonFocusDamageFactor;e.poisonEffect={turnsRemaining:this.poisonTurns,damagePerTurn:Math.floor(a)},this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"poison",timestamp:Date.now(),message:`${e.name} is poisoned!`})}}applyComboStrike(t,e,n,i){let s=this.comboBaseChance+t.speed*this.comboSpeedFactor;if(Math.random()*100<s){let a=Math.floor(t.attack*this.comboDamageFactor);this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:a,type:"combo",timestamp:Date.now(),message:`${t.name} combo strike!`}),setTimeout(()=>{e.health=Math.max(0,e.health-a),e.isAlive=e.health>0},this.comboDamageDelayMs)}}applyDistanceControl(t,e){let n=t.focus*this.debuffAttackFactor,i=t.focus*this.debuffAccuracyFactor;e.debuffEffect={attackReduction:n,accuracyReduction:i}}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=bn({token:r,factory:r.\u0275fac,providedIn:"root"})};var Wa=class r{poisonDeathDelayMs=1e3;applyEndOfTurnEffects(t,e,n){!t||t.isComplete||(this.applyPoisonDamage(t.team1[t.activeTeam1Index],t,e,!0,n),this.applyPoisonDamage(t.team2[t.activeTeam2Index],t,e,!1,n))}applyPoisonDamage(t,e,n,i,s){if(!t||!t.poisonEffect||!t.isAlive)return;let a=t.poisonEffect.damagePerTurn;t.health=Math.max(0,t.health-a),t.isAlive=t.health>0,this.emitAction(e,n,{attackerId:"",defenderId:t.id,damage:a,type:"poison",timestamp:Date.now(),message:`${t.name} takes poison damage!`}),t.poisonEffect.turnsRemaining--,t.poisonEffect.turnsRemaining<=0&&delete t.poisonEffect,t.isAlive||setTimeout(()=>{s(!i)},this.poisonDeathDelayMs)}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=bn({token:r,factory:r.\u0275fac,providedIn:"root"})};var Xa=class r{initiativeService=Tn(Va);damageService=Tn(Ga);racialSkillsService=Tn(Ha);effectsService=Tn(Wa);counterAttackDelayMs=2e3;effectsDelayMs=500;damageApplyDelayMs=350;deathNotificationDelayMs=1500;executeTurn(t,e,n,i){if(!t||t.isComplete)return;let s=t.team1[t.activeTeam1Index],a=t.team2[t.activeTeam2Index];if(!s||!a){n();return}let o=this.initiativeService.calculateInitiative(s),l=this.initiativeService.calculateInitiative(a),c=o>=l?s:a,h=o>=l?a:s;this.executeAttack(c,h,t,e,i),setTimeout(()=>{t.isComplete||(h.isAlive&&this.executeAttack(h,c,t,e,i),setTimeout(()=>{this.effectsService.applyEndOfTurnEffects(t,e,i)},this.effectsDelayMs))},this.counterAttackDelayMs)}executeAttack(t,e,n,i,s){t.turnCount++;let a=this.damageService.calculateHitChance(t,e);if(!this.damageService.isHit(a)){this.executeMiss(t,e,n,i);return}let o=this.damageService.calculateBaseDamage(t,e),l=this.damageService.calculateCritChance(t),c=this.damageService.isCriticalHit(l);c&&(o*=1.5),o=Math.floor(o),this.racialSkillsService.applyRacialSkills(t,e,n,i),this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:o,type:c?"critical":"attack",timestamp:Date.now()}),setTimeout(()=>{n.isComplete||(e.health=Math.max(0,e.health-o),e.isAlive=e.health>0,e.isAlive||setTimeout(()=>{let h=t===n.team1[n.activeTeam1Index];s(h)},this.deathNotificationDelayMs))},this.damageApplyDelayMs)}executeMiss(t,e,n,i){this.emitAction(n,i,{attackerId:t.id,defenderId:e.id,damage:0,type:"miss",timestamp:Date.now(),message:`${t.name} missed!`})}emitAction(t,e,n){t.actions.push(n),e.next(n)}static \u0275fac=function(e){return new(e||r)};static \u0275prov=bn({token:r,factory:r.\u0275fac,providedIn:"root"})};var Nr=class r{turnService=Tn(Xa);autoPlayIntervalMs=4e3;team1StartPosition={x:-2,y:.35,z:3};team2StartPosition={x:3,y:.35,z:-3};battleStateSubject=new _c(null);battleState$=this.battleStateSubject.asObservable();actionSubject=new _c(null);action$=this.actionSubject.asObservable();startBattle(t,e){if(t.length===0||e.length===0)throw new Error("Both teams must have at least one character");let n={team1:this.prepareTeam(t,this.team1StartPosition),team2:this.prepareTeam(e,this.team2StartPosition),activeTeam1Index:0,activeTeam2Index:0,actions:[],winner:null,isComplete:!1};this.battleStateSubject.next(n),this.executeAutoPlay()}executeAutoPlay(){Xu(this.autoPlayIntervalMs).pipe(qu(()=>{let t=this.battleStateSubject.value;return t!==null&&!t.isComplete})).subscribe(()=>{this.executeTurn()})}executeTurn(){let t=this.battleStateSubject.value;t&&(this.turnService.executeTurn(t,this.actionSubject,()=>this.endBattle(),e=>this.handleCharacterDeath(e)),this.battleStateSubject.next(Xn({},t)))}handleCharacterDeath(t){let e=this.battleStateSubject.value;if(!e||e.isComplete)return;let n=t?"team2":"team1",i=t?"activeTeam2Index":"activeTeam1Index",s=e[n],a=e[i],o=this.getNextAliveIndex(s,a);if(o!==null){e[i]=o,this.battleStateSubject.next(Xn({},e));return}this.endBattle()}getNextAliveIndex(t,e){let n=t.findIndex((s,a)=>a>e&&s.isAlive);if(n!==-1)return n;let i=t.findIndex(s=>s.isAlive);return i!==-1?i:null}endBattle(){let t=this.battleStateSubject.value;if(!t)return;t.isComplete=!0;let i=(t.team1.some(s=>s.isAlive)?t.team1:t.team2).filter(s=>s.isAlive);t.winner=i.length>0?i[0].name:null,this.battleStateSubject.next(Xn({},t))}resetBattle(){this.battleStateSubject.next(null),this.actionSubject.next(null)}prepareTeam(t,e){return t.map(n=>La(Xn({},n),{isAlive:!0,position:e,turnCount:0}))}static \u0275fac=function(e){return new(e||r)};static \u0275prov=bn({token:r,factory:r.\u0275fac,providedIn:"root"})};var qa=class r{character;alignment="left";get healthPercentage(){return this.character?this.character.health/this.character.maxHealth*100:0}get healthBarClass(){return this.alignment==="left"?"character1":"character2"}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=wn({type:r,selectors:[["app-character-status-card"]],inputs:{character:"character",alignment:"alignment"},decls:12,vars:15,consts:[[1,"character-status"],[1,"character-card","glass-panel"],[1,"character-name"],[1,"health-container"],[1,"health-bar-wrapper"],[1,"health-bar"],[1,"health-text"],[1,"stats-row"],["styleClass","stat-chip attack-stat",3,"label"],["styleClass","stat-chip defense-stat",3,"label"]],template:function(e,n){e&1&&(De(0,"div",0)(1,"div",1)(2,"div",2),bi(3),Le(),De(4,"div",3)(5,"div",4),Ln(6,"div",5),De(7,"span",6),bi(8),Le()()(),De(9,"div",7),Ln(10,"p-chip",8)(11,"p-chip",9),Le()()()),e&2&&(Ju("left",n.alignment==="left")("right",n.alignment==="right"),Ie(3),Rs(n.character.name),Ie(3),$u(n.healthBarClass),Zu("width",n.healthPercentage,"%"),Ie(2),Ku("",n.character.health," / ",n.character.maxHealth,""),Ie(2),bc("label","\u2694\uFE0F ",n.character.attack,""),Ie(),bc("label","\u{1F6E1}\uFE0F ",n.character.defense,""))},dependencies:[En,rd,id],styles:['.glass-panel[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}.character-status[_ngcontent-%COMP%]{pointer-events:auto;animation:slideIn .8s ease-out}.character-status.left[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInLeftDramatic}.character-status.right[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_slideInRightDramatic}.character-card[_ngcontent-%COMP%]{padding:16px 20px;min-width:260px;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);position:relative;overflow:hidden;transition:all .3s ease}.character-name[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:1.8rem;color:#34f5dd;text-shadow:0 0 20px rgba(52,245,221,.8);margin-bottom:12px;letter-spacing:1px}.health-container[_ngcontent-%COMP%]{margin-bottom:12px}.health-bar-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:32px;background:#00000080;border-radius:16px;overflow:hidden;border:1px solid rgba(52,245,221,.3)}.health-bar[_ngcontent-%COMP%]{height:100%;transition:width .6s cubic-bezier(.4,0,.2,1);position:relative;border-radius:16px}.health-bar.character1[_ngcontent-%COMP%]{background:linear-gradient(90deg,#34f5dde6,#34f5f5,#34f5dde6);box-shadow:0 0 20px #34f5dd99,inset 0 0 10px #ffffff4d}.health-bar.character2[_ngcontent-%COMP%]{background:linear-gradient(90deg,#34d3f5e6,#34f5f5,#34d3f5e6);box-shadow:0 0 20px #34d3f599,inset 0 0 10px #ffffff4d}.health-bar[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,.4) 0%,transparent 100%);border-radius:16px 16px 0 0}.health-text[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700;font-size:1rem;color:#fff;text-shadow:0 0 10px rgba(0,0,0,.9),0 2px 4px rgba(0,0,0,.8);pointer-events:none;z-index:1}.stats-row[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip){background:#34f5dd26!important;border:1px solid rgba(52,245,221,.3)!important;color:#fff!important;font-weight:600;font-size:.95rem;padding:6px 12px;box-shadow:0 0 15px #34f5dd33;transition:all .2s ease}.stats-row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-chip):hover{background:#34f5dd40!important;transform:scale(1.05)}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@keyframes _ngcontent-%COMP%_slideInLeftDramatic{0%{opacity:0;transform:translate(-150px) rotate(-10deg) scale(.5)}70%{transform:translate(10px) rotate(2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@keyframes _ngcontent-%COMP%_slideInRightDramatic{0%{opacity:0;transform:translate(150px) rotate(10deg) scale(.5)}70%{transform:translate(-10px) rotate(-2deg) scale(1.05)}to{opacity:1;transform:translate(0) rotate(0) scale(1)}}@media (max-width: 1024px){.character-card[_ngcontent-%COMP%]{min-width:200px;padding:12px 14px}.character-name[_ngcontent-%COMP%]{font-size:1.4rem}.health-bar-wrapper[_ngcontent-%COMP%]{height:28px}.stats-row[_ngcontent-%COMP%]{gap:6px}}@keyframes _ngcontent-%COMP%_slideInDown{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 500px){[_nghost-%COMP%]{width:100%}.character-status[_ngcontent-%COMP%]{width:100%}.character-status.left[_ngcontent-%COMP%], .character-status.right[_ngcontent-%COMP%]{animation-name:slideInDown}.character-card[_ngcontent-%COMP%]{min-width:unset;width:100%;padding:10px 12px}.character-name[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:8px}.health-bar-wrapper[_ngcontent-%COMP%]{height:24px}.health-text[_ngcontent-%COMP%]{font-size:.75rem}.stats-row[_ngcontent-%COMP%]{gap:4px;flex-wrap:wrap}}@media (max-width: 480px){.character-card[_ngcontent-%COMP%]{padding:8px 10px}.character-name[_ngcontent-%COMP%]{font-size:1rem;margin-bottom:6px}.health-bar-wrapper[_ngcontent-%COMP%]{height:20px}.health-text[_ngcontent-%COMP%]{font-size:.7rem}[_ngcontent-%COMP%]:deep(.p-chip){font-size:.75rem;padding:.25rem .5rem}}']})};var Ya=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=wn({type:r,selectors:[["app-battle-vs-badge"]],decls:3,vars:0,consts:[[1,"vs-badge"],[1,"vs-text"]],template:function(e,n){e&1&&(De(0,"div",0)(1,"div",1),bi(2,"VS"),Le()())},dependencies:[En],styles:[".vs-badge[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:20px;pointer-events:none;filter:drop-shadow(0 0 30px rgba(52,245,221,.8))}.vs-text[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:3rem;font-weight:700;color:#34f5dd;text-shadow:0 0 30px rgb(52,245,221),0 0 60px rgba(52,245,221,.7),0 4px 8px rgba(0,0,0,.8),0 0 100px rgba(52,245,221,.5);letter-spacing:8px;position:relative}@keyframes _ngcontent-%COMP%_vsFloatEnhanced{0%,to{transform:translateY(0) scale(1) rotate(0)}25%{transform:translateY(-15px) scale(1.08) rotate(-2deg)}50%{transform:translateY(-10px) scale(1.15) rotate(0)}75%{transform:translateY(-15px) scale(1.08) rotate(2deg)}}@keyframes _ngcontent-%COMP%_vsPulse{0%,to{filter:brightness(1) contrast(1)}50%{filter:brightness(1.3) contrast(1.2)}}@keyframes _ngcontent-%COMP%_glitchEffect{0%,90%,to{transform:translate(0);opacity:0}92%{transform:translate(-2px,2px);opacity:.6}94%{transform:translate(2px,-2px);opacity:.6}96%{transform:translate(-2px,-2px);opacity:.6}}@media (max-width: 1024px){.vs-text[_ngcontent-%COMP%]{font-size:2.2rem;letter-spacing:4px}}@media (max-width: 500px){.vs-badge[_ngcontent-%COMP%]{display:none}.vs-text[_ngcontent-%COMP%]{font-size:1.8rem;letter-spacing:3px}}@media (max-width: 480px){.vs-text[_ngcontent-%COMP%]{font-size:1.5rem;letter-spacing:2px}}"]})};var Za=class r{winner;static \u0275fac=function(e){return new(e||r)};static \u0275cmp=wn({type:r,selectors:[["app-victory-banner"]],inputs:{winner:"winner"},decls:8,vars:4,consts:[[1,"victory-overlay"],[1,"victory-content","glass-panel"],[1,"victory-title"],[1,"victory-subtitle"],[1,"victory-particles"]],template:function(e,n){e&1&&(De(0,"div",0)(1,"div",1)(2,"h1",2),bi(3),Le(),De(4,"p",3),bi(5),Ti(6,"translate"),Le(),Ln(7,"div",4),Le()()),e&2&&(Ie(3),Rs(n.winner),Ie(2),Rs(wi(6,2,"VICTORY!")))},dependencies:[En,ka,za],styles:['.victory-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:100;overflow:hidden}.victory-content[_ngcontent-%COMP%]{text-align:center;padding:clamp(30px,8vw,80px) clamp(20px,10vw,100px);position:relative;z-index:1;border:3px solid;border-image:linear-gradient(135deg,#34f5ddcc,#34f5dd66,#34f5dd1a,#34f5dd66,#34f5ddcc) 1;box-shadow:0 0 60px #34f5dd66,inset 0 0 80px #34f5dd0d,0 20px 60px #0009;max-width:90vw}.victory-content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-2px;background:linear-gradient(135deg,rgba(52,245,221,.1) 0%,transparent 30%,transparent 70%,rgba(52,245,221,.1) 100%);z-index:-1;border-radius:8px}.victory-content[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:10px;border:1px solid rgba(52,245,221,.2);border-radius:4px;pointer-events:none}.victory-title[_ngcontent-%COMP%]{font-family:New Rocker,cursive;font-size:clamp(1.5rem,5vw + 1rem,5rem);font-weight:700;color:#fff;margin:20px 0;letter-spacing:clamp(2px,.5vw,12px);text-transform:uppercase;position:relative;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;max-width:100%;background:linear-gradient(180deg,#fff,#34f5dd 40%,#fff 60%,#34f5dd);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.victory-subtitle[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw + .5rem,2.2rem);color:#34f5dd;font-weight:800;letter-spacing:clamp(4px,1vw,16px);text-transform:uppercase;text-shadow:0 0 25px rgba(52,245,221,.8),0 0 50px rgba(52,245,221,.5),0 2px 10px rgba(0,0,0,.8);margin-top:10px;padding-top:clamp(10px,2vw,20px);border-top:2px solid rgba(52,245,221,.3)}.glass-panel[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0f0f19e6,#191923d9),radial-gradient(ellipse at center,rgba(52,245,221,.08) 0%,transparent 70%);border-radius:8px}@media (max-width: 768px){.victory-content[_ngcontent-%COMP%]{border-width:2px}.victory-content[_ngcontent-%COMP%]:after{inset:5px}.victory-title[_ngcontent-%COMP%]{margin:15px 0}}@media (max-width: 1024px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(2rem,4vw + .5rem,2.8rem)}}@media (max-width: 500px){.victory-content[_ngcontent-%COMP%]{padding:clamp(20px,5vw,30px) clamp(15px,4vw,20px);max-width:95vw}.victory-title[_ngcontent-%COMP%]{margin:10px 0;letter-spacing:clamp(1px,.3vw,4px)}.victory-subtitle[_ngcontent-%COMP%]{letter-spacing:clamp(2px,.5vw,8px);padding-top:clamp(8px,1.5vw,15px)}.victory-icon[_ngcontent-%COMP%]{font-size:3rem}}@media (max-width: 480px){.victory-title[_ngcontent-%COMP%]{font-size:clamp(1.2rem,4vw,1.5rem)}.victory-icon[_ngcontent-%COMP%]{font-size:2.5rem}.victory-content[_ngcontent-%COMP%]{padding:15px 10px}}']})};function em(r,t){if(r&1){let e=Sc();De(0,"p-button",4),Ti(1,"translate"),As("onClick",function(){xc(e);let i=Cs();return vc(i.onStartBattle())}),Le()}r&2&&qn("label",wi(1,1,"Release the Spiders!"))}function nm(r,t){if(r&1){let e=Sc();De(0,"p-button",5),Ti(1,"translate"),As("onClick",function(){xc(e);let i=Cs();return vc(i.onTerminateBattle())}),Le()}r&2&&qn("label",wi(1,1,"Terminate"))}var Ja=class r{isBattleActive=!1;startBattle=new yc;terminateBattle=new yc;onStartBattle(){this.startBattle.emit()}onTerminateBattle(){this.terminateBattle.emit()}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=wn({type:r,selectors:[["app-battle-controls"]],inputs:{isBattleActive:"isBattleActive"},outputs:{startBattle:"startBattle",terminateBattle:"terminateBattle"},decls:4,vars:2,consts:[[1,"control-panel","glass-panel"],[1,"control-buttons"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"label","onClick",4,"ngIf"],["icon","pi pi-times","severity","secondary","size","large","styleClass","battle-btn reset-btn",3,"label","onClick",4,"ngIf"],["icon","pi pi-play","severity","success","size","large","styleClass","battle-btn start-btn",3,"onClick","label"],["icon","pi pi-times","severity","secondary","size","large","styleClass","battle-btn reset-btn",3,"onClick","label"]],template:function(e,n){e&1&&(De(0,"div",0)(1,"div",1),Es(2,em,2,3,"p-button",2)(3,nm,2,3,"p-button",3),Le()()),e&2&&(Ie(2),qn("ngIf",!n.isBattleActive),Ie(),qn("ngIf",n.isBattleActive))},dependencies:[En,ju,nd,ed,ka,za],styles:[".control-panel[_ngcontent-%COMP%]{padding:20px 24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}.control-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;gap:12px;flex-wrap:wrap}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){font-weight:600;font-size:1.1rem;padding:12px 28px;border-radius:8px;transition:all .3s ease}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):not(:disabled):hover{transform:translateY(-2px);box-shadow:0 8px 25px #34f5dd66}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button):disabled{opacity:.5}.glass-panel[_ngcontent-%COMP%]{border-radius:12px;transition:all .3s ease}@media (max-width: 500px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;padding:12px}.control-buttons[_ngcontent-%COMP%]{justify-content:center;width:100%;flex-direction:column;gap:10px}.control-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:deep(.p-button){width:100%;min-width:unset}}@media (max-width: 480px){.control-buttons[_ngcontent-%COMP%]{gap:8px}[_ngcontent-%COMP%]:deep(.p-button){font-size:.9rem;padding:.6rem 1rem}}"]})};var Xo="182";var Cd=0,ah=1,Rd=2;var sa=1,qo=2,as=3,di=0,ze=1,Ee=2,$n=0,lr=1,_r=2,oh=3,lh=4,Pd=5,Li=100,Id=101,Dd=102,Ld=103,Fd=104,Nd=200,Ud=201,Od=202,Bd=203,yo=204,Mo=205,zd=206,kd=207,Vd=208,Gd=209,Hd=210,Wd=211,Xd=212,qd=213,Yd=214,Yo=0,Zo=1,Jo=2,cr=3,$o=4,Ko=5,jo=6,Qo=7,tl=0,Zd=1,Jd=2,Vn=0,ch=1,hh=2,uh=3,aa=4,dh=5,fh=6,ph=7;var Jc=300,Gi=301,xr=302,el=303,nl=304,oa=306,So=1e3,Zn=1001,bo=1002,Ue=1003,$d=1004;var la=1005;var Be=1006,il=1007;var Hi=1008;var rn=1009,mh=1010,gh=1011,os=1012,rl=1013,Gn=1014,Hn=1015,Kn=1016,sl=1017,al=1018,ls=1020,_h=35902,xh=35899,vh=1021,yh=1022,Rn=1023,Jn=1026,Wi=1027,Mh=1028,ol=1029,vr=1030,ll=1031;var cl=1033,ca=33776,ha=33777,ua=33778,da=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,_l=37488,xl=37489,vl=37490,yl=37491,Ml=37808,Sl=37809,bl=37810,Tl=37811,wl=37812,El=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Il=37818,Dl=37819,Ll=37820,Fl=37821,Nl=36492,Ul=36494,Ol=36495,Bl=36283,zl=36284,kl=36285,Vl=36286;var Os=2300,To=2301,vo=2302,$c=2400,Kc=2401,jc=2402;var Kd=3200;var Gl=0,jd=1,_i="",pn="srgb",hr="srgb-linear",Bs="linear",Kt="srgb";var or=7680;var Qc=519,Qd=512,tf=513,ef=514,Hl=515,nf=516,rf=517,Wl=518,sf=519,th=35044;var Sh="300 es",Bn=2e3,zs=2001;function bh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function im(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function af(){let r=ks("canvas");return r.style.display="block",r}var sd={},Jr=null;function Th(...r){let t="THREE."+r.shift();Jr?Jr("log",t,...r):console.log(t,...r)}function It(...r){let t="THREE."+r.shift();Jr?Jr("warn",t,...r):console.warn(t,...r)}function Pt(...r){let t="THREE."+r.shift();Jr?Jr("error",t,...r):console.error(t,...r)}function $r(...r){let t=r.join(" ");t in sd||(sd[t]=!0,It(...r))}function of(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tc=Math.PI/180,Vs=180/Math.PI;function fa(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[r&255]+He[r>>8&255]+He[r>>16&255]+He[r>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Wt(r,t,e){return Math.max(t,Math.min(e,r))}function rm(r,t){return(r%t+t)%t}function wc(r,t,e){return(1-e)*r+e*t}function Is(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Gt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==m||h!==_){let p=l*d+c*m+h*_+u*g;p<0&&(d=-d,m=-m,_=-_,g=-g,p=-p);let f=1-o;if(p<.9995){let v=Math.acos(p),M=Math.sin(v);f=Math.sin(f*v)/M,o=Math.sin(o*v)/M,l=l*f+d*o,c=c*f+m*o,h=h*f+_*o,u=u*f+g*o}else{l=l*f+d*o,c=c*f+m*o,h=h*f+_*o,u=u*f+g*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*m-c*d,t[e+1]=l*_+h*d+c*u-o*m,t[e+2]=c*_+h*m+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u+d*m*_;break;case"YZX":this._x=d*h*u+c*m*_,this._y=c*m*u+d*h*_,this._z=c*h*_-d*m*u,this._w=c*h*u-d*m*_;break;case"XZY":this._x=d*h*u-c*m*_,this._y=c*m*u-d*h*_,this._z=c*h*_+d*m*u,this._w=c*h*u+d*m*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ad.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ad.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new O,ad=new pi,Ot=class r{constructor(t,e,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],g=i[0],p=i[3],f=i[6],v=i[1],M=i[4],S=i[7],b=i[2],w=i[5],A=i[8];return s[0]=a*g+o*v+l*b,s[3]=a*p+o*M+l*w,s[6]=a*f+o*S+l*A,s[1]=c*g+h*v+u*b,s[4]=c*p+h*M+u*w,s[7]=c*f+h*S+u*A,s[2]=d*g+m*v+_*b,s[5]=d*p+m*M+_*w,s[8]=d*f+m*S+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=m*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ac.makeScale(t,e)),this}rotate(t){return this.premultiply(Ac.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ac.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ac=new Ot,od=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){let r={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Kt&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(i.r=Zr(i.r),i.g=Zr(i.g),i.b=Zr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Bs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[hr]:{primaries:t,whitePoint:n,transfer:Bs,toXYZ:od,fromXYZ:ld,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:od,fromXYZ:ld,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),r}var qt=sm();function ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ur,wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ur===void 0&&(Ur=ks("canvas")),Ur.width=t.width,Ur.height=t.height;let i=Ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ur}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},am=0,Kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=fa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Cc(i[a].image)):s.push(Cc(i[a]))}else s=Cc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Cc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var om=0,Rc=new O,jn=(()=>{class r extends fi{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=Zn,s=Zn,a=Be,o=Hi,l=Rn,c=rn,h=r.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=fa(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){It(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){It(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=Jc,r.DEFAULT_ANISOTROPY=1,r})(),fe=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,S=(m+1)/2,b=(f+1)/2,w=(h+d)/4,A=(u+g)/4,R=(_+p)/4;return M>S&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=R/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new jn(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Kr(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Eo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(t.matrixWorld),this.union($a)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Ka.subVectors(this.max,Ds),Or.subVectors(t.a,Ds),Br.subVectors(t.b,Ds),zr.subVectors(t.c,Ds),Ei.subVectors(Br,Or),Ai.subVectors(zr,Br),ir.subVectors(Or,zr);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-ir.z,ir.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,ir.z,0,-ir.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-ir.y,ir.x,0];return!Pc(e,Or,Br,zr,Ka)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,Or,Br,zr,Ka))?!1:(ja.crossVectors(Ei,Ai),e=[ja.x,ja.y,ja.z],Pc(e,Or,Br,zr,Ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ai=[new O,new O,new O,new O,new O,new O,new O,new O],Nn=new O,$a=new Fi,Or=new O,Br=new O,zr=new O,Ei=new O,Ai=new O,ir=new O,Ds=new O,Ka=new O,ja=new O,rr=new O;function Pc(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rr.fromArray(r,s);let o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=t.dot(rr),c=e.dot(rr),h=n.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var lm=new Fi,Ls=new O,Ic=new O,Ni=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Ic)),this.expandByPoint(Ls.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},oi=new O,Dc=new O,Qa=new O,Ci=new O,Lc=new O,to=new O,Fc=new O,jr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dc.copy(t).add(e).multiplyScalar(.5),Qa.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Dc);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Qa),o=Ci.dot(this.direction),l=-Ci.dot(Qa),c=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,m,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Dc).addScaledVector(Qa,d),m}intersectSphere(t,e){oi.subVectors(t.center,this.origin);let n=oi.dot(this.direction),i=oi.dot(oi)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,i,s){Lc.subVectors(e,t),to.subVectors(n,t),Fc.crossVectors(Lc,to);let a=this.direction.dot(Fc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,t);let l=o*this.direction.dot(to.crossVectors(Ci,to));if(l<0)return null;let c=o*this.direction.dot(Lc.cross(Ci));if(c<0||l+c>a)return null;let h=-o*Ci.dot(Fc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class r{constructor(t,e,n,i,s,a,o,l,c,h,u,d,m,_,g,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,m,_,g,p)}set(t,e,n,i,s,a,o,l,c,h,u,d,m,_,g,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,i=1/kr.setFromMatrixColumn(t,0).length(),s=1/kr.setFromMatrixColumn(t,1).length(),a=1/kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,m=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){let i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ri.crossVectors(n,dn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ri.crossVectors(n,dn)),Ri.normalize(),eo.crossVectors(dn,Ri),i[0]=Ri.x,i[4]=eo.x,i[8]=dn.x,i[1]=Ri.y,i[5]=eo.y,i[9]=dn.y,i[2]=Ri.z,i[6]=eo.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],v=n[3],M=n[7],S=n[11],b=n[15],w=i[0],A=i[4],R=i[8],x=i[12],T=i[1],P=i[5],D=i[9],F=i[13],V=i[2],H=i[6],k=i[10],B=i[14],Y=i[3],nt=i[7],et=i[11],ot=i[15];return s[0]=a*w+o*T+l*V+c*Y,s[4]=a*A+o*P+l*H+c*nt,s[8]=a*R+o*D+l*k+c*et,s[12]=a*x+o*F+l*B+c*ot,s[1]=h*w+u*T+d*V+m*Y,s[5]=h*A+u*P+d*H+m*nt,s[9]=h*R+u*D+d*k+m*et,s[13]=h*x+u*F+d*B+m*ot,s[2]=_*w+g*T+p*V+f*Y,s[6]=_*A+g*P+p*H+f*nt,s[10]=_*R+g*D+p*k+f*et,s[14]=_*x+g*F+p*B+f*ot,s[3]=v*w+M*T+S*V+b*Y,s[7]=v*A+M*P+S*H+b*nt,s[11]=v*R+M*D+S*k+b*et,s[15]=v*x+M*F+S*B+b*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],f=t[15],v=l*m-c*d,M=o*m-c*u,S=o*d-l*u,b=a*m-c*h,w=a*d-l*h,A=a*u-o*h;return e*(g*v-p*M+f*S)-n*(_*v-p*b+f*w)+i*(_*M-g*b+f*A)-s*(_*S-g*w+p*A)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],f=t[15],v=u*p*c-g*d*c+g*l*m-o*p*m-u*l*f+o*d*f,M=_*d*c-h*p*c-_*l*m+a*p*m+h*l*f-a*d*f,S=h*g*c-_*u*c+_*o*m-a*g*m-h*o*f+a*u*f,b=_*u*l-h*g*l-_*o*d+a*g*d+h*o*p-a*u*p,w=e*v+n*M+i*S+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=v*A,t[1]=(g*d*s-u*p*s-g*i*m+n*p*m+u*i*f-n*d*f)*A,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*f+n*l*f)*A,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*m-n*l*m)*A,t[4]=M*A,t[5]=(h*p*s-_*d*s+_*i*m-e*p*m-h*i*f+e*d*f)*A,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*f-e*l*f)*A,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*m+e*l*m)*A,t[8]=S*A,t[9]=(_*u*s-h*g*s-_*n*m+e*g*m+h*n*f-e*u*f)*A,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*f+e*o*f)*A,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*m-e*o*m)*A,t[12]=b*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*p+e*u*p)*A,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,_=s*u,g=a*h,p=a*u,f=o*u,v=l*c,M=l*h,S=l*u,b=n.x,w=n.y,A=n.z;return i[0]=(1-(g+f))*b,i[1]=(m+S)*b,i[2]=(_-M)*b,i[3]=0,i[4]=(m-S)*w,i[5]=(1-(d+f))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(_+M)*A,i[9]=(p-v)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=kr.set(i[0],i[1],i[2]).length(),a=kr.set(i[4],i[5],i[6]).length(),o=kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Un.copy(this);let c=1/s,h=1/a,u=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Bn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),m=(n+i)/(n-i),_,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Bn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===zs)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Bn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),m=-(n+i)/(n-i),_,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Bn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===zs)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},kr=new O,Un=new he,cm=new O(0,0,0),hm=new O(1,1,1),Ri=new O,eo=new O,dn=new O,cd=new he,hd=new pi,mi=(()=>{class r{constructor(e=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,a=s[0],o=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],m=s[6],_=s[10];switch(n){case"XYZ":this._y=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,_),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),Hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,ud=new O,Vr=new pi,li=new he,no=new O,Fs=new O,dm=new O,fm=new pi,dd=new O(1,0,0),fd=new O(0,1,0),pd=new O(0,0,1),md={type:"added"},pm={type:"removed"},Gr={type:"childadded",child:null},Nc={type:"childremoved",child:null},tn=(()=>{class r extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new O,n=new mi,i=new pi,s=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ot}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,n){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?no.copy(e):no.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Fs,no,this.up):li.lookAt(no,Fs,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Vr.setFromRotationMatrix(li),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(md),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pm),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(md),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>La(Xn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Xn({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(a(e.animations,c))}}if(n){let l=o(e.geometries),c=o(e.materials),h=o(e.textures),u=o(e.images),d=o(e.shapes),m=o(e.skeletons),_=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new O(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),On=new O,ci=new O,Uc=new O,hi=new O,Hr=new O,Wr=new O,gd=new O,Oc=new O,Bc=new O,zc=new O,kc=new fe,Vc=new fe,Gc=new fe,Di=class r{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),On.subVectors(t,e),i.cross(On);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){On.subVectors(i,e),ci.subVectors(n,e),Uc.subVectors(t,e);let a=On.dot(On),o=On.dot(ci),l=On.dot(Uc),c=ci.dot(ci),h=ci.dot(Uc),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return kc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),kc.fromBufferAttribute(t,e),Vc.fromBufferAttribute(t,n),Gc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(kc,s.x),a.addScaledVector(Vc,s.y),a.addScaledVector(Gc,s.z),a}static isFrontFacing(t,e,n,i){return On.subVectors(n,e),ci.subVectors(t,e),On.cross(ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),On.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;Hr.subVectors(i,n),Wr.subVectors(s,n),Oc.subVectors(t,n);let l=Hr.dot(Oc),c=Wr.dot(Oc);if(l<=0&&c<=0)return e.copy(n);Bc.subVectors(t,i);let h=Hr.dot(Bc),u=Wr.dot(Bc);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Hr,a);zc.subVectors(t,s);let m=Hr.dot(zc),_=Wr.dot(zc);if(_>=0&&m<=_)return e.copy(s);let g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Wr,o);let p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return gd.subVectors(s,i),o=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(gd,o);let f=1/(p+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Hr,a).addScaledVector(Wr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Hc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=rm(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Hc(a,s,t+1/3),this.g=Hc(a,s,t),this.b=Hc(a,s,t-1/3)}return qt.colorSpaceToWorking(this,i),this}setStyle(t,e=pn){function n(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return qt.workingToColorSpace(We.copy(this),t),Math.round(Wt(We.r*255,0,255))*65536+Math.round(Wt(We.g*255,0,255))*256+Math.round(Wt(We.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(We.copy(this),e);let n=We.r,i=We.g,s=We.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=pn){qt.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,i=We.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(io);let n=wc(Pi.h,io.h,e),i=wc(Pi.s,io.s,e),s=wc(Pi.l,io.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Lt;Lt.NAMES=lf;var mm=0,zn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=lr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},en=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new O,ro=new Gt,gm=0,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}};var Ws=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xs=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},_m=0,An=new he,Wc=new tn,Xr=new O,fn=new Fi,Ns=new Fi,Fe=new O,ue=class r extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?Xs:Ws)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Wc.lookAt(t),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(fn.min,Ns.min),fn.expandByPoint(Fe),Fe.addVectors(fn.max,Ns.max),fn.expandByPoint(Fe)):(fn.expandByPoint(Ns.min),fn.expandByPoint(Ns.max))}fn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(t,c),Fe.add(Xr)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new O,l[R]=new O;let c=new O,h=new O,u=new O,d=new Gt,m=new Gt,_=new Gt,g=new O,p=new O;function f(R,x,T){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,x),_.fromBufferAttribute(s,T),h.sub(c),u.sub(c),m.sub(d),_.sub(d);let P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[x].add(g),o[T].add(g),l[R].add(p),l[x].add(p),l[T].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,x=v.length;R<x;++R){let T=v[R],P=T.start,D=T.count;for(let F=P,V=P+D;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new O,S=new O,b=new O,w=new O;function A(R){b.fromBufferAttribute(i,R),w.copy(b);let x=o[R];M.copy(x),M.sub(b.multiplyScalar(b.dot(x))).normalize(),S.crossVectors(w,x);let P=S.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,x=v.length;R<x;++R){let T=v[R],P=T.start,D=T.count;for(let F=P,V=P+D;F<V;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[m++]}return new Oe(d,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_d=new he,sr=new jr,so=new Ni,xd=new O,ao=new O,oo=new O,lo=new O,Xc=new O,co=new O,vd=new O,ho=new O,Ht=class extends tn{constructor(t=new ue,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Xc.fromBufferAttribute(u,t),a?co.addScaledVector(Xc,h):co.addScaledVector(Xc.sub(e),h))}e.add(co)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),sr.copy(t.ray).recast(t.near),!(so.containsPoint(sr.origin)===!1&&(sr.intersectSphere(so,xd)===null||sr.origin.distanceToSquared(xd)>(t.far-t.near)**2))&&(_d.copy(s).invert(),sr.copy(t.ray).applyMatrix4(_d),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let p=d[_],f=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,b=M;S<b;S+=3){let w=o.getX(S),A=o.getX(S+1),R=o.getX(S+2);i=uo(this,f,t,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){let v=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);i=uo(this,a,t,n,c,h,u,v,M,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let p=d[_],f=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,b=M;S<b;S+=3){let w=S,A=S+1,R=S+2;i=uo(this,f,t,n,c,h,u,w,A,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){let v=p,M=p+1,S=p+2;i=uo(this,a,t,n,c,h,u,v,M,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function xm(r,t,e,n,i,s,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===di,o),l===null)return null;ho.copy(o),ho.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:r}}function uo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,ao),r.getVertexPosition(l,oo),r.getVertexPosition(c,lo);let h=xm(r,t,e,n,ao,oo,lo,vd);if(h){let u=new O;Di.getBarycoord(vd,ao,oo,lo,u),i&&(h.uv=Di.getInterpolatedAttribute(i,o,l,c,u,new Gt)),s&&(h.uv1=Di.getInterpolatedAttribute(s,o,l,c,u,new Gt)),a&&(h.normal=Di.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};Di.getNormal(ao,oo,lo,d.normal),h.face=d,h.barycoord=u}return h}var Qr=class r extends ue{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function _(g,p,f,v,M,S,b,w,A,R,x){let T=S/A,P=b/R,D=S/2,F=b/2,V=w/2,H=A+1,k=R+1,B=0,Y=0,nt=new O;for(let et=0;et<k;et++){let ot=et*P-F;for(let dt=0;dt<H;dt++){let Et=dt*T-D;nt[g]=Et*v,nt[p]=ot*M,nt[f]=V,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[p]=0,nt[f]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(dt/A),u.push(1-et/R),B+=1}}for(let et=0;et<R;et++)for(let ot=0;ot<A;ot++){let dt=d+ot+H*et,Et=d+ot+H*(et+1),xt=d+(ot+1)+H*(et+1),wt=d+(ot+1)+H*et;l.push(dt,Et,wt),l.push(Et,xt,wt),Y+=6}o.addGroup(m,Y,x),m+=Y,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yr(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(r){let t={};for(let e=0;e<r.length;e++){let n=yr(r[e]);for(let i in n)t[i]=n[i]}return t}function vm(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function wh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var cf={clone:yr,merge:Xe},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qs=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new O,yd=new Gt,Md=new Gt,Ne=class extends qs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,yd,Md),e.subVectors(Md,yd)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qr=-90,Yr=1,Co=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(qr,Yr,t,e);i.layers=this.layers,this.add(i);let s=new Ne(qr,Yr,t,e);s.layers=this.layers,this.add(s);let a=new Ne(qr,Yr,t,e);a.layers=this.layers,this.add(a);let o=new Ne(qr,Yr,t,e);o.layers=this.layers,this.add(o);let l=new Ne(qr,Yr,t,e);l.layers=this.layers,this.add(l);let c=new Ne(qr,Yr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ys=class extends jn{constructor(t=[],e=Gi,n,i,s,a,o,l,c,h){super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zs=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ys(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qr(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:$n});s.uniforms.tEquirect.value=e;let a=new Ht(i,s),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Be),new Co(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},Cn=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let p=e.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},es=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Js=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ro=class extends jn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=Ue,h=Ue,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qc=new O,bm=new O,Tm=new Ot,Yn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=qc.subVectors(n,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tm.getNormalMatrix(t),i=this.coplanarPoint(qc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new Ni,wm=new Gt(.5,.5),fo=new O,ns=class{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,s=new Yn,a=new Yn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],m=s[7],_=s[8],g=s[9],p=s[10],f=s[11],v=s[12],M=s[13],S=s[14],b=s[15];if(i[0].setComponents(c-a,m-h,f-_,b-v).normalize(),i[1].setComponents(c+a,m+h,f+_,b+v).normalize(),i[2].setComponents(c+o,m+u,f+g,b+M).normalize(),i[3].setComponents(c-o,m-u,f-g,b-M).normalize(),n)i[4].setComponents(l,d,p,S).normalize(),i[5].setComponents(c-l,m-d,f-p,b-S).normalize();else if(i[4].setComponents(c-l,m-d,f-p,b-S).normalize(),e===Bn)i[5].setComponents(c+l,m+d,f+p,b+S).normalize();else if(e===zs)i[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);let e=wm.distanceTo(t.center);return ar.radius=.7071067811865476+e,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(fo.x=i.normal.x>0?t.max.x:t.min.x,fo.y=i.normal.y>0?t.max.y:t.min.y,fo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Po=new O,Io=new O,Sd=new he,Us=new jr,po=new Ni,Yc=new O,bd=new O,ur=class extends tn{constructor(t=new ue,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Po.fromBufferAttribute(e,i-1),Io.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Io);t.setAttribute("lineDistance",new ne(n,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=s,t.ray.intersectsSphere(po)===!1)return;Sd.copy(i).invert(),Us.copy(t.ray).applyMatrix4(Sd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){let f=h.getX(g),v=h.getX(g+1),M=mo(this,t,Us,l,f,v,g);M&&e.push(M)}if(this.isLineLoop){let g=h.getX(_-1),p=h.getX(m),f=mo(this,t,Us,l,g,p,_-1);f&&e.push(f)}}else{let m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){let f=mo(this,t,Us,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){let g=mo(this,t,Us,l,_-1,m,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function mo(r,t,e,n,i,s,a){let o=r.geometry.attributes.position;if(Po.fromBufferAttribute(o,i),Io.fromBufferAttribute(o,s),e.distanceSqToSegment(Po,Io,Yc,bd)>n)return;Yc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Yc);if(!(c<t.near||c>t.far))return{distance:c,point:bd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Oi=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Td=new he,eh=new jr,go=new Ni,_o=new O,dr=class extends tn{constructor(t=new ue,e=new Oi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=s,t.ray.intersectsSphere(go)===!1)return;Td.copy(i).invert(),eh.copy(t.ray).applyMatrix4(Td);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,g=m;_<g;_++){let p=c.getX(_);_o.fromBufferAttribute(u,p),wd(_o,p,l,i,t,e,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,g=m;_<g;_++)_o.fromBufferAttribute(u,_),wd(_o,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function wd(r,t,e,n,i,s,a){let o=eh.distanceSqToPoint(r);if(o<e){let l=new O;eh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $s=class extends jn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bi=class extends jn{constructor(t,e,n=Gn,i,s,a,o=Ue,l=Ue,c,h=Jn,u=1){if(h!==Jn&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Do=class extends Bi{constructor(t,e=Gn,n=Gi,i,s,a=Ue,o=Ue,l,c=Jn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ks=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var nn=class r extends ue{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],m=[],_=0,g=[],p=n/2,f=0;v(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(m,2));function v(){let S=new O,b=new O,w=0,A=(e-t)/n;for(let R=0;R<=s;R++){let x=[],T=R/s,P=T*(e-t)+t;for(let D=0;D<=i;D++){let F=D/i,V=F*l+o,H=Math.sin(V),k=Math.cos(V);b.x=P*H,b.y=-T*n+p,b.z=P*k,u.push(b.x,b.y,b.z),S.set(H,A,k).normalize(),d.push(S.x,S.y,S.z),m.push(F,1-T),x.push(_++)}g.push(x)}for(let R=0;R<i;R++)for(let x=0;x<s;x++){let T=g[x][R],P=g[x+1][R],D=g[x+1][R+1],F=g[x][R+1];(t>0||x!==0)&&(h.push(T,P,F),w+=3),(e>0||x!==s-1)&&(h.push(P,D,F),w+=3)}c.addGroup(f,w,0),f+=w}function M(S){let b=_,w=new Gt,A=new O,R=0,x=S===!0?t:e,T=S===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,p*T,0),d.push(0,T,0),m.push(.5,.5),_++;let P=_;for(let D=0;D<=i;D++){let V=D/i*l+o,H=Math.cos(V),k=Math.sin(V);A.x=x*k,A.y=p*T,A.z=x*H,u.push(A.x,A.y,A.z),d.push(0,T,0),w.x=H*.5+.5,w.y=k*.5*T+.5,m.push(w.x,w.y),_++}for(let D=0;D<i;D++){let F=b+D,V=P+D;S===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}c.addGroup(f,R,S===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},js=class r extends nn{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lo=class r extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(s.slice(),3)),this.setAttribute("uv",new ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new O,S=new O,b=new O;for(let w=0;w<e.length;w+=3)m(e[w+0],M),m(e[w+1],S),m(e[w+2],b),l(M,S,b,v)}function l(v,M,S,b){let w=b+1,A=[];for(let R=0;R<=w;R++){A[R]=[];let x=v.clone().lerp(S,R/w),T=M.clone().lerp(S,R/w),P=w-R;for(let D=0;D<=P;D++)D===0&&R===w?A[R][D]=x:A[R][D]=x.clone().lerp(T,D/P)}for(let R=0;R<w;R++)for(let x=0;x<2*(w-R)-1;x++){let T=Math.floor(x/2);x%2===0?(d(A[R][T+1]),d(A[R+1][T]),d(A[R][T])):(d(A[R][T+1]),d(A[R+1][T+1]),d(A[R+1][T]))}}function c(v){let M=new O;for(let S=0;S<s.length;S+=3)M.x=s[S+0],M.y=s[S+1],M.z=s[S+2],M.normalize().multiplyScalar(v),s[S+0]=M.x,s[S+1]=M.y,s[S+2]=M.z}function h(){let v=new O;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let S=p(v)/2/Math.PI+.5,b=f(v)/Math.PI+.5;a.push(S,1-b)}_(),u()}function u(){for(let v=0;v<a.length;v+=6){let M=a[v+0],S=a[v+2],b=a[v+4],w=Math.max(M,S,b),A=Math.min(M,S,b);w>.9&&A<.1&&(M<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function m(v,M){let S=v*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function _(){let v=new O,M=new O,S=new O,b=new O,w=new Gt,A=new Gt,R=new Gt;for(let x=0,T=0;x<s.length;x+=9,T+=6){v.set(s[x+0],s[x+1],s[x+2]),M.set(s[x+3],s[x+4],s[x+5]),S.set(s[x+6],s[x+7],s[x+8]),w.set(a[T+0],a[T+1]),A.set(a[T+2],a[T+3]),R.set(a[T+4],a[T+5]),b.copy(v).add(M).add(S).divideScalar(3);let P=p(b);g(w,T+0,v,P),g(A,T+2,M,P),g(R,T+4,S,P)}}function g(v,M,S,b){b<0&&v.x===1&&(a[M]=v.x-1),S.x===0&&S.z===0&&(a[M]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var is=class r extends Lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var zi=class r extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,m=[],_=[],g=[],p=[];for(let f=0;f<h;f++){let v=f*d-a;for(let M=0;M<c;M++){let S=M*u-s;_.push(S,-v,0),g.push(0,0,1),p.push(M/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){let M=v+c*f,S=v+c*(f+1),b=v+1+c*(f+1),w=v+1+c*f;m.push(M,S,w),m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},fr=class r extends ue{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,m=new O,_=new Gt;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){let f=s+p/n*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){let p=g*(n+1);for(let f=0;f<n;f++){let v=f+p,M=v,S=v+n+1,b=v+n+2,w=v+1;o.push(M,S,w),o.push(S,b,w)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var gi=class r extends ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,d=new O,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){let v=[],M=f/n,S=0;f===0&&a===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){let w=b/e;u.x=-t*Math.cos(i+w*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(i+w*s)*Math.sin(a+M*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(w+S,1-M),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let M=h[f][v+1],S=h[f][v],b=h[f+1][v],w=h[f+1][v+1];(f!==0||a>0)&&m.push(M,S,w),(f!==n-1||l<Math.PI)&&m.push(S,b,w)}this.setIndex(m),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qs=class r extends ue{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new O,u=new O,d=new O;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){let g=_/i*s,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(g),u.y=(t+e*Math.cos(p))*Math.sin(g),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){let g=(i+1)*m+_-1,p=(i+1)*(m-1)+_-1,f=(i+1)*(m-1)+_,v=(i+1)*m+_;a.push(g,p,v),a.push(p,f,v)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fo=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pr=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var rs=class extends zn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gl,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var No=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Uo=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}var mr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oo=class extends mr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kc:s=t,o=2*e-n;break;case jc:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kc:a=t,l=2*n-e;break;case jc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-e)/(i-e),g=_*_,p=g*_,f=-d*p+2*d*g-d*_,v=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-m)*p+(1.5+m)*g+.5*_,S=m*p-m*g;for(let b=0;b!==o;++b)s[b]=f*a[h+b]+v*a[c+b]+M*a[l+b]+S*a[u+b];return s}},Bo=class extends mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},zo=class extends mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xo(e,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xo(t.times,Array),values:xo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&im(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vo,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,m=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[u+m]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=To;var ki=class extends _n{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Os;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};ko.prototype.ValueTypeName="color";var Vo=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};Vo.prototype.ValueTypeName="number";var Go=class extends mr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)pi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ta=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends _n{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Os;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};Ho.prototype.ValueTypeName="vector";var gr=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Zc=new he,Ed=new O,Ad=new O,ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),Ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ad),e.updateMatrixWorld(),Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nh=class extends ea{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Vs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},na=class extends gr{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new nh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},ih=class extends ea{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},kn=class extends gr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ih}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ss=class extends qs{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rh=class extends ea{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ra=class extends gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wo=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Eh="\\[\\]\\.:\\/",Em=new RegExp("["+Eh+"]","g"),Ah="[^"+Eh+"]",Am="[^"+Eh.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",Ah),Rm=/(WCOD+)?/.source.replace("WCOD",Am),Pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),Dm=new RegExp("^"+Cm+Rm+Pm+Im+"$"),Lm=["material","materials","bones","map"],sh=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=(()=>{class r{constructor(e,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,n,i):new r(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(e){let n=Dm.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Lm.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(e||(e=r.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!e.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[s];if(o===void 0){let h=n.nodeName;Pt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=sh,r})();ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var XM=new Float32Array(1);function Ch(r,t,e,n){let i=Fm(n);switch(e){case vh:return r*t;case Mh:return r*t/i.components*i.byteLength;case ol:return r*t/i.components*i.byteLength;case vr:return r*t*2/i.components*i.byteLength;case ll:return r*t*2/i.components*i.byteLength;case yh:return r*t*3/i.components*i.byteLength;case Rn:return r*t*4/i.components*i.byteLength;case cl:return r*t*4/i.components*i.byteLength;case ca:case ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ul:case fl:return Math.max(r,16)*Math.max(t,8)/4;case hl:case dl:return Math.max(r,8)*Math.max(t,8)/2;case pl:case ml:case _l:case xl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gl:case vl:case yl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Ul:case Ol:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Bl:case zl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case kl:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(r){switch(r){case rn:case mh:return{byteLength:1,components:1};case os:case gh:case Kn:return{byteLength:2,components:1};case sl:case al:return{byteLength:2,components:4};case Gn:case rl:case Hn:return{byteLength:4,components:1};case _h:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);function Df(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Nm(r){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<u.length;m++){let _=u[d],g=u[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let m=0,_=u.length;m<_;m++){let g=u[m];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sg=`#define PI 3.141592653589793
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
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,og=`vec3 transformedNormal = objectNormal;
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
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
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
#endif`,Fg=`uniform sampler2D dfgLUT;
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
}`,Ng=`
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y0=`float getShadowMask() {
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
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
}`,H0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`uniform float scale;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,$0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,Q0=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,e_=`#define NORMAL
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
}`,n_=`#define NORMAL
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
}`,i_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,s_=`#define STANDARD
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
}`,a_=`#define STANDARD
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
}`,o_=`#define TOON
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
}`,l_=`#define TOON
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
}`,c_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
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
}`,p_=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Um,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Hm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Zm,iridescence_fragment:Jm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Km,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:rg,common:sg,cube_uv_reflection_fragment:ag,defaultnormal_vertex:og,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Cg,envmap_vertex:xg,fog_vertex:vg,fog_pars_vertex:yg,fog_fragment:Mg,fog_pars_fragment:Sg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:Tg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Ag,lights_toon_fragment:Rg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Ig,lights_phong_pars_fragment:Dg,lights_physical_fragment:Lg,lights_physical_pars_fragment:Fg,lights_fragment_begin:Ng,lights_fragment_maps:Ug,lights_fragment_end:Og,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Vg,map_fragment:Gg,map_pars_fragment:Hg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:qg,metalnessmap_pars_fragment:Yg,morphinstance_vertex:Zg,morphcolor_vertex:Jg,morphnormal_vertex:$g,morphtarget_pars_vertex:Kg,morphtarget_vertex:jg,normal_fragment_begin:Qg,normal_fragment_maps:t0,normal_pars_fragment:e0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:_0,shadowmap_pars_vertex:x0,shadowmap_vertex:v0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:S0,skinning_vertex:b0,skinnormal_vertex:T0,specularmap_fragment:w0,specularmap_pars_fragment:E0,tonemapping_fragment:A0,tonemapping_pars_fragment:C0,transmission_fragment:R0,transmission_pars_fragment:P0,uv_pars_fragment:I0,uv_pars_vertex:D0,uv_vertex:L0,worldpos_vertex:F0,background_vert:N0,background_frag:U0,backgroundCube_vert:O0,backgroundCube_frag:B0,cube_vert:z0,cube_frag:k0,depth_vert:V0,depth_frag:G0,distance_vert:H0,distance_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:Y0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:$0,meshlambert_vert:K0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:t_,meshnormal_vert:e_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:r_,meshphysical_vert:s_,meshphysical_frag:a_,meshtoon_vert:o_,meshtoon_frag:l_,points_vert:c_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},ct={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ti={basic:{uniforms:Xe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Xe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Xe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Xe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Xe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Xe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Xe([ct.points,ct.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Xe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Xe([ct.common,ct.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Xe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Xe([ct.sprite,ct.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Xe([ct.common,ct.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Xe([ct.lights,ct.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};ti.physical={uniforms:Xe([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Xl={r:0,b:0,g:0},Mr=new mi,m_=new he;function g_(r,t,e,n,i,s,a){let o=new Lt(0),l=s===!0?0:1,c,h,u=null,d=0,m=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function g(M){let S=!1,b=_(M);b===null?f(o,l):b&&b.isColor&&(f(b,1),S=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,S){let b=_(S);b&&(b.isCubeTexture||b.mapping===oa)?(h===void 0&&(h=new Ht(new Qr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:yr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mr.copy(S.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Mr)),h.material.toneMapped=qt.getTransfer(b.colorSpace)!==Kt,(u!==b||d!==b.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ht(new zi(2,2),new gn({name:"BackgroundMaterial",uniforms:yr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,m=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,S){M.getRGB(Xl,wh(r)),n.buffers.color.setClear(Xl.r,Xl.g,Xl.b,S,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:g,addToRenderList:p,dispose:v}}function __(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(T,P,D,F,V){let H=!1,k=u(F,D,P);s!==k&&(s=k,c(s.object)),H=m(T,F,D,V),H&&_(T,F,D,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(T,P,D,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,D){let F=D.wireframe===!0,V=n[T.id];V===void 0&&(V={},n[T.id]=V);let H=V[P.id];H===void 0&&(H={},V[P.id]=H);let k=H[F];return k===void 0&&(k=d(l()),H[F]=k),k}function d(T){let P=[],D=[],F=[];for(let V=0;V<e;V++)P[V]=0,D[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:T,attributes:{},index:null}}function m(T,P,D,F){let V=s.attributes,H=P.attributes,k=0,B=D.getAttributes();for(let Y in B)if(B[Y].location>=0){let et=V[Y],ot=H[Y];if(ot===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function _(T,P,D,F){let V={},H=P.attributes,k=0,B=D.getAttributes();for(let Y in B)if(B[Y].location>=0){let et=H[Y];et===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(et=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(et=T.instanceColor));let ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),V[Y]=ot,k++}s.attributes=V,s.attributesNum=k,s.index=F}function g(){let T=s.newAttributes;for(let P=0,D=T.length;P<D;P++)T[P]=0}function p(T){f(T,0)}function f(T,P){let D=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;D[T]=1,F[T]===0&&(r.enableVertexAttribArray(T),F[T]=1),V[T]!==P&&(r.vertexAttribDivisor(T,P),V[T]=P)}function v(){let T=s.newAttributes,P=s.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==T[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function M(T,P,D,F,V,H,k){k===!0?r.vertexAttribIPointer(T,P,D,V,H):r.vertexAttribPointer(T,P,D,F,V,H)}function S(T,P,D,F){g();let V=F.attributes,H=D.getAttributes(),k=P.defaultAttributeValues;for(let B in H){let Y=H[B];if(Y.location>=0){let nt=V[B];if(nt===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor)),nt!==void 0){let et=nt.normalized,ot=nt.itemSize,dt=t.get(nt);if(dt===void 0)continue;let Et=dt.buffer,xt=dt.type,wt=dt.bytesPerElement,Z=xt===r.INT||xt===r.UNSIGNED_INT||nt.gpuType===rl;if(nt.isInterleavedBufferAttribute){let K=nt.data,mt=K.stride,Nt=nt.offset;if(K.isInstancedInterleavedBuffer){for(let vt=0;vt<Y.locationSize;vt++)f(Y.location+vt,K.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let vt=0;vt<Y.locationSize;vt++)p(Y.location+vt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let vt=0;vt<Y.locationSize;vt++)M(Y.location+vt,ot/Y.locationSize,xt,et,mt*wt,(Nt+ot/Y.locationSize*vt)*wt,Z)}else{if(nt.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)f(Y.location+K,nt.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let K=0;K<Y.locationSize;K++)p(Y.location+K);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let K=0;K<Y.locationSize;K++)M(Y.location+K,ot/Y.locationSize,xt,et,ot*wt,ot/Y.locationSize*K*wt,Z)}}else if(k!==void 0){let et=k[B];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(Y.location,et);break;case 3:r.vertexAttrib3fv(Y.location,et);break;case 4:r.vertexAttrib4fv(Y.location,et);break;default:r.vertexAttrib1fv(Y.location,et)}}}}v()}function b(){R();for(let T in n){let P=n[T];for(let D in P){let F=P[D];for(let V in F)h(F[V].object),delete F[V];delete P[D]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let P=n[T.id];for(let D in P){let F=P[D];for(let V in F)h(F[V].object),delete F[V];delete P[D]}delete n[T.id]}function A(T){for(let P in n){let D=n[P];if(D[T.id]===void 0)continue;let F=D[T.id];for(let V in F)h(F[V].object),delete F[V];delete D[T.id]}}function R(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function x_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,n,1)}function l(c,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function v_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Rn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==rn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!R)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:b,samples:w}}function y_(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Yn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=r.get(u);if(!i||_===null||_.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,M=v*4,S=f.clippingState||null;l.value=S,S=h(_,d,M,m);for(let b=0;b!==M;++b)S[b]=e[b];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let f=m+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,S=m;M!==g;++M,S+=4)a.copy(u[M]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function M_(r){let t=new WeakMap;function e(a,o){return o===el?a.mapping=Gi:o===nl&&(a.mapping=xr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===el||o===nl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Zs(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xi=4,hf=[.125,.215,.35,.446,.526,.582],br=20,S_=256,pa=new ss,uf=new Lt,Rh=null,Ph=0,Ih=0,Dh=!1,b_=new O,Yl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=b_}=s;Rh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ph,Ih),this._renderer.xr.enabled=Dh,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Kn,format:Rn,colorSpace:hr,depthBuffer:!1},i=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T_(s)),this._blurMaterial=E_(s,t,e),this._ggxMaterial=w_(s,t,e)}return i}_compileMaterial(t){let e=new Ht(new ue,t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i,s){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(uf),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new Qr,new en({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,p=g.material,f=!1,v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,f=!0):(p.color.copy(uf),f=!0);for(let M=0;M<6;M++){let S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));let b=this._cubeSize;cs(i,S*b,M>2?b:0,b,b),u.setRenderTarget(i),f&&u.render(g,l),u.render(t,l)}u.toneMapping=m,u.autoClear=d,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Gi||t.mapping===xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,m=u*d,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Xi?n-_+Xi:0),f=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=_-e,cs(s,p,f,3*g,2*g),i.setRenderTarget(s),i.render(o,pa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,cs(t,p,f,3*g,2*g),i.setRenderTarget(t),i.render(o,pa)}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*br-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):br;p>br&&It(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);let f=[],v=0;for(let A=0;A<br;++A){let R=A/g,x=Math.exp(-R*R/2);f.push(x),A===0?v+=x:A<p&&(v+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let S=this._sizeLods[i],b=3*S*(i>M-Xi?i-M+Xi:0),w=4*(this._cubeSize-S);cs(e,b,w,3*S,2*S),l.setRenderTarget(e),l.render(u,pa)}};function T_(r){let t=[],e=[],n=[],i=r,s=r-Xi+1+hf.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Xi?l=hf[a-r+Xi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,p=2,f=1,v=new Float32Array(g*_*m),M=new Float32Array(p*_*m),S=new Float32Array(f*_*m);for(let w=0;w<m;w++){let A=w%3*2/3-1,R=w>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(x,g*_*w),M.set(d,p*_*w);let T=[w,w,w,w,w,w];S.set(T,f*_*w)}let b=new ue;b.setAttribute("position",new Oe(v,g)),b.setAttribute("uv",new Oe(M,p)),b.setAttribute("faceIndex",new Oe(S,f)),n.push(new Ht(b,null)),i>Xi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function df(r,t,e){let n=new mn(r,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function w_(r,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:S_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function E_(r,t,e){let n=new Float32Array(br),i=new O(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ff(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function pf(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function A_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===el||l===nl,h=l===Gi||l===xr;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Yl(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Yl(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function C_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&$r("WebGLRenderer: "+n+" extension not supported."),i}}}function R_(r,t,e,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],r.ARRAY_BUFFER)}function c(u){let d=[],m=u.index,_=u.attributes.position,g=0;if(m!==null){let v=m.array;g=m.version;for(let M=0,S=v.length;M<S;M+=3){let b=v[M+0],w=v[M+1],A=v[M+2];d.push(b,w,w,A,A,b)}}else if(_!==void 0){let v=_.array;g=_.version;for(let M=0,S=v.length/3-1;M<S;M+=3){let b=M+0,w=M+1,A=M+2;d.push(b,w,w,A,A,b)}}else return;let p=new(bh(d)?Xs:Ws)(d,1);p.version=g;let f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function P_(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){r.drawElements(n,m,s,d*a),e.update(m,n,1)}function c(d,m,_){_!==0&&(r.drawElementsInstanced(n,m,s,d*a,_),e.update(m,n,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];e.update(p,n,1)}function u(d,m,_,g){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,g,0,_);let f=0;for(let v=0;v<_;v++)f+=m[v]*g[v];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function D_(r,t,e){let n=new WeakMap,i=new fe;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};var m=T;d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let b=o.attributes.position.count*S,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*w*4*u),R=new Gs(A,b,w,u);R.type=Hn,R.needsUpdate=!0;let x=S*4;for(let P=0;P<u;P++){let D=f[P],F=v[P],V=M[P],H=b*w*4*P;for(let k=0;k<D.count;k++){let B=k*x;_===!0&&(i.fromBufferAttribute(D,k),A[H+B+0]=i.x,A[H+B+1]=i.y,A[H+B+2]=i.z,A[H+B+3]=0),g===!0&&(i.fromBufferAttribute(F,k),A[H+B+4]=i.x,A[H+B+5]=i.y,A[H+B+6]=i.z,A[H+B+7]=0),p===!0&&(i.fromBufferAttribute(V,k),A[H+B+8]=i.x,A[H+B+9]=i.y,A[H+B+10]=i.z,A[H+B+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Gt(b,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function L_(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var F_={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[aa]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[dh]:"CUSTOM_TONE_MAPPING"};function N_(r,t,e,n,i){let s=new mn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new mn(t,e,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),o=new ue;o.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ne([0,2,0,0,2,0],2));let l=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ht(o,l),h=new ss(-1,1,1,-1,0,1),u=null,d=null,m=!1,_,g=null,p=[],f=!1;this.setSize=function(v,M){s.setSize(v,M),a.setSize(v,M);for(let S=0;S<p.length;S++){let b=p[S];b.setSize&&b.setSize(v,M)}},this.setEffects=function(v){p=v,f=p.length>0&&p[0].isRenderPass===!0;let M=s.width,S=s.height;for(let b=0;b<p.length;b++){let w=p[b];w.setSize&&w.setSize(M,S)}},this.begin=function(v,M){if(m||v.toneMapping===Vn&&p.length===0)return!1;if(g=M,M!==null){let S=M.width,b=M.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return f===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return f},this.end=function(v,M){v.toneMapping=_,m=!0;let S=s,b=a;for(let w=0;w<p.length;w++){let A=p[w];if(A.enabled!==!1&&(A.render(v,b,S,M),A.needsSwap!==!1)){let R=S;S=b,b=R}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,l.defines={},qt.getTransfer(u)===Kt&&(l.defines.SRGB_TRANSFER="");let w=F_[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(c,h),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Lf=new jn,Nh=new Bi(1,1),Ff=new Gs,Nf=new Ao,Uf=new Ys,mf=[],gf=[],_f=new Float32Array(16),xf=new Float32Array(9),vf=new Float32Array(4);function us(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=mf[i];if(s===void 0&&(s=new Float32Array(i),mf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ae(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ce(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function $l(r,t){let e=gf[t];e===void 0&&(e=new Int32Array(t),gf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function U_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function O_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2fv(this.addr,t),Ce(e,t)}}function B_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;r.uniform3fv(this.addr,t),Ce(e,t)}}function z_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4fv(this.addr,t),Ce(e,t)}}function k_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;vf.set(n),r.uniformMatrix2fv(this.addr,!1,vf),Ce(e,n)}}function V_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;xf.set(n),r.uniformMatrix3fv(this.addr,!1,xf),Ce(e,n)}}function G_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;_f.set(n),r.uniformMatrix4fv(this.addr,!1,_f),Ce(e,n)}}function H_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function W_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2iv(this.addr,t),Ce(e,t)}}function X_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3iv(this.addr,t),Ce(e,t)}}function q_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4iv(this.addr,t),Ce(e,t)}}function Y_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Z_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;r.uniform2uiv(this.addr,t),Ce(e,t)}}function J_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;r.uniform3uiv(this.addr,t),Ce(e,t)}}function $_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;r.uniform4uiv(this.addr,t),Ce(e,t)}}function K_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nh.compareFunction=e.isReversedDepthBuffer()?Wl:Hl,s=Nh):s=Lf,e.setTexture2D(t||s,i)}function j_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nf,i)}function Q_(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Uf,i)}function tx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ff,i)}function ex(r){switch(r){case 5126:return U_;case 35664:return O_;case 35665:return B_;case 35666:return z_;case 35674:return k_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return H_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return Z_;case 36295:return J_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return tx}}function nx(r,t){r.uniform1fv(this.addr,t)}function ix(r,t){let e=us(t,this.size,2);r.uniform2fv(this.addr,e)}function rx(r,t){let e=us(t,this.size,3);r.uniform3fv(this.addr,e)}function sx(r,t){let e=us(t,this.size,4);r.uniform4fv(this.addr,e)}function ax(r,t){let e=us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ox(r,t){let e=us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function lx(r,t){let e=us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function cx(r,t){r.uniform1iv(this.addr,t)}function hx(r,t){r.uniform2iv(this.addr,t)}function ux(r,t){r.uniform3iv(this.addr,t)}function dx(r,t){r.uniform4iv(this.addr,t)}function fx(r,t){r.uniform1uiv(this.addr,t)}function px(r,t){r.uniform2uiv(this.addr,t)}function mx(r,t){r.uniform3uiv(this.addr,t)}function gx(r,t){r.uniform4uiv(this.addr,t)}function _x(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Nh:a=Lf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function xx(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Nf,s[a])}function vx(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Uf,s[a])}function yx(r,t,e){let n=this.cache,i=t.length,s=$l(e,i);Ae(n,s)||(r.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ff,s[a])}function Mx(r){switch(r){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return sx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return yx}}var Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ex(e.type)}},Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}},Bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function yf(r,t){r.seq.push(t),r.map[t.id]=t}function Sx(r,t,e){let n=r.name,i=n.length;for(Lh.lastIndex=0;;){let s=Lh.exec(n),a=Lh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){yf(e,c===void 0?new Uh(o,r,t):new Oh(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Bh(o),yf(e,u)),e=u}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sx(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Mf(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var bx=37297,Tx=0;function wx(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sf=new Ot;function Ex(r){qt._getMatrix(Sf,qt.workingColorSpace,r);let t=`mat3( ${Sf.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Bs:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function bf(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+wx(r.getShaderSource(t),o)}else return s}function Ax(r,t){let e=Ex(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Cx={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[aa]:"ACESFilmic",[fh]:"AgX",[ph]:"Neutral",[dh]:"Custom"};function Rx(r,t){let e=Cx[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ql=new O;function Px(){qt.getLuminanceCoefficients(ql);let r=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function Dx(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lx(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ga(r){return r!==""}function Tf(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(r){return r.replace(Fx,Ux)}var Nx=new Map;function Ux(r,t){let e=Bt[t];if(e===void 0){let n=Nx.get(t);if(n!==void 0)e=Bt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zh(e)}var Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(r){return r.replace(Ox,Bx)}function Bx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Af(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var zx={[sa]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function kx(r){return zx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vx={[Gi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function Gx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Vx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hx={[xr]:"ENVMAP_MODE_REFRACTION"};function Wx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Hx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xx={[tl]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function qx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[r.combine]||"ENVMAP_BLENDING_NONE"}function Yx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zx(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=kx(e),c=Gx(e),h=Wx(e),u=qx(e),d=Yx(e),m=Ix(e),_=Dx(s),g=i.createProgram(),p,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ga).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ga).join(`
`),f.length>0&&(f+=`
`)):(p=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),f=[Af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Ax("linearToOutputTexel",e.outputColorSpace),Px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),a=zh(a),a=Tf(a,e),a=wf(a,e),o=zh(o),o=Tf(o,e),o=wf(o,e),a=Ef(a),o=Ef(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=v+p+a,S=v+f+o,b=Mf(i,i.VERTEX_SHADER,M),w=Mf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(w)||"",H=D.trim(),k=F.trim(),B=V.trim(),Y=!0,nt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,w);else{let et=bf(i,b,"vertex"),ot=bf(i,w,"fragment");Pt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+et+`
`+ot)}else H!==""?It("WebGLProgram: Program Info Log:",H):(k===""||B==="")&&(nt=!1);nt&&(P.diagnostics={runnable:Y,programLog:H,vertexShader:{log:k,prefix:p},fragmentShader:{log:B,prefix:f}})}i.deleteShader(b),i.deleteShader(w),R=new hs(i,g),x=Lx(i,g)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,bx)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}var Jx=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vh(t),e.set(t,n)),n}},Vh=class{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}};function $x(r,t,e,n,i,s,a){let o=new Hs,l=new kh,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,m=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,T,P,D,F){let V=D.fog,H=F.geometry,k=x.isMeshStandardMaterial?D.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||k),Y=B&&B.mapping===oa?B.image.height:null,nt=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=et!==void 0?et.length:0,dt=0;H.morphAttributes.position!==void 0&&(dt=1),H.morphAttributes.normal!==void 0&&(dt=2),H.morphAttributes.color!==void 0&&(dt=3);let Et,xt,wt,Z;if(nt){let Qt=ti[nt];Et=Qt.vertexShader,xt=Qt.fragmentShader}else Et=x.vertexShader,xt=x.fragmentShader,l.update(x),wt=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);let K=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,Zt=!!x.map,Pe=!!x.matcap,Yt=!!B,jt=!!x.aoMap,ie=!!x.lightMap,zt=!!x.bumpMap,be=!!x.normalMap,I=!!x.displacementMap,Te=!!x.emissiveMap,$t=!!x.metalnessMap,oe=!!x.roughnessMap,Mt=x.anisotropy>0,C=x.clearcoat>0,y=x.dispersion>0,N=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,X=Mt&&!!x.anisotropyMap,bt=C&&!!x.clearcoatMap,rt=C&&!!x.clearcoatNormalMap,yt=C&&!!x.clearcoatRoughnessMap,Dt=N&&!!x.iridescenceMap,Q=N&&!!x.iridescenceThicknessMap,at=q&&!!x.sheenColorMap,_t=q&&!!x.sheenRoughnessMap,St=!!x.specularMap,st=!!x.specularColorMap,kt=!!x.specularIntensityMap,L=$&&!!x.transmissionMap,ut=$&&!!x.thicknessMap,tt=!!x.gradientMap,ft=!!x.alphaMap,j=x.alphaTest>0,J=!!x.alphaHash,it=!!x.extensions,Ut=Vn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ut=r.toneMapping);let le={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:Et,fragmentShader:xt,defines:x.defines,customVertexShaderID:wt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:hr,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:Pe,envMap:Yt,envMapMode:Yt&&B.mapping,envMapCubeUVHeight:Y,aoMap:jt,lightMap:ie,bumpMap:zt,normalMap:be,displacementMap:I,emissiveMap:Te,normalMapObjectSpace:be&&x.normalMapType===jd,normalMapTangentSpace:be&&x.normalMapType===Gl,metalnessMap:$t,roughnessMap:oe,anisotropy:Mt,anisotropyMap:X,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:rt,clearcoatRoughnessMap:yt,dispersion:y,iridescence:N,iridescenceMap:Dt,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:at,sheenRoughnessMap:_t,specularMap:St,specularColorMap:st,specularIntensityMap:kt,transmission:$,transmissionMap:L,thicknessMap:ut,gradientMap:tt,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:j,alphaHash:J,combine:x.combine,mapUv:Zt&&g(x.map.channel),aoMapUv:jt&&g(x.aoMap.channel),lightMapUv:ie&&g(x.lightMap.channel),bumpMapUv:zt&&g(x.bumpMap.channel),normalMapUv:be&&g(x.normalMap.channel),displacementMapUv:I&&g(x.displacementMap.channel),emissiveMapUv:Te&&g(x.emissiveMap.channel),metalnessMapUv:$t&&g(x.metalnessMap.channel),roughnessMapUv:oe&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:bt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(x.sheenRoughnessMap.channel),specularMapUv:St&&g(x.specularMap.channel),specularColorMapUv:st&&g(x.specularColorMap.channel),specularIntensityMapUv:kt&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:ut&&g(x.thicknessMap.channel),alphaMapUv:ft&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||Mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Zt||ft),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:dt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===Kt,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===Kt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ee,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function f(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(T,x),M(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function v(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let T=_[x.type],P;if(T){let D=ti[T];P=cf.clone(D.uniforms)}else P=x.uniforms;return P}function b(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Zx(r,T,x,s),h.push(P),u.set(T,P)),P}function w(x){if(--x.usedTimes===0){let T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function Kx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function jx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Cf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Rf(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,_,g,p){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},r[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=p),t++,f}function o(u,d,m,_,g,p){let f=a(u,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(u,d,m,_,g,p){let f=a(u,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||jx),n.length>1&&n.sort(d||Cf),i.length>1&&i.sort(d||Cf)}function h(){for(let u=t,d=r.length;u<d;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Qx(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new Rf,r.set(n,[a])):i>=s.length?(a=new Rf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function tv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Lt};break;case"SpotLight":e={position:new O,direction:new O,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function ev(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var nv=0;function iv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function rv(r){let t=new tv,e=ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new he,a=new he;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,v=0,M=0,S=0,b=0,w=0,A=0;c.sort(iv);for(let x=0,T=c.length;x<T;x++){let P=c[x],D=P.color,F=P.intensity,V=P.distance,H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vr?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=P.shadow.matrix,v++}n.directional[m]=k,m++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(F),k.distance=V,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;let B=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=B.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.spotShadow[g]=Y,n.spotShadowMap[g]=H,S++}g++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(D).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let B=P.shadow,Y=e.get(P);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=k,_++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=k,f++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==m||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==S||R.numSpotMaps!==b||R.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=m,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=S,R.numSpotMaps=b,R.numLightProbes=A,n.version=nv++)}function l(c,h){let u=0,d=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let M=c[f];if(M.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(M.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Pf(r){let t=new rv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function sv(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Pf(r),t.set(i,[o])):s>=a.length?(o=new Pf(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ov=`uniform sampler2D shadow_pass;
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
}`,lv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],cv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],If=new he,ma=new O,Fh=new O;function hv(r,t,e){let n=new ns,i=new Gt,s=new Gt,a=new fe,o=new No,l=new Uo,c={},h=e.maxTextureSize,u={[di]:ze,[ze]:di,[Ee]:Ee},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:av,fragmentShader:ov}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new ue;_.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ht(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let f=this.type;this.render=function(w,A,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===qo&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=sa);let x=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending($n),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=f!==this.type;F&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=w.length;V<H;V++){let k=w[V],B=k.shadow;if(B===void 0){It("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let Y=B.getFrameExtents();if(i.multiply(Y),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===as){if(k.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new mn(i.x,i.y,{format:vr,type:Kn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Bi(i.x,i.y,Hn),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Jn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ue,B.map.depthTexture.magFilter=Ue}else{k.isPointLight?(B.map=new Zs(i.x),B.map.depthTexture=new Do(i.x,Gn)):(B.map=new mn(i.x,i.y),B.map.depthTexture=new Bi(i.x,i.y,Gn)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Jn;let et=r.state.buffers.depth.getReversed();this.type===sa?(B.map.depthTexture.compareFunction=et?Wl:Hl,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ue,B.map.depthTexture.magFilter=Ue)}B.camera.updateProjectionMatrix()}let nt=B.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<nt;et++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,et),r.clear();else{et===0&&(r.setRenderTarget(B.map),r.clear());let ot=B.getViewport(et);a.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),D.viewport(a)}if(k.isPointLight){let ot=B.camera,dt=B.matrix,Et=k.distance||ot.far;Et!==ot.far&&(ot.far=Et,ot.updateProjectionMatrix()),ma.setFromMatrixPosition(k.matrixWorld),ot.position.copy(ma),Fh.copy(ot.position),Fh.add(lv[et]),ot.up.copy(cv[et]),ot.lookAt(Fh),ot.updateMatrixWorld(),dt.makeTranslation(-ma.x,-ma.y,-ma.z),If.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),B._frustum.setFromProjectionMatrix(If,ot.coordinateSystem,ot.reversedDepth)}else B.updateMatrices(k);n=B.getFrustum(),S(A,R,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===as&&v(B,R),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(x,T,P)};function v(w,A){let R=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mn(i.x,i.y,{format:vr,type:Kn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,R,d,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,R,m,g,null)}function M(w,A,R,x){let T=null,P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=T.uuid,F=A.uuid,V=c[D];V===void 0&&(V={},c[D]=V);let H=V[F];H===void 0&&(H=T.clone(),V[F]=H,A.addEventListener("dispose",b)),T=H}if(T.visible=A.visible,T.wireframe=A.wireframe,x===as?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:u[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=r.properties.get(T);D.light=R}return T}function S(w,A,R,x,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===as)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let F=t.update(w),V=w.material;if(Array.isArray(V)){let H=F.groups;for(let k=0,B=H.length;k<B;k++){let Y=H[k],nt=V[Y.materialIndex];if(nt&&nt.visible){let et=M(w,nt,x,T);w.onBeforeShadow(r,w,A,R,F,et,Y),r.renderBufferDirect(R,null,F,et,w,Y),w.onAfterShadow(r,w,A,R,F,et,Y)}}}else if(V.visible){let H=M(w,V,x,T);w.onBeforeShadow(r,w,A,R,F,H,null),r.renderBufferDirect(R,null,F,H,w,null),w.onAfterShadow(r,w,A,R,F,H,null)}}let D=w.children;for(let F=0,V=D.length;F<V;F++)S(D[F],A,R,x,T)}function b(w){w.target.removeEventListener("dispose",b);for(let R in c){let x=c[R],T=w.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}var uv={[Yo]:Zo,[Jo]:jo,[$o]:Qo,[cr]:Ko,[Zo]:Yo,[jo]:Jo,[Qo]:$o,[Ko]:cr};function dv(r,t){function e(){let L=!1,ut=new fe,tt=null,ft=new fe(0,0,0,0);return{setMask:function(j){tt!==j&&!L&&(r.colorMask(j,j,j,j),tt=j)},setLocked:function(j){L=j},setClear:function(j,J,it,Ut,le){le===!0&&(j*=Ut,J*=Ut,it*=Ut),ut.set(j,J,it,Ut),ft.equals(ut)===!1&&(r.clearColor(j,J,it,Ut),ft.copy(ut))},reset:function(){L=!1,tt=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,tt=null,ft=null,j=null;return{setReversed:function(J){if(ut!==J){let it=t.get("EXT_clip_control");J?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ut=J;let Ut=j;j=null,this.setClear(Ut)}},getReversed:function(){return ut},setTest:function(J){J?K(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(J){tt!==J&&!L&&(r.depthMask(J),tt=J)},setFunc:function(J){if(ut&&(J=uv[J]),ft!==J){switch(J){case Yo:r.depthFunc(r.NEVER);break;case Zo:r.depthFunc(r.ALWAYS);break;case Jo:r.depthFunc(r.LESS);break;case cr:r.depthFunc(r.LEQUAL);break;case $o:r.depthFunc(r.EQUAL);break;case Ko:r.depthFunc(r.GEQUAL);break;case jo:r.depthFunc(r.GREATER);break;case Qo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=J}},setLocked:function(J){L=J},setClear:function(J){j!==J&&(ut&&(J=1-J),r.clearDepth(J),j=J)},reset:function(){L=!1,tt=null,ft=null,j=null,ut=!1}}}function i(){let L=!1,ut=null,tt=null,ft=null,j=null,J=null,it=null,Ut=null,le=null;return{setTest:function(Qt){L||(Qt?K(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!L&&(r.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,Wn,si){(tt!==Qt||ft!==Wn||j!==si)&&(r.stencilFunc(Qt,Wn,si),tt=Qt,ft=Wn,j=si)},setOp:function(Qt,Wn,si){(J!==Qt||it!==Wn||Ut!==si)&&(r.stencilOp(Qt,Wn,si),J=Qt,it=Wn,Ut=si)},setLocked:function(Qt){L=Qt},setClear:function(Qt){le!==Qt&&(r.clearStencil(Qt),le=Qt)},reset:function(){L=!1,ut=null,tt=null,ft=null,j=null,J=null,it=null,Ut=null,le=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,v=null,M=null,S=null,b=null,w=null,A=new Lt(0,0,0),R=0,x=!1,T=null,P=null,D=null,F=null,V=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,B=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=B>=2);let nt=null,et={},ot=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),Et=new fe().fromArray(ot),xt=new fe().fromArray(dt);function wt(L,ut,tt,ft){let j=new Uint8Array(4),J=r.createTexture();r.bindTexture(L,J),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<tt;it++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,j):r.texImage2D(ut+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,j);return J}let Z={};Z[r.TEXTURE_2D]=wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(cr),zt(!1),be(ah),K(r.CULL_FACE),jt($n);function K(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function mt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Nt(L,ut){return u[L]!==ut?(r.bindFramebuffer(L,ut),u[L]=ut,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function vt(L,ut){let tt=m,ft=!1;if(L){tt=d.get(ut),tt===void 0&&(tt=[],d.set(ut,tt));let j=L.textures;if(tt.length!==j.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let J=0,it=j.length;J<it;J++)tt[J]=r.COLOR_ATTACHMENT0+J;tt.length=j.length,ft=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ft=!0);ft&&r.drawBuffers(tt)}function Zt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let Pe={[Li]:r.FUNC_ADD,[Id]:r.FUNC_SUBTRACT,[Dd]:r.FUNC_REVERSE_SUBTRACT};Pe[Ld]=r.MIN,Pe[Fd]=r.MAX;let Yt={[Nd]:r.ZERO,[Ud]:r.ONE,[Od]:r.SRC_COLOR,[yo]:r.SRC_ALPHA,[Hd]:r.SRC_ALPHA_SATURATE,[Vd]:r.DST_COLOR,[zd]:r.DST_ALPHA,[Bd]:r.ONE_MINUS_SRC_COLOR,[Mo]:r.ONE_MINUS_SRC_ALPHA,[Gd]:r.ONE_MINUS_DST_COLOR,[kd]:r.ONE_MINUS_DST_ALPHA,[Wd]:r.CONSTANT_COLOR,[Xd]:r.ONE_MINUS_CONSTANT_COLOR,[qd]:r.CONSTANT_ALPHA,[Yd]:r.ONE_MINUS_CONSTANT_ALPHA};function jt(L,ut,tt,ft,j,J,it,Ut,le,Qt){if(L===$n){g===!0&&(mt(r.BLEND),g=!1);return}if(g===!1&&(K(r.BLEND),g=!0),L!==Pd){if(L!==p||Qt!==x){if((f!==Li||S!==Li)&&(r.blendEquation(r.FUNC_ADD),f=Li,S=Li),Qt)switch(L){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _r:r.blendFunc(r.ONE,r.ONE);break;case oh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Pt("WebGLState: Invalid blending: ",L);break}else switch(L){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case oh:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",L);break}v=null,M=null,b=null,w=null,A.set(0,0,0),R=0,p=L,x=Qt}return}j=j||ut,J=J||tt,it=it||ft,(ut!==f||j!==S)&&(r.blendEquationSeparate(Pe[ut],Pe[j]),f=ut,S=j),(tt!==v||ft!==M||J!==b||it!==w)&&(r.blendFuncSeparate(Yt[tt],Yt[ft],Yt[J],Yt[it]),v=tt,M=ft,b=J,w=it),(Ut.equals(A)===!1||le!==R)&&(r.blendColor(Ut.r,Ut.g,Ut.b,le),A.copy(Ut),R=le),p=L,x=!1}function ie(L,ut){L.side===Ee?mt(r.CULL_FACE):K(r.CULL_FACE);let tt=L.side===ze;ut&&(tt=!tt),zt(tt),L.blending===lr&&L.transparent===!1?jt($n):jt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){T!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),T=L)}function be(L){L!==Cd?(K(r.CULL_FACE),L!==P&&(L===ah?r.cullFace(r.BACK):L===Rd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),P=L}function I(L){L!==D&&(k&&r.lineWidth(L),D=L)}function Te(L,ut,tt){L?(K(r.POLYGON_OFFSET_FILL),(F!==ut||V!==tt)&&(r.polygonOffset(ut,tt),F=ut,V=tt)):mt(r.POLYGON_OFFSET_FILL)}function $t(L){L?K(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function oe(L){L===void 0&&(L=r.TEXTURE0+H-1),nt!==L&&(r.activeTexture(L),nt=L)}function Mt(L,ut,tt){tt===void 0&&(nt===null?tt=r.TEXTURE0+H-1:tt=nt);let ft=et[tt];ft===void 0&&(ft={type:void 0,texture:void 0},et[tt]=ft),(ft.type!==L||ft.texture!==ut)&&(nt!==tt&&(r.activeTexture(tt),nt=tt),r.bindTexture(L,ut||Z[L]),ft.type=L,ft.texture=ut)}function C(){let L=et[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function q(){try{r.texSubImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function $(){try{r.texSubImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function rt(){try{r.texStorage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function yt(){try{r.texStorage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function Dt(){try{r.texImage2D(...arguments)}catch(L){Pt("WebGLState:",L)}}function Q(){try{r.texImage3D(...arguments)}catch(L){Pt("WebGLState:",L)}}function at(L){Et.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Et.copy(L))}function _t(L){xt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function St(L,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let ft=tt.get(L);ft===void 0&&(ft=r.getUniformBlockIndex(ut,L.name),tt.set(L,ft))}function st(L,ut){let ft=c.get(ut).get(L);l.get(ut)!==ft&&(r.uniformBlockBinding(ut,ft,L.__bindingPointIndex),l.set(ut,ft))}function kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,et={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,v=null,M=null,S=null,b=null,w=null,A=new Lt(0,0,0),R=0,x=!1,T=null,P=null,D=null,F=null,V=null,Et.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:mt,bindFramebuffer:Nt,drawBuffers:vt,useProgram:Zt,setBlending:jt,setMaterial:ie,setFlipSided:zt,setCullFace:be,setLineWidth:I,setPolygonOffset:Te,setScissorTest:$t,activeTexture:oe,bindTexture:Mt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:Dt,texImage3D:Q,updateUBOMapping:St,uniformBlockBinding:st,texStorage2D:rt,texStorage3D:yt,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:bt,scissor:at,viewport:_t,reset:kt}}function fv(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return m?new OffscreenCanvas(C,y):ks("canvas")}function g(C,y,N){let q=1,$=Mt(C);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let X=Math.floor(q*$.width),bt=Math.floor(q*$.height);u===void 0&&(u=_(X,bt));let rt=y?_(X,bt):u;return rt.width=X,rt.height=bt,rt.getContext("2d").drawImage(C,0,0,X,bt),It("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+bt+")."),rt}else return"data"in C&&It("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function f(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,y,N,q,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=y;if(y===r.RED&&(N===r.FLOAT&&(X=r.R32F),N===r.HALF_FLOAT&&(X=r.R16F),N===r.UNSIGNED_BYTE&&(X=r.R8)),y===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.R8UI),N===r.UNSIGNED_SHORT&&(X=r.R16UI),N===r.UNSIGNED_INT&&(X=r.R32UI),N===r.BYTE&&(X=r.R8I),N===r.SHORT&&(X=r.R16I),N===r.INT&&(X=r.R32I)),y===r.RG&&(N===r.FLOAT&&(X=r.RG32F),N===r.HALF_FLOAT&&(X=r.RG16F),N===r.UNSIGNED_BYTE&&(X=r.RG8)),y===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RG8UI),N===r.UNSIGNED_SHORT&&(X=r.RG16UI),N===r.UNSIGNED_INT&&(X=r.RG32UI),N===r.BYTE&&(X=r.RG8I),N===r.SHORT&&(X=r.RG16I),N===r.INT&&(X=r.RG32I)),y===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGB8UI),N===r.UNSIGNED_SHORT&&(X=r.RGB16UI),N===r.UNSIGNED_INT&&(X=r.RGB32UI),N===r.BYTE&&(X=r.RGB8I),N===r.SHORT&&(X=r.RGB16I),N===r.INT&&(X=r.RGB32I)),y===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),N===r.UNSIGNED_INT&&(X=r.RGBA32UI),N===r.BYTE&&(X=r.RGBA8I),N===r.SHORT&&(X=r.RGBA16I),N===r.INT&&(X=r.RGBA32I)),y===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),y===r.RGBA){let bt=$?Bs:qt.getTransfer(q);N===r.FLOAT&&(X=r.RGBA32F),N===r.HALF_FLOAT&&(X=r.RGBA16F),N===r.UNSIGNED_BYTE&&(X=bt===Kt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(C,y){let N;return C?y===null||y===Gn||y===ls?N=r.DEPTH24_STENCIL8:y===Hn?N=r.DEPTH32F_STENCIL8:y===os&&(N=r.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===ls?N=r.DEPTH_COMPONENT24:y===Hn?N=r.DEPTH_COMPONENT32F:y===os&&(N=r.DEPTH_COMPONENT16),N}function b(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ue&&C.minFilter!==Be?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){let y=C.target;y.removeEventListener("dispose",w),R(y),y.isVideoTexture&&h.delete(y)}function A(C){let y=C.target;y.removeEventListener("dispose",A),T(y)}function R(C){let y=n.get(C);if(y.__webglInit===void 0)return;let N=C.source,q=d.get(N);if(q){let $=q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(C),Object.keys(q).length===0&&d.delete(N)}n.remove(C)}function x(C){let y=n.get(C);r.deleteTexture(y.__webglTexture);let N=C.source,q=d.get(N);delete q[y.__cacheKey],a.memory.textures--}function T(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let $=0;$<y.__webglFramebuffer[q].length;$++)r.deleteFramebuffer(y.__webglFramebuffer[q][$]);else r.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)r.deleteFramebuffer(y.__webglFramebuffer[q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=C.textures;for(let q=0,$=N.length;q<$;q++){let X=n.get(N[q]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(C)}let P=0;function D(){P=0}function F(){let C=P;return C>=i.maxTextures&&It("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function V(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function H(C,y){let N=n.get(C);if(C.isVideoTexture&&$t(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){let q=C.image;if(q===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(N,C,y);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+y)}function k(C,y){let N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Z(N,C,y);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+y)}function B(C,y){let N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Z(N,C,y);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+y)}function Y(C,y){let N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){K(N,C,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+y)}let nt={[So]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},et={[Ue]:r.NEAREST,[$d]:r.NEAREST_MIPMAP_NEAREST,[la]:r.NEAREST_MIPMAP_LINEAR,[Be]:r.LINEAR,[il]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},ot={[Qd]:r.NEVER,[sf]:r.ALWAYS,[tf]:r.LESS,[Hl]:r.LEQUAL,[ef]:r.EQUAL,[Wl]:r.GEQUAL,[nf]:r.GREATER,[rf]:r.NOTEQUAL};function dt(C,y){if(y.type===Hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Be||y.magFilter===il||y.magFilter===la||y.magFilter===Hi||y.minFilter===Be||y.minFilter===il||y.minFilter===la||y.minFilter===Hi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,et[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,et[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ue||y.minFilter!==la&&y.minFilter!==Hi||y.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Et(C,y){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));let q=y.source,$=d.get(q);$===void 0&&($={},d.set(q,$));let X=V(y);if(X!==C.__cacheKey){$[X]===void 0&&($[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[X].usedTimes++;let bt=$[C.__cacheKey];bt!==void 0&&($[C.__cacheKey].usedTimes--,bt.usedTimes===0&&x(y)),C.__cacheKey=X,C.__webglTexture=$[X].texture}return N}function xt(C,y,N){return Math.floor(Math.floor(C/N)/y)}function wt(C,y,N,q){let X=C.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,N,q,y.data);else{X.sort((Q,at)=>Q.start-at.start);let bt=0;for(let Q=1;Q<X.length;Q++){let at=X[bt],_t=X[Q],St=at.start+at.count,st=xt(_t.start,y.width,4),kt=xt(at.start,y.width,4);_t.start<=St+1&&st===kt&&xt(_t.start+_t.count-1,y.width,4)===st?at.count=Math.max(at.count,_t.start+_t.count-at.start):(++bt,X[bt]=_t)}X.length=bt+1;let rt=r.getParameter(r.UNPACK_ROW_LENGTH),yt=r.getParameter(r.UNPACK_SKIP_PIXELS),Dt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Q=0,at=X.length;Q<at;Q++){let _t=X[Q],St=Math.floor(_t.start/4),st=Math.ceil(_t.count/4),kt=St%y.width,L=Math.floor(St/y.width),ut=st,tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,kt,L,ut,tt,N,q,y.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Dt)}}function Z(C,y,N){let q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=r.TEXTURE_3D);let $=Et(C,y),X=y.source;e.bindTexture(q,C.__webglTexture,r.TEXTURE0+N);let bt=n.get(X);if(X.version!==bt.__version||$===!0){e.activeTexture(r.TEXTURE0+N);let rt=qt.getPrimaries(qt.workingColorSpace),yt=y.colorSpace===_i?null:qt.getPrimaries(y.colorSpace),Dt=y.colorSpace===_i||rt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Q=g(y.image,!1,i.maxTextureSize);Q=oe(y,Q);let at=s.convert(y.format,y.colorSpace),_t=s.convert(y.type),St=M(y.internalFormat,at,_t,y.colorSpace,y.isVideoTexture);dt(q,y);let st,kt=y.mipmaps,L=y.isVideoTexture!==!0,ut=bt.__version===void 0||$===!0,tt=X.dataReady,ft=b(y,Q);if(y.isDepthTexture)St=S(y.format===Wi,y.type),ut&&(L?e.texStorage2D(r.TEXTURE_2D,1,St,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,St,Q.width,Q.height,0,at,_t,null));else if(y.isDataTexture)if(kt.length>0){L&&ut&&e.texStorage2D(r.TEXTURE_2D,ft,St,kt[0].width,kt[0].height);for(let j=0,J=kt.length;j<J;j++)st=kt[j],L?tt&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,st.width,st.height,at,_t,st.data):e.texImage2D(r.TEXTURE_2D,j,St,st.width,st.height,0,at,_t,st.data);y.generateMipmaps=!1}else L?(ut&&e.texStorage2D(r.TEXTURE_2D,ft,St,Q.width,Q.height),tt&&wt(y,Q,at,_t)):e.texImage2D(r.TEXTURE_2D,0,St,Q.width,Q.height,0,at,_t,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,St,kt[0].width,kt[0].height,Q.depth);for(let j=0,J=kt.length;j<J;j++)if(st=kt[j],y.format!==Rn)if(at!==null)if(L){if(tt)if(y.layerUpdates.size>0){let it=Ch(st.width,st.height,y.format,y.type);for(let Ut of y.layerUpdates){let le=st.data.subarray(Ut*it/st.data.BYTES_PER_ELEMENT,(Ut+1)*it/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,Ut,st.width,st.height,1,at,le)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,st.width,st.height,Q.depth,at,st.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,St,st.width,st.height,Q.depth,0,st.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,st.width,st.height,Q.depth,at,_t,st.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,St,st.width,st.height,Q.depth,0,at,_t,st.data)}else{L&&ut&&e.texStorage2D(r.TEXTURE_2D,ft,St,kt[0].width,kt[0].height);for(let j=0,J=kt.length;j<J;j++)st=kt[j],y.format!==Rn?at!==null?L?tt&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,st.width,st.height,at,st.data):e.compressedTexImage2D(r.TEXTURE_2D,j,St,st.width,st.height,0,st.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,st.width,st.height,at,_t,st.data):e.texImage2D(r.TEXTURE_2D,j,St,st.width,st.height,0,at,_t,st.data)}else if(y.isDataArrayTexture)if(L){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,St,Q.width,Q.height,Q.depth),tt)if(y.layerUpdates.size>0){let j=Ch(Q.width,Q.height,y.format,y.type);for(let J of y.layerUpdates){let it=Q.data.subarray(J*j/Q.data.BYTES_PER_ELEMENT,(J+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,at,_t,it)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,_t,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,St,Q.width,Q.height,Q.depth,0,at,_t,Q.data);else if(y.isData3DTexture)L?(ut&&e.texStorage3D(r.TEXTURE_3D,ft,St,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,_t,Q.data)):e.texImage3D(r.TEXTURE_3D,0,St,Q.width,Q.height,Q.depth,0,at,_t,Q.data);else if(y.isFramebufferTexture){if(ut)if(L)e.texStorage2D(r.TEXTURE_2D,ft,St,Q.width,Q.height);else{let j=Q.width,J=Q.height;for(let it=0;it<ft;it++)e.texImage2D(r.TEXTURE_2D,it,St,j,J,0,at,_t,null),j>>=1,J>>=1}}else if(kt.length>0){if(L&&ut){let j=Mt(kt[0]);e.texStorage2D(r.TEXTURE_2D,ft,St,j.width,j.height)}for(let j=0,J=kt.length;j<J;j++)st=kt[j],L?tt&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,at,_t,st):e.texImage2D(r.TEXTURE_2D,j,St,at,_t,st);y.generateMipmaps=!1}else if(L){if(ut){let j=Mt(Q);e.texStorage2D(r.TEXTURE_2D,ft,St,j.width,j.height)}tt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,_t,Q)}else e.texImage2D(r.TEXTURE_2D,0,St,at,_t,Q);p(y)&&f(q),bt.__version=X.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function K(C,y,N){if(y.image.length!==6)return;let q=Et(C,y),$=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);let X=n.get($);if($.version!==X.__version||q===!0){e.activeTexture(r.TEXTURE0+N);let bt=qt.getPrimaries(qt.workingColorSpace),rt=y.colorSpace===_i?null:qt.getPrimaries(y.colorSpace),yt=y.colorSpace===_i||bt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Dt=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,at=[];for(let J=0;J<6;J++)!Dt&&!Q?at[J]=g(y.image[J],!0,i.maxCubemapSize):at[J]=Q?y.image[J].image:y.image[J],at[J]=oe(y,at[J]);let _t=at[0],St=s.convert(y.format,y.colorSpace),st=s.convert(y.type),kt=M(y.internalFormat,St,st,y.colorSpace),L=y.isVideoTexture!==!0,ut=X.__version===void 0||q===!0,tt=$.dataReady,ft=b(y,_t);dt(r.TEXTURE_CUBE_MAP,y);let j;if(Dt){L&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,kt,_t.width,_t.height);for(let J=0;J<6;J++){j=at[J].mipmaps;for(let it=0;it<j.length;it++){let Ut=j[it];y.format!==Rn?St!==null?L?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it,kt,Ut.width,Ut.height,0,Ut.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it,0,0,Ut.width,Ut.height,St,st,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it,kt,Ut.width,Ut.height,0,St,st,Ut.data)}}}else{if(j=y.mipmaps,L&&ut){j.length>0&&ft++;let J=Mt(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,kt,J.width,J.height)}for(let J=0;J<6;J++)if(Q){L?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,at[J].width,at[J].height,St,st,at[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,at[J].width,at[J].height,0,St,st,at[J].data);for(let it=0;it<j.length;it++){let le=j[it].image[J].image;L?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it+1,0,0,le.width,le.height,St,st,le.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it+1,kt,le.width,le.height,0,St,st,le.data)}}else{L?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,st,at[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,St,st,at[J]);for(let it=0;it<j.length;it++){let Ut=j[it];L?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it+1,0,0,St,st,Ut.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,it+1,kt,St,st,Ut.image[J])}}}p(y)&&f(r.TEXTURE_CUBE_MAP),X.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function mt(C,y,N,q,$,X){let bt=s.convert(N.format,N.colorSpace),rt=s.convert(N.type),yt=M(N.internalFormat,bt,rt,N.colorSpace),Dt=n.get(y),Q=n.get(N);if(Q.__renderTarget=y,!Dt.__hasExternalTextures){let at=Math.max(1,y.width>>X),_t=Math.max(1,y.height>>X);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,X,yt,at,_t,y.depth,0,bt,rt,null):e.texImage2D($,X,yt,at,_t,0,bt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Te(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,$,Q.__webglTexture,0,I(y)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,$,Q.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(C,y,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){let q=y.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=S(y.stencilBuffer,$),bt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(y),X,y.width,y.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(y),X,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,X,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,C)}else{let q=y.textures;for(let $=0;$<q.length;$++){let X=q[$],bt=s.convert(X.format,X.colorSpace),rt=s.convert(X.type),yt=M(X.internalFormat,bt,rt,X.colorSpace);Te(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(y),yt,y.width,y.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(y),yt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,yt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(C,y,N){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),dt(r.TEXTURE_CUBE_MAP,y.depthTexture);let Dt=s.convert(y.depthTexture.format),Q=s.convert(y.depthTexture.type),at;y.depthTexture.format===Jn?at=r.DEPTH_COMPONENT24:y.depthTexture.format===Wi&&(at=r.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,at,y.width,y.height,0,Dt,Q,null)}}else H(y.depthTexture,0);let X=$.__webglTexture,bt=I(y),rt=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,yt=y.depthTexture.format===Wi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Jn)Te(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,rt,X,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,yt,rt,X,0);else if(y.depthTexture.format===Wi)Te(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,rt,X,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,yt,rt,X,0);else throw new Error("Unknown depthTexture format")}function Zt(C){let y=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)vt(y.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?vt(y.__webglFramebuffer[0],C,0):vt(y.__webglFramebuffer,C,0)}else if(N){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=r.createRenderbuffer(),Nt(y.__webglDepthbuffer[q],C,!1);else{let $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Nt(y.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(C,y,N){let q=n.get(C);y!==void 0&&mt(q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Zt(C)}function Yt(C){let y=C.texture,N=n.get(C),q=n.get(y);C.addEventListener("dispose",A);let $=C.textures,X=C.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=y.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)N.__webglFramebuffer[rt][yt]=r.createFramebuffer()}else N.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)N.__webglFramebuffer[rt]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(bt)for(let rt=0,yt=$.length;rt<yt;rt++){let Dt=n.get($[rt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Te(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){let yt=$[rt];N.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Dt=s.convert(yt.format,yt.colorSpace),Q=s.convert(yt.type),at=M(yt.internalFormat,Dt,Q,yt.colorSpace,C.isXRRenderTarget===!0),_t=I(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,at,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),dt(r.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)mt(N.__webglFramebuffer[rt][yt],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,yt);else mt(N.__webglFramebuffer[rt],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(y)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,yt=$.length;rt<yt;rt++){let Dt=$[rt],Q=n.get(Dt),at=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Q.__webglTexture),dt(at,Dt),mt(N.__webglFramebuffer,C,Dt,r.COLOR_ATTACHMENT0+rt,at,0),p(Dt)&&f(at)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),dt(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)mt(N.__webglFramebuffer[yt],C,y,r.COLOR_ATTACHMENT0,rt,yt);else mt(N.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,rt,0);p(y)&&f(rt),e.unbindTexture()}C.depthBuffer&&Zt(C)}function jt(C){let y=C.textures;for(let N=0,q=y.length;N<q;N++){let $=y[N];if(p($)){let X=v(C),bt=n.get($).__webglTexture;e.bindTexture(X,bt),f(X),e.unbindTexture()}}}let ie=[],zt=[];function be(C){if(C.samples>0){if(Te(C)===!1){let y=C.textures,N=C.width,q=C.height,$=r.COLOR_BUFFER_BIT,X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(C),rt=y.length>1;if(rt)for(let Dt=0;Dt<y.length;Dt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let yt=C.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Dt=0;Dt<y.length;Dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[Dt]);let Q=n.get(y[Dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,N,q,0,0,N,q,$,r.NEAREST),l===!0&&(ie.length=0,zt.length=0,ie.push(r.COLOR_ATTACHMENT0+Dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ie.push(X),zt.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let Dt=0;Dt<y.length;Dt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[Dt]);let Q=n.get(y[Dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function Te(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function $t(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function oe(C,y){let N=C.colorSpace,q=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==hr&&N!==_i&&(qt.getTransfer(N)===Kt?(q!==Rn||$!==rn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",N)),y}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Pe,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pv(r,t){function e(n,i=_i){let s,a=qt.getTransfer(i);if(n===rn)return r.UNSIGNED_BYTE;if(n===sl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===al)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===mh)return r.BYTE;if(n===gh)return r.SHORT;if(n===os)return r.UNSIGNED_SHORT;if(n===rl)return r.INT;if(n===Gn)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===Kn)return r.HALF_FLOAT;if(n===vh)return r.ALPHA;if(n===yh)return r.RGB;if(n===Rn)return r.RGBA;if(n===Jn)return r.DEPTH_COMPONENT;if(n===Wi)return r.DEPTH_STENCIL;if(n===Mh)return r.RED;if(n===ol)return r.RED_INTEGER;if(n===vr)return r.RG;if(n===ll)return r.RG_INTEGER;if(n===cl)return r.RGBA_INTEGER;if(n===ca||n===ha||n===ua||n===da)if(a===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hl||n===ul||n===dl||n===fl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pl||n===ml)return a===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===_l)return s.COMPRESSED_R11_EAC;if(n===xl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===vl)return s.COMPRESSED_RG11_EAC;if(n===yl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ml||n===Sl||n===bl||n===Tl||n===wl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Dl||n===Ll||n===Fl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Ul||n===Ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Nl)return a===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===zl||n===kl||n===Vl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends fi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,_=null,g=typeof XRWebGLBinding<"u",p=new Gh,f={},v=e.getContextAttributes(),M=null,S=null,b=[],w=[],A=new Gt,R=null,x=new Ne;x.viewport=new fe;let T=new Ne;T.viewport=new fe;let P=[x,T],D=new Wo,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=b[Z];return K===void 0&&(K=new ts,b[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=b[Z];return K===void 0&&(K=new ts,b[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=b[Z];return K===void 0&&(K=new ts,b[Z]=K),K.getHandSpace()};function H(Z){let K=w.indexOf(Z.inputSource);if(K===-1)return;let mt=b[K];mt!==void 0&&(mt.update(Z.inputSource,Z.frame,c||a),mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",B);for(let Z=0;Z<b.length;Z++){let K=w[Z];K!==null&&(w[Z]=null,b[Z].disconnect(K))}F=null,V=null,p.reset();for(let Z in f)delete f[Z];t.setRenderTarget(M),m=null,d=null,u=null,i=null,S=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=function(Z){return Fa(this,null,function*(){if(i=Z,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",k),i.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=v.stencil?Wi:Jn,Nt=v.stencil?ls:Gn);let Zt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new mn(d.textureWidth,d.textureHeight,{format:Rn,type:rn,depthTexture:new Bi(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,mt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new mn(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield i.requestReferenceSpace(o),wt.setContext(i),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Z){for(let K=0;K<Z.removed.length;K++){let mt=Z.removed[K],Nt=w.indexOf(mt);Nt>=0&&(w[Nt]=null,b[Nt].disconnect(mt))}for(let K=0;K<Z.added.length;K++){let mt=Z.added[K],Nt=w.indexOf(mt);if(Nt===-1){for(let Zt=0;Zt<b.length;Zt++)if(Zt>=w.length){w.push(mt),Nt=Zt;break}else if(w[Zt]===null){w[Zt]=mt,Nt=Zt;break}if(Nt===-1)break}let vt=b[Nt];vt&&vt.connect(mt)}}let Y=new O,nt=new O;function et(Z,K,mt){Y.setFromMatrixPosition(K.matrixWorld),nt.setFromMatrixPosition(mt.matrixWorld);let Nt=Y.distanceTo(nt),vt=K.projectionMatrix.elements,Zt=mt.projectionMatrix.elements,Pe=vt[14]/(vt[10]-1),Yt=vt[14]/(vt[10]+1),jt=(vt[9]+1)/vt[5],ie=(vt[9]-1)/vt[5],zt=(vt[8]-1)/vt[0],be=(Zt[8]+1)/Zt[0],I=Pe*zt,Te=Pe*be,$t=Nt/(-zt+be),oe=$t*-zt;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(oe),Z.translateZ($t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),vt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Mt=Pe+$t,C=Yt+$t,y=I-oe,N=Te+(Nt-oe),q=jt*Yt/C*Mt,$=ie*Yt/C*Mt;Z.projectionMatrix.makePerspective(y,N,q,$,Mt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let K=Z.near,mt=Z.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(mt=p.depthFar)),D.near=T.near=x.near=K,D.far=T.far=x.far=mt,(F!==D.near||V!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,V=D.far),D.layers.mask=Z.layers.mask|6,x.layers.mask=D.layers.mask&3,T.layers.mask=D.layers.mask&5;let Nt=Z.parent,vt=D.cameras;ot(D,Nt);for(let Zt=0;Zt<vt.length;Zt++)ot(vt[Zt],Nt);vt.length===2?et(D,x,T):D.projectionMatrix.copy(x.projectionMatrix),dt(Z,D,Nt)};function dt(Z,K,mt){mt===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Z){return f[Z]};let Et=null;function xt(Z,K){if(h=K.getViewerPose(c||a),_=K,h!==null){let mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Nt=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,Nt=!0);for(let Yt=0;Yt<mt.length;Yt++){let jt=mt[Yt],ie=null;if(m!==null)ie=m.getViewport(jt);else{let be=u.getViewSubImage(d,jt);ie=be.viewport,Yt===0&&(t.setRenderTargetTextures(S,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(S))}let zt=P[Yt];zt===void 0&&(zt=new Ne,zt.layers.enable(Yt),zt.viewport=new fe,P[Yt]=zt),zt.matrix.fromArray(jt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(jt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ie.x,ie.y,ie.width,ie.height),Yt===0&&(D.matrix.copy(zt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Nt===!0&&D.cameras.push(zt)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let Yt=u.getDepthInformation(mt[0]);Yt&&Yt.isValid&&Yt.texture&&p.init(Yt,i.renderState)}if(vt&&vt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Yt=0;Yt<mt.length;Yt++){let jt=mt[Yt].camera;if(jt){let ie=f[jt];ie||(ie=new Ks,f[jt]=ie);let zt=u.getCameraImage(jt);ie.sourceTexture=zt}}}}for(let mt=0;mt<b.length;mt++){let Nt=w[mt],vt=b[mt];Nt!==null&&vt!==void 0&&vt.update(Nt,K,c||a)}Et&&Et(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let wt=new Df;wt.setAnimationLoop(xt),this.setAnimationLoop=function(Z){Et=Z},this.dispose=function(){}}},Sr=new mi,_v=new he;function xv(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,wh(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,v,M):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===ze&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===ze&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=t.get(f),M=v.envMap,S=v.envMapRotation;M&&(p.envMap.value=M,Sr.copy(S),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),p.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Sr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=M*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){let v=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vv(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=i[v.id];S===void 0&&(_(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",p));let b=M.program;n.updateUBOMapping(v,b);let w=t.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function h(v){let M=u();v.__bindingPointIndex=M;let S=r.createBuffer(),b=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=i[v.id],S=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=S.length;w<A;w++){let R=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,T=R.length;x<T;x++){let P=R[x];if(m(P,w,x,b)===!0){let D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],V=0;for(let H=0;H<F.length;H++){let k=F[H],B=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,D+V,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,M,S,b){let w=v.value,A=M+"_"+S;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{let R=b[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(v){let M=v.uniforms,S=0,b=16;for(let A=0,R=M.length;A<R;A++){let x=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,P=x.length;T<P;T++){let D=x[T],F=Array.isArray(D.value)?D.value:[D.value];for(let V=0,H=F.length;V<H;V++){let k=F[V],B=g(k),Y=S%b,nt=Y%B.boundary,et=Y+nt;S+=nt,et!==0&&b-et<B.storage&&(S+=b-et),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=B.storage}}}let w=S%b;return w>0&&(S+=b-w),v.__size=S,v.__cache={},this}function g(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):It("WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){let M=v.target;M.removeEventListener("dispose",p);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function f(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}var yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function Mv(){return Qn===null&&(Qn=new Ro(yv,16,16,vr,Kn),Qn.name="DFG_LUT",Qn.minFilter=Be,Qn.magFilter=Be,Qn.wrapS=Zn,Qn.wrapT=Zn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var Zl=class{constructor(t={}){let{canvas:e=af(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=rn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let g=m,p=new Set([cl,ll,ol]),f=new Set([rn,Gn,os,ls,sl,al]),v=new Uint32Array(4),M=new Int32Array(4),S=null,b=null,w=[],A=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=pn;let P=0,D=0,F=null,V=-1,H=null,k=new fe,B=new fe,Y=null,nt=new Lt(0),et=0,ot=e.width,dt=e.height,Et=1,xt=null,wt=null,Z=new fe(0,0,ot,dt),K=new fe(0,0,ot,dt),mt=!1,Nt=new ns,vt=!1,Zt=!1,Pe=new he,Yt=new O,jt=new fe,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function be(){return F===null?Et:1}let I=n;function Te(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),I===null){let U="webgl2";if(I=Te(U,E),I===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pt("WebGLRenderer: "+E.message),E}let $t,oe,Mt,C,y,N,q,$,X,bt,rt,yt,Dt,Q,at,_t,St,st,kt,L,ut,tt,ft,j;function J(){$t=new C_(I),$t.init(),tt=new pv(I,$t),oe=new v_(I,$t,t,tt),Mt=new dv(I,$t),oe.reversedDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),C=new I_(I),y=new Kx,N=new fv(I,$t,Mt,y,oe,tt,C),q=new M_(x),$=new A_(x),X=new Nm(I),ft=new __(I,X),bt=new R_(I,X,C,ft),rt=new L_(I,bt,X,C),kt=new D_(I,oe,N),_t=new y_(y),yt=new $x(x,q,$,$t,oe,ft,_t),Dt=new xv(x,y),Q=new Qx,at=new sv($t),st=new g_(x,q,$,Mt,rt,_,l),St=new hv(x,rt,oe),j=new vv(I,C,oe,Mt),L=new x_(I,$t,C),ut=new P_(I,$t,C),C.programs=yt.programs,x.capabilities=oe,x.extensions=$t,x.properties=y,x.renderLists=Q,x.shadowMap=St,x.state=Mt,x.info=C}J(),g!==rn&&(R=new N_(g,e.width,e.height,i,s));let it=new Hh(x,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(E){E!==void 0&&(Et=E,this.setSize(ot,dt,!1))},this.getSize=function(E){return E.set(ot,dt)},this.setSize=function(E,U,W=!0){if(it.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,dt=U,e.width=Math.floor(E*Et),e.height=Math.floor(U*Et),W===!0&&(e.style.width=E+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ot*Et,dt*Et).floor()},this.setDrawingBufferSize=function(E,U,W){ot=E,dt=U,Et=W,e.width=Math.floor(E*W),e.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(g===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,W,G){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,W,G),Mt.viewport(k.copy(Z).multiplyScalar(Et).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,U,W,G){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,W,G),Mt.scissor(B.copy(K).multiplyScalar(Et).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(E){Mt.setScissorTest(mt=E)},this.setOpaqueSort=function(E){xt=E},this.setTransparentSort=function(E){wt=E},this.getClearColor=function(E){return E.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let G=0;if(E){let z=!1;if(F!==null){let lt=F.texture.format;z=p.has(lt)}if(z){let lt=F.texture.type,pt=f.has(lt),ht=st.getClearColor(),gt=st.getClearAlpha(),Tt=ht.r,Rt=ht.g,At=ht.b;pt?(v[0]=Tt,v[1]=Rt,v[2]=At,v[3]=gt,I.clearBufferuiv(I.COLOR,0,v)):(M[0]=Tt,M[1]=Rt,M[2]=At,M[3]=gt,I.clearBufferiv(I.COLOR,0,M))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),W&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),st.dispose(),Q.dispose(),at.dispose(),y.dispose(),q.dispose(),$.dispose(),rt.dispose(),ft.dispose(),j.dispose(),yt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ou),it.removeEventListener("sessionend",Bu),er.stop()};function Ut(E){E.preventDefault(),Th("WebGLRenderer: Context Lost."),T=!0}function le(){Th("WebGLRenderer: Context Restored."),T=!1;let E=C.autoReset,U=St.enabled,W=St.autoUpdate,G=St.needsUpdate,z=St.type;J(),C.autoReset=E,St.enabled=U,St.autoUpdate=W,St.needsUpdate=G,St.type=z}function Qt(E){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wn(E){let U=E.target;U.removeEventListener("dispose",Wn),si(U)}function si(E){Xp(E),y.remove(E)}function Xp(E){let U=y.get(E).programs;U!==void 0&&(U.forEach(function(W){yt.releaseProgram(W)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,G,z,lt){U===null&&(U=ie);let pt=z.isMesh&&z.matrixWorld.determinant()<0,ht=Yp(E,U,W,G,z);Mt.setMaterial(G,pt);let gt=W.index,Tt=1;if(G.wireframe===!0){if(gt=bt.getWireframeAttribute(W),gt===void 0)return;Tt=2}let Rt=W.drawRange,At=W.attributes.position,Vt=Rt.start*Tt,ee=(Rt.start+Rt.count)*Tt;lt!==null&&(Vt=Math.max(Vt,lt.start*Tt),ee=Math.min(ee,(lt.start+lt.count)*Tt)),gt!==null?(Vt=Math.max(Vt,0),ee=Math.min(ee,gt.count)):At!=null&&(Vt=Math.max(Vt,0),ee=Math.min(ee,At.count));let _e=ee-Vt;if(_e<0||_e===1/0)return;ft.setup(z,G,ht,W,gt);let xe,re=L;if(gt!==null&&(xe=X.get(gt),re=ut,re.setIndex(xe)),z.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*be()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(z.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*be()),z.isLineSegments?re.setMode(I.LINES):z.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else z.isPoints?re.setMode(I.POINTS):z.isSprite&&re.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)$r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ct=z._multiDrawStarts,te=z._multiDrawCounts,Jt=z._multiDrawCount,hn=gt?X.get(gt).bytesPerElement:1,Fr=y.get(G).currentProgram.getUniforms();for(let un=0;un<Jt;un++)Fr.setValue(I,"_gl_DrawID",un),re.render(Ct[un]/hn,te[un])}else if(z.isInstancedMesh)re.renderInstances(Vt,_e,z.count);else if(W.isInstancedBufferGeometry){let Ct=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,te=Math.min(W.instanceCount,Ct);re.renderInstances(Vt,_e,te)}else re.render(Vt,_e)};function Uu(E,U,W){E.transparent===!0&&E.side===Ee&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,Da(E,U,W),E.side=di,E.needsUpdate=!0,Da(E,U,W),E.side=Ee):Da(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),b=at.get(W),b.init(U),A.push(b),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();let G=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let lt=z.material;if(lt)if(Array.isArray(lt))for(let pt=0;pt<lt.length;pt++){let ht=lt[pt];Uu(ht,W,z),G.add(ht)}else Uu(lt,W,z),G.add(lt)}),b=A.pop(),G},this.compileAsync=function(E,U,W=null){let G=this.compile(E,U,W);return new Promise(z=>{function lt(){if(G.forEach(function(pt){y.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){z(E);return}setTimeout(lt,10)}$t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let pc=null;function qp(E){pc&&pc(E)}function Ou(){er.stop()}function Bu(){er.start()}let er=new Df;er.setAnimationLoop(qp),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){pc=E,it.setAnimationLoop(E),E===null?er.stop():er.start()},it.addEventListener("sessionstart",Ou),it.addEventListener("sessionend",Bu),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let W=it.enabled===!0&&it.isPresenting===!0,G=R!==null&&(F===null||W)&&R.begin(x,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,F),b=at.get(E,A.length),b.init(U),A.push(b),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Nt.setFromProjectionMatrix(Pe,Bn,U.reversedDepth),Zt=this.localClippingEnabled,vt=_t.init(this.clippingPlanes,Zt),S=Q.get(E,w.length),S.init(),w.push(S),it.enabled===!0&&it.isPresenting===!0){let pt=x.xr.getDepthSensingMesh();pt!==null&&mc(pt,U,-1/0,x.sortObjects)}mc(E,U,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(xt,wt),zt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,zt&&st.addToRenderList(S,E),this.info.render.frame++,vt===!0&&_t.beginShadows();let z=b.state.shadowsArray;if(St.render(z,E,U),vt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&R.hasRenderPass())===!1){let pt=S.opaque,ht=S.transmissive;if(b.setupLights(),U.isArrayCamera){let gt=U.cameras;if(ht.length>0)for(let Tt=0,Rt=gt.length;Tt<Rt;Tt++){let At=gt[Tt];ku(pt,ht,E,At)}zt&&st.render(E);for(let Tt=0,Rt=gt.length;Tt<Rt;Tt++){let At=gt[Tt];zu(S,E,At,At.viewport)}}else ht.length>0&&ku(pt,ht,E,U),zt&&st.render(E),zu(S,E,U)}F!==null&&D===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),G&&R.end(x),E.isScene===!0&&E.onAfterRender(x,E,U),ft.resetDefaultState(),V=-1,H=null,A.pop(),A.length>0?(b=A[A.length-1],vt===!0&&_t.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function mc(E,U,W,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Nt.intersectsSprite(E)){G&&jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pe);let pt=rt.update(E),ht=E.material;ht.visible&&S.push(E,pt,ht,W,jt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Nt.intersectsObject(E))){let pt=rt.update(E),ht=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),jt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),jt.copy(pt.boundingSphere.center)),jt.applyMatrix4(E.matrixWorld).applyMatrix4(Pe)),Array.isArray(ht)){let gt=pt.groups;for(let Tt=0,Rt=gt.length;Tt<Rt;Tt++){let At=gt[Tt],Vt=ht[At.materialIndex];Vt&&Vt.visible&&S.push(E,pt,Vt,W,jt.z,At)}}else ht.visible&&S.push(E,pt,ht,W,jt.z,null)}}let lt=E.children;for(let pt=0,ht=lt.length;pt<ht;pt++)mc(lt[pt],U,W,G)}function zu(E,U,W,G){let{opaque:z,transmissive:lt,transparent:pt}=E;b.setupLightsView(W),vt===!0&&_t.setGlobalState(x.clippingPlanes,W),G&&Mt.viewport(k.copy(G)),z.length>0&&Ia(z,U,W),lt.length>0&&Ia(lt,U,W),pt.length>0&&Ia(pt,U,W),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ku(E,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Vt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new mn(1,1,{generateMipmaps:!0,type:Vt?Kn:rn,minFilter:Hi,samples:oe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let lt=b.state.transmissionRenderTarget[G.id],pt=G.viewport||k;lt.setSize(pt.z*x.transmissionResolutionScale,pt.w*x.transmissionResolutionScale);let ht=x.getRenderTarget(),gt=x.getActiveCubeFace(),Tt=x.getActiveMipmapLevel();x.setRenderTarget(lt),x.getClearColor(nt),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),zt&&st.render(W);let Rt=x.toneMapping;x.toneMapping=Vn;let At=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),vt===!0&&_t.setGlobalState(x.clippingPlanes,G),Ia(E,W,G),N.updateMultisampleRenderTarget(lt),N.updateRenderTargetMipmap(lt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ee=0,_e=U.length;ee<_e;ee++){let xe=U[ee],{object:re,geometry:Ct,material:te,group:Jt}=xe;if(te.side===Ee&&re.layers.test(G.layers)){let hn=te.side;te.side=ze,te.needsUpdate=!0,Vu(re,W,G,Ct,te,Jt),te.side=hn,te.needsUpdate=!0,Vt=!0}}Vt===!0&&(N.updateMultisampleRenderTarget(lt),N.updateRenderTargetMipmap(lt))}x.setRenderTarget(ht,gt,Tt),x.setClearColor(nt,et),At!==void 0&&(G.viewport=At),x.toneMapping=Rt}function Ia(E,U,W){let G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,lt=E.length;z<lt;z++){let pt=E[z],{object:ht,geometry:gt,group:Tt}=pt,Rt=pt.material;Rt.allowOverride===!0&&G!==null&&(Rt=G),ht.layers.test(W.layers)&&Vu(ht,U,W,gt,Rt,Tt)}}function Vu(E,U,W,G,z,lt){E.onBeforeRender(x,U,W,G,z,lt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,W,G,E,lt),z.transparent===!0&&z.side===Ee&&z.forceSinglePass===!1?(z.side=ze,z.needsUpdate=!0,x.renderBufferDirect(W,U,G,z,E,lt),z.side=di,z.needsUpdate=!0,x.renderBufferDirect(W,U,G,z,E,lt),z.side=Ee):x.renderBufferDirect(W,U,G,z,E,lt),E.onAfterRender(x,U,W,G,z,lt)}function Da(E,U,W){U.isScene!==!0&&(U=ie);let G=y.get(E),z=b.state.lights,lt=b.state.shadowsArray,pt=z.state.version,ht=yt.getParameters(E,z.state,lt,U,W),gt=yt.getProgramCacheKey(ht),Tt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?$:q).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",Wn),Tt=new Map,G.programs=Tt);let Rt=Tt.get(gt);if(Rt!==void 0){if(G.currentProgram===Rt&&G.lightsStateVersion===pt)return Hu(E,ht),Rt}else ht.uniforms=yt.getUniforms(E),E.onBeforeCompile(ht,x),Rt=yt.acquireProgram(ht,gt),Tt.set(gt,Rt),G.uniforms=ht.uniforms;let At=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=_t.uniform),Hu(E,ht),G.needsLights=Jp(E),G.lightsStateVersion=pt,G.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.directionalShadowMap.value=z.state.directionalShadowMap,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotShadowMap.value=z.state.spotShadowMap,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMap.value=z.state.pointShadowMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Rt,G.uniformsList=null,Rt}function Gu(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=hs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Hu(E,U){let W=y.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Yp(E,U,W,G,z){U.isScene!==!0&&(U=ie),N.resetTextureUnits();let lt=U.fog,pt=G.isMeshStandardMaterial?U.environment:null,ht=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:hr,gt=(G.isMeshStandardMaterial?$:q).get(G.envMap||pt),Tt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Rt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!W.morphAttributes.position,Vt=!!W.morphAttributes.normal,ee=!!W.morphAttributes.color,_e=Vn;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_e=x.toneMapping);let xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=xe!==void 0?xe.length:0,Ct=y.get(G),te=b.state.lights;if(vt===!0&&(Zt===!0||E!==H)){let Ze=E===H&&G.id===V;_t.setState(G,E,Ze)}let Jt=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==te.state.version||Ct.outputColorSpace!==ht||z.isBatchedMesh&&Ct.batching===!1||!z.isBatchedMesh&&Ct.batching===!0||z.isBatchedMesh&&Ct.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ct.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ct.instancing===!1||!z.isInstancedMesh&&Ct.instancing===!0||z.isSkinnedMesh&&Ct.skinning===!1||!z.isSkinnedMesh&&Ct.skinning===!0||z.isInstancedMesh&&Ct.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ct.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ct.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ct.instancingMorph===!1&&z.morphTexture!==null||Ct.envMap!==gt||G.fog===!0&&Ct.fog!==lt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==_t.numPlanes||Ct.numIntersection!==_t.numIntersection)||Ct.vertexAlphas!==Tt||Ct.vertexTangents!==Rt||Ct.morphTargets!==At||Ct.morphNormals!==Vt||Ct.morphColors!==ee||Ct.toneMapping!==_e||Ct.morphTargetsCount!==re)&&(Jt=!0):(Jt=!0,Ct.__version=G.version);let hn=Ct.currentProgram;Jt===!0&&(hn=Da(G,U,z));let Fr=!1,un=!1,Ts=!1,ce=hn.getUniforms(),Ke=Ct.uniforms;if(Mt.useProgram(hn.program)&&(Fr=!0,un=!0,Ts=!0),G.id!==V&&(V=G.id,un=!0),Fr||H!==E){Mt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(I,"projectionMatrix",E.projectionMatrix),ce.setValue(I,"viewMatrix",E.matrixWorldInverse);let je=ce.map.cameraPosition;je!==void 0&&je.setValue(I,Yt.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ce.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,un=!0,Ts=!0)}if(Ct.needsLights&&(te.state.directionalShadowMap.length>0&&ce.setValue(I,"directionalShadowMap",te.state.directionalShadowMap,N),te.state.spotShadowMap.length>0&&ce.setValue(I,"spotShadowMap",te.state.spotShadowMap,N),te.state.pointShadowMap.length>0&&ce.setValue(I,"pointShadowMap",te.state.pointShadowMap,N)),z.isSkinnedMesh){ce.setOptional(I,z,"bindMatrix"),ce.setOptional(I,z,"bindMatrixInverse");let Ze=z.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ce.setValue(I,"boneTexture",Ze.boneTexture,N))}z.isBatchedMesh&&(ce.setOptional(I,z,"batchingTexture"),ce.setValue(I,"batchingTexture",z._matricesTexture,N),ce.setOptional(I,z,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",z._indirectTexture,N),ce.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",z._colorsTexture,N));let Sn=W.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&kt.update(z,W,hn),(un||Ct.receiveShadow!==z.receiveShadow)&&(Ct.receiveShadow=z.receiveShadow,ce.setValue(I,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ke.envMap.value=gt,Ke.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Ke.envMapIntensity.value=U.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Mv()),un&&(ce.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Zp(Ke,Ts),lt&&G.fog===!0&&Dt.refreshFogUniforms(Ke,lt),Dt.refreshMaterialUniforms(Ke,G,Et,dt,b.state.transmissionRenderTarget[E.id]),hs.upload(I,Gu(Ct),Ke,N)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(I,Gu(Ct),Ke,N),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ce.setValue(I,"center",z.center),ce.setValue(I,"modelViewMatrix",z.modelViewMatrix),ce.setValue(I,"normalMatrix",z.normalMatrix),ce.setValue(I,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ze=G.uniformsGroups;for(let je=0,gc=Ze.length;je<gc;je++){let nr=Ze[je];j.update(nr,hn),j.bind(nr,hn)}}return hn}function Zp(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Jp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,U,W){let G=y.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=U,y.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let W=y.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};let $p=I.createFramebuffer();this.setRenderTarget=function(E,U=0,W=0){F=E,P=U,D=W;let G=null,z=!1,lt=!1;if(E){let ht=y.get(E);if(ht.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(I.FRAMEBUFFER,ht.__webglFramebuffer),k.copy(E.viewport),B.copy(E.scissor),Y=E.scissorTest,Mt.viewport(k),Mt.scissor(B),Mt.setScissorTest(Y),V=-1;return}else if(ht.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(ht.__hasExternalTextures)N.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Rt=E.depthTexture;if(ht.__boundDepthTexture!==Rt){if(Rt!==null&&y.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}let gt=E.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(lt=!0);let Tt=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?G=Tt[U][W]:G=Tt[U],z=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?G=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?G=Tt[W]:G=Tt,k.copy(E.viewport),B.copy(E.scissor),Y=E.scissorTest}else k.copy(Z).multiplyScalar(Et).floor(),B.copy(K).multiplyScalar(Et).floor(),Y=mt;if(W!==0&&(G=$p),Mt.bindFramebuffer(I.FRAMEBUFFER,G)&&Mt.drawBuffers(E,G),Mt.viewport(k),Mt.scissor(B),Mt.setScissorTest(Y),z){let ht=y.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,W)}else if(lt){let ht=U;for(let gt=0;gt<E.textures.length;gt++){let Tt=y.get(E.textures[gt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+gt,Tt.__webglTexture,W,ht)}}else if(E!==null&&W!==0){let ht=y.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ht.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(E,U,W,G,z,lt,pt,ht=0){if(!(E&&E.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt){Mt.bindFramebuffer(I.FRAMEBUFFER,gt);try{let Tt=E.textures[ht],Rt=Tt.format,At=Tt.type;if(!oe.textureFormatReadable(Rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(At)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&W>=0&&W<=E.height-z&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ht),I.readPixels(U,W,G,z,tt.convert(Rt),tt.convert(At),lt))}finally{let Tt=F!==null?y.get(F).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=function(E,U,W,G,z,lt,pt,ht=0){return Fa(this,null,function*(){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(gt=gt[pt]),gt)if(U>=0&&U<=E.width-G&&W>=0&&W<=E.height-z){Mt.bindFramebuffer(I.FRAMEBUFFER,gt);let Tt=E.textures[ht],Rt=Tt.format,At=Tt.type;if(!oe.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Vt),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ht),I.readPixels(U,W,G,z,tt.convert(Rt),tt.convert(At),0);let ee=F!==null?y.get(F).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,ee);let _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),yield of(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Vt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(Vt),I.deleteSync(_e),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(E,U=null,W=0){let G=Math.pow(2,-W),z=Math.floor(E.image.width*G),lt=Math.floor(E.image.height*G),pt=U!==null?U.x:0,ht=U!==null?U.y:0;N.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,pt,ht,z,lt),Mt.unbindTexture()};let Kp=I.createFramebuffer(),jp=I.createFramebuffer();this.copyTextureToTexture=function(E,U,W=null,G=null,z=0,lt=null){lt===null&&(z!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=z,z=0):lt=0);let pt,ht,gt,Tt,Rt,At,Vt,ee,_e,xe=E.isCompressedTexture?E.mipmaps[lt]:E.image;if(W!==null)pt=W.max.x-W.min.x,ht=W.max.y-W.min.y,gt=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Rt=W.min.y,At=W.isBox3?W.min.z:0;else{let Sn=Math.pow(2,-z);pt=Math.floor(xe.width*Sn),ht=Math.floor(xe.height*Sn),E.isDataArrayTexture?gt=xe.depth:E.isData3DTexture?gt=Math.floor(xe.depth*Sn):gt=1,Tt=0,Rt=0,At=0}G!==null?(Vt=G.x,ee=G.y,_e=G.z):(Vt=0,ee=0,_e=0);let re=tt.convert(U.format),Ct=tt.convert(U.type),te;U.isData3DTexture?(N.setTexture3D(U,0),te=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),te=I.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),te=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Jt=I.getParameter(I.UNPACK_ROW_LENGTH),hn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fr=I.getParameter(I.UNPACK_SKIP_PIXELS),un=I.getParameter(I.UNPACK_SKIP_ROWS),Ts=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At);let ce=E.isDataArrayTexture||E.isData3DTexture,Ke=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Sn=y.get(E),Ze=y.get(U),je=y.get(Sn.__renderTarget),gc=y.get(Ze.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,je.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,gc.__webglFramebuffer);for(let nr=0;nr<gt;nr++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(E).__webglTexture,z,At+nr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(U).__webglTexture,lt,_e+nr)),I.blitFramebuffer(Tt,Rt,pt,ht,Vt,ee,pt,ht,I.DEPTH_BUFFER_BIT,I.NEAREST);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||y.has(E)){let Sn=y.get(E),Ze=y.get(U);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,Kp),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,jp);for(let je=0;je<gt;je++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,z,At+je):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,z),Ke?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,lt,_e+je):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ze.__webglTexture,lt),z!==0?I.blitFramebuffer(Tt,Rt,pt,ht,Vt,ee,pt,ht,I.COLOR_BUFFER_BIT,I.NEAREST):Ke?I.copyTexSubImage3D(te,lt,Vt,ee,_e+je,Tt,Rt,pt,ht):I.copyTexSubImage2D(te,lt,Vt,ee,Tt,Rt,pt,ht);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ke?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(te,lt,Vt,ee,_e,pt,ht,gt,re,Ct,xe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(te,lt,Vt,ee,_e,pt,ht,gt,re,xe.data):I.texSubImage3D(te,lt,Vt,ee,_e,pt,ht,gt,re,Ct,xe):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,lt,Vt,ee,pt,ht,re,Ct,xe.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,lt,Vt,ee,xe.width,xe.height,re,xe.data):I.texSubImage2D(I.TEXTURE_2D,lt,Vt,ee,pt,ht,re,Ct,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,hn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fr),I.pixelStorei(I.UNPACK_SKIP_ROWS,un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ts),lt===0&&U.generateMipmaps&&I.generateMipmap(te),Mt.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){P=0,D=0,F=null,Mt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};function xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},ou,Ve,de,In=1e8,ae=1/In,Kh=Math.PI*2,bv=Kh/4,Tv=0,qf=Math.sqrt,wv=Math.cos,Ev=Math.sin,Re=function(t){return typeof t=="string"},ye=function(t){return typeof t=="function"},yi=function(t){return typeof t=="number"},ac=function(t){return typeof t>"u"},ii=function(t){return typeof t=="object"},on=function(t){return t!==!1},lu=function(){return typeof window<"u"},Kl=function(t){return ye(t)||Re(t)},Yf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qe=Array.isArray,Av=/random\([^)]+\)/g,Cv=/,\s*/g,Of=/(?:-?\.?\d|\.)+/gi,cu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hu=/[+-]=-?[.\d]+/,Rv=/[^,'"\[\]\s]+/gi,Pv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,me,ei,jh,uu,vn={},ec={},Zf,Jf=function(t){return(ec=ps(t,vn))&&Ye},oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Sa=function(t,e){return!e&&console.warn(t)},$f=function(t,e){return t&&(vn[t]=e)&&ec&&(ec[t]=e)||vn},ba=function(){return 0},Iv={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},Dv={suppressEvents:!0},du={},Yi=[],Qh={},Kf,sn={},Xh={},Bf=30,Ql=[],fu="",pu=function(t){var e=t[0],n,i;if(ii(e)||ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ql.length;i--&&!Ql[i].targetTest(e););n=Ql[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xu(t[i],n)))||t.splice(i,1);return t},Zi=function(t){return t._gsap||pu(Dn(t))[0]._gsap},mu=function(t,e,n){return(n=t[e])&&ye(n)?t[e]():ac(n)&&t.getAttribute&&t.getAttribute(e)||n},Je=function(t,e){return(t=t.split(",")).forEach(e)||t},Me=function(t){return Math.round(t*1e5)/1e5||0},pe=function(t){return Math.round(t*1e7)/1e7||0},Cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Lv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},nc=function(){var t=Yi.length,e=Yi.slice(0),n,i;for(Qh={},Yi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gu=function(t){return!!(t._initted||t._startAt||t.add)},jf=function(t,e,n,i){Yi.length&&!Ve&&nc(),t.render(e,n,i||!!(Ve&&e<0&&gu(t))),Yi.length&&!Ve&&nc()},Qf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Rv).length<2?e:Re(t)?t.trim():t},tp=function(t){return t},yn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Fv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ps=function(t,e){for(var n in e)t[n]=e[n];return t},zf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ii(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ic=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},va=function(t){var e=t.parent||me,n=t.keyframes?Fv(qe(t.keyframes)):yn;if(on(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Nv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ep=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},lc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ji=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Tr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Uv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},tu=function(t,e,n,i){return t._startAt&&(Ve?t._startAt.revert(jl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ov=function r(t){return!t||t._ts&&r(t.parent)},kf=function(t){return t._repeat?ms(t._tTime,t=t.duration()+t._rDelay)*t:0},ms=function(t,e){var n=Math.floor(t=pe(t/e));return t&&n===t?n-1:n},rc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},cc=function(t){return t._end=pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ae)||0))},hc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),cc(t),n._dirty||Tr(n,t)),t},np=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=rc(t.rawTime(),e),(!e._dur||Ea(0,e.totalDuration(),n)-e._tTime>ae)&&e.render(n,!0)),Tr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ae}},ni=function(t,e,n,i){return e.parent&&Ji(e),e._start=pe((yi(n)?n:n||t!==me?Pn(t,n,e):t._time)+e._delay),e._end=pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ep(t,e,"_first","_last",t._sort?"_start":0),eu(e)||(t._recent=e),i||np(t,e),t._ts<0&&hc(t,t._tTime),t},ip=function(t,e){return(vn.ScrollTrigger||oc("scrollTrigger",e))&&vn.ScrollTrigger.create(e,t)},rp=function(t,e,n,i,s){if(Mu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ve&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kf!==an.frame)return Yi.push(t),t._lazy=[s,i],1},Bv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},eu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},zv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Bv(t)&&!(!t._initted&&eu(t))||(t._ts<0||t._dp._ts<0)&&!eu(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Ea(0,t._tDur,e),h=ms(l,o),t._yoyo&&h&1&&(a=1-a),h!==ms(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ve||i||t._zTime===ae||!e&&t._zTime){if(!t._initted&&rp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ae:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&tu(t,e,n,!0),t._onUpdate&&!n&&xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ji(t,1),!n&&!Ve&&(xn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},gs=function(t,e,n,i){var s=t._repeat,a=pe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:pe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&hc(t,t._tTime=t._tDur*o),t.parent&&cc(t),n||Tr(t.parent,t),t},Vf=function(t){return t instanceof ke?Tr(t):gs(t,t._dur)},Vv={_start:0,endTime:ba,totalDuration:ba},Pn=function r(t,e,n){var i=t.labels,s=t._recent||Vv,a=t.duration()>=In?s.endTime(!1):t._dur,o,l,c;return Re(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(qe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ya=function(t,e,n){var i=yi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=on(l.vars.inherit)&&l.parent;a.immediateRender=on(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Se(e[0],a,e[s+1])},$i=function(t,e){return t||t===0?e(t):e},Ea=function(t,e,n){return n<t?t:n>e?e:n},Ge=function(t,e){return!Re(t)||!(e=Pv.exec(t))?"":e[1]},Gv=function(t,e,n){return $i(n,function(i){return Ea(t,e,i)})},nu=[].slice,sp=function(t,e){return t&&ii(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ii(t[0]))&&!t.nodeType&&t!==ei},Hv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Re(i)&&!e||sp(i,1)?(s=n).push.apply(s,Dn(i)):n.push(i)})||n},Dn=function(t,e,n){return de&&!e&&de.selector?de.selector(t):Re(t)&&!n&&(jh||!_s())?nu.call((e||uu).querySelectorAll(t),0):qe(t)?Hv(t,n):sp(t)?nu.call(t,0):t?[t]:[]},iu=function(t){return t=Dn(t)[0]||Sa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Dn(e,n.querySelectorAll?n:n===t?Sa("Invalid scope")||uu.createElement("div"):t)}},ap=function(t){return t.sort(function(){return .5-Math.random()})},op=function(t){if(ye(t))return t;var e=ii(t)?t:{each:t},n=wr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Re(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,m,_){var g=(_||e).length,p=a[g],f,v,M,S,b,w,A,R,x;if(!p){if(x=e.grid==="auto"?0:(e.grid||[1,In])[1],!x){for(A=-In;A<(A=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(p=a[g]=[],f=l?Math.min(x,g)*h-.5:i%x,v=x===In?0:l?g*u/x-.5:i/x|0,A=0,R=In,w=0;w<g;w++)M=w%x-f,S=v-(w/x|0),p[w]=b=c?Math.abs(c==="y"?S:M):qf(M*M+S*S),b>A&&(A=b),b<R&&(R=b);i==="random"&&ap(p),p.max=A-R,p.min=R,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Ge(e.amount||e.each)||0,n=n&&g<0?gp(n):n}return g=(p[d]-p.min)/p.max||0,pe(p.b+(n?n(g):g)*p.v)+p.u}},ru=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(yi(n)?0:Ge(n))}},lp=function(t,e){var n=qe(t),i,s;return!n&&ii(t)&&(i=n=t.radius||In,t.values?(t=Dn(t.values),(s=!yi(t[0]))&&(i*=i)):t=ru(t.increment)),$i(e,n?ye(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=In,h=0,u=t.length,d,m;u--;)s?(d=t[u].x-o,m=t[u].y-l,d=d*d+m*m):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||yi(a)?h:h+Ge(a)}:ru(t))},cp=function(t,e,n,i){return $i(qe(t)?!e:n===!0?!!(n=0):!i,function(){return qe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Wv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Xv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ge(n))}},qv=function(t,e,n){return up(t,e,0,1,n)},hp=function(t,e,n){return $i(n,function(i){return t[~~e(i)]})},Yv=function r(t,e,n){var i=e-t;return qe(t)?hp(t,r(0,t.length),e):$i(n,function(s){return(i+(s-t)%i)%i+t})},Zv=function r(t,e,n){var i=e-t,s=i*2;return qe(t)?hp(t,r(0,t.length-1),e):$i(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},xs=function(t){return t.replace(Av,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Cv);return cp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},up=function(t,e,n,i,s){var a=e-t,o=i-n;return $i(s,function(l){return n+((l-t)/a*o||0)})},Jv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Re(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(qe(t)&&!qe(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=ps(qe(t)?[]:{},t));if(!h){for(l in e)vu.call(o,t,l,"get",e[l]);s=function(_){return Tu(_,o)||(a?t.p:t)}}}return $i(n,s)},Gf=function(t,e,n){var i=t.labels,s=In,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xn=function(t,e,n){var i=t.vars,s=i[e],a=de,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Yi.length&&nc(),o&&(de=o),h=l?s.apply(c,l):s.call(c),de=a,h},_a=function(t){return Ji(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ve),t.progress()<1&&xn(t,"onInterrupt"),t},ds,dp=[],fp=function(t){if(t)if(t=!t.name&&t.default||t,lu()||t.headless){var e=t.name,n=ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ba,render:Tu,add:vu,kill:uy,modifier:hy,rawVars:0},a={targetTest:0,get:0,getSetter:uc,aliases:{},register:0};if(_s(),t!==i){if(sn[e])return;yn(i,yn(ic(t,s),a)),ps(i.prototype,ps(s,ic(t,a))),sn[i.prop=e]=i,t.targetTest&&(Ql.push(i),du[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}$f(e,i),t.register&&t.register(Ye,i,$e)}else dp.push(t)},se=255,xa={aqua:[0,se,se],lime:[0,se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,se],navy:[0,0,128],white:[se,se,se],olive:[128,128,0],yellow:[se,se,0],orange:[se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[se,0,0],pink:[se,192,203],cyan:[0,se,se],transparent:[se,se,se,0]},qh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*se+.5|0},pp=function(t,e,n){var i=t?yi(t)?[t>>16,t>>8&se,t&se]:0:xa.black,s,a,o,l,c,h,u,d,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xa[t])i=xa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&se,i&se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&se,t&se]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Of),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=qh(l+1/3,s,a),i[1]=qh(l,s,a),i[2]=qh(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(cu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Of)||xa.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/se,a=i[1]/se,o=i[2]/se,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(m=u-d,c=h>.5?m/(2-u-d):m/(u+d),l=u===s?(a-o)/m+(a<o?6:0):u===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},mp=function(t){var e=[],n=[],i=-1;return t.split(vi).forEach(function(s){var a=s.match(Ar)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Hf=function(t,e,n){var i="",s=(t+i).match(vi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=pp(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=mp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(vi,"1").split(Ar),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(vi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},vi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xa)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),$v=/hsl[a]?\(/,_u=function(t){var e=t.join(" "),n;if(vi.lastIndex=0,vi.test(e))return n=$v.test(e),t[1]=Hf(t[1],n),t[0]=Hf(t[0],n,mp(t[1])),!0},Ta,an=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,m,_=function g(p){var f=r()-i,v=p===!0,M,S,b,w;if((f>t||f<0)&&(n+=f-e),i+=f,b=i-n,M=b-a,(M>0||v)&&(w=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,a+=M+(M>=s?4:s-M),S=1),v||(l=c(g)),S)for(m=0;m<o.length;m++)o[m](b,d,w,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Zf&&(!jh&&lu()&&(ei=jh=window,uu=ei.document||{},vn.gsap=Ye,(ei.gsapVersions||(ei.gsapVersions=[])).push(Ye.version),Jf(ec||ei.GreenSockGlobals||!ei.gsap&&ei||{}),dp.forEach(fp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Ta=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ta=0,c=ba},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,f,v){var M=f?function(S,b,w,A){p(S,b,w,A),u.remove(M)}:p;return u.remove(p),o[v?"unshift":"push"](M),_s(),M},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},u}(),_s=function(){return!Ta&&an.wake()},Xt={},Kv=/^[\d.\-M][\d.\-,\s]/,jv=/["']/g,Qv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(jv,"").trim():+c,i=l.substr(o+1).trim();return e},ty=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ey=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Qv(e[1])]:ty(t).split(",").map(Qf)):Xt._CE&&Kv.test(t)?Xt._CE("",t):n},gp=function(t){return function(e){return 1-t(1-e)}},_p=function r(t,e){for(var n=t._first,i;n;)n instanceof ke?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},wr=function(t,e){return t&&(ye(t)?t:Xt[t]||ey(t))||e},Rr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Je(t,function(o){Xt[o]=vn[o]=s,Xt[a=o.toLowerCase()]=n;for(var l in s)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=s[l]}),s},xp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Yh=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Kh*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ev((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:xp(o);return s=Kh/s,l.config=function(c,h){return r(t,c,h)},l},Zh=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:xp(n);return i.config=function(s){return r(t,s)},i};Je("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Rr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;Rr("Elastic",Yh("in"),Yh("out"),Yh());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Rr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Rr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Rr("Circ",function(r){return-(qf(1-r*r)-1)});Rr("Sine",function(r){return r===1?1:-wv(r*bv)+1});Rr("Back",Zh("in"),Zh("out"),Zh());Xt.SteppedEase=Xt.steps=vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ae;return function(o){return((i*Ea(0,a,o)|0)+s)*n}}};fs.ease=Xt["quad.out"];Je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return fu+=r+","+r+"Params,"});var xu=function(t,e){this.id=Tv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mu,this.set=e?e.getSetter:uc},wa=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,gs(this,+e.duration,1,1),this.data=e.data,de&&(this._ctx=de,de.data.push(this)),Ta||an.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(_s(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hc(this,n),!s._dp||s.parent||np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ae||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+kf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+kf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ms(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ae?0:this._rts,this.totalTime(Ea(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),cc(this),Uv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_s(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(on(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Dv);var i=Ve;return Ve=n,gu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ve=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Vf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Pn(this,n),on(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,on(i)),this._dur||(this._zTime=-ae),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ae)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ye(n)?n:tp,l=function(){var h=i.then;i.then=null,s&&s(),ye(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){_a(this)},r}();yn(wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var ke=function(r){Xf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=on(n.sortChildren),me&&ni(n.parent||me,xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ip(xi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ya(0,arguments,this),this},e.from=function(i,s,a){return ya(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ya(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,va(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Se(i,s,Pn(this,a),1),this},e.call=function(i,s,a){return ni(this,Se.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Se(i,a,Pn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,va(a).immediateRender=on(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,va(o).immediateRender=on(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:pe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,g,p,f,v,M,S,b,w,A;if(this!==me&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,S=this._start,M=this._ts,f=!M,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=pe(h%p),h===l?(g=this._repeat,d=c):(b=pe(h/p),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=ms(this._tTime,p),!o&&this._tTime&&b!==g&&this._tTime-b*p-this._dur<=0&&(b=g),w&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var R=w&&b&1,x=R===(w&&g&1);if(g<b&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(A?0:pe(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;_p(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=kv(this,pe(o),pe(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!b&&(xn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){v=0,_&&(h+=this._zTime=-ae);break}}m=_}else{m=this._last;for(var T=i<0?i:d;m;){if(_=m._prev,(m._act||T<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,s,a||Ve&&gu(m)),d!==this._time||!this._ts&&!f){v=0,_&&(h+=this._zTime=T?-ae:ae);break}}m=_}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-ae)._zTime=d>=o?1:-1,this._ts))return this._start=S,cc(this),this.render(i,s,a);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(yi(s)||(s=Pn(this,s,i)),!(i instanceof wa)){if(qe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Re(i))return this.addLabel(i,s);if(ye(i))i=Se.delayedCall(0,i);else return this}return this!==i?ni(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Se?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Re(i)?this.removeLabel(i):ye(i)?this.killTweensOf(i):(i.parent===this&&lc(this,i),i===this._recent&&(this._recent=this._last),Tr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pe(an.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Pn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Se.delayedCall(0,s||ba,a);return o.data="isPause",this._hasPause=1,ni(this,o,Pn(this,i))},e.removePause=function(i){var s=this._first;for(i=Pn(this,i);s;)s._start===i&&s.data==="isPause"&&Ji(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Dn(i),l=this._first,c=yi(s),h;l;)l instanceof Se?Lv(l._targets,o)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Pn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,m,_=Se.to(a,yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ae,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&gs(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,yn({startAt:{time:Pn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Gf(this,Pn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Gf(this,Pn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ae)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=pe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Tr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Tr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=In,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ni(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=pe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;gs(a,a===me&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(me._ts&&(jf(me,rc(i,me)),Kf=an.frame),an.frame>=Bf){Bf+=ln.autoSleep||120;var s=me._first;if((!s||!s._ts)&&ln.autoSleep&&an._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||an.sleep()}}},t}(wa);yn(ke.prototype,{_lock:0,_hasPause:0,_forcing:0});var ny=function(t,e,n,i,s,a,o){var l=new $e(this._pt,t,e,0,1,bu,null,s),c=0,h=0,u,d,m,_,g,p,f,v;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=xs(i)),a&&(v=[n,i],a(v,t,e),n=v[0],i=v[1]),d=n.match(Wh)||[];u=Wh.exec(i);)_=u[0],g=i.substring(c,u.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Cr(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=Wh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(hu.test(i)||f)&&(l.e=0),this._pt=l,l},vu=function(t,e,n,i,s,a,o,l,c,h){ye(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:ye(u)?c?t[e.indexOf("set")||!ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,m=ye(u)?c?oy:Mp:Su,_;if(Re(i)&&(~i.indexOf("random(")&&(i=xs(i)),i.charAt(1)==="="&&(_=Cr(d,i)+(Ge(d)||0),(_||_===0)&&(i=_))),!h||d!==i||su)return!isNaN(d*i)&&i!==""?(_=new $e(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?cy:Sp,0,m),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&oc(e,i),ny.call(this,t,e,d,i,m,l||ln.stringFilter,c))},iy=function(t,e,n,i,s){if(ye(t)&&(t=Ma(t,s,e,n,i)),!ii(t)||t.style&&t.nodeType||qe(t)||Yf(t))return Re(t)?Ma(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ma(t[o],s,e,n,i);return a},yu=function(t,e,n,i,s,a){var o,l,c,h;if(sn[t]&&(o=new sn[t]).init(s,o.rawVars?e[t]:iy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new $e(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ds))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},qi,su,Mu=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,m=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,f=t.parent,v=f&&f.data==="nested"?f.vars.targets:p,M=t._overwrite==="auto"&&!ou,S=t.timeline,b,w,A,R,x,T,P,D,F,V,H,k,B;if(S&&(!d||!s)&&(s="none"),t._ease=wr(s,fs.ease),t._yEase=u?gp(wr(u===!0?s:u,fs.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(D=p[0]?Zi(p[0]).harness:0,k=D&&i[D.prop],b=ic(i,du),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!m?g.render(-1,!0):g.revert(h&&_?jl:Iv),g._lazy=0),a){if(Ji(t._startAt=Se.set(p,yn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&on(l),startAt:null,delay:0,onUpdate:c&&function(){return xn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ve||!o&&!m)&&t._startAt.revert(jl),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),A=yn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&on(l),immediateRender:o,stagger:0,parent:f},b),k&&(A[D.prop]=k),Ji(t._startAt=Se.set(p,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ve?t._startAt.revert(jl):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ae,ae);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&on(l)||l&&!_,w=0;w<p.length;w++){if(x=p[w],P=x._gsap||pu(p)[w]._gsap,t._ptLookup[w]=V={},Qh[P.id]&&Yi.length&&nc(),H=v===p?w:v.indexOf(x),D&&(F=new D).init(x,k||b,t,H,v)!==!1&&(t._pt=R=new $e(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Y){V[Y]=R}),F.priority&&(T=1)),!D||k)for(A in b)sn[A]&&(F=yu(A,b,t,H,x,v))?F.priority&&(T=1):V[A]=R=vu.call(t,x,A,"get",b[A],H,v,0,i.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),M&&t._pt&&(qi=t,me.killTweensOf(x,V,t.globalTime(e)),B=!t.parent,qi=0),t._pt&&l&&(Qh[P.id]=1)}T&&wu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&S.render(In,!0,!0)},ry=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,m;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(h=d[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return su=1,t.vars[e]="+=0",Mu(t,o),su=0,l?Sa(e+" not eligible for reset"):1;c.push(h)}for(m=c.length;m--;)u=c[m],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Me(n)+Ge(u.e)),u.b&&(u.b=h.s+Ge(u.b))},sy=function(t,e){var n=t[0]?Zi(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ps({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ay=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(qe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ma=function(t,e,n,i,s){return ye(t)?t.call(e,n,i,s):Re(t)&&~t.indexOf("random(")?xs(t):t},vp=fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yp={};Je(vp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yp[r]=1});var Se=function(r){Xf(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:va(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,v=i.parent||me,M=(qe(n)||Yf(n)?yi(n[0]):"length"in i)?[n]:Dn(n),S,b,w,A,R,x,T,P;if(o._targets=M.length?pu(M):Sa("GSAP target "+n+" not found. https://gsap.com",!ln.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||d||Kl(c)||Kl(h)){if(i=o.vars,S=o.timeline=new ke({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:M}),S.kill(),S.parent=S._dp=xi(o),S._start=0,d||Kl(c)||Kl(h)){if(A=M.length,T=d&&op(d),ii(d))for(R in d)~vp.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(b=0;b<A;b++)w=ic(i,yp),w.stagger=0,f&&(w.yoyoEase=f),P&&ps(w,P),x=M[b],w.duration=+Ma(c,xi(o),b,x,M),w.delay=(+Ma(h,xi(o),b,x,M)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),S.to(x,w,T?T(b,x,M):0),S._ease=Xt.none;S.duration()?c=h=0:o.timeline=0}else if(_){va(yn(S.vars.defaults,{ease:"none"})),S._ease=wr(_.ease||i.ease||"none");var D=0,F,V,H;if(qe(_))_.forEach(function(k){return S.to(M,k,">")}),S.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||ay(R,_[R],w,_.easeEach);for(R in w)for(F=w[R].sort(function(k,B){return k.t-B.t}),D=0,b=0;b<F.length;b++)V=F[b],H={ease:V.e,duration:(V.t-(b?F[b-1].t:0))/100*c},H[R]=V.v,S.to(M,H,D),D+=H.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return m===!0&&!ou&&(qi=xi(o),me.killTweensOf(M),qi=0),ni(v,xi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===pe(v._time)&&on(u)&&Ov(xi(o))&&v.data!=="nested")&&(o._tTime=-ae,o.render(Math.max(0,-h)||0)),p&&ip(xi(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ae&&!h?l:i<ae?0:i,d,m,_,g,p,f,v,M,S;if(!c)zv(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=pe(u%g),u===l?(_=this._repeat,d=c):(p=pe(u/g),_=~~p,_&&_===p?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(S=this._yEase,d=c-d),p=ms(this._tTime,g),d===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(M&&this._yEase&&_p(M,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(pe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(rp(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!o&&u&&!s&&!p&&(xn(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&tu(this,i,s,a),xn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&tu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ji(this,1),!s&&!(h&&!o)&&(u||o||f)&&(xn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ta||an.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mu(this,c),h=this._ease(c/this._dur),ry(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(hc(this,0),this.parent||ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ve),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,qi&&qi.vars.overwrite!==!0)._first||_a(this),this.parent&&a!==this.timeline.totalDuration()&&gs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Dn(i):o,c=this._ptLookup,h=this._pt,u,d,m,_,g,p,f;if((!s||s==="all")&&Nv(o,l))return s==="all"&&(this._pt=0),_a(this);for(u=this._op=this._op||[],s!=="all"&&(Re(s)&&(g={},Je(s,function(v){return g[v]=1}),s=g),s=sy(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],s==="all"?(u[f]=s,_=d,m={}):(m=u[f]=u[f]||{},_=s);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&lc(this,p,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&h&&_a(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ya(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ya(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return me.killTweensOf(i,s,a)},t}(wa);yn(Se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Je("staggerTo,staggerFrom,staggerFromTo",function(r){Se[r]=function(){var t=new ke,e=nu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Su=function(t,e,n){return t[e]=n},Mp=function(t,e,n){return t[e](n)},oy=function(t,e,n,i){return t[e](i.fp,n)},ly=function(t,e,n){return t.setAttribute(e,n)},uc=function(t,e){return ye(t[e])?Mp:ac(t[e])&&t.setAttribute?ly:Su},Sp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},cy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},bu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Tu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},hy=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},uy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?lc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},dy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},wu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},$e=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Sp,this.d=l||this,this.set=c||Su,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=dy,this.m=n,this.mt=s,this.tween=i},r}();Je(fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return du[r]=1});vn.TweenMax=vn.TweenLite=Se;vn.TimelineLite=vn.TimelineMax=ke;me=new ke({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=_u;var Er=[],tc={},fy=[],Wf=0,py=0,Jh=function(t){return(tc[t]||fy).map(function(e){return e()})},au=function(){var t=Date.now(),e=[];t-Wf>2&&(Jh("matchMediaInit"),Er.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ei.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Jh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wf=t,Jh("matchMedia"))},bp=function(){function r(e,n){this.selector=n&&iu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=py++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ye(n)&&(s=i,i=n,n=ye);var a=this,o=function(){var c=de,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=iu(s)),de=a,u=i.apply(a,arguments),ye(u)&&a._r.push(u),de=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ye?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=de;de=null,n(this),de=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Se&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ke?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Se)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Er.length;a--;)Er[a].id===this.id&&Er.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),my=function(){function r(e){this.contexts=[],this.scope=e,de&&de.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ii(n)||(n={matches:n});var a=new bp(0,s||this.scope),o=a.conditions={},l,c,h;de&&!a.selector&&(a.selector=de.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ei.matchMedia(n[c]),l&&(Er.indexOf(a)<0&&Er.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(au):l.addEventListener("change",au)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),sc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return fp(i)})},timeline:function(t){return new ke(t)},getTweensOf:function(t,e){return me.getTweensOf(t,e)},getProperty:function(t,e,n,i){Re(t)&&(t=Dn(t)[0]);var s=Zi(t||{}).get,a=n?tp:Qf;return n==="native"&&(n=""),t&&(e?a((sn[e]&&sn[e].get||s)(t,e,n,i)):function(o,l,c){return a((sn[o]&&sn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Dn(t),t.length>1){var i=t.map(function(h){return Ye.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=sn[e],o=Zi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;ds._pt=0,u.init(t,n?h+n:h,ds,0,[t]),u.render(1,u),ds._pt&&Tu(1,ds)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=Ye.to(t,yn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=wr(t.ease,fs.ease)),zf(fs,t||{})},config:function(t){return zf(ln,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!sn[o]&&!vn[o]&&Sa(e+" effect requires "+o+" plugin.")}),Xh[e]=function(o,l,c){return n(Dn(o),yn(l||{},s),c)},a&&(ke.prototype[e]=function(o,l,c){return this.add(Xh[e](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=wr(e)},parseEase:function(t,e){return arguments.length?wr(t,e):Xt},getById:function(t){return me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ke(t),i,s;for(n.smoothChildTiming=on(t.smoothChildTiming),me.remove(n),n._dp=0,n._time=n._tTime=me._time,i=me._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Se&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=s;return ni(me,n,0),n},context:function(t,e){return t?new bp(t,e):de},matchMedia:function(t){return new my(t)},matchMediaRefresh:function(){return Er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||au()},addEventListener:function(t,e){var n=tc[t]||(tc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=tc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Yv,wrapYoyo:Zv,distribute:op,random:cp,snap:lp,normalize:qv,getUnit:Ge,clamp:Gv,splitColor:pp,toArray:Dn,selector:iu,mapRange:up,pipe:Wv,unitize:Xv,interpolate:Jv,shuffle:ap},install:Jf,effects:Xh,ticker:an,updateRoot:ke.updateRoot,plugins:sn,globalTimeline:me,core:{PropTween:$e,globals:$f,Tween:Se,Timeline:ke,Animation:wa,getCache:Zi,_removeLinkedListItem:lc,reverting:function(){return Ve},context:function(t){return t&&de&&(de.data.push(t),t._ctx=de),de},suppressOverwrites:function(t){return ou=t}}};Je("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sc[r]=Se[r]});an.add(ke.updateRoot);ds=sc.to({},{duration:0});var gy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_y=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=gy(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},$h=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Re(s)&&(l={},Je(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}_y(o,s)}}}},Ye=sc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ve?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},$h("roundProps",ru),$h("modifiers"),$h("snap",lp))||sc;Se.version=ke.version=Ye.version="3.14.2";Zf=1;lu()&&_s();var xy=Xt.Power0,vy=Xt.Power1,yy=Xt.Power2,My=Xt.Power3,Sy=Xt.Power4,by=Xt.Linear,Ty=Xt.Quad,wy=Xt.Cubic,Ey=Xt.Quart,Ay=Xt.Quint,Cy=Xt.Strong,Ry=Xt.Elastic,Py=Xt.Back,Iy=Xt.SteppedEase,Dy=Xt.Bounce,Ly=Xt.Sine,Fy=Xt.Expo,Ny=Xt.Circ;var Tp,Ki,ys,Iu,Lr,Uy,wp,Du,Oy=function(){return typeof window<"u"},Si={},Dr=180/Math.PI,Ms=Math.PI/180,vs=Math.atan2,Ep=1e8,Lu=/([A-Z])/g,By=/(left|right|width|margin|padding|x)/i,zy=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Au=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ky=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gy=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Hy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Np=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Wy=function(t,e,n){return t.style[e]=n},Xy=function(t,e,n){return t.style.setProperty(e,n)},qy=function(t,e,n){return t._gsap[e]=n},Yy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Zy=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Jy=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ge="transform",cn=ge+"Origin",$y=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Si&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Mi(i,o)}):this.tfm[t]=a.x?a[t]:Mi(i,t),t===cn&&(this.tfm.zOrigin=a.zOrigin);else return ri.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ge)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,e,"")),t=ge}(s||e)&&this.props.push(t,e,s[t])},Up=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ky=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Lu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Du(),(!s||!s.isStart)&&!n[ge]&&(Up(n),i.zOrigin&&n[cn]&&(n[cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Op=function(t,e){var n={target:t,props:[],revert:Ky,save:$y};return t._gsap||Ye.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Bp,Cu=function(t,e){var n=Ki.createElementNS?Ki.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ki.createElement(t);return n&&n.style?n:Ki.createElement(t)},Mn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Lu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ss(e)||e,1)||""},Ap="O,Moz,ms,Ms,Webkit".split(","),Ss=function(t,e,n){var i=e||Lr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ap[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ap[a]:"")+t},Ru=function(){Oy()&&window.document&&(Tp=window,Ki=Tp.document,ys=Ki.documentElement,Lr=Cu("div")||{style:{}},Uy=Cu("div"),ge=Ss(ge),cn=ge+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bp=!!Ss("perspective"),Du=Ye.core.reverting,Iu=1)},Cp=function(t){var e=t.ownerSVGElement,n=Cu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ys.removeChild(n),s},Rp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zp=function(t){var e,n;try{e=t.getBBox()}catch{e=Cp(t),n=1}return e&&(e.width||e.height)||n||(e=Cp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Rp(t,["x","cx","x1"])||0,y:+Rp(t,["y","cy","y1"])||0,width:0,height:0}:e},kp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zp(t))},Qi=function(t,e){if(e){var n=t.style,i;e in Si&&e!==cn&&(e=ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Lu,"-$1").toLowerCase())):n.removeAttribute(e)}},ji=function(t,e,n,i,s,a){var o=new $e(t._pt,e,n,0,1,a?Np:Fp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Pp={deg:1,rad:1,turn:1},jy={grid:1,flex:1},tr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Lr.style,l=By.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",m=i==="%",_,g,p,f;if(i===a||!s||Pp[i]||Pp[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&kp(t),(m||a==="%")&&(Si[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],Me(m?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ki||!g.appendChild)&&(g=Ki.body),p=g._gsap,p&&m&&p.width&&l&&p.time===an.time&&!p.uncache)return Me(s/p.width*u);if(m&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,_=t[h],v?t.style[e]=v:Qi(t,e)}else(m||a==="%")&&!jy[Mn(g,"display")]&&(o.position=Mn(t,"position")),g===t&&(o.position="static"),g.appendChild(Lr),_=Lr[h],g.removeChild(Lr),o.position="absolute";return l&&m&&(p=Zi(g),p.time=an.time,p.width=g[h]),Me(d?_*s/u:_&&s?u/_*s:0)},Mi=function(t,e,n,i){var s;return Iu||Ru(),e in ri&&e!=="transform"&&(e=ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),Si[e]&&e!=="transform"?(s=Ra(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fc(Mn(t,cn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=dc[e]&&dc[e](t,e,n)||Mn(t,e)||mu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?tr(t,e,s,n)+n:s},Qy=function(t,e,n,i){if(!n||n==="none"){var s=Ss(e,t,1),a=s&&Mn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Mn(t,"borderTopColor"))}var o=new $e(this._pt,t.style,e,0,1,bu),l=0,c=0,h,u,d,m,_,g,p,f,v,M,S,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Mn(t,e)||i,g?t.style[e]=g:Qi(t,e)),h=[n,i],_u(h),n=h[0],i=h[1],d=n.match(Ar)||[],b=i.match(Ar)||[],b.length){for(;u=Ar.exec(i);)p=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(m=parseFloat(g)||0,S=g.substr((m+"").length),p.charAt(1)==="="&&(p=Cr(m,p)+S),f=parseFloat(p),M=p.substr((f+"").length),l=Ar.lastIndex-M.length,M||(M=M||ln.units[e]||S,l===i.length&&(i+=M,o.e+=M)),S!==M&&(m=tr(t,e,g,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:m,c:f-m,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Np:Fp;return hu.test(i)&&(o.e=0),this._pt=o,o},Ip={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ip[n]||n,e[1]=Ip[i]||i,e.join(" ")},eM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Si[o]&&(l=1,o=o==="transformOrigin"?cn:ge),Qi(n,o);l&&(Qi(n,ge),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ra(n,1),a.uncache=1,Up(i)))}},dc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new $e(t._pt,e,n,0,0,eM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ca=[1,0,0,1,0,0],Vp={},Gp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Dp=function(t){var e=Mn(t,ge);return Gp(e)?Ca:e.substr(7).match(cu).map(Me)},Fu=function(t,e){var n=t._gsap||Zi(t),i=t.style,s=Dp(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!t.offsetParent&&t!==ys&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ys.appendChild(t)),s=Dp(t),l?i.display=l:Qi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Pu=function(t,e,n,i,s,a){var o=t._gsap,l=s||Fu(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,m=l[0],_=l[1],g=l[2],p=l[3],f=l[4],v=l[5],M=e.split(" "),S=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,A,R,x;n?l!==Ca&&(A=m*p-_*g)&&(R=S*(p/A)+b*(-g/A)+(g*v-p*f)/A,x=S*(-_/A)+b*(m/A)-(m*v-_*f)/A,S=R,b=x):(w=zp(t),S=w.x+(~M[0].indexOf("%")?S/100*w.width:S),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(f=S-c,v=b-h,o.xOffset=u+(f*m+v*g)-f,o.yOffset=d+(f*_+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[cn]="0px 0px",a&&(ji(a,o,"xOrigin",c,S),ji(a,o,"yOrigin",h,b),ji(a,o,"xOffset",u,o.xOffset),ji(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+b)},Ra=function(t,e){var n=t._gsap||new xu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Mn(t,cn)||"0",h,u,d,m,_,g,p,f,v,M,S,b,w,A,R,x,T,P,D,F,V,H,k,B,Y,nt,et,ot,dt,Et,xt,wt;return h=u=d=g=p=f=v=M=S=0,m=_=1,n.svg=!!(t.getCTM&&kp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ge]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ge]!=="none"?l[ge]:"")),i.scale=i.rotate=i.translate="none"),A=Fu(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Pu(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==Ca&&(P=A[0],D=A[1],F=A[2],V=A[3],h=H=A[4],u=k=A[5],A.length===6?(m=Math.sqrt(P*P+D*D),_=Math.sqrt(V*V+F*F),g=P||D?vs(D,P)*Dr:0,v=F||V?vs(F,V)*Dr+g:0,v&&(_*=Math.abs(Math.cos(v*Ms))),n.svg&&(h-=b-(b*P+w*F),u-=w-(b*D+w*V))):(wt=A[6],Et=A[7],et=A[8],ot=A[9],dt=A[10],xt=A[11],h=A[12],u=A[13],d=A[14],R=vs(wt,dt),p=R*Dr,R&&(x=Math.cos(-R),T=Math.sin(-R),B=H*x+et*T,Y=k*x+ot*T,nt=wt*x+dt*T,et=H*-T+et*x,ot=k*-T+ot*x,dt=wt*-T+dt*x,xt=Et*-T+xt*x,H=B,k=Y,wt=nt),R=vs(-F,dt),f=R*Dr,R&&(x=Math.cos(-R),T=Math.sin(-R),B=P*x-et*T,Y=D*x-ot*T,nt=F*x-dt*T,xt=V*T+xt*x,P=B,D=Y,F=nt),R=vs(D,P),g=R*Dr,R&&(x=Math.cos(R),T=Math.sin(R),B=P*x+D*T,Y=H*x+k*T,D=D*x-P*T,k=k*x-H*T,P=B,H=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,f=180-f),m=Me(Math.sqrt(P*P+D*D+F*F)),_=Me(Math.sqrt(k*k+wt*wt)),R=vs(H,k),v=Math.abs(R)>2e-4?R*Dr:0,S=xt?1/(xt<0?-xt:xt):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gp(Mn(t,ge)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Me(m),n.scaleY=Me(_),n.rotation=Me(g)+o,n.rotationX=Me(p)+o,n.rotationY=Me(f)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[cn]=fc(c)),n.xOffset=n.yOffset=0,n.force3D=ln.force3D,n.renderTransform=n.svg?iM:Bp?Hp:nM,n.uncache=0,n},fc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Eu=function(t,e,n){var i=Ge(e);return Me(parseFloat(e)+parseFloat(tr(t,"x",n+"px",i)))+i},nM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hp(t,e)},Pr="0deg",Aa="0px",Ir=") ",Hp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,f=n.force3D,v=n.target,M=n.zOrigin,S="",b=f==="auto"&&t&&t!==1||f===!0;if(M&&(u!==Pr||h!==Pr)){var w=parseFloat(h)*Ms,A=Math.sin(w),R=Math.cos(w),x;w=parseFloat(u)*Ms,x=Math.cos(w),a=Eu(v,a,A*x*-M),o=Eu(v,o,-Math.sin(w)*-M),l=Eu(v,l,R*x*-M+M)}p!==Aa&&(S+="perspective("+p+Ir),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(b||a!==Aa||o!==Aa||l!==Aa)&&(S+=l!==Aa||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ir),c!==Pr&&(S+="rotate("+c+Ir),h!==Pr&&(S+="rotateY("+h+Ir),u!==Pr&&(S+="rotateX("+u+Ir),(d!==Pr||m!==Pr)&&(S+="skew("+d+", "+m+Ir),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ir),v.style[ge]=S||"translate(0, 0)"},iM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,f=n.yOffset,v=n.forceCSS,M=parseFloat(a),S=parseFloat(o),b,w,A,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ms,c*=Ms,b=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=Ms,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=Me(b),w=Me(w),A=Me(A),R=Me(R)):(b=u,R=d,w=A=0),(M&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(M=tr(m,"x",a,"px"),S=tr(m,"y",o,"px")),(_||g||p||f)&&(M=Me(M+_-(_*b+g*A)+p),S=Me(S+g-(_*w+g*R)+f)),(i||s)&&(x=m.getBBox(),M=Me(M+i/100*x.width),S=Me(S+s/100*x.height)),x="matrix("+b+","+w+","+A+","+R+","+M+","+S+")",m.setAttribute("transform",x),v&&(m.style[ge]=x)},rM=function(t,e,n,i,s){var a=360,o=Re(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Dr:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Ep)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Ep)%a-~~(c/a)*a)),t._pt=d=new $e(t._pt,e,n,i,c,ky),d.e=h,d.u="deg",t._props.push(n),d},Lp=function(t,e){for(var n in e)t[n]=e[n];return t},sM=function(t,e,n){var i=Lp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ge]=e,o=Ra(n,1),Qi(n,ge),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ge],a[ge]=e,o=Ra(n,1),a[ge]=c);for(l in Si)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(m=Ge(c),_=Ge(h),u=m!==_?tr(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new $e(t._pt,o,l,u,d-u,Au),t._pt.u=_||0,t._props.push(l));Lp(o,i)};Je("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});dc[t>1?"border"+r:r]=function(o,l,c,h,u){var d,m;if(arguments.length<4)return d=a.map(function(_){return Mi(o,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},a.forEach(function(_,g){return m[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,m,u)}});var Nu={name:"css",register:Ru,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,m,_,g,p,f,v,M,S,b,w,A,R,x;Iu||Ru(),this.styles=this.styles||Op(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(sn[g]&&yu(g,e,n,i,t,s)))){if(m=typeof h,_=dc[g],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=xs(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",vi.lastIndex=0,vi.test(c)||(p=Ge(c),f=Ge(h),f?p!==f&&(c=tr(t,g,c,f)+f):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Re(c)&&~c.indexOf("random(")&&(c=xs(c)),Ge(c+"")||c==="auto"||(c+=ln.units[g]||Ge(Mi(t,g))||""),(c+"").charAt(1)==="="&&(c=Mi(t,g))):c=Mi(t,g),d=parseFloat(c),v=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in ri&&(g==="autoAlpha"&&(d===1&&Mi(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),ji(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Si,M){if(this.styles.save(g),x=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=Mn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=Mn(t,"perspective"),T?t.style.perspective=T:Qi(t,"perspective")}u=parseFloat(h)}if(S||(b=t._gsap,b.renderTransform&&!e.parseTransform||Ra(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,S=this._pt=new $e(this._pt,o,ge,0,1,b.renderTransform,b,0,-1),S.dep=1),g==="scale")this._pt=new $e(this._pt,b,"scaleY",b.scaleY,(v?Cr(b.scaleY,v+u):u)-b.scaleY||0,Au),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(cn,0,o[cn]),h=tM(h),b.svg?Pu(t,h,0,w,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==b.zOrigin&&ji(this,b,"zOrigin",b.zOrigin,f),ji(this,o,g,fc(c),fc(h)));continue}else if(g==="svgOrigin"){Pu(t,h,1,w,0,this);continue}else if(g in Vp){rM(this,b,g,d,v?Cr(d,v+h):h);continue}else if(g==="smoothOrigin"){ji(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){sM(this,h,t);continue}}else g in o||(g=Ss(g)||g);if(M||(u||u===0)&&(d||d===0)&&!zy.test(h)&&g in o)p=(c+"").substr((d+"").length),u||(u=0),f=Ge(h)||(g in ln.units?ln.units[g]:p),p!==f&&(d=tr(t,g,c,f)),this._pt=new $e(this._pt,M?b:o,g,d,(v?Cr(d,v+u):u)-d,!M&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?Hy:Au),this._pt.u=f||0,M&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=Gy):p!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Vy);else if(g in o)Qy.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,s);else if(g!=="parseTransform"){oc(g,h);continue}M||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}A&&wu(this)},render:function(t,e){if(e.tween._time||!Du())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mi,aliases:ri,getSetter:function(t,e,n){var i=ri[e];return i&&i.indexOf(",")<0&&(e=i),e in Si&&e!==cn&&(t._gsap.x||Mi(t,"x"))?n&&wp===n?e==="scale"?Yy:qy:(wp=n||{})&&(e==="scale"?Zy:Jy):t.style&&!ac(t.style[e])?Wy:~e.indexOf("-")?Xy:uc(t,e)},core:{_removeProperty:Qi,_getMatrix:Fu}};Ye.utils.checkPrefix=Ss;Ye.core.getStyleSaver=Op;(function(r,t,e,n){var i=Je(r+","+t+","+e,function(s){Si[s]=1});Je(t,function(s){ln.units[s]="deg",Vp[s]=1}),ri[i[13]]=r+","+t,Je(n,function(s){var a=s.split(":");ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});Ye.registerPlugin(Nu);var Ft=Ye.registerPlugin(Nu)||Ye,bT=Ft.core.Tween;var aM=["battleCanvas"],Pa=class r{canvasRef;scene;camera;renderer;character1Mesh=null;character2Mesh=null;animationFrameId=null;destroy$=new Na;cameraOriginalPosition;lightningBolts=[];timeSlowActive=!1;resizeHandler=this.throttleResize.bind(this);lastTime=0;spiderGroundOffset=-.65;particleAnimations=[];resizeTimeout=null;battleService=Tn(Nr);circleTexture;character1=null;character2=null;constructor(){Yu(()=>{this.createCircleTexture(),this.initScene(),this.animate(),window.addEventListener("resize",this.resizeHandler)})}ngOnInit(){this.battleService.battleState$.pipe(ws(this.destroy$)).subscribe(t=>{if(t){let e=this.character1,n=this.character2;this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null,this.character1?.health===0&&this.character1Mesh&&(this.character1Mesh.visible=!1),this.character2?.health===0&&this.character2Mesh&&(this.character2Mesh.visible=!1),!this.character1Mesh&&!this.character2Mesh?this.createCharacters():(e&&this.character1&&e.id!==this.character1.id&&this.replaceCharacter(1),n&&this.character2&&n.id!==this.character2.id&&this.replaceCharacter(2))}}),this.battleService.action$.pipe(ws(this.destroy$)).subscribe(t=>{t&&this.animateAction(t)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),window.removeEventListener("resize",this.resizeHandler),this.particleAnimations=[],Ft.killTweensOf("*"),this.scene?.clear(),this.renderer?.dispose(),this.circleTexture?.dispose()}clearCharacters(){this.disposeCharacterMesh(this.character1Mesh),this.disposeCharacterMesh(this.character2Mesh),this.character1Mesh=null,this.character2Mesh=null,this.character1=null,this.character2=null}disposeCharacterMesh(t){t&&(this.scene.remove(t),t.traverse(e=>{e instanceof Ht&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}))}createCircleTexture(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this.circleTexture=new $s(t)}initScene(){let t=this.canvasRef.nativeElement,e=t.clientWidth,n=t.clientHeight;this.scene=new Js,this.scene.background=new Lt(657931),this.camera=new Ne(60,e/n,.1,1e3);let i=e<500;e<680||(this.scene.fog=new es(657931,.08));let a=i?12:10,o=i?5:4;this.camera.position.set(0,o,a),this.camera.lookAt(0,1,0),this.cameraOriginalPosition=this.camera.position.clone(),this.renderer=new Zl({canvas:t,antialias:!0,alpha:!1}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qo,this.renderer.toneMapping=aa,this.renderer.toneMappingExposure=1.2;let l=new ra(3470813,.3);this.scene.add(l);let c=new ia(16777215,1.5);c.position.set(5,10,5),c.castShadow=!0,c.shadow.mapSize.width=2048,c.shadow.mapSize.height=2048,c.shadow.camera.near=.5,c.shadow.camera.far=50,c.shadow.camera.left=-15,c.shadow.camera.right=15,c.shadow.camera.top=15,c.shadow.camera.bottom=-15,this.scene.add(c);let h=new kn(3470813,3,8);h.position.set(-4,3,-2),this.scene.add(h);let u=new kn(3470837,3,8);u.position.set(4,3,-2),this.scene.add(u);let d=new na(3470813,2);d.position.set(0,8,0),d.angle=Math.PI/4,d.penumbra=.5,d.castShadow=!0,this.scene.add(d);let m=1.5,_=20,g=_/2;for(let p=0;p<_;p++)for(let f=0;f<_;f++){let v=(p+f)%2===0,M=new zi(m,m),S=new pr({color:v?657931:4671306,roughness:.9,metalness:.1,emissive:v?0:986896,emissiveIntensity:v?.1:.3}),b=new Ht(M,S);b.rotation.x=-Math.PI/2,b.position.set((p-g)*m+m/2,-1,(f-g)*m+m/2),b.receiveShadow=!0,this.scene.add(b)}}replaceCharacter(t){let e=t===1?this.character1:this.character2;if(!e)return;let n=t===1?this.character1Mesh:this.character2Mesh;this.disposeCharacterMesh(n);let i=this.createEnhancedCharacterMesh(e.color,e.position);t===1?(i.rotation.y=Math.PI/3,this.character1Mesh=i):(i.scale.x=-1,i.rotation.y=-Math.PI/3,this.character2Mesh=i),this.scene.add(i),this.createTeleportationEntrance(i,e.position,t===1?"left":"right")}createCharacters(){if(!this.character1||!this.character2)return;let t=this.createEnhancedCharacterMesh(this.character1.color,this.character1.position);t.rotation.y=Math.PI/3,this.scene.add(t);let e=this.createEnhancedCharacterMesh(this.character2.color,this.character2.position);e.scale.x=-1,e.rotation.y=-Math.PI/3,this.scene.add(e),this.character1Mesh=t,this.character2Mesh=e,this.createTeleportationEntrance(t,this.character1.position,"left"),this.createTeleportationEntrance(e,this.character2.position,"right")}createEnhancedCharacterMesh(t,e){let n=new Cn,i=new Lt(t),s=new Lt("#ffffff"),a=new pr({color:new Lt(16777215).lerp(s,.85),roughness:.2,metalness:.1,emissive:s,emissiveIntensity:2.5}),o=new pr({color:new Lt(1710618).lerp(i,.9),roughness:.9,metalness:.1,emissive:i,emissiveIntensity:.2}),l=new gi(.48,20,20);l.scale(1.05,.38,1);let c=new Ht(l,o);c.position.set(0,.45,.18),c.castShadow=!0,c.receiveShadow=!0,n.add(c);let h=a;for(let p=0;p<2;p++){let f=p===0?-1:1,v=new Cn,M=new nn(.07,.05,.18,10),S=new Ht(M,h);S.position.set(.12*f,.26,.52),S.rotation.x=Math.PI/8,S.rotation.z=Math.PI/10*f,S.castShadow=!0,S.receiveShadow=!0,v.add(S);let b=new js(.03,.2,10),w=new Ht(b,h);w.position.set(.14*f,.14,.6),w.rotation.x=Math.PI/2+Math.PI/10,w.rotation.z=Math.PI/12*f,w.castShadow=!0,w.receiveShadow=!0,v.add(w),n.add(v)}let u=a,d=[Math.PI/5,Math.PI/12,-Math.PI/12,-Math.PI/4];for(let p=0;p<2;p++){let f=p===0?-1:1;for(let v=0;v<4;v++){let M=new Cn,S=d[v],b=(Math.PI/2.8+v*.05)*f,w=.8,A=.55,R=.7,x=new nn(.12,.08,w,10),T=new Ht(x,u);T.position.set(.3*f,-.1,0),T.rotation.z=b*1.2,T.castShadow=!0,T.receiveShadow=!0,M.add(T);for(let dt=0;dt<12;dt++){let Et=new nn(.012,.006,.28,4),xt=new Ht(Et,u),wt=dt/8*Math.PI*2;xt.position.set(.36*f+Math.cos(wt)*.08,-.1+Math.sin(wt)*.08,0),xt.rotation.z=b*1.15+(Math.random()-.5)*.35,xt.rotation.y=wt,M.add(xt)}let P=new nn(.1,.06,A,10),D=new Ht(P,u);D.position.set(.85*f,-.28,0),D.rotation.z=b*.75,D.castShadow=!0,D.receiveShadow=!0,M.add(D);for(let dt=0;dt<10;dt++){let Et=new nn(.014,.006,.34,4),xt=new Ht(Et,u),wt=dt/8*Math.PI*2;xt.position.set(.8*f+Math.cos(wt)*.08,-.2+Math.sin(wt)*.03,0),xt.rotation.z=b*.95+(Math.random()-.5)*.4,xt.rotation.y=wt,M.add(xt)}for(let dt=0;dt<8;dt++){let Et=new nn(.012,.005,.3,4),xt=new Ht(Et,u),wt=dt/6*Math.PI*2;xt.position.set(.9*f+Math.cos(wt)*.06,-.28+Math.sin(wt)*.06,0),xt.rotation.z=b*.7+(Math.random()-.5)*.3,xt.rotation.y=wt,M.add(xt)}let F=new nn(.07,.03,R,10),V=new Ht(F,u);V.position.set(1.2*f,-.7,0),V.rotation.z=Math.PI/5.3*f,V.castShadow=!0,V.receiveShadow=!0,M.add(V);for(let dt=0;dt<10;dt++){let Et=new nn(.012,.005,.16,4),xt=new Ht(Et,u),wt=dt/7*Math.PI*2;xt.position.set(1.1*f+Math.cos(wt)*.07,-.55+Math.sin(wt)*.07,0),xt.rotation.z=Math.PI/8*f+(Math.random()-.5)*.4,xt.rotation.y=wt,M.add(xt)}for(let dt=0;dt<6;dt++){let Et=new nn(.01,.004,.24,4),xt=new Ht(Et,u),wt=dt/4*Math.PI*2;xt.position.set(1.2*f+Math.cos(wt)*.05,-.7+Math.sin(wt)*.05,0),xt.rotation.z=Math.PI/6*f+(Math.random()-.5)*.3,xt.rotation.y=wt,M.add(xt)}let k=[.5,.25,0,-.2][v];M.rotation.y=S,M.position.set(.4*f,.3,k),n.add(M);let B=S,Y=-.02+(Math.random()-.5)*.04,nt=Math.PI/120*f+(Math.random()-.5)*.02;M.rotation.set(Y,B,nt);let et=()=>{let dt=.08+Math.random()*.08,Et=.08+Math.random()*.08,xt=0,wt=.32+Math.random()*.45,Z=.22+Math.random()*.35,K=2+Math.random()*8,mt=Math.random(),Nt=Ft.timeline({onComplete:()=>{Ft.delayedCall(K,et)}});Nt.to(M.rotation,{x:Y-Et,y:B-dt,z:nt+xt*f,duration:wt*.9,ease:"sine.out"}).to(M.rotation,{x:Y+Et*.35,y:B+dt,z:nt-0,duration:wt*1.2,ease:"sine.in"}).to(M.rotation,{x:Y,y:B,z:nt,duration:Z,ease:"power2.out"}),mt<.35&&Nt.to(M.rotation,{x:Y+(Math.random()*.08-.04),y:B+(Math.random()*.12-.06),z:nt+(Math.random()*.12-.06)*f,duration:2+Math.random()*.08,ease:"power3.inOut"})},ot=2+Math.random()*8;Ft.delayedCall(ot,et)}}let m=new gi(.6,24,24),_=new Ht(m,o);_.position.set(0,.7,-.6),n.add(_);let g=Math.random()*1.5;return Ft.to(_.scale,{x:1.05,y:1.05,z:1.05,duration:1.5,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:g}),n.position.set(e.x,e.y+this.spiderGroundOffset,e.z),n}createTeleportationEntrance(t,e,n){t.position.set(e.x,e.y+this.spiderGroundOffset,e.z),t.scale.set(.01,.01,.01),t.visible=!1;let i=Ft.timeline();i.call(()=>{t.visible=!0}),i.to(t.scale,{x:n==="right"?-1:1,y:1,z:1,duration:.8,ease:"elastic.out(1, 0.5)"})}animateAction(t){let e=this.character1?t.attackerId===this.character1.id:!1,n=e?this.character1Mesh:this.character2Mesh,i=e?this.character2Mesh:this.character1Mesh;if(!n||!i)return;let s=t.type==="critical",a=t.type==="miss";this.cinematicCameraZoom(n,i,s);let o=this.getCharacterBasePosition(e,n),l=this.getCharacterBasePosition(!e,i),c=Xn({},o),h=Ft.timeline();this.createChargingEffect(n,s),a&&h.call(()=>{this.createEnergyShield(i)}),s&&(this.timeSlowActive=!0,h.call(()=>{this.createLightningStrike(n.position,i.position)}));let u=e?1.3:-1.3;h.to(n.scale,{x:u,y:.7,z:1.3,duration:.2,ease:"power2.in"}),h.to(n.rotation,{y:e?Math.PI+Math.PI*2:-Math.PI-Math.PI*2,duration:.15,ease:"power4.inOut"},"<"),h.to(n.position,{x:e?l.x-.9:l.x+.9,y:l.y+1,z:e?l.z-1:l.z+1,duration:.15,ease:"power4.inOut",onComplete:()=>{this.createMassiveImpact(i.position,t),this.createEnergyWave(i.position,s),s&&this.screenFlash();let d=Ft.timeline();if(a)d.to(i.position,{y:i.position.y+.2,duration:.08,ease:"power2.out"}),d.to(i.rotation,{x:-.1,duration:.08,ease:"power2.out"},"<"),d.to(i.position,{y:i.position.y,duration:.15,ease:"bounce.out"}),d.to(i.rotation,{x:0,duration:.15,ease:"power2.out"},"<");else{d.to(i.position,{y:i.position.y+.5,duration:.06,ease:"power4.out"}),d.to(i.rotation,{z:(e?1:-1)*.8,y:(e?1:-1)*Math.PI*.25,x:.5,duration:.06,ease:"power3.out"},"<");let m=e?-.6:.6;d.to(i.scale,{x:m,y:.6,z:.75,duration:.06,ease:"power3.in"},"<"),d.to(i.position,{x:i.position.x+(e?1.8:-1.8),y:i.position.y+1.2,z:i.position.z+(e?.6:-.6),duration:.18,ease:"power3.out"}),d.to(i.rotation,{z:(e?1:-1)*Math.PI*1.2,y:(e?1:-1)*Math.PI*.6,x:Math.PI*.8,duration:.18,ease:"power2.out"},"<"),d.to(i.scale,{x:e?-1.1:1.1,y:.85,z:1.05,duration:.12,ease:"power1.out"},"<"),d.to(i.position,{x:i.position.x+(e?2.5:-2.5),y:i.position.y+.2,z:i.position.z+(e?.4:-.4),duration:.2,ease:"power1.in"}),d.to(i.rotation,{z:(e?1:-1)*Math.PI*2.2,y:(e?1:-1)*Math.PI*1.1,x:Math.PI*1.3,duration:.2,ease:"power1.in"},"<"),d.to(i.scale,{x:e?-.9:.9,y:1.1,z:.9,duration:.15,ease:"elastic.out(1.5, 0.6)"},"<")}}}),h.to(n.position,{x:c.x,y:c.y+3,z:c.z,duration:.4,ease:"power2.in"}),h.to(n.rotation,{x:Math.PI*2,duration:.4,ease:"power2.in"},"<"),h.to(n.position,{x:c.x,y:c.y,z:c.z,duration:.3,ease:"bounce.out"}),h.to(n.rotation,{x:0,y:e?Math.PI/3:-Math.PI/3,duration:.3},"<"),h.to(n.scale,{x:e?1:-1,y:1,z:1,duration:.2}),a||(h.to(i.position,{x:l.x,y:l.y,z:l.z,duration:.5,ease:"power2.inOut"},"-=0.5"),h.to(i.rotation,{z:0,y:e?-Math.PI/3:Math.PI/3,x:0,duration:.5,ease:"elastic.out(1, 0.5)"},"<"),h.to(i.scale,{x:e?-1:1,y:1,z:1,duration:.3,ease:"elastic.out(1.1, 0.4)"},"<+=0.1")),h.call(()=>{n.position.set(o.x,o.y,o.z),i.position.set(l.x,l.y,l.z),this.resetCamera(),this.timeSlowActive=!1})}getCharacterBasePosition(t,e){let n=t?this.character1:this.character2;return n?{x:n.position.x,y:n.position.y+this.spiderGroundOffset,z:n.position.z}:{x:e.position.x,y:e.position.y,z:e.position.z}}createChargingEffect(t,e){let n=e?16711680:65280,i=new kn(n,5,5);i.position.copy(t.position),i.position.y+=1,this.scene.add(i);for(let s=0;s<12;s++){let a=new gi(.12,8,8);a.scale(1,1.5,1);let o=new en({color:n,transparent:!0,opacity:.9}),l=new Ht(a,o),c=s/12*Math.PI*2,h=1.5;l.position.set(t.position.x+Math.cos(c)*h,t.position.y+1,t.position.z+Math.sin(c)*h),this.scene.add(l),Ft.to(l.position,{x:t.position.x,y:t.position.y+.5,z:t.position.z,duration:.5,ease:"power2.in",onComplete:()=>{this.scene.remove(l),a.dispose(),o.dispose()}})}Ft.to(i,{intensity:e?30:20,duration:.4,ease:"power2.in",onComplete:()=>{Ft.to(i,{intensity:0,duration:.2,onComplete:()=>{this.scene.remove(i)}})}})}createEnergyShield(t){let e=new Cn;e.position.copy(t.position),e.position.y+=1,this.scene.add(e);let n=new is(2.5,2),i=new rs({color:65535,transparent:!0,opacity:.6,wireframe:!0,side:Ee,emissive:65535,emissiveIntensity:.8}),s=new Ht(n,i);e.add(s);let a=new gi(2.2,32,32),o=new rs({color:4495871,transparent:!0,opacity:.4,side:Ee,emissive:2254591,emissiveIntensity:1.2}),l=new Ht(a,o);e.add(l);let c=new is(1.8,1),h=new en({color:16777215,transparent:!0,opacity:.9,wireframe:!0,side:Ee}),u=new Ht(c,h);e.add(u);let d=80,m=new ue,_=new Float32Array(d*3),g=[];for(let T=0;T<d;T++){let P=Math.random()*Math.PI*2,D=2+Math.random()*1.5,F=(Math.random()-.5)*3;_[T*3]=Math.cos(P)*D,_[T*3+1]=F,_[T*3+2]=Math.sin(P)*D,g.push(P,Math.random()*.02+.01)}m.setAttribute("position",new Oe(_,3));let p=new Oi({color:65535,size:.15,transparent:!0,opacity:.8,blending:_r}),f=new dr(m,p);e.add(f);let v=[];for(let T=0;T<3;T++){let P=new Qs(1.5,.1,16,50),D=new en({color:65535,transparent:!0,opacity:.8,side:Ee}),F=new Ht(P,D);F.rotation.x=Math.PI/2,F.scale.set(.1,.1,.1),e.add(F),v.push(F),Ft.to(F.scale,{x:2,y:2,z:2,duration:.8,delay:T*.1,ease:"power2.out"}),Ft.to(D,{opacity:0,duration:.8,delay:T*.1})}let M=new kn(65535,30,8);M.position.copy(e.position),this.scene.add(M);let S=new kn(16777215,20,6);S.position.copy(e.position),this.scene.add(S);let b=new fr(.5,3,6),w=new en({color:16777215,transparent:!0,opacity:1,side:Ee}),A=new Ht(b,w);A.position.copy(e.position),A.lookAt(this.camera.position),this.scene.add(A),Ft.to(A.scale,{x:3,y:3,z:3,duration:.3,ease:"power2.out"}),Ft.to(w,{opacity:0,duration:.3,onComplete:()=>{this.scene.remove(A),b.dispose(),w.dispose()}});let R=this.camera.position.clone(),x=Ft.timeline();for(let T=0;T<6;T++)x.to(this.camera.position,{x:R.x+(Math.random()-.5)*.2,y:R.y+(Math.random()-.5)*.2,z:R.z+(Math.random()-.5)*.15,duration:.03});x.to(this.camera.position,{x:R.x,y:R.y,z:R.z,duration:.05}),Ft.to(s.rotation,{x:Math.PI*2,y:Math.PI*2,duration:.8}),Ft.to(u.rotation,{x:-Math.PI*2,z:Math.PI*2,duration:.8}),Ft.to(l.scale,{x:1.3,y:1.3,z:1.3,duration:.2,yoyo:!0,repeat:1,ease:"power2.inOut"}),Ft.to(e.scale,{x:1.2,y:1.2,z:1.2,duration:.15,yoyo:!0,repeat:1,ease:"elastic.out(1, 0.3)"}),Ft.to(M,{intensity:50,duration:.1,yoyo:!0,repeat:3}),Ft.to(S,{intensity:35,duration:.15,yoyo:!0,repeat:2}),this.particleAnimations.push({geometry:m,velocities:g,particleCount:d}),Ft.to([i,o,h,p],{opacity:0,duration:.5,delay:.5,onComplete:()=>{let T=this.particleAnimations.findIndex(P=>P.geometry===m);T>-1&&this.particleAnimations.splice(T,1),this.scene.remove(e),this.scene.remove(M),this.scene.remove(S),n.dispose(),i.dispose(),a.dispose(),o.dispose(),c.dispose(),h.dispose(),m.dispose(),p.dispose(),v.forEach(P=>{P.geometry.dispose(),P.material.dispose()})}}),Ft.to([M,S],{intensity:0,duration:.5,delay:.5})}createLightningStrike(t,e){let n=this.camera.position.clone(),i=Ft.timeline();for(let g=0;g<8;g++)i.to(this.camera.position,{x:n.x+(Math.random()-.5)*.3,y:n.y+(Math.random()-.5)*.3,z:n.z+(Math.random()-.5)*.2,duration:.03});i.to(this.camera.position,{x:n.x,y:n.y,z:n.z,duration:.1});let s=3;for(let g=0;g<s;g++){let p=[];p.push(t.clone()),p[0].y+=10;for(let b=1;b<20;b++){let w=b/20,A=new O().lerpVectors(t,e,w);A.y+=10-w*8,A.x+=(Math.random()-.5)*.8,A.z+=(Math.random()-.5)*.8,p.push(A)}p.push(e.clone()),p[p.length-1].y+=2;let v=new ue().setFromPoints(p),M=new Ui({color:g===0?16777215:11206655,linewidth:5,transparent:!0,opacity:g===0?1:.8}),S=new ur(v,M);this.scene.add(S),this.lightningBolts.push(S);for(let b=0;b<5;b++){let w=Math.floor(Math.random()*(p.length-5))+2,A=[p[w].clone()],R=5+Math.floor(Math.random()*5);for(let D=1;D<=R;D++){let V=A[A.length-1].clone();V.x+=(Math.random()-.5)*1.5,V.y+=(Math.random()-.8)*.8,V.z+=(Math.random()-.5)*1.5,A.push(V)}let x=new ue().setFromPoints(A),T=new Ui({color:11206655,linewidth:2,transparent:!0,opacity:.7}),P=new ur(x,T);this.scene.add(P),Ft.to(T,{opacity:0,duration:.25,delay:.05,onComplete:()=>{this.scene.remove(P),x.dispose(),T.dispose()}})}Ft.to(M,{opacity:0,duration:.35,delay:.15+g*.05,onComplete:()=>{this.scene.remove(S),v.dispose(),M.dispose();let b=this.lightningBolts.indexOf(S);b>-1&&this.lightningBolts.splice(b,1)}})}let a=new kn(16777215,50,15);a.position.copy(e),a.position.y+=2,this.scene.add(a);let o=new kn(11206655,30,12);o.position.copy(t),o.position.y+=10,this.scene.add(o);let l=100,c=new ue,h=new Float32Array(l*3),u=[];for(let g=0;g<l;g++){let p=Math.random();h[g*3]=t.x+(e.x-t.x)*p+(Math.random()-.5)*2,h[g*3+1]=t.y+10-p*8+(Math.random()-.5)*2,h[g*3+2]=t.z+(e.z-t.z)*p+(Math.random()-.5)*2,u.push(new O((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3))}c.setAttribute("position",new Oe(h,3));let d=new Oi({color:16777215,size:.2,transparent:!0,opacity:1,blending:_r,map:this.circleTexture,alphaTest:.01}),m=new dr(c,d);this.scene.add(m),Ft.to(d,{opacity:0,duration:.8,onUpdate:()=>{let g=c.attributes.position;for(let p=0;p<l;p++)g.array[p*3]+=u[p].x,g.array[p*3+1]+=u[p].y,g.array[p*3+2]+=u[p].z;g.needsUpdate=!0},onComplete:()=>{this.scene.remove(m),c.dispose(),d.dispose()}});let _=6;for(let g=0;g<_;g++){let p=new fr(.5,1,32),f=new en({color:g%2===0?16777215:11206655,transparent:!0,opacity:.9,side:Ee}),v=new Ht(p,f);v.position.copy(e),v.position.y=.1,v.rotation.x=-Math.PI/2,this.scene.add(v),Ft.to(v.scale,{x:8+g*2,y:8+g*2,duration:.6,delay:g*.05,ease:"power2.out"}),Ft.to(f,{opacity:0,duration:.6,delay:g*.05,onComplete:()=>{this.scene.remove(v),p.dispose(),f.dispose()}})}for(let g=0;g<8;g++)setTimeout(()=>{let p=[];p.push(t.clone()),p[0].y+=10;for(let b=1;b<15;b++){let w=b/15,A=new O().lerpVectors(t,e,w);A.y+=10-w*8,A.x+=(Math.random()-.5)*1.2,A.z+=(Math.random()-.5)*1.2,p.push(A)}p.push(e.clone()),p[p.length-1].y+=2;let v=new ue().setFromPoints(p),M=new Ui({color:16777215,linewidth:3,transparent:!0,opacity:.6}),S=new ur(v,M);this.scene.add(S),Ft.to(M,{opacity:0,duration:.15,onComplete:()=>{this.scene.remove(S),v.dispose(),M.dispose()}})},g*40);Ft.to(a,{intensity:0,duration:.4,delay:.2,onComplete:()=>{this.scene.remove(a)}}),Ft.to(o,{intensity:0,duration:.4,delay:.2,onComplete:()=>{this.scene.remove(o)}})}createMassiveImpact(t,e){let n=e.type==="critical",i=n?16711748:e.type==="blocked"?43775:3470813;for(let u=0;u<3;u++){let d=new fr(.5,.8,32),m=new en({color:i,transparent:!0,opacity:.8,side:Ee}),_=new Ht(d,m);_.position.copy(t),_.position.y=.1,_.rotation.x=-Math.PI/2,this.scene.add(_),Ft.to(_.scale,{x:n?12:8,y:n?12:8,z:1,duration:.8,delay:u*.1,ease:"power2.out"}),Ft.to(m,{opacity:0,duration:.8,delay:u*.1,onComplete:()=>{this.scene.remove(_),d.dispose(),m.dispose()}})}let s=n?200:120,a=new ue,o=new Float32Array(s*3),l=[];for(let u=0;u<s;u++){o[u*3]=t.x,o[u*3+1]=t.y+2,o[u*3+2]=t.z;let d=n?.8:.5,m=u/s*Math.PI*2,_=(Math.random()-.3)*Math.PI;l.push(new O(Math.cos(m)*Math.cos(_)*d,Math.sin(_)*d,Math.sin(m)*Math.cos(_)*d))}a.setAttribute("position",new Oe(o,3));let c=new Oi({color:i,size:n?.25:.15,transparent:!0,opacity:1,blending:_r,map:this.circleTexture,alphaTest:.01}),h=new dr(a,c);this.scene.add(h),Ft.to(c,{opacity:0,duration:1.2,onUpdate:()=>{let u=a.attributes.position;for(let d=0;d<s;d++)u.array[d*3]+=l[d].x,u.array[d*3+1]+=l[d].y,u.array[d*3+2]+=l[d].z,l[d].y-=.03;u.needsUpdate=!0},onComplete:()=>{this.scene.remove(h),a.dispose(),c.dispose()}})}createEnergyWave(t,e){let n=new gi(1,32,32),i=new en({color:e?16711748:3470813,transparent:!0,opacity:.5,side:ze,wireframe:!1}),s=new Ht(n,i);s.position.copy(t),s.position.y+=2,this.scene.add(s),Ft.to(s.scale,{x:e?8:5,y:e?8:5,z:e?8:5,duration:.6,ease:"power2.out"}),Ft.to(i,{opacity:0,duration:.6,onComplete:()=>{this.scene.remove(s),n.dispose(),i.dispose()}})}cinematicCameraZoom(t,e,n){if(n){let i=new O().addVectors(t.position,e.position).multiplyScalar(.5);Ft.to(this.camera.position,{x:i.x,y:i.y+3,z:i.z+6,duration:.3,ease:"power2.inOut"}),Ft.to(this.camera,{fov:50,duration:.3,ease:"power2.inOut",onUpdate:()=>{this.camera.updateProjectionMatrix()}})}}resetCamera(){Ft.to(this.camera.position,{x:this.cameraOriginalPosition.x,y:this.cameraOriginalPosition.y,z:this.cameraOriginalPosition.z,duration:.5,ease:"power2.out"}),Ft.to(this.camera,{fov:60,duration:.5,ease:"power2.out",onUpdate:()=>{this.camera.updateProjectionMatrix()}})}screenFlash(){let t=new zi(100,100),e=new en({color:16777215,transparent:!0,opacity:.8,side:Ee}),n=new Ht(t,e);n.position.copy(this.camera.position),n.position.z-=5,n.lookAt(this.camera.position),this.scene.add(n),Ft.to(e,{opacity:0,duration:.2,onComplete:()=>{this.scene.remove(n),t.dispose(),e.dispose()}})}animate(t=0){this.animationFrameId=requestAnimationFrame(n=>this.animate(n)),this.lastTime=t;let e=t*1e-4;this.timeSlowActive||(this.camera.position.x=this.cameraOriginalPosition.x+Math.sin(e)*.3,this.camera.position.y=this.cameraOriginalPosition.y+Math.sin(e*.7)*.2),this.lightningBolts.forEach(n=>{n.material&&(n.material.opacity*=.95)}),this.particleAnimations.forEach(n=>{let i=n.geometry.attributes.position.array;for(let s=0;s<n.particleCount;s++){let a=n.velocities[s*2+1];n.velocities[s*2]+=a;let o=n.velocities[s*2],l=Math.sqrt(i[s*3]**2+i[s*3+2]**2);i[s*3]=Math.cos(o)*l,i[s*3+2]=Math.sin(o)*l}n.geometry.attributes.position.needsUpdate=!0}),this.renderer.render(this.scene,this.camera)}throttleResize(){this.resizeTimeout||(this.resizeTimeout=setTimeout(()=>{this.onWindowResize(),this.resizeTimeout=null},100))}onWindowResize(){if(!this.canvasRef||!this.camera||!this.renderer)return;let t=this.canvasRef.nativeElement,e=t.clientWidth,n=t.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix();let i=e<500;e<680||(this.scene.fog=new es(657931,.08));let a=i?12:10,o=i?5:4;this.camera.position.set(0,o,a),this.cameraOriginalPosition=new O(0,o,a),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=wn({type:r,selectors:[["app-battle-canvas"]],viewQuery:function(e,n){if(e&1&&Ua(aM,7),e&2){let i;Oa(i=Ba())&&(n.canvasRef=i.first)}},decls:2,vars:0,consts:[["battleCanvas",""]],template:function(e,n){e&1&&Ln(0,"canvas",null,0)},dependencies:[En],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})};var bs={RAT:{id:"char1",name:"Shelob",race:"rat",health:85,maxHealth:85,attack:18,defense:12,speed:22,focus:20,color:"#ff0000"},CAT:{id:"char2",name:"Aragog",race:"cat",health:90,maxHealth:90,attack:22,defense:13,speed:23,focus:14,color:"#0000ff"},BEAR:{id:"char3",name:"Anansi",race:"bear",health:130,maxHealth:130,attack:18,defense:22,speed:10,focus:10,color:"#444444"},HORSE:{id:"char4",name:"Arachne",race:"horse",health:110,maxHealth:110,attack:21,defense:14,speed:20,focus:10,color:"#ffff00"},GIRAFFE:{id:"char5",name:"Ungoliant",race:"giraffe",health:95,maxHealth:95,attack:19,defense:14,speed:13,focus:24,color:"#34f5dd"}};function oM(r,t){if(r&1&&Ln(0,"app-victory-banner",6),r&2){let e=Cs();qn("winner",e.winner)}}function lM(r,t){if(r&1&&(De(0,"div",3),Ln(1,"app-character-status-card",4)(2,"app-battle-vs-badge")(3,"app-character-status-card",5),Le(),Es(4,oM,1,1,"app-victory-banner",6)),r&2){let e=t;Ie(),qn("character",e.team1[e.activeTeam1Index]),Ie(2),qn("character",e.team2[e.activeTeam2Index]),Ie(),Mc(e.isComplete&&e.winner?4:-1)}}var Wp=class r{battleCanvas;destroy$=new Na;battleService=Tn(Nr);router=Tn(td);battleState$=this.battleService.battleState$;isBattleActive$=this.battleState$.pipe(Wu(t=>t!==null));character1=null;character2=null;ngOnInit(){this.battleService.battleState$.pipe(ws(this.destroy$)).subscribe(t=>this.updateActiveCharacters(t))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}startBattle(){this.battleService.startBattle([bs.HORSE,bs.BEAR],[bs.GIRAFFE,bs.CAT,bs.RAT])}resetAndTerminateBattle(){this.battleCanvas&&this.battleCanvas.clearCharacters(),this.battleService.resetBattle(),this.character1=null,this.character2=null,this.router.navigate(["/"])}updateActiveCharacters(t){if(!t){this.character1=null,this.character2=null;return}this.character1=t.team1[t.activeTeam1Index]||null,this.character2=t.team2[t.activeTeam2Index]||null}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=wn({type:r,selectors:[["app-battle"]],viewQuery:function(e,n){if(e&1&&Ua(Pa,5),e&2){let i;Oa(i=Ba())&&(n.battleCanvas=i.first)}},decls:7,vars:6,consts:[[1,"battle-arena"],[1,"canvas-wrapper"],[3,"startBattle","terminateBattle","isBattleActive"],[1,"battle-overlay"],["alignment","left",3,"character"],["alignment","right",3,"character"],[3,"winner"]],template:function(e,n){if(e&1&&(De(0,"div",0)(1,"div",1),Ln(2,"app-battle-canvas"),Es(3,lM,5,3),Ti(4,"async"),Le(),De(5,"app-battle-controls",2),Ti(6,"async"),As("startBattle",function(){return n.startBattle()})("terminateBattle",function(){return n.resetAndTerminateBattle()}),Le()()),e&2){let i,s;Ie(3),Mc((i=wi(4,2,n.battleState$))?3:-1,i),Ie(2),qn("isBattleActive",(s=wi(6,4,n.isBattleActive$))!==null&&s!==void 0?s:!1)}},dependencies:[En,Qu,qa,Ya,Za,Ja,Pa],styles:[".canvas-wrapper[_ngcontent-%COMP%]{background:radial-gradient(circle at 20% 30%,rgba(52,245,221,.5) 0%,transparent 122%),radial-gradient(circle at 80% 20%,rgba(52,211,204,.4) 0%,transparent 60%),radial-gradient(circle at 60% 80%,rgba(45,212,191,.4) 0%,transparent 55%),radial-gradient(circle at 30% 60%,rgba(16,185,129,.3) 0%,transparent 45%),linear-gradient(135deg,#18181b4d,#1a1a1d33,#1212144d,#1a1a1d33,#18181b4d);border:1px solid rgba(52,245,221,.1);box-shadow:0 8px 8px #0000004d}[_nghost-%COMP%]{display:block;width:100%;height:100%;padding:0}.battle-arena[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100vh;height:100dvh;gap:20px;padding:20px;position:relative;overflow:hidden}.canvas-wrapper[_ngcontent-%COMP%]{flex:1;position:relative;border-radius:12px;overflow:hidden;box-shadow:0 0 60px #34f5dd4d,inset 0 0 40px #34f5dd1a}.battle-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;padding:20px;display:flex;justify-content:space-between;align-items:flex-start;pointer-events:none;z-index:10}@media (max-width: 500px){.battle-arena[_ngcontent-%COMP%]{padding:10px;gap:10px}.battle-overlay[_ngcontent-%COMP%]{flex-direction:column-reverse;gap:10px;height:100%;padding:10px}}@media (max-width: 480px){.battle-arena[_ngcontent-%COMP%], .battle-overlay[_ngcontent-%COMP%]{padding:8px;gap:8px}}"]})};export{Wp as BattleComponent};
