import React from "react";
import styles from "../Headline/Headline.module.css"

export const Headline = (props) => {
  return (
    <div>
      <h1 className={styles.title}>
        {props.page} page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
        {props.children}
      </p>
    </div>
  )
}

export default Headline
