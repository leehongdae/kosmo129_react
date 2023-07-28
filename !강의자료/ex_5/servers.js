const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

 app.use(cors());

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let id=2;
let todoList = [{
    id: 1,
    text:"todo1",
    done: false,
},];

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/todo',(req,res)=>{
    res.json(todoList);
})

app.post('/api/todo',(req,res)=>{
    const {text, done} = req.body; //body에 text와 done을 담아보냄
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send('success');
})

app.delete('/api/todo',(req,res)=>{
    const id = req.body.removeid;
    console.log("data:", id);
    todoList = todoList.filter(todo=>todo.id!=id);
    console.log(todoList);
    return res.send('success');
})

app.listen(4000,()=>{
    console.log("server start!");
})