window.onload = () => {
	// make scroll bar sticky
	window.addEventListener("scroll", () => {
		const nav = document.querySelector("nav");
		nav.classList.toggle("sticky", window.scrollY > 0);
	});

	// set active page indicator
	(() => {
		const activePage = window.location.pathname.replace("/pages", "");
		const navLinks = document.querySelectorAll(".nav-links ul li a");
		for (let i = 0; i < navLinks.length; i++) {
			const link = navLinks[i];
			if (link.href == "/") {
				link.classList.add("active");
			} else if (link.href.replace(window.location.origin + '/pages', "") == activePage) {
				link.classList.add("active");
			}
		}
	})();

	// toggle nav menu
	(() => {
		const menuIcon = document.querySelector(".navbar-container-hamburger-menu");
		const container = document.querySelector(".navbar-mobile-container");
		menuIcon.addEventListener("click", () => {
			menuIcon.classList.toggle("toggle");
			container.classList.toggle("show");
		});
	})();
};

var swiper = new Swiper(".slide-container", {
	slidesPerView: 4,
	spaceBetween: 20,
	sliderPerGroup: 4,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1000: {
			slidesPerView: 4,
		},
	},
});
