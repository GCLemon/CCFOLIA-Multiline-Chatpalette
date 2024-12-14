// チャットパレットのデータ形式
export type Palette = {
  id: string,
  content: string,
  sender: string,
};

// valueがPaletteであることを保証する関数
function isPalette(value:unknown): value is Palette {
  return value !== null
    && typeof value === 'object'
    && 'id' in value && typeof value.id === 'string'
    && 'content' in value && typeof value.content === 'string'
    && 'sender' in value && typeof value.sender === 'string';
}

// 読み込みの内部処理
function loadInternal(id:string) {

  // パレットデータを取ってくる
  const text = localStorage.getItem(id);
  if(!text) { throw new Error(`Palette data not found: ${id}`); }

  // テキスト形式のパレットデータを変換する
  const parsed = {...JSON.parse(text), id:id};
  if (!isPalette(parsed)) { throw new Error(`Parsed result is not "Palette": ${id}`); }
  
  // 変換した結果を返す
  return parsed;
}

// パレットデータをローカルストレージから読み込む関数
export function load():Palette[];
export function load(id:string):Palette;
export function load(id?:string):Palette|Palette[] {

  // 特定のIDを持つパレットデータをロードする
  if (id) { return loadInternal(id); }

  // 全てのパレットデータをロードする
  else {
    return [...Array(localStorage.length)].map((_,i) => {
      const id = localStorage.key(i);
      if (!id) { throw new Error('Index is out of range'); }
      return loadInternal(id);
    });
  }
}

// パレットデータをローカルストレージに保存する関数
export function store(palette:Palette) {

  // IDを指定して保存
  const {id,...data} = palette;
  localStorage.setItem(id, JSON.stringify(data));
}

// パレットデータをローカルストレージから削除する関数
export function remove(id:string) {

  // IDを指定して削除
  localStorage.removeItem(id);
}