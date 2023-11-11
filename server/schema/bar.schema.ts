import { Schema, Types } from 'mongoose';

export const barSchema = new Schema({
  formattedAddress: String,
  name: String,
  placeId: String,
  url: String,
  website: String,
  wheelchairAccessibleEntrance: Boolean,
  city: String,
  country: String,
});
