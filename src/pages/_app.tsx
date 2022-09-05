import "../styles/globals.scss";
import "../styles/bootstrap.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
