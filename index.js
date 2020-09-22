
function getDogPics() {
let number = $('input[name="pics"]').val();
console.log(number);
fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

}

function displayResults(responseJson) {
   
   let newString = `${responseJson.message}`.split(',');
        console.log(newString);
    let images = "";
    for (let i=0; i < newString.length; i++) {
      images += `<img src="${newString[i]}">`;
    } 
    console.log(images)
    $('section').html(images);
}

function handleFormSubmit() {
$('form').submit(event => {
    event.preventDefault();
    getDogPics();
});
}


$(function() {
    console.log('app loading');
    handleFormSubmit();

});