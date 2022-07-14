// intersection observer for summary
const img = document.querySelector("p.summary");

const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("flyin-left");
		}
	});
};

const options = {};

const myObserver = new IntersectionObserver(callback, options);

myObserver.observe(img);

// Register IntersectionObserver for programs
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('flyin-right');
    }
    // Remove 'active' class otherwise
    // else {
    //   entry.target.classList.remove('nothing');
    // }
  })
})

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll('.why');
boxElList.forEach((el) => {
  io.observe(el);
})





