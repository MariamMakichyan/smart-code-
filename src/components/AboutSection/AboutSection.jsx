import AboutInfo from "../AboutInfo/AboutInfo";

function AboutSection({paragraphs}) {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>Մեր <span>մասին</span></h2>
          <p>Ընկերության գործունեության մասին</p>
        </div>

        <div className="section-box">
          <AboutInfo paragraphs={paragraphs} />
          <img 
            src="https://smartcode.am/public/image/per3.svg" 
            className="section-image" 
            alt="About SmartCode" 
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;