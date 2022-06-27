import {useEffect, useRef, useState} from 'react';
import AOS from 'aos';
import styles from '../styles/seyeinvest.module.css';
import MyLayout from '../../components/MyLayout';
import Contact from '../../components/home/Contact';
import CICalculator from '../../components/seyebot/ci-calculator';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Seye from '../../../public/images/seye-logo.png';
import backtest from '../../../public/images/seye-invest.jpg';
import bg from '../../../public/images/seye-invest-bg.jpg';
import Typed from 'typed.js';
import {FiChevronsDown} from 'react-icons/fi';
import Link from 'next/link';
import ChangingProgressProvider from '../../components/seyebot/ChangingProgressProvider';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import {BsDiscord} from 'react-icons/bs';
import {useSpring, animated} from 'react-spring';

const SeyeInvest = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Seyefactory | Seye-Invest" overlay>
       <div className={styles['page-contents']}>

            <div class="section hero wf-section">
        <div className={styles['bg-images']}>
          <img
            src={require('../../../public/images/element2-min.png')}
            loading="lazy"
            sizes="(max-width: 1439px) 100vw, 2000px"
            data-w-id="a58aac5b-a456-deaf-7a69-c79c41b480ee"
            className={styles['headerbg-image']}
          />
          <img
            src={require('../../../public/images/element2-min.png')}
            loading="lazy"
            sizes="100vw"
            width="787"
           className={styles['headerbg-image-mobile']}
          />
        </div>
      <LandingSection />
      <DescriptionSection />
      <CompundCalculator />
      <GuideSection />
      <AvailabilitySection />
      <NFASection />
      </div>
      </div>
      {/* <Contact /> */}
    </MyLayout>
  );
};

const LandingSection = () => {

  useEffect(() => {
    const options = {
      strings: ['Invest'],
      typeSpeed: 100,
      backSpeed: 100,
    };

    const typed = new Typed(el, options);

    return () => {
      typed.destroy();
    };
  }, []);

  let el = useRef();

  return (
    <div className={styles['seye-bot-container']}>
      <div className={styles['seye-bot-wrapper']}>
        {/* <img src={Seye} className={styles['seye-logo']} /> */}
        <h1>
          Seye-
          <span ref={e => (el = e)} />
        </h1>
        <p>Next Revolution Towards Financial Stability</p>
        <div className={styles['get-started-container']}>
          <a href="#guide" className={styles['get-started']}>
            Get Started
          </a>
          {/* <a href="https://discord.com/invite/xr8kMjpmV6" target="_blank"
            className={styles['get-started-discord']}> <BsDiscord 
            color='white' style={{ marginRight: '.5rem' }} size={25}/> Discord 
          </a> */}
        </div>
        {/* <svg
          className={styles['pulse-svg']}
          version="1.2"
          height="300"
          width="575"
          xmlns="http://www.w3.org/2000/svg"
          viewport="0 0 60 60"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <path
            stroke="rgba(15,0,0,0.1)"
            fill="none"
            stroke-width="1"
            stroke-linejoin="round"
            d="
        M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
          />
          <path
            className={styles['pulsar']}
            stroke="white"
            fill="none"
            stroke-width="1"
            stroke-linejoin="round"
            d="
        M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
          />
        </svg> */}
      </div>
      {/* <div
      className={styles['chevron-down']}
      >
        <a href="#description">
          <Link href="#description" scroll={true}>
            <FiChevronsDown color="var(--primarytext)" size={40} />
          </Link>
        </a>
      </div> */}
    </div>
  );
};

