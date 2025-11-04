import{a as Pt,b as zt,c as Rt}from"./chunk-PUTRRT7D.js";import{a as It}from"./chunk-7SVXC6IJ.js";import{a as Ct,b as vt,c as Et,e as Lt,g as At}from"./chunk-2TIWTVRT.js";import{a as Ft,c as $t}from"./chunk-3TWYNKGT.js";import"./chunk-6ZRIGLE7.js";import"./chunk-6UAEGXHW.js";import{a as Fe}from"./chunk-II2MJT6M.js";import{a as pe,d as Ot,e as xe,i as Ce,o as ve}from"./chunk-ZW66AEFA.js";import{a as wt}from"./chunk-5NP5Y7PK.js";import{a as Dt}from"./chunk-AJ554TBV.js";import"./chunk-GGQ7LRWG.js";import{a as Tt}from"./chunk-VM3EBWKM.js";import"./chunk-F2X3VGZZ.js";import{b as $e}from"./chunk-VUT4JKZV.js";import{a as Vt,e as Mt}from"./chunk-VCGOT5NT.js";import{a as xt}from"./chunk-XGJRK3FZ.js";import{b as ot,c as lt,d as at}from"./chunk-ZNEPEABM.js";import"./chunk-UXNLCZE7.js";import{b as kt,c as St}from"./chunk-BXKN7MOM.js";import{$ as pt,Aa as bt,Ba as yt,Ca as X,Da as K,Ea as le,F as be,Ga as J,J as rt,Ja as U,V as Ee,W as ie,X as st,Y as ct,ga as je,j as N,k as nt,l as Me,m as te,na as dt,oa as Y,pa as ne,q as fe,qa as oe,r as G,ra as ut,sa as ye,t as B,ta as mt,va as ht,wa as _t,xa as gt,za as ft}from"./chunk-Q4X7JAGN.js";import{$b as et,Ab as Je,Bb as d,Cb as u,Db as S,Eb as w,Fb as I,Gb as O,Hb as k,Lb as v,Mb as s,Nb as Ve,Ob as he,Pb as C,Qa as We,Qb as z,R as ze,Rb as g,S as se,Sb as f,T as Z,Ta as c,U as ue,Wb as ee,Xb as D,Ya as Se,Yb as H,Z as E,Zb as ce,a as ae,ac as tt,b as re,bc as it,cc as W,da as Ge,dc as _e,ea as Te,ec as V,fa as h,fb as F,fc as ge,ga as _,gb as me,gc as Qe,ha as Ue,ia as L,jb as R,jc as Ne,kb as p,kc as Be,la as Re,mc as $,oa as T,pa as Ze,qb as b,rb as r,sa as ke,sb as Oe,tb as Ye,ua as A,ub as Q,uc as y,vb as M,vc as q,xb as j,xc as P,yc as Ke,zb as Xe}from"./chunk-RFBIJB72.js";function He(t,l){let e=!l?.manualCleanup;e&&!l?.injector&&Ge(He);let n=e?l?.injector?.get(Re)??E(Re):null,i=Xt(l?.equal),o;l?.requireSync?o=A({kind:0},{equal:i}):o=A({kind:1,value:l?.initialValue},{equal:i});let a,m=t.subscribe({next:x=>o.set({kind:1,value:x}),error:x=>{if(l?.rejectErrors)throw x;o.set({kind:2,error:x})},complete:()=>{a?.()}});if(l?.requireSync&&o().kind===0)throw new ze(601,!1);return a=n?.onDestroy(m.unsubscribe.bind(m)),P(()=>{let x=o();switch(x.kind){case 1:return x.value;case 2:throw x.error;case 0:throw new ze(601,!1)}},{equal:l?.equal})}function Xt(t=Object.is){return(l,e)=>l.kind===1&&e.kind===1&&t(l.value,e.value)}var Jt=["handle"],ei=["input"],ti=t=>({checked:t});function ii(t,l){t&1&&O(0)}function ni(t,l){if(t&1&&p(0,ii,1,0,"ng-container",4),t&2){let e=s();r("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",V(2,ti,e.checked()))}}var oi=({dt:t})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${t("toggleswitch.width")};
    height: ${t("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${t("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${t("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${t("toggleswitch.border.color")};
    background: ${t("toggleswitch.background")};
    transition: background ${t("toggleswitch.transition.duration")}, color ${t("toggleswitch.transition.duration")}, border-color ${t("toggleswitch.transition.duration")}, outline-color ${t("toggleswitch.transition.duration")}, box-shadow ${t("toggleswitch.transition.duration")};
    border-radius: ${t("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${t("toggleswitch.handle.background")};
    color: ${t("toggleswitch.handle.color")};
    width: ${t("toggleswitch.handle.size")};
    height: ${t("toggleswitch.handle.size")};
    inset-inline-start: ${t("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${t("toggleswitch.handle.size")} / 2));
    border-radius: ${t("toggleswitch.handle.border.radius")};
    transition: background ${t("toggleswitch.transition.duration")}, color ${t("toggleswitch.transition.duration")}, inset-inline-start ${t("toggleswitch.slide.duration")}, box-shadow ${t("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${t("toggleswitch.checked.background")};
    border-color: ${t("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${t("toggleswitch.handle.checked.background")};
    color: ${t("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${t("toggleswitch.width")} - calc(${t("toggleswitch.handle.size")} + ${t("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${t("toggleswitch.hover.background")};
    border-color: ${t("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${t("toggleswitch.handle.hover.background")};
    color: ${t("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${t("toggleswitch.checked.hover.background")};
    border-color: ${t("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${t("toggleswitch.handle.checked.hover.background")};
    color: ${t("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${t("toggleswitch.focus.ring.shadow")};
    outline: ${t("toggleswitch.focus.ring.width")} ${t("toggleswitch.focus.ring.style")} ${t("toggleswitch.focus.ring.color")};
    outline-offset: ${t("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${t("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${t("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${t("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${t("toggleswitch.invalid.border.color")};
}`,li={root:{position:"relative"}},ai={root:({instance:t})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.disabled,"p-invalid":t.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Qt=(()=>{class t extends J{name="toggleswitch";theme=oi;classes=ai;inlineStyles=li;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();var ri={provide:pe,useExisting:se(()=>qe),multi:!0},qe=(()=>{class t extends U{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new T;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=E(Qt);templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"handle":this._handleTemplate=e.template;break;default:this._handleTemplate=e.template;break}})}onClick(e){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:e,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(e){this.modelValue=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,i,o){if(n&1&&(C(o,Jt,4),C(o,X,4)),n&2){let a;g(a=f())&&(i.handleTemplate=a.first),g(a=f())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&z(ei,5),n&2){let o;g(o=f())&&(i.input=o.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",q],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",y],readonly:[2,"readonly","readonly",y],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",y]},outputs:{onChange:"onChange"},features:[W([ri,Qt]),R],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){if(n&1){let o=k();d(0,"div",1),v("click",function(m){return h(o),_(i.onClick(m))}),d(1,"input",2,0),v("focus",function(){return h(o),_(i.onFocus())})("blur",function(){return h(o),_(i.onBlur())}),u(),d(3,"span",3)(4,"div",3),p(5,ni,1,4,"ng-container"),u()()()}n&2&&(Q(i.sx("root")),M(i.styleClass),r("ngClass",i.cx("root"))("ngStyle",i.style),b("data-pc-name","toggleswitch")("data-pc-section","root"),c(),r("ngClass",i.cx("input"))("checked",i.checked())("disabled",i.disabled)("pAutoFocus",i.autofocus),b("id",i.inputId)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),c(2),r("ngClass",i.cx("slider")),b("data-pc-section","slider"),c(),r("ngClass",i.cx("handle")),c(),j(i.handleTemplate||i._handleTemplate?5:-1))},dependencies:[B,N,G,fe,$e,K],encapsulation:2,changeDetection:0})}return t})();var Nt=(()=>{class t extends xt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["MinusIcon"]],features:[R],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(Ue(),d(0,"svg",0),S(1,"path",1),u()),n&2&&(M(i.getClassNames()),b("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role))},encapsulation:2})}return t})();var si=["checkboxicon"],ci=["input"],pi=()=>({"p-checkbox-input":!0}),di=t=>({checked:t,class:"p-checkbox-icon"});function ui(t,l){if(t&1&&S(0,"span",8),t&2){let e=s(3);r("ngClass",e.checkboxIcon),b("data-pc-section","icon")}}function mi(t,l){t&1&&S(0,"CheckIcon",9),t&2&&(r("styleClass","p-checkbox-icon"),b("data-pc-section","icon"))}function hi(t,l){if(t&1&&(w(0),p(1,ui,1,2,"span",7)(2,mi,1,2,"CheckIcon",6),I()),t&2){let e=s(2);c(),r("ngIf",e.checkboxIcon),c(),r("ngIf",!e.checkboxIcon)}}function _i(t,l){t&1&&S(0,"MinusIcon",9),t&2&&(r("styleClass","p-checkbox-icon"),b("data-pc-section","icon"))}function gi(t,l){if(t&1&&(w(0),p(1,hi,3,2,"ng-container",4)(2,_i,1,2,"MinusIcon",6),I()),t&2){let e=s();c(),r("ngIf",e.checked),c(),r("ngIf",e._indeterminate())}}function fi(t,l){}function bi(t,l){t&1&&p(0,fi,0,0,"ng-template")}var yi=({dt:t})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${t("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${t("checkbox.border.radius")};
    border: 1px solid ${t("checkbox.border.color")};
    background: ${t("checkbox.background")};
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
    transition: background ${t("checkbox.transition.duration")}, color ${t("checkbox.transition.duration")}, border-color ${t("checkbox.transition.duration")}, box-shadow ${t("checkbox.transition.duration")}, outline-color ${t("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${t("checkbox.transition.duration")};
    color: ${t("checkbox.icon.color")};
    font-size: ${t("checkbox.icon.size")};
    width: ${t("checkbox.icon.size")};
    height: ${t("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${t("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${t("checkbox.checked.border.color")};
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
    border-color: ${t("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.focus.border.color")};
    box-shadow: ${t("checkbox.focus.ring.shadow")};
    outline: ${t("checkbox.focus.ring.width")} ${t("checkbox.focus.ring.style")} ${t("checkbox.focus.ring.color")};
    outline-offset: ${t("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${t("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${t("checkbox.disabled.background")};
    border-color: ${t("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${t("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${t("checkbox.sm.width")};
    height: ${t("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${t("checkbox.icon.sm.size")};
    width: ${t("checkbox.icon.sm.size")};
    height: ${t("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${t("checkbox.lg.width")};
    height: ${t("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${t("checkbox.icon.lg.size")};
    width: ${t("checkbox.icon.lg.size")};
    height: ${t("checkbox.icon.lg.size")};
}
`,xi={root:({instance:t,props:l})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":l.disabled,"p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Bt=(()=>{class t extends J{name="checkbox";theme=yi;classes=xi;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();var Ci={provide:pe,useExisting:se(()=>Ae),multi:!0},Ae=(()=>{class t extends U{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new T;onFocus=new T;onBlur=new T;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:ut(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=A(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=E(Bt);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,i=this.injector.get(Ot,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=o.filter(a=>!oe(a,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,o){if(n&1&&(C(o,si,4),C(o,X,4)),n&2){let a;g(a=f())&&(i.checkboxIconTemplate=a.first),g(a=f())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&z(ci,5),n&2){let o;g(o=f())&&(i.inputViewChild=o.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",y],binary:[2,"binary","binary",y],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",q],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",y],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",y],required:[2,"required","required",y],autofocus:[2,"autofocus","autofocus",y],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[W([Ci,Bt]),R,Te],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,i){if(n&1){let o=k();d(0,"div",1)(1,"input",2,0),v("focus",function(m){return h(o),_(i.onInputFocus(m))})("blur",function(m){return h(o),_(i.onInputBlur(m))})("change",function(m){return h(o),_(i.handleChange(m))}),u(),d(3,"div",3),p(4,gi,3,2,"ng-container",4)(5,bi,1,0,null,5),u()()}n&2&&(Q(i.style),M(i.styleClass),r("ngClass",i.containerClass),b("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.disabled),c(),Q(i.inputStyle),M(i.inputClass),r("value",i.value)("checked",i.checked)("disabled",i.disabled)("readonly",i.readonly)("ngClass",_e(26,pi)),b("id",i.inputId)("name",i.name)("tabindex",i.tabindex)("required",i.required?!0:null)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),c(3),r("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),c(),r("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",V(27,di,i.checked)))},dependencies:[B,N,te,G,Fe,Nt,K],encapsulation:2,changeDetection:0})}return t})();var vi=["removeicon"],wi=["*"];function Ii(t,l){if(t&1){let e=k();d(0,"img",4),v("error",function(i){h(e);let o=s();return _(o.imageError(i))}),u()}if(t&2){let e=s();r("src",e.image,We)("alt",e.alt)}}function Ti(t,l){if(t&1&&S(0,"span",6),t&2){let e=s(2);M(e.icon),r("ngClass","p-chip-icon"),b("data-pc-section","icon")}}function ki(t,l){if(t&1&&p(0,Ti,1,4,"span",5),t&2){let e=s();r("ngIf",e.icon)}}function Si(t,l){if(t&1&&(d(0,"div",7),D(1),u()),t&2){let e=s();b("data-pc-section","label"),c(),H(e.label)}}function Oi(t,l){if(t&1){let e=k();d(0,"span",11),v("click",function(i){h(e);let o=s(3);return _(o.close(i))})("keydown",function(i){h(e);let o=s(3);return _(o.onKeydown(i))}),u()}if(t&2){let e=s(3);M(e.removeIcon),r("ngClass","p-chip-remove-icon"),b("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Vi(t,l){if(t&1){let e=k();d(0,"TimesCircleIcon",12),v("click",function(i){h(e);let o=s(3);return _(o.close(i))})("keydown",function(i){h(e);let o=s(3);return _(o.onKeydown(i))}),u()}if(t&2){let e=s(3);M("p-chip-remove-icon"),b("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Mi(t,l){if(t&1&&(w(0),p(1,Oi,1,5,"span",9)(2,Vi,1,4,"TimesCircleIcon",10),I()),t&2){let e=s(2);c(),r("ngIf",e.removeIcon),c(),r("ngIf",!e.removeIcon)}}function Ei(t,l){}function Fi(t,l){t&1&&p(0,Ei,0,0,"ng-template")}function $i(t,l){if(t&1){let e=k();d(0,"span",13),v("click",function(i){h(e);let o=s(2);return _(o.close(i))})("keydown",function(i){h(e);let o=s(2);return _(o.onKeydown(i))}),p(1,Fi,1,0,null,14),u()}if(t&2){let e=s(2);b("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),c(),r("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Li(t,l){if(t&1&&(w(0),p(1,Mi,3,2,"ng-container",3)(2,$i,2,3,"span",8),I()),t&2){let e=s();c(),r("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),c(),r("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ai=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,Di={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Kt=(()=>{class t extends J{name="chip";theme=Ai;classes=Di;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();var jt=(()=>{class t extends U{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new T;onImageError=new T;visible=!0;get removeAriaLabel(){return this.config.getTranslation(le.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_chipProps;_componentStyle=E(Kt);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:n}=e.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.style!==void 0&&(this.style=n.style),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-chip"]],contentQueries:function(n,i,o){if(n&1&&(C(o,vi,4),C(o,X,4)),n&2){let a;g(a=f())&&(i.removeIconTemplate=a.first),g(a=f())&&(i.templates=a)}},hostVars:9,hostBindings:function(n,i){n&2&&(b("data-pc-name","chip")("aria-label",i.label)("data-pc-section","root"),Q(i.style),M(i.containerClass()),Oe("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",y],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[W([Kt]),R,Te],ngContentSelectors:wi,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(Ve(),he(0),p(1,Ii,1,2,"img",1)(2,ki,1,1,"ng-template",null,0,$)(4,Si,2,2,"div",2)(5,Li,3,2,"ng-container",3)),n&2){let o=ee(3);c(),r("ngIf",i.image)("ngIfElse",o),c(3),r("ngIf",i.label),c(),r("ngIf",i.removable)}},dependencies:[B,N,te,G,It,K],encapsulation:2,changeDetection:0})}return t})();var we=t=>({height:t}),zi=(t,l,e)=>({"p-multiselect-option-selected":t,"p-disabled":l,"p-focus":e}),qt=t=>({$implicit:t}),Ri=(t,l)=>({checked:t,class:l});function Qi(t,l){}function Ni(t,l){t&1&&p(0,Qi,0,0,"ng-template")}function Bi(t,l){if(t&1&&p(0,Ni,1,0,null,4),t&2){let e=l.class,n=s(2);r("ngTemplateOutlet",n.itemCheckboxIconTemplate)("ngTemplateOutletContext",ge(2,Ri,n.selected,e))}}function Ki(t,l){t&1&&(w(0),p(1,Bi,1,5,"ng-template",null,0,$),I())}function ji(t,l){if(t&1&&(d(0,"span"),D(1),u()),t&2){let e,n=s();c(),H((e=n.label)!==null&&e!==void 0?e:"empty")}}function Hi(t,l){t&1&&O(0)}var qi=["item"],Gi=["group"],Ui=["loader"],Zi=["header"],Wi=["filter"],Yi=["footer"],Xi=["emptyfilter"],Ji=["empty"],en=["selecteditems"],tn=["checkicon"],nn=["loadingicon"],on=["filtericon"],ln=["removetokenicon"],an=["chipicon"],rn=["clearicon"],sn=["dropdownicon"],cn=["itemcheckboxicon"],pn=["headercheckboxicon"],dn=["overlay"],un=["filterInput"],mn=["focusInput"],hn=["items"],_n=["scroller"],gn=["lastHiddenFocusableEl"],fn=["firstHiddenFocusableEl"],bn=["headerCheckbox"],yn=[[["p-header"]],[["p-footer"]]],xn=["p-header","p-footer"],Cn=()=>({class:"p-multiselect-chip-icon"}),vn=(t,l)=>({$implicit:t,removeChip:l}),Gt=t=>({options:t}),wn=(t,l,e)=>({checked:t,partialSelected:l,class:e}),Ut=(t,l)=>({$implicit:t,options:l}),In=()=>({});function Tn(t,l){if(t&1&&(w(0),D(1),I()),t&2){let e=s(2);c(),H(e.label()||"empty")}}function kn(t,l){if(t&1&&D(0),t&2){let e=s(3);ce(" ",e.getSelectedItemsLabel()," ")}}function Sn(t,l){t&1&&O(0)}function On(t,l){if(t&1){let e=k();d(0,"span",28),v("click",function(i){h(e);let o=s(4).$implicit,a=s(4);return _(a.removeOption(o,i))}),p(1,Sn,1,0,"ng-container",29),u()}if(t&2){let e=s(8);b("data-pc-section","clearicon")("aria-hidden",!0),c(),r("ngTemplateOutlet",e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)("ngTemplateOutletContext",_e(4,Cn))}}function Vn(t,l){if(t&1&&(w(0),p(1,On,2,5,"span",27),I()),t&2){let e=s(7);c(),r("ngIf",e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)}}function Mn(t,l){if(t&1&&p(0,Vn,2,1,"ng-container",20),t&2){let e=s(6);r("ngIf",!e.disabled&&!e.readonly)}}function En(t,l){t&1&&(w(0),p(1,Mn,1,1,"ng-template",null,5,$),I())}function Fn(t,l){if(t&1){let e=k();d(0,"div",24,4)(2,"p-chip",26),v("onRemove",function(i){let o=h(e).$implicit,a=s(4);return _(a.removeOption(o,i))}),p(3,En,3,0,"ng-container",20),u()()}if(t&2){let e=l.$implicit,n=s(4);c(2),r("label",n.getLabelByValue(e))("removable",!n.disabled&&!n.readonly)("removeIcon",n.chipIcon),c(),r("ngIf",n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate)}}function $n(t,l){if(t&1&&p(0,Fn,4,4,"div",25),t&2){let e=s(3);r("ngForOf",e.chipSelectedItems())}}function Ln(t,l){if(t&1&&(w(0),D(1),I()),t&2){let e=s(3);c(),H(e.placeholder()||e.defaultLabel||"empty")}}function An(t,l){if(t&1&&(w(0),p(1,kn,1,1)(2,$n,1,1,"div",24)(3,Ln,2,1,"ng-container",20),I()),t&2){let e=s(2);c(),j(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?1:2),c(2),r("ngIf",!e.modelValue()||e.modelValue().length===0)}}function Dn(t,l){if(t&1&&(w(0),p(1,Tn,2,1,"ng-container",20)(2,An,4,2,"ng-container",20),I()),t&2){let e=s();c(),r("ngIf",e.display==="comma"),c(),r("ngIf",e.display==="chip")}}function Pn(t,l){t&1&&O(0)}function zn(t,l){if(t&1&&(w(0),D(1),I()),t&2){let e=s(2);c(),H(e.placeholder()||e.defaultLabel||"empty")}}function Rn(t,l){if(t&1&&(w(0),p(1,Pn,1,0,"ng-container",29)(2,zn,2,1,"ng-container",20),I()),t&2){let e=s();c(),r("ngTemplateOutlet",e.selectedItemsTemplate||e._selectedItemsTemplate)("ngTemplateOutletContext",ge(3,vn,e.selectedOptions,e.removeOption.bind(e))),c(),r("ngIf",!e.modelValue()||e.modelValue().length===0)}}function Qn(t,l){if(t&1){let e=k();d(0,"TimesIcon",31),v("click",function(i){h(e);let o=s(2);return _(o.clear(i))}),u()}t&2&&b("data-pc-section","clearicon")("aria-hidden",!0)}function Nn(t,l){}function Bn(t,l){t&1&&p(0,Nn,0,0,"ng-template")}function Kn(t,l){if(t&1){let e=k();d(0,"span",31),v("click",function(i){h(e);let o=s(2);return _(o.clear(i))}),p(1,Bn,1,0,null,32),u()}if(t&2){let e=s(2);b("data-pc-section","clearicon")("aria-hidden",!0),c(),r("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function jn(t,l){if(t&1&&(w(0),p(1,Qn,1,2,"TimesIcon",30)(2,Kn,2,3,"span",30),I()),t&2){let e=s();c(),r("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),c(),r("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Hn(t,l){t&1&&O(0)}function qn(t,l){if(t&1&&(w(0),p(1,Hn,1,0,"ng-container",32),I()),t&2){let e=s(2);c(),r("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Gn(t,l){if(t&1&&S(0,"span",35),t&2){let e=s(3);r("ngClass","p-multiselect-loading-icon pi-spin "+e.loadingIcon)}}function Un(t,l){t&1&&S(0,"span",36),t&2&&M("p-multiselect-loading-icon pi pi-spinner pi-spin")}function Zn(t,l){if(t&1&&(w(0),p(1,Gn,1,1,"span",33)(2,Un,1,2,"span",34),I()),t&2){let e=s(2);c(),r("ngIf",e.loadingIcon),c(),r("ngIf",!e.loadingIcon)}}function Wn(t,l){if(t&1&&(w(0),p(1,qn,2,1,"ng-container",20)(2,Zn,3,2,"ng-container",20),I()),t&2){let e=s();c(),r("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),c(),r("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function Yn(t,l){if(t&1&&S(0,"span",40),t&2){let e=s(3);r("ngClass",e.dropdownIcon),b("data-pc-section","triggericon")("aria-hidden",!0)}}function Xn(t,l){t&1&&S(0,"ChevronDownIcon",41),t&2&&(r("styleClass","p-multiselect-dropdown-icon"),b("data-pc-section","triggericon")("aria-hidden",!0))}function Jn(t,l){if(t&1&&(w(0),p(1,Yn,1,3,"span",38)(2,Xn,1,3,"ChevronDownIcon",39),I()),t&2){let e=s(2);c(),r("ngIf",e.dropdownIcon),c(),r("ngIf",!e.dropdownIcon)}}function eo(t,l){}function to(t,l){t&1&&p(0,eo,0,0,"ng-template")}function io(t,l){if(t&1&&(d(0,"span",42),p(1,to,1,0,null,32),u()),t&2){let e=s(2);b("data-pc-section","triggericon")("aria-hidden",!0),c(),r("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function no(t,l){if(t&1&&p(0,Jn,3,2,"ng-container",20)(1,io,2,3,"span",37),t&2){let e=s();r("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),c(),r("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function oo(t,l){t&1&&O(0)}function lo(t,l){t&1&&O(0)}function ao(t,l){if(t&1&&(w(0),p(1,lo,1,0,"ng-container",29),I()),t&2){let e=s(3);c(),r("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",V(2,Gt,e.filterOptions))}}function ro(t,l){if(t&1&&S(0,"CheckIcon",41),t&2){let e=s().class;r("styleClass",e),b("data-pc-section","icon")}}function so(t,l){}function co(t,l){t&1&&p(0,so,0,0,"ng-template")}function po(t,l){if(t&1&&p(0,ro,1,2,"CheckIcon",39)(1,co,1,0,null,29),t&2){let e=l.class,n=s(5);r("ngIf",!n.headerCheckboxIconTemplate&&!n._headerCheckboxIconTemplate&&n.allSelected()),c(),r("ngTemplateOutlet",n.headerCheckboxIconTemplate||n._headerCheckboxIconTemplate)("ngTemplateOutletContext",Qe(3,wn,n.allSelected(),n.partialSelected(),e))}}function uo(t,l){if(t&1){let e=k();d(0,"p-checkbox",51,10),v("onChange",function(i){h(e);let o=s(4);return _(o.onToggleAll(i))}),p(2,po,2,7,"ng-template",null,11,$),u()}if(t&2){let e=s(4);r("ngModel",e.allSelected())("ariaLabel",e.toggleAllAriaLabel)("binary",!0)("variant",e.variant)("disabled",e.disabled)}}function mo(t,l){t&1&&S(0,"SearchIcon",41),t&2&&r("styleClass","p-multiselect-filter-icon")}function ho(t,l){}function _o(t,l){t&1&&p(0,ho,0,0,"ng-template")}function go(t,l){if(t&1&&(d(0,"span",55),p(1,_o,1,0,null,32),u()),t&2){let e=s(5);c(),r("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function fo(t,l){if(t&1){let e=k();d(0,"div",52)(1,"p-iconfield")(2,"input",53,12),v("input",function(i){h(e);let o=s(4);return _(o.onFilterInputChange(i))})("keydown",function(i){h(e);let o=s(4);return _(o.onFilterKeyDown(i))})("click",function(i){h(e);let o=s(4);return _(o.onInputClick(i))})("blur",function(i){h(e);let o=s(4);return _(o.onFilterBlur(i))}),u(),d(4,"p-inputicon"),p(5,mo,1,1,"SearchIcon",39)(6,go,2,1,"span",54),u()()()}if(t&2){let e=s(4);c(2),r("variant",e.variant)("value",e._filterValue()||"")("disabled",e.disabled),b("autocomplete",e.autocomplete)("aria-owns",e.id+"_list")("aria-activedescendant",e.focusedOptionId)("placeholder",e.filterPlaceHolder)("aria-label",e.ariaFilterLabel),c(3),r("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),c(),r("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function bo(t,l){if(t&1&&p(0,uo,4,5,"p-checkbox",49)(1,fo,7,10,"div",50),t&2){let e=s(3);r("ngIf",e.showToggleAll&&!e.selectionLimit),c(),r("ngIf",e.filter)}}function yo(t,l){if(t&1&&(d(0,"div",48),he(1),p(2,ao,2,4,"ng-container",22)(3,bo,2,2,"ng-template",null,9,$),u()),t&2){let e=ee(4),n=s(2);c(2),r("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function xo(t,l){t&1&&O(0)}function Co(t,l){if(t&1&&p(0,xo,1,0,"ng-container",29),t&2){let e=l.$implicit,n=l.options;s(2);let i=ee(9);r("ngTemplateOutlet",i)("ngTemplateOutletContext",ge(2,Ut,e,n))}}function vo(t,l){t&1&&O(0)}function wo(t,l){if(t&1&&p(0,vo,1,0,"ng-container",29),t&2){let e=l.options,n=s(4);r("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",V(2,Gt,e))}}function Io(t,l){t&1&&(w(0),p(1,wo,1,4,"ng-template",null,14,$),I())}function To(t,l){if(t&1){let e=k();d(0,"p-scroller",56,13),v("onLazyLoad",function(i){h(e);let o=s(2);return _(o.onLazyLoad.emit(i))}),p(2,Co,1,5,"ng-template",null,3,$)(4,Io,3,0,"ng-container",20),u()}if(t&2){let e=s(2);Q(V(9,we,e.scrollHeight)),r("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("tabindex",-1)("lazy",e.lazy)("options",e.virtualScrollOptions),c(4),r("ngIf",e.loaderTemplate||e._loaderTemplate)}}function ko(t,l){t&1&&O(0)}function So(t,l){if(t&1&&(w(0),p(1,ko,1,0,"ng-container",29),I()),t&2){s();let e=ee(9),n=s();c(),r("ngTemplateOutlet",e)("ngTemplateOutletContext",ge(3,Ut,n.visibleOptions(),_e(2,In)))}}function Oo(t,l){if(t&1&&(d(0,"span"),D(1),u()),t&2){let e=s(2).$implicit,n=s(3);c(),H(n.getOptionGroupLabel(e.optionGroup))}}function Vo(t,l){t&1&&O(0)}function Mo(t,l){if(t&1&&(w(0),d(1,"li",60),p(2,Oo,2,1,"span",20)(3,Vo,1,0,"ng-container",29),u(),I()),t&2){let e=s(),n=e.$implicit,i=e.index,o=s().options,a=s(2);c(),r("ngStyle",V(5,we,o.itemSize+"px")),b("id",a.id+"_"+a.getOptionIndex(i,o)),c(),r("ngIf",!a.groupTemplate),c(),r("ngTemplateOutlet",a.groupTemplate)("ngTemplateOutletContext",V(7,qt,n.optionGroup))}}function Eo(t,l){if(t&1){let e=k();w(0),d(1,"p-multiselect-item",61),v("onClick",function(i){h(e);let o=s().index,a=s().options,m=s(2);return _(m.onOptionSelect(i,!1,m.getOptionIndex(o,a)))})("onMouseEnter",function(i){h(e);let o=s().index,a=s().options,m=s(2);return _(m.onOptionMouseEnter(i,m.getOptionIndex(o,a)))}),u(),I()}if(t&2){let e=s(),n=e.$implicit,i=e.index,o=s().options,a=s(2);c(),r("id",a.id+"_"+a.getOptionIndex(i,o))("option",n)("selected",a.isSelected(n))("label",a.getOptionLabel(n))("disabled",a.isOptionDisabled(n))("template",a.itemTemplate||a._itemTemplate)("checkIconTemplate",a.checkIconTemplate||a._checkIconTemplate)("itemCheckboxIconTemplate",a.itemCheckboxIconTemplate||a._itemCheckboxIconTemplate)("itemSize",o.itemSize)("focused",a.focusedOptionIndex()===a.getOptionIndex(i,o))("ariaPosInset",a.getAriaPosInset(a.getOptionIndex(i,o)))("ariaSetSize",a.ariaSetSize)("variant",a.variant)("highlightOnSelect",a.highlightOnSelect)}}function Fo(t,l){if(t&1&&p(0,Mo,4,9,"ng-container",20)(1,Eo,2,14,"ng-container",20),t&2){let e=l.$implicit,n=s(3);r("ngIf",n.isOptionGroup(e)),c(),r("ngIf",!n.isOptionGroup(e))}}function $o(t,l){if(t&1&&D(0),t&2){let e=s(4);ce(" ",e.emptyFilterMessageLabel," ")}}function Lo(t,l){t&1&&O(0)}function Ao(t,l){if(t&1&&p(0,Lo,1,0,"ng-container",32),t&2){let e=s(4);r("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyFilterTemplate)}}function Do(t,l){if(t&1&&(d(0,"li",62),p(1,$o,1,1)(2,Ao,1,1,"ng-container"),u()),t&2){let e=s().options,n=s(2);r("ngStyle",V(2,we,e.itemSize+"px")),c(),j(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Po(t,l){if(t&1&&D(0),t&2){let e=s(4);ce(" ",e.emptyMessageLabel," ")}}function zo(t,l){t&1&&O(0)}function Ro(t,l){if(t&1&&p(0,zo,1,0,"ng-container",32),t&2){let e=s(4);r("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Qo(t,l){if(t&1&&(d(0,"li",62),p(1,Po,1,1)(2,Ro,1,1,"ng-container"),u()),t&2){let e=s().options,n=s(2);r("ngStyle",V(2,we,e.itemSize+"px")),c(),j(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function No(t,l){if(t&1&&(d(0,"ul",57,15),p(2,Fo,2,2,"ng-template",58)(3,Do,3,4,"li",59)(4,Qo,3,4,"li",59),u()),t&2){let e=l.$implicit,n=l.options,i=s(2);Q(n.contentStyle),r("ngClass",n.contentStyleClass),b("aria-label",i.listLabel),c(2),r("ngForOf",e),c(),r("ngIf",i.hasFilter()&&i.isEmpty()),c(),r("ngIf",!i.hasFilter()&&i.isEmpty())}}function Bo(t,l){t&1&&O(0)}function Ko(t,l){if(t&1&&(d(0,"div"),he(1,1),p(2,Bo,1,0,"ng-container",32),u()),t&2){let e=s(2);c(2),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function jo(t,l){if(t&1){let e=k();d(0,"div",43)(1,"span",44,6),v("focus",function(i){h(e);let o=s();return _(o.onFirstHiddenFocus(i))}),u(),p(3,oo,1,0,"ng-container",32)(4,yo,5,2,"div",45),d(5,"div",46),p(6,To,5,11,"p-scroller",47)(7,So,2,6,"ng-container",20)(8,No,5,7,"ng-template",null,7,$),u(),p(10,Ko,3,1,"div",20),d(11,"span",44,8),v("focus",function(i){h(e);let o=s();return _(o.onLastHiddenFocus(i))}),u()()}if(t&2){let e=s();M(e.panelStyleClass),r("ngClass","p-multiselect-overlay p-component")("ngStyle",e.panelStyle),b("id",e.id+"_list"),c(),b("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),c(2),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),c(),r("ngIf",e.showHeader),c(),Oe("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),c(),r("ngIf",e.virtualScroll),c(),r("ngIf",!e.virtualScroll),c(3),r("ngIf",e.footerFacet||e.footerTemplate||e._footerTemplate),c(),b("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Ho=({dt:t})=>`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("multiselect.background")};
    border: 1px solid ${t("multiselect.border.color")};
    transition: background ${t("multiselect.transition.duration")}, color ${t("multiselect.transition.duration")}, border-color ${t("multiselect.transition.duration")}, outline-color ${t("multiselect.transition.duration")}, box-shadow ${t("multiselect.transition.duration")};
    border-radius: ${t("multiselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("multiselect.shadow")};
}

.p-multiselect.ng-invalid.ng-dirty {
    border-color: ${t("multiselect.invalid.border.color")};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${t("multiselect.hover.border.color")};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${t("multiselect.focus.border.color")};
    box-shadow: ${t("multiselect.focus.ring.shadow")};
    outline: ${t("multiselect.focus.ring.width")} ${t("multiselect.focus.ring.style")} ${t("multiselect.focus.ring.color")};
    outline-offset: ${t("multiselect.focus.ring.offset")};
}

.p-multiselect.p-variant-filled {
    background: ${t("multiselect.filled.background")};
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${t("multiselect.filled.hover.background")};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${t("multiselect.filled.focus.background")};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${t("multiselect.disabled.background")};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("multiselect.dropdown.color")};
    width: ${t("multiselect.dropdown.width")};
    border-start-end-radius: ${t("multiselect.border.radius")};
    border-end-end-radius: ${t("multiselect.border.radius")};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items-center;
    gap: calc(${t("multiselect.padding.y")} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${t("multiselect.padding.y")} ${t("multiselect.padding.x")};
    color: ${t("multiselect.color")};
}

.p-multiselect-label.p-placeholder {
    color: ${t("multiselect.placeholder.color")};
}

p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
    color: ${t("multiselect.invalid.placeholder.color")};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${t("multiselect.disabled.color")};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    background: ${t("multiselect.overlay.background")};
    color: ${t("multiselect.overlay.color")};
    border: 1px solid ${t("multiselect.overlay.border.color")};
    border-radius: ${t("multiselect.overlay.border.radius")};
    box-shadow: ${t("multiselect.overlay.shadow")};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${t("multiselect.list.header.padding")};
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: ${t("multiselect.option.gap")};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("multiselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("multiselect.list.gap")}
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${t("multiselect.option.gap")};
    padding: ${t("multiselect.option.padding")};
    border: 0 none;
    color: ${t("multiselect.option.color")};
    background: transparent;
    transition: background ${t("multiselect.transition.duration")}, color ${t("multiselect.transition.duration")}, border-color ${t("multiselect.transition.duration")}, box-shadow ${t("multiselect.transition.duration")}, outline-color ${t("multiselect.transition.duration")};
    border-radius: ${t("multiselect.option.border.radius")}
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${t("multiselect.option.focus.background")};
    color: ${t("multiselect.option.focus.color")};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${t("multiselect.option.selected.background")};
    color: ${t("multiselect.option.selected.color")};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${t("multiselect.option.selected.focus.background")};
    color: ${t("multiselect.option.selected.focus.color")};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${t("multiselect.option.group.padding")};
    background: ${t("multiselect.option.group.background")};
    color: ${t("multiselect.option.group.color")};
    font-weight: ${t("multiselect.option.group.font.weight")};
}

.p-multiselect-empty-message {
    padding: ${t("multiselect.empty.message.padding")};
}

.p-multiselect-label .p-chip {
    padding-top: calc(${t("multiselect.padding.y")} / 2);
    padding-bottom: calc(${t("multiselect.padding.y")} / 2);
    border-radius: ${t("multiselect.chip.border.radius")};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${t("multiselect.padding.y")} / 2) calc(${t("multiselect.padding.x")} / 2);
}

.p-multiselect-fluid {
    display: flex;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: ${t("multiselect.sm.font.size")};
    padding-block: ${t("multiselect.sm.padding.y")};
    padding-inline: ${t("multiselect.sm.padding.x")};
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: ${t("multiselect.sm.font.size")};
    width: ${t("multiselect.sm.font.size")};
    height: ${t("multiselect.sm.font.size")};
}

.p-multiselect-lg .p-multiselect-label {
    font-size: ${t("multiselect.lg.font.size")};
    padding-block: ${t("multiselect.lg.padding.y")};
    padding-inline: ${t("multiselect.lg.padding.x")};
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: ${t("multiselect.lg.font.size")};
    width: ${t("multiselect.lg.font.size")};
    height: ${t("multiselect.lg.font.size")};
}

.p-multiselect-clear-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("multiselect.clear.icon.color")};
}`,qo={root:({props:t})=>({position:t.appendTo==="self"?"relative":void 0})},Go={root:({instance:t})=>({"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":t.display==="chip","p-disabled":t.disabled,"p-invalid":t.invalid,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-multiselect-open":t.overlayVisible,"p-multiselect-fluid":t.hasFluid,"p-multiselect-sm p-inputfield-sm":t.size==="small","p-multiselect-lg p-inputfield-lg":t.size==="large"}),labelContainer:"p-multiselect-label-container",label:({instance:t})=>({"p-multiselect-label":!0,"p-placeholder":t.label()===t.placeholder(),"p-multiselect-label-empty":!t.placeholder()&&!t.defaultLabel&&(!t.modelValue()||t.modelValue().length===0)}),chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:({instance:t,option:l,index:e,getItemOptions:n})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":t.isSelected(l)&&t.highlightOnSelect,"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,n),"p-disabled":t.isOptionDisabled(l)}),emptyMessage:"p-multiselect-empty-message"},Ht=(()=>{class t extends J{name="multiselect";theme=Ho;classes=Go;inlineStyles=qo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();var Uo={provide:pe,useExisting:se(()=>De),multi:!0},Zo=(()=>{class t extends U{id;option;selected;label;disabled;itemSize;focused;ariaPosInset;ariaSetSize;variant;template;checkIconTemplate;itemCheckboxIconTemplate;highlightOnSelect;onClick=new T;onMouseEnter=new T;onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option,selected:this.selected}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option,selected:this.selected})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=F({type:t,selectors:[["p-multiSelectItem"],["p-multiselect-item"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",y],label:"label",disabled:[2,"disabled","disabled",y],itemSize:[2,"itemSize","itemSize",q],focused:[2,"focused","focused",y],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",variant:"variant",template:"template",checkIconTemplate:"checkIconTemplate",itemCheckboxIconTemplate:"itemCheckboxIconTemplate",highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",y]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[R],decls:5,vars:28,consts:[["checkboxicon",""],["pRipple","","role","option",1,"p-multiselect-option",3,"click","mouseenter","ngStyle","ngClass","id"],[3,"ngModel","binary","tabindex","variant","ariaLabel"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(d(0,"li",1),v("click",function(a){return i.onOptionClick(a)})("mouseenter",function(a){return i.onOptionMouseEnter(a)}),d(1,"p-checkbox",2),p(2,Ki,3,0,"ng-container",3),u(),p(3,ji,2,1,"span",3)(4,Hi,1,0,"ng-container",4),u()),n&2&&(r("ngStyle",V(20,we,i.itemSize+"px"))("ngClass",Qe(22,zi,i.selected&&i.highlightOnSelect,i.disabled,i.focused))("id",i.id),b("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-disabled",i.disabled)("aria-checked",i.selected),c(),r("ngModel",i.selected)("binary",!0)("tabindex",-1)("variant",i.variant)("ariaLabel",i.label),c(),r("ngIf",i.itemCheckboxIconTemplate),c(),r("ngIf",!i.template),c(),r("ngTemplateOutlet",i.template)("ngTemplateOutletContext",V(26,qt,i.option)))},dependencies:[B,N,te,G,fe,Ae,ve,xe,Ce,Mt,K],encapsulation:2})}return t})(),De=(()=>{class t extends U{zone;filterService;overlayService;id;ariaLabel;style;styleClass;panelStyle;panelStyleClass;inputId;disabled;fluid;readonly;group;filter=!0;filterPlaceHolder;filterLocale;overlayVisible;tabindex=0;variant;appendTo;dataKey;name;ariaLabelledBy;set displaySelectedLabel(e){this._displaySelectedLabel=e}get displaySelectedLabel(){return this._displaySelectedLabel}set maxSelectedLabels(e){this._maxSelectedLabels=e}get maxSelectedLabels(){return this._maxSelectedLabels}selectionLimit;selectedItemsLabel;showToggleAll=!0;emptyFilterMessage="";emptyMessage="";resetFilterOnHide=!1;dropdownIcon;chipIcon;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";showHeader=!0;filterBy;scrollHeight="200px";lazy=!1;virtualScroll;loading=!1;virtualScrollItemSize;loadingIcon;virtualScrollOptions;overlayOptions;ariaFilterLabel;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;autofocusFilter=!1;display="comma";autocomplete="off";size;showClear=!1;autofocus;get autoZIndex(){return this._autoZIndex}set autoZIndex(e){this._autoZIndex=e,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}get baseZIndex(){return this._baseZIndex}set baseZIndex(e){this._baseZIndex=e,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}set defaultLabel(e){this._defaultLabel=e,console.log("defaultLabel property is deprecated since 16.6.0, use placeholder instead")}get defaultLabel(){return this._defaultLabel}set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}get options(){return this._options()}set options(e){dt(this._options(),e)||this._options.set(e)}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}focusOnHover=!0;filterFields;selectOnFocus=!1;autoOptionFocus=!1;highlightOnSelect=!0;onChange=new T;onFilter=new T;onFocus=new T;onBlur=new T;onClick=new T;onClear=new T;onPanelShow=new T;onPanelHide=new T;onLazyLoad=new T;onRemove=new T;onSelectAllChange=new T;overlayViewChild;filterInputChild;focusInputViewChild;itemsViewChild;scroller;lastHiddenFocusableElementOnOverlay;firstHiddenFocusableElementOnOverlay;headerCheckboxViewChild;footerFacet;headerFacet;_componentStyle=E(Ht);searchValue;searchTimeout;_selectAll=null;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_defaultLabel;_placeholder=A(void 0);_itemSize;_selectionLimit;_disableTooltip=!1;value;_filteredOptions;onModelChange=()=>{};onModelTouched=()=>{};valuesAsString;focus;filtered;itemTemplate;groupTemplate;loaderTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;selectedItemsTemplate;checkIconTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate;headerCheckboxIconTemplate;templates;_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_checkIconTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selectedItems":case"selecteditems":this._selectedItemsTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"checkicon":this._checkIconTemplate=e.template,console.warn("checkicon is deprecated and will removed in future. Use itemcheckboxicon or headercheckboxicon templates instead.");break;case"headercheckboxicon":this._headerCheckboxIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"removetokenicon":this._removeTokenIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"itemcheckboxicon":this._itemCheckboxIconTemplate=e.template;break;case"chipicon":this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;preventDocumentDefault;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=A(null);_filterValue=A(null);_options=A(null);startRangeIndex=A(-1);focusedOptionIndex=A(-1);selectedOptions;clickInProgress=!1;get hostClasses(){let e=[];return typeof this.rootClass=="string"?e.push(this.rootClass):Array.isArray(this.rootClass)?e.push(...this.rootClass):typeof this.rootClass=="object"&&Object.keys(this.rootClass).filter(n=>this.rootClass[n]).forEach(n=>e.push(n)),this.styleClass&&e.push(this.styleClass),e.join(" ")}get rootClass(){return this._componentStyle.classes.root({instance:this})}get labelClass(){return this._componentStyle.classes.label({instance:this})}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(le.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(le.EMPTY_FILTER_MESSAGE)}get filled(){return typeof this.modelValue()=="string"?!!this.modelValue():Y(this.modelValue())}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==""&&Y(this.modelValue())&&this.showClear&&!this.disabled&&!this.readonly&&this.filled}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?"selectAll":"unselectAll"]:void 0}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get listLabel(){return this.config.getTranslation(le.ARIA).listLabel}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return this.fluid||!!n}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}visibleOptions=P(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=mt(e)&&Tt.isObject(e[0]);if(this._filterValue()){let i;if(n?i=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode,this.filterLocale):i=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group){let o=this.options||[],a=[];return o.forEach(m=>{let Ie=this.getOptionGroupChildren(m).filter(Yt=>i.includes(Yt));Ie.length>0&&a.push(re(ae({},m),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...Ie]}))}),this.flatOptions(a)}return i}return e});label=P(()=>{let e,n=this.modelValue();if(n&&n.length&&this.displaySelectedLabel){if(Y(this.maxSelectedLabels)&&n.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();e="";for(let i=0;i<n.length;i++)i!==0&&(e+=", "),e+=this.getLabelByValue(n[i])}else e=this.placeholder()||this.defaultLabel||"";return e});chipSelectedItems=P(()=>Y(this.maxSelectedLabels)&&this.modelValue()&&this.modelValue().length>this.maxSelectedLabels?this.modelValue().slice(0,this.maxSelectedLabels):this.modelValue());constructor(e,n,i){super(),this.zone=e,this.filterService=n,this.overlayService=i,Ke(()=>{let o=this.modelValue(),a=this.getAllVisibleAndNonVisibleOptions();a&&Y(a)&&(this.optionValue&&this.optionLabel&&o?this.selectedOptions=a.filter(m=>o.includes(m[this.optionLabel])||o.includes(m[this.optionValue])):this.selectedOptions=o,this.cd.markForCheck())})}ngOnInit(){super.ngOnInit(),this.id=this.id||_t("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue()&&this.modelValue().length===this.selectionLimit}ngAfterViewInit(){super.ngAfterViewInit(),this.overlayVisible&&this.show()}ngAfterViewChecked(){this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let a=this.getOptionGroupChildren(i);return a&&a.forEach(m=>n.push(m)),n},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.modelValue.set(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,i=-1){let{originalEvent:o,option:a}=e;if(this.disabled||this.isOptionDisabled(a))return;let m=this.isSelected(a),x=null;m?x=this.modelValue().filter(Ie=>!oe(Ie,this.getOptionValue(a),this.equalityKey())):x=[...this.modelValue()||[],this.getOptionValue(a)],this.updateModel(x,o),i!==-1&&this.focusedOptionIndex.set(i),n&&ie(this.focusInputViewChild?.nativeElement),this.onChange.emit({originalEvent:e,value:x,itemValue:a})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,i=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(n)),n!==-1&&i!==-1){let o=Math.min(n,i),a=Math.max(n,i),m=this.visibleOptions().slice(o,a+1).filter(x=>this.isValidOption(x)).map(x=>this.getOptionValue(x));this.updateModel(m,e)}}searchFields(){return(this.filterBy||this.optionLabel||"label").split(",")}findNearestSelectedOptionIndex(e,n=!1){let i=-1;return this.hasSelectedOption()&&(n?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?ye(this.visibleOptions().slice(0,e),i=>this.isValidSelectedOption(i)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue?null:this.dataKey}hasSelectedOption(){return Y(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return(this.group||this.optionGroupLabel)&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.maxSelectionLimitReached()&&!this.isSelected(e)?!0:this.optionDisabled?ne(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(i=>oe(i,n,this.equalityKey()))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let i=(this.group?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&oe(this.getOptionValue(o),e,this.equalityKey()));return i?this.getOptionLabel(i):null}getSelectedItemsLabel(){let e=/{(.*?)}/,n=this.selectedItemsLabel?this.selectedItemsLabel:this.config.getTranslation(le.SELECTION_MESSAGE);return e.test(n)?n.replace(n.match(e)[0],this.modelValue().length+""):n}getOptionLabel(e){return this.optionLabel?ne(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ne(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){return this.optionGroupLabel?ne(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?ne(e,this.optionGroupChildren):e.items}onKeyDown(e){if(this.disabled){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey();break;default:if(e.code==="KeyA"&&n){let i=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(i,e),e.preventDefault();break}!n&&ht(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex()),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,a=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,a,this.startRangeIndex()),this.changeFocusedOptionIndex(e,a),!this.overlayVisible&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,a=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),a),this.changeFocusedOptionIndex(e,a),!this.overlayVisible&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.stopPropagation(),e.preventDefault()}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onTabKey(e,n=!1){n||(this.overlayVisible&&this.hasFocusableElements()?(ie(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault()):(this.focusedOptionIndex()!==-1&&this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]}),this.overlayVisible&&this.hide(this.filter)))}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){if(!(this.disabled||this.loading||this.readonly||e.target.isSameNode(this.focusInputViewChild?.nativeElement))){if(!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible?this.hide(!0):this.show(!0)}this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?ct(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;ie(n)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()})}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?pt(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;ie(n)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}onHeaderCheckboxKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"Space":this.onToggleAll(e);break;case"Enter":this.onToggleAll(e);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onHeaderCheckboxFocus(){this.headerCheckboxFocus=!0}onHeaderCheckboxBlur(){this.headerCheckboxFocus=!1}onToggleAll(e){if(!(this.disabled||this.readonly)){if(this.selectAll!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(x=>this.isSelected(x)&&(this.optionDisabled?ne(x,this.optionDisabled):x&&x.disabled!==void 0?x.disabled:!1)),i=this.allSelected()?this.visibleOptions().filter(x=>!this.isValidOption(x)&&this.isSelected(x)):this.visibleOptions().filter(x=>this.isSelected(x)||this.isValidOption(x)),a=[...this.filter&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(x=>this.isSelected(x)&&this.isValidOption(x)):[],...n,...i].map(x=>this.getOptionValue(x)),m=[...new Set(a)];this.updateModel(m,e),(!m.length||m.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!m.length})}this.partialSelected()&&(this.selectedOptions=null,this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),Vt.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Ee(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}writeValue(e){this.value=e,this.modelValue.set(this.value),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}allSelected(){return this.selectAll!==null?this.selectAll:Y(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<this.options.length}show(e){this.overlayVisible=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&ie(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter(),this.overlayOptions?.mode==="modal"&&rt(),e&&ie(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=Ee(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-multiselect-list-container"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=Ee(this.itemsWrapper,'[data-p-highlight="true"]');n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e))}resetFilter(){this.filterInputChild&&this.filterInputChild.nativeElement&&(this.filterInputChild.nativeElement.value=""),this._filterValue.set(null),this._filteredOptions=null}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=null,this.updateModel(null,e),this.selectedOptions=null,this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let i=this.modelValue().filter(o=>!oe(o,e,this.equalityKey()));this.updateModel(i,n),this.onChange.emit({originalEvent:n,value:i,itemValue:e}),this.onRemove.emit({newValue:i,removed:e}),n&&n.stopPropagation()}findNextItem(e){let n=e.nextElementSibling;return n?be(n.children[0],"p-disabled")||je(n.children[0])||be(n,"p-multiselect-item-group")?this.findNextItem(n):n.children[0]:null}findPrevItem(e){let n=e.previousElementSibling;return n?be(n.children[0],"p-disabled")||je(n.children[0])||be(n,"p-multiselect-item-group")?this.findPrevItem(n):n.children[0]:null}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?ye(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?ye(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return ye(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,o=!1;return this.focusedOptionIndex()!==-1?(i=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(a=>this.isOptionMatched(a)),i=i===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(a=>this.isOptionMatched(a)):i+this.focusedOptionIndex()):i=this.visibleOptions().findIndex(a=>this.isOptionMatched(a)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}activateFilter(){if(this.hasFilter()&&this._options)if(this.group){let e=[];for(let n of this.options){let i=this.filterService.filter(this.getOptionGroupChildren(n),this.searchFields(),this.filterValue,this.filterMatchMode,this.filterLocale);i&&i.length&&e.push(re(ae({},n),{[this.optionGroupChildren]:i}))}this._filteredOptions=e}else this._filteredOptions=this.filterService.filter(this.options,this.searchFields(),this.filterValue,this.filterMatchMode,this.filterLocale);else this._filteredOptions=null}hasFocusableElements(){return st(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}static \u0275fac=function(n){return new(n||t)(Se(Ze),Se(gt),Se(ft))};static \u0275cmp=F({type:t,selectors:[["p-multiSelect"],["p-multiselect"],["p-multi-select"]],contentQueries:function(n,i,o){if(n&1&&(C(o,yt,5),C(o,bt,5),C(o,qi,4),C(o,Gi,4),C(o,Ui,4),C(o,Zi,4),C(o,Wi,4),C(o,Yi,4),C(o,Xi,4),C(o,Ji,4),C(o,en,4),C(o,tn,4),C(o,nn,4),C(o,on,4),C(o,ln,4),C(o,an,4),C(o,rn,4),C(o,sn,4),C(o,cn,4),C(o,pn,4),C(o,X,4)),n&2){let a;g(a=f())&&(i.footerFacet=a.first),g(a=f())&&(i.headerFacet=a.first),g(a=f())&&(i.itemTemplate=a.first),g(a=f())&&(i.groupTemplate=a.first),g(a=f())&&(i.loaderTemplate=a.first),g(a=f())&&(i.headerTemplate=a.first),g(a=f())&&(i.filterTemplate=a.first),g(a=f())&&(i.footerTemplate=a.first),g(a=f())&&(i.emptyFilterTemplate=a.first),g(a=f())&&(i.emptyTemplate=a.first),g(a=f())&&(i.selectedItemsTemplate=a.first),g(a=f())&&(i.checkIconTemplate=a.first),g(a=f())&&(i.loadingIconTemplate=a.first),g(a=f())&&(i.filterIconTemplate=a.first),g(a=f())&&(i.removeTokenIconTemplate=a.first),g(a=f())&&(i.chipIconTemplate=a.first),g(a=f())&&(i.clearIconTemplate=a.first),g(a=f())&&(i.dropdownIconTemplate=a.first),g(a=f())&&(i.itemCheckboxIconTemplate=a.first),g(a=f())&&(i.headerCheckboxIconTemplate=a.first),g(a=f())&&(i.templates=a)}},viewQuery:function(n,i){if(n&1&&(z(dn,5),z(un,5),z(mn,5),z(hn,5),z(_n,5),z(gn,5),z(fn,5),z(bn,5)),n&2){let o;g(o=f())&&(i.overlayViewChild=o.first),g(o=f())&&(i.filterInputChild=o.first),g(o=f())&&(i.focusInputViewChild=o.first),g(o=f())&&(i.itemsViewChild=o.first),g(o=f())&&(i.scroller=o.first),g(o=f())&&(i.lastHiddenFocusableElementOnOverlay=o.first),g(o=f())&&(i.firstHiddenFocusableElementOnOverlay=o.first),g(o=f())&&(i.headerCheckboxViewChild=o.first)}},hostVars:7,hostBindings:function(n,i){n&1&&v("click",function(a){return i.onContainerClick(a)}),n&2&&(b("id",i.id),Q(i.style),M(i.hostClasses),Ye("p-variant-filled",i.variant==="filled"||i.config.inputVariant()==="filled"||i.config.inputStyle()==="filled"))},inputs:{id:"id",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",inputId:"inputId",disabled:[2,"disabled","disabled",y],fluid:[2,"fluid","fluid",y],readonly:[2,"readonly","readonly",y],group:[2,"group","group",y],filter:[2,"filter","filter",y],filterPlaceHolder:"filterPlaceHolder",filterLocale:"filterLocale",overlayVisible:[2,"overlayVisible","overlayVisible",y],tabindex:[2,"tabindex","tabindex",q],variant:"variant",appendTo:"appendTo",dataKey:"dataKey",name:"name",ariaLabelledBy:"ariaLabelledBy",displaySelectedLabel:"displaySelectedLabel",maxSelectedLabels:"maxSelectedLabels",selectionLimit:[2,"selectionLimit","selectionLimit",q],selectedItemsLabel:"selectedItemsLabel",showToggleAll:[2,"showToggleAll","showToggleAll",y],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",y],dropdownIcon:"dropdownIcon",chipIcon:"chipIcon",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",showHeader:[2,"showHeader","showHeader",y],filterBy:"filterBy",scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",y],virtualScroll:[2,"virtualScroll","virtualScroll",y],loading:[2,"loading","loading",y],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",q],loadingIcon:"loadingIcon",virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",autofocusFilter:[2,"autofocusFilter","autofocusFilter",y],display:"display",autocomplete:"autocomplete",size:"size",showClear:[2,"showClear","showClear",y],autofocus:[2,"autofocus","autofocus",y],autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",defaultLabel:"defaultLabel",placeholder:"placeholder",options:"options",filterValue:"filterValue",itemSize:"itemSize",selectAll:"selectAll",focusOnHover:[2,"focusOnHover","focusOnHover",y],filterFields:"filterFields",selectOnFocus:[2,"selectOnFocus","selectOnFocus",y],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",y],highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",y]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onClear:"onClear",onPanelShow:"onPanelShow",onPanelHide:"onPanelHide",onLazyLoad:"onLazyLoad",onRemove:"onRemove",onSelectAllChange:"onSelectAllChange"},features:[W([Uo,Ht]),R],ngContentSelectors:xn,decls:16,vars:35,consts:[["focusInput",""],["elseBlock",""],["overlay",""],["content",""],["token",""],["removeicon",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["headerCheckbox",""],["checkboxicon",""],["filterInput",""],["scroller",""],["loader",""],["items",""],[1,"p-hidden-accessible"],["role","combobox",3,"focus","blur","keydown","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[1,"p-multiselect-label-container",3,"mouseleave","pTooltip","tooltipDisabled","tooltipPosition","positionStyle","tooltipStyleClass"],[3,"ngClass"],[4,"ngIf"],[1,"p-multiselect-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],[1,"p-multiselect-chip-item"],["class","p-multiselect-chip-item",4,"ngFor","ngForOf"],["styleClass","p-multiselect-chip",3,"onRemove","label","removable","removeIcon"],["class","p-multiselect-chip-icon",3,"click",4,"ngIf"],[1,"p-multiselect-chip-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-multiselect-clear-icon",3,"click",4,"ngIf"],[1,"p-multiselect-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-multiselect-dropdown-icon",4,"ngIf"],["class","p-multiselect-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-multiselect-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-multiselect-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-multiselect-header",4,"ngIf"],[1,"p-multiselect-list-container"],[3,"items","style","itemSize","autoSize","tabindex","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-multiselect-header"],[3,"ngModel","ariaLabel","binary","variant","disabled","onChange",4,"ngIf"],["class","p-multiselect-filter-container",4,"ngIf"],[3,"onChange","ngModel","ariaLabel","binary","variant","disabled"],[1,"p-multiselect-filter-container"],["pInputText","","type","text","role","searchbox",1,"p-multiselect-filter",3,"input","keydown","click","blur","variant","value","disabled"],["class","p-multiselect-filter-icon",4,"ngIf"],[1,"p-multiselect-filter-icon"],[3,"onLazyLoad","items","itemSize","autoSize","tabindex","lazy","options"],["role","listbox","aria-multiselectable","true",1,"p-multiselect-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-multiselect-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-multiselect-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","selected","label","disabled","template","checkIconTemplate","itemCheckboxIconTemplate","itemSize","focused","ariaPosInset","ariaSetSize","variant","highlightOnSelect"],["role","option",1,"p-multiselect-empty-message",3,"ngStyle"]],template:function(n,i){if(n&1){let o=k();Ve(yn),d(0,"div",16)(1,"input",17,0),v("focus",function(m){return h(o),_(i.onInputFocus(m))})("blur",function(m){return h(o),_(i.onInputBlur(m))})("keydown",function(m){return h(o),_(i.onKeyDown(m))}),u()(),d(3,"div",18),v("mouseleave",function(){return h(o),_(i.labelContainerMouseLeave())}),d(4,"div",19),p(5,Dn,3,2,"ng-container",20)(6,Rn,3,6,"ng-container",20),u()(),p(7,jn,3,2,"ng-container",20),d(8,"div",21),p(9,Wn,3,2,"ng-container",22)(10,no,2,2,"ng-template",null,1,$),u(),d(12,"p-overlay",23,2),it("visibleChange",function(m){return h(o),tt(i.overlayVisible,m)||(i.overlayVisible=m),_(m)}),v("onAnimationStart",function(m){return h(o),_(i.onOverlayAnimationStart(m))})("onHide",function(){return h(o),_(i.hide())}),p(14,jo,13,18,"ng-template",null,3,$),u()}if(n&2){let o,a=ee(11);b("data-p-hidden-accessible",!0),c(),r("pTooltip",i.tooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass)("pAutoFocus",i.autofocus),b("aria-disabled",i.disabled)("id",i.inputId)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(o=i.overlayVisible)!==null&&o!==void 0?o:!1)("aria-controls",i.overlayVisible?i.id+"_list":null)("tabindex",i.disabled?-1:i.tabindex)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("value",i.label()||"empty"),c(2),r("pTooltip",i.tooltip)("tooltipDisabled",i._disableTooltip)("tooltipPosition",i.tooltipPosition)("positionStyle",i.tooltipPositionStyle)("tooltipStyleClass",i.tooltipStyleClass),c(),r("ngClass",i.labelClass),c(),r("ngIf",!i.selectedItemsTemplate&&!i._selectedItemsTemplate),c(),r("ngIf",i.selectedItemsTemplate||i._selectedItemsTemplate),c(),r("ngIf",i.isVisibleClearIcon),c(2),r("ngIf",i.loading)("ngIfElse",a),c(3),et("visible",i.overlayVisible),r("options",i.overlayOptions)("target","@parent")("appendTo",i.appendTo)("autoZIndex",i.autoZIndex)("baseZIndex",i.baseZIndex)("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions)}},dependencies:[B,N,Me,te,G,fe,Zo,Lt,K,Dt,At,$e,Fe,vt,wt,Ct,Ft,$t,Et,jt,Ae,ve,xe,Ce],encapsulation:2,changeDetection:0})}return t})(),Zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=me({type:t});static \u0275inj=ue({imports:[De,K,K]})}return t})();var Xo=(t,l)=>l.id;function Jo(t,l){if(t&1&&S(0,"app-icon-container",0),t&2){let e=s().$implicit,n=s();r("color",e.color.hex)("iconName",n.animalName())}}function el(t,l){if(t&1&&(p(0,Jo,1,2,"app-icon-container",0),S(1,"app-card",1)(2,"app-card",1)),t&2){let e=l.$implicit,n=s();j(n.isTotemShown()?0:-1),c(),r("creature",n.getFemaleByColorId(e.colorId)),c(),r("creature",n.getMaleByColorId(e.colorId))}}var Pe=class t{isTotemShown=ke(!1);animal=ke(null);animalName=ke("");male=P(()=>this.animal()?.male||[]);female=P(()=>this.animal()?.female||[]);totem=P(()=>this.animal()?.totem||[]);getFemaleByColorId(l){return this.female().find(e=>e.colorId===l)||null}getMaleByColorId(l){return this.male().find(e=>e.colorId===l)||null}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-animal"]],inputs:{isTotemShown:[1,"isTotemShown"],animal:[1,"animal"],animalName:[1,"animalName"]},decls:2,vars:0,consts:[[3,"color","iconName"],[3,"creature"]],template:function(e,n){e&1&&Xe(0,el,3,3,null,null,Xo),e&2&&Je(n.totem())},dependencies:[Rt,zt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:center;gap:1vw}"]})};var tl=t=>({active:t}),il=t=>({"hide-slider":t}),nl=t=>["!text-xs","pi",t];function ol(t,l){t&1&&O(0)}function ll(t,l){if(t&1&&(d(0,"div",9),p(1,ol,1,0,"ng-container",10),u(),d(2,"div",11),D(3),u()),t&2){let e=l.$implicit,n=s(2);c(),r("ngComponentOutlet",n.iconService.getIconComponent(e.name)),c(2),ce(" ",e.translatedName," ")}}function al(t,l){if(t&1&&S(0,"i",12),t&2){let e=s(2);r("ngClass",V(1,nl,e.isTotemShown?"pi-check":"pi-times"))}}function rl(t,l){if(t&1&&(d(0,"div",13),S(1,"app-animal",14),u()),t&2){let e=l.$implicit,n=s(2);c(),r("animal",e)("isTotemShown",n.isTotemShown)}}function sl(t,l){if(t&1){let e=k();d(0,"div",2)(1,"p-multiselect",3),Ne(2,"translate"),v("onChange",function(i){h(e);let o=s();return _(o.selectedAnimals.set(i.value))}),p(3,ll,4,2,"ng-template",null,0,$),u(),d(5,"div",4),v("click",function(){h(e);let i=s();return _(i.isTotemShown=!i.isTotemShown)})("keydown.enter",function(){h(e);let i=s();return _(i.isTotemShown=!i.isTotemShown)})("keydown.space",function(){h(e);let i=s();return _(i.isTotemShown=!i.isTotemShown)}),d(6,"div",5),D(7),Ne(8,"translate"),u(),d(9,"p-toggleswitch",6),p(10,al,1,3,"ng-template",null,1,$),u()()(),d(12,"div",7),p(13,rl,2,2,"div",8),u()}if(t&2){let e=s();c(),r("options",e.animals())("ngModel",e.selectedAnimals())("placeholder",Be(2,8,"Select Familiars")),c(5),r("ngClass",V(12,tl,e.isTotemShown)),c(),H(Be(8,10,"The Familiar")),c(2),r("ngModel",e.isTotemShown),c(3),r("ngClass",V(14,il,!e.isTotemShown)),c(),r("ngForOf",e.filteredAnimals())}}var Wt=class t{stateService=E(St);iconService=E(Pt);translate=E(ot);dataAccessService=E(kt);newLanguageSignal=He(this.translate.onLangChange.asObservable());animals=P(()=>{let l=this.newLanguageSignal();return console.log("New language:",l),this.stateService.animals().map(e=>{let n=e.name?e.name.charAt(0).toUpperCase()+e.name.slice(1):"";return re(ae({},e),{translatedName:this.translate.instant(n)})})});isTotemShown=!1;isDataLoading=P(()=>this.stateService.isDataLoading());selectedAnimals=A([]);filteredAnimals=P(()=>this.selectedAnimals().length?this.selectedAnimals():this.animals());ngOnInit(){if(this.stateService.isDataLoading.set(!0),!(this.stateService.animals().length===0)){this.stateService.isDataLoading.set(!1);return}this.dataAccessService.getAnimals().subscribe({next:e=>{this.stateService.addAnimalsDataToState(e)},error:()=>this.stateService.isDataLoading.set(!1),complete:()=>this.stateService.isDataLoading.set(!1)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=F({type:t,selectors:[["app-embodiments"]],decls:1,vars:1,consts:[["item",""],["handle",""],[1,"filters"],["optionLabel","translatedName","dataKey","id",1,"w-full","md:w-80",3,"onChange","options","ngModel","placeholder"],["tabindex","0","role","button",1,"totem-switcher",3,"click","keydown.enter","keydown.space"],[1,"label",3,"ngClass"],[3,"ngModel"],[1,"embodiments-container",3,"ngClass"],["class","genders",4,"ngFor","ngForOf"],[1,"icon-container"],[4,"ngComponentOutlet"],[1,"label"],[3,"ngClass"],[1,"genders"],[3,"animal","isTotemShown"]],template:function(e,n){e&1&&p(0,sl,14,16),e&2&&j(n.isDataLoading()?-1:0)},dependencies:[Me,qe,ve,xe,Ce,N,Pe,Zt,De,B,nt,at,lt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1vw;padding:64px 20px}[_nghost-%COMP%]     .p-toggleswitch-slider{border:1px solid rgba(161,161,170,.2)!important}.filters[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:14px;width:100%;height:auto;padding:20px}.filters[_ngcontent-%COMP%]   .p-multiselect[_ngcontent-%COMP%]{width:100%;max-width:300px}.filters[_ngcontent-%COMP%]   .p-multiselect[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:30px;height:30px}.filters[_ngcontent-%COMP%]   .p-multiselect[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]     svg{width:100%!important;height:100%!important;fill:#fff}.filters[_ngcontent-%COMP%]   .p-multiselect[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:24px}.filters[_ngcontent-%COMP%]   .totem-switcher[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;background:#09090b;cursor:pointer;border:1px solid #52525b;border-radius:6px;width:auto;padding:4.75px 12px;justify-content:flex-end;gap:10px;flex-shrink:0}.filters[_ngcontent-%COMP%]   .totem-switcher[_ngcontent-%COMP%]:hover{border-color:#71717a}.filters[_ngcontent-%COMP%]   .totem-switcher[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:22px;margin-bottom:0;text-align:center;white-space:nowrap;-webkit-user-select:none;user-select:none;color:#a1a1aa;font-weight:900}.filters[_ngcontent-%COMP%]   .totem-switcher[_ngcontent-%COMP%]   .label.active[_ngcontent-%COMP%]{color:#fff}.filters[_ngcontent-%COMP%]   .totem-switcher[_ngcontent-%COMP%]   p-toggleswitch[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.embodiments-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;gap:1vw;width:auto}.embodiments-container[_ngcontent-%COMP%]   .genders[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:center;gap:1vw}.hide-slider[_ngcontent-%COMP%]     .p-imagecompare-slider{display:none!important}@media screen and (max-width: 1680px){.embodiments-container[_ngcontent-%COMP%]{max-width:1000px}}@media screen and (max-width: 845px){.embodiments-container[_ngcontent-%COMP%]{max-width:500px}}@media screen and (max-width: 768px){.filters[_ngcontent-%COMP%]{flex-direction:column;gap:20px}.filters[_ngcontent-%COMP%]   .totem-switcher[_ngcontent-%COMP%]{justify-content:center}}@media screen and (max-width: 502px){.embodiments-container[_ngcontent-%COMP%]{padding:10px}.filters[_ngcontent-%COMP%]{padding:10px 0}}"]})};export{Wt as EmbodimentsComponent};
