/* globals describe it expect */ 
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    describe('with ports', () => {

        let dover;
        let calais;
        let itinerary;

        beforeEach(() => {
            dover = jest.fn();
            calais = jest.fn();
            itinerary = new Itinerary([dover, calais]);
        });

    
        it('it can be intantiated', () => {
            expect(new Itinerary()).toBeInstanceOf(Object);
        });
        
        it('can have ports', () => {
            expect(itinerary.ports).toEqual([dover, calais]);
        });   
    }); 
});