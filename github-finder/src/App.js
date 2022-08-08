import React, { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Home from './components/Pages/Home';
import User from './components/users/User';

import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

    return (
      <GithubState>
        <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alert />

              <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/about" element={ <About /> } />
                <Route exact path="/user/:login" element ={ <User /> } />
                <Route path="*" element={ <NotFound />} />
              </Routes>
            </div>
        </div>
        </Router>
        </AlertState>
      </GithubState>
    );
  
}

export default App;