import React, { Component } from 'react';
import '../App.css';
// import { connect } from 'react-redux';
// import { addUser, addUserBE } from '../reducers/actions';

class Signup extends Component {

    state = {
        user: ""
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.email]: evt.target.value
        })
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
                    <label htmlFor="user"></label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        email="user"
                        value={this.state.user}
                        autoComplete="off"
                        id="user"
                        placeholder="Email"
                    />
                    <div>
                    <label htmlFor="password"></label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        password="password"
                        value={this.state.user}
                        autoComplete="off"
                        id="user"
                        placeholder="Password"
                    />
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                    <button>Submit</button>
                </form>
                </header>
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