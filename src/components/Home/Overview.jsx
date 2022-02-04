import React from "react";
import Image from "next/image";
import RainIcon from "../icons/RainIcon";
import WindIcon from "../icons/WindIcon";
import weatherImg from "../../assets/weather/01d.svg";
import styles from "../../styles/components/Home/Overview.module.scss";
import { useContext } from "react/cjs/react.development";
import { WeatherContext } from "../../contexts/WeatherContext";
import styled from "styled-components";

const Overview = () => {
    const { weather } = useContext(WeatherContext);

    return (
        <section className={styles.Overview}>
            <div className={styles.Weather}>
                <div className={styles.WeatherInfo}>
                    <div className={styles.WeatherTemp}>
                        <h1>{Math.round(weather?.current.temp)}°</h1>
                        <div className={styles.UnitSelector}>
                            <div
                                className={
                                    styles.WeatherTempUnit +
                                    " " +
                                    styles.UnitActive
                                }
                            >
                                C
                            </div>
                            <div className={styles.WeatherTempUnit}>F</div>
                        </div>
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
                        src={weatherImg}
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
