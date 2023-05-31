import ActionTypes from "./constants/ActionTypes";

export const viewItems = (items) => {
  return {
    type:ActionTypes.VIEW_ITEMS,
    payload:items
  };
};

  export const deleteItem = (item) => {
    return {
        type:ActionTypes.DELETE_ITEM,
        payload:item
    };
  };
  export const addItem = (item) => {
    return {
        type:ActionTypes.ADD_ITEM,
        payload:item
    };
  };