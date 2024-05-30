import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body: any, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/users/register", body);
      return response.data;
    } catch (error) {
      if (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(
          (error as { response?: { data?: any }; message?: string }).response
            ?.data ||
            (error as { response?: { data?: any }; message?: string }).message
        );
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (body: any, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/users/login", body);
      return response.data;
    } catch (error) {
      if (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(
          (error as { response?: { data?: any }; message?: string }).response
            ?.data ||
            (error as { response?: { data?: any }; message?: string }).message
        );
      }
    }
  }
);
