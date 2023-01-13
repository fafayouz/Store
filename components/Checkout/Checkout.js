import React, { useState } from "react";
import styles from "../../styles/Checkout.module.css";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { useSelector } from "react-redux";
import Link from "next/link";

const Checkout = () => {
  const activeStep = useSelector((state) => state.order.step);
  const Cart = useSelector((state) => state.cart.cartItems);

  return (
    <>
      {Cart.length === 0 ? (
        <div className={styles.CheckoutContainerPanier}>
            <h1>Votre panier est vide </h1>
            <div>
              <Link href="/"> Achetez maintenant </Link>
            </div>
        </div>
      ) : (
        <div className={styles.CheckoutContainer}>
          {activeStep === 0 && (
            <>
              <AddressForm />
            </>
          )}
          {activeStep === 1 && <PaymentForm />}
        </div>
      )}
    </>
  );
};

export default Checkout;
