// React MUI 関連
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// アイコン関連
import AddBoxIcon from '@mui/icons-material/AddBox';

// React Router 関連
import { Outlet, useNavigate } from 'react-router-dom';

// ローカルストレージのラッパー
import { getIndex } from '@palette/index';

// ページのヘッダを表示するコンポーネント
function PaletteBar() {

  // ナビゲーション
  const navigate = useNavigate();

  // チャットパレットの新規作成
  const newPalette = () => {
    const key = getIndex();
    navigate(`/edit/${key}`);
  };

  // レンダリングを行う
  return(
    <>
      <AppBar sx={{position:'sticky'}}>
        <ToolBar>
          <Typography variant='h6' component='div' sx={{flexGrow:1}}>
            CCFOLIA Multiline Chatpalette
          </Typography>
          <Button variant='outlined' color='white' startIcon={<AddBoxIcon/>} onClick={newPalette}>
            新規作成
          </Button>
        </ToolBar>
      </AppBar>
      <Outlet/>
    </>
  );
}

export default PaletteBar;