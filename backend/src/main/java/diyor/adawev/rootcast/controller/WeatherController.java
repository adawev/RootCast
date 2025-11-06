package diyor.adawev.rootcast.controller;


import diyor.adawev.rootcast.dto.LocationDto;
import diyor.adawev.rootcast.dto.WeatherResponse;
import diyor.adawev.rootcast.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController

@RequestMapping("/api/weather")
public class WeatherController {


    private final WeatherService weatherService;

    @Autowired
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public WeatherResponse getWeather(
            @RequestParam String city,
            @RequestParam(required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date
    ) {
        try {
            LocationDto location = weatherService.geocodeCity(city);
            if (location == null) {
                throw new RuntimeException("❌ Shahar topilmadi: " + city);
            }

            double lat = location.lat();
            double lon = location.lon();
            LocalDate today = LocalDate.now();

            WeatherResponse response;
            if (date == null || date.isEqual(today)) {
                response = weatherService.fetchWeather(city, lat, lon);
            } else if (date.isBefore(today)) {
                response = weatherService.fetchWeatherByDate(city, lat, lon, date);
            } else {
                response = weatherService.fetchFutureWeather(city, lat, lon, date);
            }

            return response;

        } catch (Exception e) {
            throw new RuntimeException("❌ Xatolik yuz berdi: " + e.getMessage());
        }
    }
}
