import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function CheckWeather() {
    const { handleSubmit, register, setValue } = useForm();
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        fetch("/city.list.json")
            .then(res => res.json())
            .then(data => setCities(data));
    }, []);

    const onSubmitForm = (data) => {
        console.log("Tanlangan ma'lumot:", data);
    };

    const handleCityChange = (e) => {
        const val = e.target.value.toLowerCase();

        if (!val) {
            setFilteredCities([]);
            return;
        }

        const results = cities
            .filter(c => c.name.toLowerCase().startsWith(val))
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

                    <button type="submit" form="CheckWeatherForm">Get Weather</button>
                </form>
            </div>
        </div>
    );
}

export default CheckWeather;
