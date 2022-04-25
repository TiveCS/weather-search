import { ReactElement } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import styles from "../Layout/Layout.module.css";

export default function Layout({children}: {children: ReactElement}){
    return (
        <>
            <Navbar />
            <main className={styles.contents}>
                {children}
            </main>
            <Footer />
        </>
    );
}