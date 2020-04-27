let fileNewIssue = "title=Have you found a bug? Did you feel something was missing?&body=Whatever it was, we'd love to hear from you.";
chrome.runtime.setUninstallURL(
    `https://github.com/huhu/rust-search-extension/issues/new?${encodeURI(fileNewIssue)}`
);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("message :", message);
    switch (message.action) {
        case "check": {
            let crates = CrateDocSearchManager.getCrates();
            sendResponse(crates[message.crateName]);
            break;
        }
        case "add": {
            CrateDocSearchManager.addCrate(message.crateName, message.crateVersion, message.searchIndex);
            sendResponse(true);
            break;
        }
        case "remove": {
            CrateDocSearchManager.removeCrate(message.crateName);
            sendResponse(true);
            break;
        }
    }
    return true;
});