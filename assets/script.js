
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
    })
}
        catApi('beng');

// bengal cat is just a placeholder until I can use the input from the HTML doc
var breedSearched = 'bengal cat'
// i might use something like this when a button is made, then it is taking the search term and adding it dynamically to the search url
// let searchUrl = 'https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='

// let userInput;
// function description() {
//     userInput = select('#userInput');
//     userInput.changed(wikiSearch);
//     wikiSearch();
// }

// function wikiSearch() {
//     let term = userInput.value();
//     let url = searchUrl + term;
//     console.log(term);
// }

fetch("https://en.wikipedia.org/w/api.php?action=query&titles=bengal_(cat)&prop=revisions&rvprop=content&format=json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // extract the information you need from the data here
  })

// I am continuing to do research on this API to find the right parameters for, I'm assuming the text content would help with the articles summary of the breed.
fetch('https://www.mediawiki.org/w/api.php?action=parse&format=json&page=' + breedSearched)
  .then((response) => response.json())
  .then((data) => console.log(data));
//   i will make a if then statement to display the info from the fetch request to the HTML doc once there is an HTML semantic or tag I can use to display data
  
