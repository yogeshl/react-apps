import React, { Component } from 'react';
import { useParams } from 'react-router';

class User extends Component {

    componentDidMount(){
        //Not working in React V6.
        //this.props.getUser(this.props.match.params.login);
        this.props.getUser('yogeshl');
    }

    render() {
        const { name, avatar_url, location, bio, blog, 
            login, html_url,followers, following, public_repos,
            public_gists, hireable } = this.props.user;

        const { loading } = this.props;

        return (
            <div>
                {name}
            </div>
        );
    }
}


export default User;


