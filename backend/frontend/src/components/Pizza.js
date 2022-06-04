import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza= ({ pizza }) => {
    const [varient, setVarient] = useState("small");
    const [quantity, setQuantity] = useState(1);
  
    const dispatch =useDispatch()
    const addToCartHandler = () => {
      dispatch(addToCart(pizza,quantity,varient))
    }
    return (
      <>
        <div className="card m-3" style={{ width: "18rem"}}>
          <img src={pizza.image} className="card-img-top" style={{height: "13rem" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <hr />
            <p className="card-text py-2">{pizza.description}</p>
            <div className="row">
              <div className="col-md-6">
                {/* <h6>Varients</h6> */}
                <select
                  className="custom-select"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <select
                  className="custom-select"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(20).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a className="btn btn-primary my-3 color-orange" onClick={addToCartHandler}>
                  Add to Cart
                </a>
              </div>
              <div className="col-md-6 my-4">
                Price : {(pizza.prices[0][varient]) * quantity}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


export default Pizza