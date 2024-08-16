"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil recusandae eveniet accusamus beatae.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gerald Baalham",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 759 871 838",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Gerald.Baal",
    },
    {
      fieldName: "Nationality",
      fieldValue: "British",
    },
    {
      fieldName: "email",
      fieldValue: "gerald.baalham@live.co.uk",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/Resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil recusandae eveniet accusamus beatae.",
  items: [
    {
      company: "Tech Solutions",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Design",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Academy",
      position: "UI/UX Design",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Co",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

// education data
const education = {
  icon: "/assets/Resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil recusandae eveniet accusamus beatae.",
  items: [
    {
      Establishment: "Online Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      Establishment: "Codecademy",
      position: "Front End Track",
      duration: "2022",
    },
    {
      Establishment: "Online Course",
      position: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      Establishment: "Tech Institute",
      position: "Certified Web Developer",
      duration: "2019",
    },
    {
      Establishment: "Design School",
      position: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      Establishment: "Community College",
      position: "Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
