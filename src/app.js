/** Import librairies **/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Fixtures = require('node-mongodb-fixtures');
const faker = require('faker');
const fs = require('fs');


const app = express();


/** Configure network **/
const hostname = '0.0.0.0';
const port = 3000;


/** Prepare fixtures directory */
if (!fs.existsSync('./fixtures')) {
    fs.mkdirSync('./fixtures');
}
/** New fixtures/dataset **/
const fixtures = new Fixtures({
    dir: './fixtures',
});

/** Database connection **/
mongoose.connect('mongodb://mongo/' + process.env.DB_NAME);


const model_list = ['sessions', 'modules', 'users', 'marks'];
const model_value = {};
const prom_list = [];
for (const model of model_list) {
    model_value[model] = [];

    /** Generate dataset **/
    switch (model) {
        case 'sessions':
            // TO DO : random sessions here
            break;
        case 'modules':
            // TO DO : random modules here
            break;
        case 'users':
            // random users
            const role_list = ['administrator', 'student', 'teacher'];
            for (let idx_user = 0; idx_user < 10; idx_user++) {
                const random_user = {
                    first_name: faker.name.firstName(),
                    name: faker.name.lastName(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password(),
                    role: role_list[Math.floor(Math.random() * role_list.length)],
                };
                model_value[model].push(random_user);
            }
            break;
        case 'marks':
            // TO DO : random marks here
            break;
        default:
            console.error(`Nous ne générons pas de données pour "${model}".`);
            break;
    }

    prom_list.push(
        new Promise((resolve, reject) => {
            // save data in json file
            fs.writeFile(`./fixtures/${model}.json`, JSON.stringify(model_value[model], null, 2), (error) =>{
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        }),
    );
}

// Once promises resolved or rejected
Promise.all(prom_list)
    .then((error) => {
        console.error(error);
        if (error) {
            console.error(error);
        }
        /** Load fixtures once the json file is save **/
        fixtures
            .connect('mongodb://mongo/' + process.env.DB_NAME)
            .then(() => fixtures.unload())
            .then(() => fixtures.load())
            .catch((error) => console.error(error))
            .finally(() => fixtures.disconnect());
    })
    .catch(() => {
        console.error('Le jeu de données n\'a pu être construit.');
    });


/** Replace special characters */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

/** Link to route files **/
// Import anonymous functions in constant variables
const sessionRoute = require('./api/routes/sessionRoute');
const moduleRoute = require('./api/routes/moduleRoute');
const userRoute = require('./api/routes/userRoute');
const markRoute = require('./api/routes/markRoute');
// Use anonymous function saved in constant variables
sessionRoute(app);
moduleRoute(app);
userRoute(app);
markRoute(app);


/** Bind and listen for connections on the specified host and port **/
app.listen(port, hostname);
