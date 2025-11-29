import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CustomUser } from "../../types/type";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const getAccessTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? accessToken : null;
};

interface AuthState {
  user: CustomUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: getUserFromLocalStorage(),
  accessToken: getAccessTokenFromLocalStorage(),
  isAuthenticated: !!getAccessTokenFromLocalStorage(),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { setUser, setAccessToken, setIsAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
