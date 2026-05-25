const express=require('express')
const database=require('./module/db')
const createStudentTable= require('./module/studentModel')
const Studentrouter=require('./routers/studentsRouter')

const app=express()
const port=3000
app.use(express.json())
app.use("/student",Studentrouter)
app.get('/',(req,res)=>{
    res.send('Wellcom home page')
})
app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

database.connect((err)=>{
  if(err){
    console.log('database connection failed:',err);
    return
  }
  console.log('Database connected');
  createStudentTable()
  app.listen(port,()=>{
  console.log(`server run on ${port}`);
  
})
})
