import { Router } from "express";
import auth_by_email_password from "../helper/auth_by_email_password.js";
import { nanoid } from "nanoid";
import { USERS_DATA } from "../bbdd.js";

// To store sessionIDs
const session_IDs = [];
const auth_session_router = Router();

// Authenticated endpoint
auth_session_router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send();

  try {
    const user_data = auth_by_email_password(email, password);
    const guid = user_data.guid;
    // Create a unique session ID
    const session_id = nanoid();
    session_IDs.push({ session_id, guid });

    // Settee it on a cookie
    res.cookie("session_id", session_id, {
      // So that it cannot be read from the client with JS (Cross-Site Scripting (XSS) attacks)
      httpOnly: true,
    });
    res.send(`You have been successfully authenticated ${user_data.name}`);
  } catch (err) {
    return res.status(401).send();
  }
});

// Obtain data while already authenticated with session
auth_session_router.get("/profile", (req, res) => {
  // A middleware is needed to read the cookie
  console.log(req.cookies);
  const { cookies } = req;

  if (!cookies.session_id) return res.status(401).send();
  // Validate that the sessionID sent is valid.
  const user_session = session_IDs.find(
    (session) => session.session_id === cookies.session_id
  );
  if (!user_session) return res.status(401).send();

  const user_data = USERS_DATA.find((user = user.guid === user_session.guid));

  return res.send(`Welcome back ${user_data.name}`);
});

export default auth_session_router;
