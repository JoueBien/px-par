var path = require("path");
var sassTrue = require("sass-true");
var assert = require("assert");
var sassFile = path.join(__dirname, "text.spec.scss");
const { px_par, pxPar } = require("./../../dist/index");

// SASS Tests
describe("Running SASS Test", function () {
  sassTrue.runSass({ describe, it }, sassFile);
  // sassTrue.runSass({ file: sassFile }, describe, it);
});

// Node Tests
describe("Running JS Test", function () {
  describe("px_par conversion to %", () => {
    it(" px_par(100, 50) Outputs calc( ( (100% / 100) * 50 + 0px )", () => {
      assert.equal(px_par(100, 50), "calc( ( (100% / 100) * 50 ) + 0px )");
    });

    it(" px_par(100, 50) Outputs calc( ( (100% / 240) * 20 + 0px )", () => {
      assert.equal(px_par(240, 20), "calc( ( (100% / 240) * 20 ) + 0px )");
    });
  });

  describe("pxPar conversion to %", () => {
    it(" pxPar(100, 50) Outputs calc( ( (100% / 100) * 50 + 0px )", () => {
      assert.equal(pxPar(100, 50), "calc( ( (100% / 100) * 50 ) + 0px )");
    });

    it(" pxPar(100, 50) Outputs calc( ( (100% / 240) * 20 + 0px )", () => {
      assert.equal(pxPar(240, 20), "calc( ( (100% / 240) * 20 ) + 0px )");
    });
  });
});
