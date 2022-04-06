import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ({ moviesState }) => {
  return { moviesState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
  useEffect(() => {
    console.log(props)
    props.fetchMovies()
  }, [])

  return (
    <div>
      {props.moviesState.movies.map((movie) => (
        <ul key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </ul>
      ))}
    </div>


  )



}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)