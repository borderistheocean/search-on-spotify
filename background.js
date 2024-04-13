chrome.contextMenus.create({
  id: "search-selection",
  title: "Search Spotify for \"%s\"",
  contexts: ["selection"]
});

// # TO DO: HANDLE HYPERLINK SEARCHES

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "search-selection") {
    function logTabs(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { search: encodeURIComponent(info.selectionText) });
    }
    function onError(error) {
      console.error(`Error: ${error}`);
    }
    chrome.tabs
      .query({ currentWindow: true, active: true })
      .then(logTabs, onError);
  }
});
