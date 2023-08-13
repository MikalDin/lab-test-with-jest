const ticketsData = require("../data/tickets.js");
const {
    getTicketByName,
    calculateTotalFromTicketNames,

} = require("../src/tickets.js")


describe("getTicketByName", () => {
        test(" Returns a ticket object when given the name", () => {
            const actual = getTicketByName(ticketsData, "Child Regular")
             const expected = { id:"B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 };
    expect(actual).toStrictEqual(expected);

});
    test("return Error for value that cannot be found in the data", () => {
    const actual = getTicketByName(ticketsData, "Child" );
    const expected = null;
    expect(actual).toStrictEqual(expected);
    });
});

describe("calculateTotalFromTicketNames", () => {
    test (" Calculates a total based on the given ticket names.", () => {
                const actual = calculateTotalFromTicketNames(ticketData, ["Child Regular"]);
                const expected = 1069;
                expect(actual).toStrictEqual(expected);
});
    test("Ignoring the addition of incorrect ticket names from calculation", ()=> {
            const actual = calculateTotalFromTicketNames(ticketsData, ["Child Regular", "Matinee"]);
            const expected = 1069;
            expect(actual).toStrictEqual(expected);

});
    test("accurately add the tickets.priceInCents from multiple adequeatly inputted ticketNames",()=>{
        const actual = calculateTotalFromTicketNames(ticketsData, ["Child Regular", "Senior Matinee"]);
        const expected = 1908;
        expect(actual).toStrictEqual(expected);
    });

    test("case insensitive", ()=> {
            const actual = calculateTotalFromTicketNames(ticketsData, ["CHILD REGULAR", "senior matineE"]);
            const expected = 1908;
            expect(actual).toStrictEqual(expected);
    });
});
