import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import { User } from './models/User.js';
// import {sequelize} from "./db/connect.js";

import { Server as httpServer } from 'http';
import cors from 'cors';
import { Server as socketIO } from 'socket.io';

const app = express();
const http = httpServer(app);

const io = new socketIO(http, {
    cors: {
        origin: 'https://localhost:3000'  // fixed typo from 'orginal' to 'origin'
    }
});
const PORT = 5000

io.on('connection',(socket)=>{
    console.log(`${socket.id}} connected`)
    socket.on('disconnect',()=>{
        console.log(`${socket.id}} disconnected`)

    })
})


// Test the connection
// sequelize.authenticate()
//     .then(async () => {
//       console.log('Connection has been established successfully.');
//         // import { User } from './models/User.js';
//         const newUser = await User.create({
//             username: 'john_doe',
//             firstName: 'asd',
//             lastName: 'asd',
//         });
//     })
//     .catch((error) => {
//       console.error('Unable to connect to the database:', error);
//     });

// View engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// // Middleware
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });
//
// // Error handler
// app.use((err, req, res, next) => {
//   // Provide error message only in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // Render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('api',(req,res)=>{
    res.json({massage:'asda'})
})

http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
