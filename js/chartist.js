new Chartist.Pie('#chart1', {
  labels: ['95%'],
  series: [95]
}, {
  donut: true,
  donutWidth: 22,
  startAngle: 0,
  total: 100,
  showLabel: true
});

new Chartist.Pie('#chart2', {
  labels: ['90%'],
  series: [90]
}, {
  donut: true,
  donutWidth: 22,
  startAngle: 0,
  total: 100,
  showLabel: true
});

new Chartist.Pie('#chart3', {
  labels: ['80%'],
  series: [80]
}, {
  donut: true,
  donutWidth: 22,
  startAngle: 0,
  total: 100,
  showLabel: true
});

chart1.on('draw', function(data) {
  if(data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: 4000,
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});
