import { NextPage } from "next";
import React from "react";
import PagesBanner from "../components/PagesBanner";
import {
  Accordion,
} from "react-accessible-accordion";
import AccordionItemComponent from "../components/AccordionItemComponent";

const FrequentQuestions: NextPage = () => {
  return (
    <main>
      <PagesBanner urlImage="/images/pages-banner.jpg" title="Preguntas Frecuentes" breadcrumb="faqs" />
      <section className="mt-90" id="frequent-questions">
        <Accordion>
          <AccordionItemComponent
            question="¿Cómo obtengo mi pedido?"
            answer="Tenemos varios puntos de encuentro..."
          />
          <AccordionItemComponent
            question="¿Cómo obtengo mi pedido?"
            answer="Tenemos varios puntos de encuentro..."
          />
          <AccordionItemComponent
            question="¿Cómo obtengo mi pedido?"
            answer="Tenemos varios puntos de encuentro..."
          />
        </Accordion>
      </section>
    </main>
  );
};

export default FrequentQuestions;
