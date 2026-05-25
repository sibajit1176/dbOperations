const express=require('express')
const router=express.Router()
const studentControler=require('../controlers/studentcontroller')


router.post('/addUser',studentControler.addStudent)
router.get('/getUser',studentControler.getStudents)
router.post('/updateUser',studentControler.updateStudent)
router.delete('/deleteUser/:id',studentControler.deleteStudent)

module.exports=router