//Simple Horizontal Bar Chart
JSC.Chart("chart1", {
    type: 'horizontal column',
    series: [{
        points: [
            { x: 'Apples', y: 50 },
            { x: 'Oranges', y: 42 }
        ]
    }]
});

//Horizontal Bar Chart wit multiple charts
JSC.Chart("chart2", {
    type: "horizontal column",
    series: [{
        name: "Andy",
        points: [
            { x: "Apples", y: 50 },
            { x: "Oranges", y: 32 }
        ]
    }, {
        name: "Anna",
        points: [
            { x: "Apples", y: 30 },
            { x: "Oranges", y: 22 }
        ]
    }]
})

//Ge csv file for the tutorial here - https://data.cdc.gov/resource/w9j2-ggv5.csv