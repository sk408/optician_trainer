import{c as G,j as k,p as J,q as Z,r as d,t as Q,Z as X,z as m,w as f,v as j,x as t,y as Y,G as _,H as p,J as y}from"./index-ClheT7cd.js";const h=G(k.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function aa(a){return Z("MuiChip",a)}const o=J("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),ea=a=>{const{classes:l,disabled:e,size:r,color:i,iconColor:g,onDelete:v,clickable:c,variant:s}=a,C={root:["root",s,e&&"disabled",`size${t(r)}`,`color${t(i)}`,c&&"clickable",c&&`clickableColor${t(i)}`,v&&"deletable",v&&`deletableColor${t(i)}`,`${s}${t(i)}`],label:["label",`label${t(r)}`],avatar:["avatar",`avatar${t(r)}`,`avatarColor${t(i)}`],icon:["icon",`icon${t(r)}`,`iconColor${t(g)}`],deleteIcon:["deleteIcon",`deleteIcon${t(r)}`,`deleteIconColor${t(i)}`,`deleteIcon${t(s)}Color${t(i)}`]};return Y(C,aa,l)},oa=j("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,l)=>{const{ownerState:e}=a,{color:r,iconColor:i,clickable:g,onDelete:v,size:c,variant:s}=e;return[{[`& .${o.avatar}`]:l.avatar},{[`& .${o.avatar}`]:l[`avatar${t(c)}`]},{[`& .${o.avatar}`]:l[`avatarColor${t(r)}`]},{[`& .${o.icon}`]:l.icon},{[`& .${o.icon}`]:l[`icon${t(c)}`]},{[`& .${o.icon}`]:l[`iconColor${t(i)}`]},{[`& .${o.deleteIcon}`]:l.deleteIcon},{[`& .${o.deleteIcon}`]:l[`deleteIcon${t(c)}`]},{[`& .${o.deleteIcon}`]:l[`deleteIconColor${t(r)}`]},{[`& .${o.deleteIcon}`]:l[`deleteIcon${t(s)}Color${t(r)}`]},l.root,l[`size${t(c)}`],l[`color${t(r)}`],g&&l.clickable,g&&r!=="default"&&l[`clickableColor${t(r)})`],v&&l.deletable,v&&r!=="default"&&l[`deletableColor${t(r)}`],l[s],l[`${s}${t(r)}`]]}})(_(({theme:a})=>{const l=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return{maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${o.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${o.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:l,fontSize:a.typography.pxToRem(12)},[`& .${o.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${o.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${o.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${o.icon}`]:{marginLeft:5,marginRight:-6},[`& .${o.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:p(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:p(a.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${o.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${o.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(a.palette).filter(y(["contrastText"])).map(([e])=>({props:{color:e},style:{backgroundColor:(a.vars||a).palette[e].main,color:(a.vars||a).palette[e].contrastText,[`& .${o.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[e].contrastTextChannel} / 0.7)`:p(a.palette[e].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[e].contrastText}}}})),{props:e=>e.iconColor===e.color,style:{[`& .${o.icon}`]:{color:a.vars?a.vars.palette.Chip.defaultIconColor:l}}},{props:e=>e.iconColor===e.color&&e.color!=="default",style:{[`& .${o.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}}},...Object.entries(a.palette).filter(y(["dark"])).map(([e])=>({props:{color:e,onDelete:!0},style:{[`&.${o.focusVisible}`]:{background:(a.vars||a).palette[e].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}}},...Object.entries(a.palette).filter(y(["dark"])).map(([e])=>({props:{color:e,clickable:!0},style:{[`&:hover, &.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${o.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${o.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${o.avatar}`]:{marginLeft:4},[`& .${o.avatarSmall}`]:{marginLeft:2},[`& .${o.icon}`]:{marginLeft:4},[`& .${o.iconSmall}`]:{marginLeft:2},[`& .${o.deleteIcon}`]:{marginRight:5},[`& .${o.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(a.palette).filter(y()).map(([e])=>({props:{variant:"outlined",color:e},style:{color:(a.vars||a).palette[e].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[e].mainChannel} / 0.7)`:p(a.palette[e].main,.7)}`,[`&.${o.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[e].main,a.palette.action.hoverOpacity)},[`&.${o.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e].mainChannel} / ${a.vars.palette.action.focusOpacity})`:p(a.palette[e].main,a.palette.action.focusOpacity)},[`& .${o.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[e].mainChannel} / 0.7)`:p(a.palette[e].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[e].main}}}}))]}})),la=j("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,l)=>{const{ownerState:e}=a,{size:r}=e;return[l.label,l[`label${t(r)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function V(a){return a.key==="Backspace"||a.key==="Delete"}const ra=d.forwardRef(function(l,e){const r=Q({props:l,name:"MuiChip"}),{avatar:i,className:g,clickable:v,color:c="default",component:s,deleteIcon:C,disabled:x=!1,icon:$,label:E,onClick:O,onDelete:u,onKeyDown:z,onKeyUp:P,size:M="medium",variant:N="filled",tabIndex:F,skipFocusWhenDisabled:K=!1,...U}=r,W=d.useRef(null),B=X(W,e),w=n=>{n.stopPropagation(),u&&u(n)},H=n=>{n.currentTarget===n.target&&V(n)&&n.preventDefault(),z&&z(n)},A=n=>{n.currentTarget===n.target&&u&&V(n)&&u(n),P&&P(n)},I=v!==!1&&O?!0:v,S=I||u?m:s||"div",R={...r,component:S,disabled:x,size:M,color:c,iconColor:d.isValidElement($)&&$.props.color||c,onDelete:!!u,clickable:I,variant:N},b=ea(R),q=S===m?{component:s||"div",focusVisibleClassName:b.focusVisible,...u&&{disableRipple:!0}}:{};let D=null;u&&(D=C&&d.isValidElement(C)?d.cloneElement(C,{className:f(C.props.className,b.deleteIcon),onClick:w}):k.jsx(h,{className:f(b.deleteIcon),onClick:w}));let L=null;i&&d.isValidElement(i)&&(L=d.cloneElement(i,{className:f(b.avatar,i.props.className)}));let T=null;return $&&d.isValidElement($)&&(T=d.cloneElement($,{className:f(b.icon,$.props.className)})),k.jsxs(oa,{as:S,className:f(b.root,g),disabled:I&&x?!0:void 0,onClick:O,onKeyDown:H,onKeyUp:A,ref:B,tabIndex:K&&x?-1:F,ownerState:R,...q,...U,children:[L||T,k.jsx(la,{className:f(b.label),ownerState:R,children:E}),D]})});export{ra as C};
