import React, { useEffect } from "react";
// import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import "./Menu.css";
import Error from "../components/Error";

const Menu = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <div id="menu">
        <header className="section-header text-center mt-5 pt-5 pb-4">
          <h2>Menu</h2>
        </header>
        <div className="container">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-grow text-orange mx-2" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-orange mx-2" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-orange mx-2" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <Error>Error while fetchig pizzas {error}</Error>
          ) : (
            <div className="row">
              {pizzas.map((pizza) => (
                <div className="col-md-4">
                  <Pizza pizza={pizza} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
