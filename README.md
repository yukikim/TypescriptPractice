## Typescript 学習

### 設定

install

    $ npm install --save-dev typescript @types/node
    $ npx tsc --init

## tsconfig.json

"target": "es2016" >> "target": "es2020"

"module": "commonjs" >> "module": "esnext"

    - // "moduleResolution": "node"
    + "moduleResolution": "node"
    - // "outDir": "./dist"
    + "outDir": "./dist"

+ "include": ["./src/**/*.ts"]

### 実行コマンド

    $ npx tsc //すべてのファイルをコンパイル
    $ npx tsc hoge.ts //hoge.tsをコンパイル
