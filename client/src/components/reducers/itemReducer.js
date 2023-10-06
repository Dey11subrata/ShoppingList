import { v4 as uuidv4 } from "uuid";
import { GET_ITEM, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuidv4(), name: "Milk" },
    { id: uuidv4(), name: "Bread" },
    { id: uuidv4(), name: "Potatos" },
    { id: uuidv4(), name: "Carrot" },
    { id: uuidv4(), name: "Honey" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    default:
      return state;
  }
}

// actual state will go and action is checked ans dispatced to reducer
//  need to evaluate actions
// switch function