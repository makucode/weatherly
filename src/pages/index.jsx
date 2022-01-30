import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/pages/Home.module.scss";
import Overview from "../components/Home/Overview";
import Forecast from "../components/Home/Forecast";
import LocationPicker from "../components/Home/LocationPicker";

const Home = () => {
    const [location, setLocation] = useState();

    // Check if localStorage has Location

    useEffect(() => {
        setLocation(localStorage.getItem("location") || null);
    }, []);

    // Fetch Weather from NEXT.js API

    useEffect(() => {
        const getWeather = async () => {
            try {
                const res = await axios.get("/api/weather", {
                    params: { lat: location.lat, long: location.long },
                });

                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };

        location && getWeather();
    }, [location]);

    return (
        <div className={styles.Home}>
            <Head>
                <title>MyWeather</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={"Main " + styles.HomeMain}>
                {location ? (
                    <>
                        <Overview />
                        <Forecast />
                    </>
                ) : (
                    <LocationPicker />
                )}
            </main>
        </div>
    );
};

export default Home;