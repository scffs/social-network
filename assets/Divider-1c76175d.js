import{_ as t,q as e,u as i,a as r}from"./App-ad216d79.js";import{r as a,j as o}from"./index-1543191d.js";import{c as n}from"./useMediaQuery-34117fbe.js";import{s as l,c as s}from"./Typography-060a127c.js";import{g as c}from"./dividerClasses-393be16f.js";const d=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=l("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((({theme:i,ownerState:r})=>t({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:e(i.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>t({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:i})=>t({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:i})=>t({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>t({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=l("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:i}=t;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((({theme:e,ownerState:i})=>t({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===i.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),g=a.forwardRef((function(e,a){const l=i({props:e,name:"MuiDivider"}),{absolute:g=!1,children:v,className:m,component:f=(v?"div":"hr"),flexItem:w=!1,light:x=!1,orientation:b="horizontal",role:u=("hr"!==f?"separator":void 0),textAlign:S="center",variant:A="fullWidth"}=l,R=r(l,d),j=t({},l,{absolute:g,component:f,flexItem:w,light:x,orientation:b,role:u,textAlign:S,variant:A}),C=(t=>{const{absolute:e,children:i,classes:r,flexItem:a,light:o,orientation:n,textAlign:l,variant:d}=t;return s({root:["root",e&&"absolute",d,o&&"light","vertical"===n&&"vertical",a&&"flexItem",i&&"withChildren",i&&"vertical"===n&&"withChildrenVertical","right"===l&&"vertical"!==n&&"textAlignRight","left"===l&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]},c,r)})(j);return o.jsx(h,t({as:f,className:n(C.root,m),role:u,ref:a,ownerState:j},R,{children:v?o.jsx(p,{className:C.wrapper,ownerState:j,children:v}):null}))}));export{g as D};
