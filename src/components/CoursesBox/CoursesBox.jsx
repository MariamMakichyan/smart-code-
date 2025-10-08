import CourseItem from "../CourseItem/CourseItem";

function CoursesBox({ courses, active }) {
  return (
    <div className={`courses-box ${active ? "active" : ""}`}>
      {courses.map((course, index) => (
        <CourseItem
          key={index}
          img={course.img}
          title={course.title}
          duration={course.duration}
          price={course.price}
          active={course.active}
        />
      ))}
    </div>
  );
}

export default CoursesBox;
