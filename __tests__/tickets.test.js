const ticketData = require("../data/tickets.js")

const {
    getTicketByName,
    calculateFromTicketNames,

} = require("../src/tickets.js)

describe("getTicketsByName", () => {
        test("searching for specific tickets by name in the data", () => {
            const actual = getTicketByName(ticketsData, "Child Regular")
             const expected = { id:"B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 };
    expect(actual).toStrictEqual(expected);

});
    test("return Error for value that cannot be found in the data", () => {
    const actual = getTicketByName(ticketsData, "Child" );
    const expected = Error;
    expect(actual).toStrictEqual(expected);
    });
});

describe("calculateTotalFromTicketNames", () => {
    test ("adds the total price of the selected ticketNames", () => {
                const actual = calculateFromTicketNames(ticketData, ["Chi]d Regular) ;
                const expected = 1069;
                expect(actual).toStrictEqual(expected);
});
    test("Ignoring the addition of incorrect ticket names from calculation", ()=> {
            const actual = calculateFromTicketNames(ticketsData, ["Child Regular", "Matinee"]);
            const expected = 1069;
            const(actual).toStrictEqual(expected);

});
    test("accurately add the priceInCents from multiple adequeatly inputted ticketNames",()=>{
        const actual = calculateTotalFromTicketNames(ticketsData, ["Child Regular", "Senior Matinee"]);
        const expected = 1908;
        const(actual).toStrictEqual(expected);
    });

    test("case insensitive", ()=> {
            const actual = calculateTotalFromTicketNames(ticketsData, ["CHILD REGULAR", "senior matineE"]);
            const expected = 1908;
            const(actual).toStrictEqual(expected);
    });
});
