import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRouter from './routes/bookroutes.js';
import readersRouter from './routes/readersRoutes.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4007;

// ===== Connect to DB ===== //
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to mongodb`);
} catch (error) {
    console.error(error);  
}

// ===== Middlewares ===== //
app.use(morgan('dev')); // logger
app.use(express.json()); // parse data to the body
app.use(express.urlencoded({extended: true}));

//==========ROUTES===========//

app.get('/', (req, res) => {
    res.send('Welcome To the Books Database!')
});

app.use('/api/books', bookRouter);
app.use('/api/readers', readersRouter);


// ===== Error Middlewares ===== //
app.use((e, req, res, next) => {
    console.error(e);
    res.status(500).json({message: e.message, error: e });
});


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))