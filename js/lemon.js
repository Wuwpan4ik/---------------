var img = document.getElementById('img');
if (screenWidth <= 992) {
		img.setAttribute('src', './img/BSPP22662.webp');
	} else {
		img.setAttribute('src', './img/BSPP2266.webp');
	};
document.addEventListener("DOMContentLoaded", function () {
	const screenWidth = window.screen.width;
	var btn = document.getElementById('burger');
	var nav = document.getElementById('nav');
	var body = document.getElementById("body");
	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			const blockID = anchor.getAttribute('href').substr(1)

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
				btn.classList.remove("active");
				nav.classList.remove("active");
				body.classList.remove("active");
		})
	};


	function headerFunction() {
		btn.classList.toggle("active");
		nav.classList.toggle("active");
		body.classList.toggle("active");
	};



	btn.addEventListener("click", headerFunction);
});
