import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  sender: mongoose.Types.ObjectId;
  content: string;
  type: 'text' | 'image' | 'file';
  readBy: {
    user: mongoose.Types.ObjectId;
    readAt: Date;
  }[];
  createdAt: Date;
}

export interface IChat extends Document {
  participants: mongoose.Types.ObjectId[];
  isGroupChat: boolean;
  groupName?: string;
  groupImage?: string;
  admin?: mongoose.Types.ObjectId;
  messages: IMessage[];
  lastMessage?: mongoose.Types.ObjectId;
  lastActivity: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ['text', 'image', 'file'], default: 'text' },
  readBy: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    readAt: { type: Date, default: Date.now }
  }],
}, {
  timestamps: true
});

const ChatSchema = new Schema<IChat>({
  participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  isGroupChat: { type: Boolean, default: false },
  groupName: { type: String },
  groupImage: { type: String },
  admin: { type: Schema.Types.ObjectId, ref: 'User' },
  messages: [MessageSchema],
  lastMessage: { type: Schema.Types.ObjectId },
  lastActivity: { type: Date, default: Date.now },
}, {
  timestamps: true
});

export default mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema);