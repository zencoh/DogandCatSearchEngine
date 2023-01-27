
// cat API Key live_DumA8PS0G2lXkKvpVOVCuqMLTBJB0qi7ZuWTd6Tf4wqEPwHCDLOZxjHSzdx3UU5p

// create api call for dog images X
    // fetch dog images X
        // append images onto html webpage 

function dogApi(value) {
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
// placeholder parameter. drop down menu will populate this to call the dogApi on the selected breed from webpage
dogApi('hound');

// create api call for cat images
    // fetch cat api data
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
    })
}
        catApi('beng');
