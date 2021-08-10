import { expect } from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
const userData = require('../src/data/travelerTestData');
const tripData = require('../src/data/tripTestData');
const destinationData = require('../src/data/destinationTestData');

describe('Traveler', () => {

  let traveler, traveler2;
  let trip;
  let destination;

  beforeEach(() => {
    traveler = new Traveler(userData[0]);
    traveler2 = new Traveler(userData[1]);
    trip = new Trip(tripData[0]);
    destination = new Destination(destinationData[0]);
    trip.updateDestination(destination);
  });

  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('Should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('Should have an id', () => {
    expect(traveler.userID).to.equal(1);
  });

  it('Should have a name', () => {
    expect(traveler.name).to.equal('Ham Leadbeater');
  });

  it('Should have a type', () => {
    expect(traveler.type).to.equal('relaxer');
  });

  it('Should hold onto a user\'s trips', () => {
    expect(traveler.trips).to.deep.equal([]);
  });

  // it('Should have a property isLoggedIn which defaults to false', () => {
  //   expect(traveler.isLoggedIn).to.equal(false);
  // });

  // it('Should be able to log in', () => {
  //   expect(traveler.login('travel')).to.equal(true);
  //   expect(traveler.isLoggedIn).to.equal(true);
  //
  //   expect(traveler2.login('manatee')).to.equal(false);
  //   expect(traveler2.isLoggedIn).to.equal(false);
  // });

  // it('Should be able to update it\'s list of trips', () => {
  //   traveler.addTrip(trip);
  //
  //   expect(traveler.trips.length).to.equal(1);
  //   expect(traveler.trips).to.deep.equal([trip]);
  // });

  it('Should be able to find the total amount spent on trips', () => {
    const total1 = traveler.findTotalSpent();

    traveler.addTrip(trip);

    const total2 = traveler.findTotalSpent();

    expect(total1).to.equal(null);
    expect(total2).to.equal(1056);
  });

  it('Should be able to return the user\'s first name', () => {
    const name = traveler.getFirstName();

    expect(name).to.equal('Ham');
  });
});
