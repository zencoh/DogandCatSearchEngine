
// cat API Key live_DumA8PS0G2lXkKvpVOVCuqMLTBJB0qi7ZuWTd6Tf4wqEPwHCDLOZxjHSzdx3UU5p
// var selectedBreed = document.getElementById('breed').value;
// create api call for dog images X
    // fetch dog images X
        // append images onto html webpage 

function dogImage(value) {
    // value is input from html of what breed the user selects from drop down menu
    var requestUrl = 'https://dog.ceo/api/breed/' + value + '/images/random';
    console.log(requestUrl);
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            imageUrl = data.message;
            var imageContainer = document.getElementById("imageContainer");
            imageContainer.innerHTML = '';
            var imageElement = document.createElement("img");
            imageElement.setAttribute("src", imageUrl);
            imageElement.classList.add("dog-image");
            imageContainer.appendChild(imageElement);
            // document.body.appendChild(imageContainer);
        })
}     
// {55: 'Boxer',92:'Dalmatian', 121:'Golden Retriever', 124:'Great Dane', 127:'Greyhound'}
// data value = # for breed, needs to be set for each dropdown item
function dogApi(value) {
    var dogUrl = 'https://api.thedogapi.com/v1/breeds/' + value;
    console.log(dogUrl);
    fetch(dogUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
       var dogAttitude = data.temperament;
       console.log(dogAttitude);
       var dogLife = data.life_span;
       console.log(dogLife);     
       var infoContainer = document.getElementById("infoContainer");
       infoContainer.classList.add("dog-info");
       var attitudePara = document.createElement("p");
       attitudePara.textContent = "Temperament: " + dogAttitude;
       infoContainer.appendChild(attitudePara);
       var lifePara = document.createElement("p");
       lifePara.textContent = "Life Span: " + dogLife;
       infoContainer.appendChild(lifePara);
    //    document.body.appendChild(infoContainer);
    })
    
}
function onSelectChange(event) {
    dogApi(event.target.value);
}
dogApi(document.getElementById('breed').value);


// return response.textContent = 'information we want to pull from dog API'
// need to make it so when the data is retrieved it is displayed at the bottom of the HTML doc, line 99 textArea replace placeholder
// use local storage to store information that is retrieved from dog API. 
// localStorage.setItem(dog breed, data about dog) this will be the same for the cat Api
// use localStorge.getItem() to load breed when the user clicks previous/next breed
document.getElementById('breed').addEventListener("change", onSelectChange)
// boxer
// dalmation
// Greyhound
// Golden Retreiver
// Great Dane


// placeholder parameter. drop down menu will populate this to call the dogApi on the selected breed from webpage
// dogImage('hound');

// create api call for cat images X
    // fetch cat api data X
        // grab the cad breeds breed ID X
            // use breed ID to create url to fetch image X
    // fetch cat images X
        // append images onto html webpage
function catPicture() {
    // match element to html, 'beng' is a placeholder
    var catID = document.getElementById('Beng').textContent;
    var searchID = catID.toLowerCase().slice(0, 4); 
    var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + searchID;
    console.log(catUrl);
    fetch(catUrl)
    .then (function (response) {
        return response.json();
    })
    .then(function (data) {
       catImage = data[0].url;
       var imageContainer = document.getElementById("imageContainer");
       var imageElement = document.createElement("img");
       imageElement.setAttribute("src", catImage);
       imageElement.classList.add("cat-image");
       imageContainer.appendChild(imageElement);
       document.body.appendChild(imageContainer);
      catInfo();
    })
}
function catInfo() {
    var catID = document.getElementById('Beng').textContent;
    var searchID = catID.toLowerCase().slice(0, 4); 
    var breedURL = 'https://api.thecatapi.com/v1/breeds/' + searchID;
    console.log(breedURL);
    fetch(breedURL)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        var catDescription = data.description;
        console.log(catDescription);
        var catAttitude = data.temperament;
        console.log(catAttitude);
        var catLife = data.life_span;
        console.log(catLife);
        var infoContainer = document.createElement("div");
        infoContainer.classList.add("cat-info");
        var descriptionPara = document.createElement("p");
        descriptionPara.textContent = "Description: " + catDescription;
        infoContainer.appendChild(descriptionPara);
        var lifePara = document.createElement("p");
        lifePara.textContent = "Life Span: " + catLife;
        var attitudePara = document.createElement("p");
        attitudePara.textContent = "Temperament: " + catAttitude;
        infoContainer.appendChild(attitudePara);
        document.body.appendChild(infoContainer);
    })
}
// use breedURL to fetch description and life span X
catPicture();
// bengal id beng
// abyssinian id abys   
// bombay id bomb
// chartreux id char
// oriental id orie