const { GET_MOVIE_DETAILS } = require('../types')

const iState = {
  details: []
}

const MovieReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, details: action.payload }
    default:
      return { ...state }
  }
}

export default MovieReducer