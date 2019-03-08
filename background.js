function search(info, tab) {
    chrome.tabs.create({
        url: "https://www.youtube.com/results?search_query=" + info.selectionText,
    })
}

chrome.contextMenus.create({
    title: "Search YouTube",
    id: "search-youtube",
    contexts: ["selection"],
})

chrome.contextMenus.onClicked.addListener(search)
