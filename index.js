const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.use(cors())

app.get('/courses', (req, res) =>{
    res.send(courses);
});

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = news.find(n=> n._id === id)
    res.send(selectedCourse);
});

app.listen(port, ()=>{
    console.log('node modules removed')
})