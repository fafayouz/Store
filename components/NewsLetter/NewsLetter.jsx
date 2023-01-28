import React, { useState } from "react";
import styles from "../../styles/NewsLetter.module.css";

const NewsLetter = () => {
  const [popup, setPopup] = useState(false);
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState(false);


const send = () => {
    if(email.length < 10) {
      return setMessage("Please enter a valid email")
    }
    setPopup(true)
    setMessage(false)
    setEmail("")
}
  return (
    <>
      {popup ? (
        <div className={styles.popup}>
            <h1 style={{color:"white"}}>Merci de vous être inscrit à notre <b style={{color:"#AD0618"}}>NEWSLETTER</b></h1>
            <button  onClick={() => {
                  setPopup(false);
                }}>OK</button>
        </div>
      ) : (
        <div className={styles.Container}>
          <div className={styles.subcontainer}>
            <h2>
              INSCRIVEZ-VOUS À <b>LA NEWSLETTER</b>{" "}
            </h2>
            <div className={styles.Email}>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
              <button
                onClick={send}
                type="submit"
              >
                S'inscrire maintenant
              </button>
              {message && (
              <p>{message}</p>
            )}
            </div>
          

          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetter;
