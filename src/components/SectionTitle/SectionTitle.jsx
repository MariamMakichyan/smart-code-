function SectionTitle({ title, highlight, description }) {
  return (
    <div className="section-title left">
      <h2>
        {title} <span>{highlight}</span>
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default SectionTitle;