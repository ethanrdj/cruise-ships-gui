/* globals describe it expect */ 
const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port).toBeInstanceOf(Object);
    });
});

describe('setSail', () => {
    it('changes the current port value to falsy', () => {
        const port = new Port('Dover');
        port.setSail();

        expect(port.currentPort).toBeFalsy();
    });
});