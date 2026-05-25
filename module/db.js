const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"siba",
    database:"testdb"
})


module.exports=connection