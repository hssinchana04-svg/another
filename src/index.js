import dotenv from "dotenv";

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})




connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  })
})
.catch((err) => {
  console.log("mongodb connection FAILED!!", err)
})






// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";

// import express from "express";
// const app = express();

// ( async () => {
//   try{
//     await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
//     app.on("error", () =>{
//       console.log("error");
//       throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`server is running on port ${process.env.PORT}`);
//     }
//   )
  
//   }catch(err){
//     console.log("error", error)
//     throw err
//   }
// }) ()