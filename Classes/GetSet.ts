class Customer2 {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName
        this._lastName = lastName
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

let customer = new Customer2('Tapash', 'Mollick')
customer.firstName = "Vriti"
customer.lastName = "Bhowmick"
console.log(customer.firstName)
console.log(customer.lastName)