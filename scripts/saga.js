document.addEventListener("DOMContentLoaded", function () {
  var accordionButtons = document.querySelectorAll(".accordion");

  function togglePanel(panel) {
    panel.style.maxHeight = panel.style.maxHeight
      ? null
      : panel.scrollHeight + "px";
  }

  function toggleIcon(icon) {
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
  }

  function closeOtherPanels(clickedPanel) {
    var allPanels = document.querySelectorAll(".panel");
    allPanels.forEach(function (panel) {
      if (panel !== clickedPanel) {
        panel.style.maxHeight = null;
        var icon = panel.previousElementSibling.querySelector(".fas");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
        panel.parentElement.classList.remove("active");
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
      panel.parentElement.classList.add("active");
      togglePanel(panel);
      toggleIcon(icon);
      this.classList.add("active");
    }
  }

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove "active" class from all accordion items
      accordionButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Toggle accordion for clicked item
      toggleAccordion.call(this);
    });
  });
});