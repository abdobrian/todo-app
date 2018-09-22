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
// db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5ba637c1c1661c36305f601b")},
// {
//   $set:
//   {completed:true}
// },{
//   returnOriginal:false
// }).then(
// (result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate(
  {_id:new ObjectID( "5ba596ee52d0b44798e19e0a")},
{
  $set:
  {name:'Jen'  },
  $inc:{age:1}
},{
  returnOriginal:false
}).then(
(result)=>{
  console.log(result);
});
//db.close();
});
