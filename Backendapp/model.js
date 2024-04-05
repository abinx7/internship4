const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://hmovies957:abin@cluster0.g7tgkvq.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema
const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})

var EmployeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = EmployeeModel

