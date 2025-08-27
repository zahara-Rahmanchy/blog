import {Server} from "http";
import app from "./app";
import mongoose from "mongoose";
import 'dotenv/config';
async function main() {
  try {
    const uri = process.env.DATABASE_URL
    await mongoose.connect(uri as string);
    // logRoutes(app);
    app.listen(process.env.PORT, () => {
      console.log(
        `Blogs System listening on port ${process.env.PORT}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
