import React from "react";
import styles from "../../styles/components/Landing/Picker.module.scss";

const Picker = ({ locations }) => {
    return (
        <div className={styles.Picker}>
            <ul className={styles.PickerBox}>
                {locations.map((location, idx) => (
                    <li
                        key={idx}
                        className={
                            idx === locations.length - 1 ? styles.NoBorder : ""
                        }
                    >
                        <span className={styles.PickerCity}>
                            {location.formatted.split(",")[0]}
                        </span>
                        <span className={styles.PickerAddress}>
                            {location.formatted
                                .split(",")
                                .slice(1)
                                .reduce((a, b) => a + ", " + b)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Picker;
