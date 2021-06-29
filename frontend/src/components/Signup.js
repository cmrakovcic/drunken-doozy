import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form>
                        <h2>Signup</h2>
                        <div>
                        <input type="text" name="email" placeholder="Email" />
                        <label htmlFor="email"></label>
                        </div>
                        <div>
                        <input type="password" name="password" placeholder="Password" />
                        <label htmlFor="password"></label>
                        </div>
                        <input type="submit" value="submit" />
                    </form>
                </header>
            </div>
        );
    }
}

export default Signup;