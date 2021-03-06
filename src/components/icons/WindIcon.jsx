import React from "react";

const WindIcon = ({ windSpeed }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            height="40px"
        >
            <path
                fill="none"
                stroke="#e5e7eb"
                strokeDasharray="35 22"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={3}
                d="M43.64 20a5 5 0 113.61 8.46h-35.5"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    dur={Math.max(Math.abs(12 - windSpeed + 7), 2) + "s"}
                    repeatCount="indefinite"
                    values="-57; 57"
                />
            </path>
            <path
                fill="none"
                stroke="#e5e7eb"
                strokeDasharray="24 15"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={3}
                d="M29.14 44a5 5 0 103.61-8.46h-21"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    begin="-1.5s"
                    dur={Math.max(Math.abs(12 - windSpeed + 7), 2) + "s"}
                    repeatCount="indefinite"
                    values="-39; 39"
                />
            </path>
        </svg>
    );
};

export default WindIcon;
