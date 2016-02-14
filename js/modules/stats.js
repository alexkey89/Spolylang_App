!(function(){
    "use strict";
    
var stats = {}

stats.init = function (){

    var scoreS = JSON.parse(localStorage.getItem('usersLastScores'))
        var currentYear = new Date();    
        currentYear.getFullYear() + "/" + (currentYear.getMonth() + 1) + "/" + currentYear.getDate();

    $('.stats_screen').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: currentYear.toJSON(currentYear).slice(0, 10)
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 4 * 24 * 3600000 // fourteen days
        },
        yAxis: {
            title: {
                text: 'Your Performance'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Performance',
            pointInterval: 24 * 3600 * 1000,
            pointStart: 0,
            data: scoreS
        }]
    });
};

return window.stats = stats;

})();

