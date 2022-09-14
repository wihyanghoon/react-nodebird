module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag',{ // MySQL 에는 user 테이블 생성
        content:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: "Utf8",
        collate: 'Utf8', // 이모티콘 저장
    })
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post)
    };
    return Hashtag
}