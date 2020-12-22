import React from 'react'
import { useStore } from '../store/store'

const CharacterItem = React.memo((character) => (
  <li className="character">
    <img src={character.image} alt={character.name} />
    <h2>{character.name}</h2>
  </li>
))

export default function ListCharacters() {
  const [store] = useStore()
  return (
    <ul className="character__list">
      {store.characters
        .filter((character) =>
          character.name
            .toLowerCase()
            .includes(store.query.trim().toLowerCase())
        )
        .map((character) => (
          <CharacterItem key={character.id} {...character} />
        ))}
    </ul>
  )
}
