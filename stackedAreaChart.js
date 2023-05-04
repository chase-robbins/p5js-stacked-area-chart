/**
This function draws a stacked area graph using the given parameters.
@param {number} width - The width of the graph.
@param {number} maxHeight - The maximum height of the graph.
@param {number} x - The x-coordinate of the top-left corner of the graph.
@param {number} y - The y-coordinate of the top-left corner of the graph.
@param {Array} legend - An array of objects representing the data series in the graph.
Each object should have the properties "id" (a unique identifier for the series) 
and "color" (a string representing the color to use for the series, in CSS format).
@param {Array} data - An array of arrays representing the data to be plotted on the graph.
Each inner array should contain objects with properties "id" (matching one of the ids in the
legend), and "value" (the value to plot for that data point).
*/
function stackedAreaChart(width, maxHeight, x, y, legend, data) {
  // Calculate the width of each bar
  const barWidth = width / (data.length - 1);

  // Reformat the data to make it easier to work with
  let reformattedData = legend;

  legend.forEach((item, legendIndex) => {
    let values = [];
    data.forEach((column, columnIndex) => {
      column.forEach((dataPoint) => {
        if (dataPoint.id === item.id) {
          values.push({ x: columnIndex, value: dataPoint.value });
        }
      });

      // Add a zero data point if the current item has no data for this column
      if (values[values.length - 1]?.x !== columnIndex) {
        values.push({ x: columnIndex, value: 0 });
      }

      reformattedData[legendIndex] = { ...item, values };
    });
  });

  // Normalize the data
  let maxValue = 0;
  data.forEach((column) => {
    const columnSum = column.reduce((sum, { value }) => sum + value, 0);
    maxValue = Math.max(maxValue, columnSum);
  });

  let normalizedData = data.map((column) => {
    return column.map(({ id, value }) => {
      return { id, valueNormalized: (value / maxValue) * maxHeight };
    });
  });

  // Draw the stream graph
  for (
    let columnIndex = 0;
    columnIndex < normalizedData.length - 1;
    columnIndex++
  ) {
    let column1 = normalizedData[columnIndex];
    let column2 = normalizedData[columnIndex + 1];
    let y1 = maxHeight;
    let y2 = maxHeight;

    for (let layerIndex = 0; layerIndex < legend.length; layerIndex++) {
      let layer = legend[layerIndex];
      let value1 =
        column1.find(({ id }) => id === layer.id)?.valueNormalized || 0;
      let value2 =
        column2.find(({ id }) => id === layer.id)?.valueNormalized || 0;

      y1 -= value1;
      y2 -= value2;

      fill(layer.color);
      noStroke();

      // Draw a shape using the calculated values
      beginShape();
      vertex(x + columnIndex * barWidth, y + y1);
      vertex(x + (columnIndex + 1) * barWidth, y + y2);
      vertex(x + (columnIndex + 1) * barWidth, y + y2 + value2);
      vertex(x + columnIndex * barWidth, y + y1 + value1);
      endShape(CLOSE);
    }
  }
}
