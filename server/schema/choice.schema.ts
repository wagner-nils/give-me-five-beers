import { Schema, Types } from 'mongoose';

export const choiceSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'user',
  },
  type: {
    type: String,
    required: true,
  },
  choiceId: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
