require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Models
const Project = require('./models/Project');

const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- ROUTES ---

// Root route (Home)
app.get('/', (req, res) => {
    res.send('Hello! The API server is running.');
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'Online', message: 'Ismam.AI Backend is running!' });
});

// Create a new project
app.post('/api/projects', async (req, res) => {
    try {
        const { title, content, userId, type } = req.body;

        if (!title || !userId) {
            return res.status(400).json({ error: "Title and userId are required." });
        }

        const newProject = new Project({ title, content, userId, type });
        await newProject.save();
        res.status(201).json({ message: "Project saved to MongoDB!", project: newProject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all projects (or filter by userId: /api/projects?userId=123)
app.get('/api/projects', async (req, res) => {
    try {
        const query = req.query.userId ? { userId: req.query.userId } : {};
        const projects = await Project.find(query);
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a project by ID
app.put('/api/projects/:id', async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        if (!updatedProject) return res.status(404).json({ error: "Project not found" });
        res.json({ message: "Project updated!", project: updatedProject });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a project by ID
app.delete('/api/projects/:id', async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) return res.status(404).json({ error: "Project not found" });
        res.json({ message: "Project deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- SERVER & DATABASE CONNECTION ---
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("❌ Missing MongoDB URI. Please check your .env file.");
    process.exit(1);
}

mongoose.connect(mongoURI)
    .then(() => {
        console.log("✅ MongoDB Connection Established");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error("❌ MongoDB Connection Error:", err));
