import { useState } from "react";
import CoursesBox from "../CoursesBox/CoursesBox";
import SectionTitle from "../SectionTitle/SectionTitle";

import "../Section-price/SectionPrice.css";

function SectionPrice({ coursesData }) {
 const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="section-price" className="courses bg-silver">
      <div className="container">
        <SectionTitle
          title="Ծրագրավորման"
          highlight="դասընթացներ"
          description="Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար"
        />

        <div className="section-box">
          <div className="section-info">
             {coursesData.map((group, index) => (
              <CoursesBox
                key={index}
                courses={group}
                active={index === activeIndex}
             
              />
            ))}

           
            <ul className="dots">
              {coursesData.map((_, index) => (
                <li
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                ></li>
              ))}
            </ul>
          </div>

          <img
            src="https://smartcode.am/public/image/per4.svg"
            className="section-image"
            alt="section illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionPrice;

