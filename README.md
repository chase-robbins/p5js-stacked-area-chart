# p5.js Stacked Area Chart

This is a function that draws a modular p5js stacked area chart using the given parameters.

![chart image](readme_image.png)

## Usage

Call the function `stackedAreaChart` with the following parameters:

- `width` (number): The width of the graph.
- `maxHeight` (number): The maximum height of the graph.
- `x` (number): The x-coordinate of the top-left corner of the graph.
- `y` (number): The y-coordinate of the top-left corner of the graph.
- `legend` (array): An array of objects representing the data series in the graph. Each object should have the properties "id" (a unique identifier for the series) and "color" (a string representing the color to use for the series, in CSS format).
- `data` (array): An array of arrays representing the data to be plotted on the graph. Each inner array should contain objects with properties "id" (matching one of the ids in the legend), and "value" (the value to plot for that data point).

To embed the `stackedAreaChart.js` file in your `index.html` file alongside p5.js, you can follow these steps:

1. Download the `stackedAreaChart.js` file from the GitHub repository by visiting the following link: https://raw.githubusercontent.com/chase-robbins/p5js-stacked-area-chart/main/stackedAreaChart.js

2. Save the downloaded file to your local project directory.

3. In your `index.html` file, add a script tag to include p5.js and the `stackedAreaChart.js` file. The script tag should be placed before the closing body tag, like this:

```
<body>
   <!-- Your HTML content goes here -->
   <!-- Include p5.js -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
   <!-- Include stackedAreaChart.js -->
   <script src="stackedAreaChart.js"></script>
</body>
```

4. Save your index.html file and open it in a web browser. You should now be able to use the stackedAreaChart function from within your p5.js sketch.
   Note that the URL in the script tag for p5.js points to a content delivery network (CDN) that hosts the p5.js library. If you prefer to host the library yourself, you can download it from the p5.js website and include it as a local file instead.

Just replace the example URLs and filenames with the ones specific to your project.

## Example

```
let legend = [
  { id: "series1", color: "#FF0000" },
  { id: "series2", color: "#00FF00" },
  { id: "series3", color: "#0000FF" },
];

let data = [
  [
    { id: "series1", value: 10 },
    { id: "series2", value: 20 },
    { id: "series3", value: 30 },
  ],
  [
    { id: "series1", value: 20 },
    { id: "series2", value: 10 },
    { id: "series3", value: 40 },
  ],
  [
    { id: "series1", value: 30 },
    { id: "series2", value: 30 },
    { id: "series3", value: 20 },
  ],
];

stackedAreaChart(400, 200, 50, 50, legend, data);
```

## Parameters

- `width` (number): The width of the graph.
- `maxHeight` (number): The maximum height of the graph.
- `x` (number): The x-coordinate of the top-left corner of the graph.
- `y` (number): The y-coordinate of the top-left corner of the graph.
- `legend` (array): An array of objects representing the data series in the graph. Each object should have the properties "id" (a unique identifier for the series) and "color" (a string representing the color to use for the series, in CSS format).
- `data` (array): An array of arrays representing the data to be plotted on the graph. Each inner array should contain objects with properties "id" (matching one of the ids in the legend), and "value" (the value to plot for that data point).

## How It Works

The `stackedAreaChart` function performs the following steps:

1. Calculates the width of each bar based on the total width and number of data points.
2. Reformats the input data to make it easier to work with.
3. Normalizes the data to fit within the specified maximum height.
4. Draws the stacked area graph using p5.js shape functions.

The function uses p5.js methods like `beginShape()`, `vertex()`, and `endShape()` to create the stacked area chart. It iterates through each data point and draws shapes representing the areas for each series.

## License

This component is licensed under the MIT License. Developed as part of [Aaron Siegel](https://twitter.com/datadreamer)'s "Designing Digital Experiences" class at the [USC Iovine & Young Academy](https://iovine-young.usc.edu/).
