//to establish connection with mongo db

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`database connected ${conn.connection.host}`.bgCyan.white)
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDB;