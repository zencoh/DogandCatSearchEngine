
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
        
        

// bengal cat is just a placeholder until I can use the input from the HTML doc
var breedSearched = 'bengal cat'
// I am continuing to do research on this API to find the right parameters for, I'm assuming the text content would help with the articles summary of the breed.
fetch('https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=' + breedSearched)
  .then((response) => response.json())
  .then((data) => console.log(data));
//   i will make a if then statement to display the info from the fetch request to the HTML doc once there is an HTML semantic or tag I can use to display data
  
