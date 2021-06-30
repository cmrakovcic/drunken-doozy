import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { addUser, addUserBE } from '../reducers/actions';
// import { withRouter } from "react-router";

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
        // this.props.addUser(this.state)
        // this.props.addUserBE(this.state.user)
        this.props.history.push(`/home`)
      }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="user">Email</label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        email="user"
                        value={this.user}
                        autoComplete="off"
                        id="user"
                    />
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            password="password"
                            value={this.user}
                            autoComplete="off"
                            id="user"
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
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
// export default connect(null, { addUserBE, addUser, mapDispatchToProps })(Signup);