function CheckWeather(){
    return <div className={'checkPage'}>
        <h1>Check Local Weather</h1>
        <p>Enter a location and select a date to get instant and accurate forecasts.</p>

        <div className="form-container">
            <input type="text" placeholder="New York City"/>
            <input type="date" value="2025-10-04"/>
            <button>Get Weather</button>
        </div>
    </div>
}
export default CheckWeather;