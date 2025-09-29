import React, { useState } from "react";
import { AccordionProvider } from "./AccordionContext";
import { Panel } from "./Panel";

interface AccordionProps {
  defaultActiveKey: string | number | null;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> & { Panel: typeof Panel } = ({
  defaultActiveKey,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState<string | number | null>(
    defaultActiveKey
  );

  return (
    <AccordionProvider value={{ activeIndex, setActiveIndex }}>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        {children}
      </div>
    </AccordionProvider>
  );
};

Accordion.Panel = Panel;

export default Accordion;
