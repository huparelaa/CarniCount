import { Router } from "express";
import { signup, login } from "../controllers/auth.controllers.js";
import { pool } from "../db.js";
import { addComsumption, viewConsumptionHistory } from "../controllers/consumption.js";
import { getUserInfo } from "../controllers/userInfo.js";

const router = Router();

router.get("/test", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM `User`");
  return res.json(result);
});
//User
router.get("/getUserInfo/:user_id", getUserInfo)
router.post("/signup", signup);
router.post("/login", login);

//Consumption
router.post("/consumption/add", addComsumption);
router.get("/consumption/view/:user_id", viewConsumptionHistory)
export default router;
