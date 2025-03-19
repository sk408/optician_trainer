import{r as o,j as e,B as s,C as V,P as c,T as t,b as C,d as h,f as p,D as S,m as z,a as P,L as _}from"./index-ClheT7cd.js";import{E as q}from"./EyeModel3D-CWmYE4ik.js";import{T as N,a as B}from"./Tabs-C_dLxD0k.js";import{G as l}from"./Grid-DmHVn1br.js";import{C as y,a as j}from"./CardContent-KlKHUcCB.js";import{S as b}from"./Slider-Cb6VDYQ7.js";import{F as Y}from"./FormControl-BVQOdwMF.js";import{I as J,S as O}from"./Select-CAht7Ejn.js";import{A as Q}from"./Alert-MdLWdyUb.js";const T=[{name:"Soft Spherical",description:"Most common type of soft contact lens. Corrects myopia or hyperopia.",fittingConsiderations:["Base curve (BC) between 8.0 and 9.2 mm","Diameter typically 13.8 to 14.5 mm","Power range from +8.00 to -12.00 D","Best for regular corneas and moderate prescriptions"],materials:["Hydrogel (traditional)","Silicone Hydrogel (higher oxygen permeability)"]},{name:"Toric",description:"Designed to correct astigmatism. Features different powers in different meridians.",fittingConsiderations:["Requires stable lens orientation","Base curve similar to spherical lenses","Slightly larger diameter for stability","More complex fitting process due to rotational factors","Cylinder power and axis must be specified"],materials:["Silicone Hydrogel (most common)","Conventional Hydrogel"]},{name:"Multifocal",description:"Corrects presbyopia by providing multiple focal points for near and distance vision.",fittingConsiderations:["Center-near or center-distance designs","Base curve and diameter similar to spherical lenses","May require additional measurements for add power","Multiple trial fittings often necessary","Patient adaptation period is longer"],materials:["Silicone Hydrogel","Hydrogel"]},{name:"Rigid Gas Permeable (RGP)",description:"Hard lenses that maintain their shape while allowing oxygen to reach the cornea.",fittingConsiderations:["Smaller diameter (8.5 to 10.5 mm)","Base curve based on corneal topography","Multiple parameters to specify (BC, power, diameter, optic zone)","Longer adaptation period","Excellent optical quality for irregular corneas"],materials:["Fluorosilicone Acrylate","Boston Materials (various types)","High Dk materials for oxygen permeability"]},{name:"Scleral",description:"Large-diameter RGP lenses that vault over the cornea and rest on the sclera.",fittingConsiderations:["Very large diameter (15.0 to 24.0 mm)","Vaults over the cornea without touching it","Filled with saline solution before insertion","Complex fitting process requiring specialized training","Excellent for keratoconus and severe dry eye"],materials:["High-Dk Fluorosilicone Acrylate","Specialized Boston Materials"]}],i={keratometry:{min:38,max:48,step:.25,defaultValues:{kFlat:43,kSteep:44,kAxis:90}},baseCurve:{default:8.6},diameter:{default:14.2},power:{min:-12,max:8,step:.25,default:-3}},se=()=>{const[f,D]=o.useState(0),[d,A]=o.useState("Soft Spherical"),[m,M]=o.useState(i.keratometry.defaultValues.kFlat),[x,R]=o.useState(i.keratometry.defaultValues.kSteep),[v,W]=o.useState(i.keratometry.defaultValues.kAxis),[w,E]=o.useState(i.baseCurve.default),[k,H]=o.useState(i.diameter.default),[g,F]=o.useState(i.power.default),[G,L]=o.useState(!1),I=(r,a)=>{D(a),L(!1)},K=()=>{let r=w,a=k,u=g;if(d==="Soft Spherical"){const n=(m+x)/2;n<42?r=8.7:n<44?r=8.6:n<46?r=8.4:r=8.3,u=Math.round((g-.25)/.25)*.25}else if(d==="Toric"){const n=(m+x)/2;r=Math.round((n-.8)*10)/10,a=14.5}else(d==="RGP"||d==="Rigid Gas Permeable (RGP)")&&(r=Math.round((m-.1)*10)/10,a=9.6);E(r),H(a),F(u),L(!0)};return e.jsx(s,{sx:{minHeight:"100vh",py:4},children:e.jsxs(V,{maxWidth:!1,children:[e.jsxs(c,{sx:{p:4,borderRadius:2,mb:4},children:[e.jsx(t,{variant:"h4",component:"h1",gutterBottom:!0,children:"Contact Lens Fitting"}),e.jsx(t,{paragraph:!0,children:"Learn about different types of contact lenses and practice the fitting process with our interactive tools."}),e.jsx(s,{sx:{borderBottom:1,borderColor:"divider",mb:3},children:e.jsxs(N,{value:f,onChange:I,"aria-label":"contact lens fitting tabs",children:[e.jsx(B,{label:"Lens Types"}),e.jsx(B,{label:"Fitting Guide"}),e.jsx(B,{label:"Fitting Calculator"})]})}),f===0&&e.jsx(s,{children:e.jsx(l,{container:!0,spacing:3,children:T.map((r,a)=>e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(y,{sx:{height:"100%"},children:e.jsxs(j,{children:[e.jsx(t,{variant:"h6",gutterBottom:!0,color:"primary",children:r.name}),e.jsx(t,{variant:"body2",paragraph:!0,children:r.description}),e.jsx(t,{variant:"subtitle2",gutterBottom:!0,children:"Fitting Considerations:"}),e.jsx(C,{dense:!0,children:r.fittingConsiderations.map((u,n)=>e.jsx(h,{sx:{py:.5},children:e.jsx(p,{primary:u})},n))}),e.jsx(t,{variant:"subtitle2",gutterBottom:!0,sx:{mt:1},children:"Common Materials:"}),e.jsx(C,{dense:!0,children:r.materials.map((u,n)=>e.jsx(h,{sx:{py:.5},children:e.jsx(p,{primary:u})},n))})]})})},a))})}),f===1&&e.jsx(s,{children:e.jsxs(l,{container:!0,spacing:4,children:[e.jsxs(l,{item:!0,xs:12,md:6,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Contact Lens Fitting Process"}),e.jsxs(c,{variant:"outlined",sx:{p:2,mb:3},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Step 1: Pre-Fitting Assessment"}),e.jsx(t,{variant:"body2",paragraph:!0,children:"Perform a comprehensive eye examination to determine if the patient is a good candidate for contact lenses. Check for contraindications such as severe dry eye, corneal diseases, or active infections."})]}),e.jsxs(c,{variant:"outlined",sx:{p:2,mb:3},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Step 2: Measurements"}),e.jsx(t,{variant:"body2",paragraph:!0,children:"Take keratometry readings to measure corneal curvature. Determine refractive error through standard refraction procedures. Measure horizontal visible iris diameter (HVID) for lens diameter selection."})]}),e.jsxs(c,{variant:"outlined",sx:{p:2,mb:3},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Step 3: Lens Selection"}),e.jsx(t,{variant:"body2",paragraph:!0,children:"Based on measurements and patient needs, select the appropriate lens type, material, base curve, diameter, and power. Consider wear schedule, lifestyle factors, and any special requirements."})]}),e.jsxs(c,{variant:"outlined",sx:{p:2,mb:3},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Step 4: Trial Fitting"}),e.jsx(t,{variant:"body2",paragraph:!0,children:"Apply diagnostic lenses and evaluate fit after allowing time for settling. Check centration, movement, and coverage. Perform over-refraction to fine-tune power. Assess comfort and vision."})]}),e.jsxs(c,{variant:"outlined",sx:{p:2},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Step 5: Finalization and Education"}),e.jsx(t,{variant:"body2",paragraph:!0,children:"Finalize lens parameters based on the successful trial fit. Teach proper insertion, removal, and care techniques. Schedule follow-up visits to assess fit and eye health."})]})]}),e.jsxs(l,{item:!0,xs:12,md:6,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Evaluating Lens Fit"}),e.jsx(s,{sx:{height:300,mb:3},children:e.jsx(q,{showLabels:!0,interactive:!0,height:"100%",width:"100%",rotationSpeed:.002,highlightParts:["cornea"]})}),e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Ideal Soft Lens Fit Characteristics:"}),e.jsxs(C,{children:[e.jsx(h,{children:e.jsx(p,{primary:"Centration",secondary:"Lens should cover the entire cornea and center well on the eye"})}),e.jsx(S,{component:"li"}),e.jsx(h,{children:e.jsx(p,{primary:"Movement",secondary:"0.5-1.0mm of movement with blink and upward gaze"})}),e.jsx(S,{component:"li"}),e.jsx(h,{children:e.jsx(p,{primary:"Coverage",secondary:"Lens should extend 1-2mm beyond the limbus in all directions"})}),e.jsx(S,{component:"li"}),e.jsx(h,{children:e.jsx(p,{primary:"Comfort",secondary:"Patient should report good comfort after initial adaptation"})})]})]})]})}),f===2&&e.jsx(s,{children:e.jsxs(l,{container:!0,spacing:4,children:[e.jsxs(l,{item:!0,xs:12,md:6,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Contact Lens Parameter Calculator"}),e.jsx(t,{variant:"body2",sx:{mb:3},children:"Enter the patient's data to calculate recommended contact lens parameters. This is a simplified calculator for educational purposes."}),e.jsx(y,{sx:{mb:3},children:e.jsxs(j,{children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Keratometry & Prescription"}),e.jsxs(s,{sx:{mb:2},children:[e.jsxs(t,{id:"k-flat-slider",gutterBottom:!0,children:["K-Flat (mm): ",m.toFixed(2)]}),e.jsx(b,{value:m,onChange:(r,a)=>M(a),"aria-labelledby":"k-flat-slider",min:i.keratometry.min,max:i.keratometry.max,step:i.keratometry.step,valueLabelDisplay:"auto"})]}),e.jsxs(s,{sx:{mb:2},children:[e.jsxs(t,{id:"k-steep-slider",gutterBottom:!0,children:["K-Steep (mm): ",x.toFixed(2)]}),e.jsx(b,{value:x,onChange:(r,a)=>R(a),"aria-labelledby":"k-steep-slider",min:i.keratometry.min,max:i.keratometry.max,step:i.keratometry.step,valueLabelDisplay:"auto"})]}),e.jsxs(s,{sx:{mb:2},children:[e.jsxs(t,{id:"k-axis-slider",gutterBottom:!0,children:["K-Axis (°): ",v]}),e.jsx(b,{value:v,onChange:(r,a)=>W(a),"aria-labelledby":"k-axis-slider",min:0,max:180,step:5,valueLabelDisplay:"auto"})]}),e.jsxs(s,{sx:{mb:2},children:[e.jsxs(t,{id:"power-slider",gutterBottom:!0,children:["Spectacle Prescription (D): ",g.toFixed(2)]}),e.jsx(b,{value:g,onChange:(r,a)=>F(a),"aria-labelledby":"power-slider",min:i.power.min,max:i.power.max,step:i.power.step,valueLabelDisplay:"auto",marks:[{value:-12,label:"-12.00"},{value:0,label:"0.00"},{value:8,label:"+8.00"}]})]})]})}),e.jsx(y,{children:e.jsxs(j,{children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:"Lens Selection"}),e.jsxs(Y,{fullWidth:!0,sx:{mb:3},children:[e.jsx(J,{id:"lens-type-label",children:"Lens Type"}),e.jsx(O,{labelId:"lens-type-label",value:d,label:"Lens Type",onChange:r=>A(r.target.value),children:T.map((r,a)=>e.jsx(z,{value:r.name,children:r.name},a))})]}),e.jsx(P,{variant:"contained",color:"primary",fullWidth:!0,onClick:K,children:"Calculate Recommended Parameters"})]})})]}),e.jsxs(l,{item:!0,xs:12,md:6,children:[e.jsx(t,{variant:"h6",gutterBottom:!0,children:"Recommended Lens Parameters"}),G?e.jsx(y,{children:e.jsxs(j,{children:[e.jsxs(t,{variant:"subtitle1",gutterBottom:!0,fontWeight:"medium",children:["Recommended Parameters for ",d]}),e.jsxs(s,{sx:{mb:3},children:[e.jsxs(t,{variant:"body2",fontWeight:"medium",gutterBottom:!0,children:["Base Curve (BC): ",w.toFixed(1)," mm"]}),e.jsxs(t,{variant:"body2",fontWeight:"medium",gutterBottom:!0,children:["Diameter: ",k.toFixed(1)," mm"]}),e.jsxs(t,{variant:"body2",fontWeight:"medium",gutterBottom:!0,children:["Power: ",g.toFixed(2)," D"]}),d==="Toric"&&e.jsxs(e.Fragment,{children:[e.jsxs(t,{variant:"body2",fontWeight:"medium",gutterBottom:!0,children:["Cylinder: ",(x-m).toFixed(2)," D"]}),e.jsxs(t,{variant:"body2",fontWeight:"medium",children:["Axis: ",v,"°"]})]})]}),e.jsx(Q,{severity:"info",children:"These are starting parameters based on the entered values. Always verify with diagnostic lenses and assess the fit before finalizing."})]})}):e.jsxs(c,{sx:{p:3,textAlign:"center",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:[e.jsx(t,{variant:"body1",color:"textSecondary",paragraph:!0,children:'Enter patient data and press "Calculate Recommended Parameters" to see fitting recommendations.'}),e.jsx(t,{variant:"body2",color:"textSecondary",children:"The calculator will suggest base curve, diameter, and power values based on the entered measurements."})]})]})]})})]}),e.jsx(s,{sx:{mt:4,textAlign:"center"},children:e.jsx(P,{component:_,to:"/",variant:"outlined",color:"primary",children:"Back to Home"})})]})})};export{se as default};
