// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "generateWord" });
  });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getRandomWord") {
    // Generate a random word
    var randomWord = generateRandomWord();
    
    // Send the random word back to the content script
    sendResponse({ word: randomWord });
  }
});

function generateRandomWord() {
  // Add your own logic to generate a random word here
  var words = ["apple", "infamous", "boorish", "shivering", "sniff", "cub", "earthquake", "abject", "sophisticated", "scorch", "grain", "jolly", "staking", "beef", "illustrious", "apologise", "innate", "jittery", "cats", "maddening", "useful", "test", "drop", "unnatural", "banana", "red", "suit", "loaf", "high-pitched", "visitor", "psychedelic", "sail", "orange", "grape", "watermelon"];
  var randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
