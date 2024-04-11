const shareButton = document.getElementById("share-button");
const articleFooter = document.getElementById("article-footer");
const articleModal = document.getElementById("article-modal");
const closeModalButton = document.getElementById("close-modal-button");

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

function toggleElement(element) {
  element.classList.toggle("hidden");
}

function toggleColor(element) {
  element.classList.toggle("active");
}

shareButton.addEventListener("click", function () {
  toggleElement(articleModal);
  toggleColor(shareButton);
});

closeModalButton.addEventListener("click", function () {
  hideElement(articleModal);
});
