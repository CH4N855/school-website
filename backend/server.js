const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const Student = require('./models/Student');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/api/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.post('/api/students', async (req, res) => {
  const student = new Student({ name: req.body.name });
  const savedStudent = await student.save();
  res.status(201).json(savedStudent);
});

app.delete('/api/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

app.listen(5000, () => console.log('Server running on port 5001'));
