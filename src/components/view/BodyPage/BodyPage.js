import React from "react";
import styles from  './BodyPage.module.scss'

const BodyPage = () => {
  return (
    <div className={styles.root} style={{backgroundImage: `url(${process.env.PUBLIC_URL +  'images/Background.png'})`}}>
      <div>
        <h1>HELLO, I'M <br></br><span className={styles.name}>ERYK SZCZEPANEK</span></h1>
        <h5>Junior Front-end developer</h5>
      </div>
    </div>
  )
};

export default BodyPage;