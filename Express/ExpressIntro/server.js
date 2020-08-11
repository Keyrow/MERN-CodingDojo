// Does not have to be named 'express' but it is easier readability
// Thses are pretty much like import statements similar to creating app
const express = require('express');
const faker = require('faker');
const { fake } = require('faker');

class FakeUser {
    constructor() {
        this.fakeName = faker.name.firstName();
        this.fakeName = faker.name.lastName();
        this.fakePhoneNumber = faker.phone.phoneNumber();
        this.fakeEmail = faker.internet.email();
        this.fakePassword = faker.internet.password();
    }
}

class FakeCompany {
    constructor() {
        this.fakeCompanyName = faker.company.companyName();
        this.fakeAddress = {
            fakeStreet: faker.address.streetAddress(),
            fakeCity: faker.address.city(),
            fakeState: faker.address.state(),
            fakeZipcode: faker.address.zipCode(),
            fakeCountry: faker.address.country()
        }
    }
}

const app = express();
const port = 8000;

// app.get("/api/welcome", (req, res) => {
//     res.json({ message: "Welcome, loser!" });
// })

// app.get("/api/hello/:name", (req, res) => {
//     let variablefromroute = req.params.name;

//     res.json({ message: `Sup, ${variablefromroute}` });
// })

//This route will pull 10 random people and their fake info
// app.get("/api/users/new", (req, res) => {
//     let people = [];
//     for (let i = 0; i < 10; i++) {
//         people.push(new FakeUser());
//     }
//     res.json({ message: "success", results: people })
// })

//This route will just pull 1 random person
app.get("/api/users/new", (req, res) => {
    res.json({ message: "success", results: new FakeUser() })
})

//This route will pull fake company
app.get("/api/companies/new", (req, res) => {
    res.json({ message: "success", results: new FakeCompany() })
})

//This route will pull up a random user and a company they are in
app.get("/api/user/company", (req, res) => {
    res.json({ message: "success", FakeUser: new FakeUser, FakeCompany: new FakeCompany })
})

app.listen(port, () => console.log(`Server running on port: ${port}`));

// Or can do like below and "const port = 8000 not needed"
// app.listen(8000, () => console.log("Server running on port 8000"));