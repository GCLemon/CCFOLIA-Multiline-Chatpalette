// React MUI 関連
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
  const _delete = () => { remove(props.id); };

  // レンダリングを行う
  return (
    <ListItem>
      <ListItemText primary={props.content} secondary={props.sender}/>
      <IconButton onClick={send}><SendIcon/></IconButton>
      <IconButton onClick={edit}><EditIcon/></IconButton>
      <IconButton onClick={_delete}><DeleteIcon/></IconButton>
    </ListItem>
  );
}

export default PaletteItem;