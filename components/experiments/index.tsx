// import styles from './Square.module.scss';
import { MouseEventHandler, useState, ChangeEvent } from 'react';

interface ExperimentsProps {
  value: string,
  onClick: MouseEventHandler<HTMLLIElement>,
}

export default function Experiments({value, onClick}: ExperimentsProps) {
  const list = ['hey', 'this', 'is', 'nice'];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange}></input>
      <ul>
        {list.map((item, index) => {
          return <li key={index} onClick={onClick}>{item}</li>
        })}
      </ul>
    </>
  )
}
