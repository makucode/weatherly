import React from "react";
import styles from "../../styles/components/Home/LocationPicker.module.scss";
import HeartIcon from "../icons/HeartIcon";

const LocationPicker = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Enter your nearest city"
                    />
                </form>
            </div>
        </section>
    );
};

export default LocationPicker;
