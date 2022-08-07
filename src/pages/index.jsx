import Head from 'next/head';
import { Header } from '../components/Header/Header';
import { Posts } from '../components/Posts';
import styles from '../styles/Home.module.css';

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
