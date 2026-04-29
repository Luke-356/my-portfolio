// src/data/projectData.js

import photobooth from "../Images/photobooth.jpeg";
import studentml from "../Images/studentml.jpeg";
import azmanage from "../Images/azmanage.jpeg";

export const projectDatas = [
  {
    id: 1,
    Title: "PhotoBooth AI App",
    Ptag:
      "Containerized AI-powered image processing application deployed on AWS EC2 using Docker and FastAPI. Includes deployment troubleshooting, networking configuration, and backend system management.",
    languages: ["AWS EC2", "Docker", "FastAPI", "Python", "Linux"],
    image: photobooth,
    link: "https://github.com/Luke-356/PhotoBooth",
  },

  {
    id: 2,
    Title: "Student Performance Prediction",
    Ptag:
      "Machine learning project that predicts student performance using structured datasets, exploratory data analysis, preprocessing, and Random Forest models to identify important academic factors.",
    languages: ["Python", "Pandas", "Scikit-learn", "NumPy", "SQL"],
    image: studentml,
    link:
      "https://github.com/Luke-356/Student-Performance-Prediction-using-Machine-Learning",
  },

  {
    id: 3,
    Title: "AZManage",
    Ptag:
      "Management system project focused on structured user-related data workflows, backend operations, and data consistency across application components.",
    languages: ["React", "Node.js", "MongoDB", "Express.js"],
    image: azmanage,
    link: "https://github.com/Luke-356/AZManage",
  },
];