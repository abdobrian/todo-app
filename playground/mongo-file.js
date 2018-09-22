// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
if(error){
return console.log('Unable to connect to db server');

}
console.log("Connected to MongoDB server");

db.collection('Users').find({name:'Brian'}).toArray().then((docs)=>{
//  console.log(`Todos count: ${count}`);
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log("Unable to fetch todos",err);
});
//db.close();
});
