import './App.css'
import "./style/page.css"
import NavigationBar from "./components/navBar"
import Welcome from "./components/welcome"
import Movie from "./components/movie"
import TvList from './components/tv'

function App() {
  return (
    <div>
      {/* Home section */}
      <div className='homeBG'>
        <NavigationBar />
        <Welcome />
      </div>
      {/* Home section end */}
      {/* Movie section */}
      <div className='movieBG'>
        <Movie />
      </div>
      <div className='animeBG'>
        <TvList />
      </div>
      {/* Movie section end*/}
    </div>
  );
}

export default App
