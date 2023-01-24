		/* global $ */
		'use strict'
		$(document).ready(function(){
			//////////////////////////////////////////////////////////////////
			/////////////////// SETUP ///////////////////////////////
			//////////////////////////////////////////////////////////////////

			var BOARD_WIDTH = $('#board').width();	// Number: the maximum X-Coordinate of the screen
			var BOARD_HEIGHT = $('#board').height(); //maximum board height
			// Every 50 milliseconds, call the update Function (see below)
			setInterval(update, 50);
			// Every time the box is clicked, call the handleBoxClick Function (see below)
			$('#box').on('click', handleBoxClick);
			var positionY = 0;
			var positionX = 0;
			var speedX = 10;
			var speedY = 10;
			var points = 0;
			var rgbString = rgbString;
			/* 
			This Function will be called 20 times/second. Each time it is called,
			it should move the Box to a new location. If the box drifts off the screen
			turn it around! 
			*/
            //////////////////////////////////////////////////////////////////
			/////////////////// CORE LOGIC ///////////////////////////////
			//////////////////////////////////////////////////////////////////
			function update() {
                // increases the position by how fast the box is moving
				updatePositionX();
				updatePositionY();
                // changes the box speed when it hits the edge of the screen
				updateEdgeX();
				updateEdgeY();
				// updates color
				updateColor();
			}

			/* 
			This Function will be called each time the box is clicked. Each time it is called,
			it should increase the points total, increase the speed, and move the box to
			the left side of the screen.
			*/
			function handleBoxClick() {
                // increases points
                increasePoints();
				// increases speed
			increaseSpeedX();
			increaseSpeedY();
				// resets the box when clicked
				boxReset();
				// changes the color of the box when clicked
				changeColor();
			}

            //////////////////////////////////////////////////////////////////
			/////////////////// HELPER FUNCTIONS ///////////////////////////////
			//////////////////////////////////////////////////////////////////
			function updateColor(){
				$("#box").css('#background-color', rgbString);
			}
			function changeColor(){
				var r = Math.floor(Math.random() * 255);
				var g = Math.floor(Math.random() * 255);
				var b = Math.floor(Math.random() * 255);
				var rgbString = "rgb(" + r +  ', ' + g + ", " + b +  ");";
				
				console.log(rgbString);
			}
            function increasePoints(){
                points += 1;
				$('#box').text(points);
            }

            function increaseSpeedX(){
                if (speedX >= 0) {
					speedX += 3;
				} 
				else if (speedX < 0) {
					speedX -= 3;
				}
            }
			function increaseSpeedY(){
				if (speedY >= 0) {
					speedY += 3;
				} 
				else if (speedY < 0) {
					speedY -= 3;
				}
			}

            function boxReset(){
                positionX = 0;
				
            }

            function updatePositionX(){
                positionX += speedX;
				$('#box').css("left", positionX);
            }
			function updatePositionY(){
				positionY += speedY;
				$('#box').css("top", positionY);
			}
            function updateEdgeX(){
                if (positionX > BOARD_WIDTH) {
					speedX = -speedX;
				}
				else if (positionX < 0) {
					speedX = -speedX;
				}
            }
			function updateEdgeY(){
				if (positionY < BOARD_HEIGHT) {
					speedY = -speedY;
				}
				else if (positionY > 700) {
					speedY = -speedY;
				}
			}
		}); // DO NOT DELETE THIS LINE OF CODE. ALL JAVASCRIPT ABOVE HERE