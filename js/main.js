$(document).ready(function() {

    //console.log('Inside JS');

    $.ajax({

        url: 'server.php',
        method: 'GET',
        success: function(data) {

            var graphData = data;

            //console.log(graphData);


            for (var graph in graphData) {
                //console.log(graphData[graph]);
                console.log(graphData[graph].type);
                console.log(graphData[graph].data);

                if (graphData[graph].type === 'line') {
                    createLineChart(graphData[graph].data);
                }
                else if (graphData[graph].type === 'pie') {
                    // parse the label and data into two different arrays
                    // call function to create pie chart
                }
            }


        },
        error: function(error) {

        }


    });




    function createLineChart(lineChartData) {

        var mesi = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var ctx = $('#linechart');
        var chart = new Chart(ctx, {

            type: 'line',
            data: {
                labels: mesi,
                datasets: [{
                    backgroundColor: 'green',
                    pointStyle: 'square',
                    borderColor: 'red',
                    fill: true,
                    lineTension: 0.4,
                    showLine: true,
                    label: 'Vendite',
                    data: lineChartData,
                }],


            }

        });

    }

    function createTorta(tortaData) {
        var ctx = $('#torta');
        var chart = new Chart(ctx, {

            type: 'pie',
            data: {
                labels: tortaData.labels,
                datasets: [{
                    backgroundColor: ['blue','green','red','yellow'],
                    borderColor: 'none',
                    borderWidth: 0,
                    data: tortaData.allData,
                }],


            }
        });
    }





})
