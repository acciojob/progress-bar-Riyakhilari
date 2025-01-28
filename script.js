//your JS code here. If required.
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
let activeIndex = 0;

nextButton.addEventListener('click', () => {
	if (activeIndex < circles.length - 1) {
		circles[activeIndex].classList.remove('active');
		activeIndex++;
		circles[activeIndex].classList.add('active');
		prevButton.disabled = false;

		if (activeIndex === circles.length - 1) {
			nextButton.disabled = true;
		}
	}
});

prevButton.addEventListener('click', () => {
	if (activeIndex > 0) {
		circles[activeIndex].classList.remove('active');
		activeIndex--;
		circles[activeIndex].classList.add('active');
		nextButton.disabled = false;

		if (activeIndex === 0) {
			prevButton.disabled = true;
		}
	}
});
