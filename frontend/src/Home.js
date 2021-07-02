import './App.css';
import { useHistory } from "react-router-dom";
import Footer from './components/Footer';

const Home = () => {
    const history = useHistory();
    const handleStart = () => {
        history.push("/beers");
    }
    return (
        <div className="App">
            <header className="App-header"><br></br>
            <br></br>
                <h2>Welcome to The Drunken Doozy!</h2>
                <img src={"https://img2.pngio.com/drinking-beer-png-free-drinking-beerpng-transparent-images-beer-toast-png-3529_2812.png"} className="App-logo" alt="logo" />
                <p>To get started click on the "Beers" tab in the nav bar to view a list of beers with their ingredients, along with the option to add that beer to your favorited beers list.</p>
                <p>Click on the "Favorited Beers" tab in the nav bar to view your favorited beers list.</p>
                <p>Click on the "Random Beer" tab in the nav bar to genrate a random beer, along with the option to add it to your favorited beers list.</p>
                <button onClick={handleStart}>Get Started</button>
                <br></br>
            </header>
            < Footer/>
        </div>
        );
    }

export default Home;
