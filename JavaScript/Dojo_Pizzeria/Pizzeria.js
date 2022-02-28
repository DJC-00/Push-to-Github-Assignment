
var pizzaCrust = ["Hand Tossed", "Deep Dish", "Brooklyn Style", "Thick Crust", "Cauliflower"];
var pizzaSauce = ["Traditional","Spicy","Olive Oil","Ranch","Barbeque"];
var cheese = ["Mozzarella","Provelone","Feta","Parm","Assiago"];
var protein = ["Pepperoni","Sausage","Ham","Anchovies","Plant Based Sausage"];
var veggies = ["Jalipenios","Olives","Bell Peppers","Mushrooms","Onions"]


function Pizza(crust, sauce, cheese, protien, veggies){
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.protien = protien;
    this.veggies = veggies;

}

function randPizza(){
    console.log("Making a pizza, Please Wait...")
    var rPizza = new Pizza();

    rPizza.crust = pizzaCrust[Math.floor(Math.random() * pizzaCrust.length)];
    rPizza.sauce = pizzaSauce[Math.floor(Math.random() * pizzaSauce.length)];
    rPizza.cheese = multiSelect(cheese);
    rPizza.protien = multiSelect(protein);
    rPizza.veggies = multiSelect(veggies);
    console.log(rPizza)
}

function multiSelect(choiceArray){
    var tempChoice = choiceArray;
    var choiceNum = Math.floor(Math.random() * tempChoice.length);
    var tempArr = [];

    for (var i = choiceNum; i > 0; i--){
        var selection = Math.floor(Math.random() * tempChoice.length);
        tempArr.push(tempChoice[selection]);
        tempChoice.splice(selection, selection);
    }

    if (tempArr.length == 0){
        tempArr[0] = "None";
    }

    return tempArr;
}


let pizza1 = new Pizza("Deep Dish", "Traditional", ["Mozzarella"], ["Pepperoni"],["None"]);
var pizza2 = new Pizza("Hand Tossed", "Marinara", ["Mozzarella", "Feta"], ["None"],["Mushrooms", "Olives", "Onions"]);
console.log(pizza1);
console.log(pizza2);
randPizza();
randPizza();
randPizza();