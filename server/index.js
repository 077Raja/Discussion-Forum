const express = require("express")
const connect=require('./config');
const cors = require("cors")
const loginRouter = require('./router/login');
const registerRouter = require('./router/register');
const createPostRouter = require('./router/post');
const homeRouter = require('./router/home');
const commentRouter = require('./router/getComments')
connect();

const app = express()
app.use(express.json())
app.use(cors())

app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/createPost', createPostRouter)
app.use('/home', homeRouter)
app.use('/getComment', commentRouter)

const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
