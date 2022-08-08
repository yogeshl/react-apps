import React, { useContext, useState } from 'react';

import GithubContext from './../../context/github/githubContext';
import AlertContext from './../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };


    // If used as function instead of arrow function,then this will be null for this.onSubmit.
    // Then invoking code should be onSubmit={this.onSubmit.bind(this)}
    // onSubmit (e) {
    //     e.preventDefault();
    //     console.log(this.state.text);
    // };

    const onSubmit = (e) => {
        e.preventDefault();

        if(text === ''){
            alertContext.setAlert('Please enter search text','light');
        }
        else{
            githubContext.searchUsers(text);
            setText('');
        }
    };
        
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users"
                    value={text} 
                    onChange={onChange}/>
                
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block" />
            </form>

            {githubContext.users.length > 0 &&  <button 
                className="btn btn-light btn-block"
                onClick={githubContext.clearUsers}
            >Clear</button>
        }

        </div>
    )
    
}

export default Search
