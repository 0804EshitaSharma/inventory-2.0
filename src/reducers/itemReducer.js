import { ActionTypes } from "../constants/actionTypes";

export const initialState = {
  items: [],
  filteredItems: [],
  addedItems: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items],
        addedItems: [action.payload],
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
    case ActionTypes.UPDATE_ITEM:
      let itemToUpdate = state.items.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            price: action.payload.updatedData.price,
            description: action.payload.updatedData.description,
          };
        }
        return item;
      });

      return {
        ...state,
        items: itemToUpdate,
      };
    case ActionTypes.SEARCH_ITEMS:
      return {
        ...state,
        filteredItems: action.payload,
      };
    case ActionTypes.FILTER_ITEMS:
      if (action.payload.length === 0) {
        return {
          ...state,
          filteredItems: [],
        };
      } else {
        return {
          ...state,
          filteredItems: action.payload,
        };
      }

    case ActionTypes.VIEW_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.DELETE_ITEMS:
      return {
        ...state,
        items: [],
        filteredItems: [],
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
