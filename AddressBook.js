const prompt = require("prompt-sync")();
const validation = require("./RegexValidation.js");

//AddressBook Array
let addressBook = [];

//Ability to add contacts
let createContactAddressBook = (() => 
{
    let firstName = prompt("First name: ");
    let checkDuplicate = addressBook.find((contact) => 
    {
        if (contact.firstName == firstName) 
        {
          return true;
        }
    });
    if (checkDuplicate) 
    {
        console.log("This first name already exists.");
        createContactAddressBook();
        return;
    }
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

//To edit the Contact
let editContact = (name) => 
{
    let flag = 0;
    for (let i = 0; i < addressBook.length; i++) {
      if (addressBook[i].firstName == name) {
        flag = 1;
        let repeat = 1;
        while (repeat) {
          console.log("1. FirstName\n2. LastName\n3. Address\n4. City\n5. State\n6. Zip Code\n7. Contact no.\n8. Email\n9. Exit");
          let option = prompt("Enter an choice to edit: ");
          switch (Number(option)) 
          {
            case 1:
              let firstName = prompt("First name: ");
              try {
                validation.checkFirstName(firstName);
                addressBook[i].firstName = firstName;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 2:
              let lastName = prompt("Last name: ");
              try {
                validation.checkLastName(lastName);
                addressBook[i].lastName = lastName;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 3:
              let address = prompt("Address: ");
              try {
                validation.checkAddress(address);
                addressBook[i].address = address;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 4:
              let city = prompt("City: ");
              try {
                validation.checkCity(city);
                addressBook[i].city = city;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 5:
              let state = prompt("State: ");
              try {
                validation.checkState(state);
                addressBook[i].state = state;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 6:
              let pin = prompt("Zip Code: ");
              try {
                validation.checkZip(zip);
                addressBook[i].zip = zip;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 7:
              let phoneNumber = prompt("Phone Number: ");
              try {
                validation.checkPhone(phNumber);
                addressBook[i].phoneNumber = phoneNumber;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 8:
              let email = prompt("Email ID: ");
              try {
                validation.checkEmail(email);
                addressBook[i].email = email;
              } catch (error) {
                console.error(error);
                editContact(name);
              }
              break;
            case 9:
              repeat = 0;
              break;
            default:
              console.log("Invalid.");
              repeat = 0;
              break;
          }
        }
      }
    }
    if (flag == 0)
      console.log("Contact not available in addressBook.");
  };

//To delete a contact
let deleteContact = (name) => {
    let flag = 1;
    for (let i = 0; i < addressBook.length; i++) 
    {
      if (addressBook[i].firstName == name) 
      {
        flag = 0;
        addressBook.splice(i, 1); 
        break;
      }
    }
    if (flag == 1) 
        console.log("Contact not available in addressBook.");
};

//To search contacts based on city or state
let searchByCityState = (place) => {
    let newArray = addressBook;
    newArray.filter( () =>
    {
        addressBook.find((contact) => 
        {
            if (contact.city == place || contact.state == place) 
            {
                return true;
            }
      });
    });
    console.log("Result:" + JSON.stringify(filteredArray));
};
  

let flag = 1;
function addressBookMain() 
{
    while (flag == 1) 
    {
        console.log(" 1) Add a Contact\n 2) Display Address Book\n 3) Edit Contact\n 4) Delete Contact\n 5) Count Contact\n 6) Search Contact\n");
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
            case 3:
                {
                    let name = prompt("Enter the name of the contact to be edited: ");
                    editContact(name);
                    break;
                }
            case 4:
                {
                    let name = prompt("Enter the name of the contact to be deleted:");
                    deleteContact(name);
                    break;
                }
            case 5:
                {
                    console.log("Number of contacts present in the Address Book is: " + addressBook.length);
                    break;
                }
            case 6:
                {
                    let place = prompt("Enter City or State:");
                    searchByCityState(place);
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
