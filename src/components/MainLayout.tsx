import React from "react";
import Head from "next/head";
import MainHeader from "./header/MainHeader";
import MainFooter from "./footer/MainFooter";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}>
      <Head>
        <title>Click | Indumentaria y Deporte</title>
        <meta
          content="Tiendas cercanas en la ciudad de Mar del Plata"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <MainHeader />
      {children}

      <MainFooter />
    </div>
  );
};

export default MainLayout;
