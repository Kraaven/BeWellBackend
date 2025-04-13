// Updated Post Route: routes/postRoute.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Post from '../models/Post.js';
import Disease from '../models/Disease.js';

const router = express.Router();

// GET /api/post/:postID - Get post by ID
router.get('/:postID', async (req, res) => {
  try {
    const post = await Post.findOne({ PostID: req.params.postID });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/post/make - Create a new post
// POST /api/post/make - Create a new post
router.post('/make', async (req, res) => {
  try {
    const { Title, Description, PostType, ParentID, PostTopic } = req.body;

    const newPostID = uuidv4();

    // Validate PostType
    if (!['Post', 'Comment', 'Reply'].includes(PostType)) {
      return res.status(400).json({ message: 'Invalid PostType' });
    }

    // Switch logic for different types of posts
    switch (PostType) {
      case 'Post':
        if (!Title || !Description || !PostTopic) {
          return res.status(400).json({ message: 'Post requires Title, Description, and PostTopic' });
        }

        // Check if disease exists
        const disease = await Disease.findOne({ name: PostTopic });
        if (!disease) {
          return res.status(404).json({ message: `Disease '${PostTopic}' not found` });
        }
        break;

      case 'Comment':
      case 'Reply':
        if (!Description || !ParentID) {
          return res.status(400).json({ message: `${PostType} requires Description and ParentID` });
        }

        // Validate parent
        const parentPost = await Post.findOne({ PostID: ParentID });
        if (!parentPost) {
          return res.status(404).json({ message: 'Parent post not found' });
        }

        // Update parent's children list
        await Post.updateOne(
          { PostID: ParentID },
          { 
            $push: { PostChildrenIds: newPostID },
            $set: { updatedAt: new Date() }
          }
        );

        break;
    }

    // Create the post
    const newPost = new Post({
      PostID: newPostID,
      PostType,
      PostTitle: PostType === 'Post' ? Title : '',
      PostBody: Description,
      PostChildrenIds: [],
      Likes: 0,
      Dislikes: 0,
      ParentID: ParentID || null,
      PostTopic: PostType === 'Post' ? PostTopic : undefined
    });

    await newPost.save();
    res.status(201).json({ CreatedPostID: newPostID });

  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// GET /api/post - Get all root posts (no parent)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({ PostType: 'Post' })
      .sort({ updatedAt: -1 })
      .limit(20);
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/by-disease/:diseaseName', async (req, res) => {
  try {
    const diseaseName = req.params.diseaseName;
    const { indexfrom = 0, retrievenumber = 10 } = req.body;

    // Check if disease exists
    const diseaseExists = await Disease.findOne({ name: diseaseName });
    if (!diseaseExists) {
      return res.status(404).json({ message: `Disease '${diseaseName}' not found` });
    }

    // Get top-level posts (no parent)
    const posts = await Post.find({ 
        PostType: 'Post', 
        PostTopic: diseaseName, 
        ParentID: null 
      })
      .sort({ updatedAt: -1 })
      .skip(Number(indexfrom))
      .limit(Number(retrievenumber));

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts for disease:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/post/under-post/:parentPostID
router.post('/under-post/:parentPostID', async (req, res) => {
  try {
    const parentPostID = req.params.parentPostID;
    const { indexfrom = 0, retrievenumber = 10 } = req.body;

    // Validate parent post
    const parentPost = await Post.findOne({ PostID: parentPostID });
    if (!parentPost) {
      return res.status(404).json({ message: 'Parent post not found' });
    }

    // Get children posts (comments/replies)
    const childPosts = await Post.find({ ParentID: parentPostID })
      .sort({ updatedAt: -1 })
      .skip(Number(indexfrom))
      .limit(Number(retrievenumber));

    res.status(200).json(childPosts);
  } catch (error) {
    console.error('Error fetching child posts:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export const postRoutes = router;