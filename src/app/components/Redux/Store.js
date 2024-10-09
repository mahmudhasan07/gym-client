'use client'
import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "./ReduxFuncation";

export const store = configureStore({
    reducer: { Auth : usersSlice},
  })
  