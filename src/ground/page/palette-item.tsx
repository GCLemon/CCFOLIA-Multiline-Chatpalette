// React MUI 関連
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

// アイコン関連
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';

// React Router 関連
import { useNavigate } from 'react-router-dom';
import { remove } from '@palette/index';

// ローカルストレージのラッパー
import { Palette } from '@palette/index';

// コンポーネントに渡すパラメータ
type Props = {
  palette: Palette
  reload: () => void,
};

// チャットパレットのアイテム表示部分
function PaletteItem(props:Props) {

  // ナビゲーション
  const navigate = useNavigate();

  // 送信ボタンが押された時のイベント
  const send = () => {
    chrome.tabs.query({}, tabs => {
      const tab = tabs.find(value => value.url && value.url.includes('https://ccfolia.com/rooms'));
      if (!tab) { return; }
      if (tab.id) {
        const port = chrome.tabs.connect(tab.id);
        port.postMessage(props.palette);
      }
    });
  };

  // 編集ボタンが押された時のイベント
  const edit = () => { navigate(`/edit/${props.palette.id}`); };

  // 削除ボタンが押された時のイベント
  const _delete = () => {
    remove(props.palette.id); 
    props.reload();
  };

  // 送信者のテキスト
  const senderText = props.palette.sender !== '' ? `送信者: ${props.palette.sender}` : '';

  // レンダリングを行う
  return (
    <>
    <ListItem>
      <ListItemText primary={props.palette.content} secondary={senderText}/>
      <Tooltip title='CCFOLIA に送信'>
        <IconButton color='white' onClick={send}>
          <SendIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='編集'>
        <IconButton color='white' onClick={edit}>
          <EditIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='削除'>
        <IconButton color='white' onClick={_delete}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </ListItem>
    <Divider variant='middle' color='#5E5E5E'/>
    </>
  );
}

export default PaletteItem;