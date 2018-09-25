var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');
const {ObjectID} = require('mongodb');


var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
var todo = new Todo({
  text: req.body.text
});

todo.save().then((doc)=>{
  res.send(doc);
},(e)=>{
  res.status(400).send(e);
});
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    console.log("Not found");
    res.status(400).send(e);

  });
});
//GET /todos/ 1234324
app.get('/todos/:id', (req,res)=>{
  var id = req.params.id;
  // Validate ID

  //respond with 404 if not Validate

  if(!ObjectID.isValid(id))
    res.status(404).send();
  //find by id and look for match
  Todo.findById(id).then((todos)=>{
      if(!todos){
          res.status(404).send();

          return console.log("not found");


      }else{
        res.status(200).send(todos);
      }

      //success
        //if todo - send back
        //if no todo - send back 404
      //error
          //400 not valid
        },(e)=>{
          res.status(404).send();
        });



  //res.send(req.params);
});
app.listen(port, ()=>{
  console.log(`Starting on port ${port}`);
});

module.exports.app = app;
