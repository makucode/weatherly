import { AnimatePresence } from "framer-motion";
import "../styles/style.scss";

const myweather = ({ Component, pageProps }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
        </AnimatePresence>
    );
};

export default myweather;
