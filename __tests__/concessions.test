const concessions = require("../data/concessions.js");

const {
    getConcessionById,
    calculateTotalFromIDs,

} = require("../src/concessions.js")


describe("getConcessionById", ()=> {
    test("search the concessions name by ID number in the data", () => {
        const actual = getConcessionById(concessions,"rNVCeVsri" );
        const expected = { id: "rNVCeVsri", name: "Candy", priceInCents: 569};
        expect(actual).toStrictEqual(expected);
    });

  test("return Error for failure", () => {
    const actual = getConcessionById(concessions,"78978eG");
    const expected = Error;
    expect(actual).toStrictEqual(expected);

    });  

});

describe ("calculateTotalFromIDs", () => {
    test("calculate total price from array of concession IDs", () => {
        const actual = calculateTotalFromIDs(concessions, ["rNVCeVsri", "g9sZdG1hI"]);
        const expected = 1498;
        expect(actual).toStrictEqual(expected);
    });
});