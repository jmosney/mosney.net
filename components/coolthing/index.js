import { useState, useEffect } from 'react';
import styles from './CoolThing.module.scss'

export default function CoolThing({uppercase = false}) {
  const [random, setRandom] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    generateRandom();
  }, [])

  function generateRandom() {
    const random = Math.floor(Math.random() * 100);
    setRandom(random);
    setActive(!active);
  }

  function Random() {
    return (
      <>
        <div style={{
          color: active ? 'blue' : 'red',
        }}>{random}</div>
        <button onClick={generateRandom}>Generate</button>
      </>
    );
  }

  function Analyze() {
    const isEven = random % 2 === 0;
    return (
      <>
        <div className={styles.coolthing}>{isEven ? 'EVEN' : 'ODD'}</div>
      </>
    );
  }

  return (
    <>
      <Random></Random>
      <Analyze></Analyze>
    </>
  )
}
