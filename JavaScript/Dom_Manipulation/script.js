
var heading = document.querySelector('#title')
console.log(heading);
var firstName = document.querySelector('#firstName')
console.log(firstName);
var daftPunk = document.querySelector('#daftPunk')
var faveCity = document.querySelector('#city')
var outputDiv = document.querySelector('#favoriteCity')
var innerText = document.querySelector('#innerText')


function hello(){
    console.log(firstName.value);
    alert('Hello, ' + firstName.value + '!')
}

function daftover(){
    daftPunk.src = "./Assets/daftpunktocat-thomas.gif";
}

function populateDiv(){
    console.log(faveCity.value)
    outputDiv.innerText = faveCity.value + " nice";
}