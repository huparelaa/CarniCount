import { Router } from "express";
import { signup, login } from "../controllers/auth.controllers.js";
import { pool } from "../db.js";
import { addComsumption } from "../controllers/consumption.js";
import { getUserInfo } from "../controllers/userInfo.js";

const router = Router();

router.get("/test", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `User`");
  return res.json(result);
});

router.get("/getUserInfo/:user_id", getUserInfo)

router.post("/signup", signup);
router.post("/login", login);
router.post("/consumption/add", addComsumption);
export default router;
