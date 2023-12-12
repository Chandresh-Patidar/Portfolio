import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/chandresh-resume.pdf";
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Chandresh-Patidar/Portfolio/portfolio/v1/src/assets/chandresh-resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const scale =
    width > 1200 ? 1.7 : width >= 641 ? 1 : width >= 375 ? 0.6 : 0.5;

  console.log("scale", scale);
  console.log("width", width);
  useEffect(() => {
    gtag("event", "Resume page", {
      event_category: "Page view",
      event_label: "Resume page view",
    });
    setWidth(window.innerWidth);
  }, []);

  const trackDownload = () => {
    gtag("event", "Resume download", {
      event_category: "Download",
      event_label: "Resume download",
    });
  };

  return (
    <div className="w-full flex justify-center   min-h-screen sm:min-h-[calc(100vh-105px)]">
      <div className="pt-28 pb-8 bg-section-background-color text-white">
        <div className="flex align-center justify-center">
          <Link
            className="bg-[#804dee] text-white px-4 py-2 rounded-md"
            href={pdf}
            target="_blank"
            download="chandreshResume"
            style={{ maxWidth: "250px" }}
            onClick={trackDownload}
          >
            Download CV
          </Link>
        </div>

        <div className="py-12 flex justify-center flex-wrap overflow-hidden ">
          <Document
            file={resumeLink}
            className="d-flex flex-column align-items-center justify-content-center "
          >
            <Page pageNumber={1} scale={scale} wrap />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
