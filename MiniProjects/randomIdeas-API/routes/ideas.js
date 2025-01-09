const express = require('express');
const router = express.Router();

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
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'resource not found' });
  }

  res.json({ success: true, data: idea });
});

module.exports = router;
