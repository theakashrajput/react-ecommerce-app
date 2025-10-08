import { config } from "dotenv";
config();

const dotenv = {
    PORT: process.env.PORT,
    MONGOOSE_URI: process.env.MONGOOSE_URI,
    JWT_SECRET: process.env.JWT_SECRET,
}

export default dotenv;