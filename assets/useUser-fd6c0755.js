import{r as e}from"./index-1543191d.js";const t=(t,r)=>{const[o,n]=e.useState(null),s=()=>{return e=void 0,o=null,s=function*(){const e=yield fetch(`http://localhost:3001/users/${t}`,{method:"GET",headers:{Authorization:`Bearer ${r}`}}),o=yield e.json();o&&n(o)},new Promise(((t,r)=>{var n=e=>{try{l(s.next(e))}catch(e){r(e)}},a=e=>{try{l(s.throw(e))}catch(e){r(e)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,a);l((s=s.apply(e,o)).next())}));var e,o,s};return e.useEffect((()=>{s()}),[]),o};export{t as u};
