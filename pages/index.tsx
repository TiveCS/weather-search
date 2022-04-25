import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import type { NextPage } from "next";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home | Weather Search</title>
				<meta
					name='description'
					content='Weather location monitor app with search location feature'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<div>
					<h1 className={styles.tagline}>
						Monitor your
						<br />
						local <span className={styles.subtagline}>Weather</span> with API
					</h1>
				</div>

				<div>
					<br/>
					<Link href='/weather'>
						<a className="button">Start Monitor</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
