module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment',{ // MySQL 에는 user 테이블 생성
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: "Utf8mb4",
        collate: 'Utf8mb4_general_ci',
    })
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User)
        db.Comment.belongsTo(db.Post)
    };
    return Comment
}