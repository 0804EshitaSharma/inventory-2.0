import ActionTypes from "../constants/actionTypes";

export const viewItems = (items) => {
  return {
    type: ActionTypes.VIEW_ITEMS,
    payload: items,
  };
};
export const viewItem = (itemName) => {
  return {
    type: ActionTypes.VIEW_ITEM,
    payload: itemName,
  };
};
export const updateItem = (updatedItemInfo) => {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: updatedItemInfo,
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
export const deleteItem = (itemName) => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: itemName,
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
