import { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { LocationContext } from "./LocationContext";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState();
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [weatherError, setWeatherError] = useState();
    const [unit, setUnit] = useState();

    const location = useContext(LocationContext);

    // Setters  & Getters

    const toggleUnit = () => {
        if (unit === "C") {
            setUnit("F");
            localStorage.setItem("unit", "F");
        } else {
            setUnit("C");
            localStorage.setItem("unit", "C");
        }
    };

    // Fetch weather

    const fetchWeather = async (lat, lon) => {
        if (
            (!weather && location) ||
            (weather && Date.now() - weather.fetchedOn > 600000) ||
            (weatherError && Date.now() - weatherError.fetchedOn > 1000)
        ) {
            setWeatherError(null);
            setWeatherLoading(true);
            try {
                const { data } = await axios.get("/api/weather", {
                    params: {
                        lat,
                        lon,
                    },
                });

                /* const data = {
                    bruh: "OOF",
                    current: {
                        temp: 4,
                        humidity: 62,
                        wind_speed: 6,
                        rain: {
                            "1h": 0.32,
                        },
                        weather: {
                            main: "Rain",
                            icon: "10d",
                        },
                    },
                }; */

                setWeather({ ...data, fetchedOn: Date.now() });
            } catch (error) {
                setWeatherError({ ...error, fetchedOn: Date.now() });
            }
            setWeatherLoading(false);
        }
    };

    // Set unit on load

    useEffect(() => {
        setUnit(localStorage.getItem("unit") || "C");
    }, []);

    return (
        <WeatherContext.Provider
            value={{
                weather,
                fetchWeather,
                weatherLoading,
                weatherError,
                unit,
                setUnit: toggleUnit,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};
