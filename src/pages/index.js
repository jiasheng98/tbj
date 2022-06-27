import {useEffect, useRef, useState} from 'react';
import AOS from 'aos';
import MyLayout from '../components/MyLayout';
import Typed from 'typed.js';
import {RiStockFill} from 'react-icons/ri';
import {MdDeveloperMode, MdDesignServices} from 'react-icons/md';
import {SiHiveBlockchain} from 'react-icons/si';

// Screens
import SeyeBot from './seyebot/index';
import SeyeInvest from './seyeinvest/index';

const Home = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <MyLayout title="Seyefactory -  Pill Towards Unprecedented Experience">
      <div className="page-contents">
        <WelcomePage />
      </div>
      {/* <NFASection/> */}
    </MyLayout>
  );
};

const WelcomePage = () => {
  return (
    <>
      <div class="section hero wf-section">
        <div class="bg-images">
          <img
            src={require('../../public/images/home-bg-min.png')}
            loading="lazy"
            sizes="(max-width: 1439px) 100vw, 2000px"
            data-w-id="a58aac5b-a456-deaf-7a69-c79c41b480ee"
            class="headerbg-image"
          />
          <img
            src={require('../../public/images/home-bg-mobile-min.png')}
            loading="lazy"
            sizes="100vw"
            width="787"
            class="headerbg-image-mobile"
          />
        </div>
        <Section1 />
        <PricingSection />
      </div>
    </>
  );
};

const Section1 = () => {
  // useEffect(() => {
  //   const options = {
  //     strings: ['Web', 'Trading', 'Web 3.0'],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     loop: true,
  //   };

  //   const typed = new Typed(el, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  let el = useRef();

  return (
    <>
      <div className="landing-section-container">
        <div>
          <h1>
            Pill Towards Unprecedented
            {/* <span ref={e => (el = e)} /> */}
            <br />
            Experience
          </h1>
          <p>
            We are a group of passionate developers and designers trying to make
            things happen.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

function PricingSection() {
  return (
    <div className="usp-section-container-2">
      <div className="usp-section-wrapper-1-2">
        <div className="price-section-inner">
          <h1>Take The Pill</h1>
          <p>Stay in wonderland, and I show you how deep the rabbit hole goes</p>
        </div>

        <div className="pricing-table-container">
          <div className="pricing-table">
            <RiStockFill size={40} class="service-icon" />
            <h4>Seye-Algo</h4>
            <p>Use our backtest proven algorithmic trading system</p>

            <a href="/seyeinvest" className="select-plan-btn">
              Explore
            </a>
          </div>
          {/* <div className="pricing-table">
            <MdDeveloperMode size={40} class="service-icon" />
            <h4>Web</h4>
            <p>Enquire us to build a website for you or your organization</p>

            <a className="select-plan-btn">Explore</a>
          </div> */}
          <div className="pricing-table">
            <SiHiveBlockchain size={40} class="service-icon" />
            <h4>Seye-Lab</h4>
            <p>
              Enquire us regarding website/creative services for you or your
              organization
            </p>

            <a href="/seyelab" className="select-plan-btn">Explore</a>
          </div>
          {/* <div className="pricing-table">
            <MdDesignServices size={40} class="service-icon" />
            <h4>Seye-Store</h4>
            <p>
              Enquire us to help with creative solutions for you or your
              organization
            </p>

            <a className="select-plan-btn">Explore</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const NFASection = () => {
  return (
    <div className='seye-nfa-container'>
      <div className='seye-nfa-wrapper'>
        <div className='nfa-text-container'>
          <h1>Risk Warnings and Investment Disclaimers</h1>
          <p>
          Trading involves a significant risk of loss and is not suitable for
            all investors; in particular, past developments do not necessarily
            indicate future results. Please note that the risk of loss in
            trading can be substantial. You should therefore find out
            the details of your financial situation and, if necessary, consult
            professional help to assess whether your personal and financial
            situation allows trading and whether you are in a position to take
            the high risk of loss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
