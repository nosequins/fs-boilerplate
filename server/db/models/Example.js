const {Sequelize, DataTypes} = require("sequelize") //for things like Sequelize.STRING
const db = require('../db')
//import your db

//define your model

//define any class or instance methods

//export your model

const Campus= db.define('campuses',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    imageUrl:{
        type: DataTypes.STRING,
        defaultValue: 'campus.jpg'
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    description:{
        type: DataTypes.TEXT
    }

});

const Student= db.define('students',{
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: false
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        }

    },
    imageUrl:{
        type: DataTypes.STRING,
        defaultValue:'studentprof.jpg'
    },
    gpa:{
        type: DataTypes.FLOAT,
        validate:{
            isFloat: true,
            min: 0.0,
            max: 4.0
        }
    }
})

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports={
    Campus, Student, db
}