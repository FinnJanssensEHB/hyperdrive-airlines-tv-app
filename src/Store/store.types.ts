import { Store } from "redux";
import { ShowState } from "./Shows/InitialState";

export interface StoreState extends Store {
  shows: ShowState;
}
