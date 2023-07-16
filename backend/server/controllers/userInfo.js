import { pool } from "../db.js";

export async function getUserInfo(req, res) {
  try {
    const user_id = req.params.user_id;
    const [result] = await pool.query(
      "SELECT * FROM `User` WHERE user_id = ?",
      [user_id]
    );
    const { password, ...user } = result[0];//eliminate the password from the response
    res.json(user);//Get the unique person with te id (Array is not necessary)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
