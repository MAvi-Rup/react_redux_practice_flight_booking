import { createStore } from "redux";
import bookingsReducer from "./bookings/reducer";

const store = createStore(bookingsReducer)

export default store;