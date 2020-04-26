$(document).ready(function() {

    //console.log('Inside JS');


    $.ajax({

        url: 'step3/server_fatturato.php',
        method: 'GET',
        success: function(data) {

            var graphData = data;

            //console.log(graphData);

            var lineObj = buildDataSetObj(graphData);
            createLineChart(graphData, lineObj, $('#linechart'));
        },
        error: function(error) {

        }

    });

    $.ajax({

        url: 'step3/server_fattAgent.php',
        method: 'GET',
        success: function(data) {

            var graphData = data;

            //console.log(graphData);

            createTorta(graphData);

        },
        error: function(error) {

        }

    });

    $.ajax({

        url: 'step3/server_teamEffi.php',
        method: 'GET',
        success: function(data) {

            var graphData = data;

            //console.log(graphData);

            var lineObj = buildDataSetObj(graphData);

            createLineChart(graphData, lineObj, $('#team-linechart'));

        },
        error: function(error) {
            //console.log('Error calling teamEffi');
            //console.log(error);
        }

    });

    function buildDataSetObj(inputData) {

        //console.log(inputData.length);

        var datasets = [];
        var borderColors = ['green','red','blue'];
        var bgColors = ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.3)'];


        //console.log(inputData['data'].length);


        if (Array.isArray(inputData['data'])) {
            console.log('is an array');
            if (Array.isArray(inputData['data'][0])) {
                console.log('first element is an array');
                for (var i = 0; i < inputData['data'].length; i++) {

                    var dataSetObj = {
                        backgroundColor: bgColors[i],
                        pointStyle: 'square',
                        borderColor: borderColors[i],
                        fill: true,
                        lineTension: 0.4,
                        showLine: true,
                    };
                    dataSetObj.data = inputData['data'][i];
                    dataSetObj.label = inputData['team'][i];

                    console.log('iteration ' + i);

                    console.log(dataSetObj);
                    console.log(datasets);

                    datasets.push(dataSetObj);
                }
            }
            else {
                console.log('No internal arrays');
                var dataSetObj = {
                    backgroundColor: borderColors[0],
                    pointStyle: 'square',
                    borderColor: borderColors[0],
                    fill: true,
                    lineTension: 0.4,
                    showLine: true,
                };
                dataSetObj.label = inputData['title'];
                dataSetObj.data = inputData['data'];

                datasets.push(dataSetObj);
            }
        }

        console.log(datasets);

        return datasets;

    }

    function createLineChart(lineChartData, lineDataSet, chartID) {

        var mesi = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var ctx = chartID;
        var chart = new Chart(ctx, {

            type: lineChartData.type,
            data: {
                labels: mesi,
                datasets: lineDataSet,

            }

        });

    }

    function createTorta(tortaData) {
        var ctx = $('#torta');
        var chart = new Chart(ctx, {

            type: tortaData.type,
            data: {
                labels: tortaData.agents,
                datasets: [{
                    backgroundColor: ['blue','green','red','yellow'],
                    borderColor: 'none',
                    borderWidth: 0,
                    data: tortaData.sales,
                }],


            }
        });
    }

})
