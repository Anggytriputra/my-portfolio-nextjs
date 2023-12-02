"use client";
import React, { useTransition, useState } from "react";
import Images from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",

    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Mysql</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>React.js</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ol className="list-disc pl-2">
        <li className="font-bold">
          University Serang Raya <span className="font-normal">(2022)</span>
        </li>
        <div className="text-gray-200">Bachelor of Chemical Engineering</div>
      </ol>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Full stack Web Development</li>
        <li>Data Science Program</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white"
      id="about"
    >
      {/* md:grid-cols-2 = menjadi 2 column */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Images
          src={"/images/about-image.png"}
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base  lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Tailwind, Redux, Node.js, Express,
            Mysql, Sequelize, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
