const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '5ba686ce2d766a2009eec651';

var id = '6ba6571fadf5b4b0317efc4c';

if(!ObjectID.isValid(id))
  return console.log("Id is not valid");
User.find({
  _id : id
}).then((todos)=>{
  console.log('Todos',todos)
});

User.findOne({
  _id : id
}).then((todo)=>{
  console.log('Todos',todo)
});

User.findById(id).then((todos)=>{
  if(!todos)
    return console.log("ID NOT FOUND");
  console.log('Todos',todos)
}).catch((e)=>{
  console.log(e);
});
