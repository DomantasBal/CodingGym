const express = require('express');
const router = express.Router();

const Idea = require('../models/Idea');

// PLACEHOLDER
const ideas = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nihil.',
    tag: 'Inventions',
    username: 'user1',
    date: '2025-01-01',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nihil.',
    tag: 'soft',
    username: 'user2',
    date: '2025-01-01',
  },
];

// Get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, err: err });
  }
});

// Get single idea
router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (err) {
    res.status(500).json({ success: false, err: 'something went wrong' });
    console.log(err);
  }
});

// Add an idea
router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (err) {
    res.status(500).json({ success: false, err: 'something went wrong' });
    console.log(err);
  }
});

// Update idea
router.put('/:id', async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      {
        new: true,
      }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (err) {
    res.status(500).json({ success: false, err: 'something went wrong' });
    console.log(err);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, err: 'something went wrong' });
    console.log(err);
  }
});

module.exports = router;
