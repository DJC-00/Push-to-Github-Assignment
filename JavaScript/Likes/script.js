var likeArr = [0,0,0]

function likePost1(element){
    element.style.display = "block"
    likeArr[0] += 1;
    element.innerText = (likeArr[0] + " Like(s)");
    //console.log(this.innerText)
}

function likePost2(element){
    element.style.display = "block"
    likeArr[1] += 1;
    element.innerText = (likeArr[1] + " Like(s)");
    //console.log(this.innerText)
}

function likePost3(element){
    element.style.display = "block"
    likeArr[2] += 1;
    element.innerText = (likeArr[2] + " Like(s)");
    //console.log(this.innerText)
}