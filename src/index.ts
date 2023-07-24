// first import express
import express from 'express';

// create global object called app 
const app = express();
const port = 3000; //it's best practice to set your port as a variable

// define a route handler for the default home page
app.get('/api', (req, res) => {
  res.send('Hello World');
});

// start the Express server 
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
  
});