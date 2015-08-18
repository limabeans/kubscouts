if (!(typeof MochaWeb === 'undefined')) {

  MochaWeb.testOnly(function() {
    describe("testing the tests", function() {

      it("5 === 5", function() {
        chai.assert.equal(5,5);
      });

      it("4 !== 5", function() {
        chai.assert.notEqual(4,5);
      });

    });
  });



}
