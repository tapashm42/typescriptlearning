class Customer3 {

    constructor(private _firstName: string, private _lastName: string) {
        this._firstName = _firstName
        this._lastName = _lastName
    }

    get firstName(): string {
        return this._firstName;
    }

     set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
}

let customer = new Customer3('Tapash', 'Mollick')
customer.firstName = "Jia"
customer.lastName = "Bhowmick"
console.log(customer.firstName + " " + customer.lastName)
