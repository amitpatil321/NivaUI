import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./Dialog-D1DFyUBw.js";import"./iframe-kysoW1Cb.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/atoms/Tag",component:a},n={render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(a,{variant:"primary",color:"brand",children:"Brand"}),r.jsx(a,{variant:"primary",color:"danger",children:"Danger"}),r.jsx(a,{variant:"primary",color:"positive",children:"Positive"}),r.jsx(a,{variant:"primary",color:"warning",children:"Warning"}),r.jsx(a,{variant:"primary",color:"neutral",children:"Neutral"})]})},e={render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(a,{variant:"secondary",color:"brand",children:"Brand"}),r.jsx(a,{variant:"secondary",color:"danger",children:"Danger"}),r.jsx(a,{variant:"secondary",color:"positive",children:"Positive"}),r.jsx(a,{variant:"secondary",color:"warning",children:"Warning"}),r.jsx(a,{variant:"secondary",color:"neutral",children:"Neutral"})]})},i={render:()=>r.jsxs("div",{className:"flex gap-4",children:[r.jsx(a,{variant:"secondary",color:"positive",children:"Positive - Active"}),r.jsx(a,{state:"inactive",children:"Danger - Inactive"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Tag variant="primary" color="brand">\r
        Brand\r
      </Tag>\r
      <Tag variant="primary" color="danger">\r
        Danger\r
      </Tag>\r
      <Tag variant="primary" color="positive">\r
        Positive\r
      </Tag>\r
      <Tag variant="primary" color="warning">\r
        Warning\r
      </Tag>\r
      <Tag variant="primary" color="neutral">\r
        Neutral\r
      </Tag>\r
    </div>
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Tag variant="secondary" color="brand">\r
        Brand\r
      </Tag>\r
      <Tag variant="secondary" color="danger">\r
        Danger\r
      </Tag>\r
      <Tag variant="secondary" color="positive">\r
        Positive\r
      </Tag>\r
      <Tag variant="secondary" color="warning">\r
        Warning\r
      </Tag>\r
      <Tag variant="secondary" color="neutral">\r
        Neutral\r
      </Tag>\r
    </div>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Tag variant="secondary" color="positive">\r
        Positive - Active\r
      </Tag>\r
      <Tag state="inactive">Danger - Inactive</Tag>\r
    </div>
}`,...i.parameters?.docs?.source}}};const l=["Primary","Secondary","Inactive"];export{i as Inactive,n as Primary,e as Secondary,l as __namedExportsOrder,d as default};
