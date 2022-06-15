const {expect} = require('chai');
const {lookupChar} = require('./03.Char Lookup');
describe('lookupChar',() =>{
    it('returns undefined if index is not int', ()=>{
        expect(lookupChar('string', '2')).to.be.undefined;
        expect(lookupChar('string', [2])).to.be.undefined;
        expect(lookupChar('string', 2.5)).to.be.undefined;
    });
    it('returns undefined if string is not string', ()=>{
        expect(lookupChar(['string'], 2)).to.be.undefined;
    });
    it('returns "Incorrect index" if index is not valid', ()=>{
        expect(lookupChar('string', 16)).to.equal("Incorrect index");
        expect(lookupChar('string', -2)).to.equal("Incorrect index");
    });
    it('returns char at the specified index if index is valid', ()=>{
        expect(lookupChar('string', 1)).to.equal("t");
        expect(lookupChar('string', 0)).to.equal("s");
    });
});
