function myFunction(x) {//
  if (x.matches) { //screen small

	var rightbar = document.getElementById("rightbar");
    rightbar.style.display="block";
	
  } else {	
  	var rightbar = document.getElementById("rightbar");
    rightbar.style.display="none";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
