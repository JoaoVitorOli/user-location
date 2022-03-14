import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

interface HomeProps {
  clientCountryCode: string;
}

export default function Home({ clientCountryCode }: HomeProps) {

  // podemos fazer da forma que esta abaixo também: 👇👇

  // const [clientCountryCode, setClientCountryCode] = useState("");
  
  // useEffect(() => {
  //   async function test() {
  //     const response = await fetch("/api/clientcountry", {
  //       method: "GET"
  //     });

  //     const data = await response.json();

  //     setClientCountryCode(data.countryCode);
  //   }

  //   test();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>code: {clientCountryCode && clientCountryCode}</h1>
        
        <Image
          src={`https://countryflagsapi.com/png/${clientCountryCode}`}
          width={200}
          height={200}
        />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const response = await fetch("https://user-location-xi.vercel.app/api/clientCountry", {
    method: "GET"
  });

  const data = await response.json();

  console.log(data);

  return {
    props: {
      clientCountryCode: data.countryCode
    }
  }
}
