# iconfontcreation
アイコンフォント作成のGulpセット

## 参考

- [gulpでWebFont作成を自動化 | Web雑記帳](http://atsu666.com/entry-78.html)

## 手順

1. ```git clone https://github.com/enetworks/iconfontcreation.git```
2. ```cd iconfontcreation```
3. ```npm install```
4. `src/icons`内にSVG作成
5. `Gulpfile.js`の6行目の`fontName`を適宜変更
6. ```gulp Iconfont```
7. `dest`内に一式作成されます

## なんとなく注意点

- 2個以上ないと生成されない？
- SVGの作り方はいろいろ調べましょう（困ったら複合パス化）
- 単色です