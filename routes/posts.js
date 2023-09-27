// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const app = express();

// Crear 
router.post('/', async (req, res) => {
  const post = new Post({
    name: req.body.name,
    contrasena: req.body.contrasena,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// Obtener Datos
router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Obtener de a uno post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Actualizar un dato por el ID
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { name: req.body.name, contrasena: req.body.contrasena } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// elimira un dato por Id
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});






module.exports = router;