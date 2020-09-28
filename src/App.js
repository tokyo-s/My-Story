import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Posts from './components/pages/Postspage'
import Projects from './components/pages/ProjectsPage'
import SnaeksAndLadders from './components/pages/Snake&Ladders'
import Chess from './components/pages/Chess'
import Flappy from './components/pages/FlappyBirdAI'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/projects/0' exact component={SnaeksAndLadders} />
          <Route path='/projects/1' exact component={Chess} />
          <Route path='/projects/2' exact component={Flappy} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
