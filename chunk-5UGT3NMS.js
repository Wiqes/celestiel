import{b as A}from"./chunk-N5HULGKA.js";import{Da as P,F as $,G as N,Ga as H,I as D,Ja as I,K as at,L as dt,M as ct,P as f,R as j,T as ht,V as Z,Z as q,aa as pt,ba as b,ea as U,ia as ut,ja as gt,ma as _,oa as X,t as rt,w as W,wa as Y}from"./chunk-ZLFWUQLM.js";import{$a as K,T as S,U as L,Wa as J,Wb as ot,Xb as nt,Z as v,Za as R,a as F,bc as x,ea as V,fb as Q,gb as T,hb as z,ia as w,jb as O,pa as M,sa as y,sb as tt,ub as et,uc as E,vb as it,vc as C,xc as st,yc as lt}from"./chunk-FGD53Q7F.js";var wt=({dt:o})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${o("badge.border.radius")};
    justify-content: center;
    padding: ${o("badge.padding")};
    background: ${o("badge.primary.background")};
    color: ${o("badge.primary.color")};
    font-size: ${o("badge.font.size")};
    font-weight: ${o("badge.font.weight")};
    min-width: ${o("badge.min.width")};
    height: ${o("badge.height")};
    line-height: ${o("badge.height")};
}

