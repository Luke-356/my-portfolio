import portfolio from "../Images/portfolio.jpg";
import idea from "../Images/idea.png";
import pc from "../Images/pc.png";

export const projectDatas = [
  {
    id: 1,
    Title: "Idea University",
    Ptag: "A website for a university where all staff can submit ideas freely within designated topics provided by administrators, and every staff member may share their suggestions.",
    languages: ["Javascript", "PHP", "MySQL", "JQuery"],
    image: idea,
    link: "https://github.com/Luke-356/IdeaUniversity",
  },
  {
    id: 2,
    Title: "AZManage",
    Ptag: "A full-stack web application for managing employee records. It allows users to perform CRUD operations on employee data, including adding, updating, and deleting.",
    languages: ["React", "Node.js", "Express.js", "MongoDB"],
    image: portfolio,
    link: "https://github.com/Luke-356/my-portfolio",
  },
  {
    id: 3,
    Title: "MobiRank",
    Ptag: "MobiRank is a data analysis project aimed at helping consumers find the best smartphones for their budget. It provides a comprehensive analysis of various smartphones.",
    languages: ["Python", "Pandas", "BeautifulSoup", "Matplotlib"],
    image: pc,
    link: "https://github.com/Luke-356/MobiRank",
  },
];
