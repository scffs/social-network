import{j as r,u as e,k as s}from"./index-848bba74.js";import{L as o}from"./App-2f7bd7f3.js";import{c as t,F as i}from"./FlexBetween-04b32751.js";import{U as n}from"./UserImage-9ea97e9b.js";import{u as a,T as c}from"./Typography-2ceec9d0.js";import{I as l}from"./IconButton-7099d562.js";import{u as m}from"./useDispatch-187bf557.js";import"./useMediaQuery-8dc5cb31.js";import"./ButtonBase-9b73f917.js";const d=t(r.jsx("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}),"PersonAddOutlined"),u=t(r.jsx("path",{d:"M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z"}),"PersonRemoveOutlined"),p=({friendId:t,name:p,subtitle:h,userPicturePath:j,userId:v})=>{const x=m(),{_id:f}=e((r=>r.user)),z=e((r=>r.token)),y=e((r=>{var e;return null==(e=r.user)?void 0:e.friends})),{palette:g}=a(),k=g.primary.light,P=g.primary.dark,{main:w}=g.neutral,{medium:H}=g.neutral,B=(null==y?void 0:y.length)&&(null==y?void 0:y.find((r=>r._id===t))),I=()=>{return r=void 0,e=null,o=function*(){const r=yield fetch(`https://social-network-production-ca2f.up.railway.app/users/${f}/${t}`,{method:"PATCH",headers:{Authorization:`Bearer ${z}`,"Content-Type":"application/json"}}),e=yield r.json();x(s({friends:e}))},new Promise(((s,t)=>{var i=r=>{try{a(o.next(r))}catch(r){t(r)}},n=r=>{try{a(o.throw(r))}catch(r){t(r)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(i,n);a((o=o.apply(r,e)).next())}));var r,e,o};return r.jsxs(i,{children:[r.jsxs(i,{gap:"1rem",children:[r.jsx(n,{image:j,size:"55px"}),r.jsxs(o,{to:`/social-network/profile/${t}`,children:[r.jsx(c,{color:w,variant:"h5",fontWeight:"500",sx:{"&:hover":{color:P,cursor:"pointer"}},children:p}),r.jsx(c,{color:H,fontSize:"0.75rem",children:h})]})]}),v!==t&&r.jsx(l,{onClick:()=>I(),sx:{backgroundColor:P,p:"0.5rem"},children:B?r.jsx(u,{sx:{color:k}}):r.jsx(d,{sx:{color:k}})})]})};export{p as default};