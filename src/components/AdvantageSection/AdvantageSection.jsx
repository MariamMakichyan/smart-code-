import DropBox from "../DropBox/DropBox";
import ButtonMain from "../ButtonMain/ButtonMain";
function AdvantageSection({dropboxesData}) {
  return (
    <section id="section-advantage" className="features">
      <div className="container">

        <div className="section-title">
          <h2>Ինչո՞ւ սովորել <span>մեզ մոտ</span></h2>
          <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
        </div>

        <div className="section-box">
          <img 
            src="https://smartcode.am/public/image/per2.svg" 
            className="section-image" 
            alt="Advantage" 
          />
          <div className="section-info">
            <ul>
              {dropboxesData.map((item, index) => (
                <DropBox
                  key={index}
                  iconClass={item.iconClass}
                  title={item.title}
                  subtitle={item.subtitle}
                >
                  {item.description}
                </DropBox>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-foot">
             <ButtonMain href="#" text="Սկսե՛լ ուսումը"  />
        </div>
      </div>
    </section>
  );
}

export default AdvantageSection;