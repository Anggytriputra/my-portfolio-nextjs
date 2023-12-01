"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Stroke Prediction With Model Classification",
    description:
      "Globally, stroke is the second leading cause of death and the third leading cause of disability. One in four people are in danger of stroke in their lifetime. Lifestyle risk factors for stroke include being overweight or obese, physical inactivity, tobacco use and alcohol abuse. Medical risk factors include high blood pressure, high cholesterol, diabetes and a personal or family history of stroke or heart attack. An estimated 70% of strokes occur in low- and middle-income countries, which also account for 87% of stroke-related deaths and disability-adjusted life years.",
    image: "/images/projects/stroke_prediction.png",
    url_web: "https://anggytriputra.github.io/portfolio_web/",
    url_repositori:
      "https://github.com/Anggytriputra/Anggy_Portofolio/tree/main/Project_1",
    tag: ["All", "Data Enthusiast"],
  },
  {
    id: 2,
    title: "Building material Web App",
    description:
      "Bangunin is a full-fledged e-commerce app selling diverse building materials. With branches in Malang and Jakarta, users can buy products, claim referral code vouchers, and various other features. As admins, you can manage products, categories, discount vouchers, and more. This is the final project that I did for Purwadhika Bootcamp.",
    image: "/images/projects/bangunin_app.png",
    url_web: "https://jcwdol0903.purwadhikabootcamp.com/",
    url_repositori: "https://github.com/Anggytriputra/JCWDOL0903",
    tag: ["All", "Web Development"],
  },
  {
    id: 3,
    title: "Quantum Nusatama Asset Web App",
    description: "Pro",
    image: "/images/projects/qn_asset.png",
    url_repositori: "https://github.com/Anggytriputra/qn_assets",
    tag: ["All", "Web Development"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          handle={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          handle={handleTagChange}
          name="Web Development"
          isSelected={tag === "Web Development"}
        />
        <ProjectTag
          handle={handleTagChange}
          name="Data Enthusiast"
          isSelected={tag === "Data Enthusiast"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects
          .sort((a, b) => b.id - a.id)
          .map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                urlWeb={project.url_web}
                urlRepo={project.url_repositori}
              />
            </motion.li>
          ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
