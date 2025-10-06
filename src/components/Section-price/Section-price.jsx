import CoursesBox from "../CoursesBox/CoursesBox";
import SectionTitle from "../SectionTitle/SectionTitle";

import { coursesData } from "../Db/data";

function SectionPrice({ coursesData }) {
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
              <CoursesBox key={index} courses={group} active={false} />
            ))}

            <ul className="dots">
              {coursesData.map((_, index) => (
                <li key={index}></li>
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

// <section id="section-price" class="courses bg-silver">
//         <div class="container">
//             <div class="section-title left ">
//                 <h2>Ծրագրավորման
//                     <span>դասընթացներ</span>
//                 </h2>
//                 <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
//             </div>

//             <div class="section-box">
//                 <div class="section-info">

//                     <div class="courses-box active">

//                         <div class="course-item">
//                             <a href=""><img src="https://smartcode.am/public/image/courses/ai-automation.png"
//                                     /></a>
//                             <h2><a href="">AI Automation</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>1 ամիս</span>
//                                 <span>89,000 ֏</span>
//                             </p>
//                         </div>

//                         <div class="course-item">
//                             <a href=""><img src="https://smartcode.am/public/image/courses/front-end.svg"
//                                     /></a>
//                             <h2><a href="">WEB Front-End</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="#" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>9 ամիս</span>
//                                 <span>58,000 ֏</span>
//                             </p>
//                         </div>

//                         <div class="course-item">
//                             <a href=""><img src="https://smartcode.am/public/image/courses/python-ml.svg"
//                                     /></a>
//                             <h2><a href="">Pyton (ML/AI)</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>7 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>

//                         <div class="course-item">
//                             <a href=""><img src="https://smartcode.am/public/image/courses/java.svg" /></a>
//                             <h2><a href="">Java</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>6 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>

//                     </div>

//                     <div class="courses-box">

//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/javaScript.svg" />
//                             </a>
//                             <h2><a href="">JavaScript</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>3.5 ամիս</span>
//                                 <span>58,000 ֏</span>
//                             </p>
//                         </div>

//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/react.svg" />
//                             </a>
//                             <h2><a href="">React.js (Redux)</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>3 ամիս</span>
//                                 <span>58,000 ֏</span>
//                             </p>
//                         </div>

//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/node.svg" />
//                             </a>
//                             <h2><a href="">Node.js</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>3 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>

//                         <div class="course-item">
//                             <a href=""> <img src="	https://smartcode.am/public/image/courses/devops.svg?v=1.2"
//                                     />
//                             </a>
//                             <h2><a href="">DevOps</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>4 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>

//                     </div>

//                     <div class="courses-box">
//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/C.svg" />
//                             </a>
//                             <h2><a href="">C#</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>6 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/python-django.svg"
//                                     />
//                             </a>
//                             <h2><a href="">Python (Django)</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>5 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/php.svg" />
//                             </a>
//                             <h2><a href="">PHP (Laravel)</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>6 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item">
//                             <a href=""> <img src="https://smartcode.am/public/image/courses/full-stack.svg" />
//                             </a>
//                             <h2><a href="">WEB Full-Stack</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>11 ամիս</span>
//                                 <span>58,000 ֏</span>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="courses-box">
//                         <div class="course-item"><a href=""> <img
//                                     src="https://smartcode.am/public/image/courses/ui-ux.svg?v=1.1" />
//                             </a>
//                             <h2><a href="">UX/UI Design</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>4 ամիս</span>
//                                 <span>65,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item"><a href=""> <img
//                                     src="https://smartcode.am/public/image/courses/qa.svg" />
//                             </a>
//                             <h2><a href="">QA Engineer</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>6 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item"><a href=""> <img
//                                     src="	https://smartcode.am/public/image/courses/graphic-design.svg?v=1.2"
//                                     />
//                             </a>
//                             <h2><a href="">Graphic Design</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>3 ամիս</span>
//                                 <span>65,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item"><a href=""> <img
//                                     src="	https://smartcode.am/public/image/courses/pm.svg" />
//                             </a>
//                             <h2><a href="">Product Management</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>4 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>
//                     </div>
//                     <div class="courses-box">
//                         <div class="course-item"><a href=""> <img
//                                     src="https://smartcode.am/public/image/courses/pm.svg" />
//                             </a>
//                             <h2><a href="">C++</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>6 ամիս</span>
//                                 <span>68,000 ֏</span>
//                             </p>
//                         </div>
//                         <div class="course-item"><a href=""> <img
//                                     src="https://smartcode.am/public/image/courses/interior-design.svg" />
//                             </a>
//                             <h2><a href="">Interior Design</a></h2>
//                             <h3>Դասընթաց</h3>
//                             <a href="" class="btn-act">Դիտել</a>
//                             <p>
//                                 <span>8 ամիս</span>
//                                 <span>65,000 ֏</span>
//                             </p>
//                         </div>

//                     </div>
//                     <ul>
//                         <li class="active" data-slide="0"></li>
//                         <li class="" data-slide="1"></li>
//                         <li class="" data-slide="2"></li>
//                         <li class="" data-slide="3"></li>
//                         <li class="" data-slide="4"></li>
//                     </ul>
//                 </div>
//                 <img src="https://smartcode.am/public/image/per4.svg" class="section-image"/>
//             </div>

//         </div>
//     </section>
