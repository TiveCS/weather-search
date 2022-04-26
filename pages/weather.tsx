import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/Weather.module.css";
import wind from "../public/icons/wind.svg";
import sun from "../public/icons/sun.svg";
import humid from "../public/icons/cloud.svg";
import drop from "../public/icons/drop.svg";
import loc from "../public/icons/location.svg";

// API KEY: bb44d8b3e0774883a48131544222404

// Weather API Surakarta
// https://api.weatherapi.com/v1/current.json?key=bb44d8b3e0774883a48131544222404&q=Surakarta&aqi=yes

const airQualityStatus = [
    "Unknown",
	"Good",
	"Moderate",
	"Unhealthy",
	"Unhealthy",
	"Very Unhealthy",
	"Hazardous",
];

export default function WeatherPage() {
	const [targetLocation, setTargetLocation] = useState();
	const [temperature, setTemperature] = useState();
	const [windSpeed, setWindSpeed] = useState();
	const [airQualityIndex, setAirQualityIndex] = useState<number>(0); // us-epa-index
	const [humidity, setHumidity] = useState();

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		const endPoint = "https://api.weatherapi.com/v1/current.json?";

		const res = await fetch(
			endPoint +
				new URLSearchParams({
					key: "bb44d8b3e0774883a48131544222404",
					q: event.target.location.value,
					aqi: "yes",
				})
		);
		const result = await res.json();
		const { location, current } = result;

		console.log(current);
		console.log(location);

		setTargetLocation(location.name);
		setTemperature(current.temp_c);
		setWindSpeed(current.wind_kph);
		setAirQualityIndex(current["air_quality"]["us-epa-index"]);
		setHumidity(current.humidity);
	};

	return (
		<>
			<Head>
				<title>Weather | Weather Search</title>
				<meta
					name='description'
					content='Weather location monitor app with search location feature'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>
				<div className={styles.form}>
					<h3>Search Weather Info</h3>
					<form onSubmit={handleSubmit}>
						<input
							className={styles["weather-input"]}
							placeholder='Location...'
							id='location'
							name='location'
							type='text'
						/>
						<button
							className={`${styles["weather-submit"]} button`}
							type='submit'
						>
							Search
						</button>
					</form>
				</div>

				<div className={`${styles.card} ${styles["card-row"]} shadow-gray`}>
					<Image src={loc} alt="location" />
                    <p>{targetLocation}</p>
				</div>
				<div className={styles["weather-contents"]}>
					<div className={styles["weather-items"]}>
						<div className={`${styles.card} ${styles["weather-item"]} ${styles["card-column"]} shadow-gray`}>
							<div className={styles["card-header"]}>
								<Image
									className={styles["card-header-icon"]}
									src={sun}
									alt='Temperature'
								/>
								<p className={styles["card-header-label"]}>Temperature</p>
							</div>

							<div className={styles["card-body"]}>
								<p>{temperature} C</p>
							</div>
						</div>

						<div className={`${styles.card} ${styles["weather-item"]} ${styles["card-column"]} shadow-gray`}>
							<div className={styles["card-header"]}>
								<Image
									className={styles["card-header-icon"]}
									src={wind}
									alt='Wind Speed'
								/>
								<p className={styles["card-header-label"]}>Wind Speed</p>
							</div>

							<div className={styles["card-body"]}>
								<p>{windSpeed} kph</p>
							</div>
						</div>
					</div>

					<div className={styles["weather-items"]}>
						<div className={`${styles.card} ${styles["weather-item"]} ${styles["card-column"]} shadow-gray`}>
							<div className={styles["card-header"]}>
								<Image
									className={styles["card-header-icon"]}
									src={humid}
									alt='Humidty'
								/>
								<p className={styles["card-header-label"]}>Humidty</p>
							</div>

							<div className={styles["card-body"]}>
								<p>{humidity} %</p>
							</div>
						</div>

						<div className={`${styles.card} ${styles["weather-item"]} ${styles["card-column"]} shadow-gray`}>
							<div className={styles["card-header"]}>
								<Image
									className={styles["card-header-icon"]}
									src={drop}
									alt='Air Quality'
								/>
								<p className={styles["card-header-label"]}>Air Quality</p>
							</div>

							<div className={styles["card-body"]}>
								<p>{airQualityStatus[airQualityIndex]}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
