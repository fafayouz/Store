import React, { useState } from "react";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../store/features/cart/cartSlice";
import { useEffect } from "react";

const Cart = ({ cartOpen, setCartOpen }) => {
  const product = useSelector((state) => state.cart.cartItems);
  const totalprice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch()


  
  return (
    <>
      <div
        className={cartOpen ? styles.CartContainer : styles.CartContainerClosed}
      >
        <div className={styles.Title}>
          <h2>Panier</h2>
          <h1
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          >
            X
          </h1>
        </div>
        {product?.length === 0 ? (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "80%",
            }}
          >
            panier vide
          </h1>
        ) : (
          <>
            <div  className={styles.ProductContainer}>
              {product.map((item, index) => (
                <div key={index} className={styles.ProductCard}>
                  <div className={styles.ImageContainer}>
                    <Image
                      src={item.product.img}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.InfoContainer}>
                    <div className={styles.ProductInfo}>
                      <h1> {item.product.title} </h1>
                      <h2>{item.price}  DZD </h2>
                      <span>{item.size}</span>
                    </div>
                    <div className={styles.quantityandRemove}>
                      <span>Qty {item.quantity}</span>
                      <b onClick={() => {dispatch(removeItemFromCart(item))} }>  Retirer</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*Go to Page CheckOutPage */}
            <div className={styles.CheckoutContainer}>
              <div className={styles.Subtotal}>
                <span>Subtotal</span>
                <span>{totalprice} DZD</span>
              </div>
              <span className={styles.shipinfo}>
                Livraison et taxes calculées à la caisse.
              </span>
              <div onClick={() => {setCartOpen(false)}} className={styles.CheckoutBtn}>
                <Link href="/Checkout">Vérifier</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
