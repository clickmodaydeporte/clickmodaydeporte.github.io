import { NextPage } from "next";
import React from "react";
import PagesBanner from "../components/PagesBanner";
import { Accordion } from "react-accessible-accordion";
import AccordionItemComponent from "../components/AccordionItemComponent";

const FrequentQuestions: NextPage = () => {
  return (
    <main>
      <PagesBanner
        urlImage="/images/pages-banner.jpg"
        title="Preguntas Frecuentes"
        breadcrumb="faqs"
      />
      <section className="mt-90" id="frequent-questions">
        <Accordion>
          <AccordionItemComponent
            question="¿Cómo obtienes tu pedido?"
            answer="Las entregas las hacemos en distintos puntos de encuentro: Comisaría de Frino, Coto de José C. Paz, Estación San Miguel y Rotonda de Grand Bourg."
          />
          <AccordionItemComponent
            question="Entrega inmediata | Pedido por catálogo"
            answer="Tenemos productos que son con entrega inmediata y otros con los que nos manejamos por pedido por catálogo. En los detalles del producto podrás visualizar si tenemos stock. Si tienes alguna pregunta no dudes en consultarnos."
          />
          <AccordionItemComponent
            question="¿Cómo puedes comunicarte con nosotras?"
            answer='Tenemos cuenta en Instagram, Facebook y también WhatsApp. En la pestaña de "contacto" podrás encontrar los links directos.'
          />
          <AccordionItemComponent
            question="¿Qué medios de pago aceptamos?"
            answer="Aceptamos efectivo (nos pagas cuando recibas tu producto), MercadoPago o transferencia bancaria."
          />
        </Accordion>
      </section>
    </main>
  );
};

export default FrequentQuestions;
