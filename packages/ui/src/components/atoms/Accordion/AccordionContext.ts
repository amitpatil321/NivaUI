import { createContext } from "react";

export interface AccordionContextType {
  activeIndex: string | number | null;
  setActiveIndex: (id: string | number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export default AccordionContext;

export const AccordionProvider = AccordionContext.Provider;
export const AccordionConsumer = AccordionContext.Consumer;
