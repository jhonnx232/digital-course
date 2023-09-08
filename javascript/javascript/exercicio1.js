const input =require("readline-sync")
let T , cha=0;
let arr =[5]
T = Number(input.question(""))


console.log(T)

for (let i = 0; i < 5; i++) {
    arr[i]=Number(input.question(""))
    if(arr[i]== T){
      cha++
    }
}

console.log(cha)