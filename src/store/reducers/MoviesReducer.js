const { GET_MOVIES } = require('../types')

const iState = {
  movies: []

}

const MoviesReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}
export default MoviesReducer