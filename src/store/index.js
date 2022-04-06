import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'
import MoviesReducer from './reducers/MoviesReducer'


const store = createStore(
  combineReducers({ 
  movieState: MovieReducer,
  moviesState: MoviesReducer }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store