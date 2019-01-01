const { parseHTML } = require('../src');

describe('test', () => {
    describe('is first test', () => {
        it('should return true', () => {
            expect(parseHTML()).toBeTruthy();
        });
    });
});
