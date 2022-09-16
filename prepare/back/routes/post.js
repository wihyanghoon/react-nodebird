const express = require('express')
const { Post, Comment, Image, User } = require('../models')
const { isLoggedIn } = require('./middlewares')

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: Image,
            }, {
                model: Comment,
            }, {
                model: User,
            }]
        })
        res.status(201).json(fullPost)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

router.post('/:postId/comment', isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId }
        })
        if(!post){
            return res.status(403).send('존재하지 않는 게시글 입니다.')
        }
        const commnet = await Commnet.create({
            content: req.body.content,
            PostId: req.params.postId,
        })
        res.send.status(201).json(commnet)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

module.exports = router;