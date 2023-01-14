import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Slider.module.css";
import FImage from "./Femme.png";
import HImage from "./Homme.png";
import KImage from "./Kids.png";

const Slider = () => {
  const [index, setIndex] = useState(0);

 
  return (
    <>
      <div className={styles.Container}>
        <div
          className={styles.ImageContainer}
          style={index === 0 ? {display:"flex"} : {display:"none"}}
        >
          <Image src={HImage} alt=""  />
          <h1 className={styles.title}>Les meilleures chaussures pour hommes</h1>
          <div className={styles.btn}>
              <Link className={styles.btn} href={index === 0 ?"/homme" : index === 1 ? "/femme" : "/kids"}>SHOP NOW</Link>
          </div>
          <div className={styles.radio}>
              <h5 className={index === 0 && styles.line}  onClick={() => setIndex(0)} >Homme</h5>
              <h5 className={index === 1 && styles.line}  onClick={() => setIndex(1)} >Femme</h5>
              <h5 className={index === 2 && styles.line}  onClick={() => setIndex(2)} >Enfant</h5>
          </div>  
        </div>

        <div
          className={styles.ImageContainer}
          style={index === 1 ? {display:"flex"} : {display:"none"}}
        >
          <Image src={FImage} alt=""  />
          <h1 className={styles.title}>Les meilleures chaussures pour femmes</h1>
          <div className={styles.btn}>
              <Link className={styles.btn} href={index === 0 ?"/homme" : index === 1 ? "/femme" : "/kids"}>SHOP NOW</Link>
          </div>
          <div className={styles.radio}>
              <h5 className={index === 0 && styles.line}  onClick={() => setIndex(0)} >Homme</h5>
              <h5 className={index === 1 && styles.line}  onClick={() => setIndex(1)} >Femme</h5>
              <h5 className={index === 2 && styles.line}  onClick={() => setIndex(2)} >Enfant</h5>
          </div>  
        </div>
        <div
          className={styles.ImageContainer}
          style={index === 2 ? {display:"flex"} : {display:"none"}}
        >
          <Image src={KImage} alt=""  />
          <h1 className={styles.title}>Les meilleures chaussures pour enfants</h1>
          <div className={styles.btn}>
              <Link className={styles.btn} href={index === 0 ?"/homme" : index === 1 ? "/femme" : "/kids"}>SHOP NOW</Link>
          </div>
          <div className={styles.radio}>
              <h5 className={index === 0 && styles.line}  onClick={() => setIndex(0)} >Homme</h5>
              <h5 className={index === 1 && styles.line}  onClick={() => setIndex(1)} >Femme</h5>
              <h5 className={index === 2 && styles.line}  onClick={() => setIndex(2)} >Enfant</h5>
          </div>  
        </div>
      </div>
    </>
  );
};

export default Slider;
