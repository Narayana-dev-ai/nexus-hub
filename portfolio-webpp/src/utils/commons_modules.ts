export const handleDownload = () => {
  const pdfUrl = "NARAYANA REDDY LAKKIREDDY.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "NARAYANAREDDY_LAKKIREDDY_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
