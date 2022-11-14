import express from 'express'
const router =express.Router()
//fake database
let fakeTaskTable =[
    {   "_id":1,
        "task":"washing",
        "hr":44,
        "type":"bad"
      },
      {"_id":2,
        "task":"cooking",
        "hr":44,
        "type":"bad"
      },
      {"_id":3,
        "task":"coding",
        "hr":44,
        "type":"bad"
      }
]

router.post("/",(req,res)=>{
    console.log(req.body)
    fakeTaskTable.push(req.body)
    res.json({message:"hehe", status:"success"});
})

// R(Read)=>read data from data base and return to the client
router.get("/",(req,res)=>{

    res.json({
        status:"success",
        message:"hehe",
        data:fakeTaskTable
}); 
})
//U(Update)=>update some information of existing data int the database and respond client accordingly
router.put("/",(req,res)=>{
    const { _id, type}= req.body
    console.log(req.body)
    fakeTaskTable =fakeTaskTable.map((item)=>{
      if(item._id==_id){
         item.type=type
      }
      return item
    })
    res.json({message:"update entire file",status:"success"});
})
//D(Delete)=> delete data(s)from databaseand response client accordingly
router.delete("/:_id?",(req,res)=>{
    const {_id} = req.params;
    // console.log(params)
    if(!_id){
        res.status(400).json({
            status:"error",
            message:"invalid request, _ID is missing"});
            return;
    }
    fakeTaskTable = fakeTaskTable.filter((item)=>item._id !=_id)
    
    res.json({message:"update entire file",status:"success"});
    
})
export default router