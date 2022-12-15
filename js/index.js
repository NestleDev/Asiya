

//метод map
var ar = [1, 2, 3, 4];
var newArray = ar.map(function (number) {
    return number * number;
});
console.log(ar);
console.log(newArray);

///стрелочная функция
var sum = (a, b) => {
    return a + b
}
// 
var ar = [1, 2, 3, 4];
var newArray = ar.map((number) => number * number);
console.log(ar);
console.log(newArray);

//let (не всплывает)
if (10 > 1) {
    let a = 10;
    console.log(a);

}
for (let i = 0; i < 3; i++)
    console.log(i);
// не работает за пределами for  

// метод const (не изменяемое значение, и не всплывает)
const a = 100;
console.log(a);
