import { NextPage } from 'next';
import React from 'react'
import PagesBanner from '../components/PagesBanner';

const FrequentQuestions: NextPage = () => {
  return (
    <main>
        <PagesBanner title="Preguntas Frecuentes" breadcrumb="faqs" />
        <section id="preguntas-frecuentes">
            
        </section>
    </main>
  )
}

export default FrequentQuestions;