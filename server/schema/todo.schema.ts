import { Schema, Types } from 'mongoose';

export const todoSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'progress',
  },
  date: {
    type: Date,
    default: new Date(),
  },
  user: {
    type: Types.ObjectId,
    ref: 'user', // model('this name', schema)
  },
});
