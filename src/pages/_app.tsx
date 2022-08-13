import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ pageProps }: AppProps) {
  return <Layout {...pageProps} />
}

export default MyApp
