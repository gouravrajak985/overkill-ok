import mongoose, { Schema, Document } from 'mongoose';

export interface IOrganization extends Document {
  name: string;
  description: string;
  logo?: string;
  banner?: string;
  website?: string;
  foundedDate: Date;
  owner: mongoose.Types.ObjectId;
  admins: mongoose.Types.ObjectId[];
  members: mongoose.Types.ObjectId[];
  pendingInvites: mongoose.Types.ObjectId[];
  games: string[];
  achievements: {
    name: string;
    description: string;
    icon: string;
    earnedAt: Date;
  }[];
  socialLinks: {
    twitter?: string;
    discord?: string;
    twitch?: string;
    youtube?: string;
  };
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const OrganizationSchema = new Schema<IOrganization>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, maxlength: 1000 },
  logo: { type: String },
  banner: { type: String },
  website: { type: String },
  foundedDate: { type: Date, default: Date.now },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  pendingInvites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  games: [{ type: String }],
  achievements: [{
    name: String,
    description: String,
    icon: String,
    earnedAt: { type: Date, default: Date.now }
  }],
  socialLinks: {
    twitter: String,
    discord: String,
    twitch: String,
    youtube: String
  },
  isVerified: { type: Boolean, default: false },
}, {
  timestamps: true
});

export default mongoose.models.Organization || mongoose.model<IOrganization>('Organization', OrganizationSchema);