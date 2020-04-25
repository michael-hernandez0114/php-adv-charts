$(document).ready(function() {

    //console.log('Inside JS');

    $.ajax({

        url: 'server_fatturato.php',
        method: 'GET',
        success: function(data) {

            var graphData = data;

                   createLineChart(graphData);
        },
        error: function(error) {

        }

    });

    $.ajax({

        url: 'server_fattAgent.php',
        method: 'GET',
        success: function(data) {

            var graphData = data;

            console.log(graphData);

            createTorta(graphData);

        },
        error: function(error) {

        }

    });

    function createLineChart(lineChartData) {

        var mesi = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var ctx = $('#linechart');
        var chart = new Chart(ctx, {

            type: lineChartData.type,
            data: {
                labels: mesi,
                datasets: [{
                    backgroundColor: 'green',
                    pointStyle: 'square',
                    borderColor: 'red',
                    fill: true,
                    lineTension: 0.4,
                    showLine: true,
                    label: lineChartData.title,
                    data: lineChartData.data,
                }],

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
