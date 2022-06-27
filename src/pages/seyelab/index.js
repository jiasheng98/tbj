import {useEffect} from 'react';
import AOS from 'aos';
import styles from '../styles/seyewebsite.module.css';
import MyLayout from '../../components/MyLayout';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Website = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <MyLayout title="Seyefactory | Seye-Lab" overlay black>
      <div className={styles['page-contents']}>
        <div class="section hero wf-section">
          <div className={styles['bg-images']}>
            {/* <img
              src={require('../../../public/images/element4.png')}
              loading="lazy"
              sizes="(max-width: 1439px) 100vw, 2000px"
              data-w-id="a58aac5b-a456-deaf-7a69-c79c41b480ee"
              className={styles['headerbg-image']}
            />
            <img
              src={require('../../../public/images/element4.png')}
              loading="lazy"
              sizes="100vw"
              width="787"
              className={styles['headerbg-image-mobile']}
            /> */}
          </div>
          <LandingSection />
          <IntroSection />
          <DescriptionSection />
        </div>
        <CarouselSection />
      </div>
    </MyLayout>
  );
};

const LandingSection = () => {
  return (
    <div className={styles['landing-container']}>
      <div className={styles['landing-title-container']}>
        <h1 className={styles['landing-title']}>Seye-Lab</h1>
        {/* <p className={styles['landing-subtitle']}>Stoking emotion with <br/>the idea you grow</p> */}
        {/* <div className={styles['landing-title-divider']}></div> */}
        {/* <h1 className={styles['landing-title']}>Lab</h1> */}
      </div>

      <div className={styles['cube-container']}>
        <div className={styles['cube']}>
          <figure className={styles['front']}></figure>
          <figure className={styles['back']}></figure>
          <figure className={styles['right']}></figure>
          <figure className={styles['left']}></figure>
          <figure className={styles['top']}></figure>
          <figure className={styles['bottom']}></figure>
        </div>
        <div className={styles['innercube']}>
          <figure className={styles['inside']}></figure>
        </div>
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <div className={styles['intro-container']}>
      <div>
        <img src={require('../../../public/images/hand.png')} />
        {/* <div>
<div><h1>We</h1></div>
<div><h1>Build</h1></div>
</div> */}
      </div>
    </div>
  );
};

const DescriptionSection = () => {
  return (
    <div id="description" className={styles['seye-description-container']}>
      <div className={styles['seye-description-wrapper']}>
        <div className={styles['description-text-container']}>
          <h1>
            Laboratory For <span>Build</span>ing And <span>Experiment</span>ing
          </h1>
          <hr className={styles['hr']} />
          <p>
            <span>Seye-Lab</span> is a place for our designers and developers to
            make things happen and to{' '}
            <span>provide unprecedented experience</span>. We provide services
            such as Web Design, Web Development, UI/UX, Web 3.0 as well as
            Creatives Solutions . Besides, we are constantly improving ourselves
            and working on self-projects in the future. <span>Seye-Lab is</span>{' '}
            in charge of Seyefactory current projects such as Seye-Invest,
            Seye-Bot and Seye-Moon as well as projects in{' '}
            <span>the future</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

const CarouselSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 7,
      infinite: true,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 6,
      infinite: true,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 4,
      infinite: true,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 3,
      infinite: true,
    },
  };
  return (
    <div id="description" className={styles['seye-carousel-container']}>
             <div className={styles['description-text-container']}>
          <hr className={styles['hr']} />
          <h1>
           <span>Lab Specimens</span>
          </h1>
          </div>
      <Carousel responsive={responsive} infinite>
        <div>
          <a
          href='https://victorage.co/'
          target='_blank'
          style={{cursor: 'pointer'}}
          >
          <img
            src={require('../../../public/images/victorage.png')}
            className={styles['carousel-image']}
          />
          </a>
        </div>
        <div>
          <a
          href='https://strivedmy.com/'
          target='_blank'
          style={{cursor: 'pointer'}}
          >
    <img
            src={require('../../../public/images/strived.png')}
            className={styles['carousel-image']}
          />
          </a>
        </div>
        <div>
          <a
          href='https://www.easycam.tech/'
          target='_blank'
          style={{cursor: 'pointer'}}
          >
          <img
            src={require('../../../public/images/easycam.png')}
            className={styles['carousel-image']}
          />
          </a>
        </div>
      </Carousel>
    </div>
  );
};


export default Website;
