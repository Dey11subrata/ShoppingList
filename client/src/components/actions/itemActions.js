import axios from "axios";
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => (dispatch) => {
  console.log("inside getItems() of itemActions");
  dispatch(loadingItems());
  // const res =  axios.get("/api/items");
  axios.get("/api/items").then((res) => {
    console.log("inside getItems()---", res);
    console.log("inside getItems()---", res.data);
    return dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  });

  // return dispatch({
  //   type: GET_ITEM,
  //   payLoad: res.data,
  // });
};

export const addItem = (item) => (dispatch) => {
  // Post@ api/items
  axios.post("/api/items", item).then((res) => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  });

  // return {
  //   type: ADD_ITEM,
  //   payload: item,
  // };
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  );
  // return {
  //   type: DELETE_ITEM,
  //   payload: id,
  // };
};

export const loadingItems = () => {
  console.log("loadingItems of action reducer------");
  return {
    type: ITEMS_LOADING,
  };
};
