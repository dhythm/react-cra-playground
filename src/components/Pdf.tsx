import PDFViewer from "pdf-viewer-reactjs";
import { Document, Page } from "react-pdf";
import "./pdf.css";

export const Pdf = () => (
  <>
    <PDFViewer
      document={{
        url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
      }}
    />
    <div>
      <Document
        file="somefile.pdf"
        onLoadSuccess={({ numPages }) => console.log(numPages)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  </>
);
