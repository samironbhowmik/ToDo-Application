const todoModel = require("../models/todo");

const route = require("express").Router()

//POST
route.post("/todo", async(req,res)=>{
    try {
        const{item} =req.body
        console.log(item);

        const todo = await todoModel.create({
            item:item
        })
        res.json({
            status:"success",
            todo
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//GET
route.get("/todo", async(req,res)=>{
    try {
        const {id} = req.body
        const todo = await todoModel.find({id:id})
        res.json({
            status:"success",
            todo
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

//PUT
route.put("/todo/:id", async(req,res)=>{
    try {
        // console.log(req.params.id);
        const update = await todoModel.findByIdAndUpdate(req.params.id,{$set:req.body, new:true})
        res.json({
            status:"success",
            message:"item updated successfully!"
        })
    } catch (error) {
        res.json({
            status:"success",
            message:error.message
        })
    }
})

//DELETE
route.delete("/todo/:id", async(req,res)=>{
    try {
        // console.log(req.params.id);
        const update = await todoModel.findByIdAndDelete(req.params.id,{$set:req.body, new:true})
        res.json({
            status:"success",
            message:"item deleted successfully!"
        })
    } catch (error) {
        res.json({
            status:"success",
            message:error.message
        })
    }
})

module.exports = route