import React from 'react';
import covid from "../../assets/images/demoCovid.png";
import help from "../../assets/images/demoHelp.png";
import work from "../../assets/images/demoWorkday.png";
import readme from "../../assets/images/demoREADME.png";
import team from "../../assets/images/demoTeam.png";
import employee from "../../assets/images/demoEmployee.png";


export default function Portfolio() {
  return (
    <div>
      <div>
        <h1>Portfolio Page</h1>
      </div>
      <div className="flex-container">

        <div className="img-container">
          <a href="https://github.com/MaestroLuu/Covid19-Testing-Site-Locator" target='_blank'>
            <img src={covid}></img>
          </a>
        </div>

        <div className="img-container">
          <a href="https://github.com/MaestroLuu/Help-for-Hire" target='_blank'>
            <img src={help}></img>
          </a>
        </div>

        <div className="img-container">
          <a href="https://github.com/JaggedComet/work-day-scheduler" target='_blank'>
            <img src={work}></img>
          </a>
        </div>

        <div className="img-container">
          <a href="https://github.com/JaggedComet/Professional-README-Generator" target='_blank'>
            <img src={readme}></img>
          </a>
        </div>

        <div className="img-container">
          <a href="https://github.com/JaggedComet/Team-Profile-Generator" target='_blank'>
            <img src={team}></img>
          </a>
        </div>

        <div className="img-container">
          <a href="https://github.com/JaggedComet/Employee-Tracker" target='_blank'>
            <img src={employee}></img>
          </a>
        </div>

      </div>

    </div>
  );
}
