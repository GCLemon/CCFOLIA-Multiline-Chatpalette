// React Router 関連
import { HashRouter, Route, Routes } from 'react-router-dom';

// 自作コンポーネント
import PaletteList from './palette-list';
import PaletteEdit from './palette-edit';

// アプリケーションのルートコンポーネント
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<PaletteList/>}/>
        <Route path='/edit' element={<PaletteEdit/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;