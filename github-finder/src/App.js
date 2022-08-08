import React, { Fragment, useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Users from './components/users/Users';
import User from './components/users/User';
import Repos from './components/repos/Repos';
import Search from './components/users/Search';
import About from './components/Pages/About';
import axios from 'axios';


import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() =>{

     async function fetchUsers(){
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      setUsers(res.data);
      setLoading(false);
     };
     fetchUsers();
      
  },[]);

  

  //Get single Github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUser(res.data);
    setLoading(false);
  };

  //Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({msg, type});

    setTimeout(() => setAlert(null), 5000);
  };

  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setRepos(res.data);
    setLoading(false);
  };


    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar />
            <div className='container'>
              <Alert alert={alert} />

              <Routes>
        
                <Route exact path="/" element={
                  <Fragment>

                    <Search 
                        clearUsers={clearUsers} 
                        showClear={ users.length > 0 ? true: false } 
                        setAlert={showAlert} />

                    <Users loading={loading} users={users} />

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
                  <User 
                        getUser={getUser}  
                        getUserRepos={getUserRepos}
                        user={user} 
                        repos={repos}
                        loading={loading} />
                } />
        
              </Routes>
            </div>
        </div>
        </Router>
      </GithubState>
    );
  
}

export default App;