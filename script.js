new Chartist.Pie('#chart1', {
	series: [40, 30, 20, 10]
}, {
	donut: true,
	donutWidth: 40,
	donutSolid: true,
	startAngle: 0,
	total: 100,
	showLabel: true
})


new Chartist.Bar('#chart2', {
  labels: ['Recyclable', 'Reusable energy'],
  series: [20, 80]
}, {
  distributeSeries: true,
  seriesBarDistance: 100
});

var chart = new Chartist.Line('#chart3', {
  labels: ['D-121', 'D-122', 'D-123', 'D-124', 'D-125', 'D-126', 'T'],
 
  series: [{
    name: 'series-1',
    data: [0, 0, 0, 2, 4, 2, 1]
  }, {
    name: 'series-2',
    data: [1, 1, 1, -1, 3, 2, 1]
  },]
}, {
  fullWidth: true,

  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.step(),
	    showPoint: false
    },
    'series-2': {
      lineSmooth: Chartist.Interpolation.simple(),
	    showArea: true
    },
  }
}, [
 
  ['screen and (max-width: 320px)', {
    series: {
      'series-1': {
        lineSmooth: Chartist.Interpolation.none()
      },
      'series-2': {
        lineSmooth: Chartist.Interpolation.none(),
        showArea: false
      },
    }
  }]
]);

//

var chart = new Chartist.Line('#chart4', {
  labels: ['D-121','D-122', 'D-123', 'D-124', 'D-125', 'D-126', 'Today'],
  series: [
    [160, 180, 200, 210, 240, 260, 265]
  ]
});

chart.on('draw', function(data) {
  if(data.type === 'point') {

    var triangle = new Chartist.Svg('path', {
      d: ['M',
        data.x,
        data.y - 15,
        'L',
        data.x - 15,
        data.y + 8,
        'L',
        data.x + 15,
        data.y + 8,
        'z'].join(' '),
      style: 'fill-opacity: 1'
    }, 'ct-area');
	  
    data.element.replace(triangle);
  }
});

