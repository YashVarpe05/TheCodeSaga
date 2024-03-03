window.onload = () => {
  // make scroll bar sticky
  window.addEventListener("scroll", () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle("sticky", window.scrollY > 0)
  });

  // set active page indicator 
  (() => {
    const activePage = window.location.pathname.replace('/pages', '');
    const navLinks = document.querySelectorAll('.navbar-container-links ul li a');
    for (let i = 0; i < navLinks.length; i++) {
      const link = navLinks[i];
      if (link.href == '/') {
        link.classList.add('active')
        break
      } else if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
        break
      }
    }
  })();

}