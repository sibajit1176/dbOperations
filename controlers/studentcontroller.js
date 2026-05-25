const connection = require('../module/db')
const db=require('../module/db')
const addStudent=((req,res)=>{
  const {name,email} = req.body
  const insertQuery='INSERT INTO students(email,name) VALUES(?,?)'
  db.execute(insertQuery,[email,name],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message)
        connection.end()
        return;
    }
    console.log('Value has been inserted');
            res.status(200).send(`${name} added`)
  })
})

const getStudents = (req, res) => {

    const query = `SELECT * FROM Students`;

    db.query(query, (err, result) => {

        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).json(result);
    });
};
const updateStudent=((req,res)=>{
  const {name,email,id} = req.body
  const updateQuery='UPDATE students SET name=? , email=?  WHERE id=?'
  db.execute(updateQuery,[name,email,id],(err,result)=>{
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
    console.log('Value has been updated');
            res.status(200).send(`${name} updated`)
  })
})
const deleteStudent=((req,res)=>{
  const {id} = req.params
  const deleteQuery='DELETE FROM students WHERE id=?'
  db.execute(deleteQuery,[id],(err)=>{
    if(err){
        console.log(err.message);
        res.status(500).send(err.message)
        db.end()
        return;
    }
    console.log('Value has been inserted');
            res.status(200).send(`${id} deleted`)
  })
})
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