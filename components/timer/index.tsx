import { useState, useRef, FormEvent } from 'react';
import styles from './timer.module.scss'

const timeout = function(time: number) {
  const timeoutPromise = new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return timeoutPromise;
};

export default function Timer({stuff}: any) {
  const thing = useRef(null);

  const [duration, setDuration] = useState(0);
  const [running, setRunning] = useState(false);
  const [current, setCurrent] = useState(0);

  function countdown(duration: number, start: number) {
    const raf = window.requestAnimationFrame(() => {
      countdown(duration, start);
    });

    const now = Date.now();
    const current = now - start;
    if (current <= duration) {
      setRunning(true);
      setCurrent(current);
    } else {
      setRunning(false);
      setCurrent(0);
      window.cancelAnimationFrame(raf);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (duration <= 0) return;
    countdown(duration, Date.now());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.timerInput}
          type="text"
          placeholder="Duration"
          value={duration}
          disabled={running}
          onChange={e => setDuration(parseInt(e.target.value))} />
        <button type="submit">Submit</button>
      </form>
      <p ref={thing}>{current > 0 ? duration - current : 0}</p>
    </>
  )
}
