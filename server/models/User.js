const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    "miniprojectt",
    "root",
    "Apples123mysql",
    {
        host : "localhost",
        dialect : "mysql"
    }
)

const user = sequelize.define(
    "User",
    {
        Aadhar_No: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Contact_No: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)

module.exports = user;