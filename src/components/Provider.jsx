import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { DayTimeProvider } from "../contexts/DayTimeContext";
import { LocationProvider } from "../contexts/LocationContext";
import { WeatherProvider } from "../contexts/WeatherContext";

const Provider = ({ children }) => {
    return (
        <DayTimeProvider>
            <LocationProvider>
                <WeatherProvider>
                    <ParallaxProvider>{children}</ParallaxProvider>
                </WeatherProvider>
            </LocationProvider>
        </DayTimeProvider>
    );
};

export default Provider;
