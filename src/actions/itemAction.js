import ActionTypes from "../constants/actionTypes";

export const viewItems = (items) => {
  return {
    type: ActionTypes.VIEW_ITEMS,
    payload: items,
  };
};
export const viewItem = (name) => {
  return {
    type: ActionTypes.VIEW_ITEM,
    payload: name,
  };
};
export const updateItem = (name) => {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: name,
  };
};
export const searchItems = (items) => {
  return {
    type: ActionTypes.SEARCH_ITEMS,
    payload: items,
  };
};
export const filterItems = (items) => {
  return {
    type: ActionTypes.FILTER_ITEMS,
    payload: items,
  };
};
export const deleteItem = (name) => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: name,
  };
};
export const addItem = (item) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: item,
  };
};
export const deleteItems = () => {
  return {
    type: ActionTypes.DELETE_ITEMS,
  };
};
