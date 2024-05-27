import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    email: "",
    name: "",
    sex: "",
    born: "",
    role: 0,
    image: "",
  },
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  //초기값
  initialState,

  //값 변경
  reducers: {},

  //함수실행
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
