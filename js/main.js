$(document).ready(function() {

    $.ajax({




    });




    function createLineChart(chartData) {
        var ctx = $('#linechart');
        var chart = new Chart(ctx, {

            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    backgroundColor: 'blue',
                    pointStyle: 'square',
                    borderColor: 'blue',
                    fill: false,
                    lineTension: 0,
                    showLine: true,
                    label: '2017',
                    data: chartData.allData,
                }],


            }

        });

    }





})
