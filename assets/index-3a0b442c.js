import{j as r,u as e,k as s}from"./index-aaf2ae70.js";import{L as o}from"./App-db70bfcd.js";import{c as t,F as i}from"./FlexBetween-37d3138b.js";import{U as n}from"./UserImage-a476862e.js";import{u as a,T as c}from"./Typography-89d80a21.js";import{I as l}from"./IconButton-b7fcdf7a.js";import{u as m}from"./useDispatch-5cd579e2.js";import"./useMediaQuery-14101100.js";import"./ButtonBase-91a4f99f.js";const d=t(r.jsx("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}),"PersonAddOutlined"),u=t(r.jsx("path",{d:"M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z"}),"PersonRemoveOutlined"),h=({friendId:t,name:h,subtitle:p,userPicturePath:j,userId:v})=>{const x=m(),{_id:f}=e((r=>r.user)),z=e((r=>r.token)),y=e((r=>{var e;return null==(e=r.user)?void 0:e.friends})),{palette:g}=a(),k=g.primary.light,P=g.primary.dark,{main:H}=g.neutral,{medium:w}=g.neutral,B=(null==y?void 0:y.length)&&(null==y?void 0:y.find((r=>r._id===t))),I=()=>{return r=void 0,e=null,o=function*(){const r=yield fetch(`https://scffs.github.io/social-network/users/${f}/${t}`,{method:"PATCH",headers:{Authorization:`Bearer ${z}`,"Content-Type":"application/json"}}),e=yield r.json();x(s({friends:e}))},new Promise(((s,t)=>{var i=r=>{try{a(o.next(r))}catch(r){t(r)}},n=r=>{try{a(o.throw(r))}catch(r){t(r)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(i,n);a((o=o.apply(r,e)).next())}));var r,e,o};return r.jsxs(i,{children:[r.jsxs(i,{gap:"1rem",children:[r.jsx(n,{image:j,size:"55px"}),r.jsxs(o,{to:`/social-network/profile/${t}`,children:[r.jsx(c,{color:H,variant:"h5",fontWeight:"500",sx:{"&:hover":{color:P,cursor:"pointer"}},children:h}),r.jsx(c,{color:w,fontSize:"0.75rem",children:p})]})]}),v!==t&&r.jsx(l,{onClick:()=>I(),sx:{backgroundColor:P,p:"0.5rem"},children:B?r.jsx(u,{sx:{color:k}}):r.jsx(d,{sx:{color:k}})})]})};export{h as default};
