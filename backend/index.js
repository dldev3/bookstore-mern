import express from 'express';
import { PORT, mongoUrl } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';

const app = express();

//middleware for parsing json body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome");

});

app.use('/books', booksRoute);




mongoose.connect(mongoUrl).then(() => {
    console.log("app connected to db");
    app.listen(PORT, () => {
        console.log(`App is running on port: ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});


