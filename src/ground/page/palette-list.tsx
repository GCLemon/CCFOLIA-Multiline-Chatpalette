// React 関連
import { useState } from 'react';

// React MUI 関連
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// アイコン関連
import AddBoxIcon from '@mui/icons-material/AddBox';

// React Router 関連
import { useNavigate } from 'react-router-dom';

// 自作コンポーネント
import PaletteItem from './palette-item';

// ローカルストレージのラッパー
import { generateKey, load } from '@palette/index';

// チャットパレットのリストを表示するページ
function PaletteList() {

  // ナビゲーション
  const navigate = useNavigate();

  // ローカルストレージを読み込み
  const [palettes, setPalettes] = useState(load());

  // チャットパレットの新規作成
  const newPalette = () => {
    const key = generateKey();
    navigate(`/edit/${key}`);
  };

  // チャットパレット一覧のリロード
  const reloadPalettes = () => { setPalettes(load()); };

  // 要素の作成
  const items = palettes.map(palette => {
    return <PaletteItem
      key={palette.id}
      palette={palette}
      reload={reloadPalettes}/>
  });

  // レンダリングを行う
  return (
    <Box>
      <Typography variant='h6'>
        チャットパレット一覧
      </Typography>
      <Box>
        <List>{items}</List>
        <Button variant='contained' fullWidth startIcon={<AddBoxIcon/>} onClick={newPalette}>
          新規作成
        </Button>
      </Box>
    </Box>
  );
}

export default PaletteList;