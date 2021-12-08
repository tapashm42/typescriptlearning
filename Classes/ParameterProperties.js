var Customer3 = /** @class */ (function () {
    function Customer3(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var customer = new Customer3('Tapash', 'Mollick');
customer.firstName = "Jia";
customer.lastName = "Bhowmick";
console.log(customer.firstName + " " + customer.lastName);
