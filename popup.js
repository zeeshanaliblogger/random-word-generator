// popup.js
document.addEventListener("DOMContentLoaded", function() {
    // Send a message to the background script to get a random word
    chrome.runtime.sendMessage({ action: "getRandomWord" }, function(response) {
      // Update the displayed random word
      var randomWordElement = document.querySelector(".random-word");
      randomWordElement.textContent = response.word;
    });
  });
  