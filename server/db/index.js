const db= require('./db');
const { Campus, Student } = require('./models/Example');
const syncAndSeed = require('./seed')
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {db, Student, Campus, syncAndSeed}
//import your db
//import your models

//state your model associations (hasOne etc)


//export your db and Models (so they all can be imported from a single central location)
