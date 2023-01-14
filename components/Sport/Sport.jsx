import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Sport.module.css";
import { Datasport } from "./Data";

const Sport = () => {
  return (
    <>
     <div className={styles.Container}>
        <h1 className={styles.title}>Nouvelle Arrivage</h1>
        <div className={styles.ContainerCard}>
          {Datasport.map((product, index) => (
            <Link key={index} href={`product/${product.slug}`}  className={styles.card}>
              <div className={styles.div}>
              <div className={styles.cardImage}>
                <Image src={product.img} width={400} height={400} alt="" />
              </div>

              <div className={styles.Informations}>
                <h4>{product.marque}</h4>
                <h2>{product.title}</h2>
                <h3>{product.price} DZD</h3>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sport