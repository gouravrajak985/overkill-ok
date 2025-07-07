import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  author: mongoose.Types.ObjectId;
  content: string;
  images?: string[];
  video?: string;
  gameTag?: string;
  likes: mongoose.Types.ObjectId[];
  comments: {
    author: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }[];
  reposts: mongoose.Types.ObjectId[];
  isRepost: boolean;
  originalPost?: mongoose.Types.ObjectId;
  visibility: 'public' | 'followers' | 'organization';
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<IPost>({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true, maxlength: 1000 },
  images: [{ type: String }],
  video: { type: String },
  gameTag: { type: String },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, maxlength: 500 },
    createdAt: { type: Date, default: Date.now }
  }],
  reposts: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  isRepost: { type: Boolean, default: false },
  originalPost: { type: Schema.Types.ObjectId, ref: 'Post' },
  visibility: { type: String, enum: ['public', 'followers', 'organization'], default: 'public' },
}, {
  timestamps: true
});

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);