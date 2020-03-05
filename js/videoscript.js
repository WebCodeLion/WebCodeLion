
		var handler = function () {this.innerHTML = '<iframe width="100%" height="700px" src="https://www.youtube.com/embed/owv7sNtI1lI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}; 
document.querySelector('.video-main-text').addEventListener('click', function (e) { this.removeEventListener('click', handler, false); handler.apply(this, arguments); } , false);
	












