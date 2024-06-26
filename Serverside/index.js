
const express = require('express');
const bodyParser = require('body-parser');
const { startDatabase, homeRoute, anuj, signup, login,expert,auth,googlelogin ,fetchRiskData} = require('./Controller.js'); 
const JWToken  = require('./Validators/routeValidation.js')
const {Payments,paymentstatus } = require('./Payment.js')
const cors = require('cors');
require('dotenv').config();
const Pfpcontroller = require('./ProfilePicController.js')


const app = express();
const port = process.env.port;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
// app.use('/appointment', JWToken);
// app.get('/prac',anuj)

app.get('/', homeRoute); // route for the home route.


app.post('/signup', signup); // Route for the SignUp

app.post('/login',login)  //Route for the Login

app.post('/payments',Payments)

app.post('/paymentstatus',paymentstatus)

app.get('/appointment',expert )

app.get('/auth',auth)

app.get('/googlelogin',googlelogin)

app.post('/profileUpload',Pfpcontroller.profileUpload)

// app.get('/getProfilePic',Pfpcontroller.getProfilePic)

// async function run() {
//     const symbol = 'TCS'; // Replace with the symbol you want to fetch data for
//     const result = await fetchRiskData(symbol);
//     console.log(result);
// }
// async function anujj(){
//     console.log(await fetchRiskData('TCS'));

// } 
// anujj()



const startServer = () => {
        app.listen(port, () => {
        console.log(`Server is running on port ${port} 🚀🚀`);
    });
};



startDatabase().then(() => startServer());


