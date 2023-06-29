const xhr = new XMLHttpRequest();

let Ajax_Function = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        
        const Title = document.getElementsByClassName("Title");
       	Title[0].innerHTML = "Name:-" +response.Title;
       	
       	const Director = document.getElementsByClassName("Director");
        Director[0].innerHTML = "Director:-" +response.Director;
        
        const  Rating = document.getElementsByClassName("Rating");
        Rating[0].innerHTML = "IMDB Rating:-" +response.imdbRating;
    } else {
        console.log("Something went wrong.");
    }
};

const button = document.getElementById("button");
button.onclick = function(){
	let input = document.getElementById("input");
	xhr.open("GET", "http://www.omdbapi.com/?t="+input.value+"&apikey=4369fff9");
	xhr.send();
	xhr.onloadend = Ajax_Function;
};