.p-badge-dot {
    width: ${o("badge.dot.size")};
    min-width: ${o("badge.dot.size")};
    height: ${o("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${o("badge.secondary.background")};
    color: ${o("badge.secondary.color")};
}

.p-badge-success {
    background: ${o("badge.success.background")};
    color: ${o("badge.success.color")};
}

.p-badge-info {
    background: ${o("badge.info.background")};
    color: ${o("badge.info.color")};
}

.p-badge-warn {
    background: ${o("badge.warn.background")};
    color: ${o("badge.warn.color")};
}

.p-badge-danger {
    background: ${o("badge.danger.background")};
    color: ${o("badge.danger.color")};
}

.p-badge-contrast {
    background: ${o("badge.contrast.background")};
    color: ${o("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${o("badge.sm.font.size")};
    min-width: ${o("badge.sm.min.width")};
    height: ${o("badge.sm.height")};
    line-height: ${o("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${o("badge.lg.font.size")};
    min-width: ${o("badge.lg.min.width")};
    height: ${o("badge.lg.height")};
    line-height: ${o("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${o("badge.xl.font.size")};
    min-width: ${o("badge.xl.min.width")};
    height: ${o("badge.xl.height")};
    line-height: ${o("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Et={root:({props:o,instance:p})=>["p-badge p-component",{"p-badge-circle":X(o.value)&&String(o.value).length===1,"p-badge-dot":_(o.value)&&!p.$slots.default,"p-badge-sm":o.size==="small","p-badge-lg":o.size==="large","p-badge-xl":o.size==="xlarge","p-badge-info":o.severity==="info","p-badge-success":o.severity==="success","p-badge-warn":o.severity==="warn","p-badge-danger":o.severity==="danger","p-badge-secondary":o.severity==="secondary","p-badge-contrast":o.severity==="contrast"}]},ft=(()=>{class o extends H{name="badge";theme=wt;classes=Et;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(o)))(i||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var St=(()=>{class o extends I{styleClass=y();style=y();badgeSize=y();size=y();severity=y();value=y();badgeDisabled=y(!1,{transform:E});_componentStyle=v(ft);containerClass=st(()=>{let t="p-badge p-component";return X(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),_(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(o)))(i||o)}})();static \u0275cmp=Q({type:o,selectors:[["p-badge"]],hostVars:6,hostBindings:function(e,i){e&2&&(et(i.style()),it(i.containerClass()),tt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[x([ft]),O],decls:1,vars:1,template:function(e,i){e&1&&ot(0),e&2&&nt(i.value())},dependencies:[rt,P],encapsulation:2,changeDetection:0})}return o})(),Rt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=T({type:o});static \u0275inj=L({imports:[St,P,P]})}return o})();var Lt=({dt:o})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${o("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Tt={root:"p-ink"},mt=(()=>{class o extends H{name="ripple";theme=Lt;classes=Tt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(o)))(i||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var Jt=(()=>{class o extends I{zone=v(M);_componentStyle=v(mt);animationListener;mouseDownListener;timeout;constructor(){super(),lt(()=>{W(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(D(e,"p-ink-active"),!q(e)&&!U(e)){let l=Math.max(f(this.el.nativeElement),b(this.el.nativeElement));e.style.height=l+"px",e.style.width=l+"px"}let i=pt(this.el.nativeElement),n=t.pageX-i.left+this.document.body.scrollTop-U(e)/2,s=t.pageY-i.top+this.document.body.scrollLeft-q(e)/2;this.renderer.setStyle(e,"top",s+"px"),this.renderer.setStyle(e,"left",n+"px"),N(e,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&D(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&D(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),D(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ut(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(e){return new(e||o)};static \u0275dir=z({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[x([mt]),O]})}return o})(),Kt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=T({type:o});static \u0275inj=L({})}return o})();var Ot=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let i=e.trim().split(" ");for(let n=0;n<i.length;n++)t.classList.add(i[n])}else{let i=e.split(" ");for(let n=0;n<i.length;n++)t.className+=" "+i[n]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n=>this.removeClass(t,n)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,i=0;for(var n=0;n<e.length;n++){if(e[n]==t)return i;e[n].nodeType==1&&i++}return-1}static indexWithinGroup(t,e){let i=t.parentNode?t.parentNode.childNodes:[],n=0;for(var s=0;s<i.length;s++){if(i[s]==t)return n;i[s].attributes&&i[s].attributes[e]&&i[s].nodeType==1&&n++}return-1}static appendOverlay(t,e,i="self"){i!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,i="self",n=!0){t&&e&&(n&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),i==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,i=!0){let n=k=>{if(k)return getComputedStyle(k).getPropertyValue("position")==="relative"?k:n(k.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=e.offsetHeight,r=e.getBoundingClientRect(),h=this.getWindowScrollTop(),a=this.getWindowScrollLeft(),d=this.getViewport(),c=n(t)?.getBoundingClientRect()||{top:-1*h,left:-1*a},g,m;r.top+l+s.height>d.height?(g=r.top-c.top-s.height,t.style.transformOrigin="bottom",r.top+g<0&&(g=-1*r.top)):(g=l+r.top-c.top,t.style.transformOrigin="top");let G=r.left+s.width-d.width,vt=r.left-c.left;s.width>d.width?m=(r.left-c.left)*-1:G>0?m=vt-G:m=r.left-c.left,t.style.top=g+"px",t.style.left=m+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,e,i=!0){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=n.height,l=n.width,r=e.offsetHeight,h=e.offsetWidth,a=e.getBoundingClientRect(),d=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),c=this.getViewport(),g,m;a.top+r+s>c.height?(g=a.top+d-s,t.style.transformOrigin="bottom",g<0&&(g=d)):(g=r+a.top+d,t.style.transformOrigin="top"),a.left+l>c.width?m=Math.max(0,a.left+u+h-l):m=a.left+u,t.style.top=g+"px",t.style.left=m+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let i=this.getParents(t),n=/(auto|scroll)/,s=l=>{let r=window.getComputedStyle(l,null);return n.test(r.getPropertyValue("overflow"))||n.test(r.getPropertyValue("overflowX"))||n.test(r.getPropertyValue("overflowY"))};for(let l of i){let r=l.nodeType===1&&l.dataset.scrollselectors;if(r){let h=r.split(",");for(let a of h){let d=this.findSingle(l,a);d&&s(d)&&e.push(d)}}l.nodeType!==9&&s(l)&&e.push(l)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,r=t.getBoundingClientRect(),a=e.getBoundingClientRect().top+document.body.scrollTop-(r.top+document.body.scrollTop)-n-l,d=t.scrollTop,u=t.clientHeight,c=this.getOuterHeight(e);a<0?t.scrollTop=d+a:a+c>u&&(t.scrollTop=d+a-u+c)}static fadeIn(t,e){t.style.opacity=0;let i=+new Date,n=0,s=function(){n=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/e,t.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,e){var i=1,n=50,s=e,l=n/s;let r=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(r)),t.style.opacity=i},n)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var i=Element.prototype,n=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return n.call(t,e)}static getOuterWidth(t,e){let i=t.offsetWidth;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static width(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),e}static getOuterHeight(t,e){let i=t.offsetHeight;if(e){let n=getComputedStyle(t);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}static getHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}static getViewport(){let t=window,e=document,i=e.documentElement,n=e.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||n.clientWidth,l=t.innerHeight||i.clientHeight||n.clientHeight;return{width:s,height:l}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var i=t.indexOf("Trident/");if(i>0){var n=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,i){t[e].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let i=this.find(t,this.getFocusableSelectorString(e)),n=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&n.push(s)}return n}static getFocusableElement(t,e=""){let i=this.findSingle(t,this.getFocusableSelectorString(e));if(i){let n=getComputedStyle(i);if(this.isVisible(i)&&n.display!="none"&&n.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,e=""){let i=this.getFocusableElements(t,e);return i.length>0?i[0]:null}static getLastFocusableElement(t,e){let i=this.getFocusableElements(t,e);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,e=!1){let i=o.getFocusableElements(t),n=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);e?s==-1||s===0?n=i.length-1:n=s-1:s!=-1&&s!==i.length-1&&(n=s+1)}return i[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let i=t.getAttribute(e);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...i){if(t){let n=document.createElement(t);return this.setAttributes(n,e),n.append(...i),n}}static setAttribute(t,e="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(e,i)}static setAttributes(t,e={}){if(this.isElement(t)){let i=(n,s)=>{let l=t?.$attrs?.[n]?[t?.$attrs?.[n]]:[];return[s].flat().reduce((r,h)=>{if(h!=null){let a=typeof h;if(a==="string"||a==="number")r.push(h);else if(a==="object"){let d=Array.isArray(h)?i(n,h):Object.entries(h).map(([u,c])=>n==="style"&&(c||c===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${c}`:c?u:void 0);r=d.length?r.concat(d.filter(u=>!!u)):r}}return r},l)};Object.entries(e).forEach(([n,s])=>{if(s!=null){let l=n.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),s):n==="pBind"?this.setAttributes(t,s):(s=n==="class"?[...new Set(i("class",s))].join(" ").trim():n==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=s),t.setAttribute(n,s))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})(),B=class{element;listener;scrollableParents;constructor(p,t=()=>{}){this.element=p,this.listener=t}bindScrollListener(){this.scrollableParents=Ot.getScrollableParents(this.element);for(let p=0;p<this.scrollableParents.length;p++)this.scrollableParents[p].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let p=0;p<this.scrollableParents.length;p++)this.scrollableParents[p].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var xt=({dt:o})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${o("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${o("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${o("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${o("tooltip.background")};
    color: ${o("tooltip.color")};
    padding: ${o("tooltip.padding")};
    box-shadow: ${o("tooltip.shadow")};
    border-radius: ${o("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${o("tooltip.gutter")});
    border-width: ${o("tooltip.gutter")} ${o("tooltip.gutter")} ${o("tooltip.gutter")} 0;
    border-right-color: ${o("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${o("tooltip.gutter")});
    border-width: ${o("tooltip.gutter")} 0 ${o("tooltip.gutter")} ${o("tooltip.gutter")};
    border-left-color: ${o("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${o("tooltip.gutter")});
    border-width: ${o("tooltip.gutter")} ${o("tooltip.gutter")} 0 ${o("tooltip.gutter")};
    border-top-color: ${o("tooltip.background")};
    border-bottom-color: ${o("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${o("tooltip.gutter")});
    border-width: 0 ${o("tooltip.gutter")} ${o("tooltip.gutter")} ${o("tooltip.gutter")};
    border-top-color: ${o("tooltip.background")};
    border-bottom-color: ${o("tooltip.background")};
}
`,Ct={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},yt=(()=>{class o extends H{name="tooltip";theme=xt;classes=Ct;static \u0275fac=(()=>{let t;return function(i){return(t||(t=w(o)))(i||o)}})();static \u0275prov=S({token:o,factory:o.\u0275fac})}return o})();var pe=(()=>{class o extends I{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Y("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=v(yt);interactionInProgress=!1;constructor(t,e){super(),this.zone=t,this.viewContainer=e}ngAfterViewInit(){super.ngAfterViewInit(),W(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.addEventListener("focus",this.focusListener),e.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=F(F({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!($(t.relatedTarget,"p-tooltip")||$(t.relatedTarget,"p-tooltip-text")||$(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?j(this.container,this.el.nativeElement):j(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",e=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),ht(this.container,250),this.getOption("tooltipZIndex")==="auto"?A.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&A.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof J){let e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),e={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[i,n]of e[t].entries())if(i===0)n.call(this);else if(this.isOutOfBounds())n.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),e=t.left+dt(),i=t.top+ct();return{left:e,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Z(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,e=f(t),i=(b(t)-b(this.container))/2;this.alignTooltip(e,i)}alignLeft(){this.preAlign("left");let t=f(this.container),e=(b(this.el.nativeElement)-b(this.container))/2;this.alignTooltip(-t,e)}alignTop(){this.preAlign("top");let t=(f(this.el.nativeElement)-f(this.container))/2,e=b(this.container);this.alignTooltip(t,-e)}alignBottom(){this.preAlign("bottom");let t=(f(this.el.nativeElement)-f(this.container))/2,e=b(this.el.nativeElement);this.alignTooltip(t,e)}alignTooltip(t,e){let i=this.getHostOffset(),n=i.left+t,s=i.top+e;this.container.style.left=n+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=F(F({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return $(t,"p-inputwrapper")?Z(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let e="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?e+" "+this.getOption("tooltipStyleClass"):e}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,i=t.left,n=f(this.container),s=b(this.container),l=at();return i+n>l.width||i<0||e<0||e+s>l.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new B(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let e=this.el.nativeElement.querySelector(".p-component");e||(e=this.getTarget(this.el.nativeElement)),e.removeEventListener("focus",this.focusListener),e.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):gt(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&A.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(e){return new(e||o)(R(M),R(K))};static \u0275dir=z({type:o,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",E],showDelay:[2,"showDelay","showDelay",C],hideDelay:[2,"hideDelay","hideDelay",C],life:[2,"life","life",C],positionTop:[2,"positionTop","positionTop",C],positionLeft:[2,"positionLeft","positionLeft",C],autoHide:[2,"autoHide","autoHide",E],fitContent:[2,"fitContent","fitContent",E],hideOnEscape:[2,"hideOnEscape","hideOnEscape",E],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[x([yt]),O,V]})}return o})(),ue=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=T({type:o});static \u0275inj=L({})}return o})();export{Ot as a,B as b,St as c,Rt as d,Jt as e,Kt as f,pe as g,ue as h};
