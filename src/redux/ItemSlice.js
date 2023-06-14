import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItemsAsync = createAsyncThunk(
  "items/getItemsAsync",
  async () => {
    const response = await fetch("/items");

    if (response.ok) {
      const items = await response.json();
      return items;
    }
  }
);

export const filterItemsAsync = createAsyncThunk(
  "items/filterItemsAsync",
  async (itemCategory) => {
    const response = await fetch(`/filter/${itemCategory}`);
    return response.json();
  }
);
export const searchItemsAsync = createAsyncThunk(
  "items/searchItemsAsync",
  async (query) => {
    const response = await fetch(`/search/${query}`);
    return response.json();
  }
);

export const addItemAsync = createAsyncThunk(
  "items/addItemAsync",
  async (newItem) => {
    const response = await axios.post("/add", newItem);
    return response.json();
  }
);

export const deleteItemAsync = createAsyncThunk(
  "items/deleteItemAsync",
  async (id) => {
    const response = await axios.delete(`/item/${id}`);
    return id;
  }
);
export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    viewItems: (state, action) => {
      state.items = action.payload;
    },
    deleteItem: (state, action) => {
      state.items = state.items.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsAsync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(deleteItemAsync.fulfilled, (state, action) => {
      const id = action.payload;
      console.log(id);
      const index = state.items.findIndex((item) => item.id == id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    });
    // builder.addCase(addNewItem.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items.push(action.payload);
    // });
    // builder.addCase(deleteItemById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items.splice(action.payload, 1);
    // });
    // builder.addCase(filterItemsByCategory.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items = action.payload;
    // });
    // builder.addCase(searchItemsByQuery.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.items = action.payload;
    // });
  },
});

// Action creators are generated for each case reducer function
export const {
  viewItems,
  addItem,
  deleteItem,
  viewSingleItem,
  searchItems,
  filterItems,
  updateItem,
} = itemSlice.actions;

export const selectAllItems = (state) => state.items.items;
export default itemSlice.reducer;
