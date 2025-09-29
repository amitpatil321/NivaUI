import { Accordion } from "@niva/ui";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

describe("Accordion component", () => {
  it("Renders accordion component correctly", () => {
    render(
      <Accordion>
        <Accordion.Panel header="Panel 1" id="1">
          Panel 1 content
        </Accordion.Panel>
        <Accordion.Panel header="Panel 2" id="2">
          Panel 2 content
        </Accordion.Panel>
        <Accordion.Panel header="Panel 3" id="3">
          Panel 3 content
        </Accordion.Panel>
      </Accordion>
    );
    const accordion = screen.getByTestId("accordion");
    const panels = screen.getAllByTestId("accordion-panel");
    expect(accordion).toBeInTheDocument();
    expect(panels).toHaveLength(3);
    expect(panels[0]).toBeInTheDocument();
    expect(panels[1]).toBeInTheDocument();
    expect(panels[2]).toBeInTheDocument();
    expect(panels[0]).toHaveTextContent("Panel 1");
    expect(panels[1]).toHaveTextContent("Panel 2");
    expect(panels[2]).toHaveTextContent("Panel 3");
    expect(panels[0]).toHaveTextContent("Panel 1 content");
    expect(panels[1]).toHaveTextContent("Panel 2 content");
    expect(panels[2]).toHaveTextContent("Panel 3 content");
  });
});
