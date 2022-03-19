import React, { useState } from 'react'
import styles from "../../styles/Checkout.module.css";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Livraison from "./Livraison";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";




const Checkout = () => {
    const [activeStep , setActiveStep] = useState(0);

    const steps = ["Shipping address", "Payment details", "Review your order"];

    const getStepContent = (step) => {
        switch(step){
            case 0 :
             return <AddressForm/>;
            case 1 :
             return <PaymentForm/>;
            case 2 :
             return <Review/>;
            default:
                throw new Error("Unknown step")
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }
    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }
  return (
    <>
        <main className={styles.CheckoutContainer}>
        {activeStep === steps.length ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </>
              ) : (
                <>
                  {getStepContent(activeStep)}
                  <div className={styles.btn}>
                    {activeStep !== 0 && (
                      <button
                      onClick={handleBack}
                      >
                        Retour
                      </button>
                    )}
                    <button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Continuer vers l'expédition"}
                    </button>
                  </div>
                </>
              )}
        </main>     
    </>
  )
}

export default Checkout