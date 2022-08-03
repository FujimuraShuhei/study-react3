import Head from 'next/head';
import { useCallback, useState } from 'react';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import Main from '../components/Main/Main';
import { useCounter } from '../hooks/useCounter';
import { useInputArray } from '../hooks/useInputArray';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>

        <button onClick={handleAdd}>追加</button>
        <input type="text" value={text} onChange={handleChange} />
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
