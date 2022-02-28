function reverseArray(arr){
    // Value Holder
    var arrayTemp;
    // Initial array length variable
    var rearArrayValue = arr.length-1;
    for (var i=0; i<arr.length/2; i++){
        // Store arr[i] in arrayTemp
        arrayTemp = arr[i]
        // Set arr[i] = arr[rearArray Value]
        arr[i] = arr[rearArrayValue];
        // 
        arr[rearArrayValue] = arrayTemp;
        rearArrayValue -= 1;
        console.log(arr)

        }
        
    return arr;
    }

var testArray = [1,2,3,4,5,6];
console.log(testArray)
testArray = reverseArray(testArray)
console.log(testArray)

