import createDataContext from "./createDataContext";
import appApi from "../api/server";
import * as RootNavigation from "../navigationRef";
import Product from "../../classes/Product";
import Customer from "../../classes/Customer";

const adminReducer = (state, action) => {
  switch (action.type) {
    case "get_customers":
      return action.payload;
    default:
      return state;
  }
};

const addProduct = (dispatch) => {
  return async (product) => {
    const newProduct = new Product(product);
    try {
      const response = await appApi.post("/addProduct", {
        newProduct,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getCustomers = (dispatch) => {
  return async () => {
    try {
      const response = await appApi.get("/getCustomers");
      console.log(response.data);
      dispatch({ type: "get_customers", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  adminReducer,
  { addProduct, getCustomers },
  {}
);
