var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
var customer = new Customer2('Tapash', 'Mollick');
customer.firstName = "Vriti";
customer.lastName = "Bhowmick";
console.log(customer.firstName);
console.log(customer.lastName);
