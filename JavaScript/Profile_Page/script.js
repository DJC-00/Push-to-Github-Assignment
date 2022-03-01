var connections = 500
var requests = 2

function editProf(element){
    var name1 = "DJ Castle"
    var name2 = "Bilbo Baggins"
    if(element.innerText == name1){
        element.innerText = name2;
    }
    else{
        element.innerText = name1;
    }
}

function addConnect(connectionTotal,requestTotal,connReq){
    connReq.style.display = "none";
    connections += 1;
    requests -=1;
    connectionTotal.innerText = connections;
    requestTotal.innerText = requests;
}

function denyConnect(requestTotal,connReq){
    connReq.style.display = "none";
    requests -=1;
    requestTotal.innerText = requests;
}