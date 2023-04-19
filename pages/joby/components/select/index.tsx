export default function Select({onChange, value}: any) {
  return (
    <select value={value} onChange={onChange} className='mr-6 mb-2 text-white text-xl bg-transparent'>
      <option value="Heading/Altitude">Heading/Altitude</option>
      <option value="Flight Path">Flight Path</option>
      <option value="Rotor Speed">Rotor Speed</option>
      <option value="Noise Profile">Noise Profile</option>
      <option value="Battery Profile">Battery Profile</option>
      <option value="Cockpit Voice Recorder">Cockpit Voice Recorder</option>
    </select>
  )
}
