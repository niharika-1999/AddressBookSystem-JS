const prompt = require("prompt-sync")();
const validation = require("./RegexValidation.js");

let firstName = prompt("Enter First name: ");
let lastName = prompt("Enter Last name: ");
let address = prompt("Enter Address: ");
let city = prompt("Enter City: ");
let state = prompt("Enter State: ");
let zip = prompt("Enter zip Code: ");
let phoneNumber = prompt("Enter phone number: ");
let email = prompt("Enter Email ID: ");

let contact =
{
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    phoneNumber: phoneNumber,
    email: email
};
console.log(contact);
