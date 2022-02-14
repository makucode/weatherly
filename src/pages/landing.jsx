import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Credits from "../components/Credits";
import LocationPicker from "../components/Landing/LocationPicker";
import { LocationContext } from "../contexts/LocationContext";
import styles from "../styles/pages/Landing.module.scss";

const Landing = () => {
    const { location } = useContext(LocationContext);

    const router = useRouter();

    useEffect(() => {
        if (location) router.push("/");
    }, [location]);

    return (
        <div className={styles.Landing}>
            <Head>
                <title>weatherly - Forecasts for you 🤍</title>
                <meta
                    name="description"
                    content="weatherly - Forecasts for you 🤍"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <LocationPicker />
                <Credits />
            </main>
        </div>
    );
};

export default Landing;
