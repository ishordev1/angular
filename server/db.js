// const mongoose = require('mongoose')


// const dbUri = 'mongodb+srv://tharooishor:ishor123@cluster0.phpky.mongodb.net/employee_db'
// mongoose.set('strictQuery', false)

// module.exports = () => {
//     return mongoose.connect(dbUri,
//         { useNewUrlParser: true, useUnifiedTopology: true })
// }

const mongoose = require('mongoose');

const dbUri = 'mongodb://127.0.0.1:27017/employee';
mongoose.set('strictQuery', false);

module.exports = () => {
    return mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
}
