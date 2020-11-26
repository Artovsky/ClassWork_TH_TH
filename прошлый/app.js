let i = 12
const x = 124
let peremennaya = 'Izmennaya'
let mas = [1,2,3,4,5,6,7,8,9,10,'Satan','Bog','Goddes',x , undefined, null, {},[1,2,[0,1,2,[]]]] // [ ]
        // 0,1,2,3,4,5,6,7,8, 9, 10      , 11 ,  12 ,13,   14       , 15  , 16, 17            - индексы

//фаза - 1 - true
//ноль - 0 - false
alert(mas[11])
alert(mas[10])
console.log(mas[12])
console.log(mas[17][2][3])
mas[10] = 'Archangel'
mas[11] = 'Bogdan'
mas[12] = 'Schichko'
console.log(mas)
mas[13] = 'Vlad'
alert(mas[13])

function Summa (a,b)
{
return(a+b)
}

console.log(Summa(5,5))
console.log(Summa(14178294169246,419674912))

console.log(Summa(prompt(),prompt()))
console.log(x,i)

function Raznost(a,b)
{
    return(b-a)
}

console.log(Raznost(10,5))

function Product(a,b)
{
    return(a*b)
}

alert(Product(10,5))


function Delenie(a,b)
{
    return(a/b)
}
alert(Delenie(10,5))
alert(Delenie(20,5))

// от - 2**53-1 до 2**53-1 

 alert(2**53-1)

