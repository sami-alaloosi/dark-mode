import React, {Component} from 'react'



export default class User extends Component {
    
    render(){
        const {name, avatar_url, login, public_repos, followers, following, html_url} = this.props.user
        return (
            <div className="flex">
            <div className="center">
            <div className="grid">
                <div>
                <img src={avatar_url} alt={`${login} avatar`}/>
                </div>

                <div>
                <h1 className="divs">Name: {name}</h1>
                <div className="divs">Username: {login} </div>
                <div className="divs">Public Respos: {public_repos}</div>
                <div className="divs">Followers: {followers}</div>
                <div className="divs">Following: {following}</div>
                <a className="divs" href={html_url} target="_blank">GitHub</a>
                </div>
            
            </div>
            </div>
            </div>
        )
    }
}