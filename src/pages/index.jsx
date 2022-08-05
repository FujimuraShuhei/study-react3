import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import Main from '../components/Main/Main';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const { doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? '非表示' : '表示'}</button>

      <button onClick={props.handleAdd}>追加</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
