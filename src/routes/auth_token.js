import { Router } from "express";
import auth_by_email_password  from "../helper/auth_by_email_password.js";

const auth_session_router = Router();

// Authenticated endpoint
auth_router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send();
  
  try{
    const user_data = auth_by_email_password(email, password);
    
    //User has passed authentication
    res.send(`You have been successfully authenticated ${user_data.name}`);
  } catch (err) {
     return res.status(401).send();
  }
});

export default auth_session_router;