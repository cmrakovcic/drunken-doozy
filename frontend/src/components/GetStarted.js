import '../App.css';
import { useHistory } from "react-router-dom";

const GetStarted = () => {
    const history = useHistory();
    const handleStart = () => {
        history.push("/beers");
    }
    return (
        <div className="App">
            <header>
                <button onClick={handleStart}>Get Started</button>
            </header>
        </div>
    );
}

export default GetStarted;