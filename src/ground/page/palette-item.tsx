// React MUI 関連
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
import { remove } from '@ground/data';

// コンポーネントに渡すパラメータ
type Props = {
  id: string;
  content: string,
  sender: string,
  reload: () => void,
};

// チャットパレットのアイテム表示部分
function PaletteItem(props:Props) {

  // ナビゲーション
  const navigate = useNavigate();

  // 送信ボタンが押された時のイベント
  const send = () => {
  };

  // 編集ボタンが押された時のイベント
  const edit = () => { navigate(`/edit/${props.id}`); };

  // 削除ボタンが押された時のイベント
  const _delete = () => {
    remove(props.id); 
    props.reload();
  };

  // レンダリングを行う
  return (
    <ListItem>
      <ListItemText primary={props.content} secondary={props.sender}/>
      <Tooltip title='CCFOLIA に送信'>
        <IconButton onClick={send}>
          <SendIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='編集'>
        <IconButton onClick={edit}>
          <EditIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='削除'>
        <IconButton onClick={_delete}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

export default PaletteItem;