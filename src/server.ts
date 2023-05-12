import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/explore-mongoose");
    console.log("Database connection successful");

    app.listen(port, () => {
      console.log(`explore mongoose listening on port ${port}`);
    });
  } catch (err) {
    console.log("Failed", err);
  }
}

bootstrap();
