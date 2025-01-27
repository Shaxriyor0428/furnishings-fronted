import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearStorage, getStorage, saveStorage } from "../../utils";

export interface UserState {
  value: {
    id: number | null;
    email: string;
  };
}

const storedUser = JSON.parse(getStorage("user") || "null");

const initialState: UserState = {
  value: storedUser || { id: null, email: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<{ email: string; id: number }>) => {
      const { id, email } = action.payload;
      if (id && email) {
        state.value = action.payload;
        saveStorage("user", action.payload);
      } else {
        console.error("Invalid user data:", action.payload);
      }
    },
    clearUser: (state) => {
      state.value = { id: null, email: "" };
      clearStorage("user");
    },
  },
});

export const { saveUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
