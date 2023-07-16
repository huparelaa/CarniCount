import { pool } from "../db.js";

export async function addComsumption(req, res) {
  try {
    const { user_id, weight, date } = req.body;
    const [result] = await pool.query(
      "INSERT INTO `Consumption`(user_id, weight, date) VALUES (?,?,?)",
      [user_id, weight, date]
    );
    res.json({
        message:"Success",
        id:result.insertId
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function viewConsumptionHistory(req,res){
  try {
    const user_id = req.params.user_id
    const [result] = await pool.query("SELECT * FROM `Consumption` WHERE user_id = ?",[user_id])
    return res.json({
      message:"Success",
      result
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
