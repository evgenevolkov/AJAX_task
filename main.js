/**
 * Created by Jenya on 26.04.15.
 */

console.log ("init OK");

// Creating function for getting info from OMDB
function getMovieInfo (filmTitle) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.omdbapi.com/?t=" + filmTitle + "&y=&plot=short&r=json";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState !== 4 && xmlhttp.status == 200) {
            console.log("loading... " + (4 - xmlhttp.readyState) + " steps to go.")
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var responseArr = JSON.parse(xmlhttp.responseText);
            console.log("myArr= " + responseArr);
            myFunction(responseArr);
            return responseArr
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}

// Function for passing entered film title to query
function confirm () {
    console.log ("confirmed");
    var movieTitleEntered = document.getElementById("movieTitle").value;
    console.log("input value: " + movieTitleEntered);
    getMovieInfo(movieTitleEntered)
}

// Function for printiong out received film info and printing poster
function myFunction(responseArr) {
    var out = '';
    for (var property in responseArr) {
        out += property + ': ' + responseArr[property] + '\n' + "<br>";
        if (property = "Title") {
            console.log("!!!Title " + responseArr[property])
        }
       if (property = "Poster") {
           document.getElementById("filmPoster").src = responseArr[property];
       }
    }
    document.getElementById("filmDescription").innerHTML = out;
    console.log(out);
}

console.log ("End");
console.log ("End");


