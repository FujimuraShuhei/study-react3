import Headline from '../Headline/Headline'
import Links from '../Links/Links'
import styles from '../Main/Main.module.css'

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