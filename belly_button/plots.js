function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

// function optionChanged(newSample) {
//     console.log(newSample);
// };  
function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
};

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = Object.entries(resultArray[0]);
    
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result[0]);
    PANEL.append("h6").text(result[1]);
    PANEL.append("h6").text(result[2]);
    PANEL.append("h6").text(result[3]);
    PANEL.append("h6").text(result[4]);
    PANEL.append("h6").text(result[5]);
    PANEL.append("h6").text(result[6]);
    // PANEL.append("h6").text(result.id);
  });
};

