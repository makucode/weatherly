import { useContext, useEffect, useRef } from "react";
import Head from "next/head";
import Overview from "../components/Home/Overview";
import Forecast from "../components/Home/Forecast";
import Loader from "../components/Loader";
import Credits from "../components/Credits";
import GearIcon from "../components/icons/GearIcon";
import { LocationContext } from "../contexts/LocationContext";
import { WeatherContext } from "../contexts/WeatherContext";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
    const { location } = useContext(LocationContext);
    const { weather, weatherLoading, fetchWeather } =
        useContext(WeatherContext);

    useEffect(() => {
        location && fetchWeather(location.geometry.lat, location.geometry.lng);
    }, [fetchWeather, location]);
    return (
        <div className={styles.Home}>
            <Head>
                <title>weatherly - your forecast</title>
                <meta name="description" content="weatherly - your forecast" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.HomeSettings}>
                <GearIcon />
                <span className={styles.Location}>
                    {location && location.formatted}
                </span>
            </header>

            <main className={"Main " + styles.HomeMain}>
                {location && (!weatherLoading || weather) ? (
                    <>
                        <Overview />
                        <Forecast />
                        <Credits />
                    </>
                ) : (
                    <div className={styles.LoaderContainer}>
                        <Loader />
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
