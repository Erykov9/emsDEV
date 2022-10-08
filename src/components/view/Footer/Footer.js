import React from "react";
import { Accordion } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        
      </div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{backgroundColor: 'black', color: 'white'}}></Accordion.Header>
          <Accordion.Body style={{backgroundColor: 'black', color: 'white'}}>
          <div className={styles.footer}>
          <div  className={styles.copyright}>
            <p>Copyright emsDEV &copy; 2022</p>
          </div>
          <div className={styles.footerNav}>
            <ul className={styles.list}>
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
};

export default Footer;