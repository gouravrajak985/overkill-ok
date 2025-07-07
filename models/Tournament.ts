import mongoose, { Schema, Document } from 'mongoose';

export interface ITournament extends Document {
  title: string;
  description: string;
  game: string;
  organizer: mongoose.Types.ObjectId;
  organization?: mongoose.Types.ObjectId;
  banner?: string;
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date;
  maxParticipants: number;
  prizePool?: {
    total: number;
    currency: string;
    distribution: { place: number; amount: number }[];
  };
  rules: string;
  format: 'single-elimination' | 'double-elimination' | 'round-robin' | 'swiss';
  participants: {
    user: mongoose.Types.ObjectId;
    team?: string;
    registeredAt: Date;
    status: 'registered' | 'checked-in' | 'eliminated' | 'winner';
  }[];
  brackets?: any;
  streamUrl?: string;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TournamentSchema = new Schema<ITournament>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  game: { type: String, required: true },
  organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  banner: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  registrationDeadline: { type: Date, required: true },
  maxParticipants: { type: Number, required: true },
  prizePool: {
    total: Number,
    currency: { type: String, default: 'USD' },
    distribution: [{ place: Number, amount: Number }]
  },
  rules: { type: String, required: true },
  format: { type: String, enum: ['single-elimination', 'double-elimination', 'round-robin', 'swiss'], required: true },
  participants: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    team: String,
    registeredAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['registered', 'checked-in', 'eliminated', 'winner'], default: 'registered' }
  }],
  brackets: { type: Schema.Types.Mixed },
  streamUrl: { type: String },
  isActive: { type: Boolean, default: true },
  isFeatured: { type: Boolean, default: false },
}, {
  timestamps: true
});

export default mongoose.models.Tournament || mongoose.model<ITournament>('Tournament', TournamentSchema);