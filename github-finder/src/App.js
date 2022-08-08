import React, { Fragment,  useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/Pages/About';
import axios from 'axios';


import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {


  useEffect(() =>{

     async function fetchUsers(){
      //setLoading(true);
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      //setUsers(res.data);
      //setLoading(false);
     };
     fetchUsers();
      
  },[]);

  
    return (
      <GithubState>
        <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alert />

              <Routes>
        
                <Route exact path="/" element={
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                } />

                <Route exact path="/about" element={ <About /> } />
                {/* Not Working in React V6 */}
                {/* <Route exact path="/user/:login" element ={ (props) => 
                  <User 
                      {...props}
                        getUser={this.getUser}  
                        user={user} 
                        loading={loading} />
                } /> */}

                <Route exact path="/user/:login" element ={ 
                  <User />
                } />
        
              </Routes>
            </div>
        </div>
        </Router>
        </AlertState>
      </GithubState>
    );
  
}

export default App;