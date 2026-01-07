const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
res.send('School API is running');
});


const students = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
];
app.post('/api/students', (req, res) => {
const newStudent = {
id: students.length + 1,
name: req.body.name,
};


students.push(newStudent);
res.status(201).json(newStudent);
});


app.delete('/api/students/:id', (req, res) => {
const id = parseInt(req.params.id);
const index = students.findIndex(s => s.id === id);


if (index === -1) {
return res.status(404).json({ message: 'Student not found' });
}


students.splice(index, 1);
res.json({ message: 'Student deleted' });
});

app.get('/api/students', (req, res) => {
res.json(students);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));