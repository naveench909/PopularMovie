import React  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import Pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

// import Components
import Navbar from './components/Navbar';
import SingleMovieDetails from './components/SingleMovieDetails'

//import CSS
import './App.css';


function App() {

  return (
    <Router>
        <Navbar />
        <Switch> 
          <Route exact path="/PopularMovie">
              <Home />
          </Route>
          <Route  path="/about">
              <About />
          </Route>
          <Route  path="/singlemovie/:id">
              <SingleMovieDetails />
          </Route>
          <Route  path="*">
              <Error />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
