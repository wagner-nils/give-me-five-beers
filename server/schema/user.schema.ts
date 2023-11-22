import { Schema, Types } from 'mongoose';

export const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  todo: [
    {
      type: Types.ObjectId,
      ref: 'todo',
    },
  ],
  choice: [
    {
      type: Types.ObjectId,
      ref: 'choice',
    },
  ],
  wishlist: [
    {
      type: Types.ObjectId,
      ref: 'choice',
    },
  ],
  config: {
    time: {
      type: String,
      default: '18:00',
    },
  },
  token: { type: String },
});
