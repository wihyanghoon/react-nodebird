module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{ // MySQL 에는 user 테이블 생성
        email:{
            type: DataTypes.STRING(30), // STRING. TEXT. BLLEAN, FLOAT, DATETIME
            allowNullLL: false, // 필수
            unique: true // 고유한 값
        },
        nickname:{
            type: DataTypes.STRING(30),
            allowNullLL: false, // 필수
        },
        password:{
            type: DataTypes.STRING(100),
            allowNullLL: false, // 필수
        },
    }, {
        charset: "Utf8",
        collate: 'Utf8_general_ci',
    })
    User.associate = (db) => {
        db.User.hasMany(db.Post)
        db.User.hasMany(db.Comment)
        db.User.belongsToMany(db.Post, { through: 'Like', as:'Liked'})
        db.User.belongsToMany(db.User, { through: 'Follow', as:'Followers', foreignKey: 'FollowinfId'})
        db.User.belongsToMany(db.User, { through: 'Follow', as:'Followings', foreignKey: 'FollowerId'})
    };
    return User
}