var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "42"
];

function diceRoll(num){
    var total = 0;
    for (var i=0; i < num; i++){
        let result = Math.ceil(Math.random() * 6);
        if (result === 0){
            result = 1;
        }
        console.log(result);
        total += result;
    }
    return total;
}

function eightBall(question){
    let result8Ball = Math.floor(Math.random() * (lifesAnswers.length + 1));
    if (result8Ball > lifesAnswers.length){
        result = lifesAnswers.length;
    }
    console.log(question + ": "+ lifesAnswers[result8Ball])
}

function fireball(){
    console.log("Casting Fireball!")
    var damage = diceRoll(8);
    console.log("You did " + damage + " damage!")
}

fireball();

//diceRoll();

// for(var i = 100; i > 0; i--){    
//     eightBall("What is the answer to life, the universe, and everything?")
// }
