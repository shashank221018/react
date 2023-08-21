google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Total APIs'],
          ['Mar',  20],
          ['Apr',  120],
          ['May',  310],
          ['June',  435],
          ['July',  250],
          ['Aug',  305],
          ['Sept',  40],
          ['Oct',  90],
          ['Nov',  30],
          ['Dec',  110],
          ['Jan',  220],
          ['Feb',  130]
        ]);

        var options = {
          title: 'Real time & Historical Data',
          hAxis: {title: ' ',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          colors: ['#97144d'],
          legend: 'none',
          curveType: 'function'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }