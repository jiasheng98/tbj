import styles from './styles/Footer.module.css';
import Link from 'next/link';
import Logo from '../../public/images/seye-only-logo.png';
import {
  IoExit,
  IoLogoDiscord,
  IoChevronDownSharp,
  IoLogoInstagram,
} from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <div>
          <img src={Logo} className={styles['footer-logo']} />
        </div>
        <div>
          <Link href="/">
            <a href="https://discord.com/invite/xr8kMjpmV6" target="_blank">
              {' '}
              <IoLogoDiscord size={20} className={styles['discord-icon']} />
            </a>
          </Link>
          <Link href="/">
            <a
              href="https://www.instagram.com/seyefactory/?hl=en"
              target="_blank"
              style={{textDecoration: 'none'}}>
              {' '}
              <IoLogoInstagram size={20} className={styles['discord-icon']} />
            </a>
          </Link>
        </div>
        {/* <div>
      <h6 className={styles['footer-text']}>
        Copyright © 2022 Seyefactory. All Rights Reserved.
      </h6>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
