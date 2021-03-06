import React, { useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";
import WindIcon from "../icons/WindIcon";
import icons from "../../assets/icons";
import { fadeIn } from "../../assets/animations";
import { WeatherContext } from "../../contexts/WeatherContext";
import styles from "../../styles/components/Home/Overview.module.scss";
import TempUnit from "./TempUnit";

const Overview = () => {
    const { weather, unit } = useContext(WeatherContext);

    const tempAnimation = fadeIn;

    const tempParallax = useParallax({
        speed: -10,
    });

    const iconParallax = useParallax({
        speed: -20,
    });

    return (
        <section className={styles.Overview}>
            <div className={styles.Weather}>
                <div ref={iconParallax.ref}>
                    <div className={styles.WeatherIcon}>
                        {weather && (
                            <Image
                                src={icons[weather.current.weather[0].icon]}
                                alt="Current Weather"
                                width="400px"
                                height="400px"
                            />
                        )}
                    </div>
                </div>
                <div className={styles.WeatherInfo} ref={tempParallax.ref}>
                    <div className={styles.WeatherTemp}>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                key={unit}
                                transition={{ duration: 0.25 }}
                                initial="pageInitial"
                                animate="pageAnimate"
                                exit="pageExit"
                                variants={tempAnimation}
                            >
                                <h1>
                                    {weather
                                        ? Math.round(
                                              unit === "C"
                                                  ? weather.current.temp
                                                  : weather.current.temp * 1.8 +
                                                        32
                                          )
                                        : ""}
                                    ??
                                </h1>
                            </motion.div>
                        </AnimatePresence>
                        <TempUnit />
                    </div>
                    <div className={styles.WeatherSub}>
                        <div className={styles.WeatherSubRow}>
                            <span>
                                {weather && weather.current.humidity}% RH
                            </span>
                            <span className={styles.WeatherWind}>
                                {weather && weather.current.wind_speed}{" "}
                                <WindIcon
                                    windSpeed={
                                        weather && weather.current.wind_speed
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
