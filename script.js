var i = 0; // Start Point
const rad = document.getElementsByClassName('rad');

// Change Image
function changeImg() {
  rad[i].checked = true;

	// Check If Index Is Under Max
	if(i < rad.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", 3000);
}

// Run function when page loads
window.onload=changeImg;
