import Header from '../components/Header';
import Head from 'next/head';
import '../styles/globals.scss';
import WhatsappWidget from '../components/WhatsappWidget';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Espaço Lua Clara | Day Use</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <WhatsappWidget />
      <Footer />
    </>
  );
}
