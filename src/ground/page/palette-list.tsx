// React 関連
import { useState } from 'react';

// React MUI 関連
import List from '@mui/material/List';

// 自作コンポーネント
import PaletteItem from './palette-item';

// ローカルストレージのラッパー
import { load } from '@palette/index';

// チャットパレットのリストを表示するページ
function PaletteList() {

  // ローカルストレージを読み込み
  const [palettes, setPalettes] = useState(load());

  // チャットパレット一覧のリロード
  const reloadPalettes = () => { setPalettes(load()); };

  // 要素の作成
  const items = palettes.map(palette => {
    return <PaletteItem
      key={palette.index.toString()}
      palette={palette}
      reload={reloadPalettes}/>
  });

  // レンダリングを行う
  return (
    <List disablePadding sx={{height:'calc(100% - 64px)',overflowY:'scroll'}}>
      {items}
    </List>
  );
}

export default PaletteList;