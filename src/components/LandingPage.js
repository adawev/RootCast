function LandingPage() {
    return <div>
        <section class="hero">
            <div class="hero-content">
                <h1>Real time, real weather</h1>
                <p>Instant and accurate forecasts at your fingertips. Get real-time weather updates from anywhere in the world.</p>
                <button class="cloud-button">
                    <span class="cloud-icon">☁️</span>
                    Check Weather
                </button>
            </div>
        </section>

        <section class="info-section">
            <div class="info-content">
                <div class="info-text">
                    <h2>Real-Time Weather Data</h2>
                    <p>Get instant access to accurate weather information for any location around the globe. Our advanced forecasting system provides detailed data including temperature, humidity, wind speed, and more.</p>
                    <p>Whether you're planning your day or preparing for a trip, we've got you covered with reliable weather insights.</p>
                    <ul class="info-features">
                        <li>Accurate 7-day forecasts</li>
                        <li>Hourly weather updates</li>
                        <li>Severe weather alerts</li>
                        <li>Global location coverage</li>
                    </ul>
                </div>

                <div class="info-card">
                    <div class="card-intro">
                        <h3>Live Weather Data</h3>
                        <p>See real-time weather conditions for any location</p>
                    </div>

                    <div class="location-header">
                        <h3 class="location-name">New York, USA</h3>
                        <span class="location-icon">📍</span>
                    </div>

                    <div class="weather-main">
                        <div class="temperature">22°C</div>
                        <div class="condition">Partly Cloudy</div>
                    </div>

                    <div class="weather-details">
                        <div class="detail-item">
                            <div class="detail-label">Humidity</div>
                            <div class="detail-value">68%</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Wind Speed</div>
                            <div class="detail-value">15 km/h</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Pressure</div>
                            <div class="detail-value">1013 hPa</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Visibility</div>
                            <div class="detail-value">10 km</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features">
            <h2 class="features-title">Why Choose Us</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">🌍</div>
                    <div class="feature-title">Global Coverage</div>
                    <div class="feature-text">Access accurate weather data from thousands of locations around the world</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">⏱️</div>
                    <div class="feature-title">Real-time Updates</div>
                    <div class="feature-text">Get the latest forecasts updated every minute with precise accuracy</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🎨</div>
                    <div class="feature-title">Simple & Clean Design</div>
                    <div class="feature-text">Beautiful minimalist interface that's intuitive and easy to navigate</div>
                </div>
            </div>
        </section>

    </div>
}
export default LandingPage;