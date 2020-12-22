import React, { useCallback } from 'react'
import { useStore } from '../store/store'

export default function Filter() {
  Filter.displayName = 'Filter'

  const [store, dispatch] = useStore()

  const handleChange = useCallback(
    ({ target: { value } }) => {
      dispatch({ type: 'SEARCH_CHARACTER', payload: { query: value } })
    },
    [store.query]
  )

  return (
    <div className="filter">
      <input
        onChange={handleChange}
        value={store.query}
        type="text"
        aria-placeholder="Search a character"
        placeholder="Search a character"
      />
    </div>
  )
}
