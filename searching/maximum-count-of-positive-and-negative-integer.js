function maxCountOfPositiveNegativeInteger(arr){
    return Math.max(upperBound(arr), lowerBound(arr))
}
function upperBound(arr){
    if (arr[0]>=0) return 0;
    let left = 0;
    let right = arr.length - 1;
    while(left<= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] < 0){
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }
    return left;
}
function lowerBound(arr){
    if (arr[arr.length - 1]<=0) return 0;
    let left = 0;
    let right = arr.length - 1;
    while(left<= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] > 0){
            right = mid - 1;
        } 
        else {
            left = mid + 1;
        }
    }
    return arr.length - left;
}
console.log(maxCountOfPositiveNegativeInteger([-2,-1,-1,2,3,4]))
console.log(maxCountOfPositiveNegativeInteger([-3,-2,-1,-1,0,0,1,2]))
