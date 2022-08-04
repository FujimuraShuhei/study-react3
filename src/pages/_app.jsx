import { useCounter } from '../hooks/useCounter';
import { useInputArray } from '../hooks/useInputArray';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
   const counter = useCounter();
  const inputArray = useInputArray();
  
  // { count, isShow, handleClick, handleDisplay }
  // { text, array, handleChange, handleAdd }
  return <Component {...pageProps} {...counter} {...inputArray} />
}

export default MyApp
