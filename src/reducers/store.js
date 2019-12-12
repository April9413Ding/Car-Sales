import { createStore } from "redux";
import { carReducer } from "./carReducer";

export const store = createStore(carReducer)