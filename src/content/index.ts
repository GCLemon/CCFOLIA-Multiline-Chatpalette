import { isPalette } from '@palette/index';

// バックグラウンドスクリプトと接続が行われた時のイベントを設定する
chrome.runtime.onConnect.addListener(port => {

  // ポートからメッセージを受け取った時のイベントを設定する
  port.onMessage.addListener(message => {

    // 受け取ったメッセージがチャットパレット出ない場合は処理を行わない
    if (!isPalette(message)) { return true; }

    // メッセージボックスを探して値を入力
    const chat = document.getElementById('downshift-:rm:-input') as HTMLTextAreaElement;
    chat.value = message.content;
    chat.dispatchEvent(new Event('input', { bubbles: true }));
    chat.dispatchEvent(new Event('change', { bubbles: true }));

    // もともとそこに入力されていたユーザ名を入れておく
    let beforeName = '';

    // 送信者名が設定されている場合はもともと入力されていたものを控えて値を入力
    const name = document.querySelector('#root > div > div.MuiDrawer-root.MuiDrawer-docked.sc-gVtprA.gzrxpL.css-oms1ax > div > div > form > div:nth-child(2) > div.sc-gXZkYm.oCwXm > div > input') as HTMLInputElement;
    if (message.sender !== '') {
      beforeName = name.value;
      name.value = message.sender;
      name.dispatchEvent(new Event('input', { bubbles: true }));
      name.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // 送信ボタンをクリックしてチャット内容を送信
    const button = document.querySelector('#root > div > div.MuiDrawer-root.MuiDrawer-docked.sc-gVtprA.gzrxpL.css-oms1ax > div > div > form > div:nth-child(3) > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textWhite.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-root.MuiButton-text.MuiButton-textWhite.MuiButton-sizeSmall.MuiButton-textSizeSmall.css-nlkwmh') as HTMLButtonElement;
    button.click();

    // 控えて置いた値を元に戻しておく
    if (message.sender !== '') {
      name.value = beforeName;
      name.dispatchEvent(new Event('input', { bubbles: true }));
      name.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // 正常終了
    return true;
  }); 
});