import mongoose, { Schema, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  description: string;
  organization: mongoose.Types.ObjectId;
  postedBy: mongoose.Types.ObjectId;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  requiredSkills: string[];
  experienceLevel: 'entry' | 'mid' | 'senior' | 'lead';
  gameGenres: string[];
  applications: {
    applicant: mongoose.Types.ObjectId;
    coverLetter: string;
    resume?: string;
    appliedAt: Date;
    status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  }[];
  isActive: boolean;
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['full-time', 'part-time', 'contract', 'remote'], required: true },
  salary: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'USD' }
  },
  requiredSkills: [{ type: String }],
  experienceLevel: { type: String, enum: ['entry', 'mid', 'senior', 'lead'], required: true },
  gameGenres: [{ type: String }],
  applications: [{
    applicant: { type: Schema.Types.ObjectId, ref: 'User' },
    coverLetter: String,
    resume: String,
    appliedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' }
  }],
  isActive: { type: Boolean, default: true },
  deadline: { type: Date },
}, {
  timestamps: true
});

export default mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);