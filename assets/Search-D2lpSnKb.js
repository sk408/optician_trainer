import{p as S,q as C,r as h,t as I,ab as E,j as o,ac as P,v as A,w as j,T as L,x as c,y as z,G as w,c as R}from"./index-B4g7CIIA.js";function M(t){return C("MuiInputAdornment",t)}const x=S("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b;const T=(t,e)=>{const{ownerState:n}=t;return[e.root,e[`position${c(n.position)}`],n.disablePointerEvents===!0&&e.disablePointerEvents,e[n.variant]]},$=t=>{const{classes:e,disablePointerEvents:n,hiddenLabel:r,position:s,size:i,variant:l}=t,p={root:["root",n&&"disablePointerEvents",s&&`position${c(s)}`,l,r&&"hiddenLabel",i&&`size${c(i)}`]};return z(p,M,e)},F=A("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:T})(w(({theme:t})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),N=h.forwardRef(function(e,n){const r=I({props:e,name:"MuiInputAdornment"}),{children:s,className:i,component:l="div",disablePointerEvents:p=!1,disableTypography:f=!1,position:m,variant:u,...g}=r,a=E()||{};let d=u;u&&a.variant,a&&!d&&(d=a.variant);const v={...r,hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:p,position:m,variant:d},y=$(v);return o.jsx(P.Provider,{value:null,children:o.jsx(F,{as:l,ownerState:v,className:j(y.root,i),ref:n,...g,children:typeof s=="string"&&!f?o.jsx(L,{color:"textSecondary",children:s}):o.jsxs(h.Fragment,{children:[m==="start"?b||(b=o.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,s]})})})}),q=R(o.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");export{N as I,q as S};
