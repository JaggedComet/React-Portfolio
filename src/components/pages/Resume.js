import React from 'react';
import Resume1 from "../../assets/images/Resume.pdf";
import ResumeImg1 from "../../assets/images/resume1.png";
import ResumeImg2 from "../../assets/images/resume2.png";

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <div className="centerText">
      <h1>Resume</h1>
      <a href={Resume1}>
        <img src={ResumeImg1} alt="resumeimg1" className="resume-img"/>
        <img src={ResumeImg2} alt="resumeimg2" className="resume-img"/>
      </a>
      <h3>
        Technologies Known
        <h4>
          <ul className="resumeFont">
            <li>HTML5</li>
            <li>CSS</li>
            <li>Javascript ES6+</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>Inquirer</li>
            <li>Handlebars</li>
            <li>Insomnia</li>
            <li>GraphQL</li>
            <li>Jest</li>
          </ul>
        </h4>
      </h3>
    </div>
    </div>
  );
}
