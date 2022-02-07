import React, { useContext } from "react";
import { useRouter } from "next/router";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import styles from "../../styles/components/Landing/Picker.module.scss";
import { LocationContext } from "../../contexts/LocationContext";

const Picker = ({ locations, setLocations }) => {
    const { setLocation } = useContext(LocationContext);

    const router = useRouter();

    return (
        <div className={styles.Picker}>
            <div className={styles.PickerBox}>
                <div className={styles.PickerHeading}>
                    <button onClick={() => setLocations(null)}>
                        <ChevronRightIcon />
                        Back
                    </button>
                </div>
                <ul className={styles.PickerItems}>
                    {locations.map((location, idx) => (
                        <li
                            key={idx}
                            className={
                                styles.PickerItem +
                                " " +
                                (idx === locations.length - 1
                                    ? styles.NoBorder
                                    : "")
                            }
                            onClick={() => {
                                setLocation(location);
                                router.push("/");
                            }}
                        >
                            <div>
                                <span className={styles.PickerCity}>
                                    {location.formatted.split(",")[0]}
                                </span>
                                <span className={styles.PickerAddress}>
                                    {location.formatted
                                        .split(",")
                                        .slice(1)
                                        .reduce((a, b) => a + ", " + b)}
                                </span>
                            </div>
                            <ChevronRightIcon />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Picker;
