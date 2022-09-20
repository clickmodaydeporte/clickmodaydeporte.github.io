import React from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AccordionItemComponentprops } from "../interfaces";

const AccordionItemComponent: React.FC<AccordionItemComponentprops> = ({question, answer}) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          {question}
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>
          {answer}
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordionItemComponent;
