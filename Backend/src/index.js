const app = require('./app');
const conn = require('./database/conection')

conn.conn();

//Settings
const PORT = process.env.PORT || 3000;

//Starting the server
app.listen( PORT, () =>{
    console.log(`server listening on ${PORT}`);
});