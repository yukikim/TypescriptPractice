/**
 * 型エイリアス Point: オブジェクト型
 * @property x 数値
 * @property y 数値
 */
type Point = {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`x座標は${point.x}です`)
    console.log(`y座標は${point.y}です`)
}

printPoint({x: 100, y: 200})

/**
 * 型エイリアス Formatter: 関数型
 * 文字列を受け取って文字列を返す
 * @property a 文字列
 */
type Formatter = (a: string) => string

/**
 * printTest
 * @param firstName 文字列
 * @param formatter Formatter型関数
 */
function printTest(firstName: string, formatter: Formatter) {
    console.log(formatter(firstName))
}

/**
 * resName Formatter型関数
 * @param n 文字列
 */
const resName: Formatter = (n: string): string => {
    return `${n} さん`;
}
printTest('taka', resName)

/**
 * キー名が定まらないケース
 * [key: string]: string
 * キーは文字列、値も文字列
 */
type Label = {
    [key: string]: string
}

const labels: Label = {
    topTitle: 'トップのタイトル',
    subTitle: 'サブタイトル'
}
console.log(labels.topTitle)
