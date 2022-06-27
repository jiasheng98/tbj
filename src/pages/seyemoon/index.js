import {useEffect, useRef, useState} from 'react';
import AOS from 'aos';
import styles from '../styles/seyemoon.module.css';
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

const SeyeMoon = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Seyefactory | Seye-Moon" overlay black>
      <div className={styles['page-contents']}>

<div class="section hero wf-section">
<div className={styles['bg-images']}>
<img
src={require('../../../public/images/element4-min.png')}
loading="lazy"
sizes="(max-width: 1439px) 100vw, 2000px"
data-w-id="a58aac5b-a456-deaf-7a69-c79c41b480ee"
className={styles['headerbg-image']}
/>
<img
src={require('../../../public/images/element4-min.png')}
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
<AvailabilitySection/>
<NFASection />
</div>
</div>
{/* <Contact /> */}
    </MyLayout>
  );
};

const LandingSection = () => {

  // useEffect(() => {
  //   const options = {
  //     strings: ['Moon'],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //   };

  //   const typed = new Typed(el, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  // let el = useRef();

  return (
    <div className={styles['seye-bot-container']}>
      <div className={styles['seye-bot-wrapper']}>
        {/* <img src={Seye} className={styles['seye-logo']} /> */}
        <h1
          className={styles['shadow']}
        >
        <span className={styles['glow']}>Seye-</span><span  className={styles['blink']}>Moon</span>
        </h1>
        <p>$600 For A 5-Years Trip To The Moon</p>
        <div className={styles['get-started-container']}>
          <a href="#guide" className={styles['get-started']}>
            Buy Ticket
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
            <FiChevronsDown color="var(--secondary)" size={40} />
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
      from: {number: 68000},
      number: 68326,
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
          <h1>We Moon From Now</h1>
          <hr className={styles['hr']} />
          <p>
            Seye-Moon is a <span>24/7 Non-Stop Grid Trading Bot</span> that uses{' '}
            <span>Multi-Timeframe Technical Analysis</span> where it executes
            precision trade opening through 15m, 4hr, 1D, and 1W charts.
            Besides, Seye-Moon uses various combined trading strategies such as{' '}
            <span>SMA Crossover, RSI, MACD, and ATR</span>. Seye-Moon
            works based on compound interest and projected annual earnings of{' '}
            <span>400% - 500%</span>. <br/><br/> <sup>*This bot has no stoploss and you may lose all the principal in your account due to severe market fluctuations and other reasons.</sup>
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
              <ChangingProgressProvider values={[500]}>
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
              <ChangingProgressProvider values={[57]}>
                {percentage => (
                  <CircularProgressbar
                    styles={buildStyles({
                      textColor: '#040446',
                      pathColor: '#040446',
                      backgroundColor: 'white',
                      rotation: 1 / 2 + 1 / 8,
                      strokeLinecap: 'butt',
                      trailColor: '#eee',
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
          {/* <iframe
            className={styles['iframe-graph']}
            src="https://staticmy.roboforex.com/en/informers/providers/frame/performance/113089/"
            height="508"
            width="405"
            frameborder="0"></iframe> */}
           <a href="https://www.myfxbook.com/members/jiasheng98/seye-moon/9567649"><img className={styles['iframe-graph']} alt="widget" src="https://widgets.myfxbook.com/custom-widget?id=9567649&width=400&height=250&bart=0&linet=0&symbol=CADCHF&magic=-1&title=Seye-Moon&nbsp;(Min-Deposit: $600)&titles=14&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"/></a>
            {/* <a href="https://www.myfxbook.com/members/jiasheng98/seye-bot-malaysia/9564958"><img alt="widget" src="https://widgets.myfxbook.com/custom-widget?id=9564958&width=400&height=250&bart=0&linet=0&symbol=CADCHF&magic=-1&title=Seye-Bot&titles=14&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"/></a> */}
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
            <span>Starting Capital</span>: 2000 USD
            <br />
            <span>Final Amount</span>: 2,638,871 USD
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
        Moon Is Approximately $4m
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
            <div>Open an account on Roboforex (Min-deposit: 600 USD)</div>
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
              - Proceed to deposit a minumum of <span>600 USD</span> to your
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
            <div>Subscribe to the Seye-Moon</div>
            <div>
              <FiChevronsDown color="var(--secondary)" size={20} />
            </div>
          </Button>
          <Collapse in={openthree}>
            <div id="example-fade-text" className={styles['guide-collapse']}>
              - Subscribe to the bot{' '}
              <a
                target="_blank"
                href="https://my.roboforex.com/register-copyfx/?trader=179746">
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
          href='https://my.roboforex.com/register-copyfx/?trader=179746'
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
          href='https://www.mql5.com/en/signals/1585703'
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
          href='https://www.followme.com/u/751192/11'
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

export default SeyeMoon;
