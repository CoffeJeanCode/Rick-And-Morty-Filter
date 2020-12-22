import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import StoreProvider from './store/store'
import './styles/normalize.css'
import './styles/index.css'

ReactDom.hydrate(
  <StoreProvider characters={window.__data__}>
    <App />
  </StoreProvider>,
  document.querySelector('#app')
)
