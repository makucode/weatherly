import { AnimatePresence } from "framer-motion";
import Provider from "../components/Provider";
import "../styles/style.scss";

const weatherly = ({ Component, pageProps }) => {
    return (
        <Provider>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
            </AnimatePresence>
        </Provider>
    );
};

export default weatherly;
