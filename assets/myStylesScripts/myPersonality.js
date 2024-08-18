
$("#myPersonality .MBTI .chart .trait").hover(function(e) {
  const traitId = $(e.currentTarget).attr("data-id");

  // Stop any ongoing animations from previously
  $("#myPersonality .MBTI .intro [data-id='0']").stop(true, true);
  
  $("#myPersonality .MBTI .intro [data-id='0']").hide();
  $("#myPersonality .MBTI .intro [data-id='"+ traitId +"']").show();
}, function(e) {
  const traitId = $(e.currentTarget).attr("data-id");
  $("#myPersonality .MBTI .intro [data-id='"+ traitId +"']").hide();
  $("#myPersonality .MBTI .intro [data-id='0']").fadeIn(100);
});



//Chart for OCEAN
const $canvasOCEAN = $("#myPersonality .OCEAN canvas");
let ctx = $canvasOCEAN.get(0).getContext('2d');

const dataOCEAN = {
  labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
  datasets: [{
    data: [60, 72, 30, 45, 65],
    backgroundColor: [
      'rgb(218, 169, 216, 0.5)', //Purple
      'rgb(191, 230, 248, 0.5)', //Blue 
      'rgb(145, 225, 126, 0.5)', //Green
      'rgb(246, 179, 75, 0.5)', //Orange
      'rgba(245, 109, 109, 0.5)', //Red
    ],
    borderColor: '#fff',
    borderWidth: 3,
  }]
};

const config = {
  type: 'polarArea',
  data: dataOCEAN,
  options: {
    responsive: true,
    scale: {
      backgroundColor: '#eee'
    },
    scales: {
      r: {  
        pointLabels: {
          //display: true,
          font: {
            size: 10
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            let index = tooltipItem.dataIndex;
            return ': ' + dataOCEAN.datasets[0].data[index];
          }
        }
      },
    }
  }
};

const createdChart = new Chart(ctx, config); //From chart.js CDN

//For Hover Event on Chart Areas
let isHovered = false;
let hoveredIndex;
$canvasOCEAN.mousemove(function(event) {
  const activeElements = createdChart.getElementsAtEventForMode(event, 'nearest', { intersect: true });
  
  if (activeElements.length>0) {

    //Works like MouseIn Event
    if(activeElements[0].index!=hoveredIndex) {
      let traitId = activeElements[0].index +1;
      $("#myPersonality .OCEAN .intro [data-id]").hide();
      $("#myPersonality .OCEAN .intro [data-id='"+ traitId +"']").show();
      isHovered = true;
      hoveredIndex = traitId-1;
    }
  }
  //Works like Mouseout Event
  else if (isHovered) {
    $("#myPersonality .OCEAN .intro [data-id]").hide();
    $("#myPersonality .OCEAN .intro [data-id='0']").show();
    isHovered = false;
    hoveredIndex = null;
  }
});
