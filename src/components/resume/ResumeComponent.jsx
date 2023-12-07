import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/chandresh-resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Madhavkabra/Portfolio/master/src/Assets/Resume%20Madhav%202023%20Dated.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

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
    <div className="container mx-auto flex justify-center m-4">
      <div className="max-w-2xl relative pt-28 pb-8 bg-section-background-color text-white flex flex-col items-center">
        <div style={{ justifyContent: "center", position: "relative" }}>
          <a
            className="bg-[#804dee] text-white px-4 py-2 rounded-md"
            href={pdf}
            target="_blank"
            download="chandreshResume"
            style={{ maxWidth: "250px" }}
            onClick={trackDownload}
          >
            Download CV
          </a>
        </div>

        <div className="py-12 flex justify-center flex-wrap ">
          <Document
            file={resumeLink}
            className="d-flex flex-column align-items-center justify-content-center "
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} wrap />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} wrap />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
