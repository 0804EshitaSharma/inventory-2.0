import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/*Learned from https://www.youtube.com/watch?v=fiesH6WU63I */
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
export const getItemsByManufacturerAsync = createAsyncThunk(
  "items/getItemsByManufacturerAsync",
  async (name) => {
    const response = await fetch(`/${name}`);

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
    return response.data;
  }
);

export const updateItemAsync = createAsyncThunk(
  "items/updateItemAsync",
  async (updatedItem) => {
    const response = await axios.patch(
      `/update/${updatedItem.id}`,
      updatedItem.data
    );
    return response.data;
  }
);
export const deleteItemAsync = createAsyncThunk(
  "items/deleteItemAsync",
  async (id) => {
    const response = await axios.delete(`/item/${id}`);
    return id;
  }
);
/*Learned from https://redux-toolkit.js.org/tutorials/quick-start */
export const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    filteredItems: [],
    selectedItems: []
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
    updateItem: (state, action) => {
      const updatedItem = action.payload;
      const index = state.items.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state.items[index] = updatedItem;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsAsync.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(deleteItemAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item._id == id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    });
    builder.addCase(addItemAsync.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(updateItemAsync.fulfilled, (state, action) => {
      const updatedItem = action.payload;
      const index = state.items.findIndex(
        (item) => item._id === updatedItem._id
      );
      if (index !== -1) {
        state.items[index] = updatedItem;
      }
    });
    builder.addCase(filterItemsAsync.fulfilled, (state, action) => {
      state.filteredItems = action.payload;
    });
    builder.addCase(searchItemsAsync.fulfilled, (state, action) => {
      state.filteredItems = action.payload;
    });
    builder.addCase(getItemsByManufacturerAsync.fulfilled, (state, action) => {
      state.selectedItems = action.payload;
    });
  },
});
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
export const selectedAllItems = (state) => state.items.selectedItems;
export default itemSlice.reducer;
