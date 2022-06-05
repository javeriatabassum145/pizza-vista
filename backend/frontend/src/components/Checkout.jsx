import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";

const Checkout = () => {
  const [emailadd, setEmailadd] = useState("");
  const [address, setAddress] = useState("");
  const [inst, setInst] = useState("");
  const [cartItems, setCartitems] = useState(JSON.parse(localStorage.getItem('cartItems')));
  const customerState = useSelector((state) => state.placeOrderReducer);
  const { error, success, loading } = customerState;

  const dispatch = useDispatch();

  const orderHandler = () => {
    const order = { emailadd, address, inst, cartItems };
    dispatch(placeOrder(order));
    setEmailadd("");
    setAddress("");
    setInst("");
    localStorage.removeItem("cartItems");
    if (emailadd != 0 && address != 0) {
      alert(
        "Order has been placed. Thank you for choosing us. We will contact for the confirmation soon."
      );
      window.location.href = "/";
    } else {
      alert("Please fill the fields.");
    }
  };

  return (
    <>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Checkout
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={emailadd}
                    onChange={(e) => setEmailadd(e.target.value)}
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlInput2">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Street number"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Any other instructions
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={inst}
                    onChange={(e) => setInst(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn text-light color-orange"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn text-light color-orange"
                id="place"
                onClick={orderHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
