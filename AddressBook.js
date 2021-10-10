const prompt = require("prompt-sync")();
const validation = require("./RegexValidation.js");

//AddressBook Array
let addressBook = [];

//Ability to add contacts
let createContactAddressBook = (() => 
{
    let firstName = prompt("First name: ");
    let lastName = prompt("Last name: ");
    let address = prompt("Address: ");
    let city = prompt("City: ");
    let state = prompt("State: ");
    let zip = prompt("Zip Code: ");
    let phoneNumber = prompt("Phone number: ");
    let email = prompt("Email ID: ");
    try
    {
        validation.checkFirstName(firstName);
        validation.checkLastName(lastName);
        validation.checkAddress(address);
        validation.checkCity(city);
        validation.checkState(state);
        validation.checkZip(zip);
        validation.checkPhone(phoneNumber);
        validation.checkEmail(email);
    } 
    catch (error) 
    {
    console.error(error);
    createContactAddressBook();
    }

    let contact =
    {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        state: state,
        zip: zip,
        phoneNumber: phoneNumber,
        email: email,
    };
    addressBook.push(contact);
    console.log(contact);
});

//To display AddressBook Contacts
let displayAddressBook = (() => 
{
    console.log(addressBook);
});

let flag = 1;
function addressBookMain() 
{
    while (flag == 1) 
    {
        console.log(" 1) Add a Contact\n 2) Display Address Book");
        let choice = prompt("Enter your choice: ");
        switch(parseInt(choice)) 
        {
            case 1:
                {
                    createContactAddressBook();
                    break;
                }
            case 2:
                {
                    displayAddressBook();
                    break;
                }  
            default:
                {
                    console.log("Invalid option.");
                    flag = 0;
                    break;
                }
        }
    }
}

addressBookMain();
