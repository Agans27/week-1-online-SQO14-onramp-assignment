function countTruthy(arr) {
    let i=0;
    let count=0;

    while (i < arr.length){
        if(arr[i]){
            count++;
        }
        i++;
    }
    return count;
}
module.exports = countTruthy;