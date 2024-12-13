// React MUI 関連
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// アイコン関連
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// チャットパレットを編集するページ
function PaletteEdit() {
  return (
    <Box>
      <Typography variant='h6'>チャットパレット編集</Typography>
      <TextField label='チャット内容' variant='outlined' margin='normal' fullWidth multiline minRows={4} maxRows={10}/>
      <Tooltip title='ここにキャラコマの名前を入力すると、そのキャラクターとしてチャット内容が送信されます。'>
        <TextField label='送信者名(任意)' variant='outlined' margin='normal' fullWidth/>
      </Tooltip>
      <Button variant='contained' startIcon={<NavigateBeforeIcon/>}>
        保存して戻る
      </Button>
    </Box>
  );
}

export default PaletteEdit;