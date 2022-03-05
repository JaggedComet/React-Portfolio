import React from 'react';
import profile from "../../assets/images/profile.jpg"

export default function About() {
  return (
    <div>
      <h1>About Me Page</h1>
        <div>
          <img src={profile} alt="profile pic" className="profile-img"/>
        </div>
          <p className="about-font">
          My name is Marco Flores and I'm looking for a start in a new career. I've been taking college classes 
                for the last couple of years and decided that I would like to try my hand at coding.
                Initially I was going to join the military in order to get experience in my field before going to the 
                private sector, but I decided to take a coding bootcamp online at UCSD extension that is partnered with Trilogy.
                I hope to be able to get a job in coding after graduation from this course and start my career in programing.
          </p>
    </div>
  );
}
