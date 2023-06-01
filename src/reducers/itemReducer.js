import { ActionTypes } from "../constants/actionTypes";

export const initialState = {
  items: [],
  filteredItems:[]
};

const itemReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.DELETE_ITEM:
      const updatedItems = state.items.filter(
        (item) => item.name !== action.payload
      );
       const updatedFilteredItems = state.filteredItems.filter(
         (item) => item.name !== action.payload
       );
      return {
        ...state,
        items: updatedItems,
        filteredItems: updatedFilteredItems,
      };
    case ActionTypes.SEARCH_ITEMS:
      return {
        ...state,
        filteredItems:action.payload,
      };
    case ActionTypes.VIEW_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.DELETE_ITEMS:
      return {
        ...state,
        items: [],
      };
    case ActionTypes.VIEW_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.VIEW_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default itemReducer;
