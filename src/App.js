import { useState } from "react";
import axios from "axios";
import Data from "./components/Data";
import Start from "./components/Start";

function App() {
    const [input, setInput] = useState([]);
    const [country, setCountry] = useState(null);

    const searchWeather = () => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=de49896da8ce6732b2a8a73e75c282bc&units=metric`
            )
            .then((response) => {
                setCountry(response);
                console.log(response);
            })
            .catch(() => {
                alert(`
ERROR! 
Place does not exist. Please input a valid location.`);
            });
    };

    const inputCountry = (event) => {
        const vrijednost = event.target.value;
        setInput(vrijednost);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        searchWeather();
        const emptyInput = (document.getElementById("myInput").value = "");
        setInput(emptyInput);
    };

    return (
        <div className="app">
            <form onSubmit={handleFormSubmit}>
                <div className="search">
                    <input
                        id="myInput"
                        type="text"
                        onChange={inputCountry}
                        placeholder="Search by location"
                    ></input>
                    <button type="submit">Search</button>
                </div>
            </form>
            {country && <Data value={country} /> ? (
                country && <Data value={country} />
            ) : (
                <Start />
            )}
        </div>
    );
}

export default App;
