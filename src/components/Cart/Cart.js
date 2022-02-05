import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const product = () => {
    let text = [];
    cart.forEach((pro) => text.push([pro.title, pro.qty]));
    console.log(text);
    return text;
  };

  return (
    <div>
      <Navbar />

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="card text-center">
        <div className="card-header">Resumen de tu pedido</div>
        <div className="card-body">
          <h5 className="card-title">Cantidad: ({totalItems} items)</h5>
          <p className="card-text">Valor: $ {totalPrice}</p>
          <a href={`https://api.whatsapp.com/send?phone=${573188915780}&text=
            Hola, gracias por comprar en 3Decor! Resumen de tu compra: ${product()} Cantidad de productos:${totalItems} Precio total:${totalPrice}`}
            className="btn btn-primary"
          >
            Confirmar pedido
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
      }

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
