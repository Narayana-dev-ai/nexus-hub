export const handleDownload = () => {
  const pdfUrl = "NARAYANA REDDY LAKKIREDDY.pdf";
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
