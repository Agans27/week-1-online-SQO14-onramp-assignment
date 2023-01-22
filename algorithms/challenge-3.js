function sumMix(arr) {
   let sum = 0;
   let count = 0;

   while(count < arr.length){
    if(typeof arr[count] !== "number"){
        sum = sum + parseInt(arr[count], 10);
    }else{
        sum += arr[count];
    }
    count++
   }

   return sum;
 }

  module.exports = sumMix