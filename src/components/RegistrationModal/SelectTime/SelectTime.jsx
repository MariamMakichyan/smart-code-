function SelectTime({ times, value, onChange }) {
  return (
    <select name="selectedTime" value={value} onChange={onChange} required>
      <option value="" disabled>Նախընտրած ժամեր</option>
      {times.map((time, index) => (
        <option key={index} value={time}>{time}</option>
      ))}
    </select>
  );
}

export default SelectTime