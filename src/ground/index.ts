// アイコンがクリックされた時にウィンドウを作る
chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL('src/ground/index.html'),
    type: 'popup',
    width: 800,
    height: 600,
  });
});