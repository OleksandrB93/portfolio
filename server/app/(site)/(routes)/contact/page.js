(()=>{var e={};e.id=646,e.ids=[646],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},6113:e=>{"use strict";e.exports=require("crypto")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2398:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>m});var r=s(3137),a=s(4647),i=s(4183),o=s.n(i),l=s(1775),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);s.d(t,n);let d=r.AppPageRouteModule,m=["",{children:["(site)",{children:["(routes)",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,571)),"D:\\GitHub\\portfolio\\app\\(site)\\(routes)\\contact\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,5053))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,2828)),"D:\\GitHub\\portfolio\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,5053))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\GitHub\\portfolio\\app\\(site)\\(routes)\\contact\\page.tsx"],u="/(site)/(routes)/contact/page",f={require:s,loadChunk:()=>Promise.resolve()},p=new d({definition:{kind:a.x.APP_PAGE,page:"/(site)/(routes)/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:m}})},5764:(e,t,s)=>{Promise.resolve().then(s.bind(s,9225))},9225:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>F});var r=s(80),a=s(9098),i=s(3894),o=s(6558),l=s(9885),n=s(1085),d=s(3161),m=s(3618),c=s(1971);let u=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=l.forwardRef(({className:e,...t},s)=>r.jsx(m.f,{ref:s,className:(0,d.cn)("text-primary",u(),e),...t}));f.displayName=m.f.displayName;let p=o.RV,x=l.createContext({}),b=({...e})=>r.jsx(x.Provider,{value:{name:e.name},children:r.jsx(o.Qr,{...e})}),g=()=>{let e=l.useContext(x),t=l.useContext(h),{getFieldState:s,formState:r}=(0,o.Gc)(),a=s(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:`${i}-form-item`,formDescriptionId:`${i}-form-item-description`,formMessageId:`${i}-form-item-message`,...a}},h=l.createContext({}),j=l.forwardRef(({className:e,...t},s)=>{let a=l.useId();return r.jsx(h.Provider,{value:{id:a},children:r.jsx("div",{ref:s,className:(0,d.cn)("space-y-2",e),...t})})});j.displayName="FormItem";let v=l.forwardRef(({className:e,...t},s)=>{let{error:a,formItemId:i}=g();return r.jsx(f,{ref:s,className:(0,d.cn)("text-primary",a&&"text-red-500 font-bold transition-all duration-600",e),htmlFor:i,...t})});v.displayName="FormLabel";let y=l.forwardRef(({...e},t)=>{let{error:s,formItemId:a,formDescriptionId:i,formMessageId:o}=g();return r.jsx(n.g7,{ref:t,id:a,"aria-describedby":s?`${i} ${o}`:`${i}`,"aria-invalid":!!s,...e})});y.displayName="FormControl";let N=l.forwardRef(({className:e,...t},s)=>{let{formDescriptionId:a}=g();return r.jsx("p",{ref:s,id:a,className:(0,d.cn)("text-sm text-muted-foreground",e),...t})});N.displayName="FormDescription";let w=l.forwardRef(({className:e,children:t,...s},a)=>{let{error:i,formMessageId:o}=g(),l=i?String(i?.message):t;return l?r.jsx("p",{ref:a,id:o,className:(0,d.cn)("text-xs font-medium text-red-500 transition-all duration-700",e),...s,children:l}):null});w.displayName="FormMessage";var _=s(8384);let P=l.forwardRef(({className:e,type:t,...s},a)=>r.jsx("input",{type:t,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...s}));P.displayName="Input";let k=l.forwardRef(({className:e,...t},s)=>r.jsx("textarea",{className:(0,d.cn)("flex  max-h-[190px]  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...t}));k.displayName="Textarea";var q=s(5699),I=s(8516);let F=()=>{let[e,t]=(0,l.useState)(!1),{toast:s}=(0,I.pm)(),n=a.Ry({name:a.Z_().min(2,{message:"Must be at least 2 symbol."}),lastName:a.Z_(),email:a.Z_().email({message:"Invalid email address."}),message:a.Z_().min(2,{message:"Must be at least 2 symbol."})}),d=(0,o.cI)({resolver:(0,i.F)(n),defaultValues:{name:"",lastName:"",email:"",message:""}});function m(e){t(!0),q.ZP.send("service_76fq3w7","template_6jo6u26",{from_name:e.name,from_lastName:e.lastName,to_name:"Oleksandr",from_email:e.email,to_email:"barabashsan4ik@gmail.com",message:e.message},"xi2iKAkwv8UkrsXaB").then(()=>{t(!1),s({variant:"default",title:"Hello, I'm Oleksandr",description:"Thank you. I will get back to you as soon as possible.",className:"w-[400px] absolute top-2 left-8 p-2"}),d.reset({name:"",email:"",message:""})},e=>{t(!1),console.log(e),alert("Ahh, something went wrong. Please try again.")}).finally(()=>{t(!1)})}return r.jsx("div",{style:{position:"absolute",top:0,left:0,zIndex:30},className:"h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background p-8 pt-6",children:r.jsx(p,{...d,children:(0,r.jsxs)("form",{onSubmit:d.handleSubmit(m),className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex gap-x-4",children:[r.jsx(b,{control:d.control,name:"name",render:({field:e})=>(0,r.jsxs)(j,{children:[(0,r.jsxs)(v,{children:["Name",r.jsx("span",{className:"text-[#00bfff] font-semibold",children:"*"})]}),r.jsx(y,{children:r.jsx(P,{className:"text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",placeholder:"John",...e})}),d.formState.errors.name?"":r.jsx(N,{className:"text-xs text-[#00bfff]/70 italic",children:"Please enter your name."}),r.jsx(w,{})]})}),r.jsx(b,{control:d.control,name:"lastName",render:({field:e})=>(0,r.jsxs)(j,{children:[r.jsx(v,{children:"Last Name"}),r.jsx(y,{children:r.jsx(P,{className:" text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",placeholder:"Doe",...e})}),r.jsx(w,{})]})})]}),r.jsx(b,{control:d.control,name:"email",render:({field:e})=>(0,r.jsxs)(j,{children:[(0,r.jsxs)(v,{children:["Email",r.jsx("span",{className:"text-[#00bfff] font-semibold",children:"*"})]}),r.jsx(y,{children:r.jsx(P,{className:" text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",placeholder:"john@gmail.com",...e})}),d.formState.errors.email?"":r.jsx(N,{className:"text-xs text-[#00bfff]/70 italic",children:"Please enter your email."}),r.jsx(w,{})]})}),r.jsx(b,{control:d.control,name:"message",render:({field:e})=>(0,r.jsxs)(j,{children:[(0,r.jsxs)(v,{children:["Message",r.jsx("span",{className:"text-[#00bfff] font-semibold",children:"*"})]}),r.jsx(y,{children:r.jsx(k,{placeholder:"Type your message here.",className:"h-[110px] max-h-[135px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",...e})}),d.formState.errors.message?"":r.jsx(N,{className:"text-xs text-[#00bfff]/70 italic",children:"Please enter your message."}),r.jsx(N,{className:"text-xs"}),r.jsx(w,{})]})}),r.jsx(_.z,{variant:"submitEmail",type:"submit",onClick:()=>m,disabled:e,children:e?"Submitting...":"Submit"})]})})})}},571:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var r=s(7536);let a=(0,r.createProxy)(String.raw`D:\GitHub\portfolio\app\(site)\(routes)\contact\page.tsx`),{__esModule:i,$$typeof:o}=a,l=a.default,n=l},5053:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6885);let a=e=>{let t=(0,r.fillMetadataSegment)("/portfolio",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[69,885,825,966],()=>s(2398));module.exports=r})();