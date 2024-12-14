// React 関連
import { useState } from 'react';

// React MUI 関連
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// アイコン関連
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SaveIcon from '@mui/icons-material/Save';

// React Router 関連
import { useNavigate, useParams } from 'react-router-dom';

// ローカルストレージのラッパー
import { load, store } from '@ground/data/index';

// チャットパレットを編集するページ
function PaletteEdit() {

  // URL パラメータからローカルストレージを読み込み
  const params = useParams<{id:string}>();
  if (!params.id) { throw new Error('URL parameter is not defined: id'); }
  const palette = load(params.id);

  // 個のコンポーネントで保持する状態(読み込んだやつがnullだったら新しく作る)
  const [content, setContent] = useState<string>(palette?.content ?? '');
  const [sender, setSender] = useState<string>(palette?.sender ?? '');

  // ナビゲーション
  const navigate = useNavigate();

  // 一覧に戻る処理(戻る前に自動保存する)
  const back = () => {
    save();
    navigate('/');
  };

  // チャパレ保存処理(チャパレを保存してウィンドウを閉じる操作が予想される)
  const save = () => {
    if (!params.id) { throw new Error('URL parameter is not defined: id'); }
    store({id:params.id, content, sender});
  };

  // レンダリングを行う
  return (
    <Box>

      {/* ラベル */}
      <Box sx={{marginBottom:'12pt'}}>
        <Typography variant='h6'>
          チャットパレット編集
        </Typography>
      </Box>
      
      {/* フォーム本体 */}
      <Grid container spacing={2}>

        {/* チャット内容編集ボックス */}
        <Grid size={12}>
          <TextField
            label='チャット内容'
            variant='outlined'
            fullWidth
            multiline
            minRows={4}
            maxRows={10}
            value={content}
            onChange={event=>setContent(event.target.value)}/>
        </Grid>

        {/* 送信者名設定ボックス */}
        <Grid size={12}>
          <Tooltip title='ここにキャラコマの名前を入力すると、そのキャラクターとしてチャット内容が送信されます。'>
            <TextField
              label='送信者名(任意)'
              variant='outlined'
              fullWidth
              value={sender}
              onChange={event=>setSender(event.target.value)}/>
          </Tooltip>
        </Grid>

        {/* 保存ボタン */}
        <Grid size={12}>
          <Box flexDirection='row' justifyContent='flex-end' display='flex'>
            <Box>
              <Button variant='contained' startIcon={<NavigateBeforeIcon/>} onClick={back}>
                一覧に戻る
              </Button>
            </Box>
            <Box ml={1}>
              <Button variant='contained' startIcon={<SaveIcon/>} onClick={save}>
                保存
              </Button>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

export default PaletteEdit;