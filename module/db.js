const {Sequelize}=require('sequelize')




const sequelize=new Sequelize('testdb','root','siba',{
    host:'localhost',
    dialect:'mysql'
});

module.exports=sequelize






















// const mysql=require('mysql2')

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:"root",
//     password:"siba",
//     database:"testdb"
// })


// module.exports=connection