// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let = object = metadata.filter(i=> i.id == sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select ("#sample-metadata");

    // Use `.html("") to clear any existing metadata

    panel.html("");
    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let sampleField = data.samples;

    // Filter the samples for the object with the desired sample number
    let info  = sampleData.filter(i =>i.id== sample)[0]

    // Get the otu_ids, otu_labels, and sample_values
    let otuIds = info.otu_ids;
    let otuLabels = info.otu_labels;
    let sampleValues = info.sample_values;

    // Build a Bubble Chart
    let bubbledata = [{
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Earth'
    }];

    let bubbleLayout = {
      title: " Sample Per Bacteria Cultures",
      xaxis: { title: "OTU ID" },
      hovermode: "closest",
      margin: { t: 30 }
    };

    // Render the Bubble Chart
    plotley.newplot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let yticks = otuIds.map(i => `OTU: ${i}`);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let barData = [{
    title:"Top 10 Bacteria Culture"
    x: sampleValues.slice(0,10).reverse(),
    y: yticks,
    text: otuLabels.slice(0,10).reverse()
    type: "bar"
    margin: { t: 30, l: 150 }
}];

    // Render the Bar Chart
 plotly.newplot(barData,BarLayout)

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
