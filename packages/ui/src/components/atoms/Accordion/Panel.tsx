import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { useContext } from "react";
import AccordionContext, {
  type AccordionContextType,
} from "./AccordionContext";

interface PanelProps {
  header: string | React.ReactNode;
  children: React.ReactNode;
  id: string | number | null;
}

export const Panel = (props: PanelProps) => {
  const { header, children, id } = props;
  const context = useContext<AccordionContextType | undefined>(
    AccordionContext
  );

  if (!context) {
    throw new Error("Panel must be used within an AccordionProvider");
  }
  const { activeIndex, setActiveIndex } = context;

  const isActive = activeIndex === id;

  return (
    <div
      className="flex flex-col justify-center items-stretch w-full"
      onClick={() => {
        setActiveIndex(isActive ? null : id);
      }}
    >
      <div
        className={classNames(
          "p-4 border border-border-default rounded-lg text-text-default leading-none cursor-pointer",
          {
            "bg-bg-default border-b-0 rounded-bl-none rounded-br-none":
              isActive,
            "bg-bg-default-secondary": !isActive,
          }
        )}
      >
        <div className="flex flex-row justify-between items-center gap-4">
          <div className="font-bold truncate">{header}</div>
          <ChevronDown
            height={20}
            width={20}
            className={classNames(
              "text-icon-default transition-transform duration-300",
              { "rotate-180 duration-300": isActive }
            )}
          />
        </div>
      </div>
      <div
        className={classNames(
          "overflow-hidden border border-border-default border-t-0 rounded-bl-lg rounded-br-lg transition-all duration-300",
          {
            "max-h-80 opacity-100": isActive,
            "max-h-0 opacity-0": !isActive,
          }
        )}
      >
        <div className="p-4 pt-0 transition-opacity duration-300">
          {children}
        </div>
      </div>
    </div>
  );
};
