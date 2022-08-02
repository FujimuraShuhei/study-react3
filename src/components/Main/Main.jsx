import Headline from 'src/components/Headline/Headline'
import Links from 'src/components/Links/Links'
import styles from 'src/components/Main/Main.module.css'
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