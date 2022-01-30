import React from "react";
import Image from "next/image";
import RainIcon from "../icons/RainIcon";
import WindIcon from "../icons/WindIcon";
import weather from "../../assets/weather/01d.svg";
import styles from "../../styles/components/Home/Overview.module.scss";

const Overview = () => {
    return (
        <section className={styles.Overview}>
            <div className={styles.Weather}>
                <div className={styles.WeatherInfo}>
                    <div className={styles.WeatherTemp}>
                        <h1>24°</h1>
                    </div>
                    <div className={styles.WeatherSub}>
                        <div className={styles.WeatherSubRow}>
                            <span className={styles.WeatherSubItem}>
                                67% <RainIcon />
                            </span>
                            <span>72% RH</span>
                        </div>
                        <span className={styles.WeatherWind}>
                            2 km/h <WindIcon />
                        </span>
                    </div>
                </div>
                <div className={styles.WeatherIcon}>
                    <Image
                        src={weather}
                        alt="Current Weather"
                        width="200px"
                        height="200px"
                    />
                </div>
            </div>
        </section>
    );
};

export default Overview;
