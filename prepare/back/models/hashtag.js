module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag',{ // MySQL 에는 user 테이블 생성
        name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: "Utf8",
        collate: 'Utf8_general_ci',
    })
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };
    return Hashtag
}