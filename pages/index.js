import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [weather, setWeather] = useState([]);
    const [showWeather, setShowWeather] = useState(false);

    useEffect(() => {
        const url =
            'https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=1c1cddc6fe4b53704f841e00bef79e03';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWeather(data);
                console.log(weather);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Weather</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <button onClick={() => setShowWeather(!showWeather)}>
                    {showWeather ? 'Hide Weather' : 'Show Weather in Boston'}
                </button>
                {showWeather && (
                    <div>
                        <h1>Weather in Boston</h1>
                        <h2>Temperature: {weather.main.temp}</h2>
                        <h2>Feels Like: {weather.main.feels_like}</h2>
                        <h2>Humidity: {weather.main.humidity}</h2>
                        <h2>Pressure: {weather.main.pressure}</h2>
                    </div>
                )}
            </main>
        </>
    );
}
