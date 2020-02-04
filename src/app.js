/** Import librairies **/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Fixtures = require('node-mongodb-fixtures');
const faker = require('faker');
const fs = require('fs');


const app = express();

/** Configure network **/
const hostname = '0.0.0.0';
const port = 3000;

/** New fixtures/dataset **/
const fixtures = new Fixtures({
    dir: './fixtures'
});

/** Database connection **/
mongoose.connect('mongodb://mongo/' + process.env.DB_NAME);

/** Load fixtures **/
fixtures
    .connect('mongodb://mongo/' + process.env.DB_NAME)
    .then(() => fixtures.unload())
    .then(() => fixtures.load())
    .catch(e => console.error(e))
    .finally(() => fixtures.disconnect());

/** Generate dataset **/
const user_list = [];
const role_list = ['administrator', 'student', 'teacher'];
for (let idx_user = 0; idx_user < 10; idx_user++) {
    const random_user = {
        first_name: faker.name.firstName(),
        name: faker.name.lastName(),
        pseudo: faker.internet.userName(),
        password: faker.internet.password(),
        role: role_list[Math.floor(Math.random() * role_list.length)]
    };
    user_list.push(random_user);
}
// save users'list in json file
fs.writeFileSync('./fixtures/users.json', JSON.stringify(user_list, null, 2));

/** Replace special characters */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Link to route files **/
// Import anonymous functions in constant variables
// const sessionRoute = require('./api/routes/sessionRoute');
// const moduleRoute = require('./api/routes/moduleRoute');
const userRoute = require('./api/routes/userRoute');
// const markRoute = require('./api/routes/markRoute');
// Use anonymous function saved in constant variables
// sessionRoute(app);
// moduleRoute(app);
userRoute(app);
// markRoute(app);

/** Bind and listen for connections on the specified host and port **/
app.listen(port, hostname);
