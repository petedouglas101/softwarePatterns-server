import createDataContext from "./createDataContext";
import appApi from "../api/server";
import * as RootNavigation from "../navigationRef";
import Product from "../../classes/Product";

const adminReducer = (state, action) => {
  switch (action.type) {
  }
};

const addProduct = (dispatch) => {
  return async (product) => {
    const newProduct = new Product(product);
    try {
      const response = await appApi.post("/addProduct", {
        newProduct,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  adminReducer,
  { addProduct },
  {}
);
