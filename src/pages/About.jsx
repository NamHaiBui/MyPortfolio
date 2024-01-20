import React from "react";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CTA from "../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      {" "}
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Nam
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          {" "}
          I am currently a junior Undergraduate at Dickinson College, majoring
          in Computer Science and Math. <br /> I aspires to be a great Software
          Engineer and I am confident that I have the mindset and skillset to
          achieve it.{" "}
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl">
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* My Experience */}
      <div className="py-16">
        <h3 className="subhead-text"> Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am constantly expanding my skillsets and adapting to the
            ever-changing world of tech. Thus, I have worked in different
            environment with different teams and cultures. <br />
            Here is a quick run-down:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "None",
                }}
              >
                <div>
                  <h3 className="text-black text-cl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    stye={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {" "}
                    {experience.points.map((point, index) => {
                      <li
                        key={`experience-point-${index}`}
                        className="text-balck-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>;
                    })}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
