import { expect } from 'chai';
import Traveler from '../src/Traveler';
const data = require('../src/data/travelerTestData');

describe('Traveler', () => {

  let traveler;

  beforeEach(() => {
    traveler = new Traveler(data[0]);
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
});
