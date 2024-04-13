chrome.runtime.onMessage.addListener((message) => {
  window.open('spotify:search:' + encodeURIComponent(message.search));
});