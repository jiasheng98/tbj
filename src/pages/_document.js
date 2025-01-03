import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="TBJ-UTEX INDUSTRIES" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            key="og:url"
            property="og:url"
            content="https://tbj.vercel.app/"
          />
          <meta key="og:type" property="og:type" content="website" />
          <meta
            key="og:title"
            property="og:title"
            content="TBJ-UTEX INDUSTRIES, Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies"
          />
          <meta
            key="og:description"
            property="og:description"
            content="Gasket Malaysia, Johor Bahru (JB) Supplier, Supply, Supplies. Safety sealing and attachment solutions built for you. From high-volume and automated to customized and one-of-a-kind."
          />
          <meta
            key="og:image"
            property="og:image"
            content="https://ibb.co/19QTQ95"
          />
          <meta key="og:image:width" property="og:image:width" content={1229} />
          <meta
            key="og:image:height"
            property="og:image:height"
            content={1229}
          />
          <meta key="og:locale" property="og:locale" content="en_IE" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
