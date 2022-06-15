const {expect} = require('chai');
const {isOddOrEven} = require('./02.EvenOrOdd');
describe('Test func isOddOrEven', ()=>{
    it('Returns odd when string length is odd', ()=>{
        expect(isOddOrEven('odd')).to.equal('odd');
        expect(isOddOrEven('odddd')).to.equal('odd');
    });
    it('Returns even when string length is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
        expect(isOddOrEven('eveneven')).to.equal('even');
    });
    it('Returns undefined when non-string is passed', () => {
        expect(isOddOrEven(['even'])).to.be.undefined;
        expect(isOddOrEven(4)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });
});