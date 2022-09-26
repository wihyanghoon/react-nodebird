const express = require('express');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const morgan = require('morgan')
const db = require('./models');
const passportConfig = require('./passport');

const { urlencoded } = require('express');
const app = express();
const cors = require('cors')
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();
//시퀄라이저
db.sequelize.sync()
    .then(() => {
        console.log('db 연결성공')
    })
    .catch(console.error)

passportConfig();
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use('/', express.static(path.join(__dirname, 'uploads')))
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

app.use('/post', postRouter)
app.use('/posts', postsRouter)
app.use('/user', userRouter)

app.listen(3065, () => {
    console.log('서버 실행중!!')
});