import React, { useState } from "react";
import styles from "../../styles/AddressForm.module.css";
import { DATA } from "./Livraison";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { addInformation } from "../../store/features/order/orderSlice";


const AddressForm = () => {
  const [Livraison ,setLivraiosn] = useState(null);
  const [prenom ,setPrenom] = useState(null);
  const [nom ,setNom] = useState(null);
  const [wilaya ,setWilaya] = useState(null);
  const [adresse ,setAdresse] = useState(null);
  const [baladya ,setBaladya] = useState(null);
  const [teléphone ,setTeléphone] = useState(null);
  const [adresseEmail ,setAdresseEmail] = useState(null);
  const [message ,setMessage] = useState(null);
  const data = {prenom ,nom,wilaya,adresse,baladya,teléphone,adresseEmail , Livraison }

  const dispatch = useDispatch()


  const products = useSelector((state) => state.cart.cartItems);
  const SubTotal = useSelector((state) => state.cart.totalPrice)
  const Total = Number(SubTotal) + Number(Livraison)
  
console.log(products);
  const handleNext = () => {
    if (!prenom || !nom || !wilaya || !adresse || !baladya || !teléphone || !adresseEmail || !Livraison) {
      return setMessage("Please select size");
    }    
    dispatch(addInformation(data))
  }
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.AdressInfo}>
          <input
            className={styles.smallInput}
            type="text"
            placeholder="Prénom - الإسم"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <input
            className={styles.smallInput}
            type="text"
            placeholder="Nom - اللقب"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <input
            className={styles.bigInput}
            type="text"
            placeholder="Wilaya - الولاية"
            value={wilaya}
            onChange={(e) => setWilaya(e.target.value)}
          />
          <input
            className={styles.bigInput}
            type="text"
            placeholder="Adresse - العنوان"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <input
            className={styles.smallInput}
            type="text"
            placeholder="Baladya - البلدية"
            value={baladya}
            onChange={(e) => setBaladya(e.target.value)}
          />
          <input
            className={styles.smallInput}
            type="number"
            placeholder="Téléphone - رقم الهاتف"
            value={teléphone}
            onChange={(e) => setTeléphone(e.target.value)}
          />
          <input
            className={styles.bigInput}
            type="text"
            placeholder="Adresse E-mail - البريد الإلكتروني"
            value={adresseEmail}
            onChange={(e) => setAdresseEmail(e.target.value)}
          />
          <select required onChange={(e) => setLivraiosn(e.target.value)} className={styles.bigInput}>
            <option value="0">Mode d'expédition</option>
            {DATA.map((info, index) => (
              <option key={index} value={info.LPrice} >
                {" "}
                {info.wilaya} / {info.LPrice}DZD
              </option>
            ))}
          </select>
        </div>
        <div className={styles.ItemSelected}>
          <div className={styles.productContainer}>
            {products.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.Image}>
                  <Image src={product.product.img} alt="" />
                </div>
                <div className={styles.InfoProduct}>
                  <div className={styles.shoesInfo}>
                    <h2>{product.product.title}</h2>
                    <span> {product.size} </span>
                    <span> Qty {product.quantity} </span>
                  </div>
                  <div className={styles.shoesPrice}>
                    <h1> {product.price} DZD </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.productSomme}>
            <span>Sous-total</span>
            <b> {SubTotal} DZD</b>
            <span>Livraison </span>
            <b>{Livraison} DZD</b>
          </div>
          <div className={styles.productTotal}>
            <span>Total</span>
            <b>{Total} DZD</b>
          </div>
        </div>
        <div  onClick={handleNext} className={styles.Button}>
            Continuer vers le paiement
        </div>
      </div>
    </>
  );
};

export default AddressForm;
