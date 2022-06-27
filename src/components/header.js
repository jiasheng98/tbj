import {useState} from 'react';
import Link from 'next/link';
import Logo from '../../public/images/seye-logo.png';
import HamburgerMenu from 'react-hamburger-menu';
import styles from './styles/Header.module.css';
import ReactTooltip from 'react-tooltip';
import {useWeb3React} from '@web3-react/core';
import {injected} from '../components/wallet/Connectors';
import {
  IoExit,
  IoLogoDiscord,
  IoChevronDownSharp,
  IoLogoInstagram,
} from 'react-icons/io5';
import {Menu, MenuItem, MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Collapsible from 'react-collapsible';

const Navbar = ({overlay, black}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = params => {
    setOpen(prev => !prev);
  };

  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
  } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <nav>
      <div
        className={
          overlay
            ? styles['header-container-transparent']
            : styles['header-container']
        }>
        {!black ? (
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleOpen}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="var(--primarytext)"
            borderRadius={0}
            animationDuration={0.5}
            className={styles['hamburger-menu']}
          />
        ) : (
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleOpen}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="var(--primarytext)"
            borderRadius={0}
            animationDuration={0.5}
            className={styles['hamburger-menu']}
          />
        )}
        {open ? (
          <div
            className={
              !black ? styles['mobile-sidebar'] : styles['mobile-sidebar']
            }>
            <div className={styles['header-navigation-mobile']}>
              <Collapsible
                className={styles['menu-button-parent-mobile']}
                openedClassName={styles['menu-button-parent-mobile']}
                trigger="Seye-Algo">
                <a href="/seyeinvest" className={styles['portfolio-text']}>
                  Seye-Invest{' '}
                </a>
                <a href="/seyebot" className={styles['portfolio-text']}>
                  Seye-Bot{' '}
                </a>
                <a href="/seyemoon" className={styles['portfolio-text']}>
                  Seye-Moon{' '}
                </a>
                <a href="https://www.myfxbook.com/members/jiasheng98" className={styles['portfolio-text']}>
                  Statistics{' '}
                </a>
              </Collapsible>

              <li>
                <Link href="/seyelab">
                  <a
                    className={`${styles['portfolio-text']} ${styles['menu-button-parent-mobile']}`}
                    style={{color: 'white'}}>
                    Seye-Lab
                  </a>
                </Link>
              </li>

              {/* {active ? (
                <>
                  <li className={styles['wallet-style']}>
                    <div
                      data-tip={account}
                      className={styles['wallet-text-connected']}>
                      {account}
                    </div>
                  </li>
                  <ReactTooltip />
                </>
              ) : (
                <li className={styles['wallet-style']}>
                  <button onClick={connect} className={styles['wallet-text']}>
                    Connect Wallet
                  </button>
                </li>
              )}
              {active ? (
                <li className={styles['wallet-style']}>
                  <button
                    onClick={disconnect}
                    className={styles['wallet-text-disconnect']}>
                    <IoExit size={20} />
                  </button>
                </li>
              ) : null} */}
              <div style={{display: 'flex'}}>
                <Link href="/">
                  <a
                    href="https://discord.com/invite/xr8kMjpmV6"
                    target="_blank">
                    {' '}
                    <IoLogoDiscord
                      size={20}
                      className={styles['discord-icon']}
                    />
                  </a>
                </Link>
                <div style={{width: '10px'}} />
                <Link href="/">
                  <a
                    href="https://www.instagram.com/seyefactory/?hl=en"
                    target="_blank">
                    {' '}
                    <IoLogoInstagram
                      size={20}
                      className={styles['discord-icon']}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <Link href="/">
          <div
            className={styles['logo-z-index']}
            data-aos="zoom-in"
            data-aos-delay="100">
            <a className={styles['logo-container']}>
              <div className={styles['logo-image-wrapper']}>
                {!black ? (
                  <img
                    src={Logo}
                    className={styles['logo-image']}
                    alt="Seyefactory"
                  />
                ) : (
                  <img
                    src={Logo}
                    className={styles['logo-image']}
                    alt="Seyefactory"
                  />
                )}
              </div>
            </a>
          </div>
        </Link>

        <div className={styles['header-navigation']}>
          <Menu
            menuButton={
              <MenuButton className={styles['menu-button-parent']}>
                Seye-Algo &nbsp; <IoChevronDownSharp />
              </MenuButton>
            }
            transition>
            <MenuItem
              href="/seyeinvest"
              className={styles['menu-button-child']}>
              Seye-Invest
            </MenuItem>
            <MenuItem href="/seyebot" className={styles['menu-button-child']}>
              Seye-Bot
            </MenuItem>
            <MenuItem href="/seyemoon" className={styles['menu-button-child']}>
              Seye-Moon
            </MenuItem>
            <MenuItem href="https://www.myfxbook.com/members/jiasheng98" className={styles['menu-button-child']}>
              Statistics
            </MenuItem>
          </Menu>

          <li>
            <Link href="/seyelab" >
              <a className={styles['menu-button-parent']}>Seye-Lab</a>
            </Link>
          </li>

          {/* {active ? (
            <>
              <li className={styles['wallet-style']}>
                <div
                  data-tip={account}
                  className={styles['wallet-text-connected']}>
                  {account}
                </div>
              </li>
              <ReactTooltip />
            </>
          ) : (
            <li className={styles['wallet-style']}>
              <button onClick={connect} className={styles['wallet-text']}>
                Connect Wallet
              </button>
            </li>
          )}
          {active ? (
            <li className={styles['wallet-style']}>
              <button
                onClick={disconnect}
                className={styles['wallet-text-disconnect']}>
                <IoExit size={20} />
              </button>
            </li>
          ) : null} */}

          <Link href="/">
            <a href="https://discord.com/invite/xr8kMjpmV6" target="_blank">
              {' '}
              <IoLogoDiscord size={20} className={styles['discord-icon']} />
            </a>
          </Link>
          <Link href="/">
            <a
              href="https://www.instagram.com/seyefactory/?hl=en"
              target="_blank">
              {' '}
              <IoLogoInstagram size={20} className={styles['discord-icon']} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
