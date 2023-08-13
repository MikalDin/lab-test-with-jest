const concessions = require("../data/concessions.js")
const {
    getConcessionByID,
    calculateTotalFromIDs,
   
} = require("../src/concessions.js")



describe("getConcessionByID", ()=> {
    test("search the concessions name by ID number in the data", () => {
        const actual = getConcessionByID(concessionsData,"rNVCeVsri" );
        const expected = { id: "rNVCeVsri", name: "Candy", priceInCents: 569};
        expect(actual).toStrictEqual(expected);
    });

  test("return Error for failure", () => {
    const actual = getConcessionByID(concessions,"78978eG");
    const expected = null;
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