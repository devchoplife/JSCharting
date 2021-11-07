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

//fetch the csv file 
fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
    .then(function(response) {
        return response.text();
    })
    .then(function(text) {
        let series = csvToSeries(text);
        renderChart(series);
    })
    .catch(function(error) {
        //throw error if csv file cannot be downloaded
        console.log(error)
    });



function csvToSeries(text) {
    const lifeExp = "average_life_expectancy";
    let male = [],
        female = [];
    //convert the csv text to json
    let jsonData = JSC.csv2Json(text);
    //loop over the json data 
    jsonData.forEach(function(row) {
        //Add either to male or female or discard
        if (row.race === 'All Races') {
            if (row.sex === 'Male') {
                male.push({ x: row.year, y: row[lifeExp] });
            } else if (row.sex === 'Female') {
                female.push({ x: row.year, y: row[lifeExp] })
            }
        }
    })

    console.log([male, female])
    return [
        { name: 'male', points: male },
        { name: 'Female', points: female }
    ];
}

function renderChart(series) {
    JSC.Chart('chart3', {
        title_label_text: "Life Expectancy in the United States of America",
        annotations: [{
            label_text: 'Source: National Center for Health Statistics',
            position: 'bottom right'
        }],
        series: series
    })
}