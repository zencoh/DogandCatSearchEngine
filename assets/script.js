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
    })
    
}
function onDogChange(event) {
    dogApi(event.target.value);
if(event.target.value == '127'){
    dogImage('greyhound')
}
    else if (event.target.value == '121') {
      dogImage('retriever/golden')
    }
    else if (event.target.value == '92') {
      dogImage('dalmatian')
    }
    else if (event.target.value == '55') {
      dogImage('boxer')
    }
    else if (event.target.value == '124'){
      dogImage('dane/great')
    }
}



function onCatChange(event) {
    catPicture(event.target.value);
    catInfo(event.target.value);
}

document.getElementById('dogBreed').addEventListener("change", onDogChange)
document.getElementById('catBreed').addEventListener("change", onCatChange)

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
// modal for chosen breed
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
        var div = document.getElementById('infoContainer');
            while(div.firstChild){
            div.removeChild(div.firstChild);
            }
        var div = document.getElementById('imageContainer');
            while(div.firstChild){
            div.removeChild(div.firstChild);
            }
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