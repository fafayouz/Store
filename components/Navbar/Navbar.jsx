import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -4,
      top: 5,
      border: `2px solid black`,
      padding: '0 3px',
      background: "#AD0618",
      color:"white",
    },
  }));
  
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen , setCartOpen] = useState(false);
  const cartIndex = useSelector(state => state.cart.cartItems?.length)
  return (
    <>
      <div className={styles.container}>
        <h1>
          Snea<b>kers</b>
        </h1>
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul onClick={() => {setCartOpen(false)}}className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">Homme </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">Femme</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">Marques</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <ul
          onClick={() => setOpen(false)}
          className={styles.menu}
          style={{ right: open ? "0px" : "-70vw" }}
        >
          <li className={styles.menuList}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={styles.menuList}>
            <Link href="/">Homme </Link>
          </li>
          <li className={styles.menuList}>
            <Link href="/">Femme</Link>
          </li>
          <li className={styles.menuList}>
            <Link href="/">Marques</Link>
          </li>
          <li className={styles.menuList}>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div onClick={() => {setCartOpen(!cartOpen)}} className={styles.cart}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartIndex} color="secondary">
            <ShoppingCartIcon style={{fill: "white"}} fontSize="medium" />
          </StyledBadge>
        </IconButton>
      </div>
      <div onClick={() => {setCartOpen(!cartOpen)}} className={styles.cartMobile}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartIndex} color="secondary">
            <ShoppingCartIcon style={{fill: "black"}} fontSize="large" />
          </StyledBadge>
        </IconButton>
      </div>
        
      </div>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    </>
  );
};

export default Navbar;
