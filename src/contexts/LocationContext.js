import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState();

    const saveLocation = (location) => {
        localStorage.setItem("location", JSON.stringify(location));
        setLocation(location);
    };

    const removeLocation = (location) => {
        localStorage.removeItem("location");
        setLocation(null);
    };

    const router = useRouter();

    // Check if localStorage has Location

    useEffect(() => {
        const localStorageLoc = JSON.parse(localStorage.getItem("location"));

        if (localStorageLoc) setLocation(localStorageLoc);
    }, [router]);

    // Redirect if there's no location

    useEffect(() => {
        const localStorageLoc = JSON.parse(localStorage.getItem("location"));

        if (
            !location &&
            !localStorageLoc &&
            !router.asPath.includes("landing")
        ) {
            router.push("/landing");
        }
    }, [location, router]);

    return (
        <LocationContext.Provider
            value={{ location, setLocation: saveLocation, removeLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
};
