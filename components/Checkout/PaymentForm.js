import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/PaymentForm.module.css";
import Image from "next/image";
import { ConfirmInformation, EditInformation } from "../../store/features/order/orderSlice";
const PaymentForm = () => {

  const products = useSelector((state) => state.cart.cartItems);
  const SubTotal = useSelector((state) => Number(state.cart.Total))
  const Livraison = useSelector((state) => Number(state.order.Information[0].Livraison))
  const Information = useSelector((state) => state.order.Information)
  const dispatch = useDispatch();
  const Total = Livraison + SubTotal

  const HandleBack = () => {
    dispatch(EditInformation())
  }
  const Confirm = () => {
    dispatch(ConfirmInformation());
  }
  return( 
    <>
      <div className={styles.Container}>
      <div className={styles.AdressInfo}>
          <div className={styles.ClientInformation}>
             {Information.map((info , index) => (
               <>
                  <div className={styles.span}>
                  <span>Contact</span>
                  <h4 >{info.adresseEmail}</h4>
                  <h4 onClick={HandleBack}>Modifier</h4>
                  </div>
                  <div className={styles.span}>
                  <span>Expédier à</span>
                  <h4 className={styles.mid}>{info.adresse}, {info.baladya}, {info.wilaya}</h4>
                  <h4 onClick={HandleBack}>Modifier</h4>
                  </div>
                  <div className={styles.span}>
                  <span>Méthode</span>
                  <h4 className={styles.mid}>Retrait Dépôt/ Wilayas 09 - 13 - 19 - 21 - 23 - 25 - 31 · 250,00 DA</h4>
                  <h4 onClick={HandleBack}>Modifier</h4>
                  </div>
                </>
             ))}
             
          </div>
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
                    <h1> {product.totalPrice} DZD </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.productSomme}>
            <span>Sous-total</span>
            <b> {SubTotal} DZD</b>
            <span>Livraison </span>
            <b> {Livraison} DZD</b>
          </div>
          <div className={styles.productTotal}>
            <span>Total</span>
            <b>{Total} DZD</b>
          </div>
        </div>
        <div onClick={HandleBack} className={styles.Button}>
        Retour aux informations
        </div>
        <div onClick={Confirm} className={styles.Button}>
        Confirmer la commande
        </div>
      </div>
    </>
  )
};

export default PaymentForm;
