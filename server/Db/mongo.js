import mongoose from 'mongoose';

const connectMongo = async () => {
  mongoose.set('strictQuery', true);
  await mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`mongodb is connected at ${data.connection.host}`);
    })
    .catch((error) => {
      console.log(`ther is an error`);
    });
};
export default connectMongo;
