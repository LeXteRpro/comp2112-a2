
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

// Create the Chart as the default state
	myChartFunction();

	// Submit to create variables from user input
    $("#submit").click(function(){

	var firstQuestionLength = $('#picture > div > input[type="checkbox"]:checked').length;
	var secondQuestionLength = $('#plan > div > input[type="checkbox"]:checked').length;
	var thirdQuestionLength = $('#plow > div > input[type="checkbox"]:checked').length;
	var fourthQuestionLength = $('#plant > div > input[type="checkbox"]:checked').length;
	var fifthQuestionLength = $('#protect > div > input[type="checkbox"]:checked').length;
	var sixthQuestionLength = $('#prune > div > input[type="checkbox"]:checked').length;
	var seventhQuestionLength = $('#pollinate > div > input[type="checkbox"]:checked').length;
	var eighthQuestionLength = $('#propagate > div > input[type="checkbox"]:checked').length;

    picture = firstQuestionLength;
    plan = secondQuestionLength;
    plow = thirdQuestionLength;
    plant = fourthQuestionLength;
    protect = fifthQuestionLength;
    prune = sixthQuestionLength;
    pollinate = seventhQuestionLength;
    propagate = eighthQuestionLength;


        // Call function to update chart
        myChartFunction();
    });



// Wrapping the Chart canvas in a function to be able to call it
function myChartFunction() {

// Assign the chart to a variable
var ctx = document.getElementById("myChart");

		// Creating Chart
		var myChart = new Chart(ctx, {
		    type: 'radar',
		    data: {
		        labels: ["Picture", "Plan", "Plow", "Plant", "Protect", "Prune", "Polinate", "Propagate"],
		        datasets: [{
		            label: 'Results',
		            // Assigning the data points to our created variables
		            data: [picture, plan, plow, plant, protect, prune, pollinate, propagate ],
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
			            text: 'Data Graphs'
		        },

		        scales: {
		            yAxes: [{
		                ticks: {
		                    display: false
		                },
		            }]
		        }
		    }
		});
	}

});


