(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{5344:function(e,t,r){Promise.resolve().then(r.bind(r,5676))},5676:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var s=r(7437),a=r(4578),n=r(8110),o=r(1865),i=r(2265),l=r(7256),d=r(9311),c=r(6743),m=r(6061);let u=(0,m.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)(c.f,{ref:t,className:(0,d.cn)("text-primary",u(),r),...a})});f.displayName=c.f.displayName;let x=o.RV,p=i.createContext({}),b=e=>{let{...t}=e;return(0,s.jsx)(p.Provider,{value:{name:t.name},children:(0,s.jsx)(o.Qr,{...t})})},g=()=>{let e=i.useContext(p),t=i.useContext(h),{getFieldState:r,formState:s}=(0,o.Gc)(),a=r(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...a}},h=i.createContext({}),v=i.forwardRef((e,t)=>{let{className:r,...a}=e,n=i.useId();return(0,s.jsx)(h.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:t,className:(0,d.cn)("space-y-2",r),...a})})});v.displayName="FormItem";let y=i.forwardRef((e,t)=>{let{className:r,...a}=e,{error:n,formItemId:o}=g();return(0,s.jsx)(f,{ref:t,className:(0,d.cn)("text-primary",n&&"text-red-500 font-bold transition-all duration-600",r),htmlFor:o,...a})});y.displayName="FormLabel";let j=i.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:n,formDescriptionId:o,formMessageId:i}=g();return(0,s.jsx)(l.g7,{ref:t,id:n,"aria-describedby":a?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!a,...r})});j.displayName="FormControl";let N=i.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:n}=g();return(0,s.jsx)("p",{ref:t,id:n,className:(0,d.cn)("text-sm text-muted-foreground",r),...a})});N.displayName="FormDescription";let w=i.forwardRef((e,t)=>{let{className:r,children:a,...n}=e,{error:o,formMessageId:i}=g(),l=o?String(null==o?void 0:o.message):a;return l?(0,s.jsx)("p",{ref:t,id:i,className:(0,d.cn)("text-xs font-medium text-red-500 transition-all duration-700",r),...n,children:l}):null});w.displayName="FormMessage";var S=r(3023);let _=i.forwardRef((e,t)=>{let{className:r,type:a,...n}=e;return(0,s.jsx)("input",{type:a,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});_.displayName="Input";let T=i.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("textarea",{className:(0,d.cn)("flex  max-h-[190px]  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});T.displayName="Textarea";var k=r(7054),I=r(6055),A=()=>{let[e,t]=(0,i.useState)(!1),{toast:r}=(0,I.pm)(),l=a.Ry({name:a.Z_().min(2,{message:"Must be at least 2 symbol."}),lastName:a.Z_(),email:a.Z_().email({message:"Invalid email address."}),message:a.Z_().min(2,{message:"Must be at least 2 symbol."})}),d=(0,o.cI)({resolver:(0,n.F)(l),defaultValues:{name:"",lastName:"",email:"",message:""}});function c(e){t(!0),k.ZP.send("service_76fq3w7","template_6jo6u26",{from_name:e.name,from_lastName:e.lastName,to_name:"Oleksandr",from_email:e.email,to_email:"barabashsan4ik@gmail.com",message:e.message},"xi2iKAkwv8UkrsXaB").then(()=>{t(!1),r({variant:"default",title:"Hello, I'm Oleksandr",description:"Thank you. I will get back to you as soon as possible.",className:"w-[400px] absolute top-2 left-8 p-2"}),d.reset({name:"",email:"",message:""})},e=>{t(!1),console.log(e),alert("Ahh, something went wrong. Please try again.")}).finally(()=>{t(!1)})}return(0,s.jsx)("div",{style:{position:"absolute",top:0,left:0,zIndex:30},className:"h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background p-8 pt-6",children:(0,s.jsx)(x,{...d,children:(0,s.jsxs)("form",{onSubmit:d.handleSubmit(c),className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex gap-x-4",children:[(0,s.jsx)(b,{control:d.control,name:"name",render:e=>{let{field:t}=e;return(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:["Name",(0,s.jsx)("span",{className:"text-[#00bfff] font-semibold",children:"*"})]}),(0,s.jsx)(j,{children:(0,s.jsx)(_,{className:"text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",placeholder:"John",...t})}),d.formState.errors.name?"":(0,s.jsx)(N,{className:"text-xs text-[#00bfff]/70 italic",children:"Please enter your name."}),(0,s.jsx)(w,{})]})}}),(0,s.jsx)(b,{control:d.control,name:"lastName",render:e=>{let{field:t}=e;return(0,s.jsxs)(v,{children:[(0,s.jsx)(y,{children:"Last Name"}),(0,s.jsx)(j,{children:(0,s.jsx)(_,{className:" text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",placeholder:"Doe",...t})}),(0,s.jsx)(w,{})]})}})]}),(0,s.jsx)(b,{control:d.control,name:"email",render:e=>{let{field:t}=e;return(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:["Email",(0,s.jsx)("span",{className:"text-[#00bfff] font-semibold",children:"*"})]}),(0,s.jsx)(j,{children:(0,s.jsx)(_,{className:" text-primary focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",placeholder:"john@gmail.com",...t})}),d.formState.errors.email?"":(0,s.jsx)(N,{className:"text-xs text-[#00bfff]/70 italic",children:"Please enter your email."}),(0,s.jsx)(w,{})]})}}),(0,s.jsx)(b,{control:d.control,name:"message",render:e=>{let{field:t}=e;return(0,s.jsxs)(v,{children:[(0,s.jsxs)(y,{children:["Message",(0,s.jsx)("span",{className:"text-[#00bfff] font-semibold",children:"*"})]}),(0,s.jsx)(j,{children:(0,s.jsx)(T,{placeholder:"Type your message here.",className:"h-[110px] max-h-[135px] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-mode placeholder:italic",...t})}),d.formState.errors.message?"":(0,s.jsx)(N,{className:"text-xs text-[#00bfff]/70 italic",children:"Please enter your message."}),(0,s.jsx)(N,{className:"text-xs"}),(0,s.jsx)(w,{})]})}}),(0,s.jsx)(S.z,{variant:"submitEmail",type:"submit",onClick:()=>c,disabled:e,children:e?"Submitting...":"Submit"})]})})})}},3023:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var s=r(7437),a=r(2265),n=r(7256),o=r(6061),i=r(9311);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",darkMode:"text-ring dark:text-accent bg-foreground  underline-offset-4 hover:underline",submitEmail:"text-ring text-primary bg-background hover:underline shadow-md shadow-mode"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:d=!1,...c}=e,m=d?n.g7:"button";return(0,s.jsx)(m,{className:(0,i.cn)(l({variant:a,size:o,className:r})),ref:t,...c})});d.displayName="Button"},6055:function(e,t,r){"use strict";r.d(t,{pm:function(){return u}});var s=r(2265);let a=0,n=new Map,o=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=i(d,e),l.forEach(e=>{e(d)})}function m(e){let{...t}=e,r=(a=(a+1)%Number.MAX_VALUE).toString(),s=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||s()}}}),{id:r,dismiss:s,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function u(){let[e,t]=s.useState(d);return s.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},9311:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var s=r(7042),a=r(3986);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m)((0,s.W)(t))}}},function(e){e.O(0,[526,818,971,864,744],function(){return e(e.s=5344)}),_N_E=e.O()}]);