const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:8080/dbRedes').then(() =>{
    console.log('La base de datos esta en funcionamiento');

    //Settings
    app.set('port', process.env.PORT || 3000);

    //Starting the server
    app.listen(app.get('port'), () => {
        console.log(`server listening on '${app.get('port')}'`);
    });
}).catch(err => console.log(err));