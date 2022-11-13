import express from 'express'
const router =express.Router()
router.post("/",(req,res)=>{
    res.json({message:"hehe"});
})

// R(Read)=>read data from data base and return to the client
router.get("/",(req,res)=>{
    res.json({message:"hehe"}); 
})
//U(Update)=>update some information of existing data int the database and respond client accordingly
router.put("/",(req,res)=>{
    res.json({message:"update entire file"});
})
//D(Delete)=> delete data(s)from databaseand response client accordingly
router.delete("/",(req,res)=>{
    res.json({message:"hehe  ia am happy huhuhu"});
})
export default router