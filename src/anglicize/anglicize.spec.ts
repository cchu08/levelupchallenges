import { expect } from 'chai';
import 'mocha';
import { ang } from './anglicize';

describe('Given n=[0, 19]', () => {
    it('returns small n anglicized', () => {
        expect(ang(0)).to.equal('zero');

        expect(ang(1)).to.equal('one');

        expect(ang(10)).to.equal('ten');

        expect(ang(19)).to.equal('nineteen');
    });
});

describe('Given n=[20, 99]', () => {
    it('returns number anglicized', () => {
        expect(ang(20)).to.equal('twenty');

        expect(ang(25)).to.equal('twenty five');

        expect(ang(69)).to.equal('sixty nine');

        expect(ang(99)).to.equal('ninety nine');      
    })
})

