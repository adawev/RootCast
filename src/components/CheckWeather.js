import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getWeather } from "../store/reducers/Weather";

function CheckWeather({ getWeather, weathercheck, loading }) {
    const { handleSubmit, register, setValue } = useForm();
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    // City listni yuklash
    useEffect(() => {
        fetch("/city.list.json")
            .then((res) => res.json())
            .then((data) => setCities(data))
            .catch((err) => console.error("City list load error:", err));
    }, []);

    // Form submit
    const onSubmitForm = (data) => {
        const { city, date } = data;
        if (!city) return;
        getWeather({ city, date });
    };

    // City input filter
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

    // Card data
    const cardData =
        weathercheck && !weathercheck.error
            ? weathercheck
            : null;

    return (
        <div className="checkPage">
            <h1>Check Local Weather</h1>
            <p>
                Enter a location and select a date to get instant and accurate
                forecasts.
            </p>

            {/* Form */}
            <div className="form-container">
                <form
                    className="form-control"
                    id="CheckWeatherForm"
                    onSubmit={handleSubmit(onSubmitForm)}
                >
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
                    <button type="submit" form="CheckWeatherForm">Get Weather</button>
                </form>
            </div>

            {/* Loading */}
            {loading && <div className="loading">Loading...</div>}

            {/* Error */}
            {weathercheck?.error && (
                <div className="error">{weathercheck.error}</div>
            )}

            {/* Weather Card */}
            {cardData && (
                <div className="weather-card">
                    <div className="weather-header">
                        <div className="weather-location">
                            {cardData.location?.name}, {cardData.location?.country || ""}
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
                        <div className="weather-temp">{Math.round(cardData.weather.temp)}°C</div>
                        <div className="weather-desc">
                            {cardData.weather.description} ({cardData.weather.main})
                        </div>
                    </div>

                    <div className="weather-details">
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/481/481460.png" alt="wind" />
                            <span>Wind: {cardData.weather.windSpeed} m/s</span>
                        </div>
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/414/414974.png" alt="humidity" />
                            <span>Humidity: {cardData.weather.humidity}%</span>
                        </div>
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="pressure" />
                            <span>Pressure: {cardData.weather.pressure} hPa</span>
                        </div>
                        <div className="detail-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="feels like" />
                            <span>Feels like: {cardData.weather.feelsLike}°C</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    weathercheck: state.weathercheck.data,
    loading: state.weathercheck.loading,
});

export default connect(mapStateToProps, { getWeather })(CheckWeather);
