import { Router } from "express";
import { signup, login } from "../controllers/auth.controllers.js";
import { pool } from "../db.js";

const router = Router();

router.get("/test", async (req, res) => {
    const [result] = await pool.query("SELECT * FROM `User`");
    return res.json(result);
  });

router.post("/signup", signup);
router.post("/login", login);
export default router;