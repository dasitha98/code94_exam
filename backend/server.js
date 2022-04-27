const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

const recipe = require('./api/recipe.api');

dotenv.config();
app.use(cors());
app.use(bodyparser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 5000;
const url = process.env.MONGO_DB;

mongoose.connect(url,
    {
   // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useFindAndModify: false
});


mongoose.connection.once('open', () => {
    console.log('mongodb successfull');
})

app.use('/recipe', recipe());


app.listen(port, () =>{
    console.log(`server successfull ${port}`);
})