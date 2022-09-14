const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const db = require('./models');
const { urlencoded } = require('express');
const app = express();
const cors = require('cors')

db.sequelize.sync()
    .then(() => {
        console.log('db 연결성공')
    })
    .catch(console.error)

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/api', (req, res) => {
    res.send('hello express')
})

app.get('/api/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'hello1' },
        { id: 3, content: 'hello2' },
    ]);
});

app.use('/post', postRouter)
app.use('/user', userRouter)

app.listen(3065, () => {
    console.log('서버 실행중!!')
});