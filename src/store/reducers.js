import { combineReducers } from "redux";
import Layout from "./reducers/layoutReducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { LoginReducer } from "./reducers/loginReducers";
import { RegisterReducer } from "./reducers/registerReducers";
import { persistRrducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  Layout: Layout,
  login: LoginReducer,
  register: RegisterReducer,
});
export default persistReducer(persistConfig, rootReducer);
