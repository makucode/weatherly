import React, { useState } from "react";
import HeartIcon from "../icons/HeartIcon";
import SearchIcon from "../icons/SearchIcon";
import styles from "../../styles/components/Home/LocationPicker.module.scss";
import axios from "axios";

const LocationPicker = () => {
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get("/api/coordinates", {
                params: { city: location },
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles.LocationPicker}>
            <div className={styles.LocationPickerWrapper}>
                <div className={styles.LocationPickerHeading}>
                    <h1>weatherly</h1>
                    <h2 className={styles.LocationPickerSub}>
                        Forecasts, just for you <HeartIcon />
                    </h2>
                </div>
                <form
                    className={styles.LocationPickerForm}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="location">
                        What location do you want forecasts for?
                    </label>
                    <div className={styles.LocationPickerInpputWrapper}>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Enter your nearest city"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button type="submit">
                            <SearchIcon />
                        </button>
                    </div>
                </form>
                <div className={styles.PlaceholderSmall}></div>
            </div>
        </section>
    );
};

export default LocationPicker;
