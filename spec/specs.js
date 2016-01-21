describe("cryptoSquare", function() {


  it("create the correct number of arrays based on phrase length", function() {
    expect(cryptoSquare("mynameisjasontoday")).to.equal([],[],[],[],[]);
  });
})
