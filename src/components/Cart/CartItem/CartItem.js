import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";


const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);
  console.log(input);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <>
    <div className="card mb-3 mw-540">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} alt={item.title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">$ {item.price}</p>
                <label htmlFor="qty">Cantidad</label>
                  <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    max-width="10px"
                    value={item.qty}
                    onChange={onChangeHandler}/>
          </div>
          
        <button onClick={() => removeFromCart(item.id)}
        className="btn btn-light btn-padding-x: 0px btn-padding-y: 0px"
        ><FontAwesomeIcon icon={faTrash} /></button>
      </div>
        
      </div>
    </div>
  
</>
)
}
   
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id,category) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);