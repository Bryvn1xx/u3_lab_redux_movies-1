
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovie } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieCard: (id) => dispatch(LoadMovie(id))
  }
}
const MovieCard = (props) => {
  console.log(props)

  let { id } = useParams()

  useEffect(() => {

    console.log(props)
    props.fetchMovieCard(id)
  }, [id])

  return (

    <div>
    <img
      src={`https://image.tmdb.org/t/p/w500${props.movieState.details.poster_path}`}
      alt={'Movie Poster'}
    />
    <h3>{props.movieState.details.title}</h3>
    <p>{props.movieState.details.overview}</p>
    {/* {console.log(props.detailsState.details.title)} */}
  </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
