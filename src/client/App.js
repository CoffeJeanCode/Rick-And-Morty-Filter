import React from 'react'
import Filter from './components/Filter'
import ListCharacters from './components/ListCharacters'

export default function App() {
  App.displayName = 'App'

  return (
    <>
      <nav className="nav">
        <h1>SSR Rick and Morty</h1>
      </nav>
      <Filter />
      <ListCharacters />
    </>
  )
}
