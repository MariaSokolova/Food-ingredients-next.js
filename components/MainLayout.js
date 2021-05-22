import React from 'react';
import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react"

import styles from '../styles/Home.module.css'

export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Food ingredients"/>
      </Head>

      <main className={styles.main}>
          <Heading as="h1" align="center" size="2xl" mb="10">
            Welcome to <Text as="span" color="teal.500">EasyToCook</Text>
          </Heading>
          {children}
      </main>
    </>
  );
};

