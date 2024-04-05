// importing the expressnode
const express = require('express')
const EmployeeModel = require("./model")
const cors = require('cors')

// 2.initilization
const app = new express()


//midware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

// 3.Api creation
app.get('/',(req,res)=>{
    res.send("Hi Bro")
})
app.get('/trial',(req,res)=>{
    res.send("This is a trial message")
})
app.get('/data',(req,res)=>{
    res.json({
        "name":"Abin",
        "age":"20"
    })
})

//api for adding data
app.post("/create",async(req,res)=>{
    var result = await new EmployeeModel(req.body)
    result.save()
    res.send("Data Added")
})

//api for viewing data

app.get('/view',async(req,res)=>{
    var data = await EmployeeModel.find()
    res.json(data)
    console.log(data)
})

//api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await EmployeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})

//api for updating data
app.put('/edit/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id
    await EmployeeModel.findByIdAndUpdate(id,req.body)
    res.send("Updated")
})



// 4.Port
app.listen(3005,()=>{
    console.log("port 3005 is up and running")
})


