const db=require('../module/db')
const Student=require('../module/studentModel')
// const addStudent=((req,res)=>{
//   const {name,email} = req.body
//   const insertQuery='INSERT INTO students(email,name) VALUES(?,?)'
//   db.execute(insertQuery,[email,name],(err)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).send(err.message)
//         db.end()
//         return;
//     }
//     console.log('Value has been inserted');
//             res.status(200).send(`${name} added`)
//   })
// })
const addStudent=async (req,res)=>{
  try {
    const {email,name}=req.body
    const student=await Student.create({
      name:name,
      email:email
    })
   await student.save()
    res.status(200).json(student)
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
}
// const getStudents = (req, res) => {

//     const query = `SELECT * FROM Students`;

//     db.query(query, (err, result) => {

//         if (err) {
//             console.log(err.message);
//             return res.status(500).send(err.message);
//         }

//         res.status(200).json(result);
//     });
// };
const getStudents =async (req, res)=>{
  try {
    const getData= await Student.findAll()
    res.status(200).send(getData)
  } catch (error) {
    console.log(error);
    res.status(400).send(error)
  }
}
// const updateStudent=((req,res)=>{
//   const {name,email,id} = req.body
//   const updateQuery='UPDATE students SET name=? , email=?  WHERE id=?'
//   db.execute(updateQuery,[name,email,id],(err,result)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).send(err.message)
//         db.end()
//         return;
//     }
//     if(result.affectedRows==0){
//               res.status(400).send('Student not found')
//               return
//     }
//     console.log('Value has been updated');
//             res.status(200).send(`${name} updated`)
//   })
// })
const updateStudent=async(req,res)=>{
 try {
  const {id}=req.params
  const {name,email}=req.body
  const findeStudent= await Student.findOne({where:{
      id:id
   }})
  if(!findeStudent){
    res.status(404).send('User not found')
    return
  }
  await Student.update({
    name:name??findeStudent.name,
    email:email?? findeStudent.email
  },{
    where:{
      id:id
    }
  })
    res.status(200).json("Data updated")
 } catch (error) {
   console.log(error);
    res.status(400).send(error)
 }
}
// const deleteStudent=((req,res)=>{
//   const {id} = req.params
//   const deleteQuery='DELETE FROM students WHERE id=?'
//   db.execute(deleteQuery,[id],(err)=>{
//     if(err){
//         console.log(err.message);
//         res.status(500).send(err.message)
//         db.end()
//         return;
//     }
//     console.log('Value has been inserted');
//             res.status(200).send(`${id} deleted`)
//   })
// })
const deleteStudent=async (req,res)=>{
  try {
    const {id} = req.params
     const findeStudent= await Student.findOne({where:{
      id:id
   }})
  if(!findeStudent){
    res.status(404).send('User not found')
    return
  }
  await Student.destroy({
    where:{
      id:id
    }
  })
  console.log('Value has been inserted');
           res.status(200).send(`${id} deleted`)
  } catch (error) {
    console.log(err.message);
     res.status(500).send(err.message)
  }
}
const getStudentDetails=((req,res)=>{
  const {id} = req.params
  const getQuery='SELECT * FROM students WHERE id=?'
  db.execute(getQuery,[id],(err,result)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message)
        db.end()
        return;
    }
    if(result.affectedRows==0){
              res.status(400).send('Student not found')
              return
    }
            res.status(200).send(result)
  })
})

module.exports={
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent,
    getStudentDetails
}