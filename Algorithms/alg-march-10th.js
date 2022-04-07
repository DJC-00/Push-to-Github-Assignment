// look at first element of array
// check next element to see if it is the next number
// if the next number is correct, save current position value and check next value
// continue without saving current position
// go until the next number is incorrect
// push string "saved value + - + arr[i]"


// function bookIndex(arr){
//     var firstPage = 0;
//     var finalString = "";
//     var hasMultiplePages = false;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i+1] == arr[i]+1 ){
//             if (hasMultiplePages == false){
//                 hasMultiplePages = true;
//                 firstPage = arr[i]; 
//             }
//         }

//         else{
//             if (hasMultiplePages == true){
//                 finalString += (firstPage + "-" + arr[i] + ", ")
//                 hasMultiplePages = false
//              }
//             else{
//                 finalString += ( arr[i] + ", ")
//             }
//         }
//     }
//     return finalString.slice(0,-2);
// }

function bookIndex(arr){
    var firstPage = 0;
    var finalString = "";
    var hasMultiplePages = false;
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i+1] == arr[i]+1 ){
            if (hasMultiplePages == false){
                hasMultiplePages = true;
                firstPage = arr[i]; 
            }
            else{
                continue;
            }
        }

        else if(hasMultiplePages == true){
            finalString += (firstPage + "-" + arr[i] + ", ")
            hasMultiplePages = false
             }
        else{
            finalString += ( arr[i] + ", ")
        }
    }
    return finalString.slice(0,-2);
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))

//"1, 3-5, 7-8, 10, 12"