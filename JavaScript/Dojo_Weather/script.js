
var prevCity = document.getElementById("sanJose")
var cityName = document.getElementById("cityNameHeader")
var currUnit = document.getElementById("tempUnit").value
var currentCity = document.getElementById("sanJose")

document.addEventListener("DOMContentLoaded", function() {
    updateWeather(sanJose);
});

var SanJose = 
        [["rain", "sun", "clouds", "sun"],
        [24, 27, 21, 26],
        [10, 11, 4, 0]];

var Burbank = 
        [["sun", "sun", "clouds", "clouds"],
        [30, 32, 22,21],
        [10, 11, 4, 0]];

var Chicago = 
        [["rain", "sun", "clouds", "rain"],
        [24, 35, 25,23],
        [11, 12, 4, 5]];

var Dallas =
        [["clouds", "rain", "clouds", "sun"],
        [10, 23, 26, 29],
        [-4, 14, 13, 12]];

function hideCookies(element){
    element.style.display = "none";
}

function updateWeather(city){
    currentCity = city;
    prevCity.style.display = "block";
    prevCity = city;
    city.style.display = "none";
    var currentCityArr;
    var days = [];

    days.push(document.getElementById("today"))
    days.push(document.getElementById("tomorrow"))
    days.push(document.getElementById("friday"))
    days.push(document.getElementById("saturday"))

    if (city.innerText == "Burbank"){
        currentCityArr = Burbank;
        cityName.innerText = "Burbank"
    }
    else if(city.innerText == "Chicago"){
        currentCityArr = Chicago;
        cityName.innerText = "Chicago"
    }
    else if(city.innerText == "Dallas"){
        currentCityArr = Dallas;
        cityName.innerText = "Dallas"
    }
    else if(city.innerText == "San Jose"){
        currentCityArr = SanJose;
        cityName.innerText = "San Jose"
    }
        // console.log(currentCity[0][0])
        for (var i = 0; i < days.length; i++){
            days[i].childNodes[3].src= './Assets/Pictures/some_' + currentCityArr[0][i] + '.png';
            days[i].childNodes[5].innerText = "Some " + currentCityArr[0][i];
            days[i].childNodes[7].childNodes[1].innerText = currentCityArr[1][i] + "°";
            days[i].childNodes[7].childNodes[3].innerText = currentCityArr[2][i] + "°";
        }
}

function changeUnit(){
    if (tempUnit.value == currUnit){   
        return;
    }
    else{
        currUnit = tempUnit.value;
        if (currUnit == "F"){
            for(var i = 1; i < 3; i++){
                for(var j = 0; j < 4; j++){
                    SanJose[i][j] = Math.round(((SanJose[i][j]) * 1.8 + 32));
                    Burbank[i][j] = Math.round(((Burbank[i][j]) * 1.8 + 32));
                    Chicago[i][j] = Math.round(((Chicago[i][j]) * 1.8 + 32));
                    Dallas[i][j] = Math.round(((Dallas[i][j]) * 1.8 + 32));
                }
            }
        }
        else if (currUnit == "C"){
            for(var i = 1; i < 3; i++){
                for(var j = 0; j < 4; j++){
                    SanJose[i][j] = Math.round((((SanJose[i][j]) -  32) *(5/9)));
                    Burbank[i][j] = Math.round((((Burbank[i][j]) -  32) *(5/9)));
                    Chicago[i][j] = Math.round((((Chicago[i][j]) -  32) *(5/9)));
                    Dallas[i][j] = Math.round((((Dallas[i][j]) -  32) *(5/9)));
                }
            }
        }
    }
    updateWeather(currentCity)
}