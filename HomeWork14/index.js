// let num = 5921;

// function Reverse(num) {
//   let result = 0;
//   while (num) {
//     result = result * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }

//   return result;
// }
// console.log(Reverse(num));

function fn(a,b) {
    let res =1
    for(let i =0;i<b;i++){
        res=res*a
        console.log(res,i);
    }   
    console.log(fn); 
}
