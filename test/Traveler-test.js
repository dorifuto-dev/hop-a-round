import { expect } from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
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
    destination = destinationData[0];
    trip.destination = destination;
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

  it('Should be able to find the total amount spent on trips each year', () => {
    const total1 = traveler.findTotalSpent("2021");
    expect(total1).to.equal(0);

    traveler.trips.push(trip);

    const total2 = traveler.findTotalSpent("2022");
    expect(total2).to.equal(1056);
  });

  it('Should be able to return the user\'s first name', () => {
    const name = traveler.getFirstName();

    expect(name).to.equal('Ham');
  });
});
