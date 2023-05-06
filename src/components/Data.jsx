import day from "../images/static/day.svg";
import cloudy from "../images/pics/clouds.svg";
import rainy from "../images/pics/rain.svg";
import mist from "../images/pics/mist.svg";
import snow from "../images/pics/snow.svg";
import "../App.css";
import Start from "./Start";
import Info from "./Info";

export default function Data({ value }) {
    const location = value?.data?.name;
    const description = value?.data?.weather[0].description;
    const descriptionToShow =
        description.charAt(0).toUpperCase() + description.slice(1);

    return (
        <div className="weather_body">
            <div className="weather">
                <div className="location">
                    {location} {value?.data?.sys.country}
                </div>
                <div>
                    {value.data.weather[0].main === "Clear" ? (
                        <img src={day} alt="Sunny"></img>
                    ) : value.data.weather[0].main === "Clouds" ? (
                        <img src={cloudy} alt="Cloudy"></img>
                    ) : value.data.weather[0].main === "Rain" ? (
                        <img src={rainy} alt="Rainy"></img>
                    ) : value.data.weather[0].main === "Mist" ? (
                        <img src={mist} alt="Mist"></img>
                    ) : value.data.weather[0].main === "Fog" ? (
                        <img src={cloudy} alt="Fog"></img>
                    ) : value.data.weather[0].main === "Snow" ? (
                        <img src={snow} alt="Snow"></img>
                    ) : (
                        <Start />
                    )}
                </div>
                <div>{descriptionToShow}</div>
            </div>
            <Info value={value} />
        </div>
    );
}
