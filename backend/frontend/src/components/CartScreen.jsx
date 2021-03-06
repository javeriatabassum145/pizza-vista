import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "./Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="text-orange">Cart Items</h1>
            <div className="row" >
              {cartItems.map((item) => (
                <>
                  <div className="col-md-6 text-center">
                    <hr />
                    <h5>
                      {item.name} {[item.varient]}
                    </h5>
                    <h6>
                      {" "}
                      Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity :
                      <FaMinusCircle
                        className="text-danger mx-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(
                              item,
                              parseInt(item.quantity) - 1,
                              item.varient
                            )
                          );
                        }}
                      ></FaMinusCircle>
                      {item.quantity}
                      <FaPlusCircle
                        className="text-success mx-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(
                              item,
                              parseInt(item.quantity) + 1,
                              item.varient
                            )
                          );
                        }}
                      ></FaPlusCircle>
                    </h6>
                  </div>
                  <div className="col-md-4 text-center">
                    <hr />
                    <img
                      alt={item.name}
                      src={item.image}
                      className="rounded"
                      style={{ width: "120px", height: "90px" }}
                    />
                  </div>
                  <div className="col-md-2 text-center">
                    <hr />

                    <FaTrash
                      className="text-danger my-4"
                      style={{ fontSize: "24px", cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    ></FaTrash>
                  </div>
                </>
              ))}
            </div>
            <hr />
          </div>

          <div className="col-md-4 mx-3" data-aos="fade-left">
            <h1 className="text-orange">Payment Info</h1>
            <h4 className="my-3">Sub Total</h4>
            <h5 className="my-3">Rs : {subTotal}</h5>
            <a
              className="btn btn-primary my-3 color-orange"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              id="checkout"
              onClick={() => {
                if (cartItems == 0) {
                  alert("Please add something into your cart.");
                  window.location.href = "/menu";
                }
              }}
            >
              Checkout
            </a>
            <Checkout></Checkout>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
