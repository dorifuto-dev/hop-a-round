class Trip {
  constructor(data) {
    this.id = data.id;
    this.userID = data.userID;
    this.destinationID = data.destinationID;
    this.travelers = data.travelers;
    this.date = data.date;
    this.duration = data.duration;
    this.status = data.status;
    this.suggestedActivities = data.suggestedActivities;
    this.destination = null;
  }

  updateDestination(destination) {
    this.destination = destination;
  }

  calculateTotalFare() {
    const totalLodging = this.destination.lodgingCost * this.duration * this.travelers;
    const totalAirFare = this.destination.flightCost * this.travelers;
    return Math.round((totalLodging + totalAirFare) * 1.1);
  }
}

export default Trip;
