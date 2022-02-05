import React from "react";
import { DayTimeProvider } from "../contexts/DayTimeContext";
import { LocationProvider } from "../contexts/locationContext";
import { WeatherProvider } from "../contexts/WeatherContext";

const Provider = ({ children }) => {
    return (
        <DayTimeProvider>
            <LocationProvider>
                <WeatherProvider>{children}</WeatherProvider>
            </LocationProvider>
        </DayTimeProvider>
    );
};

export default Provider;
