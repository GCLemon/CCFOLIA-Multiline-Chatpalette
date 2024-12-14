// React MUI 関連
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// アイコン関連
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

// チャットパレットを編集するページ
function PaletteEdit() {
  return (
    <Box>
      <Box sx={{marginBottom:'12pt'}}>
        <Typography variant='h6'>
          チャットパレット編集
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField label='チャット内容' variant='outlined' fullWidth multiline minRows={4} maxRows={10}/>
        </Grid>
        <Grid size={12}>
          <Tooltip title='ここにキャラコマの名前を入力すると、そのキャラクターとしてチャット内容が送信されます。'>
            <TextField label='送信者名(任意)' variant='outlined' fullWidth/>
          </Tooltip>
        </Grid>
        <Grid size={12}>
          <Box flexDirection='row' justifyContent='flex-end' display='flex'>
            <Button variant='contained' startIcon={<NavigateBeforeIcon/>}>
              保存して戻る
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaletteEdit;