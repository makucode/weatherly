import React from "react";
import styles from "../../styles/components/Home/Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <ul>
                <li>Today</li>
                <li>Forecast</li>
            </ul>
        </div>
    );
};

export default Nav;
