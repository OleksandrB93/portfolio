"use strict";exports.id=299,exports.ids=[299],exports.modules={2299:(e,t,r)=>{r.d(t,{f:()=>s});var o=r(5108),i=r(9885),n=r(3979);let a="horizontal",l=["horizontal","vertical"],d=(0,i.forwardRef)((e,t)=>{let{decorative:r,orientation:l=a,...d}=e,s=p(l)?l:a;return(0,i.createElement)(n.WV.div,(0,o.Z)({"data-orientation":s},r?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},d,{ref:t}))});function p(e){return l.includes(e)}d.propTypes={orientation(e,t,r){let o=e[t],i=String(o);return o&&!p(o)?Error(`Invalid prop \`orientation\` of value \`${i}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${a}\`.`):null}};let s=d}};