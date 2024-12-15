// チャットパレットのデータ形式
export type Palette = {
  index: number,
  content: string,
  sender: string,
};

// 一意の連番キーを作成する
export function getIndex() {
  return localStorage.length;
}

// valueがPaletteであることを保証する関数
export function isPalette(value:unknown): value is Palette {
  return value !== null
    && typeof value === 'object'
    && 'index' in value && typeof value.index === 'number'
    && 'content' in value && typeof value.content === 'string'
    && 'sender' in value && typeof value.sender === 'string';
}

// 読み込みの内部処理
function loadInternal(index:string) {

  // パレットデータを取ってくる(読み込みに失敗したらnullを返す)
  const text = localStorage.getItem(index);
  if (text === null) { return null; }

  // テキスト形式のパレットデータを変換する(変換に失敗したらnullを返す)
  const parsed = {...JSON.parse(text), index:parseInt(index)};
  if (!isPalette(parsed)) { return null; }
  
  // 変換した結果を返す
  return isPalette(parsed) ? parsed : null;
}

// パレットデータをローカルストレージから読み込む関数
export function load():Palette[];
export function load(index:number):null|Palette;
export function load(index?:number):null|Palette|Palette[] {

  // 特定のIDを持つパレットデータをロードする
  if (index) { return loadInternal(index.toString()); }

  // 全てのパレットデータをロードする
  else {

    const palettes = [...Array(localStorage.length)].map((_,i) => {
      const index = localStorage.key(i);
      if (!index) { throw new Error('Index is out of range'); }
      const data = loadInternal(index);
      if (!data) { throw new Error('Specified data should be found.'); }
      return data;
    });

    palettes.sort((a, b) => a.index - b.index);
    return palettes;
  }
}

// パレットデータをローカルストレージに保存する関数
export function store(palette:Palette) {

  // IDを指定して保存
  const {index,...data} = palette;
  localStorage.setItem(index.toString(), JSON.stringify(data));
}

// パレットデータをローカルストレージから削除する関数
// TODO: 全削除する都合上かなり重いので修正すること
export function remove(index:number) {

  // IDを指定して削除、その後番号を振り直す
  const palettes = load()
    .filter(x => x.index != index)
    .map((x,i) => {return{...x,index:i}});

  // 一度ストレージをクリアしておく
  localStorage.clear();

  // 読み込んだパレットを保存する
  for (const palette of palettes) { store(palette); }
}