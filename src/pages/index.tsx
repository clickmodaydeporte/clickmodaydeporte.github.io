import type { NextPage } from "next";
import Head from "next/head";
import SliderSection from "../components/home/SliderSection";
import BannerSection from "../components/home/BannerSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import SearchFullscreen from "../components/SearchFullscreen";
import CategorySection from "../components/home/CategorySection";
import { useEffect, useState } from "react";
import { Product } from "../interfaces";
import { getProducts } from "../services/ProductService";
import { getNewProducts } from "../utils/utils";

const Home: NextPage = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      const products = getNewProducts(response);
      setNewProducts(products);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Click | Moda y Deporte</title>
        <meta name="title" content="Click | Moda y Deporte" />
        <meta
          name="description"
          content="Encuentra prendas de calidad, cómodas y a un buen precio. Estás a solo un Click!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.clickmodaydeporte.com/" />
        <meta property="og:title" content="Click | Moda y Deporte" />
        <meta
          property="og:description"
          content="Encuentra prendas de calidad, cómodas y a un buen precio. Estás a solo un Click!"
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="http://www.clickmodaydeporte.com/"
        />
        <meta property="twitter:title" content="Click | Moda y Deporte" />
        <meta
          property="twitter:description"
          content="Encuentra prendas de calidad, cómodas y a un buen precio. Estás a solo un Click!"
        />
        <meta property="twitter:image" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section-slider height-v">
          <SliderSection />
        </section>

        <CategorySection />

        <ProductsSection {...newProducts} />

        <FeaturesSection />

        <SearchFullscreen />
      </main>
    </div>
  );
};

export default Home;
