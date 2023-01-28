import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top_footer}></div>
        <div className={styles.bottom_footer}>
          <ul>
            <h3>Categories</h3>
            <li>
              {" "}
              <Link href="">Homme</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="">Femme</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="">Enfants</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="">Sport</Link>{" "}
            </li>
          </ul>
          <ul>
            <h3>Liens</h3>
            <li>
              {" "}
              <Link href="">FAQ</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="">Pages</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="">Terms and conditions</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="">Cookies</Link>{" "}
            </li>
          </ul>
          <div>
            <h3>About</h3>
            <p>
              Sneakers boutique ecommerce est une boutique de vente au détail en
              ligne spécialisée dans la vente de baskets tendance et à la mode
              pour hommes et femmes. Nous offrons une grande variété de marques,
              de styles et de couleurs pour tous les goûts et tous les budgets.
            </p>
          </div>
          <div>
            <h3>Nous contacter</h3>
            <p>Address: 123 Main Street, ALGER ALGERIA</p>
            <p>Phone: 555-555-5555</p>
            <p>Email: sneakers@example.com</p>
            <p>Heures de bureau : du lundi au vendredi de 9 h 00 à 17 h 00 HNE</p>
            <p>Chat en direct : disponible pendant les heures de bureau</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
