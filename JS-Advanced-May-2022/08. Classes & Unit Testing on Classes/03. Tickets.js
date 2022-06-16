function solve(inputArrayOfTickets, sortBy) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let allTickets = [];
  extractInputAndPutTicketsInArray(inputArrayOfTickets, allTickets);
  function extractInputAndPutTicketsInArray(inputArrayOfTickets, destArray) {
    for (const ticket of inputArrayOfTickets) {
      let [destination, price, status] = ticket.split("|");
      price = +price;
      destArray.push(new Ticket(destination, price, status));
    }
  }
  function sortTicketArray(ticketArray, sortBy) {
    return sortBy === "price"
      ? ticketArray.sort((a, b) => a[sortBy] - b[sortBy])
      : ticketArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  return sortTicketArray(allTickets, sortBy);
}
console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "price"
  )
);
