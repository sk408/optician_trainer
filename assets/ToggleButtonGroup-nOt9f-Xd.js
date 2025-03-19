import{r as n,p as M,q as N,s as D,t as P,j as G,v as S,w as j,x as W,y as U,z as F,G as E,H as f,J as H}from"./index-DIEyTL6a.js";function q(t){return n.Children.toArray(t).filter(e=>n.isValidElement(e))}function J(t){return N("MuiToggleButton",t)}const v=M("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),V=n.createContext({}),A=n.createContext(void 0);function I(t,e){return e===void 0||t===void 0?!1:Array.isArray(e)?e.includes(t):t===e}const K=t=>{const{classes:e,fullWidth:r,selected:i,disabled:d,size:g,color:B}=t,u={root:["root",i&&"selected",d&&"disabled",r&&"fullWidth",`size${W(g)}`,B]};return U(u,J,e)},Q=S(F,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`size${W(r.size)}`]]}})(E(({theme:t})=>({...t.typography.button,borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active,[`&.${v.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:f(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${v.selected}`]:{color:(t.vars||t).palette.text.primary,backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette.text.primary,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:f(t.palette.text.primary,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette.text.primary,t.palette.action.selectedOpacity)}}}}},...Object.entries(t.palette).filter(H()).map(([e])=>({props:{color:e},style:{[`&.${v.selected}`]:{color:(t.vars||t).palette[e].main,backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette[e].main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:f(t.palette[e].main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette[e].main,t.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:t.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:t.typography.pxToRem(15)}}]}))),tt=n.forwardRef(function(e,r){const{value:i,...d}=n.useContext(V),g=n.useContext(A),B=D({...d,selected:I(e.value,i)},e),u=P({props:B,name:"MuiToggleButton"}),{children:O,className:C,color:p="standard",disabled:z=!1,disableFocusRipple:$=!1,fullWidth:s=!1,onChange:y,onClick:x,selected:c,size:m="medium",value:b,...h}=u,T={...u,color:p,disabled:z,disableFocusRipple:$,fullWidth:s,size:m},L=K(T),w=a=>{x&&(x(a,b),a.defaultPrevented)||y&&y(a,b)},l=g||"";return G.jsx(Q,{className:j(d.className,L.root,C,l),disabled:z,focusRipple:!$,ref:r,onClick:w,onChange:y,value:b,ownerState:T,"aria-pressed":c,...h,children:O})});function X(t){return N("MuiToggleButtonGroup",t)}const o=M("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Y=t=>{const{classes:e,orientation:r,fullWidth:i,disabled:d}=t,g={root:["root",r,i&&"fullWidth"],grouped:["grouped",`grouped${W(r)}`,d&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return U(g,X,e)},Z=S("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${o.grouped}`]:e.grouped},{[`& .${o.grouped}`]:e[`grouped${W(r.orientation)}`]},{[`& .${o.firstButton}`]:e.firstButton},{[`& .${o.lastButton}`]:e.lastButton},{[`& .${o.middleButton}`]:e.middleButton},e.root,r.orientation==="vertical"&&e.vertical,r.fullWidth&&e.fullWidth]}})(E(({theme:t})=>({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${o.grouped}`]:{[`&.${o.selected} + .${o.grouped}.${o.selected}`]:{borderTop:0,marginTop:0}},[`& .${o.firstButton},& .${o.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${o.lastButton},& .${o.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${o.lastButton}.${v.disabled},& .${o.middleButton}.${v.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${o.grouped}`]:{[`&.${o.selected} + .${o.grouped}.${o.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${o.firstButton},& .${o.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${o.lastButton},& .${o.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${o.lastButton}.${v.disabled},& .${o.middleButton}.${v.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),et=n.forwardRef(function(e,r){const i=P({props:e,name:"MuiToggleButtonGroup"}),{children:d,className:g,color:B="standard",disabled:u=!1,exclusive:O=!1,fullWidth:C=!1,onChange:p,orientation:z="horizontal",size:$="medium",value:s,...y}=i,x={...i,disabled:u,fullWidth:C,orientation:z,size:$},c=Y(x),m=n.useCallback((l,a)=>{if(!p)return;const R=s&&s.indexOf(a);let k;s&&R>=0?(k=s.slice(),k.splice(R,1)):k=s?s.concat(a):[a],p(l,k)},[p,s]),b=n.useCallback((l,a)=>{p&&p(l,s===a?null:a)},[p,s]),h=n.useMemo(()=>({className:c.grouped,onChange:O?b:m,value:s,size:$,fullWidth:C,color:B,disabled:u}),[c.grouped,O,b,m,s,$,C,B,u]),T=q(d),L=T.length,w=l=>{const a=l===0,R=l===L-1;return a&&R?"":a?c.firstButton:R?c.lastButton:c.middleButton};return G.jsx(Z,{role:"group",className:j(c.root,g),ref:r,ownerState:x,...y,children:G.jsx(V.Provider,{value:h,children:T.map((l,a)=>G.jsx(A.Provider,{value:w(a),children:l},a))})})});export{et as T,tt as a};
