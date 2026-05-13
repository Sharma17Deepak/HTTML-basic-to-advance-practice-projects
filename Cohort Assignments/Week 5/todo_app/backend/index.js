const { createTodo, updateTodo } = require("./types.js");
const express = require("express");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo",async(req,res) => {
    const createData = req.body;
    const parseData = createTodo.safeParse(createData);
    if(!parseData.success) {
        res.status(400).json({ msg:"Error!" });
        return;
    }
    await todo.create({
        title: createData.title,
        description: createData.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
});

app.get("/todos",async(req,res) => {
    const todos = await todo.find({});
    res.json({
        todos: todos
    })
});

app.put("/completed",async (req,res) => {
    const updateData = req.body;
    const parseUpdatedData = updateTodo.safeParse(updateData);
    if(!parseUpdatedData.success){
        res.status(411).send("Error!");
        return;
    }

    await todo.updateOne(
         { _id: req.body.id },
        { completed: true }
    , {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000);