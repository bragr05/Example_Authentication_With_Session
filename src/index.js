import express from "express";
import dotenv from "dotenv";
import auth_session_router from "./routes/auth_session.js";
import auth_token_router from "./routes/auth_token.js";

// Load environment variables into global variables
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.text());
app.use("/auth-session", auth_session_router);
app.use("/auth-token", auth_token_router);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
