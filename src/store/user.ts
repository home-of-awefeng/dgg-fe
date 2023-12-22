import { USER_ROLE_ENUM } from "@/constants/user";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export interface UserStateProps {
  userId: string;
  name: string;
  phone: string;
  role: USER_ROLE_ENUM.GUEST;
}

type UserState = keyof UserStateProps;

const initState = (): UserStateProps => {
  return {
    userId: "",
    name: "",
    phone: "",
    role: USER_ROLE_ENUM.GUEST,
  };
};
const userSlice = createSlice({
  name: "user",
  initialState: initState(),
  reducers: {
    init(state) {
      const initS = initState();
      const keys = Object.keys(state) as UserState[];
      keys.forEach((key) => {
        state[key] = initS[key] || state[key];
      });
    },
    setUserInfo(state, action: PayloadAction<Partial<UserStateProps>>) {
      const inputState = action.payload;
      const keys = Object.keys(state) as UserState[];
      keys.forEach((key) => {
        state[key] = inputState[key] || state[key];
      });
    },
  },
});

export const { init, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
