import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp } from "../../assets/animations";
import { WeatherContext } from "../../contexts/WeatherContext";
import styles from "../../styles/components/Home/TempUnit.module.scss";

const TempUnit = () => {
    const { unit, setUnit } = useContext(WeatherContext);

    const unitAnimation = fadeInUp;

    return (
        <div className={styles.UnitSelector} onClick={setUnit}>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={unit}
                    transition={{ duration: 0.25 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={unitAnimation}
                >
                    <div className={styles.UnitWrapper}>
                        <div
                            className={
                                styles.WeatherTempUnit +
                                " " +
                                (unit === "C" ? styles.UnitActive : "")
                            }
                        >
                            C
                        </div>
                        <div
                            className={
                                styles.WeatherTempUnit +
                                " " +
                                (unit === "F" ? styles.UnitActive : "")
                            }
                        >
                            F
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TempUnit;
