import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm: text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Nam</span>
    </h1>
  ),
  2: (
    <InfoBox
      text={"Team-work, determination, and practice are what I stand by"}
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Learning and implementing for me goes hand in hand. \n With my curiosity, quick learning capacity, and my dive into lower abstractions, these are the results"
      }
      link={"/projects"}
      btnText={"View my works"}
    />
  ),
  4: (
    <InfoBox
      text={
        "I am always looking for the chances to prove myself and be a part of something greater. "
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
