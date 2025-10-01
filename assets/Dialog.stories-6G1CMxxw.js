import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a,D as l}from"./Dialog-D1DFyUBw.js";import{r as i}from"./iframe-kysoW1Cb.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Components/Molecules/Dialog"},n={render:()=>{const[t,o]=i.useState(!1),r=()=>{o(!1),alert("Closed")},s=()=>{alert("Confirmed"),o(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{open:t,onClose:r,onConfirm:s,title:"Dialog Title",children:"Dialog Content!"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const onClose = () => {
      setOpen(false);
      alert("Closed");
    };
    const onConfirm = () => {
      alert("Confirmed");
      setOpen(false);
    };
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Modal</Button>\r
        <Dialog open={open} onClose={onClose} onConfirm={onConfirm} title="Dialog Title">\r
          Dialog Content!\r
        </Dialog>\r
      </>;
  }
}`,...n.parameters?.docs?.source}}};const f=["Demo"];export{n as Demo,f as __namedExportsOrder,C as default};
