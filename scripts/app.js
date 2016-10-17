
// Document Ready
 $(document).ready(function(){

	// Assign Variables
	var picture = 3;
	var plan = 0;
	var plow = 0;
	var plant = 0;
	var protect = 0;
	var prune = 0;
	var pollinate = 0;
	var propagate = 0;

	// Hide Charts by Default

	$("#myPolarAreaChartWrapper").hide();
	$("#myRadarChartWrapper").hide();
	$("#myBarChartWrapper").hide();

	// Submit to create variables from user input
    $("#submit").click(function(){

	var firstQuestionLength = $('#picture div input[type="checkbox"]:checked').length;
	var secondQuestionLength = $('#plan div input[type="checkbox"]:checked').length;
	var thirdQuestionLength = $('#plow div input[type="checkbox"]:checked').length;
	var fourthQuestionLength = $('#plant div input[type="checkbox"]:checked').length;
	var fifthQuestionLength = $('#protect div input[type="checkbox"]:checked').length;
	var sixthQuestionLength = $('#prune div input[type="checkbox"]:checked').length;
	var seventhQuestionLength = $('#pollinate div input[type="checkbox"]:checked').length;
	var eighthQuestionLength = $('#propagate div input[type="checkbox"]:checked').length;

    picture = firstQuestionLength;
    plan = secondQuestionLength;
    plow = thirdQuestionLength;
    plant = fourthQuestionLength;
    protect = fifthQuestionLength;
    prune = sixthQuestionLength;
    pollinate = seventhQuestionLength;
    propagate = eighthQuestionLength;


	/* Hide Questions on page */
	$("#questions-wrap").hide();

	/* Show "Modify Chart Button" */
	$("#modify-chart").show();


    // Call function to update chart
    myPolarAreaChartFunction();
	/* Reveal the Chart and Wrapper HTML */
	$("#myPolarAreaChartWrapper").show();

    // Call function to update chart
    myRadarChartFunction();
	/* Reveal the Chart and Wrapper HTML */
	$("#myRadarChartWrapper").show();

    // Call function to update chart
    myBarChartFunction();
	/* Reveal the Chart and Wrapper HTML */
	$("#myBarChartWrapper").show();


    });


// When Submit is clicked, bring screen back to top
if ($('#submit').length) {
    var scrollTrigger = 50, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#submit').addClass('show');
            } else {
                $('#submit').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#submit').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 100
        }, 700);
    });
}


	function myPolarAreaChartFunction() {
		var cty = document.getElementById("myPolarAreaChart");
		var myBarChart = new Chart(cty, {
	    type: 'polarArea',
	    data: {
	        labels: ["Picture", "Plan", "Plow", "Plant", "Protect", "Prune", "Polinate", "Propagate"],
	        datasets: [{
	            label: 'Results',
	            data: [picture, plan, plow, plant, protect, prune, pollinate, propagate],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: { 			        
	    	title: {
		            display: true,
		            text: 'Polar Area'
		        },

		        
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}


// Wrapping the Chart canvas in a function to be able to call it
function myRadarChartFunction() {

// Assign the chart to a variable
var ctx = document.getElementById("myRadarChart");

		// Creating Chart
		var myRadarChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
		        labels: ["Picture", "Plan", "Plow", "Plant", "Protect", "Prune", "Polinate", "Propagate"],
		        datasets: [{
		            label: 'Results',
		            // Assigning the data points to our created variables
		            data: [picture, plan, plow, plant, protect, prune, pollinate, propagate],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.3)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)'
		            ],
		            borderWidth: 1


		        }

		   // Secondary Graph Data
		   //      ,

		   //      {
		   //      	fillColor: "rgba(63,169,245,.6)",
		   //          strokeColor: "rgba(63,169,245,1)",
					// pointColor : "rgba(151,187,205,1)",
					// pointStrokeColor : "#fff",
					// data: [7, 1, 11, 10, 4, 3, 7, 3]
		   //      }

		        ]
		    },
		    options: {
			        title: {
			            display: true,
			            text: 'Radar'
		        },

		        scales: {
		            yAxes: [{
		                ticks: {
		                    display: true
		                },
		            }]
		        }
		    }
		});

	}


	function myBarChartFunction() {
		var ctb = document.getElementById("myBarChart");
		var myBarChart = new Chart(ctb, {
	    type: 'bar',
	    data: {
	        labels: ["Picture", "Plan", "Plow", "Plant", "Protect", "Prune", "Polinate", "Propagate"],
	        datasets: [{
	            label: 'Results',
	            data: [picture, plan, plow, plant, protect, prune, pollinate, propagate],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: { 			        
	    	title: {
		            display: true,
		            text: 'Bar'
		        },
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}

});


