import React from 'react';
import {Fragment} from 'react';
import axios from 'axios';


class Login extends React.Component{
    state = {
        username: '',
        password: '',
    };

    // handle Inputs
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value  });
    }

    handleSubmit = async event => {
        event.prevenDefault();
        const {username, password} = this.state;

        if(username && password) {
            try{
                const endpoint = "http://localhost:5000/api/auth/login"
                const result = await axios.post(endpoint, {
              username,
              password,
          })         
            console.log('LOGIN result is ', result);
            } catch(err) {
                console.log(err);
            }
        } else {
            console.log("blank creds at login");
            this.setState({
                username: '',
                password: ''
            })
            return <h1> Enter all login creds !!!</h1>
        }

    }


    render() {
        return (
            <Fragment>
                <h3> Login Here </h3>

                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label> Name</label>
                        <input
                            name = "username"
                            id = "username"
                            value = {this.state.username}
                            type = "text"
                            onChange = {this.handleInputChange}
                        />   
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        />
                    </div>
            
                    <div>
                        <button type="submit"> Sign In - LOGIN !!! </button>
                    </div>
            
                </form>
    
            </Fragment>

        )
    }
}

export default Login;