import { auth } from "./actions";
import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from "remote-redux-devtools";

import logger from "redux-logger";

const store = configureStore({
  reducer: { auth },
  devTools: false,
  enhancers: [devToolsEnhancer({ realtime: true })],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// store.subscribe(() => console.log(store.getState()));

export default store;
