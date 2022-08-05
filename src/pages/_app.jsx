import { useBgColor } from '../hooks/useBgColor';
import { useCounter } from '../hooks/useCounter';
import { useInputArray } from '../hooks/useInputArray';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();
  
  // { count, isShow, handleClick, handleDisplay }
  // { text, array, handleChange, handleAdd }
  return <Component {...pageProps} {...counter} {...inputArray} />
}

export default MyApp
