var e=Math.pow;import{_ as t,a as n,A as r,u as o}from"./App-08e7b344.js";import{r as i,f as s,j as a}from"./index-b7f1ec66.js";import{u,c as l}from"./useMediaQuery-22bb4954.js";import{g as c,s as p,a as d,c as f}from"./Typography-3954dc7d.js";function h(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function m(e){const t=i.useRef(e);return u((()=>{t.current=e})),i.useCallback(((...e)=>(0,t.current)(...e)),[])}function b(...e){return i.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{h(e,t)}))}),e)}let v,y=!0,g=!1;const R={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function x(e){e.metaKey||e.altKey||e.ctrlKey||(y=!0)}function E(){y=!1}function M(){"hidden"===this.visibilityState&&g&&(y=!0)}function T(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return y||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!R[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function k(){const e=i.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",x,!0),t.addEventListener("mousedown",E,!0),t.addEventListener("pointerdown",E,!0),t.addEventListener("touchstart",E,!0),t.addEventListener("visibilitychange",M,!0))}),[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!T(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(g=!0,window.clearTimeout(v),v=window.setTimeout((()=>{g=!1}),100),t.current=!1,!0)},ref:e}}function w(e,t){return(w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,w(e,t)}const V=s.createContext(null);function P(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&i.isValidElement(e)?t(e):e}(e)})),n}function j(e,t,n){return null!=n[t]?n[t]:e.props[t]}function S(e,t,n){var r=P(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var a={};for(var u in t){if(o[u])for(r=0;r<o[u].length;r++){var l=o[u][r];a[o[u][r]]=n(l)}a[u]=n(u)}for(r=0;r<i.length;r++)a[i[r]]=n(i[r]);return a}(t,r);return Object.keys(o).forEach((function(s){var a=o[s];if(i.isValidElement(a)){var u=s in t,l=s in r,c=t[s],p=i.isValidElement(c)&&!c.props.in;!l||u&&!p?l||!u||p?l&&u&&i.isValidElement(c)&&(o[s]=i.cloneElement(a,{onExited:n.bind(null,a),in:c.props.in,exit:j(a,"exit",e),enter:j(a,"enter",e)})):o[s]=i.cloneElement(a,{in:!1}):o[s]=i.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:j(a,"exit",e),enter:j(a,"enter",e)})}})),o}var L=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},D=function(e){function r(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}C(r,e);var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,P(n.children,(function(e){return i.cloneElement(e,{onExited:r.bind(null,e),in:!0,appear:j(e,"appear",n),enter:j(e,"enter",n),exit:j(e,"exit",n)})}))):S(e,o,s),firstRender:!1}},o.handleExited=function(e,n){var r=P(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var r=t({},n.children);return delete r[e.key],{children:r}})))},o.render=function(){var e=this.props,t=e.component,r=e.childFactory,o=n(e,["component","childFactory"]),i=this.state.contextValue,a=L(this.state.children).map(r);return delete o.appear,delete o.enter,delete o.exit,null===t?s.createElement(V.Provider,{value:i},a):s.createElement(V.Provider,{value:i},s.createElement(t,o,a))},r}(s.Component);D.propTypes={},D.defaultProps={component:"div",childFactory:function(e){return e}};const $=D;const B=c("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),O=["center","classes","className"];let N,F,I,z,A=e=>e;const K=r(N||(N=A`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),X=r(F||(F=A`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),U=r(I||(I=A`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Y=p("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_=p((function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:u,in:c,onExited:p,timeout:d}=e,[f,h]=i.useState(!1),m=l(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:u,height:u,top:-u/2+s,left:-u/2+o},v=l(n.child,f&&n.childLeaving,r&&n.childPulsate);return c||f||h(!0),i.useEffect((()=>{if(!c&&null!=p){const e=setTimeout(p,d);return()=>{clearTimeout(e)}}}),[p,c,d]),a.jsx("span",{className:m,style:b,children:a.jsx("span",{className:v})})}),{name:"MuiTouchRipple",slot:"Ripple"})(z||(z=A`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),B.rippleVisible,K,550,(({theme:e})=>e.transitions.easing.easeInOut),B.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),B.child,B.childLeaving,X,550,(({theme:e})=>e.transitions.easing.easeInOut),B.childPulsate,U,(({theme:e})=>e.transitions.easing.easeInOut)),H=i.forwardRef((function(r,s){const u=o({props:r,name:"MuiTouchRipple"}),{center:c=!1,classes:p={},className:d}=u,f=n(u,O),[h,m]=i.useState([]),b=i.useRef(0),v=i.useRef(null);i.useEffect((()=>{v.current&&(v.current(),v.current=null)}),[h]);const y=i.useRef(!1),g=i.useRef(null),R=i.useRef(null),x=i.useRef(null);i.useEffect((()=>()=>{clearTimeout(g.current)}),[]);const E=i.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:i}=e;m((e=>[...e,a.jsx(_,{classes:{ripple:l(p.ripple,B.ripple),rippleVisible:l(p.rippleVisible,B.rippleVisible),ripplePulsate:l(p.ripplePulsate,B.ripplePulsate),child:l(p.child,B.child),childLeaving:l(p.childLeaving,B.childLeaving),childPulsate:l(p.childPulsate,B.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},b.current)])),b.current+=1,v.current=i}),[p]),M=i.useCallback(((t={},n={},r=(()=>{}))=>{const{pulsate:o=!1,center:i=c||n.pulsate,fakeElement:s=!1}=n;if("mousedown"===(null==t?void 0:t.type)&&y.current)return void(y.current=!1);"touchstart"===(null==t?void 0:t.type)&&(y.current=!0);const a=s?null:x.current,u=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let l,p,d;if(i||void 0===t||0===t.clientX&&0===t.clientY||!t.clientX&&!t.touches)l=Math.round(u.width/2),p=Math.round(u.height/2);else{const{clientX:e,clientY:n}=t.touches&&t.touches.length>0?t.touches[0]:t;l=Math.round(e-u.left),p=Math.round(n-u.top)}if(i)d=Math.sqrt((2*e(u.width,2)+e(u.height,2))/3),d%2==0&&(d+=1);else{const t=2*Math.max(Math.abs((a?a.clientWidth:0)-l),l)+2,n=2*Math.max(Math.abs((a?a.clientHeight:0)-p),p)+2;d=Math.sqrt(e(t,2)+e(n,2))}null!=t&&t.touches?null===R.current&&(R.current=()=>{E({pulsate:o,rippleX:l,rippleY:p,rippleSize:d,cb:r})},g.current=setTimeout((()=>{R.current&&(R.current(),R.current=null)}),80)):E({pulsate:o,rippleX:l,rippleY:p,rippleSize:d,cb:r})}),[c,E]),T=i.useCallback((()=>{M({},{pulsate:!0})}),[M]),k=i.useCallback(((e,t)=>{if(clearTimeout(g.current),"touchend"===(null==e?void 0:e.type)&&R.current)return R.current(),R.current=null,void(g.current=setTimeout((()=>{k(e,t)})));R.current=null,m((e=>e.length>0?e.slice(1):e)),v.current=t}),[]);return i.useImperativeHandle(s,(()=>({pulsate:T,start:M,stop:k})),[T,M,k]),a.jsx(Y,t({className:l(B.root,p.root,d),ref:x},f,{children:a.jsx($,{component:null,exit:!0,children:h})}))}));function W(e){return d("MuiButtonBase",e)}const q=c("MuiButtonBase",["root","disabled","focusVisible"]),Q=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],G=p("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${q.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),J=i.forwardRef((function(e,r){const s=o({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:c=!1,children:p,className:d,component:h="button",disabled:v=!1,disableRipple:y=!1,disableTouchRipple:g=!1,focusRipple:R=!1,LinkComponent:x="a",onBlur:E,onClick:M,onContextMenu:T,onDragLeave:w,onFocus:C,onFocusVisible:V,onKeyDown:P,onKeyUp:j,onMouseDown:S,onMouseLeave:L,onMouseUp:D,onTouchEnd:$,onTouchMove:B,onTouchStart:O,tabIndex:N=0,TouchRippleProps:F,touchRippleRef:I,type:z}=s,A=n(s,Q),K=i.useRef(null),X=i.useRef(null),U=b(X,I),{isFocusVisibleRef:Y,onFocus:_,onBlur:q,ref:J}=k(),[Z,ee]=i.useState(!1);v&&Z&&ee(!1),i.useImperativeHandle(u,(()=>({focusVisible:()=>{ee(!0),K.current.focus()}})),[]);const[te,ne]=i.useState(!1);i.useEffect((()=>{ne(!0)}),[]);const re=te&&!y&&!v;function oe(e,t,n=g){return m((r=>{t&&t(r);return!n&&X.current&&X.current[e](r),!0}))}i.useEffect((()=>{Z&&R&&!y&&te&&X.current.pulsate()}),[y,R,Z,te]);const ie=oe("start",S),se=oe("stop",T),ae=oe("stop",w),ue=oe("stop",D),le=oe("stop",(e=>{Z&&e.preventDefault(),L&&L(e)})),ce=oe("start",O),pe=oe("stop",$),de=oe("stop",B),fe=oe("stop",(e=>{q(e),!1===Y.current&&ee(!1),E&&E(e)}),!1),he=m((e=>{K.current||(K.current=e.currentTarget),_(e),!0===Y.current&&(ee(!0),V&&V(e)),C&&C(e)})),me=()=>{const e=K.current;return h&&"button"!==h&&!("A"===e.tagName&&e.href)},be=i.useRef(!1),ve=m((e=>{R&&!be.current&&Z&&X.current&&" "===e.key&&(be.current=!0,X.current.stop(e,(()=>{X.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ye=m((e=>{R&&" "===e.key&&X.current&&Z&&!e.defaultPrevented&&(be.current=!1,X.current.stop(e,(()=>{X.current.pulsate(e)}))),j&&j(e),M&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let ge=h;"button"===ge&&(A.href||A.to)&&(ge=x);const Re={};"button"===ge?(Re.type=void 0===z?"button":z,Re.disabled=v):(A.href||A.to||(Re.role="button"),v&&(Re["aria-disabled"]=v));const xe=b(r,J,K),Ee=t({},s,{centerRipple:c,component:h,disabled:v,disableRipple:y,disableTouchRipple:g,focusRipple:R,tabIndex:N,focusVisible:Z}),Me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,i=f({root:["root",t&&"disabled",n&&"focusVisible"]},W,o);return n&&r&&(i.root+=` ${r}`),i})(Ee);return a.jsxs(G,t({as:ge,className:l(Me.root,d),ownerState:Ee,onBlur:fe,onClick:M,onContextMenu:se,onFocus:he,onKeyDown:ve,onKeyUp:ye,onMouseDown:ie,onMouseLeave:le,onMouseUp:ue,onDragLeave:ae,onTouchEnd:pe,onTouchMove:de,onTouchStart:ce,ref:xe,tabIndex:v?-1:N,type:z},Re,A,{children:[p,re?a.jsx(H,t({ref:U,center:c},F)):null]}))}));export{J as B,V as T,C as _,b as a,k as b,h as s,m as u};
