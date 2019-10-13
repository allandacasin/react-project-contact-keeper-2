const express = require('express');
const connectDB = require('./config/db');
//activate in deployment
//const path = require('path');

const app = express();

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false}));

//deactivate in deployment
app.get('/', (req, res)=> res.send('API Running'));


//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth')); 
app.use('/api/contacts', require('./routes/api/contacts')); 


//activate in deployment
//Serve static assets in production
//Should always below of above items
// if(process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));