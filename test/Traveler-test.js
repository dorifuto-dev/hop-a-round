import { expect } from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
const userData = require('../src/data/travelerTestData');
const tripData = require('../src/data/tripTestData');
const destinationData = require('../src/data/destinationTestData');

describe('Traveler', () => {

  let traveler;
  let trip;
  let destination;

  beforeEach(() => {
    traveler = new Traveler(userData[0]);
    trip = new Trip(tripData[0]);
    destination = new Destination(destinationData[0]);
    trip.destination = destination;
  });

  it.skip('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it.skip('Should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it.skip('Should have an id', () => {
    expect(traveler.userID).to.equal(1);
  });

  it.skip('Should have a name', () => {
    expect(traveler.name).to.equal('Ham Leadbeater');
  });

  it.skip('Should have a type', () => {
    expect(traveler.type).to.equal('relaxer');
  });

  it.skip('Should hold onto a user\'s trips', () => {
    expect(traveler.trips).to.deep.equal([]);
  });
// Add Property this.isLoggedIn?
  it.skip('Should be able to log in', () => {
    expect(traveler.login('travel')).to.equal(true);
    expect(traveler.login('manatee')).to.equal(false);
  });

  it.skip('Should be able to update it\'s list of trips', () = {
    traveler.addTrip(trip);

    expect(traveler.trips.length).to.equal(1);
    expect(traveler.trips).to.deep.equal([trip]);
  });

  it.skip('Should be able to find the total amount spent on trips', () => {
    const total = traveler.findTotalSpent();
    // Should take in an argument of Year, Date, etc.

    expect(total).to.equal(null);

    traveler.addTrip(trip);
    // Try using REDUCE method
    expect(total).to.equal(1056);
  });

  it.skip('Should be able to return the user\'s first name', () => {
    const name = traveler.getFirstName();

    expect(name).to.equal('Ham');
  });
});
