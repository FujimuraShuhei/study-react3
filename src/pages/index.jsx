import Head from 'next/head'
import { useCallback, useState } from 'react'
import Footer from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import Main from '../components/Main/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    if (count < 10) {
      setIsShow((isShow) => !isShow);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <a
        onClick={function (e) {
          alert(123);
        }}
      >
        ボタン
      </a>
      <input type="text" value={text} onChange={handleChange}
      />
      <Main page="index" />
      <Footer />
    </div>
  )
}
