const mongoose = require('mongoose')

const DB_URI = `mongodb://localhost:8080/dbRedes`
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

module.exports = conn();