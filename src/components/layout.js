import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({
  children,
  title = 'TBJ-UTEX INDUSTRIES',
  description,
  keywords,
  ld_json,
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
      <Header/>
      {children}
      <Footer />
    </>
  );
}
