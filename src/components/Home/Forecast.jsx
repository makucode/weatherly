import React, { useContext } from "react";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import WindIcon from "../icons/WindIcon";
import { WeatherContext } from "../../contexts/WeatherContext";
import icons from "../../assets/icons";
import styles from "../../styles/components/Home/Forecast.module.scss";

const Forecast = () => {
    const { weather, unit } = useContext(WeatherContext);

    const forecastParallax = useParallax({
        speed: 5,
    });

    const getDate = (dt) => {
        return new Date(dt * 1000).toLocaleDateString("en", {
            weekday: "long",
        });
    };

    return (
        <section className={styles.Forecast}>
            {}
            <div className={styles.ForecastWeather} ref={forecastParallax.ref}>
                {weather &&
                    weather.daily.slice(0, 7).map((day, idx) => (
                        <div
                            key={day.sunrise}
                            className={
                                styles.ForecastWeatherItem +
                                " " +
                                (idx < weather.daily.length - 2
                                    ? styles.Divider
                                    : "")
                            }
                        >
                            <div className={styles.ForecastDate}>
                                {getDate(day.dt)}
                            </div>
                            <div className={styles.ForecastIcon}>
                                <Image
                                    src={icons[day.weather[0].icon]}
                                    alt="Weather Icon Illustration"
                                    layout="responsive"
                                />
                            </div>
                            <div className={styles.ForecastItemTemp}>
                                <h3>
                                    {unit === "C"
                                        ? Math.round(day.temp.max)
                                        : Math.round(day.temp.max * 1.8 + 32)}
                                    ° {unit}
                                </h3>
                                <h4>
                                    {unit === "C"
                                        ? Math.round(day.temp.min)
                                        : Math.round(day.temp.min * 1.8 + 32)}
                                    ° {unit}
                                </h4>
                            </div>
                            <div className={styles.ForecastItemInfo}>
                                <span>{day.humidity}% RH</span>
                                <span>
                                    {Math.round(day.wind_speed * 10) / 10}{" "}
                                    <WindIcon windSpeed={day.wind_speed} />
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Forecast;
