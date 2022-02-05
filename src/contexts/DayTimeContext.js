import { createContext, useEffect, useState } from "react";

export const DayTimeContext = createContext();

export const DayTimeProvider = ({ children }) => {
    const getDayTime = () => {
        const time = new Date().toLocaleTimeString({
            hour12: false,
            hour: "numeric",
            minute: "numeric",
        });
        const hour = time.split(":")[0];

        if (hour >= 21 || hour < 5) return "night";
        else if (hour >= 5 && hour < 9) return "morning";
        else if (hour >= 9 && hour < 18) return "day";
        else return "evening";
    };

    const [dayTime, setDayTime] = useState(getDayTime());

    useEffect(() => {
        setDayTime(getDayTime());
    }, []);

    const getBackground = () => {
        switch (dayTime) {
            case "night":
                return "BgNight";
            case "morning":
                return "BgMorning";
            case "day":
                return "BgDay";
            case "evening":
                return "BgEvening";
            default:
                return "BgDay";
        }
    };

    return (
        <DayTimeContext.Provider value={{ dayTime, getBackground }}>
            {children}
        </DayTimeContext.Provider>
    );
};
