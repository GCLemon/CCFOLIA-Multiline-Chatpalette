// React MUI 関連
import List from '@mui/material/List';

// 自作コンポーネント
import PaletteItem from './palette-item';

// ローカルストレージのラッパー
import { load } from '@ground/data/index';

// チャットパレットのリストを表示するページ
function PaletteList() {

  // ローカルストレージを読み込み
  const palettes = load();

  // 要素の作成
  const items = palettes.map(palette => {
    return <PaletteItem
      key={palette.id}
      id={palette.id}
      content={palette.content}
      sender={palette.sender}/>
  });

  // レンダリングを行う
  return <List>{items}</List>;
}

export default PaletteList;