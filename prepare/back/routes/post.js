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
                include: [{
                    model: User,
                    attributes: ['id', 'nickname']
                }]
            }, {
                model: User,
                attributes: ['id', 'nickname']
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }]
        })
        res.status(201).json(fullPost)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

router.delete('/:PostId', isLoggedIn, async (req, res, next) => {
    try {
        await Post.destroy({
            where: { 
                id: req.params.PostId,
                UserId: req.user.id
            },
        })
        res.status(201).json({ PostId: parseInt(req.params.PostId, 10) })
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
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글 입니다.')
        }
        const commnet = await Comment.create({
            content: req.body.content,
            PostId: Number(req.params.postId),
            UserId: req.user.id,
        })
        const fullComment = await Comment.findOne({
            where: { id: commnet.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname']
            }]
        })
        res.status(201).json(fullComment)
    } catch (error) {
        console.error(error)
        next(error)
    }
})

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => { // PATCH /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', (req, res, next) => {

})

module.exports = router;