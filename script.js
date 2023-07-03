const flexDirectionSelect = document.getElementById('flex-direction');
const justifyContentSelect = document.getElementById('justify-content');
const alignItemsSelect = document.getElementById('align-items');
const container = document.querySelector('.container');

flexDirectionSelect.addEventListener('change', () => {
  container.style.flexDirection = flexDirectionSelect.value;
});

justifyContentSelect.addEventListener('change', () => {
  container.style.justifyContent = justifyContentSelect.value;
});

alignItemsSelect.addEventListener('change', () => {
  container.style.alignItems = alignItemsSelect.value;
});
