import dotenv from "./config.js";
import app from "./app.js";

app.listen(process.env.PORT, ()=>console.log("server on port", process.env.PORT))