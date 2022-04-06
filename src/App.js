import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import MovieCard from './components/MovieCard'
import './styles/App.css'


const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieCard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
