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
      <div className="container">
        <div className="header">
          <h1>JAY ANN ROSE GERENTE</h1>
          <p>Web Designer</p>     
        </div>
        <div className="header-bottom">
          <p>123 Anywhere St., Any City, ST 12345</p>
          <p>09106128058 <span className="email">gerente.jayannrose.bscs2021@gmail.com</span></p>
          <hr />
        </div>

        <div className="bottom">
          <p className="text-header">Career Objective</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut officia consectetur veritatis officiis repudiandae laboriosam minus! Sunt at quod laboriosam ab quibusdam quidem excepturi, laudantium velit nulla cumque ratione maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cumque?</p>
          <hr />

          <p className="text-header">Achievements</p>
          <div className="list-container">
          <ul className="left-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <ul className="right-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          </div>
          <hr />

          <p className="text-header">Education</p>
          <strong><p>Bachelor of Science in Computer Science</p></strong>
          <p>University of Caloocan City <strong>2020-2025</strong></p>
          <hr />

          <p className="text-header">Projects</p>
          <ul className="left-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <ul className="right-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <hr />

          <p className="text-header">Certifications</p>
          <ul className="left-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <ul className="right-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <hr />

          <p className="text-header">Skills</p>
          <ul className="left-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <ul className="right-list">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
      {/* ---------------------- */}
    </>
  );
}

export default App;
