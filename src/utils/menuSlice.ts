import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type Info = {
  name: string;
  cuisines: string[];
  id: string;
  costForTwo: string;
  cloudinaryImageId: string;
};
interface MenuState {
  items: Info[];
}
const initialState: MenuState = {
  items: [],
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Info>) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = menuSlice.actions;
export default menuSlice.reducer;
