import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/SingleProduct.module.css";
import Image from "next/image";
import { Data } from "../../components/NewArrivage/Data";
import  {Datasport}  from "../../components/Sport/Data";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/features/cart/cartSlice";
import Footer from "../../components/Footer/Footer";

const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [size, setSize] = useState(null);
  const [message, setMessage] = useState(false);
  const router = useRouter();
  const slug = router.query.slug;
  const dispatch = useDispatch();
  const allData = Data.concat(Datasport)
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await allData.find((x) => x.slug == slug);
        setProduct(res);
      } catch (err) {}
    };
    getProduct();
  }, [slug]);
  const addProduct = () => {
    if (size === null) {
      return setMessage("Please select size");
    }
    setMessage(false);
    const price = quantity * product.price;
    const DATA = { product, size, price, quantity , slug };
    dispatch(addItemToCart(DATA));
  };
  if (product === undefined) return <h1>Loading....</h1>;
  if (product.sizes === undefined) return <h1>Loading......</h1>;
  if (product.img === undefined) return <h1>Loading......</h1>;
  return (
    <>
      <div className={styles.ContainerPage}>
        <div className={styles.ProductImage}>
          <Image
            src={product.img}
            alt={product.title}
            width={700}
            height={700}
          />
        </div>
        <div className={styles.ProductInfo}>
          <div className={styles.line}>
            <h1>{product.title}</h1>
            <h1 className={styles.price}> {product.price} DZD </h1>
          </div>
          {product.enStock ? (
            <span style={{ color: "green" }}>en stock</span>
          ) : (
            <span style={{ color: "red" }}>out stock</span>
          )}

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={styles.SizesContainer}>
            {product.sizes.map((size, index) => (
              <div key={index} className={styles.button}>
                <input
                  type="radio"
                  name="size"
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  id={size}
                />
                <label htmlFor={size}> {size} </label>
              </div>
            ))}
          </div>
          {message && (
            <>
              <span style={{ color: "red" }}> {message} </span>
            </>
          )}
          <div className={styles.quantity}>
            <button
              onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
            >
              -
            </button>
            <span> {quantity} </span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <span>livraison disponible sur 58 wilayas</span>
          {product.enStock ? (
            <div className={styles.addtocartbtn}>
              <button onClick={addProduct}>Ajouter au panier</button>
            </div>
          ) : (
            <div className={styles.addtocartbtn}>
              <button style={{backgroundColor: "#3d3d3d" , border: "1px solid #3d3d3d"}} >Ajouter au panier</button>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DetailProduct;
