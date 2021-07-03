import '../App.css';
import { useHistory } from "react-router-dom";

const GenerateRandom = () => {
    const history = useHistory();
    const handleRandom = () => {
        history.push("/beers");
    }
    return (
        <div className="App">
            <header>
                <button onClick={handleRandom}>Generate Random</button>
            </header>
        </div>
    );
}

export default GenerateRandom;
