import { expect } from 'chai';
import Trip from '../src/Trip';
const data = require('../src/data/tripTestData');

describe('Trip', () => {

  let trip, trip2;

  beforeEach(() => {
    trip = new Trip(data[0]);
    trip2 = new Trip(data[1]);
  });

  it.skip('Should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it.skip('Should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it.skip('Should have an ID', () => {
    expect(trip.id).to.equal(1);
  });

  it.skip('Should hold the user\'s ID', () => {
    expect(trip.userID).to.equal(44);
  });

  it.skip('Should hold the destination\'s ID', () => {
    expect(trip.destinationID).to.equal(49);
  });

  it.skip('Should hold the number of travelers', () => {
    expect(trip.travelers).to.equal(1);
  });

  it.skip('Should hold the departure date', () = {
    expect(trip.date).to.equal('2022/09/16');
  });

  it.skip('Should hold the trip duration in days', () => {
    expect(trip.duration).to.equal(8);
  });

  it.skip('Should hold the approval status of the trip', () => {
    expect(trip.status).to.equal('approved');
    expect(trip2.status).to.equal('pending');
  });

  it.skip('Should store suggested activities for the trip', () => {
    expect(trip.suggestedActivities).to.deep.equal([]);
  });
});
