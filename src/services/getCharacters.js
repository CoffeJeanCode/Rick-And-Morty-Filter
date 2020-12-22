import axios from 'axios'

export const getCharacters = async () => {
  const page = Math.round(Math.random() * 34)
  const {
    data: { results },
  } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
  return results
}
