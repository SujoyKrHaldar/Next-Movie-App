import { createContext, useReducer, useEffect } from "react";

const initialState = {
  favourites: [],
  watched: [],
};

const GlobalContext = createContext(initialState);

const ContextProvider = () => {
  return <GlobalContext.Provider>{Children}</GlobalContext.Provider>;
};
