window.addEventListener('DOMContentLoaded', function(){
  const selectIn = document.getElementById('breed-select');
  const btn = document.getElementById('btn');

  function init(){
    let apiUrl = 'https://dog.ceo/api/breeds/list/all';

    fetch(apiUrl)
    .then(function(res){
      return res.json();
    })
    .then(function(jsonData){
      let breedArray = Object.keys(jsonData.message);

      for (let aBreed of breedArray) {
        //console.log(aBreed);
        let opt = document.createElement('option');
        opt.value = aBreed;
        let optText = document.createTextNode(aBreed);
        opt.appendChild(optText);
        selectIn.appendChild(opt);
      }

      fetchImage();

    })
    .catch(error => console.log(error));
  }

  function fetchImage(){
    let selectedBreed = selectIn.value;

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
    .then(function(res){
      return res.json();
    })
    .then(function(jsonData){
      //console.log(jsonData);
      let img = document.getElementById('dog-img');
      img.src = jsonData.message;
      img.setAttribute('alt', selectedBreed);
    })
    .catch();
  }

  btn.addEventListener('click', fetchImage);

  selectIn.addEventListener('change', fetchImage);

  init();
  

}); //end DOMContentLoaded