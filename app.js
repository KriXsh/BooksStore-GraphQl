const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const app = express();



// Allow all origins for demonstration purposes
app.use(cors());


mongoose.connect('mongodb+srv://krishnendughosal999:Hardwork%4034@cluster0.ircni7a.mongodb.net/');
mongoose.connection.once('open', () => {
    console.log('Connected to Krish-personal-Database');
})



// bind express with graphql
app.use('/graphql', graphqlHTTP({  //default middileware
    schema,            // schema to interact
    graphiql:true  //a tool to that route
}));


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});