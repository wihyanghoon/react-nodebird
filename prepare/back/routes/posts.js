const express = require('express')
const { Post } = require('../models')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            limit : 10,
            offset: 100,
        })
    } catch (error) {
        console.error(error)
        next(error)
    }
})