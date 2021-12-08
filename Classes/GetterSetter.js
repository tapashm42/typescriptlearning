var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    return Customer;
}());
var customer = new Customer('Tapash', 'Mollick');
customer.setFirstName("Jia");
console.log(customer.getFirstName());
