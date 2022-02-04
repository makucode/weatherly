import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Provider from "../components/Provider";
import { fadeInBlur } from "../assets/animations";
import "../styles/style.scss";

const weatherly = ({ Component, pageProps }) => {
    const router = useRouter();

    const animation = fadeInBlur;

    return (
        <Provider>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={router.asPath}
                    transition={{ duration: 0.25 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animation}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Provider>
    );
};

export default weatherly;
