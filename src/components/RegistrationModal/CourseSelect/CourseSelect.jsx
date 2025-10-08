
function CourseSelect({ courses, value, onChange }) {
  return (
    <select name="profession" value={value} onChange={onChange} required>
      <option value="" disabled>Ընտրել կուրսը</option>
      {courses.map((course, index) => (
        <option key={index} value={course}>{course} դասընթաց</option>
      ))}
    </select>
  );
}

export default CourseSelect
