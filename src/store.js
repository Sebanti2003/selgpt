import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authreducer from './slices/authslice.js'
const percon={
    key:'root',
    version:1,
    storage
    
}
const rootreducers=combineReducers({
    authslice:authreducer
})
const persistreducer=persistReducer(percon,rootreducers);
const store=configureStore({
    reducer:persistreducer,
    middleware:midd=>midd({serializableCheck:false})
});
export default store;
export const persistor=persistStore(store);