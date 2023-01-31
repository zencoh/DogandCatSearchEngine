
// cat API Key live_DumA8PS0G2lXkKvpVOVCuqMLTBJB0qi7ZuWTd6Tf4wqEPwHCDLOZxjHSzdx3UU5p
// var selectedBreed = document.getElementById('breed').value;
// create api call for dog images X
    // fetch dog images X
        // append images onto html webpage X

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
       var dogAttitude = data.temperament;
       var dogLife = data.life_span;
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
function onDogChange(event) {
    dogApi(event.target.value);
    dogImage('')
}


function onCatChange(event) {
    catPicture(event.target.value);
    catInfo(event.target.value);
}

// return response.textContent = 'information we want to pull from dog API'
// need to make it so when the data is retrieved it is displayed at the bottom of the HTML doc, line 99 textArea replace placeholder
// use local storage to store information that is retrieved from dog API. 
// localStorage.setItem(dog breed, data about dog) this will be the same for the cat Api
// use localStorge.getItem() to load breed when the user clicks previous/next breed
document.getElementById('dogBreed').addEventListener("change", onDogChange)
document.getElementById('catBreed').addEventListener("change", onCatChange)



// placeholder parameter. drop down menu will populate this to call the dogApi on the selected breed from webpage
// dogImage('hound');

// create api call for cat images X
    // fetch cat api data X
        // grab the cad breeds breed ID X
            // use breed ID to create url to fetch image X
    // fetch cat images X
        // append images onto html webpage
function catPicture(value) {
    var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + value;
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
    })
}
function catInfo(value) {
    var breedURL = 'https://api.thecatapi.com/v1/breeds/' + value;
    console.log(breedURL);
    fetch(breedURL)
    .then (function (response) {
        return response.json();
    })
    .then (function (data) {
        var catDescription = data.description;
        var catAttitude = data.temperament;
        var catLife = data.life_span;
        var infoContainer = document.getElementById("infoContainer");
        infoContainer.classList.add("cat-info");
        var descriptionPara = document.createElement("p");
        descriptionPara.textContent = "Description: " + catDescription;
        infoContainer.appendChild(descriptionPara);
        var lifePara = document.createElement("p");
        lifePara.textContent = "Life Span: " + catLife;
        var attitudePara = document.createElement("p");
        attitudePara.textContent = "Temperament: " + catAttitude;
        infoContainer.appendChild(attitudePara);
    })
}
// use breedURL to fetch description and life span X
// catPicture();
// bengal id beng
// abyssinian id abys   
// bombay id bomb
// chartreux id char
// oriental id orie

// modal for dog button
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });