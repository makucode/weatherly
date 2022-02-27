import React from "react";
import styles from "../../styles/components/Home/Nav.module.scss";
import ArrowDown from "../icons/ArrowDown";

const Nav = () => {
    return (
        <div className={styles.Nav}>
            <ArrowDown />
        </div>
    );
};

export default Nav;
