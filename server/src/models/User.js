module.exports = (sequelize, DataTypes) => 
sequelize.define('User',{
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    address: DataTypes.STRING,
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    username : DataTypes.STRING,
    password: DataTypes.STRING,
    pdf: DataTypes.STRING
})
