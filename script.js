const justifyContentSelect = document.getElementById("justify-content");
const alignItemsSelect = document.getElementById("align-items");
const container = document.querySelector(".container");

justifyContentSelect.addEventListener("change", () => {
  container.style.justifyContent = justifyContentSelect.value;
});

alignItemsSelect.addEventListener("change", () => {
  container.style.alignItems = alignItemsSelect.value;
});
