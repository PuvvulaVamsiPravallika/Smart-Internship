const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to the Note-Taking App');
});

const noteRouter = require('./routes/note');
app.use('/api', noteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
