const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

const DB_URI = `mongodb://`+config.BD_HOST+`:27017/dbRedes` 
const conn = () => {
    mongoose.connect(
        DB_URI,
        (err) => {
            if(err){
                console.log('Err : ', err)
            }else{
                console.log('DB Connection')
            }
        }
    )
}
conn();

//Settings
const PORT = process.env.PORT || 4000;

//Starting the server
app.listen( PORT, () =>{
    console.log(`server listening on ${PORT}`);
});
