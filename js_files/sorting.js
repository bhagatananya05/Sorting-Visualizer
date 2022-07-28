let array_size = document.querySelector(".array_size");
let animationSpeed = document.querySelector(".speed");

// create given number of bars
function createBars(size) {
  let array = [];
  let barContainer = document.querySelector(".bar-container");
  for (let i = 1; i <= size; i++) {
    let barHeight = Math.floor(Math.random() * maxBarHeight) + 5;
    array.push(barHeight);
    let bar = document.createElement("div");
    bar.classList.add("bars");
    bar.style.height = barHeight + "vh";
    barContainer.appendChild(bar);
  }
}

// removes all the bars from the bar container
function removeBars() {
  document.querySelectorAll(".bars").forEach((node) => {
    node.remove();
  });
}

// creates new bars array when "new array" button is clicked
let newArrayBtn = document.querySelector(".new-array");
newArrayBtn.addEventListener("click", () => {
  removeBars();
  createBars(array_size.value);
});

// change number of bars when changing the range / moving the slider of "array size"
array_size.addEventListener("input", () => {
  removeBars();
  createBars(array_size.value);
});

// changes the duration of transition and delay of setTimeout when changing the slider / range of "speed"
animationSpeed.addEventListener("input", () => {
  delay = 3000 - animationSpeed.value + 100;
  document.querySelectorAll(".bars").forEach((bar) => {
    bar.style.transitionDuration = (delay / 1000) * 0.7 + "s";
  });
});

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn() {
  document.querySelector(".bubble-sort").disabled = true;
  document.querySelector(".insertion-sort").disabled = true;
  document.querySelector(".merge-sort").disabled = true;
  document.querySelector(".selection-sort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn() {
  document.querySelector(".bubble-sort").disabled = false;
  document.querySelector(".insertion-sort").disabled = false;
  document.querySelector(".merge-sort").disabled = false;
  document.querySelector(".selection-sort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
  document.querySelector(".array_size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
  document.querySelector(".array_size").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
  document.querySelector(".new-array").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
  document.querySelector(".new-array").disabled = false;
}

// starts sorting using selection sort when "selection sort" button is clicked
const selectionSortBtn = document.querySelector(".selection-sort");
selectionSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  let barsArray = document.querySelectorAll(".bars");

  await selectionSort(barsArray);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// starts bubble sort when "bubble sort" button is clicked
const bubbleSortBtn = document.querySelector(".bubble-sort");
bubbleSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  let barsArray = document.querySelectorAll(".bars");
  await bubbleSort(barsArray);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// starts insertion sort when "insertion sort" button is clicked
const insertionSortBtn = document.querySelector(".insertion-sort");
insertionSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  let barsArray = document.querySelectorAll(".bars");
  await insertionSort(barsArray);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// starts merge sort when "merge sort" button is clicked
const mergeSortBtn = document.querySelector(".merge-sort");
mergeSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableSizeSlider();
  disableNewArrayBtn();
  let barsArray = document.querySelectorAll(".bars");
  let leftIndex = 0;
  let rightIndex = parseInt(barsArray.length) - 1;
  await mergeSort(barsArray, leftIndex, rightIndex);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArrayBtn();
});

// creates bars when the page is loaded
createBars(array_size.value);
