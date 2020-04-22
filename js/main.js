$(document).ready(function() {

    $.ajax({

        url: 'server.php',
        method: 'GET',
        success: function(data) {

            var data_lineChart = data;

            console.log(data_lineChart);

            createLineChart(data);


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





})
