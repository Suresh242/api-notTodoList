import express from "express";
const app = express();
const PORT = 8000;
import morgan from "morgan";
// middleware
app.use(morgan('dev'));
app.use(express.json())
// api endpoints
import taskRouter from './src/router/taskRouter.js'
app.use("/api/v1/task",taskRouter)

//workflow;Crud
//C(create)=>receive new task and stores in the database

app.listen(PORT,(error)=>{
    error
    ?console.log(error)
    :console.log(`Server running at http://localhost:${PORT}`);
});