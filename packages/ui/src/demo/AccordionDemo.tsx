import Accordion from "../components/atoms/Accordion/Accordion";

const AccordionDemo = () => {
  return (
    <div className="w-[800px]">
      <Accordion defaultActiveKey={1}>
        <Accordion.Panel header="Panel 1" id="11">
          Ships with the most commonly used premade animations. Quickly need
          some animations to spice up your application? Simply use some of the
          premade animations with different levels of complexity. You can still
          apply all of the available CSS properties to make it fit into your
          project perfectly.
        </Accordion.Panel>
        <Accordion.Panel header="Panel 2" id="12">
          Ships with the most commonly used premade animations. Quickly need
          some animations to spice up your application? Simply use some of the
          premade animations with different levels of complexity. You can still
          apply all of the available CSS properties to make it fit into your
          project perfectly.
        </Accordion.Panel>
        <Accordion.Panel header="Panel 3" id="13">
          Ships with the most commonly used premade animations. Quickly need
          some animations to spice up your application? Simply use some of the
          premade animations with different levels of complexity. You can still
          apply all of the available CSS properties to make it fit into your
          project perfectly. Ships with the most commonly used premade
          animations. Quickly need some animations to spice up your application?
          Simply use some of the premade animations with different levels of
          complexity. You can still apply all of the available CSS properties to
          make it fit into your project perfectly.
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default AccordionDemo;
