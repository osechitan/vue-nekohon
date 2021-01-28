// 関数とメソッドの書き方新旧

const array = [1, 2]

// ES5の書き方
var newArray1 = array.map(function(el){
    return el * 2
})

// ES2015の書き方
const newArray2 = array.map(el => {
    return el * 2
})

// retrunを省略バージョン
const newArray3 = array.map(el => el * 2)

// 引数が複数バージョン
const newArray4 = array.map((el, index) => el * 2)

// オブジェクトリテラルを返す場合
const newArray5 = array.map(el => ({ value: el * 2}))


console.log(newArray1)
console.log(newArray2)
console.log(newArray3)
console.log(newArray4)
console.log(newArray5)



//テンプレートリテラル新旧

var name1 = 'test'

// ES5の書き方
var template1 = '\
<div class="template">\
    <strong>' + this.name1 + '</strong>\
</div>'

// ES2015の書き方
const template2 = `
<div class="template">
    <strong>${ this.name1 }</strong>
</div>
`
console.log(template1)
console.log(template2)


// 分割代入
const [a, b] = [1, 2]
console.log(a)

const { name2 } = { id: 1, name2: 'りんご' }
console.log(name2)


// スプレッド演算子

const array2 = [1, 2, 3]
//arrayを展開して4を加えた新しい一次配列を作成
const newArray6 = [...array2, 4]
console.log(newArray6)


//配列メソッド
const array3 = [
    { id: 1, name: 'りんご'},
    { id: 2, name: 'ばなな'}
]
const result = array3.find(el => el.id === 2)
console.log(result)
const resultIndex = array3.findIndex(el => el.id === 2)
console.log(resultIndex)


function myFunction(num) {
    return new Promise((resolve, reject) => {
        if(num < 10){
            resolve('success!')
        } else {
            reject('error!')
        }
    })
}

myFunction(100).catch(value => {
    console.log(value)
})
