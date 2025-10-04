import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getWeather } from "../store/reducers/Weather";

function CheckWeather({ getWeather, weathercheck }) {
    const { handleSubmit, register, setValue } = useForm();
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        fetch("/city.list.json")
            .then((res) => res.json())
            .then((data) => setCities(data));
    }, []);

    const onSubmitForm = (data) => {
        const { city, date } = data;
        if (!city) return;
        getWeather({ city, date });
    };

    const handleCityChange = (e) => {
        const val = e.target.value.toLowerCase();
        if (!val) return setFilteredCities([]);
        const results = cities
            .filter((c) => c.name.toLowerCase().startsWith(val))
            .slice(0, 10);
        setFilteredCities(results);
    };

    const handleSelectCity = (city) => {
        setValue("city", city.name);
        setFilteredCities([]);
    };

    return (
        <div className="checkPage">
            <h1>Check Local Weather</h1>
            <p>Enter a location and select a date to get instant and accurate forecasts.</p>

            <div className="form-container">
                <form className="form-control" id="CheckWeatherForm" onSubmit={handleSubmit(onSubmitForm)}>
                    <div style={{ position: "relative" }}>
                        <input
                            type="text"
                            placeholder="Enter city"
                            {...register("city")}
                            onChange={handleCityChange}
                            autoComplete="off"
                        />
                        {filteredCities.length > 0 && (
                            <div className="autocomplete-list">
                                {filteredCities.map((c) => (
                                    <div
                                        key={c.id}
                                        className="autocomplete-item"
                                        onClick={() => handleSelectCity(c)}
                                    >
                                        {c.name}, {c.country}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <input type="date" className="date-input" {...register("date")} />
                    <button type="submit" form="CheckWeatherForm">
                        Get Weather
                    </button>
                </form>
            </div>
            {!weathercheck || !weathercheck.main ? (
                null
            ) : (
                <div className="weather-card">


                    <div className="weather-header">
                        <div className="weather-location">
                            {weathercheck.name}, {weathercheck.sys?.country}
                        </div>
                        <div className="weather-date">
                            {new Date().toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                            })}
                        </div>
                    </div>

                    <div className="weather-main">
                        <div className="weather-icon">
                            <img
                                src={`https://openweathermap.org/img/wn/${weathercheck.weather[0].icon}@2x.png`}
                                alt="weather icon"
                            />
                        </div>
                        <div className="weather-temp">
                            {Math.round(weathercheck.main.temp)}°C
                        </div>
                        <div className="weather-desc">
                            {weathercheck.weather[0].description}
                        </div>
                    </div>

                    <div className="weather-details">
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/481/481460.png" alt="wind" />
                            <span>Wind: {weathercheck.wind.speed} m/s</span>
                        </div>
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/414/414974.png" alt="humidity" />
                            <span>Humidity: {weathercheck.main.humidity}%</span>
                        </div>
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="sunrise" />
                            <span>
                                    Sunrise:{" "}
                                {new Date(weathercheck.sys.sunrise * 1000).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                                </span>
                        </div>
                        <div className="detail-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                                alt="sunset"
                                className="flip"
                            />
                            <span>
                                    Sunset:{" "}
                                {new Date(weathercheck.sys.sunset * 1000).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                                </span>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

const mapStateToProps = (state) => ({
    weather: state.weathercheck,
});
export default connect(mapStateToProps, { getWeather })(CheckWeather);
