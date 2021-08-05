import { expect } from 'chai';
import Destination from '../src/Destination';
const data = require('../src/data/destinationTestData');

describe('Destination', () => {

  let destination;

  beforeEach(() => {
    destination = new Destination(data[0]);
  });

  it('Should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('Should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceOf(Destination);
  });

  it('Should have an id', () => {
    expect(destination.id).to.equal(49);
  });

  it('Should have a location', () => {
    expect(destination.location).to.equal('Lima, Peru');
  });

  it('Should have an estimated lodging cost per day', () => {
    expect(destination.lodgingCost).to.equal(70);
  });

  it('Should have an estimated flight cost per person', () => {
    expect(destination.flightCost).to.equal(400);
  });

  it('Should hold an image link', () => {
    expect(destination.image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
  });

  it('Should hold an alternate text for the image', () => {
    expect(destination.imgAltText).to.equal('overview of city buildings with a clear sky');
  });
});
