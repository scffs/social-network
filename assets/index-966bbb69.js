var t=(t,e,s)=>new Promise(((r,o)=>{var i=t=>{try{n(s.next(t))}catch(t){o(t)}},a=t=>{try{n(s.throw(t))}catch(t){o(t)}},n=t=>t.done?r(t.value):Promise.resolve(t.value).then(i,a);n((s=s.apply(t,e)).next())}));import{j as e,u as s,r,i as o,h as i}from"./index-848bba74.js";import{c as a,F as n}from"./FlexBetween-04b32751.js";import p from"./index-fc41ea0c.js";import{W as c}from"./WidgetWrapper-cf429bfa.js";import{u as d,T as l}from"./Typography-2ceec9d0.js";import{I as u}from"./IconButton-7099d562.js";import{u as m}from"./useDispatch-187bf557.js";import"./App-2f7bd7f3.js";import"./useMediaQuery-8dc5cb31.js";import"./UserImage-9ea97e9b.js";import"./ButtonBase-9b73f917.js";const h=a(e.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorderOutlined"),j=a(e.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"FavoriteOutlined"),f=({postId:i,postUserId:a,name:f,description:x,location:y,picturePath:P,userPicturePath:k,likes:I})=>{const w=m(),g=s((t=>t.token)),v=s((t=>{var e;return null==(e=t.user)?void 0:e._id})),[B,C]=r.useState(I),$=Boolean(B[v]),T=Object.keys(B).length,{_id:z}=s((t=>t.user)),{palette:A}=d(),{main:F}=A.neutral,b=A.primary.main;return e.jsxs(c,{m:"2rem 0",children:[e.jsx(p,{userId:z,friendId:a,name:f,subtitle:y,userPicturePath:k}),e.jsx(l,{color:F,sx:{mt:"1rem"},children:x}),P&&e.jsx("img",{width:"100%",height:"auto",alt:"post",style:{borderRadius:"0.75rem",marginTop:"0.75rem"},src:`https://social-network-production-ca2f.up.railway.app/assets/${P}`}),e.jsx(n,{mt:"0.25rem",children:e.jsx(n,{gap:"1rem",children:e.jsxs(n,{gap:"0.3rem",children:[e.jsx(u,{onClick:()=>t(void 0,null,(function*(){const t=yield fetch(`https://social-network-production-ca2f.up.railway.app/posts/${i}/like`,{method:"PATCH",headers:{Authorization:`Bearer ${g}`,"Content-Type":"application/json"},body:JSON.stringify({userId:v})}),e=yield t.json();w(o({postId:i,post:e})),C(e.likes)})),children:$?e.jsx(j,{sx:{color:b}}):e.jsx(h,{})}),e.jsx(l,{children:T})]})})})]})},x=({userPostsId:o,isProfile:a=!1})=>{const n=m(),p=s((t=>t.posts)),c=s((t=>t.token));return r.useEffect((()=>{t(void 0,null,a?function*(){const t=yield fetch(`https://social-network-production-ca2f.up.railway.app/posts/${o}/posts`,{method:"GET",headers:{Authorization:`Bearer ${c}`}}),e=yield t.json();n(i({posts:e}))}:function*(){const t=yield fetch("https://social-network-production-ca2f.up.railway.app/posts",{method:"GET",headers:{Authorization:`Bearer ${c}`}}),e=yield t.json();n(i({posts:e}))})}),[]),e.jsx(e.Fragment,{children:p.map((({_id:t,firstName:s,lastName:r,description:o,location:i,picturePath:a,userPicturePath:n,likes:p,userId:c})=>e.jsx(f,{postId:t,postUserId:c,name:`${s} ${r}`,description:o,location:i,picturePath:a,userPicturePath:n,likes:p},t)))})};export{x as default};