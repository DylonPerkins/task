module.exports = (sequelize, DataTypes) =>{
const Posts = sequelize.define('PostJob',{
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    requirments: DataTypes.STRING,
    image: DataTypes.STRING
})
return Posts
}

