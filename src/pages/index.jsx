import Head from 'next/head';
import { useCallback, useState } from 'react';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import Main from '../components/Main/Main';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 10) {
      alert('10文字以内にしてください');
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    if (count < 10) {
      setIsShow((prevIsShow) => !prevIsShow);
    }
  }, [count]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="kinou">
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
        <a
          onClick={function (e) {
            alert(123);
          }}
        >
          ボタン
        </a>
        <button onClick={handleAdd}>追加</button>
        <input type="text" value={text} onChange={handleChange} />
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
