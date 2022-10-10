function maximum(arr){
  let max = arr[0];
  for (let i = 0 ; i < arr.length; i++) {
    if (max< arr[i]) {
      max = arr[i];
    } 
  }
 let result =  ([max]);
  return result;
};
console.log(maximum([10,3,8,1,33,99,9,6,34,56,79,89,15,57]))



function minimum(arr){
    let min = arr[0];
    for (let i = 0 ; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      } 
    }
   let result =  ([min]);
    return result;
  };
  console.log(minimum([10,3,8,1,33,99,9,6,34,56,79,89,15,57]))