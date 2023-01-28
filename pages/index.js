import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import NewArrivage from "../components/NewArrivage/NewArrivage";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Slider from "../components/Slider/Slider";
import Sport from "../components/Sport/Sport";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sneakers Shop</title>
        <meta
          name="description"
          content="Sneakers boutique ecommerce est une boutique de vente au détail en ligne spécialisée dans la vente de baskets tendance et à la mode pour hommes et femmes. Nous offrons une grande variété de marques, de styles et de couleurs pour tous les goûts et tous les budgets. Notre site Web est facile à naviguer et propose des descriptions de produits détaillées, des images et des avis de clients pour aider les acheteurs à prendre des décisions d'achat éclairées. Nous sommes fiers de fournir un excellent service client et une livraison rapide et fiable pour nous assurer que nos clients sont entièrement satisfaits de leur achat. Que vous soyez un passionné de baskets, une fashionista ou que vous recherchiez simplement une paire de baskets confortables, la boutique en ligne Sneakers a quelque chose pour vous."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <NewArrivage />
      <Sport />
      <NewsLetter />
      <Footer />
    </>
  );
}
