



import { useState } from "react";
import DropBox from "../DropBox/DropBox";
import ButtonMain from "../ButtonMain/ButtonMain";

import "../AdvantageSection/AdvantageSection.css";

function AdvantageSection({ dropboxesData,  onRegisterClick  }) {

  const [openIndex, setOpenIndex] = useState(null);

  
  const handleToggle = (index) => {
   
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="section-advantage" className="features">
      <div className="container">
        <div className="section-title">
          <h2>
            Ինչո՞ւ սովորել <span>մեզ մոտ</span>
          </h2>
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
                  description={item.description}
                  isOpen={openIndex === index}   // ✅ ստանում է բաց/փակ վիճակը
                  onToggle={() => handleToggle(index)}  // ✅ փոխանցում ենք սեղմման ֆունկցիան
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="section-foot">
          <ButtonMain href="#" text="Սկսե՛լ ուսումը"   onClick={onRegisterClick} />
        </div>
      </div>
    </section>
  );
}

export default AdvantageSection;

