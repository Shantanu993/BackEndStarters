// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

// Professional Approach
dotenv.config({
    path: './.env'
})

// OR dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Error connecting to db", err);
}
)




/*
 // This is one approach to connect to the database


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express();

(async()=>{
    // console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.error("Error", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error", error)
    }
})()
*/
