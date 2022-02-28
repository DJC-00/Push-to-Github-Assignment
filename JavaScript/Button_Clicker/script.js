var loginButton = document.querySelector('#loginButton');
console.log(loginButton.value)
var definitionContent = document.querySelector('#definitionContent')
console.log(definitionContent)
var likes1 = 0;
var likes2 = 0;

function loginLogout(){
    if (loginButton.innerText == "Login"){
        loginButton.innerText = "Logout";
    }
    else{
        loginButton.innerText = "Login";
    }
};

function redefine(){
    var button = document.getElementById("defineButton")
    var text = document.getElementById("dojonaryDef")
    console.log(text.innerText)
    var newDef = document.getElementById("dojoDefText")
    button.style.display = "none";
    newDef.style.display = "none";
    text.style.display = "flex";
    text.innerText = newDef.value;
}

function likePost1(element){
    console.log(element.value);
    console.log(element.innerText);
    likes1++;
    element.innerText = (likes1 + " Likes");
    //console.log(this.innerText)
}

function likePost2(element){
    console.log(element.value);
    console.log(element.innerText);
    likes2++;
    element.innerText = (likes2 + " Likes");
    //console.log(this.innerText)
}

function likeAlert(){
    alert("You've liked a post!");
}