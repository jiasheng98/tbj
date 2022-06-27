import 'aos/dist/aos.css'; //index.js
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/fonts/slick.ttf';
// import 'slick-carousel/slick/fonts/slick.woff';
import stylesheet from '../../public/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Loader from './Loader';

import 'regenerator-runtime/runtime';

import {Web3ReactProvider} from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
  return new Web3(provider);
}

const WhatsappBtn = () => {
  const openWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=60165416905&text=Hi%20Seyefactory,%20I%20would%20like%20to%20know%20more%20about%20your%20service",
      "_blank"
    );
  };

  return (
    <button
      className="whatsapp-btn shadow lift right-md-25p sm-right-20p"
      onClick={openWhatsapp}
      title="Send WhatsApp Message"
    >
      <img
        className="whatsapp-logo"
        src={require("../../public/icons/whatsapp.png")}
      />
    </button>
  );
};

const Seyefactory = ({Component, pageProps}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init('564640408284887'); // facebookPixelId
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="109996210457161"
        appId="3092130104369399"
      />
      {/* <WhatsappBtn /> */}
    </Web3ReactProvider>
  );
};

export default Seyefactory;

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
