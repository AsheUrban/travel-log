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

// UI LOGIC -------

let travelLog = new TravelLog();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedPlaceName = document.querySelector("input#new-place-name").value;
  const inputtedLocation = document.querySelector("input#new-location").value;
  const inputtedNote = document.querySelector("input#new-note").value;
  let newPlace = new Place(inputtedPlaceName, inputtedLocation, inputtedNote);
  travelLog.addPlace(newPlace);
  console.log(travelLog.places);
}

window.addEventListener("load", function () {
  this.document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});
