module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(User,{ // MySQL 에는 user 테이블 생성
        email:{},
        nickaname:{},
        password:{},
    }, {
        charset: "Utf8",
        collate: 'Utf8_general_ci',
    })
    User.associate = (db) => {};
    return User
}