import { v4 as uuidv4 } from "uuid";
import {
  GET_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      console.log("inside GET_ITEM of itemReducer");
      console.log("items_loading in GET_ITEM itemReducer", state.loading);

      console.log("action.payload:-----", action.payload);
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case ITEMS_LOADING:
      console.log("items_loading", { ...state });
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

// actual state will go and action is checked ans dispatced to reducer
//  need to evaluate actions
// switch function
