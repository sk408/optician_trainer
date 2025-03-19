import{q as j,p as R,r as q,t as O,a5 as z,j as c,v as b,w as M,x as t,y as N,G as d,J as l,a7 as w,a8 as D,aG as P,aH as $}from"./index-ClheT7cd.js";function A(a){return j("MuiLinearProgress",a)}R("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const v=4,y=$`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,S=typeof y!="string"?P`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,C=$`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,T=typeof C!="string"?P`
        animation: ${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=$`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,U=typeof h!="string"?P`
        animation: ${h} 3s infinite linear;
      `:null,K=a=>{const{classes:r,variant:e,color:n}=a,m={root:["root",`color${t(n)}`,e],dashed:["dashed",`dashedColor${t(n)}`],bar1:["bar","bar1",`barColor${t(n)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",e!=="buffer"&&`barColor${t(n)}`,e==="buffer"&&`color${t(n)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return N(m,A,r)},x=(a,r)=>a.vars?a.vars.palette.LinearProgress[`${r}Bg`]:a.palette.mode==="light"?w(a.palette[r].main,.62):D(a.palette[r].main,.5),E=b("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.root,r[`color${t(e.color)}`],r[e.variant]]}})(d(({theme:a})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:x(a,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),G=b("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.dashed,r[`dashedColor${t(e.color)}`]]}})(d(({theme:a})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(a.palette).filter(l()).map(([r])=>{const e=x(a,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`}}})]})),U||{animation:`${h} 3s infinite linear`}),X=b("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.bar,r.bar1,r[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&r.bar1Indeterminate,e.variant==="determinate"&&r.bar1Determinate,e.variant==="buffer"&&r.bar1Buffer]}})(d(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r},style:{backgroundColor:(a.vars||a).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${v}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:S||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),F=b("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(a,r)=>{const{ownerState:e}=a;return[r.bar,r.bar2,r[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&r.bar2Indeterminate,e.variant==="buffer"&&r.bar2Buffer]}})(d(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(a.vars||a).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(a.palette).filter(l()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:x(a,r),transition:`transform .${v}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:T||{animation:`${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),J=q.forwardRef(function(r,e){const n=O({props:r,name:"MuiLinearProgress"}),{className:m,color:B="primary",value:g,valueBuffer:k,variant:i="indeterminate",...I}=n,s={...n,color:B,variant:i},p=K(s),L=z(),f={},u={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){f["aria-valuenow"]=Math.round(g),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let o=g-100;L&&(o=-o),u.bar1.transform=`translateX(${o}%)`}if(i==="buffer"&&k!==void 0){let o=(k||0)-100;L&&(o=-o),u.bar2.transform=`translateX(${o}%)`}return c.jsxs(E,{className:M(p.root,m),ownerState:s,role:"progressbar",...f,ref:e,...I,children:[i==="buffer"?c.jsx(G,{className:p.dashed,ownerState:s}):null,c.jsx(X,{className:p.bar1,ownerState:s,style:u.bar1}),i==="determinate"?null:c.jsx(F,{className:p.bar2,ownerState:s,style:u.bar2})]})});export{J as L};
