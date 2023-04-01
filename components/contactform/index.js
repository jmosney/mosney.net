import { useState, useEffect } from 'react';

const timeout = function(time) {
  const timeoutPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return timeoutPromise;
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    await timeout(1000);
    setSubmitted(true);
    await timeout(2000);
    setName('');
    setSubmitted(false);
  }

  return (
    <>
      {submitted ?
        <p>Thank you for your submission of <strong>{name}</strong>.</p>
        :
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      }
    </>
  )
}
