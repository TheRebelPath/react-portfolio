import{j as a,a as e}from"./index-190b149d.js";import{s as t}from"./styles-bea25d13.js";import{S as m}from"./SectionWrapper-588f5ad9.js";import{t as o,f as p}from"./motion-63552f2e.js";import{a as x}from"./index-15cbdeab.js";import{m as l}from"./motion-dbded027.js";const h=({index:s,testimonial:i,name:r,designation:c,company:d,image:n})=>a(l.div,{variants:p("","spring",s*.5,.75),className:"bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full",children:[e("p",{className:"text-white font-black text-[48px]",children:'"'}),a("div",{className:"mt-1",children:[e("p",{className:"text-white tracking-wider text-[18px]",children:i}),a("div",{className:"mt-7 flex justify-between items-center gap-1",children:[a("div",{className:"flex-1 flex flex-col",children:[a("p",{className:"text-white font-medium text-[16px]",children:[e("span",{className:"blue-text-gradient",children:"@"})," ",r]}),a("p",{className:"mt-1 text-secondary text-[12px]",children:[c," of ",d]})]}),e("img",{src:n,alt:`feedback-by-${r}`,className:"w-10 h-10 rounded-full objact-cover"})]})]})]}),f=()=>a("div",{className:"mt-12 bg-black-100 rounded-[20px]",children:[e("div",{className:`${t.padding} bg-tertiary rounded-2xl min-h-[300px]`,children:a(l.div,{variants:o(),children:[e("p",{className:t.sectionSubText,children:"What others say"}),e("h2",{className:t.sectionHeadText,children:"Testimonials."})]})}),e("div",{className:`${t.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`,children:x.map((s,i)=>e(h,{index:i,...s},s.name))})]}),k=m(f,"");export{k as default};
