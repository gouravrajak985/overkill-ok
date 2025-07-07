import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  image?: string;
  bio?: string;
  location?: string;
  website?: string;
  gamertag: string;
  level: number;
  experience: number;
  role: 'user' | 'org_admin' | 'super_admin';
  skills: string[];
  achievements: {
    id: string;
    name: string;
    description: string;
    icon: string;
    earnedAt: Date;
  }[];
  gameStats: {
    game: string;
    rank: string;
    hoursPlayed: number;
    achievements: number;
  }[];
  followers: mongoose.Types.ObjectId[];
  following: mongoose.Types.ObjectId[];
  organizations: mongoose.Types.ObjectId[];
  twitchUrl?: string;
  youtubeUrl?: string;
  discordTag?: string;
  steamProfile?: string;
  isLive: boolean;
  liveStreamUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String },
  bio: { type: String, maxlength: 500 },
  location: { type: String },
  website: { type: String },
  gamertag: { type: String, required: true, unique: true },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  role: { type: String, enum: ['user', 'org_admin', 'super_admin'], default: 'user' },
  skills: [{ type: String }],
  achievements: [{
    id: String,
    name: String,
    description: String,
    icon: String,
    earnedAt: { type: Date, default: Date.now }
  }],
  gameStats: [{
    game: String,
    rank: String,
    hoursPlayed: Number,
    achievements: Number
  }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  organizations: [{ type: Schema.Types.ObjectId, ref: 'Organization' }],
  twitchUrl: { type: String },
  youtubeUrl: { type: String },
  discordTag: { type: String },
  steamProfile: { type: String },
  isLive: { type: Boolean, default: false },
  liveStreamUrl: { type: String },
}, {
  timestamps: true
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);