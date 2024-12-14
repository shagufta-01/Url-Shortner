const mongoose = require('mongoose')
async function MongooseConnection(url){
await mongoose.connect(url).then(
    console.log("connected succesfully")
).catch(
    console.log("connected suuccessfully")
)

}
module.exports = MongooseConnection;