import downloadPDF from "./utils/downloadPDF";
import "./assets/style.css";

function App() {
  const DIV_NAME = "container";

  const handleDownload = () => {
    downloadPDF(DIV_NAME);
  };

  return (
    <>
      <div>
        <button onClick={handleDownload}>TEST</button>
      </div>
      {/* Place your resume here */}

      {/* ---------------------- */}
    </>
  );
}

export default App;
