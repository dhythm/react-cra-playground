import PDFViewer from "pdf-viewer-reactjs";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
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
        file="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
        onLoadSuccess={({ numPages }) => console.log(numPages)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  </>
);
