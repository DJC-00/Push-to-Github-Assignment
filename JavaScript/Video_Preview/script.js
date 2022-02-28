console.log("page loaded...");

var vid = document.getElementById("duckVideo");

function vidPreview(element){
    element.muted = true;
    element.play();
    
}

function vidReset(element){
    element.currentTime = 0;
}