document.addEventListener("DOMContentLoaded", function () {
  var accordionContainers = document.querySelectorAll(".accordion");

  function togglePanel(panel) {
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + "px";
  }

  function toggleIcon(icon) {
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  }

  function closeOtherPanels(clickedPanel) {
    var allPanels = document.querySelectorAll(".panel");
    allPanels.forEach(function (panel) {
      if (panel !== clickedPanel) {
        panel.style.maxHeight = null;
        var icon = panel.previousElementSibling.querySelector(".fas");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });
  }

  function toggleAccordion() {
    var panel = this.nextElementSibling;
    var icon = this.querySelector(".fas");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      this.classList.remove("active");
    } else {
      closeOtherPanels(panel);
      togglePanel(panel);
      toggleIcon(icon);
      this.classList.add("active");
    }
  }

  accordionContainers.forEach(function (container) {
    container.addEventListener("click", toggleAccordion);
  });
});
