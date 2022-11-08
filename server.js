import express from "express";
const app = express();
const PORT = 8000;
import morgan from "morgan";
// middleware
app.use(morgan('dev'));
// api handle

//workflow;Crud
//C(create)=>receive new task and stores in the database
app.post("/api/v1/hey",(req,res)=>{
    res.json({message:"hehe"});
})

// R(Read)=>read data from data base and return to the client
app.get("/api/v1/hey",(req,res)=>{
    res.json({message:"hehe"}); 
})
//U(Update)=>update some information of existing data int the database and respond client accordingly
app.put("/api/v1/hey",(req,res)=>{
    res.json({message:"hehe"});
})
//D(Delete)=> delete data(s)from databaseand response client accordingly
app.delete("/api/v1/hey",(req,res)=>{
    res.json({message:"hehe  ia am happy huhuhu"});
})
app.listen(PORT,(error)=>{
    error
    ?console.log(error)
    :console.log(`Server running at http://localhost:${PORT}`);
});