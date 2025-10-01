import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as i,B as a}from"./Dialog-D1DFyUBw.js";import"./iframe-kysoW1Cb.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],d=i("house",o);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],c=i("pencil",l);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],u=i("settings",m),y={title:"Components/Atoms/Button",component:a,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["primary","neutral","subtle"],defaultValue:"Primary"},disabled:{control:"boolean",type:"boolean",defaultValue:!1},size:{control:"radio",options:["sm","md"],defaultValue:"md"}},args:{variant:"primary",size:"md",disabled:!1}},n={render:()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"neutral",children:"Secondary"}),r.jsx(a,{variant:"subtle",children:"Neutral"})]})},e={render:()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{size:"sm",children:"Small"}),r.jsx(a,{size:"md",variant:"primary",children:"Medium"})]})},t={render:()=>r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{kind:"danger",variant:"primary",children:"Primary"}),r.jsx(a,{kind:"danger",variant:"subtle",children:"Subtle"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{kind:"danger",size:"sm",variant:"primary",children:"Primary"}),r.jsx(a,{kind:"danger",size:"sm",variant:"subtle",children:"Subtle"})]})]})},s={render:()=>r.jsxs("div",{className:"flex gap-2",children:[r.jsx(a,{variant:"primary",kind:"icon",children:r.jsx(d,{})}),r.jsx(a,{variant:"neutral",kind:"icon",children:r.jsx(c,{})}),r.jsx(a,{variant:"subtle",kind:"icon",children:r.jsx(u,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="neutral">Secondary</Button>\r
      <Button variant="subtle">Neutral</Button>\r
    </div>
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Button size={"sm"}>Small</Button>\r
      <Button size={"md"} variant="primary">\r
        Medium\r
      </Button>\r
    </div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <div className="flex gap-2">\r
        <Button kind={"danger"} variant="primary">\r
          Primary\r
        </Button>\r
        <Button kind={"danger"} variant="subtle">\r
          Subtle\r
        </Button>\r
      </div>\r
      <div className="flex gap-2">\r
        <Button kind={"danger"} size={"sm"} variant="primary">\r
          Primary\r
        </Button>\r
        <Button kind={"danger"} size="sm" variant="subtle">\r
          Subtle\r
        </Button>\r
      </div>\r
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Button variant="primary" kind={"icon"}>\r
        <HomeIcon />\r
      </Button>\r
      <Button variant="neutral" kind={"icon"}>\r
        <Pencil />\r
      </Button>\r
      <Button variant="subtle" kind={"icon"}>\r
        <Settings />\r
      </Button>\r
    </div>
}`,...s.parameters?.docs?.source}}};const h=["Variants","Sizes","Danger","WithIcon"];export{t as Danger,e as Sizes,n as Variants,s as WithIcon,h as __namedExportsOrder,y as default};
