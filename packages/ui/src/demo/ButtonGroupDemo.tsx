import Button from "../components/atoms/Button";
import ButtonGroup from "../components/molecule/ButtonGroup";

function ButtonGroupDemo() {
  return (
    <>
      <div className="flex justify-center items-center gap-4 pt-12">
        <Button variant="primary">Button</Button>
        <ButtonGroup
          style={{ border: "1px solid #eee", width: 300 }}
          layout="start"
        >
          <Button variant="primary">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup
          style={{ border: "1px solid #eee", width: 300 }}
          layout="start"
        >
          <Button variant="neutral">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup
          style={{ border: "1px solid #eee", width: 300 }}
          layout="end"
        >
          <Button variant="neutral">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup
          style={{ border: "1px solid #eee", width: 300 }}
          layout="center"
        >
          <Button variant="neutral">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>

        <ButtonGroup
          style={{ border: "1px solid #eee", width: 300 }}
          layout="stack"
        >
          <Button variant="neutral">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default ButtonGroupDemo;
