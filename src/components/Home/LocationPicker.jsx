import axios from "axios";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeartIcon from "../icons/HeartIcon";
import SearchIcon from "../icons/SearchIcon";
import { fadeIn, fadeInScale } from "../../assets/animations";
import styles from "../../styles/components/Home/LocationPicker.module.scss";

const LocationPicker = () => {
    const [location, setLocation] = useState("");

    const animations = fadeIn;
    const animationScale = fadeInScale;

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
            <AnimatePresence>
                <div className={styles.LocationPickerWrapper}>
                    <motion.div
                        transition={{ duration: 0.5 }}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                    >
                        <div className={styles.LocationPickerHeading}>
                            <h1>weatherly</h1>
                            <h2 className={styles.LocationPickerSub}>
                                Forecasts, just for you <HeartIcon />
                            </h2>
                        </div>
                    </motion.div>
                    <motion.div
                        transition={{ duration: 0.5, delay: 0.25 }}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                    >
                        <form
                            className={styles.LocationPickerForm}
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="location">
                                What location do you want forecasts for?
                            </label>
                            <motion.div
                                transition={{ duration: 0.5, delay: 0.5 }}
                                initial="pageInitial"
                                animate="pageAnimate"
                                exit="pageExit"
                                variants={animationScale}
                            >
                                <div
                                    className={
                                        styles.LocationPickerInpputWrapper
                                    }
                                >
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        placeholder="Enter your nearest city"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    />
                                    <button type="submit">
                                        <SearchIcon />
                                    </button>
                                </div>
                            </motion.div>
                        </form>
                    </motion.div>
                    <div className={styles.PlaceholderSmall}></div>
                </div>
            </AnimatePresence>
        </section>
    );
};

export default LocationPicker;
