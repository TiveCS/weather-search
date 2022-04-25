import { ReactElement } from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({children}: {children: ReactElement}){
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}