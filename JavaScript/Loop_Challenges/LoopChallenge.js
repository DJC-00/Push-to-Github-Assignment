
var challenge1 = [];
var challenge2 = [];
var challenge3 = [];
var challenge4 = [];
var challenge5 = [];

// Challenge 1
for(var i=0; i<=20; i++){

    if(i%2 != 0){
        challenge1.push(i);
    }
}

// Challenge 2
for(var i=100; i>=3; i--){
    if(i%3 == 0){
        challenge2.push(i);
    }
}

// Challenge 3
var num = 4;
for(var i=6; i>0; i--){
    challenge3.push(num);
    num = num - 1.5;
}

// Challenge 4
var sum = 0;
for(var i=1; i<=100; i++){
    sum += i;
    if(i==100){
        challenge4.push(sum);
    }
}

// Challenge 5
var product = 1;
for(var i=2; i<=12; i++){
    product = product * i;
    if(i==12){
        challenge5.push(product);
    }
}

console.log("Challenge 1: " + challenge1)
console.log("Challenge 2: " + challenge2)
console.log("Challenge 3: " + challenge3)
console.log("Challenge 4: " + challenge4)
console.log("Challenge 5: " + challenge5)