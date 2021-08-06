class Traveler {
  constructor(data) {
    this.userID = data.id;
    this.name = data.name;
    this.type = data.travelerType;
    this.trips = [];
    this.isLoggedIn = false;
  }

  login(password) {
    if (password === "travel" && this.isLoggedIn === false) {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  addTrip(trip) {
    this.trips.push(trip);
  }

  findTotalSpent() {
    if (this.trips.length === 0) {
      return null;
    } else {
      return this.trips.reduce((accNum, trip) => {
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

// constructor(allTripData, travelerInfo)
// this.allTrips = allTripData.filter(trip => trip.userID === this.id)
// this.findPastTrips()
