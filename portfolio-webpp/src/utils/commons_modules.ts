export const handleDownload = () => {
  const pdfUrl = "Narayanareddy Lakkireddy L.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "NARAYANAREDDY_LAKKIREDDY_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const data = [
  { name: "Telugu", language: 1000, level: "Native" },
  { name: "English", language: 800, level: "Proficient" },
  { name: "Hindi", language: 600, level: "Intermediate" },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export const bar_data = [
  { name: "React Js", skill: 800 },
  { name: "Java", skill: 700 },
  { name: "TypeScript", skill: 950 },
  { name: "AWS", skill: 700 },
  { name: "Python", skill: 600 },
];

export const skill_data = [
  { name: "React Js", skill: 800 },
  { name: "Java", skill: 700 },
  { name: "TypeScript", skill: 950 },
  { name: "AWS", skill: 700 },
  { name: "Python", skill: 600 },
  { name: "HTML", skill: 1000 },
  { name: "CSS", skill: 850 },
  { name: "Javascript", skill: 950 },
  { name: "Next Js", skill: 700 },
  { name: "Tailwind", skill: 790 },
  { name: "MySQL", skill: 700 },
  { name: "Git", skill: 980 },
  { name: "Material UI", skill: 850 },
  { name: "Docker", skill: 500 },
  { name: "Junit", skill: 900 },
  { name: "React Testing", skill: 950 },
  { name: "Jest", skill: 900 },
  { name: "Cucumber", skill: 850 },
  { name: "PySpark", skill: 750 },
];
