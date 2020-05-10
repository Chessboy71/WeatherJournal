// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 3000;
// Require Express to run server and routes
const express = require('express'); 
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
app.get('/', (req, res) => {
    res.send(projectData);
    console.log('heey');
})
app.post('/', function(req,res){
    let newData = res.body; 
    projectData = newData;
})

app.listen(port, () => {
    console.log(`LocalHost : ${port}`)
})

