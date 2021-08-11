import { expect } from 'chai';
import Trip from '../src/Trip';
const tripData = require('../src/data/tripTestData');
const destinationData = require('../src/data/destinationTestData');


describe('Trip', () => {

  let trip, trip2, trip3;
  let destination, destination2;
  let location, location2;

  beforeEach(() => {
    trip = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
    trip3 = new Trip(tripData[2]);
    location = destinationData[0];
    location2 = destinationData[1];
    trip2.destination = location;
  });

  it('Should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('Should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it('Should have an ID', () => {
    expect(trip.id).to.equal(1);
  });

  it('Should hold the user\'s ID', () => {
    expect(trip.userID).to.equal(1);
  });

  it('Should hold the destination\'s ID', () => {
    expect(trip.destinationID).to.equal(49);
  });

  it('Should hold the number of travelers', () => {
    expect(trip.travelers).to.equal(1);
  });

  it('Should hold the departure date', () => {
    expect(trip.date).to.equal('2022/09/16');
  });

  it('Should hold the trip duration in days', () => {
    expect(trip.duration).to.equal(8);
  });

  it('Should hold the approval status of the trip', () => {
    expect(trip.status).to.equal('approved');
    expect(trip2.status).to.equal('pending');
  });

  it('Should store suggested activities for the trip', () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });

  it('Should have a default destination of null', () => {
    expect(trip3.destination).to.equal(null);
  });

  it('Should be able to add a Destination object', () => {
    trip.updateDestination(location);
    trip2.updateDestination(location2);

    expect(trip.destination).to.equal(location);
    expect(trip2.destination).to.equal(location2);
  });

  it('Should be able to return the total amount for the trip', () => {
    trip.updateDestination(location);
    trip2.updateDestination(location2);

    const total1 = trip.calculateTotalFare();
    const total2 = trip2.calculateTotalFare();

    expect(total1).to.equal(1056);
    expect(total2).to.equal(14190);
  });
});
