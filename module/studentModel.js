const {Sequelize,DataTypes}=require('sequelize')
const sequelize=require('./db')

const students=sequelize.define('students',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})


module.exports=students
// const db=require('./db')

// const createStudentTable=()=>{
//     const query = `
//     CREATE TABLE IF NOT EXISTS students(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(150) NOT NULL,
//     email VARCHAR(250) NOT NULL UNIQUE

//     )
//     `
//     db.query(query,(err,res)=>{
//         if(err){
//         console.log("Student table error",err);
//         return;  
//         }
//         console.log("Student table created");
        
//     })
// }

// module.exports=createStudentTable