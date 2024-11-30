import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const appStore = configureStore({
  reducer: rootReducer,
});
export default appStore;
