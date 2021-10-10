let checkFirstName = (firstName) => {
    let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
    if (regex.test(firstName))
        return true;
    else throw "Please enter valid first Name.";
};
let checkLastName = (lastName) => {
    let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
    if (regex.test(lastName))
        return true;
    else throw "Please enter valid last Name.";
};
let checkAddress = (address) => {
    let regex = RegExp("^[a-zA-Z]");
    if (regex.test(address))
        return true;
    else throw "Please enter valid address.";
};
let checkCity = (city) => {
    let regex = RegExp("^[a-zA-Z]");
    if (regex.test(city))
        return true;
    else throw "Please enter valid city.";
};
let checkState = (state) => {
    let regex = RegExp("^[a-zA-Z]");
    if (regex.test(state))
        return true;
    else throw "Please enter valid state.";
};
let checkZip = (zip) => {
    let regex = RegExp("^[0-9]{5}[ ]?[0-9]{4}$");
    if (regex.test(zip))
        return true;
    else throw "Please enter valid PIN Code.";
};
let checkPhone = (phoneNumber) => {
    let regex = RegExp("^91 [1-9][0-9]{9}$");
    if (regex.test(phoneNumber))
        return true;
    else throw "Please enter valid phone number.";
};
let checkEmail = (email) => {
    let regex = RegExp("^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$");
    if (regex.test(email))
        return true;
    else throw "Please enter valid email ID.";
};
module.exports =
{
    checkFirstName,
    checkLastName,
    checkAddress,
    checkCity,
    checkState,
    checkZip,
    checkPhone,
    checkEmail
};