class Destination {
  constructor(data) {
    this.id = data.id;
    this.location = data.destination;
    this.lodgingCost = data.estimatedLodgingCostPerDay;
    this.flightCost = data.estimatedFlightCostPerPerson;
    this.image = data.image;
    this.imgAltText = data.alt;
  }
}

export default Destination;
