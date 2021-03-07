module.exports = (sequelize, DataTypes) => 
sequelize.define('ApplyTracker',{
    UserID: DataTypes.STRING,
    PostID: DataTypes.STRING,
})