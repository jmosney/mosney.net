import styles from './Cell.module.scss';

export default function Cell({onChange, onBlur, name, value}: any) {
  return (
    <>
      <input
        value={value}
        name={name}
        className={styles.cell}
        onBlur={onBlur}
        onChange={onChange}></input>
    </>
  )
}