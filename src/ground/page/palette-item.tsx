// React MUI 関連
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// アイコン関連
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';

// コンポーネントに渡すパラメータ
type Props = {
  key?: string,
  title?: string,
  text?: string,
};

// チャットパレットのアイテム表示部分
function PaletteItem(props:Props) {

  // 送信ボタンが押された時のイベント
  const send = () => {
  };

  // 編集ボタンが押された時のイベント
  const edit = () => {
  };

  // 削除ボタンが押された時のイベント
  const _delete = () => {
  };

  // レンダリングを行う
  return (
    <ListItem key={props.key}>
      <ListItemText primary={props.title} secondary={props.text}/>
      <IconButton onClick={send}><SendIcon/></IconButton>
      <IconButton onClick={edit}><EditIcon/></IconButton>
      <IconButton onClick={_delete}><DeleteIcon/></IconButton>
    </ListItem>
  );
}

export default PaletteItem;