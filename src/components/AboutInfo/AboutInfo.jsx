import './AboutInfo.css'

function AboutInfo({paragraphs}) {
  return (
    <div className="section-info">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}

export default AboutInfo;