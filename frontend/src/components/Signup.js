import React, { Component } from 'react';
import '../App.css';
// import { connect } from 'react-redux';
// import { addUser, addUserBE } from '../reducers/actions';
import Footer from './Footer';

class Signup extends Component {

    state = {
        user: ""
    }

    handleChange = (evt) => {
        this.setState ({ [evt.target.name]: evt.target.value });
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addUser(this.state)
        this.props.addUserBE(this.state.user)
        this.props.history.push(`/home`)
      }

    render() {
        return (
            <div className="App">
                <header className="App-header">        
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        autoComplete="off"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                    <button>Submit</button>
                </form>
                </header>
                < Footer/>
            </div>

        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         users: () => { dispatch(addUserBE) }
//     }
// }

export default Signup;
// export default connect(null, { addUserBE, addUser, mapDispatchToProps } )(Signup);