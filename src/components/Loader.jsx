import React from "react";
import styles from "../styles/components/Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.Loader}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                    <clipPath id="a">
                        <path fill="none" d="M0 7.5h64v32H0z" />
                    </clipPath>
                </defs>
                <g clipPath="url(#a)">
                    <g>
                        <path
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                            d="M42.5 39A10.5 10.5 0 1132 28.5 10.5 10.5 0 0142.5 39zM32 22.71V16.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 54.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 39H9.5m45 0h-6.21"
                        />
                        <animateTransform
                            attributeName="transform"
                            dur="45s"
                            from="0 32 39"
                            repeatCount="indefinite"
                            to="360 32 39"
                            type="rotate"
                        />
                    </g>
                </g>
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 42.5h32"
                />
            </svg>
        </div>
    );
};

export default Loader;
