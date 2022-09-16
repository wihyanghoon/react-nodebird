const express = require('express');
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

const db = require('./models');
const passportConfig = require('./passport');

const { urlencoded } = require('express');
const app = express();
const cors = require('cors')
const passport = require('passport');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')

dotenv.config();

db.sequelize.sync()
    .then(() => {
        console.log('db 연결성공')
    })
    .catch(console.error)

passportConfig();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('nodebirdsecret'))
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET
}))
app.use(passport.initialize())
app.use(passport.session());

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