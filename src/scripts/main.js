// Accordion Toggle Logic
const toggleButtons = document.querySelectorAll(".toggle-btn");
const ingredientItems = document.querySelectorAll(
  ".product__ingredients__item"
);

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const isActive = ingredientItems[index].classList.contains("active");

    ingredientItems.forEach((item, i) => {
      item.classList.remove("active");
      toggleButtons[i].textContent = "+";
    });

    if (!isActive) {
      ingredientItems[index].classList.add("active");
      button.textContent = "−";
    }
  });
});

// Quantity Selector Logic
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const quantityDisplay = document.querySelector(".quantity-value");
let quantity = 1;

const updateQuantity = (value) => {
  quantity = value;
  quantityDisplay.textContent = quantity;
};

decreaseBtn.addEventListener("click", () => {
  if (quantity > 1) updateQuantity(quantity - 1);
});

increaseBtn.addEventListener("click", () => {
  updateQuantity(quantity + 1);
});

// Add to Cart Button Logic
const addToCartBtn = document.querySelector(".product__add-to-cart-btn");
const spinner = document.querySelector(".spinner");
const label = addToCartBtn.querySelector(".btn-label");

addToCartBtn.addEventListener("click", () => {
  addToCartBtn.disabled = true;
  spinner.classList.remove("hidden");
  label.textContent = "ADDING...";

  setTimeout(() => {
    spinner.classList.add("hidden");
    label.textContent = "ADDED";

    setTimeout(() => {
      label.textContent = "ADD TO CART";
      addToCartBtn.disabled = false;
      updateQuantity(1);
    }, 1500);
  }, 2000);
});

// Carousel Controls
const carousel = document.getElementById("product-carousel");

const scrollCarousel = (direction = "next") => {
  const scrollAmount = 300;
  const scrollBy = direction === "next" ? scrollAmount : -scrollAmount;
  carousel.scrollBy({ left: scrollBy, behavior: "smooth" });
};

document
  .querySelector(".carousel__btn.next")
  ?.addEventListener("click", () => scrollCarousel("next"));
document
  .querySelector(".carousel__btn.prev")
  ?.addEventListener("click", () => scrollCarousel("prev"));
