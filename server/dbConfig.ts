const mongoose = require('mongoose');

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log('🐸 mongoose connected to give me five beers!');
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
