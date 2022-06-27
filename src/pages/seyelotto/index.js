import {useEffect, useRef, useState} from 'react';
import AOS from 'aos';
import styles from '../styles/seyelotto.module.css';
import MyLayout from '../../components/MyLayout';
import Contact from '../../components/home/Contact';
import 'react-circular-progressbar/dist/styles.css';
import {FiChevronsDown} from 'react-icons/fi';
import Link from 'next/link';
import {useSpring, animated} from 'react-spring';

const SeyeBot = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Seyefactory | Seye-Lotto" overlay>
      <LandingSection />
      <a href="https://www.myfxbook.com/members/jiasheng98/seye-moon/9567649"><img alt="widget" src="https://widgets.myfxbook.com/custom-widget?id=9567649&width=400&height=250&bart=0&linet=0&symbol=CADCHF&magic=-1&title=Seye-Moon&nbsp;(Min-Deposit: $600)&titles=14&bgColor=ffffff&gridColor=bdbdbd&lineColor=ff0505&barColor=ffadad&bar1Color=ffadad&fontColor=525252&chartbgc=ffffff&equityColor=eff45a"/></a>
      {/* <DescriptionSection /> */}
      <Contact />
    </MyLayout>
  );
};

const LandingSection = () => {
  const Number = () => {
    const [flip, set] = useState(false);
    const {number} = useSpring({
      from: {number: 100000},
      number: 100434,
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

  let el = useRef();

  return (
    <div className={styles['seye-bot-container']}>
      <div className={styles['seye-bot-wrapper']}>
        <h1>
          Seye-
          <span>Lotto</span>
        </h1>
        <div className={styles['prize-pool-container']}>
          <div>
            <p className={styles['prize-pool-header']}>Current Prize Pool:</p>
          </div>
          <div>
            <h1 href="#guide" className={styles['prize-pool']}>
              $<Number />
            </h1>
          </div>
        </div>
        <div className={styles['get-started-container']}>
          <a href="#guide" className={styles['get-started']}>
            Buy Tickets
          </a>
          <a href="#guide" className={styles['get-started']}>
            Pick Winner
          </a>
          <a href="#guide" className={styles['get-started']}>
            Pay Winner
          </a>
          <a
            href="/"
            className={styles['get-started-documentation']}>
            How Does It Work?
          </a>
        </div>
        <svg
          className={styles['pulse-svg']}
          style={{position: 'absolute'}}
          data-v-35f9bdb1=""
          width="1630"
          height="1083"
          viewBox="0 0 1630 1083"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="orbit">
          <path
            d="M641.468 232.691C573.198 226.735 520.087 237.885 489.526 264.421C459.02 290.908 452.403 331.507 470.813 380.636C489.229 429.78 531.738 484.883 592.382 538.14C653.019 591.39 728.687 640.073 808.69 677.302C888.694 714.532 968.966 738.416 1038.16 745.589C1107.37 752.765 1161.9 742.849 1194.14 717.379C1210.24 704.654 1220.39 688.361 1224.44 669.194C1228.49 650.019 1226.45 627.936 1218.14 603.636C1201.5 555.026 1160.6 500.094 1101.16 446.618M725.878 194.255C599.141 146.499 487.81 128.355 411.902 143.006C373.959 150.33 346.162 165.598 329.235 187.709C312.313 209.814 306.199 238.83 311.761 273.771C322.892 343.691 380.028 432.585 473.011 524.436C565.977 616.269 688.602 704.96 818.805 774.532C949.012 844.105 1078.21 889.971 1183.14 903.891C1235.6 910.851 1280.25 909.592 1315.43 900.566C1350.61 891.541 1376.29 874.761 1390.9 850.698C1405.51 826.635 1408.62 796 1400.54 760.417C1392.44 724.831 1373.16 684.332 1343.03 640.597C1282.76 553.128 1183.15 458.55 1062.09 373.905M17.765 81.7612C-72.5543 238.199 211.083 571.047 651.286 825.199C1091.49 1079.35 1521.56 1158.56 1611.88 1002.13C1702.2 845.688 1418.57 512.84 978.362 258.688C538.158 4.53636 108.084 -74.6765 17.765 81.7612Z"
            stroke="white"
            stroke-opacity="0.1"></path>
        </svg>
      </div>
      <div
      className={styles['chevron-down']}
      >
        <a href="#description">
          <Link href="#description" scroll={true}>
            <FiChevronsDown color="var(--secondary)" size={40} />
          </Link>
        </a>
      </div>
    </div>
  );
};

const DescriptionSection = () => {
  return (
    <div id="description" className={styles['seye-description-container']}>
      <div className={styles['seye-description-wrapper']}>
        <div className={styles['description-text-container']}>
          <h1>Current Lottery Pot</h1>
          <hr className={styles['hr']} />
        </div>
      </div>
    </div>
  );
};

export default SeyeBot;
