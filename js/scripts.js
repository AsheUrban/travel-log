// Business Logic for TravelLog--------

function TravelLog() {
  this.places = {};
  this.currentId = 0;
}

TravelLog.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

TravelLog.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Places -------

function Place(placeName, location, note) {
  this.placeName = placeName;
  this.location = location;
  this.note = note;
}

// function displayResults() {
//   const placeName = document.getElementById("place-name");
//   const location = document.getElementById("location");
//   const note = document.getElementById("note").removeAttribute("hidden");

// }

// UI LOGIC -------

let travelLog = new TravelLog();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedPlaceName = document.querySelector(
    "input#new-place-name"
  ).value;
  const inputtedLocation = document.querySelector("input#new-location").value;
  const inputtedNote = document.querySelector("input#new-note").value;

  let newPlace = new Place(inputtedPlaceName, inputtedLocation, inputtedNote);
  let placeList = document.querySelector("div#places");
  
  travelLog.addPlace(newPlace);
  addPlaceToList((placeList.innerText = inputtedPlaceName));
}

window.addEventListener("load", function () {
  this.document
    .querySelector("form#new-place")
    .addEventListener("submit", handleFormSubmission);
});

function addPlaceToList(newPlace) {
  document.querySelector("div#places");
}