const DescriptionSection = () => {

  const Number = () => {
    const [flip, set] = useState(false);
    const {number} = useSpring({
      from: {number: 29000},
      number: 29126,
      delay: 200,
      config: {frequency: 5, velocity: 0},
      onRest: () => set(!flip),
    });
    return (
      <animated.div>
        {number.to(n =>
          n.toLocaleString(undefined, {maximumFractionDigits: 0}),
        )}
      </animated.div>
    );
  };

  return (
    <div id="description" className={styles['seye-description-container']}>
      <div className={styles['seye-description-wrapper']}>
        <div className={styles['description-text-container']}>
          <h1>Forget The Noise Of The Markets</h1>
          <hr className={styles['hr']} />
          <p>
            Seye-Invest is a <span>Single-Entry Non-Grid Trading Bot</span> that uses{' '}
            <span>Multi-Timeframe Technical Analysis</span> where it executes
            precision trade opening through 15m, 4hr, 1D, and 1W charts.
            Besides, Seye-Invest uses various combined trading strategies such as{' '}
            <span>Scalping based on Mean Reversion and Momentum</span>. Seye-Invest
            works based on compound interest and projected annual earnings of{' '}
            <span>40% - 60%</span>. This bot have <span>strict stoploss</span> to protect your capital.
          </p>
        </div>
        {/* <div
        className={styles['aum-container']}
        >
            <div className={styles['progress-bar']}>
            <h1 href="#guide" className={styles['prize-pool']}>
              $<Number />
            </h1>
            </div>
            <h1 
             className={styles['aum-title']}
            >Assets Under Management (AUM)</h1>
          </div> */}
               <div className={styles['progress-bar-container']}>
          <div>
            <div className={styles['progress-bar']}>
              <ChangingProgressProvider values={[60]}>
                {percentage => (
                  <CircularProgressbar
                  styles={buildStyles({
                    textColor: 'var(--tertiery)',
                    pathColor: 'var(--tertiery)',
                    backgroundColor: 'var(--white)',
                    rotation: 1 / 2 + 1 / 8,
                    strokeLinecap: 'butt',
                    trailColor: 'var(--white)',
                    pathTransitionDuration: 1,
                  })}
                  value={percentage}
                  text={`${percentage}%`}
                  circleRatio={0.75}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <h1>Annual Percentage Yield (APY)</h1>
          </div>

          {/* <div>
            <div className={styles['progress-bar']}>
              <ChangingProgressProvider values={[25]}>
                {percentage => (
                  <CircularProgressbar
                    styles={buildStyles({
                      textColor: 'var(--tertiery)',
                      pathColor: 'var(--tertiery)',
                      backgroundColor: 'var(--white)',
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: 'var(--white)',
                      pathTransitionDuration: 1,
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                    circleRatio={0.75}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <h1>Maximum Drawdown</h1>
          </div> */}
        </div>
  
        <div className={styles['description-text-container']}>
          <h1>Real-time Updates</h1>
          <hr className={styles['hr']} />
          <a href="https://www.myfxbook.com/members/jiasheng98/seye-invest/9562296"><img className={styles['iframe-graph']} alt="widget" src="https://widgets.myfxbook.com/custom-widget?id=9562296&width=400&height=250&bart=0&linet=0&symbol=CADCHF&magic=-1&title=Seye-Invest&nbsp;(Min-Deposit: $100)&titles=14&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"/></a>
          {/* <a href="https://www.myfxbook.com/members/jiasheng98/seye-invest-malaysia/9564965"><img alt="widget" src="https://widgets.myfxbook.com/custom-widget?id=9564965&width=400&height=250&bart=0&linet=0&symbol=CADCHF&magic=-1&title=Seye-Invest&titles=14&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"/></a> */}
        </div>
        {/* <div
          className={styles['description-text-container']}
          style={{marginTop: '2rem'}}>
          <h1>12 Years Backtest Results</h1>
          <hr className={styles['hr']} />
          <img src={backtest} />
          <p style={{marginTop: '1rem'}}>
            <span>Period</span>: 1st Jan 2010 - 1st June 2021
            <br />
            <span>Starting Capital</span>: 10,000 USD
            <br />
            <span>Final Amount</span>: 2,600,131 USD
          </p>
        </div> */}
      </div>
    </div>
  );
};

const CompundCalculator = () => {
  return (
    <div className={styles['seye-bot-graph-container']}>
          <h1 className={styles['text-center']}>
        We Believe In Sustainability
      </h1>
      <CICalculator />
    </div>
  );
};

const GuideSection = () => {
  const [open, setOpen] = useState(false);
  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [openthree, setOpenthree] = useState(false);

  return (
    <div id="guide" className={styles['seye-guide-container']}>
      <div className={styles['seye-guide-wrapper']}>
        <div className={styles['guide-text-container']}>
        <h1>Take The Pill</h1>
          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}>
              <div className={styles['guide-numbering']}>
                <div>1</div>
              </div>
              <div>Open an account on Roboforex (Min-deposit: 100 USD)</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={open}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Open an account{' '}
                <a target="_blank" href="https://my.roboforex.com/en/?a=lklj">
                  here
                </a>
                <br/> - Open a trading account at <span>Accounts</span> &#62; <span>Real Account</span>
                <br />- Choose <span>'MT4 ECN Affiliate'</span> for account type
                <br />- Choose <span>'1:500'</span> for leverage
                <br />- Put <span>'lklj'</span> for Affiliate Code (Must)
                <br />- Fill in all the respective details
              </div>
            </Collapse>
          </div>

          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpenone(!openone)}
              aria-controls="example-collapse-text"
              aria-expanded={openone}>
              <div className={styles['guide-numbering']}>
                <div>2</div>
              </div>
              <div>Proceed for verification</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={openone}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Click <span>'Pass the verification'</span> and proceed with
                the verification
                <br />- You would need to verify your <span>email</span>,{' '}
                <span>ID</span> as well as <span>address</span>
                <br />- An email will be sent once your verification is
                successful
                <br />- Verification process should take around 1 or 2 days to finish
                <br/>- Please don't hesitate to contact us if you are not verified after 1 or 2 days
              </div>
            </Collapse>
          </div>

          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpentwo(!opentwo)}
              aria-controls="example-collapse-text"
              aria-expanded={opentwo}>
              <div className={styles['guide-numbering']}>
                <div>3</div>
              </div>
              <div>Deposit fund</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={opentwo}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Proceed to deposit a minumum of <span>100 USD</span> to your
                trading account
                <br />- Please don't hesitate to contact us here if you face any
                issues!
              </div>
            </Collapse>
          </div>

          <div className={styles['guide-step-container']}>
            <Button
              className={styles['guide-step-wrapper']}
              onClick={() => setOpenthree(!openthree)}
              aria-controls="example-collapse-text"
              aria-expanded={openthree}>
              <div className={styles['guide-numbering']}>
                <div>4</div>
              </div>
              <div>Subscribe to the Seye-Invest</div>
              <div>
                <FiChevronsDown color="var(--secondary)" size={20} />
              </div>
            </Button>
            <Collapse in={openthree}>
              <div id="example-fade-text" className={styles['guide-collapse']}>
                - Subscribe to the bot{' '}
                <a
                  target="_blank"
                  href="https://my.roboforex.com/register-copyfx/?trader=170151">
                  here
                </a>
                <br/>
                - Apply for <span>Subscriber</span> role in Discord using this{' '}
                <a
                  target="_blank"
                  href="https://forms.gle/kNW1BfDA3oo5rugW6">
                  form
                </a>
                <br />- Now, sit back, relax and enjoy your profits!
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvailabilitySection = () => {
  return (
    <div className={styles['seye-available-container']}>
      <div className={styles['seye-nfa-wrapper']}>
        <div className={styles['available-text-container']}>
          <h1>Available In</h1>
       <div>
       <div>
          <a
          href='https://my.roboforex.com/register-copyfx/?trader=170151'
          target='_blank'
          style={{cursor: 'pointer'}}
          >
          <img
            src={require('../../../public/images/robo.png')}
          />
          </a>
        </div>
        <div>
          <a
          href='https://www.mql5.com/en/signals/1585701'
          target='_blank'
          style={{cursor: 'pointer'}}
          >
    <img
            src={require('../../../public/images/mql5.png')}
          />
          </a>
        </div>
        <div>
          <a
          href='https://www.followme.com/u/751192/8'
          target='_blank'
          style={{cursor: 'pointer'}}
          >
          <img
            src={require('../../../public/images/followme.png')}
          />
          </a>
        </div>
         </div>
        </div>
      </div>
    </div>
  );
};

const NFASection = () => {
  return (
    <div className={styles['seye-nfa-container']}>
      <div className={styles['seye-nfa-wrapper']}>
        <div className={styles['nfa-text-container']}>
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

export default SeyeInvest;
