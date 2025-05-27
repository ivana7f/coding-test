const toggleButtons = document.querySelectorAll(".toggle-btn");
const items = document.querySelectorAll(".product__ingredients__item");

toggleButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const isActive = items[index].classList.contains("active");

    // Close all
    items.forEach((item, i) => {
      item.classList.remove("active");
      toggleButtons[i].textContent = "+";
    });

    // Toggle current
    if (!isActive) {
      items[index].classList.add("active");
      btn.textContent = "−";
    }
  });
});
