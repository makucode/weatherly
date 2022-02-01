import React from "react";
import GitHubIcon from "../icons/GitHubIcon";
import styles from "../../styles/components/Credits.module.scss";

const Credits = () => {
    return (
        <footer className={styles.Credits}>
            <span>
                by{" "}
                <a
                    className={styles.CreditsMakucode}
                    href="https://makuco.de/contact"
                >
                    makucode
                </a>
            </span>
            <a href="https://github.com/makucode">
                <GitHubIcon />
            </a>
        </footer>
    );
};

export default Credits;
