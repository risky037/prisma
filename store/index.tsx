import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import taskReducer from "./taskSlice";

// Buat dulu store-nya
const store = configureStore({
  reducer: { tasks: taskReducer },
});

// Baru setelah itu buat tipe-tipe
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Provider Redux
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

// Export store untuk akses di tempat lain (optional tapi sering dibutuhkan)
export { store };
