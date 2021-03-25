import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'






export default function Home() {
  const [valueBin, setValueBin] = useState(0)
  const [DecResult, setResulta] = useState(0)


  const ValidationKey = (event) => {
    var code = event.keyCode || event.charCode;
    if (event.key == 'Enter') {
      console.log('teste')
    }

  }


  const ConverterBin = () => {
    let number = valueBin;
    let potencia = 0;
    let decimal = 0;
    for (let i = number.length - 1; i >= 0; i--) {
      decimal += Math.pow(2, potencia) * parseInt(number.charAt(i));
      potencia++;

    }
    setResulta(decimal)
  }


  return (
    <div className={styles.container}>
      <h3>Conversor de Binário Para Decimal</h3>
      <div className={styles.formConverter}>
        <div className={styles.inputs}>
          <label htmlFor="conversorNumber">Valor Binário: </label>
          <input type="text" name="conversorNumber" onChange={event => (setValueBin(event.target.value))} />
        </div>
        <button onClick={ConverterBin} >Converter</button>
        <h1 ><blink>{DecResult}</blink></h1>
      </div>
    </div>
  )
}
