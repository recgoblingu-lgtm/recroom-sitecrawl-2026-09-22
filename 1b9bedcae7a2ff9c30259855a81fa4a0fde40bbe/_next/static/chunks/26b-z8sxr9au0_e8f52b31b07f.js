(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76700,e=>{"use strict";e.i(47167);var r=e.i(71645),t=e.i(7670),i=e.i(19130),a=e.i(84364),s=e.i(61722),o=e.i(50915),n=e.i(99844),l=e.i(90290),c=e.i(49728),d=e.i(40672),f=e.i(19727);function u(e){return(0,f.default)("MuiCircularProgress",e)}(0,d.default)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=e.i(43476);let m=a.keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=a.keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,v="string"!=typeof m?a.css`
        animation: ${m} 1.4s linear infinite;
      `:null,y="string"!=typeof h?a.css`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,g=(0,s.styled)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.default)(t.color)}`]]}})((0,o.default)(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:v||{animation:`${m} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,c.default)()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),x=(0,s.styled)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),k=(0,s.styled)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,l.default)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,o.default)(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:y||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),b=r.forwardRef(function(e,r){let a=(0,n.useDefaultProps)({props:e,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:c=!1,size:d=40,style:f,thickness:m=3.6,value:h=0,variant:v="indeterminate",...y}=a,b={...a,color:o,disableShrink:c,size:d,thickness:m,value:h,variant:v},C=(e=>{let{classes:r,variant:t,color:a,disableShrink:s}=e,o={root:["root",t,`color${(0,l.default)(a)}`],svg:["svg"],circle:["circle",`circle${(0,l.default)(t)}`,s&&"circleDisableShrink"]};return(0,i.default)(o,u,r)})(b),P={},S={},w={};if("determinate"===v){let e=2*Math.PI*((44-m)/2);P.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(h),P.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,S.transform="rotate(-90deg)"}return(0,p.jsx)(g,{className:(0,t.default)(C.root,s),style:{width:d,height:d,...S,...f},ownerState:b,ref:r,role:"progressbar",...w,...y,children:(0,p.jsx)(x,{className:C.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,p.jsx)(k,{className:C.circle,style:P,ownerState:b,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})})});e.s(["default",0,b],76700)},24529,e=>{"use strict";var r=e.i(43476),t=e.i(63665),i=e.i(76700);e.s(["default",0,function(){return(0,r.jsx)(t.default,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,height:"100%",minHeight:"300px",width:"100%"},children:(0,r.jsx)(i.default,{})})}])},91070,e=>{"use strict";var r=e.i(43476),t=e.i(71645),i=e.i(24529),a=e.i(36605);e.s(["default",0,()=>((0,t.useEffect)(()=>{window.location.replace((0,a.authorizeUrl)())},[]),(0,r.jsx)(i.default,{}))])}]);