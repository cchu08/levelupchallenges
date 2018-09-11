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
    });
});

describe('Given n=[100, 999]', () => {
    it('returns number anglicized', () => {
        expect(ang(100)).to.equal('one hundred');

        expect(ang(500)).to.equal('five hundred');

        expect(ang(150)).to.equal('one hundred fifty');

        expect(ang(369)).to.equal('three hundred sixty nine');

        expect(ang(450)).to.equal('four hundred fifty');

        expect(ang(532)).to.equal('five hundred thirty two');
    });
});

describe('Given n=[1000, 999999]', () => {
    it('returns number anglicized', () => {
        expect(ang(2000)).to.equal('two thousand');

        expect(ang(2001)).to.equal('two thousand one');

        expect(ang(6050)).to.equal('six thousand fifty');

        expect(ang(999999)).to.equal('nine hundred ninety nine thousand nine hundred ninety nine');
    });
})
