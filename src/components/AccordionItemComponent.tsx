import React from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

interface AccordionItemComponentprops {
  question: string;
  answer: string;
}

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
