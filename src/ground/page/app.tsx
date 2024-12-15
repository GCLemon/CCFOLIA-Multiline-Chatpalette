// React MUI 関連
import Paper from '@mui/material/Paper';

// React Router 関連
import { HashRouter, Route, Routes } from 'react-router-dom';

// 自作コンポーネント
import PaletteBar from './palette-bar';
import PaletteList from './palette-list';
import PaletteEdit from './palette-edit';

// アプリケーションのルートコンポーネント
function App() {

  // レンダリングを行う
  return (
    <Paper variant='outlined' elevation={0} sx={{height:'100%',borderRadius:0}}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<PaletteBar/>}>
            <Route path='/' element={<PaletteList/>}/>
            <Route path='/edit/:id' element={<PaletteEdit/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </Paper>
  );
}

export default App;