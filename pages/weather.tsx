import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Weather.module.css';

// API KEY: bb44d8b3e0774883a48131544222404

// Weather API Surakarta
// https://api.weatherapi.com/v1/current.json?key=bb44d8b3e0774883a48131544222404&q=Surakarta&aqi=yes

export default function WeatherPage() {

    const [temperature, setTemperature] = useState();
    const [windSpeed, setWindSpeed] = useState();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const endPoint = "https://api.weatherapi.com/v1/current.json?";

        const res = await fetch(endPoint + new URLSearchParams({
            key: 'bb44d8b3e0774883a48131544222404',
            q: event.target.location.value,
            aqi: 'yes'
        }));
        const result = await res.json();
        const {location, current} = result;
        
        setTemperature(current.temp_c);
        setWindSpeed(current.wind_kph);
        
    }

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
                        <input className={styles["weather-input"]} placeholder="Location..." id="location" name="location" type="text" />
                        <button className={`${styles["weather-submit"]} button`} type="submit">Search</button>
                    </form>
                </div>
                <div className={styles["weather-contents"]}>
                    <div>
                        <p>{temperature} C</p>
                        <p>{windSpeed} kph</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
		</>
	);
}