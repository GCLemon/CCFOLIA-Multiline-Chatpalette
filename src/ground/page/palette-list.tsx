// React MUI 関連
import List from '@mui/material/List';

// 自作コンポーネント
import PaletteItem from './palette-item';

// チャットパレットのリストを表示するページ
function PaletteList() {
  return (
    <List>
      <PaletteItem title='あいうえお' text='あいうえお'/>
      <PaletteItem title='かきくけこ' text='かきくけこ'/>
      <PaletteItem title='さしすせそ' text='さしすせそ'/>
    </List>
  );
}

export default PaletteList;