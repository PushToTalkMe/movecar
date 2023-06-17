import { createStore, combineReducers } from "redux";
import { listCarsReducer } from "./reducers/list_cars_reducer";
import { settingsReducer } from "./reducers/settings_reducer";

const rootReducer = combineReducers({
  listCarsReducer,
  settingsReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
