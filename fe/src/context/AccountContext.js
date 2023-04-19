import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import appApi from "../api/server";

import Customer from "../../classes/Customer";
import Address from "../../classes/Address";

const accountReducer = (state, action) => {
  switch (action.type) {
    case "update_card_details":
      return { ...state, cardDetails: action.payload };
    case "update_address":
      return { ...state, address: action.payload };
    case "get_email":
      return { email: action.payload };
    default:
      return state;
  }
};

const updateCardDetails = (dispatch) => {
  return async ({ cardNumber, expiryDate, cvv }) => {
    try {
      const response = await appApi.post("/updateCardDetails", {
        cardNumber,
        expiryDate,
        cvv,
      });
      dispatch({ type: "update_card_details", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const updateAddress = (dispatch) => {
  return async (address) => {
    console.log("Address from context: ", address);
    try {
      const response = await appApi.post("/updateAddress", {
        address,
      });
      dispatch({ type: "update_address", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const getEmail = (dispatch) => {
  return async ({ email }) => {
    try {
      const response = await appApi.get(`/email`, {
        params: { email },
      });
      const cust = new Customer(response.data);
      dispatch({ type: "get_email", payload: new Customer(response.data) });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  accountReducer,
  { updateCardDetails, updateAddress, getEmail },
  { cardDetails: {}, address: {} }
);
