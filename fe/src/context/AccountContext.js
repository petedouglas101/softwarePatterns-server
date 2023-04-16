import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import appApi from "../api/server";
import CustomerModel from "../models/CustomerModel";

const accountReducer = (state, action) => {
  switch (action.type) {
    case "update_card_details":
      return { ...state, cardDetails: action.payload };
    case "update_address":
      return { ...state, address: action.payload };
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
  return async ({ addressLine1, addressLine2, postcode, country }) => {
    console.log("updateAddress", addressLine1, addressLine2, postcode, country);
    try {
      const response = await appApi.post("/updateAddress", {
        addressLine1,
        addressLine2,
        postcode,
        country,
      });
      dispatch({ type: "update_address", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  accountReducer,
  { updateCardDetails, updateAddress },
  { cardDetails: {}, address: {} }
);
