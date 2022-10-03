let obj1 = {
    name:'Dima',
    age:20,
    hair:'white',
    habitats:{
        isSmoking:false,
        isDrinking:true,
        isGay:true,
        isLearning:true,
    }
}
let obj2 = {
    name:'Dima',
    age:20,
    hair:'white',
    habitats:{
        isSmoking:false,
        isDrinking:true,
        isGay:true,
        isLearning:true,
    }
}
function compare(obj1, obj2) {
    let arr1 = Object.getOwnPropertyNames(obj1);
    let arr2 = Object.getOwnPropertyNames(obj2);
  
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i += 1) {
      let arr3 = arr1[i];
      let obj3 = typeof(obj1[arr3]) === 'object' && typeof(obj2[arr3]) === 'object';
  
      if ((!obj3 && (obj1[arr3] !== obj2[arr3]))
      || (obj3 && !compare(obj1[arr3], obj2[arr3]))) {
        return false;
      }
    }
  
    return true;
  }
  console.log(compare(obj1, obj2));

