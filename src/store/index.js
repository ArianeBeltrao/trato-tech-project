import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'; // Importe combineReducers
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use o storage padrão do navegador
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from "./reducers/busca";

// Configuração de persistência
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  categorias: categoriasSlice,
  itens: itensSlice,
  carrinhoCompras: carrinhoSlice,
  busca: buscaSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use o reducer persistido
});

export const persistor = persistStore(store); // Exporte o persistor

export default store;
