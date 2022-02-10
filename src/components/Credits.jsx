import React, { useContext, useState } from "react";
import GitHubIcon from "./icons/GitHubIcon";
import { DayTimeContext } from "../contexts/DayTimeContext";
import styles from "../styles/components/Credits.module.scss";

const Credits = () => {
    const getColor = () => {
        switch (dayTime) {
            case "night":
                return styles.HoverNight;
            case "morning":
                return styles.HoverMorning;
            case "day":
                return styles.HoverDay;
            case "evening":
                return styles.HoverEvening;
            default:
                return styles.HoverDay;
        }
    };

    const { dayTime } = useContext(DayTimeContext);
    const [color, setColor] = useState(getColor());

    return (
        <footer className={styles.Credits}>
            <span className={styles.CreditsText + " " + getColor()}>
                by{" "}
                <a
                    className={styles.CreditsMakucode}
                    href="https://makuco.de/contact"
                >
                    <span>makucode</span>
                </a>
            </span>
            <a href="https://github.com/makucode">
                <GitHubIcon />
            </a>
        </footer>
    );
};

export default Credits;
