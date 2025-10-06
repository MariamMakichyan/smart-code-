function CourseItem({ img, title, duration, price }) {
  return (
    <div className="course-item">
      <a href="">
        <img src={img} alt={title} />
      </a>
      <h2><a href="">{title}</a></h2>
      <h3>Դասընթաց</h3>
      <a href="" className="btn-act">Դիտել</a>
      <p>
        <span>{duration}</span>
        <span>{price} ֏</span>
      </p>
    </div>
  );
}

export default CourseItem;
