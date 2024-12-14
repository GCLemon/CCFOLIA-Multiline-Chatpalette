// パレットのIDの生成に使うやつ
import { v4 as uuid } from 'uuid';

// チャットパレットのデータ形式
export type Palette = {
  id: string,
  content: string,
  sender: string,
};

// 一意のキーを作成する
export function generateKey() {

  // 既に使われているキーを取得する
  const usedKeys = [...Array(localStorage.length)].map((_,i) => {
    const id = localStorage.key(i);
    if (!id) { throw new Error('Index is out of range'); }
    return id;
  });

  // 被らなくなるまで UUID を生成する
  while (true) {
    const newKey = uuid();
    if(!(newKey in usedKeys)) { return newKey; }
  }
  throw new Error('Unreachable code.'); // 絶対に来ないけど一応書いておく
}

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

  // パレットデータを取ってくる(読み込みに失敗したらnullを返す)
  const text = localStorage.getItem(id);
  if (text === null) { return null;}

  // テキスト形式のパレットデータを変換する(変換に失敗したらnullを返す)
  const parsed = {...JSON.parse(text), id:id};
  if (!isPalette(parsed)) { return null; }
  
  // 変換した結果を返す
  return isPalette(parsed) ? parsed : null;
}

// パレットデータをローカルストレージから読み込む関数
export function load():Palette[];
export function load(id:string):null|Palette;
export function load(id?:string):null|Palette|Palette[] {

  // 特定のIDを持つパレットデータをロードする
  if (id) { return loadInternal(id); }

  // 全てのパレットデータをロードする
  else {
    return [...Array(localStorage.length)].map((_,i) => {
      const id = localStorage.key(i);
      if (!id) { throw new Error('Index is out of range'); }
      const data = loadInternal(id);
      if (!data) { throw new Error('Specified data should be found.'); }
      return data;
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