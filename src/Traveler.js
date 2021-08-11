class Traveler {
  constructor(data) {
    this.userID = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = [];
  }

  findTotalSpent(year) {
    const tripsThisYear = this.trips.filter(trip => trip.date.includes(year) && trip.status === "approved");
    if (tripsThisYear.length === 0) {
      return 0;
    } else {
      return tripsThisYear.reduce((accNum, trip) => {
        accNum += trip.calculateTotalFare();
        return accNum;
      }, 0)
    }
  }

  getFirstName() {
    return this.name.split(' ')[0];
  }
}

export default Traveler;
