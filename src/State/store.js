import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer";
import customerProductReducer from "./Product/Reducer";
import productReducer from "./Product/Reducer";
import {cartReducer} from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";
import ReviewReducer from "./Review/Reducer";
//import adminOrderReducer from "./Orders/Reducer";
// import ReviewReducer from "./Review/Reducer";





const rootReducers=combineReducers({

    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    review:ReviewReducer,

    // admin
    adminsProduct:productReducer,
    adminOrder:adminOrderReducer


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))