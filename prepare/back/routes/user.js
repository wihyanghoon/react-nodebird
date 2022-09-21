const express = require('express')
const bcrypt = require('bcrypt')
const { User, Post } = require('../models')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.get('/login', async (req, res, next) => {
    try {
        if (req.user) {
            const user = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id']
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id']
                }]
            })
            res.status(200).json(user);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error)
        next(error)
    }

})

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err)
            return next(err)
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr)
                return next(loginErr)
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                }, {
                    model: User,
                    as: 'Followings',
                }, {
                    model: User,
                    as: 'Followers',
                }]
            })
            return res.status(200).json(fullUserWithoutPassword)
        })
    })(req, res, next)
})

router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('OK')
})

router.post('/', isNotLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (exUser) {
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({
            email: req.body.email,
            nickname: req.body.nick,
            password: hashedPassword,
        });
        res.status(201).send('ok');
    } catch (error) {
        console.error(error);
        next(error); // status 500
    }
})

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        console.log(req.body)
        await User.update({
            nickname: req.body.nickname
        }, {
            where: { id: req.user.id }
        })
        res.status(200).json({ nickname: req.body.nickname })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // 유저 팔로우
    try {
        const user = await User.findOne({ where: { id: req.params.userId } }) // 게시글 작성자 1번
        if (!user) {
            res.status(403).send('없는 유저입니다.')
        }
        await user.addFollowers(req.user.id); // 게시글 작성자를 팔로우한다 / 내 계정 정보를 넘김 // 팔로워 아이디 2번
        res.status(200).json({ userId: parseInt(req.params.userId, 10) })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // 유저 팔로우 취소
    try {
        const user = await User.findOne({ where: { id: req.params.userId } })
        if (!user) {
            res.status(403).send ('없는 유저입니다.')
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ userId: parseInt(req.params.userId, 10) })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.delete('/:userId/following', isLoggedIn, async (req, res, next) => { // 유저 팔로우 취소
    try {
        const user = await User.findOne({ where: { id: req.params.userId } })
        if (!user) {
            res.status(403).send ('없는 유저입니다.')
        }
        await user.removeFollowings(req.user.id);
        res.status(200).json({ userId: parseInt(req.params.userId, 10) })
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.get('/follower', isLoggedIn, async (req, res, next) => { 
    try {
        const user = await User.findOne({ where: { id: req.user.id } })
        if (!user) {
            res.status(403).send('없는 유저입니다.')
        }
        const followers = await user.getFollowers();
        res.status(200).json(followers)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.get('/following', isLoggedIn, async (req, res, next) => { 
    try {
        const user = await User.findOne({ where: { id: req.user.id } })
        if (!user) {
            res.status(403).send('없는 유저입니다.')
        }
        const followings = await user.getFollowings();
        res.status(200).json(followings)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => { 
    try {
        const post = await Post.findOne({ 
            where: { id: req.params.id },
            include: [{
                model: Post,
                as: 'Retweet',
            }]
        })
        if (!post) {
            res.status(403).send('존재하지 않은 게시글 입니다.')
        }
        const followings = await user.getFollowings();
        res.status(200).json(followings)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

module.exports = router;