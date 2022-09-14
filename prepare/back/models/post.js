module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // MySQL 에는 user 테이블 생성
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: "Utf8mb4",
        collate: 'Utf8mb4_general_ci', // 이모티콘 저장
    })
    Post.associate = (db) => {
        db.Post.belongsTo(db.User)
        db.Post.hasMany(db.Comment)
        db.Post.hasMany(db.Image)
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' })
        db.Post.belongsToMany(db.User, { through: 'Like', as: "Likers" })
        db.Post.belongsTo(db.Post, { as: "Retweet" })
    }
    return Post
}