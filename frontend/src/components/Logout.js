// import React, { Component } from 'react';

// class Logout extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Logout</h2>
//             </div>
//         );
//     }
// }

// export default Logout;

import '../App.css';
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();
    const handleLogout = () => {
        history.push("/");
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleLogout}>Logout</button>
            </header>
        </div>
    );
}

export default Logout;
