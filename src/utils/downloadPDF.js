import { jsPDF } from "jspdf";

const doc = new jsPDF({
  orientation: "p",
  unit: "px",
  format: "letter",
});

const downloadPDF = (DIV_NAME) => {
  const container = document.getElementsByClassName(DIV_NAME)[0];

  doc.html(container, {
    callback: function (doc) {
      var string = doc.output("datauristring");
      var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
      var x = window.open();
      x.document.open();
      x.document.write(embed);
      x.document.close();
    },
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 459,
  });
};

export default downloadPDF;
