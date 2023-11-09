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
  // collection: [
  //   {
  //     type: Types.ObjectId,
  //     ref: 'BarModel',
  //   },
  // ],
  wishlist: [
    {
      type: Types.ObjectId,
      ref: 'BreweryModel',
    },
  ],
  configure: {
    time: {
      type: String,
      default: '18:00',
    },
  },
});
