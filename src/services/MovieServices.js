import Client from './index'
const API_KEY = process.env.REACT_APP_TMDB_KEY


export const GetMovies = async () => {
  // return async (dispatch) => {
  try {
    const res = await Client.get(`/discover/movie/?api_key=2a79d11b3ec216ba4a0c8e5d868a662e`)
    
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (id) => {
  // return async (dispatch) => {
  try {
    const res = await Client.get(
      `/movie/${id}?api_key=2a79d11b3ec216ba4a0c8e5d868a662e&languages=en-US`)

    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}