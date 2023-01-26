// bengal cat is just a placeholder until I can use the input from the HTML doc
var breedSearched = 'bengal cat'
// I am continuing to do research on this API to find the right parameters for, I'm assuming the text content would help with the articles summary of the breed.
fetch('https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=' + breedSearched)
  .then((response) => response.json())
  .then((data) => console.log(data));
//   i will make a if then statement to display the info from the fetch request to the HTML doc once there is an HTML semantic or tag I can use to display data
  