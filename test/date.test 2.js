const { expect } = require('chai');
const valiDate = require('../date.js'); // Stellen Sie sicher, dass der richtige Pfad zur date.js-Datei verwendet wird

describe('valiDate function', () => {
  it('should return true for a valid date', () => {
    expect(valiDate(2023, 12, 1)).to.equal(true);
  });

  it('should return false for an invalid date', () => {
    expect(valiDate(2023, 13, 1)).to.equal(false);
  });

  // Fügen Sie weitere Testfälle hinzu
});
