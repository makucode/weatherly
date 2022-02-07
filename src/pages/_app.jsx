import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Provider from "../components/Provider";
import { fadeInBlur } from "../assets/animations";
import "../styles/style.scss";
import { DayTimeContext } from "../contexts/DayTimeContext";

const Content = ({ children }) => {
    const router = useRouter();
    const { getBackground } = useContext(DayTimeContext);
    const [background, setBackground] = useState(getBackground());

    useEffect(() => {
        setBackground(getBackground());
    }, [getBackground]);

    const animation = fadeInBlur;

    return (
        <div className={background}>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={router.asPath}
                    transition={{ duration: 0.25 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animation}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const weatherly = ({ Component, pageProps }) => {
    return (
        <Provider>
            <Content>
                <Component {...pageProps} />
            </Content>
        </Provider>
    );
};

export default weatherly;
