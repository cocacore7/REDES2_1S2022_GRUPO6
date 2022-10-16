const app = require('./app');

//Settings
const PORT = process.env.PORT || 3000;

//Starting the server
app.listen( PORT, () =>{
    console.log(`server listening on ${PORT}`);
});