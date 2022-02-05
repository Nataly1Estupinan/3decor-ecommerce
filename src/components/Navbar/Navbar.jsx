/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styles from "./Navbar.module.css";
import { connect } from "react-redux";
import logo from "../../Assets/logo38x42.png";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Left}>
          <Link className={styles.link} to="/">
            <span className={styles.Language}>3DECOR</span>
          </Link>
          <Link className={styles.link} to="/">
            <div className={styles.ImgContainer}>
              <img classNAme={styles.Img} src={logo} />
            </div>
          </Link>
        </div>

        <div className={styles.Center}>
          <h1 className={styles.Logo}>3DECOR</h1>
        </div>
        <div className={styles.Right}>
          <Link className={styles.link} to="/carrito">
            <div className={styles.MenuItem}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>

          <Link className={styles.link} to="/productos">
            <div className={styles.MenuItem}>TIENDA</div>
          </Link>
          <Link className={styles.link} to="/about">
            <div className={styles.MenuItem}>CURSOS</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
