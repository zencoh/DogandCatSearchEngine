
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

dogApi('hound');

// create api call for cat images
    // fetch cat images
        // append images onto html webpage