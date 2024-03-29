import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [clientCountryCode, setClientCountryCode] = useState("BR");

  useEffect(() => {
    async function setUrlWithCountry() {
      const response = await fetch('/api/clientCountry', {
        method: "GET"
      });

      const data = await response.json();

      console.log(data);

      setClientCountryCode(data.country);
    }

    setUrlWithCountry();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{clientCountryCode}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{color: "#d3d3d3"}}>code: {clientCountryCode && clientCountryCode}</h1>
        
        <Image
          src={`https://countryflagsapi.com/png/${clientCountryCode}`}
          width={300}
          height={200}
        />

        {clientCountryCode !== "JP" && (
          <div>
            <h3 style={{color: "#d3d3d3"}}>email: brasil@email.com</h3>
            <h3 style={{color: "#d3d3d3"}}>telefone: (99) 9999-9999</h3>
          </div>
        )}
        
        {clientCountryCode === "JP" && (
          <div>
            <h3 style={{color: "#d3d3d3"}}>email: japao@email.com</h3>
            <h3 style={{color: "#d3d3d3"}}>telefone: (22) 2222-2222</h3>
          </div>
        )}
      </main>
    </div>
  )
}
