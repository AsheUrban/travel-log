// Business Logic for TravelLog--------

function TravelLog() {
  this.places = {};
  this.currentId = 0;
}

TravelLog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Places -------

function Place(placeName, location, note) {
  this.placeName = placeName;
  this.location = location;
  this.note = note;
}




