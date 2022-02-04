import React from "react";
import { LocationProvider } from "../contexts/locationContext";
import { WeatherProvider } from "../contexts/WeatherContext";

const Provider = ({ children }) => {
    return (
        <LocationProvider>
            <WeatherProvider>{children}</WeatherProvider>
        </LocationProvider>
    );
};

export default Provider;
