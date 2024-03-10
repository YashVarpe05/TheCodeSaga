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
		if (link.href.replace(window.location.origin, "") == activePage) {
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

// trigger open modal event listener
(async () => {
	const foodSponsors = document.querySelectorAll(".food-sponsor");
	const modal = document.querySelector('[food-brand-modal]');
	const modalCloseBtn = document.querySelector('[food-brand-close-modal]');

	const res = await fetch('/scripts/sponsors.json');
	const sponsorsData = await res.json()

	const brandName = modal.querySelector('.modal-container-title h1');
	const brandImage = modal.querySelector('.modal-container-image img');
	const brandAddress = modal.querySelector('.modal-container-address-text p')
	const brandContact = modal.querySelector('.modal-container-contact-text p')

	foodSponsors.forEach((sponsor) => {
		sponsor.addEventListener('click', async (clicked) => {
			const clickedSponsor = sponsorsData.find(e => e.brand == clicked.target.nextElementSibling.innerText);

			brandName.innerText = clickedSponsor.brand;
			brandImage.src = clickedSponsor.image
			brandAddress.innerText = clickedSponsor.address
			brandContact.innerText = clickedSponsor.contact.map((e) => e).join(' / ')

			await modal.showModal();
			modalCloseBtn.addEventListener('click', (e) => {
				modal.close()
			})
		});
	});
})();
