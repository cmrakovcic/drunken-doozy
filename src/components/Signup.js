import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <form>
                <h1>Signup</h1>
                <div>
                <input type="text" name="email" placeholder="Email" />
                <label htmlFor="email">Email</label>
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default Signup;