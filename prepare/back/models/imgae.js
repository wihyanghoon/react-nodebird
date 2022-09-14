module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image',{ // MySQL 에는 user 테이블 생성
        content:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: "Utf8",
        collate: 'Utf8', // 이모티콘 저장
    })
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post)
    };
    return Image
}