import portfolio from "../Images/portfolio.jpg";
import idea from "../Images/idea.png";
import pc from "../Images/pc.png";

export const projectDatas = [
  {
    id: 1,
    Title: "Idea University",
    Ptag: "A website for a university in which all the staffs can give ideas into. Topics for ideas will be given by admin and all the staffs can give their ideas in that topics.",
    languages: ["HTML", "CSS", "Javascript", "PHP"],
    image: idea,
    link: "https://github.com/Luke-356/IdeaUniversity",
  },
  {
    id: 2,
    Title: "My Portfolio",
    Ptag: "The portfolio that showcase all my skills, projects and about me. UI designed professionally by me with figma. It use just json file to store data for simplicity.",
    languages: ["HTML", "TailwindCSS", "Javascript", "React"],
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
