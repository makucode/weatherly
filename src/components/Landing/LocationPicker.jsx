import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import HeartIcon from "../icons/HeartIcon";
import SearchIcon from "../icons/SearchIcon";
import Picker from "./Picker";
import Loader from "../Loader";
import { fadeIn, fadeInScale } from "../../assets/animations";
import styles from "../../styles/components/Landing/LocationPicker.module.scss";

const LocationPicker = () => {
    const [location, setLocation] = useState("");
    const [locations, setLocations] = useState("");
    const [loading, setLoading] = useState(false);

    const animations = fadeIn;
    const animationScale = fadeInScale;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.get("/api/coordinates", {
                params: { city: location },
            });

            setLocations(data.results);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
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
                            <Link href="/" passHref>
                                <a>
                                    <h1>weatherly</h1>
                                </a>
                            </Link>
                            <h2 className={styles.LocationPickerSub}>
                                Forecasts, just for you <HeartIcon />
                            </h2>
                        </div>
                    </motion.div>
                    <motion.div
                        key={locations}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                    >
                        {!loading ? (
                            locations ? (
                                <Picker
                                    locations={locations}
                                    setLocations={setLocations}
                                />
                            ) : (
                                <form
                                    className={styles.LocationPickerForm}
                                    onSubmit={handleSubmit}
                                >
                                    <label htmlFor="location">
                                        What location do you want forecasts for?
                                    </label>
                                    <motion.div
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5,
                                        }}
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
                                                required
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
                            )
                        ) : (
                            loading && <Loader />
                        )}
                    </motion.div>
                    <div className={styles.PlaceholderSmall}></div>
                </div>
            </AnimatePresence>
        </section>
    );
};

export default LocationPicker;
