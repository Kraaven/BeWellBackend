import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  PostID: { type: String, required: true, unique: true },
  PostType: { 
    type: String, 
    required: true, 
    enum: ['Post', 'Comment', 'Reply'] 
  },
  PostTitle: { type: String, required: false },
  PostBody: { type: String, required: true },
  PostChildrenIds: [{ type: String, default: [] }],
  Likes: { type: Number, default: 0 },
  Dislikes: { type: Number, default: 0 },
  ParentID: { type: String },
  PostTopic: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Post', PostSchema);