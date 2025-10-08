import app from "./src/app.js";
import dotenv from "./config/env.config.js";
import connectToDB from "./src/db/db.js";

connectToDB();

app.listen(dotenv.PORT, () => console.log(`Server is running on port ${dotenv.PORT}`));