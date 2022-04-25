import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

import logo from "../../public/Logo-SVG.svg";
import github from "../../public/icons/github.svg";

export default function Navbar() {
	return (
		<nav className={`${styles.nav} shadow-green`}>
			<div className={styles.navs}>
				<div className={styles["navs-logo"]}>
					<Link href='/'>
                        <a><Image src={logo} alt="Logo" /></a>
                    </Link>
				</div>
				<div className={styles["navs-item"]}>
					<Link href='/weather'>Search</Link>
				</div>
			</div>
			<div>
				<a href='https://github.com/TiveCS/weather-search' target="_target">
					<Image src={github} alt='GitHub' />
				</a>
			</div>
		</nav>
	);
}
