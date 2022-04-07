

function countChange(amount){
    var changeArr = []
    var coinValues = [25,10,5,1]
    
    changeArr.push(amount)
    amount = amount * 100

    for (var i = 0; i < coinValues.length; i++){                //For each coin..
        var leftover = amount % coinValues[i]                   //determine the remaining change value needed
        var tempChange = (amount - leftover ) / coinValues[i]       //subtract the overflow and divide remainder by the given coin value
        changeArr.push(tempChange)                               //push amount of coins to array
        amount = leftover;                                      //set amount equal to the leftover change
    }
    
    return ("$" + changeArr[0] + " --> " + changeArr[1] + " Quarter(s), " + changeArr[2] + " Dime(s), " + changeArr[3] + " Nickel(s) " + changeArr[4] + " Penny(s).")
}

console.log(countChange(3.21))
console.log(countChange(10.01))
console.log(countChange(345.99))