const mongoose = require('mongoose');
const app = require('./app');

const DB_URI = `mongodb://44.201.250.253:27017/dbRedes` 
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
const PORT = process.env.PORT || 3000;

//Starting the server
app.listen( PORT, () =>{
    console.log(`server listening on ${PORT}`);
});
