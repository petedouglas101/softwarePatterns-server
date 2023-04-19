import createDataContext from "./createDataContext";
import appApi from "../api/server";
import * as RootNavigation from "../navigationRef";

const orderReducer = (state, action) => {
  switch (action.type) {
    case "get_products":
      return action.payload;
    default:
      return state;
  }
};

const getProducts = (dispatch) => {
  console.log("getProductscontext");
  return async () => {
    try {
      const response = await appApi.get("/getProducts");
      dispatch({ type: "get_products", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const submitOrder = (dispatch) => {
  return async (productsInCart) => {
    try {
      const response = await appApi.post("/submitOrder", {
        productsInCart,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  orderReducer,
  { getProducts, submitOrder },
  {}
);
