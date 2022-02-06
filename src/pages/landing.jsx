import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Credits from "../components/Home/Credits";
import LocationPicker from "../components/Landing/LocationPicker";
import { LocationContext } from "../contexts/locationContext";
import styles from "../styles/pages/Landing.module.scss";

const landing = () => {
    const { location } = useContext(LocationContext);

    const router = useRouter();

    useEffect(() => {
        if (location) router.push("/");
    }, [location]);

    return (
        <div className={styles.Landing}>
            <Head>
                <title>weatherly - Forecast for you 🤍</title>
                <meta
                    name="description"
                    content="Generated by create next app"
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

export default landing;