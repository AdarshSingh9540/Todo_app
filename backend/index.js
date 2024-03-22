const express = require('express');
const app = express();
const {createTodo ,updateTodo} = require('./type');
const { todo } = require('./db');
app.use(express.json())

app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.send(411).json({
            msg:"Sent wrong input"
        })
        return;
    }

  await  todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg:"TODO created ..!"
    })
})

app.get('/todo',async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
    
})

app.put('/todo',async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411)({
            msg:"You sent wrong input"
        })
        return;
    }
    await todo.update({
        _id : req.body.id    },
        {
            completed: true
        }
        )

        res.json({
            msg:"Todo mark is completed"
        })
})

app.listen(3000)