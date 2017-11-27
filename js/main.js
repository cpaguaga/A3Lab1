(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   let modelInfoBox = document.querySelector(".modelInfo");
  //console.log(modelInfoBox);
  let modelName = modelInfoBox.querySelector('.modelName');
  let priceInfo = modelInfoBox.querySelector('.priceInfo');
  let modelDetails = modelInfoBox.querySelector('.modelDetails');

  //retrieve the data
  console.log(carData);
  let selected = document.querySelector("#F55");

  modelName.innerHTML = carData[selected.id].model;
  priceInfo.innerHTML = "$"+carData[selected.id].price;
  modelDetails.innerHTML = carData[selected.id].description;

  let carThumbnails = document.querySelectorAll('.data-ref');
  console.log(carThumbnails);

  function carSwap(event){
    let it = event.currentTarget;
    console.log(it);
    //console.log("hello");
    //change car info on right to newly selected car
      modelName.innerHTML = carData[it.id].model;
      priceInfo.innerHTML = "$"+carData[it.id].price;
      modelDetails.innerHTML = carData[it.id].description;
    //change car info on right to newly selected cars
    //remove nonActive class from selected car
    it.classList.remove("nonActive");
    //add nonActive class to previously selected one
    selected.classList.add("nonActive");
    selected = it;

  }

  carThumbnails.forEach(function(carThumbnail){
    //do something
    carThumbnail.classList.add("nonActive");
    carThumbnail.addEventListener("click",carSwap,false);
  });
  selected.classList.remove("nonActive");
  //insert info
})();
