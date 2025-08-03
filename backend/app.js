import express from 'express'
import cors from 'cors'
import path from 'path';
import cookieParser from 'cookie-parser'

const __dirname = path.resolve();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // origin: 'https://pronetworker.netlify.app/',
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser())

// importing routes
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'

// routes declaration
app.use('/users', userRouter)
app.use('/posts', postRouter)


// Serve React build files
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// app.get(/^\/(?!api).*/, (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
// });


export { app }

// import express from 'express'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'

// const app = express();
// app.use(cors({
//     // origin: process.env.CORS_ORIGIN,
//     origin: 'http://localhost:5173',
//     credentials: true
// }));

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"))
// app.use(cookieParser())

// // importing routes
// import userRouter from './routes/user.route.js'
// import postRouter from './routes/post.route.js'

// // routes declaration
// app.use('/api/v1/users', userRouter)
// app.use('/api/v1/posts', postRouter)


// export { app }