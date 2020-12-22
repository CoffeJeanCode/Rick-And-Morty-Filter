import React, { createContext, useContext, useReducer } from 'react'
const intialState = {
  characters: [],
  query: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_CHARACTER':
      const { query } = action.payload
      return { ...state, query }
    default:
      return state
  }
}

const Store = createContext(intialState)

export const useStore = () => useContext(Store)

export default function StoreProvider({ children, characters }) {
  const store = useReducer(reducer, { ...intialState, characters })
  return <Store.Provider value={store}>{children}</Store.Provider>
}
