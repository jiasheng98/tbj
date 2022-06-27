import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import {BrowserRouter, withRouter} from 'react-router-dom'

export default function Layout({
  children,
  title = 'Seyefactory',
  description,
  keywords,
  ld_json,
  seyebot,
  overlay,
  black
}) {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(ld_json)}}
        />
      </Head>
      <Header overlay={overlay} black={black}/>
      {children}
      <Footer />
    </>
  );
}
