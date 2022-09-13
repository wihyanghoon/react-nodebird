module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(Post,{ // MySQL 에는 user 테이블 생성
        content:{},
    }, {
        charset: "Utf8mb4",
        collate: 'Utf8mb4_general_ci',
    })
    Post.associate = (db) => {};
    return Post
}