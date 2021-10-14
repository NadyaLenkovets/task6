// ============  charts  ============ 
//  ===========  chart 1 - bar  ============  //

Chart.defaults.font.size = '14px';
Chart.defaults.font.weight = '500';
Chart.defaults.font.family = "'IBM Plex Sans'";
Chart.defaults.color = '#7C9CBF';
Chart.defaults.backgroundColor = '#aaa';


let ctx = document.getElementById('myChart1').getContext('2d');
let myChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Unit'],
      datasets: [{
         label: 'Pageviews',
         data: [30.5, 26.1, 12.4, 21.9, 28.9, 32.1, 24.7],
         backgroundColor: ['rgba(214, 207, 110, 1)'],
         borderColor: ['rgba(214, 207, 110, 1)'],
         borderWidth: 1,  
         }, {
         label: 'Conversions',
         data: [41, 33.2, 17.3, 29.7, 38.4, 42, 32.1],
         backgroundColor: ['rgba(20, 163, 139, 1)'],
         borderColor: ['rgba(20, 163, 139, 1)'],
         borderWidth: 1
       }],
   },
   options: {
      responsive: true,
      maintainAspectRatio: false,
      barPercentage: 1,
      barThickness: 16,
      hoverBackgroundColor: '#7c9cbf',
      hoverBorderColor: '#7c9cbf',
      scales: {
         x: {
            grid: {
               drawBorder: false,
               display: false,
            },
         },
         y: {
            grid: { 
               drawBorder: false,
               borderDash: [5, 5],
               tickBorderDash: [5, 5],
               color: function(context) {
                  if (context.tick.value > 40) {
                  return this.display = false;
                  } else {
                     return '#dbe2ea';
                  }
               },
            },
            ticks: {
               padding: 30,
               stepSize: 10,
               max: 40,
               callback: function(val, index, context) {
                  // Hide the label of every 2nd dataset
                  if (index === 0) {
                     return this.getLabelForValue(val) + 'K';
                  } else if (index % 5 !== 0) {
                     return this.getLabelForValue(val) + 'K';
                  } else {
                     return '';
                  };
               },
            },
         },
      },
      plugins: {
         legend: {
            display: true,
            position: 'bottom',
            labels: {
               usePointStyle: true,
               pointStyle: 'rectRounded',
               padding: 43,
            },
         },
      },
   }
});

// размеры chart1
ctx.canvas.parentNode.style.height = '420px';


//  =====================  chart 2 - line  =====================  //

let ctx2 = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctx2, {
   type: 'line',
   data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
         label: 'Ghost Variant',
         data: [184, 141, 53, 50, 99, 109, 60],
         backgroundColor: ['rgba(20, 163, 139, 1)'],
         borderColor: ['rgba(20, 163, 139, 1)'],
         borderWidth: 2,
      }, {
         label: 'Fill Variant',
         data: [8, 106, 101, 38, 47, 153, 180],
         backgroundColor: ['rgba(214, 207, 110, 1)'],
         borderColor: ['rgba(214, 207, 110, 1)'],
         borderWidth: 2,  
      }],
   },
   options: {
      responsive: true,
      maintainAspectRatio: false,
      hoverBackgroundColor: '#7c9cbf',
      hoverBorderColor: '#7c9cbf',
      lineTension: 0.39,
      datasets: {
         line: {
         },
      },
      scales: {
         x: {
            grid: {
               drawBorder: false,
               display: false,
            },
         },
         y: {
            grid: {
               drawBorder: false,
               borderDash: [5, 5],
               tickBorderDash: [5, 5],
               color: function(context) {
                  if (context.tick.value > 200) {
                  return this.display = false;
                  } else {
                     return '#dbe2ea';
                  }
               },
            },
            ticks: {
               padding: 30,
               stepSize: 50,
               max: 200,
               position: 'left',
            },
         },
      },
      layout: {
            top: 180,
      },
      plugins: {
         legend: {
            display: true,
            position: 'bottom',
            labels: {
               usePointStyle: true,
               pointStyle: 'rectRounded',
               boxHeight: 40,
               padding: 43,

            },
         },
      },
   }
});


//  =====================  chart 3 - donut  =====================  //

let ctx3 = document.getElementById('myChart3').getContext('2d');
let myChart3 = new Chart(ctx3, {
   type: 'doughnut',
   data: {
      labels: ['35% Web', '45% Mobile', '20% Social'],
      datasets: [{
         data: [35, 45, 20],
         backgroundColor: [
            'rgba(20, 163, 139, 1)',
            'rgba(214, 207, 110, 1)',
            'rgba(8, 128, 174, 1)',
         ],
      }],
   },
   options: {
      responsive: true,
      maintainAspectRatio: false,
      datasets: {
         doughnut: {
            hoverBackgroundColor: '#7c9cbf',
            hoverOffset: 5,
            rotation: 170,
            radius: '90%',
         },
      },
      scales: {
         x: {
            grid: {
               drawBorder: false,
               display: false,
            },
            ticks: {
               display: false, 
            },
         },
         y: {
            grid: {
               drawBorder: false,
               display: false,
            },
            ticks: {
               display: false, 
            },
         },
      },
      plugins: {
         legend: {
            display: true,
            position: 'right',
            maxWidth: 220,
            labels: {
               usePointStyle: true,
               pointStyle: 'rectRounded',
               padding: 24,
               position: 'start',
            },
         },
      },
   }
});

// размеры chart3
ctx3.canvas.parentNode.style.height = '350px';