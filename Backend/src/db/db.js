import mongoose from "mongoose";
import dotenv from "../../config/env.config.js";


const connectToDB = () => {
    mongoose.connect(dotenv.MONGOOSE_URI)
        .then(() => console.log("Connected to DB"))
        .catch(err => console.log(err.message))
};

export default connectToDB;