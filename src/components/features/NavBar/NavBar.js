import React from "react";
import styles from './NavBar.module.scss';
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'


const NavBar = () => {
  return (
    <div className={styles.root} >
      <div className={styles.navigate}>
        <div>
          <a href="/"><img src='/images/Logo.png' alt='ems logo'/></a>
        </div>
        <div className={`${styles.navitems} row`}>
          <ul className={styles.list}>
            <li>
              <a>&#123; ABOUT &#125;</a>
            </li>
            <li>
              <a>&#123; WORK &#125;</a>
            </li>
            <li>
              <a>&#123; CONTACT &#125;</a>
            </li>
            <li>
              <a href="http://github.com/Erykov9"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100009836529196"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
          </ul>
          <div className={styles.dropdown}>
            <span><FontAwesomeIcon icon={faBars} /></span>
            <ul className={styles.mobilelist}>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>WORK</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;