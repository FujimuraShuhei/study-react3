import Headline from '../components/Headline'
import Links from '../components/Links'
import styles from '../styles/Home.module.css'

import React from 'react'

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}

export default Main