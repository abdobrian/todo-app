// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
if(error){
return console.log('Unable to connect to db server');

}
console.log("Connected to MongoDB server");

//delete many
// db.collection('Users').deleteMany({name:'Brian'}).then((result)=>{
//   console.log(result);
// });
//delete one
// db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
//   console.log(result);
// });
//findOne and delete
// db.collection('Todos').findOneAndDelete({new ObjectId("5ba637c1c1661c36305f601b")}).then((result)=>{
//
// });
db.collection('Users').findOneAndDelete( {_id: ObjectID ("5ba594f75762031d602835f9")}).then((result)=>{
console.log(result);
});
//db.close();
});
