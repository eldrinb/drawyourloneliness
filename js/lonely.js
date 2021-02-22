console.log("hellp")

// for the gallery
window.onload = function(){
	$(".drag").draggable();
	//this is solely to make the images randomized on load.
	//code sourced from https://www.sitepoint.com/community/t/change-order-of-images-on-page-load/288098/6 by Paul Wilkins.
	var numbers = document.querySelector('#numbers');
			var list = Array.from(numbers.children);
			var newlist;

			list.sort(function(a, b) {
			  return -1 + Math.random() * 3; // -1, 0, or 1
			});

			while (numbers.children.length > 0) {
			  numbers.removeChild(numbers.children[0]);
			}
			list.forEach(function(el) {
			  numbers.appendChild(el);
			});

	// ===================IMAGE====================

	// Code used to create Modal Images is adapted from: 
		// https://www.w3schools.com/howto/howto_css_modal_images.asp
		// https://stackoverflow.com/questions/47798971/several-modal-images-on-page

		// create references to the modal...
		var modal = document.getElementById('myModal');
		// reference to images in the ABOUT page
		var images = document.getElementsByClassName('myImg');
		// the image in the modal
		var modalImg = document.getElementById("img01");
		// and the caption in the modal
		var captionText = document.getElementById("caption");

		// Go through all of the images with our custom class
		for (var i = 0; i < images.length; i++) {
		  var img = images[i];
		  // and attach our click listener for this image.
		  img.ondblclick = function(evt) {
		    modal.style.display = "block";
		    modalImg.src = this.src;
		    captionText.innerHTML = this.alt;
		  }

		}

		var span = document.getElementsByClassName("close")[0];

		span.onclick = function() {
		  modal.style.display = "none";
		}
	


	// ===================GALLERY====================
	// alert that tells visitor to double-click image if they want to view the drawings in detail
	// alert("Double-click the drawings to view in more detail.");
	$(".warning").click(function(){
		alert("Double-click the drawings to view in more detail.");
	});

	

	// ===================GALLERY====================
	// $(".sve").click(function(){
	// 	alert("");
	// });
}