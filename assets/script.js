
// cat API Key live_DumA8PS0G2lXkKvpVOVCuqMLTBJB0qi7ZuWTd6Tf4wqEPwHCDLOZxjHSzdx3UU5p

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
            imageUrl = data.message;
        })
// get elmement by iD
// append image to webpage

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
}
dogApi(55);
// boxer
// dalmation
// Greyhound
// Golden Retreiver
// Great Dane


// placeholder parameter. drop down menu will populate this to call the dogApi on the selected breed from webpage
dogImage('hound');

// create api call for cat images X
    // fetch cat api data X
        // grab the cad breeds breed ID 
            // use breed ID to create url to fetch image
    // fetch cat images
        // append images onto html webpage
function catApi(value) {
    var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + value;
    console.log(catUrl);
    fetch(catUrl)
    .then (function (response) {
        return response.json();
    })
    .then(function (data) {
       catImage = data[0].url;
       catID = document.getElementById('Beng').textContent;
       searchID = catID.toLowerCase().slice(0, 4);
       console.log(searchID);
       breedUrl = 'https://api.thecatapi.com/v1/breeds/' + searchID;
    })
}
// use breedURL to fetch description and life span 
        catApi('beng');
// bengal id beng
// abyssinian id abys   
// bombay id bomb
// chartreux id char
// oriental id orie